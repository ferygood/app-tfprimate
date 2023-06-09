(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.fragseq"),p$1={},I$=[[0,'fr.orsay.lri.varna.VARNAPanel','java.awt.Dimension','javax.swing.JTextPane','javax.swing.JScrollPane','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.BorderFactory','java.awt.dnd.DropTarget','javax.swing.JToolBar','javax.swing.JFileChooser','java.util.ArrayList','javax.swing.JFrame','javax.swing.JList','javax.swing.JComboBox','javax.swing.UIManager','fr.orsay.lri.varna.applications.fragseq.FragSeqTreeModel','fr.orsay.lri.varna.applications.fragseq.FragSeqTree','fr.orsay.lri.varna.applications.fragseq.FragSeqCellRenderer','fr.orsay.lri.varna.applications.fragseq.FragSeqCellEditor','java.awt.datatransfer.DataFlavor','fr.orsay.lri.varna.applications.fragseq.FragSeqRNASecStrModel','fr.orsay.lri.varna.applications.fragseq.FragSeqAnnotationDataModel','javax.swing.TransferHandler','javax.swing.JButton',['fr.orsay.lri.varna.applications.fragseq.FragSeqGUI','.Commands'],'java.awt.GridLayout','javax.swing.JRadioButton','javax.swing.ButtonGroup','javax.swing.JLabel','javax.swing.JSplitPane',['fr.orsay.lri.varna.applications.fragseq.FragSeqGUI','.VARNAHolder'],'javax.swing.tree.TreePath','fr.orsay.lri.varna.applications.BasicINI','javax.swing.SwingUtilities','javax.swing.JOptionPane']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FragSeqGUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JFrame', ['javax.swing.event.TreeModelListener', 'java.awt.event.MouseListener', 'java.awt.dnd.DropTargetListener', 'java.awt.event.WindowListener', 'java.awt.event.ComponentListener', 'java.awt.event.ActionListener', 'javax.swing.event.TreeSelectionListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._INIFilename=null;
this.redrawOnSlide=false;
this.dividerWidth=0;
this._varnaUpperPanels=null;
this._varnaLowerPanels=null;
this._listPanel=null;
this._infoPanel=null;
this._sideList=null;
this._treeModel=null;
this._toolbar=null;
this._choice=null;
this._listScroller=null;
this._selectedElems=null;
this._splitLeft=null;
this._splitRight=null;
this._splitVARNA=null;
this._lnf=null;
this.index=0;
this._varnaPanels=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._INIFilename="FragSeqUI.ini";
this.redrawOnSlide=false;
this.dividerWidth=5;
this._varnaUpperPanels=Clazz.new_($I$(5));
this._varnaLowerPanels=Clazz.new_($I$(5));
this._listPanel=Clazz.new_($I$(5));
this._infoPanel=Clazz.new_($I$(5));
this._sideList=null;
this._toolbar=Clazz.new_($I$(9));
this._choice=Clazz.new_($I$(10));
this.index=0;
this._varnaPanels=Clazz.new_($I$(11));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$S.apply(this, ["VARNA Explorer"]);
C$.$init$.apply(this);
p$1.RNAPanelDemoInit.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'RNAPanelDemoInit', function () {
$I$(12).setDefaultLookAndFeelDecorated$Z(true);
this.addWindowListener$java_awt_event_WindowListener(this);
this._selectedElems=Clazz.new_($I$(13));
this._lnf=Clazz.new_($I$(14).c$$TEA,[$I$(15).getInstalledLookAndFeels$()]);
this._treeModel=Clazz.new_($I$(16));
this._treeModel.addTreeModelListener$javax_swing_event_TreeModelListener(this);
this._sideList=Clazz.new_($I$(17).c$$fr_orsay_lri_varna_applications_fragseq_FragSeqTreeModel,[this._treeModel]);
this._sideList.addMouseListener$java_awt_event_MouseListener(this);
this._sideList.setLargeModel$Z(true);
this._sideList.setEditable$Z(true);
this._sideList.addTreeWillExpandListener$javax_swing_event_TreeWillExpandListener(this._treeModel);
var renderer=Clazz.new_($I$(18).c$$javax_swing_JTree$fr_orsay_lri_varna_applications_fragseq_FragSeqTreeModel,[this._sideList, this._treeModel]);
this._sideList.setCellRenderer$javax_swing_tree_TreeCellRenderer(renderer);
this._sideList.setCellEditor$javax_swing_tree_TreeCellEditor(Clazz.new_($I$(19).c$$javax_swing_JTree$javax_swing_tree_DefaultTreeCellRenderer$fr_orsay_lri_varna_applications_fragseq_FragSeqTreeModel,[this._sideList, renderer, this._treeModel]));
var m=this._sideList.getSelectionModel$();
m.setSelectionMode$I(1);
this._sideList.setSelectionModel$javax_swing_tree_TreeSelectionModel(m);
m.addTreeSelectionListener$javax_swing_event_TreeSelectionListener(this);
this._sideList.setShowsRootHandles$Z(true);
this._sideList.setDragEnabled$Z(true);
this._sideList.setRootVisible$Z(false);
this._sideList.setTransferHandler$javax_swing_TransferHandler(((P$.FragSeqGUI$1||
(function(){var C$=Clazz.newClass(P$, "FragSeqGUI$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.TransferHandler'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSourceActions$javax_swing_JComponent', function (c) {
return 3;
});

Clazz.newMeth(C$, 'createTransferable$javax_swing_JComponent', function (c) {
var tree=c;
var tp=tree.getSelectionPath$();
if (tp != null ) {
var node=tp.getLastPathComponent$();
if (Clazz.instanceOf(node.getUserObject$(), "fr.orsay.lri.varna.applications.fragseq.FragSeqRNASecStrModel")) {
return ((P$.FragSeqGUI$1$1||
(function(){var C$=Clazz.newClass(P$, "FragSeqGUI$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.datatransfer.Transferable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getTransferDataFlavors$', function () {
var dt=Clazz.array($I$(20), -1, [$I$(21).Flavor]);
return dt;
});

Clazz.newMeth(C$, 'getTransferData$java_awt_datatransfer_DataFlavor', function (df) {
if (!this.isDataFlavorSupported$java_awt_datatransfer_DataFlavor(df)) throw Clazz.new_(Clazz.load('java.awt.datatransfer.UnsupportedFlavorException').c$$java_awt_datatransfer_DataFlavor,[df]);
var node=this.b$['fr.orsay.lri.varna.applications.fragseq.FragSeqGUI']._sideList.getSelectionPath$().getLastPathComponent$();
return node.getUserObject$();
});

Clazz.newMeth(C$, 'isDataFlavorSupported$java_awt_datatransfer_DataFlavor', function (df) {
return $I$(21).Flavor.equals$java_awt_datatransfer_DataFlavor(df);
});
})()
), Clazz.new_(P$.FragSeqGUI$1$1.$init$, [this, null]));
} else if (Clazz.instanceOf(node.getUserObject$(), "fr.orsay.lri.varna.applications.fragseq.FragSeqAnnotationDataModel")) {
return ((P$.FragSeqGUI$1$2||
(function(){var C$=Clazz.newClass(P$, "FragSeqGUI$1$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.datatransfer.Transferable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getTransferDataFlavors$', function () {
var dt=Clazz.array($I$(20), -1, [$I$(22).Flavor]);
return dt;
});

Clazz.newMeth(C$, 'getTransferData$java_awt_datatransfer_DataFlavor', function (df) {
if (!this.isDataFlavorSupported$java_awt_datatransfer_DataFlavor(df)) throw Clazz.new_(Clazz.load('java.awt.datatransfer.UnsupportedFlavorException').c$$java_awt_datatransfer_DataFlavor,[df]);
var node=this.b$['fr.orsay.lri.varna.applications.fragseq.FragSeqGUI']._sideList.getSelectionPath$().getLastPathComponent$();
return node.getUserObject$();
});

Clazz.newMeth(C$, 'isDataFlavorSupported$java_awt_datatransfer_DataFlavor', function (df) {
return $I$(22).Flavor.equals$java_awt_datatransfer_DataFlavor(df);
});
})()
), Clazz.new_(P$.FragSeqGUI$1$2.$init$, [this, null]));
} else {
return null;
}}return null;
});
})()
), Clazz.new_($I$(23).c$$S, [this, null, null],P$.FragSeqGUI$1)));
var refreshAllFoldersButton=Clazz.new_($I$(24).c$$S,["Refresh All"]);
refreshAllFoldersButton.setActionCommand$S("" + $I$(25).REFRESH_ALL);
refreshAllFoldersButton.addActionListener$java_awt_event_ActionListener(this);
var watchFolderButton=Clazz.new_($I$(24).c$$S,["Add folder"]);
watchFolderButton.setActionCommand$S("" + $I$(25).NEW_FOLDER);
watchFolderButton.addActionListener$java_awt_event_ActionListener(this);
var addUpperButton=Clazz.new_($I$(24).c$$S,["+Up"]);
addUpperButton.setActionCommand$S("" + $I$(25).ADD_PANEL_UP);
addUpperButton.addActionListener$java_awt_event_ActionListener(this);
var removeUpperButton=Clazz.new_($I$(24).c$$S,["-Up"]);
removeUpperButton.setActionCommand$S("" + $I$(25).REMOVE_PANEL_UP);
removeUpperButton.addActionListener$java_awt_event_ActionListener(this);
var addLowerButton=Clazz.new_($I$(24).c$$S,["+Down"]);
addLowerButton.setActionCommand$S("" + $I$(25).ADD_PANEL_DOWN);
addLowerButton.addActionListener$java_awt_event_ActionListener(this);
var removeLowerButton=Clazz.new_($I$(24).c$$S,["-Down"]);
removeLowerButton.setActionCommand$S("" + $I$(25).REMOVE_PANEL_DOWN);
removeLowerButton.addActionListener$java_awt_event_ActionListener(this);
var changeLNFButton=Clazz.new_($I$(24).c$$S,["Change"]);
changeLNFButton.setActionCommand$S("" + $I$(25).CHANGE_LNF);
changeLNFButton.addActionListener$java_awt_event_ActionListener(this);
var XMLButton=Clazz.new_($I$(24).c$$S,["Test XML"]);
XMLButton.setActionCommand$S("" + $I$(25).TEST_XML);
XMLButton.addActionListener$java_awt_event_ActionListener(this);
this._toolbar.setFloatable$Z(false);
this._toolbar.add$java_awt_Component(refreshAllFoldersButton);
this._toolbar.addSeparator$();
this._toolbar.add$java_awt_Component(addUpperButton);
this._toolbar.add$java_awt_Component(removeUpperButton);
this._toolbar.add$java_awt_Component(addLowerButton);
this._toolbar.add$java_awt_Component(removeLowerButton);
this._toolbar.addSeparator$();
this._toolbar.add$java_awt_Component(XMLButton);
this._toolbar.addSeparator$();
this._toolbar.add$java_awt_Component(this._lnf);
this._toolbar.add$java_awt_Component(changeLNFButton);
this._listScroller=Clazz.new_($I$(4).c$$java_awt_Component$I$I,[this._sideList, 22, 32]);
this._listScroller.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2).c$$I$I,[300, 200]));
this._listScroller.addComponentListener$java_awt_event_ComponentListener(this);
this._listPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6)));
this._listPanel.add$java_awt_Component$O(this._listScroller, "Center");
this._listPanel.add$java_awt_Component$O(this._selectedElems, "South");
this._listPanel.setBorder$javax_swing_border_Border($I$(7).createTitledBorder$S("Structures"));
this._listPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2).c$$I$I,[300, 0]));
this._varnaUpperPanels.setLayout$java_awt_LayoutManager(Clazz.new_($I$(26)));
this._varnaUpperPanels.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2).c$$I$I,[800, 600]));
this._varnaLowerPanels.setLayout$java_awt_LayoutManager(Clazz.new_($I$(26)));
this._varnaLowerPanels.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2).c$$I$I,[800, 0]));
var sortFileName=Clazz.new_($I$(27).c$$S,["Directory"]);
sortFileName.setActionCommand$S("sortfilename");
sortFileName.setSelected$Z(true);
sortFileName.setOpaque$Z(false);
sortFileName.setActionCommand$S("" + $I$(25).SORT_FILENAME);
sortFileName.addActionListener$java_awt_event_ActionListener(this);
var sortID=Clazz.new_($I$(27).c$$S,["ID"]);
sortID.setActionCommand$S("sortid");
sortID.setOpaque$Z(false);
sortID.setActionCommand$S("" + $I$(25).SORT_ID);
sortID.addActionListener$java_awt_event_ActionListener(this);
var group=Clazz.new_($I$(28));
group.add$javax_swing_AbstractButton(sortFileName);
group.add$javax_swing_AbstractButton(sortID);
var listTools=Clazz.new_($I$(9));
listTools.setFloatable$Z(false);
listTools.add$java_awt_Component(watchFolderButton);
listTools.addSeparator$();
listTools.add$java_awt_Component(Clazz.new_($I$(29).c$$S,["Sort by"]));
listTools.add$java_awt_Component(sortFileName);
listTools.add$java_awt_Component(sortID);
var sidePanel=Clazz.new_($I$(5));
sidePanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6)));
sidePanel.add$java_awt_Component$O(listTools, "North");
sidePanel.add$java_awt_Component$O(this._listPanel, "Center");
var mainVARNAPanel=Clazz.new_($I$(5));
mainVARNAPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6)));
this._splitVARNA=Clazz.new_($I$(30).c$$I$Z$java_awt_Component$java_awt_Component,[0, this.redrawOnSlide, this._varnaUpperPanels, this._varnaLowerPanels]);
this._splitVARNA.setDividerSize$I(this.dividerWidth);
this._splitVARNA.setResizeWeight$D(1.0);
this._splitLeft=Clazz.new_($I$(30).c$$I$Z$java_awt_Component$java_awt_Component,[1, this.redrawOnSlide, sidePanel, this._splitVARNA]);
this._splitLeft.setResizeWeight$D(0.1);
this._splitLeft.setDividerSize$I(this.dividerWidth);
this._splitRight=Clazz.new_($I$(30).c$$I$Z$java_awt_Component$java_awt_Component,[1, this.redrawOnSlide, this._splitLeft, this._infoPanel]);
this._splitRight.setResizeWeight$D(0.85);
this._splitRight.setDividerSize$I(this.dividerWidth);
this._infoPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(26).c$$I$I,[0, 1]));
p$1.restoreConfig.apply(this, []);
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(6)));
this.getContentPane$().add$java_awt_Component$O(this._splitRight, "Center");
this.getContentPane$().add$java_awt_Component$O(this._toolbar, "North");
this.addUpperPanel$();
this.addUpperPanel$();
this.setVisible$Z(true);
}, p$1);

