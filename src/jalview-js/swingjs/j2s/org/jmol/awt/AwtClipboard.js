(function(){var P$=Clazz.newPackage("org.jmol.awt"),I$=[[0,'java.awt.Toolkit','java.awt.datatransfer.DataFlavor','javajs.util.PT']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AwtClipboard", null, null, 'java.awt.datatransfer.Transferable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.image=null;
this.text=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setClipboard$O', function (textOrImage) {
var sel=Clazz.new_(C$.c$$O,[textOrImage]);
$I$(1).getDefaultToolkit$().getSystemClipboard$().setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner(sel, null);
}, 1);

Clazz.newMeth(C$, 'c$$O', function (image) {
C$.$init$.apply(this);
if (Clazz.instanceOf(image, "java.lang.String")) this.text=image;
 else this.image=image;
}, 1);

Clazz.newMeth(C$, 'getTransferDataFlavors$', function () {
return (this.text == null  ? Clazz.array($I$(2), -1, [$I$(2).imageFlavor]) : Clazz.array($I$(2), -1, [$I$(2).stringFlavor]));
});

Clazz.newMeth(C$, 'isDataFlavorSupported$java_awt_datatransfer_DataFlavor', function (flavor) {
return $I$(2).imageFlavor.equals$java_awt_datatransfer_DataFlavor(flavor);
});

Clazz.newMeth(C$, 'getTransferData$java_awt_datatransfer_DataFlavor', function (flavor) {
if ($I$(2).imageFlavor.equals$java_awt_datatransfer_DataFlavor(flavor)) {
return this.image;
} else if ($I$(2).stringFlavor.equals$java_awt_datatransfer_DataFlavor(flavor)) {
return this.text;
}throw Clazz.new_(Clazz.load('java.awt.datatransfer.UnsupportedFlavorException').c$$java_awt_datatransfer_DataFlavor,[flavor]);
});

Clazz.newMeth(C$, 'getClipboardText$', function () {
var result=null;
try {
var clipboard=$I$(1).getDefaultToolkit$().getSystemClipboard$();
var contents=clipboard.getContents$O(null);
if (contents == null ) return null;
if (contents.isDataFlavorSupported$java_awt_datatransfer_DataFlavor($I$(2).stringFlavor)) {
result=contents.getTransferData$java_awt_datatransfer_DataFlavor($I$(2).stringFlavor);
} else if (contents.isDataFlavorSupported$java_awt_datatransfer_DataFlavor($I$(2).javaFileListFlavor)) {
var o=contents.getTransferData$java_awt_datatransfer_DataFlavor($I$(2).javaFileListFlavor);
var fileList=o;
var length=fileList.size$();
if (length == 0) return null;
if (length == 1) {
result="LoAd " + $I$(3).esc$S(fileList.get$I(0).getAbsolutePath$().replace$C$C("\\", "/"));
if (result.endsWith$S(".pse\"")) result += " filter 'DORESIZE'";
} else {
result="LoAd files ";
for (var i=0; i < length; i++) result += " " + $I$(3).esc$S(fileList.get$I(i).getAbsolutePath$().replace$C$C("\\", "/"));

}}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
result=ex.toString();
} else {
throw ex;
}
}
return result;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
