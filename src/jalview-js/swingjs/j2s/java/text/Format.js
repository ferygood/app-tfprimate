(function(){var P$=Clazz.newPackage("java.text"),I$=[[0,'StringBuffer','java.text.FieldPosition','java.text.ParsePosition','java.text.AttributedString']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Format", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.io.Serializable', 'Cloneable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'format$O', function (obj) {
return this.format$O$StringBuffer$java_text_FieldPosition(obj, Clazz.new_($I$(1)), Clazz.new_($I$(2).c$$I,[0])).toString();
});

Clazz.newMeth(C$, 'formatToCharacterIterator$O', function (obj) {
return this.createAttributedCharacterIterator$S(this.format$O(obj));
});

Clazz.newMeth(C$, 'parseObject$S', function (source) {
var pos=Clazz.new_($I$(3).c$$I,[0]);
var result=this.parseObject$S$java_text_ParsePosition(source, pos);
if (pos.index == 0) {
throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,["Format.parseObject(String) failed", pos.errorIndex]);
}return result;
});

Clazz.newMeth(C$, 'clone$', function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'createAttributedCharacterIterator$S', function (s) {
var as=Clazz.new_($I$(4).c$$S,[s]);
return as.getIterator$();
});

Clazz.newMeth(C$, 'createAttributedCharacterIterator$java_text_AttributedCharacterIteratorA', function (iterators) {
var as=Clazz.new_($I$(4).c$$java_text_AttributedCharacterIteratorA,[iterators]);
return as.getIterator$();
});

Clazz.newMeth(C$, 'createAttributedCharacterIterator$S$java_text_AttributedCharacterIterator_Attribute$O', function (string, key, value) {
var as=Clazz.new_($I$(4).c$$S,[string]);
as.addAttribute$java_text_AttributedCharacterIterator_Attribute$O(key, value);
return as.getIterator$();
});

Clazz.newMeth(C$, 'createAttributedCharacterIterator$java_text_AttributedCharacterIterator$java_text_AttributedCharacterIterator_Attribute$O', function (iterator, key, value) {
var as=Clazz.new_($I$(4).c$$java_text_AttributedCharacterIterator,[iterator]);
as.addAttribute$java_text_AttributedCharacterIterator_Attribute$O(key, value);
return as.getIterator$();
});
;
(function(){var C$=Clazz.newClass(P$.Format, "Field", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.text.AttributedCharacterIterator','.Attribute']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.superclazz.c$$S.apply(this, [name]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newInterface(P$.Format, "FieldDelegate", function(){
});
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
