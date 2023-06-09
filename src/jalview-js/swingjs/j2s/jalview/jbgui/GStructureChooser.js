(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'javax.swing.JComboBox','javax.swing.JLabel','java.awt.FlowLayout','jalview.util.MessageManager','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JSeparator','java.awt.Font','java.util.HashMap','javax.swing.JInternalFrame','StringBuilder','javax.swing.JButton','javax.swing.JCheckBox','javax.swing.JTextField','java.awt.CardLayout','javax.swing.ImageIcon',['jalview.jbgui.GStructureChooser','.AssociateSeqPanel'],'javax.swing.JTable','javax.swing.JTabbedPane','jalview.fts.core.FTSDataColumnPreferences',['jalview.fts.core.FTSDataColumnPreferences','.PreferenceSource'],'jalview.fts.service.pdb.PDBFTSRestClient','jalview.jbgui.GStructureChooser','jalview.gui.JvSwingUtils','javax.swing.Timer','java.awt.event.MouseAdapter','java.awt.event.KeyAdapter','javax.swing.JScrollPane','java.awt.Dimension',['jalview.jbgui.GStructureChooser','.CustomComboSeparatorsRenderer'],'net.miginfocom.swing.MigLayout','jalview.fts.api.FTSDataColumnI','java.awt.GridLayout','javax.swing.event.InternalFrameAdapter','jalview.gui.Desktop','java.util.Arrays']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GStructureChooser", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', 'java.awt.event.ItemListener');
C$.VERDANA_12=null;
C$.tempUserPrefs=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.VERDANA_12=Clazz.new_($I$(8).c$$S$I$I,["Verdana", 0, 12]);
C$.tempUserPrefs=Clazz.new_($I$(9));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.statusPanel=null;
this.statusBar=null;
this.frameTitle=null;
this.mainFrame=null;
this.cmb_filterOption=null;
this.ap=null;
this.errorWarning=null;
this.btn_add=null;
this.btn_newView=null;
this.btn_pdbFromFile=null;
this.chk_superpose=null;
this.txt_search=null;
this.pnl_switchableViews=null;
this.layout_switchableViews=null;
this.chk_invertFilter=null;
this.loadingImage=null;
this.goodImage=null;
this.errorImage=null;
this.warningImage=null;
this.lbl_loading=null;
this.lbl_pdbManualFetchStatus=null;
this.lbl_fromFileStatus=null;
this.idInputAssSeqPanel=null;
this.fileChooserAssSeqPanel=null;
this.targetView=null;
this.tbl_local_pdb=null;
this.pnl_filter=null;
this.pdbDocFieldPrefs=null;
this.previousWantedFields=null;
this.tbl_summary=null;
this.timer=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.statusPanel=Clazz.new_($I$(5));
this.statusBar=Clazz.new_($I$(2));
this.frameTitle=$I$(4).getString$S("label.structure_chooser");
this.mainFrame=Clazz.new_($I$(10).c$$S,[this.frameTitle]);
this.cmb_filterOption=Clazz.new_($I$(1));
this.errorWarning=Clazz.new_($I$(11));
this.btn_pdbFromFile=Clazz.new_($I$(12));
this.chk_superpose=Clazz.new_($I$(13).c$$S,[$I$(4).getString$S("label.superpose_structures")]);
this.txt_search=Clazz.new_($I$(14).c$$I,[14]);
this.pnl_switchableViews=Clazz.new_($I$(5).c$$java_awt_LayoutManager,[Clazz.new_($I$(15))]);
this.layout_switchableViews=(this.pnl_switchableViews.getLayout$());
this.chk_invertFilter=Clazz.new_($I$(13).c$$S,[$I$(4).getString$S("label.invert")]);
this.loadingImage=Clazz.new_($I$(16).c$$java_net_URL,[this.getClass$().getResource$S("/images/loading.gif")]);
this.goodImage=Clazz.new_($I$(16).c$$java_net_URL,[this.getClass$().getResource$S("/images/good.png")]);
this.errorImage=Clazz.new_($I$(16).c$$java_net_URL,[this.getClass$().getResource$S("/images/error.png")]);
this.warningImage=Clazz.new_($I$(16).c$$java_net_URL,[this.getClass$().getResource$S("/images/warning.gif")]);
this.lbl_loading=Clazz.new_($I$(2).c$$javax_swing_Icon,[this.loadingImage]);
this.lbl_pdbManualFetchStatus=Clazz.new_($I$(2).c$$javax_swing_Icon,[this.errorImage]);
this.lbl_fromFileStatus=Clazz.new_($I$(2).c$$javax_swing_Icon,[this.errorImage]);
this.idInputAssSeqPanel=Clazz.new_($I$(17), [this, null]);
this.fileChooserAssSeqPanel=Clazz.new_($I$(17), [this, null]);
this.targetView=Clazz.new_($I$(1));
this.tbl_local_pdb=Clazz.new_($I$(18));
this.pnl_filter=Clazz.new_($I$(19));
this.pdbDocFieldPrefs=Clazz.new_($I$(20).c$$jalview_fts_core_FTSDataColumnPreferences_PreferenceSource$jalview_fts_api_FTSRestClientI,[$I$(21).STRUCTURE_CHOOSER, $I$(22).getInstance$()]);
this.tbl_summary=((P$.GStructureChooser$1||
(function(){var C$=Clazz.newClass(P$, "GStructureChooser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JTable'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.inLayout=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getScrollableTracksViewportWidth$', function () {
return this.hasExcessWidth$();
});

Clazz.newMeth(C$, 'doLayout$', function () {
if (this.hasExcessWidth$()) {
this.autoResizeMode=2;
}this.inLayout=true;
C$.superclazz.prototype.doLayout$.apply(this, []);
this.inLayout=false;
this.autoResizeMode=0;
});

Clazz.newMeth(C$, 'hasExcessWidth$', function () {
return this.getPreferredSize$().width < this.getParent$().getWidth$();
});

Clazz.newMeth(C$, 'columnMarginChanged$javax_swing_event_ChangeEvent', function (e) {
if (this.isEditing$()) {
this.removeEditor$();
}var resizingColumn=this.getTableHeader$().getResizingColumn$();
if (resizingColumn != null  && this.autoResizeMode == 0  && !this.inLayout ) {
resizingColumn.setPreferredWidth$I(resizingColumn.getWidth$());
var colHeader=resizingColumn.getHeaderValue$().toString();
$I$(23).tempUserPrefs.put$TK$TV(colHeader, new Integer(resizingColumn.getWidth$()));
}this.resizeAndRepaint$();
});

Clazz.newMeth(C$, 'getToolTipText$java_awt_event_MouseEvent', function (evt) {
var toolTipText=null;
var pnt=evt.getPoint$();
var rowIndex=this.rowAtPoint$java_awt_Point(pnt);
var colIndex=this.columnAtPoint$java_awt_Point(pnt);
try {
if (this.getValueAt$I$I(rowIndex, colIndex) == null ) {
return null;
}toolTipText=this.getValueAt$I$I(rowIndex, colIndex).toString();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
toolTipText=(toolTipText == null  ? null : (toolTipText.length$() > 500 ? $I$(24).wrapTooltip$Z$S(true, "\"" + toolTipText.subSequence$I$I(0, 500) + "...\"" ) : $I$(24).wrapTooltip$Z$S(true, toolTipText)));
return toolTipText;
});
})()
), Clazz.new_($I$(18), [this, null],P$.GStructureChooser$1));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
try {
p$1.jbInit.apply(this, []);
this.mainFrame.setVisible$Z(false);
this.mainFrame.invalidate$();
this.mainFrame.pack$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$O(e);
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'txt_search_ActionPerformedDelayed$', function () {
if (this.timer != null ) {
this.timer.stop$();
}this.timer=Clazz.new_($I$(25).c$$I$java_awt_event_ActionListener,[300, ((P$.GStructureChooser$2||
(function(){var C$=Clazz.newClass(P$, "GStructureChooser$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GStructureChooser'].txt_search_ActionPerformed$.apply(this.b$['jalview.jbgui.GStructureChooser'], []);
});
})()
), Clazz.new_(P$.GStructureChooser$2.$init$, [this, null]))]);
this.timer.setRepeats$Z(false);
this.timer.start$();
});

