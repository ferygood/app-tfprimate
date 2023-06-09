(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xtal"),p$1={},I$=[[0,'javajs.util.P3','javajs.util.Lst','javajs.util.PT','org.jmol.symmetry.SymmetryOperation','javajs.util.M4','org.jmol.util.Logger','javajs.util.V3','javajs.util.M3','javajs.util.Quat','javajs.util.DF','javajs.util.SB','java.util.Arrays','java.util.Hashtable','org.jmol.util.Tensor']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CrystalReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');
C$.smap=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.smap=Clazz.array(Integer.TYPE, -1, [2, 3, 4, 11, 5, 6, 7, 12, 8, 9, 10, 13]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.isVersion3=false;
this.isPolymer=false;
this.isSlab=false;
this.haveCharges=false;
this.inputOnly=false;
this.isLongMode=false;
this.getLastConventional=false;
this.havePrimitiveMapping=false;
this.isProperties=false;
this.state=0;
this.ac=0;
this.atomIndexLast=0;
this.atomFrag=null;
this.primitiveToIndex=null;
this.nuclearCharges=null;
this.lstCoords=null;
this.energy=null;
this.ptOriginShift=null;
this.directLatticeVectors=null;
this.spaceGroupName=null;
this.checkModelTrigger=false;
this.symops=null;
this.f14=null;
this.f16=null;
this.primitiveVolume=0;
this.primitiveDensity=0;
this.firstLine=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.state=0;
this.ptOriginShift=Clazz.new_($I$(1));
this.symops=Clazz.new_($I$(2));
this.f14=Clazz.array(Float.TYPE, [14]);
this.f16=Clazz.array(Float.TYPE, [16]);
}, 1);

