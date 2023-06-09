(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},p$2={},I$=[[0,'javax.swing.JCheckBox','javax.swing.JLabel','javax.swing.JComboBox','java.awt.BorderLayout','java.awt.Font','jalview.gui.JvSwingUtils','jalview.util.MessageManager','java.awt.GridLayout','javax.swing.JPanel','javax.swing.JScrollPane','javax.swing.JButton','javax.swing.JTextArea',['jalview.ws.params.ValueConstrainI','.ValueType'],'net.miginfocom.swing.MigLayout','java.awt.Dimension','javax.swing.border.TitledBorder','java.awt.Rectangle',['java.awt.Component','.BaselineResizeBehavior'],'javax.swing.JSlider','javax.swing.JTextField','java.util.LinkedHashMap','javax.swing.JPopupMenu','javax.swing.JMenuItem','jalview.gui.Desktop',['jalview.gui.OptsAndParamsPage','.OptionBox'],['jalview.gui.OptsAndParamsPage','.ParamBox'],'Error','java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "OptsAndParamsPage", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.compact=false;
this.linkImageURL=null;
this.optSet=null;
this.paramSet=null;
this.poparent=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.compact=false;
this.linkImageURL=this.getClass$().getResource$S("/images/link.gif");
this.optSet=Clazz.new_($I$(21));
this.paramSet=Clazz.new_($I$(21));
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_OptsParametersContainerI', function (paramContainer) {
C$.c$$jalview_gui_OptsParametersContainerI$Z.apply(this, [paramContainer, false]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_OptsParametersContainerI$Z', function (paramContainer, compact) {
C$.$init$.apply(this);
this.poparent=paramContainer;
this.compact=compact;
}, 1);

Clazz.newMeth(C$, 'showUrlPopUp$javax_swing_JComponent$S$I$I', function (invoker, finfo, x, y) {
var mnu=Clazz.new_($I$(22));
var mitem=Clazz.new_($I$(23).c$$S,[$I$(7).formatMessage$S$SA("label.view_params", Clazz.array(String, -1, [finfo]))]);
mitem.addActionListener$java_awt_event_ActionListener(((P$.OptsAndParamsPage$1||
(function(){var C$=Clazz.newClass(P$, "OptsAndParamsPage$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
$I$(24).showUrl$S(this.$finals$.finfo);
});
})()
), Clazz.new_(P$.OptsAndParamsPage$1.$init$, [this, {finfo: finfo}])));
mnu.add$javax_swing_JMenuItem(mitem);
mnu.show$java_awt_Component$I$I(invoker, x, y);
}, 1);

Clazz.newMeth(C$, 'getOptSet$', function () {
return this.optSet;
});

Clazz.newMeth(C$, 'setOptSet$java_util_Map', function (optSet) {
this.optSet=optSet;
});

Clazz.newMeth(C$, 'getParamSet$', function () {
return this.paramSet;
});

Clazz.newMeth(C$, 'setParamSet$java_util_Map', function (paramSet) {
this.paramSet=paramSet;
});

Clazz.newMeth(C$, 'addOption$jalview_ws_params_OptionI', function (opt) {
var cb=this.optSet.get$O(opt.getName$());
if (cb == null ) {
cb=Clazz.new_($I$(25).c$$jalview_ws_params_OptionI, [this, null, opt]);
this.optSet.put$TK$TV(opt.getName$(), cb);
}return cb;
});

Clazz.newMeth(C$, 'addParameter$jalview_ws_params_ParameterI', function (arg) {
var pb=this.paramSet.get$O(arg.getName$());
if (pb == null ) {
pb=Clazz.new_($I$(26).c$$jalview_gui_OptsParametersContainerI$jalview_ws_params_ParameterI, [this, null, this.poparent, arg]);
this.paramSet.put$TK$TV(arg.getName$(), pb);
}pb.init$();
pb.updateControls$jalview_ws_params_ParameterI(arg);
return pb;
});

