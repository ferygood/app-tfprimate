(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'jalview.schemes.ResidueProperties','java.awt.Color','jalview.schemes.JalviewColourScheme']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StrandColourScheme", null, 'jalview.schemes.ScoreColourScheme');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$IA$DA$D$D.apply(this, [$I$(1).aaIndex, $I$(1).strand, 0.37, 1.7]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'makeColour$F', function (c) {
return Clazz.new_($I$(2).c$$F$F$F,[c, c, 1.0 - c]);
});

Clazz.newMeth(C$, 'isPeptideSpecific$', function () {
return true;
});

Clazz.newMeth(C$, 'getSchemeName$', function () {
return $I$(3).Strand.toString();
});

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI', function (view, coll) {
return Clazz.new_(C$);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
