(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
var C$=Clazz.newClass(P$, "FeatureProperties");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isCodingFeature$S$S', function (dbrefsource, type) {
if (type.equalsIgnoreCase$S("CDS")) {
return (dbrefsource == null  || dbrefsource.equalsIgnoreCase$S("EMBL")  || dbrefsource.equalsIgnoreCase$S("EMBLCDS") );
}return false;
}, 1);

Clazz.newMeth(C$, 'getCodingFeature$S', function (dbrefsource) {
if ("EMBL".equalsIgnoreCase$S(dbrefsource) || "EMBLCDS".equalsIgnoreCase$S(dbrefsource) ) {
return "CDS";
}return null;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
