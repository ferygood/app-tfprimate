(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models"),I$=[[0,'java.awt.Color','java.awt.Font',['fr.orsay.lri.varna.models.VARNAConfig','.BP_STYLE'],'fr.orsay.lri.varna.models.rna.ModeleColorMap','org.xml.sax.helpers.AttributesImpl','fr.orsay.lri.varna.utils.XMLUtils','Boolean','java.io.ByteArrayOutputStream','java.io.ObjectOutputStream','java.io.ObjectInputStream','java.io.ByteArrayInputStream']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VARNAConfig", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.io.Serializable', 'Cloneable']);
C$.DEFAULT_TITLE_COLOR=null;
C$.DEFAULT_BACKBONE_COLOR=null;
C$.DEFAULT_BOND_COLOR=null;
C$.DEFAULT_SPECIAL_BASE_COLOR=null;
C$.DEFAULT_DASH_BASE_COLOR=null;
C$.BASE_OUTLINE_COLOR_DEFAULT=null;
C$.BASE_INNER_COLOR_DEFAULT=null;
C$.BASE_NUMBER_COLOR_DEFAULT=null;
C$.BASE_NAME_COLOR_DEFAULT=null;
C$.DEFAULT_HOVER_COLOR=null;
C$.DEFAULT_BACKGROUND_COLOR=null;
C$.DEFAULT_TITLE_FONT=null;
C$.DEFAULT_BASE_FONT=null;
C$.DEFAULT_NUMBERS_FONT=null;
C$.DEFAULT_MESSAGE_FONT=null;
C$.DEFAULT_MESSAGE_COLOR=null;
C$.DEFAULT_BP_STYLE=null;
C$.DEFAULT_COLOR_MAP=null;
C$.DEFAULT_COLOR_MAP_OUTLINE=null;
C$.DEFAULT_COLOR_MAP_WIDTH=0;
C$.DEFAULT_COLOR_MAP_HEIGHT=0;
C$.DEFAULT_COLOR_MAP_X_OFFSET=0;
C$.DEFAULT_COLOR_MAP_Y_OFFSET=0;
C$.DEFAULT_COLOR_MAP_STRIPE_WIDTH=0;
C$.DEFAULT_COLOR_MAP_FONT_SIZE=0;
C$.DEFAULT_COLOR_MAP_FONT_COLOR=null;
C$.DEFAULT_SPACE_BETWEEN_BASES=0;
C$.XML_VAR_DRAW_OUTLINE=null;
C$.XML_VAR_FILL_BASE=null;
C$.XML_VAR_AUTO_FIT=null;
C$.XML_VAR_AUTO_CENTER=null;
C$.XML_VAR_MODIFIABLE=null;
C$.XML_VAR_ERRORS=null;
C$.XML_VAR_SPECIAL_BASES=null;
C$.XML_VAR_DASH_BASES=null;
C$.XML_VAR_USE_BASE_BPS=null;
C$.XML_VAR_DRAW_NC=null;
C$.XML_VAR_DRAW_NON_PLANAR=null;
C$.XML_VAR_SHOW_WARNINGS=null;
C$.XML_VAR_COMPARISON_MODE=null;
C$.XML_VAR_FLAT=null;
C$.XML_VAR_DRAW_BACKGROUND=null;
C$.XML_VAR_COLOR_MAP=null;
C$.XML_VAR_DRAW_BACKBONE=null;
C$.XML_VAR_CM_HEIGHT=null;
C$.XML_VAR_CM_WIDTH=null;
C$.XML_VAR_CM_X_OFFSET=null;
C$.XML_VAR_CM_Y_OFFSET=null;
C$.XML_VAR_DEFAULT_ZOOM=null;
C$.XML_VAR_ZOOM_AMOUNT=null;
C$.XML_VAR_BP_THICKNESS=null;
C$.XML_VAR_BASE_THICKNESS=null;
C$.XML_VAR_DIST_NUMBERS=null;
C$.XML_VAR_NUM_PERIOD=null;
C$.XML_VAR_MAIN_BP_STYLE=null;
C$.XML_VAR_CM=null;
C$.XML_VAR_BACKBONE_COLOR=null;
C$.XML_VAR_HOVER_COLOR=null;
C$.XML_VAR_BACKGROUND_COLOR=null;
C$.XML_VAR_BOND_COLOR=null;
C$.XML_VAR_TITLE_COLOR=null;
C$.XML_VAR_SPECIAL_BASES_COLOR=null;
C$.XML_VAR_DASH_BASES_COLOR=null;
C$.XML_VAR_SPACE_BETWEEN_BASES=null;
C$.XML_VAR_TITLE_FONT=null;
C$.XML_VAR_NUMBERS_FONT=null;
C$.XML_VAR_FONT_BASES=null;
C$.XML_VAR_CM_CAPTION=null;
C$.XML_VAR_TITLE=null;
C$.XML_ELEMENT_NAME=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.DEFAULT_TITLE_COLOR=$I$(1).black;
C$.DEFAULT_BACKBONE_COLOR=$I$(1).DARK_GRAY.brighter$();
C$.DEFAULT_BOND_COLOR=$I$(1).blue;
C$.DEFAULT_SPECIAL_BASE_COLOR=$I$(1).green.brighter$();
C$.DEFAULT_DASH_BASE_COLOR=$I$(1).yellow.brighter$();
C$.BASE_OUTLINE_COLOR_DEFAULT=$I$(1).DARK_GRAY.brighter$();
C$.BASE_INNER_COLOR_DEFAULT=Clazz.new_($I$(1).c$$I$I$I,[242, 242, 242]);
C$.BASE_NUMBER_COLOR_DEFAULT=$I$(1).DARK_GRAY;
C$.BASE_NAME_COLOR_DEFAULT=$I$(1).black;
C$.DEFAULT_HOVER_COLOR=Clazz.new_($I$(1).c$$I$I$I,[230, 230, 230]);
C$.DEFAULT_BACKGROUND_COLOR=$I$(1).WHITE;
C$.DEFAULT_TITLE_FONT=Clazz.new_($I$(2).c$$S$I$I,["SansSerif", 1, 18]);
C$.DEFAULT_BASE_FONT=Clazz.new_($I$(2).c$$S$I$I,["SansSerif", 0, 18]);
C$.DEFAULT_NUMBERS_FONT=Clazz.new_($I$(2).c$$S$I$I,["SansSerif", 1, 18]);
C$.DEFAULT_MESSAGE_FONT=$I$(2).decode$S("dialog-PLAIN-25");
C$.DEFAULT_MESSAGE_COLOR=Clazz.new_($I$(1).c$$I$I$I,[230, 230, 230]);
C$.DEFAULT_BP_STYLE=$I$(3).LW;
C$.DEFAULT_COLOR_MAP=$I$(4).defaultColorMap$();
C$.DEFAULT_COLOR_MAP_OUTLINE=$I$(1).gray;
C$.DEFAULT_COLOR_MAP_WIDTH=120;
C$.DEFAULT_COLOR_MAP_HEIGHT=30;
C$.DEFAULT_COLOR_MAP_X_OFFSET=40;
C$.DEFAULT_COLOR_MAP_Y_OFFSET=0;
C$.DEFAULT_COLOR_MAP_STRIPE_WIDTH=2;
C$.DEFAULT_COLOR_MAP_FONT_SIZE=20;
C$.DEFAULT_COLOR_MAP_FONT_COLOR=$I$(1).gray.darker$();
C$.DEFAULT_SPACE_BETWEEN_BASES=1.0;
C$.XML_VAR_DRAW_OUTLINE="drawoutline";
C$.XML_VAR_FILL_BASE="fillbase";
C$.XML_VAR_AUTO_FIT="autofit";
C$.XML_VAR_AUTO_CENTER="autocenter";
C$.XML_VAR_MODIFIABLE="modifiable";
C$.XML_VAR_ERRORS="errors";
C$.XML_VAR_SPECIAL_BASES="specialbases";
C$.XML_VAR_DASH_BASES="dashbases";
C$.XML_VAR_USE_BASE_BPS="usebasebps";
C$.XML_VAR_DRAW_NC="drawnc";
C$.XML_VAR_DRAW_NON_PLANAR="drawnonplanar";
C$.XML_VAR_SHOW_WARNINGS="warnings";
C$.XML_VAR_COMPARISON_MODE="comparison";
C$.XML_VAR_FLAT="flat";
C$.XML_VAR_DRAW_BACKGROUND="drawbackground";
C$.XML_VAR_COLOR_MAP="drawcm";
C$.XML_VAR_DRAW_BACKBONE="drawbackbone";
C$.XML_VAR_CM_HEIGHT="cmh";
C$.XML_VAR_CM_WIDTH="cmw";
C$.XML_VAR_CM_X_OFFSET="cmx";
C$.XML_VAR_CM_Y_OFFSET="cmy";
C$.XML_VAR_DEFAULT_ZOOM="defaultzoom";
C$.XML_VAR_ZOOM_AMOUNT="zoominc";
C$.XML_VAR_BP_THICKNESS="bpthick";
C$.XML_VAR_BASE_THICKNESS="basethick";
C$.XML_VAR_DIST_NUMBERS="distnumbers";
C$.XML_VAR_NUM_PERIOD="numperiod";
C$.XML_VAR_MAIN_BP_STYLE="bpstyle";
C$.XML_VAR_CM="cm";
C$.XML_VAR_BACKBONE_COLOR="backbonecol";
C$.XML_VAR_HOVER_COLOR="hovercol";
C$.XML_VAR_BACKGROUND_COLOR="backgroundcol";
C$.XML_VAR_BOND_COLOR="bondcol";
C$.XML_VAR_TITLE_COLOR="titlecol";
C$.XML_VAR_SPECIAL_BASES_COLOR="specialco";
C$.XML_VAR_DASH_BASES_COLOR="dashcol";
C$.XML_VAR_SPACE_BETWEEN_BASES="spacebetweenbases";
C$.XML_VAR_TITLE_FONT="titlefont";
C$.XML_VAR_NUMBERS_FONT="numbersfont";
C$.XML_VAR_FONT_BASES="basefont";
C$.XML_VAR_CM_CAPTION="cmcaption";
C$.XML_VAR_TITLE="title";
C$.XML_ELEMENT_NAME="config";
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._drawOutlineBases=false;
this._fillBases=false;
this._autoFit=false;
this._autoCenter=false;
this._modifiable=false;
this._errorsOn=false;
this._colorSpecialBases=false;
this._colorDashBases=false;
this._useBaseColorsForBPs=false;
this._drawnNonCanonicalBP=false;
this._drawnNonPlanarBP=false;
this._showWarnings=false;
this._comparisonMode=false;
this._flatExteriorLoop=false;
this._drawBackground=false;
this._drawColorMap=false;
this._drawBackbone=false;
this._colorMapHeight=0;
this._colorMapWidth=0;
this._colorMapXOffset=0;
this._colorMapYOffset=0;
this._zoom=0;
this._zoomAmount=0;
this._bpThickness=0;
this._baseThickness=0;
this._distNumbers=0;
this._spaceBetweenBases=0;
this._numPeriod=0;
this._mainBPStyle=null;
this._cm=null;
this._backboneColor=null;
this._hoverColor=null;
this._backgroundColor=null;
this._bondColor=null;
this._titleColor=null;
this._specialBasesColor=null;
this._dashBasesColor=null;
this._titleFont=null;
this._numbersFont=null;
this._fontBasesGeneral=null;
this._colorMapCaption=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._drawOutlineBases=true;
this._fillBases=true;
this._autoFit=true;
this._autoCenter=true;
this._modifiable=true;
this._errorsOn=false;
this._colorSpecialBases=false;
this._colorDashBases=false;
this._useBaseColorsForBPs=false;
this._drawnNonCanonicalBP=true;
this._drawnNonPlanarBP=true;
this._showWarnings=false;
this._comparisonMode=false;
this._flatExteriorLoop=true;
this._drawBackground=false;
this._drawColorMap=false;
this._drawBackbone=true;
this._colorMapHeight=C$.DEFAULT_COLOR_MAP_HEIGHT;
this._colorMapWidth=C$.DEFAULT_COLOR_MAP_WIDTH;
this._colorMapXOffset=C$.DEFAULT_COLOR_MAP_X_OFFSET;
this._colorMapYOffset=C$.DEFAULT_COLOR_MAP_Y_OFFSET;
this._zoom=1.0;
this._zoomAmount=1.2;
this._bpThickness=1.0;
this._baseThickness=1.5;
this._distNumbers=3.0;
this._spaceBetweenBases=C$.DEFAULT_SPACE_BETWEEN_BASES;
this._numPeriod=10;
this._mainBPStyle=C$.DEFAULT_BP_STYLE;
this._cm=C$.DEFAULT_COLOR_MAP;
this._backboneColor=C$.DEFAULT_BACKBONE_COLOR;
this._hoverColor=C$.DEFAULT_HOVER_COLOR;
this._backgroundColor=C$.DEFAULT_BACKGROUND_COLOR;
this._bondColor=C$.DEFAULT_BOND_COLOR;
this._titleColor=C$.DEFAULT_TITLE_COLOR;
this._specialBasesColor=C$.DEFAULT_SPECIAL_BASE_COLOR;
this._dashBasesColor=C$.DEFAULT_DASH_BASE_COLOR;
this._titleFont=C$.DEFAULT_TITLE_FONT;
this._numbersFont=C$.DEFAULT_NUMBERS_FONT;
this._fontBasesGeneral=C$.DEFAULT_BASE_FONT;
this._colorMapCaption="";
}, 1);