Clazz.newMeth(C$, 'jbInit', function () {
var width=new Integer(C$.tempUserPrefs.get$O("structureChooser.width") == null  ? 800 : (C$.tempUserPrefs.get$O("structureChooser.width")).intValue$());
var height=new Integer(C$.tempUserPrefs.get$O("structureChooser.height") == null  ? 400 : (C$.tempUserPrefs.get$O("structureChooser.height")).intValue$());
this.tbl_summary.setAutoCreateRowSorter$Z(true);
this.tbl_summary.getTableHeader$().setReorderingAllowed$Z(false);
this.tbl_summary.addMouseListener$java_awt_event_MouseListener(((P$.GStructureChooser$3||
(function(){var C$=Clazz.newClass(P$, "GStructureChooser$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
this.b$['jalview.jbgui.GStructureChooser'].validateSelections$.apply(this.b$['jalview.jbgui.GStructureChooser'], []);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
this.b$['jalview.jbgui.GStructureChooser'].validateSelections$.apply(this.b$['jalview.jbgui.GStructureChooser'], []);
});
})()
), Clazz.new_($I$(26), [this, null],P$.GStructureChooser$3)));
this.tbl_summary.addKeyListener$java_awt_event_KeyListener(((P$.GStructureChooser$4||
(function(){var C$=Clazz.newClass(P$, "GStructureChooser$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (evt) {
this.b$['jalview.jbgui.GStructureChooser'].validateSelections$.apply(this.b$['jalview.jbgui.GStructureChooser'], []);
switch (evt.getKeyCode$()) {
case 27:
this.b$['jalview.jbgui.GStructureChooser'].mainFrame.dispose$();
break;
case 10:
if (this.b$['jalview.jbgui.GStructureChooser'].btn_add.isEnabled$()) {
this.b$['jalview.jbgui.GStructureChooser'].add_ActionPerformed$.apply(this.b$['jalview.jbgui.GStructureChooser'], []);
}break;
case 9:
if (evt.isShiftDown$()) {
this.b$['jalview.jbgui.GStructureChooser'].pnl_filter.requestFocus$();
} else {
this.b$['jalview.jbgui.GStructureChooser'].btn_add.requestFocus$();
}evt.consume$();
break;
default:
return;
}
});
})()
), Clazz.new_($I$(27), [this, null],P$.GStructureChooser$4)));
var btn_cancel=Clazz.new_($I$(12).c$$S,[$I$(4).getString$S("action.cancel")]);
btn_cancel.setFont$java_awt_Font(C$.VERDANA_12);
btn_cancel.addActionListener$java_awt_event_ActionListener(((P$.GStructureChooser$5||
(function(){var C$=Clazz.newClass(P$, "GStructureChooser$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GStructureChooser'].closeAction$I.apply(this.b$['jalview.jbgui.GStructureChooser'], [this.b$['jalview.jbgui.GStructureChooser'].pnl_filter.getHeight$()]);
});
})()
), Clazz.new_(P$.GStructureChooser$5.$init$, [this, null])));
btn_cancel.addKeyListener$java_awt_event_KeyListener(((P$.GStructureChooser$6||
(function(){var C$=Clazz.newClass(P$, "GStructureChooser$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (evt) {
if (evt.getKeyCode$() == 10) {
this.b$['jalview.jbgui.GStructureChooser'].closeAction$I.apply(this.b$['jalview.jbgui.GStructureChooser'], [this.b$['jalview.jbgui.GStructureChooser'].pnl_filter.getHeight$()]);
}});
})()
), Clazz.new_($I$(27), [this, null],P$.GStructureChooser$6)));
this.tbl_local_pdb.setAutoCreateRowSorter$Z(true);
this.tbl_local_pdb.getTableHeader$().setReorderingAllowed$Z(false);
this.tbl_local_pdb.addMouseListener$java_awt_event_MouseListener(((P$.GStructureChooser$7||
(function(){var C$=Clazz.newClass(P$, "GStructureChooser$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
this.b$['jalview.jbgui.GStructureChooser'].validateSelections$.apply(this.b$['jalview.jbgui.GStructureChooser'], []);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
this.b$['jalview.jbgui.GStructureChooser'].validateSelections$.apply(this.b$['jalview.jbgui.GStructureChooser'], []);
});
})()
), Clazz.new_($I$(26), [this, null],P$.GStructureChooser$7)));
this.tbl_local_pdb.addKeyListener$java_awt_event_KeyListener(((P$.GStructureChooser$8||
(function(){var C$=Clazz.newClass(P$, "GStructureChooser$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (evt) {
this.b$['jalview.jbgui.GStructureChooser'].validateSelections$.apply(this.b$['jalview.jbgui.GStructureChooser'], []);
switch (evt.getKeyCode$()) {
case 27:
this.b$['jalview.jbgui.GStructureChooser'].mainFrame.dispose$();
break;
case 10:
if (this.b$['jalview.jbgui.GStructureChooser'].btn_add.isEnabled$()) {
this.b$['jalview.jbgui.GStructureChooser'].add_ActionPerformed$.apply(this.b$['jalview.jbgui.GStructureChooser'], []);
}break;
case 9:
if (evt.isShiftDown$()) {
this.b$['jalview.jbgui.GStructureChooser'].cmb_filterOption.requestFocus$();
} else {
if (this.b$['jalview.jbgui.GStructureChooser'].btn_add.isEnabled$()) {
this.b$['jalview.jbgui.GStructureChooser'].btn_add.requestFocus$();
} else {
this.$finals$.btn_cancel.requestFocus$();
}}evt.consume$();
break;
default:
return;
}
});
})()
), Clazz.new_($I$(27), [this, {btn_cancel: btn_cancel}],P$.GStructureChooser$8)));
this.btn_newView=Clazz.new_($I$(12).c$$S,[$I$(4).getString$S("action.new_view")]);
this.btn_newView.setFont$java_awt_Font(C$.VERDANA_12);
this.btn_newView.addActionListener$java_awt_event_ActionListener(((P$.GStructureChooser$9||
(function(){var C$=Clazz.newClass(P$, "GStructureChooser$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GStructureChooser'].newView_ActionPerformed$.apply(this.b$['jalview.jbgui.GStructureChooser'], []);
});
})()
), Clazz.new_(P$.GStructureChooser$9.$init$, [this, null])));
this.btn_newView.addKeyListener$java_awt_event_KeyListener(((P$.GStructureChooser$10||
(function(){var C$=Clazz.newClass(P$, "GStructureChooser$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (evt) {
if (evt.getKeyCode$() == 10) {
this.b$['jalview.jbgui.GStructureChooser'].newView_ActionPerformed$.apply(this.b$['jalview.jbgui.GStructureChooser'], []);
}});
})()
), Clazz.new_($I$(27), [this, null],P$.GStructureChooser$10)));
this.btn_add=Clazz.new_($I$(12).c$$S,[$I$(4).getString$S("action.add")]);
this.btn_add.setFont$java_awt_Font(C$.VERDANA_12);
this.btn_add.addActionListener$java_awt_event_ActionListener(((P$.GStructureChooser$11||
(function(){var C$=Clazz.newClass(P$, "GStructureChooser$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GStructureChooser'].add_ActionPerformed$.apply(this.b$['jalview.jbgui.GStructureChooser'], []);
});
})()
), Clazz.new_(P$.GStructureChooser$11.$init$, [this, null])));
this.btn_add.addKeyListener$java_awt_event_KeyListener(((P$.GStructureChooser$12||
(function(){var C$=Clazz.newClass(P$, "GStructureChooser$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (evt) {
if (evt.getKeyCode$() == 10) {
this.b$['jalview.jbgui.GStructureChooser'].add_ActionPerformed$.apply(this.b$['jalview.jbgui.GStructureChooser'], []);
}});
})()
), Clazz.new_($I$(27), [this, null],P$.GStructureChooser$12)));
this.btn_pdbFromFile.setFont$java_awt_Font(C$.VERDANA_12);
var btn_title=$I$(4).getString$S("label.select_pdb_file");
this.btn_pdbFromFile.setText$S(btn_title + "              ");
this.btn_pdbFromFile.addActionListener$java_awt_event_ActionListener(((P$.GStructureChooser$13||
(function(){var C$=Clazz.newClass(P$, "GStructureChooser$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GStructureChooser'].pdbFromFile_actionPerformed$.apply(this.b$['jalview.jbgui.GStructureChooser'], []);
});
})()
), Clazz.new_(P$.GStructureChooser$13.$init$, [this, null])));
this.btn_pdbFromFile.addKeyListener$java_awt_event_KeyListener(((P$.GStructureChooser$14||
(function(){var C$=Clazz.newClass(P$, "GStructureChooser$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (evt) {
if (evt.getKeyCode$() == 10) {
this.b$['jalview.jbgui.GStructureChooser'].pdbFromFile_actionPerformed$.apply(this.b$['jalview.jbgui.GStructureChooser'], []);
}});
})()
), Clazz.new_($I$(27), [this, null],P$.GStructureChooser$14)));
var scrl_foundStructures=Clazz.new_($I$(28).c$$java_awt_Component,[this.tbl_summary]);
scrl_foundStructures.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(29).c$$I$I,[(width).intValue$(), (height).intValue$()]));
var scrl_localPDB=Clazz.new_($I$(28).c$$java_awt_Component,[this.tbl_local_pdb]);
scrl_localPDB.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(29).c$$I$I,[(width).intValue$(), (height).intValue$()]));
scrl_localPDB.setHorizontalScrollBarPolicy$I(31);
this.chk_invertFilter.setFont$java_awt_Font(C$.VERDANA_12);
this.txt_search.setToolTipText$S($I$(24).wrapTooltip$Z$S(true, $I$(4).getString$S("label.enter_pdb_id_tip")));
this.txt_search.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(((P$.GStructureChooser$15||
(function(){var C$=Clazz.newClass(P$, "GStructureChooser$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.DocumentListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent', function (e) {
this.b$['jalview.jbgui.GStructureChooser'].txt_search_ActionPerformedDelayed$.apply(this.b$['jalview.jbgui.GStructureChooser'], []);
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent', function (e) {
this.b$['jalview.jbgui.GStructureChooser'].txt_search_ActionPerformedDelayed$.apply(this.b$['jalview.jbgui.GStructureChooser'], []);
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent', function (e) {
this.b$['jalview.jbgui.GStructureChooser'].txt_search_ActionPerformedDelayed$.apply(this.b$['jalview.jbgui.GStructureChooser'], []);
});
})()
), Clazz.new_(P$.GStructureChooser$15.$init$, [this, null])));
this.cmb_filterOption.setFont$java_awt_Font(C$.VERDANA_12);
this.cmb_filterOption.setToolTipText$S($I$(4).getString$S("info.select_filter_option"));
this.cmb_filterOption.addItemListener$java_awt_event_ItemListener(this);
this.cmb_filterOption.setRenderer$javax_swing_ListCellRenderer(((P$.GStructureChooser$16||
(function(){var C$=Clazz.newClass(P$, "GStructureChooser$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['jalview.jbgui.GStructureChooser','.CustomComboSeparatorsRenderer']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'addSeparatorAfter$javax_swing_JList$jalview_jbgui_GStructureChooser_FilterOption$I', function (list, value, index) {
return value.isAddSeparatorAfter$();
});
})()
), Clazz.new_($I$(30).c$$javax_swing_ListCellRenderer, [this, null, this.cmb_filterOption.getRenderer$()],P$.GStructureChooser$16)));
this.chk_invertFilter.addItemListener$java_awt_event_ItemListener(this);
this.targetView.setVisible$Z(false);
var actionsPanel=Clazz.new_($I$(5).c$$java_awt_LayoutManager,[Clazz.new_($I$(31))]);
actionsPanel.add$java_awt_Component$O(this.targetView, "left");
actionsPanel.add$java_awt_Component$O(this.btn_add, "wrap");
actionsPanel.add$java_awt_Component$O(this.chk_superpose, "left");
actionsPanel.add$java_awt_Component(this.btn_newView);
actionsPanel.add$java_awt_Component$O(btn_cancel, "right");
var pnl_main=Clazz.new_($I$(5));
pnl_main.add$java_awt_Component(this.cmb_filterOption);
pnl_main.add$java_awt_Component(this.lbl_loading);
pnl_main.add$java_awt_Component(this.chk_invertFilter);
this.lbl_loading.setVisible$Z(false);
var pnl_fileChooser=Clazz.new_($I$(5).c$$java_awt_LayoutManager,[Clazz.new_($I$(3))]);
pnl_fileChooser.add$java_awt_Component(this.btn_pdbFromFile);
pnl_fileChooser.add$java_awt_Component(this.lbl_fromFileStatus);
var pnl_fileChooserBL=Clazz.new_($I$(5).c$$java_awt_LayoutManager,[Clazz.new_($I$(6))]);
pnl_fileChooserBL.add$java_awt_Component$O(this.fileChooserAssSeqPanel, "North");
pnl_fileChooserBL.add$java_awt_Component$O(pnl_fileChooser, "Center");
var pnl_idInput=Clazz.new_($I$(5).c$$java_awt_LayoutManager,[Clazz.new_($I$(3))]);
pnl_idInput.add$java_awt_Component(this.txt_search);
pnl_idInput.add$java_awt_Component(this.lbl_pdbManualFetchStatus);
var pnl_idInputBL=Clazz.new_($I$(5).c$$java_awt_LayoutManager,[Clazz.new_($I$(6))]);
pnl_idInputBL.add$java_awt_Component$O(this.idInputAssSeqPanel, "North");
pnl_idInputBL.add$java_awt_Component$O(pnl_idInput, "Center");
var foundStructureSummary=$I$(4).getString$S("label.found_structures_summary");
var configureCols=$I$(4).getString$S("label.configure_displayed_columns");
var changeListener=((P$.GStructureChooser$17||
(function(){var C$=Clazz.newClass(P$, "GStructureChooser$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (changeEvent) {
var sourceTabbedPane=changeEvent.getSource$();
var index=sourceTabbedPane.getSelectedIndex$();
this.b$['jalview.jbgui.GStructureChooser'].btn_add.setVisible$Z(this.b$['jalview.jbgui.GStructureChooser'].targetView.isVisible$());
this.b$['jalview.jbgui.GStructureChooser'].btn_newView.setVisible$Z(true);
this.$finals$.btn_cancel.setVisible$Z(true);
if (sourceTabbedPane.getTitleAt$I(index).equals$O(this.$finals$.configureCols)) {
this.b$['jalview.jbgui.GStructureChooser'].btn_add.setEnabled$Z(false);
this.$finals$.btn_cancel.setEnabled$Z(false);
this.b$['jalview.jbgui.GStructureChooser'].btn_add.setVisible$Z(false);
this.b$['jalview.jbgui.GStructureChooser'].btn_newView.setEnabled$Z(false);
this.$finals$.btn_cancel.setVisible$Z(false);
this.b$['jalview.jbgui.GStructureChooser'].previousWantedFields=this.b$['jalview.jbgui.GStructureChooser'].pdbDocFieldPrefs.getStructureSummaryFields$().toArray$TTA(Clazz.array($I$(32), [0]));
}if (sourceTabbedPane.getTitleAt$I(index).equals$O(this.$finals$.foundStructureSummary)) {
this.$finals$.btn_cancel.setEnabled$Z(true);
if (this.b$['jalview.jbgui.GStructureChooser'].wantedFieldsUpdated$.apply(this.b$['jalview.jbgui.GStructureChooser'], [])) {
this.b$['jalview.jbgui.GStructureChooser'].tabRefresh$.apply(this.b$['jalview.jbgui.GStructureChooser'], []);
} else {
this.b$['jalview.jbgui.GStructureChooser'].validateSelections$.apply(this.b$['jalview.jbgui.GStructureChooser'], []);
}}});
})()
), Clazz.new_(P$.GStructureChooser$17.$init$, [this, {btn_cancel: btn_cancel, configureCols: configureCols, foundStructureSummary: foundStructureSummary}]));
this.pnl_filter.addChangeListener$javax_swing_event_ChangeListener(changeListener);
this.pnl_filter.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(29).c$$I$I,[(width).intValue$(), (height).intValue$()]));
this.pnl_filter.add$S$java_awt_Component(foundStructureSummary, scrl_foundStructures);
this.pnl_filter.add$S$java_awt_Component(configureCols, this.pdbDocFieldPrefs);
var pnl_locPDB=Clazz.new_($I$(5).c$$java_awt_LayoutManager,[Clazz.new_($I$(6))]);
pnl_locPDB.add$java_awt_Component(scrl_localPDB);
this.pnl_switchableViews.add$java_awt_Component$O(pnl_fileChooserBL, "VIEWS_FROM_FILE");
this.pnl_switchableViews.add$java_awt_Component$O(pnl_idInputBL, "VIEWS_ENTER_ID");
this.pnl_switchableViews.add$java_awt_Component$O(this.pnl_filter, "VIEWS_FILTER");
this.pnl_switchableViews.add$java_awt_Component$O(pnl_locPDB, "VIEWS_LOCAL_PDB");
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6)));
this.add$java_awt_Component$O(pnl_main, "North");
this.add$java_awt_Component$O(this.pnl_switchableViews, "Center");
this.statusPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(33)));
var pnl_actionsAndStatus=Clazz.new_($I$(5).c$$java_awt_LayoutManager,[Clazz.new_($I$(6))]);
pnl_actionsAndStatus.add$java_awt_Component$O(actionsPanel, "Center");
pnl_actionsAndStatus.add$java_awt_Component$O(this.statusPanel, "South");
this.statusPanel.add$java_awt_Component$O(this.statusBar, null);
this.add$java_awt_Component$O(pnl_actionsAndStatus, "South");
this.mainFrame.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.GStructureChooser$18||
(function(){var C$=Clazz.newClass(P$, "GStructureChooser$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'internalFrameClosing$javax_swing_event_InternalFrameEvent', function (e) {
this.b$['jalview.jbgui.GStructureChooser'].closeAction$I.apply(this.b$['jalview.jbgui.GStructureChooser'], [this.b$['jalview.jbgui.GStructureChooser'].pnl_filter.getHeight$()]);
});
})()
), Clazz.new_($I$(34), [this, null],P$.GStructureChooser$18)));
this.mainFrame.setVisible$Z(true);
this.mainFrame.setContentPane$java_awt_Container(this);
this.mainFrame.setDefaultCloseOperation$I(2);
var x=C$.tempUserPrefs.get$O("structureChooser.x");
var y=C$.tempUserPrefs.get$O("structureChooser.y");
if (x != null  && y != null  ) {
this.mainFrame.setLocation$I$I((x).intValue$(), (y).intValue$());
}$I$(35).addInternalFrame$javax_swing_JInternalFrame$S$I$I(this.mainFrame, this.frameTitle, (width).intValue$(), (height).intValue$());
}, p$1);