Clazz.newMeth(C$, 'selectOption$jalview_ws_params_OptionI$S', function (option, string) {
var cb=this.optSet.get$O(option.getName$());
if (cb == null ) {
cb=this.addOption$jalview_ws_params_OptionI(option);
}cb.$enabled.setSelected$Z(string != null );
if (string != null ) {
if (option.getPossibleValues$().contains$O(string)) {
cb.val.setSelectedItem$O(string);
} else {
throw Clazz.new_($I$(27).c$$S,[$I$(7).formatMessage$S$SA("error.invalid_value_for_option", Clazz.array(String, -1, [string, option.getName$()]))]);
}}if (option.isRequired$() && !cb.$enabled.isSelected$() ) {
}cb.setInitialValue$();
});

Clazz.newMeth(C$, 'setParameter$jalview_ws_params_ParameterI', function (arg) {
var pb=this.paramSet.get$O(arg.getName$());
if (pb == null ) {
this.addParameter$jalview_ws_params_ParameterI(arg);
} else {
pb.updateControls$jalview_ws_params_ParameterI(arg);
}});

Clazz.newMeth(C$, 'getCurrentSettings$', function () {
var argSet=Clazz.new_($I$(28));
for (var opts, $opts = this.getOptSet$().values$().iterator$(); $opts.hasNext$()&&((opts=($opts.next$())),1);) {
var opt=opts.getOptionIfEnabled$();
if (opt != null ) {
argSet.add$TE(opt);
}}
for (var parambox, $parambox = this.getParamSet$().values$().iterator$(); $parambox.hasNext$()&&((parambox=($parambox.next$())),1);) {
var parm=parambox.getParameter$();
if (parm != null ) {
argSet.add$TE(parm);
}}
return argSet;
});
;
(function(){var C$=Clazz.newClass(P$.OptsAndParamsPage, "OptionBox", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel', ['java.awt.event.MouseListener', 'java.awt.event.ActionListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.$enabled=null;
this.finfo=null;
this.hasLink=false;
this.initEnabled=false;
this.initVal=null;
this.option=null;
this.optlabel=null;
this.val=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.$enabled=Clazz.new_($I$(1));
this.hasLink=false;
this.initEnabled=false;
this.initVal=null;
this.optlabel=Clazz.new_($I$(2));
this.val=Clazz.new_($I$(3));
}, 1);

Clazz.newMeth(C$, 'c$$jalview_ws_params_OptionI', function (opt) {
Clazz.super_(C$, this,1);
this.option=opt;
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4)));
this.$enabled.setSelected$Z(opt.isRequired$());
this.$enabled.setFont$java_awt_Font(Clazz.new_($I$(5).c$$S$I$I,["Verdana", 0, 11]));
this.$enabled.setText$S("");
this.$enabled.setText$S(opt.getName$());
this.$enabled.addActionListener$java_awt_event_ActionListener(this);
this.finfo=this.option.getFurtherDetails$();
var desc=opt.getDescription$();
if (this.finfo != null ) {
this.hasLink=true;
this.$enabled.setToolTipText$S($I$(6).wrapTooltip$Z$S(true, ((desc == null  || desc.trim$().length$() == 0 ) ? $I$(7).getString$S("label.opt_and_params_further_details") : desc) + "<br><img src=\"" + this.this$0.linkImageURL + "\"/>" ));
this.$enabled.addMouseListener$java_awt_event_MouseListener(this);
} else {
if (desc != null  && desc.trim$().length$() > 0 ) {
this.$enabled.setToolTipText$S($I$(6).wrapTooltip$Z$S(true, opt.getDescription$()));
}}this.add$java_awt_Component$O(this.$enabled, "North");
for (var str, $str = opt.getPossibleValues$().iterator$(); $str.hasNext$()&&((str=($str.next$())),1);) {
this.val.addItem$TE(str);
}
this.val.setSelectedItem$O(opt.getValue$());
if (opt.getPossibleValues$().size$() > 1) {
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(8).c$$I$I,[1, 2]));
this.val.addActionListener$java_awt_event_ActionListener(this);
this.add$java_awt_Component$O(this.val, "South");
}this.setInitialValue$();
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (e.getSource$() !== this.$enabled ) {
this.$enabled.setSelected$Z(true);
}p$1.checkIfModified.apply(this, []);
});

