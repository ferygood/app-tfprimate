(function(){var P$=Clazz.newPackage("jalview.project"),p$1={},I$=[[0,'jalview.util.Platform','java.util.HashMap','java.util.IdentityHashMap','java.util.ArrayList',['jalview.project.Jalview2XML','.SeqFref'],'java.io.FileOutputStream','java.util.jar.JarOutputStream','jalview.bin.Cache','jalview.gui.Desktop','java.util.Arrays','java.util.Hashtable','java.io.File','jalview.io.BackupFiles','jalview.xml.binding.jalview.ObjectFactory','jalview.xml.binding.jalview.VAMSAS','java.util.GregorianCalendar','javax.xml.datatype.DatatypeFactory','jalview.xml.binding.jalview.SequenceSet',['jalview.xml.binding.jalview.SequenceSet','.SequenceSetProperties'],'java.util.HashSet',['jalview.xml.binding.jalview.JalviewModel','.JSeq'],'jalview.xml.binding.jalview.Feature',['jalview.xml.binding.jalview.Feature','.OtherData'],['jalview.xml.binding.jalview.JalviewModel','.JSeq','.Pdbids'],['jalview.xml.binding.jalview.Pdbentry','.Property'],'jalview.xml.binding.jalview.AlcodonFrame',['jalview.xml.binding.jalview.AlcodonFrame','.AlcodMap'],['jalview.xml.binding.jalview.JalviewModel','.Tree'],['jalview.xml.binding.jalview.JalviewModel','.JGroup'],['jalview.xml.binding.jalview.JalviewModel','.Viewport'],'jalview.schemes.ColourSchemeProperty',['jalview.xml.binding.jalview.JalviewModel','.FeatureSettings'],'java.util.Vector',['jalview.xml.binding.jalview.JalviewModel','.FeatureSettings','.Setting'],'jalview.xml.binding.jalview.NoValueColour',['jalview.xml.binding.jalview.JalviewModel','.FeatureSettings','.Group'],['jalview.xml.binding.jalview.JalviewModel','.Viewport','.HiddenColumns'],'java.util.jar.JarEntry','java.io.PrintWriter','java.io.OutputStreamWriter','javax.xml.bind.JAXBContext','jalview.xml.binding.jalview.JalviewModel',['jalview.xml.binding.jalview.JalviewModel','.PcaViewer'],['jalview.math.RotatableMatrix','.Axis'],['jalview.xml.binding.jalview.JalviewModel','.PcaViewer','.SeqPointMin'],['jalview.xml.binding.jalview.JalviewModel','.PcaViewer','.SeqPointMax'],['jalview.xml.binding.jalview.JalviewModel','.PcaViewer','.SequencePoint'],['jalview.xml.binding.jalview.JalviewModel','.PcaViewer','.Axis'],'jalview.xml.binding.jalview.PcaDataType','jalview.xml.binding.jalview.DoubleMatrix','jalview.xml.binding.jalview.DoubleVector','jalview.math.Matrix',['jalview.xml.binding.jalview.JalviewModel','.JSeq','.RnaViewer'],['jalview.xml.binding.jalview.JalviewModel','.JSeq','.RnaViewer','.SecondaryStructure'],'java.io.DataInputStream','java.io.FileInputStream','java.io.DataOutputStream',['jalview.xml.binding.jalview.JalviewModel','.JSeq','.Pdbids','.StructureState'],'jalview.xml.binding.jalview.AnnotationColourScheme','jalview.xml.binding.jalview.Annotation',['jalview.xml.binding.jalview.Annotation','.ThresholdLine'],['jalview.xml.binding.jalview.Annotation','.Property'],'jalview.xml.binding.jalview.AnnotationElement','java.awt.Color',['jalview.xml.binding.jalview.JalviewModel','.Viewport','.CalcIdParam'],'jalview.ws.jws2.Jws2Discoverer','jalview.ws.jws2.dm.AAConSettings','Error','jalview.util.MessageManager','jalview.xml.binding.jalview.Sequence',['jalview.xml.binding.jalview.Sequence','.DBRef'],'jalview.xml.binding.jalview.Mapping',['jalview.xml.binding.jalview.MapListType','.MapListFrom'],['jalview.xml.binding.jalview.MapListType','.MapListTo'],'java.math.BigInteger',['jalview.xml.binding.jalview.JalviewModel','.UserColours'],'jalview.xml.binding.jalview.JalviewUserColours',['jalview.xml.binding.jalview.JalviewUserColours','.Colour'],'jalview.schemes.ResidueProperties','jalview.util.Format','jalview.schemes.UserColourScheme','javax.swing.SwingUtilities','java.net.URL','java.util.jar.JarInputStream','java.io.ByteArrayInputStream','javax.xml.stream.XMLInputFactory','jalview.structure.StructureSelectionManager','jalview.gui.SplitFrame','jalview.gui.JvOptionPane','java.io.BufferedReader','java.io.InputStreamReader','jalview.datamodel.Sequence','jalview.datamodel.SequenceI','jalview.datamodel.Alignment','jalview.datamodel.SequenceFeature','jalview.datamodel.PDBEntry',['jalview.datamodel.PDBEntry','.Type'],'jalview.datamodel.AlignedCodonFrame','jalview.datamodel.Annotation','jalview.datamodel.AlignmentAnnotation','jalview.datamodel.GraphLine',['jalview.project.Jalview2XML','.JvAnnotRow'],'jalview.datamodel.SequenceGroup','jalview.analysis.Conservation','jalview.ext.varna.RnaModel','jalview.datamodel.RnaViewerModel','jalview.gui.AppVarna','jalview.io.NewickFile','java.awt.Rectangle','java.awt.Font','java.util.LinkedHashMap','jalview.datamodel.StructureViewerModel',['jalview.datamodel.StructureViewerModel','.StructureData'],['jalview.gui.StructureViewer','.ViewerType'],'jalview.gui.ChimeraViewFrame','StringBuilder','jalview.gui.StructureViewer','jalview.gui.OOMWarning','jalview.io.DataSourceType','Thread','jalview.util.StringUtils','jalview.gui.AlignFrame','jalview.io.FileFormat','jalview.gui.PaintRefresher','jalview.viewmodel.seqfeatures.FeaturesDisplayed','jalview.schemes.FeatureColour','jalview.viewmodel.seqfeatures.FeatureRendererSettings','jalview.schemes.AnnotationColourGradient','jalview.util.QuickSort','jalview.analysis.AlignSeq','jalview.util.Comparison','jalview.datamodel.DBRefEntry','jalview.datamodel.Mapping','jalview.analysis.scoremodels.SimilarityParams','jalview.gui.PCAPanel','jalview.analysis.scoremodels.ScoreModels','jalview.analysis.PCA','jalview.datamodel.Point','jalview.datamodel.SequencePoint','jalview.xml.binding.jalview.ThresholdType','jalview.xml.binding.jalview.FeatureMatcherSet',['jalview.xml.binding.jalview.FeatureMatcherSet','.CompoundMatcher'],'java.util.Collections','jalview.xml.binding.jalview.FeatureMatcher','jalview.xml.binding.jalview.FilterBy','jalview.datamodel.features.FeatureMatcherSet','jalview.util.matcher.Condition','jalview.datamodel.features.FeatureMatcher']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Jalview2XML", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
{
$I$(1).addJ2SBinaryType$S(".jvp?");
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.counter=0;
this.seqsToIds=null;
this.seqRefIds=null;
this.incompleteSeqs=null;
this.frefedSequence=null;
this.raiseGUI=false;
this.splitFrameCandidates=null;
this.rnaSessions=null;
this.viewportsAdded=null;
this.annotationIds=null;
this.uniqueSetSuffix=null;
this.pdbfiles=null;
this.jv2vobj=null;
this.vobj2jv=null;
this.errorMessage=null;
this.attemptversion1parse=false;
this.alreadyLoadedPDB=null;
this.updateLocalViews=false;
this.newStructureViewers=null;
this.skipList=null;
this.seqToDataset=null;
this.datasetIds=null;
this.dataset2Ids=null;
this.jvids2vobj=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.counter=0;
this.seqsToIds=null;
this.seqRefIds=null;
this.incompleteSeqs=null;
this.frefedSequence=null;
this.raiseGUI=true;
this.splitFrameCandidates=Clazz.new_($I$(2));
this.rnaSessions=Clazz.new_($I$(2));
this.viewportsAdded=Clazz.new_($I$(2));
this.annotationIds=Clazz.new_($I$(2));
this.uniqueSetSuffix="";
this.pdbfiles=null;
this.jv2vobj=null;
this.errorMessage=null;
this.attemptversion1parse=false;
this.alreadyLoadedPDB=Clazz.new_($I$(2));
this.updateLocalViews=false;
this.newStructureViewers=null;
this.skipList=null;
this.seqToDataset=Clazz.new_($I$(2));
this.datasetIds=null;
this.dataset2Ids=null;
}, 1);

Clazz.newMeth(C$, 'safeBoolean$Boolean', function (b) {
return b == null  ? false : b.booleanValue$();
}, 1);

Clazz.newMeth(C$, 'safeInt$Integer', function (i) {
return i == null  ? 0 : i.intValue$();
}, 1);

Clazz.newMeth(C$, 'safeFloat$Float', function (f) {
return f == null  ? 0.0 : f.floatValue$();
}, 1);

Clazz.newMeth(C$, 'seqHash$jalview_datamodel_SequenceI', function (sq) {
if (this.seqsToIds == null ) {
this.initSeqRefs$();
}if (this.seqsToIds.containsKey$O(sq)) {
return this.seqsToIds.get$O(sq);
} else {
var key="sq" + (this.seqsToIds.size$() + 1);
key=p$1.makeHashCode$O$S.apply(this, [sq, key]);
this.seqsToIds.put$TK$TV(sq, key);
return key;
}});

Clazz.newMeth(C$, 'initSeqRefs$', function () {
if (this.seqsToIds == null ) {
this.seqsToIds=Clazz.new_($I$(3));
}if (this.seqRefIds == null ) {
this.seqRefIds=Clazz.new_($I$(2));
}if (this.incompleteSeqs == null ) {
this.incompleteSeqs=Clazz.new_($I$(2));
}if (this.frefedSequence == null ) {
this.frefedSequence=Clazz.new_($I$(4));
}});

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (raiseGUI) {
C$.$init$.apply(this);
this.raiseGUI=raiseGUI;
}, 1);

Clazz.newMeth(C$, 'newMappingRef$S$jalview_datamodel_Mapping', function (sref, _jmap) {
var fref=((P$.Jalview2XML$1||
(function(){var C$=Clazz.newClass(P$, "Jalview2XML$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['jalview.project.Jalview2XML','.SeqFref']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.jmap=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.jmap=this.$finals$._jmap;
}, 1);

Clazz.newMeth(C$, 'resolve$', function () {
var seq=this.getSrefDatasetSeq$();
if (seq == null ) {
return false;
}this.jmap.setTo$jalview_datamodel_SequenceI(seq);
return true;
});
})()
), Clazz.new_($I$(5).c$$S$S, [this, {_jmap: _jmap}, sref, "Mapping"],P$.Jalview2XML$1));
return fref;
});

Clazz.newMeth(C$, 'newAlcodMapRef$S$jalview_datamodel_AlignedCodonFrame$jalview_datamodel_Mapping', function (sref, _cf, _jmap) {
var fref=((P$.Jalview2XML$2||
(function(){var C$=Clazz.newClass(P$, "Jalview2XML$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['jalview.project.Jalview2XML','.SeqFref']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.cf=null;
this.mp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.cf=this.$finals$._cf;
this.mp=this.$finals$._jmap;
}, 1);

Clazz.newMeth(C$, 'isResolvable$', function () {
return C$.superclazz.prototype.isResolvable$.apply(this, []) && this.mp.getTo$() != null  ;
});

Clazz.newMeth(C$, 'resolve$', function () {
var seq=this.getSrefDatasetSeq$();
if (seq == null ) {
return false;
}this.cf.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(seq, this.mp.getTo$(), this.mp.getMap$());
return true;
});
})()
), Clazz.new_($I$(5).c$$S$S, [this, {_cf: _cf, _jmap: _jmap}, sref, "Codon Frame"],P$.Jalview2XML$2));
return fref;
});

Clazz.newMeth(C$, 'resolveFrefedSequences$', function () {
var nextFref=this.frefedSequence.iterator$();
var toresolve=this.frefedSequence.size$();
var unresolved=0;
var failedtoresolve=0;
while (nextFref.hasNext$()){
var ref=nextFref.next$();
if (ref.isResolvable$()) {
try {
if (ref.resolve$()) {
nextFref.remove$();
} else {
failedtoresolve++;
}} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
System.err.println$S("IMPLEMENTATION ERROR: Failed to resolve forward reference for sequence " + ref.getSref$());
x.printStackTrace$();
failedtoresolve++;
} else {
throw x;
}
}
} else {
unresolved++;
}}
if (unresolved > 0) {
System.err.println$S("Jalview Project Import: There were " + unresolved + " forward references left unresolved on the stack." );
}if (failedtoresolve > 0) {
System.err.println$S("SERIOUS! " + failedtoresolve + " resolvable forward references failed to resolve." );
}if (this.incompleteSeqs != null  && this.incompleteSeqs.size$() > 0 ) {
System.err.println$S("Jalview Project Import: There are " + this.incompleteSeqs.size$() + " sequences which may have incomplete metadata." );
if (this.incompleteSeqs.size$() < 10) {
for (var s, $s = this.incompleteSeqs.values$().iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
System.err.println$S(s.toString());
}
} else {
System.err.println$S("Too many to report. Skipping output of incomplete sequences.");
}}});

Clazz.newMeth(C$, 'saveState$java_io_File', function (statefile) {
var fos=null;
try {
fos=Clazz.new_($I$(6).c$$java_io_File,[statefile]);
var jout=Clazz.new_($I$(7).c$$java_io_OutputStream,[fos]);
this.saveState$java_util_jar_JarOutputStream(jout);
fos.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(8).log.error$O$Throwable("Couln't write Jalview state to " + statefile, e);
if (this.errorMessage == null ) {
this.errorMessage="Did't write Jalview Archive to output file '" + statefile + "' - See console error log for details" ;
} else {
this.errorMessage += "(Didn't write Jalview Archive to output file '" + statefile + ")" ;
}e.printStackTrace$();
} else {
throw e;
}
} finally {
if (fos != null ) {
try {
fos.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}
this.reportErrors$();
});

Clazz.newMeth(C$, 'saveState$java_util_jar_JarOutputStream', function (jout) {
var frames=$I$(9).getAlignFrames$();
if (frames == null ) {
return;
}p$1.saveAllFrames$java_util_List$java_util_jar_JarOutputStream.apply(this, [$I$(10).asList$TTA(frames), jout]);
});

Clazz.newMeth(C$, 'saveAllFrames$java_util_List$java_util_jar_JarOutputStream', function (frames, jout) {
var dsses=Clazz.new_($I$(11));
this.rnaSessions.clear$();
this.splitFrameCandidates.clear$();
try {
var shortNames=Clazz.new_($I$(4));
var viewIds=Clazz.new_($I$(4));
for (var i=frames.size$() - 1; i > -1; i--) {
var af=frames.get$I(i);
if (this.skipList != null  && this.skipList.containsKey$O(af.getViewport$().getSequenceSetId$()) ) {
continue;
}var shortName=this.makeFilename$jalview_gui_AlignFrame$java_util_List(af, shortNames);
var apSize=af.getAlignPanels$().size$();
for (var ap=0; ap < apSize; ap++) {
var apanel=af.getAlignPanels$().get$I(ap);
var fileName=apSize == 1 ? shortName : ap + shortName;
if (!fileName.endsWith$S(".xml")) {
fileName=fileName + ".xml";
}this.saveState$jalview_gui_AlignmentPanel$S$java_util_jar_JarOutputStream$java_util_List(apanel, fileName, jout, viewIds);
var dssid=p$1.getDatasetIdRef$jalview_datamodel_AlignmentI.apply(this, [af.getViewport$().getAlignment$().getDataset$()]);
if (!dsses.containsKey$O(dssid)) {
dsses.put$TK$TV(dssid, af);
}}
}
p$1.writeDatasetFor$java_util_Hashtable$S$java_util_jar_JarOutputStream.apply(this, [dsses, "" + jout.hashCode$() + " " + this.uniqueSetSuffix , jout]);
try {
jout.flush$();
} catch (foo) {
if (Clazz.exceptionOf(foo,"Exception")){
} else {
throw foo;
}
}
jout.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
if (this.errorMessage == null ) {
this.errorMessage="Couldn\'t write Jalview Archive - see error output for details";
}ex.printStackTrace$();
} else {
throw ex;
}
}
}, p$1);

Clazz.newMeth(C$, 'makeFilename$jalview_gui_AlignFrame$java_util_List', function (af, namesUsed) {
var shortName=af.getTitle$();
if (shortName.indexOf$I($I$(12).separatorChar) > -1) {
shortName=shortName.substring$I(shortName.lastIndexOf$I($I$(12).separatorChar) + 1);
}var count=1;
while (namesUsed.contains$O(shortName)){
if (shortName.endsWith$S("_" + (count - 1))) {
shortName=shortName.substring$I$I(0, shortName.lastIndexOf$S("_"));
}shortName=shortName.concat$S("_" + count);
count++;
}
namesUsed.add$TE(shortName);
if (!shortName.endsWith$S(".xml")) {
shortName=shortName + ".xml";
}return shortName;
});

