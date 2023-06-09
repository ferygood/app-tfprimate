(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.webexport"),I$=[[0,'org.openscience.jmol.app.webexport.LogPanel','javajs.util.BS','javax.swing.filechooser.FileSystemView','java.io.File','org.jmol.i18n.GT','java.util.Hashtable','java.io.FileInputStream','java.io.FileOutputStream']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JmolInstance");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.javaname=null;
this.script=null;
this.width=0;
this.height=0;
this.bgColor=0;
this.spinOn=false;
this.pictFile=null;
this.whichWidgets=null;
this.pictIsScratchFile=false;
this.vwr=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getInstance$org_jmol_api_JmolViewer$S$I$I$I', function (vwr, name, width, height, widgets) {
var ji=Clazz.new_(C$.c$$org_jmol_api_JmolViewer$S$I$I$I,[vwr, name, width, height, widgets]);
return (ji.script == null  ? null : ji);
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_api_JmolViewer$S$I$I$I', function (vwr, name, width, height, nWidgets) {
C$.$init$.apply(this);
this.vwr=vwr;
this.name=name;
this.width=width;
this.height=height;
this.script=vwr.getStateInfo$();
this.spinOn=vwr.getBooleanProperty$S("_spinning");
if (this.script == null ) {
$I$(1).log$S("Error trying to get Jmol State when saving view/instance.");
return;
}this.bgColor=vwr.getBackgroundArgb$();
this.javaname=name.replaceAll$S$S("[^a-zA-Z_0-9-]", "_");
this.whichWidgets=$I$(2).newN$I(nWidgets);
var Directories=$I$(3).getFileSystemView$();
var homedir=Directories.getHomeDirectory$();
var homedirpath=homedir.getPath$();
var scratchpath=homedirpath + "/.jmol_WPM";
var scratchfile=Clazz.new_($I$(4).c$$S,[scratchpath]);
if (!(scratchfile.exists$())) {
var made_scratchdir=scratchfile.mkdir$();
if (!(made_scratchdir)) {
$I$(1).log$S($I$(5).$$S("Attempt to make scratch directory failed."));
}}this.pictFile=scratchpath + "/" + this.javaname + ".png" ;
var params=Clazz.new_($I$(6));
params.put$TK$TV("fileName", this.pictFile);
params.put$TK$TV("type", "PNG");
params.put$TK$TV("quality", Integer.valueOf$I(2));
params.put$TK$TV("width", Integer.valueOf$I(width));
params.put$TK$TV("height", Integer.valueOf$I(height));
vwr.outputToFile$java_util_Map(params);
this.pictIsScratchFile=true;
}, 1);

Clazz.newMeth(C$, 'movepict$S', function (dirpath) {
var imagename=dirpath + "/" + this.javaname + ".png" ;
if (this.pictFile.equals$O(imagename)) return false;
var is=null;
try {
is=Clazz.new_($I$(7).c$$S,[this.pictFile]);
} catch (ise) {
if (Clazz.exceptionOf(ise,"java.io.IOException")){
throw ise;
} else {
throw ise;
}
}
var os=null;
try {
os=Clazz.new_($I$(8).c$$S,[imagename]);
var pngbyteint=is.read$();
while (pngbyteint != -1){
os.write$I(pngbyteint);
pngbyteint=is.read$();
}
os.flush$();
os.close$();
is.close$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
throw exc;
} else {
throw exc;
}
}
return true;
});

Clazz.newMeth(C$, 'delete$', function () {
var scratchToErase=Clazz.new_($I$(4).c$$S,[this.pictFile]);
if (scratchToErase.exists$() && !scratchToErase.delete$() ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Failed to delete scratch file " + this.pictFile + "." ]);
return true;
});

Clazz.newMeth(C$, 'addWidget$I', function (widgetID) {
if (widgetID > this.whichWidgets.size$()) return false;
if (widgetID < 0) return false;
this.whichWidgets.set$I(widgetID);
return true;
});

Clazz.newMeth(C$, 'deleteWidget$I', function (widgetID) {
if (widgetID > this.whichWidgets.size$()) return false;
if (widgetID < 0) return false;
this.whichWidgets.clear$I(widgetID);
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
