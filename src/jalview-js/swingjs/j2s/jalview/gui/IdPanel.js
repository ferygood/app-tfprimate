(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'Thread','jalview.gui.IdCanvas','jalview.io.SequenceAnnotationReport','java.awt.BorderLayout','javax.swing.ToolTipManager','jalview.gui.AnnotationLabels','StringBuilder','jalview.gui.JvSwingUtils','javax.swing.SwingUtilities','jalview.gui.Preferences','jalview.util.BrowserLauncher','jalview.gui.JvOptionPane','jalview.gui.Desktop','jalview.util.MessageManager',['jalview.gui.IdPanel','.ScrollThread'],'jalview.util.Platform','javax.swing.Timer','jalview.datamodel.SequenceGroup','jalview.gui.PopupMenu','javax.swing.JPopupMenu','jalview.gui.PaintRefresher']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "IdPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener', 'java.awt.event.MouseWheelListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.idCanvas=null;
this.av=null;
this.alignPanel=null;
this.scrollThread=null;
this.linkImageURL=null;
this.offy=0;
this.lastid=0;
this.mouseDragging=false;
this.seqAnnotReport=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.scrollThread=null;
this.lastid=-1;
this.mouseDragging=false;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignViewport$jalview_gui_AlignmentPanel', function (av, parent) {
Clazz.super_(C$, this,1);
this.av=av;
this.alignPanel=parent;
this.setIdCanvas$jalview_gui_IdCanvas(Clazz.new_($I$(2).c$$jalview_gui_AlignViewport,[av]));
this.linkImageURL=this.getClass$().getResource$S("/images/link.gif").toString();
this.seqAnnotReport=Clazz.new_($I$(3).c$$S,[this.linkImageURL]);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4)));
this.add$java_awt_Component$O(this.getIdCanvas$(), "Center");
this.addMouseListener$java_awt_event_MouseListener(this);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
this.addMouseWheelListener$java_awt_event_MouseWheelListener(this);
$I$(5).sharedInstance$().registerComponent$javax_swing_JComponent(this);
}, 1);

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (e) {
var sp=this.alignPanel.getSeqPanel$();
var pos=sp.findMousePosition$java_awt_event_MouseEvent(e);
if (pos.isOverAnnotation$()) {
var anns=this.av.getAlignment$().getAlignmentAnnotation$();
var annotation=anns[pos.annotationIndex];
this.setToolTipText$S($I$(6).getTooltip$jalview_datamodel_AlignmentAnnotation(annotation));
this.alignPanel.alignFrame.setStatus$S($I$(6).getStatusMessage$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AlignmentAnnotationA(annotation, anns));
} else {
var seq=Math.max(0, pos.seqIndex);
if (seq < this.av.getAlignment$().getHeight$()) {
var sequence=this.av.getAlignment$().getSequenceAt$I(seq);
var tip=Clazz.new_($I$(7).c$$I,[64]);
tip.append$S(sequence.getDisplayId$Z(true)).append$S(" ");
this.seqAnnotReport.createTooltipAnnotationReport$StringBuilder$jalview_datamodel_SequenceI$Z$Z$jalview_viewmodel_seqfeatures_FeatureRendererModel(tip, sequence, this.av.isShowDBRefs$(), this.av.isShowNPFeats$(), sp.seqCanvas.fr);
this.setToolTipText$S($I$(8).wrapTooltip$Z$S(true, tip.toString()));
var text=Clazz.new_($I$(7));
text.append$S("Sequence ").append$S(String.valueOf$I(seq + 1)).append$S(" ID: ").append$S(sequence.getName$());
this.alignPanel.alignFrame.setStatus$S(text.toString());
}}});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (e) {
this.mouseDragging=true;
var pos=this.alignPanel.getSeqPanel$().findMousePosition$java_awt_event_MouseEvent(e);
if (pos.isOverAnnotation$()) {
return;
}var seq=Math.max(0, pos.seqIndex);
if (seq < this.lastid) {
this.selectSeqs$I$I(this.lastid - 1, seq);
} else if (seq > this.lastid) {
this.selectSeqs$I$I(this.lastid + 1, seq);
}this.lastid=seq;
this.alignPanel.paintAlignment$Z$Z(false, false);
});

