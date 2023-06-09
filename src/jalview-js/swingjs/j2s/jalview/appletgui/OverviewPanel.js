(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'jalview.viewmodel.OverviewDimensionsShowHidden','jalview.appletgui.OverviewCanvas','java.awt.BorderLayout','java.awt.Dimension','java.awt.event.ComponentAdapter','java.awt.Cursor','jalview.util.Platform','javax.swing.SwingUtilities','Thread','java.awt.PopupMenu','java.awt.CheckboxMenuItem','jalview.util.MessageManager','jalview.viewmodel.OverviewDimensionsHideHidden']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "OverviewPanel", null, 'java.awt.Panel', ['Runnable', 'java.awt.event.MouseMotionListener', 'java.awt.event.MouseListener', 'jalview.viewmodel.ViewportListenerI']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.od=null;
this.oviewCanvas=null;
this.av=null;
this.ap=null;
this.showHidden=false;
this.updateRunning=false;
this.draggingBox=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.showHidden=true;
this.updateRunning=false;
this.draggingBox=false;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignmentPanel', function (alPanel) {
Clazz.super_(C$, this,1);
this.av=alPanel.av;
this.ap=alPanel;
this.setLayout$java_awt_LayoutManager(null);
this.od=Clazz.new_($I$(1).c$$jalview_viewmodel_ViewportRanges$Z,[this.av.getRanges$(), (this.av.isShowAnnotation$() && this.av.getSequenceConsensusHash$() != null  )]);
this.oviewCanvas=Clazz.new_($I$(2).c$$jalview_viewmodel_OverviewDimensions$jalview_appletgui_AlignViewport,[this.od, this.av]);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3)));
this.add$java_awt_Component$O(this.oviewCanvas, "Center");
this.setSize$java_awt_Dimension(Clazz.new_($I$(4).c$$I$I,[this.od.getWidth$(), this.od.getHeight$()]));
this.av.getRanges$().addPropertyChangeListener$jalview_viewmodel_ViewportListenerI(this);
this.addComponentListener$java_awt_event_ComponentListener(((P$.OverviewPanel$1||
(function(){var C$=Clazz.newClass(P$, "OverviewPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ComponentAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent', function (evt) {
if ((this.b$['java.awt.Component'].getWidth$.apply(this.b$['java.awt.Component'], []) != this.b$['jalview.appletgui.OverviewPanel'].od.getWidth$()) || (this.b$['java.awt.Component'].getHeight$.apply(this.b$['java.awt.Component'], []) != (this.b$['jalview.appletgui.OverviewPanel'].od.getHeight$())) ) {
this.b$['jalview.appletgui.OverviewPanel'].updateOverviewImage$.apply(this.b$['jalview.appletgui.OverviewPanel'], []);
}});
})()
), Clazz.new_($I$(5), [this, null],P$.OverviewPanel$1)));
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
this.addMouseListener$java_awt_event_MouseListener(this);
this.updateOverviewImage$();
}, 1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (evt) {
if ((evt.getModifiers$() & 4) == 4) {
p$1.showPopupMenu$java_awt_event_MouseEvent.apply(this, [evt]);
}});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (evt) {
if (this.od.isPositionInBox$I$I(evt.getX$(), evt.getY$())) {
this.getParent$().setCursor$java_awt_Cursor($I$(6).getPredefinedCursor$I(12));
} else {
this.getParent$().setCursor$java_awt_Cursor($I$(6).getPredefinedCursor$I(1));
}});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (evt) {
if ((evt.getModifiers$() & 4) == 4) {
if (!$I$(7).isMac$()) {
p$1.showPopupMenu$java_awt_event_MouseEvent.apply(this, [evt]);
}} else {
if (!this.od.isPositionInBox$I$I(evt.getX$(), evt.getY$())) {
this.draggingBox=false;
this.setCursor$java_awt_Cursor($I$(6).getPredefinedCursor$I(13));
this.od.updateViewportFromMouse$I$I$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns(evt.getX$(), evt.getY$(), this.av.getAlignment$().getHiddenSequences$(), this.av.getAlignment$().getHiddenColumns$());
this.getParent$().setCursor$java_awt_Cursor($I$(6).getPredefinedCursor$I(12));
} else {
this.draggingBox=true;
this.od.setDragPoint$I$I$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns(evt.getX$(), evt.getY$(), this.av.getAlignment$().getHiddenSequences$(), this.av.getAlignment$().getHiddenColumns$());
}}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
this.draggingBox=false;
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (evt) {
if ($I$(7).isWinRightButton$java_awt_event_MouseEvent(evt)) {
p$1.showPopupMenu$java_awt_event_MouseEvent.apply(this, [evt]);
return;
}if ($I$(8).isRightMouseButton$java_awt_event_MouseEvent(evt)) {
return;
}if (this.draggingBox) {
this.od.adjustViewportFromMouse$I$I$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns(evt.getX$(), evt.getY$(), this.av.getAlignment$().getHiddenSequences$(), this.av.getAlignment$().getHiddenColumns$());
} else {
this.od.updateViewportFromMouse$I$I$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns(evt.getX$(), evt.getY$(), this.av.getAlignment$().getHiddenSequences$(), this.av.getAlignment$().getHiddenColumns$());
}this.ap.paintAlignment$Z$Z(false, false);
});

