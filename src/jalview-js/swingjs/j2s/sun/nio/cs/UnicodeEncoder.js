(function(){var P$=Clazz.newPackage("sun.nio.cs"),p$1={},I$=[[0,['sun.nio.cs.Surrogate','.Parser'],'java.nio.charset.CoderResult']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "UnicodeEncoder", null, 'java.nio.charset.CharsetEncoder');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.byteOrder=0;
this.usesMark=false;
this.needsMark=false;
this.sgp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.sgp=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$I$Z', function (cs, bo, m) {
C$.superclazz.c$$java_nio_charset_Charset$F$F$BA.apply(this, [cs, 2.0, m ? 4.0 : 2.0, ((bo == 0) ? Clazz.array(Byte.TYPE, -1, [-1, -3]) : Clazz.array(Byte.TYPE, -1, [-3, -1]))]);
C$.$init$.apply(this);
this.usesMark=this.needsMark=m;
this.byteOrder=bo;
}, 1);

Clazz.newMeth(C$, 'put$C$java_nio_ByteBuffer', function (c, dst) {
if (this.byteOrder == 0) {
dst.put$B(($b$[0] = ((c.$c() >> 8)|0), $b$[0]));
dst.put$B(($b$[0] = ((c.$c() & 255)|0), $b$[0]));
} else {
dst.put$B(($b$[0] = ((c.$c() & 255)|0), $b$[0]));
dst.put$B(($b$[0] = ((c.$c() >> 8)|0), $b$[0]));
}}, p$1);

Clazz.newMeth(C$, 'encodeLoop$java_nio_CharBuffer$java_nio_ByteBuffer', function (src, dst) {
var mark=src.position$();
if (this.needsMark && src.hasRemaining$() ) {
if (dst.remaining$() < 2) return $I$(2).OVERFLOW;
p$1.put$C$java_nio_ByteBuffer.apply(this, ["\ufeff", dst]);
this.needsMark=false;
}try {
while (src.hasRemaining$()){
var c=src.get$();
if (!Character.isSurrogate$C(c)) {
if (dst.remaining$() < 2) return $I$(2).OVERFLOW;
mark++;
p$1.put$C$java_nio_ByteBuffer.apply(this, [c, dst]);
continue;
}var d=this.sgp.parse$C$java_nio_CharBuffer(c, src);
if (d < 0) return this.sgp.error$();
if (dst.remaining$() < 4) return $I$(2).OVERFLOW;
mark+=2;
p$1.put$C$java_nio_ByteBuffer.apply(this, [Character.highSurrogate$I(d), dst]);
p$1.put$C$java_nio_ByteBuffer.apply(this, [Character.lowSurrogate$I(d), dst]);
}
return $I$(2).UNDERFLOW;
} finally {
src.position$I(mark);
}
});

Clazz.newMeth(C$, 'implReset$', function () {
this.needsMark=this.usesMark;
});

Clazz.newMeth(C$, 'canEncode$C', function (c) {
return !Character.isSurrogate$C(c);
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:38 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
