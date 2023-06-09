(function(){var P$=Clazz.newPackage("org.jmol.thread"),I$=[[0,'org.jmol.util.Logger']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JmolThread", null, 'Thread');
C$.threadIndex=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.$name=null;
this.vwr=null;
this.eval=null;
this.sc=null;
this.haveReference=false;
this.hoverEnabled=false;
this.startTime=0;
this.targetTime=0;
this.lastRepaintTime=0;
this.currentTime=0;
this.sleepTime=0;
this.isJS=false;
this.stopped=false;
this.isReset=false;
this.useTimeout=false;
this.junk=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.$name="JmolThread";
this.stopped=false;
this.useTimeout=true;
}, 1);

Clazz.newMeth(C$, 'setManager$O$org_jmol_viewer_Viewer$O', function (manager, vwr, params) {
return 0;
});

Clazz.newMeth(C$, 'setViewer$org_jmol_viewer_Viewer$S', function (vwr, name) {
this.setName$S(name);
this.$name=name + "_" + (++C$.threadIndex) ;
this.vwr=vwr;
this.isJS=vwr.isSingleThreaded;
});

Clazz.newMeth(C$, 'setEval$org_jmol_api_JmolScriptEvaluator', function (eval) {
this.eval=eval;
this.sc=this.vwr.getEvalContextAndHoldQueue$org_jmol_api_JmolScriptEvaluator(eval);
if (this.sc != null ) this.useTimeout=eval.getAllowJSThreads$();
});

Clazz.newMeth(C$, 'resumeEval$', function () {
if (this.eval == null  || !this.isJS && !this.vwr.testAsync   || !this.useTimeout ) return;
this.sc.mustResumeEval=!this.stopped;
var eval=this.eval;
var sc=this.sc;
this.eval=null;
this.sc=null;
{
setTimeout(function() { eval.resumeEval$O(sc); }, 1);
}
});

Clazz.newMeth(C$, 'start$', function () {
if (this.isJS) {
this.run$();
} else {
C$.superclazz.prototype.start$.apply(this, []);
}});

Clazz.newMeth(C$, 'run$', function () {
this.startTime=System.currentTimeMillis$();
try {
this.run1$I(-1);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InterruptedException")){
var e = e$$;
{
if ($I$(1).debugging && !(Clazz.instanceOf(this, "org.jmol.thread.HoverWatcherThread")) ) this.oops$Exception(e);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
this.oops$Exception(e);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'oops$Exception', function (e) {
$I$(1).debug$S(this.$name + " exception " + e );
e.printStackTrace$();
this.vwr.queueOnHold=false;
});

Clazz.newMeth(C$, 'runSleep$I$I', function (millis, runPtr) {
if (this.isJS && !this.useTimeout ) {
return true;
}{
var me = this;
setTimeout(function(){me.run1$I(runPtr)}, Math.max(millis, 0));
return false;
}
});

Clazz.newMeth(C$, 'interrupt$', function () {
this.stopped=true;
this.vwr.startHoverWatcher$Z(true);
if (!this.isJS) C$.superclazz.prototype.interrupt$.apply(this, []);
});

Clazz.newMeth(C$, 'checkInterrupted$org_jmol_thread_JmolThread', function (ref) {
if (this.haveReference && (ref == null  || !ref.$name.equals$O(this.$name) ) ) return true;
{
return this.stopped;
}
});

Clazz.newMeth(C$, 'reset$', function () {
this.isReset=true;
this.interrupt$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
