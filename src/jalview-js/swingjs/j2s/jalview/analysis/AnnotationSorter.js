(function(){var P$=Clazz.newPackage("jalview.analysis"),p$1={},I$=[[0,'java.util.HashMap','java.util.Arrays','jalview.analysis.AlignmentUtils',['jalview.analysis.AnnotationSorter','.SequenceAnnotationOrder']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AnnotationSorter", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.alignment=null;
this.showAutocalcAbove=false;
this.sequenceIndices=null;
this.bySequenceAndLabel=null;
this.byLabelAndSequence=null;
this.noSort=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.sequenceIndices=Clazz.new_($I$(1));
this.bySequenceAndLabel=((P$.AnnotationSorter$1||
(function(){var C$=Clazz.newClass(P$, "AnnotationSorter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AlignmentAnnotation','compare$','compare$TT$TT'], function (o1, o2) {
if (o1 == null  && o2 == null  ) {
return 0;
}if (o1 == null ) {
return -1;
}if (o2 == null ) {
return 1;
}var o1auto=o1.autoCalculated && o1.sequenceRef == null  ;
var o2auto=o2.autoCalculated && o2.sequenceRef == null  ;
if (o1auto && o2auto ) {
return 0;
}if (o1auto) {
return this.b$['jalview.analysis.AnnotationSorter'].showAutocalcAbove ? -1 : 1;
}if (o2auto) {
return this.b$['jalview.analysis.AnnotationSorter'].showAutocalcAbove ? 1 : -1;
}var sequenceOrder=p$1.compareSequences$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AlignmentAnnotation.apply(this.b$['jalview.analysis.AnnotationSorter'], [o1, o2]);
return sequenceOrder == 0 ? p$1.compareLabels$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AlignmentAnnotation.apply(this.b$['jalview.analysis.AnnotationSorter'], [o1, o2]) : sequenceOrder;
});

Clazz.newMeth(C$, 'toString', function () {
return "Sort by sequence and label";
});
})()
), Clazz.new_(P$.AnnotationSorter$1.$init$, [this, null]));
this.byLabelAndSequence=((P$.AnnotationSorter$2||
(function(){var C$=Clazz.newClass(P$, "AnnotationSorter$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AlignmentAnnotation','compare$','compare$TT$TT'], function (o1, o2) {
if (o1 == null  && o2 == null  ) {
return 0;
}if (o1 == null ) {
return -1;
}if (o2 == null ) {
return 1;
}var o1auto=o1.autoCalculated && o1.sequenceRef == null  ;
var o2auto=o2.autoCalculated && o2.sequenceRef == null  ;
if (o1auto && o2auto ) {
return 0;
}if (o1auto) {
return this.b$['jalview.analysis.AnnotationSorter'].showAutocalcAbove ? -1 : 1;
}if (o2auto) {
return this.b$['jalview.analysis.AnnotationSorter'].showAutocalcAbove ? 1 : -1;
}var labelOrder=p$1.compareLabels$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AlignmentAnnotation.apply(this.b$['jalview.analysis.AnnotationSorter'], [o1, o2]);
return labelOrder == 0 ? p$1.compareSequences$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AlignmentAnnotation.apply(this.b$['jalview.analysis.AnnotationSorter'], [o1, o2]) : labelOrder;
});

Clazz.newMeth(C$, 'toString', function () {
return "Sort by label and sequence";
});
})()
), Clazz.new_(P$.AnnotationSorter$2.$init$, [this, null]));
this.noSort=((P$.AnnotationSorter$3||
(function(){var C$=Clazz.newClass(P$, "AnnotationSorter$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AlignmentAnnotation','compare$','compare$TT$TT'], function (o1, o2) {
var o1auto=o1.autoCalculated && o1.sequenceRef == null  ;
var o2auto=o2.autoCalculated && o2.sequenceRef == null  ;
if (o1 != null  && o2 != null  ) {
if (o1auto && !o2auto ) {
return this.b$['jalview.analysis.AnnotationSorter'].showAutocalcAbove ? -1 : 1;
}if (!o1auto && o2auto ) {
return this.b$['jalview.analysis.AnnotationSorter'].showAutocalcAbove ? 1 : -1;
}}return 0;
});

Clazz.newMeth(C$, 'toString', function () {
return "No sort";
});
})()
), Clazz.new_(P$.AnnotationSorter$3.$init$, [this, null]));
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$Z', function (alignmentI, showAutocalculatedAbove) {
C$.$init$.apply(this);
this.alignment=alignmentI;
this.showAutocalcAbove=showAutocalculatedAbove;
}, 1);

