(function(){var P$=Clazz.newPackage("org.jmol.console"),I$=[];
var C$=Clazz.newClass(P$, "JmolButton", null, 'javax.swing.JButton', 'org.jmol.api.JmolAbstractButton');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (text) {
C$.superclazz.c$$S.apply(this, [text]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_ImageIcon', function (ii) {
C$.superclazz.c$$javax_swing_Icon.apply(this, [ii]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addConsoleListener$O', function (console) {
this.addActionListener$java_awt_event_ActionListener(console);
});

Clazz.newMeth(C$, 'getKey$', function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:06 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
