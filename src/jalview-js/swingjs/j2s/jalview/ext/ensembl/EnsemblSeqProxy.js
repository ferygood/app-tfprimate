(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'java.util.Arrays','jalview.ext.ensembl.EnsemblFeatures','jalview.util.Platform','jalview.ext.ensembl.EnsemblProtein','jalview.analysis.AlignmentUtils','jalview.datamodel.Mapping','jalview.datamodel.DBRefEntry','jalview.util.DBRefUtils','jalview.bin.Cache','jalview.ext.ensembl.EnsemblXref','jalview.datamodel.Alignment','jalview.datamodel.SequenceI','java.util.ArrayList','jalview.datamodel.Sequence','StringBuffer','java.net.URL','java.util.Collections','jalview.util.IntRangeComparator','jalview.util.MapList','jalview.datamodel.SequenceFeature','jalview.io.gff.SequenceOntologyFactory','StringBuilder','jalview.util.Comparison','jalview.analysis.Dna','jalview.datamodel.features.SequenceFeatures']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EnsemblSeqProxy", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.ext.ensembl.EnsemblRestClient');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.bhtest=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.bhtest=0;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (d) {
C$.superclazz.c$$S.apply(this, [d]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getSequenceRecords$S', function (query) {
var allIds=$I$(1).asList$TTA(query.split$S(this.getAccessionSeparator$()));
var alignment=null;
this.inProgress=true;
var maxQueryCount=this.getMaximumQueryCount$();
for (var v=0, vSize=allIds.size$(); v < vSize; v+=maxQueryCount) {
var p=Math.min(vSize, v + maxQueryCount);
var ids=allIds.subList$I$I(v, p);
try {
alignment=this.fetchSequences$java_util_List$jalview_datamodel_AlignmentI(ids, alignment);
} catch (r) {
this.inProgress=false;
var msg="Aborting ID retrieval after " + v + " chunks. Unexpected problem (" + r.getLocalizedMessage$() + ")" ;
System.err.println$S(msg);
r.printStackTrace$();
break;
}
}
if (alignment == null ) {
return null;
}for (var i=0, n=allIds.size$(); i < n; i++) {
this.addFeaturesAndProduct$S$jalview_datamodel_AlignmentI(allIds.get$I(i), alignment);
}
var seqs=alignment.getSequences$();
for (var i=0, n=seqs.size$(); i < n; i++) {
this.getCrossReferences$jalview_datamodel_SequenceI(seqs.get$I(i));
}
return alignment;
});

Clazz.newMeth(C$, 'addFeaturesAndProduct$S$jalview_datamodel_AlignmentI', function (accId, alignment) {
if (alignment == null ) {
return;
}try {
var genomicSequence=null;
var gffFetcher=Clazz.new_($I$(2).c$$S,[this.getDomain$()]);
var features=this.getFeaturesToFetch$();
$I$(3).timeCheck$S$I("ESP.getsequencerec1", 1);
var geneFeatures=gffFetcher.getSequenceRecords$S$jalview_ext_ensembl_EnsemblSequenceFetcher_EnsemblFeatureTypeA(accId, features);
if (geneFeatures != null  && geneFeatures.getHeight$() > 0 ) {
genomicSequence=geneFeatures.getSequenceAt$I(0);
}$I$(3).timeCheck$S$I("ESP.getsequencerec2", 1);
if (genomicSequence != null ) {
var querySeq=alignment.findName$S$Z(accId, true);
if (this.transferFeatures$S$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(accId, genomicSequence, querySeq)) {
$I$(3).timeCheck$S$I("ESP.transferFeatures", 1);
this.addProteinProduct$jalview_datamodel_SequenceI(querySeq);
}}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S("Error transferring Ensembl features: " + e.getMessage$());
} else {
throw e;
}
}
$I$(3).timeCheck$S$I("ESP.addfeat done", 1);
});

