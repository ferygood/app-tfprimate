(function(){var P$=Clazz.newPackage("jalview.ext.rbvi.chimera"),I$=[[0,'java.util.TreeMap','java.util.ArrayList','StringBuilder','java.util.Collections','jalview.util.IntRangeComparator']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AtomSpecModel");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.atomSpec=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.atomSpec=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'addRange$I$I$I$S', function (model, startPos, endPos, chain) {
var modelData=this.atomSpec.get$O(new Integer(model));
if (modelData == null ) {
this.atomSpec.put$TK$TV(new Integer(model), modelData=Clazz.new_($I$(1)));
}var chainData=modelData.get$O(chain);
if (chainData == null ) {
chainData=Clazz.new_($I$(2));
modelData.put$TK$TV(chain, chainData);
}chainData.add$TE(Clazz.array(Integer.TYPE, -1, [startPos, endPos]));
});

Clazz.newMeth(C$, 'getAtomSpec$', function () {
var sb=Clazz.new_($I$(3).c$$I,[128]);
var firstModel=true;
for (var model, $model = this.atomSpec.keySet$().iterator$(); $model.hasNext$()&&((model=($model.next$())),1);) {
if (!firstModel) {
sb.append$S("|");
}firstModel=false;
sb.append$S("#").append$O(model).append$S(":");
var firstPositionForModel=true;
var modelData=this.atomSpec.get$O(model);
for (var chain, $chain = modelData.keySet$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
chain=" ".equals$O(chain) ? chain : chain.trim$();
var rangeList=modelData.get$O(chain);
$I$(4).sort$java_util_List$java_util_Comparator(rangeList, $I$(5).ASCENDING);
var start=rangeList.isEmpty$() ? 0 : rangeList.get$I(0)[0];
var end=rangeList.isEmpty$() ? 0 : rangeList.get$I(0)[1];
var iterator=rangeList.iterator$();
while (iterator.hasNext$()){
var range=iterator.next$();
if (range[0] <= end + 1) {
end=Math.max(end, range[1]);
} else {
this.appendRange$StringBuilder$I$I$S$Z(sb, start, end, chain, firstPositionForModel);
firstPositionForModel=false;
start=range[0];
end=range[1];
}}
if (!rangeList.isEmpty$()) {
this.appendRange$StringBuilder$I$I$S$Z(sb, start, end, chain, firstPositionForModel);
firstPositionForModel=false;
}}
}
return sb.toString();
});

Clazz.newMeth(C$, 'appendRange$StringBuilder$I$I$S$Z', function (sb, start, end, chain, firstPositionForModel) {
if (!firstPositionForModel) {
sb.append$S(",");
}if (end == start) {
sb.append$I(start);
} else {
sb.append$I(start).append$S("-").append$I(end);
}sb.append$S(".");
if (!" ".equals$O(chain)) {
sb.append$S(chain);
}});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