Clazz.newMeth(C$, 'checkIfModified', function () {
var notmod=(this.initEnabled == this.$enabled.isSelected$() );
if (this.$enabled.isSelected$()) {
if (this.initVal != null ) {
notmod&=this.initVal.equals$O(this.val.getSelectedItem$());
} else {
notmod&=this.option.getValue$() == null  || this.option.getValue$().equals$O(this.val.getSelectedItem$()) ;
}} else {
notmod&=(this.initVal != null ) ? this.initVal.equals$O(this.val.getSelectedItem$()) : this.val.getSelectedItem$() !== this.initVal ;
}this.this$0.poparent.argSetModified$O$Z(this, !notmod);
}, p$1);

Clazz.newMeth(C$, 'getOptionIfEnabled$', function () {
if (!this.$enabled.isSelected$()) {
return null;
}var opt=this.option.copy$();
if (opt.getPossibleValues$() != null  && opt.getPossibleValues$().size$() == 1 ) {
opt.setValue$S(opt.getPossibleValues$().get$I(0));
}if (this.val.getSelectedItem$() != null ) {
opt.setValue$S(this.val.getSelectedItem$());
} else {
if (this.option.getValue$() != null ) {
opt.setValue$S(this.option.getValue$());
}}return opt;
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
if (e.isPopupTrigger$()) {
P$.OptsAndParamsPage.showUrlPopUp$javax_swing_JComponent$S$I$I(this, this.finfo.toString(), e.getX$(), e.getY$());
}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
if (e.isPopupTrigger$()) {
P$.OptsAndParamsPage.showUrlPopUp$javax_swing_JComponent$S$I$I(this, this.finfo.toString(), e.getX$(), e.getY$());
}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'resetToDefault$Z', function (setDefaultParams) {
this.$enabled.setSelected$Z(false);
if (this.option.isRequired$() || (setDefaultParams && this.option.getValue$() != null  ) ) {
this.this$0.selectOption$jalview_ws_params_OptionI$S.apply(this.this$0, [this.option, this.option.getValue$()]);
}});

Clazz.newMeth(C$, 'setInitialValue$', function () {
this.initEnabled=this.$enabled.isSelected$();
if (this.option.getPossibleValues$() != null  && this.option.getPossibleValues$().size$() > 1 ) {
this.initVal=this.val.getSelectedItem$();
} else {
this.initVal=(this.initEnabled) ? this.val.getSelectedItem$() : null;
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.OptsAndParamsPage, "ParamBox", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel', ['javax.swing.event.ChangeListener', 'java.awt.event.ActionListener', 'java.awt.event.MouseListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.adjusting=false;
this.choice=false;
this.choicebox=null;
this.controlPanel=null;
this.descisvisible=false;
this.descPanel=null;
this.finfo=null;
this.integ=false;
this.lastVal=null;
this.parameter=null;
this.pmdialogbox=null;
this.settingPanel=null;
this.showDesc=null;
this.slider=null;
this.string=null;
this.validator=null;
this.valueField=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.adjusting=false;
this.choice=false;
this.controlPanel=Clazz.new_($I$(9));
this.descisvisible=false;
this.descPanel=Clazz.new_($I$(10));
this.integ=false;
this.settingPanel=Clazz.new_($I$(9));
this.showDesc=Clazz.new_($I$(11));
this.slider=null;
this.string=Clazz.new_($I$(12));
this.validator=null;
this.valueField=null;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_OptsParametersContainerI$jalview_ws_params_ParameterI', function (pmlayout, parm) {
Clazz.super_(C$, this,1);
this.pmdialogbox=pmlayout;
this.finfo=parm.getFurtherDetails$();
this.validator=parm.getValidValue$();
this.parameter=parm;
if (this.validator != null ) {
this.integ=this.validator.getType$() === $I$(13).Integer ;
} else {
if (this.parameter.getPossibleValues$() != null ) {
this.choice=true;
}}if (!this.this$0.compact) {
p$2.makeExpanderParam$jalview_ws_params_ParameterI.apply(this, [parm]);
} else {
p$2.makeCompactParam$jalview_ws_params_ParameterI.apply(this, [parm]);
}}, 1);

Clazz.newMeth(C$, 'makeCompactParam$jalview_ws_params_ParameterI', function (parm) {
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(14).c$$S$S,["", "[][grow]"]));
var ttipText=null;
this.controlPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4)));
if (parm.getDescription$() != null  && parm.getDescription$().trim$().length$() > 0 ) {
ttipText=($I$(6).wrapTooltip$Z$S(true, parm.getDescription$() + (this.finfo != null  ? "<br><img src=\"" + this.this$0.linkImageURL + "\"/>" + $I$(7).getString$S("label.opt_and_params_further_details")  : "")));
}$I$(6).mgAddtoLayout$javax_swing_JPanel$S$javax_swing_JLabel$javax_swing_JComponent$S(this, ttipText, Clazz.new_($I$(2).c$$S,[parm.getName$()]), this.controlPanel, "");
this.updateControls$jalview_ws_params_ParameterI(parm);
this.validate$();
}, p$2);

