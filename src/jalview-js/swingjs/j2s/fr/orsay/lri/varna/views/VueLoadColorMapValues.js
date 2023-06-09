(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),p$1={},I$=[[0,'javax.swing.JRadioButton','javax.swing.JPanel','java.awt.CardLayout','javax.swing.JTextField','javax.swing.JButton','java.awt.GridLayout','javax.swing.ButtonGroup','javax.swing.JLabel','java.awt.Dimension','javax.swing.JFileChooser','java.net.URL','java.io.InputStreamReader','java.io.FileReader']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueLoadColorMapValues", null, 'javax.swing.JPanel', 'java.awt.event.ActionListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
this.urlCB=null;
this.fileCB=null;
this.urlAux=null;
this.fileAux=null;
this.l=null;
this.input=null;
this.urlTxt=null;
this.fileTxt=null;
this.load=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.urlCB=Clazz.new_($I$(1).c$$S,["URL"]);
this.fileCB=Clazz.new_($I$(1).c$$S,["File"]);
this.urlAux=Clazz.new_($I$(2));
this.fileAux=Clazz.new_($I$(2));
this.l=Clazz.new_($I$(3));
this.input=Clazz.new_($I$(2));
this.urlTxt=Clazz.new_($I$(4));
this.fileTxt=Clazz.new_($I$(4));
this.load=Clazz.new_($I$(5).c$$S,["Choose file"]);
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
Clazz.super_(C$, this,1);
this._vp=vp;
p$1.init.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'init', function () {
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6).c$$I$I,[2, 1]));
var choice=Clazz.new_($I$(2));
this.urlCB.addActionListener$java_awt_event_ActionListener(this);
this.fileCB.addActionListener$java_awt_event_ActionListener(this);
var group=Clazz.new_($I$(7));
group.add$javax_swing_AbstractButton(this.urlCB);
group.add$javax_swing_AbstractButton(this.fileCB);
choice.add$java_awt_Component(Clazz.new_($I$(8).c$$S,["Choose input source:"]));
choice.add$java_awt_Component(this.urlCB);
choice.add$java_awt_Component(this.fileCB);
this.input.setLayout$java_awt_LayoutManager(this.l);
this.urlTxt.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(9).c$$I$I,[300, 30]));
this.fileTxt.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(9).c$$I$I,[300, 30]));
this.urlAux.add$java_awt_Component(this.urlTxt);
this.fileAux.add$java_awt_Component(this.fileTxt);
this.fileAux.add$java_awt_Component(this.load);
this.input.add$java_awt_Component$O(this.fileAux, "file");
this.input.add$java_awt_Component$O(this.urlAux, "url");
group.setSelected$javax_swing_ButtonModel$Z(this.fileCB.getModel$(), true);
this.load.addActionListener$java_awt_event_ActionListener(this);
this.add$java_awt_Component(choice);
this.add$java_awt_Component(this.input);
}, p$1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (Clazz.instanceOf(e.getSource$(), "javax.swing.JRadioButton")) {
if (this.urlCB.isSelected$()) {
this.l.show$java_awt_Container$S(this.input, "url");
} else {
this.l.show$java_awt_Container$S(this.input, "file");
}} else if (Clazz.instanceOf(e.getSource$(), "javax.swing.JButton")) {
var fc=Clazz.new_($I$(10));
if (fc.showOpenDialog$java_awt_Component(this._vp) == 0) {
this.fileTxt.setText$S(fc.getSelectedFile$().getAbsolutePath$());
}}});

Clazz.newMeth(C$, 'getReader$', function () {
if (this.urlCB.isSelected$()) {
var url=Clazz.new_($I$(11).c$$S,[this.urlTxt.getText$()]);
var connexion=url.openConnection$();
connexion.setUseCaches$Z(false);
var r=connexion.getInputStream$();
return Clazz.new_($I$(12).c$$java_io_InputStream,[r]);
} else {
return Clazz.new_($I$(13).c$$S,[this.fileTxt.getText$()]);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:47 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
