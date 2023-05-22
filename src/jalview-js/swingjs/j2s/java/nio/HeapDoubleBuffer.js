(function(){var P$=Clazz.newPackage("java.nio"),I$=[[0,'java.nio.HeapDoubleBufferR','java.nio.ByteOrder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "HeapDoubleBuffer", null, 'java.nio.DoubleBuffer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (cap, lim) {
C$.superclazz.c$$I$I$I$I$DA$I.apply(this, [-1, 0, lim, cap, Clazz.array(Double.TYPE, [cap]), 0]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$DA$I$I', function (buf, off, len) {
C$.superclazz.c$$I$I$I$I$DA$I.apply(this, [-1, off, off + len, buf.length, buf, 0]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$DA$I$I$I$I$I', function (buf, mark, pos, lim, cap, off) {
C$.superclazz.c$$I$I$I$I$DA$I.apply(this, [mark, pos, lim, cap, buf, off]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'slice$', function () {
return Clazz.new_(C$.c$$DA$I$I$I$I$I,[this.hb, -1, 0, this.remaining$(), this.remaining$(), this.position$() + this.offset]);
});

Clazz.newMeth(C$, 'duplicate$', function () {
return Clazz.new_(C$.c$$DA$I$I$I$I$I,[this.hb, this.markValue$(), this.position$(), this.limit$(), this.capacity$(), this.offset]);
});

Clazz.newMeth(C$, 'asReadOnlyBuffer$', function () {
return Clazz.new_($I$(1).c$$DA$I$I$I$I$I,[this.hb, this.markValue$(), this.position$(), this.limit$(), this.capacity$(), this.offset]);
});

Clazz.newMeth(C$, 'ix$I', function (i) {
return i + this.offset;
});

Clazz.newMeth(C$, 'get$', function () {
return this.hb[this.ix$I(this.nextGetIndex$())];
});

Clazz.newMeth(C$, 'get$I', function (i) {
return this.hb[this.ix$I(this.checkIndex$I(i))];
});

Clazz.newMeth(C$, 'getUnchecked$I', function (i) {
return this.hb[this.ix$I(i)];
});

Clazz.newMeth(C$, 'get$DA$I$I', function (dst, offset, length) {
P$.Buffer.checkBounds$I$I$I(offset, length, dst.length);
if (length > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferUnderflowException'));
System.arraycopy$O$I$O$I$I(this.hb, this.ix$I(this.position$()), dst, offset, length);
this.position$I(this.position$() + length);
return this;
});

Clazz.newMeth(C$, 'isDirect$', function () {
return false;
});

Clazz.newMeth(C$, 'isReadOnly$', function () {
return false;
});

Clazz.newMeth(C$, 'put$D', function (x) {
this.hb[this.ix$I(this.nextPutIndex$())]=x;
return this;
});

Clazz.newMeth(C$, 'put$I$D', function (i, x) {
this.hb[this.ix$I(this.checkIndex$I(i))]=x;
return this;
});

Clazz.newMeth(C$, 'put$DA$I$I', function (src, offset, length) {
P$.Buffer.checkBounds$I$I$I(offset, length, src.length);
if (length > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferOverflowException'));
System.arraycopy$O$I$O$I$I(src, offset, this.hb, this.ix$I(this.position$()), length);
this.position$I(this.position$() + length);
return this;
});

Clazz.newMeth(C$, 'put$java_nio_DoubleBuffer', function (src) {
if (Clazz.instanceOf(src, "java.nio.HeapDoubleBuffer")) {
if (src === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
var sb=src;
var n=sb.remaining$();
if (n > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferOverflowException'));
System.arraycopy$O$I$O$I$I(sb.hb, sb.ix$I(sb.position$()), this.hb, this.ix$I(this.position$()), n);
sb.position$I(sb.position$() + n);
this.position$I(this.position$() + n);
} else if (src.isDirect$()) {
var n=src.remaining$();
if (n > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferOverflowException'));
src.get$DA$I$I(this.hb, this.ix$I(this.position$()), n);
this.position$I(this.position$() + n);
} else {
C$.superclazz.prototype.put$java_nio_DoubleBuffer.apply(this, [src]);
}return this;
});

Clazz.newMeth(C$, 'compact$', function () {
System.arraycopy$O$I$O$I$I(this.hb, this.ix$I(this.position$()), this.hb, this.ix$I(0), this.remaining$());
this.position$I(this.remaining$());
this.limit$I(this.capacity$());
this.discardMark$();
return this;
});

Clazz.newMeth(C$, 'order$', function () {
return $I$(2).nativeOrder$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:38 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