Clazz.newMeth(C$, 'saveAlignment$jalview_gui_AlignFrame$S$S', function (af, jarFile, fileName) {
try {
var doBackup=$I$(13).getEnabled$();
var backupfiles=doBackup ? Clazz.new_($I$(13).c$$S,[jarFile]) : null;
var fos=Clazz.new_($I$(6).c$$S,[doBackup ? backupfiles.getTempFilePath$() : jarFile]);
var jout=Clazz.new_($I$(7).c$$java_io_OutputStream,[fos]);
var frames=Clazz.new_($I$(4));
if (af.getViewport$().getCodingComplement$() != null ) {
frames=(af.getSplitViewContainer$()).getAlignFrames$();
} else {
frames.add$TE(af);
}p$1.saveAllFrames$java_util_List$java_util_jar_JarOutputStream.apply(this, [frames, jout]);
try {
jout.flush$();
} catch (foo) {
if (Clazz.exceptionOf(foo,"Exception")){
} else {
throw foo;
}
}
jout.close$();
var success=true;
if (doBackup) {
backupfiles.setWriteSuccess$Z(success);
success=backupfiles.rollBackupsAndRenameTempFile$();
}return success;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.errorMessage="Couldn\'t Write alignment view to Jalview Archive - see error output for details";
ex.printStackTrace$();
return false;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'writeDatasetFor$java_util_Hashtable$S$java_util_jar_JarOutputStream', function (dsses, fileName, jout) {
for (var dssids, $dssids = dsses.keySet$().iterator$(); $dssids.hasNext$()&&((dssids=($dssids.next$())),1);) {
var _af=dsses.get$O(dssids);
var jfileName=fileName + " Dataset for " + _af.getTitle$() ;
if (!jfileName.endsWith$S(".xml")) {
jfileName=jfileName + ".xml";
}this.saveState$jalview_gui_AlignmentPanel$S$Z$java_util_jar_JarOutputStream$java_util_List(_af.alignPanel, jfileName, true, jout, null);
}
}, p$1);

Clazz.newMeth(C$, 'saveState$jalview_gui_AlignmentPanel$S$java_util_jar_JarOutputStream$java_util_List', function (ap, fileName, jout, viewIds) {
return this.saveState$jalview_gui_AlignmentPanel$S$Z$java_util_jar_JarOutputStream$java_util_List(ap, fileName, false, jout, viewIds);
});

Clazz.newMeth(C$, 'saveState$jalview_gui_AlignmentPanel$S$Z$java_util_jar_JarOutputStream$java_util_List', function (ap, fileName, storeDS, jout, viewIds) {
if (viewIds == null ) {
viewIds=Clazz.new_($I$(4));
}this.initSeqRefs$();
var userColours=Clazz.new_($I$(4));
var av=ap.av;
var vpRanges=av.getRanges$();
var objectFactory=Clazz.new_($I$(14));
var object=objectFactory.createJalviewModel$();
object.setVamsasModel$jalview_xml_binding_jalview_VAMSAS(Clazz.new_($I$(15)));
try {
var c=Clazz.new_($I$(16));
var datatypeFactory=$I$(17).newInstance$();
var now=datatypeFactory.newXMLGregorianCalendar$java_util_GregorianCalendar(c);
object.setCreationDate$javax_xml_datatype_XMLGregorianCalendar(now);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.datatype.DatatypeConfigurationException")){
System.err.println$S("error writing date: " + e.toString());
} else {
throw e;
}
}
object.setVersion$S($I$(8).getDefault$S$S("VERSION", "Development Build"));
var rjal=av.getAlignment$();
var jal=rjal;
if (av.hasHiddenRows$()) {
rjal=jal.getHiddenSequences$().getFullAlignment$();
}var vamsasSet=Clazz.new_($I$(18));
var vamsasSeq;
vamsasSet.setGapChar$S(jal.getGapCharacter$() + "");
if (jal.getDataset$() != null ) {
vamsasSet.setDatasetId$S(p$1.getDatasetIdRef$jalview_datamodel_AlignmentI.apply(this, [jal.getDataset$()]));
if (storeDS) {
jal=jal.getDataset$();
rjal=jal;
}}if (jal.getProperties$() != null ) {
var en=jal.getProperties$().keys$();
while (en.hasMoreElements$()){
var key=en.nextElement$().toString();
var ssp=Clazz.new_($I$(19));
ssp.setKey$S(key);
ssp.setValue$S(jal.getProperties$().get$O(key).toString());
vamsasSet.getSequenceSetProperties$().add$TE(ssp);
}
}var jseq;
var calcIdSet=Clazz.new_($I$(20));
var vamsasSetIds=Clazz.new_($I$(2));
for (var jds, $jds = rjal.getSequences$().iterator$(); $jds.hasNext$()&&((jds=($jds.next$())),1);) {
var jdatasq=jds.getDatasetSequence$() == null  ? jds : jds.getDatasetSequence$();
var id=this.seqHash$jalview_datamodel_SequenceI(jds);
if (vamsasSetIds.get$O(id) == null ) {
if (this.seqRefIds.get$O(id) != null  && !storeDS ) {
} else {
vamsasSeq=p$1.createVamsasSequence$S$jalview_datamodel_SequenceI.apply(this, [id, jds]);
vamsasSet.getSequence$().add$TE(vamsasSeq);
vamsasSetIds.put$TK$TV(id, vamsasSeq);
this.seqRefIds.put$TK$TV(id, jds);
}}jseq=Clazz.new_($I$(21));
jseq.setStart$I(jds.getStart$());
jseq.setEnd$I(jds.getEnd$());
jseq.setColour$Integer(new Integer(av.getSequenceColour$jalview_datamodel_SequenceI(jds).getRGB$()));
jseq.setId$S(id);
if (!storeDS) {
if (av.hasHiddenRows$()) {
jseq.setHidden$Boolean(new Boolean(av.getAlignment$().getHiddenSequences$().isHidden$jalview_datamodel_SequenceI(jds)));
if (av.isHiddenRepSequence$jalview_datamodel_SequenceI(jds)) {
var reps=av.getRepresentedSequences$jalview_datamodel_SequenceI(jds).getSequencesInOrder$jalview_datamodel_AlignmentI(rjal);
for (var h=0; h < reps.length; h++) {
if (reps[h] !== jds ) {
jseq.getHiddenSequences$().add$TE(new Integer(rjal.findIndex$jalview_datamodel_SequenceI(reps[h])));
}}
}}if (jal.hasSeqrep$()) {
jseq.setViewreference$Boolean(new Boolean(jds === jal.getSeqrep$() ));
}}var sfs=jds.getSequenceFeatures$();
for (var sf, $sf = sfs.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var features=Clazz.new_($I$(22));
features.setBegin$I(sf.getBegin$());
features.setEnd$I(sf.getEnd$());
features.setDescription$S(sf.getDescription$());
features.setType$S(sf.getType$());
features.setFeatureGroup$S(sf.getFeatureGroup$());
features.setScore$Float(new Float(sf.getScore$()));
if (sf.links != null ) {
for (var l=0; l < sf.links.size$(); l++) {
var keyValue=Clazz.new_($I$(23));
keyValue.setKey$S("LINK_" + l);
keyValue.setValue$S(sf.links.elementAt$I(l).toString());
features.getOtherData$().add$TE(keyValue);
}
}if (sf.otherDetails != null ) {
for (var entry, $entry = sf.otherDetails.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getKey$();
var value=entry.getValue$();
if (Clazz.instanceOf(value, "java.util.Map")) {
for (var subAttribute, $subAttribute = (value).entrySet$().iterator$(); $subAttribute.hasNext$()&&((subAttribute=($subAttribute.next$())),1);) {
var otherData=Clazz.new_($I$(23));
otherData.setKey$S(key);
otherData.setKey2$S(subAttribute.getKey$());
otherData.setValue$S(subAttribute.getValue$().toString());
features.getOtherData$().add$TE(otherData);
}
} else {
var otherData=Clazz.new_($I$(23));
otherData.setKey$S(key);
otherData.setValue$S(value.toString());
features.getOtherData$().add$TE(otherData);
}}
}jseq.getFeatures$().add$TE(features);
}
if (jdatasq.getAllPDBEntries$() != null ) {
var en=jdatasq.getAllPDBEntries$().elements$();
while (en.hasMoreElements$()){
var pdb=Clazz.new_($I$(24));
var entry=en.nextElement$();
var pdbId=entry.getId$();
pdb.setId$S(pdbId);
pdb.setType$S(entry.getType$());
var frames=$I$(9).desktop.getAllFrames$();
var matchedFile=null;
for (var f=frames.length - 1; f > -1; f--) {
if (Clazz.instanceOf(frames[f], "jalview.gui.StructureViewerBase")) {
var viewFrame=frames[f];
matchedFile=this.saveStructureState$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceI$jalview_xml_binding_jalview_JalviewModel_JSeq_Pdbids$jalview_datamodel_PDBEntry$java_util_List$S$jalview_gui_StructureViewerBase(ap, jds, pdb, entry, viewIds, matchedFile, viewFrame);
var viewId=viewFrame.getViewId$();
if (!storeDS && !viewIds.contains$O(viewId) ) {
viewIds.add$TE(viewId);
try {
var viewerState=viewFrame.getStateInfo$();
this.writeJarEntry$java_util_jar_JarOutputStream$S$BA(jout, this.getViewerJarEntryName$S(viewId), viewerState.getBytes$());
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S("Error saving viewer state: " + e.getMessage$());
} else {
throw e;
}
}
}}}
if (matchedFile != null  || entry.getFile$() != null  ) {
if (entry.getFile$() != null ) {
matchedFile=entry.getFile$();
}pdb.setFile$S(matchedFile);
if (this.pdbfiles == null ) {
this.pdbfiles=Clazz.new_($I$(4));
}if (!this.pdbfiles.contains$O(pdbId)) {
this.pdbfiles.add$TE(pdbId);
this.copyFileToJar$java_util_jar_JarOutputStream$S$S(jout, matchedFile, pdbId);
}}var props=entry.getProperties$();
if (props.hasMoreElements$()) {
while (props.hasMoreElements$()){
var prop=Clazz.new_($I$(25));
var key=props.nextElement$();
prop.setName$S(key);
prop.setValue$S(entry.getProperty$S(key).toString());
pdb.getProperty$().add$TE(prop);
}
}jseq.getPdbids$().add$TE(pdb);
}
}this.saveRnaViewers$java_util_jar_JarOutputStream$jalview_xml_binding_jalview_JalviewModel_JSeq$jalview_datamodel_SequenceI$java_util_List$jalview_gui_AlignmentPanel$Z(jout, jseq, jds, viewIds, ap, storeDS);
object.getJSeq$().add$TE(jseq);
}
if (!storeDS && av.hasHiddenRows$() ) {
jal=av.getAlignment$();
}if (storeDS && jal.getCodonFrames$() != null  ) {
var jac=jal.getCodonFrames$();
for (var acf, $acf = jac.iterator$(); $acf.hasNext$()&&((acf=($acf.next$())),1);) {
var alc=Clazz.new_($I$(26));
if (acf.getProtMappings$() != null  && acf.getProtMappings$().length > 0 ) {
var hasMap=false;
var dnas=acf.getdnaSeqs$();
var pmaps=acf.getProtMappings$();
for (var m=0; m < pmaps.length; m++) {
var alcmap=Clazz.new_($I$(27));
alcmap.setDnasq$S(this.seqHash$jalview_datamodel_SequenceI(dnas[m]));
alcmap.setMapping$jalview_xml_binding_jalview_Mapping(p$1.createVamsasMapping$jalview_datamodel_Mapping$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$Z.apply(this, [pmaps[m], dnas[m], null, false]));
alc.getAlcodMap$().add$TE(alcmap);
hasMap=true;
}
if (hasMap) {
vamsasSet.getAlcodonFrame$().add$TE(alc);
}}}
}if (!storeDS && av.getCurrentTree$() != null  ) {
if ($I$(9).desktop != null ) {
var frames=$I$(9).desktop.getAllFrames$();
for (var t=0; t < frames.length; t++) {
if (Clazz.instanceOf(frames[t], "jalview.gui.TreePanel")) {
var tp=frames[t];
if (tp.getTreeCanvas$().getViewport$().getAlignment$() === jal ) {
var tree=Clazz.new_($I$(28));
tree.setTitle$S(tp.getTitle$());
tree.setCurrentTree$Boolean(new Boolean((av.getCurrentTree$() === tp.getTree$() )));
tree.setNewick$S(tp.getTree$().print$());
tree.setThreshold$Float(new Float(tp.getTreeCanvas$().getThreshold$()));
tree.setFitToWindow$Boolean(new Boolean(tp.fitToWindow.getState$()));
tree.setFontName$S(tp.getTreeFont$().getName$());
tree.setFontSize$Integer(new Integer(tp.getTreeFont$().getSize$()));
tree.setFontStyle$Integer(new Integer(tp.getTreeFont$().getStyle$()));
tree.setMarkUnlinked$Boolean(new Boolean(tp.placeholdersMenu.getState$()));
tree.setShowBootstrap$Boolean(new Boolean(tp.bootstrapMenu.getState$()));
tree.setShowDistances$Boolean(new Boolean(tp.distanceMenu.getState$()));
tree.setHeight$Integer(new Integer(tp.getHeight$()));
tree.setWidth$Integer(new Integer(tp.getWidth$()));
tree.setXpos$Integer(new Integer(tp.getX$()));
tree.setYpos$Integer(new Integer(tp.getY$()));
tree.setId$S(p$1.makeHashCode$O$S.apply(this, [tp, null]));
tree.setLinkToAllViews$Boolean(new Boolean(tp.getTreeCanvas$().isApplyToAllViews$()));
object.getTree$().add$TE(tree);
}}}
}}if (!storeDS && $I$(9).desktop != null  ) {
for (var frame, $frame = 0, $$frame = $I$(9).desktop.getAllFrames$(); $frame<$$frame.length&&((frame=($$frame[$frame])),1);$frame++) {
if (Clazz.instanceOf(frame, "jalview.gui.PCAPanel")) {
var panel=frame;
if (panel.getAlignViewport$().getAlignment$() === jal ) {
this.savePCA$jalview_gui_PCAPanel$jalview_xml_binding_jalview_JalviewModel(panel, object);
}}}
}var groupRefs=Clazz.new_($I$(3));
if (storeDS) {
for (var sq, $sq = jal.getSequences$().iterator$(); $sq.hasNext$()&&((sq=($sq.next$())),1);) {
var aa=sq.getAnnotation$();
if (aa != null  && aa.length > 0 ) {
p$1.storeAlignmentAnnotation$jalview_datamodel_AlignmentAnnotationA$java_util_IdentityHashMap$jalview_viewmodel_AlignmentViewport$java_util_Set$Z$jalview_xml_binding_jalview_SequenceSet.apply(this, [aa, groupRefs, av, calcIdSet, storeDS, vamsasSet]);
}}
} else {
if (jal.getAlignmentAnnotation$() != null ) {
var aa=jal.getAlignmentAnnotation$();
p$1.storeAlignmentAnnotation$jalview_datamodel_AlignmentAnnotationA$java_util_IdentityHashMap$jalview_viewmodel_AlignmentViewport$java_util_Set$Z$jalview_xml_binding_jalview_SequenceSet.apply(this, [aa, groupRefs, av, calcIdSet, storeDS, vamsasSet]);
}}if (jal.getGroups$() != null ) {
var groups=Clazz.array($I$(29), [jal.getGroups$().size$()]);
var i=-1;
for (var sg, $sg = jal.getGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
var jGroup=Clazz.new_($I$(29));
groups[++i]=jGroup;
jGroup.setStart$Integer(new Integer(sg.getStartRes$()));
jGroup.setEnd$Integer(new Integer(sg.getEndRes$()));
jGroup.setName$S(sg.getName$());
if (groupRefs.containsKey$O(sg)) {
jGroup.setId$S(groupRefs.get$O(sg));
}var colourScheme=sg.getColourScheme$();
if (colourScheme != null ) {
var groupColourScheme=sg.getGroupColourScheme$();
if (groupColourScheme.conservationApplied$()) {
jGroup.setConsThreshold$Integer(new Integer(groupColourScheme.getConservationInc$()));
if (Clazz.instanceOf(colourScheme, "jalview.schemes.UserColourScheme")) {
jGroup.setColour$S(this.setUserColourScheme$jalview_schemes_ColourSchemeI$java_util_List$jalview_xml_binding_jalview_JalviewModel(colourScheme, userColours, object));
} else {
jGroup.setColour$S(colourScheme.getSchemeName$());
}} else if (Clazz.instanceOf(colourScheme, "jalview.schemes.AnnotationColourGradient")) {
jGroup.setColour$S("AnnotationColourGradient");
jGroup.setAnnotationColours$jalview_xml_binding_jalview_AnnotationColourScheme(p$1.constructAnnotationColours$jalview_schemes_AnnotationColourGradient$java_util_List$jalview_xml_binding_jalview_JalviewModel.apply(this, [colourScheme, userColours, object]));
} else if (Clazz.instanceOf(colourScheme, "jalview.schemes.UserColourScheme")) {
jGroup.setColour$S(this.setUserColourScheme$jalview_schemes_ColourSchemeI$java_util_List$jalview_xml_binding_jalview_JalviewModel(colourScheme, userColours, object));
} else {
jGroup.setColour$S(colourScheme.getSchemeName$());
}jGroup.setPidThreshold$Integer(new Integer(groupColourScheme.getThreshold$()));
}jGroup.setOutlineColour$Integer(new Integer(sg.getOutlineColour$().getRGB$()));
jGroup.setDisplayBoxes$Boolean(new Boolean(sg.getDisplayBoxes$()));
jGroup.setDisplayText$Boolean(new Boolean(sg.getDisplayText$()));
jGroup.setColourText$Boolean(new Boolean(sg.getColourText$()));
jGroup.setTextCol1$Integer(new Integer(sg.textColour.getRGB$()));
jGroup.setTextCol2$Integer(new Integer(sg.textColour2.getRGB$()));
jGroup.setTextColThreshold$Integer(new Integer(sg.thresholdTextColour));
jGroup.setShowUnconserved$Boolean(new Boolean(sg.getShowNonconserved$()));
jGroup.setIgnoreGapsinConsensus$Boolean(new Boolean(sg.getIgnoreGapsConsensus$()));
jGroup.setShowConsensusHistogram$Boolean(new Boolean(sg.isShowConsensusHistogram$()));
jGroup.setShowSequenceLogo$Boolean(new Boolean(sg.isShowSequenceLogo$()));
jGroup.setNormaliseSequenceLogo$Boolean(new Boolean(sg.isNormaliseSequenceLogo$()));
for (var seq, $seq = sg.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
jGroup.getSeq$().add$TE(this.seqHash$jalview_datamodel_SequenceI(seq));
}
}
var group;
for (var grp, $grp = 0, $$grp = groups; $grp<$$grp.length&&((grp=($$grp[$grp])),1);$grp++) {
object.getJGroup$().add$TE(grp);
}
}if (!storeDS) {
var view=Clazz.new_($I$(30));
view.setTitle$S(ap.alignFrame.getTitle$());
view.setSequenceSetId$S(p$1.makeHashCode$O$S.apply(this, [av.getSequenceSetId$(), av.getSequenceSetId$()]));
view.setId$S(av.getViewId$());
if (av.getCodingComplement$() != null ) {
view.setComplementId$S(av.getCodingComplement$().getViewId$());
}view.setViewName$S(av.getViewName$());
view.setGatheredViews$Boolean(new Boolean(av.isGatherViewsHere$()));
var size=ap.av.getExplodedGeometry$();
var position=size;
if (size == null ) {
size=ap.alignFrame.getBounds$();
if (av.getCodingComplement$() != null ) {
position=(ap.alignFrame.getSplitViewContainer$()).getBounds$();
} else {
position=size;
}}view.setXpos$Integer(new Integer(position.x));
view.setYpos$Integer(new Integer(position.y));
view.setWidth$Integer(new Integer(size.width));
view.setHeight$Integer(new Integer(size.height));
view.setStartRes$Integer(new Integer(vpRanges.getStartRes$()));
view.setStartSeq$Integer(new Integer(vpRanges.getStartSeq$()));
if (Clazz.instanceOf(av.getGlobalColourScheme$(), "jalview.schemes.UserColourScheme")) {
view.setBgColour$S(this.setUserColourScheme$jalview_schemes_ColourSchemeI$java_util_List$jalview_xml_binding_jalview_JalviewModel(av.getGlobalColourScheme$(), userColours, object));
} else if (Clazz.instanceOf(av.getGlobalColourScheme$(), "jalview.schemes.AnnotationColourGradient")) {
var ac=p$1.constructAnnotationColours$jalview_schemes_AnnotationColourGradient$java_util_List$jalview_xml_binding_jalview_JalviewModel.apply(this, [av.getGlobalColourScheme$(), userColours, object]);
view.setAnnotationColours$jalview_xml_binding_jalview_AnnotationColourScheme(ac);
view.setBgColour$S("AnnotationColourGradient");
} else {
view.setBgColour$S($I$(31).getColourName$jalview_schemes_ColourSchemeI(av.getGlobalColourScheme$()));
}var vcs=av.getResidueShading$();
var cs=av.getGlobalColourScheme$();
if (cs != null ) {
if (vcs.conservationApplied$()) {
view.setConsThreshold$Integer(new Integer(vcs.getConservationInc$()));
if (Clazz.instanceOf(cs, "jalview.schemes.UserColourScheme")) {
view.setBgColour$S(this.setUserColourScheme$jalview_schemes_ColourSchemeI$java_util_List$jalview_xml_binding_jalview_JalviewModel(cs, userColours, object));
}}view.setPidThreshold$Integer(new Integer(vcs.getThreshold$()));
}view.setConservationSelected$Boolean(new Boolean(av.getConservationSelected$()));
view.setPidSelected$Boolean(new Boolean(av.getAbovePIDThreshold$()));
var font=av.getFont$();
view.setFontName$S(font.getName$());
view.setFontSize$Integer(new Integer(font.getSize$()));
view.setFontStyle$Integer(new Integer(font.getStyle$()));
view.setScaleProteinAsCdna$Boolean(new Boolean(av.getViewStyle$().isScaleProteinAsCdna$()));
view.setRenderGaps$Boolean(new Boolean(av.isRenderGaps$()));
view.setShowAnnotation$Boolean(new Boolean(av.isShowAnnotation$()));
view.setShowBoxes$Boolean(new Boolean(av.getShowBoxes$()));
view.setShowColourText$Boolean(new Boolean(av.getColourText$()));
view.setShowFullId$Boolean(new Boolean(av.getShowJVSuffix$()));
view.setRightAlignIds$Boolean(new Boolean(av.isRightAlignIds$()));
view.setShowSequenceFeatures$Boolean(new Boolean(av.isShowSequenceFeatures$()));
view.setShowText$Boolean(new Boolean(av.getShowText$()));
view.setShowUnconserved$Boolean(new Boolean(av.getShowUnconserved$()));
view.setWrapAlignment$Boolean(new Boolean(av.getWrapAlignment$()));
view.setTextCol1$Integer(new Integer(av.getTextColour$().getRGB$()));
view.setTextCol2$Integer(new Integer(av.getTextColour2$().getRGB$()));
view.setTextColThreshold$Integer(new Integer(av.getThresholdTextColour$()));
view.setShowConsensusHistogram$Boolean(new Boolean(av.isShowConsensusHistogram$()));
view.setShowSequenceLogo$Boolean(new Boolean(av.isShowSequenceLogo$()));
view.setNormaliseSequenceLogo$Boolean(new Boolean(av.isNormaliseSequenceLogo$()));
view.setShowGroupConsensus$Boolean(new Boolean(av.isShowGroupConsensus$()));
view.setShowGroupConservation$Boolean(new Boolean(av.isShowGroupConservation$()));
view.setShowNPfeatureTooltip$Boolean(new Boolean(av.isShowNPFeats$()));
view.setShowDbRefTooltip$Boolean(new Boolean(av.isShowDBRefs$()));
view.setFollowHighlight$Boolean(new Boolean(av.isFollowHighlight$()));
view.setFollowSelection$Boolean(new Boolean(av.followSelection));
view.setIgnoreGapsinConsensus$Boolean(new Boolean(av.isIgnoreGapsConsensus$()));
if (av.getFeaturesDisplayed$() != null ) {
var fs=Clazz.new_($I$(32));
var fr=ap.getSeqPanel$().seqCanvas.getFeatureRenderer$();
var renderOrder=fr.getRenderOrder$().toArray$TTA(Clazz.array(String, [0]));
var settingsAdded=Clazz.new_($I$(33));
if (renderOrder != null ) {
for (var featureType, $featureType = 0, $$featureType = renderOrder; $featureType<$$featureType.length&&((featureType=($$featureType[$featureType])),1);$featureType++) {
var setting=Clazz.new_($I$(34));
setting.setType$S(featureType);
var filter=fr.getFeatureFilter$S(featureType);
if (filter != null ) {
var filters=filter.getMatchers$().iterator$();
var firstFilter=filters.next$();
setting.setMatcherSet$jalview_xml_binding_jalview_FeatureMatcherSet(C$.marshalFilter$jalview_datamodel_features_FeatureMatcherI$java_util_Iterator$Z(firstFilter, filters, filter.isAnded$()));
}var fcol=fr.getFeatureStyle$S(featureType);
if (!fcol.isSimpleColour$()) {
setting.setColour$I(fcol.getMaxColour$().getRGB$());
setting.setMincolour$Integer(new Integer(fcol.getMinColour$().getRGB$()));
setting.setMin$Float(new Float(fcol.getMin$()));
setting.setMax$Float(new Float(fcol.getMax$()));
setting.setColourByLabel$Boolean(new Boolean(fcol.isColourByLabel$()));
if (fcol.isColourByAttribute$()) {
var attName=fcol.getAttributeName$();
setting.getAttributeName$().add$TE(attName[0]);
if (attName.length > 1) {
setting.getAttributeName$().add$TE(attName[1]);
}}setting.setAutoScale$Boolean(new Boolean(fcol.isAutoScaled$()));
setting.setThreshold$Float(new Float(fcol.getThreshold$()));
var noColour=fcol.getNoColour$();
if (noColour == null ) {
setting.setNoValueColour$jalview_xml_binding_jalview_NoValueColour($I$(35).NONE);
} else if (noColour.equals$O(fcol.getMaxColour$())) {
setting.setNoValueColour$jalview_xml_binding_jalview_NoValueColour($I$(35).MAX);
} else {
setting.setNoValueColour$jalview_xml_binding_jalview_NoValueColour($I$(35).MIN);
}setting.setThreshstate$Integer(new Integer(fcol.isAboveThreshold$() ? 1 : (fcol.isBelowThreshold$() ? 0 : -1)));
} else {
setting.setColour$I(fcol.getColour$().getRGB$());
}setting.setDisplay$Z(av.getFeaturesDisplayed$().isVisible$S(featureType));
var rorder=fr.getOrder$S(featureType);
if (rorder > -1 ) {
setting.setOrder$Float(new Float(rorder));
}fs.getSetting$().add$TE(setting);
settingsAdded.addElement$TE(featureType);
}
}var en=fr.getFeatureGroups$().iterator$();
var groupsAdded=Clazz.new_($I$(33));
while (en.hasNext$()){
var grp=en.next$();
if (groupsAdded.contains$O(grp)) {
continue;
}var g=Clazz.new_($I$(36));
g.setName$S(grp);
g.setDisplay$Z((fr.checkGroupVisibility$S$Z(grp, false)).booleanValue$());
fs.getGroup$().add$TE(g);
groupsAdded.addElement$TE(grp);
}
object.setFeatureSettings$jalview_xml_binding_jalview_JalviewModel_FeatureSettings(fs);
}if (av.hasHiddenColumns$()) {
var hidden=av.getAlignment$().getHiddenColumns$();
if (hidden == null ) {
p$1.warn$S.apply(this, ["REPORT BUG: avoided null columnselection bug (DMAM reported). Please contact Jim about this."]);
} else {
var hiddenRegions=hidden.iterator$();
while (hiddenRegions.hasNext$()){
var region=hiddenRegions.next$();
var hc=Clazz.new_($I$(37));
hc.setStart$Integer(new Integer(region[0]));
hc.setEnd$Integer(new Integer(region[1]));
view.getHiddenColumns$().add$TE(hc);
}
}}if (calcIdSet.size$() > 0) {
for (var calcId, $calcId = calcIdSet.iterator$(); $calcId.hasNext$()&&((calcId=($calcId.next$())),1);) {
if (calcId.trim$().length$() > 0) {
var cidp=p$1.createCalcIdParam$S$jalview_gui_AlignViewport.apply(this, [calcId, av]);
if (cidp != null ) {
view.getCalcIdParam$().add$TE(cidp);
}}}
}object.getViewport$().add$TE(view);
}object.getVamsasModel$().getSequenceSet$().add$TE(vamsasSet);
if (jout != null  && fileName != null  ) {
try {
fileName=fileName.replace$C$C("\\", "/");
System.out.println$S("Writing jar entry " + fileName);
var entry=Clazz.new_($I$(38).c$$S,[fileName]);
jout.putNextEntry$java_util_zip_ZipEntry(entry);
var pout=Clazz.new_($I$(39).c$$java_io_Writer,[Clazz.new_($I$(40).c$$java_io_OutputStream$S,[jout, "UTF-8"])]);
var jaxbContext=$I$(41).newInstance$ClassA([Clazz.getClass($I$(42))]);
var jaxbMarshaller=jaxbContext.createMarshaller$();
jaxbMarshaller.marshal$O$java_io_Writer(Clazz.new_($I$(14)).createJalviewModel$jalview_xml_binding_jalview_JalviewModel(object), pout);
pout.flush$();
jout.closeEntry$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Error writing Jalview project");
ex.printStackTrace$();
} else {
throw ex;
}
}
}return object;
});