Clazz.newMeth(C$, 'sort$jalview_datamodel_AlignmentAnnotationA$jalview_analysis_AnnotationSorter_SequenceAnnotationOrder', function (alignmentAnnotations, order) {
if (alignmentAnnotations == null ) {
return;
}p$1.saveSequenceIndices$jalview_datamodel_AlignmentAnnotationA.apply(this, [alignmentAnnotations]);
var comparator=p$1.getComparator$jalview_analysis_AnnotationSorter_SequenceAnnotationOrder.apply(this, [order]);
if (alignmentAnnotations != null ) {
{
$I$(2).sort$TTA$java_util_Comparator(alignmentAnnotations, comparator);
}}});

Clazz.newMeth(C$, 'saveSequenceIndices$jalview_datamodel_AlignmentAnnotationA', function (alignmentAnnotations) {
this.sequenceIndices.clear$();
for (var ann, $ann = 0, $$ann = alignmentAnnotations; $ann<$$ann.length&&((ann=($$ann[$ann])),1);$ann++) {
var seq=ann.sequenceRef;
if (seq != null ) {
var index=$I$(3).getSequenceIndex$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceI(this.alignment, seq);
this.sequenceIndices.put$TK$TV(seq, new Integer(index));
}}
}, p$1);

Clazz.newMeth(C$, 'getComparator$jalview_analysis_AnnotationSorter_SequenceAnnotationOrder', function (order) {
if (order == null ) {
return this.noSort;
}switch (order) {
case $I$(4).NONE:
return this.noSort;
case $I$(4).SEQUENCE_AND_LABEL:
return this.bySequenceAndLabel;
case $I$(4).LABEL_AND_SEQUENCE:
return this.byLabelAndSequence;
default:
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,[order.toString()]);
}
}, p$1);

Clazz.newMeth(C$, 'compareLabels$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AlignmentAnnotation', function (o1, o2) {
if (o1 == null  || o2 == null  ) {
return 0;
}var label1=o1.label;
var label2=o2.label;
if (label1 == null  && label2 == null  ) {
return 0;
}if (label1 == null ) {
return -1;
}if (label2 == null ) {
return 1;
}return label1.toUpperCase$().compareTo$S(label2.toUpperCase$());
}, p$1);

Clazz.newMeth(C$, 'compareSequences$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AlignmentAnnotation', function (o1, o2) {
var seq1=o1.sequenceRef;
var seq2=o2.sequenceRef;
if (seq1 == null  && seq2 == null  ) {
return 0;
}if (seq1 == null ) {
return this.showAutocalcAbove ? -1 : 1;
}if (seq2 == null ) {
return this.showAutocalcAbove ? 1 : -1;
}var index1=(this.sequenceIndices.get$O(seq1)).intValue$();
var index2=(this.sequenceIndices.get$O(seq2)).intValue$();
if (index1 == index2) {
return 0;
}if (index1 == -1) {
return -1;
}if (index2 == -1) {
return 1;
}return Integer.compare$I$I(index1, index2);
}, p$1);
;
(function(){var C$=Clazz.newClass(P$.AnnotationSorter, "SequenceAnnotationOrder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S, "SEQUENCE_AND_LABEL", 0, ["Sequence"]);
Clazz.newEnumConst($vals, C$.c$$S, "LABEL_AND_SEQUENCE", 1, ["Label"]);
Clazz.newEnumConst($vals, C$.c$$S, "NONE", 2, ["No sort"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.description=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (s) {
C$.$init$.apply(this);
this.description=s;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.description;
});

Clazz.newMeth(C$, 'forDescription$S', function (d) {
for (var order, $order = 0, $$order = C$.values$(); $order<$$order.length&&((order=($$order[$order])),1);$order++) {
if (order.toString().equals$O(d)) {
return order;
}}
return null;
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
