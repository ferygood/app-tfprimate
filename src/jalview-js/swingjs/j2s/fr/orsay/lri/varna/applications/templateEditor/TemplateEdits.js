(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.templateEditor"),I$=[[0,['java.awt.geom.Point2D','.Double']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TemplateEdits", function(){
Clazz.newInstance(this, arguments,0,C$);
});

Clazz.newMeth(C$, '$init$', function () {
}, 1);
;
(function(){var C$=Clazz.newClass(P$.TemplateEdits, "ElementAddTemplateEdit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._h=null;
this._p=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_TemplatePanel', function (h, p) {
Clazz.super_(C$, this,1);
this._h=h;
this._p=p;
}, 1);

Clazz.newMeth(C$, 'undo$', function () {
this._p.removeElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement(this._h);
this._p.repaint$();
});

Clazz.newMeth(C$, 'redo$', function () {
this._p.addElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement(this._h);
this._p.repaint$();
});

Clazz.newMeth(C$, 'canUndo$', function () {
return true;
});

Clazz.newMeth(C$, 'canRedo$', function () {
return true;
});

Clazz.newMeth(C$, 'getPresentationName$', function () {
return "Graphical element added";
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.TemplateEdits, "ElementRemoveTemplateEdit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._h=null;
this._p=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_TemplatePanel', function (h, p) {
Clazz.super_(C$, this,1);
this._h=h;
this._p=p;
}, 1);

Clazz.newMeth(C$, 'undo$', function () {
this._p.addElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement(this._h);
this._p.repaint$();
});

Clazz.newMeth(C$, 'redo$', function () {
this._p.removeElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement(this._h);
this._p.repaint$();
});

Clazz.newMeth(C$, 'canUndo$', function () {
return true;
});

Clazz.newMeth(C$, 'canRedo$', function () {
return true;
});

Clazz.newMeth(C$, 'getPresentationName$', function () {
return "Graphical element removed";
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.TemplateEdits, "ElementAttachTemplateEdit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._c=null;
this._p=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_applications_templateEditor_Connection$fr_orsay_lri_varna_applications_templateEditor_TemplatePanel', function (c, p) {
Clazz.super_(C$, this,1);
this._c=c;
this._p=p;
}, 1);

Clazz.newMeth(C$, 'undo$', function () {
this._p.removeConnection$fr_orsay_lri_varna_applications_templateEditor_Connection(this._c);
this._p.repaint$();
});

Clazz.newMeth(C$, 'redo$', function () {
this._c=this._p.addConnection$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(this._c._h1, this._c._edge1, this._c._h2, this._c._edge2);
this._p.repaint$();
});

Clazz.newMeth(C$, 'canUndo$', function () {
return true;
});

Clazz.newMeth(C$, 'canRedo$', function () {
return true;
});

Clazz.newMeth(C$, 'getPresentationName$', function () {
return "Graphical elements attached";
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.TemplateEdits, "ElementDetachTemplateEdit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._c=null;
this._p=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_applications_templateEditor_Connection$fr_orsay_lri_varna_applications_templateEditor_TemplatePanel', function (c, p) {
Clazz.super_(C$, this,1);
this._c=c;
this._p=p;
}, 1);

Clazz.newMeth(C$, 'undo$', function () {
this._c=this._p.addConnection$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(this._c._h1, this._c._edge1, this._c._h2, this._c._edge2);
this._p.repaint$();
});

Clazz.newMeth(C$, 'redo$', function () {
this._p.removeConnection$fr_orsay_lri_varna_applications_templateEditor_Connection(this._c);
this._p.repaint$();
});

Clazz.newMeth(C$, 'canUndo$', function () {
return true;
});

Clazz.newMeth(C$, 'canRedo$', function () {
return true;
});

Clazz.newMeth(C$, 'getPresentationName$', function () {
return "Graphical elements detached";
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.TemplateEdits, "ElementEdgeMoveTemplateEdit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._ur=null;
this._edge=null;
this._ox=0;
this._oy=0;
this._nx=0;
this._ny=0;
this._p=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$D$D$fr_orsay_lri_varna_applications_templateEditor_TemplatePanel', function (ur, edge, nx, ny, p) {
Clazz.super_(C$, this,1);
this._ur=ur;
this._edge=edge;
this._ox=ur.getEdgePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(edge).x;
this._oy=ur.getEdgePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(edge).y;
this._nx=nx;
this._ny=ny;
this._p=p;
}, 1);

Clazz.newMeth(C$, 'undo$', function () {
this._ur.setEdgePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$java_awt_geom_Point2D_Double(this._edge, Clazz.new_($I$(1).c$$D$D,[this._ox, this._oy]));
this._p.repaint$();
});

Clazz.newMeth(C$, 'redo$', function () {
this._ur.setEdgePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$java_awt_geom_Point2D_Double(this._edge, Clazz.new_($I$(1).c$$D$D,[this._nx, this._ny]));
this._p.repaint$();
});

Clazz.newMeth(C$, 'canUndo$', function () {
return true;
});

Clazz.newMeth(C$, 'canRedo$', function () {
return true;
});

Clazz.newMeth(C$, 'getPresentationName$', function () {
return "Edge moved " + this._edge;
});

Clazz.newMeth(C$, 'addEdit$javax_swing_undo_UndoableEdit', function (anEdit) {
if (Clazz.instanceOf(anEdit, "fr.orsay.lri.varna.applications.templateEditor.TemplateEdits.ElementEdgeMoveTemplateEdit")) {
var e=anEdit;
if (e._edge === this._edge ) {
var po1=Clazz.new_($I$(1).c$$D$D,[this._ox, this._oy]);
var pn1=Clazz.new_($I$(1).c$$D$D,[this._nx, this._ny]);
var po2=Clazz.new_($I$(1).c$$D$D,[e._ox, e._oy]);
var pn2=Clazz.new_($I$(1).c$$D$D,[e._nx, e._ny]);
if ((this._ur === e._ur ) && (pn1.equals$O(po2)) && (po1.distance$java_awt_geom_Point2D(pn2) < 15.0 )  ) {
this._nx=e._nx;
this._ny=e._ny;
return true;
}}}return false;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.TemplateEdits, "HelixFlipTemplateEdit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._h=null;
this._p=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_applications_templateEditor_Helix$fr_orsay_lri_varna_applications_templateEditor_TemplatePanel', function (h, p) {
Clazz.super_(C$, this,1);
this._h=h;
this._p=p;
}, 1);

Clazz.newMeth(C$, 'undo$', function () {
this._h.toggleFlipped$();
this._p.repaint$();
});

Clazz.newMeth(C$, 'redo$', function () {
this._h.toggleFlipped$();
this._p.repaint$();
});

Clazz.newMeth(C$, 'canUndo$', function () {
return true;
});

Clazz.newMeth(C$, 'canRedo$', function () {
return true;
});

Clazz.newMeth(C$, 'getPresentationName$', function () {
return "Helix flipped ";
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:43 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