Clazz.newMeth(C$, 'initializeReader$', function () {
this.doProcessLines=false;
this.inputOnly=this.checkFilterKey$S("INPUT");
this.isPrimitive=!this.inputOnly && !this.checkFilterKey$S("CONV") ;
this.addVibrations&=(!this.inputOnly && this.desiredModelNumber < 0 );
this.getLastConventional=(!this.isPrimitive && this.desiredModelNumber == 0 );
this.setFractionalCoordinates$Z(p$1.readHeader.apply(this, []));
this.asc.checkLatticeOnly=!this.inputOnly;
});

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.firstLine != null ) {
this.line=this.firstLine;
this.firstLine=null;
}if (this.line.startsWith$S(" TYPE OF CALCULATION")) {
this.calculationType=this.line.substring$I(this.line.indexOf$S(":") + 1).trim$();
return true;
}if (this.line.indexOf$S("DIMENSIONALITY OF THE SYSTEM") >= 0) {
this.isMolecular=this.isSlab=this.isPolymer=false;
if (this.line.indexOf$S("2") >= 0) this.isSlab=true;
 else if (this.line.indexOf$S("1") >= 0) this.isPolymer=true;
 else if (this.line.indexOf$S("0") >= 0) this.isMolecular=true;
return true;
}if (!this.isPolymer && this.line.indexOf$S("CONSTRUCTION OF A NANOTUBE FROM A SLAB") >= 0 ) {
this.isPolymer=true;
this.isSlab=false;
return true;
}if (!this.isMolecular && this.line.indexOf$S("* CLUSTER CALCULATION") >= 0 ) {
this.isMolecular=true;
this.isSlab=false;
this.isPolymer=false;
return true;
}if (this.line.startsWith$S(" INPUT COORDINATES")) {
this.state=1;
if (this.inputOnly) {
p$1.newAtomSet.apply(this, []);
p$1.readCoordLines.apply(this, []);
this.continuing=false;
}return true;
}if (this.line.startsWith$S(" GEOMETRY INPUT FROM EXTERNAL")) {
this.state=2;
if (this.inputOnly) this.continuing=false;
return true;
}if (this.line.startsWith$S(" GEOMETRY FOR WAVE FUNCTION")) {
this.state=3;
return true;
}if (this.line.startsWith$S(" COORDINATE OPTIMIZATION - POINT")) {
this.state=4;
return true;
}if (this.line.startsWith$S(" FINAL OPTIMIZED GEOMETRY")) {
this.getLastConventional=false;
this.state=5;
return true;
}if (this.addVibrations && this.line.contains$CharSequence(this.isVersion3 ? "EIGENVALUES (EV) OF THE MASS" : "EIGENVALUES (EIGV) OF THE MASS")  || this.line.indexOf$S("LONGITUDINAL OPTICAL (LO)") >= 0 ) {
this.state=6;
this.isLongMode=(this.line.indexOf$S("LONGITUDINAL OPTICAL (LO)") >= 0);
p$1.readFrequencies.apply(this, []);
return true;
}if (this.line.startsWith$S(" TRANSFORMATION MATRIX")) {
p$1.readPrimitiveLatticeVectors.apply(this, []);
return true;
}if (this.line.startsWith$S(" COORDINATES OF THE EQUIVALENT ATOMS") || this.line.startsWith$S(" INPUT LIST - ATOM N.") ) {
return true;
}if (this.line.indexOf$S("SYMMOPS - ") >= 0) {
p$1.readSymmetryOperators.apply(this, []);
return true;
}if (this.line.startsWith$S(" LATTICE PARAMETER")) {
p$1.newLattice$Z.apply(this, [this.line.indexOf$S("- CONVENTIONAL") >= 0]);
return true;
}if (this.line.startsWith$S(" CRYSTALLOGRAPHIC CELL")) {
if (!this.isPrimitive) {
p$1.newLattice$Z.apply(this, [true]);
}return true;
}if (this.line.startsWith$S(" DIRECT LATTICE VECTOR")) {
p$1.getDirect.apply(this, []);
return true;
}if (this.line.startsWith$S(" COORDINATES IN THE CRYSTALLOGRAPHIC CELL")) {
this.checkModelTrigger=!this.isPrimitive;
if (this.checkModelTrigger) {
p$1.readCoordLines.apply(this, []);
}return true;
}if (this.addVibrations && this.line.startsWith$S(" FREQUENCIES COMPUTED ON A FRAGMENT") ) {
p$1.readFreqFragments.apply(this, []);
return true;
}if (this.checkModelTrigger) {
if (this.line.indexOf$S("CARTESIAN COORDINATES") >= 0 || this.line.indexOf$S("TOTAL ENERGY") >= 0  || this.line.indexOf$S("REFERENCE GEOMETRY DEFINED") >= 0 ) {
this.checkModelTrigger=false;
if (!p$1.addModel.apply(this, [])) return true;
}}if (this.line.startsWith$S(" ATOMS IN THE ASYMMETRIC UNIT")) {
if (this.isMolecular) return (this.doGetModel$I$S(++this.modelNumber, null) ? p$1.readAtoms.apply(this, []) : this.checkLastModel$());
p$1.readCoordLines.apply(this, []);
this.checkModelTrigger=true;
}if (this.isProperties && this.line.startsWith$S("   ATOM N.AT.") ) {
if (this.doGetModel$I$S(++this.modelNumber, null) ? p$1.readAtoms.apply(this, []) : this.checkLastModel$()) ;}if (!this.doProcessLines) return true;
if (this.line.startsWith$S(" TOTAL ENERGY(")) {
this.line=$I$(3).rep$S$S$S(this.line, "( ", "(");
var tokens=this.getTokens$();
this.energy=Double.valueOf$D(Double.parseDouble$S(tokens[2]));
p$1.setEnergy.apply(this, []);
this.rd$();
if (this.line.startsWith$S(" ********")) this.discardLinesUntilContains$S("SYMMETRY ALLOWED");
 else if (this.line.startsWith$S(" TTTTTTTT")) this.discardLinesUntilContains2$S$S("PREDICTED ENERGY CHANGE", "HHHHHHH");
return true;
}if (this.line.startsWith$S(" MULLIKEN POPULATION ANALYSIS")) return p$1.readPartialCharges.apply(this, []);
if (this.line.startsWith$S(" TOTAL ATOMIC CHARGES")) return p$1.readTotalAtomicCharges.apply(this, []);
if (this.line.startsWith$S(" MAX GRADIENT")) return p$1.readGradient.apply(this, []);
if (this.line.startsWith$S(" ATOMIC SPINS SET")) return p$1.readData$S$I.apply(this, ["spin", 3]);
if (this.line.startsWith$S(" TOTAL ATOMIC SPINS  :")) return p$1.readData$S$I.apply(this, ["magneticMoment", 1]);
if (this.line.startsWith$S(" BORN CHARGE TENSOR.")) return p$1.readBornChargeTensors.apply(this, []);
if (!this.isProperties) return true;
if (this.line.startsWith$S(" DEFINITION OF TRACELESS")) return p$1.getQuadrupoleTensors.apply(this, []);
if (this.line.startsWith$S(" MULTIPOLE ANALYSIS BY ATOMS")) {
this.appendLoadNote$S("Multipole Analysis");
return true;
}return true;
});

Clazz.newMeth(C$, 'newLattice$Z', function (isConv) {
this.lstCoords=null;
p$1.readLatticeParams$Z.apply(this, [!isConv]);
this.symops.clear$();
if (!isConv) this.primitiveToCrystal=null;
this.directLatticeVectors=null;
}, p$1);

Clazz.newMeth(C$, 'addModel', function () {
if (this.getLastConventional) {
return true;
}if (!this.doGetModel$I$S(++this.modelNumber, null)) {
this.lstCoords=null;
this.checkLastModel$();
if (this.asc.iSet >= 0) this.asc.removeAtomSet$I(this.asc.iSet);
return false;
}p$1.processCoordLines.apply(this, []);
return true;
}, p$1);

