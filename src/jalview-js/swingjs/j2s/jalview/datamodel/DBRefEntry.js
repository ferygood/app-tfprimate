(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'jalview.datamodel.Mapping','jalview.datamodel.DBRefSource','jalview.util.DBRefUtils']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DBRefEntry", null, null, 'jalview.api.DBRefEntryI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.source=null;
this.version=null;
this.ucversion=null;
this.accessionId=null;
this.sourceKey=0;
this.canonicalSourceName=null;
this.map=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.source="";
this.version="";
this.accessionId="";
this.sourceKey=-2147483648;
this.map=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S', function (source, version, accessionId) {
C$.c$$S$S$S$jalview_datamodel_Mapping.apply(this, [source, version, accessionId, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$jalview_datamodel_Mapping', function (source, version, accessionId, map) {
C$.$init$.apply(this);
this.source=source.toUpperCase$();
this.setVersion$S(version);
this.accessionId=accessionId;
this.map=map;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_api_DBRefEntryI', function (entry) {
C$.c$$S$S$S$jalview_datamodel_Mapping.apply(this, [(entry.getSource$() == null  ? "" :  String.instantialize(entry.getSource$())), (entry.getVersion$() == null  ? "" :  String.instantialize(entry.getVersion$())), (entry.getAccessionId$() == null  ? "" :  String.instantialize(entry.getAccessionId$())), (entry.getMap$() == null  ? null : Clazz.new_($I$(1).c$$jalview_datamodel_Mapping,[entry.getMap$()]))]);
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
var em;
return (o != null  && Clazz.instanceOf(o, "jalview.datamodel.DBRefEntry")  && (o === this  || this.equalRef$jalview_api_DBRefEntryI(o) && (this.map == null ) == ((em=(o).map) == null )   && (this.map == null  || this.map.equals$O(em) )  ) );
});

Clazz.newMeth(C$, 'updateFrom$jalview_api_DBRefEntryI', function (other) {
if (other == null ) {
return false;
}if (other === this ) {
return true;
}var otherSource=other.getSource$();
if ((this.source == null  && otherSource != null  ) || (this.source != null  && otherSource == null  ) || (this.source != null  && !this.source.equalsIgnoreCase$S(otherSource) )  ) {
return false;
}var otherAccession=other.getAccessionId$();
if ((this.accessionId == null  && otherAccession != null  ) || (this.accessionId != null  && otherAccession == null  ) || (this.accessionId != null  && !this.accessionId.equalsIgnoreCase$S(otherAccession) )  ) {
return false;
}var otherVersion=other.getVersion$();
if ((this.version == null  || this.version.equals$O("0")  || this.version.endsWith$S(":0") ) && otherVersion != null  ) {
this.setVersion$S(otherVersion);
} else {
if (this.version != null  && (otherVersion == null  || !this.version.equalsIgnoreCase$S(otherVersion) ) ) {
return false;
}}if (this.map == null ) {
this.setMap$jalview_datamodel_Mapping(other.getMap$());
}return true;
});

Clazz.newMeth(C$, 'equalRef$jalview_api_DBRefEntryI', function (entry) {
if (entry == null ) {
return false;
}if (entry === this ) {
return true;
}return (entry != null  && (this.source != null  && entry.getSource$() != null   && this.source.equalsIgnoreCase$S(entry.getSource$()) )  && (this.accessionId != null  && entry.getAccessionId$() != null   && this.accessionId.equalsIgnoreCase$S(entry.getAccessionId$()) )  && (this.version != null  && entry.getVersion$() != null   && this.version.equalsIgnoreCase$S(entry.getVersion$()) ) );
});

Clazz.newMeth(C$, 'getSource$', function () {
return this.source;
});

Clazz.newMeth(C$, 'getSourceKey$', function () {
return (this.sourceKey == -2147483648 ? (this.sourceKey=$I$(2).getSourceKey$S(this.getCanonicalSourceName$())) : this.sourceKey);
});

Clazz.newMeth(C$, 'getVersion$', function () {
return this.version;
});

Clazz.newMeth(C$, 'getAccessionId$', function () {
return this.accessionId;
});

Clazz.newMeth(C$, 'setAccessionId$S', function (accessionId) {
this.accessionId=accessionId;
});

Clazz.newMeth(C$, 'setSource$S', function (source) {
this.source=source;
});

Clazz.newMeth(C$, 'setVersion$S', function (version) {
this.version=version;
this.ucversion=(version == null  ? null : version.toUpperCase$());
});

Clazz.newMeth(C$, 'getMap$', function () {
return this.map;
});

Clazz.newMeth(C$, 'setMap$jalview_datamodel_Mapping', function (map) {
this.map=map;
});

Clazz.newMeth(C$, 'hasMap$', function () {
return this.map != null ;
});

Clazz.newMeth(C$, 'getSrcAccString$', function () {
return ((this.source != null ) ? this.source : "") + ":" + ((this.accessionId != null ) ? this.accessionId : "") ;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getSrcAccString$();
});

Clazz.newMeth(C$, 'isPrimaryCandidate$', function () {
if (this.map != null ) {
var mto=this.map.getTo$();
if (mto != null ) {
return false;
}var ml=this.map.getMap$();
if (ml.getFromRatio$() != ml.getToRatio$() || ml.getFromRatio$() != 1 ) {
return false;
}var fromRanges;
var toRanges;
if ((fromRanges=ml.getFromRanges$()).size$() != 1 || (toRanges=ml.getToRanges$()).size$() != 1 ) {
return false;
}if (fromRanges.get$I(0)[0] != toRanges.get$I(0)[0] || fromRanges.get$I(0)[1] != toRanges.get$I(0)[1] ) {
return false;
}}if (this.version == null ) {
return false;
}return $I$(2).isPrimaryCandidate$S(this.ucversion);
});

Clazz.newMeth(C$, 'isChromosome$', function () {
return this.accessionId != null  && this.accessionId.startsWith$S("chromosome:") ;
});

Clazz.newMeth(C$, 'getCanonicalSourceName$', function () {
return (this.canonicalSourceName == null  ? (this.canonicalSourceName=$I$(3).getCanonicalName$S(this.source)) : this.canonicalSourceName);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
