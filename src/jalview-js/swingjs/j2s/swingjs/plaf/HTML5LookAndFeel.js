(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'javax.swing.plaf.FontUIResource','javax.swing.UIDefaults','java.awt.Color','javax.swing.plaf.ColorUIResource','javax.swing.plaf.InsetsUIResource','sun.swing.SwingLazyValue',['javax.swing.plaf.BorderUIResource','.EtchedBorderUIResource'],['javax.swing.DefaultListCellRenderer','.UIResource'],'javax.swing.plaf.DimensionUIResource',['javax.swing.plaf.BorderUIResource','.EmptyBorderUIResource'],'java.awt.Dimension','Boolean',['javax.swing.UIDefaults','.LazyInputMap']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "HTML5LookAndFeel", null, 'javax.swing.LookAndFeel');
C$.dialogPlain12=null;
C$.dialogBold12=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.dialogPlain12=Clazz.new_($I$(1).c$$S$I$I,["Dialog", 0, 12]);
C$.dialogBold12=Clazz.new_($I$(1).c$$S$I$I,["Dialog", 1, 12]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'getDefaults$', function () {
var table=Clazz.new_($I$(2).c$$I$F,[610, 0.75]);
this.initClassDefaults$javax_swing_UIDefaults(table);
this.initSystemColorDefaults$javax_swing_UIDefaults(table);
this.initComponentDefaults$javax_swing_UIDefaults(table);
return table;
});

Clazz.newMeth(C$, 'initialize$', function () {
});

Clazz.newMeth(C$, 'installAWTEventListener$', function () {
});

Clazz.newMeth(C$, 'uninitialize$', function () {
});

Clazz.newMeth(C$, 'initClassDefaults$javax_swing_UIDefaults', function (table) {
var packageName="swingjs.plaf.";
var uiDefaults=Clazz.array(java.lang.Object, -1, ["ButtonUI", "swingjs.plaf.JSButtonUI", "CheckBoxUI", "swingjs.plaf.JSCheckBoxUI", "ColorChooserUI", "swingjs.plaf.JSColorChooserUI", "FormattedTextFieldUI", "swingjs.plaf.JSFormattedTextFieldUI", "MenuBarUI", "swingjs.plaf.JSMenuBarUI", "MenuUI", "swingjs.plaf.JSMenuUI", "MenuItemUI", "swingjs.plaf.JSMenuItemUI", "CheckBoxMenuItemUI", "swingjs.plaf.JSCheckBoxMenuItemUI", "RadioButtonMenuItemUI", "swingjs.plaf.JSRadioButtonMenuItemUI", "RadioButtonUI", "swingjs.plaf.JSRadioButtonUI", "ToggleButtonUI", "swingjs.plaf.JSToggleButtonUI", "PopupMenuUI", "swingjs.plaf.JSPopupMenuUI", "ProgressBarUI", "swingjs.plaf.JSProgressBarUI", "ScrollBarUI", "swingjs.plaf.JSScrollBarUI", "ScrollPaneUI", "swingjs.plaf.JSScrollPaneUI", "SplitPaneUI", "swingjs.plaf.JSSplitPaneUI", "SliderUI", "swingjs.plaf.JSSliderUI", "SeparatorUI", "swingjs.plaf.JSSeparatorUI", "SpinnerUI", "swingjs.plaf.JSSpinnerUI", "ToolBarSeparatorUI", "swingjs.plaf.JSToolBarSeparatorUI", "PopupMenuSeparatorUI", "swingjs.plaf.JSPopupMenuSeparatorUI", "TabbedPaneUI", "swingjs.plaf.JSTabbedPaneUI", "TextAreaUI", "swingjs.plaf.JSTextAreaUI", "TextFieldUI", "swingjs.plaf.JSTextFieldUI", "PasswordFieldUI", "swingjs.plaf.JSPasswordFieldUI", "TextPaneUI", "swingjs.plaf.JSTextPaneUI", "EditorPaneUI", "swingjs.plaf.JSEditorPaneUI", "TreeUI", "swingjs.plaf.JSTreeUI", "LabelUI", "swingjs.plaf.JSLabelUI", "ListUI", "swingjs.plaf.JSListUI", "ToolBarUI", "swingjs.plaf.JSToolBarUI", "ToolTipUI", "swingjs.plaf.JSToolTipUI", "ComboBoxUI", "swingjs.plaf.JSComboBoxUI", "TableUI", "swingjs.plaf.JSTableUI", "TableHeaderUI", "swingjs.plaf.JSTableHeaderUI", "InternalFrameUI", "swingjs.plaf.JSInternalFrameUI", "DesktopPaneUI", "swingjs.plaf.JSDesktopPaneUI", "DesktopIconUI", "swingjs.plaf.JSDesktopIconUI", "OptionPaneUI", "swingjs.plaf.JSOptionPaneUI", "PanelUI", "swingjs.plaf.JSPanelUI", "ViewportUI", "swingjs.plaf.JSViewportUI", "RootPaneUI", "swingjs.plaf.JSRootPaneUI"]);
table.putDefaults$OA(uiDefaults);
});