Clazz.newMeth(C$, 'getSelf$', function () {
return this;
});

Clazz.newMeth(C$, 'createIntegratedPanel$I', function (height) {
var vh=Clazz.new_($I$(31).c$$java_awt_dnd_DropTargetListener, [this, null, this]);
this._varnaPanels.add$TE(vh);
return vh;
});

Clazz.newMeth(C$, 'removeUpperPanel$', function () {
if (this._varnaUpperPanels.getComponentCount$() > 1) {
var vh=this._varnaUpperPanels.getComponent$I(this._varnaUpperPanels.getComponentCount$() - 1);
this._infoPanel.remove$java_awt_Component(vh.getInfoPane$());
this._varnaUpperPanels.remove$java_awt_Component(vh);
this._splitLeft.validate$();
this._splitRight.validate$();
}});

Clazz.newMeth(C$, 'addUpperPanel$', function () {
var vh=this.createIntegratedPanel$I(100);
this._varnaUpperPanels.add$java_awt_Component(vh);
this._infoPanel.add$java_awt_Component(vh.getInfoPane$());
this._splitRight.validate$();
this._splitLeft.validate$();
});

Clazz.newMeth(C$, 'removeLowerPanel$', function () {
if (this._varnaLowerPanels.getComponentCount$() > 0) {
this._varnaLowerPanels.remove$I(this._varnaLowerPanels.getComponentCount$() - 1);
if (this._varnaLowerPanels.getComponentCount$() == 0) {
this._splitVARNA.setDividerLocation$D(1.0);
this._splitVARNA.validate$();
this._splitVARNA.repaint$();
}this._splitLeft.validate$();
}});

