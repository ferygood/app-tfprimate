(function(){var P$=Clazz.newPackage("org.jmol.viewer"),I$=[];
var C$=Clazz.newClass(P$, "JmolAsyncException", null, 'java.io.IOException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fileName=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (cacheName) {
Clazz.super_(C$, this,1);
this.fileName=cacheName;
}, 1);

Clazz.newMeth(C$, 'getFileName$', function () {
return this.fileName;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
