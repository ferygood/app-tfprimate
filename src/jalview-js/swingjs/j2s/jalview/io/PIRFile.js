(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'java.util.Vector','StringBuffer','jalview.io.ModellerDescription','jalview.util.Comparison']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PIRFile", null, 'jalview.io.AlignFile');
C$.useModellerOutput=false;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.useModellerOutput=false;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.words=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.words=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_io_DataSourceType', function (inFile, sourceType) {
C$.superclazz.c$$O$jalview_io_DataSourceType.apply(this, [inFile, sourceType]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse', function (source) {
C$.superclazz.c$$jalview_io_FileParse.apply(this, [source]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'parse$', function () {
var sequence;
var line=null;
var md;
while ((line=this.nextLine$()) != null ){
if (line.length$() == 0) {
continue;
}if (line.indexOf$S("C;") == 0 || line.indexOf$S("#") == 0 ) {
continue;
}var newSeq=this.parseId$S(line.substring$I(line.indexOf$S(";") + 1));
sequence=Clazz.new_($I$(2));
newSeq.setDescription$S(this.nextLine$());
var starFound=false;
while (!starFound){
line=this.nextLine$();
sequence.append$S(line);
if (line == null ) {
break;
}if (line.indexOf$S("*") > -1) {
starFound=true;
}}
if (sequence.length$() > 0) {
sequence.setLength$I(sequence.length$() - 1);
newSeq.setSequence$S(sequence.toString());
this.seqs.addElement$TE(newSeq);
md=Clazz.new_($I$(3).c$$S,[newSeq.getDescription$()]);
md.updateSequenceI$jalview_datamodel_SequenceI(newSeq);
}}
});

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z', function (s, jvsuffix) {
var is_NA=$I$(4).isNucleotide$jalview_datamodel_SequenceIA(s);
var len=72;
var out=Clazz.new_($I$(2));
var i=0;
var md;
while ((i < s.length) && (s[i] != null ) ){
var seq=s[i].getSequenceAsString$();
seq=seq + "*";
if (is_NA) {
out.append$S(">N1;" + s[i].getName$());
out.append$S(this.newline);
if (s[i].getDescription$() == null ) {
out.append$S(s[i].getName$() + " " + (s[i].getEnd$() - s[i].getStart$() + 1) );
out.append$S(is_NA ? " bases" : " residues");
out.append$S(this.newline);
} else {
out.append$S(s[i].getDescription$());
out.append$S(this.newline);
}} else {
if (C$.useModellerOutput) {
out.append$S(">P1;" + s[i].getName$());
out.append$S(this.newline);
md=Clazz.new_($I$(3).c$$jalview_datamodel_SequenceI,[s[i]]);
out.append$S(md.getDescriptionLine$());
out.append$S(this.newline);
} else {
out.append$S(">P1;" + this.printId$jalview_datamodel_SequenceI$Z(s[i], jvsuffix));
out.append$S(this.newline);
if (s[i].getDescription$() != null ) {
out.append$S(s[i].getDescription$());
out.append$S(this.newline);
} else {
out.append$S(s[i].getName$() + " " + (s[i].getEnd$() - s[i].getStart$() + 1) + " residues" );
out.append$S(this.newline);
}}}var nochunks=((seq.length$()/len|0)) + (seq.length$() % len > 0 ? 1 : 0);
for (var j=0; j < nochunks; j++) {
var start=j * len;
var end=start + len;
if (end < seq.length$()) {
out.append$S(seq.substring$I$I(start, end));
out.append$S(this.newline);
} else if (start < seq.length$()) {
out.append$S(seq.substring$I(start));
out.append$S(this.newline);
}}
i++;
}
return out.toString();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
