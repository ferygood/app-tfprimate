(function(){var P$=Clazz.newPackage("org.jmol.dialog"),I$=[[0,'java.awt.Dimension','Boolean','org.jmol.viewer.Viewer','java.awt.Rectangle','javax.swing.Box','javax.swing.JCheckBox','org.jmol.i18n.GT',['org.jmol.dialog.FilePreview','.FPPanel'],'javajs.util.PT']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FilePreview", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', 'java.beans.PropertyChangeListener');
C$.pdbCartoonChecked=false;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.pdbCartoonChecked=true;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.active=null;
this.append=null;
this.cartoons=null;
this.chooser=null;
this.display=null;
this.vwr=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer$javax_swing_JFileChooser$Z$java_util_Map', function (vwr, fileChooser, allowAppend, vwrOptions) {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.vwr=vwr;
this.chooser=fileChooser;
var box=$I$(5).createVerticalBox$();
this.active=Clazz.new_($I$(6).c$$S$Z,[$I$(7).$$S("Preview"), false]);
this.active.addActionListener$java_awt_event_ActionListener(((P$.FilePreview$1||
(function(){var C$=Clazz.newClass(P$, "FilePreview$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['org.jmol.dialog.FilePreview'].doPreviewAction$Z.apply(this.b$['org.jmol.dialog.FilePreview'], [this.b$['org.jmol.dialog.FilePreview'].active.isSelected$()]);
});
})()
), Clazz.new_(P$.FilePreview$1.$init$, [this, null])));
box.add$java_awt_Component(this.active);
this.display=Clazz.new_($I$(8).c$$java_util_Map,[vwrOptions]);
this.display.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(1).c$$I$I,[80, 80]));
this.display.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(1).c$$I$I,[50, 50]));
box.add$java_awt_Component(this.display);
if (allowAppend) {
this.append=Clazz.new_($I$(6).c$$S$Z,[$I$(7).$$S("Append models"), false]);
box.add$java_awt_Component(this.append);
this.cartoons=Clazz.new_($I$(6).c$$S$Z,[$I$(7).$$S("PDB cartoons"), C$.pdbCartoonChecked]);
this.cartoons.addActionListener$java_awt_event_ActionListener(((P$.FilePreview$2||
(function(){var C$=Clazz.newClass(P$, "FilePreview$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (this.b$['org.jmol.dialog.FilePreview'].active.isSelected$()) {
this.b$['org.jmol.dialog.FilePreview'].doUpdatePreview$java_io_File.apply(this.b$['org.jmol.dialog.FilePreview'], [this.b$['org.jmol.dialog.FilePreview'].chooser.getSelectedFile$()]);
}});
})()
), Clazz.new_(P$.FilePreview$2.$init$, [this, null])));
box.add$java_awt_Component(this.cartoons);
}this.add$java_awt_Component(box);
fileChooser.setAccessory$javax_swing_JComponent(this);
fileChooser.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
}, 1);

Clazz.newMeth(C$, 'doPreviewAction$Z', function (selected) {
this.doUpdatePreview$java_io_File(selected ? this.chooser.getSelectedFile$() : null);
});

Clazz.newMeth(C$, 'isAppendSelected$', function () {
return (this.append != null  && this.append.isSelected$() );
});

Clazz.newMeth(C$, 'isCartoonsSelected$', function () {
return C$.pdbCartoonChecked=(this.cartoons != null  && this.cartoons.isSelected$() );
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
if (this.active.isSelected$()) {
var prop=evt.getPropertyName$();
if ("SelectedFileChangedProperty".equals$O(prop)) {
this.doUpdatePreview$java_io_File(evt.getNewValue$());
}}});

Clazz.newMeth(C$, 'doUpdatePreview$java_io_File', function (file) {
var script;
if (file == null ) {
script="zap";
} else {
var fileName=file.getAbsolutePath$();
var url=this.vwr.getLocalUrl$S(fileName);
if (url != null ) fileName=url;
fileName=fileName.replace$C$C("\\", "/");
script=" \"" + fileName + "\"" ;
if (fileName.indexOf$S(".spt") >= 0) {
script="script " + script;
} else {
script=$I$(9).rep$S$S$S(this.display.vwr.getP$S("defaultdropscript"), "\"%FILE\"", script + " 1");
script=$I$(9).rep$S$S$S(script, "%ALLOWCARTOONS", "" + (this.isCartoonsSelected$() && !this.isAppendSelected$() ));
System.out.println$S(script);
}}this.display.vwr.evalStringQuiet$S(script);
});

Clazz.newMeth(C$, 'setPreviewOptions$Z', function (TF) {
if (this.append == null ) return;
this.append.setVisible$Z(TF);
this.cartoons.setVisible$Z(TF);
});
;
(function(){var C$=Clazz.newClass(P$.FilePreview, "FPPanel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vwr=null;
this.currentSize=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.currentSize=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (info) {
Clazz.super_(C$, this,1);
info.put$TK$TV("previewOnly", $I$(2).TRUE);
var display=info.get$O("display");
info.put$TK$TV("display", this);
this.vwr=Clazz.new_($I$(3).c$$java_util_Map,[info]);
info.put$TK$TV("display", display);
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
this.getSize$java_awt_Dimension(this.currentSize);
this.vwr.setScreenDimension$I$I(this.currentSize.width, this.currentSize.height);
var rectClip=Clazz.new_($I$(4));
g.getClipBounds$java_awt_Rectangle(rectClip);
this.vwr.renderScreenImage$O$I$I(g, this.currentSize.width, this.currentSize.height);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
