(function(){var P$=Clazz.newPackage("jalview.ext.varna"),I$=[[0,'java.util.ArrayList','StringBuffer','jalview.util.Comparison']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VarnaCommands");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getColourBySequenceCommand$jalview_structure_StructureSelectionManager$SA$jalview_datamodel_SequenceIAA$jalview_api_SequenceRenderer$jalview_renderer_seqfeatures_FeatureColourFinder$jalview_datamodel_AlignmentI', function (ssm, files, sequence, sr, finder, alignment) {
var str=Clazz.new_($I$(1));
var command=Clazz.new_($I$(2));
for (var pdbfnum=0; pdbfnum < files.length; pdbfnum++) {
var mapping=ssm.getMapping$S(files[pdbfnum]);
if (mapping == null  || mapping.length < 1 ) {
continue;
}var lastPos=-1;
for (var s=0; s < sequence[pdbfnum].length; s++) {
for (var sp, m=0; m < mapping.length; m++) {
if (mapping[m].getSequence$() === sequence[pdbfnum][s]  && (sp=alignment.findIndex$jalview_datamodel_SequenceI(sequence[pdbfnum][s])) > -1 ) {
var asp=alignment.getSequenceAt$I(sp);
for (var r=0; r < asp.getLength$(); r++) {
if ($I$(3).isGap$C(asp.getCharAt$I(r))) {
continue;
}var pos=mapping[m].getPDBResNum$I(asp.findPosition$I(r));
if (pos < 1 || pos == lastPos ) {
continue;
}lastPos=pos;
var col=sr.getResidueColour$(sequence[pdbfnum][s], r, finder);
var newSelcom=(mapping[m].getChain$() != " " ? ":" + mapping[m].getChain$() : "") + "/" + (pdbfnum + 1) + ".1" + ";color[" + col.getRed$() + "," + col.getGreen$() + "," + col.getBlue$() + "]" ;
if (command.length$() > newSelcom.length$() && command.substring$I(command.length$() - newSelcom.length$()).equals$O(newSelcom) ) {
command=C$.condenseCommand$StringBuffer$I(command, pos);
continue;
}command.append$S(";");
if (command.length$() > 51200) {
str.add$TE(command.toString());
command.setLength$I(0);
}command.append$S("select " + pos);
command.append$S(newSelcom);
}
break;
}}
}
}
{
str.add$TE(command.toString());
command.setLength$I(0);
}return str.toArray$TTA(Clazz.array(String, [str.size$()]));
}, 1);

Clazz.newMeth(C$, 'condenseCommand$StringBuffer$I', function (command, pos) {
var p=command.length$();
var q=p;
do {
p-=6;
if (p < 1) {
p=0;
};} while ((q=command.indexOf$S$I("select", p)) == -1 && p > 0 );
var sb=Clazz.new_($I$(2).c$$S,[command.substring$I$I(0, q + 7)]);
command=command.delete$I$I(0, q + 7);
var start;
if (command.indexOf$S("-") > -1) {
start=command.substring$I$I(0, command.indexOf$S("-"));
} else {
start=command.substring$I$I(0, command.indexOf$S(":"));
}sb.append$S(start + "-" + pos + command.substring$I(command.indexOf$S(":")) );
return sb;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
