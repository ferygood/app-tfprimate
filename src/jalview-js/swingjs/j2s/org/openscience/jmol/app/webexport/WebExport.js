(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.webexport"),I$=[[0,'java.util.Properties','java.awt.BorderLayout','org.openscience.jmol.app.jmolpanel.JmolPanel','org.jmol.i18n.GT','javajs.util.PT','javax.swing.JTabbedPane','javax.swing.JFileChooser','org.openscience.jmol.app.webexport.WebPanel','javax.swing.JPanel','org.openscience.jmol.app.jmolpanel.GuiMap','javax.swing.JEditorPane','javax.swing.JScrollPane','java.awt.Dimension','org.openscience.jmol.app.webexport.PopInJmol','org.openscience.jmol.app.webexport.ScriptButtons','org.openscience.jmol.app.webexport.LogPanel','org.jmol.viewer.Viewer','java.text.DateFormat','java.util.Date','javax.swing.JFrame','javax.swing.ImageIcon','javax.swing.JDialog','javax.swing.filechooser.FileSystemView','java.io.File']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "WebExport", null, 'javax.swing.JPanel', 'java.awt.event.WindowListener');
C$.showMoleculesAndOrbitals=false;
C$.runStatus=0;
C$.webPanels=null;
C$.webExport=null;
C$.webFrame=null;
C$.windowName=null;
C$.remoteAppletPath=null;
C$.localAppletPath=null;
C$.prop=null;
C$.pageAuthorName=null;
C$.popInWidth=0;
C$.popInHeight=0;
C$.scriptButtonPercent=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.showMoleculesAndOrbitals=false;
C$.runStatus=1;
C$.prop=Clazz.new_($I$(1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer$org_openscience_jmol_app_HistoryFile', function (vwr, hxxFile) {
C$.superclazz.c$$java_awt_LayoutManager.apply(this, [Clazz.new_($I$(2))]);
C$.$init$.apply(this);
C$.remoteAppletPath=$I$(3).getJmolProperty$S$S("webMakerAppletPath", "http://chemapps.stolaf.edu/jmol/jsmol");
C$.localAppletPath=$I$(3).getJmolProperty$S$S("webMakerLocalAppletPath", "http://chemapps.stolaf.edu/jmol/jsmol");
C$.pageAuthorName=$I$(3).getJmolProperty$S$S("webMakerPageAuthorName", $I$(4).$$S("Jmol Web Page Maker"));
C$.popInWidth=$I$(5).parseInt$S($I$(3).getJmolProperty$S$S("webMakerPopInWidth", "300"));
C$.popInHeight=$I$(5).parseInt$S($I$(3).getJmolProperty$S$S("webMakerPopInHeight", "300"));
C$.scriptButtonPercent=$I$(5).parseInt$S($I$(3).getJmolProperty$S$S("webMakerScriptButtonPercent", "60"));
var mainTabs=Clazz.new_($I$(6));
var fc=Clazz.new_($I$(7));
C$.webPanels=Clazz.array($I$(8), [2]);
if (C$.runStatus != 0) {
var introPanel=Clazz.new_($I$(9));
var introFileName="WebExportIntro";
var url=$I$(10).getHtmlResource$O$S(this, introFileName);
if (url == null ) {
System.err.println$S($I$(4).o$S$O($I$(4).$$S("Couldn\'t find file: {0}"), introFileName + ".html"));
}var intro=Clazz.new_($I$(11));
if (url != null ) {
try {
intro.setPage$java_net_URL(url);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S("Attempted to read a bad URL: " + url);
} else {
throw e;
}
}
}intro.setEditable$Z(false);
var introPane=Clazz.new_($I$(12).c$$java_awt_Component,[intro]);
introPane.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(13).c$$I$I,[450, 350]));
introPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13).c$$I$I,[400, 300]));
introPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(2)));
introPanel.add$java_awt_Component(introPane);
introPanel.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(13).c$$I$I,[450, 350]));
introPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13).c$$I$I,[400, 300]));
mainTabs.add$S$java_awt_Component($I$(4).$$S("Introduction"), introPanel);
C$.webPanels[0]=Clazz.new_($I$(14).c$$org_jmol_viewer_Viewer$javax_swing_JFileChooser$org_openscience_jmol_app_webexport_WebPanelA$I,[vwr, fc, C$.webPanels, 0]);
C$.webPanels[1]=Clazz.new_($I$(15).c$$org_jmol_viewer_Viewer$javax_swing_JFileChooser$org_openscience_jmol_app_webexport_WebPanelA$I,[vwr, fc, C$.webPanels, 1]);
var w=Integer.parseInt$S($I$(3).getJmolProperty$S$S("webMakerInfoWidth", "300"));
var h=Integer.parseInt$S($I$(3).getJmolProperty$S$S("webMakerInfoHeight", "350"));
mainTabs.addTab$S$java_awt_Component($I$(4).$$S("Pop-In Jmol"), C$.webPanels[0].getPanel$I$I(w, h));
mainTabs.addTab$S$java_awt_Component($I$(4).$$S("ScriptButton Jmol"), C$.webPanels[1].getPanel$I$I(w, h));
}C$.showMoleculesAndOrbitals=(C$.runStatus == 0 || $I$(8).checkOption$O(vwr.getP$S("webMakerAllTabs")) );
if (C$.showMoleculesAndOrbitals) {
}mainTabs.addTab$S$java_awt_Component($I$(4).$$S("Log"), $I$(16).getPanel$());
this.add$java_awt_Component(mainTabs);
this.add$java_awt_Component$O($I$(16).getMiniPanel$(), "South");
}, 1);