Clazz.newMeth(C$, 'addLowerPanel$', function () {
if (this._varnaLowerPanels.getComponentCount$() == 0) {
this._splitVARNA.setDividerLocation$D(0.7);
this._splitVARNA.validate$();
}this._varnaLowerPanels.add$java_awt_Component(this.createIntegratedPanel$I(400));
this._splitLeft.validate$();
});

Clazz.newMeth(C$, 'treeNodesChanged$javax_swing_event_TreeModelEvent', function (e) {
var node;
node=(e.getTreePath$().getLastPathComponent$());
try {
var index=e.getChildIndices$()[0];
node=(node.getChildAt$I(index));
} catch (exc) {
if (Clazz.exceptionOf(exc,"NullPointerException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'addFolder$S', function (path) {
this.addFolder$S$Z(path, true);
});

Clazz.newMeth(C$, 'addFolder$S$Z', function (path, shouldBeVisible) {
var childNode=this._treeModel.addFolder$S(path);
if ((childNode != null ) && shouldBeVisible ) {
System.out.println$S("  Expanding: " + childNode.getUserObject$());
var tp=Clazz.new_($I$(32).c$$OA,[childNode.getPath$()]);
this._sideList.scrollPathToVisible$javax_swing_tree_TreePath(tp);
this._sideList.expandRow$I(this._sideList.getRowForPath$javax_swing_tree_TreePath(tp));
this._sideList.updateUI$();
this._sideList.validate$();
}});

Clazz.newMeth(C$, 'treeNodesInserted$javax_swing_event_TreeModelEvent', function (e) {
System.out.println$O(e);
});

Clazz.newMeth(C$, 'treeNodesRemoved$javax_swing_event_TreeModelEvent', function (e) {
});

Clazz.newMeth(C$, 'treeStructureChanged$javax_swing_event_TreeModelEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
if (e.getSource$() === this._sideList ) {
if (e.getClickCount$() == 1) {
} else if (e.getClickCount$() == 2) {
var t=this._sideList.getSelectionPath$();
if (t != null ) {
var node=t.getLastPathComponent$();
if (Clazz.instanceOf(node.getUserObject$(), "fr.orsay.lri.varna.applications.fragseq.FragSeqFileModel")) {
if (!this._sideList.isExpanded$javax_swing_tree_TreePath(t)) {
try {
this._sideList.fireTreeWillExpand$javax_swing_tree_TreePath(t);
this._sideList.expandPath$javax_swing_tree_TreePath(t);
} catch (e1) {
if (Clazz.exceptionOf(e1,"javax.swing.tree.ExpandVetoException")){
e1.printStackTrace$();
} else {
throw e1;
}
}
} else {
try {
this._sideList.fireTreeWillCollapse$javax_swing_tree_TreePath(t);
this._sideList.collapsePath$javax_swing_tree_TreePath(t);
} catch (e1) {
if (Clazz.exceptionOf(e1,"javax.swing.tree.ExpandVetoException")){
e1.printStackTrace$();
} else {
throw e1;
}
}
}} else if (Clazz.instanceOf(node.getUserObject$(), "fr.orsay.lri.varna.applications.fragseq.FragSeqModel")) {
var model=node.getUserObject$();
var res;
if (Clazz.instanceOf(model, "fr.orsay.lri.varna.applications.fragseq.FragSeqRNASecStrModel")) {
res=this.index % (this._varnaUpperPanels.getComponentCount$() + this._varnaLowerPanels.getComponentCount$());
} else {
res=(this.index + this._varnaUpperPanels.getComponentCount$() + this._varnaLowerPanels.getComponentCount$()  - 1) % (this._varnaUpperPanels.getComponentCount$() + this._varnaLowerPanels.getComponentCount$());
}var c=null;
if (res < this._varnaUpperPanels.getComponentCount$()) {
c=this._varnaUpperPanels.getComponent$I(res);
} else {
res-=this._varnaUpperPanels.getComponentCount$();
c=this._varnaLowerPanels.getComponent$I(res);
}if (Clazz.instanceOf(c, "fr.orsay.lri.varna.applications.fragseq.FragSeqGUI.VARNAHolder")) {
var h=c;
if (Clazz.instanceOf(model, "fr.orsay.lri.varna.applications.fragseq.FragSeqRNASecStrModel")) {
h.setSecStrModel$fr_orsay_lri_varna_applications_fragseq_FragSeqRNASecStrModel(model);
this.index++;
} else if (Clazz.instanceOf(model, "fr.orsay.lri.varna.applications.fragseq.FragSeqAnnotationDataModel")) {
h.setDataModel$fr_orsay_lri_varna_applications_fragseq_FragSeqAnnotationDataModel(model);
}}}}}}});

Clazz.newMeth(C$, 'getHolder$java_awt_Component', function (vp) {
if (Clazz.instanceOf(vp, "fr.orsay.lri.varna.applications.fragseq.FragSeqGUI.VARNAHolder")) {
var i=this._varnaPanels.indexOf$O(vp);
if (i != -1) {
return this._varnaPanels.get$I(i);
}}if (Clazz.instanceOf(vp, "fr.orsay.lri.varna.VARNAPanel")) {
for (var vh, $vh = this._varnaPanels.iterator$(); $vh.hasNext$()&&((vh=($vh.next$())),1);) {
if (vh.getVARNAPanel$() === vp ) return vh;
}
}return null;
}, p$1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'dragEnter$java_awt_dnd_DropTargetDragEvent', function (arg0) {
});

Clazz.newMeth(C$, 'dragExit$java_awt_dnd_DropTargetEvent', function (arg0) {
});

Clazz.newMeth(C$, 'dragOver$java_awt_dnd_DropTargetDragEvent', function (arg0) {
});

Clazz.newMeth(C$, 'drop$java_awt_dnd_DropTargetDropEvent', function (arg0) {
try {
var o=arg0.getSource$();
if (Clazz.instanceOf(o.getComponent$(), "fr.orsay.lri.varna.VARNAPanel")) {
var h=p$1.getHolder$java_awt_Component.apply(this, [o.getComponent$()]);
if (h != null ) {
System.out.println$S("[X]");
var t=arg0.getTransferable$();
if (t.isDataFlavorSupported$java_awt_datatransfer_DataFlavor($I$(21).Flavor)) {
var data=t.getTransferData$java_awt_datatransfer_DataFlavor($I$(21).Flavor);
if (Clazz.instanceOf(data, "fr.orsay.lri.varna.applications.fragseq.FragSeqRNASecStrModel")) {
h.setSecStrModel$fr_orsay_lri_varna_applications_fragseq_FragSeqRNASecStrModel(data);
}} else if (t.isDataFlavorSupported$java_awt_datatransfer_DataFlavor($I$(22).Flavor)) {
System.out.println$S("[Y]");
var data=t.getTransferData$java_awt_datatransfer_DataFlavor($I$(22).Flavor);
if (Clazz.instanceOf(data, "fr.orsay.lri.varna.applications.fragseq.FragSeqAnnotationDataModel")) {
var d=data;
h.setDataModel$fr_orsay_lri_varna_applications_fragseq_FragSeqAnnotationDataModel(d);
}}}}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.awt.datatransfer.UnsupportedFlavorException")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'dropActionChanged$java_awt_dnd_DropTargetDragEvent', function (arg0) {
});

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
p$1.saveConfig.apply(this, []);
System.exit$I(0);
});

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowIconified$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowDeiconified$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowActivated$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowDeactivated$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'restoreConfig', function () {
var config=$I$(33).loadINI$S(this._INIFilename);
var vals=config.getItemList$S("folders");
System.out.print$S("[C]" + vals);
for (var path, $path = vals.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
System.out.println$S("Loading folder " + path);
this.addFolder$S(path);
}
this._sideList.validate$();
this._listScroller.validate$();
}, p$1);

