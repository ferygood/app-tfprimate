(function(){var P$=Clazz.newPackage("com.stevesoft.pat.wrap"),I$=[[0,'java.io.RandomAccessFile','jalview.util.MessageManager','Error','StringBuffer','com.stevesoft.pat.wrap.StringBufferWrap']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RandomAccessFileWrap", null, null, 'com.stevesoft.pat.StringLike');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.offset=0;
this.raf=null;
this.i0=0;
this.iend=0;
this.buf=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.offset=0;
this.i0=0;
this.iend=0;
this.buf=Clazz.array(Byte.TYPE, [1024]);
}, 1);

Clazz.newMeth(C$, 'setOffset$J', function (o) {
this.offset=o;
this.i0=this.iend=0;
});

Clazz.newMeth(C$, 'getOffset$', function () {
return this.offset;
});

Clazz.newMeth(C$, 'getBufferSize$', function () {
return this.buf.length;
});

Clazz.newMeth(C$, 'setBufferSize$I', function (bs) {
this.buf=Clazz.array(Byte.TYPE, [bs]);
this.i0=this.iend=0;
});

Clazz.newMeth(C$, 'c$$S', function (file) {
C$.$init$.apply(this);
this.raf=Clazz.new_($I$(1).c$$S$S,[file, "r"]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_RandomAccessFile', function (raf) {
C$.$init$.apply(this);
this.raf=raf;
}, 1);

Clazz.newMeth(C$, 'charAt$I', function (i) {
if (i >= this.i0 && i < this.iend ) {
return String.fromCharCode(this.buf[i - this.i0]);
}try {
this.i0=i - 5;
if (this.i0 < 0) {
this.i0=0;
}this.raf.seek$J(this.i0 + this.offset);
this.iend=this.i0 + this.raf.read$BA$I$I(this.buf, 0, this.buf.length);
if (i >= this.i0 && i < this.iend ) {
return String.fromCharCode(this.buf[i - this.i0]);
}} catch (t) {
}
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,[$I$(2).formatMessage$S$SA("exception.out_of_bounds_for_file", Clazz.array(String, -1, [Integer.valueOf$I(i).toString(), Integer.valueOf$I(this.i0).toString(), Integer.valueOf$I(this.iend).toString()]))]);
});

Clazz.newMeth(C$, 'toString', function () {
throw Clazz.new_($I$(3).c$$S,[$I$(2).getString$S("error.not_implemented")]);
});

Clazz.newMeth(C$, 'length$', function () {
try {
var len=this.raf.length$() - this.offset;
if (len > 2147483647) {
return 2147483647;
}return (len|0);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
return 0;
} else {
throw ioe;
}
}
});

Clazz.newMeth(C$, 'substring$I$I', function (i1, i2) {
var sb=Clazz.new_($I$(4));
for (var i=i1; i < i2; i++) {
sb.append$C(this.charAt$I(i));
}
return sb.toString();
});

Clazz.newMeth(C$, 'unwrap$', function () {
return this.raf;
});

Clazz.newMeth(C$, 'newStringBufferLike$', function () {
return Clazz.new_($I$(5));
});

Clazz.newMeth(C$, 'indexOf$C', function (c) {
for (var i=0; i < this.length$(); i++) {
if (this.charAt$I(i) == c) {
return i;
}}
return -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