Clazz.newMeth(C$, 'getFullName$', function () {
return "VARNA 3.9";
}, 1);

Clazz.newMeth(C$, 'toXML$javax_xml_transform_sax_TransformerHandler', function (hd) {
var atts=Clazz.new_($I$(5));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_DRAW_OUTLINE, "CDATA", "" + this._drawOutlineBases);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_FILL_BASE, "CDATA", "" + this._fillBases);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_AUTO_FIT, "CDATA", "" + this._autoFit);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_AUTO_CENTER, "CDATA", "" + this._autoCenter);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_MODIFIABLE, "CDATA", "" + this._modifiable);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_ERRORS, "CDATA", "" + this._errorsOn);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_SPECIAL_BASES, "CDATA", "" + this._colorSpecialBases);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_DASH_BASES, "CDATA", "" + this._colorDashBases);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_USE_BASE_BPS, "CDATA", "" + this._useBaseColorsForBPs);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_DRAW_NC, "CDATA", "" + this._drawnNonCanonicalBP);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_DRAW_NON_PLANAR, "CDATA", "" + this._drawnNonPlanarBP);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_SHOW_WARNINGS, "CDATA", "" + this._showWarnings);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_COMPARISON_MODE, "CDATA", "" + this._comparisonMode);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_FLAT, "CDATA", "" + this._flatExteriorLoop);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_DRAW_BACKGROUND, "CDATA", "" + this._drawBackground);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_COLOR_MAP, "CDATA", "" + this._drawColorMap);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_DRAW_BACKBONE, "CDATA", "" + this._drawBackbone);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_CM_HEIGHT, "CDATA", "" + new Double(this._colorMapHeight).toString());
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_CM_WIDTH, "CDATA", "" + new Double(this._colorMapWidth).toString());
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_CM_X_OFFSET, "CDATA", "" + new Double(this._colorMapXOffset).toString());
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_CM_Y_OFFSET, "CDATA", "" + new Double(this._colorMapYOffset).toString());
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_DEFAULT_ZOOM, "CDATA", "" + new Double(this._zoom).toString());
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_ZOOM_AMOUNT, "CDATA", "" + new Double(this._zoomAmount).toString());
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_BP_THICKNESS, "CDATA", "" + new Double(this._bpThickness).toString());
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_BASE_THICKNESS, "CDATA", "" + new Double(this._baseThickness).toString());
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_DIST_NUMBERS, "CDATA", "" + new Double(this._distNumbers).toString());
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_SPACE_BETWEEN_BASES, "CDATA", "" + new Double(this._spaceBetweenBases).toString());
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_NUM_PERIOD, "CDATA", "" + this._numPeriod);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_MAIN_BP_STYLE, "CDATA", "" + this._mainBPStyle.getOpt$());
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_BACKBONE_COLOR, "CDATA", $I$(6).toHTMLNotation$java_awt_Color(this._backboneColor));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_HOVER_COLOR, "CDATA", $I$(6).toHTMLNotation$java_awt_Color(this._hoverColor));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_BACKGROUND_COLOR, "CDATA", $I$(6).toHTMLNotation$java_awt_Color(this._backgroundColor));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_BOND_COLOR, "CDATA", $I$(6).toHTMLNotation$java_awt_Color(this._bondColor));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_TITLE_COLOR, "CDATA", $I$(6).toHTMLNotation$java_awt_Color(this._titleColor));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_SPECIAL_BASES_COLOR, "CDATA", $I$(6).toHTMLNotation$java_awt_Color(this._specialBasesColor));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_DASH_BASES_COLOR, "CDATA", $I$(6).toHTMLNotation$java_awt_Color(this._dashBasesColor));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_CM, "CDATA", this._cm.getParamEncoding$());
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_ELEMENT_NAME, atts);
$I$(6).toXML$javax_xml_transform_sax_TransformerHandler$java_awt_Font$S(hd, this._titleFont, C$.XML_VAR_TITLE_FONT);
$I$(6).toXML$javax_xml_transform_sax_TransformerHandler$java_awt_Font$S(hd, this._numbersFont, C$.XML_VAR_NUMBERS_FONT);
$I$(6).toXML$javax_xml_transform_sax_TransformerHandler$java_awt_Font$S(hd, this._fontBasesGeneral, C$.XML_VAR_FONT_BASES);
$I$(6).exportCDATAElem$javax_xml_transform_sax_TransformerHandler$S$S(hd, C$.XML_VAR_CM_CAPTION, this._colorMapCaption);
hd.endElement$S$S$S("", "", C$.XML_ELEMENT_NAME);
});

