(function(){var P$=Clazz.newPackage("jalview.analysis"),I$=[];
var C$=Clazz.newClass(P$, "CodonComparator", null, null, 'java.util.Comparator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$jalview_datamodel_AlignedCodon$jalview_datamodel_AlignedCodon','compare$','compare$TT$TT'], function (ac1, ac2) {
if (ac1 == null  || ac2 == null   || ac1.equals$O(ac2) ) {
return 0;
}if (ac1.pos1 < ac2.pos1 && ac1.pos3 <= ac2.pos3 ) {
return -1;
}if (ac2.pos1 < ac1.pos1 && ac2.pos3 <= ac1.pos3 ) {
return 1;
}if (ac1.pos3 > ac2.pos3 && ac1.pos1 >= ac2.pos1 ) {
return 1;
}if (ac2.pos3 > ac1.pos3 && ac2.pos1 >= ac1.pos1 ) {
return -1;
}if (ac1.pos1 == ac2.pos1 && ac1.pos3 == ac2.pos3 ) {
return Integer.compare$I$I(ac1.pos2, ac2.pos2);
}var compareMiddles=Integer.compare$I$I(ac1.pos2, ac2.pos2);
if (compareMiddles != 0) {
return compareMiddles;
}return Integer.compare$I$I(ac1.pos1, ac2.pos1);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