Clazz.newMeth(C$, 'closeAction$I', function (preferredHeight) {
C$.tempUserPrefs.put$TK$TV("structureChooser.width", new Integer(this.pnl_filter.getWidth$()));
C$.tempUserPrefs.put$TK$TV("structureChooser.height", new Integer(preferredHeight));
C$.tempUserPrefs.put$TK$TV("structureChooser.x", new Integer(this.mainFrame.getX$()));
C$.tempUserPrefs.put$TK$TV("structureChooser.y", new Integer(this.mainFrame.getY$()));
this.mainFrame.dispose$();
});

Clazz.newMeth(C$, 'wantedFieldsUpdated$', function () {
if (this.previousWantedFields == null ) {
return true;
}var currentWantedFields=this.pdbDocFieldPrefs.getStructureSummaryFields$().toArray$TTA(Clazz.array($I$(32), [0]));
return $I$(36).equals$OA$OA(currentWantedFields, this.previousWantedFields) ? false : true;
});

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
this.stateChanged$java_awt_event_ItemEvent(e);
});

Clazz.newMeth(C$, 'getResultTable$', function () {
return this.tbl_summary;
});

Clazz.newMeth(C$, 'getCmbFilterOption$', function () {
return this.cmb_filterOption;
});
;
(function(){var C$=Clazz.newClass(P$.GStructureChooser, "FilterOption", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.value=null;
this.view=null;
this.addSeparatorAfter=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$Z', function (name, value, view, addSeparatorAfter) {
C$.$init$.apply(this);
this.name=name;
this.value=value;
this.view=view;
this.addSeparatorAfter=addSeparatorAfter;
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S', function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getView$', function () {
return this.view;
});

Clazz.newMeth(C$, 'setView$S', function (view) {
this.view=view;
});

Clazz.newMeth(C$, 'toString', function () {
return this.name;
});

Clazz.newMeth(C$, 'isAddSeparatorAfter$', function () {
return this.addSeparatorAfter;
});

Clazz.newMeth(C$, 'setAddSeparatorAfter$Z', function (addSeparatorAfter) {
this.addSeparatorAfter=addSeparatorAfter;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.GStructureChooser, "AssociateSeqOptions", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sequence=null;
this.name=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI', function (seq) {
C$.$init$.apply(this);
this.sequence=seq;
this.name=(seq.getName$().length$() >= 23) ? seq.getName$().substring$I$I(0, 23) : seq.getName$();
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_datamodel_SequenceI', function (name, seq) {
C$.$init$.apply(this);
this.name=name;
this.sequence=seq;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.name;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'getSequence$', function () {
return this.sequence;
});

Clazz.newMeth(C$, 'setSequence$jalview_datamodel_SequenceI', function (sequence) {
this.sequence=sequence;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.GStructureChooser, "AssociateSeqPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel', 'java.awt.event.ItemListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.cmb_assSeq=null;
this.lbl_associateSeq=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.cmb_assSeq=Clazz.new_($I$(1));
this.lbl_associateSeq=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3)));
this.add$java_awt_Component(this.cmb_assSeq);
this.add$java_awt_Component(this.lbl_associateSeq);
this.cmb_assSeq.setToolTipText$S($I$(4).getString$S("info.associate_wit_sequence"));
this.cmb_assSeq.addItemListener$java_awt_event_ItemListener(this);
}, 1);