Clazz.newMeth(C$, 'readSymmetryOperators', function () {
this.symops.clear$();
this.rd$();
this.f16[15]=1;
while (this.rd$() != null  && this.line.length$() > 0  && this.line.indexOf$S("END") < 0 ){
this.fillFloatArray$S$I$FA(this.line, 0, this.f14);
for (var i=0; i < 12; i++) this.f16[i]=this.f14[C$.smap[i]];

var xyz=$I$(4).getXYZFromMatrix$javajs_util_M4$Z$Z$Z($I$(5).newA16$FA(this.f16), false, false, false);
this.symops.addLast$TV(xyz);
$I$(6).info$S("state:" + this.state + " Symmop " + this.symops.size$() + ": " + xyz );
}
}, p$1);

Clazz.newMeth(C$, 'setSymmOps', function () {
for (var i=0, n=this.symops.size$(); i < n; i++) this.setSymmetryOperator$S(this.symops.get$I(i));

}, p$1);

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
p$1.processCoordLines.apply(this, []);
if (this.energy != null ) p$1.setEnergy.apply(this, []);
this.finalizeReaderASCR$();
this.asc.checkNoEmptyModel$();
});

Clazz.newMeth(C$, 'getDirect', function () {
this.directLatticeVectors=this.read3Vectors$Z(this.line.indexOf$S("(BOHR") >= 0);
}, p$1);

Clazz.newMeth(C$, 'setUnitCellOrientation', function () {
if (this.directLatticeVectors == null ) return;
var a=Clazz.new_($I$(7));
var b=Clazz.new_($I$(7));
if (this.isPrimitive) {
a=this.directLatticeVectors[0];
b=this.directLatticeVectors[1];
} else {
if (this.primitiveToCrystal == null ) return;
var mp=Clazz.new_($I$(8));
mp.setColumnV$I$javajs_util_T3(0, this.directLatticeVectors[0]);
mp.setColumnV$I$javajs_util_T3(1, this.directLatticeVectors[1]);
mp.setColumnV$I$javajs_util_T3(2, this.directLatticeVectors[2]);
mp.mul$javajs_util_M3(this.primitiveToCrystal);
a=Clazz.new_($I$(7));
b=Clazz.new_($I$(7));
mp.getColumnV$I$javajs_util_T3(0, a);
mp.getColumnV$I$javajs_util_T3(1, b);
}this.matUnitCellOrientation=$I$(9).getQuaternionFrame$javajs_util_P3$javajs_util_T3$javajs_util_T3(Clazz.new_($I$(1)), a, b).getMatrix$();
$I$(6).info$S("oriented unit cell is in model " + this.asc.atomSetCount);
}, p$1);

Clazz.newMeth(C$, 'readPrimitiveLatticeVectors', function () {
this.primitiveToCrystal=$I$(8).newA9$FA(this.fillFloatArray$S$I$FA(null, 0, Clazz.array(Float.TYPE, [9])));
}, p$1);

Clazz.newMeth(C$, 'readShift', function () {
var tokens=this.getTokens$();
var pt=tokens.length - 3;
this.ptOriginShift.set$F$F$F($I$(3).parseFloatFraction$S(tokens[pt++]), $I$(3).parseFloatFraction$S(tokens[pt++]), $I$(3).parseFloatFraction$S(tokens[pt]));
return true;
}, p$1);

Clazz.newMeth(C$, 'readHeader', function () {
this.havePrimitiveMapping=true;
this.discardLinesUntilContains$S("*******************************************************************************");
this.readLines$I(2);
this.isVersion3=(this.line.indexOf$S("CRYSTAL03") >= 0);
this.discardLinesUntilContains$S("EEEEEEEEEE");
var name;
if (this.rd$().length$() == 0) {
name=this.readLines$I(2).trim$();
} else {
name=this.line.trim$();
this.rd$();
}var type=this.rd$().trim$();
var pt=type.indexOf$S("- PROPERTIES");
if (pt >= 0) {
this.isProperties=true;
type=type.substring$I$I(0, pt).trim$();
}this.asc.setCollectionName$S(name + (!this.isProperties && this.desiredModelNumber == 0  ? " (optimized)" : ""));
if (type.indexOf$S("GEOMETRY INPUT FROM EXTERNAL FILE") >= 0) {
this.firstLine=this.line;
type=this.rd$().trim$();
}this.isPolymer=(type.equals$O("1D - POLYMER") || type.equals$O("POLYMER CALCULATION") );
this.isSlab=(type.equals$O("2D - SLAB") || type.equals$O("SLAB CALCULATION") );
this.asc.setInfo$S$O("symmetryType", (this.isSlab ? "2D - SLAB" : this.isPolymer ? "1D - POLYMER" : type));
if ((this.isPolymer || this.isSlab ) && !this.isPrimitive ) {
$I$(6).error$S("Cannot use FILTER \"conventional\" with POLYMER or SLAB");
this.isPrimitive=true;
}this.asc.setInfo$S$O("unitCellType", (this.isPrimitive ? "primitive" : "conventional"));
if (type.indexOf$S("MOLECULAR") >= 0) {
this.isMolecular=this.doProcessLines=true;
this.rd$();
this.asc.setInfo$S$O("molecularCalculationPointGroup", this.line.substring$I(this.line.indexOf$S(" OR ") + 4).trim$());
return false;
}this.discardLinesUntilContains2$S$S("SPACE GROUP", "****");
pt=this.line.indexOf$S(":");
if (pt >= 0 && !this.isPrimitive ) this.spaceGroupName=this.line.substring$I(pt + 1).trim$();
this.doApplySymmetry=this.isProperties;
return !this.isProperties;
}, p$1);