Clazz.newMeth(C$, 'makeExpanderParam$jalview_ws_params_ParameterI', function (parm) {
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(15).c$$I$I,[340, 80]));
this.setBorder$javax_swing_border_Border(Clazz.new_($I$(16).c$$S,[parm.getName$()]));
this.setLayout$java_awt_LayoutManager(null);
this.showDesc.setFont$java_awt_Font(Clazz.new_($I$(5).c$$S$I$I,["Verdana", 0, 6]));
this.showDesc.setText$S("+");
this.string.setFont$java_awt_Font(Clazz.new_($I$(5).c$$S$I$I,["Verdana", 0, 11]));
this.string.setBackground$java_awt_Color(this.getBackground$());
this.string.setEditable$Z(false);
this.descPanel.getViewport$().setView$java_awt_Component(this.string);
this.descPanel.setVisible$Z(false);
var firstrow=Clazz.new_($I$(9));
firstrow.setLayout$java_awt_LayoutManager(null);
this.controlPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4)));
this.controlPanel.setBounds$java_awt_Rectangle(Clazz.new_($I$(17).c$$I$I$I$I,[39, 10, 270, 30]));
firstrow.add$java_awt_Component(this.controlPanel);
firstrow.setBounds$java_awt_Rectangle(Clazz.new_($I$(17).c$$I$I$I$I,[10, 20, 310, 50]));
var me=this;
if (parm.getDescription$() != null  && parm.getDescription$().trim$().length$() > 0 ) {
if (this.finfo != null ) {
this.showDesc.setToolTipText$S($I$(6).wrapTooltip$Z$S(true, $I$(7).formatMessage$S$SA("label.opt_and_params_show_brief_desc_image_link", Clazz.array(String, -1, [this.this$0.linkImageURL.toExternalForm$()]))));
this.showDesc.addMouseListener$java_awt_event_MouseListener(this);
} else {
this.showDesc.setToolTipText$S($I$(6).wrapTooltip$Z$S(true, $I$(7).getString$S("label.opt_and_params_show_brief_desc")));
}this.showDesc.addActionListener$java_awt_event_ActionListener(((P$.OptsAndParamsPage$ParamBox$1||
(function(){var C$=Clazz.newClass(P$, "OptsAndParamsPage$ParamBox$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.OptsAndParamsPage.ParamBox'].descisvisible=!this.b$['jalview.gui.OptsAndParamsPage.ParamBox'].descisvisible;
this.b$['jalview.gui.OptsAndParamsPage.ParamBox'].descPanel.setVisible$Z(this.b$['jalview.gui.OptsAndParamsPage.ParamBox'].descisvisible);
this.b$['jalview.gui.OptsAndParamsPage.ParamBox'].descPanel.getVerticalScrollBar$().setValue$I(0);
this.$finals$.me.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(15).c$$I$I,[340, (this.b$['jalview.gui.OptsAndParamsPage.ParamBox'].descisvisible) ? 150 : 80]));
this.$finals$.me.validate$();
this.b$['jalview.gui.OptsAndParamsPage.ParamBox'].pmdialogbox.refreshParamLayout$();
});
})()
), Clazz.new_(P$.OptsAndParamsPage$ParamBox$1.$init$, [this, {me: me}])));
this.string.setWrapStyleWord$Z(true);
this.string.setLineWrap$Z(true);
this.string.setColumns$I(32);
this.string.setText$S(parm.getDescription$());
this.showDesc.setBounds$java_awt_Rectangle(Clazz.new_($I$(17).c$$I$I$I$I,[10, 10, 16, 16]));
firstrow.add$java_awt_Component(this.showDesc);
}this.add$java_awt_Component(firstrow);
this.validator=parm.getValidValue$();
this.parameter=parm;
if (this.validator != null ) {
this.integ=this.validator.getType$() === $I$(13).Integer ;
} else {
if (this.parameter.getPossibleValues$() != null ) {
this.choice=true;
}}this.updateControls$jalview_ws_params_ParameterI(parm);
this.descPanel.setBounds$java_awt_Rectangle(Clazz.new_($I$(17).c$$I$I$I$I,[10, 80, 320, 65]));
this.add$java_awt_Component(this.descPanel);
this.validate$();
}, p$2);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (this.adjusting) {
return;
}if (!this.choice) {
this.updateSliderFromValueField$();
}p$2.checkIfModified.apply(this, []);
});

