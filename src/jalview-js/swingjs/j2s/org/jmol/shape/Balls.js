(function(){var P$=Clazz.newPackage("org.jmol.shape"),I$=[[0,'javajs.util.BS','org.jmol.util.C','org.jmol.c.PAL']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Balls", null, 'org.jmol.shape.AtomShape');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setSize$I$javajs_util_BS', function (size, bsSelected) {
if (size == 2147483647) {
this.isActive=true;
if (this.bsSizeSet == null ) this.bsSizeSet=Clazz.new_($I$(1));
this.bsSizeSet.or$javajs_util_BS(bsSelected);
return;
}this.setSize2$I$javajs_util_BS(size, bsSelected);
});

Clazz.newMeth(C$, 'setSizeRD$org_jmol_atomdata_RadiusData$javajs_util_BS', function (rd, bsSelected) {
this.isActive=true;
if (this.bsSizeSet == null ) this.bsSizeSet=Clazz.new_($I$(1));
var bsLength=Math.min(this.atoms.length, bsSelected.length$());
for (var i=bsSelected.nextSetBit$I(0); i >= 0 && i < bsLength ; i=bsSelected.nextSetBit$I(i + 1)) {
var atom=this.atoms[i];
atom.setMadAtom$org_jmol_viewer_Viewer$org_jmol_atomdata_RadiusData(this.vwr, rd);
this.bsSizeSet.set$I(i);
}
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bs) {
if ("color" == propertyName) {
var colix=$I$(2).getColixO$O(value);
if (colix == 0) colix=2;
if (this.bsColixSet == null ) this.bsColixSet=Clazz.new_($I$(1));
var pid=($b$[0] = $I$(3).pidOf$O(value), $b$[0]);
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
var atom=this.atoms[i];
atom.colixAtom=this.getColixA$H$B$org_jmol_modelset_Atom(colix, ($b$[0] = pid, $b$[0]), atom);
this.bsColixSet.setBitTo$I$Z(i, colix != 2 || pid != $I$(3).NONE.id );
atom.paletteID=($b$[0] = pid, $b$[0]);
}
return;
}if ("colorValues" == propertyName) {
var values=value;
if (values.length == 0) return;
if (this.bsColixSet == null ) this.bsColixSet=Clazz.new_($I$(1));
var n=0;
var color=null;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
if (n >= values.length) return;
color=Integer.valueOf$I(values[n++]);
var colix=$I$(2).getColixO$O(color);
if (colix == 0) colix=2;
var pid=($b$[0] = $I$(3).pidOf$O(color), $b$[0]);
var atom=this.atoms[i];
atom.colixAtom=this.getColixA$H$B$org_jmol_modelset_Atom(colix, ($b$[0] = pid, $b$[0]), atom);
this.bsColixSet.setBitTo$I$Z(i, colix != 2 || pid != $I$(3).NONE.id );
atom.paletteID=($b$[0] = pid, $b$[0]);
}
return;
}if ("colors" == propertyName) {
var data=value;
var colixes=data[0];
if (this.bsColixSet == null ) this.bsColixSet=Clazz.new_($I$(1));
var c;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
if (i >= colixes.length || (c=colixes[i]) == 0 ) continue;
this.atoms[i].colixAtom=c;
this.atoms[i].paletteID=($b$[0] = $I$(3).UNKNOWN.id, $b$[0]);
this.bsColixSet.set$I(i);
}
return;
}if ("translucency" == propertyName) {
var isTranslucent=((value).equals$O("translucent"));
if (this.bsColixSet == null ) this.bsColixSet=Clazz.new_($I$(1));
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
this.atoms[i].setTranslucent$Z$F(isTranslucent, this.translucentLevel);
if (isTranslucent) this.bsColixSet.set$I(i);
}
return;
}if (propertyName.startsWith$S("ball")) {
propertyName=propertyName.substring$I(4).intern$();
}this.setPropAS$S$O$javajs_util_BS(propertyName, value, bs);
});

Clazz.newMeth(C$, 'setAtomClickability$', function () {
var bsDeleted=this.vwr.slm.bsDeleted;
for (var i=this.ac; --i >= 0; ) {
var atom=this.atoms[i];
atom.setClickable$I(0);
if (bsDeleted != null  && bsDeleted.get$I(i)  || (atom.shapeVisibilityFlags & this.vf) == 0  || this.ms.isAtomHidden$I(i) ) continue;
atom.setClickable$I(this.vf);
}
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
