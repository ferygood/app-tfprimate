(function(){var P$=Clazz.newPackage("ext.edu.ucsf.rbvi.strucviz2"),I$=[[0,'java.util.TreeMap','java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ChimeraChain", null, null, 'ext.edu.ucsf.rbvi.strucviz2.ChimeraStructuralObject');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.modelNumber=0;
this.subModelNumber=0;
this.chimeraModel=null;
this.chainId=null;
this.residueMap=null;
this.userData=null;
this.selected=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.selected=false;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$S', function (model, subModel, chainId) {
C$.$init$.apply(this);
this.modelNumber=model;
this.subModelNumber=subModel;
this.chainId=chainId;
this.residueMap=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'setSelected$Z', function (selected) {
this.selected=selected;
});

Clazz.newMeth(C$, 'isSelected$', function () {
return this.selected;
});

Clazz.newMeth(C$, 'hasSelectedChildren$', function () {
if (this.selected) {
return true;
} else {
for (var residue, $residue = this.getResidues$().iterator$(); $residue.hasNext$()&&((residue=($residue.next$())),1);) {
if (residue.isSelected$()) return true;
}
}return false;
});

Clazz.newMeth(C$, 'getSelectedResidues$', function () {
var residueList=Clazz.new_($I$(2));
if (this.selected) {
residueList.addAll$java_util_Collection(this.getResidues$());
} else {
for (var residue, $residue = this.getResidues$().iterator$(); $residue.hasNext$()&&((residue=($residue.next$())),1);) {
if (residue.isSelected$()) residueList.add$TE(residue);
}
}return residueList;
});

Clazz.newMeth(C$, 'addResidue$ext_edu_ucsf_rbvi_strucviz2_ChimeraResidue', function (residue) {
var index=residue.getIndex$();
this.residueMap.put$TK$TV(index, residue);
});

Clazz.newMeth(C$, 'getResidues$', function () {
return this.residueMap.values$();
});

Clazz.newMeth(C$, 'getChildren$', function () {
return Clazz.new_($I$(2).c$$java_util_Collection,[this.residueMap.values$()]);
});

Clazz.newMeth(C$, 'getResidue$S', function (index) {
if (this.residueMap.containsKey$O(index)) return this.residueMap.get$O(index);
return null;
});

Clazz.newMeth(C$, 'getResidueRange$S', function (residueRange) {
var range=residueRange.split$S$I("-", 2);
if (range[1] == null  || range[1].length$() == 0 ) {
range[1]=range[0];
}var resultRange=Clazz.new_($I$(2));
var start=Integer.parseInt$S(range[0]);
var end=Integer.parseInt$S(range[1]);
for (var i=start; i <= end; i++) {
var index=String.valueOf$I(i);
if (this.residueMap.containsKey$O(index)) resultRange.add$TE(this.residueMap.get$O(index));
}
return resultRange;
});

Clazz.newMeth(C$, 'getChainId$', function () {
return this.chainId;
});

Clazz.newMeth(C$, 'getModelNumber$', function () {
return this.modelNumber;
});

Clazz.newMeth(C$, 'getSubModelNumber$', function () {
return this.subModelNumber;
});

Clazz.newMeth(C$, 'displayName$', function () {
if (this.chainId.equals$O("_")) {
return ("Chain (no ID) (" + this.getResidueCount$() + " residues)" );
} else {
return ("Chain " + this.chainId + " (" + this.getResidueCount$() + " residues)" );
}});

Clazz.newMeth(C$, 'toString', function () {
var displayName=this.chimeraModel.getModelName$();
if (displayName.length$() > 14) displayName=displayName.substring$I$I(0, 13) + "...";
if (this.chainId.equals$O("_")) {
return (displayName + " Chain (no ID) (" + this.getResidueCount$() + " residues)" );
} else {
return (displayName + " Chain " + this.chainId + " (" + this.getResidueCount$() + " residues)" );
}});

Clazz.newMeth(C$, 'toSpec$', function () {
if (this.chainId.equals$O("_")) {
return ("#" + this.modelNumber + "." + this.subModelNumber + ":." );
} else {
return ("#" + this.modelNumber + "." + this.subModelNumber + ":." + this.chainId );
}});

Clazz.newMeth(C$, 'getResidueCount$', function () {
return this.residueMap.size$();
});

Clazz.newMeth(C$, 'setChimeraModel$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel', function (model) {
this.chimeraModel=model;
});

Clazz.newMeth(C$, 'getChimeraModel$', function () {
return this.chimeraModel;
});

Clazz.newMeth(C$, 'getUserData$', function () {
return this.userData;
});

Clazz.newMeth(C$, 'setUserData$O', function (data) {
this.userData=data;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