Clazz.newMeth(C$, 'readLatticeParams$Z', function (isPrimitive) {
var f=(this.line.indexOf$S("(BOHR") >= 0 ? 0.5291772 : 1);
if (isPrimitive) p$1.newAtomSet.apply(this, []);
this.primitiveVolume=0;
this.primitiveDensity=0;
if (this.isPolymer && !isPrimitive && this.line.indexOf$S("BOHR =") < 0  ) {
this.setUnitCell$F$F$F$F$F$F(this.parseFloatStr$S(this.line.substring$I(this.line.indexOf$S("CELL") + 4)) * f, -1, -1, 90, 90, 90);
} else {
while (this.rd$().indexOf$S("GAMMA") < 0)if (this.line.indexOf$S("VOLUME=") >= 0) {
this.primitiveVolume=this.parseFloatStr$S(this.line.substring$I(43));
this.primitiveDensity=this.parseFloatStr$S(this.line.substring$I(66));
}
var tokens=$I$(3).getTokens$S(this.rd$());
if (this.isSlab) {
if (isPrimitive) this.setUnitCell$F$F$F$F$F$F(this.parseFloatStr$S(tokens[0]) * f, this.parseFloatStr$S(tokens[1]) * f, -1, this.parseFloatStr$S(tokens[3]), this.parseFloatStr$S(tokens[4]), this.parseFloatStr$S(tokens[5]));
 else this.setUnitCell$F$F$F$F$F$F(this.parseFloatStr$S(tokens[0]) * f, this.parseFloatStr$S(tokens[1]) * f, -1, 90, 90, this.parseFloatStr$S(tokens[2]));
} else if (this.isPolymer) {
this.setUnitCell$F$F$F$F$F$F(this.parseFloatStr$S(tokens[0]) * f, -1, -1, this.parseFloatStr$S(tokens[3]), this.parseFloatStr$S(tokens[4]), this.parseFloatStr$S(tokens[5]));
} else {
this.setUnitCell$F$F$F$F$F$F(this.parseFloatStr$S(tokens[0]) * f, this.parseFloatStr$S(tokens[1]) * f, this.parseFloatStr$S(tokens[2]) * f, this.parseFloatStr$S(tokens[3]), this.parseFloatStr$S(tokens[4]), this.parseFloatStr$S(tokens[5]));
}}}, p$1);

Clazz.newMeth(C$, 'getAtomIndexFromPrimitiveIndex$I', function (iPrim) {
return (this.primitiveToIndex == null  ? iPrim : this.primitiveToIndex[iPrim]);
}, p$1);

Clazz.newMeth(C$, 'readAtoms', function () {
if (this.isMolecular) p$1.newAtomSet.apply(this, []);
this.lstCoords=null;
while (this.rd$() != null  && this.line.indexOf$S("*") < 0 ){
if (this.line.indexOf$S("X(ANGSTROM") >= 0) {
this.setFractionalCoordinates$Z(false);
this.isMolecular=true;
}}
var i=this.atomIndexLast;
var doNormalizePrimitive=false;
this.atomIndexLast=this.asc.ac;
while (this.rd$() != null  && this.line.length$() > 0  && this.line.indexOf$S(this.isPrimitive ? "*" : "=") < 0 ){
var atom=this.asc.addNewAtom$();
var tokens=this.getTokens$();
var pt=(this.isProperties ? 1 : 2);
atom.elementSymbol=org.jmol.adapter.smarter.AtomSetCollectionReader.getElementSymbol$I(p$1.getAtomicNumber$S.apply(this, [tokens[pt++]]));
atom.atomName=C$.fixAtomName$S(tokens[pt++]);
if (this.isProperties) pt++;
var x=this.parseFloatStr$S(tokens[pt++]);
var y=this.parseFloatStr$S(tokens[pt++]);
var z=this.parseFloatStr$S(tokens[pt]);
if (this.haveCharges) atom.partialCharge=this.asc.atoms[i++].partialCharge;
if (this.iHaveFractionalCoordinates && !this.isProperties ) {
if (x < 0  && (this.isPolymer || this.isSlab || doNormalizePrimitive  ) ) x += 1;
if (y < 0  && (this.isSlab || doNormalizePrimitive ) ) y += 1;
if (z < 0  && doNormalizePrimitive ) z += 1;
}this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atom, x, y, z);
}
this.ac=this.asc.ac - this.atomIndexLast;
return true;
}, p$1);

Clazz.newMeth(C$, 'fixAtomName$S', function (s) {
return (s.length$() > 1 && $I$(3).isLetter$C(s.charAt$I(1))  ? s.substring$I$I(0, 1) + Character.toLowerCase$C(s.charAt$I(1)) + s.substring$I(2)  : s);
}, 1);

