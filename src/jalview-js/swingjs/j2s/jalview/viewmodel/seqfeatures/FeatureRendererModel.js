(function(){var P$=Clazz.newPackage("jalview.viewmodel.seqfeatures"),p$1={},I$=[[0,'java.util.concurrent.ConcurrentHashMap','java.util.HashMap','java.beans.PropertyChangeSupport','java.util.Hashtable','Boolean','jalview.viewmodel.seqfeatures.FeatureRendererSettings','jalview.viewmodel.seqfeatures.FeaturesDisplayed','java.util.Arrays','java.util.ArrayList','java.util.HashSet','jalview.util.QuickSort','jalview.util.ColorUtils','jalview.schemes.FeatureColour','jalview.datamodel.features.SequenceFeatures']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FeatureRendererModel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'jalview.api.FeatureRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.transparency=0;
this.featureColours=null;
this.featureGroups=null;
this.featureFilters=null;
this.renderOrder=null;
this.featureOrder=null;
this.changeSupport=null;
this.av=null;
this.minmax=null;
this.newFeatureAdded=false;
this.findingFeatures=false;
this.firing=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.transparency=1.0;
this.featureColours=Clazz.new_($I$(1));
this.featureGroups=Clazz.new_($I$(1));
this.featureFilters=Clazz.new_($I$(2));
this.featureOrder=null;
this.changeSupport=Clazz.new_($I$(3).c$$O,[this]);
this.minmax=Clazz.new_($I$(4));
this.newFeatureAdded=false;
this.findingFeatures=false;
this.firing=$I$(5).FALSE;
}, 1);

Clazz.newMeth(C$, 'getViewport$', function () {
return this.av;
});

Clazz.newMeth(C$, 'getSettings$', function () {
return Clazz.new_($I$(6).c$$jalview_viewmodel_seqfeatures_FeatureRendererModel,[this]);
});

Clazz.newMeth(C$, 'transferSettings$jalview_viewmodel_seqfeatures_FeatureRendererSettings', function (fr) {
this.renderOrder=fr.renderOrder;
this.featureGroups=fr.featureGroups;
this.featureColours=fr.featureColours;
this.transparency=fr.transparency;
this.featureOrder=fr.featureOrder;
});

Clazz.newMeth(C$, 'transferSettings$jalview_api_FeatureRenderer', function (_fr) {
var fr=_fr;
var frs=Clazz.new_($I$(6).c$$jalview_viewmodel_seqfeatures_FeatureRendererModel,[fr]);
this.renderOrder=frs.renderOrder;
this.featureGroups=frs.featureGroups;
this.featureColours=frs.featureColours;
this.featureFilters=frs.featureFilters;
this.transparency=frs.transparency;
this.featureOrder=frs.featureOrder;
if (this.av != null  && this.av !== fr.getViewport$()  ) {
if (_fr.getFeaturesDisplayed$() != null ) {
var fd=this.getFeaturesDisplayed$();
if (fd == null ) {
this.setFeaturesDisplayedFrom$jalview_api_FeaturesDisplayedI(_fr.getFeaturesDisplayed$());
} else {
{
fd.clear$();
for (var type, $type = _fr.getFeaturesDisplayed$().getVisibleFeatures$().iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
fd.setVisible$S(type);
}
}}}}});

Clazz.newMeth(C$, 'setFeaturesDisplayedFrom$jalview_api_FeaturesDisplayedI', function (featuresDisplayed) {
this.av.setFeaturesDisplayed$jalview_api_FeaturesDisplayedI(Clazz.new_($I$(7).c$$jalview_api_FeaturesDisplayedI,[featuresDisplayed]));
});

Clazz.newMeth(C$, 'setVisible$S', function (featureType) {
var fdi=this.av.getFeaturesDisplayed$();
if (fdi == null ) {
this.av.setFeaturesDisplayed$jalview_api_FeaturesDisplayedI(fdi=Clazz.new_($I$(7)));
}if (!fdi.isRegistered$S(featureType)) {
p$1.pushFeatureType$java_util_List.apply(this, [$I$(8).asList$TTA(Clazz.array(String, -1, [featureType]))]);
}fdi.setVisible$S(featureType);
});

Clazz.newMeth(C$, 'setAllVisible$java_util_List', function (featureTypes) {
var fdi=this.av.getFeaturesDisplayed$();
if (fdi == null ) {
this.av.setFeaturesDisplayed$jalview_api_FeaturesDisplayedI(fdi=Clazz.new_($I$(7)));
}var nft=Clazz.new_($I$(9));
for (var featureType, $featureType = featureTypes.iterator$(); $featureType.hasNext$()&&((featureType=($featureType.next$())),1);) {
if (!fdi.isRegistered$S(featureType)) {
nft.add$TE(featureType);
}}
if (nft.size$() > 0) {
p$1.pushFeatureType$java_util_List.apply(this, [nft]);
}fdi.setAllVisible$java_util_Collection(featureTypes);
});

Clazz.newMeth(C$, 'pushFeatureType$java_util_List', function (types) {
var ts=types.size$();
var neworder=Clazz.array(String, [(this.renderOrder == null  ? 0 : this.renderOrder.length) + ts]);
types.toArray$TTA(neworder);
if (this.renderOrder != null ) {
System.arraycopy$O$I$O$I$I(neworder, 0, neworder, this.renderOrder.length, ts);
System.arraycopy$O$I$O$I$I(this.renderOrder, 0, neworder, 0, this.renderOrder.length);
}this.renderOrder=neworder;
}, p$1);

Clazz.newMeth(C$, 'getMinMax$', function () {
return this.minmax;
});

Clazz.newMeth(C$, 'normaliseScore$jalview_datamodel_SequenceFeature', function (sequenceFeature) {
var mm=this.minmax.get$O(sequenceFeature.type)[0];
var r=Clazz.array(Byte.TYPE, -1, [0, -1]);
if (mm != null ) {
if (r[0] != 0 || mm[0] < 0.0  ) {
r[0]=(1|0);
r[1]=(((128 + 127.0 * (sequenceFeature.score / mm[1]))|0)|0);
} else {
r[1]=(((255 * (sequenceFeature.score / mm[1]))|0)|0);
}}return r;
});

Clazz.newMeth(C$, 'updateFeatures$', function () {
if (this.av.getFeaturesDisplayed$() == null  || this.renderOrder == null   || this.newFeatureAdded ) {
this.findAllFeatures$();
if (this.av.getFeaturesDisplayed$().getVisibleFeatureCount$() < 1) {
return false;
}}return true;
});

Clazz.newMeth(C$, 'findAllFeatures$', function () {
{
if (this.firing.equals$O($I$(5).FALSE)) {
this.firing=$I$(5).TRUE;
this.findAllFeatures$Z(true);
this.changeSupport.firePropertyChange$S$O$O("changeSupport", null, null);
this.firing=$I$(5).FALSE;
}}});

Clazz.newMeth(C$, 'findFeaturesAtColumn$jalview_datamodel_SequenceI$I', function (sequence, column) {
var result=Clazz.new_($I$(9));
if (!this.av.areFeaturesDisplayed$() || this.getFeaturesDisplayed$() == null  ) {
return result;
}var visibleFeatures=this.getFeaturesDisplayed$().getVisibleFeatures$();
var visibleTypes=visibleFeatures.toArray$TTA(Clazz.array(String, [visibleFeatures.size$()]));
var features=sequence.findFeatures$I$I$SA(column, column, visibleTypes);
for (var sf, $sf = features.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
if (!this.featureGroupNotShown$jalview_datamodel_SequenceFeature(sf) && this.getColour$jalview_datamodel_SequenceFeature(sf) != null  ) {
result.add$TE(sf);
}}
return result;
});

Clazz.newMeth(C$, 'findAllFeatures$Z', function (newMadeVisible) {
this.newFeatureAdded=false;
if (this.findingFeatures) {
this.newFeatureAdded=true;
return;
}this.findingFeatures=true;
if (this.av.getFeaturesDisplayed$() == null ) {
this.av.setFeaturesDisplayed$jalview_api_FeaturesDisplayedI(Clazz.new_($I$(7)));
}var featuresDisplayed=this.av.getFeaturesDisplayed$();
var oldfeatures=Clazz.new_($I$(10));
if (this.renderOrder != null ) {
for (var i=0; i < this.renderOrder.length; i++) {
if (this.renderOrder[i] != null ) {
oldfeatures.add$TE(this.renderOrder[i]);
}}
}var alignment=this.av.getAlignment$();
var allfeatures=Clazz.new_($I$(9));
for (var i=0; i < alignment.getHeight$(); i++) {
var asq=alignment.getSequenceAt$I(i);
for (var group, $group = asq.getFeatures$().getFeatureGroups$Z$SA(true, []).iterator$(); $group.hasNext$()&&((group=($group.next$())),1);) {
var groupDisplayed=true;
if (group != null ) {
if (this.featureGroups.containsKey$O(group)) {
groupDisplayed=(this.featureGroups.get$O(group)).booleanValue$();
} else {
groupDisplayed=newMadeVisible;
this.featureGroups.put$TK$TV(group, new Boolean(groupDisplayed));
}}if (groupDisplayed) {
var types=asq.getFeatures$().getFeatureTypesForGroups$Z$SA(true, [group]);
for (var type, $type = types.iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
if (!allfeatures.contains$O(type)) {
allfeatures.add$TE(type);
}this.updateMinMax$jalview_datamodel_SequenceI$S$Z(asq, type, true);
}
}}
}
if (newMadeVisible) {
for (var type, $type = allfeatures.iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
if (!oldfeatures.contains$O(type)) {
featuresDisplayed.setVisible$S(type);
this.setOrder$S$F(type, 0);
}}
}p$1.updateRenderOrder$java_util_List.apply(this, [allfeatures]);
this.findingFeatures=false;
});

Clazz.newMeth(C$, 'updateMinMax$jalview_datamodel_SequenceI$S$Z', function (seq, featureType, positional) {
var min=seq.getFeatures$().getMinimumScore$S$Z(featureType, positional);
if (Float.isNaN$F(min)) {
return;
}var max=seq.getFeatures$().getMaximumScore$S$Z(featureType, positional);
if (this.minmax == null ) {
this.minmax=Clazz.new_($I$(4));
}{
var mm=this.minmax.get$O(featureType);
var index=positional ? 0 : 1;
if (mm == null ) {
mm=Clazz.array(Float.TYPE, -2, [null, null]);
this.minmax.put$TK$TV(featureType, mm);
}if (mm[index] == null ) {
mm[index]=Clazz.array(Float.TYPE, -1, [min, max]);
} else {
mm[index][0]=Math.min(mm[index][0], min);
mm[index][1]=Math.max(mm[index][1], max);
}}});

Clazz.newMeth(C$, 'updateRenderOrder$java_util_List', function (allFeatures) {
var allfeatures=Clazz.new_($I$(9).c$$java_util_Collection,[allFeatures]);
var oldRender=this.renderOrder;
this.renderOrder=Clazz.array(String, [allfeatures.size$()]);
var initOrders=(this.featureOrder == null );
var opos=0;
if (oldRender != null  && oldRender.length > 0 ) {
for (var j=0; j < oldRender.length; j++) {
if (oldRender[j] != null ) {
if (initOrders) {
this.setOrder$S$F(oldRender[j], (1 - (1 + j) / oldRender.length));
}if (allfeatures.contains$O(oldRender[j])) {
this.renderOrder[opos++]=oldRender[j];
allfeatures.remove$O(oldRender[j]);
if (this.minmax != null ) {
var mmrange=this.minmax.get$O(oldRender[j]);
if (mmrange != null ) {
var fc=this.featureColours.get$O(oldRender[j]);
if (fc != null  && !fc.isSimpleColour$()  && fc.isAutoScaled$()  && !fc.isColourByAttribute$() ) {
fc.updateBounds$F$F(mmrange[0][0], mmrange[0][1]);
}}}}}}
}if (allfeatures.size$() == 0) {
return;
}var i=allfeatures.size$() - 1;
var iSize=i;
var sort=false;
var newf=Clazz.array(String, [allfeatures.size$()]);
var sortOrder=Clazz.array(Float.TYPE, [allfeatures.size$()]);
for (var newfeat, $newfeat = allfeatures.iterator$(); $newfeat.hasNext$()&&((newfeat=($newfeat.next$())),1);) {
newf[i]=newfeat;
if (this.minmax != null ) {
var mmrange=this.minmax.get$O(newf[i]);
if (mmrange != null ) {
var fc=this.featureColours.get$O(newf[i]);
if (fc != null  && !fc.isSimpleColour$()  && fc.isAutoScaled$()  && !fc.isColourByAttribute$() ) {
fc.updateBounds$F$F(mmrange[0][0], mmrange[0][1]);
}}}if (initOrders || !this.featureOrder.containsKey$O(newf[i]) ) {
var denom=initOrders ? allfeatures.size$() : this.featureOrder.size$();
this.setOrder$S$F(newf[i], i / denom);
}sortOrder[i]=2 - this.featureOrder.get$O(newf[i]).floatValue$();
if (i < iSize) {
sort=sort || sortOrder[i] > sortOrder[i + 1]  ;
}i--;
}
if (iSize > 1 && sort ) {
$I$(11).sort$FA$OA(sortOrder, newf);
}sortOrder=null;
System.arraycopy$O$I$O$I$I(newf, 0, this.renderOrder, opos, newf.length);
}, p$1);

Clazz.newMeth(C$, 'getFeatureStyle$S', function (featureType) {
var fc=this.featureColours.get$O(featureType);
if (fc == null ) {
var col=$I$(12).createColourFromName$S(featureType);
fc=Clazz.new_($I$(13).c$$java_awt_Color,[col]);
this.featureColours.put$TK$TV(featureType, fc);
}return fc;
});

Clazz.newMeth(C$, 'getColour$jalview_datamodel_SequenceFeature', function (feature) {
var fc=this.getFeatureStyle$S(feature.getType$());
return this.getColor$jalview_datamodel_SequenceFeature$jalview_api_FeatureColourI(feature, fc);
});

Clazz.newMeth(C$, 'showFeatureOfType$S', function (type) {
return type == null  ? false : (this.av.getFeaturesDisplayed$() == null  ? true : this.av.getFeaturesDisplayed$().isVisible$S(type));
});

Clazz.newMeth(C$, 'setColour$S$jalview_api_FeatureColourI', function (featureType, col) {
this.featureColours.put$TK$TV(featureType, col);
});

Clazz.newMeth(C$, 'setTransparency$F', function (value) {
this.transparency=value;
});

Clazz.newMeth(C$, 'getTransparency$', function () {
return this.transparency;
});

Clazz.newMeth(C$, 'setOrder$S$F', function (type, position) {
if (this.featureOrder == null ) {
this.featureOrder=Clazz.new_($I$(4));
}this.featureOrder.put$TK$TV(type,  new Float(position));
return position;
});

Clazz.newMeth(C$, 'getOrder$S', function (type) {
if (this.featureOrder != null ) {
if (this.featureOrder.containsKey$O(type)) {
return this.featureOrder.get$O(type).floatValue$();
}}return -1;
});

Clazz.newMeth(C$, 'getFeatureColours$', function () {
return this.featureColours;
});

Clazz.newMeth(C$, 'setFeaturePriority$jalview_viewmodel_seqfeatures_FeatureRendererModel_FeatureSettingsBeanA', function (data) {
return this.setFeaturePriority$jalview_viewmodel_seqfeatures_FeatureRendererModel_FeatureSettingsBeanA$Z(data, true);
});

Clazz.newMeth(C$, 'setFeaturePriority$jalview_viewmodel_seqfeatures_FeatureRendererModel_FeatureSettingsBeanA$Z', function (data, visibleNew) {
var visibleFeatures=this.getDisplayedFeatureTypes$();
var visibleColours=Clazz.new_($I$(2).c$$java_util_Map,[this.getFeatureColours$()]);
var av_featuresdisplayed=null;
if (visibleNew) {
if ((av_featuresdisplayed=this.av.getFeaturesDisplayed$()) != null ) {
this.av.getFeaturesDisplayed$().clear$();
} else {
this.av.setFeaturesDisplayed$jalview_api_FeaturesDisplayedI(av_featuresdisplayed=Clazz.new_($I$(7)));
}} else {
av_featuresdisplayed=this.av.getFeaturesDisplayed$();
}if (data == null ) {
return false;
}this.renderOrder=Clazz.array(String, [data.length]);
if (data.length > 0) {
for (var i=0; i < data.length; i++) {
var type=data[i].featureType;
this.setColour$S$jalview_api_FeatureColourI(type, data[i].featureColour);
if ((data[i].show).booleanValue$()) {
av_featuresdisplayed.setVisible$S(type);
}this.renderOrder[data.length - i - 1 ]=type;
}
}var reorderedVisibleFeatures=this.getDisplayedFeatureTypes$();
if (!visibleFeatures.equals$O(reorderedVisibleFeatures)) {
return true;
}for (var feature, $feature = visibleFeatures.iterator$(); $feature.hasNext$()&&((feature=($feature.next$())),1);) {
if (visibleColours.get$O(feature) !== this.getFeatureStyle$S(feature) ) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
this.changeSupport.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
this.changeSupport.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'getAllFeatureColours$', function () {
return this.featureColours.keySet$();
});

Clazz.newMeth(C$, 'clearRenderOrder$', function () {
this.renderOrder=null;
});

Clazz.newMeth(C$, 'hasRenderOrder$', function () {
return this.renderOrder != null ;
});

Clazz.newMeth(C$, 'getRenderOrder$', function () {
if (this.renderOrder == null ) {
return $I$(8).asList$TTA(Clazz.array(String, -1, []));
}return $I$(8).asList$TTA(this.renderOrder);
});

Clazz.newMeth(C$, 'getFeatureGroupsSize$', function () {
return this.featureGroups != null  ? 0 : this.featureGroups.size$();
});

Clazz.newMeth(C$, 'getFeatureGroups$', function () {
return (this.featureGroups == null ) ? $I$(8).asList$TTA(Clazz.array(String, [0])) : $I$(8).asList$TTA(this.featureGroups.keySet$().toArray$TTA(Clazz.array(String, [0])));
});

Clazz.newMeth(C$, 'checkGroupVisibility$S$Z', function (group, newGroupsVisible) {
if (this.featureGroups == null ) {
}if (this.featureGroups.containsKey$O(group)) {
return this.featureGroups.get$O(group).booleanValue$();
}if (newGroupsVisible) {
this.featureGroups.put$TK$TV(group,  Boolean.from(true));
return true;
}return false;
});

Clazz.newMeth(C$, 'getGroups$Z', function (visible) {
if (this.featureGroups != null ) {
var gp=Clazz.new_($I$(9));
for (var grp, $grp = this.featureGroups.keySet$().iterator$(); $grp.hasNext$()&&((grp=($grp.next$())),1);) {
var state=this.featureGroups.get$O(grp);
if (state.booleanValue$() == visible ) {
gp.add$TE(grp);
}}
return gp;
}return null;
});

Clazz.newMeth(C$, 'setGroupVisibility$S$Z', function (group, visible) {
this.featureGroups.put$TK$TV(group,  Boolean.from(visible));
});

Clazz.newMeth(C$, 'setGroupVisibility$java_util_List$Z', function (toset, visible) {
if (toset != null  && toset.size$() > 0  && this.featureGroups != null  ) {
var rdrw=false;
for (var gst, $gst = toset.iterator$(); $gst.hasNext$()&&((gst=($gst.next$())),1);) {
var st=this.featureGroups.get$O(gst);
this.featureGroups.put$TK$TV(gst,  Boolean.from(visible));
if (st != null ) {
rdrw=rdrw || (visible != st.booleanValue$() ) ;
}}
if (rdrw) {
}}});

Clazz.newMeth(C$, 'getDisplayedFeatureCols$', function () {
var fcols=Clazz.new_($I$(4));
if (this.getViewport$().getFeaturesDisplayed$() == null ) {
return fcols;
}var features=this.getViewport$().getFeaturesDisplayed$().getVisibleFeatures$();
for (var feature, $feature = features.iterator$(); $feature.hasNext$()&&((feature=($feature.next$())),1);) {
fcols.put$TK$TV(feature, this.getFeatureStyle$S(feature));
}
return fcols;
});

Clazz.newMeth(C$, 'getFeaturesDisplayed$', function () {
return this.av.getFeaturesDisplayed$();
});

Clazz.newMeth(C$, 'getDisplayedFeatureTypes$', function () {
var typ=this.getRenderOrder$();
var displayed=Clazz.new_($I$(9));
var feature_disp=this.av.getFeaturesDisplayed$();
if (feature_disp != null ) {
{
for (var type, $type = typ.iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
if (feature_disp.isVisible$S(type)) {
displayed.add$TE(type);
}}
}}return displayed;
});

Clazz.newMeth(C$, 'getDisplayedFeatureGroups$', function () {
var _gps=Clazz.new_($I$(9));
for (var gp, $gp = this.getFeatureGroups$().iterator$(); $gp.hasNext$()&&((gp=($gp.next$())),1);) {
if (this.checkGroupVisibility$S$Z(gp, false)) {
_gps.add$TE(gp);
}}
return _gps;
});

Clazz.newMeth(C$, 'featureGroupNotShown$jalview_datamodel_SequenceFeature', function (sequenceFeature) {
return this.featureGroups != null  && sequenceFeature.featureGroup != null   && sequenceFeature.featureGroup.length$() != 0  && this.featureGroups.containsKey$O(sequenceFeature.featureGroup)  && !this.featureGroups.get$O(sequenceFeature.featureGroup).booleanValue$() ;
});

Clazz.newMeth(C$, 'findFeaturesAtResidue$jalview_datamodel_SequenceI$I', function (sequence, resNo) {
var result=Clazz.new_($I$(9));
if (!this.av.areFeaturesDisplayed$() || this.getFeaturesDisplayed$() == null  ) {
return result;
}var visibleFeatures=this.getFeaturesDisplayed$().getVisibleFeatures$();
var visibleTypes=visibleFeatures.toArray$TTA(Clazz.array(String, [visibleFeatures.size$()]));
var features=sequence.getFeatures$().findFeatures$I$I$SA(resNo, resNo, visibleTypes);
for (var sf, $sf = features.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
if (!this.featureGroupNotShown$jalview_datamodel_SequenceFeature(sf) && this.getColour$jalview_datamodel_SequenceFeature(sf) != null  ) {
result.add$TE(sf);
}}
return result;
});

Clazz.newMeth(C$, 'filterFeaturesForDisplay$java_util_List', function (features) {
if (features.isEmpty$() || this.transparency != 1.0   || !this.featureFilters.isEmpty$() ) {
return;
}$I$(14).sortFeatures$java_util_List$Z(features, true);
var lastFeature=null;
var it=features.iterator$();
while (it.hasNext$()){
var sf=it.next$();
if (this.featureGroupNotShown$jalview_datamodel_SequenceFeature(sf)) {
it.remove$();
continue;
}if (lastFeature != null  && sf.getBegin$() == lastFeature.getBegin$()  && sf.getEnd$() == lastFeature.getEnd$()  && sf.isContactFeature$() == lastFeature.isContactFeature$()   && sf.getType$().equals$O(lastFeature.getType$()) ) {
it.remove$();
}lastFeature=sf;
}
});

Clazz.newMeth(C$, 'getFeatureFilters$', function () {
return this.featureFilters;
});

Clazz.newMeth(C$, 'setFeatureFilters$java_util_Map', function (filters) {
this.featureFilters=filters;
});

Clazz.newMeth(C$, 'getFeatureFilter$S', function (featureType) {
return this.featureFilters.get$O(featureType);
});

Clazz.newMeth(C$, 'setFeatureFilter$S$jalview_datamodel_features_FeatureMatcherSetI', function (featureType, filter) {
if (filter == null  || filter.isEmpty$() ) {
this.featureFilters.remove$O(featureType);
} else {
this.featureFilters.put$TK$TV(featureType, filter);
}});

Clazz.newMeth(C$, 'getColor$jalview_datamodel_SequenceFeature$jalview_api_FeatureColourI', function (sf, fc) {
if (this.featureGroupNotShown$jalview_datamodel_SequenceFeature(sf)) {
return null;
}if (!this.featureMatchesFilters$jalview_datamodel_SequenceFeature(sf)) {
return null;
}return fc.getColor$jalview_datamodel_SequenceFeature(sf);
});

Clazz.newMeth(C$, 'featureMatchesFilters$jalview_datamodel_SequenceFeature', function (sf) {
var filter=this.featureFilters.get$O(sf.getType$());
return filter == null  ? true : filter.matches$jalview_datamodel_SequenceFeature(sf);
});

Clazz.newMeth(C$, 'isGroupVisible$S', function (group) {
if (!this.featureGroups.containsKey$O(group)) {
return true;
}return (this.featureGroups.get$O(group)).booleanValue$();
});

Clazz.newMeth(C$, 'orderFeatures$java_util_Comparator', function (order) {
$I$(8).sort$TTA$java_util_Comparator(this.renderOrder, order);
});

Clazz.newMeth(C$, 'isVisible$jalview_datamodel_SequenceFeature', function (feature) {
if (feature == null ) {
return false;
}if (this.getFeaturesDisplayed$() == null  || !this.getFeaturesDisplayed$().isVisible$S(feature.getType$()) ) {
return false;
}if (this.featureGroupNotShown$jalview_datamodel_SequenceFeature(feature)) {
return false;
}var fc=this.featureColours.get$O(feature.getType$());
if (fc != null  && fc.isOutwithThreshold$jalview_datamodel_SequenceFeature(feature) ) {
return false;
}if (!this.featureMatchesFilters$jalview_datamodel_SequenceFeature(feature)) {
return false;
}return true;
});
;
(function(){var C$=Clazz.newClass(P$.FeatureRendererModel, "FeatureSettingsBean", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.featureType=null;
this.featureColour=null;
this.filter=null;
this.show=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_api_FeatureColourI$jalview_datamodel_features_FeatureMatcherSetI$Boolean', function (type, colour, theFilter, isShown) {
C$.$init$.apply(this);
this.featureType=type;
this.featureColour=colour;
this.filter=theFilter;
this.show=isShown;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
