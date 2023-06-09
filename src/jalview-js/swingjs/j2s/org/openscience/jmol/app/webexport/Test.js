(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.webexport"),I$=[[0,'javax.swing.JLabel','javax.swing.JButton','javax.swing.JPanel','java.awt.GridLayout','org.openscience.jmol.app.webexport.LogPanel','javajs.util.PT','java.io.PrintStream','java.io.FileOutputStream']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Test", null, 'javax.swing.JPanel', 'java.awt.event.ActionListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.StateButton=null;
this.FileButton=null;
this.PathButton=null;
this.movetoTime=null;
this.StringtoScriptButton=null;
this.appletPath=null;
this.arrayListHandler=null;
this.fc=null;
this.vwr=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer', function (vwr) {
Clazz.super_(C$, this,1);
this.vwr=vwr;
}, 1);

Clazz.newMeth(C$, 'panel$', function () {
var Description=Clazz.new_($I$(1).c$$S,["Buttons to test getting info from Jmol Application"]);
this.StateButton=Clazz.new_($I$(2).c$$S,["Get Application State..."]);
this.StateButton.addActionListener$java_awt_event_ActionListener(this);
this.FileButton=Clazz.new_($I$(2).c$$S,["Get name of open file..."]);
this.FileButton.addActionListener$java_awt_event_ActionListener(this);
this.PathButton=Clazz.new_($I$(2).c$$S,["Get Path to open file..."]);
this.PathButton.addActionListener$java_awt_event_ActionListener(this);
this.movetoTime=Clazz.new_($I$(2).c$$S,["Insert 5 seconds for moveto, rotate and zoom..."]);
this.movetoTime.addActionListener$java_awt_event_ActionListener(this);
this.StringtoScriptButton=Clazz.new_($I$(2).c$$S,["Save a string as a script"]);
this.StringtoScriptButton.addActionListener$java_awt_event_ActionListener(this);
var ButtonPanel1=Clazz.new_($I$(3));
ButtonPanel1.add$java_awt_Component(this.StateButton);
ButtonPanel1.add$java_awt_Component(this.FileButton);
ButtonPanel1.add$java_awt_Component(this.PathButton);
var ButtonPanel2=Clazz.new_($I$(3));
ButtonPanel2.add$java_awt_Component(this.movetoTime);
ButtonPanel2.add$java_awt_Component(this.StringtoScriptButton);
var TestPanel=Clazz.new_($I$(3));
TestPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4).c$$I$I,[10, 1]));
TestPanel.add$java_awt_Component(Description);
TestPanel.add$java_awt_Component(ButtonPanel1);
TestPanel.add$java_awt_Component(ButtonPanel2);
return (TestPanel);
});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (e.getSource$() === this.StateButton ) {
var Str=null;
Str=this.vwr.getStateInfo$();
if (Str == null ) {
$I$(5).log$S("Something didn\'t work when selecting the State Button in Test module");
}$I$(5).log$S(Str);
}if (e.getSource$() === this.FileButton ) {
var Str=null;
Str=this.vwr.fm.getFileName$();
if (Str == null ) {
$I$(5).log$S("Something didn\'t work when selecting the file button in Test module");
} else {
$I$(5).log$S(Str);
}}if (e.getSource$() === this.PathButton ) {
var Str=null;
Str=this.vwr.fm.getFullPathName$Z(false);
if (Str == null ) {
$I$(5).log$S("Something didn\'t work when selecting the Path button in Test module");
} else {
$I$(5).log$S(Str);
}}if (e.getSource$() === this.movetoTime ) {
var statestr=null;
statestr=this.vwr.getStateInfo$();
if (statestr == null ) {
$I$(5).log$S("Something didn\'t work when reading the state while trying to add a moveto time.");
}statestr=$I$(6).rep$S$S$S(statestr, "set refreshing false;", "set refreshing true;");
statestr=$I$(6).rep$S$S$S(statestr, "moveto /* time, axisAngle */ 0.0", "moveto /* time, axisAngle */ 5.0");
$I$(5).log$S("The state below should have a 5 second moveto time...");
$I$(5).log$S(statestr);
}if (e.getSource$() === this.StringtoScriptButton ) {
var Str="This is a test string to stand in for the script;";
var out=null;
try {
out=Clazz.new_($I$(7).c$$java_io_OutputStream,[Clazz.new_($I$(8).c$$S,["Test.scpt"])]);
} catch (IOe) {
if (Clazz.exceptionOf(IOe,"java.io.FileNotFoundException")){
$I$(5).log$S("Open file error in StringtoScriptButton");
} else {
throw IOe;
}
}
out.print$S(Str);
out.close$();
$I$(5).log$S("The file Test.scpt should have been written to the default directory.");
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