Clazz.newMeth(C$, 'getAtomicNumber$S', function (token) {
return this.parseIntStr$S(token) % 100;
}, p$1);

Clazz.newMeth(C$, 'readCoordLines', function () {
var atom=(this.inputOnly ? " ATOM" : "  ATOM");
if (this.line.indexOf$S(atom) < 0) this.discardLinesUntilContains$S(atom);
this.lstCoords=Clazz.new_($I$(2));
while (this.rd$() != null  && this.line.length$() > 0 )if (this.line.indexOf$S("****") < 0) this.lstCoords.addLast$TV(this.line);

}, p$1);

Clazz.newMeth(C$, 'processCoordLines', function () {
if (this.lstCoords == null ) return;
this.ac=this.lstCoords.size$();
var irreducible=null;
for (var i=0; i < this.ac; i++) {
var atom=this.asc.addNewAtom$();
var tokens=$I$(3).getTokens$S(this.lstCoords.get$I(i));
atom.atomSerial=this.parseIntStr$S(tokens[0]);
var atomicNumber;
var offset;
switch (tokens.length) {
case 8:
case 7:
atomicNumber=p$1.getAtomicNumber$S.apply(this, [tokens[2]]);
offset=4;
if (i == 0) irreducible=Clazz.array(Float.TYPE, [this.ac]);
if (tokens[1].equals$O("T")) irreducible[i]=1;
break;
default:
atomicNumber=p$1.getAtomicNumber$S.apply(this, [tokens[1]]);
offset=2;
break;
}
var x=this.parseFloatStr$S(tokens[offset++]) + this.ptOriginShift.x;
var y=this.parseFloatStr$S(tokens[offset++]) + this.ptOriginShift.y;
var z=this.parseFloatStr$S(tokens[offset]) + this.ptOriginShift.z;
this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atom, x, y, z);
atom.elementSymbol=org.jmol.adapter.smarter.AtomSetCollectionReader.getElementSymbol$I(atomicNumber);
}
this.lstCoords=null;
if (irreducible != null ) {
this.asc.setAtomProperties$S$O$I$Z("irreducible", irreducible, -1, false);
}if (this.primitiveVolume > 0 ) {
this.asc.setAtomSetModelProperty$S$S("volumePrimitive", $I$(10).formatDecimal$F$I(this.primitiveVolume, 3));
this.asc.setModelInfoForSet$S$O$I("primitiveVolume", Float.valueOf$F(this.primitiveVolume), this.asc.iSet);
}if (this.primitiveDensity > 0 ) {
this.asc.setAtomSetModelProperty$S$S("densityPrimitive", $I$(10).formatDecimal$F$I(this.primitiveDensity, 3));
this.asc.setModelInfoForSet$S$O$I("primitiveDensity", Float.valueOf$F(this.primitiveDensity), this.asc.iSet);
}}, p$1);

Clazz.newMeth(C$, 'applySymmetryAndSetTrajectory$', function () {
p$1.setUnitCellOrientation.apply(this, []);
var m4p2c;
var m4c2p;
if (this.primitiveToCrystal != null ) {
this.asc.setModelInfoForSet$S$O$I("primitiveToCrystal", this.primitiveToCrystal, this.asc.iSet);
m4p2c=Clazz.new_($I$(5));
m4p2c.setRotationScale$javajs_util_M3(this.primitiveToCrystal);
m4p2c.m33=1;
this.asc.setModelInfoForSet$S$O$I("mat4PrimitiveToCrystal", m4p2c, this.asc.iSet);
m4c2p=$I$(5).newM4$javajs_util_M4(m4p2c);
m4c2p.invert$();
this.asc.setModelInfoForSet$S$O$I("mat4CrystalToPrimitive", m4c2p, this.asc.iSet);
if (this.symops.size$() > 0) {
this.asc.setModelInfoForSet$S$O$I("fileSymmetryOperations", this.symops.clone$(), this.asc.iSet);
}}this.iHaveSymmetryOperators=false;
this.applySymTrajASCR$();
});

Clazz.newMeth(C$, 'newAtomSet', function () {
if (this.ac > 0 && this.asc.ac > 0 ) {
this.applySymmetryAndSetTrajectory$();
this.asc.newAtomSet$();
}if (this.spaceGroupName != null ) {
this.setSpaceGroupName$S(this.spaceGroupName);
}this.ac=0;
}, p$1);

Clazz.newMeth(C$, 'setEnergy', function () {
this.asc.setAtomSetEnergy$S$F("" + this.energy.toString(), this.energy.floatValue$());
this.asc.setCurrentModelInfo$S$O("Energy", this.energy);
this.asc.setInfo$S$O("Energy", this.energy);
this.asc.setAtomSetName$S("Energy = " + this.energy.toString() + " Hartree" );
}, p$1);