Clazz.newMeth(C$, 'addProteinProduct$jalview_datamodel_SequenceI', function (querySeq) {
var accId=querySeq.getName$();
try {
System.out.println$S("Adding protein product for " + accId);
var protein=Clazz.new_($I$(4).c$$S,[this.getDomain$()]).getSequenceRecords$S(accId);
if (protein == null  || protein.getHeight$() == 0 ) {
System.out.println$S("No protein product found for " + accId);
return;
}var proteinSeq=protein.getSequenceAt$I(0);
proteinSeq.createDatasetSequence$();
querySeq.createDatasetSequence$();
var mapList=$I$(5).mapCdsToProtein$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(querySeq, proteinSeq);
if (mapList != null ) {
var ds=proteinSeq.getDatasetSequence$();
var map=Clazz.new_($I$(6).c$$jalview_datamodel_SequenceI$jalview_util_MapList,[ds, mapList]);
var dbr=Clazz.new_($I$(7).c$$S$S$S$jalview_datamodel_Mapping,[this.getDbSource$(), this.getEnsemblDataVersion$(), proteinSeq.getName$(), map]);
querySeq.getDatasetSequence$().addDBRef$jalview_datamodel_DBRefEntry(dbr);
var uprots=$I$(8).selectRefs$java_util_List$SA(ds.getDBRefs$(), Clazz.array(String, -1, ["UNIPROT"]));
var upxrefs=$I$(8).selectRefs$java_util_List$SA(querySeq.getDBRefs$(), Clazz.array(String, -1, ["UNIPROT"]));
if (uprots != null ) {
for (var up, $up = uprots.iterator$(); $up.hasNext$()&&((up=($up.next$())),1);) {
var upx=$I$(8).searchRefs$java_util_List$S(upxrefs, up.getAccessionId$());
var upxref;
if (upx.size$() != 0) {
upxref=upx.get$I(0);
if (upx.size$() > 1) {
$I$(9).log.warn$O("Implementation issue - multiple uniprot acc on product sequence.");
}} else {
upxref=Clazz.new_($I$(7).c$$S$S$S,["UNIPROT", this.getEnsemblDataVersion$(), up.getAccessionId$()]);
}var newMap=Clazz.new_($I$(6).c$$jalview_datamodel_SequenceI$jalview_util_MapList,[ds, mapList]);
upxref.setVersion$S(this.getEnsemblDataVersion$());
upxref.setMap$jalview_datamodel_Mapping(newMap);
if (upx.size$() == 0) {
querySeq.getDatasetSequence$().addDBRef$jalview_datamodel_DBRefEntry(upxref);
}}
}$I$(5).computeProteinFeatures$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(querySeq, proteinSeq, mapList);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S(String.format$S$OA("Error retrieving protein for %s: %s", [accId, e.getMessage$()]));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getCrossReferences$jalview_datamodel_SequenceI', function (seq) {
$I$(3).timeCheck$S$I("ESP. getdataseq ", 1);
while (seq.getDatasetSequence$() != null ){
seq=seq.getDatasetSequence$();
}
$I$(3).timeCheck$S$I("ESP. getxref ", 1);
var xrefFetcher=Clazz.new_($I$(10).c$$S$S$S,[this.getDomain$(), this.getDbSource$(), this.getEnsemblDataVersion$()]);
var xrefs=xrefFetcher.getCrossReferences$S(seq.getName$());
for (var i=0, n=xrefs.size$(); i < n; i++) {
seq.addDBRef$jalview_datamodel_DBRefEntry(xrefs.get$I(i));
}
var self=Clazz.new_($I$(7).c$$S$S$S,[this.getDbSource$(), this.getEnsemblDataVersion$(), seq.getName$()]);
seq.addDBRef$jalview_datamodel_DBRefEntry(self);
$I$(3).timeCheck$S$I("ESP. seqprox done ", 1);
});

Clazz.newMeth(C$, 'fetchSequences$java_util_List$jalview_datamodel_AlignmentI', function (ids, alignment) {
if (!this.isEnsemblAvailable$()) {
this.inProgress=false;
throw Clazz.new_(Clazz.load('jalview.exceptions.JalviewException').c$$S,["ENSEMBL Rest API not available."]);
}$I$(3).timeCheck$S$I("EnsemblSeqProx.fetchSeq ", 1);
var seqs=this.parseSequenceJson$java_util_List(ids);
if (seqs == null ) return alignment;
if (seqs.isEmpty$()) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["No data returned for " + ids]);
}if (seqs.size$() != ids.size$()) {
System.out.println$S(String.format$S$OA("Only retrieved %d sequences for %d query strings", [new Integer(seqs.size$()), new Integer(ids.size$())]));
}if (!seqs.isEmpty$()) {
var seqal=Clazz.new_($I$(11).c$$jalview_datamodel_SequenceIA,[seqs.toArray$TTA(Clazz.array($I$(12), [seqs.size$()]))]);
for (var seq, $seq = seqs.iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
if (seq.getDescription$() == null ) {
seq.setDescription$S(this.getDbName$());
}var name=seq.getName$();
if (ids.contains$O(name) || ids.contains$O(name.replace$CharSequence$CharSequence("ENSP", "ENST")) ) {
var dbref=$I$(8).parseToDbRef$jalview_datamodel_SequenceI$S$S$S(seq, this.getDbSource$(), this.getEnsemblDataVersion$(), name);
seq.addDBRef$jalview_datamodel_DBRefEntry(dbref);
}}
if (alignment == null ) {
alignment=seqal;
} else {
alignment.append$jalview_datamodel_AlignmentI(seqal);
}}return alignment;
});

