(function(){var P$=Clazz.newPackage("javajs.awt.event"),I$=[];
var C$=Clazz.newClass(P$, "ActionEvent", null, 'javajs.awt.event.Event');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.actionCommand=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getActionCommand$', function () {
return this.actionCommand;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-03-05 22:54:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