Clazz.newMeth(C$, 'readPartialCharges', function () {
if (this.haveCharges || this.asc.ac == 0 ) return true;
this.haveCharges=true;
this.readLines$I(3);
var atoms=this.asc.atoms;
var i0=this.asc.getLastAtomSetAtomIndex$();
var iPrim=0;
while (this.rd$() != null  && this.line.length$() > 3 )if (this.line.charAt$I(3) != " ") {
var iConv=p$1.getAtomIndexFromPrimitiveIndex$I.apply(this, [iPrim]);
if (iConv >= 0) atoms[i0 + iConv].partialCharge=this.parseFloatRange$S$I$I(this.line, 9, 11) - this.parseFloatRange$S$I$I(this.line, 12, 18);
iPrim++;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'readTotalAtomicCharges', function () {
var data=Clazz.new_($I$(11));
while (this.rd$() != null  && this.line.indexOf$S("T") < 0 )data.append$S(this.line);

var tokens=$I$(3).getTokens$S(data.toString());
var charges=Clazz.array(Float.TYPE, [tokens.length]);
if (this.nuclearCharges == null ) this.nuclearCharges=charges;
if (this.asc.ac == 0) return true;
var atoms=this.asc.atoms;
var i0=this.asc.getLastAtomSetAtomIndex$();
for (var i=0; i < charges.length; i++) {
var iConv=p$1.getAtomIndexFromPrimitiveIndex$I.apply(this, [i]);
if (iConv >= 0) {
charges[i]=this.parseFloatStr$S(tokens[i]);
atoms[i0 + iConv].partialCharge=this.nuclearCharges[i] - charges[i];
}}
return true;
}, p$1);

Clazz.newMeth(C$, 'readFreqFragments', function () {
var numAtomsFrag=this.parseIntRange$S$I$I(this.line, 39, 44);
if (numAtomsFrag < 0) return;
this.atomFrag=Clazz.array(Integer.TYPE, [numAtomsFrag]);
var Sfrag="";
while (this.rd$() != null  && this.line.indexOf$S("(") >= 0 )Sfrag += this.line;

Sfrag=$I$(3).rep$S$S$S(Sfrag, "(", " ");
Sfrag=$I$(3).rep$S$S$S(Sfrag, ")", " ");
var tokens=$I$(3).getTokens$S(Sfrag);
for (var i=0, pos=0; i < numAtomsFrag; i++, pos+=3) this.atomFrag[i]=p$1.getAtomIndexFromPrimitiveIndex$I.apply(this, [this.parseIntStr$S(tokens[pos]) - 1]);

$I$(12).sort$IA(this.atomFrag);
}, p$1);

Clazz.newMeth(C$, 'readFrequencies', function () {
this.getLastConventional=false;
p$1.addModel.apply(this, []);
this.energy=null;
this.discardLinesUntilContains$S("MODES");
var haveIntensities=(this.line.indexOf$S("INTENS") >= 0);
this.rd$();
var vData=Clazz.new_($I$(2));
var freqAtomCount=(this.atomFrag == null  ? this.ac : 0);
while (this.rd$() != null  && this.line.length$() > 0 ){
var i0=this.parseIntRange$S$I$I(this.line, 1, 5);
var i1=this.parseIntRange$S$I$I(this.line, 6, 10);
var irrep=(this.isLongMode ? this.line.substring$I$I(48, 51) : this.line.substring$I$I(49, 52)).trim$();
var intens=(!haveIntensities ? "not available" : (this.isLongMode ? this.line.substring$I$I(53, 61) : this.line.substring$I$I(59, 69).replace$C$C(")", " ")).trim$());
var irActivity=(this.isLongMode ? "A" : this.line.substring$I$I(55, 58).trim$());
var ramanActivity=(this.isLongMode ? "I" : this.line.substring$I$I(71, 73).trim$());
var data=Clazz.array(String, -1, [irrep, intens, irActivity, ramanActivity]);
for (var i=i0; i <= i1; i++) vData.addLast$TV(data);

}
var test=(this.isLongMode ? "LO MODES FOR IRREP" : this.isVersion3 ? "THE CORRESPONDING MODES" : "NORMAL MODES NORMALIZED TO CLASSICAL AMPLITUDES");
this.rd$();
var ramanData=null;
if (this.line.indexOf$S("<RAMAN>") >= 0) ramanData=p$1.readRaman$javajs_util_Lst.apply(this, [null]);
if (!this.line.contains$CharSequence(test)) this.discardLinesUntilContains$S(test);
this.rd$();
var modelAtomCount=-1;
while (this.rd$() != null  && this.line.startsWith$S(" FREQ(CM**-1)") ){
var tokens=$I$(3).getTokens$S(this.line.substring$I(15));
var frequencies=Clazz.array(Float.TYPE, [tokens.length]);
var frequencyCount=frequencies.length;
for (var i=0; i < frequencyCount; i++) {
frequencies[i]=this.parseFloatStr$S(tokens[i]);
if (this.debugging) $I$(6).debug$S((this.vibrationNumber + i) + " frequency=" + new Float(frequencies[i]).toString() );
}
var ignore=Clazz.array(Boolean.TYPE, [frequencyCount]);
var iAtom0=0;
var nData=vData.size$();
var isFirst=true;
for (var i=0; i < frequencyCount; i++) {
tokens=vData.get$I(this.vibrationNumber % nData);
ignore[i]=(!this.doGetVibration$I(++this.vibrationNumber) || tokens == null  );
if (ignore[i]) continue;
this.applySymmetryAndSetTrajectory$();
if (isFirst) {
modelAtomCount=this.asc.getLastAtomSetAtomCount$();
}this.cloneLastAtomSet$I$javajs_util_P3A(this.ac, null);
if (isFirst) {
iAtom0=this.asc.getLastAtomSetAtomIndex$();
isFirst=false;
}p$1.setFreqValue$F$SA.apply(this, [frequencies[i], tokens]);
}
this.rd$();
this.fillFrequencyData$I$I$I$ZA$Z$I$I$IA$I$SAA(iAtom0, freqAtomCount, modelAtomCount, ignore, false, 14, 10, this.atomFrag, 0, null);
this.rd$();
}
if (ramanData != null ) p$1.readRaman$javajs_util_Lst.apply(this, [ramanData]);
}, p$1);

Clazz.newMeth(C$, 'setFreqValue$F$SA', function (freq, data) {
var activity="IR: " + data[2] + ", Ram.: " + data[3] ;
this.asc.setAtomSetFrequency$I$S$S$S$S(this.vibrationNumber, null, activity, "" + new Float(freq).toString(), null);
this.asc.setAtomSetModelProperty$S$S("IRintensity", data[1] + " km/Mole");
this.asc.setAtomSetModelProperty$S$S("vibrationalSymmetry", data[0]);
this.asc.setAtomSetModelProperty$S$S("IRactivity", data[2]);
this.asc.setAtomSetModelProperty$S$S("Ramanactivity", data[3]);
this.asc.setAtomSetName$S((this.isLongMode ? "LO " : "") + data[0] + " " + $I$(10).formatDecimal$F$I(freq, 2) + " cm-1 (" + $I$(10).formatDecimal$F$I(Float.parseFloat$S(data[1]), 0) + " km/Mole), " + activity );
}, p$1);

Clazz.newMeth(C$, 'readRaman$javajs_util_Lst', function (ramanData) {
if (ramanData == null ) {
ramanData=Clazz.new_($I$(2));
this.rd$();
while (this.rd$() != null  && !this.line.contains$CharSequence("<RAMAN>") )ramanData.addLast$TV(this.line);

return ramanData;
}var info;
var i=0;
var n=ramanData.size$();
for (; i < n; i++) {
this.line=ramanData.get$I(i);
if (this.line.contains$CharSequence("---")) break;
}
for (++i; i < n; i++) {
this.line=ramanData.get$I(i);
if (this.line.length$() == 0) break;
var mode1=this.parseIntRange$S$I$I(this.line, 1, 5);
var mode2=this.parseIntRange$S$I$I(this.line, 6, 10);
var i_tot=this.parseFloatRange$S$I$I(this.line, 30, 40);
var i_par=this.parseFloatRange$S$I$I(this.line, 40, 50);
var i_perp=this.parseFloatRange$S$I$I(this.line, 50, 60);
for (var i0=0, mode=mode1; mode <= mode2; mode++) {
var imodel=p$1.getModelForMode$I$I.apply(this, [i0, mode]);
if (imodel < 0) continue;
i0=imodel + 1;
info=this.asc.getAtomSetAuxiliaryInfoValue$I$S(imodel, "ramanInfo");
if (info == null ) this.asc.setModelInfoForSet$S$O$I("ramanInfo", info=Clazz.new_($I$(13)), imodel);
info.put$TK$TV("isotropicIntensities", Clazz.array(Float.TYPE, -1, [i_tot, i_par, i_perp]));
}
}
for (; i < n; i++) {
this.line=ramanData.get$I(i);
if (this.line.contains$CharSequence("---")) break;
}
for (++i; i < n; i++) {
this.line=ramanData.get$I(i);
if (this.line.length$() == 0) break;
var mode1=this.parseIntRange$S$I$I(this.line, 1, 5);
var mode2=this.parseIntRange$S$I$I(this.line, 6, 10);
var i_xx=this.parseFloatRange$S$I$I(this.line, 30, 38);
var i_xy=this.parseFloatRange$S$I$I(this.line, 38, 46);
var i_xz=this.parseFloatRange$S$I$I(this.line, 46, 54);
var i_yy=this.parseFloatRange$S$I$I(this.line, 54, 62);
var i_yz=this.parseFloatRange$S$I$I(this.line, 62, 70);
var i_zz=this.parseFloatRange$S$I$I(this.line, 70, 78);
for (var i0=0, mode=mode1; mode <= mode2; mode++) {
var imodel=p$1.getModelForMode$I$I.apply(this, [i0, mode]);
if (imodel < 0) continue;
i0=imodel + 1;
var a=Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [i_xx, i_xy, i_xz]), Clazz.array(Double.TYPE, -1, [i_xy, i_yy, i_yz]), Clazz.array(Double.TYPE, -1, [i_xz, i_yz, i_zz])]);
this.asc.atoms[this.asc.getAtomSetAtomIndex$I(imodel)].addTensor$org_jmol_util_Tensor$S$Z(Clazz.new_($I$(14)).setFromAsymmetricTensor$DAA$S$S(a, "raman", "mode" + mode), "raman", false);
}
}
this.appendLoadNote$S("Ellipsoids set \"raman\": Raman tensors");
return null;
}, p$1);