Clazz.newMeth(C$, 'loadCmbAssSeq$', function () {
this.this$0.populateCmbAssociateSeqOptions$javax_swing_JComboBox$javax_swing_JLabel.apply(this.this$0, [this.cmb_assSeq, this.lbl_associateSeq]);
});

Clazz.newMeth(C$, 'getCmb_assSeq$', function () {
return this.cmb_assSeq;
});

Clazz.newMeth(C$, 'setCmb_assSeq$javax_swing_JComboBox', function (cmb_assSeq) {
this.cmb_assSeq=cmb_assSeq;
});

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
if (e.getStateChange$() == 1) {
this.this$0.cmbAssSeqStateChanged$.apply(this.this$0, []);
}});
})()
;
(function(){var C$=Clazz.newClass(P$.GStructureChooser, "CustomComboSeparatorsRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.ListCellRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.regent=null;
this.separatorPanel=null;
this.jSeparator=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.separatorPanel=Clazz.new_($I$(5).c$$java_awt_LayoutManager,[Clazz.new_($I$(6))]);
this.jSeparator=Clazz.new_($I$(7));
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_ListCellRenderer', function (listCellRenderer) {
C$.$init$.apply(this);
this.regent=listCellRenderer;
}, 1);

Clazz.newMeth(C$, ['getListCellRendererComponent$javax_swing_JList$O$I$Z$Z','getListCellRendererComponent$','getListCellRendererComponent$javax_swing_JList$TE$I$Z$Z'], function (list, value, index, isSelected, cellHasFocus) {
var comp=this.regent.getListCellRendererComponent$(list, value, index, isSelected, cellHasFocus);
if (index != -1 && this.addSeparatorAfter$javax_swing_JList$jalview_jbgui_GStructureChooser_FilterOption$I(list, value, index) ) {
this.separatorPanel.removeAll$();
this.separatorPanel.add$java_awt_Component$O(comp, "Center");
this.separatorPanel.add$java_awt_Component$O(this.jSeparator, "South");
return this.separatorPanel;
} else {
return comp;
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
