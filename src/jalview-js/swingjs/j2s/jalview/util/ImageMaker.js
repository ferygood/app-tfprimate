(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'jalview.util.MessageManager','jalview.io.JalviewFileChooser','java.io.FileOutputStream',['jalview.util.ImageMaker','.TYPE'],'javax.imageio.ImageIO','java.awt.image.BufferedImage','java.awt.RenderingHints','org.jfree.graphics2d.svg.SVGGraphics2D','org.jfree.graphics2d.svg.SVGHints','org.jibble.epsgraphics.EpsGraphics2D']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ImageMaker", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.pg=null;
this.graphics=null;
this.out=null;
this.bi=null;
this.type=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_util_ImageMaker_TYPE$I$I$java_io_File$S$Z', function (imageType, width, height, file, fileTitle, useLineart) {
C$.$init$.apply(this);
this.type=imageType;
this.out=Clazz.new_($I$(3).c$$java_io_File,[file]);
if (imageType === $I$(4).SVG ) {
this.setupSVG$I$I$Z(width, height, useLineart);
} else if (imageType === $I$(4).EPS ) {
this.setupEPS$I$I$S$Z(width, height, fileTitle, useLineart);
} else if (imageType === $I$(4).PNG ) {
this.setupPNG$I$I(width, height);
}}, 1);

Clazz.newMeth(C$, 'getGraphics$', function () {
return this.graphics;
});

Clazz.newMeth(C$, 'writeImage$', function () {
try {
switch (this.type) {
case $I$(4).EPS:
this.pg.flush$();
this.pg.close$();
break;
case $I$(4).SVG:
var svgData=(this.getGraphics$()).getSVGDocument$();
this.out.write$BA(svgData.getBytes$());
this.out.flush$();
this.out.close$();
break;
case $I$(4).PNG:
$I$(5).write$java_awt_image_RenderedImage$S$java_io_OutputStream(this.bi, "png", this.out);
this.out.flush$();
this.out.close$();
break;
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'setupPNG$I$I', function (width, height) {
this.bi=Clazz.new_($I$(6).c$$I$I$I,[width, height, 1]);
this.graphics=this.bi.getGraphics$();
var ig2=this.graphics;
ig2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(7).KEY_ANTIALIASING, $I$(7).VALUE_ANTIALIAS_ON);
});

Clazz.newMeth(C$, 'setupSVG$I$I$Z', function (width, height, useLineart) {
var g2=Clazz.new_($I$(8).c$$I$I,[width, height]);
if (useLineart) {
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(9).KEY_DRAW_STRING_TYPE, $I$(9).VALUE_DRAW_STRING_TYPE_VECTOR);
}this.graphics=g2;
});

Clazz.newMeth(C$, 'setupEPS$I$I$S$Z', function (width, height, title, useLineart) {
this.pg=Clazz.new_($I$(10).c$$S$java_io_OutputStream$I$I$I$I,[title, this.out, 0, 0, width, height]);
var ig2=this.pg;
ig2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(7).KEY_ANTIALIASING, $I$(7).VALUE_ANTIALIAS_ON);
this.pg.setAccurateTextMode$Z(useLineart);
this.graphics=this.pg;
});
;
(function(){var C$=Clazz.newClass(P$.ImageMaker, "TYPE", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S$S$S$S, "EPS", 0, ["EPS", $I$(1).getString$S("label.eps_file"), "eps", "Encapsulated Postscript"]);
Clazz.newEnumConst($vals, C$.c$$S$S$S$S, "PNG", 1, ["PNG", $I$(1).getString$S("label.png_image"), "png", "Portable  network graphics"]);
Clazz.newEnumConst($vals, C$.c$$S$S$S$S, "SVG", 2, ["SVG", "SVG", "svg", "Scalable Vector Graphics"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.$name=null;
this.label=null;
this.extension=null;
this.description=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$S', function (name, label, ext, desc) {
C$.$init$.apply(this);
this.$name=name;
this.label=label;
this.extension=ext;
this.description=desc;
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return this.$name;
});

Clazz.newMeth(C$, 'getFileChooser$', function () {
return Clazz.new_($I$(2).c$$S$S,[this.extension, this.description]);
});

Clazz.newMeth(C$, 'getLabel$', function () {
return this.label;
});

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