Clazz.newMeth(C$, 'getModelForMode$I$I', function (i0, mode) {
var n=this.asc.atomSetCount;
for (var i=i0; i < n; i++) {
var imode=this.asc.getAtomSetAuxiliaryInfoValue$I$S(i, "vibrationalMode");
var m=(imode == null  ? 0 : imode.intValue$());
if (m == mode) return i;
}
return -1;
}, p$1);

Clazz.newMeth(C$, 'readGradient', function () {
var key=null;
while (this.line != null ){
var tokens=this.getTokens$();
if (this.line.indexOf$S("MAX GRAD") >= 0) key="maxGradient";
 else if (this.line.indexOf$S("RMS GRAD") >= 0) key="rmsGradient";
 else if (this.line.indexOf$S("MAX DISP") >= 0) key="maxDisplacement";
 else if (this.line.indexOf$S("RMS DISP") >= 0) key="rmsDisplacement";
 else break;
if (this.asc.ac > 0) this.asc.setAtomSetModelProperty$S$S(key, tokens[2]);
this.rd$();
}
return true;
}, p$1);

Clazz.newMeth(C$, 'readData$S$I', function (name, nfields) {
p$1.processCoordLines.apply(this, []);
var f=Clazz.array(Float.TYPE, [this.ac]);
for (var i=0; i < this.ac; i++) f[i]=0;

var data="";
while (this.rd$() != null  && (this.line.length$() < 4 || $I$(3).isDigit$C(this.line.charAt$I(3)) ) )data += this.line;

data=$I$(3).rep$S$S$S(data, "-", " -");
var tokens=$I$(3).getTokens$S(data);
for (var i=0, pt=nfields - 1; i < this.ac; i++, pt+=nfields) {
var iConv=p$1.getAtomIndexFromPrimitiveIndex$I.apply(this, [i]);
if (iConv >= 0) f[iConv]=this.parseFloatStr$S(tokens[pt]);
}
this.asc.setAtomProperties$S$O$I$Z(name, f, -1, false);
return true;
}, p$1);