Clazz.newMeth(C$, 'initSystemColorDefaults$javax_swing_UIDefaults', function (table) {
var defaultSystemColors=Clazz.array(String, -1, ["window", "#FFFFFF", "windowBorder", "#000000", "windowText", "#333333", "menu", "#EEEEEE", "menuText", "#333333", "text", "#C0C0C0", "textText", "#333333", "textHighlight", "#B8CFE5", "textHighlightText", "#000000", "textInactiveText", "#808080", "control", "#EEEEEE", "controlText", "#333333", "controlHighlight", "#C0C0C0", "controlLtHighlight", "#B8CFE5", "controlShadow", "#808080", "controlDkShadow", "#000000", "scrollbar", "#E0E0E0", "info", "#FFFFE1", "infoText", "#000000"]);
this.loadSystemColors$javax_swing_UIDefaults$SA$Z(table, defaultSystemColors, this.isNativeLookAndFeel$());
});

Clazz.newMeth(C$, 'loadSystemColors$javax_swing_UIDefaults$SA$Z', function (table, systemColors, useNative) {
for (var i=0; i < systemColors.length; i+=2) {
var color=$I$(3).black;
try {
color=$I$(3).decode$S(systemColors[i + 1]);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
e.printStackTrace$();
} else {
throw e;
}
}
table.put$O$O(systemColors[i], Clazz.new_($I$(4).c$$java_awt_Color,[color]));
}
});

Clazz.newMeth(C$, 'initResourceBundle$javax_swing_UIDefaults', function (table) {
}, p$1);