Clazz.newMeth(C$, 'saveConfig', function () {
var data=Clazz.new_($I$(33));
var i=0;
for (var folderPath, $folderPath = this._treeModel.getFolders$().iterator$(); $folderPath.hasNext$()&&((folderPath=($folderPath.next$())),1);) {
data.addItem$S$S$S("folders", "val" + i, folderPath);
i++;
}
$I$(33).saveINI$fr_orsay_lri_varna_applications_BasicINI$S(data, this._INIFilename);
}, p$1);

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent', function (e) {
this._sideList.validate$();
});

Clazz.newMeth(C$, 'componentMoved$java_awt_event_ComponentEvent', function (e) {
});

Clazz.newMeth(C$, 'componentShown$java_awt_event_ComponentEvent', function (e) {
});

Clazz.newMeth(C$, 'componentHidden$java_awt_event_ComponentEvent', function (e) {
});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
var cmd=e.getActionCommand$();
System.out.println$S(cmd);
if (cmd.equals$O("" + $I$(25).NEW_FOLDER)) {
this._choice.setDialogTitle$S("Watch new folder...");
this._choice.setFileSelectionMode$I(1);
this._choice.setAcceptAllFileFilterUsed$Z(false);
try {
if (this._choice.showOpenDialog$java_awt_Component(this.getSelf$()) == 0) {
this.addFolder$S(this._choice.getSelectedFile$().getCanonicalPath$());
} else {
System.out.println$S("No Selection ");
}} catch (e1) {
if (Clazz.exceptionOf(e1,"java.io.IOException")){
e1.printStackTrace$();
} else {
throw e1;
}
}
} else if (cmd.equals$O("" + $I$(25).ADD_PANEL_DOWN)) {
this.addLowerPanel$();
} else if (cmd.equals$O("" + $I$(25).ADD_PANEL_UP)) {
this.addUpperPanel$();
} else if (cmd.equals$O("" + $I$(25).REMOVE_PANEL_DOWN)) {
this.removeLowerPanel$();
} else if (cmd.equals$O("" + $I$(25).REMOVE_PANEL_UP)) {
this.removeUpperPanel$();
} else if (cmd.equals$O("" + $I$(25).SORT_FILENAME)) {
this._sideList.switchToPath$();
} else if (cmd.equals$O("" + $I$(25).SORT_ID)) {
this._sideList.switchToID$();
} else if (cmd.equals$O("" + $I$(25).TEST_XML)) {
var path="temp.xml";
var vh=this._varnaUpperPanels.getComponent$I(0);
vh.vp.toXML$S(path);
try {
var b=vh.vp.importSession$O(path);
var vh2=this._varnaUpperPanels.getComponent$I(1);
vh2.vp.setConfig$fr_orsay_lri_varna_models_VARNAConfig(b.config);
vh2.vp.showRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA(b.rna);
vh2.vp.repaint$();
} catch (e1) {
if (Clazz.exceptionOf(e1,"fr.orsay.lri.varna.exceptions.ExceptionLoadingFailed")){
e1.printStackTrace$();
} else {
throw e1;
}
}
} else if (cmd.equals$O("" + $I$(25).CHANGE_LNF)) {
try {
var o=this._lnf.getModel$().getSelectedItem$();
System.out.println$O(o);
$I$(15).setLookAndFeel$S((this._lnf.getModel$().getSelectedItem$()).getClassName$());
$I$(34).updateComponentTreeUI$java_awt_Component(this);
this.pack$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.swing.UnsupportedLookAndFeelException")){
var e1 = e$$;
{
e1.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var e2 = e$$;
{
e2.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"InstantiationException")){
var e3 = e$$;
{
e3.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e4 = e$$;
{
e4.printStackTrace$();
}
} else {
throw e$$;
}
}
} else {
$I$(35).showMessageDialog$java_awt_Component$O(this, "Command '" + cmd + "' not implemented yet." );
}});

