(function(){var P$=Clazz.newPackage("jalview.workers"),I$=[[0,'java.util.Collections','java.util.ArrayList','java.util.Hashtable','java.util.HashSet','Thread','jalview.api.AlignCalcWorkerI']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AlignCalcManager", null, null, 'jalview.api.AlignCalcManagerI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.restartable=null;
this.blackList=null;
this.inProgress=null;
this.updating=null;
this.canUpdate=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.restartable=$I$(1).synchronizedList$java_util_List(Clazz.new_($I$(2)));
this.blackList=$I$(1).synchronizedList$java_util_List(Clazz.new_($I$(2)));
this.inProgress=$I$(1).synchronizedList$java_util_List(Clazz.new_($I$(2)));
this.updating=$I$(1).synchronizedMap$java_util_Map(Clazz.new_($I$(3)));
this.canUpdate=Clazz.new_($I$(4));
}, 1);

Clazz.newMeth(C$, 'notifyStart$jalview_api_AlignCalcWorkerI', function (worker) {
{
var upd=this.updating.get$O(worker.getClass$());
if (upd == null ) {
this.updating.put$TK$TV(worker.getClass$(), upd=$I$(1).synchronizedList$java_util_List(Clazz.new_($I$(2))));
}{
upd.add$TE(worker);
}}});

Clazz.newMeth(C$, 'isPending$jalview_api_AlignCalcWorkerI', function (workingClass) {
var upd;
{
upd=this.updating.get$O(workingClass.getClass$());
if (upd == null ) {
return false;
}{
if (upd.size$() > 1) {
return true;
}}return false;
}});

Clazz.newMeth(C$, 'notifyWorking$jalview_api_AlignCalcWorkerI', function (worker) {
{
if (this.inProgress.contains$O(worker)) {
return false;
} else {
this.inProgress.add$TE(worker);
}}return true;
});

Clazz.newMeth(C$, 'workerComplete$jalview_api_AlignCalcWorkerI', function (worker) {
{
this.inProgress.remove$O(worker);
var upd=this.updating.get$O(worker.getClass$());
if (upd != null ) {
{
upd.remove$O(worker);
}this.canUpdate.add$TE(worker);
}}});

Clazz.newMeth(C$, 'disableWorker$jalview_api_AlignCalcWorkerI', function (worker) {
{
this.blackList.add$TE(worker.getClass$());
}});

Clazz.newMeth(C$, 'isDisabled$jalview_api_AlignCalcWorkerI', function (worker) {
{
return this.blackList.contains$O(worker.getClass$());
}});

Clazz.newMeth(C$, 'startWorker$jalview_api_AlignCalcWorkerI', function (worker) {
if (!this.isDisabled$jalview_api_AlignCalcWorkerI(worker)) {
var tw=Clazz.new_($I$(5).c$$Runnable,[worker]);
tw.setName$S(worker.getClass$().toString());
tw.start$();
}});

Clazz.newMeth(C$, 'isWorking$jalview_api_AlignCalcWorkerI', function (worker) {
{
return worker != null  && this.inProgress.contains$O(worker) ;
}});

Clazz.newMeth(C$, 'isWorking$', function () {
{
return this.inProgress.size$() > 0;
}});

Clazz.newMeth(C$, 'registerWorker$jalview_api_AlignCalcWorkerI', function (worker) {
{
if (!this.restartable.contains$O(worker)) {
this.restartable.add$TE(worker);
}this.startWorker$jalview_api_AlignCalcWorkerI(worker);
}});

Clazz.newMeth(C$, 'restartWorkers$', function () {
{
for (var worker, $worker = this.restartable.iterator$(); $worker.hasNext$()&&((worker=($worker.next$())),1);) {
this.startWorker$jalview_api_AlignCalcWorkerI(worker);
}
}});

Clazz.newMeth(C$, 'workingInvolvedWith$jalview_datamodel_AlignmentAnnotation', function (alignmentAnnotation) {
{
for (var worker, $worker = this.inProgress.iterator$(); $worker.hasNext$()&&((worker=($worker.next$())),1);) {
if (worker.involves$jalview_datamodel_AlignmentAnnotation(alignmentAnnotation)) {
return true;
}}
}{
for (var workers, $workers = this.updating.values$().iterator$(); $workers.hasNext$()&&((workers=($workers.next$())),1);) {
for (var worker, $worker = workers.iterator$(); $worker.hasNext$()&&((worker=($worker.next$())),1);) {
if (worker.involves$jalview_datamodel_AlignmentAnnotation(alignmentAnnotation)) {
return true;
}}
}
}return false;
});

Clazz.newMeth(C$, 'updateAnnotationFor$Class', function (workerClass) {
var workers;
{
workers=this.canUpdate.toArray$TTA(Clazz.array($I$(6), [0]));
}for (var worker, $worker = 0, $$worker = workers; $worker<$$worker.length&&((worker=($$worker[$worker])),1);$worker++) {
if (workerClass.equals$O(worker.getClass$())) {
worker.updateAnnotation$();
}}
});

Clazz.newMeth(C$, 'getRegisteredWorkersOfClass$Class', function (workerClass) {
var workingClass=Clazz.new_($I$(2));
{
for (var worker, $worker = this.canUpdate.iterator$(); $worker.hasNext$()&&((worker=($worker.next$())),1);) {
if (workerClass.equals$O(worker.getClass$())) {
workingClass.add$TE(worker);
}}
}return (workingClass.size$() == 0) ? null : workingClass;
});

Clazz.newMeth(C$, 'enableWorker$jalview_api_AlignCalcWorkerI', function (worker) {
{
this.blackList.remove$O(worker.getClass$());
}});

Clazz.newMeth(C$, 'removeRegisteredWorkersOfClass$Class', function (typeToRemove) {
var removable=Clazz.new_($I$(2));
var toremovannot=Clazz.new_($I$(4));
{
for (var worker, $worker = this.restartable.iterator$(); $worker.hasNext$()&&((worker=($worker.next$())),1);) {
if (typeToRemove.equals$O(worker.getClass$())) {
removable.add$TE(worker);
toremovannot.add$TE(worker);
}}
this.restartable.removeAll$java_util_Collection(removable);
}{
for (var worker, $worker = this.canUpdate.iterator$(); $worker.hasNext$()&&((worker=($worker.next$())),1);) {
if (typeToRemove.equals$O(worker.getClass$())) {
removable.add$TE(worker);
toremovannot.add$TE(worker);
}}
this.canUpdate.removeAll$java_util_Collection(removable);
}});

Clazz.newMeth(C$, 'removeWorkerForAnnotation$jalview_datamodel_AlignmentAnnotation', function (ann) {
var toRemove=Clazz.new_($I$(2));
for (var worker, $worker = this.restartable.iterator$(); $worker.hasNext$()&&((worker=($worker.next$())),1);) {
if (worker.involves$jalview_datamodel_AlignmentAnnotation(ann)) {
if (worker.isDeletable$()) {
toRemove.add$TE(worker);
}}}
for (var worker, $worker = toRemove.iterator$(); $worker.hasNext$()&&((worker=($worker.next$())),1);) {
this.restartable.remove$O(worker);
this.blackList.remove$O(worker.getClass$());
this.inProgress.remove$O(worker);
this.canUpdate.remove$O(worker);
{
var upd=this.updating.get$O(worker.getClass$());
if (upd != null ) {
upd.remove$O(worker);
}}}
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
