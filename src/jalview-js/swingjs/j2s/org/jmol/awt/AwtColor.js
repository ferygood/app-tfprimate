(function(){var P$=Clazz.newPackage("org.jmol.awt"),I$=[];
var C$=Clazz.newClass(P$, "AwtColor", null, 'java.awt.Color', 'javajs.api.GenericColor');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.opacity=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'get4$I$I$I$I', function (r, g, b, a) {
return Clazz.new_(C$.c$$I$I$I$I,[r, g, b, a]);
});

Clazz.newMeth(C$, 'get3$I$I$I', function (r, g, b) {
return Clazz.new_(C$.c$$I$I$I,[r, g, b]);
});

Clazz.newMeth(C$, 'c$$I', function (rgb) {
C$.superclazz.c$$I.apply(this, [rgb | -16777216]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I', function (r, g, b) {
C$.superclazz.c$$I$I$I.apply(this, [r, g, b]);
C$.$init$.apply(this);
this.opacity=255;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I', function (r, g, b, a) {
C$.superclazz.c$$I$I$I$I.apply(this, [r, g, b, a]);
C$.$init$.apply(this);
this.opacity=a;
}, 1);

Clazz.newMeth(C$, 'getOpacity255$', function () {
return this.opacity;
});

Clazz.newMeth(C$, 'setOpacity255$I', function (a) {
this.opacity=a % 256;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