Clazz.newMeth(C$, 'getQuadrupoleTensors', function () {
this.readLines$I(6);
var atoms=this.asc.atoms;
var vectors=Clazz.array($I$(7), [3]);
if (this.directLatticeVectors == null ) vectors=Clazz.array($I$(7), -1, [$I$(7).new3$F$F$F(1, 0, 0), $I$(7).new3$F$F$F(0, 1, 0), $I$(7).new3$F$F$F(0, 0, 1)]);
 else for (var i=0; i < 3; i++) {
vectors[i]=$I$(7).newV$javajs_util_T3(this.directLatticeVectors[i]);
vectors[i].normalize$();
}
while (this.rd$() != null  && this.line.startsWith$S(" *** ATOM") ){
var tokens=this.getTokens$();
var index=this.parseIntStr$S(tokens[3]) - 1;
tokens=$I$(3).getTokens$S(this.readLines$I(3));
atoms[index].addTensor$org_jmol_util_Tensor$S$Z(Clazz.new_($I$(14)).setFromEigenVectors$javajs_util_V3A$FA$S$S$org_jmol_util_Tensor(vectors, Clazz.array(Float.TYPE, -1, [this.parseFloatStr$S(tokens[1]), this.parseFloatStr$S(tokens[3]), this.parseFloatStr$S(tokens[5])]), "quadrupole", atoms[index].atomName, null), null, false);
this.rd$();
}
this.appendLoadNote$S("Ellipsoids set \"quadrupole\": Quadrupole tensors");
return true;
}, p$1);

Clazz.newMeth(C$, 'readBornChargeTensors', function () {
p$1.processCoordLines.apply(this, []);
this.rd$();
var atoms=this.asc.atoms;
while (this.rd$().startsWith$S(" ATOM")){
var index=this.parseIntAt$S$I(this.line, 5) - 1;
var atom=atoms[index];
this.readLines$I(2);
var a=Clazz.array(Double.TYPE, [3, 3]);
for (var i=0; i < 3; i++) {
var tokens=$I$(3).getTokens$S(this.rd$());
for (var j=0; j < 3; j++) a[i][j]=this.parseFloatStr$S(tokens[j + 1]);

}
atom.addTensor$org_jmol_util_Tensor$S$Z(Clazz.new_($I$(14)).setFromAsymmetricTensor$DAA$S$S(a, "charge", atom.elementSymbol + (index + 1)), null, false);
this.rd$();
}
this.appendLoadNote$S("Ellipsoids set \"charge\": Born charge tensors");
return false;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:58 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