Clazz.newMeth(C$, 'updateOverviewImage$', function () {
if (this.oviewCanvas == null ) {
return;
}if ((this.getSize$().width > 0) && (this.getSize$().height > 0) ) {
this.od.setWidth$I(this.getSize$().width);
this.od.setHeight$I(this.getSize$().height);
}this.setSize$java_awt_Dimension(Clazz.new_($I$(4).c$$I$I,[this.od.getWidth$(), this.od.getHeight$()]));
{
if (this.updateRunning) {
this.oviewCanvas.restartDraw$();
return;
}this.updateRunning=true;
}var thread=Clazz.new_($I$(9).c$$Runnable,[this]);
thread.start$();
this.repaint$();
this.updateRunning=false;
});

Clazz.newMeth(C$, 'run$', function () {
this.oviewCanvas.draw$Z$Z$jalview_appletgui_FeatureRenderer(this.av.isShowSequenceFeatures$(), (this.av.isShowAnnotation$() && this.av.getAlignmentConservationAnnotation$() != null  ), this.ap.seqPanel.seqCanvas.getFeatureRenderer$());
p$1.setBoxPosition.apply(this, []);
});

Clazz.newMeth(C$, 'setBoxPosition', function () {
this.od.setBoxPosition$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns(this.av.getAlignment$().getHiddenSequences$(), this.av.getAlignment$().getHiddenColumns$());
this.repaint$();
}, p$1);

Clazz.newMeth(C$, 'showPopupMenu$java_awt_event_MouseEvent', function (e) {
var popup=Clazz.new_($I$(10));
var menuListener=((P$.OverviewPanel$2||
(function(){var C$=Clazz.newClass(P$, "OverviewPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
p$1.toggleHiddenColumns.apply(this.b$['jalview.appletgui.OverviewPanel'], []);
});
})()
), Clazz.new_(P$.OverviewPanel$2.$init$, [this, null]));
var item=Clazz.new_($I$(11).c$$S,[$I$(12).getString$S("label.togglehidden")]);
item.setState$Z(this.showHidden);
popup.add$java_awt_MenuItem(item);
item.addItemListener$java_awt_event_ItemListener(menuListener);
this.add$java_awt_PopupMenu(popup);
popup.show$java_awt_Component$I$I(this, e.getX$(), e.getY$());
}, p$1);

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
p$1.setBoxPosition.apply(this, []);
});

Clazz.newMeth(C$, 'toggleHiddenColumns', function () {
if (this.showHidden) {
this.showHidden=false;
this.od=Clazz.new_($I$(13).c$$jalview_viewmodel_ViewportRanges$Z,[this.av.getRanges$(), (this.av.isShowAnnotation$() && this.av.getAlignmentConservationAnnotation$() != null  )]);
} else {
this.showHidden=true;
this.od=Clazz.new_($I$(1).c$$jalview_viewmodel_ViewportRanges$Z,[this.av.getRanges$(), (this.av.isShowAnnotation$() && this.av.getAlignmentConservationAnnotation$() != null  )]);
}this.oviewCanvas.resetOviewDims$jalview_viewmodel_OverviewDimensions(this.od);
this.updateOverviewImage$();
}, p$1);

Clazz.newMeth(C$, 'dispose$', function () {
try {
this.av.getRanges$().removePropertyChangeListener$jalview_viewmodel_ViewportListenerI(this);
var parent=this.getParent$();
parent.dispose$();
parent.setVisible$Z(false);
} finally {
this.av=null;
if (this.oviewCanvas != null ) {
this.oviewCanvas.dispose$();
}this.oviewCanvas=null;
this.ap=null;
this.od=null;
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
