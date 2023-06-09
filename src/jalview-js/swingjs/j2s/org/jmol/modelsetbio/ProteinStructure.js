(function(){var P$=Clazz.newPackage("org.jmol.modelsetbio"),p$1={},I$=[[0,'javajs.util.V3','org.jmol.util.Logger','java.util.Hashtable','javajs.util.P3']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ProteinStructure", null, null, 'org.jmol.modelset.Structure');
C$.globalStrucNo=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.globalStrucNo=1000;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.type=null;
this.subtype=null;
this.structureID=null;
this.strucNo=0;
this.serialID=0;
this.strandCount=0;
this.nRes=0;
this.apolymer=null;
this.monomerIndexFirst=0;
this.monomerIndexLast=0;
this.axisA=null;
this.axisB=null;
this.axisUnitVector=null;
this.vectorProjection=null;
this.segments=null;
this.resMap=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.strandCount=1;
}, 1);

Clazz.newMeth(C$, 'setupPS$org_jmol_modelsetbio_AlphaPolymer$org_jmol_c_STR$I$I', function (apolymer, type, monomerIndex, monomerCount) {
this.strucNo=++C$.globalStrucNo;
this.apolymer=apolymer;
this.type=type;
this.vectorProjection=Clazz.new_($I$(1));
this.monomerIndexFirst=monomerIndex;
this.addMonomer$I(monomerIndex + monomerCount - 1);
if ($I$(2).debugging) $I$(2).info$S("Creating ProteinStructure " + this.strucNo + " " + type.getBioStructureTypeName$Z(false) + " from " + this.monomerIndexFirst + " through " + this.monomerIndexLast + " in polymer " + apolymer );
});

Clazz.newMeth(C$, 'addMonomer$I', function (index) {
this.resMap=null;
this.resetAxes$();
this.monomerIndexFirst=Math.min(this.monomerIndexFirst, index);
this.monomerIndexLast=Math.max(this.monomerIndexLast, index);
this.nRes=this.monomerIndexLast - this.monomerIndexFirst + 1;
});

Clazz.newMeth(C$, 'removeMonomer$I', function (index) {
this.resMap=null;
this.resetAxes$();
if (index > this.monomerIndexLast || index < this.monomerIndexFirst ) return;
if (index == this.monomerIndexFirst) {
this.monomerIndexFirst++;
this.nRes--;
} else if (index == this.monomerIndexLast) {
this.monomerIndexLast--;
this.nRes--;
} else {
var n=this.monomerIndexLast - index;
this.monomerIndexLast=index - 1;
this.nRes=index - this.monomerIndexFirst;
var monomers=this.apolymer.monomers;
var type=monomers[++index].getProteinStructureType$();
var mLast=-1;
for (var i=0, pt=index; i < n; i++, pt++) {
(monomers[pt]).setStructure$org_jmol_modelsetbio_ProteinStructure(null);
mLast=monomers[pt].setProteinStructureType$org_jmol_c_STR$I(type, mLast);
}
}});

Clazz.newMeth(C$, 'calcAxis$', function () {
});

Clazz.newMeth(C$, 'isWithin$I', function (monomerIndex) {
return (monomerIndex > this.monomerIndexFirst && monomerIndex < this.monomerIndexLast );
});

Clazz.newMeth(C$, 'getIndex$org_jmol_modelsetbio_Monomer', function (monomer) {
if (this.resMap == null ) {
this.resMap=Clazz.new_($I$(3));
for (var i=this.nRes; --i >= 0; ) this.resMap.put$TK$TV(this.apolymer.monomers[this.monomerIndexFirst + i], Integer.valueOf$I(i));

}var ii=this.resMap.get$O(monomer);
return (ii == null  ? -1 : ii.intValue$());
});

Clazz.newMeth(C$, 'getSegments$', function () {
if (this.segments == null ) p$1.calcSegments.apply(this, []);
return this.segments;
});

Clazz.newMeth(C$, 'getStructureMidPoint$I', function (index) {
if (this.segments == null ) p$1.calcSegments.apply(this, []);
return this.segments[index];
});

Clazz.newMeth(C$, 'calcSegments', function () {
if (this.segments != null ) return;
this.calcAxis$();
this.segments=Clazz.array($I$(4), [this.nRes + 1]);
this.segments[this.nRes]=this.axisB;
this.segments[0]=this.axisA;
var axis=$I$(1).newV$javajs_util_T3(this.axisUnitVector);
axis.scale$F(this.axisB.distance$javajs_util_T3(this.axisA) / this.nRes);
for (var i=1; i < this.nRes; i++) {
var point=this.segments[i]=Clazz.new_($I$(4));
point.add2$javajs_util_T3$javajs_util_T3(this.segments[i - 1], axis);
}
}, p$1);

Clazz.newMeth(C$, 'getAxisStartPoint$', function () {
this.calcAxis$();
return this.axisA;
});

Clazz.newMeth(C$, 'getAxisEndPoint$', function () {
this.calcAxis$();
return this.axisB;
});

Clazz.newMeth(C$, 'resetAxes$', function () {
this.axisA=null;
this.segments=null;
});

Clazz.newMeth(C$, 'setAtomBits$javajs_util_BS', function (bs) {
var ms=this.apolymer.monomers;
for (var i=this.monomerIndexFirst; i <= this.monomerIndexLast; i++) ms[i].setAtomBits$javajs_util_BS(bs);

});

Clazz.newMeth(C$, 'setAtomBitsAndClear$javajs_util_BS$javajs_util_BS', function (bs, bsOut) {
var ms=this.apolymer.monomers;
for (var i=this.monomerIndexFirst; i <= this.monomerIndexLast; i++) ms[i].setAtomBitsAndClear$javajs_util_BS$javajs_util_BS(bs, bsOut);

});

Clazz.newMeth(C$, 'findMonomer$javajs_util_BS$Z', function (bsAtoms, isFirst) {
var ms=this.apolymer.monomers;
if (isFirst) {
for (var i=this.monomerIndexFirst; i <= this.monomerIndexLast; i++) if (bsAtoms == null  || bsAtoms.get$I(ms[i].leadAtomIndex) ) return ms[i];

} else {
for (var i=this.monomerIndexLast; i >= this.monomerIndexFirst; --i) if (bsAtoms == null  || bsAtoms.get$I(ms[i].leadAtomIndex) ) return ms[i];

}return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