Clazz.newMeth(C$, 'initComponentDefaults$javax_swing_UIDefaults', function (table) {
p$1.initResourceBundle$javax_swing_UIDefaults.apply(this, [table]);
var oneThousand= new Long(1000);
var twelve= new Integer(12);
var fontPlain= new Integer(0);
var serifPlain12=Clazz.new_($I$(1).c$$S$I$I,["Serif", 0, 12]);
var sansSerifPlain12=Clazz.new_($I$(1).c$$S$I$I,["SansSerif", 0, 12]);
var monospacedPlain12=Clazz.new_($I$(1).c$$S$I$I,["Monospaced", 0, 12]);
var red=Clazz.new_($I$(4).c$$java_awt_Color,[$I$(3).red]);
var black=Clazz.new_($I$(4).c$$java_awt_Color,[$I$(3).black]);
var white=Clazz.new_($I$(4).c$$java_awt_Color,[$I$(3).white]);
var gray=Clazz.new_($I$(4).c$$java_awt_Color,[$I$(3).gray]);
var darkGray=Clazz.new_($I$(4).c$$java_awt_Color,[$I$(3).darkGray]);
var scrollBarTrack=Clazz.new_($I$(4).c$$I$I$I,[224, 224, 224]);
var control=table.getColor$O("control");
var controlDkShadow=table.getColor$O("controlDkShadow");
var controlHighlight=table.getColor$O("controlHighlight");
var controlLtHighlight=table.getColor$O("controlLtHighlight");
var controlShadow=table.getColor$O("controlShadow");
var controlText=table.getColor$O("controlText");
var menu=table.getColor$O("menu");
var menuText=table.getColor$O("menuText");
var textHighlight=table.getColor$O("textHighlight");
var textHighlightText=table.getColor$O("textHighlightText");
var disabledTextColor=table.getColor$O("textInactiveText");
var textText=table.getColor$O("textText");
var window=table.getColor$O("window");
var zeroInsets=Clazz.new_($I$(5).c$$I$I$I$I,[0, 0, 0, 0]);
var twoInsets=Clazz.new_($I$(5).c$$I$I$I$I,[2, 2, 2, 2]);
var threeInsets=Clazz.new_($I$(5).c$$I$I$I$I,[3, 3, 3, 3]);
var marginBorder=Clazz.new_($I$(6).c$$S,["javax.swing.plaf.basic.BasicBorders$MarginBorder"]);
var etchedBorder=Clazz.new_($I$(7));
var loweredBevelBorder=Clazz.new_($I$(6).c$$S$S,["javax.swing.plaf.BorderUIResource", "getLoweredBevelBorderUIResource$"]);
var blackLineBorder=Clazz.new_($I$(6).c$$S$S,["javax.swing.plaf.BorderUIResource", "getBlackLineBorderUIResource$"]);
var buttonBorder=Clazz.new_($I$(6).c$$S$S,["javax.swing.plaf.basic.BasicBorders", "getButtonBorder$"]);
var buttonToggleBorder=Clazz.new_($I$(6).c$$S$S,["javax.swing.plaf.basic.BasicBorders", "getToggleButtonBorder$"]);
var radioButtonBorder=Clazz.new_($I$(6).c$$S$S,["javax.swing.plaf.basic.BasicBorders", "getRadioButtonBorder$"]);
var listCellRendererActiveValue=((P$.HTML5LookAndFeel$1||
(function(){var C$=Clazz.newClass(P$, "HTML5LookAndFeel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['javax.swing.UIDefaults','javax.swing.UIDefaults.ActiveValue']], 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['createValue$javax_swing_UIDefaults','createValue$'], function (table) {
return Clazz.new_($I$(8));
});
})()
), Clazz.new_(P$.HTML5LookAndFeel$1.$init$, [this, null]));
var optionPaneMinimumSize=Clazz.new_($I$(9).c$$I$I,[262, 90]);
var zero= new Integer(0);
var zeroBorder=Clazz.new_($I$(6).c$$S$OA,["javax.swing.plaf.BorderUIResource$EmptyBorderUIResource", Clazz.array(java.lang.Object, -1, [zero, zero, zero, zero])]);
var optionPaneBorder=Clazz.new_($I$(10).c$$I$I$I$I,[10, 10, 12, 10]);
var optionPaneButtonAreaBorder=Clazz.new_($I$(6).c$$S$OA,["javax.swing.plaf.BorderUIResource$EmptyBorderUIResource", Clazz.array(java.lang.Object, -1, [ new Integer(6), zero, zero, zero])]);
var toolBarSeparatorSize=Clazz.new_($I$(9).c$$I$I,[10, 10]);
var tabbedPaneTabInsets=Clazz.new_($I$(5).c$$I$I$I$I,[4, 4, 8, 4]);
var tabbedPaneTabPadInsets=Clazz.new_($I$(5).c$$I$I$I$I,[2, 2, 2, 1]);
var tabbedPaneTabAreaInsets=Clazz.new_($I$(5).c$$I$I$I$I,[3, 2, 0, 2]);
var tabbedPaneContentBorderInsets=Clazz.new_($I$(5).c$$I$I$I$I,[2, 2, 3, 3]);
var editorMargin=threeInsets;
var four= new Integer(4);
var defaults=Clazz.array(java.lang.Object, -1, ["*.font", C$.dialogPlain12, "*.background", control, "*.foreground", controlText, "Button.background", control, "Button.foreground", controlText, "Button.inactiveForeground", disabledTextColor, "Button.border", buttonBorder, "Button.margin", Clazz.new_($I$(5).c$$I$I$I$I,[2, 14, 2, 14]), "Button.textIconGap", four, "ToggleButton.background", control, "ToggleButton.foreground", controlText, "ToggleButton.highlight", controlLtHighlight, "ToggleButton.border", buttonBorder, "ToggleButton.margin", Clazz.new_($I$(5).c$$I$I$I$I,[2, 14, 2, 14]), "ToggleButton.textIconGap", four, "ToggleButton.textShiftOffset", zero, "RadioButton.background", control, "RadioButton.foreground", controlText, "RadioButton.border", buttonBorder, "RadioButton.margin", twoInsets, "RadioButton.textIconGap", four, "RadioButton.textShiftOffset", zero, "CheckBox.background", control, "CheckBox.foreground", controlText, "CheckBox.border", buttonBorder, "CheckBox.margin", twoInsets, "CheckBox.textIconGap", four, "CheckBox.textShiftOffset", zero, "ColorChooser.background", control, "ColorChooser.foreground", controlText, "ColorChooser.swatchesSwatchSize", Clazz.new_($I$(11).c$$I$I,[10, 10]), "ColorChooser.swatchesRecentSwatchSize", Clazz.new_($I$(11).c$$I$I,[10, 10]), "ColorChooser.swatchesDefaultRecentColor", control, "ComboBox.font", sansSerifPlain12, "ComboBox.background", window, "ComboBox.foreground", textText, "ComboBox.selectionBackground", textHighlight, "ComboBox.selectionForeground", textHighlightText, "ComboBox.disabledBackground", control, "ComboBox.disabledForeground", disabledTextColor, "ComboBox.timeFactor", oneThousand, "ComboBox.isEnterSelectablePopup", $I$(12).FALSE, "FileChooser.readOnly", $I$(12).FALSE, "InternalFrameTitlePane.iconifyButtonOpacity", $I$(12).TRUE, "InternalFrameTitlePane.maximizeButtonOpacity", $I$(12).TRUE, "InternalFrameTitlePane.closeButtonOpacity", $I$(12).TRUE, "Desktop.minOnScreenInsets", threeInsets, "Desktop.background", table.get$O("desktop"), "Label.font", C$.dialogBold12, "Label.background", control, "Label.foreground", controlText, "Label.inactiveForeground", disabledTextColor, "Label.border", null, "List.background", window, "List.foreground", textText, "List.selectionBackground", textHighlight, "List.selectionForeground", textHighlightText, "List.cellRenderer", listCellRendererActiveValue, "List.timeFactor", oneThousand, "List.focusInputMap", Clazz.new_($I$(13).c$$OA,[Clazz.array(java.lang.Object, -1, ["ctrl C", "copy", "ctrl V", "paste", "ctrl X", "cut", "COPY", "copy", "PASTE", "paste", "CUT", "cut", "control INSERT", "copy", "shift INSERT", "paste", "shift DELETE", "cut", "UP", "selectPreviousRow", "KP_UP", "selectPreviousRow", "shift UP", "selectPreviousRowExtendSelection", "shift KP_UP", "selectPreviousRowExtendSelection", "ctrl shift UP", "selectPreviousRowExtendSelection", "ctrl shift KP_UP", "selectPreviousRowExtendSelection", "ctrl UP", "selectPreviousRowChangeLead", "ctrl KP_UP", "selectPreviousRowChangeLead", "DOWN", "selectNextRow", "KP_DOWN", "selectNextRow", "shift DOWN", "selectNextRowExtendSelection", "shift KP_DOWN", "selectNextRowExtendSelection", "ctrl shift DOWN", "selectNextRowExtendSelection", "ctrl shift KP_DOWN", "selectNextRowExtendSelection", "ctrl DOWN", "selectNextRowChangeLead", "ctrl KP_DOWN", "selectNextRowChangeLead", "LEFT", "selectPreviousColumn", "KP_LEFT", "selectPreviousColumn", "shift LEFT", "selectPreviousColumnExtendSelection", "shift KP_LEFT", "selectPreviousColumnExtendSelection", "ctrl shift LEFT", "selectPreviousColumnExtendSelection", "ctrl shift KP_LEFT", "selectPreviousColumnExtendSelection", "ctrl LEFT", "selectPreviousColumnChangeLead", "ctrl KP_LEFT", "selectPreviousColumnChangeLead", "RIGHT", "selectNextColumn", "KP_RIGHT", "selectNextColumn", "shift RIGHT", "selectNextColumnExtendSelection", "shift KP_RIGHT", "selectNextColumnExtendSelection", "ctrl shift RIGHT", "selectNextColumnExtendSelection", "ctrl shift KP_RIGHT", "selectNextColumnExtendSelection", "ctrl RIGHT", "selectNextColumnChangeLead", "ctrl KP_RIGHT", "selectNextColumnChangeLead", "HOME", "selectFirstRow", "shift HOME", "selectFirstRowExtendSelection", "ctrl shift HOME", "selectFirstRowExtendSelection", "ctrl HOME", "selectFirstRowChangeLead", "END", "selectLastRow", "shift END", "selectLastRowExtendSelection", "ctrl shift END", "selectLastRowExtendSelection", "ctrl END", "selectLastRowChangeLead", "PAGE_UP", "scrollUp", "shift PAGE_UP", "scrollUpExtendSelection", "ctrl shift PAGE_UP", "scrollUpExtendSelection", "ctrl PAGE_UP", "scrollUpChangeLead", "PAGE_DOWN", "scrollDown", "shift PAGE_DOWN", "scrollDownExtendSelection", "ctrl shift PAGE_DOWN", "scrollDownExtendSelection", "ctrl PAGE_DOWN", "scrollDownChangeLead", "ctrl A", "selectAll", "ctrl SLASH", "selectAll", "ctrl BACK_SLASH", "clearSelection", "SPACE", "addToSelection", "ctrl SPACE", "toggleAndAnchor", "shift SPACE", "extendTo", "ctrl shift SPACE", "moveSelectionTo"])]), "List.focusInputMap.RightToLeft", Clazz.new_($I$(13).c$$OA,[Clazz.array(java.lang.Object, -1, ["LEFT", "selectNextColumn", "KP_LEFT", "selectNextColumn", "shift LEFT", "selectNextColumnExtendSelection", "shift KP_LEFT", "selectNextColumnExtendSelection", "ctrl shift LEFT", "selectNextColumnExtendSelection", "ctrl shift KP_LEFT", "selectNextColumnExtendSelection", "ctrl LEFT", "selectNextColumnChangeLead", "ctrl KP_LEFT", "selectNextColumnChangeLead", "RIGHT", "selectPreviousColumn", "KP_RIGHT", "selectPreviousColumn", "shift RIGHT", "selectPreviousColumnExtendSelection", "shift KP_RIGHT", "selectPreviousColumnExtendSelection", "ctrl shift RIGHT", "selectPreviousColumnExtendSelection", "ctrl shift KP_RIGHT", "selectPreviousColumnExtendSelection", "ctrl RIGHT", "selectPreviousColumnChangeLead", "ctrl KP_RIGHT", "selectPreviousColumnChangeLead"])]), "MenuBar.font", C$.dialogPlain12, "MenuBar.background", menu, "MenuBar.foreground", menuText, "MenuItem.font", C$.dialogPlain12, "MenuItem.background", menu, "MenuItem.foreground", menuText, "MenuItem.border", marginBorder, "MenuItem.borderPainted", $I$(12).FALSE, "MenuItem.margin", twoInsets, "RadioButtonMenuItem.font", C$.dialogPlain12, "RadioButtonMenuItem.background", menu, "RadioButtonMenuItem.foreground", menuText, "RadioButtonMenuItem.border", marginBorder, "RadioButtonMenuItem.margin", twoInsets, "CheckBoxMenuItem.font", C$.dialogPlain12, "CheckBoxMenuItem.background", menu, "CheckBoxMenuItem.foreground", menuText, "CheckBoxMenuItem.border", marginBorder, "CheckBoxMenuItem.borderPainted", $I$(12).FALSE, "CheckBoxMenuItem.margin", twoInsets, "Menu.background", menu, "Menu.foreground", menuText, "Menu.border", marginBorder, "Menu.borderPainted", $I$(12).FALSE, "Menu.margin", twoInsets, "Menu.crossMenuMnemonic", $I$(12).FALSE, "PopupMenu.background", menu, "PopupMenu.foreground", menuText, "PopupMenu.selectedWindowInputMapBindings", Clazz.array(java.lang.Object, -1, ["ESCAPE", "cancel", "DOWN", "selectNext", "KP_DOWN", "selectNext", "UP", "selectPrevious", "KP_UP", "selectPrevious", "LEFT", "selectParent", "KP_LEFT", "selectParent", "RIGHT", "selectChild", "KP_RIGHT", "selectChild", "ENTER", "return", "ctrl ENTER", "return", "SPACE", "return"]), "PopupMenu.consumeEventOnClose", $I$(12).FALSE, "OptionPane.yesButtonText", "Yes", "OptionPane.noButtonText", "No", "OptionPane.cancelButtonText", "Cancel", "OptionPane.okButtonText", "OK", "OptionPane.font", C$.dialogPlain12, "OptionPane.background", control, "OptionPane.foreground", controlText, "OptionPane.messageForeground", controlText, "OptionPane.border", optionPaneBorder, "OptionPane.messageAreaBorder", zeroBorder, "OptionPane.buttonAreaBorder", optionPaneButtonAreaBorder, "OptionPane.minimumSize", optionPaneMinimumSize, "Panel.font", C$.dialogPlain12, "Panel.background", control, "Panel.foreground", textText, "ProgressBar.cellLength",  new Integer(1), "ProgressBar.cellSpacing", zero, "ProgressBar.repaintInterval",  new Integer(50), "ProgressBar.cycleTime",  new Integer(3000), "ProgressBar.horizontalSize", Clazz.new_($I$(9).c$$I$I,[146, 12]), "ProgressBar.verticalSize", Clazz.new_($I$(9).c$$I$I,[12, 146]), "ScrollBar.background", scrollBarTrack, "ScrollBar.foreground", control, "ScrollBar.width",  new Integer(16), "ScrollPane.background", control, "ScrollPane.foreground", controlText, "Viewport.background", control, "Viewport.foreground", textText, "Slider.font", C$.dialogPlain12, "Slider.foreground", control, "Slider.background", control, "Slider.horizontalSize", Clazz.new_($I$(11).c$$I$I,[200, 21]), "Slider.verticalSize", Clazz.new_($I$(11).c$$I$I,[21, 200]), "Slider.minimumHorizontalSize", Clazz.new_($I$(11).c$$I$I,[36, 21]), "Slider.minimumVerticalSize", Clazz.new_($I$(11).c$$I$I,[21, 36]), "Spinner.font", sansSerifPlain12, "Spinner.background", control, "Spinner.foreground", control, "Spinner.arrowButtonSize", Clazz.new_($I$(11).c$$I$I,[16, 5]), "SplitPane.background", control, "SplitPane.dividerSize",  new Integer(7), "SplitPaneDivider.draggingColor", darkGray, "TabbedPane.font", C$.dialogPlain12, "TabbedPane.background", control, "TabbedPane.foreground", controlText, "TabbedPane.highlight", controlLtHighlight, "TabbedPane.light", controlHighlight, "TabbedPane.shadow", controlShadow, "TabbedPane.darkShadow", controlDkShadow, "TabbedPane.selected", null, "TabbedPane.textIconGap", four, "TabbedPane.tabsOverlapBorder", $I$(12).FALSE, "TabbedPane.labelShift", new Integer(1), "TabbedPane.selectedLabelShift", new Integer(-1), "TabbedPane.tabInsets", tabbedPaneTabInsets, "TabbedPane.selectedTabPadInsets", tabbedPaneTabPadInsets, "TabbedPane.tabAreaInsets", tabbedPaneTabAreaInsets, "TabbedPane.contentBorderInsets", tabbedPaneContentBorderInsets, "TabbedPane.tabRunOverlay",  new Integer(2), "Table.font", C$.dialogPlain12, "Table.foreground", controlText, "Table.background", white, "Table.selectionForeground", textHighlightText, "Table.selectionBackground", textHighlight, "Table.dropLineColor", controlShadow, "Table.dropLineShortColor", black, "Table.gridColor", gray, "Table.focusCellBackground", window, "Table.focusCellForeground", controlText, "Table.scrollPaneBorder", loweredBevelBorder, "Table.sortIconColor", controlShadow, "TableHeader.font", C$.dialogPlain12, "TableHeader.foreground", controlText, "TableHeader.background", control, "TextField.font", sansSerifPlain12, "TextField.background", window, "TextField.foreground", textText, "TextField.inactiveForeground", disabledTextColor, "TextField.inactiveBackground", control, "TextField.margin", zeroInsets, "FormattedTextField.font", sansSerifPlain12, "FormattedTextField.background", window, "FormattedTextField.foreground", textText, "FormattedTextField.inactiveForeground", disabledTextColor, "FormattedTextField.inactiveBackground", control, "FormattedTextField.caretForeground", textText, "FormattedTextField.margin", zeroInsets, "PasswordField.font", monospacedPlain12, "PasswordField.background", window, "PasswordField.foreground", textText, "PasswordField.inactiveForeground", disabledTextColor, "PasswordField.inactiveBackground", control, "PasswordField.margin", zeroInsets, "PasswordField.echoChar", new Character('*'), "TextArea.font", sansSerifPlain12, "TextArea.background", window, "TextArea.foreground", textText, "TextArea.inactiveForeground", disabledTextColor, "TextArea.margin", zeroInsets, "TextPane.font", serifPlain12, "TextPane.background", white, "TextPane.foreground", textText, "TextPane.inactiveForeground", disabledTextColor, "TextPane.margin", editorMargin, "EditorPane.font", serifPlain12, "EditorPane.background", white, "EditorPane.foreground", textText, "EditorPane.inactiveForeground", disabledTextColor, "EditorPane.margin", editorMargin, "TitledBorder.titleColor", controlText, "TitledBorder.border", etchedBorder, "ToolBar.font", C$.dialogPlain12, "ToolBar.background", control, "ToolBar.foreground", controlText, "ToolBar.shadow", controlShadow, "ToolBar.darkShadow", controlDkShadow, "ToolBar.light", controlHighlight, "ToolBar.highlight", controlLtHighlight, "ToolBar.dockingBackground", control, "ToolBar.dockingForeground", red, "ToolBar.floatingBackground", control, "ToolBar.floatingForeground", darkGray, "ToolBar.border", etchedBorder, "ToolBar.separatorSize", toolBarSeparatorSize, "ToolTip.font", sansSerifPlain12, "ToolTip.background", table.get$O("info"), "ToolTip.foreground", table.get$O("infoText"), "ToolTip.border", blackLineBorder, "Tree.paintLines", $I$(12).TRUE, "Tree.lineTypeDashed", $I$(12).FALSE, "Tree.background", window, "Tree.foreground", textText, "Tree.hash", gray, "Tree.textForeground", textText, "Tree.textBackground", table.get$O("text"), "Tree.selectionForeground", textHighlightText, "Tree.selectionBackground", textHighlight, "Tree.leftChildIndent",  new Integer(7), "Tree.rightChildIndent",  new Integer(13), "Tree.rowHeight",  new Integer(16), "Tree.scrollsOnExpand", $I$(12).TRUE, "Tree.timeFactor", oneThousand]);
table.putDefaults$OA(defaults);
});

Clazz.newMeth(C$, 'getName$', function () {
return "SwingJS";
});

Clazz.newMeth(C$, 'getID$', function () {
return "SwingJS";
});

Clazz.newMeth(C$, 'getDescription$', function () {
return "SwingJS L&F";
});

Clazz.newMeth(C$, 'isNativeLookAndFeel$', function () {
return true;
});

Clazz.newMeth(C$, 'isSupportedLookAndFeel$', function () {
return true;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:48 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