Clazz.newMeth(C$, ['mouseWheelMoved$java_awt_event_MouseWheelEvent','mouseWheelMoved$'], function (e) {
e.consume$();
var wheelRotation=e.getPreciseWheelRotation$();
if (wheelRotation > 0 ) {
if (e.isShiftDown$()) {
this.av.getRanges$().scrollRight$Z(true);
} else {
this.av.getRanges$().scrollUp$Z(false);
}} else if (wheelRotation < 0 ) {
if (e.isShiftDown$()) {
this.av.getRanges$().scrollRight$Z(false);
} else {
this.av.getRanges$().scrollUp$Z(true);
}}});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
if (e.getClickCount$() < 2 || $I$(9).isRightMouseButton$java_awt_event_MouseEvent(e) ) {
return;
}var pos=this.alignPanel.getSeqPanel$().findMousePosition$java_awt_event_MouseEvent(e);
var seq=pos.seqIndex;
if (pos.isOverAnnotation$() || seq < 0 ) {
return;
}var id=this.av.getAlignment$().getSequenceAt$I(seq).getName$();
var url=$I$(10).sequenceUrlLinks.getPrimaryUrl$S(id);
try {
$I$(11).openURL$S(url);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(12).showInternalMessageDialog$java_awt_Component$S$S$I($I$(13).desktop, $I$(14).getString$S("label.web_browser_not_found_unix"), $I$(14).getString$S("label.web_browser_not_found"), 2);
ex.printStackTrace$();
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
this.stopScrolling$();
});

Clazz.newMeth(C$, 'stopScrolling$', function () {
if (this.scrollThread != null ) {
this.scrollThread.stopScrolling$();
this.scrollThread=null;
}});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
if (this.av.getWrapAlignment$()) {
return;
}if (this.mouseDragging) {
var ranges=this.av.getRanges$();
if (e.getY$() < 0 && ranges.getStartSeq$() > 0 ) {
this.startScrolling$Z(true);
} else if (e.getY$() >= this.getHeight$() && ranges.getEndSeq$() <= this.av.getAlignment$().getHeight$() ) {
this.startScrolling$Z(false);
}}});

Clazz.newMeth(C$, 'startScrolling$Z', function (up) {
this.scrollThread=Clazz.new_($I$(15).c$$Z, [this, null, up]);
if ($I$(16).isJS$()) {
var t=Clazz.new_($I$(17).c$$I$java_awt_event_ActionListener,[20, ((P$.IdPanel$1||
(function(){var C$=Clazz.newClass(P$, "IdPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (this.b$['jalview.gui.IdPanel'].scrollThread != null ) {
this.b$['jalview.gui.IdPanel'].scrollThread.scrollOnce$();
}});
})()
), Clazz.new_(P$.IdPanel$1.$init$, [this, null]))]);
t.addActionListener$java_awt_event_ActionListener(((P$.IdPanel$2||
(function(){var C$=Clazz.newClass(P$, "IdPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (this.b$['jalview.gui.IdPanel'].scrollThread == null ) {
this.$finals$.t.stop$();
}});
})()
), Clazz.new_(P$.IdPanel$2.$init$, [this, {t: t}])));
t.start$();
} else 
{}
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
if (e.getClickCount$() == 2 && $I$(9).isLeftMouseButton$java_awt_event_MouseEvent(e) ) {
return;
}var pos=this.alignPanel.getSeqPanel$().findMousePosition$java_awt_event_MouseEvent(e);
if (e.isPopupTrigger$()) {
this.showPopupMenu$java_awt_event_MouseEvent$jalview_gui_SeqPanel_MousePos(e, pos);
return;
}if ($I$(16).isWinRightButton$java_awt_event_MouseEvent(e)) {
return;
}if ((this.av.getSelectionGroup$() == null ) || (!$I$(16).isControlDown$java_awt_event_MouseEvent(e) && !e.isShiftDown$() && this.av.getSelectionGroup$() != null   ) ) {
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(Clazz.new_($I$(18)));
this.av.getSelectionGroup$().setStartRes$I(0);
this.av.getSelectionGroup$().setEndRes$I(this.av.getAlignment$().getWidth$() - 1);
}if (e.isShiftDown$() && (this.lastid != -1) ) {
this.selectSeqs$I$I(this.lastid, pos.seqIndex);
} else {
this.selectSeq$I(pos.seqIndex);
}this.av.isSelectionGroupChanged$Z(true);
this.alignPanel.paintAlignment$Z$Z(false, false);
});

Clazz.newMeth(C$, 'showPopupMenu$java_awt_event_MouseEvent$jalview_gui_SeqPanel_MousePos', function (e, pos) {
if (pos.isOverAnnotation$()) {
this.showAnnotationMenu$java_awt_event_MouseEvent$jalview_gui_SeqPanel_MousePos(e, pos);
return;
}var sq=this.av.getAlignment$().getSequenceAt$I(pos.seqIndex);
var features=null;
if (sq != null ) {
var nlinks=$I$(10).sequenceUrlLinks.getLinksForMenu$();
features=sq.getFeatures$().getNonPositionalFeatures$SA([]);
for (var sf, $sf = features.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
if (sf.links != null ) {
nlinks.addAll$java_util_Collection(sf.links);
}}
}var pop=Clazz.new_($I$(19).c$$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceI$java_util_List$java_util_List,[this.alignPanel, sq, features, $I$(10).getGroupURLLinks$()]);
pop.show$java_awt_Component$I$I(this, e.getX$(), e.getY$());
});

