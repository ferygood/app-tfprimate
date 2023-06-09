(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xml"),I$=[[0,'org.jmol.util.Logger','javajs.util.PT']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "XmlQEReader", null, 'org.jmol.adapter.readers.xml.XmlReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.a=0;
this.b=0;
this.c=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'processXml$org_jmol_adapter_readers_xml_XmlReader$O', function (parent, saxReader) {
parent.doProcessLines=true;
this.processXml2$org_jmol_adapter_readers_xml_XmlReader$O(parent, saxReader);
});

Clazz.newMeth(C$, 'processStartElement$S$S', function (localName, nodeName) {
if (this.debugging) $I$(1).debug$S("xmlqe: start " + localName);
if (!this.parent.continuing) return;
if ("number_of_atoms".equals$O(localName) || "cell_dimensions".equals$O(localName) || "at".equals$O(localName)  ) {
this.setKeepChars$Z(true);
return;
}if (localName.startsWith$S("atom.")) {
this.parent.setAtomCoordScaled$org_jmol_adapter_smarter_Atom$SA$I$F(null, $I$(2).getTokens$S(this.atts.get$O("tau")), 0, 0.5291772).elementSymbol=this.atts.get$O("species").trim$();
}if ("structure".equals$O(localName)) {
if (!this.parent.doGetModel$I$S(++this.parent.modelNumber, null)) {
this.parent.checkLastModel$();
return;
}this.parent.setFractionalCoordinates$Z(true);
this.asc.doFixPeriodic=true;
this.asc.newAtomSet$();
return;
}if (!this.parent.doProcessLines) return;
});

Clazz.newMeth(C$, 'processEndElement$S', function (localName) {
if (this.debugging) $I$(1).debug$S("xmlqe: end " + localName);
while (true){
if (!this.parent.doProcessLines) break;
if ("cell_dimensions".equals$O(localName)) {
this.parent.setFractionalCoordinates$Z(true);
var data=org.jmol.adapter.smarter.AtomSetCollectionReader.getTokensFloat$S$FA$I(this.chars.toString(), null, 6);
this.a=data[0];
this.b=(data[1] == 0  ? this.a : data[1]);
this.c=(data[2] == 0  ? this.a : data[2]);
break;
}if ("at".equals$O(localName)) {
var m=org.jmol.adapter.smarter.AtomSetCollectionReader.getTokensFloat$S$FA$I(this.chars.toString(), null, 9);
for (var i=0; i < 9; i+=3) {
m[i] *= this.a;
m[i + 1] *= this.b;
m[i + 2] *= this.c;
}
this.parent.addExplicitLatticeVector$I$FA$I(0, m, 0);
this.parent.addExplicitLatticeVector$I$FA$I(1, m, 3);
this.parent.addExplicitLatticeVector$I$FA$I(2, m, 6);
break;
}if ("geometry_info".equals$O(localName)) {
try {
this.parent.applySymmetryAndSetTrajectory$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
break;
}return;
}
this.setKeepChars$Z(false);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
