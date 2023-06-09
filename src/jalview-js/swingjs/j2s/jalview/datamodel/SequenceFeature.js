(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'java.util.HashMap','java.util.Vector','jalview.datamodel.features.FeatureSources','jalview.datamodel.features.FeatureAttributes','StringBuilder','jalview.util.StringUtils','java.util.TreeMap','jalview.datamodel.features.FeatureAttributeType']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SequenceFeature", null, null, 'jalview.datamodel.features.FeatureLocationI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.type=null;
this.begin=0;
this.end=0;
this.featureGroup=null;
this.score=0;
this.contactFeature=false;
this.description=null;
this.otherDetails=null;
this.links=null;
this.source=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceFeature', function (cpy) {
C$.c$$jalview_datamodel_SequenceFeature$I$I$S$F.apply(this, [cpy, cpy.getBegin$(), cpy.getEnd$(), cpy.getFeatureGroup$(), cpy.getScore$()]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$I$I$S', function (theType, theDesc, theBegin, theEnd, group) {
C$.c$$S$S$I$I$F$S.apply(this, [theType, theDesc, theBegin, theEnd, 0.0, group]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$I$I$F$S', function (theType, theDesc, theBegin, theEnd, theScore, group) {
C$.$init$.apply(this);
this.type=theType;
this.description=theDesc;
this.begin=theBegin;
this.end=theEnd;
this.featureGroup=group;
this.score=theScore;
this.contactFeature="disulfide bond".equalsIgnoreCase$S(this.type) || "disulphide bond".equalsIgnoreCase$S(this.type) ;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceFeature$S$I$I$S$F', function (sf, newType, newBegin, newEnd, newGroup, newScore) {
C$.c$$S$S$I$I$F$S.apply(this, [newType, sf.getDescription$(), newBegin, newEnd, newScore, newGroup]);
this.source=sf.source;
if (sf.otherDetails != null ) {
this.otherDetails=Clazz.new_($I$(1));
for (var entry, $entry = sf.otherDetails.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
this.otherDetails.put$TK$TV(entry.getKey$(), entry.getValue$());
}
}if (sf.links != null  && sf.links.size$() > 0 ) {
this.links=Clazz.new_($I$(2));
for (var i=0, iSize=sf.links.size$(); i < iSize; i++) {
this.links.addElement$TE(sf.links.elementAt$I(i));
}
}}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceFeature$I$I$S$F', function (sf, newBegin, newEnd, newGroup, newScore) {
C$.c$$jalview_datamodel_SequenceFeature$S$I$I$S$F.apply(this, [sf, sf.getType$(), newBegin, newEnd, newGroup, newScore]);
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
return this.equals$O$Z(o, false);
});

Clazz.newMeth(C$, 'equals$O$Z', function (o, ignoreParent) {
if (o == null  || !(Clazz.instanceOf(o, "jalview.datamodel.SequenceFeature")) ) {
return false;
}var sf=o;
var sameScore=Float.isNaN$F(this.score) ? Float.isNaN$F(sf.score) : this.score == sf.score ;
if (this.begin != sf.begin || this.end != sf.end  || !sameScore ) {
return false;
}if (this.getStrand$() != sf.getStrand$()) {
return false;
}if (!(this.type + this.description + this.featureGroup + this.getPhase$() ).equals$O(sf.type + sf.description + sf.featureGroup + sf.getPhase$() )) {
return false;
}if (!C$.equalAttribute$O$O(this.getValue$S("ID"), sf.getValue$S("ID"))) {
return false;
}if (!C$.equalAttribute$O$O(this.getValue$S("Name"), sf.getValue$S("Name"))) {
return false;
}if (!ignoreParent) {
if (!C$.equalAttribute$O$O(this.getValue$S("Parent"), sf.getValue$S("Parent"))) {
return false;
}}return true;
});