Clazz.newMeth(C$, 'showAnnotationMenu$java_awt_event_MouseEvent$jalview_gui_SeqPanel_MousePos', function (e, pos) {
if (pos.annotationIndex == -1) {
return;
}var anns=this.av.getAlignment$().getAlignmentAnnotation$();
if (anns == null  || pos.annotationIndex >= anns.length ) {
return;
}var ann=anns[pos.annotationIndex];
if (!ann.label.contains$CharSequence("Consensus")) {
return;
}var pop=Clazz.new_($I$(20).c$$S,[$I$(14).getString$S("label.annotations")]);
$I$(6).addConsensusMenuOptions$jalview_gui_AlignmentPanel$jalview_datamodel_AlignmentAnnotation$javax_swing_JPopupMenu(this.alignPanel, ann, pop);
pop.show$java_awt_Component$I$I(this, e.getX$(), e.getY$());
});

Clazz.newMeth(C$, 'selectSeq$I', function (seq) {
this.lastid=seq;
var pickedSeq=this.av.getAlignment$().getSequenceAt$I(seq);
this.av.getSelectionGroup$().addOrRemove$jalview_datamodel_SequenceI$Z(pickedSeq, false);
});

Clazz.newMeth(C$, 'selectSeqs$I$I', function (start, end) {
if (this.av.getSelectionGroup$() == null ) {
return;
}if (end >= this.av.getAlignment$().getHeight$()) {
end=this.av.getAlignment$().getHeight$() - 1;
}this.lastid=start;
if (end < start) {
var tmp=start;
start=end;
end=tmp;
this.lastid=end;
}for (var i=start; i <= end; i++) {
this.av.getSelectionGroup$().addSequence$jalview_datamodel_SequenceI$Z(this.av.getAlignment$().getSequenceAt$I(i), false);
}
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
if (this.scrollThread != null ) {
this.stopScrolling$();
}var pos=this.alignPanel.getSeqPanel$().findMousePosition$java_awt_event_MouseEvent(e);
this.mouseDragging=false;
$I$(21).Refresh$java_awt_Component$S(this, this.av.getSequenceSetId$());
this.av.sendSelection$();
if (e.isPopupTrigger$()) {
this.showPopupMenu$java_awt_event_MouseEvent$jalview_gui_SeqPanel_MousePos(e, pos);
}});

Clazz.newMeth(C$, 'highlightSearchResults$java_util_List', function (list) {
this.getIdCanvas$().setHighlighted$java_util_List(list);
if (list == null  || list.isEmpty$() ) {
return;
}var index=this.av.getAlignment$().findIndex$jalview_datamodel_SequenceI(list.get$I(0));
if ((this.av.getRanges$().getStartSeq$() > index) || (this.av.getRanges$().getEndSeq$() < index) ) {
this.av.getRanges$().setStartSeq$I(index);
}});

Clazz.newMeth(C$, 'getIdCanvas$', function () {
return this.idCanvas;
});

Clazz.newMeth(C$, 'setIdCanvas$jalview_gui_IdCanvas', function (idCanvas) {
this.idCanvas=idCanvas;
});
;
(function(){var C$=Clazz.newClass(P$.IdPanel, "ScrollThread", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.running=false;
this.up=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.running=false;
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (up) {
Clazz.super_(C$, this,1);
this.up=up;
this.setName$S("IdPanel$ScrollThread$" + String.valueOf$Z(up));
}, 1);

Clazz.newMeth(C$, 'stopScrolling$', function () {
this.running=false;
});

Clazz.newMeth(C$, 'run$', function () {
this.running=true;
while (this.running){
this.running=this.scrollOnce$();
try {
$I$(1).sleep$J(100);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}
this.this$0.scrollThread=null;
});

Clazz.newMeth(C$, 'scrollOnce$', function () {
var ranges=this.this$0.av.getRanges$();
if (ranges.scrollUp$Z(this.up)) {
var toSeq=this.up ? ranges.getStartSeq$() : ranges.getEndSeq$();
var fromSeq=toSeq < this.this$0.lastid ? this.this$0.lastid - 1 : this.this$0.lastid + 1;
this.this$0.selectSeqs$I$I.apply(this.this$0, [fromSeq, toSeq]);
this.this$0.lastid=toSeq;
this.this$0.alignPanel.paintAlignment$Z$Z(false, false);
return true;
}return false;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
