(function(){var P$=Clazz.newPackage("org.jmol.util"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.PT','org.jmol.util.Logger','org.jmol.i18n.GT','Boolean','org.jmol.viewer.Viewer','org.jmol.c.CBK','org.jmol.viewer.JC','javajs.util.SB','javajs.util.Lst','java.net.URL']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GenericApplet", null, null, ['org.jmol.api.JmolAppletInterface', 'org.jmol.api.JmolStatusListener']);
C$.htRegistry=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.isJS=false;
this.codeBase=null;
this.documentBase=null;
this.isSigned=false;
this.language=null;
this.doTranslate=false;
this.haveDocumentAccess=false;
this.isStereoSlave=false;
this.mayScript=false;
this.htmlName=null;
this.fullName=null;
this.statusForm=null;
this.statusText=null;
this.statusTextarea=null;
this.gRight=null;
this.viewer=null;
this.callbacks=null;
this.vwrOptions=null;
this.haveNotifiedError=false;
this.appletObject=null;
this.isJNLP=false;
this.loading=false;
this.syncId=null;
this.outputBuffer=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.doTranslate=true;
}, 1);

Clazz.newMeth(C$, 'init$O', function (applet) {
this.callbacks=Clazz.new_($I$(1));
if (C$.htRegistry == null ) C$.htRegistry=Clazz.new_($I$(1));
this.appletObject=applet;
this.htmlName=$I$(2).split$S$S("" + this.getJmolParameter$S("name"), "_object")[0];
this.syncId=this.getJmolParameter$S("syncId");
this.fullName=this.htmlName + "__" + this.syncId + "__" ;
System.out.println$S("Jmol JavaScript applet " + this.fullName + " initializing" );
var iLevel=((this.getValue$S$S("logLevel", (this.getBooleanValue$S$Z("debug", false) ? "5" : "4"))).charCodeAt$I(0)) - 48;
if (iLevel != 4) System.out.println$S("setting logLevel=" + iLevel + " -- To change, use script \"set logLevel [0-5]\"" );
$I$(3).setLogLevel$I(iLevel);
$I$(4).ignoreApplicationBundle$();
this.initOptions$();
C$.checkIn$S$O(this.fullName, this.appletObject);
p$1.initApplication.apply(this, []);
});

Clazz.newMeth(C$, 'initApplication', function () {
this.vwrOptions.put$TK$TV("applet", $I$(5).TRUE);
if (this.getJmolParameter$S("statusListener") == null ) this.vwrOptions.put$TK$TV("statusListener", this);
this.language=this.getJmolParameter$S("language");
if (this.language != null ) this.vwrOptions.put$TK$TV("language", this.language);
this.viewer=Clazz.new_($I$(6).c$$java_util_Map,[this.vwrOptions]);
this.viewer.pushHoldRepaint$();
var emulate=p$1.getValueLowerCase$S$S.apply(this, ["emulate", "jmol"]);
p$1.setStringProperty$S$S.apply(this, ["defaults", emulate.equals$O("chime") ? "RasMol" : "Jmol"]);
p$1.setStringProperty$S$S.apply(this, ["backgroundColor", this.getValue$S$S("bgcolor", this.getValue$S$S("boxbgcolor", "black"))]);
this.viewer.setBooleanProperty$S$Z("frank", true);
this.loading=true;
for (var item, $item = 0, $$item = $I$(7).values$(); $item<$$item.length&&((item=($$item[$item])),1);$item++) p$1.setValue$S$S.apply(this, [item.name$() + "Callback", null]);

this.loading=false;
if (this.language != null ) System.out.print$S("requested language=" + this.language + "; " );
this.doTranslate=(!"none".equals$O(this.language) && this.getBooleanValue$S$Z("doTranslate", true) );
this.language=$I$(4).getLanguage$();
System.out.println$S("language=" + this.language);
if (this.callbacks.get$O($I$(7).SCRIPT) == null  && this.callbacks.get$O($I$(7).ERROR) == null  ) if (this.callbacks.get$O($I$(7).MESSAGE) != null  || this.statusForm != null   || this.statusText != null  ) {
if (this.doTranslate && (this.getValue$S$S("doTranslate", null) == null ) ) {
this.doTranslate=false;
$I$(3).warn$S("Note -- Presence of message callback disables disable translation; to enable message translation use jmolSetTranslation(true) prior to jmolApplet()");
}if (this.doTranslate) $I$(3).warn$S("Note -- Automatic language translation may affect parsing of message callbacks messages; use scriptCallback or errorCallback to process errors");
}if (!this.doTranslate) {
$I$(4).setDoTranslate$Z(false);
$I$(3).warn$S("Note -- language translation disabled");
}if (!this.getBooleanValue$S$Z("popupMenu", true)) this.viewer.getProperty$S$S$O("DATA_API", "disablePopupMenu", null);
var menuFile=this.getJmolParameter$S("menuFile");
if (menuFile != null ) this.viewer.setMenu$S$Z(menuFile, true);
var script=this.getValue$S$S("script", "");
var loadParam=this.getValue$S$S("loadInline", null);
if (loadParam == null ) {
if ((loadParam=this.getValue$S$S("load", null)) != null ) script="load \"" + loadParam + "\";" + script ;
loadParam=null;
}this.viewer.popHoldRepaint$S("applet init");
if (loadParam != null  && this.viewer.loadInline$S(loadParam) != null  ) script="";
if (script.length$() > 0) p$1.scriptProcessor$S$S$I.apply(this, [script, null, 1]);
this.viewer.notifyStatusReady$Z(true);
}, p$1);

Clazz.newMeth(C$, 'destroy$', function () {
this.gRight=null;
this.viewer.notifyStatusReady$Z(false);
this.viewer=null;
C$.checkOut$S(this.fullName);
});

Clazz.newMeth(C$, 'getBooleanValue$S$Z', function (propertyName, defaultValue) {
var value=this.getValue$S$S(propertyName, defaultValue ? "true" : "");
return (value.equalsIgnoreCase$S("true") || value.equalsIgnoreCase$S("on") || value.equalsIgnoreCase$S("yes")  );
});

Clazz.newMeth(C$, 'getValue$S$S', function (propertyName, defaultValue) {
var s=this.getJmolParameter$S(propertyName);
System.out.println$S("Jmol getValue " + propertyName + " " + s );
return (s == null  ? defaultValue : s);
});

Clazz.newMeth(C$, 'getValueLowerCase$S$S', function (paramName, defaultValue) {
var value=this.getValue$S$S(paramName, defaultValue);
if (value != null ) {
value=value.trim$().toLowerCase$();
if (value.length$() == 0) value=null;
}return value;
}, p$1);

Clazz.newMeth(C$, 'setValue$S$S', function (name, defaultValue) {
p$1.setStringProperty$S$S.apply(this, [name, this.getValue$S$S(name, defaultValue)]);
}, p$1);

Clazz.newMeth(C$, 'setStringProperty$S$S', function (name, value) {
if (value == null ) return;
$I$(3).info$S(name + " = \"" + value + "\"" );
this.viewer.setStringProperty$S$S(name, value);
}, p$1);

Clazz.newMeth(C$, 'scriptProcessor$S$S$I', function (script, statusParams, processType) {
if (script == null  || script.length$() == 0 ) return "";
switch (processType) {
case 0:
var err=this.viewer.scriptCheck$S(script);
return (Clazz.instanceOf(err, "java.lang.String") ? err : "");
case 1:
if (statusParams != null ) return this.viewer.scriptWaitStatus$S$S(script, statusParams).toString();
return this.viewer.scriptWait$S(script);
case 2:
default:
return this.viewer.script$S(script);
}
}, p$1);

Clazz.newMeth(C$, 'register$S$org_jmol_api_JmolSyncInterface', function (id, jsi) {
C$.checkIn$S$O(id, jsi);
});

Clazz.newMeth(C$, 'getJSpecViewProperty$S', function (key) {
return null;
});

Clazz.newMeth(C$, 'syncScript$S', function (script) {
this.viewer.syncScript$S$S$I(script, "~", 0);
});

Clazz.newMeth(C$, 'handleEvent$java_awt_Event', function (e) {
if (this.viewer == null ) return false;
return this.viewer.processMouseEvent$I$I$I$I$J(e.id, e.x, e.y, e.modifiers, e.when);
});

Clazz.newMeth(C$, 'getAppletInfo$', function () {
return $I$(4).o$S$O($I$(4).$$S("Jmol Applet version {0} {1}.\n\nAn OpenScience project.\n\nSee http://www.jmol.org for more information"), Clazz.array(java.lang.Object, -1, [$I$(8).version, $I$(8).date])) + "\nhtmlName = " + $I$(2).esc$S(this.htmlName) + "\nsyncId = " + $I$(2).esc$S(this.syncId) + "\ndocumentBase = " + $I$(2).esc$S(this.documentBase) + "\ncodeBase = " + $I$(2).esc$S(this.codeBase) ;
});

Clazz.newMeth(C$, 'script$S', function (script) {
this.scriptNoWait$S(script);
});

Clazz.newMeth(C$, 'scriptCheck$S', function (script) {
if (script == null  || script.length$() == 0 ) return "";
return p$1.scriptProcessor$S$S$I.apply(this, [script, null, 0]);
});

Clazz.newMeth(C$, 'scriptNoWait$S', function (script) {
if (script == null  || script.length$() == 0 ) return "";
return p$1.scriptProcessor$S$S$I.apply(this, [script, null, 2]);
});

Clazz.newMeth(C$, 'scriptWait$S', function (script) {
return this.scriptWait$S$S(script, null);
});

Clazz.newMeth(C$, 'scriptWait$S$S', function (script, statusParams) {
if (script == null  || script.length$() == 0 ) return "";
this.outputBuffer=null;
return p$1.scriptProcessor$S$S$I.apply(this, [script, statusParams, 1]);
});

Clazz.newMeth(C$, 'scriptWaitOutput$S', function (script) {
if (script == null  || script.length$() == 0 ) return "";
this.outputBuffer=Clazz.new_($I$(9));
this.viewer.scriptWaitStatus$S$S(script, "");
var str=(this.outputBuffer == null  ? "" : this.outputBuffer.toString());
this.outputBuffer=null;
return str;
});

Clazz.newMeth(C$, 'getModelIndexFromId$S', function (id) {
return this.viewer.getModelIndexFromId$S(id);
});

Clazz.newMeth(C$, 'getProperty$S', function (infoType) {
return this.viewer.getProperty$S$S$O(null, infoType, "");
});

Clazz.newMeth(C$, 'getProperty$S$S', function (infoType, paramInfo) {
{
paramInfo || (paramInfo = "");
}
return this.viewer.getProperty$S$S$O(null, infoType, paramInfo);
});

Clazz.newMeth(C$, 'getPropertyAsString$S', function (infoType) {
return this.viewer.getProperty$S$S$O("readable", infoType, "").toString();
});

Clazz.newMeth(C$, 'getPropertyAsString$S$S', function (infoType, paramInfo) {
{
paramInfo || (paramInfo = "");
}
return this.viewer.getProperty$S$S$O("readable", infoType, paramInfo).toString();
});

Clazz.newMeth(C$, 'getPropertyAsJSON$S', function (infoType) {
return this.viewer.getProperty$S$S$O("JSON", infoType, "").toString();
});

Clazz.newMeth(C$, 'getPropertyAsJSON$S$S', function (infoType, paramInfo) {
{
paramInfo || (paramInfo = "");
}
return this.viewer.getProperty$S$S$O("JSON", infoType, paramInfo).toString();
});

Clazz.newMeth(C$, 'loadInlineString$S$S$Z', function (strModel, script, isAppend) {
var errMsg=this.viewer.loadInlineAppend$S$Z(strModel, isAppend);
if (errMsg == null ) this.script$S(script);
return errMsg;
});

Clazz.newMeth(C$, 'loadInlineArray$SA$S$Z', function (strModels, script, isAppend) {
if (strModels == null  || strModels.length == 0 ) return null;
var errMsg=this.viewer.loadInline$SA$Z(strModels, isAppend);
if (errMsg == null ) this.script$S(script);
return errMsg;
});

Clazz.newMeth(C$, 'loadDOMNode$O', function (DOMNode) {
return this.viewer.openDOM$O(DOMNode);
});

Clazz.newMeth(C$, 'loadInline$S', function (strModel) {
return this.loadInlineString$S$S$Z(strModel, "", false);
});

Clazz.newMeth(C$, 'loadInline$S$S', function (strModel, script) {
return this.loadInlineString$S$S$Z(strModel, script, false);
});

Clazz.newMeth(C$, 'loadInline$SA', function (strModels) {
return this.loadInlineArray$SA$S$Z(strModels, "", false);
});

Clazz.newMeth(C$, 'loadInline$SA$S', function (strModels, script) {
return this.loadInlineArray$SA$S$Z(strModels, script, false);
});

Clazz.newMeth(C$, 'output$S', function (s) {
if (this.outputBuffer != null  && s != null  ) this.outputBuffer.append$S(s).appendC$C("\n");
});

Clazz.newMeth(C$, 'setCallbackFunction$S$S', function (callbackName, callbackFunction) {
if (callbackName.equalsIgnoreCase$S("modelkit")) return;
if (callbackName.equalsIgnoreCase$S("language")) {
p$1.consoleMessage$S.apply(this, [""]);
p$1.consoleMessage$S.apply(this, [null]);
return;
}var callback=$I$(7).getCallback$S(callbackName);
if (callback != null  && (this.loading || callback !== $I$(7).EVAL  ) ) {
if (callbackFunction == null ) this.callbacks.remove$O(callback);
 else this.callbacks.put$TK$TV(callback, callbackFunction);
return;
}p$1.consoleMessage$S.apply(this, ["Available callbacks include: " + $I$(7).getNameList$().replace$C$C(";", " ").trim$()]);
});

Clazz.newMeth(C$, 'consoleMessage$S', function (message) {
this.notifyCallback$org_jmol_c_CBK$OA($I$(7).ECHO, Clazz.array(java.lang.Object, -1, ["", message]));
}, p$1);

Clazz.newMeth(C$, 'notifyEnabled$org_jmol_c_CBK', function (type) {
switch (type) {
case $I$(7).SERVICE:
return false;
case $I$(7).ECHO:
case $I$(7).MESSAGE:
case $I$(7).MEASURE:
case $I$(7).PICK:
case $I$(7).SYNC:
return true;
case $I$(7).ANIMFRAME:
case $I$(7).DRAGDROP:
case $I$(7).ERROR:
case $I$(7).EVAL:
case $I$(7).IMAGE:
case $I$(7).LOADSTRUCT:
case $I$(7).SCRIPT:
return !this.isJNLP;
case $I$(7).AUDIO:
case $I$(7).APPLETREADY:
case $I$(7).ATOMMOVED:
case $I$(7).CLICK:
case $I$(7).HOVER:
case $I$(7).MINIMIZATION:
case $I$(7).RESIZE:
case $I$(7).STRUCTUREMODIFIED:
break;
}
return (this.callbacks.get$O(type) != null );
});

Clazz.newMeth(C$, 'notifyCallback$org_jmol_c_CBK$OA', function (type, data) {
var callback=(type == null  ? null : this.callbacks.get$O(type));
var doCallback=(type == null  || callback != null  && (data == null  || data[0] == null  )  );
var toConsole=false;
if (data != null ) data[0]=this.htmlName;
var strInfo=(data == null  || data[1] == null   ? null : data[1].toString());
if (type != null ) switch (type) {
case $I$(7).APPLETREADY:
data[3]=this.appletObject;
break;
case $I$(7).AUDIO:
case $I$(7).ERROR:
case $I$(7).EVAL:
case $I$(7).HOVER:
case $I$(7).IMAGE:
case $I$(7).MINIMIZATION:
case $I$(7).SERVICE:
case $I$(7).RESIZE:
case $I$(7).DRAGDROP:
break;
case $I$(7).CLICK:
if ("alert".equals$O(callback)) strInfo="x=" + data[1] + " y=" + data[2] + " action=" + data[3] + " clickCount=" + data[4] ;
break;
case $I$(7).ANIMFRAME:
var iData=data[1];
var frameNo=iData[0];
var fileNo=iData[1];
var modelNo=iData[2];
var firstNo=iData[3];
var lastNo=iData[4];
var isAnimationRunning=(frameNo <= -2);
var animationDirection=(firstNo < 0 ? -1 : 1);
var currentDirection=(lastNo < 0 ? -1 : 1);
if (doCallback) {
data=Clazz.array(java.lang.Object, -1, [this.htmlName, Integer.valueOf$I(Math.max(frameNo, -2 - frameNo)), Integer.valueOf$I(fileNo), Integer.valueOf$I(modelNo), Integer.valueOf$I(Math.abs(firstNo)), Integer.valueOf$I(Math.abs(lastNo)), Integer.valueOf$I(isAnimationRunning ? 1 : 0), Integer.valueOf$I(animationDirection), Integer.valueOf$I(currentDirection), data[2], data[3]]);
}break;
case $I$(7).ATOMMOVED:
break;
case $I$(7).ECHO:
var isPrivate=(data.length == 2);
var isScriptQueued=(isPrivate || (data[2]).intValue$() == 1 );
if (!doCallback) {
if (isScriptQueued) toConsole=true;
doCallback=(!isPrivate && (callback=this.callbacks.get$O((type=$I$(7).MESSAGE))) != null  );
}if (!toConsole) this.output$S(strInfo);
break;
case $I$(7).LOADSTRUCT:
var errorMsg=data[4];
if (errorMsg != null ) {
errorMsg=(errorMsg.indexOf$S("NOTE:") >= 0 ? "" : $I$(4).$$S("File Error:")) + errorMsg;
this.doShowStatus$S(errorMsg);
this.notifyCallback$org_jmol_c_CBK$OA($I$(7).MESSAGE, Clazz.array(java.lang.Object, -1, ["", errorMsg]));
return;
}break;
case $I$(7).MEASURE:
if (!doCallback) doCallback=((callback=this.callbacks.get$O((type=$I$(7).MESSAGE))) != null );
var status=data[3];
if (status.indexOf$S("Picked") >= 0 || status.indexOf$S("Sequence") >= 0 ) {
this.doShowStatus$S(strInfo);
toConsole=true;
} else if (status.indexOf$S("Completed") >= 0) {
strInfo=status + ": " + strInfo ;
toConsole=true;
}break;
case $I$(7).MESSAGE:
toConsole=!doCallback;
doCallback&=(strInfo != null );
if (!toConsole) this.output$S(strInfo);
break;
case $I$(7).PICK:
this.doShowStatus$S(strInfo);
toConsole=true;
break;
case $I$(7).SCRIPT:
var msWalltime=(data[3]).intValue$();
if (msWalltime > 0) {
} else if (!doCallback) {
doCallback=((callback=this.callbacks.get$O((type=$I$(7).MESSAGE))) != null );
}this.output$S(strInfo);
this.doShowStatus$S(strInfo);
break;
case $I$(7).STRUCTUREMODIFIED:
break;
case $I$(7).SYNC:
p$1.sendScript$S$S$Z$Z.apply(this, [strInfo, data[2], true, doCallback]);
return;
}
if (toConsole) {
var appConsole=this.viewer.getProperty$S$S$O("DATA_API", "getAppConsole", null);
if (appConsole != null ) {
appConsole.notifyCallback$org_jmol_c_CBK$OA(type, data);
this.output$S(strInfo);
this.doSendJsTextareaStatus$S(strInfo);
}}if (!doCallback || !this.mayScript ) return;
try {
this.doSendCallback$S$OA$S(callback, data, strInfo);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (!this.haveNotifiedError) if ($I$(3).debugging) {
$I$(3).debug$S(type.name$() + "Callback call error to " + callback + ": " + e );
}this.haveNotifiedError=true;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'sendScript$S$S$Z$Z', function (script, appletName, isSync, doCallback) {
if (doCallback) {
script=p$1.notifySync$S$S.apply(this, [script, appletName]);
if (script == null  || script.length$() == 0  || script.equals$O("0") ) return "";
}var apps=Clazz.new_($I$(10));
C$.findApplets$S$S$S$javajs_util_Lst(appletName, this.syncId, this.fullName, apps);
var nApplets=apps.size$();
if (nApplets == 0) {
if (!doCallback && !appletName.equals$O("*") ) $I$(3).error$S(this.fullName + " couldn't find applet " + appletName );
return "";
}var sb=(isSync ? null : Clazz.new_($I$(9)));
var getGraphics=(isSync && script.equals$O("GET_GRAPHICS") );
var setNoGraphics=(isSync && script.equals$O("SET_GRAPHICS_OFF") );
if (getGraphics) this.viewer.setStereo$Z$O(false, (this.gRight=null));
for (var i=0; i < nApplets; i++) {
var theApplet=apps.get$I(i);
var app=C$.htRegistry.get$O(theApplet);
var isScriptable=true;
if ($I$(3).debugging) $I$(3).debug$S(this.fullName + " sending to " + theApplet + ": " + script );
try {
if (isScriptable && (getGraphics || setNoGraphics ) ) {
this.viewer.setStereo$Z$O(this.isStereoSlave=getGraphics, this.gRight=(app).setStereoGraphics$Z(getGraphics));
return "";
}if (isSync) app.syncScript$S(script);
 else if (isScriptable) sb.append$S((app).scriptWait$S$S(script, "output")).append$S("\n");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
var msg=this.htmlName + " couldn't send to " + theApplet + ": " + script + ": " + e ;
$I$(3).error$S(msg);
if (!isSync) sb.append$S(msg);
} else {
throw e;
}
}
}
return (isSync ? "" : sb.toString());
}, p$1);

Clazz.newMeth(C$, 'notifySync$S$S', function (info, appletName) {
var syncCallback=this.callbacks.get$O($I$(7).SYNC);
if (!this.mayScript || syncCallback == null  ) return info;
try {
return this.doSendCallback$S$OA$S(syncCallback, Clazz.array(java.lang.Object, -1, [this.fullName, info, appletName]), null);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (!this.haveNotifiedError) if ($I$(3).debugging) {
$I$(3).debug$S("syncCallback call error to " + syncCallback + ": " + e );
}this.haveNotifiedError=true;
} else {
throw e;
}
}
return info;
}, p$1);

Clazz.newMeth(C$, 'eval$S', function (strEval) {
var pt=strEval.indexOf$S("\u0001");
if (pt >= 0) return p$1.sendScript$S$S$Z$Z.apply(this, [strEval.substring$I(pt + 1), strEval.substring$I$I(0, pt), false, false]);
if (!this.haveDocumentAccess) return "NO EVAL ALLOWED";
if (this.callbacks.get$O($I$(7).EVAL) != null ) {
this.notifyCallback$org_jmol_c_CBK$OA($I$(7).EVAL, Clazz.array(java.lang.Object, -1, [null, strEval]));
return "";
}return this.doEval$S(strEval);
});

Clazz.newMeth(C$, 'functionXY$S$I$I', function (functionName, nX, nY) {
return this.doFunctionXY$S$I$I(functionName, nX, nY);
});

Clazz.newMeth(C$, 'functionXYZ$S$I$I$I', function (functionName, nX, nY, nZ) {
return this.doFunctionXYZ$S$I$I$I(functionName, nX, nY, nZ);
});

Clazz.newMeth(C$, 'createImage$S$S$O$I', function (fileName, type, text_or_bytes, quality) {
return null;
});

Clazz.newMeth(C$, 'getRegistryInfo$', function () {
C$.checkIn$S$O(null, null);
return C$.htRegistry;
});

Clazz.newMeth(C$, 'showUrl$S', function (urlString) {
if ($I$(3).debugging) $I$(3).debug$S("showUrl(" + urlString + ")" );
if (urlString != null  && urlString.length$() > 0 ) try {
this.doShowDocument$java_net_URL(Clazz.new_($I$(11).c$$java_net_URL$S$java_net_URLStreamHandler,[null, urlString, null]));
} catch (mue) {
if (Clazz.exceptionOf(mue,"java.net.MalformedURLException")){
p$1.consoleMessage$S.apply(this, ["Malformed URL:" + urlString]);
} else {
throw mue;
}
}
});

Clazz.newMeth(C$, 'resizeInnerPanel$S', function (data) {
return Clazz.array(Integer.TYPE, -1, [this.viewer.getScreenWidth$(), this.viewer.getScreenHeight$()]);
});

Clazz.newMeth(C$, 'checkIn$S$O', function (name, applet) {
if (name != null ) {
$I$(3).info$S("AppletRegistry.checkIn(" + name + ")" );
C$.htRegistry.put$TK$TV(name, applet);
}if ($I$(3).debugging) {
for (var entry, $entry = C$.htRegistry.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var theApplet=entry.getKey$();
$I$(3).debug$S(theApplet + " " + entry.getValue$() );
}
}}, 1);

Clazz.newMeth(C$, 'checkOut$S', function (name) {
C$.htRegistry.remove$O(name);
}, 1);

Clazz.newMeth(C$, 'findApplets$S$S$S$javajs_util_Lst', function (appletName, mySyncId, excludeName, apps) {
if (appletName != null  && appletName.indexOf$S(",") >= 0 ) {
var names=$I$(2).split$S$S(appletName, ",");
for (var i=0; i < names.length; i++) C$.findApplets$S$S$S$javajs_util_Lst(names[i], mySyncId, excludeName, apps);

return;
}var ext="__" + mySyncId + "__" ;
if (appletName == null  || appletName.equals$O("*")  || appletName.equals$O(">") ) {
for (var appletName2, $appletName2 = C$.htRegistry.keySet$().iterator$(); $appletName2.hasNext$()&&((appletName2=($appletName2.next$())),1);) {
if (!appletName2.equals$O(excludeName) && appletName2.indexOf$S(ext) > 0 ) {
apps.addLast$TV(appletName2);
}}
return;
}if (excludeName.indexOf$S("_object") >= 0 && appletName.indexOf$S("_object") < 0 ) appletName += "_object";
if (appletName.indexOf$S("__") < 0) appletName += ext;
if (!C$.htRegistry.containsKey$O(appletName)) appletName="jmolApplet" + appletName;
if (!appletName.equals$O(excludeName) && C$.htRegistry.containsKey$O(appletName) ) {
apps.addLast$TV(appletName);
}}, 1);

Clazz.newMeth(C$, 'notifyAudioEnded$O', function (htParams) {
this.viewer.sm.notifyAudioStatus$java_util_Map(htParams);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
