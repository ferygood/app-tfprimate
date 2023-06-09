(function(){var P$=Clazz.newPackage("jalview.io"),p$1={},I$=[[0,'jalview.bin.BuildDetails','jalview.json.binding.biojson.v1.AlignmentPojo','jalview.datamodel.AlignExportSettingsAdapter','StringBuilder','jalview.json.binding.biojson.v1.SequencePojo','jalview.schemes.JalviewColourScheme','jalview.json.binding.biojson.v1.SequenceGrpPojo','jalview.schemes.ColourSchemeProperty','jalview.util.JSONUtils','java.util.ArrayList','jalview.renderer.seqfeatures.FeatureColourFinder','jalview.json.binding.biojson.v1.SequenceFeaturesPojo','jalview.util.Format','java.awt.Color','jalview.json.binding.biojson.v1.AlignmentAnnotationPojo','jalview.json.binding.biojson.v1.AnnotationDisplaySettingPojo','jalview.json.binding.biojson.v1.AnnotationPojo','Boolean','java.util.Hashtable','jalview.datamodel.Sequence','jalview.datamodel.SequenceGroup','jalview.json.binding.biojson.v1.ColourSchemeMapper','jalview.datamodel.Annotation','jalview.util.ColorUtils','jalview.datamodel.AlignmentAnnotation','jalview.datamodel.HiddenColumns','jalview.viewmodel.seqfeatures.FeaturesDisplayed','jalview.datamodel.SequenceFeature','jalview.datamodel.SequenceI','jalview.io.PDBFeatureSettings']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSONFile", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.io.AlignFile', 'jalview.api.ComplexAlignFile');
C$.version=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.version=Clazz.new_($I$(1)).getVersion$();
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.webstartUrl=null;
this.application=null;
this.globalColourScheme=null;
this.showSeqFeatures=false;
this.seqMap=null;
this.displayedFeatures=null;
this.fr=null;
this.hiddenColumns=null;
this.hiddenSeqRefs=null;
this.hiddenSequences=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.webstartUrl="http://www.jalview.org/services/launchApp";
this.application="Jalview";
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse', function (source) {
C$.superclazz.c$$jalview_io_FileParse.apply(this, [source]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_io_DataSourceType', function (inFile, sourceType) {
C$.superclazz.c$$O$jalview_io_DataSourceType.apply(this, [inFile, sourceType]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'parse$', function () {
this.parse$java_io_Reader(this.getReader$());
});

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z', function (sqs, jvsuffix) {
var jsonOutput=null;
try {
var jsonAlignmentPojo=Clazz.new_($I$(2));
var exportSettings=this.getExportSettings$();
if (exportSettings == null ) {
exportSettings=Clazz.new_($I$(3).c$$Z,[true]);
}var count=0;
for (var seq, $seq = 0, $$seq = sqs; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
var name=Clazz.new_($I$(4));
name.append$S(seq.getName$()).append$S("/").append$I(seq.getStart$()).append$S("-").append$I(seq.getEnd$());
var jsonSeqPojo=Clazz.new_($I$(5));
jsonSeqPojo.setId$S(String.valueOf$I(seq.hashCode$()));
jsonSeqPojo.setOrder$I(++count);
jsonSeqPojo.setEnd$I(seq.getEnd$());
jsonSeqPojo.setStart$I(seq.getStart$());
jsonSeqPojo.setName$S(name.toString());
jsonSeqPojo.setSeq$S(seq.getSequenceAsString$());
jsonAlignmentPojo.getSeqs$().add$TE(jsonSeqPojo);
}
jsonAlignmentPojo.setGlobalColorScheme$S(this.globalColourScheme);
jsonAlignmentPojo.getAppSettings$().put$TK$TV("application", this.application);
jsonAlignmentPojo.getAppSettings$().put$TK$TV("version", C$.version);
jsonAlignmentPojo.getAppSettings$().put$TK$TV("webStartUrl", this.webstartUrl);
jsonAlignmentPojo.getAppSettings$().put$TK$TV("showSeqFeatures", String.valueOf$Z(this.showSeqFeatures));
var hiddenSections=this.getHiddenSections$();
if (hiddenSections != null ) {
if (hiddenSections[0] != null  && exportSettings.isExportHiddenColumns$() ) {
jsonAlignmentPojo.getAppSettings$().put$TK$TV("hiddenCols", String.valueOf$O(hiddenSections[0]));
}if (hiddenSections[1] != null  && exportSettings.isExportHiddenSequences$() ) {
jsonAlignmentPojo.getAppSettings$().put$TK$TV("hiddenSeqs", String.valueOf$O(hiddenSections[1]));
}}if (exportSettings.isExportAnnotations$()) {
jsonAlignmentPojo.setAlignAnnotation$java_util_List(C$.annotationToJsonPojo$java_util_Vector(this.annotations));
} else {
if (this.globalColourScheme.equalsIgnoreCase$S($I$(6).RNAHelices.toString()) || this.globalColourScheme.equalsIgnoreCase$S($I$(6).TCoffee.toString()) ) {
jsonAlignmentPojo.setGlobalColorScheme$S("None");
}}if (exportSettings.isExportFeatures$()) {
jsonAlignmentPojo.setSeqFeatures$java_util_List(this.sequenceFeatureToJsonPojo$jalview_datamodel_SequenceIA(sqs));
}if (exportSettings.isExportGroups$() && this.seqGroups != null   && this.seqGroups.size$() > 0 ) {
for (var seqGrp, $seqGrp = this.seqGroups.iterator$(); $seqGrp.hasNext$()&&((seqGrp=($seqGrp.next$())),1);) {
var seqGrpPojo=Clazz.new_($I$(7));
seqGrpPojo.setGroupName$S(seqGrp.getName$());
seqGrpPojo.setColourScheme$S($I$(8).getColourName$jalview_schemes_ColourSchemeI(seqGrp.getColourScheme$()));
seqGrpPojo.setColourText$Z(seqGrp.getColourText$());
seqGrpPojo.setDescription$S(seqGrp.getDescription$());
seqGrpPojo.setDisplayBoxes$Z(seqGrp.getDisplayBoxes$());
seqGrpPojo.setDisplayText$Z(seqGrp.getDisplayText$());
seqGrpPojo.setEndRes$I(seqGrp.getEndRes$());
seqGrpPojo.setStartRes$I(seqGrp.getStartRes$());
seqGrpPojo.setShowNonconserved$Z(seqGrp.getShowNonconserved$());
for (var seq, $seq = seqGrp.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
seqGrpPojo.getSequenceRefs$().add$TE(String.valueOf$I(seq.hashCode$()));
}
jsonAlignmentPojo.getSeqGroups$().add$TE(seqGrpPojo);
}
}jsonOutput=$I$(9).stringify$O(jsonAlignmentPojo);
return jsonOutput.replaceAll$S$S("xstart", "xStart").replaceAll$S$S("xend", "xEnd");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
return jsonOutput;
});

Clazz.newMeth(C$, 'getHiddenSections$', function () {
var hiddenSections=Clazz.array(String, [2]);
if (this.getViewport$() == null ) {
return null;
}if (this.getViewport$().hasHiddenColumns$()) {
hiddenSections[0]=this.getViewport$().getAlignment$().getHiddenColumns$().regionsToString$S$S(";", "-");
}var hiddenSeqsObj=this.getViewport$().getAlignment$().getHiddenSequences$();
if (hiddenSeqsObj == null  || hiddenSeqsObj.hiddenSequences == null  ) {
return hiddenSections;
}var hiddenSeqs=hiddenSeqsObj.hiddenSequences;
var hiddenSeqsBuilder=Clazz.new_($I$(4));
for (var hiddenSeq, $hiddenSeq = 0, $$hiddenSeq = hiddenSeqs; $hiddenSeq<$$hiddenSeq.length&&((hiddenSeq=($$hiddenSeq[$hiddenSeq])),1);$hiddenSeq++) {
if (hiddenSeq != null ) {
hiddenSeqsBuilder.append$S(";").append$I(hiddenSeq.hashCode$());
}}
if (hiddenSeqsBuilder.length$() > 0) {
hiddenSeqsBuilder.deleteCharAt$I(0);
}hiddenSections[1]=hiddenSeqsBuilder.toString();
return hiddenSections;
});

Clazz.newMeth(C$, 'sequenceFeatureToJsonPojo$jalview_datamodel_SequenceIA', function (sqs) {
this.displayedFeatures=(this.fr == null ) ? null : this.fr.getFeaturesDisplayed$();
var sequenceFeaturesPojo=Clazz.new_($I$(10));
if (sqs == null ) {
return sequenceFeaturesPojo;
}var finder=Clazz.new_($I$(11).c$$jalview_api_FeatureRenderer,[this.fr]);
var visibleFeatureTypes=this.displayedFeatures == null  ? null : this.displayedFeatures.getVisibleFeatures$().toArray$TTA(Clazz.array(String, [this.displayedFeatures.getVisibleFeatureCount$()]));
for (var seq, $seq = 0, $$seq = sqs; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
var seqFeatures=seq.getFeatures$().getAllFeatures$SA(visibleFeatureTypes);
for (var sf, $sf = seqFeatures.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var jsonFeature=Clazz.new_($I$(12).c$$S,[String.valueOf$I(seq.hashCode$())]);
var featureColour=(this.fr == null ) ? null : $I$(13).getHexString$java_awt_Color(finder.findFeatureColour$java_awt_Color$jalview_datamodel_SequenceI$I($I$(14).white, seq, seq.findIndex$I(sf.getBegin$())));
var xStart=sf.getBegin$() == 0 ? 0 : seq.findIndex$I(sf.getBegin$()) - 1;
var xEnd=sf.getEnd$() == 0 ? 0 : seq.findIndex$I(sf.getEnd$());
jsonFeature.setXstart$I(xStart);
jsonFeature.setXend$I(xEnd);
jsonFeature.setType$S(sf.getType$());
jsonFeature.setDescription$S(sf.getDescription$());
jsonFeature.setLinks$java_util_Vector(sf.links);
jsonFeature.setOtherDetails$java_util_Map(sf.otherDetails);
jsonFeature.setScore$Float(new Float(sf.getScore$()));
jsonFeature.setFillColor$S(featureColour);
jsonFeature.setFeatureGroup$S(sf.getFeatureGroup$());
sequenceFeaturesPojo.add$TE(jsonFeature);
}
}
return sequenceFeaturesPojo;
});

Clazz.newMeth(C$, 'annotationToJsonPojo$java_util_Vector', function (annotations) {
var jsonAnnotations=Clazz.new_($I$(10));
if (annotations == null ) {
return jsonAnnotations;
}for (var annot, $annot = annotations.iterator$(); $annot.hasNext$()&&((annot=($annot.next$())),1);) {
var alignAnnotPojo=Clazz.new_($I$(15));
alignAnnotPojo.setDescription$S(annot.description);
alignAnnotPojo.setLabel$S(annot.label);
if (!Double.isNaN$D(annot.score)) {
alignAnnotPojo.setScore$D(annot.score);
}alignAnnotPojo.setCalcId$S(annot.getCalcId$());
alignAnnotPojo.setGraphType$I(annot.graph);
var annotSetting=Clazz.new_($I$(16));
annotSetting.setBelowAlignment$Z(annot.belowAlignment);
annotSetting.setCentreColLabels$Z(annot.centreColLabels);
annotSetting.setScaleColLabel$Z(annot.scaleColLabel);
annotSetting.setShowAllColLabels$Z(annot.showAllColLabels);
annotSetting.setVisible$Z(annot.visible);
annotSetting.setHasIcon$Z(annot.hasIcons);
alignAnnotPojo.setAnnotationSettings$jalview_json_binding_biojson_v1_AnnotationDisplaySettingPojo(annotSetting);
var refSeq=annot.sequenceRef;
if (refSeq != null ) {
alignAnnotPojo.setSequenceRef$S(String.valueOf$I(refSeq.hashCode$()));
}for (var annotation, $annotation = 0, $$annotation = annot.annotations; $annotation<$$annotation.length&&((annotation=($$annotation[$annotation])),1);$annotation++) {
var annotationPojo=Clazz.new_($I$(17));
if (annotation != null ) {
annotationPojo.setDescription$S(annotation.description);
annotationPojo.setValue$F(annotation.value);
annotationPojo.setSecondaryStructure$C(annotation.secondaryStructure);
var displayChar=annotation.displayCharacter == null  ? null : annotation.displayCharacter;
annotationPojo.setDisplayCharacter$S(displayChar);
if (annotation.colour != null ) {
annotationPojo.setColour$S($I$(13).getHexString$java_awt_Color(annotation.colour));
}alignAnnotPojo.getAnnotations$().add$TE(annotationPojo);
} else {
if (annot.getCalcId$() != null  && annot.getCalcId$().equalsIgnoreCase$S("TCoffeeScore") ) {
} else {
alignAnnotPojo.getAnnotations$().add$TE(annotationPojo);
}}}
jsonAnnotations.add$TE(alignAnnotPojo);
}
return jsonAnnotations;
}, 1);

Clazz.newMeth(C$, 'parse$java_io_Reader', function (jsonAlignmentString) {
try {
var alignmentJsonObj=$I$(9).parse$java_io_Reader(jsonAlignmentString);
var seqJsonArray=alignmentJsonObj.get$O("seqs");
var alAnnotJsonArray=alignmentJsonObj.get$O("alignAnnotation");
var jsonSeqArray=alignmentJsonObj.get$O("seqFeatures");
var seqGrpJsonArray=alignmentJsonObj.get$O("seqGroups");
var jvSettingsJsonObj=alignmentJsonObj.get$O("appSettings");
if (jvSettingsJsonObj != null ) {
this.globalColourScheme=jvSettingsJsonObj.get$O("globalColorScheme");
var showFeatures=$I$(18).valueOf$S(jvSettingsJsonObj.get$O("showSeqFeatures").toString());
this.setShowSeqFeatures$Z((showFeatures).booleanValue$());
this.parseHiddenSeqRefsAsList$java_util_Map(jvSettingsJsonObj);
this.parseHiddenCols$java_util_Map(jvSettingsJsonObj);
}this.hiddenSequences=Clazz.new_($I$(10));
this.seqMap=Clazz.new_($I$(19));
for (var sequenceIter=seqJsonArray.iterator$(); sequenceIter.hasNext$(); ) {
var sequence=sequenceIter.next$();
var sequcenceString=sequence.get$O("seq").toString();
var sequenceName=sequence.get$O("name").toString();
var seqUniqueId=sequence.get$O("id").toString();
var start=(Integer.valueOf$S(sequence.get$O("start").toString())).intValue$();
var end=(Integer.valueOf$S(sequence.get$O("end").toString())).intValue$();
var seq=Clazz.new_($I$(20).c$$S$S$I$I,[sequenceName, sequcenceString, start, end]);
if (this.hiddenSeqRefs != null  && this.hiddenSeqRefs.contains$O(seqUniqueId) ) {
this.hiddenSequences.add$TE(seq);
}this.seqs.add$TE(seq);
this.seqMap.put$TK$TV(seqUniqueId, seq);
}
p$1.parseFeatures$java_util_List.apply(this, [jsonSeqArray]);
for (var seqGrpIter=seqGrpJsonArray.iterator$(); seqGrpIter.hasNext$(); ) {
var seqGrpObj=seqGrpIter.next$();
var grpName=seqGrpObj.get$O("groupName").toString();
var colourScheme=seqGrpObj.get$O("colourScheme").toString();
var description=(seqGrpObj.get$O("description") == null ) ? null : seqGrpObj.get$O("description").toString();
var displayBoxes=($I$(18).valueOf$S(seqGrpObj.get$O("displayBoxes").toString())).booleanValue$();
var displayText=($I$(18).valueOf$S(seqGrpObj.get$O("displayText").toString())).booleanValue$();
var colourText=($I$(18).valueOf$S(seqGrpObj.get$O("colourText").toString())).booleanValue$();
var showNonconserved=($I$(18).valueOf$S(seqGrpObj.get$O("showNonconserved").toString())).booleanValue$();
var startRes=(Integer.valueOf$S(seqGrpObj.get$O("startRes").toString())).intValue$();
var endRes=(Integer.valueOf$S(seqGrpObj.get$O("endRes").toString())).intValue$();
var sequenceRefs=seqGrpObj.get$O("sequenceRefs");
var grpSeqs=Clazz.new_($I$(10));
if (sequenceRefs.size$() > 0) {
var seqHashIter=sequenceRefs.iterator$();
while (seqHashIter.hasNext$()){
var sequence=this.seqMap.get$O(seqHashIter.next$());
if (sequence != null ) {
grpSeqs.add$TE(sequence);
}}
}var seqGrp=Clazz.new_($I$(21).c$$java_util_List$S$jalview_schemes_ColourSchemeI$Z$Z$Z$I$I,[grpSeqs, grpName, null, displayBoxes, displayText, colourText, startRes, endRes]);
seqGrp.setColourScheme$jalview_schemes_ColourSchemeI($I$(22).getJalviewColourScheme$S$jalview_datamodel_AnnotatedCollectionI(colourScheme, seqGrp));
seqGrp.setShowNonconserved$Z(showNonconserved);
seqGrp.setDescription$S(description);
this.seqGroups.add$TE(seqGrp);
}
for (var alAnnotIter=alAnnotJsonArray.iterator$(); alAnnotIter.hasNext$(); ) {
var alAnnot=alAnnotIter.next$();
var annotJsonArray=alAnnot.get$O("annotations");
var annotations=Clazz.array($I$(23), [annotJsonArray.size$()]);
var count=0;
for (var annotIter=annotJsonArray.iterator$(); annotIter.hasNext$(); ) {
var annot=annotIter.next$();
if (annot == null ) {
annotations[count]=null;
} else {
var val=(annot.get$O("value") == null  ? null : Float.valueOf$S(annot.get$O("value").toString())).floatValue$();
var desc=annot.get$O("description") == null  ? null : annot.get$O("description").toString();
var ss=annot.get$O("secondaryStructure") == null  || annot.get$O("secondaryStructure").toString().equalsIgnoreCase$S("u0000")  ? " " : annot.get$O("secondaryStructure").toString().charAt$I(0);
var displayChar=annot.get$O("displayCharacter") == null  ? "" : annot.get$O("displayCharacter").toString();
annotations[count]=Clazz.new_($I$(23).c$$S$S$C$F,[displayChar, desc, ss, val]);
if (annot.get$O("colour") != null ) {
var color=$I$(24).parseColourString$S(annot.get$O("colour").toString());
annotations[count].colour=color;
}}++count;
}
var alignAnnot=Clazz.new_($I$(25).c$$S$S$jalview_datamodel_AnnotationA,[alAnnot.get$O("label").toString(), alAnnot.get$O("description").toString(), annotations]);
alignAnnot.graph=(alAnnot.get$O("graphType") == null ) ? 0 : (Integer.valueOf$S(alAnnot.get$O("graphType").toString())).intValue$();
var diplaySettings=alAnnot.get$O("annotationSettings");
if (diplaySettings != null ) {
alignAnnot.scaleColLabel=(diplaySettings.get$O("scaleColLabel") == null ) ? false : ($I$(18).valueOf$S(diplaySettings.get$O("scaleColLabel").toString())).booleanValue$();
alignAnnot.showAllColLabels=(diplaySettings.get$O("showAllColLabels") == null ) ? true : ($I$(18).valueOf$S(diplaySettings.get$O("showAllColLabels").toString())).booleanValue$();
alignAnnot.centreColLabels=(diplaySettings.get$O("centreColLabels") == null ) ? true : ($I$(18).valueOf$S(diplaySettings.get$O("centreColLabels").toString())).booleanValue$();
alignAnnot.belowAlignment=(diplaySettings.get$O("belowAlignment") == null ) ? false : ($I$(18).valueOf$S(diplaySettings.get$O("belowAlignment").toString())).booleanValue$();
alignAnnot.visible=(diplaySettings.get$O("visible") == null ) ? true : ($I$(18).valueOf$S(diplaySettings.get$O("visible").toString())).booleanValue$();
alignAnnot.hasIcons=(diplaySettings.get$O("hasIcon") == null ) ? true : ($I$(18).valueOf$S(diplaySettings.get$O("hasIcon").toString())).booleanValue$();
}if (alAnnot.get$O("score") != null ) {
alignAnnot.score=(Double.valueOf$S(alAnnot.get$O("score").toString())).doubleValue$();
}var calcId=(alAnnot.get$O("calcId") == null ) ? "" : alAnnot.get$O("calcId").toString();
alignAnnot.setCalcId$S(calcId);
var seqHash=(alAnnot.get$O("sequenceRef") != null ) ? alAnnot.get$O("sequenceRef").toString() : null;
var sequence=(seqHash != null ) ? this.seqMap.get$O(seqHash) : null;
if (sequence != null ) {
alignAnnot.sequenceRef=sequence;
sequence.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(alignAnnot);
if (alignAnnot.label.equalsIgnoreCase$S("T-COFFEE")) {
alignAnnot.createSequenceMapping$jalview_datamodel_SequenceI$I$Z(sequence, sequence.getStart$(), false);
sequence.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(alignAnnot);
alignAnnot.adjustForAlignment$();
}}alignAnnot.validateRangeAndDisplay$();
this.annotations.add$TE(alignAnnot);
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
return this;
});

Clazz.newMeth(C$, 'parseHiddenSeqRefsAsList$java_util_Map', function (jvSettingsJson) {
this.hiddenSeqRefs=Clazz.new_($I$(10));
var hiddenSeqs=jvSettingsJson.get$O("hiddenSeqs");
if (hiddenSeqs != null  && !hiddenSeqs.isEmpty$() ) {
var seqRefs=hiddenSeqs.split$S(";");
for (var i=0, n=seqRefs.length; i < n; i++) {
this.hiddenSeqRefs.add$TE(seqRefs[i]);
}
}});

Clazz.newMeth(C$, 'parseHiddenCols$java_util_Map', function (jvSettingsJson) {
var hiddenCols=jvSettingsJson.get$O("hiddenCols");
if (hiddenCols != null  && !hiddenCols.isEmpty$() ) {
this.hiddenColumns=Clazz.new_($I$(26));
var rangeStrings=hiddenCols.split$S(";");
for (var i=0, n=rangeStrings.length; i < n; i++) {
var range=rangeStrings[i].split$S("-");
this.hiddenColumns.hideColumns$I$I((Integer.valueOf$S(range[0])).intValue$(), (Integer.valueOf$S(range[1])).intValue$());
}
}});

Clazz.newMeth(C$, 'parseFeatures$java_util_List', function (jsonSeqFeatures) {
if (jsonSeqFeatures != null ) {
this.displayedFeatures=Clazz.new_($I$(27));
for (var o, $o = jsonSeqFeatures.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
var jsonFeature=o;
var begin=jsonFeature.get$O("xStart");
var end=jsonFeature.get$O("xEnd");
var type=jsonFeature.get$O("type");
var featureGrp=jsonFeature.get$O("featureGroup");
var description=jsonFeature.get$O("description");
var seqRef=jsonFeature.get$O("sequenceRef");
var score=Float.valueOf$S(jsonFeature.get$O("score").toString());
var seq=this.seqMap.get$O(seqRef);
var featureBegin=begin.intValue$() == 0 ? 0 : seq.findPosition$I(begin.intValue$());
var featureEnd=end.intValue$() == 0 ? 0 : seq.findPosition$I(end.intValue$()) - 1;
var sequenceFeature=Clazz.new_($I$(28).c$$S$S$I$I$F$S,[type, description, featureBegin, featureEnd, (score).floatValue$(), featureGrp]);
var linksJsonArray=jsonFeature.get$O("links");
if (linksJsonArray != null  && linksJsonArray.size$() > 0 ) {
var linkList=linksJsonArray.iterator$();
while (linkList.hasNext$()){
sequenceFeature.addLink$S(linkList.next$());
}
}seq.addSequenceFeature$jalview_datamodel_SequenceFeature(sequenceFeature);
this.displayedFeatures.setVisible$S(type);
}
}}, p$1);

Clazz.newMeth(C$, 'getGlobalColourScheme$', function () {
return this.globalColourScheme;
});

Clazz.newMeth(C$, 'setGlobalColorScheme$S', function (globalColourScheme) {
this.globalColourScheme=globalColourScheme;
});

Clazz.newMeth(C$, 'getDisplayedFeatures$', function () {
return this.displayedFeatures;
});

Clazz.newMeth(C$, 'setDisplayedFeatures$jalview_api_FeaturesDisplayedI', function (displayedFeatures) {
this.displayedFeatures=displayedFeatures;
});

Clazz.newMeth(C$, 'configureForView$jalview_api_AlignmentViewPanel', function (avpanel) {
if (avpanel == null ) {
return;
}C$.superclazz.prototype.configureForView$jalview_api_AlignmentViewPanel.apply(this, [avpanel]);
var viewport=avpanel.getAlignViewport$();
var alignment=viewport.getAlignment$();
var annots=alignment.getAlignmentAnnotation$();
this.seqGroups=alignment.getGroups$();
this.fr=avpanel.cloneFeatureRenderer$();
if (annots != null ) {
for (var annot, $annot = 0, $$annot = annots; $annot<$$annot.length&&((annot=($$annot[$annot])),1);$annot++) {
if (annot != null  && !annot.autoCalculated ) {
this.annotations.add$TE(annot);
}}
}this.globalColourScheme=$I$(8).getColourName$jalview_schemes_ColourSchemeI(viewport.getGlobalColourScheme$());
this.setDisplayedFeatures$jalview_api_FeaturesDisplayedI(viewport.getFeaturesDisplayed$());
this.showSeqFeatures=viewport.isShowSequenceFeatures$();
});

Clazz.newMeth(C$, 'isShowSeqFeatures$', function () {
return this.showSeqFeatures;
});

Clazz.newMeth(C$, 'setShowSeqFeatures$Z', function (showSeqFeatures) {
this.showSeqFeatures=showSeqFeatures;
});

Clazz.newMeth(C$, 'getAnnotations$', function () {
return this.annotations;
});

Clazz.newMeth(C$, 'getHiddenColumns$', function () {
return this.hiddenColumns;
});

Clazz.newMeth(C$, 'setHiddenColumns$jalview_datamodel_HiddenColumns', function (hidden) {
this.hiddenColumns=hidden;
});

Clazz.newMeth(C$, 'getHiddenSequences$', function () {
if (this.hiddenSequences == null  || this.hiddenSequences.isEmpty$() ) {
return Clazz.array($I$(29), -1, []);
}{
return this.hiddenSequences.toArray$TTA(Clazz.array($I$(29), [this.hiddenSequences.size$()]));
}});

Clazz.newMeth(C$, 'setHiddenSequences$java_util_ArrayList', function (hiddenSequences) {
this.hiddenSequences=hiddenSequences;
});

Clazz.newMeth(C$, 'getFeatureColourScheme$', function () {
return Clazz.new_($I$(30));
});
;
(function(){var C$=Clazz.newClass(P$.JSONFile, "JSONExportSettings", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.exportSequence=false;
this.exportSequenceFeatures=false;
this.exportAnnotations=false;
this.exportGroups=false;
this.exportJalviewSettings=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isExportSequence$', function () {
return this.exportSequence;
});

Clazz.newMeth(C$, 'setExportSequence$Z', function (exportSequence) {
this.exportSequence=exportSequence;
});

Clazz.newMeth(C$, 'isExportSequenceFeatures$', function () {
return this.exportSequenceFeatures;
});

Clazz.newMeth(C$, 'setExportSequenceFeatures$Z', function (exportSequenceFeatures) {
this.exportSequenceFeatures=exportSequenceFeatures;
});

Clazz.newMeth(C$, 'isExportAnnotations$', function () {
return this.exportAnnotations;
});

Clazz.newMeth(C$, 'setExportAnnotations$Z', function (exportAnnotations) {
this.exportAnnotations=exportAnnotations;
});

Clazz.newMeth(C$, 'isExportGroups$', function () {
return this.exportGroups;
});

Clazz.newMeth(C$, 'setExportGroups$Z', function (exportGroups) {
this.exportGroups=exportGroups;
});

Clazz.newMeth(C$, 'isExportJalviewSettings$', function () {
return this.exportJalviewSettings;
});

Clazz.newMeth(C$, 'setExportJalviewSettings$Z', function (exportJalviewSettings) {
this.exportJalviewSettings=exportJalviewSettings;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