Clazz.newMeth(C$, 'TimeStamp_WebLink$', function () {
return $I$(4).o$S$O($I$(4).$$S("Page skeleton and JavaScript generated by the Export to Web module of {0} on {1}."), Clazz.array(String, -1, [" <a href=\"http://jmol.sourceforge.net\">Jmol " + $I$(17).getJmolVersion$() + "</a> " , $I$(18).getDateInstance$().format$java_util_Date(Clazz.new_($I$(19)))]));
}, 1);

Clazz.newMeth(C$, 'dispose$', function () {
C$.webFrame.dispose$();
C$.webFrame=null;
}, 1);

Clazz.newMeth(C$, 'createAndShowGUI$org_jmol_viewer_Viewer$org_openscience_jmol_app_HistoryFile$S', function (vwr, historyFile, wName) {
if (vwr == null ) C$.runStatus=0;
if (C$.webFrame != null ) {
C$.webFrame.setVisible$Z(true);
C$.webFrame.toFront$();
return C$.webExport;
}C$.webFrame=Clazz.new_($I$(20).c$$S,[$I$(4).$$S("Jmol Web Page Maker")]);
var imageName="org/openscience/jmol/app/images/icon.png";
var imageUrl=vwr.getClass$().getClassLoader$().getResource$S(imageName);
var jmolIcon=Clazz.new_($I$(21).c$$java_net_URL,[imageUrl]);
C$.webFrame.setIconImage$java_awt_Image(jmolIcon.getImage$());
C$.windowName=wName;
if (historyFile != null ) historyFile.repositionWindow$S$java_awt_Component$I$I$Z(C$.windowName, C$.webFrame, 700, 400, true);
if (C$.runStatus == 0) {
$I$(20).setDefaultLookAndFeelDecorated$Z(true);
$I$(22).setDefaultLookAndFeelDecorated$Z(true);
C$.webFrame.setDefaultCloseOperation$I(3);
} else {
C$.webFrame.setDefaultCloseOperation$I(2);
}C$.webExport=Clazz.new_(C$.c$$org_jmol_viewer_Viewer$org_openscience_jmol_app_HistoryFile,[vwr, historyFile]);
C$.webExport.setOpaque$Z(true);
C$.webFrame.setContentPane$java_awt_Container(C$.webExport);
C$.webFrame.addWindowListener$java_awt_event_WindowListener(C$.webExport);
C$.webFrame.pack$();
C$.webFrame.setVisible$Z(true);
if (C$.runStatus == 0) {
} else {
}return C$.webExport;
}, 1);

