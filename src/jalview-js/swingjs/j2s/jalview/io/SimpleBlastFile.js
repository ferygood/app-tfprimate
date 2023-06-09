(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'StringBuffer','java.util.Vector','java.util.Hashtable','jalview.datamodel.Sequence']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SimpleBlastFile", null, 'jalview.io.AlignFile');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.headerLines=null;
this.footerLines=null;
this.seqids=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
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

Clazz.newMeth(C$, 'initData$', function () {
C$.superclazz.prototype.initData$.apply(this, []);
this.headerLines=Clazz.new_($I$(1));
this.footerLines=Clazz.new_($I$(1));
this.seqids=Clazz.new_($I$(2));
});

Clazz.newMeth(C$, 'parse$', function () {
var line;
var gapc=" ";
var seqhash=Clazz.new_($I$(3));
var inAlignments=false;
var padding=-1;
var numcol=-1;
var aligcol=-1;
var lastcol=-1;
var qlen=0;
var rstart;
var rend;
var padseq=false;
while ((line=this.nextLine$()) != null ){
if (line.indexOf$S("ALIGNMENTS") == 0) {
inAlignments=true;
} else {
if (inAlignments) {
if (line.trim$().length$() == 0) {
continue;
}if (line.indexOf$S("Query") == 0) {
padding=-1;
numcol=-1;
aligcol=-1;
lastcol=-1;
for (var p=5, mLen=line.length$(); p < mLen; p++) {
var c=line.charAt$I(p);
if (c >= "0" && c <= "9" ) {
if (numcol == -1) {
numcol=p;
} else if (aligcol != -1 && lastcol == -1 ) {
lastcol=p;
}} else {
if (c >= "A" && c <= "z" ) {
if (aligcol == -1) {
aligcol=p;
padding=-1;
}} else {
if (padding == -1) {
padding=p;
}}}}
if (padding == -1) {
padding=aligcol;
}}if (line.indexOf$S("Database:") > -1 || (aligcol == -1 || numcol == -1  || lastcol == -1 )  || line.length$() < lastcol ) {
inAlignments=false;
} else {
var sqid=line.substring$I$I(0, numcol).trim$();
var stindx=line.substring$I$I(numcol, aligcol).trim$();
var aligseg=line.substring$I$I(aligcol, padding);
var endindx=line.substring$I(lastcol).trim$();
rstart=1;
rend=0;
try {
rstart=Long.parseLong$S(stindx);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Couldn't parse '" + stindx + "' as start of row" );
} else {
throw e;
}
}
try {
rend=Long.parseLong$S(endindx);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Couldn't parse '" + endindx + "' as end of row" );
} else {
throw e;
}
}
var seqentries=seqhash.get$O(sqid);
if (seqentries == null ) {
seqentries=Clazz.new_($I$(2));
seqhash.put$TK$TV(sqid, seqentries);
this.seqids.addElement$TE(sqid);
}var seqentry=null;
var sqent=seqentries.elements$();
while (seqentry == null  && sqent.hasMoreElements$() ){
seqentry=sqent.nextElement$();
if ((seqentry[1])[1] + 1 != rstart) {
seqentry=null;
}}
padseq=false;
if (seqentry == null ) {
padseq=true;
seqentry=Clazz.array(java.lang.Object, -1, [Clazz.new_($I$(1)), Clazz.array(Long.TYPE, -1, [rstart, rend])]);
seqentries.addElement$TE(seqentry);
seqhash.put$TK$TV(sqid, seqentry);
}if (sqid.equals$O("Query")) {
qlen=(seqentry[0]).length$();
}var sqs=(seqentry[0]);
if (padseq) {
for (var c=sqs.length$(); c < qlen; c++) {
sqs.append$C(gapc);
}
}sqs.append$S(aligseg);
if (rend > 0) {
(seqentry[1])[1]=rend;
}}}if (!inAlignments) {
var ln=line.trim$();
if (ln.length$() > 0) {
var addto=(seqhash.size$() > 0) ? this.footerLines : this.headerLines;
addto.append$S(line);
addto.append$S("\n");
}}}}
if (seqhash.size$() > 0) {
var seqid=this.seqids.elements$();
while (seqid.hasMoreElements$()){
var idstring=seqid.nextElement$();
var seqentry=seqhash.get$O(idstring);
try {
var newseq=Clazz.new_($I$(4).c$$S$S$I$I,[idstring, (seqentry[0]).toString(), ((seqentry[1])[0]|0), ((seqentry[1])[1]|0)]);
if (newseq.getEnd$() == 0) {
newseq.setEnd$I(newseq.findPosition$I(newseq.getLength$()));
}this.seqs.addElement$TE(newseq);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (this.warningMessage == null ) {
this.warningMessage="";
}this.warningMessage += "Couldn't add Sequence - ID is '" + idstring + "' : Exception was " + e.toString() + "\n" ;
} else {
throw e;
}
}
}
if (this.headerLines.length$() > 1) {
this.setAlignmentProperty$O$O("HEADER", this.headerLines.toString());
}if (this.footerLines.length$() > 1) {
this.setAlignmentProperty$O$O("FOOTER", this.footerLines.toString());
}}});

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z', function (sqs, jvsuffix) {
return  String.instantialize("Not Implemented.");
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