Clazz.newMeth(C$, 'equalAttribute$O$O', function (att1, att2) {
if (att1 == null  && att2 == null  ) {
return true;
}if (att1 != null ) {
return att1.equals$O(att2);
}return att2.equals$O(att1);
}, 1);

Clazz.newMeth(C$, 'getBegin$', function () {
return this.begin;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S', function (desc) {
this.description=desc;
});

Clazz.newMeth(C$, 'getFeatureGroup$', function () {
return this.featureGroup;
});

Clazz.newMeth(C$, 'addLink$S', function (labelLink) {
if (this.links == null ) {
this.links=Clazz.new_($I$(2));
}if (!this.links.contains$O(labelLink)) {
this.links.insertElementAt$TE$I(labelLink, 0);
}});

Clazz.newMeth(C$, 'getScore$', function () {
return this.score;
});

Clazz.newMeth(C$, 'getValue$S', function (key) {
if (this.otherDetails == null ) {
return null;
} else {
return this.otherDetails.get$O(key);
}});

Clazz.newMeth(C$, 'getValueAsString$SA', function (key) {
if (this.otherDetails == null ) {
return null;
}var value=this.otherDetails.get$O(key[0]);
if (key.length > 1 && Clazz.instanceOf(value, "java.util.Map") ) {
value=(value).get$O(key[1]);
}return value == null  ? null : value.toString();
});

Clazz.newMeth(C$, 'getValue$S$O', function (key, defaultValue) {
var value=this.getValue$S(key);
return value == null  ? defaultValue : value;
});

Clazz.newMeth(C$, 'setValue$S$O', function (key, value) {
if (value != null ) {
if (this.otherDetails == null ) {
this.otherDetails=Clazz.new_($I$(1));
}this.otherDetails.put$TK$TV(key, value);
this.recordAttribute$S$O(key, value);
}});

Clazz.newMeth(C$, 'recordAttribute$S$O', function (key, value) {
var attDesc=null;
if (this.source != null ) {
attDesc=$I$(3).getInstance$().getSource$S(this.source).getAttributeName$S(key);
}$I$(4).getInstance$().addAttribute$S$S$O$SA(this.type, attDesc, value, [key]);
});

Clazz.newMeth(C$, 'setStatus$S', function (status) {
this.setValue$S$O("status", status);
});

Clazz.newMeth(C$, 'getStatus$', function () {
return this.getValue$S("status");
});

Clazz.newMeth(C$, 'setAttributes$S', function (attr) {
this.setValue$S$O("ATTRIBUTES", attr);
});

Clazz.newMeth(C$, 'getAttributes$', function () {
return this.getValue$S("ATTRIBUTES");
});

Clazz.newMeth(C$, 'getStrand$', function () {
var strand=0;
if (this.otherDetails != null ) {
var str=this.otherDetails.get$O("STRAND");
if ("-".equals$O(str)) {
strand=-1;
} else if ("+".equals$O(str)) {
strand=1;
}}return strand;
});

Clazz.newMeth(C$, 'setStrand$S', function (strand) {
this.setValue$S$O("STRAND", strand);
});

Clazz.newMeth(C$, 'setPhase$S', function (phase) {
this.setValue$S$O("!Phase", phase);
});

Clazz.newMeth(C$, 'getPhase$', function () {
return this.getValue$S("!Phase");
});

Clazz.newMeth(C$, 'setEnaLocation$S', function (loc) {
this.setValue$S$O("!Location", loc);
});

Clazz.newMeth(C$, 'getEnaLocation$', function () {
return this.getValue$S("!Location");
});

Clazz.newMeth(C$, 'toString', function () {
return String.format$S$OA("%d %d %s %s", [new Integer(this.getBegin$()), new Integer(this.getEnd$()), this.getType$(), this.getDescription$()]);
});

