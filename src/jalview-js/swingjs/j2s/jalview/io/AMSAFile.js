(function(){var P$=Clazz.newPackage("jalview.io"),I$=[];
var C$=Clazz.newClass(P$, "AMSAFile", null, 'jalview.io.FastaFile');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.al=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI', function (al) {
Clazz.super_(C$, this,1);
this.al=al;
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_io_DataSourceType', function (inFile, sourceType) {
C$.superclazz.c$$S$jalview_io_DataSourceType.apply(this, [inFile, sourceType]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse', function (source) {
C$.superclazz.c$$jalview_io_FileParse.apply(this, [source]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z', function (sqs, jvsuffix) {
C$.superclazz.prototype.print$jalview_datamodel_SequenceIA$Z.apply(this, [sqs, jvsuffix]);
var aa;
if (this.al.getAlignmentAnnotation$() != null ) {
for (var i=0; i < this.al.getAlignmentAnnotation$().length; i++) {
aa=this.al.getAlignmentAnnotation$()[i];
if (aa.autoCalculated || !aa.visible ) {
continue;
}this.out.append$S(">#_" + aa.label);
if (aa.description != null ) {
this.out.append$S(" " + aa.description);
}this.out.append$S(this.newline);
var nochunks=(Math.min(aa.annotations.length, this.al.getWidth$())/this.len|0) + 1;
for (var j=0; j < nochunks; j++) {
var start=j * this.len;
var end=start + this.len;
if (end > aa.annotations.length) {
end=aa.annotations.length;
}var ch;
for (var k=start; k < end; k++) {
if (aa.annotations[k] == null ) {
ch=" ";
} else {
ch=aa.annotations[k].displayCharacter;
}if (ch.length$() > 1) {
this.warningMessage="Truncated column annotation to first letter.";
ch=ch.substring$I$I(0, 1);
}this.out.append$S(ch);
}
this.out.append$S(this.newline);
}
}
}return this.out.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
