(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'org.jmol.util.Int2IntHashEntry']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Int2IntHash");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.entryCount=0;
this.entries=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
C$.$init$.apply(this);
this.entries=Clazz.array($I$(1), [initialCapacity]);
}, 1);

Clazz.newMeth(C$, 'get$I', function (key) {
var entries=this.entries;
var hash=(key & 2147483647) % entries.length;
for (var e=entries[hash]; e != null ; e=e.next) if (e.key == key) return e.value;

return -2147483648;
});

Clazz.newMeth(C$, 'put$I$I', function (key, value) {
var entries=this.entries;
var n=entries.length;
var hash=(key & 2147483647) % n;
for (var e=entries[hash]; e != null ; e=e.next) if (e.key == key) {
e.value=value;
return;
}
if (this.entryCount > n) {
var oldSize=n;
n+=n + 1;
var newEntries=Clazz.array($I$(1), [n]);
for (var i=oldSize; --i >= 0; ) {
for (var e=entries[i]; e != null ; ) {
var t=e;
e=e.next;
hash=(t.key & 2147483647) % n;
t.next=newEntries[hash];
newEntries[hash]=t;
}
}
entries=this.entries=newEntries;
hash=(key & 2147483647) % n;
}entries[hash]=Clazz.new_($I$(1).c$$I$I$org_jmol_util_Int2IntHashEntry,[key, value, entries[hash]]);
++this.entryCount;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
