(function(){var P$=Clazz.newPackage("jalview.javascript"),I$=[[0,'jalview.util.HttpUtils','jalview.structure.StructureSelectionManager','jalview.bin.JalviewLite','jalview.datamodel.SequenceI','jalview.appletgui.FeatureRenderer','java.util.ArrayList','jalview.ext.jmol.JmolCommands']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MouseOverStructureListener", null, 'jalview.javascript.JSFunctionExec', ['jalview.javascript.JsCallBack', 'jalview.structure.StructureListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._listenerfn=null;
this.modelSet=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_bin_JalviewLite$S$SA', function (jalviewLite, listener, modelList) {
C$.superclazz.c$$jalview_bin_JalviewLite.apply(this, [jalviewLite]);
C$.$init$.apply(this);
this._listenerfn=listener;
this.modelSet=modelList;
if (this.modelSet != null ) {
for (var i=0; i < this.modelSet.length; i++) {
this.modelSet[i]=this.resolveModelFile$S(this.modelSet[i]);
}
}}, 1);

Clazz.newMeth(C$, 'resolveModelFile$S', function (file) {
if ($I$(1).isValidUrl$S(file)) {
return file;
}var db=this.jvlite.getDocumentBase$().toString();
db=db.substring$I$I(0, db.lastIndexOf$S("/"));
var docBaseFile=db + "/" + file ;
if ($I$(1).isValidUrl$S(docBaseFile)) {
return docBaseFile;
}var cb=this.jvlite.getCodeBase$() + file;
if ($I$(1).isValidUrl$S(cb)) {
return cb;
}return file;
});

Clazz.newMeth(C$, 'getStructureFiles$', function () {
return this.modelSet;
});

Clazz.newMeth(C$, 'mouseOverStructure$I$S', function (atomIndex, strInfo) {
});

Clazz.newMeth(C$, 'highlightAtoms$java_util_List', function (atoms) {
for (var atom, $atom = atoms.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
try {
this.executeJavascriptFunction$S$OA(this._listenerfn, Clazz.array(String, -1, ["mouseover", "" + atom.getPdbFile$(), "" + atom.getChain$(), "" + (atom.getPdbResNum$()), "" + atom.getAtomIndex$()]));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Couldn't execute callback with " + this._listenerfn + " for atomSpec: " + atom );
ex.printStackTrace$();
} else {
throw ex;
}
}
}
});

Clazz.newMeth(C$, 'updateColours$O', function (srce) {
var source=srce;
var ssm=$I$(2).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(this.jvlite);
if ($I$(3).debug) {
System.err.println$S(this.getClass$().getName$() + " modelSet[0]: " + this.modelSet[0] );
ssm.reportMapping$();
}if (Clazz.instanceOf(source, "jalview.api.AlignmentViewPanel")) {
var sequence=Clazz.array($I$(4), [this.modelSet.length, null]);
for (var m=0; m < this.modelSet.length; m++) {
var sm=ssm.getMapping$S(this.modelSet[m]);
if (sm != null  && sm.length > 0 ) {
sequence[m]=Clazz.array($I$(4), [sm.length]);
for (var i=0; i < sm.length; i++) {
sequence[m][i]=sm[i].getSequence$();
}
} else {
sequence[m]=Clazz.array($I$(4), [0]);
}}
var sr=(source).getSequenceRenderer$();
var fr=(source).av.isShowSequenceFeatures$() ? Clazz.new_($I$(5).c$$jalview_viewmodel_AlignmentViewport,[(source).av]) : null;
if (fr != null ) {
(fr).transferSettings$jalview_api_FeatureRenderer((source).getFeatureRenderer$());
};var ccomands=Clazz.new_($I$(6));
var pdbfn=Clazz.new_($I$(6));
var colcommands=$I$(7).getColourBySequenceCommand$jalview_structure_StructureSelectionManager$SA$jalview_datamodel_SequenceIAA$jalview_api_SequenceRenderer$jalview_api_AlignmentViewPanel(ssm, this.modelSet, sequence, sr, source);
if (colcommands == null ) {
return;
}var sz=0;
for (var ccset, $ccset = 0, $$ccset = colcommands; $ccset<$$ccset.length&&((ccset=($$ccset[$ccset])),1);$ccset++) {
sz+=ccset.commands.length;
ccomands.add$TE(ccset.commands);
pdbfn.add$TE(ccset.mapping);
}
var mclass;
var mhandle;
var ccomandset=Clazz.array(String, [sz]);
sz=0;
for (var ccset, $ccset = ccomands.iterator$(); $ccset.hasNext$()&&((ccset=($ccset.next$())),1);) {
System.arraycopy$O$I$O$I$I(ccset, 0, ccomandset, sz, ccset.length);
sz+=ccset.length;
}
if (this.jvlite.isJsMessageSetChanged$S$S$SA(mclass="colourstruct", mhandle=(source).av.getViewId$(), ccomandset)) {
this.jvlite.setJsMessageSet$S$S$SA(mclass, mhandle, ccomandset);
var st=Clazz.array(String, -1, ["colourstruct", "" + (source).av.getViewId$(), "" + ccomandset.length, this.jvlite.arrayToSeparatorList$SA(pdbfn.toArray$TTA(Clazz.array(String, [pdbfn.size$()])))]);
try {
this.executeJavascriptFunction$Z$S$OA(true, this._listenerfn, st);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Couldn't execute callback with " + this._listenerfn + " using args { " + st[0] + ", " + st[1] + ", " + st[2] + "," + st[3] + "}" );
ex.printStackTrace$();
} else {
throw ex;
}
}
}}});

Clazz.newMeth(C$, 'getAlignFrame$', function () {
return null;
});

Clazz.newMeth(C$, 'getListenerFunction$', function () {
return this._listenerfn;
});

Clazz.newMeth(C$, 'releaseReferences$O', function (svl) {
});

Clazz.newMeth(C$, 'isListeningFor$jalview_datamodel_SequenceI', function (seq) {
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
