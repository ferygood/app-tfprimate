(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.CaseMgr']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StringBufferLike", null, null, 'com.stevesoft.pat.BasicStringBufferLike');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sbl=null;
this.mode='\0';
this.altMode='\0';
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.mode="E";
this.altMode=" ";
}, 1);

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_BasicStringBufferLike', function (sbl) {
C$.$init$.apply(this);
this.sbl=sbl;
}, 1);

Clazz.newMeth(C$, 'toStringLike$', function () {
return this.sbl.toStringLike$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.sbl.toString();
});

Clazz.newMeth(C$, 'append$C', function (c) {
switch (this.mode.$c()) {
case 117:
this.mode=this.altMode;
this.altMode=" ";
case 85:
this.sbl.append$C($I$(1).toUpperCase$C(c));
break;
case 108:
this.mode=this.altMode;
this.altMode=" ";
case 76:
this.sbl.append$C($I$(1).toLowerCase$C(c));
break;
case 81:
if ((c >= "a" && c <= "z" ) || (c >= "A" && c <= "Z" ) || (c >= "0" && c <= "9" )  ) {
;} else {
this.sbl.append$C("\\");
}default:
this.sbl.append$C(c);
break;
}
});

Clazz.newMeth(C$, 'append$S', function (s) {
for (var i=0; i < s.length$(); i++) {
this.append$C(s.charAt$I(i));
}
});

Clazz.newMeth(C$, 'setMode$C', function (c) {
if (c == "u" || c == "l" ) {
if (this.altMode == " ") {
this.altMode=this.mode;
}}this.mode=c;
});

Clazz.newMeth(C$, 'unwrap$', function () {
return this.sbl.unwrap$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