Clazz.newMeth(C$, ['valueChanged$javax_swing_event_TreeSelectionEvent','valueChanged$'], function (e) {
var t=this._sideList.getSelectionRows$();
if (t == null ) {
System.out.print$S("null");
} else {
System.out.print$S("[");
for (var i=0; i < t.length; i++) {
System.out.print$S(t[i] + ",");
}
System.out.println$S("]");
}});

Clazz.newMeth(C$, 'main$SA', function (args) {
var d=Clazz.new_(C$);
d.setDefaultCloseOperation$I(3);
d.pack$();
d.setVisible$Z(true);
}, 1);
;
(function(){var C$=Clazz.newClass(P$.FragSeqGUI, "Commands", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "NEW_FOLDER", 0, []);
Clazz.newEnumConst($vals, C$.c$, "ADD_PANEL_UP", 1, []);
Clazz.newEnumConst($vals, C$.c$, "ADD_PANEL_DOWN", 2, []);
Clazz.newEnumConst($vals, C$.c$, "REMOVE_PANEL_UP", 3, []);
Clazz.newEnumConst($vals, C$.c$, "REMOVE_PANEL_DOWN", 4, []);
Clazz.newEnumConst($vals, C$.c$, "SORT_ID", 5, []);
Clazz.newEnumConst($vals, C$.c$, "SORT_FILENAME", 6, []);
Clazz.newEnumConst($vals, C$.c$, "REFRESH_ALL", 7, []);
Clazz.newEnumConst($vals, C$.c$, "CHANGE_LNF", 8, []);
Clazz.newEnumConst($vals, C$.c$, "TEST_XML", 9, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){var C$=Clazz.newClass(P$.FragSeqGUI, "VARNAHolder", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vp=null;
this._m=null;
this._data=null;
this._infoPanel=null;
this._infoTxt=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_dnd_DropTargetListener', function (f) {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.vp=Clazz.new_($I$(1));
this.vp.addFocusListener$java_awt_event_FocusListener(((P$.FragSeqGUI$VARNAHolder$1||
(function(){var C$=Clazz.newClass(P$, "FragSeqGUI$VARNAHolder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent', function (e) {
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent', function (e) {
});
})()
), Clazz.new_(P$.FragSeqGUI$VARNAHolder$1.$init$, [this, null])));
this.vp.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2).c$$I$I,[800, 400]));
this._infoTxt=Clazz.new_($I$(3));
this._infoTxt.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2).c$$I$I,[200, 0]));
this._infoTxt.setContentType$S("text/html");
var scroll=Clazz.new_($I$(4).c$$java_awt_Component$I$I,[this._infoTxt, 22, 32]);
this._infoPanel=Clazz.new_($I$(5));
this._infoPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6)));
this._infoPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2).c$$I$I,[200, 0]));
this._infoPanel.setBorder$javax_swing_border_Border($I$(7).createTitledBorder$S("Info"));
this._infoPanel.add$java_awt_Component$O(scroll, "Center");
this._infoPanel.validate$();
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6)));
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2).c$$I$I,[300, 600]));
this.setBorder$javax_swing_border_Border($I$(7).createTitledBorder$S("None"));
this.add$java_awt_Component$O(this.vp, "Center");
var dt=Clazz.new_($I$(8).c$$java_awt_Component$java_awt_dnd_DropTargetListener,[this.vp, f]);
}, 1);