Clazz.newMeth(C$, 'savePCA$jalview_gui_PCAPanel$jalview_xml_binding_jalview_JalviewModel', function (panel, object) {
try {
var viewer=Clazz.new_($I$(43));
viewer.setHeight$Integer(new Integer(panel.getHeight$()));
viewer.setWidth$Integer(new Integer(panel.getWidth$()));
viewer.setXpos$Integer(new Integer(panel.getX$()));
viewer.setYpos$Integer(new Integer(panel.getY$()));
viewer.setTitle$S(panel.getTitle$());
var pcaModel=panel.getPcaModel$();
viewer.setScoreModelName$S(pcaModel.getScoreModelName$());
viewer.setXDim$Integer(new Integer(panel.getSelectedDimensionIndex$jalview_math_RotatableMatrix_Axis($I$(44).X)));
viewer.setYDim$Integer(new Integer(panel.getSelectedDimensionIndex$jalview_math_RotatableMatrix_Axis($I$(44).Y)));
viewer.setZDim$Integer(new Integer(panel.getSelectedDimensionIndex$jalview_math_RotatableMatrix_Axis($I$(44).Z)));
viewer.setBgColour$Integer(new Integer(panel.getRotatableCanvas$().getBackgroundColour$().getRGB$()));
viewer.setScaleFactor$Float(new Float(panel.getRotatableCanvas$().getScaleFactor$()));
var spMin=panel.getRotatableCanvas$().getSeqMin$();
var spmin=Clazz.new_($I$(45));
spmin.setXPos$Float(new Float(spMin[0]));
spmin.setYPos$Float(new Float(spMin[1]));
spmin.setZPos$Float(new Float(spMin[2]));
viewer.setSeqPointMin$jalview_xml_binding_jalview_JalviewModel_PcaViewer_SeqPointMin(spmin);
var spMax=panel.getRotatableCanvas$().getSeqMax$();
var spmax=Clazz.new_($I$(46));
spmax.setXPos$Float(new Float(spMax[0]));
spmax.setYPos$Float(new Float(spMax[1]));
spmax.setZPos$Float(new Float(spMax[2]));
viewer.setSeqPointMax$jalview_xml_binding_jalview_JalviewModel_PcaViewer_SeqPointMax(spmax);
viewer.setShowLabels$Boolean(new Boolean(panel.getRotatableCanvas$().isShowLabels$()));
viewer.setLinkToAllViews$Boolean(new Boolean(panel.getRotatableCanvas$().isApplyToAllViews$()));
var sp=pcaModel.getSimilarityParameters$();
viewer.setIncludeGaps$Boolean(new Boolean(sp.includeGaps$()));
viewer.setMatchGaps$Boolean(new Boolean(sp.matchGaps$()));
viewer.setIncludeGappedColumns$Boolean(new Boolean(sp.includeGappedColumns$()));
viewer.setDenominateByShortestLength$Boolean(new Boolean(sp.denominateByShortestLength$()));
for (var spt, $spt = pcaModel.getSequencePoints$().iterator$(); $spt.hasNext$()&&((spt=($spt.next$())),1);) {
var point=Clazz.new_($I$(47));
point.setSequenceRef$S(this.seqHash$jalview_datamodel_SequenceI(spt.getSequence$()));
point.setXPos$Float(new Float(spt.coord.x));
point.setYPos$Float(new Float(spt.coord.y));
point.setZPos$Float(new Float(spt.coord.z));
viewer.getSequencePoint$().add$TE(point);
}
for (var p, $p = 0, $$p = panel.getRotatableCanvas$().getAxisEndPoints$(); $p<$$p.length&&((p=($$p[$p])),1);$p++) {
var axis=Clazz.new_($I$(48));
axis.setXPos$Float(new Float(p.x));
axis.setYPos$Float(new Float(p.y));
axis.setZPos$Float(new Float(p.z));
viewer.getAxis$().add$TE(axis);
}
var data=Clazz.new_($I$(49));
viewer.setPcaData$jalview_xml_binding_jalview_PcaDataType(data);
var pca=pcaModel.getPcaData$();
var pm=Clazz.new_($I$(50));
this.saveDoubleMatrix$jalview_math_MatrixI$jalview_xml_binding_jalview_DoubleMatrix(pca.getPairwiseScores$(), pm);
data.setPairwiseMatrix$jalview_xml_binding_jalview_DoubleMatrix(pm);
var tm=Clazz.new_($I$(50));
this.saveDoubleMatrix$jalview_math_MatrixI$jalview_xml_binding_jalview_DoubleMatrix(pca.getTridiagonal$(), tm);
data.setTridiagonalMatrix$jalview_xml_binding_jalview_DoubleMatrix(tm);
var eigenMatrix=Clazz.new_($I$(50));
data.setEigenMatrix$jalview_xml_binding_jalview_DoubleMatrix(eigenMatrix);
this.saveDoubleMatrix$jalview_math_MatrixI$jalview_xml_binding_jalview_DoubleMatrix(pca.getEigenmatrix$(), eigenMatrix);
object.getPcaViewer$().add$TE(viewer);
} catch (t) {
$I$(8).log.error$O("Error saving PCA: " + t.getMessage$());
}
});

Clazz.newMeth(C$, 'saveDoubleMatrix$jalview_math_MatrixI$jalview_xml_binding_jalview_DoubleMatrix', function (m, xmlMatrix) {
xmlMatrix.setRows$Integer(new Integer(m.height$()));
xmlMatrix.setColumns$Integer(new Integer(m.width$()));
for (var i=0; i < m.height$(); i++) {
var row=Clazz.new_($I$(51));
for (var j=0; j < m.width$(); j++) {
row.getV$().add$TE(new Double(m.getValue$I$I(i, j)));
}
xmlMatrix.getRow$().add$TE(row);
}
if (m.getD$() != null ) {
var dVector=Clazz.new_($I$(51));
for (var d, $d = 0, $$d = m.getD$(); $d<$$d.length&&((d=($$d[$d])),1);$d++) {
dVector.getV$().add$TE(new Double(d));
}
xmlMatrix.setD$jalview_xml_binding_jalview_DoubleVector(dVector);
}if (m.getE$() != null ) {
var eVector=Clazz.new_($I$(51));
for (var e, $e = 0, $$e = m.getE$(); $e<$$e.length&&((e=($$e[$e])),1);$e++) {
eVector.getV$().add$TE(new Double(e));
}
xmlMatrix.setE$jalview_xml_binding_jalview_DoubleVector(eVector);
}});

Clazz.newMeth(C$, 'loadDoubleMatrix$jalview_xml_binding_jalview_DoubleMatrix', function (mData) {
var rows=(mData.getRows$()).intValue$();
var vals=Clazz.array(Double.TYPE, [rows, null]);
for (var i=0; i < rows; i++) {
var dVector=mData.getRow$().get$I(i).getV$();
vals[i]=Clazz.array(Double.TYPE, [dVector.size$()]);
var dvi=0;
for (var d, $d = dVector.iterator$(); $d.hasNext$()&&((d=($d.next$())),1);) {
vals[i][dvi++]=(d).doubleValue$();
}
}
var m=Clazz.new_($I$(52).c$$DAA,[vals]);
if (mData.getD$() != null ) {
var dVector=mData.getD$().getV$();
var vec=Clazz.array(Double.TYPE, [dVector.size$()]);
var dvi=0;
for (var d, $d = dVector.iterator$(); $d.hasNext$()&&((d=($d.next$())),1);) {
vec[dvi++]=(d).doubleValue$();
}
m.setD$DA(vec);
}if (mData.getE$() != null ) {
var dVector=mData.getE$().getV$();
var vec=Clazz.array(Double.TYPE, [dVector.size$()]);
var dvi=0;
for (var d, $d = dVector.iterator$(); $d.hasNext$()&&((d=($d.next$())),1);) {
vec[dvi++]=(d).doubleValue$();
}
m.setE$DA(vec);
}return m;
});

Clazz.newMeth(C$, 'saveRnaViewers$java_util_jar_JarOutputStream$jalview_xml_binding_jalview_JalviewModel_JSeq$jalview_datamodel_SequenceI$java_util_List$jalview_gui_AlignmentPanel$Z', function (jout, jseq, jds, viewIds, ap, storeDataset) {
if ($I$(9).desktop == null ) {
return;
}var frames=$I$(9).desktop.getAllFrames$();
for (var f=frames.length - 1; f > -1; f--) {
if (Clazz.instanceOf(frames[f], "jalview.gui.AppVarna")) {
var varna=frames[f];
if (varna.isListeningFor$jalview_datamodel_SequenceI(jds) && ap === varna.getAlignmentPanel$()  ) {
var viewId=varna.getViewId$();
var rna=Clazz.new_($I$(53));
rna.setViewId$S(viewId);
rna.setTitle$S(varna.getTitle$());
rna.setXpos$Integer(new Integer(varna.getX$()));
rna.setYpos$Integer(new Integer(varna.getY$()));
rna.setWidth$Integer(new Integer(varna.getWidth$()));
rna.setHeight$Integer(new Integer(varna.getHeight$()));
rna.setDividerLocation$Integer(new Integer(varna.getDividerLocation$()));
rna.setSelectedRna$Integer(new Integer(varna.getSelectedIndex$()));
jseq.getRnaViewer$().add$TE(rna);
for (var model, $model = varna.getModels$().iterator$(); $model.hasNext$()&&((model=($model.next$())),1);) {
if (model.seq === jds ) {
var jarEntryName=this.rnaSessions.get$O(model);
if (jarEntryName == null ) {
var varnaStateFile=varna.getStateInfo$fr_orsay_lri_varna_models_rna_RNA(model.rna);
jarEntryName="rna_" + viewId + "_" + p$1.nextCounter.apply(this, []) ;
this.copyFileToJar$java_util_jar_JarOutputStream$S$S(jout, varnaStateFile, jarEntryName);
this.rnaSessions.put$TK$TV(model, jarEntryName);
}var ss=Clazz.new_($I$(54));
var annotationId=varna.getAnnotation$jalview_datamodel_SequenceI(jds).annotationId;
ss.setAnnotationId$S(annotationId);
ss.setViewerState$S(jarEntryName);
ss.setGapped$Boolean(new Boolean(model.gapped));
ss.setTitle$S(model.title);
rna.getSecondaryStructure$().add$TE(ss);
}}
}}}
});

Clazz.newMeth(C$, 'copyFileToJar$java_util_jar_JarOutputStream$S$S', function (jout, infilePath, jarEntryName) {
var dis=null;
try {
var file=Clazz.new_($I$(12).c$$S,[infilePath]);
if (file.exists$() && jout != null  ) {
dis=Clazz.new_($I$(55).c$$java_io_InputStream,[Clazz.new_($I$(56).c$$java_io_File,[file])]);
var data=Clazz.array(Byte.TYPE, [(file.length$()|0)]);
dis.readFully$BA(data);
this.writeJarEntry$java_util_jar_JarOutputStream$S$BA(jout, jarEntryName, data);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
} finally {
if (dis != null ) {
try {
dis.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}
});

Clazz.newMeth(C$, 'writeJarEntry$java_util_jar_JarOutputStream$S$BA', function (jout, jarEntryName, data) {
if (jout != null ) {
jarEntryName=jarEntryName.replace$C$C("\\", "/");
System.out.println$S("Writing jar entry " + jarEntryName);
jout.putNextEntry$java_util_zip_ZipEntry(Clazz.new_($I$(38).c$$S,[jarEntryName]));
var dout=Clazz.new_($I$(57).c$$java_io_OutputStream,[jout]);
dout.write$BA$I$I(data, 0, data.length);
dout.flush$();
jout.closeEntry$();
}});

Clazz.newMeth(C$, 'saveStructureState$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceI$jalview_xml_binding_jalview_JalviewModel_JSeq_Pdbids$jalview_datamodel_PDBEntry$java_util_List$S$jalview_gui_StructureViewerBase', function (ap, jds, pdb, entry, viewIds, matchedFile, viewFrame) {
var bindingModel=viewFrame.getBinding$();
for (var peid=0; peid < bindingModel.getPdbCount$(); peid++) {
var pdbentry=bindingModel.getPdbEntry$I(peid);
var pdbId=pdbentry.getId$();
if (!pdbId.equals$O(entry.getId$()) && !(entry.getId$().length$() > 4 && entry.getId$().toLowerCase$().startsWith$S(pdbId.toLowerCase$()) ) ) {
continue;
}if (matchedFile == null ) {
matchedFile=pdbentry.getFile$();
} else if (!matchedFile.equals$O(pdbentry.getFile$())) {
$I$(8).log.warn$O("Probably lost some PDB-Sequence mappings for this structure file (which apparently has same PDB Entry code): " + pdbentry.getFile$());
}for (var smap=0; smap < viewFrame.getBinding$().getSequence$()[peid].length; smap++) {
if (jds === viewFrame.getBinding$().getSequence$()[peid][smap] ) {
var state=Clazz.new_($I$(58));
state.setVisible$Boolean(new Boolean(true));
state.setXpos$Integer(new Integer(viewFrame.getX$()));
state.setYpos$Integer(new Integer(viewFrame.getY$()));
state.setWidth$Integer(new Integer(viewFrame.getWidth$()));
state.setHeight$Integer(new Integer(viewFrame.getHeight$()));
var viewId=viewFrame.getViewId$();
state.setViewId$S(viewId);
state.setAlignwithAlignPanel$Boolean(new Boolean(viewFrame.isUsedforaligment$jalview_gui_AlignmentPanel(ap)));
state.setColourwithAlignPanel$Boolean(new Boolean(viewFrame.isUsedforcolourby$jalview_gui_AlignmentPanel(ap)));
state.setColourByJmol$Boolean(new Boolean(viewFrame.isColouredByViewer$()));
state.setType$S(viewFrame.getViewerType$().toString());
pdb.getStructureState$().add$TE(state);
}}
}
return matchedFile;
});

Clazz.newMeth(C$, 'constructAnnotationColours$jalview_schemes_AnnotationColourGradient$java_util_List$jalview_xml_binding_jalview_JalviewModel', function (acg, userColours, jm) {
var ac=Clazz.new_($I$(59));
ac.setAboveThreshold$Integer(new Integer(acg.getAboveThreshold$()));
ac.setThreshold$Float(new Float(acg.getAnnotationThreshold$()));
ac.setAnnotation$S(acg.getAnnotation$().annotationId);
if (Clazz.instanceOf(acg.getBaseColour$(), "jalview.schemes.UserColourScheme")) {
ac.setColourScheme$S(this.setUserColourScheme$jalview_schemes_ColourSchemeI$java_util_List$jalview_xml_binding_jalview_JalviewModel(acg.getBaseColour$(), userColours, jm));
} else {
ac.setColourScheme$S($I$(31).getColourName$jalview_schemes_ColourSchemeI(acg.getBaseColour$()));
}ac.setMaxColour$Integer(new Integer(acg.getMaxColour$().getRGB$()));
ac.setMinColour$Integer(new Integer(acg.getMinColour$().getRGB$()));
ac.setPerSequence$Boolean(new Boolean(acg.isSeqAssociated$()));
ac.setPredefinedColours$Boolean(new Boolean(acg.isPredefinedColours$()));
return ac;
}, p$1);

Clazz.newMeth(C$, 'storeAlignmentAnnotation$jalview_datamodel_AlignmentAnnotationA$java_util_IdentityHashMap$jalview_viewmodel_AlignmentViewport$java_util_Set$Z$jalview_xml_binding_jalview_SequenceSet', function (aa, groupRefs, av, calcIdSet, storeDS, vamsasSet) {
for (var i=0; i < aa.length; i++) {
var an=Clazz.new_($I$(60));
var annotation=aa[i];
if (annotation.annotationId != null ) {
this.annotationIds.put$TK$TV(annotation.annotationId, annotation);
}an.setId$S(annotation.annotationId);
an.setVisible$Boolean(new Boolean(annotation.visible));
an.setDescription$S(annotation.description);
if (annotation.sequenceRef != null ) {
an.setSequenceRef$S(this.seqsToIds.get$O(annotation.sequenceRef));
}if (annotation.groupRef != null ) {
var groupIdr=groupRefs.get$O(annotation.groupRef);
if (groupIdr == null ) {
groupRefs.put$TK$TV(annotation.groupRef, groupIdr=("" + System.currentTimeMillis$() + annotation.groupRef.getName$() + groupRefs.size$() ));
}an.setGroupRef$S(groupIdr.toString());
}an.setGraphHeight$Integer(new Integer(annotation.graphHeight));
an.setCentreColLabels$Boolean(new Boolean(annotation.centreColLabels));
an.setScaleColLabels$Boolean(new Boolean(annotation.scaleColLabel));
an.setShowAllColLabels$Boolean(new Boolean(annotation.showAllColLabels));
an.setBelowAlignment$Boolean(new Boolean(annotation.belowAlignment));
if (annotation.graph > 0) {
an.setGraph$Z(true);
an.setGraphType$Integer(new Integer(annotation.graph));
an.setGraphGroup$Integer(new Integer(annotation.graphGroup));
if (annotation.getThreshold$() != null ) {
var line=Clazz.new_($I$(61));
line.setLabel$S(annotation.getThreshold$().label);
line.setValue$Float(new Float(annotation.getThreshold$().value));
line.setColour$Integer(new Integer(annotation.getThreshold$().colour.getRGB$()));
an.setThresholdLine$jalview_xml_binding_jalview_Annotation_ThresholdLine(line);
}} else {
an.setGraph$Z(false);
}an.setLabel$S(annotation.label);
if (annotation === av.getAlignmentQualityAnnot$()  || annotation === av.getAlignmentConservationAnnotation$()   || annotation === av.getAlignmentConsensusAnnotation$()   || annotation.autoCalculated ) {
an.setAutoCalculated$Boolean(new Boolean(annotation.autoCalculated));
}if (annotation.hasScore$()) {
an.setScore$Double(new Double(annotation.getScore$()));
}if (annotation.getCalcId$() != null ) {
calcIdSet.add$TE(annotation.getCalcId$());
an.setCalcId$S(annotation.getCalcId$());
}if (annotation.hasProperties$()) {
for (var pr, $pr = annotation.getProperties$().iterator$(); $pr.hasNext$()&&((pr=($pr.next$())),1);) {
var prop=Clazz.new_($I$(62));
prop.setName$S(pr);
prop.setValue$S(annotation.getProperty$S(pr));
an.getProperty$().add$TE(prop);
}
}var ae;
if (annotation.annotations != null ) {
an.setScoreOnly$Boolean(new Boolean(false));
for (var a=0; a < annotation.annotations.length; a++) {
if ((annotation == null ) || (annotation.annotations[a] == null ) ) {
continue;
}ae=Clazz.new_($I$(63));
if (annotation.annotations[a].description != null ) {
ae.setDescription$S(annotation.annotations[a].description);
}if (annotation.annotations[a].displayCharacter != null ) {
ae.setDisplayCharacter$S(annotation.annotations[a].displayCharacter);
}if (!Float.isNaN$F(annotation.annotations[a].value)) {
ae.setValue$Float(new Float(annotation.annotations[a].value));
}ae.setPosition$I(a);
if (annotation.annotations[a].secondaryStructure > " ") {
ae.setSecondaryStructure$S(annotation.annotations[a].secondaryStructure + "");
}if (annotation.annotations[a].colour != null  && annotation.annotations[a].colour !== $I$(64).black  ) {
ae.setColour$Integer(new Integer(annotation.annotations[a].colour.getRGB$()));
}an.getAnnotationElement$().add$TE(ae);
if (annotation.autoCalculated) {
continue;
}}
} else {
an.setScoreOnly$Boolean(new Boolean(true));
}if (!storeDS || (storeDS && !annotation.autoCalculated ) ) {
vamsasSet.getAnnotation$().add$TE(an);
}}
}, p$1);

Clazz.newMeth(C$, 'createCalcIdParam$S$jalview_gui_AlignViewport', function (calcId, av) {
var settings=av.getCalcIdSettingsFor$S(calcId);
if (settings != null ) {
var vCalcIdParam=Clazz.new_($I$(65));
vCalcIdParam.setCalcId$S(calcId);
vCalcIdParam.getServiceURL$().add$TE(settings.getServiceURI$());
for (var url, $url = 0, $$url = settings.getServiceURLs$(); $url<$$url.length&&((url=($$url[$url])),1);$url++) {
vCalcIdParam.getServiceURL$().add$TE(url);
}
vCalcIdParam.setVersion$S("1.0");
if (settings.getPreset$() != null ) {
var setting=settings.getPreset$();
vCalcIdParam.setName$S(setting.getName$());
vCalcIdParam.setDescription$S(setting.getDescription$());
} else {
vCalcIdParam.setName$S("");
vCalcIdParam.setDescription$S("Last used parameters");
}vCalcIdParam.setParameters$S(settings.getWsParamFile$().replace$CharSequence$CharSequence("\n", "|\\n|"));
vCalcIdParam.setAutoUpdate$Z(settings.isAutoUpdate$());
return vCalcIdParam;
}return null;
}, p$1);

Clazz.newMeth(C$, 'recoverCalcIdParam$jalview_xml_binding_jalview_JalviewModel_Viewport_CalcIdParam$jalview_gui_AlignViewport', function (calcIdParam, av) {
if (calcIdParam.getVersion$().equals$O("1.0")) {
var calcIds=calcIdParam.getServiceURL$().toArray$TTA(Clazz.array(String, [0]));
var service=$I$(66).getDiscoverer$().getPreferredServiceFor$SA(calcIds);
if (service != null ) {
var parmSet=null;
try {
parmSet=service.getParamStore$().parseServiceParameterFile$S$S$SA$S(calcIdParam.getName$(), calcIdParam.getDescription$(), calcIds, calcIdParam.getParameters$().replace$CharSequence$CharSequence("|\\n|", "\n"));
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
p$1.warn$S$Exception.apply(this, ["Couldn't parse parameter data for " + calcIdParam.getCalcId$(), x]);
return false;
} else {
throw x;
}
}
var argList=null;
if (calcIdParam.getName$().length$() > 0) {
parmSet=service.getParamStore$().getPreset$S(calcIdParam.getName$());
if (parmSet != null ) {
}} else {
argList=parmSet.getArguments$();
parmSet=null;
}var settings=Clazz.new_($I$(67).c$$Z$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_WsParamSetI$java_util_List,[calcIdParam.isAutoUpdate$(), service, parmSet, argList]);
av.setCalcIdSettingsFor$S$jalview_ws_params_AutoCalcSetting$Z(calcIdParam.getCalcId$(), settings, calcIdParam.isNeedsUpdate$());
return true;
} else {
p$1.warn$S.apply(this, ["Cannot resolve a service for the parameters used in this project. Try configuring a JABAWS server."]);
return false;
}}throw Clazz.new_($I$(68).c$$S,[$I$(69).formatMessage$S$OA("error.unsupported_version_calcIdparam", Clazz.array(java.lang.Object, -1, [calcIdParam.toString()]))]);
}, p$1);

Clazz.newMeth(C$, 'makeHashCode$O$S', function (jvobj, altCode) {
if (this.jv2vobj != null ) {
var id=this.jv2vobj.get$O(jvobj);
if (id != null ) {
return id.toString();
}if (this.jvids2vobj != null  && Clazz.instanceOf(jvobj, "java.lang.String") ) {
id=this.jvids2vobj.get$O(jvobj);
}if (id != null ) {
return id.toString();
}p$1.warn$S.apply(this, ["Cannot find ID for object in external mapping : " + jvobj]);
}return altCode;
}, p$1);

Clazz.newMeth(C$, 'retrieveExistingObj$S', function (idcode) {
if (idcode != null  && this.vobj2jv != null  ) {
return this.vobj2jv.get$O(idcode);
}return null;
}, p$1);

Clazz.newMeth(C$, 'createVamsasSequence$S$jalview_datamodel_SequenceI', function (id, jds) {
return p$1.createVamsasSequence$Z$S$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI.apply(this, [true, id, jds, null]);
}, p$1);

Clazz.newMeth(C$, 'createVamsasSequence$Z$S$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI', function (recurse, id, jds, parentseq) {
var vamsasSeq=Clazz.new_($I$(70));
vamsasSeq.setId$S(id);
vamsasSeq.setName$S(jds.getName$());
vamsasSeq.setSequence$S(jds.getSequenceAsString$());
vamsasSeq.setDescription$S(jds.getDescription$());
var dbrefs=null;
if (jds.getDatasetSequence$() != null ) {
vamsasSeq.setDsseqid$S(this.seqHash$jalview_datamodel_SequenceI(jds.getDatasetSequence$()));
} else {
vamsasSeq.setDsseqid$S(id);
dbrefs=jds.getDBRefs$();
if (parentseq == null ) {
parentseq=jds;
}}if (dbrefs != null ) {
for (var d=0, nd=dbrefs.size$(); d < nd; d++) {
var dbref=Clazz.new_($I$(71));
var ref=dbrefs.get$I(d);
dbref.setSource$S(ref.getSource$());
dbref.setVersion$S(ref.getVersion$());
dbref.setAccessionId$S(ref.getAccessionId$());
if (ref.hasMap$()) {
var mp=p$1.createVamsasMapping$jalview_datamodel_Mapping$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$Z.apply(this, [ref.getMap$(), parentseq, jds, recurse]);
dbref.setMapping$jalview_xml_binding_jalview_Mapping(mp);
}vamsasSeq.getDBRef$().add$TE(dbref);
}
}return vamsasSeq;
}, p$1);

Clazz.newMeth(C$, 'createVamsasMapping$jalview_datamodel_Mapping$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$Z', function (jmp, parentseq, jds, recurse) {
var mp=null;
if (jmp.getMap$() != null ) {
mp=Clazz.new_($I$(72));
var mlst=jmp.getMap$();
var r=mlst.getFromRanges$();
for (var range, $range = r.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
var mfrom=Clazz.new_($I$(73));
mfrom.setStart$I(range[0]);
mfrom.setEnd$I(range[1]);
mp.getMapListFrom$().add$TE(mfrom);
}
r=mlst.getToRanges$();
for (var range, $range = r.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
var mto=Clazz.new_($I$(74));
mto.setStart$I(range[0]);
mto.setEnd$I(range[1]);
mp.getMapListTo$().add$TE(mto);
}
mp.setMapFromUnit$java_math_BigInteger($I$(75).valueOf$J(mlst.getFromRatio$()));
mp.setMapToUnit$java_math_BigInteger($I$(75).valueOf$J(mlst.getToRatio$()));
if (jmp.getTo$() != null ) {
var jmpid="";
var ps=null;
if (parentseq !== jmp.getTo$()  && parentseq.getDatasetSequence$() !== jmp.getTo$()  ) {
jmpid=this.seqHash$jalview_datamodel_SequenceI(ps=jmp.getTo$());
} else {
jmpid=this.seqHash$jalview_datamodel_SequenceI(ps=parentseq);
}mp.setDseqFor$S(jmpid);
if (!this.seqRefIds.containsKey$O(jmpid)) {
$I$(8).log.debug$O("creatign new DseqFor ID");
this.seqRefIds.put$TK$TV(jmpid, ps);
} else {
$I$(8).log.debug$O("reusing DseqFor ID");
}}}return mp;
}, p$1);

Clazz.newMeth(C$, 'setUserColourScheme$jalview_schemes_ColourSchemeI$java_util_List$jalview_xml_binding_jalview_JalviewModel', function (cs, userColours, jm) {
var id=null;
var ucs=cs;
var newucs=false;
if (!userColours.contains$O(ucs)) {
userColours.add$TE(ucs);
newucs=true;
}id="ucs" + userColours.indexOf$O(ucs);
if (newucs) {
var colours=ucs.getColours$();
var uc=Clazz.new_($I$(76));
var jbucs=Clazz.new_($I$(77));
for (var i=0; i < colours.length; i++) {
var col=Clazz.new_($I$(78));
col.setName$S($I$(79).aa[i]);
col.setRGB$S($I$(80).getHexString$java_awt_Color(colours[i]));
jbucs.getColour$().add$TE(col);
}
if (ucs.getLowerCaseColours$() != null ) {
colours=ucs.getLowerCaseColours$();
for (var i=0; i < colours.length; i++) {
var col=Clazz.new_($I$(78));
col.setName$S($I$(79).aa[i].toLowerCase$());
col.setRGB$S($I$(80).getHexString$java_awt_Color(colours[i]));
jbucs.getColour$().add$TE(col);
}
}uc.setId$S(id);
uc.setUserColourScheme$jalview_xml_binding_jalview_JalviewUserColours(jbucs);
jm.getUserColours$().add$TE(uc);
}return id;
});

Clazz.newMeth(C$, 'getUserColourScheme$jalview_xml_binding_jalview_JalviewModel$S', function (jm, id) {
var uc=jm.getUserColours$();
var colours=null;
for (var c, $c = uc.iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) {
if (c.getId$().equals$O(id)) {
colours=c;
break;
}}
var newColours=Clazz.array($I$(64), [24]);
for (var i=0; i < 24; i++) {
newColours[i]=Clazz.new_($I$(64).c$$I,[Integer.parseInt$S$I(colours.getUserColourScheme$().getColour$().get$I(i).getRGB$(), 16)]);
}
var ucs=Clazz.new_($I$(81).c$$java_awt_ColorA,[newColours]);
if (colours.getUserColourScheme$().getColour$().size$() > 24) {
newColours=Clazz.array($I$(64), [23]);
for (var i=0; i < 23; i++) {
newColours[i]=Clazz.new_($I$(64).c$$I,[Integer.parseInt$S$I(colours.getUserColourScheme$().getColour$().get$I(i + 24).getRGB$(), 16)]);
}
ucs.setLowerCaseColours$java_awt_ColorA(newColours);
}return ucs;
});

Clazz.newMeth(C$, 'loadJalviewAlign$O', function (file) {
var af=null;
try {
this.newStructureViewers=Clazz.new_($I$(33));
var jprovider=p$1.createjarInputStreamProvider$O.apply(this, [file]);
af=this.loadJalviewAlign$jalview_util_jarInputStreamProvider(jprovider);
if (af != null ) {
af.setMenusForViewport$();
}} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
this.errorMessage="Invalid URL format for '" + file + "'" ;
this.reportErrors$();
} else {
throw e;
}
} finally {
try {
$I$(82).invokeAndWait$Runnable(((P$.Jalview2XML$3||
(function(){var C$=Clazz.newClass(P$, "Jalview2XML$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['jalview.project.Jalview2XML'].setLoadingFinishedForNewStructureViewers$.apply(this.b$['jalview.project.Jalview2XML'], []);
});
})()
), Clazz.new_(P$.Jalview2XML$3.$init$, [this, null])));
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
System.err.println$S("Error loading alignment: " + x.getMessage$());
} else {
throw x;
}
}
}
return af;
});