Clazz.newMeth(C$, 'checkIfModified', function () {
var cstate=this.updateSliderFromValueField$();
var notmod=false;
if (cstate.getClass$() === this.lastVal.getClass$() ) {
if (Clazz.instanceOf(cstate, Clazz.array(Integer.TYPE, -1))) {
notmod=((cstate)[0] == (this.lastVal)[0]);
} else if (Clazz.instanceOf(cstate, Clazz.array(Float.TYPE, -1))) {
notmod=((cstate)[0] == (this.lastVal)[0] );
} else if (Clazz.instanceOf(cstate, Clazz.array(String, -1))) {
notmod=((cstate)[0].equals$O((this.lastVal)[0]));
}}this.pmdialogbox.argSetModified$O$Z(this, !notmod);
}, p$2);

Clazz.newMeth(C$, 'getBaseline$I$I', function (width, height) {
return 0;
});

Clazz.newMeth(C$, 'getBaselineResizeBehavior$', function () {
return $I$(18).CONSTANT_ASCENT;
});

Clazz.newMeth(C$, 'getBoxHeight$', function () {
return (this.descisvisible ? 150 : 80);
});

Clazz.newMeth(C$, 'getParameter$', function () {
var prm=this.parameter.copy$();
if (this.choice) {
prm.setValue$S(this.choicebox.getSelectedItem$());
} else {
prm.setValue$S(this.valueField.getText$());
}return prm;
});

Clazz.newMeth(C$, 'init$', function () {
this.lastVal=null;
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
if (e.isPopupTrigger$()) {
P$.OptsAndParamsPage.showUrlPopUp$javax_swing_JComponent$S$I$I(this, this.finfo.toString(), e.getX$(), e.getY$());
}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
if (e.isPopupTrigger$()) {
P$.OptsAndParamsPage.showUrlPopUp$javax_swing_JComponent$S$I$I(this, this.finfo.toString(), e.getX$(), e.getY$());
}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
if (!this.adjusting) {
this.valueField.setText$S("" + ((this.integ) ? ("" + this.slider.getValue$()) : ("" + new Float(this.slider.getValue$() / 1000.0).toString())));
p$2.checkIfModified.apply(this, []);
}});