Clazz.newMeth(C$, 'getVARNAPanel$', function () {
return this.vp;
});

Clazz.newMeth(C$, 'setSecStrModel$fr_orsay_lri_varna_applications_fragseq_FragSeqRNASecStrModel', function (m) {
this._m=m;
this.vp.showRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA(m.getRNA$());
this.setBorder$javax_swing_border_Border($I$(7).createTitledBorder$S(m.toString()));
this._infoTxt.setText$S(m.getRNA$().getHTMLDescription$());
this._infoPanel.setBorder$javax_swing_border_Border($I$(7).createTitledBorder$S("Info (" + this._m + ")" ));
this.vp.requestFocus$();
});

Clazz.newMeth(C$, 'setDataModel$fr_orsay_lri_varna_applications_fragseq_FragSeqAnnotationDataModel', function (data) {
this._data=data;
data.applyTo$fr_orsay_lri_varna_models_rna_RNA(this.vp.getRNA$());
this.vp.repaint$();
this.vp.requestFocus$();
});

Clazz.newMeth(C$, 'getModel$', function () {
this.setBorder$javax_swing_border_Border($I$(7).createTitledBorder$S(this._m.toString()));
return this._m;
});

Clazz.newMeth(C$, 'setInfoTxt$S', function (s) {
this._infoTxt.setText$S(this.vp.getRNA$().getHTMLDescription$());
this._infoTxt.validate$();
});

Clazz.newMeth(C$, 'getInfoPane$', function () {
return this._infoPanel;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:42 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
