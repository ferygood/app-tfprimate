(function(){var P$=Clazz.newPackage("org.jmol.minimize.forcefield"),I$=[];
var C$=Clazz.newClass(P$, "MMFFDistanceCalc", null, 'org.jmol.minimize.forcefield.Calculation');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.r0=0;
this.kb=0;
this.delta2=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setData$javajs_util_Lst$org_jmol_minimize_MinBond', function (calc, bond) {
this.ia=bond.data[0];
this.ib=bond.data[1];
var data=this.calcs.getParameterObj$org_jmol_minimize_MinObject(bond);
if (data == null ) return;
calc.addLast$TV(Clazz.array(java.lang.Object, -1, [Clazz.array(Integer.TYPE, -1, [this.ia, this.ib]), data]));
});

Clazz.newMeth(C$, 'compute$OA', function (dataIn) {
this.getPointers$OA(dataIn);
this.kb=this.dData[0];
this.r0=this.dData[1];
this.calcs.setPairVariables$org_jmol_minimize_forcefield_Calculation(this);
this.delta=this.rab - this.r0;
this.delta2=this.delta * this.delta;
this.energy=71.96625 * this.kb * this.delta2 * (1 + -2.0 * this.delta + 2.3333333333333335 * (this.delta2)) ;
if (this.calcs.gradients) {
this.dE=71.96625 * this.kb * this.delta * (2 + 3 * -2.0 * this.delta  + 4 * 2.3333333333333335 * this.delta2 ) ;
this.calcs.addForces$org_jmol_minimize_forcefield_Calculation$I(this, 2);
}if (this.calcs.logging) this.calcs.appendLogData$S(this.calcs.getDebugLine$I$org_jmol_minimize_forcefield_Calculation(0, this));
return this.energy;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
