(function(){var P$=Clazz.newPackage("jalview.ws"),I$=[[0,'StringBuffer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JobStateSummary");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.running=0;
this.queuing=0;
this.finished=0;
this.error=0;
this.serror=0;
this.cancelled=0;
this.results=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.running=0;
this.queuing=0;
this.finished=0;
this.error=0;
this.serror=0;
this.cancelled=0;
this.results=0;
}, 1);

Clazz.newMeth(C$, 'updateJobPanelState$jalview_gui_WebserviceInfo$S$jalview_ws_AWsJob', function (wsInfo, OutputHeader, j) {
if (j.cancelled) {
this.cancelled++;
j.subjobComplete=true;
wsInfo.setStatus$I$I(j.jobnum, 3);
return;
}if (j.submitted) {
var progheader="";
if (j.isRunning$()) {
this.running++;
wsInfo.setStatus$I$I(j.jobnum, 1);
} else if (j.isQueued$()) {
this.queuing++;
wsInfo.setStatus$I$I(j.jobnum, 0);
} else if (j.isFinished$()) {
this.finished++;
j.subjobComplete=true;
if (j.hasResults$()) {
this.results++;
}wsInfo.setStatus$I$I(j.jobnum, 2);
} else if (j.isFailed$()) {
progheader += "Job failed.\n";
j.subjobComplete=true;
wsInfo.setStatus$I$I(j.jobnum, 4);
this.error++;
} else if (j.isServerError$()) {
this.serror++;
j.subjobComplete=true;
wsInfo.setStatus$I$I(j.jobnum, 5);
} else if (j.isBroken$()) {
progheader += "Job was broken.\n";
this.error++;
j.subjobComplete=true;
wsInfo.setStatus$I$I(j.jobnum, 4);
}var output=Clazz.new_($I$(1));
if (OutputHeader != null ) {
output.append$S(OutputHeader);
}if (progheader != null ) {
output.append$S(progheader);
}if (j.hasStatus$()) {
var stat=j.getStatus$();
if (stat != null ) {
output.append$S(stat);
}}wsInfo.setProgressText$I$S(j.jobnum, output.toString());
} else {
if (j.submitted && j.subjobComplete ) {
if (j.allowedServerExceptions == 0) {
this.serror++;
} else if (!j.hasResults$()) {
this.error++;
}}}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
