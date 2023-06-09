(function(){var P$=Clazz.newPackage("jalview.util.matcher"),I$=[[0,'java.util.Objects','jalview.util.matcher.Condition','StringBuilder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Matcher", null, null, 'jalview.util.matcher.MatcherI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.condition=null;
this.pattern=null;
this.uppercasePattern=null;
this.regexPattern=null;
this.value=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_util_matcher_Condition$S', function (cond, compareTo) {
C$.$init$.apply(this);
$I$(1).requireNonNull$TT(cond);
this.condition=cond;
if (cond.isNumeric$()) {
this.value=(Float.valueOf$S(compareTo)).floatValue$();
this.pattern=String.valueOf$F(this.value);
this.uppercasePattern=this.pattern;
} else {
this.pattern=compareTo;
if (this.pattern != null ) {
this.uppercasePattern=this.pattern.toUpperCase$();
}}}, 1);

Clazz.newMeth(C$, 'c$$jalview_util_matcher_Condition$F', function (cond, compareTo) {
C$.c$$jalview_util_matcher_Condition$S.apply(this, [cond, String.valueOf$F(compareTo)]);
}, 1);

Clazz.newMeth(C$, 'matches$S', function (val) {
if (this.condition.isNumeric$()) {
try {
return val == null  ? false : this.matches$F((Float.valueOf$S(val)).floatValue$());
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
return false;
} else {
throw e;
}
}
}if (val == null ) {
return this.condition === $I$(2).NotContains  || this.condition === $I$(2).NotMatches   || this.condition === $I$(2).NotPresent  ;
}var upper=val.toUpperCase$().trim$();
var matched=false;
switch (this.condition) {
case $I$(2).Matches:
matched=upper.equals$O(this.uppercasePattern);
break;
case $I$(2).NotMatches:
matched=!upper.equals$O(this.uppercasePattern);
break;
case $I$(2).Contains:
matched=upper.indexOf$S(this.uppercasePattern) > -1;
break;
case $I$(2).NotContains:
matched=upper.indexOf$S(this.uppercasePattern) == -1;
break;
case $I$(2).Present:
matched=true;
break;
default:
break;
}
return matched;
});

Clazz.newMeth(C$, 'matches$F', function (f) {
if (!this.condition.isNumeric$()) {
return this.matches$S(String.valueOf$F(f));
}var matched=false;
switch (this.condition) {
case $I$(2).LT:
matched=f < this.value ;
break;
case $I$(2).LE:
matched=f <= this.value ;
break;
case $I$(2).EQ:
matched=f == this.value ;
break;
case $I$(2).NE:
matched=f != this.value ;
break;
case $I$(2).GT:
matched=f > this.value ;
break;
case $I$(2).GE:
matched=f >= this.value ;
break;
default:
break;
}
return matched;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.pattern.hashCode$() + this.condition.hashCode$() + (this.value|0) ;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj == null  || !(Clazz.instanceOf(obj, "jalview.util.matcher.Matcher")) ) {
return false;
}var m=obj;
if (this.condition !== m.condition  || this.value != m.value  ) {
return false;
}if (this.pattern == null ) {
return m.pattern == null ;
}return this.uppercasePattern.equals$O(m.uppercasePattern);
});

Clazz.newMeth(C$, 'getCondition$', function () {
return this.condition;
});

Clazz.newMeth(C$, 'getPattern$', function () {
return this.pattern;
});

Clazz.newMeth(C$, 'getFloatValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(3));
sb.append$S(this.condition.toString()).append$S(" ");
if (this.condition.isNumeric$()) {
sb.append$S(this.pattern);
} else {
sb.append$S("\'").append$S(this.pattern).append$S("\'");
}return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