Clazz.newMeth(C$, 'createjarInputStreamProvider$O', function (ofile) {
try {
var file=(Clazz.instanceOf(ofile, "java.io.File") ? (ofile).getCanonicalPath$() : ofile.toString());
var bytes=$I$(1).isJS$() ? $I$(1).getFileBytes$java_io_File(ofile) : null;
var url=null;
this.errorMessage=null;
this.uniqueSetSuffix=null;
this.seqRefIds=null;
this.viewportsAdded.clear$();
this.frefedSequence=null;
if (file.startsWith$S("http://")) {
url=Clazz.new_($I$(83).c$$S,[file]);
}var _url=url;
return ((P$.Jalview2XML$4||
(function(){var C$=Clazz.newClass(P$, "Jalview2XML$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'jalview.util.jarInputStreamProvider', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getJarInputStream$', function () {
if (this.$finals$.bytes != null ) {
return Clazz.new_($I$(84).c$$java_io_InputStream,[Clazz.new_($I$(85).c$$BA,[this.$finals$.bytes])]);
}if (this.$finals$._url != null ) {
return Clazz.new_($I$(84).c$$java_io_InputStream,[this.$finals$._url.openStream$()]);
} else {
return Clazz.new_($I$(84).c$$java_io_InputStream,[Clazz.new_($I$(56).c$$S,[this.$finals$.file])]);
}});

Clazz.newMeth(C$, 'getFilename$', function () {
return this.$finals$.file;
});
})()
), Clazz.new_(P$.Jalview2XML$4.$init$, [this, {bytes: bytes, _url: _url, file: file}]));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
return null;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'loadJalviewAlign$jalview_util_jarInputStreamProvider', function (jprovider) {
this.errorMessage=null;
if (this.uniqueSetSuffix == null ) {
this.uniqueSetSuffix=System.currentTimeMillis$() % 100000 + "";
}if (this.seqRefIds == null ) {
this.initSeqRefs$();
}var af=null;
var _af=null;
var importedDatasets=Clazz.new_($I$(3));
var gatherToThisFrame=Clazz.new_($I$(2));
var file=jprovider.getFilename$();
try {
var jin=null;
var jarentry=null;
var entryCount=1;
do {
jin=jprovider.getJarInputStream$();
for (var i=0; i < entryCount; i++) {
jarentry=jin.getNextJarEntry$();
}
if (jarentry != null  && jarentry.getName$().endsWith$S(".xml") ) {
var jc=$I$(41).newInstance$S("jalview.xml.binding.jalview");
var streamReader=$I$(86).newInstance$().createXMLStreamReader$java_io_InputStream(jin);
var um=jc.createUnmarshaller$();
var jbe=um.unmarshal$javax_xml_stream_XMLStreamReader$Class(streamReader, Clazz.getClass($I$(42)));
var object=jbe.getValue$();
if (true) {
_af=this.loadFromObject$jalview_xml_binding_jalview_JalviewModel$S$Z$jalview_util_jarInputStreamProvider(object, file, true, jprovider);
if (_af != null  && object.getViewport$().size$() > 0 ) {
if (af == null ) {
af=_af;
}if (_af.getViewport$().isGatherViewsHere$()) {
af=_af;
gatherToThisFrame.put$TK$TV(_af.getViewport$().getSequenceSetId$(), _af);
}importedDatasets.put$TK$TV(af.getViewport$().getAlignment$().getDataset$(), af.getViewport$().getAlignment$().getDataset$());
}}entryCount++;
} else if (jarentry != null ) {
entryCount++;
}} while (jarentry != null );
this.resolveFrefedSequences$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ex = e$$;
{
ex.printStackTrace$();
this.errorMessage="Couldn't locate Jalview XML file : " + file;
System.err.println$S("Exception whilst loading jalview XML file : " + ex + "\n" );
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
System.err.println$S("Parsing as Jalview Version 2 file failed.");
ex.printStackTrace$java_io_PrintStream(System.err);
if (this.attemptversion1parse) {
}if ($I$(9).instance != null ) {
$I$(9).instance.stopLoading$();
}if (af != null ) {
System.out.println$S("Successfully loaded archive file");
return af;
}ex.printStackTrace$();
System.err.println$S("Exception whilst loading jalview XML file : " + ex + "\n" );
}
} else if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var e = e$$;
{
this.errorMessage="Out of memory loading jalview XML file";
System.err.println$S("Out of memory whilst loading jalview XML file");
e.printStackTrace$();
}
} else {
throw e$$;
}
}
for (var fr, $fr = gatherToThisFrame.values$().iterator$(); $fr.hasNext$()&&((fr=($fr.next$())),1);) {
$I$(9).instance.gatherViews$jalview_gui_AlignFrame(fr);
}
this.restoreSplitFrames$();
for (var ds, $ds = importedDatasets.keySet$().iterator$(); $ds.hasNext$()&&((ds=($ds.next$())),1);) {
if (ds.getCodonFrames$() != null ) {
$I$(87).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider($I$(9).instance).registerMappings$java_util_List(ds.getCodonFrames$());
}}
if (this.errorMessage != null ) {
this.reportErrors$();
}if ($I$(9).instance != null ) {
$I$(9).instance.stopLoading$();
}return af;
});

Clazz.newMeth(C$, 'restoreSplitFrames$', function () {
var gatherTo=Clazz.new_($I$(4));
var addedToSplitFrames=Clazz.new_($I$(4));
var dna=Clazz.new_($I$(2));
for (var candidate, $candidate = this.splitFrameCandidates.entrySet$().iterator$(); $candidate.hasNext$()&&((candidate=($candidate.next$())),1);) {
var af=candidate.getValue$();
if (af.getViewport$().getAlignment$().isNucleotide$()) {
dna.put$TK$TV(candidate.getKey$().getId$(), af);
}}
for (var candidate, $candidate = this.splitFrameCandidates.entrySet$().iterator$(); $candidate.hasNext$()&&((candidate=($candidate.next$())),1);) {
var af=candidate.getValue$();
if (!af.getViewport$().getAlignment$().isNucleotide$()) {
var complementId=candidate.getKey$().getComplementId$();
if (complementId != null  && dna.containsKey$O(complementId) ) {
var dnaFrame=dna.get$O(complementId);
var sf=this.createSplitFrame$jalview_gui_AlignFrame$jalview_gui_AlignFrame(dnaFrame, af);
addedToSplitFrames.add$TE(dnaFrame);
addedToSplitFrames.add$TE(af);
dnaFrame.setMenusForViewport$();
af.setMenusForViewport$();
if (af.getViewport$().isGatherViewsHere$()) {
gatherTo.add$TE(sf);
}}}}
for (var candidate, $candidate = this.splitFrameCandidates.entrySet$().iterator$(); $candidate.hasNext$()&&((candidate=($candidate.next$())),1);) {
var af=candidate.getValue$();
if (!addedToSplitFrames.contains$O(af)) {
var view=candidate.getKey$();
$I$(9).addInternalFrame$javax_swing_JInternalFrame$S$I$I(af, view.getTitle$(), C$.safeInt$Integer(view.getWidth$()), C$.safeInt$Integer(view.getHeight$()));
af.setMenusForViewport$();
System.err.println$S("Failed to restore view " + view.getTitle$() + " to split frame" );
}}
for (var sf, $sf = gatherTo.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
$I$(9).instance.gatherViews$jalview_jbgui_GSplitFrame(sf);
}
this.splitFrameCandidates.clear$();
});

Clazz.newMeth(C$, 'createSplitFrame$jalview_gui_AlignFrame$jalview_gui_AlignFrame', function (dnaFrame, proteinFrame) {
var splitFrame=Clazz.new_($I$(88).c$$jalview_jbgui_GAlignFrame$jalview_jbgui_GAlignFrame,[dnaFrame, proteinFrame]);
var title=$I$(69).getString$S("label.linked_view_title");
var width=(dnaFrame.getBounds$().getWidth$()|0);
var height=((dnaFrame.getBounds$().getHeight$() + proteinFrame.getBounds$().getHeight$() + 50 )|0);
splitFrame.setLocation$I$I(dnaFrame.getX$(), dnaFrame.getY$());
$I$(9).addInternalFrame$javax_swing_JInternalFrame$S$I$I(splitFrame, title, width, height);
proteinFrame.getViewport$().alignmentChanged$jalview_api_AlignmentViewPanel(proteinFrame.alignPanel);
return splitFrame;
});

Clazz.newMeth(C$, 'reportErrors$', function () {
this.reportErrors$Z(false);
});

Clazz.newMeth(C$, 'reportErrors$Z', function (saving) {
if (this.errorMessage != null ) {
var finalErrorMessage=this.errorMessage;
if (this.raiseGUI) {
$I$(82).invokeLater$Runnable(((P$.Jalview2XML$5||
(function(){var C$=Clazz.newClass(P$, "Jalview2XML$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
$I$(89).showInternalMessageDialog$java_awt_Component$S$S$I($I$(9).desktop, this.$finals$.finalErrorMessage, "Error " + (this.$finals$.saving ? "saving" : "loading") + " Jalview file" , 2);
});
})()
), Clazz.new_(P$.Jalview2XML$5.$init$, [this, {finalErrorMessage: finalErrorMessage, saving: saving}])));
} else {
System.err.println$S("Problem loading Jalview file: " + this.errorMessage);
}}this.errorMessage=null;
});

Clazz.newMeth(C$, 'loadPDBFile$jalview_util_jarInputStreamProvider$S$S', function (jprovider, pdbId, origFile) {
if (this.alreadyLoadedPDB.containsKey$O(pdbId)) {
return this.alreadyLoadedPDB.get$O(pdbId).toString();
}var tempFile=this.copyJarEntry$jalview_util_jarInputStreamProvider$S$S$S(jprovider, pdbId, "jalview_pdb", origFile);
if (tempFile != null ) {
this.alreadyLoadedPDB.put$TK$TV(pdbId, tempFile);
}return tempFile;
});

