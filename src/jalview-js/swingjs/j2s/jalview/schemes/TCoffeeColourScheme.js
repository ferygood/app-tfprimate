(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'java.util.ArrayList','java.util.IdentityHashMap','java.awt.Color','jalview.schemes.JalviewColourScheme']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TCoffeeColourScheme", null, 'jalview.schemes.ResidueColourScheme');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.seqMap=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AnnotatedCollectionI', function (alignment) {
Clazz.super_(C$, this,1);
this.alignmentChanged$jalview_datamodel_AnnotatedCollectionI$java_util_Map(alignment, null);
}, 1);

Clazz.newMeth(C$, 'alignmentChanged$jalview_datamodel_AnnotatedCollectionI$java_util_Map', function (alignment, hiddenReps) {
var annots=Clazz.new_($I$(1));
this.seqMap=Clazz.new_($I$(2));
var alcontext=Clazz.instanceOf(alignment, "jalview.datamodel.AlignmentI") ? alignment : alignment.getContext$();
if (alcontext == null ) {
return;
}var w=0;
for (var al, $al = alcontext.findAnnotation$S("TCoffeeScore").iterator$(); $al.hasNext$()&&((al=($al.next$())),1);) {
if (al.sequenceRef != null  && !al.belowAlignment ) {
annots.add$TE(al);
if (w < al.annotations.length) {
w=al.annotations.length;
}var scores=Clazz.array($I$(3), [al.annotations.length]);
var i=0;
for (var an, $an = 0, $$an = al.annotations; $an<$$an.length&&((an=($$an[$an])),1);$an++) {
scores[i++]=(an != null ) ? an.colour : $I$(3).white;
}
this.seqMap.put$TK$TV(al.sequenceRef, scores);
}}
});

Clazz.newMeth(C$, 'findColour$C$I$jalview_datamodel_SequenceI', function (c, j, seq) {
if (this.seqMap == null ) {
return $I$(3).WHITE;
}var cols=this.seqMap.get$O(seq);
if (cols == null ) {
return $I$(3).white;
}if (j < 0 || j >= cols.length ) {
return $I$(3).white;
}return cols[j];
});

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI', function (view, sg) {
return Clazz.new_(C$.c$$jalview_datamodel_AnnotatedCollectionI,[sg]);
});

Clazz.newMeth(C$, 'isApplicableTo$jalview_datamodel_AnnotatedCollectionI', function (ac) {
var alcontext=Clazz.instanceOf(ac, "jalview.datamodel.AlignmentI") ? ac : ac.getContext$();
if (alcontext == null ) {
return false;
}var anns=alcontext.findAnnotation$S("TCoffeeScore");
return anns.iterator$().hasNext$();
});

Clazz.newMeth(C$, 'getSchemeName$', function () {
return $I$(4).TCoffee.toString();
});

Clazz.newMeth(C$, 'isSimple$', function () {
return false;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