Clazz.newMeth(C$, 'loadFromXMLAttributes$org_xml_sax_Attributes', function (attributes) {
this._drawOutlineBases=$I$(7).parseBoolean$S(attributes.getValue$S(C$.XML_VAR_DRAW_OUTLINE));
this._fillBases=$I$(7).parseBoolean$S(attributes.getValue$S(C$.XML_VAR_FILL_BASE));
this._autoFit=$I$(7).parseBoolean$S(attributes.getValue$S(C$.XML_VAR_AUTO_FIT));
this._autoCenter=$I$(7).parseBoolean$S(attributes.getValue$S(C$.XML_VAR_AUTO_CENTER));
this._modifiable=$I$(7).parseBoolean$S(attributes.getValue$S(C$.XML_VAR_MODIFIABLE));
this._errorsOn=$I$(7).parseBoolean$S(attributes.getValue$S(C$.XML_VAR_ERRORS));
this._colorSpecialBases=$I$(7).parseBoolean$S(attributes.getValue$S(C$.XML_VAR_SPECIAL_BASES));
this._colorDashBases=$I$(7).parseBoolean$S(attributes.getValue$S(C$.XML_VAR_DASH_BASES));
this._useBaseColorsForBPs=$I$(7).parseBoolean$S(attributes.getValue$S(C$.XML_VAR_USE_BASE_BPS));
this._drawnNonCanonicalBP=$I$(7).parseBoolean$S(attributes.getValue$S(C$.XML_VAR_DRAW_NC));
this._drawnNonPlanarBP=$I$(7).parseBoolean$S(attributes.getValue$S(C$.XML_VAR_DRAW_NON_PLANAR));
this._showWarnings=$I$(7).parseBoolean$S(attributes.getValue$S(C$.XML_VAR_SHOW_WARNINGS));
this._comparisonMode=$I$(7).parseBoolean$S(attributes.getValue$S(C$.XML_VAR_COMPARISON_MODE));
this._flatExteriorLoop=$I$(7).parseBoolean$S(attributes.getValue$S(C$.XML_VAR_FLAT));
this._drawBackground=$I$(7).parseBoolean$S(attributes.getValue$S(C$.XML_VAR_DRAW_BACKGROUND));
this._drawColorMap=$I$(7).parseBoolean$S(attributes.getValue$S(C$.XML_VAR_COLOR_MAP));
this._drawBackbone=$I$(7).parseBoolean$S(attributes.getValue$S(C$.XML_VAR_DRAW_BACKBONE));
this._colorMapHeight=Double.parseDouble$S(attributes.getValue$S(C$.XML_VAR_CM_HEIGHT));
this._colorMapWidth=Double.parseDouble$S(attributes.getValue$S(C$.XML_VAR_CM_WIDTH));
this._colorMapXOffset=Double.parseDouble$S(attributes.getValue$S(C$.XML_VAR_CM_X_OFFSET));
this._colorMapYOffset=Double.parseDouble$S(attributes.getValue$S(C$.XML_VAR_CM_Y_OFFSET));
this._zoom=Double.parseDouble$S(attributes.getValue$S(C$.XML_VAR_DEFAULT_ZOOM));
this._zoomAmount=Double.parseDouble$S(attributes.getValue$S(C$.XML_VAR_ZOOM_AMOUNT));
this._bpThickness=Double.parseDouble$S(attributes.getValue$S(C$.XML_VAR_BP_THICKNESS));
this._baseThickness=Double.parseDouble$S(attributes.getValue$S(C$.XML_VAR_BASE_THICKNESS));
this._distNumbers=Double.parseDouble$S(attributes.getValue$S(C$.XML_VAR_DIST_NUMBERS));
this._spaceBetweenBases=$I$(6).getDouble$org_xml_sax_Attributes$S$D(attributes, C$.XML_VAR_SPACE_BETWEEN_BASES, C$.DEFAULT_SPACE_BETWEEN_BASES);
this._numPeriod=Integer.parseInt$S(attributes.getValue$S(C$.XML_VAR_NUM_PERIOD));
this._mainBPStyle=$I$(3).getStyle$S(attributes.getValue$S(C$.XML_VAR_MAIN_BP_STYLE));
this._backboneColor=$I$(1).decode$S(attributes.getValue$S(C$.XML_VAR_BACKBONE_COLOR));
this._hoverColor=$I$(1).decode$S(attributes.getValue$S(C$.XML_VAR_HOVER_COLOR));
this._backgroundColor=$I$(1).decode$S(attributes.getValue$S(C$.XML_VAR_BACKGROUND_COLOR));
this._bondColor=$I$(1).decode$S(attributes.getValue$S(C$.XML_VAR_BOND_COLOR));
this._titleColor=$I$(1).decode$S(attributes.getValue$S(C$.XML_VAR_TITLE_COLOR));
this._specialBasesColor=$I$(1).decode$S(attributes.getValue$S(C$.XML_VAR_SPECIAL_BASES_COLOR));
this._dashBasesColor=$I$(1).decode$S(attributes.getValue$S(C$.XML_VAR_DASH_BASES_COLOR));
this._cm=$I$(4).parseColorMap$S(attributes.getValue$S(C$.XML_VAR_CM));
});

