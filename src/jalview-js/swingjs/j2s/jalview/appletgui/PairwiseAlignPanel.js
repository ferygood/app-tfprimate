(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'java.util.Vector','java.awt.ScrollPane','java.awt.TextArea','java.awt.Button','java.awt.Panel','java.awt.BorderLayout','jalview.analysis.AlignSeq','jalview.util.Format','jalview.datamodel.Sequence','jalview.appletgui.AlignFrame','jalview.datamodel.Alignment','java.awt.Font','jalview.util.MessageManager']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PairwiseAlignPanel", null, 'java.awt.Panel', 'java.awt.event.ActionListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sequences=null;
this.ap=null;
this.scrollPane=null;
this.textarea=null;
this.viewInEditorButton=null;
this.jPanel1=null;
this.borderLayout1=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.sequences=Clazz.new_($I$(1));
this.scrollPane=Clazz.new_($I$(2));
this.textarea=Clazz.new_($I$(3));
this.viewInEditorButton=Clazz.new_($I$(4));
this.jPanel1=Clazz.new_($I$(5));
this.borderLayout1=Clazz.new_($I$(6));
}, 1);

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignmentPanel', function (ap) {
Clazz.super_(C$, this,1);
try {
p$1.jbInit.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
this.ap=ap;
this.sequences=Clazz.new_($I$(1));
var seqs;
var seqStrings=ap.av.getViewAsString$Z(true);
if (ap.av.getSelectionGroup$() == null ) {
seqs=ap.av.getAlignment$().getSequencesArray$();
} else {
seqs=ap.av.getSelectionGroup$().getSequencesInOrder$jalview_datamodel_AlignmentI(ap.av.getAlignment$());
}var scores=Clazz.array(Float.TYPE, [seqs.length, seqs.length]);
var totscore=0;
var count=ap.av.getSelectionGroup$().getSize$();
var type=(ap.av.getAlignment$().isNucleotide$()) ? "dna" : "pep";
var seq;
for (var i=1; i < count; i++) {
for (var j=0; j < i; j++) {
var as=Clazz.new_($I$(7).c$$jalview_datamodel_SequenceI$S$jalview_datamodel_SequenceI$S$S,[seqs[i], seqStrings[i], seqs[j], seqStrings[j], type]);
if (as.s1str.length$() == 0 || as.s2str.length$() == 0 ) {
continue;
}as.calcScoreMatrix$();
as.traceAlignment$();
as.printAlignment$java_io_PrintStream(System.out);
scores[i][j]=as.getMaxScore$() / as.getASeq1$().length;
totscore=totscore + scores[i][j];
this.textarea.append$S(as.getOutput$());
this.sequences.add$TE(as.getAlignedSeq1$());
this.sequences.add$TE(as.getAlignedSeq1$());
}
}
if (count > 2) {
System.out.println$S("Pairwise alignment scaled similarity score matrix\n");
for (var i=0; i < count; i++) {
$I$(8).print$java_io_PrintStream$S$S(System.out, "%s \n", ("" + i) + " " + seqs[i].getName$() );
}
System.out.println$S("\n");
for (var i=0; i < count; i++) {
for (var j=0; j < i; j++) {
$I$(8).print$java_io_PrintStream$S$D(System.out, "%7.3f", scores[i][j] / totscore);
}
}
System.out.println$S("\n");
}}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (evt) {
if (evt.getSource$() === this.viewInEditorButton ) {
this.viewInEditorButton_actionPerformed$();
}});

Clazz.newMeth(C$, 'viewInEditorButton_actionPerformed$', function () {
var seq=Clazz.array($I$(9), [this.sequences.size$()]);
for (var i=0; i < this.sequences.size$(); i++) {
seq[i]=this.sequences.elementAt$I(i);
}
Clazz.new_($I$(10).c$$jalview_datamodel_AlignmentI$jalview_bin_JalviewLite$S$Z,[Clazz.new_($I$(11).c$$jalview_datamodel_SequenceIA,[seq]), this.ap.av.applet, "Pairwise Aligned Sequences", false]);
});

Clazz.newMeth(C$, 'jbInit', function () {
this.setLayout$java_awt_LayoutManager(this.borderLayout1);
this.textarea.setFont$java_awt_Font(Clazz.new_($I$(12).c$$S$I$I,["Monospaced", 0, 12]));
this.textarea.setText$S("");
this.viewInEditorButton.setFont$java_awt_Font(Clazz.new_($I$(12).c$$S$I$I,["Verdana", 0, 12]));
this.viewInEditorButton.setLabel$S($I$(13).getString$S("label.view_alignment_editor"));
this.viewInEditorButton.addActionListener$java_awt_event_ActionListener(this);
this.add$java_awt_Component$O(this.scrollPane, "Center");
this.scrollPane.add$java_awt_Component(this.textarea);
this.add$java_awt_Component$O(this.jPanel1, "South");
this.jPanel1.add$java_awt_Component$O(this.viewInEditorButton, null);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
