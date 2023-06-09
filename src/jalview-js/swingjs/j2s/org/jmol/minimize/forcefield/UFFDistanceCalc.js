(function(){var P$=Clazz.newPackage("org.jmol.minimize.forcefield"),I$=[[0,'org.jmol.minimize.forcefield.CalculationsUFF']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "UFFDistanceCalc", null, 'org.jmol.minimize.forcefield.Calculation');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.r0=0;
this.kb=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setData$javajs_util_Lst$I$I$D', function (calc, ia, ib, bondOrder) {
this.calcs.parA=this.calcs.getParameter$O(this.calcs.minAtoms[ia].sType);
this.calcs.parB=this.calcs.getParameter$O(this.calcs.minAtoms[ib].sType);
this.r0=$I$(1).calculateR0$D$D$D$D$D(this.calcs.parA.dVal[0], this.calcs.parB.dVal[0], this.calcs.parA.dVal[8], this.calcs.parB.dVal[8], bondOrder);
this.kb=1390.2842991599998 * this.calcs.parA.dVal[5] * this.calcs.parB.dVal[5]  / (this.r0 * this.r0 * this.r0 );
calc.addLast$TV(Clazz.array(java.lang.Object, -1, [Clazz.array(Integer.TYPE, -1, [ia, ib]), Clazz.array(Double.TYPE, -1, [this.r0, this.kb, bondOrder])]));
});

Clazz.newMeth(C$, 'compute$OA', function (dataIn) {
this.getPointers$OA(dataIn);
this.r0=this.dData[0];
this.kb=this.dData[1];
this.calcs.setPairVariables$org_jmol_minimize_forcefield_Calculation(this);
this.delta=this.rab - this.r0;
this.energy=this.kb * this.delta * this.delta ;
if (this.calcs.gradients) {
this.dE=2.0 * this.kb * this.delta ;
this.calcs.addForces$org_jmol_minimize_forcefield_Calculation$I(this, 2);
}if (this.calcs.logging) this.calcs.appendLogData$S(this.calcs.getDebugLine$I$org_jmol_minimize_forcefield_Calculation(0, this));
return this.energy;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:02 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