Clazz.newMeth(C$, 'hashCode$', function () {
var s=this.getType$() + this.getDescription$() + this.getFeatureGroup$() + this.getValue$S("ID") + this.getValue$S("Name") + this.getValue$S("Parent") + this.getPhase$() ;
return s.hashCode$() + this.getBegin$() + this.getEnd$() + (this.getScore$()|0) + this.getStrand$() ;
});

Clazz.newMeth(C$, 'isContactFeature$', function () {
return this.contactFeature;
});

Clazz.newMeth(C$, 'isNonPositional$', function () {
return this.begin == 0 && this.end == 0 ;
});

Clazz.newMeth(C$, 'getDetailsReport$', function () {
var metadata=$I$(3).getInstance$().getSource$S(this.source);
var sb=Clazz.new_($I$(5).c$$I,[128]);
sb.append$S("<br>");
sb.append$S("<table>");
sb.append$S(String.format$S$OA("<tr><td>%s</td><td>%s</td><td>%s</td></tr>", ["Type", this.type, ""]));
sb.append$S(String.format$S$OA("<tr><td>%s</td><td>%s</td><td>%s</td></tr>", ["Start/end", this.begin == this.end ? new Integer(this.begin) : this.begin + (this.isContactFeature$() ? ":" : "-") + this.end , ""]));
var desc=$I$(6).stripHtmlTags$S(this.description);
sb.append$S(String.format$S$OA("<tr><td>%s</td><td>%s</td><td>%s</td></tr>", ["Description", desc, ""]));
if (!Float.isNaN$F(this.score) && this.score != 0.0  ) {
sb.append$S(String.format$S$OA("<tr><td>%s</td><td>%s</td><td>%s</td></tr>", ["Score", new Float(this.score), ""]));
}if (this.featureGroup != null ) {
sb.append$S(String.format$S$OA("<tr><td>%s</td><td>%s</td><td>%s</td></tr>", ["Group", this.featureGroup, ""]));
}if (this.otherDetails != null ) {
var ordered=Clazz.new_($I$(7).c$$java_util_Comparator,[String.CASE_INSENSITIVE_ORDER]);
ordered.putAll$java_util_Map(this.otherDetails);
for (var entry, $entry = ordered.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getKey$();
if ("ATTRIBUTES".equals$O(key)) {
continue;
}var value=entry.getValue$();
if (Clazz.instanceOf(value, "java.util.Map")) {
var values=value;
var sm=Clazz.new_($I$(7).c$$java_util_Comparator,[String.CASE_INSENSITIVE_ORDER]);
sm.putAll$java_util_Map(values);
for (var e, $e = sm.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
sb.append$S(String.format$S$OA("<tr><td>%s</td><td>%s</td><td>%s</td></tr>", [key, e.getKey$().toString(), e.getValue$().toString()]));
}
} else {
var attDesc=null;
if (metadata != null ) {
attDesc=metadata.getAttributeName$S(key);
}var s=entry.getValue$().toString();
if (this.isValueInteresting$S$S$jalview_datamodel_features_FeatureSourceI(key, s, metadata)) {
sb.append$S(String.format$S$OA("<tr><td>%s</td><td>%s</td><td>%s</td></tr>", [key, attDesc == null  ? "" : attDesc, s]));
}}}
}sb.append$S("</table>");
var text=sb.toString();
return text;
});

Clazz.newMeth(C$, 'isValueInteresting$S$S$jalview_datamodel_features_FeatureSourceI', function (key, value, metadata) {
if (value == null  || "".equals$O(value)  || ".".equals$O(value)  || "0".equals$O(value) ) {
return false;
}if (metadata == null ) {
return true;
}var attType=metadata.getAttributeType$S(key);
if (attType != null  && (attType === $I$(8).Float  || attType.equals$O($I$(8).Integer) ) ) {
try {
var fval=(Float.valueOf$S(value)).floatValue$();
if (fval == 0.0 ) {
return false;
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
}return true;
});

Clazz.newMeth(C$, 'setSource$S', function (theSource) {
this.source=theSource;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
