(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FeatureMatcher");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.attributeName=null;
this.condition=null;
this.value=null;
this.by=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getAttributeName$', function () {
if (this.attributeName == null ) {
this.attributeName=Clazz.new_($I$(1));
}return this.attributeName;
});

Clazz.newMeth(C$, 'getCondition$', function () {
return this.condition;
});

Clazz.newMeth(C$, 'setCondition$S', function (value) {
this.condition=value;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S', function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getBy$', function () {
return this.by;
});

Clazz.newMeth(C$, 'setBy$jalview_xml_binding_jalview_FilterBy', function (value) {
this.by=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.FeatureMatcher'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="FeatureMatcher" namespace="www.jalview.org/colours" propOrder={"attributeName"  "condition"  "value"  } )']],
  [['attributeName','java.util.List<java.lang.String>'],['@XmlElement(namespace="" )']],
  [['condition','String'],['@XmlElement(namespace="" required="true" )']],
  [['value','.'],['@XmlElement(namespace="" required="true" )']],
  [['by','jalview.xml.binding.jalview.FilterBy'],['@XmlAttribute(name="by" )']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
