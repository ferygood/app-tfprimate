(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'javax.swing.JFrame','javax.swing.JButton','javax.swing.JPanel','javax.swing.JLabel','java.awt.Color','java.awt.BorderLayout']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MenuChooser", null, null, 'java.awt.event.ActionListener');
C$.protein=false;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.choosemenu=null;
this.bouton=null;
this.bouton2=null;
this.container=null;
this.label=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.choosemenu=Clazz.new_($I$(1).c$$S,["Animation"]);
this.bouton=Clazz.new_($I$(2).c$$S,["bouton 1"]);
this.bouton2=Clazz.new_($I$(2).c$$S,["bouton 2"]);
this.container=Clazz.new_($I$(3));
this.label=Clazz.new_($I$(4).c$$S,["Le JLabel"]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.choosemenu.setSize$I$I(300, 300);
this.choosemenu.setDefaultCloseOperation$I(2);
this.choosemenu.setLocationRelativeTo$java_awt_Component(null);
this.container.setBackground$java_awt_Color($I$(5).white);
this.container.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6)));
this.bouton.addActionListener$java_awt_event_ActionListener(this);
this.bouton2.addActionListener$java_awt_event_ActionListener(this);
var south=Clazz.new_($I$(3));
south.add$java_awt_Component(this.bouton);
south.add$java_awt_Component(this.bouton2);
this.container.add$java_awt_Component$O(south, "South");
this.label.setForeground$java_awt_Color($I$(5).blue);
this.label.setHorizontalAlignment$I(0);
this.container.add$java_awt_Component$O(this.label, "North");
this.choosemenu.setContentPane$java_awt_Container(this.container);
this.choosemenu.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (arg0) {
if (arg0.getSource$() === this.bouton ) C$.protein=false;
this.label.setText$S("RNA menu");
if (arg0.getSource$() === this.bouton2 ) this.label.setText$S("Protein menu");
C$.protein=true;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