Clazz.newMeth(C$, 'updateControls$jalview_ws_params_ParameterI', function (parm) {
this.adjusting=true;
var init=(this.choicebox == null  && this.valueField == null  );
if (init) {
if (this.choice) {
this.choicebox=Clazz.new_($I$(3));
this.choicebox.addActionListener$java_awt_event_ActionListener(this);
this.controlPanel.add$java_awt_Component$O(this.choicebox, "Center");
} else {
this.slider=Clazz.new_($I$(19));
this.slider.addChangeListener$javax_swing_event_ChangeListener(this);
this.valueField=Clazz.new_($I$(20));
this.valueField.addActionListener$java_awt_event_ActionListener(this);
this.valueField.addKeyListener$java_awt_event_KeyListener(((P$.OptsAndParamsPage$ParamBox$2||
(function(){var C$=Clazz.newClass(P$, "OptsAndParamsPage$ParamBox$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.KeyListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent', function (e) {
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent', function (e) {
if (e.isActionKey$()) {
if (this.b$['jalview.gui.OptsAndParamsPage.ParamBox'].valueField.getText$().trim$().length$() > 0) {
this.b$['jalview.gui.OptsAndParamsPage.ParamBox'].actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.OptsAndParamsPage.ParamBox'], [null]);
}}});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (e) {
});
})()
), Clazz.new_(P$.OptsAndParamsPage$ParamBox$2.$init$, [this, null])));
this.valueField.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(15).c$$I$I,[60, 25]));
this.controlPanel.add$java_awt_Component$O(this.slider, "West");
this.controlPanel.add$java_awt_Component$O(this.valueField, "East");
}}if (parm != null ) {
if (this.choice) {
if (init) {
var vals=parm.getPossibleValues$();
for (var val, $val = vals.iterator$(); $val.hasNext$()&&((val=($val.next$())),1);) {
this.choicebox.addItem$TE(val);
}
}if (parm.getValue$() != null ) {
this.choicebox.setSelectedItem$O(parm.getValue$());
}} else {
this.valueField.setText$S(parm.getValue$());
}}this.lastVal=this.updateSliderFromValueField$();
this.adjusting=false;
});

Clazz.newMeth(C$, 'updateSliderFromValueField$', function () {
var iVal;
var fVal;
if (this.validator != null ) {
if (this.integ) {
iVal=0;
try {
this.valueField.setText$S(this.valueField.getText$().trim$());
iVal=(Integer.valueOf$S(this.valueField.getText$())).intValue$();
if (this.validator.getMin$() != null  && this.validator.getMin$().intValue$() > iVal ) {
iVal=this.validator.getMin$().intValue$();
}if (this.validator.getMax$() != null  && this.validator.getMax$().intValue$() < iVal ) {
iVal=this.validator.getMax$().intValue$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
;this.valueField.setText$S("" + iVal);
if (this.validator.getMin$() != null  && this.validator.getMax$() != null  ) {
this.slider.getModel$().setRangeProperties$I$I$I$I$Z(iVal, 1, this.validator.getMin$().intValue$(), this.validator.getMax$().intValue$() + 1, true);
} else {
this.slider.setVisible$Z(false);
}return Clazz.array(Integer.TYPE, -1, [iVal]);
} else {
fVal=0.0;
try {
this.valueField.setText$S(this.valueField.getText$().trim$());
fVal=(Float.valueOf$S(this.valueField.getText$())).floatValue$();
if (this.validator.getMin$() != null  && this.validator.getMin$().floatValue$() > fVal  ) {
fVal=this.validator.getMin$().floatValue$();
this.valueField.setText$S("" + new Float(fVal).toString());
}if (this.validator.getMax$() != null  && this.validator.getMax$().floatValue$() < fVal  ) {
fVal=this.validator.getMax$().floatValue$();
this.valueField.setText$S("" + new Float(fVal).toString());
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
;if (this.validator.getMin$() != null  && this.validator.getMax$() != null  ) {
this.slider.getModel$().setRangeProperties$I$I$I$I$Z(((fVal * 1000.0)|0), 1, ((this.validator.getMin$().floatValue$() * 1000.0)|0), 1 + ((this.validator.getMax$().floatValue$() * 1000.0)|0), true);
} else {
this.slider.setVisible$Z(false);
}return Clazz.array(Float.TYPE, -1, [fVal]);
}} else {
if (!this.choice) {
this.slider.setVisible$Z(false);
return Clazz.array(String, -1, [this.valueField.getText$().trim$()]);
} else {
return Clazz.array(String, -1, [this.choicebox.getSelectedItem$()]);
}}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