Clazz.newMeth(C$, 'copyJarEntry$jalview_util_jarInputStreamProvider$S$S$S', function (jprovider, jarEntryName, prefix, origFile) {
var $in=null;
var out=null;
var suffix=".tmp";
if (origFile == null ) {
origFile=jarEntryName;
}var sfpos=origFile.lastIndexOf$S(".");
if (sfpos > -1 && sfpos < (origFile.length$() - 3) ) {
suffix="." + origFile.substring$I(sfpos + 1);
}try {
var jin=jprovider.getJarInputStream$();
var entry=null;
do {
entry=jin.getNextJarEntry$();
} while (entry != null  && !entry.getName$().equals$O(jarEntryName) );
if (entry != null ) {
$in=Clazz.new_($I$(90).c$$java_io_Reader,[Clazz.new_($I$(91).c$$java_io_InputStream$S,[jin, "UTF-8"])]);
var outFile=$I$(12).createTempFile$S$S(prefix, suffix);
outFile.deleteOnExit$();
out=Clazz.new_($I$(39).c$$java_io_OutputStream,[Clazz.new_($I$(6).c$$java_io_File,[outFile])]);
var data;
while ((data=$in.readLine$()) != null ){
out.println$S(data);
}
out.flush$();
var t=outFile.getAbsolutePath$();
return t;
} else {
p$1.warn$S.apply(this, ["Couldn't find entry in Jalview Jar for " + jarEntryName]);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
} finally {
if ($in != null ) {
try {
$in.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}if (out != null ) {
out.close$();
}}
return null;
});

Clazz.newMeth(C$, 'loadFromObject$jalview_xml_binding_jalview_JalviewModel$S$Z$jalview_util_jarInputStreamProvider', function (jalviewModel, file, loadTreesAndStructures, jprovider) {
var vamsasSet=jalviewModel.getVamsasModel$().getSequenceSet$().get$I(0);
var vamsasSeqs=vamsasSet.getSequence$();
var view=(jalviewModel.getViewport$().size$() > 0) ? jalviewModel.getViewport$().get$I(0) : null;
var uniqueSeqSetId=null;
var viewId=null;
if (view != null ) {
uniqueSeqSetId=view.getSequenceSetId$() + this.uniqueSetSuffix;
viewId=(view.getId$() == null  ? null : view.getId$() + this.uniqueSetSuffix);
}var hiddenSeqs=null;
var tmpseqs=Clazz.new_($I$(4));
var multipleView=false;
var referenceseqForView=null;
var jseqs=jalviewModel.getJSeq$();
var vi=0;
for (var i=0; i < jseqs.size$(); i++) {
var jseq=jseqs.get$I(i);
var seqId=jseq.getId$();
var tmpSeq=this.seqRefIds.get$O(seqId);
if (tmpSeq != null ) {
if (!this.incompleteSeqs.containsKey$O(seqId)) {
if (tmpSeq.getStart$() != jseq.getStart$() || tmpSeq.getEnd$() != jseq.getEnd$() ) {
System.err.println$S("Warning JAL-2154 regression: updating start/end for sequence " + tmpSeq.toString() + " to " + jseq );
}} else {
this.incompleteSeqs.remove$O(seqId);
}if (vamsasSeqs.size$() > vi && vamsasSeqs.get$I(vi).getId$().equals$O(seqId) ) {
tmpSeq.setName$S(vamsasSeqs.get$I(vi).getName$());
tmpSeq.setDescription$S(vamsasSeqs.get$I(vi).getDescription$());
tmpSeq.setSequence$S(vamsasSeqs.get$I(vi).getSequence$());
vi++;
} else {
multipleView=true;
}tmpSeq.setStart$I(jseq.getStart$());
tmpSeq.setEnd$I(jseq.getEnd$());
tmpseqs.add$TE(tmpSeq);
} else {
var vamsasSeq=vamsasSeqs.get$I(vi);
tmpSeq=Clazz.new_($I$(92).c$$S$S,[vamsasSeq.getName$(), vamsasSeq.getSequence$()]);
tmpSeq.setDescription$S(vamsasSeq.getDescription$());
tmpSeq.setStart$I(jseq.getStart$());
tmpSeq.setEnd$I(jseq.getEnd$());
tmpSeq.setVamsasId$S(this.uniqueSetSuffix + seqId);
this.seqRefIds.put$TK$TV(vamsasSeq.getId$(), tmpSeq);
tmpseqs.add$TE(tmpSeq);
vi++;
}if (C$.safeBoolean$Boolean(jseq.isViewreference$())) {
referenceseqForView=tmpseqs.get$I(tmpseqs.size$() - 1);
}if (jseq.isHidden$() != null  && jseq.isHidden$().booleanValue$() ) {
if (hiddenSeqs == null ) {
hiddenSeqs=Clazz.new_($I$(4));
}hiddenSeqs.add$TE(tmpSeq);
}}
var orderedSeqs=tmpseqs.toArray$TTA(Clazz.array($I$(93), [tmpseqs.size$()]));
var al=null;
if (vamsasSet.getDatasetId$() == null  || vamsasSet.getDatasetId$() == "" ) {
al=Clazz.new_($I$(94).c$$jalview_datamodel_SequenceIA,[orderedSeqs]);
al.setDataset$jalview_datamodel_AlignmentI(null);
} else {
var isdsal=jalviewModel.getViewport$().isEmpty$();
if (isdsal) {
al=p$1.getDatasetFor$S.apply(this, [vamsasSet.getDatasetId$()]);
}if (al == null ) {
al=Clazz.new_($I$(94).c$$jalview_datamodel_SequenceIA,[orderedSeqs]);
}if (isdsal) {
p$1.addDatasetRef$S$jalview_datamodel_AlignmentI.apply(this, [vamsasSet.getDatasetId$(), al]);
}p$1.recoverDatasetFor$jalview_xml_binding_jalview_SequenceSet$jalview_datamodel_AlignmentI$Z$S.apply(this, [vamsasSet, al, isdsal, uniqueSeqSetId]);
}if (referenceseqForView != null ) {
al.setSeqrep$jalview_datamodel_SequenceI(referenceseqForView);
}for (var i=0; i < vamsasSet.getSequenceSetProperties$().size$(); i++) {
var ssp=vamsasSet.getSequenceSetProperties$().get$I(i);
al.setProperty$O$O(ssp.getKey$(), ssp.getValue$());
}
var pdbloaded=Clazz.new_($I$(11));
if (!multipleView) {
for (var i=0; i < vamsasSeqs.size$(); i++) {
var jseq=jseqs.get$I(i);
if (jseq.getFeatures$().size$() > 0) {
var features=jseq.getFeatures$();
for (var f=0; f < features.size$(); f++) {
var feat=features.get$I(f);
var sf=Clazz.new_($I$(95).c$$S$S$I$I$F$S,[feat.getType$(), feat.getDescription$(), feat.getBegin$(), feat.getEnd$(), C$.safeFloat$Float(feat.getScore$()), feat.getFeatureGroup$()]);
sf.setStatus$S(feat.getStatus$());
var mapAttributes=Clazz.new_($I$(2));
for (var od=0; od < feat.getOtherData$().size$(); od++) {
var keyValue=feat.getOtherData$().get$I(od);
var attributeName=keyValue.getKey$();
var attributeValue=keyValue.getValue$();
if (attributeName.startsWith$S("LINK")) {
sf.addLink$S(attributeValue);
} else {
var subAttribute=keyValue.getKey2$();
if (subAttribute == null ) {
sf.setValue$S$O(attributeName, attributeValue);
} else {
if (!mapAttributes.containsKey$O(attributeName)) {
mapAttributes.put$TK$TV(attributeName, Clazz.new_($I$(2)));
}mapAttributes.get$O(attributeName).put$TK$TV(subAttribute, attributeValue);
}}}
for (var mapAttribute, $mapAttribute = mapAttributes.entrySet$().iterator$(); $mapAttribute.hasNext$()&&((mapAttribute=($mapAttribute.next$())),1);) {
sf.setValue$S$O(mapAttribute.getKey$(), mapAttribute.getValue$());
}
al.getSequenceAt$I(i).addSequenceFeature$jalview_datamodel_SequenceFeature(sf);
}
}if (vamsasSeqs.get$I(i).getDBRef$().size$() > 0) {
p$1.addDBRefs$jalview_datamodel_SequenceI$jalview_xml_binding_jalview_Sequence.apply(this, [al.getSequenceAt$I(i).getDatasetSequence$() == null  ? al.getSequenceAt$I(i) : al.getSequenceAt$I(i).getDatasetSequence$(), vamsasSeqs.get$I(i)]);
}if (jseq.getPdbids$().size$() > 0) {
var ids=jseq.getPdbids$();
for (var p=0; p < ids.size$(); p++) {
var pdbid=ids.get$I(p);
var entry=Clazz.new_($I$(96));
entry.setId$S(pdbid.getId$());
if (pdbid.getType$() != null ) {
if ($I$(97).getType$S(pdbid.getType$()) != null ) {
entry.setType$jalview_datamodel_PDBEntry_Type($I$(97).getType$S(pdbid.getType$()));
} else {
entry.setType$jalview_datamodel_PDBEntry_Type($I$(97).FILE);
}}if (pdbid.getFile$() != null  && jprovider != null  ) {
if (!pdbloaded.containsKey$O(pdbid.getFile$())) {
entry.setFile$S(this.loadPDBFile$jalview_util_jarInputStreamProvider$S$S(jprovider, pdbid.getId$(), pdbid.getFile$()));
} else {
entry.setFile$S(pdbloaded.get$O(pdbid.getId$()).toString());
}}for (var prop, $prop = pdbid.getProperty$().iterator$(); $prop.hasNext$()&&((prop=($prop.next$())),1);) {
entry.setProperty$S$O(prop.getName$(), prop.getValue$());
}
$I$(87).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider($I$(9).instance).registerPDBEntry$jalview_datamodel_PDBEntry(entry);
if (al.getSequenceAt$I(i).getDatasetSequence$() != null ) {
al.getSequenceAt$I(i).getDatasetSequence$().addPDBId$jalview_datamodel_PDBEntry(entry);
} else {
al.getSequenceAt$I(i).addPDBId$jalview_datamodel_PDBEntry(entry);
}}
}}
}if (vamsasSet.getAlcodonFrame$().size$() > 0) {
var alc=vamsasSet.getAlcodonFrame$();
for (var i=0; i < alc.size$(); i++) {
var cf=Clazz.new_($I$(98));
if (alc.get$I(i).getAlcodMap$().size$() > 0) {
var maps=alc.get$I(i).getAlcodMap$();
for (var m=0; m < maps.size$(); m++) {
var map=maps.get$I(m);
var dnaseq=this.seqRefIds.get$O(map.getDnasq$());
var mapping=null;
if (map.getMapping$() != null ) {
mapping=p$1.addMapping$jalview_xml_binding_jalview_Mapping.apply(this, [map.getMapping$()]);
if (dnaseq != null  && mapping.getTo$() != null  ) {
cf.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(dnaseq, mapping.getTo$(), mapping.getMap$());
} else {
this.frefedSequence.add$TE(this.newAlcodMapRef$S$jalview_datamodel_AlignedCodonFrame$jalview_datamodel_Mapping(map.getDnasq$(), cf, mapping));
}}}
al.addCodonFrame$jalview_datamodel_AlignedCodonFrame(cf);
}}
}var autoAlan=Clazz.new_($I$(4));
var groupAnnotRefs=Clazz.new_($I$(11));
if (vamsasSet.getAnnotation$().size$() > 0) {
var an=vamsasSet.getAnnotation$();
for (var i=0; i < an.size$(); i++) {
var annotation=an.get$I(i);
var autoForView=false;
if (annotation.getLabel$().equals$O("Quality") || annotation.getLabel$().equals$O("Conservation") || annotation.getLabel$().equals$O("Consensus")  ) {
autoForView=true;
}if (autoForView || annotation.isAutoCalculated$() ) {
annotation.setId$S(null);
}var annotationId=annotation.getId$();
if (annotationId != null  && this.annotationIds.containsKey$O(annotationId) ) {
var jda=this.annotationIds.get$O(annotationId);
if (annotation.isVisible$() != null ) {
jda.visible=(annotation.isVisible$()).booleanValue$();
}al.addAnnotation$jalview_datamodel_AlignmentAnnotation(jda);
continue;
}var ae=annotation.getAnnotationElement$();
var anot=null;
var firstColour=null;
var anpos;
if (!annotation.isScoreOnly$()) {
anot=Clazz.array($I$(99), [al.getWidth$()]);
for (var aa=0; aa < ae.size$() && aa < anot.length ; aa++) {
var annElement=ae.get$I(aa);
anpos=annElement.getPosition$();
if (anpos >= anot.length) {
continue;
}var value=C$.safeFloat$Float(annElement.getValue$());
anot[anpos]=Clazz.new_($I$(99).c$$S$S$C$F,[annElement.getDisplayCharacter$(), annElement.getDescription$(), (annElement.getSecondaryStructure$() == null  || annElement.getSecondaryStructure$().length$() == 0 ) ? " " : annElement.getSecondaryStructure$().charAt$I(0), value]);
anot[anpos].colour=Clazz.new_($I$(64).c$$I,[C$.safeInt$Integer(annElement.getColour$())]);
if (firstColour == null ) {
firstColour=anot[anpos].colour;
}}
}var jaa=null;
if (annotation.isGraph$()) {
var llim=0;
var hlim=0;
jaa=Clazz.new_($I$(100).c$$S$S$jalview_datamodel_AnnotationA$F$F$I,[annotation.getLabel$(), annotation.getDescription$(), anot, llim, hlim, C$.safeInt$Integer(annotation.getGraphType$())]);
jaa.graphGroup=C$.safeInt$Integer(annotation.getGraphGroup$());
jaa._linecolour=firstColour;
if (annotation.getThresholdLine$() != null ) {
jaa.setThreshold$jalview_datamodel_GraphLine(Clazz.new_($I$(101).c$$F$S$java_awt_Color,[C$.safeFloat$Float(annotation.getThresholdLine$().getValue$()), annotation.getThresholdLine$().getLabel$(), Clazz.new_($I$(64).c$$I,[C$.safeInt$Integer(annotation.getThresholdLine$().getColour$())])]));
}if (autoForView || annotation.isAutoCalculated$() ) {
jaa.hasText=true;
}} else {
jaa=Clazz.new_($I$(100).c$$S$S$jalview_datamodel_AnnotationA,[annotation.getLabel$(), annotation.getDescription$(), anot]);
jaa._linecolour=firstColour;
}if (annotation.getId$() != null ) {
this.annotationIds.put$TK$TV(annotation.getId$(), jaa);
jaa.annotationId=annotation.getId$();
}var sequenceRef=annotation.getSequenceRef$();
if (sequenceRef != null ) {
var sequence=this.seqRefIds.get$O(sequenceRef);
if (sequence == null ) {
sequence=al.findName$S(sequenceRef);
}if (sequence != null ) {
jaa.createSequenceMapping$jalview_datamodel_SequenceI$I$Z(sequence, 1, true);
sequence.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(jaa);
}}if (annotation.getGroupRef$() != null  && annotation.getGroupRef$().length$() > 0 ) {
var aal=groupAnnotRefs.get$O(annotation.getGroupRef$());
if (aal == null ) {
aal=Clazz.new_($I$(4));
groupAnnotRefs.put$TK$TV(annotation.getGroupRef$(), aal);
}aal.add$TE(jaa);
}if (annotation.getScore$() != null ) {
jaa.setScore$D(annotation.getScore$().doubleValue$());
}if (annotation.isVisible$() != null ) {
jaa.visible=annotation.isVisible$().booleanValue$();
}if (annotation.isCentreColLabels$() != null ) {
jaa.centreColLabels=annotation.isCentreColLabels$().booleanValue$();
}if (annotation.isScaleColLabels$() != null ) {
jaa.scaleColLabel=annotation.isScaleColLabels$().booleanValue$();
}if (annotation.isAutoCalculated$()) {
jaa.autoCalculated=true;
}if (annotation.getGraphHeight$() != null ) {
jaa.graphHeight=annotation.getGraphHeight$().intValue$();
}jaa.belowAlignment=annotation.isBelowAlignment$();
jaa.setCalcId$S(annotation.getCalcId$());
if (annotation.getProperty$().size$() > 0) {
for (var prop, $prop = annotation.getProperty$().iterator$(); $prop.hasNext$()&&((prop=($prop.next$())),1);) {
jaa.setProperty$S$S(prop.getName$(), prop.getValue$());
}
}if (jaa.autoCalculated) {
autoAlan.add$TE(Clazz.new_($I$(102).c$$I$jalview_datamodel_AlignmentAnnotation, [this, null, i, jaa]));
} else {
al.addAnnotation$jalview_datamodel_AlignmentAnnotation(jaa);
}}
}if (jalviewModel.getJGroup$().size$() > 0) {
var groups=jalviewModel.getJGroup$();
var addAnnotSchemeGroup=false;
for (var i=0; i < groups.size$(); i++) {
var jGroup=groups.get$I(i);
var cs=null;
if (jGroup.getColour$() != null ) {
if (jGroup.getColour$().startsWith$S("ucs")) {
cs=this.getUserColourScheme$jalview_xml_binding_jalview_JalviewModel$S(jalviewModel, jGroup.getColour$());
} else if (jGroup.getColour$().equals$O("AnnotationColourGradient") && jGroup.getAnnotationColours$() != null  ) {
addAnnotSchemeGroup=true;
} else {
cs=$I$(31).getColourScheme$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$S(null, al, jGroup.getColour$());
}}var pidThreshold=C$.safeInt$Integer(jGroup.getPidThreshold$());
var seqs=Clazz.new_($I$(33));
for (var s=0; s < jGroup.getSeq$().size$(); s++) {
var seqId=jGroup.getSeq$().get$I(s);
var ts=this.seqRefIds.get$O(seqId);
if (ts != null ) {
seqs.addElement$TE(ts);
}}
if (seqs.size$() < 1) {
continue;
}var sg=Clazz.new_($I$(103).c$$java_util_List$S$jalview_schemes_ColourSchemeI$Z$Z$Z$I$I,[seqs, jGroup.getName$(), cs, C$.safeBoolean$Boolean(jGroup.isDisplayBoxes$()), C$.safeBoolean$Boolean(jGroup.isDisplayText$()), C$.safeBoolean$Boolean(jGroup.isColourText$()), C$.safeInt$Integer(jGroup.getStart$()), C$.safeInt$Integer(jGroup.getEnd$())]);
sg.getGroupColourScheme$().setThreshold$I$Z(pidThreshold, true);
sg.getGroupColourScheme$().setConservationInc$I(C$.safeInt$Integer(jGroup.getConsThreshold$()));
sg.setOutlineColour$java_awt_Color(Clazz.new_($I$(64).c$$I,[C$.safeInt$Integer(jGroup.getOutlineColour$())]));
sg.textColour=Clazz.new_($I$(64).c$$I,[C$.safeInt$Integer(jGroup.getTextCol1$())]);
sg.textColour2=Clazz.new_($I$(64).c$$I,[C$.safeInt$Integer(jGroup.getTextCol2$())]);
sg.setShowNonconserved$Z(C$.safeBoolean$Boolean(jGroup.isShowUnconserved$()));
sg.thresholdTextColour=C$.safeInt$Integer(jGroup.getTextColThreshold$());
sg.setShowConsensusHistogram$Z(jGroup.isShowConsensusHistogram$());
sg.setshowSequenceLogo$Z(jGroup.isShowSequenceLogo$());
sg.setNormaliseSequenceLogo$Z(jGroup.isNormaliseSequenceLogo$());
sg.setIgnoreGapsConsensus$Z(jGroup.isIgnoreGapsinConsensus$());
if (jGroup.getConsThreshold$() != null  && jGroup.getConsThreshold$().intValue$() != 0 ) {
var c=Clazz.new_($I$(104).c$$S$java_util_List$I$I,["All", sg.getSequences$java_util_Map(null), 0, sg.getWidth$() - 1]);
c.calculate$();
c.verdict$Z$F(false, 25);
sg.cs.setConservation$jalview_analysis_Conservation(c);
}if (jGroup.getId$() != null  && groupAnnotRefs.size$() > 0 ) {
var jaal=groupAnnotRefs.get$O(jGroup.getId$());
if (jaal != null ) {
for (var jaa, $jaa = jaal.iterator$(); $jaa.hasNext$()&&((jaa=($jaa.next$())),1);) {
jaa.groupRef=sg;
if (jaa.autoCalculated) {
if (jaa.label.startsWith$S("Consensus for ")) {
sg.setConsensus$jalview_datamodel_AlignmentAnnotation(jaa);
}if (jaa.label.startsWith$S("Conservation for ")) {
sg.setConservationRow$jalview_datamodel_AlignmentAnnotation(jaa);
}}}
}}al.addGroup$jalview_datamodel_SequenceGroup(sg);
if (addAnnotSchemeGroup) {
sg.setColourScheme$jalview_schemes_ColourSchemeI(p$1.constructAnnotationColour$jalview_xml_binding_jalview_AnnotationColourScheme$jalview_gui_AlignFrame$jalview_datamodel_AlignmentI$jalview_xml_binding_jalview_JalviewModel$Z.apply(this, [jGroup.getAnnotationColours$(), null, al, jalviewModel, false]));
}}
}if (view == null ) {
return null;
}var af=null;
var av=null;
if (multipleView && this.viewportsAdded.size$() == 0 ) {
System.err.println$S("About to recover a viewport for existing alignment: Sequence set ID is " + uniqueSeqSetId);
var seqsetobj=p$1.retrieveExistingObj$S.apply(this, [uniqueSeqSetId]);
if (seqsetobj != null ) {
if (Clazz.instanceOf(seqsetobj, "java.lang.String")) {
uniqueSeqSetId=seqsetobj;
System.err.println$S("Recovered extant sequence set ID mapping for ID : New Sequence set ID is " + uniqueSeqSetId);
} else {
System.err.println$S("Warning : Collision between sequence set ID string and existing jalview object mapping.");
}}}var doGroupAnnColour=C$.isVersionStringLaterThan$S$S("2.8.1", jalviewModel.getVersion$());
var ap=null;
var isnewview=true;
if (viewId != null ) {
var views=$I$(9).getAlignmentPanels$S(uniqueSeqSetId);
if (views != null  && views.length > 0 ) {
for (var v=0; v < views.length; v++) {
if (views[v].av.getViewId$().equalsIgnoreCase$S(viewId)) {
af=views[v].alignFrame;
av=views[v].av;
ap=views[v];
isnewview=false;
}}
}}if (isnewview) {
af=this.loadViewport$S$java_util_List$java_util_List$jalview_datamodel_AlignmentI$jalview_xml_binding_jalview_JalviewModel$jalview_xml_binding_jalview_JalviewModel_Viewport$S$S$java_util_List(file, jseqs, hiddenSeqs, al, jalviewModel, view, uniqueSeqSetId, viewId, autoAlan);
av=af.getViewport$();
ap=af.alignPanel;
}if (loadTreesAndStructures) {
this.loadTrees$jalview_xml_binding_jalview_JalviewModel$jalview_xml_binding_jalview_JalviewModel_Viewport$jalview_gui_AlignFrame$jalview_gui_AlignViewport$jalview_gui_AlignmentPanel(jalviewModel, view, af, av, ap);
this.loadPCAViewers$jalview_xml_binding_jalview_JalviewModel$jalview_gui_AlignmentPanel(jalviewModel, ap);
this.loadPDBStructures$jalview_util_jarInputStreamProvider$java_util_List$jalview_gui_AlignFrame$jalview_gui_AlignmentPanel(jprovider, jseqs, af, ap);
p$1.loadRnaViewers$jalview_util_jarInputStreamProvider$java_util_List$jalview_gui_AlignmentPanel.apply(this, [jprovider, jseqs, ap]);
}return af;
});

Clazz.newMeth(C$, 'loadRnaViewers$jalview_util_jarInputStreamProvider$java_util_List$jalview_gui_AlignmentPanel', function (jprovider, jseqs, ap) {
for (var jseq, $jseq = jseqs.iterator$(); $jseq.hasNext$()&&((jseq=($jseq.next$())),1);) {
for (var i=0; i < jseq.getRnaViewer$().size$(); i++) {
var viewer=jseq.getRnaViewer$().get$I(i);
var appVarna=this.findOrCreateVarnaViewer$jalview_xml_binding_jalview_JalviewModel_JSeq_RnaViewer$S$jalview_gui_AlignmentPanel(viewer, this.uniqueSetSuffix, ap);
for (var j=0; j < viewer.getSecondaryStructure$().size$(); j++) {
var ss=viewer.getSecondaryStructure$().get$I(j);
var seq=this.seqRefIds.get$O(jseq.getId$());
var ann=this.annotationIds.get$O(ss.getAnnotationId$());
var gapped=C$.safeBoolean$Boolean(ss.isGapped$());
var rnaTitle=ss.getTitle$();
var sessionState=ss.getViewerState$();
var tempStateFile=this.copyJarEntry$jalview_util_jarInputStreamProvider$S$S$S(jprovider, sessionState, "varna", null);
var rna=Clazz.new_($I$(105).c$$S$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_SequenceI$fr_orsay_lri_varna_models_rna_RNA$Z,[rnaTitle, ann, seq, null, gapped]);
appVarna.addModelSession$jalview_ext_varna_RnaModel$S$S(rna, rnaTitle, tempStateFile);
}
appVarna.setInitialSelection$I(C$.safeInt$Integer(viewer.getSelectedRna$()));
}
}
}, p$1);

Clazz.newMeth(C$, 'findOrCreateVarnaViewer$jalview_xml_binding_jalview_JalviewModel_JSeq_RnaViewer$S$jalview_gui_AlignmentPanel', function (viewer, viewIdSuffix, ap) {
var postLoadId=viewer.getViewId$() + viewIdSuffix;
for (var frame, $frame = 0, $$frame = this.getAllFrames$(); $frame<$$frame.length&&((frame=($$frame[$frame])),1);$frame++) {
if (Clazz.instanceOf(frame, "jalview.gui.AppVarna")) {
var varna=frame;
if (postLoadId.equals$O(varna.getViewId$())) {
return varna;
}}}
var model=Clazz.new_($I$(106).c$$S$S$I$I$I$I$I,[postLoadId, viewer.getTitle$(), C$.safeInt$Integer(viewer.getXpos$()), C$.safeInt$Integer(viewer.getYpos$()), C$.safeInt$Integer(viewer.getWidth$()), C$.safeInt$Integer(viewer.getHeight$()), C$.safeInt$Integer(viewer.getDividerLocation$())]);
var varna=Clazz.new_($I$(107).c$$jalview_datamodel_RnaViewerModel$jalview_gui_AlignmentPanel,[model, ap]);
return varna;
});

Clazz.newMeth(C$, 'loadTrees$jalview_xml_binding_jalview_JalviewModel$jalview_xml_binding_jalview_JalviewModel_Viewport$jalview_gui_AlignFrame$jalview_gui_AlignViewport$jalview_gui_AlignmentPanel', function (jm, view, af, av, ap) {
try {
for (var t=0; t < jm.getTree$().size$(); t++) {
var tree=jm.getTree$().get$I(t);
var tp=p$1.retrieveExistingObj$S.apply(this, [tree.getId$()]);
if (tp == null ) {
tp=af.showNewickTree$jalview_io_NewickFile$S$I$I$I$I(Clazz.new_($I$(108).c$$S,[tree.getNewick$()]), tree.getTitle$(), C$.safeInt$Integer(tree.getWidth$()), C$.safeInt$Integer(tree.getHeight$()), C$.safeInt$Integer(tree.getXpos$()), C$.safeInt$Integer(tree.getYpos$()));
if (tree.getId$() != null ) {
}} else {
tp.setTitle$S(tree.getTitle$());
tp.setBounds$java_awt_Rectangle(Clazz.new_($I$(109).c$$I$I$I$I,[C$.safeInt$Integer(tree.getXpos$()), C$.safeInt$Integer(tree.getYpos$()), C$.safeInt$Integer(tree.getWidth$()), C$.safeInt$Integer(tree.getHeight$())]));
tp.setViewport$jalview_gui_AlignViewport(av);
tp.getTreeCanvas$().setViewport$jalview_gui_AlignViewport(av);
tp.getTreeCanvas$().setAssociatedPanel$jalview_gui_AlignmentPanel(ap);
}tp.getTreeCanvas$().setApplyToAllViews$Z(tree.isLinkToAllViews$());
if (tp == null ) {
p$1.warn$S.apply(this, ["There was a problem recovering stored Newick tree: \n" + tree.getNewick$()]);
continue;
}tp.fitToWindow.setState$Z(C$.safeBoolean$Boolean(tree.isFitToWindow$()));
tp.fitToWindow_actionPerformed$java_awt_event_ActionEvent(null);
if (tree.getFontName$() != null ) {
tp.setTreeFont$java_awt_Font(Clazz.new_($I$(110).c$$S$I$I,[tree.getFontName$(), C$.safeInt$Integer(tree.getFontStyle$()), C$.safeInt$Integer(tree.getFontSize$())]));
} else {
tp.setTreeFont$java_awt_Font(Clazz.new_($I$(110).c$$S$I$I,[view.getFontName$(), C$.safeInt$Integer(view.getFontStyle$()), C$.safeInt$Integer(view.getFontSize$())]));
}tp.showPlaceholders$Z(C$.safeBoolean$Boolean(tree.isMarkUnlinked$()));
tp.showBootstrap$Z(C$.safeBoolean$Boolean(tree.isShowBootstrap$()));
tp.showDistances$Z(C$.safeBoolean$Boolean(tree.isShowDistances$()));
tp.getTreeCanvas$().setThreshold$F(C$.safeFloat$Float(tree.getThreshold$()));
if (C$.safeBoolean$Boolean(tree.isCurrentTree$())) {
af.getViewport$().setCurrentTree$jalview_analysis_TreeModel(tp.getTree$());
}}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'loadPDBStructures$jalview_util_jarInputStreamProvider$java_util_List$jalview_gui_AlignFrame$jalview_gui_AlignmentPanel', function (jprovider, jseqs, af, ap) {
var structureViewers=Clazz.new_($I$(111));
for (var i=0; i < jseqs.size$(); i++) {
var jseq=jseqs.get$I(i);
if (jseq.getPdbids$().size$() > 0) {
var ids=jseq.getPdbids$();
for (var p=0; p < ids.size$(); p++) {
var pdbid=ids.get$I(p);
var structureStateCount=pdbid.getStructureState$().size$();
for (var s=0; s < structureStateCount; s++) {
var structureState=pdbid.getStructureState$().get$I(s);
var sviewid=(structureState.getViewId$() == null ) ? null : structureState.getViewId$() + this.uniqueSetSuffix;
var jpdb=Clazz.new_($I$(96));
jpdb.setFile$S(this.loadPDBFile$jalview_util_jarInputStreamProvider$S$S(jprovider, pdbid.getId$(), pdbid.getFile$()));
jpdb.setId$S(pdbid.getId$());
var x=C$.safeInt$Integer(structureState.getXpos$());
var y=C$.safeInt$Integer(structureState.getYpos$());
var width=C$.safeInt$Integer(structureState.getWidth$());
var height=C$.safeInt$Integer(structureState.getHeight$());
var pdbFile=this.loadPDBFile$jalview_util_jarInputStreamProvider$S$S(jprovider, pdbid.getId$(), pdbid.getFile$());
var seq=this.seqRefIds.get$O(jseq.getId$() + "");
if (sviewid == null ) {
sviewid="_jalview_pre2_4_" + x + "," + y + "," + width + "," + height ;
}if (!structureViewers.containsKey$O(sviewid)) {
structureViewers.put$TK$TV(sviewid, Clazz.new_($I$(112).c$$I$I$I$I$Z$Z$Z$S$S,[x, y, width, height, false, false, true, structureState.getViewId$(), structureState.getType$()]));
}var jmoldat=structureViewers.get$O(sviewid);
jmoldat.setAlignWithPanel$Z(jmoldat.isAlignWithPanel$() || structureState.isAlignwithAlignPanel$() );
var colourWithAlignPanel=jmoldat.isColourWithAlignPanel$();
colourWithAlignPanel|=structureState.isColourwithAlignPanel$();
jmoldat.setColourWithAlignPanel$Z(colourWithAlignPanel);
var colourByViewer=jmoldat.isColourByViewer$();
colourByViewer&=structureState.isColourByJmol$();
jmoldat.setColourByViewer$Z(colourByViewer);
if (jmoldat.getStateData$().length$() < structureState.getValue$().length$()) {
jmoldat.setStateData$S(structureState.getValue$());
}if (pdbid.getFile$() != null ) {
var mapkey=Clazz.new_($I$(12).c$$S,[pdbid.getFile$()]);
var seqstrmaps=jmoldat.getFileData$().get$O(mapkey);
if (seqstrmaps == null ) {
jmoldat.getFileData$().put$TK$TV(mapkey, seqstrmaps=Clazz.new_($I$(113).c$$S$S, [jmoldat, null, pdbFile, pdbid.getId$()]));
}if (!seqstrmaps.getSeqList$().contains$O(seq)) {
seqstrmaps.getSeqList$().add$TE(seq);
}} else {
this.errorMessage=("The Jmol views in this project were imported\nfrom an older version of Jalview.\nPlease review the sequence colour associations\nin the Colour by section of the Jmol View menu.\n\nIn the case of problems, see note at\nhttp://issues.jalview.org/browse/JAL-747");
p$1.warn$S.apply(this, [this.errorMessage]);
}}
}
}}
for (var entry, $entry = structureViewers.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
try {
this.createOrLinkStructureViewer$java_util_Map_Entry$jalview_gui_AlignFrame$jalview_gui_AlignmentPanel$jalview_util_jarInputStreamProvider(entry, af, ap, jprovider);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Error loading structure viewer: " + e.getMessage$());
} else {
throw e;
}
}
}
});

Clazz.newMeth(C$, 'createOrLinkStructureViewer$java_util_Map_Entry$jalview_gui_AlignFrame$jalview_gui_AlignmentPanel$jalview_util_jarInputStreamProvider', function (viewerData, af, ap, jprovider) {
var stateData=viewerData.getValue$();
var comp=this.findMatchingViewer$java_util_Map_Entry(viewerData);
if (comp != null ) {
this.linkStructureViewer$jalview_gui_AlignmentPanel$jalview_gui_StructureViewerBase$jalview_datamodel_StructureViewerModel(ap, comp, stateData);
return;
}if ($I$(114).CHIMERA.toString().equals$O(stateData.getType$())) {
this.createChimeraViewer$java_util_Map_Entry$jalview_gui_AlignFrame$jalview_util_jarInputStreamProvider(viewerData, af, jprovider);
} else {
this.createJmolViewer$java_util_Map_Entry$jalview_gui_AlignFrame$jalview_util_jarInputStreamProvider(viewerData, af, jprovider);
}});

Clazz.newMeth(C$, 'createChimeraViewer$java_util_Map_Entry$jalview_gui_AlignFrame$jalview_util_jarInputStreamProvider', function (viewerData, af, jprovider) {
var data=viewerData.getValue$();
var chimeraSessionFile=data.getStateData$();
var viewerJarEntryName=this.getViewerJarEntryName$S(data.getViewId$());
chimeraSessionFile=this.copyJarEntry$jalview_util_jarInputStreamProvider$S$S$S(jprovider, viewerJarEntryName, "chimera", null);
var fileData=data.getFileData$().entrySet$();
var pdbs=Clazz.new_($I$(4));
var allseqs=Clazz.new_($I$(4));
for (var pdb, $pdb = fileData.iterator$(); $pdb.hasNext$()&&((pdb=($pdb.next$())),1);) {
var filePath=pdb.getValue$().getFilePath$();
var pdbId=pdb.getValue$().getPdbId$();
pdbs.add$TE(Clazz.new_($I$(96).c$$S$S$jalview_datamodel_PDBEntry_Type$S,[pdbId, null, $I$(97).PDB, filePath]));
var seqList=pdb.getValue$().getSeqList$();
var seqs=seqList.toArray$TTA(Clazz.array($I$(93), [seqList.size$()]));
allseqs.add$TE(seqs);
}
var colourByChimera=data.isColourByViewer$();
var colourBySequence=data.isColourWithAlignPanel$();
var pdbArray=pdbs.toArray$TTA(Clazz.array($I$(96), [pdbs.size$()]));
var seqsArray=allseqs.toArray$TTA(Clazz.array($I$(93), [allseqs.size$(), null]));
var newViewId=viewerData.getKey$();
var cvf=Clazz.new_($I$(115).c$$S$jalview_gui_AlignmentPanel$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$Z$Z$S,[chimeraSessionFile, af.alignPanel, pdbArray, seqsArray, colourByChimera, colourBySequence, newViewId]);
cvf.setSize$I$I(data.getWidth$(), data.getHeight$());
cvf.setLocation$I$I(data.getX$(), data.getY$());
});

Clazz.newMeth(C$, 'createJmolViewer$java_util_Map_Entry$jalview_gui_AlignFrame$jalview_util_jarInputStreamProvider', function (viewerData, af, jprovider) {
var svattrib=viewerData.getValue$();
var state=svattrib.getStateData$();
if ($I$(114).JMOL.toString().equals$O(svattrib.getType$())) {
state=this.readJarEntry$jalview_util_jarInputStreamProvider$S(jprovider, this.getViewerJarEntryName$S(svattrib.getViewId$()));
}var pdbfilenames=Clazz.new_($I$(4));
var seqmaps=Clazz.new_($I$(4));
var pdbids=Clazz.new_($I$(4));
var newFileLoc=Clazz.new_($I$(116).c$$I,[64]);
var cp=0;
var ncp;
var ecp;
var oldFiles=svattrib.getFileData$();
while ((ncp=state.indexOf$S$I("load ", cp)) > -1){
do {
newFileLoc.append$S(state.substring$I$I(cp, ncp=(state.indexOf$S$I("\"", ncp + 1) + 1)));
var oldfilenam=state.substring$I$I(ncp, ecp=state.indexOf$S$I("\"", ncp));
var filedat=oldFiles.get$O(Clazz.new_($I$(12).c$$S,[oldfilenam]));
if (filedat == null ) {
var reformatedOldFilename=oldfilenam.replaceAll$S$S("/", "\\\\");
filedat=oldFiles.get$O(Clazz.new_($I$(12).c$$S,[reformatedOldFilename]));
}newFileLoc.append$S($I$(1).escapeString$S(filedat.getFilePath$()));
pdbfilenames.add$TE(filedat.getFilePath$());
pdbids.add$TE(filedat.getPdbId$());
seqmaps.add$TE(filedat.getSeqList$().toArray$TTA(Clazz.array($I$(93), [0])));
newFileLoc.append$S("\"");
cp=ecp + 1;
} while ((ncp=state.indexOf$S$I("/*file*/", cp)) > -1);
}
if (cp > 0) {
newFileLoc.append$S(state.substring$I(cp));
} else {
System.err.print$S("Ignoring incomplete Jmol state for PDB ids: ");
newFileLoc=Clazz.new_($I$(116).c$$S,[state]);
newFileLoc.append$S("; load append ");
for (var id, $id = oldFiles.keySet$().iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
var filedat=oldFiles.get$O(id);
newFileLoc.append$S(filedat.getFilePath$());
pdbfilenames.add$TE(filedat.getFilePath$());
pdbids.add$TE(filedat.getPdbId$());
seqmaps.add$TE(filedat.getSeqList$().toArray$TTA(Clazz.array($I$(93), [0])));
newFileLoc.append$S(" \"");
newFileLoc.append$S(filedat.getFilePath$());
newFileLoc.append$S("\"");
}
newFileLoc.append$S(";");
}if (newFileLoc.length$() == 0) {
return;
}var histbug=newFileLoc.indexOf$S("history = ");
if (histbug > -1) {
histbug+=10;
var diff=histbug == -1 ? -1 : newFileLoc.indexOf$S$I(";", histbug);
var val=(diff == -1) ? null : newFileLoc.substring$I$I(histbug, diff);
if (val != null  && val.length$() >= 4 ) {
if (val.contains$CharSequence("e")) {
if (val.trim$().equals$O("true")) {
val="1";
} else {
val="0";
}newFileLoc.replace$I$I$S(histbug, diff, val);
}}}var pdbf=pdbfilenames.toArray$TTA(Clazz.array(String, [pdbfilenames.size$()]));
var id=pdbids.toArray$TTA(Clazz.array(String, [pdbids.size$()]));
var sq=seqmaps.toArray$TTA(Clazz.array($I$(93), [seqmaps.size$(), null]));
var fileloc=newFileLoc.toString();
var sviewid=viewerData.getKey$();
var alf=af;
var rect=Clazz.new_($I$(109).c$$I$I$I$I,[svattrib.getX$(), svattrib.getY$(), svattrib.getWidth$(), svattrib.getHeight$()]);
try {
$I$(82).invokeAndWait$Runnable(((P$.Jalview2XML$6||
(function(){var C$=Clazz.newClass(P$, "Jalview2XML$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var sview=null;
try {
sview=Clazz.new_($I$(117).c$$jalview_structure_StructureSelectionManager,[this.$finals$.alf.alignPanel.getStructureSelectionManager$()]).createView$jalview_gui_StructureViewer_ViewerType$SA$SA$jalview_datamodel_SequenceIAA$jalview_gui_AlignmentPanel$jalview_datamodel_StructureViewerModel$S$java_awt_Rectangle$S($I$(114).JMOL, this.$finals$.pdbf, this.$finals$.id, this.$finals$.sq, this.$finals$.alf.alignPanel, this.$finals$.svattrib, this.$finals$.fileloc, this.$finals$.rect, this.$finals$.sviewid);
this.b$['jalview.project.Jalview2XML'].addNewStructureViewer$jalview_api_structures_JalviewStructureDisplayI.apply(this.b$['jalview.project.Jalview2XML'], [sview]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"OutOfMemoryError")){
Clazz.new_($I$(118).c$$S$OutOfMemoryError,["restoring structure view for PDB id " + this.$finals$.id, ex.getCause$()]);
if (sview != null  && sview.isVisible$() ) {
sview.closeViewer$Z(false);
sview.setVisible$Z(false);
sview.dispose$();
}} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.Jalview2XML$6.$init$, [this, {alf: alf, pdbf: pdbf, id: id, sq: sq, svattrib: svattrib, fileloc: fileloc, rect: rect, sviewid: sviewid}])));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var ex = e$$;
{
p$1.warn$S$Exception.apply(this, ["Unexpected error when opening Jmol view.", ex]);
}
} else if (Clazz.exceptionOf(e$$,"InterruptedException")){
var e = e$$;
{
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'getViewerJarEntryName$S', function (viewId) {
return "viewer_" + viewId;
});

Clazz.newMeth(C$, 'findMatchingViewer$java_util_Map_Entry', function (viewerData) {
var sviewid=viewerData.getKey$();
var svattrib=viewerData.getValue$();
var comp=null;
var frames=this.getAllFrames$();
for (var frame, $frame = 0, $$frame = frames; $frame<$$frame.length&&((frame=($$frame[$frame])),1);$frame++) {
if (Clazz.instanceOf(frame, "jalview.gui.StructureViewerBase")) {
if (sviewid != null  && (frame).getViewId$().equals$O(sviewid) ) {
comp=frame;
break;
} else if (frame.getX$() == svattrib.getX$() && frame.getY$() == svattrib.getY$()  && frame.getHeight$() == svattrib.getHeight$()  && frame.getWidth$() == svattrib.getWidth$() ) {
comp=frame;
}}}
return comp;
});

Clazz.newMeth(C$, 'linkStructureViewer$jalview_gui_AlignmentPanel$jalview_gui_StructureViewerBase$jalview_datamodel_StructureViewerModel', function (ap, viewer, stateData) {
var useinViewerSuperpos=stateData.isAlignWithPanel$();
var usetoColourbyseq=stateData.isColourWithAlignPanel$();
var viewerColouring=stateData.isColourByViewer$();
var oldFiles=stateData.getFileData$();
var binding=viewer.getBinding$();
for (var id, $id = oldFiles.keySet$().iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
var filedat=oldFiles.get$O(id);
var pdbFile=filedat.getFilePath$();
var seq=filedat.getSeqList$().toArray$TTA(Clazz.array($I$(93), [0]));
binding.getSsm$().setMapping$jalview_datamodel_SequenceIA$SA$S$jalview_io_DataSourceType$jalview_gui_IProgressIndicator(seq, null, pdbFile, $I$(119).FILE, null);
binding.addSequenceForStructFile$S$jalview_datamodel_SequenceIA(pdbFile, seq);
}
viewer.addAlignmentPanel$jalview_gui_AlignmentPanel(ap);
if (useinViewerSuperpos) {
viewer.useAlignmentPanelForSuperposition$jalview_gui_AlignmentPanel(ap);
} else {
viewer.excludeAlignmentPanelForSuperposition$jalview_gui_AlignmentPanel(ap);
}if (usetoColourbyseq) {
viewer.useAlignmentPanelForColourbyseq$jalview_gui_AlignmentPanel$Z(ap, !viewerColouring);
} else {
viewer.excludeAlignmentPanelForColourbyseq$jalview_gui_AlignmentPanel(ap);
}});

Clazz.newMeth(C$, 'getAllFrames$', function () {
var frames=null;
do {
try {
frames=$I$(9).desktop.getAllFrames$();
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
try {
$I$(120).sleep$J(10);
} catch (f) {
if (Clazz.exceptionOf(f,"InterruptedException")){
} else {
throw f;
}
}
} else {
throw e;
}
}
} while (frames == null );
return frames;
});

Clazz.newMeth(C$, 'isVersionStringLaterThan$S$S', function (supported, version) {
if (supported == null  || version == null   || version.equalsIgnoreCase$S("DEVELOPMENT BUILD")  || version.equalsIgnoreCase$S("Test")  || version.equalsIgnoreCase$S("AUTOMATED BUILD") ) {
System.err.println$S("Assuming project file with " + (version == null  ? "null" : version) + " is compatible with Jalview version " + supported );
return true;
} else {
return $I$(121).compareVersions$S$S$S(version, supported, "b") >= 0;
}}, 1);

Clazz.newMeth(C$, 'addNewStructureViewer$jalview_api_structures_JalviewStructureDisplayI', function (sview) {
if (this.newStructureViewers != null ) {
sview.getBinding$().setFinishedLoadingFromArchive$Z(false);
this.newStructureViewers.add$TE(sview);
}});

Clazz.newMeth(C$, 'setLoadingFinishedForNewStructureViewers$', function () {
if (this.newStructureViewers != null ) {
for (var sview, $sview = this.newStructureViewers.iterator$(); $sview.hasNext$()&&((sview=($sview.next$())),1);) {
sview.getBinding$().setFinishedLoadingFromArchive$Z(true);
}
this.newStructureViewers.clear$();
this.newStructureViewers=null;
}});

Clazz.newMeth(C$, 'loadViewport$S$java_util_List$java_util_List$jalview_datamodel_AlignmentI$jalview_xml_binding_jalview_JalviewModel$jalview_xml_binding_jalview_JalviewModel_Viewport$S$S$java_util_List', function (file, JSEQ, hiddenSeqs, al, jm, view, uniqueSeqSetId, viewId, autoAlan) {
var af=null;
af=Clazz.new_($I$(122).c$$jalview_datamodel_AlignmentI$I$I$S$S,[al, C$.safeInt$Integer(view.getWidth$()), C$.safeInt$Integer(view.getHeight$()), uniqueSeqSetId, viewId]);
af.setFileName$S$jalview_io_FileFormatI(file, $I$(123).Jalview);
var viewport=af.getViewport$();
for (var i=0; i < JSEQ.size$(); i++) {
var colour=C$.safeInt$Integer(JSEQ.get$I(i).getColour$());
viewport.setSequenceColour$jalview_datamodel_SequenceI$java_awt_Color(viewport.getAlignment$().getSequenceAt$I(i), Clazz.new_($I$(64).c$$I,[colour]));
}
if (al.hasSeqrep$()) {
viewport.setColourByReferenceSeq$Z(true);
viewport.setDisplayReferenceSeq$Z(true);
}viewport.setGatherViewsHere$Z(C$.safeBoolean$Boolean(view.isGatheredViews$()));
if (view.getSequenceSetId$() != null ) {
var av=this.viewportsAdded.get$O(uniqueSeqSetId);
viewport.setSequenceSetId$S(uniqueSeqSetId);
if (av != null ) {
viewport.setHistoryList$java_util_Deque(av.getHistoryList$());
viewport.setRedoList$java_util_Deque(av.getRedoList$());
} else {
this.viewportsAdded.put$TK$TV(uniqueSeqSetId, viewport);
}$I$(124).Register$java_awt_Component$S(af.alignPanel, uniqueSeqSetId);
}if (hiddenSeqs != null ) {
for (var s=0; s < JSEQ.size$(); s++) {
var hidden=Clazz.new_($I$(103));
var isRepresentative=false;
for (var r=0; r < JSEQ.get$I(s).getHiddenSequences$().size$(); r++) {
isRepresentative=true;
var sequenceToHide=al.getSequenceAt$I((JSEQ.get$I(s).getHiddenSequences$().get$I(r)).intValue$());
hidden.addSequence$jalview_datamodel_SequenceI$Z(sequenceToHide, false);
hiddenSeqs.remove$O(sequenceToHide);
}
if (isRepresentative) {
var representativeSequence=al.getSequenceAt$I(s);
hidden.addSequence$jalview_datamodel_SequenceI$Z(representativeSequence, false);
viewport.hideRepSequences$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroup(representativeSequence, hidden);
}}
var hseqs=hiddenSeqs.toArray$TTA(Clazz.array($I$(93), [hiddenSeqs.size$()]));
viewport.hideSequence$jalview_datamodel_SequenceIA(hseqs);
}viewport.setShowAnnotation$Z(C$.safeBoolean$Boolean(view.isShowAnnotation$()));
viewport.setAbovePIDThreshold$Z(C$.safeBoolean$Boolean(view.isPidSelected$()));
var pidThreshold=C$.safeInt$Integer(view.getPidThreshold$());
viewport.setThreshold$I(pidThreshold);
viewport.setColourText$Z(C$.safeBoolean$Boolean(view.isShowColourText$()));
viewport.setConservationSelected$Z(C$.safeBoolean$Boolean(view.isConservationSelected$()));
viewport.setIncrement$I(C$.safeInt$Integer(view.getConsThreshold$()));
viewport.setShowJVSuffix$Z(C$.safeBoolean$Boolean(view.isShowFullId$()));
viewport.setRightAlignIds$Z(C$.safeBoolean$Boolean(view.isRightAlignIds$()));
viewport.setFont$java_awt_Font$Z(Clazz.new_($I$(110).c$$S$I$I,[view.getFontName$(), C$.safeInt$Integer(view.getFontStyle$()), C$.safeInt$Integer(view.getFontSize$())]), true);
var vs=viewport.getViewStyle$();
vs.setScaleProteinAsCdna$Z(view.isScaleProteinAsCdna$());
viewport.setViewStyle$jalview_api_ViewStyleI(vs);
viewport.setRenderGaps$Z(C$.safeBoolean$Boolean(view.isRenderGaps$()));
viewport.setWrapAlignment$Z(C$.safeBoolean$Boolean(view.isWrapAlignment$()));
viewport.setShowAnnotation$Z(C$.safeBoolean$Boolean(view.isShowAnnotation$()));
viewport.setShowBoxes$Z(C$.safeBoolean$Boolean(view.isShowBoxes$()));
viewport.setShowText$Z(C$.safeBoolean$Boolean(view.isShowText$()));
viewport.setTextColour$java_awt_Color(Clazz.new_($I$(64).c$$I,[C$.safeInt$Integer(view.getTextCol1$())]));
viewport.setTextColour2$java_awt_Color(Clazz.new_($I$(64).c$$I,[C$.safeInt$Integer(view.getTextCol2$())]));
viewport.setThresholdTextColour$I(C$.safeInt$Integer(view.getTextColThreshold$()));
viewport.setShowUnconserved$Z(view.isShowUnconserved$());
viewport.getRanges$().setStartRes$I(C$.safeInt$Integer(view.getStartRes$()));
if (view.getViewName$() != null ) {
viewport.setViewName$S(view.getViewName$());
af.setInitialTabVisible$();
}af.setBounds$I$I$I$I(C$.safeInt$Integer(view.getXpos$()), C$.safeInt$Integer(view.getYpos$()), C$.safeInt$Integer(view.getWidth$()), C$.safeInt$Integer(view.getHeight$()));
af.alignPanel.updateLayout$();
var cs=null;
if (view.getBgColour$() != null ) {
if (view.getBgColour$().startsWith$S("ucs")) {
cs=this.getUserColourScheme$jalview_xml_binding_jalview_JalviewModel$S(jm, view.getBgColour$());
} else if (view.getBgColour$().startsWith$S("Annotation")) {
var viewAnnColour=view.getAnnotationColours$();
cs=p$1.constructAnnotationColour$jalview_xml_binding_jalview_AnnotationColourScheme$jalview_gui_AlignFrame$jalview_datamodel_AlignmentI$jalview_xml_binding_jalview_JalviewModel$Z.apply(this, [viewAnnColour, af, al, jm, true]);
} else {
cs=$I$(31).getColourScheme$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$S(af.getViewport$(), al, view.getBgColour$());
}}viewport.setColourAppliesToAllGroups$Z(false);
viewport.setGlobalColourScheme$jalview_schemes_ColourSchemeI(cs);
viewport.getResidueShading$().setThreshold$I$Z(pidThreshold, view.isIgnoreGapsinConsensus$());
viewport.getResidueShading$().setConsensus$jalview_datamodel_ProfilesI(viewport.getSequenceConsensusHash$());
if (C$.safeBoolean$Boolean(view.isConservationSelected$()) && cs != null  ) {
viewport.getResidueShading$().setConservationInc$I(C$.safeInt$Integer(view.getConsThreshold$()));
}af.changeColour$jalview_schemes_ColourSchemeI(cs);
viewport.setColourAppliesToAllGroups$Z(true);
viewport.setShowSequenceFeatures$Z(C$.safeBoolean$Boolean(view.isShowSequenceFeatures$()));
viewport.setCentreColumnLabels$Z(view.isCentreColumnLabels$());
viewport.setIgnoreGapsConsensus$Z$jalview_api_AlignmentViewPanel(view.isIgnoreGapsinConsensus$(), null);
viewport.setFollowHighlight$Z(view.isFollowHighlight$());
viewport.followSelection=view.isFollowSelection$();
viewport.setShowConsensusHistogram$Z(view.isShowConsensusHistogram$());
viewport.setShowSequenceLogo$Z(view.isShowSequenceLogo$());
viewport.setNormaliseSequenceLogo$Z(view.isNormaliseSequenceLogo$());
viewport.setShowDBRefs$Z(C$.safeBoolean$Boolean(view.isShowDbRefTooltip$()));
viewport.setShowNPFeats$Z(C$.safeBoolean$Boolean(view.isShowNPfeatureTooltip$()));
viewport.setShowGroupConsensus$Z(view.isShowGroupConsensus$());
viewport.setShowGroupConservation$Z(view.isShowGroupConservation$());
if (jm.getFeatureSettings$() != null ) {
var fr=af.alignPanel.getSeqPanel$().seqCanvas.getFeatureRenderer$();
var fdi;
viewport.setFeaturesDisplayed$jalview_api_FeaturesDisplayedI(fdi=Clazz.new_($I$(125)));
var renderOrder=Clazz.array(String, [jm.getFeatureSettings$().getSetting$().size$()]);
var featureColours=Clazz.new_($I$(11));
var featureOrder=Clazz.new_($I$(11));
for (var fs=0; fs < jm.getFeatureSettings$().getSetting$().size$(); fs++) {
var setting=jm.getFeatureSettings$().getSetting$().get$I(fs);
var featureType=setting.getType$();
var filters=setting.getMatcherSet$();
if (filters != null ) {
var filter=C$.parseFilter$S$jalview_xml_binding_jalview_FeatureMatcherSet(featureType, filters);
if (!filter.isEmpty$()) {
fr.setFeatureFilter$S$jalview_datamodel_features_FeatureMatcherSetI(featureType, filter);
}}var maxColour=Clazz.new_($I$(64).c$$I,[setting.getColour$()]);
if (setting.getMincolour$() != null ) {
var minColour=Clazz.new_($I$(64).c$$I,[setting.getMincolour$().intValue$()]);
var noValueColour=minColour;
var noColour=setting.getNoValueColour$();
if (noColour === $I$(35).NONE ) {
noValueColour=null;
} else if (noColour === $I$(35).MAX ) {
noValueColour=maxColour;
}var min=C$.safeFloat$Float(new Float(C$.safeFloat$Float(setting.getMin$())));
var max=setting.getMax$() == null  ? 1.0 : setting.getMax$().floatValue$();
var gc=Clazz.new_($I$(126).c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color$F$F,[maxColour, minColour, maxColour, noValueColour, min, max]);
if (setting.getAttributeName$().size$() > 0) {
gc.setAttributeName$SA(setting.getAttributeName$().toArray$TTA(Clazz.array(String, [setting.getAttributeName$().size$()])));
}if (setting.getThreshold$() != null ) {
gc.setThreshold$F(setting.getThreshold$().floatValue$());
var threshstate=C$.safeInt$Integer(setting.getThreshstate$());
if (threshstate == 0) {
gc.setBelowThreshold$Z(true);
} else if (threshstate == 1) {
gc.setAboveThreshold$Z(true);
}}gc.setAutoScaled$Z(true);
if (setting.isAutoScale$() != null ) {
gc.setAutoScaled$Z((setting.isAutoScale$()).booleanValue$());
}if (setting.isColourByLabel$() != null ) {
gc.setColourByLabel$Z((setting.isColourByLabel$()).booleanValue$());
}featureColours.put$TK$TV(featureType, gc);
} else {
featureColours.put$TK$TV(featureType, Clazz.new_($I$(126).c$$java_awt_Color,[maxColour]));
}renderOrder[fs]=featureType;
if (setting.getOrder$() != null ) {
featureOrder.put$TK$TV(featureType, new Float(setting.getOrder$().floatValue$()));
} else {
featureOrder.put$TK$TV(featureType,  new Float((fs/jm.getFeatureSettings$().getSetting$().size$()|0)));
}if (C$.safeBoolean$Boolean(new Boolean(setting.isDisplay$()))) {
fdi.setVisible$S(featureType);
}}
var fgtable=Clazz.new_($I$(11));
for (var gs=0; gs < jm.getFeatureSettings$().getGroup$().size$(); gs++) {
var grp=jm.getFeatureSettings$().getGroup$().get$I(gs);
fgtable.put$TK$TV(grp.getName$(),  Boolean.from(grp.isDisplay$()));
}
var frs=Clazz.new_($I$(127).c$$SA$java_util_Map$java_util_Map$F$java_util_Map,[renderOrder, fgtable, featureColours, 1.0, featureOrder]);
fr.transferSettings$jalview_viewmodel_seqfeatures_FeatureRendererSettings(frs);
}if (view.getHiddenColumns$().size$() > 0) {
for (var c=0; c < view.getHiddenColumns$().size$(); c++) {
var hc=view.getHiddenColumns$().get$I(c);
viewport.hideColumns$I$I(C$.safeInt$Integer(hc.getStart$()), C$.safeInt$Integer(hc.getEnd$()));
}
}if (view.getCalcIdParam$() != null ) {
for (var calcIdParam, $calcIdParam = view.getCalcIdParam$().iterator$(); $calcIdParam.hasNext$()&&((calcIdParam=($calcIdParam.next$())),1);) {
if (calcIdParam != null ) {
if (p$1.recoverCalcIdParam$jalview_xml_binding_jalview_JalviewModel_Viewport_CalcIdParam$jalview_gui_AlignViewport.apply(this, [calcIdParam, viewport])) {
} else {
p$1.warn$S.apply(this, ["Couldn't recover parameters for " + calcIdParam.getCalcId$()]);
}}}
}af.setMenusFromViewport$jalview_gui_AlignViewport(viewport);
af.setTitle$S(view.getTitle$());
var complementaryViewId=view.getComplementId$();
if (complementaryViewId == null ) {
$I$(9).addInternalFrame$javax_swing_JInternalFrame$S$I$I(af, view.getTitle$(), C$.safeInt$Integer(view.getWidth$()), C$.safeInt$Integer(view.getHeight$()));
af.alignPanel.updateAnnotation$Z$Z(false, true);
p$1.reorderAutoannotation$jalview_gui_AlignFrame$jalview_datamodel_AlignmentI$java_util_List.apply(this, [af, al, autoAlan]);
af.alignPanel.alignmentChanged$();
} else {
this.splitFrameCandidates.put$TK$TV(view, af);
}return af;
});

Clazz.newMeth(C$, 'constructAnnotationColour$jalview_xml_binding_jalview_AnnotationColourScheme$jalview_gui_AlignFrame$jalview_datamodel_AlignmentI$jalview_xml_binding_jalview_JalviewModel$Z', function (viewAnnColour, af, al, model, checkGroupAnnColour) {
var propagateAnnColour=false;
var annAlignment=af != null  ? af.getViewport$().getAlignment$() : al;
if (checkGroupAnnColour && al.getGroups$() != null   && al.getGroups$().size$() > 0 ) {
propagateAnnColour=true;
for (var sg, $sg = al.getGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
if (Clazz.instanceOf(sg.getColourScheme$(), "jalview.schemes.AnnotationColourGradient")) {
propagateAnnColour=false;
}}
}var annotationId=viewAnnColour.getAnnotation$();
var matchedAnnotation=this.annotationIds.get$O(annotationId);
if (matchedAnnotation == null  && annAlignment.getAlignmentAnnotation$() != null  ) {
for (var i=0; i < annAlignment.getAlignmentAnnotation$().length; i++) {
if (annotationId.equals$O(annAlignment.getAlignmentAnnotation$()[i].label)) {
matchedAnnotation=annAlignment.getAlignmentAnnotation$()[i];
break;
}}
}if (matchedAnnotation == null ) {
System.err.println$S("Failed to match annotation colour scheme for " + annotationId);
return null;
}if (matchedAnnotation.getThreshold$() == null ) {
matchedAnnotation.setThreshold$jalview_datamodel_GraphLine(Clazz.new_($I$(101).c$$F$S$java_awt_Color,[C$.safeFloat$Float(viewAnnColour.getThreshold$()), "Threshold", $I$(64).black]));
}var cs=null;
if (viewAnnColour.getColourScheme$().equals$O("None")) {
cs=Clazz.new_($I$(128).c$$jalview_datamodel_AlignmentAnnotation$java_awt_Color$java_awt_Color$I,[matchedAnnotation, Clazz.new_($I$(64).c$$I,[C$.safeInt$Integer(viewAnnColour.getMinColour$())]), Clazz.new_($I$(64).c$$I,[C$.safeInt$Integer(viewAnnColour.getMaxColour$())]), C$.safeInt$Integer(viewAnnColour.getAboveThreshold$())]);
} else if (viewAnnColour.getColourScheme$().startsWith$S("ucs")) {
cs=Clazz.new_($I$(128).c$$jalview_datamodel_AlignmentAnnotation$jalview_schemes_ColourSchemeI$I,[matchedAnnotation, this.getUserColourScheme$jalview_xml_binding_jalview_JalviewModel$S(model, viewAnnColour.getColourScheme$()), C$.safeInt$Integer(viewAnnColour.getAboveThreshold$())]);
} else {
cs=Clazz.new_($I$(128).c$$jalview_datamodel_AlignmentAnnotation$jalview_schemes_ColourSchemeI$I,[matchedAnnotation, $I$(31).getColourScheme$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$S(af.getViewport$(), al, viewAnnColour.getColourScheme$()), C$.safeInt$Integer(viewAnnColour.getAboveThreshold$())]);
}var perSequenceOnly=C$.safeBoolean$Boolean(viewAnnColour.isPerSequence$());
var useOriginalColours=C$.safeBoolean$Boolean(viewAnnColour.isPredefinedColours$());
cs.setSeqAssociated$Z(perSequenceOnly);
cs.setPredefinedColours$Z(useOriginalColours);
if (propagateAnnColour && al.getGroups$() != null  ) {
for (var g=0; g < al.getGroups$().size$(); g++) {
var sg=al.getGroups$().get$I(g);
if (sg.getGroupColourScheme$() == null ) {
continue;
}var groupScheme=Clazz.new_($I$(128).c$$jalview_datamodel_AlignmentAnnotation$jalview_schemes_ColourSchemeI$I,[matchedAnnotation, sg.getColourScheme$(), C$.safeInt$Integer(viewAnnColour.getAboveThreshold$())]);
sg.setColourScheme$jalview_schemes_ColourSchemeI(groupScheme);
groupScheme.setSeqAssociated$Z(perSequenceOnly);
groupScheme.setPredefinedColours$Z(useOriginalColours);
}
}return cs;
}, p$1);

Clazz.newMeth(C$, 'reorderAutoannotation$jalview_gui_AlignFrame$jalview_datamodel_AlignmentI$java_util_List', function (af, al, autoAlan) {
if (al.getAlignmentAnnotation$() != null ) {
var magicNames=Clazz.array(String, -1, ["Consensus", "Quality", "Conservation"]);
var nullAnnot=Clazz.new_($I$(102).c$$I$jalview_datamodel_AlignmentAnnotation, [this, null, -1, null]);
var visan=Clazz.new_($I$(11));
for (var nm, $nm = 0, $$nm = magicNames; $nm<$$nm.length&&((nm=($$nm[$nm])),1);$nm++) {
visan.put$TK$TV(nm, nullAnnot);
}
for (var auan, $auan = autoAlan.iterator$(); $auan.hasNext$()&&((auan=($auan.next$())),1);) {
visan.put$TK$TV(auan.template.label + (auan.template.getCalcId$() == null  ? "" : "\t" + auan.template.getCalcId$()), auan);
}
var hSize=al.getAlignmentAnnotation$().length;
var reorder=Clazz.new_($I$(4));
var remains=Clazz.new_($I$(4).c$$java_util_Collection,[visan.keySet$()]);
for (var h=0; h < hSize; h++) {
var jalan=al.getAlignmentAnnotation$()[h];
if (jalan.autoCalculated) {
var k;
var valan=visan.get$O(k=jalan.label);
if (jalan.getCalcId$() != null ) {
valan=visan.get$O(k=jalan.label + "\t" + jalan.getCalcId$() );
}if (valan != null ) {
al.deleteAnnotation$jalview_datamodel_AlignmentAnnotation$Z(jalan, false);
remains.remove$O(k);
hSize--;
h--;
if (valan !== nullAnnot ) {
if (jalan !== valan.template ) {
if (valan.template.graphHeight >= 0) {
jalan.graphHeight=valan.template.graphHeight;
}jalan.visible=valan.template.visible;
}reorder.add$TE(Clazz.new_($I$(102).c$$I$jalview_datamodel_AlignmentAnnotation, [this, null, valan.order, jalan]));
}}}}
for (var other, $other = remains.iterator$(); $other.hasNext$()&&((other=($other.next$())),1);) {
var othera=visan.get$O(other);
if (othera !== nullAnnot  && othera.template.getCalcId$() != null   && othera.template.getCalcId$().length$() > 0 ) {
reorder.add$TE(othera);
}}
var s=0;
var srt=Clazz.array(Integer.TYPE, [reorder.size$()]);
var rws=Clazz.array($I$(102), [reorder.size$()]);
for (var jvar, $jvar = reorder.iterator$(); $jvar.hasNext$()&&((jvar=($jvar.next$())),1);) {
rws[s]=jvar;
srt[s++]=jvar.order;
}
reorder.clear$();
$I$(129).sort$IA$OA(srt, rws);
for (var jvar, $jvar = 0, $$jvar = rws; $jvar<$$jvar.length&&((jvar=($$jvar[$jvar])),1);$jvar++) {
al.addAnnotation$jalview_datamodel_AlignmentAnnotation$I(jvar.template, jvar.order);
}
af.alignPanel.adjustAnnotationHeight$();
}}, p$1);

Clazz.newMeth(C$, 'skipViewport$jalview_xml_binding_jalview_JalviewModel', function (object) {
if (this.skipList == null ) {
return false;
}var id=object.getViewport$().get$I(0).getSequenceSetId$();
if (this.skipList.containsKey$O(id)) {
if ($I$(8).log != null  && $I$(8).log.isDebugEnabled$() ) {
$I$(8).log.debug$O("Skipping seuqence set id " + id);
}return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'addToSkipList$jalview_gui_AlignFrame', function (af) {
if (this.skipList == null ) {
this.skipList=Clazz.new_($I$(11));
}this.skipList.put$TK$TV(af.getViewport$().getSequenceSetId$(), af);
});

Clazz.newMeth(C$, 'clearSkipList$', function () {
if (this.skipList != null ) {
this.skipList.clear$();
this.skipList=null;
}});

Clazz.newMeth(C$, 'recoverDatasetFor$jalview_xml_binding_jalview_SequenceSet$jalview_datamodel_AlignmentI$Z$S', function (vamsasSet, al, ignoreUnrefed, uniqueSeqSetId) {
var ds=p$1.getDatasetFor$S.apply(this, [vamsasSet.getDatasetId$()]);
var xtant_ds=ds;
if (xtant_ds == null ) {
xtant_ds=this.checkIfHasDataset$java_util_List(vamsasSet.getSequence$());
if (xtant_ds != null ) {
ds=xtant_ds;
p$1.addDatasetRef$S$jalview_datamodel_AlignmentI.apply(this, [vamsasSet.getDatasetId$(), ds]);
}}var dseqs=null;
if (!ignoreUnrefed) {
var seqSetDS=p$1.getDatasetFor$S.apply(this, ["uniqueSeqSetId." + uniqueSeqSetId]);
if (seqSetDS != null ) {
if (ds != null  && ds !== seqSetDS  ) {
p$1.warn$S.apply(this, ["JAL-3171 regression: Overwriting a dataset reference for an alignment - CDS/Protein crossreference data may be lost"]);
if (xtant_ds != null ) {
p$1.warn$S.apply(this, ["JAL-3171 SERIOUS!  TOTAL CONFUSION - please consider contacting the Jalview Development team so they can investigate why your project caused this message to be displayed."]);
}}ds=seqSetDS;
p$1.addDatasetRef$S$jalview_datamodel_AlignmentI.apply(this, [vamsasSet.getDatasetId$(), ds]);
}}if (ds == null ) {
var xtantDS=this.checkIfHasDataset$java_util_List(vamsasSet.getSequence$());
dseqs=Clazz.new_($I$(33));
}for (var i=0, iSize=vamsasSet.getSequence$().size$(); i < iSize; i++) {
var vamsasSeq=vamsasSet.getSequence$().get$I(i);
p$1.ensureJalviewDatasetSequence$jalview_xml_binding_jalview_Sequence$jalview_datamodel_AlignmentI$java_util_Vector$Z$I.apply(this, [vamsasSeq, ds, dseqs, ignoreUnrefed, i]);
}
if (ds == null ) {
var dsseqs=Clazz.array($I$(93), [dseqs.size$()]);
dseqs.copyInto$OA(dsseqs);
ds=Clazz.new_($I$(94).c$$jalview_datamodel_SequenceIA,[dsseqs]);
p$1.debug$S.apply(this, ["Created new dataset " + vamsasSet.getDatasetId$() + " for alignment " + System.identityHashCode$O(al) ]);
p$1.addDatasetRef$S$jalview_datamodel_AlignmentI.apply(this, [vamsasSet.getDatasetId$(), ds]);
}if (al.getDataset$() == null  && !ignoreUnrefed ) {
al.setDataset$jalview_datamodel_AlignmentI(ds);
p$1.addDatasetRef$S$jalview_datamodel_AlignmentI.apply(this, ["uniqueSeqSetId." + uniqueSeqSetId, ds]);
}this.updateSeqDatasetBinding$java_util_List$jalview_datamodel_AlignmentI(vamsasSet.getSequence$(), ds);
}, p$1);

Clazz.newMeth(C$, 'checkIfHasDataset$java_util_List', function (list) {
for (var restoredSeq, $restoredSeq = list.iterator$(); $restoredSeq.hasNext$()&&((restoredSeq=($restoredSeq.next$())),1);) {
var datasetFor=this.seqToDataset.get$O(restoredSeq.getDsseqid$());
if (datasetFor != null ) {
return datasetFor;
}}
return null;
});

Clazz.newMeth(C$, 'updateSeqDatasetBinding$java_util_List$jalview_datamodel_AlignmentI', function (list, ds) {
for (var restoredSeq, $restoredSeq = list.iterator$(); $restoredSeq.hasNext$()&&((restoredSeq=($restoredSeq.next$())),1);) {
var prevDS=this.seqToDataset.put$TK$TV(restoredSeq.getDsseqid$(), ds);
if (prevDS != null  && prevDS !== ds  ) {
p$1.warn$S.apply(this, ["Dataset sequence appears in many datasets: " + restoredSeq.getDsseqid$()]);
}}
});

Clazz.newMeth(C$, 'ensureJalviewDatasetSequence$jalview_xml_binding_jalview_Sequence$jalview_datamodel_AlignmentI$java_util_Vector$Z$I', function (vamsasSeq, ds, dseqs, ignoreUnrefed, vseqpos) {
var sq=this.seqRefIds.get$O(vamsasSeq.getId$());
var reorder=false;
var dsq=null;
if (sq != null  && sq.getDatasetSequence$() != null  ) {
dsq=sq.getDatasetSequence$();
} else {
reorder=true;
}if (sq == null  && ignoreUnrefed ) {
return;
}var sqid=vamsasSeq.getDsseqid$();
if (dsq == null ) {
if (sqid != null ) {
dsq=this.seqRefIds.get$O(sqid);
}if (dsq == null ) {
dsq=sq.createDatasetSequence$();
if (sqid == null ) {
sqid=this.seqHash$jalview_datamodel_SequenceI(dsq);
}dsq.setVamsasId$S(this.uniqueSetSuffix + sqid);
this.seqRefIds.put$TK$TV(sqid, dsq);
if (ds == null ) {
if (dseqs != null ) {
dseqs.addElement$TE(dsq);
}} else {
ds.addSequence$jalview_datamodel_SequenceI(dsq);
}} else {
if (sq !== dsq ) {
sq.setDatasetSequence$jalview_datamodel_SequenceI(dsq);
if (ds == null ) {
if (dseqs != null ) {
if (!dseqs.contains$O(dsq)) {
dseqs.add$TE(dsq);
}} else {
if (ds.findIndex$jalview_datamodel_SequenceI(dsq) < 0) {
ds.addSequence$jalview_datamodel_SequenceI(dsq);
}}}}}}if (sq !== dsq ) {
var newres=$I$(130).extractGaps$S$S($I$(131).GapChars, sq.getSequenceAsString$());
if (!newres.equalsIgnoreCase$S(dsq.getSequenceAsString$()) && newres.length$() > dsq.getLength$() ) {
{
dsq.setSequence$S(newres);
}System.err.println$S("DEBUG Notice:  Merged dataset sequence (if you see this often, post at http://issues.jalview.org/browse/JAL-1474)");
}} else {
if (ds != null  && dseqs == null  ) {
var opos=ds.findIndex$jalview_datamodel_SequenceI(dsq);
var tseq=null;
if (opos != -1 && vseqpos != opos ) {
ds.deleteSequence$jalview_datamodel_SequenceI(dsq);
}if (vseqpos < ds.getHeight$()) {
if (vseqpos != opos) {
tseq=ds.getSequenceAt$I(vseqpos);
ds.replaceSequenceAt$I$jalview_datamodel_SequenceI(vseqpos, dsq);
ds.addSequence$jalview_datamodel_SequenceI(tseq);
}} else {
ds.addSequence$jalview_datamodel_SequenceI(dsq);
}}}}, p$1);

Clazz.newMeth(C$, 'getDatasetFor$S', function (datasetId) {
if (this.datasetIds == null ) {
this.datasetIds=Clazz.new_($I$(11));
return null;
}if (this.datasetIds.containsKey$O(datasetId)) {
return this.datasetIds.get$O(datasetId);
}return null;
}, p$1);

Clazz.newMeth(C$, 'addDatasetRef$S$jalview_datamodel_AlignmentI', function (datasetId, dataset) {
if (this.datasetIds == null ) {
this.datasetIds=Clazz.new_($I$(11));
}this.datasetIds.put$TK$TV(datasetId, dataset);
}, p$1);

Clazz.newMeth(C$, 'getDatasetIdRef$jalview_datamodel_AlignmentI', function (dataset) {
if (dataset.getDataset$() != null ) {
p$1.warn$S.apply(this, ["Serious issue!  Dataset Object passed to getDatasetIdRef is not a Jalview DATASET alignment..."]);
}var datasetId=p$1.makeHashCode$O$S.apply(this, [dataset, null]);
if (datasetId == null ) {
if (this.dataset2Ids == null ) {
this.dataset2Ids=Clazz.new_($I$(3));
} else {
datasetId=this.dataset2Ids.get$O(dataset);
}if (datasetId == null ) {
datasetId="ds" + this.dataset2Ids.size$() + 1 ;
this.dataset2Ids.put$TK$TV(dataset, datasetId);
}}return datasetId;
}, p$1);

Clazz.newMeth(C$, 'addDBRefs$jalview_datamodel_SequenceI$jalview_xml_binding_jalview_Sequence', function (datasetSequence, sequence) {
for (var d=0; d < sequence.getDBRef$().size$(); d++) {
var dr=sequence.getDBRef$().get$I(d);
var entry=Clazz.new_($I$(132).c$$S$S$S,[dr.getSource$(), dr.getVersion$(), dr.getAccessionId$()]);
if (dr.getMapping$() != null ) {
entry.setMap$jalview_datamodel_Mapping(p$1.addMapping$jalview_xml_binding_jalview_Mapping.apply(this, [dr.getMapping$()]));
}datasetSequence.addDBRef$jalview_datamodel_DBRefEntry(entry);
}
}, p$1);

Clazz.newMeth(C$, 'addMapping$jalview_xml_binding_jalview_Mapping', function (m) {
var dsto=null;
var fr=Clazz.array(Integer.TYPE, [m.getMapListFrom$().size$() * 2]);
var from=m.getMapListFrom$().iterator$();
for (var _i=0; from.hasNext$(); _i+=2) {
var mf=from.next$();
fr[_i]=mf.getStart$();
fr[_i + 1]=mf.getEnd$();
}
var fto=Clazz.array(Integer.TYPE, [m.getMapListTo$().size$() * 2]);
var to=m.getMapListTo$().iterator$();
for (var _i=0; to.hasNext$(); _i+=2) {
var mf=to.next$();
fto[_i]=mf.getStart$();
fto[_i + 1]=mf.getEnd$();
}
var jmap=Clazz.new_($I$(133).c$$jalview_datamodel_SequenceI$IA$IA$I$I,[dsto, fr, fto, m.getMapFromUnit$().intValue$(), m.getMapToUnit$().intValue$()]);
if (m.getDseqFor$() != null ) {
var dsfor=m.getDseqFor$();
if (this.seqRefIds.containsKey$O(dsfor)) {
jmap.setTo$jalview_datamodel_SequenceI(this.seqRefIds.get$O(dsfor));
} else {
this.frefedSequence.add$TE(this.newMappingRef$S$jalview_datamodel_Mapping(dsfor, jmap));
}} else if (m.getSequence$() != null ) {
var ms=m.getSequence$();
var djs=null;
var sqid=ms.getDsseqid$();
if (sqid != null  && sqid.length$() > 0 ) {
djs=this.seqRefIds.get$O(sqid);
} else {
System.err.println$S("Warning - making up dataset sequence id for DbRef sequence map reference");
sqid=(ms).toString();
}if (djs == null ) {
djs=Clazz.new_($I$(92).c$$S$S,[ms.getName$(), ms.getSequence$()]);
djs.setStart$I(jmap.getMap$().getToLowest$());
djs.setEnd$I(jmap.getMap$().getToHighest$());
djs.setVamsasId$S(this.uniqueSetSuffix + sqid);
jmap.setTo$jalview_datamodel_SequenceI(djs);
this.incompleteSeqs.put$TK$TV(sqid, djs);
this.seqRefIds.put$TK$TV(sqid, djs);
}$I$(8).log.debug$O("about to recurse on addDBRefs.");
p$1.addDBRefs$jalview_datamodel_SequenceI$jalview_xml_binding_jalview_Sequence.apply(this, [djs, ms]);
}return jmap;
}, p$1);

Clazz.newMeth(C$, 'copyAlignPanel$jalview_gui_AlignmentPanel', function (ap) {
this.initSeqRefs$();
var jm=this.saveState$jalview_gui_AlignmentPanel$S$java_util_jar_JarOutputStream$java_util_List(ap, null, null, null);
p$1.addDatasetRef$S$jalview_datamodel_AlignmentI.apply(this, [jm.getVamsasModel$().getSequenceSet$().get$I(0).getDatasetId$(), ap.getAlignment$().getDataset$()]);
this.uniqueSetSuffix="";
jm.getViewport$().get$I(0).setId$S(null);
if (this.frefedSequence == null ) {
this.frefedSequence=Clazz.new_($I$(33));
}this.viewportsAdded.clear$();
var af=this.loadFromObject$jalview_xml_binding_jalview_JalviewModel$S$Z$jalview_util_jarInputStreamProvider(jm, null, false, null);
af.getAlignPanels$().clear$();
af.closeMenuItem_actionPerformed$Z(true);
return af.alignPanel;
});

Clazz.newMeth(C$, 'warn$S', function (msg) {
p$1.warn$S$Exception.apply(this, [msg, null]);
}, p$1);

Clazz.newMeth(C$, 'warn$S$Exception', function (msg, e) {
if ($I$(8).log != null ) {
if (e != null ) {
$I$(8).log.warn$O$Throwable(msg, e);
} else {
$I$(8).log.warn$O(msg);
}} else {
System.err.println$S("Warning: " + msg);
if (e != null ) {
e.printStackTrace$();
}}}, p$1);

Clazz.newMeth(C$, 'debug$S', function (string) {
p$1.debug$S$Exception.apply(this, [string, null]);
}, p$1);

Clazz.newMeth(C$, 'debug$S$Exception', function (msg, e) {
if ($I$(8).log != null ) {
if (e != null ) {
$I$(8).log.debug$O$Throwable(msg, e);
} else {
$I$(8).log.debug$O(msg);
}} else {
System.err.println$S("Warning: " + msg);
if (e != null ) {
e.printStackTrace$();
}}}, p$1);

Clazz.newMeth(C$, 'setObjectMappingTables$java_util_Hashtable$java_util_IdentityHashMap', function (vobj2jv, jv2vobj) {
this.jv2vobj=jv2vobj;
this.vobj2jv=vobj2jv;
var ds=jv2vobj.keySet$().iterator$();
var id;
while (ds.hasNext$()){
var jvobj=ds.next$();
id=jv2vobj.get$O(jvobj).toString();
if (Clazz.instanceOf(jvobj, "jalview.datamodel.Alignment")) {
if ((jvobj).getDataset$() == null ) {
p$1.addDatasetRef$S$jalview_datamodel_AlignmentI.apply(this, [id, jvobj]);
}} else if (Clazz.instanceOf(jvobj, "jalview.datamodel.Sequence")) {
if (this.seqRefIds == null ) {
this.seqRefIds=Clazz.new_($I$(2));
}if (this.seqsToIds == null ) {
this.seqsToIds=Clazz.new_($I$(3));
}this.seqRefIds.put$TK$TV(jv2vobj.get$O(jvobj).toString(), jvobj);
this.seqsToIds.put$TK$TV(jvobj, id);
} else if (Clazz.instanceOf(jvobj, "jalview.datamodel.AlignmentAnnotation")) {
var anid;
var jvann=jvobj;
this.annotationIds.put$TK$TV(anid=jv2vobj.get$O(jvobj).toString(), jvann);
if (jvann.annotationId == null ) {
jvann.annotationId=anid;
}if (!jvann.annotationId.equals$O(anid)) {
p$1.warn$S.apply(this, ["Overriding Annotation ID for " + anid + " from different id : " + jvann.annotationId ]);
jvann.annotationId=anid;
}} else if (Clazz.instanceOf(jvobj, "java.lang.String")) {
if (this.jvids2vobj == null ) {
this.jvids2vobj=Clazz.new_($I$(11));
this.jvids2vobj.put$TK$TV(jvobj, jv2vobj.get$O(jvobj).toString());
}} else {
$I$(8).log.debug$O("Ignoring " + jvobj.getClass$() + " (ID = " + id );
}}
});

Clazz.newMeth(C$, 'setUniqueSetSuffix$S', function (string) {
this.uniqueSetSuffix=string;
});

Clazz.newMeth(C$, 'setSkipList$java_util_Hashtable', function (skipList2) {
this.skipList=skipList2;
});

Clazz.newMeth(C$, 'readJarEntry$jalview_util_jarInputStreamProvider$S', function (jprovider, jarEntryName) {
var result=null;
var $in=null;
try {
var jin=jprovider.getJarInputStream$();
var entry=null;
do {
entry=jin.getNextJarEntry$();
} while (entry != null  && !entry.getName$().equals$O(jarEntryName) );
if (entry != null ) {
var out=Clazz.new_($I$(116).c$$I,[256]);
$in=Clazz.new_($I$(90).c$$java_io_Reader,[Clazz.new_($I$(91).c$$java_io_InputStream$S,[jin, "UTF-8"])]);
var data;
while ((data=$in.readLine$()) != null ){
out.append$S(data);
}
result=out.toString();
} else {
p$1.warn$S.apply(this, ["Couldn't find entry in Jalview Jar for " + jarEntryName]);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
} finally {
if ($in != null ) {
try {
$in.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}
return result;
});

Clazz.newMeth(C$, 'nextCounter', function () {
return this.counter++;
}, p$1);

Clazz.newMeth(C$, 'loadPCAViewers$jalview_xml_binding_jalview_JalviewModel$jalview_gui_AlignmentPanel', function (model, ap) {
try {
var pcaviewers=model.getPcaViewer$();
for (var viewer, $viewer = pcaviewers.iterator$(); $viewer.hasNext$()&&((viewer=($viewer.next$())),1);) {
var modelName=viewer.getScoreModelName$();
var params=Clazz.new_($I$(134).c$$Z$Z$Z$Z,[(viewer.isIncludeGappedColumns$()).booleanValue$(), (viewer.isMatchGaps$()).booleanValue$(), (viewer.isIncludeGaps$()).booleanValue$(), (viewer.isDenominateByShortestLength$()).booleanValue$()]);
var panel=Clazz.new_($I$(135).c$$jalview_gui_AlignmentPanel$S$jalview_api_analysis_SimilarityParamsI,[ap, modelName, params]);
panel.setTitle$S(viewer.getTitle$());
panel.setBounds$java_awt_Rectangle(Clazz.new_($I$(109).c$$I$I$I$I,[(viewer.getXpos$()).intValue$(), (viewer.getYpos$()).intValue$(), (viewer.getWidth$()).intValue$(), (viewer.getHeight$()).intValue$()]));
var showLabels=(viewer.isShowLabels$()).booleanValue$();
panel.setShowLabels$Z(showLabels);
panel.getRotatableCanvas$().setShowLabels$Z(showLabels);
panel.getRotatableCanvas$().setBgColour$java_awt_Color(Clazz.new_($I$(64).c$$I,[(viewer.getBgColour$()).intValue$()]));
panel.getRotatableCanvas$().setApplyToAllViews$Z((viewer.isLinkToAllViews$()).booleanValue$());
var scoreModel=$I$(136).getInstance$().getScoreModel$S$jalview_api_AlignmentViewPanel(modelName, ap);
var pca=Clazz.new_($I$(137).c$$jalview_datamodel_AlignmentView$jalview_api_analysis_ScoreModelI$jalview_api_analysis_SimilarityParamsI,[null, scoreModel, params]);
var pcaData=viewer.getPcaData$();
var pairwise=this.loadDoubleMatrix$jalview_xml_binding_jalview_DoubleMatrix(pcaData.getPairwiseMatrix$());
pca.setPairwiseScores$jalview_math_MatrixI(pairwise);
var triDiag=this.loadDoubleMatrix$jalview_xml_binding_jalview_DoubleMatrix(pcaData.getTridiagonalMatrix$());
pca.setTridiagonal$jalview_math_MatrixI(triDiag);
var result=this.loadDoubleMatrix$jalview_xml_binding_jalview_DoubleMatrix(pcaData.getEigenMatrix$());
pca.setEigenmatrix$jalview_math_MatrixI(result);
panel.getPcaModel$().setPCA$jalview_analysis_PCA(pca);
panel.setInputData$jalview_datamodel_AlignmentView(null);
var seqPoints=Clazz.new_($I$(4));
for (var sp, $sp = viewer.getSequencePoint$().iterator$(); $sp.hasNext$()&&((sp=($sp.next$())),1);) {
var seqId=sp.getSequenceRef$();
var seq=this.seqRefIds.get$O(seqId);
if (seq == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Unmatched seqref for PCA: " + seqId]);
}var pt=Clazz.new_($I$(138).c$$F$F$F,[(sp.getXPos$()).floatValue$(), (sp.getYPos$()).floatValue$(), (sp.getZPos$()).floatValue$()]);
var seqPoint=Clazz.new_($I$(139).c$$jalview_datamodel_SequenceI$jalview_datamodel_Point,[seq, pt]);
seqPoints.add$TE(seqPoint);
}
panel.getRotatableCanvas$().setPoints$java_util_List$I(seqPoints, seqPoints.size$());
panel.getRotatableCanvas$().setScaleFactor$F((viewer.getScaleFactor$()).floatValue$());
var spMin=viewer.getSeqPointMin$();
var min=Clazz.array(Float.TYPE, -1, [(spMin.getXPos$()).floatValue$(), (spMin.getYPos$()).floatValue$(), (spMin.getZPos$()).floatValue$()]);
var spMax=viewer.getSeqPointMax$();
var max=Clazz.array(Float.TYPE, -1, [(spMax.getXPos$()).floatValue$(), (spMax.getYPos$()).floatValue$(), (spMax.getZPos$()).floatValue$()]);
panel.getRotatableCanvas$().setSeqMinMax$FA$FA(min, max);
panel.getPcaModel$().setSequencePoints$java_util_List(seqPoints);
panel.setSelectedDimensionIndex$I$jalview_math_RotatableMatrix_Axis((viewer.getXDim$()).intValue$(), $I$(44).X);
panel.setSelectedDimensionIndex$I$jalview_math_RotatableMatrix_Axis((viewer.getYDim$()).intValue$(), $I$(44).Y);
panel.setSelectedDimensionIndex$I$jalview_math_RotatableMatrix_Axis((viewer.getZDim$()).intValue$(), $I$(44).Z);
panel.setTop$I(seqPoints.size$() - 1);
panel.getPcaModel$().setTop$I(seqPoints.size$() - 1);
for (var i=0; i < 3; i++) {
var axis=viewer.getAxis$().get$I(i);
panel.getRotatableCanvas$().getAxisEndPoints$()[i]=Clazz.new_($I$(138).c$$F$F$F,[(axis.getXPos$()).floatValue$(), (axis.getYPos$()).floatValue$(), (axis.getZPos$()).floatValue$()]);
}
$I$(9).addInternalFrame$javax_swing_JInternalFrame$S$I$I(panel, $I$(69).formatMessage$S$OA("label.calc_title", ["PCA", modelName]), 475, 450);
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(8).log.error$O("Error loading PCA: " + ex.toString());
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'marshalColour$S$jalview_api_FeatureColourI', function (featureType, fcol) {
var col=Clazz.new_($I$(78));
if (fcol.isSimpleColour$()) {
col.setRGB$S($I$(80).getHexString$java_awt_Color(fcol.getColour$()));
} else {
col.setRGB$S($I$(80).getHexString$java_awt_Color(fcol.getMaxColour$()));
col.setMin$Float(new Float(fcol.getMin$()));
col.setMax$Float(new Float(fcol.getMax$()));
col.setMinRGB$S($I$(80).getHexString$java_awt_Color(fcol.getMinColour$()));
col.setAutoScale$Boolean(new Boolean(fcol.isAutoScaled$()));
col.setThreshold$Float(new Float(fcol.getThreshold$()));
col.setColourByLabel$Boolean(new Boolean(fcol.isColourByLabel$()));
col.setThreshType$jalview_xml_binding_jalview_ThresholdType(fcol.isAboveThreshold$() ? $I$(140).ABOVE : (fcol.isBelowThreshold$() ? $I$(140).BELOW : $I$(140).NONE));
if (fcol.isColourByAttribute$()) {
var attName=fcol.getAttributeName$();
col.getAttributeName$().add$TE(attName[0]);
if (attName.length > 1) {
col.getAttributeName$().add$TE(attName[1]);
}}var noColour=fcol.getNoColour$();
if (noColour == null ) {
col.setNoValueColour$jalview_xml_binding_jalview_NoValueColour($I$(35).NONE);
} else if (noColour === fcol.getMaxColour$() ) {
col.setNoValueColour$jalview_xml_binding_jalview_NoValueColour($I$(35).MAX);
} else {
col.setNoValueColour$jalview_xml_binding_jalview_NoValueColour($I$(35).MIN);
}}col.setName$S(featureType);
return col;
}, 1);

Clazz.newMeth(C$, 'marshalFilter$jalview_datamodel_features_FeatureMatcherI$java_util_Iterator$Z', function (firstMatcher, filters, and) {
var result=Clazz.new_($I$(141));
if (filters.hasNext$()) {
var compound=Clazz.new_($I$(142));
compound.setAnd$Z(and);
var matcher1=C$.marshalFilter$jalview_datamodel_features_FeatureMatcherI$java_util_Iterator$Z(firstMatcher, $I$(143).emptyIterator$(), and);
compound.getMatcherSet$().add$TE(matcher1);
var nextMatcher=filters.next$();
var matcher2=C$.marshalFilter$jalview_datamodel_features_FeatureMatcherI$java_util_Iterator$Z(nextMatcher, filters, and);
compound.getMatcherSet$().add$TE(matcher2);
result.setCompoundMatcher$jalview_xml_binding_jalview_FeatureMatcherSet_CompoundMatcher(compound);
} else {
var matcherModel=Clazz.new_($I$(144));
matcherModel.setCondition$S(firstMatcher.getMatcher$().getCondition$().getStableName$());
matcherModel.setValue$S(firstMatcher.getMatcher$().getPattern$());
if (firstMatcher.isByAttribute$()) {
matcherModel.setBy$jalview_xml_binding_jalview_FilterBy($I$(145).BY_ATTRIBUTE);
var attName=firstMatcher.getAttribute$();
matcherModel.getAttributeName$().add$TE(attName[0]);
if (attName.length > 1) {
matcherModel.getAttributeName$().add$TE(attName[1]);
}} else if (firstMatcher.isByLabel$()) {
matcherModel.setBy$jalview_xml_binding_jalview_FilterBy($I$(145).BY_LABEL);
} else if (firstMatcher.isByScore$()) {
matcherModel.setBy$jalview_xml_binding_jalview_FilterBy($I$(145).BY_SCORE);
}result.setMatchCondition$jalview_xml_binding_jalview_FeatureMatcher(matcherModel);
}return result;
}, 1);

Clazz.newMeth(C$, 'parseFilter$S$jalview_xml_binding_jalview_FeatureMatcherSet', function (featureType, matcherSetModel) {
var result=Clazz.new_($I$(146));
try {
C$.parseFilterConditions$jalview_datamodel_features_FeatureMatcherSetI$jalview_xml_binding_jalview_FeatureMatcherSet$Z(result, matcherSetModel, true);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalStateException")){
System.err.println$S(String.format$S$OA("Error reading filter conditions for \'%s\': %s", [featureType, e.getMessage$()]));
} else {
throw e;
}
}
return result;
}, 1);

Clazz.newMeth(C$, 'parseFilterConditions$jalview_datamodel_features_FeatureMatcherSetI$jalview_xml_binding_jalview_FeatureMatcherSet$Z', function (matcherSet, matcherSetModel, and) {
var mc=matcherSetModel.getMatchCondition$();
if (mc != null ) {
var filterBy=mc.getBy$();
var cond=$I$(147).fromString$S(mc.getCondition$());
var pattern=mc.getValue$();
var matchCondition=null;
if (filterBy === $I$(145).BY_LABEL ) {
matchCondition=$I$(148).byLabel$jalview_util_matcher_Condition$S(cond, pattern);
} else if (filterBy === $I$(145).BY_SCORE ) {
matchCondition=$I$(148).byScore$jalview_util_matcher_Condition$S(cond, pattern);
} else if (filterBy === $I$(145).BY_ATTRIBUTE ) {
var attributeName=mc.getAttributeName$();
var attNames=attributeName.toArray$TTA(Clazz.array(String, [attributeName.size$()]));
matchCondition=$I$(148).byAttribute$jalview_util_matcher_Condition$S$SA(cond, pattern, attNames);
}if (and) {
matcherSet.and$jalview_datamodel_features_FeatureMatcherI(matchCondition);
} else {
matcherSet.or$jalview_datamodel_features_FeatureMatcherI(matchCondition);
}} else {
var matchers=matcherSetModel.getCompoundMatcher$().getMatcherSet$();
var anded=matcherSetModel.getCompoundMatcher$().isAnd$();
if (matchers.size$() == 2) {
C$.parseFilterConditions$jalview_datamodel_features_FeatureMatcherSetI$jalview_xml_binding_jalview_FeatureMatcherSet$Z(matcherSet, matchers.get$I(0), anded);
C$.parseFilterConditions$jalview_datamodel_features_FeatureMatcherSetI$jalview_xml_binding_jalview_FeatureMatcherSet$Z(matcherSet, matchers.get$I(1), anded);
} else {
System.err.println$S("Malformed compound filter condition");
}}}, 1);

Clazz.newMeth(C$, 'parseColour$jalview_xml_binding_jalview_JalviewUserColours_Colour', function (colourModel) {
var colour=null;
if (colourModel.getMax$() != null ) {
var mincol=null;
var maxcol=null;
var noValueColour=null;
try {
mincol=Clazz.new_($I$(64).c$$I,[Integer.parseInt$S$I(colourModel.getMinRGB$(), 16)]);
maxcol=Clazz.new_($I$(64).c$$I,[Integer.parseInt$S$I(colourModel.getRGB$(), 16)]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(8).log.warn$O$Throwable("Couldn\'t parse out graduated feature color.", e);
} else {
throw e;
}
}
var noCol=colourModel.getNoValueColour$();
if (noCol === $I$(35).MIN ) {
noValueColour=mincol;
} else if (noCol === $I$(35).MAX ) {
noValueColour=maxcol;
}colour=Clazz.new_($I$(126).c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color$F$F,[maxcol, mincol, maxcol, noValueColour, C$.safeFloat$Float(colourModel.getMin$()), C$.safeFloat$Float(colourModel.getMax$())]);
var attributeName=colourModel.getAttributeName$();
var attributes=attributeName.toArray$TTA(Clazz.array(String, [attributeName.size$()]));
if (attributes != null  && attributes.length > 0 ) {
colour.setAttributeName$SA(attributes);
}if (colourModel.isAutoScale$() != null ) {
colour.setAutoScaled$Z(colourModel.isAutoScale$().booleanValue$());
}if (colourModel.isColourByLabel$() != null ) {
colour.setColourByLabel$Z(colourModel.isColourByLabel$().booleanValue$());
}if (colourModel.getThreshold$() != null ) {
colour.setThreshold$F(colourModel.getThreshold$().floatValue$());
}var ttyp=colourModel.getThreshType$();
if (ttyp === $I$(140).ABOVE ) {
colour.setAboveThreshold$Z(true);
} else if (ttyp === $I$(140).BELOW ) {
colour.setBelowThreshold$Z(true);
}} else {
var color=Clazz.new_($I$(64).c$$I,[Integer.parseInt$S$I(colourModel.getRGB$(), 16)]);
colour=Clazz.new_($I$(126).c$$java_awt_Color,[color]);
}return colour;
}, 1);
;
(function(){var C$=Clazz.newClass(P$.Jalview2XML, "SeqFref", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sref=null;
this.type=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (_sref, type) {
C$.$init$.apply(this);
this.sref=_sref;
this.type=type;
}, 1);

Clazz.newMeth(C$, 'getSref$', function () {
return this.sref;
});

Clazz.newMeth(C$, 'getSrefSeq$', function () {
return this.this$0.seqRefIds.get$O(this.sref);
});

Clazz.newMeth(C$, 'isResolvable$', function () {
return this.this$0.seqRefIds.get$O(this.sref) != null ;
});

Clazz.newMeth(C$, 'getSrefDatasetSeq$', function () {
var sq=this.this$0.seqRefIds.get$O(this.sref);
if (sq != null ) {
while (sq.getDatasetSequence$() != null ){
sq=sq.getDatasetSequence$();
}
}return sq;
});

Clazz.newMeth(C$, 'toString', function () {
return this.type + " reference to " + this.sref ;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Jalview2XML, "JvAnnotRow", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.template=null;
this.order=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$jalview_datamodel_AlignmentAnnotation', function (i, jaa) {
C$.$init$.apply(this);
this.order=i;
this.template=jaa;
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
