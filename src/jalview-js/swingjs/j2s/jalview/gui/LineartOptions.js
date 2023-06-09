(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'javax.swing.JCheckBox','jalview.util.MessageManager','jalview.gui.JvOptionPane','jalview.gui.Desktop','javax.swing.JRadioButton','jalview.gui.JvSwingUtils','javax.swing.ButtonGroup','javax.swing.JLabel','java.awt.FlowLayout','javax.swing.BorderFactory','jalview.bin.Cache']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "LineartOptions", null, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dialog=null;
this.cancelled=false;
this.value=null;
this.lineartRB=null;
this.askAgainCB=null;
this.asText=null;
this.dialogTitle=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.cancelled=false;
this.askAgainCB=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_concurrent_atomic_AtomicBoolean', function (formatType, textOption) {
Clazz.super_(C$, this,1);
this.asText=textOption;
this.dialogTitle=$I$(2).formatMessage$S$OA("label.select_character_style_title", [formatType]);
var preferencesKey=formatType + "_RENDERING";
try {
p$1.jbInit$S$S.apply(this, [preferencesKey, formatType]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
this.dialog=$I$(3).newOptionDialog$java_awt_Component($I$(4).desktop);
}, 1);

Clazz.newMeth(C$, 'setResponseAction$O$Runnable', function (response, action) {
this.dialog.setResponseHandler$O$Runnable(response, action);
});

Clazz.newMeth(C$, 'showDialog$', function () {
var options=Clazz.array(java.lang.Object, -1, [$I$(2).getString$S("action.ok"), $I$(2).getString$S("action.cancel")]);
this.dialog.showInternalDialog$javax_swing_JPanel$S$I$I$javax_swing_Icon$OA$S(this, this.dialogTitle, 2, -1, null, options, $I$(2).getString$S("action.ok"));
});

Clazz.newMeth(C$, 'jbInit$S$S', function (preferencesKey, formatType) {
this.lineartRB=Clazz.new_($I$(5).c$$S,[$I$(2).getString$S("label.lineart")]);
this.lineartRB.setFont$java_awt_Font($I$(6).getLabelFont$());
this.lineartRB.setSelected$Z(!this.asText.get$());
this.lineartRB.addActionListener$java_awt_event_ActionListener(((P$.LineartOptions$1||
(function(){var C$=Clazz.newClass(P$, "LineartOptions$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.LineartOptions'].asText.set$Z(!this.b$['jalview.gui.LineartOptions'].lineartRB.isSelected$());
});
})()
), Clazz.new_(P$.LineartOptions$1.$init$, [this, null])));
var textRB=Clazz.new_($I$(5).c$$S,[$I$(2).getString$S("action.text")]);
textRB.setFont$java_awt_Font($I$(6).getLabelFont$());
textRB.setSelected$Z(this.asText.get$());
textRB.addActionListener$java_awt_event_ActionListener(((P$.LineartOptions$2||
(function(){var C$=Clazz.newClass(P$, "LineartOptions$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.LineartOptions'].asText.set$Z(this.$finals$.textRB.isSelected$());
});
})()
), Clazz.new_(P$.LineartOptions$2.$init$, [this, {textRB: textRB}])));
var bg=Clazz.new_($I$(7));
bg.add$javax_swing_AbstractButton(this.lineartRB);
bg.add$javax_swing_AbstractButton(textRB);
this.askAgainCB.setFont$java_awt_Font($I$(6).getLabelFont$());
this.askAgainCB.setText$S($I$(2).getString$S("label.dont_ask_me_again"));
var prompt=Clazz.new_($I$(8).c$$S,[$I$(2).formatMessage$S$OA("label.select_character_rendering_style", [formatType])]);
prompt.setFont$java_awt_Font($I$(6).getLabelFont$());
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(9).c$$I,[0]));
this.setBorder$javax_swing_border_Border($I$(10).createEtchedBorder$());
this.add$java_awt_Component(prompt);
this.add$java_awt_Component(textRB);
this.add$java_awt_Component(this.lineartRB);
this.add$java_awt_Component(this.askAgainCB);
}, p$1);

Clazz.newMeth(C$, 'updatePreference$S', function (preferencesKey) {
this.value=this.lineartRB.isSelected$() ? "Lineart" : "Text";
if (this.askAgainCB.isSelected$()) {
$I$(11).setProperty$S$S(preferencesKey, this.value);
} else {
$I$(11).applicationProperties.remove$O(preferencesKey);
}});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
