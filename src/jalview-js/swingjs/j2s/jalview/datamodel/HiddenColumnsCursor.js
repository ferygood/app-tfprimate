(function(){var P$=Clazz.newPackage("jalview.datamodel"),p$1={},I$=[[0,'java.util.ArrayList','jalview.datamodel.HiddenCursorPosition']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "HiddenColumnsCursor");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.firstColumn=0;
this.hiddenColumns=null;
this.cursorPos=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.hiddenColumns=Clazz.new_($I$(1));
this.cursorPos=Clazz.new_($I$(2).c$$I$I,[0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (hiddenCols) {
C$.$init$.apply(this);
p$1.resetCursor$java_util_List$I$I.apply(this, [hiddenCols, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List$I$I', function (hiddenCols, index, hiddencount) {
C$.$init$.apply(this);
p$1.resetCursor$java_util_List$I$I.apply(this, [hiddenCols, index, hiddencount]);
}, 1);

Clazz.newMeth(C$, 'resetCursor$java_util_List$I$I', function (hiddenCols, index, hiddencount) {
this.hiddenColumns=hiddenCols;
if (!hiddenCols.isEmpty$()) {
this.firstColumn=this.hiddenColumns.get$I(0)[0];
this.cursorPos=Clazz.new_($I$(2).c$$I$I,[index, hiddencount]);
}}, p$1);

Clazz.newMeth(C$, 'findRegionForColumn$I$Z', function (column, useVisible) {
if (this.hiddenColumns.isEmpty$()) {
return null;
}var offset=(useVisible ? 1 : 0);
var pos=this.cursorPos;
var index=pos.getRegionIndex$();
var hiddenCount=pos.getHiddenSoFar$();
if (column < this.firstColumn) {
pos=Clazz.new_($I$(2).c$$I$I,[0, 0]);
} else if ((index < this.hiddenColumns.size$()) && (this.hiddenColumns.get$I(index)[0] <= column + offset * hiddenCount) ) {
pos=p$1.searchForward$jalview_datamodel_HiddenCursorPosition$I$Z.apply(this, [pos, column, useVisible]);
} else {
pos=p$1.searchBackward$jalview_datamodel_HiddenCursorPosition$I$Z.apply(this, [pos, column, useVisible]);
}this.cursorPos=pos;
return pos;
});

Clazz.newMeth(C$, 'searchForward$jalview_datamodel_HiddenCursorPosition$I$Z', function (pos, column, useVisible) {
var p=pos;
if (useVisible) {
while ((p.getRegionIndex$() < this.hiddenColumns.size$()) && this.hiddenColumns.get$I(p.getRegionIndex$())[0] <= column + p.getHiddenSoFar$() ){
p=p$1.stepForward$jalview_datamodel_HiddenCursorPosition.apply(this, [p]);
}
} else {
while ((p.getRegionIndex$() < this.hiddenColumns.size$()) && this.hiddenColumns.get$I(p.getRegionIndex$())[1] < column ){
p=p$1.stepForward$jalview_datamodel_HiddenCursorPosition.apply(this, [p]);
}
}return p;
}, p$1);

Clazz.newMeth(C$, 'stepForward$jalview_datamodel_HiddenCursorPosition', function (p) {
var region=this.hiddenColumns.get$I(p.getRegionIndex$());
return Clazz.new_($I$(2).c$$I$I,[p.getRegionIndex$() + 1, p.getHiddenSoFar$() + region[1] - region[0] + 1]);
}, p$1);

Clazz.newMeth(C$, 'searchBackward$jalview_datamodel_HiddenCursorPosition$I$Z', function (p, column, useVisible) {
var i=p.getRegionIndex$();
var h=p.getHiddenSoFar$();
var offset=(useVisible ? 1 : 0);
while ((i > 0) && (this.hiddenColumns.get$I(i - 1)[1] >= column + offset * h) ){
i--;
var region=this.hiddenColumns.get$I(i);
h-=region[1] - region[0] + 1;
}
return Clazz.new_($I$(2).c$$I$I,[i, h]);
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
