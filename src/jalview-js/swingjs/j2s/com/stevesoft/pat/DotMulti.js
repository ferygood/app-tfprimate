(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
var C$=Clazz.newClass(P$, "DotMulti", null, 'com.stevesoft.pat.PatternSub');
C$.idcount=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.idcount=1;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fewestMatches=null;
this.mostMatches=null;
this.matchFewest=false;
this.src=null;
this.srclength=0;
this.dotDoesntMatchCR=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.matchFewest=false;
this.src=null;
this.srclength=0;
this.dotDoesntMatchCR=true;
}, 1);

Clazz.newMeth(C$, 'minChars$', function () {
return this.fewestMatches;
});

Clazz.newMeth(C$, 'maxChars$', function () {
return this.mostMatches;
});

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt', function (a, b) {
Clazz.super_(C$, this,1);
this.fewestMatches=a;
this.mostMatches=b;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return ".{" + this.fewestMatches + "," + this.mostMatches + "}" + (this.matchFewest ? "?" : "") + "(?# <= dot multi)" + this.nextString$() ;
});

Clazz.newMeth(C$, 'submatchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (pos < this.srclength) {
if (this.dotDoesntMatchCR) {
if (this.src.charAt$I(pos) != "\n") {
return 1 + pos;
}} else {
return 1 + pos;
}}return -1;
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
var m=-1;
var i=pos;
this.src=pt.src;
this.srclength=this.src.length$();
this.dotDoesntMatchCR=pt.dotDoesntMatchCR;
if (this.matchFewest) {
var nMatches=0;
while (this.fewestMatches.intValue$() > nMatches){
i=this.submatchInternal$I$com_stevesoft_pat_Pthings(i, pt);
if (i < 0) {
return -1;
}nMatches++;
}
if (i < 0) {
return -1;
}var ii=this.nextMatch$I$com_stevesoft_pat_Pthings(i, pt);
if (ii >= 0) {
return ii;
}if (!this.mostMatches.finite$()) {
while (i >= 0){
i=this.submatchInternal$I$com_stevesoft_pat_Pthings(i, pt);
if (i < 0) {
return -1;
}ii=this.nextMatch$I$com_stevesoft_pat_Pthings(i, pt);
if (ii >= 0) {
return ii;
}}
} else {
while (i > 0){
i=this.submatchInternal$I$com_stevesoft_pat_Pthings(i, pt);
if (i < 0) {
return -1;
}nMatches++;
if (nMatches > this.mostMatches.intValue$()) {
return -1;
}ii=this.nextMatch$I$com_stevesoft_pat_Pthings(i, pt);
if (ii >= 0) {
return ii;
}}
}return -1;
}var nMatches=0;
while (this.fewestMatches.intValue$() > nMatches){
i=this.submatchInternal$I$com_stevesoft_pat_Pthings(i, pt);
if (i >= 0) {
nMatches++;
} else {
return -1;
}}
m=i;
if (this.mostMatches.finite$()) {
while (nMatches < this.mostMatches.intValue$()){
i=this.submatchInternal$I$com_stevesoft_pat_Pthings(i, pt);
if (i >= 0) {
m=i;
nMatches++;
} else {
break;
}}
} else {
while (true){
i=this.submatchInternal$I$com_stevesoft_pat_Pthings(i, pt);
if (i >= 0) {
m=i;
nMatches++;
} else {
break;
}}
}while (m >= pos){
var r=this.nextMatch$I$com_stevesoft_pat_Pthings(m, pt);
if (r >= 0) {
return r;
}m-=1;
nMatches--;
if (nMatches < this.fewestMatches.intValue$()) {
return -1;
}}
return -1;
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
var dm=Clazz.new_(C$.c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt,[this.fewestMatches, this.mostMatches]);
dm.matchFewest=this.matchFewest;
return dm;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