Clazz.newMeth(C$, 'parseSequenceJson$java_util_List', function (ids) {
var result=Clazz.new_($I$(13));
try {
$I$(3).timeCheck$S$I("ENS seqproxy", 1);
var val=this.getJSON$java_net_URL$java_util_List$I$I$S(null, ids, -1, 1, null);
if (val == null ) return null;
var s=val.get$O("desc");
var desc=s == null  ? null : s.toString();
s=val.get$O("id");
var id=s == null  ? null : s.toString();
s=val.get$O("seq");
var seq=s == null  ? null : s.toString();
var sequence=Clazz.new_($I$(14).c$$S$S,[id, seq]);
if (desc != null ) {
sequence.setDescription$S(desc);
}result.add$TE(sequence);
} catch (e) {
if (Clazz.exceptionOf(e,"org.json.simple.parser.ParseException") || Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S("Error processing JSON response: " + e.toString());
} else {
throw e;
}
}
$I$(3).timeCheck$S$I("ENS seqproxy2", 1);
return result;
});

Clazz.newMeth(C$, 'getUrl$java_util_List', function (ids) {
var urlstring=Clazz.new_($I$(15).c$$I,[128]);
urlstring.append$S(this.getDomain$() + "/sequence/id");
if (ids.size$() == 1) {
urlstring.append$S("/").append$S(ids.get$I(0));
}urlstring.append$S("?type=").append$S(this.getSourceEnsemblType$().getType$());
urlstring.append$S(("&Accept=application/json"));
urlstring.append$S(("&content-type=application/json"));
var objectType=this.getObjectType$();
if (objectType != null ) {
urlstring.append$S("&").append$S("object_type").append$S("=").append$S(objectType);
}var url=Clazz.new_($I$(16).c$$S,[urlstring.toString()]);
return url;
});

Clazz.newMeth(C$, 'getObjectType$', function () {
return null;
});

Clazz.newMeth(C$, 'getMaximumQueryCount$', function () {
return 50;
});

Clazz.newMeth(C$, 'useGetRequest$', function () {
return false;
});

Clazz.newMeth(C$, 'getGenomicRangesFromFeatures$jalview_datamodel_SequenceI$S$I', function (sourceSequence, accId, start) {
var sfs=this.getIdentifyingFeatures$jalview_datamodel_SequenceI$S(sourceSequence, accId);
if (sfs.isEmpty$()) {
return null;
}var regions=Clazz.new_($I$(13).c$$I,[100]);
var mappedLength=0;
var direction=1;
var directionSet=false;
for (var sf, $sf = sfs.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var strand=sf.getStrand$();
strand=strand == 0 ? 1 : strand;
if (directionSet && strand != direction ) {
System.err.println$S("Error: forward and backward strand for " + accId);
return null;
}direction=strand;
directionSet=true;
if (strand < 0) {
regions.add$I$TE(0, Clazz.array(Integer.TYPE, -1, [sf.getEnd$(), sf.getBegin$()]));
} else {
regions.add$TE(Clazz.array(Integer.TYPE, -1, [sf.getBegin$(), sf.getEnd$()]));
}mappedLength+=Math.abs(sf.getEnd$() - sf.getBegin$() + 1);
}
if (regions.isEmpty$()) {
System.out.println$S("Failed to identify target sequence for " + accId + " from genomic features" );
return null;
}$I$(17).sort$java_util_List$java_util_Comparator(regions, direction == 1 ? $I$(18).ASCENDING : $I$(18).DESCENDING);
var to=$I$(1).asList$TTA([Clazz.array(Integer.TYPE, -1, [start, start + mappedLength - 1])]);
return Clazz.new_($I$(19).c$$java_util_List$java_util_List$I$I,[regions, to, 1, 1]);
});

Clazz.newMeth(C$, 'transferFeature$jalview_datamodel_SequenceFeature$jalview_datamodel_SequenceI$jalview_util_MapList$Z', function (sf, targetSequence, mapping, forwardStrand) {
var start=sf.getBegin$();
var end=sf.getEnd$();
var mappedRange=mapping.locateInTo$I$I(start, end);
if (mappedRange != null ) {
var group=sf.getFeatureGroup$();
if (".".equals$O(group)) {
group=this.getDbSource$();
}var newBegin=Math.min(mappedRange[0], mappedRange[1]);
var newEnd=Math.max(mappedRange[0], mappedRange[1]);
this.bhtest++;
var copy=Clazz.new_($I$(20).c$$jalview_datamodel_SequenceFeature$I$I$S$F,[sf, newBegin, newEnd, group, sf.getScore$()]);
targetSequence.addSequenceFeature$jalview_datamodel_SequenceFeature(copy);
if (!forwardStrand && $I$(21).getInstance$().isA$S$S(sf.getType$(), "sequence_variant") ) {
C$.reverseComplementAlleles$jalview_datamodel_SequenceFeature(copy);
}}});