Clazz.newMeth(C$, 'saveHistory$', function () {
if ($I$(3).historyFile == null ) return;
$I$(3).addJmolWindowInfo$S$java_awt_Component$java_awt_Point(C$.windowName, C$.webFrame, null);
C$.prop.setProperty$S$S("webMakerAppletPath", C$.remoteAppletPath);
C$.prop.setProperty$S$S("webMakerLocalAppletPath", C$.localAppletPath);
C$.prop.setProperty$S$S("webMakerPageAuthorName", C$.pageAuthorName);
$I$(3).addJmolProperties$java_util_Properties(C$.prop);
}, 1);

Clazz.newMeth(C$, 'getAppletPath$Z', function (isRemote) {
return (isRemote ? C$.remoteAppletPath : C$.localAppletPath);
}, 1);

Clazz.newMeth(C$, 'setAppletPath$S$Z', function (path, isRemote) {
if (path == null ) path="http://chemapps.stolaf.edu/jmol/jsmol";
if (isRemote) {
C$.remoteAppletPath=path;
C$.prop.setProperty$S$S("webMakerAppletPath", C$.remoteAppletPath);
$I$(3).addJmolProperties$java_util_Properties(C$.prop);
} else {
C$.localAppletPath=path;
C$.prop.setProperty$S$S("webMakerLocalAppletPath", C$.localAppletPath);
$I$(3).addJmolProperties$java_util_Properties(C$.prop);
}}, 1);

Clazz.newMeth(C$, 'getPageAuthorName$', function () {
return C$.pageAuthorName;
}, 1);

Clazz.newMeth(C$, 'setWebPageAuthor$S', function (pageAuthor) {
if (pageAuthor == null ) pageAuthor=$I$(4).$$S("Jmol Web Page Maker");
C$.pageAuthorName=pageAuthor;
C$.prop.setProperty$S$S("webMakerPageAuthorName", C$.pageAuthorName);
$I$(3).addJmolProperties$java_util_Properties(C$.prop);
}, 1);

Clazz.newMeth(C$, 'setPopInDim$I$I', function (appletWidth, appletHeight) {
if (appletWidth < 25 || appletWidth > 3000 ) appletWidth=300;
if (appletHeight < 25 || appletHeight > 3000 ) appletHeight=300;
C$.popInWidth=appletWidth;
C$.popInHeight=appletHeight;
C$.prop.setProperty$S$S("webMakerPopInWidth", "" + appletWidth);
C$.prop.setProperty$S$S("webMakerPopInHeight", "" + appletHeight);
$I$(3).addJmolProperties$java_util_Properties(C$.prop);
}, 1);

Clazz.newMeth(C$, 'getPopInWidth$', function () {
return C$.popInWidth;
}, 1);

Clazz.newMeth(C$, 'getPopInHeight$', function () {
return C$.popInHeight;
}, 1);

Clazz.newMeth(C$, 'setScriptButtonPercent$I', function (percent) {
if (percent < 10 || percent > 90 ) percent=60;
C$.scriptButtonPercent=percent;
C$.prop.setProperty$S$S("webMakerScriptButtonPercent", "" + percent);
$I$(3).addJmolProperties$java_util_Properties(C$.prop);
}, 1);

Clazz.newMeth(C$, 'getScriptButtonPercent$', function () {
return C$.scriptButtonPercent;
}, 1);

Clazz.newMeth(C$, 'getFrame$', function () {
return C$.webFrame;
}, 1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowIconified$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowDeiconified$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowActivated$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowDeactivated$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowGainedFocus$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowLostFocus$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowStateChanged$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'cleanUp$', function () {
var Directories=$I$(23).getFileSystemView$();
var homedir=Directories.getHomeDirectory$();
var homedirpath=homedir.getPath$();
var scratchpath=homedirpath + "/.jmol_WPM";
var scratchdir=Clazz.new_($I$(24).c$$S,[scratchpath]);
if (scratchdir.exists$()) {
var dirListing=null;
dirListing=scratchdir.listFiles$();
for (var i=0; i < (dirListing.length); i++) {
dirListing[i].delete$();
}
}C$.saveHistory$();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:59 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
