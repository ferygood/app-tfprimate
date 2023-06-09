(function(){var P$=Clazz.newPackage("ext.vamsas"),I$=[[0,'org.apache.axis.description.OperationDesc','java.util.Vector','javax.xml.namespace.QName','ext.vamsas.ServiceHandles','org.apache.axis.enum.Style','org.apache.axis.enum.Use','org.apache.axis.client.Service','org.apache.axis.encoding.ser.BeanSerializerFactory','org.apache.axis.encoding.ser.BeanDeserializerFactory','org.apache.axis.encoding.ser.ArraySerializerFactory','org.apache.axis.encoding.ser.ArrayDeserializerFactory','ext.vamsas.ServiceHandle','org.apache.axis.soap.SOAPConstants','org.apache.axis.AxisFault','org.apache.axis.utils.JavaUtils']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RegistryServiceSoapBindingStub", null, 'org.apache.axis.client.Stub', 'ext.vamsas.IRegistry');
C$._operations=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
{
C$._operations=Clazz.array($I$(1), [1]);
C$._initOperationDesc1$();
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.cachedSerClasses=null;
this.cachedSerQNames=null;
this.cachedSerFactories=null;
this.cachedDeserFactories=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.cachedSerClasses=Clazz.new_($I$(2));
this.cachedSerQNames=Clazz.new_($I$(2));
this.cachedSerFactories=Clazz.new_($I$(2));
this.cachedDeserFactories=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, '_initOperationDesc1$', function () {
var oper;
oper=Clazz.new_($I$(1));
oper.setName$S("getServices");
oper.setReturnType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["registry.objects.vamsas", "ServiceHandles"]));
oper.setReturnClass$Class(Clazz.getClass($I$(4)));
oper.setReturnQName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["", "getServicesReturn"]));
oper.setStyle$org_apache_axis_enum_Style($I$(5).RPC);
oper.setUse$org_apache_axis_enum_Use($I$(6).ENCODED);
C$._operations[0]=oper;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$javax_xml_rpc_Service.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URL$javax_xml_rpc_Service', function (endpointURL, service) {
C$.c$$javax_xml_rpc_Service.apply(this, [service]);
this.cachedEndpoint=endpointURL;
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_rpc_Service', function (service) {
Clazz.super_(C$, this,1);
if (service == null ) {
this.service=Clazz.new_($I$(7));
} else {
this.service=service;
}var cls;
var qName;
var beansf=Clazz.getClass($I$(8));
var beandf=Clazz.getClass($I$(9));
var arraysf=Clazz.getClass($I$(10));
var arraydf=Clazz.getClass($I$(11));
qName=Clazz.new_($I$(3).c$$S$S,["vamsas", "ArrayOf_tns1_ServiceHandle"]);
this.cachedSerQNames.add$TE(qName);
cls=Clazz.array($I$(12), -1);
this.cachedSerClasses.add$TE(cls);
this.cachedSerFactories.add$TE(arraysf);
this.cachedDeserFactories.add$TE(arraydf);
qName=Clazz.new_($I$(3).c$$S$S,["registry.objects.vamsas", "ServiceHandles"]);
this.cachedSerQNames.add$TE(qName);
cls=Clazz.getClass($I$(4));
this.cachedSerClasses.add$TE(cls);
this.cachedSerFactories.add$TE(beansf);
this.cachedDeserFactories.add$TE(beandf);
qName=Clazz.new_($I$(3).c$$S$S,["registry.objects.vamsas", "ServiceHandle"]);
this.cachedSerQNames.add$TE(qName);
cls=Clazz.getClass($I$(12));
this.cachedSerClasses.add$TE(cls);
this.cachedSerFactories.add$TE(beansf);
this.cachedDeserFactories.add$TE(beandf);
}, 1);

Clazz.newMeth(C$, 'createCall$', function () {
try {
var _call=this.service.createCall$();
if (this.maintainSessionSet) {
_call.setMaintainSession$Z(this.maintainSession);
}if (this.cachedUsername != null ) {
_call.setUsername$S(this.cachedUsername);
}if (this.cachedPassword != null ) {
_call.setPassword$S(this.cachedPassword);
}if (this.cachedEndpoint != null ) {
_call.setTargetEndpointAddress$java_net_URL(this.cachedEndpoint);
}if (this.cachedTimeout != null ) {
_call.setTimeout$Integer(this.cachedTimeout);
}if (this.cachedPortName != null ) {
_call.setPortName$javax_xml_namespace_QName(this.cachedPortName);
}var keys=this.cachedProperties.keys$();
while (keys.hasMoreElements$()){
var key=keys.nextElement$();
_call.setProperty$S$O(key, this.cachedProperties.get$O(key));
}
{
if (this.firstCall$()) {
_call.setSOAPVersion$org_apache_axis_soap_SOAPConstants($I$(13).SOAP11_CONSTANTS);
_call.setEncodingStyle$S("http://schemas.xmlsoap.org/soap/encoding/");
for (var i=0; i < this.cachedSerFactories.size$(); ++i) {
var cls=this.cachedSerClasses.get$I(i);
var qName=this.cachedSerQNames.get$I(i);
var sf=this.cachedSerFactories.get$I(i);
var df=this.cachedDeserFactories.get$I(i);
_call.registerTypeMapping$Class$javax_xml_namespace_QName$Class$Class$Z(cls, qName, sf, df, false);
}
}}return _call;
} catch (_t) {
throw Clazz.new_($I$(14).c$$S$Throwable,["Failure trying to get the Call object", _t]);
}
});

Clazz.newMeth(C$, 'getServices$', function () {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=this.createCall$();
_call.setOperation$org_apache_axis_description_OperationDesc(C$._operations[0]);
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("");
_call.setSOAPVersion$org_apache_axis_soap_SOAPConstants($I$(13).SOAP11_CONSTANTS);
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["vamsas", "getServices"]));
this.setRequestHeaders$org_apache_axis_client_Call(_call);
this.setAttachments$org_apache_axis_client_Call(_call);
var _resp=_call.invoke$OA(Clazz.array(java.lang.Object, -1, []));
if (Clazz.instanceOf(_resp, "java.rmi.RemoteException")) {
throw _resp;
} else {
this.extractAttachments$org_apache_axis_client_Call(_call);
try {
return _resp;
} catch (_exception) {
if (Clazz.exceptionOf(_exception,"Exception")){
return $I$(15).convert$O$Class(_resp, Clazz.getClass($I$(4)));
} else {
throw _exception;
}
}
}});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