Clazz.newMeth(C$, 'reverseComplementAlleles$jalview_datamodel_SequenceFeature', function (sf) {
var alleles=sf.getValue$S("alleles");
if (alleles == null ) {
return;
}var complement=Clazz.new_($I$(22).c$$I,[alleles.length$()]);
for (var allele, $allele = 0, $$allele = alleles.split$S(","); $allele<$$allele.length&&((allele=($$allele[$allele])),1);$allele++) {
C$.reverseComplementAllele$StringBuilder$S(complement, allele);
}
var comp=complement.toString();
sf.setValue$S$O("alleles", comp);
sf.setDescription$S(comp);
var atts=sf.getAttributes$();
if (atts != null ) {
atts=atts.replace$CharSequence$CharSequence("alleles" + "=" + alleles , "alleles" + "=" + comp );
sf.setAttributes$S(atts);
}}, 1);

Clazz.newMeth(C$, 'reverseComplementAllele$StringBuilder$S', function (complement, allele) {
if (complement.length$() > 0) {
complement.append$S(",");
}if (!$I$(23).isNucleotideSequence$S$Z(allele, true)) {
complement.append$S(allele);
} else {
for (var i=allele.length$() - 1; i >= 0; i--) {
complement.append$C($I$(24).getComplement$C(allele.charAt$I(i)));
}
}}, 1);

Clazz.newMeth(C$, 'transferFeatures$S$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI', function (accessionId, sourceSequence, targetSequence) {
if (sourceSequence == null  || targetSequence == null  ) {
return false;
}var sfs=sourceSequence.getFeatures$().getPositionalFeatures$SA([]);
var mapping=this.getGenomicRangesFromFeatures$jalview_datamodel_SequenceI$S$I(sourceSequence, accessionId, targetSequence.getStart$());
if (mapping == null ) {
return false;
}$I$(3).timeCheck$S$I("ESP. xfer " + sfs.size$(), 1);
var result=this.transferFeatures$java_util_List$jalview_datamodel_SequenceI$jalview_util_MapList$S(sfs, targetSequence, mapping, accessionId);
return result;
});

Clazz.newMeth(C$, 'transferFeatures$java_util_List$jalview_datamodel_SequenceI$jalview_util_MapList$S', function (sfs, targetSequence, mapping, parentId) {
var forwardStrand=mapping.isFromForwardStrand$();
$I$(25).sortFeatures$java_util_List$Z(sfs, forwardStrand);
var transferred=false;
for (var i=0, n=sfs.size$(); i < n; i++) {
var sf=sfs.get$I(i);
if (this.retainFeature$jalview_datamodel_SequenceFeature$S(sf, parentId)) {
this.transferFeature$jalview_datamodel_SequenceFeature$jalview_datamodel_SequenceI$jalview_util_MapList$Z(sf, targetSequence, mapping, forwardStrand);
transferred=true;
}}
return transferred;
});

Clazz.newMeth(C$, 'retainFeature$jalview_datamodel_SequenceFeature$S', function (sf, accessionId) {
return true;
});

Clazz.newMeth(C$, 'featureMayBelong$jalview_datamodel_SequenceFeature$S', function (sf, identifier) {
var parent=sf.getValue$S("Parent");
if (parent != null  && !parent.equalsIgnoreCase$S(identifier) ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return "Ensembl " + this.getSourceEnsemblType$().getType$() + " sequence with variant features" ;
});

Clazz.newMeth(C$, 'findFeatures$jalview_datamodel_SequenceI$S$S', function (sequence, term, parentId) {
var result=Clazz.new_($I$(13));
var sfs=sequence.getFeatures$().getFeaturesByOntology$SA([term]);
for (var sf, $sf = sfs.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var parent=sf.getValue$S("Parent");
if (parent != null  && parent.equalsIgnoreCase$S(parentId) ) {
result.add$TE(sf);
}}
return result;
});

Clazz.newMeth(C$, 'isTranscript$S', function (featureType) {
return "NMD_transcript_variant".equals$O(featureType) || $I$(21).getInstance$().isA$S$S(featureType, "transcript") ;
}, 1);
;
(function(){var C$=Clazz.newClass(P$.EnsemblSeqProxy, "EnsemblSeqType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S, "GENOMIC", 0, ["genomic"]);
Clazz.newEnumConst($vals, C$.c$$S, "CDNA", 1, ["cdna"]);
Clazz.newEnumConst($vals, C$.c$$S, "CDS", 2, ["cds"]);
Clazz.newEnumConst($vals, C$.c$$S, "PROTEIN", 3, ["protein"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.type=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (t) {
C$.$init$.apply(this);
this.type=t;
}, 1);

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
