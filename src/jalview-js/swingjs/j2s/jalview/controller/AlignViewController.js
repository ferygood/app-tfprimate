(function(){var P$=Clazz.newPackage("jalview.controller"),I$=[[0,'jalview.analysis.Grouping','jalview.datamodel.SequenceI','java.awt.Color','java.util.BitSet','jalview.datamodel.ColumnSelection','jalview.util.MessageManager','jalview.analysis.AlignmentSorter','jalview.commands.OrderCommand','jalview.io.FeaturesFile']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AlignViewController", null, null, 'jalview.api.AlignViewControllerI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.viewport=null;
this.alignPanel=null;
this.avcg=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.viewport=null;
this.alignPanel=null;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_api_AlignViewControllerGuiI$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel', function (alignFrame, vp, ap) {
C$.$init$.apply(this);
this.avcg=alignFrame;
this.viewport=vp;
this.alignPanel=ap;
}, 1);

Clazz.newMeth(C$, 'setViewportAndAlignmentPanel$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel', function (vp, ap) {
this.alignPanel=ap;
this.viewport=vp;
});

Clazz.newMeth(C$, 'makeGroupsFromSelection$', function () {
var sg=this.viewport.getSelectionGroup$();
var cs=this.viewport.getColumnSelection$();
var gps=null;
if (sg != null  && (cs == null  || cs.isEmpty$() ) ) {
gps=$I$(1).makeGroupsFrom$jalview_datamodel_SequenceIA$SA$java_util_List(this.viewport.getSequenceSelection$(), this.viewport.getAlignmentView$Z(true).getSequenceStrings$C(this.viewport.getGapCharacter$()), this.viewport.getAlignment$().getGroups$());
} else {
if (cs != null ) {
gps=$I$(1).makeGroupsFromCols$jalview_datamodel_SequenceIA$jalview_datamodel_ColumnSelection$java_util_List((sg == null ) ? this.viewport.getAlignment$().getSequencesArray$() : sg.getSequences$().toArray$TTA(Clazz.array($I$(2), [0])), cs, this.viewport.getAlignment$().getGroups$());
}}if (gps != null ) {
this.viewport.getAlignment$().deleteAllGroups$();
this.viewport.clearSequenceColours$();
this.viewport.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
var colours=this.viewport.getGlobalColourScheme$();
for (var g=0; g < gps.length; g++) {
gps[g].setshowSequenceLogo$Z(this.viewport.isShowSequenceLogo$());
this.viewport.getAlignment$().addGroup$jalview_datamodel_SequenceGroup(gps[g]);
if (colours != null ) {
gps[g].setColourScheme$jalview_schemes_ColourSchemeI(colours.getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI(this.viewport, gps[g]));
}var col=Clazz.new_($I$(3).c$$I$I$I,[((Math.random() * 255)|0), ((Math.random() * 255)|0), ((Math.random() * 255)|0)]);
gps[g].idColour=col;
this.viewport.setUpdateStructures$Z(true);
this.viewport.addSequenceGroup$jalview_datamodel_SequenceGroup(gps[g]);
}
return true;
}return false;
});

Clazz.newMeth(C$, 'createGroup$', function () {
var sg=this.viewport.getSelectionGroup$();
if (sg != null ) {
this.viewport.getAlignment$().addGroup$jalview_datamodel_SequenceGroup(sg);
return true;
}return false;
});

Clazz.newMeth(C$, 'unGroup$', function () {
var sg=this.viewport.getSelectionGroup$();
if (sg != null ) {
this.viewport.getAlignment$().deleteGroup$jalview_datamodel_SequenceGroup(sg);
return true;
}return false;
});

Clazz.newMeth(C$, 'deleteGroups$', function () {
if (this.viewport.getAlignment$().getGroups$() != null  && this.viewport.getAlignment$().getGroups$().size$() > 0 ) {
this.viewport.getAlignment$().deleteAllGroups$();
this.viewport.clearSequenceColours$();
this.viewport.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
return true;
}return false;
});

Clazz.newMeth(C$, 'markColumnsContainingFeatures$Z$Z$Z$S', function (invert, extendCurrent, toggle, featureType) {
var bs=Clazz.new_($I$(4));
var sqcol=(this.viewport.getSelectionGroup$() == null  || extendCurrent ) ? this.viewport.getAlignment$() : this.viewport.getSelectionGroup$();
var nseq=this.findColumnsWithFeature$S$jalview_datamodel_SequenceCollectionI$java_util_BitSet(featureType, sqcol, bs);
var cs=this.viewport.getColumnSelection$();
if (cs == null ) {
cs=Clazz.new_($I$(5));
}if (bs.cardinality$() > 0 || invert ) {
var changed=cs.markColumns$java_util_BitSet$I$I$Z$Z$Z(bs, sqcol.getStartRes$(), sqcol.getEndRes$(), invert, extendCurrent, toggle);
if (changed) {
this.viewport.setColumnSelection$jalview_datamodel_ColumnSelection(cs);
this.alignPanel.paintAlignment$Z$Z(false, false);
var columnCount=invert ? (sqcol.getEndRes$() - sqcol.getStartRes$() + 1) - bs.cardinality$() : bs.cardinality$();
this.avcg.setStatus$S($I$(6).formatMessage$S$SA("label.view_controller_toggled_marked", Clazz.array(String, -1, [toggle ? $I$(6).getString$S("label.toggled") : $I$(6).getString$S("label.marked"), String.valueOf$I(columnCount), invert ? $I$(6).getString$S("label.not_containing") : $I$(6).getString$S("label.containing"), featureType, Integer.valueOf$I(nseq).toString()])));
return true;
}} else {
this.avcg.setStatus$S($I$(6).formatMessage$S$SA("label.no_feature_of_type_found", Clazz.array(String, -1, [featureType])));
if (!extendCurrent) {
cs.clear$();
this.alignPanel.paintAlignment$Z$Z(false, false);
}}return false;
});

Clazz.newMeth(C$, 'findColumnsWithFeature$S$jalview_datamodel_SequenceCollectionI$java_util_BitSet', function (featureType, sqcol, bs) {
var fr=this.alignPanel == null  ? null : this.alignPanel.getFeatureRenderer$();
var startColumn=sqcol.getStartRes$() + 1;
var endColumn=sqcol.getEndRes$() + 1;
var seqs=sqcol.getSequences$();
var nseq=0;
for (var sq, $sq = seqs.iterator$(); $sq.hasNext$()&&((sq=($sq.next$())),1);) {
if (sq != null ) {
var sfs=sq.findFeatures$I$I$SA(startColumn, endColumn, [featureType]);
var found=false;
for (var sf, $sf = sfs.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
if (fr.getColour$jalview_datamodel_SequenceFeature(sf) == null ) {
continue;
}if (!found) {
nseq++;
}found=true;
var sfStartCol=sq.findIndex$I(sf.getBegin$());
var sfEndCol=sq.findIndex$I(sf.getEnd$());
if (sf.isContactFeature$()) {
if (sfStartCol >= startColumn && sfStartCol <= endColumn ) {
bs.set$I(sfStartCol - 1);
}if (sfEndCol >= startColumn && sfEndCol <= endColumn ) {
bs.set$I(sfEndCol - 1);
}continue;
}if (sfStartCol < startColumn) {
sfStartCol=startColumn;
}if (sfEndCol > endColumn) {
sfEndCol=endColumn;
}for (; sfStartCol <= sfEndCol; sfStartCol++) {
bs.set$I(sfStartCol - 1);
}
}
}}
return nseq;
});

Clazz.newMeth(C$, 'sortAlignmentByFeatureDensity$java_util_List', function (typ) {
this.sortBy$java_util_List$S$S(typ, "Sort by Density", $I$(7).FEATURE_DENSITY);
});

Clazz.newMeth(C$, 'sortBy$java_util_List$S$S', function (typ, methodText, method) {
var fr=this.alignPanel.getFeatureRenderer$();
if (typ == null  && fr != null  ) {
typ=fr.getDisplayedFeatureTypes$();
}var gps=null;
if (fr != null ) {
gps=fr.getDisplayedFeatureGroups$();
}var al=this.viewport.getAlignment$();
var start;
var stop;
var sg=this.viewport.getSelectionGroup$();
if (sg != null ) {
start=sg.getStartRes$();
stop=sg.getEndRes$();
} else {
start=0;
stop=al.getWidth$();
}var oldOrder=al.getSequencesArray$();
$I$(7).sortByFeature$java_util_List$java_util_List$I$I$jalview_datamodel_AlignmentI$S(typ, gps, start, stop, al, method);
this.avcg.addHistoryItem$jalview_commands_CommandI(Clazz.new_($I$(8).c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI,[methodText, oldOrder, this.viewport.getAlignment$()]));
this.alignPanel.paintAlignment$Z$Z(true, false);
});

Clazz.newMeth(C$, 'sortAlignmentByFeatureScore$java_util_List', function (typ) {
this.sortBy$java_util_List$S$S(typ, "Sort by Feature Score", $I$(7).FEATURE_SCORE);
});

Clazz.newMeth(C$, 'parseFeaturesFile$O$jalview_io_DataSourceType$Z', function (file, protocol, relaxedIdMatching) {
var featuresAdded=false;
var fr=this.alignPanel.getFeatureRenderer$();
try {
featuresAdded=Clazz.new_($I$(9).c$$Z$O$jalview_io_DataSourceType,[false, file, protocol]).parse$jalview_datamodel_AlignmentI$java_util_Map$java_util_Map$Z$Z(this.viewport.getAlignment$().getDataset$(), fr.getFeatureColours$(), fr.getFeatureFilters$(), false, relaxedIdMatching);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
if (featuresAdded) {
this.avcg.refreshFeatureUI$Z(true);
if (fr != null ) {
fr.findAllFeatures$Z(true);
}if (this.avcg.getFeatureSettingsUI$() != null ) {
this.avcg.getFeatureSettingsUI$().discoverAllFeatureData$();
}this.alignPanel.paintAlignment$Z$Z(true, true);
}return featuresAdded;
});

Clazz.newMeth(C$, 'markHighlightedColumns$Z$Z$Z', function (invert, extendCurrent, toggle) {
if (!this.viewport.hasSearchResults$()) {
return false;
}var bs=Clazz.new_($I$(4));
var sqcol=(this.viewport.getSelectionGroup$() == null  || extendCurrent ) ? this.viewport.getAlignment$() : this.viewport.getSelectionGroup$();
var nseq=this.viewport.getSearchResults$().markColumns$jalview_datamodel_SequenceCollectionI$java_util_BitSet(sqcol, bs);
var cs=this.viewport.getColumnSelection$();
if (cs == null ) {
cs=Clazz.new_($I$(5));
}if (bs.cardinality$() > 0 || invert ) {
var changed=cs.markColumns$java_util_BitSet$I$I$Z$Z$Z(bs, sqcol.getStartRes$(), sqcol.getEndRes$(), invert, extendCurrent, toggle);
if (changed) {
this.viewport.setColumnSelection$jalview_datamodel_ColumnSelection(cs);
this.alignPanel.paintAlignment$Z$Z(false, false);
var columnCount=invert ? (sqcol.getEndRes$() - sqcol.getStartRes$() + 1) - bs.cardinality$() : bs.cardinality$();
this.avcg.setStatus$S($I$(6).formatMessage$S$SA("label.view_controller_toggled_marked", Clazz.array(String, -1, [toggle ? $I$(6).getString$S("label.toggled") : $I$(6).getString$S("label.marked"), String.valueOf$I(columnCount), invert ? $I$(6).getString$S("label.not_containing") : $I$(6).getString$S("label.containing"), "Highlight", Integer.valueOf$I(nseq).toString()])));
return true;
}} else {
this.avcg.setStatus$S($I$(6).formatMessage$S$OA("No highlighted regions marked", []));
if (!extendCurrent) {
cs.clear$();
this.alignPanel.paintAlignment$Z$Z(false, false);
}}return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
