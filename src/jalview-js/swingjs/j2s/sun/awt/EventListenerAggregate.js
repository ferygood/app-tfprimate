(function(){var P$=Clazz.newPackage("sun.awt"),p$1={},I$=[[0,'java.util.EventListener','java.lang.reflect.Array']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EventListenerAggregate");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.listenerList=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Class', function (listenerClass) {
C$.$init$.apply(this);
if (listenerClass == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["listener class is null"]);
}if (!Clazz.getClass($I$(1),[]).isAssignableFrom$Class(listenerClass)) {
throw Clazz.new_(Clazz.load('ClassCastException').c$$S,["listener class " + listenerClass + " is not assignable to EventListener" ]);
}this.listenerList=Clazz.array(listenerClass, 0);
}, 1);

Clazz.newMeth(C$, 'getListenerClass', function () {
return this.listenerList.getClass$().getComponentType$();
}, p$1);

Clazz.newMeth(C$, 'add$java_util_EventListener', function (listener) {
var listenerClass=p$1.getListenerClass.apply(this, []);
if (!listenerClass.isInstance$O(listener)) {
throw Clazz.new_(Clazz.load('ClassCastException').c$$S,["listener " + listener + " is not " + "an instance of listener class " + listenerClass ]);
}var tmp=Clazz.array(listenerClass, this.listenerList.length + 1);
System.arraycopy$O$I$O$I$I(this.listenerList, 0, tmp, 0, this.listenerList.length);
tmp[this.listenerList.length]=listener;
this.listenerList=tmp;
});

Clazz.newMeth(C$, 'remove$java_util_EventListener', function (listener) {
var listenerClass=p$1.getListenerClass.apply(this, []);
if (!listenerClass.isInstance$O(listener)) {
throw Clazz.new_(Clazz.load('ClassCastException').c$$S,["listener " + listener + " is not " + "an instance of listener class " + listenerClass ]);
}for (var i=0; i < this.listenerList.length; i++) {
if (this.listenerList[i].equals$O(listener)) {
var tmp=Clazz.array(listenerClass, this.listenerList.length - 1);
System.arraycopy$O$I$O$I$I(this.listenerList, 0, tmp, 0, i);
System.arraycopy$O$I$O$I$I(this.listenerList, i + 1, tmp, i, this.listenerList.length - i - 1 );
this.listenerList=tmp;
return true;
}}
return false;
});

Clazz.newMeth(C$, 'getListenersInternal$', function () {
return this.listenerList;
});

Clazz.newMeth(C$, 'getListenersCopy$', function () {
return (this.listenerList.length == 0) ? this.listenerList : this.listenerList.clone$();
});

Clazz.newMeth(C$, 'size$', function () {
return this.listenerList.length;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.listenerList.length == 0;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
