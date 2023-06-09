(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.RBuffer','StringBuffer','com.stevesoft.pat.PartialBuffer','com.stevesoft.pat.wrap.StringBufferWrap','com.stevesoft.pat.StringBufferLike']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RegexReader", null, 'java.io.Reader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.rb=null;
this.wrap=null;
this.moreToRead=false;
this.r=null;
this.rp=null;
this.nmax=0;
this.max_lines=0;
this.EOLchar='\0';
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.rb=Clazz.new_($I$(1).c$$StringBuffer,[Clazz.new_($I$(2))]);
this.wrap=Clazz.new_($I$(3).c$$StringBuffer,[this.rb.sb]);
this.moreToRead=true;
this.nmax=2048;
this.max_lines=2;
this.EOLchar="\n";
}, 1);

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_Regex$java_io_Reader', function (rex, r) {
Clazz.super_(C$, this,1);
this.r=r;
this.rp=rex.getReplacer$();
}, 1);

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_Transformer$java_io_Reader', function (tex, r) {
Clazz.super_(C$, this,1);
this.r=r;
this.rp=tex.getReplacer$();
}, 1);

Clazz.newMeth(C$, 'reset$', function () {
this.r.reset$();
this.rb=Clazz.new_($I$(1).c$$StringBuffer,[Clazz.new_($I$(2))]);
this.wrap=Clazz.new_($I$(3).c$$StringBuffer,[this.rb.sb]);
this.moreToRead=true;
});

Clazz.newMeth(C$, 'readData$', function () {
var c;
var n=0;
while ((c=this.r.read$()) != -1){
this.rb.sb.append$C(String.fromCharCode(c));
if (n++ > this.nmax) {
break;
}}
if (c == -1 && n == 0 ) {
this.moreToRead=false;
this.wrap.allowOverRun=false;
}});

Clazz.newMeth(C$, 'getMoreData$', function () {
while (this.rb.pos >= this.rb.epos){
this.wrap.overRun=false;
if (this.rb.next != null ) {
this.rb=this.rb.next;
} else if (this.rb.done) {
break;
} else if (this.rb.epos >= this.rb.sb.length$() && this.rb.epos > this.nmax ) {
this.rb.pos=1;
this.rb.epos=1;
this.rb.sb.setLength$I(1);
this.readData$();
} else if (this.rb.epos >= this.rb.sb.length$() && this.moreToRead ) {
this.readData$();
} else if (this.rp.getRegex$().matchAt$com_stevesoft_pat_StringLike$I(this.wrap, this.rb.epos)) {
if (this.wrap.overRun) {
this.readData$();
} else {
var sbw=Clazz.new_($I$(4));
var sbl=Clazz.new_($I$(5).c$$com_stevesoft_pat_BasicStringBufferLike,[sbw]);
var rex=this.rp.getRegex$();
var npos=rex.matchedTo$();
this.rp.setBuffer$com_stevesoft_pat_StringBufferLike(sbl);
this.rp.setSource$com_stevesoft_pat_StringLike(this.wrap);
this.rp.setPos$I(npos);
this.rp.apply$com_stevesoft_pat_RegRes$com_stevesoft_pat_ReplaceRule(rex, rex.getReplaceRule$());
var opos=this.rb.epos;
var rb2=Clazz.new_($I$(1).c$$StringBuffer,[sbw.unwrap$()]);
rb2.epos=rb2.sb.length$();
var rb3=Clazz.new_($I$(1).c$$StringBuffer,[this.rb.sb]);
this.rb.next=rb2;
rb2.next=rb3;
if (npos == opos) {
rb3.epos=npos + 1;
if (rb3.epos > rb3.sb.length$()) {
if (this.rb.pos >= this.rb.epos) {
this.rb=this.rb.next;
}rb3.pos=rb3.epos=0;
rb3.done=true;
}rb3.pos=npos;
} else {
rb3.pos=rb3.epos=npos;
}}} else {
if (this.wrap.overRun) {
this.readData$();
} else if (this.rb.epos < this.rb.sb.length$()) {
this.rb.epos++;
} else {
break;
}}}
});

Clazz.newMeth(C$, 'read$', function () {
if (this.rb.pos >= this.rb.epos) {
this.getMoreData$();
if (this.rb.pos >= this.rb.epos) {
return -1;
}}return this.rb.sb.charAt$I(this.rb.pos++).$c();
});

Clazz.newMeth(C$, 'read$CA$I$I', function (buf, off, len) {
var c=-1;
var end=off + len;
for (var i=off; i < end; i++) {
c=this.read$();
if (c < 0) {
if (i == off) {
return -1;
}return i - off;
}buf[i]=String.fromCharCode(c);
}
return len;
});

Clazz.newMeth(C$, 'close$', function () {
this.r.close$();
});

Clazz.newMeth(C$, 'markSupported$', function () {
return false;
});

Clazz.newMeth(C$, 'getBufferSize$', function () {
return this.nmax;
});

Clazz.newMeth(C$, 'setBufferSize$I', function (n) {
this.nmax=n;
});

Clazz.newMeth(C$, 'getMaxLines$', function () {
return this.max_lines;
});

Clazz.newMeth(C$, 'setMaxLines$I', function (ml) {
this.max_lines=ml;
});

Clazz.newMeth(C$, 'getEOLchar$', function () {
return this.EOLchar;
});

Clazz.newMeth(C$, 'setEOLchar$C', function (c) {
this.EOLchar=c;
});

Clazz.newMeth(C$, 'skip$J', function (d) {
var n=0;
while (n < d && this.read$() != -1 ){
n++;
}
return n;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