Clazz.newMeth(C$, 'clone$', function () {

return this;
try {
var out=Clazz.new_($I$(8));
var oout=Clazz.new_($I$(9).c$$java_io_OutputStream,[out]);
oout.writeObject$O(this);
var $in=Clazz.new_($I$(10).c$$java_io_InputStream,[Clazz.new_($I$(11).c$$BA,[out.toByteArray$()])]);
return $in.readObject$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["cannot clone class [" + this.getClass$().getName$() + "] via serialization: " + e.toString() ]);
} else {
throw e;
}
}
});
;
(function(){var C$=Clazz.newClass(P$.VARNAConfig, "BP_STYLE", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum', 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "NONE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "SIMPLE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "RNAVIZ", 2, []);
Clazz.newEnumConst($vals, C$.c$, "LW", 3, []);
Clazz.newEnumConst($vals, C$.c$, "LW_ALT", 4, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'toString', function () {
switch (this) {
case C$.LW:
return "Leontis/Westhof (Centered)";
case C$.SIMPLE:
return "Line";
case C$.RNAVIZ:
return "Circles";
case C$.NONE:
return "None";
case C$.LW_ALT:
return "Leontis/Westhof (End)";
}
return "Unspecified";
});

Clazz.newMeth(C$, 'getOpt$', function () {
switch (this) {
case C$.NONE:
return "none";
case C$.SIMPLE:
return "simple";
case C$.LW:
return "lw";
case C$.RNAVIZ:
return "rnaviz";
case C$.LW_ALT:
return "lwalt";
}
return "x";
});

Clazz.newMeth(C$, 'getStyle$S', function (opt) {
for (var b, $b = 0, $$b = C$.values$(); $b<$$b.length&&((b=($$b[$b])),1);$b++) {
if (opt.toLowerCase$().equals$O(b.getOpt$().toLowerCase$())) return b;
}
return null;
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:30:04 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
