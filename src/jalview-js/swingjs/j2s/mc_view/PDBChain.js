(function(){var P$=Clazz.newPackage("mc_view"),I$=[[0,'java.util.Vector','StringBuilder','jalview.util.Comparison','jalview.datamodel.SequenceFeature','mc_view.Bond','mc_view.Residue','jalview.datamodel.Annotation','jalview.schemes.ResidueProperties','jalview.datamodel.Sequence','jalview.structure.StructureImportSettings','jalview.datamodel.AlignmentAnnotation','java.awt.Color']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PDBChain");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.id=null;
this.bonds=null;
this.atoms=null;
this.residues=null;
this.offset=0;
this.sequence=null;
this.shadow=null;
this.isNa=false;
this.isVisible=false;
this.pdbstart=0;
this.pdbend=0;
this.seqstart=0;
this.seqend=0;
this.pdbid=null;
this.newline=null;
this.shadowMap=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.bonds=Clazz.new_($I$(1));
this.atoms=Clazz.new_($I$(1));
this.residues=Clazz.new_($I$(1));
this.shadow=null;
this.isNa=false;
this.isVisible=true;
this.pdbstart=0;
this.pdbend=0;
this.seqstart=0;
this.seqend=0;
this.pdbid="";
this.newline=System.getProperty$S("line.separator");
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (thePdbid, theId) {
C$.$init$.apply(this);
this.pdbid=thePdbid == null  ? thePdbid : thePdbid.toLowerCase$();
this.id=theId;
}, 1);

Clazz.newMeth(C$, 'setNewlineString$S', function (nl) {
this.newline=nl;
});

Clazz.newMeth(C$, 'getNewlineString$', function () {
return this.newline;
});

Clazz.newMeth(C$, 'print$', function () {
var tmp=Clazz.new_($I$(2).c$$I,[256]);
for (var b, $b = this.bonds.iterator$(); $b.hasNext$()&&((b=($b.next$())),1);) {
tmp.append$S(b.at1.resName).append$S(" ").append$I(b.at1.resNumber).append$S(" ").append$I(this.offset).append$S(this.newline);
}
return tmp.toString();
});

Clazz.newMeth(C$, 'makeExactMapping$jalview_analysis_AlignSeq$jalview_datamodel_SequenceI', function (as, s1) {
var pdbpos=as.getSeq2Start$() - 2;
var alignpos=s1.getStart$() + as.getSeq1Start$() - 3;
for (var atom, $atom = this.atoms.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
atom.alignmentMapping=-1;
}
for (var i=0; i < as.astr1.length$(); i++) {
if (as.astr1.charAt$I(i) != "-") {
alignpos++;
}if (as.astr2.charAt$I(i) != "-") {
pdbpos++;
}var sameResidue=$I$(3).isSameResidue$C$C$Z(as.astr1.charAt$I(i), as.astr2.charAt$I(i), false);
if (sameResidue) {
if (pdbpos >= this.residues.size$()) {
continue;
}var res=this.residues.elementAt$I(pdbpos);
for (var atom, $atom = res.atoms.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
atom.alignmentMapping=alignpos;
}
}}
});

Clazz.newMeth(C$, 'makeExactMapping$jalview_structure_StructureMapping$jalview_datamodel_SequenceI', function (mapping, s1) {
for (var atom, $atom = this.atoms.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
atom.alignmentMapping=-1;
}
var ds=s1;
while (ds.getDatasetSequence$() != null ){
ds=ds.getDatasetSequence$();
}
var pdboffset=0;
for (var res, $res = this.residues.iterator$(); $res.hasNext$()&&((res=($res.next$())),1);) {
var seqpos=mapping.getSeqPos$I(res.atoms.get$I(0).resNumber);
var strchar=this.sequence.getCharAt$I(pdboffset++);
if (seqpos == -2147483648) {
continue;
}var seqchar=ds.getCharAt$I(seqpos - ds.getStart$());
var sameResidue=$I$(3).isSameResidue$C$C$Z(seqchar, strchar, false);
if (sameResidue) {
for (var atom, $atom = res.atoms.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
atom.alignmentMapping=seqpos - 1;
}
}}
});

Clazz.newMeth(C$, 'transferRESNUMFeatures$jalview_datamodel_SequenceI$S', function (seq, status) {
var sq=seq;
while (sq != null  && sq.getDatasetSequence$() != null  ){
sq=sq.getDatasetSequence$();
if (sq === this.sequence ) {
return;
}}
if (status == null ) {
status="IEA:jalview";
}var features=this.sequence.getSequenceFeatures$();
for (var feature, $feature = features.iterator$(); $feature.hasNext$()&&((feature=($feature.next$())),1);) {
if (feature.getFeatureGroup$() != null  && feature.getFeatureGroup$().equals$O(this.pdbid) ) {
var newBegin=1 + this.residues.elementAt$I(feature.getBegin$() - this.offset).atoms.elementAt$I(0).alignmentMapping;
var newEnd=1 + this.residues.elementAt$I(feature.getEnd$() - this.offset).atoms.elementAt$I(0).alignmentMapping;
var tx=Clazz.new_($I$(4).c$$jalview_datamodel_SequenceFeature$I$I$S$F,[feature, newBegin, newEnd, feature.getFeatureGroup$(), feature.getScore$()]);
tx.setStatus$S(status + ((tx.getStatus$() == null  || tx.getStatus$().length$() == 0 ) ? "" : ":" + tx.getStatus$()));
if (tx.begin != 0 && tx.end != 0 ) {
sq.addSequenceFeature$jalview_datamodel_SequenceFeature(tx);
}}}
});

Clazz.newMeth(C$, 'makeCaBondList$', function () {
var na=false;
var numNa=0;
for (var i=0; i < (this.residues.size$() - 1); i++) {
var tmpres=this.residues.elementAt$I(i);
var tmpres2=this.residues.elementAt$I(i + 1);
var at1=tmpres.findAtom$S("CA");
var at2=tmpres2.findAtom$S("CA");
na=false;
if ((at1 == null ) && (at2 == null ) ) {
na=true;
at1=tmpres.findAtom$S("P");
at2=tmpres2.findAtom$S("P");
}if ((at1 != null ) && (at2 != null ) ) {
if (at1.chain.equals$O(at2.chain)) {
if (na) {
numNa++;
}this.makeBond$mc_view_Atom$mc_view_Atom(at1, at2);
}} else {
System.out.println$S("not found " + i);
}}
if (this.residues.size$() > 1 && ((numNa/(this.residues.size$() - 1)|0) > 0.99 ) ) {
this.isNa=true;
}});

Clazz.newMeth(C$, 'makeBond$mc_view_Atom$mc_view_Atom', function (at1, at2) {
this.bonds.addElement$TE(Clazz.new_($I$(5).c$$mc_view_Atom$mc_view_Atom,[at1, at2]));
});

Clazz.newMeth(C$, 'makeResidueList$Z', function (visibleChainAnnotation) {
var count=0;
var symbol;
var deoxyn=false;
var nucleotide=false;
var seq=Clazz.new_($I$(2).c$$I,[256]);
var resFeatures=Clazz.new_($I$(1));
var resAnnotation=Clazz.new_($I$(1));
var iSize=this.atoms.size$() - 1;
var resNumber=-1;
var insCode=" ";
for (var i=0; i <= iSize; i++) {
var tmp=this.atoms.elementAt$I(i);
resNumber=tmp.resNumber;
insCode=tmp.insCode;
var res=resNumber;
var ins=insCode;
if (i == 0) {
this.offset=resNumber;
}var resAtoms=Clazz.new_($I$(1));
while ((resNumber == res) && (ins == insCode) && (i < this.atoms.size$())  ){
resAtoms.add$TE(this.atoms.elementAt$I(i));
i++;
if (i < this.atoms.size$()) {
resNumber=this.atoms.elementAt$I(i).resNumber;
insCode=this.atoms.elementAt$I(i).insCode;
} else {
resNumber++;
}}
i--;
var currAtom=resAtoms.get$I(0);
if (currAtom.insCode != " " && !this.residues.isEmpty$()  && this.residues.lastElement$().atoms.get$I(0).resNumber == currAtom.resNumber ) {
var desc=currAtom.resName + ":" + currAtom.resNumIns + " " + this.pdbid + this.id ;
var sf=Clazz.new_($I$(4).c$$S$S$I$I$S,["INSERTION", desc, this.offset + count - 1, this.offset + count - 1, "PDB_INS"]);
resFeatures.addElement$TE(sf);
this.residues.lastElement$().atoms.addAll$java_util_Collection(resAtoms);
} else {
this.residues.addElement$TE(Clazz.new_($I$(6).c$$java_util_Vector$I$I,[resAtoms, resNumber - 1, count]));
var tmpres=this.residues.lastElement$();
var tmpat=tmpres.atoms.get$I(0);
var desc=tmpat.resName + ":" + tmpat.resNumIns + " " + this.pdbid + this.id ;
var sf=Clazz.new_($I$(4).c$$S$S$I$I$S,["RESNUM", desc, this.offset + count, this.offset + count, this.pdbid]);
resFeatures.addElement$TE(sf);
resAnnotation.addElement$TE(Clazz.new_($I$(7).c$$F,[tmpat.tfactor]));
if ((symbol=$I$(8).getAA3Hash$().get$O(tmpat.resName)) == null ) {
var nucname=tmpat.resName.trim$();
deoxyn=nucname.length$() == 2 && $I$(8).aaIndex[(nucname.charCodeAt$I(0))] == $I$(8).aaIndex[68] ;
if (tmpat.name.equalsIgnoreCase$S("CA") || $I$(8).nucleotideIndex[(nucname.charCodeAt$I((deoxyn ? 1 : 0)))] == -1 ) {
var r=$I$(8).getSingleCharacterCode$S($I$(8).getCanonicalAminoAcid$S(tmpat.resName));
seq.append$C(r == "0" ? "X" : r);
} else {
nucleotide=true;
seq.append$C(nucname.charAt$I((deoxyn ? 1 : 0)));
}} else {
if (nucleotide) {
System.err.println$S("Warning: mixed nucleotide and amino acid chain.. its gonna do bad things to you!");
}seq.append$S($I$(8).aa[(symbol).intValue$()]);
}count++;
}}
if (this.id.length$() < 1) {
this.id=" ";
}this.isNa=nucleotide;
this.sequence=Clazz.new_($I$(9).c$$S$S$I$I,[this.id, seq.toString(), this.offset, resNumber - 1]);
if ($I$(10).isShowSeqFeatures$()) {
iSize=resFeatures.size$();
for (var i=0; i < iSize; i++) {
this.sequence.addSequenceFeature$jalview_datamodel_SequenceFeature(resFeatures.elementAt$I(i));
resFeatures.setElementAt$TE$I(null, i);
}
}if (visibleChainAnnotation) {
var annots=Clazz.array($I$(7), [resAnnotation.size$()]);
var max=0.0;
var min=0.0;
iSize=annots.length;
for (var i=0; i < iSize; i++) {
annots[i]=resAnnotation.elementAt$I(i);
max=Math.max(max, annots[i].value);
min=Math.min(min, annots[i].value);
resAnnotation.setElementAt$TE$I(null, i);
}
var tfactorann=Clazz.new_($I$(11).c$$S$S$jalview_datamodel_AnnotationA$F$F$I,["Temperature Factor", "Temperature Factor for " + this.pdbid + this.id , annots, min, max, 2]);
tfactorann.setSequenceRef$jalview_datamodel_SequenceI(this.sequence);
this.sequence.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(tfactorann);
}});

Clazz.newMeth(C$, 'setChargeColours$', function () {
for (var b, $b = this.bonds.iterator$(); $b.hasNext$()&&((b=($b.next$())),1);) {
if (b.at1 != null  && b.at2 != null  ) {
b.startCol=C$.getChargeColour$S(b.at1.resName);
b.endCol=C$.getChargeColour$S(b.at2.resName);
} else {
b.startCol=$I$(12).gray;
b.endCol=$I$(12).gray;
}}
});

Clazz.newMeth(C$, 'getChargeColour$S', function (resName) {
var result=$I$(12).lightGray;
if ("ASP".equals$O(resName) || "GLU".equals$O(resName) ) {
result=$I$(12).red;
} else if ("LYS".equals$O(resName) || "ARG".equals$O(resName) ) {
result=$I$(12).blue;
} else if ("CYS".equals$O(resName)) {
result=$I$(12).yellow;
}return result;
}, 1);

Clazz.newMeth(C$, 'setChainColours$jalview_schemes_ColourSchemeI', function (cs) {
var index;
for (var b, $b = this.bonds.iterator$(); $b.hasNext$()&&((b=($b.next$())),1);) {
try {
index=$I$(8).aa3Hash.get$O(b.at1.resName).intValue$();
b.startCol=cs.findColour$C$I$jalview_datamodel_SequenceI$S$F($I$(8).aa[index].charAt$I(0), 0, null, null, 0.0);
index=$I$(8).aa3Hash.get$O(b.at2.resName).intValue$();
b.endCol=cs.findColour$C$I$jalview_datamodel_SequenceI$S$F($I$(8).aa[index].charAt$I(0), 0, null, null, 0.0);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
b.startCol=$I$(12).gray;
b.endCol=$I$(12).gray;
} else {
throw e;
}
}
}
});

Clazz.newMeth(C$, 'setChainColours$java_awt_Color', function (col) {
for (var b, $b = this.bonds.iterator$(); $b.hasNext$()&&((b=($b.next$())),1);) {
b.startCol=col;
b.endCol=col;
}
});

Clazz.newMeth(C$, 'transferResidueAnnotation$jalview_structure_StructureMapping$jalview_datamodel_Mapping', function (mapping, sqmpping) {
var sq=mapping.getSequence$();
var dsq=sq;
if (sqmpping == null ) {
sqmpping=mapping.getSeqToPdbMapping$();
}if (sq != null ) {
while (dsq.getDatasetSequence$() != null ){
dsq=dsq.getDatasetSequence$();
}
if (this.shadow != null  && this.shadow.getAnnotation$() != null  ) {
for (var ana, $ana = 0, $$ana = this.shadow.getAnnotation$(); $ana<$$ana.length&&((ana=($$ana[$ana])),1);$ana++) {
var transfer=sq.getAlignmentAnnotations$S$S(ana.getCalcId$(), ana.label);
if (transfer == null  || transfer.size$() == 0 ) {
ana=Clazz.new_($I$(11).c$$jalview_datamodel_AlignmentAnnotation,[ana]);
ana.liftOver$jalview_datamodel_SequenceI$jalview_datamodel_Mapping(this.sequence, this.shadowMap);
ana.liftOver$jalview_datamodel_SequenceI$jalview_datamodel_Mapping(dsq, sqmpping);
dsq.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(ana);
} else {
continue;
}}
} else {
if (this.sequence != null  && this.sequence.getAnnotation$() != null  ) {
for (var ana, $ana = 0, $$ana = this.sequence.getAnnotation$(); $ana<$$ana.length&&((ana=($$ana[$ana])),1);$ana++) {
var transfer=dsq.getAlignmentAnnotations$S$S(ana.getCalcId$(), ana.label);
if (transfer == null  || transfer.size$() == 0 ) {
ana=Clazz.new_($I$(11).c$$jalview_datamodel_AlignmentAnnotation,[ana]);
ana.liftOver$jalview_datamodel_SequenceI$jalview_datamodel_Mapping(dsq, sqmpping);
dsq.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(ana);
} else {
continue;
}}
}}if (false) {
var min=-1;
var max=0;
var an=Clazz.array($I$(7), [sq.getEnd$() - sq.getStart$() + 1]);
for (var i=sq.getStart$(), j=sq.getEnd$(), k=0; i <= j; i++, k++) {
var prn=mapping.getPDBResNum$I(k + 1);
an[k]=Clazz.new_($I$(7).c$$F,[prn]);
if (min == -1 ) {
min=k;
max=k;
} else {
if (min > k ) {
min=k;
} else if (max < k ) {
max=k;
}}}
sq.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(Clazz.new_($I$(11).c$$S$S$jalview_datamodel_AnnotationA$F$F$I,["PDB.RESNUM", "PDB Residue Numbering for " + this.pdbid + ":" + this.id , an, min, max, 2]));
}}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
