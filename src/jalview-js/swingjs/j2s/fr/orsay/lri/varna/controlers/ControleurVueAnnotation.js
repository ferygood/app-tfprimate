(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers");
var C$=Clazz.newClass(P$, "ControleurVueAnnotation", null, null, ['javax.swing.event.CaretListener', 'javax.swing.event.ChangeListener', 'java.awt.event.ActionListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vueAnnot=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_views_VueAnnotation', function (vueAnnot) {
C$.$init$.apply(this);
this._vueAnnot=vueAnnot;
}, 1);

Clazz.newMeth(C$, ['caretUpdate$javax_swing_event_CaretEvent','caretUpdate$'], function (arg0) {
this._vueAnnot.update$();
});

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (arg0) {
this._vueAnnot.update$();
});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (arg0) {
if (arg0.getActionCommand$().equals$O("setcolor")) {
var vui=this._vueAnnot.get_vp$().getVARNAUI$();
vui.showColorDialog$S$O$Runnable("Pick a color", this._vueAnnot.getTextAnnotation$().getColor$(), ((P$.ControleurVueAnnotation$1||
(function(){var C$=Clazz.newClass(P$, "ControleurVueAnnotation$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var c=this.$finals$.vui.dialogReturnValue;
if (c != null ) this.b$['fr.orsay.lri.varna.controlers.ControleurVueAnnotation']._vueAnnot.updateColor$java_awt_Color(c);
this.b$['fr.orsay.lri.varna.controlers.ControleurVueAnnotation']._vueAnnot.update$();
});
})()
), Clazz.new_(P$.ControleurVueAnnotation$1.$init$, [this, {vui: vui}])));
}this._vueAnnot.update$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:44 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
