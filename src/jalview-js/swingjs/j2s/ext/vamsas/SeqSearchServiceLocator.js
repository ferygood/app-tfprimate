(function(){var P$=Clazz.newPackage("ext.vamsas"),I$=[[0,'java.net.URL','ext.vamsas.SeqSearchServiceSoapBindingStub','ext.vamsas.SeqSearchI','jalview.util.MessageManager','javax.xml.namespace.QName','java.util.HashSet']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SeqSearchServiceLocator", null, 'org.apache.axis.client.Service', 'ext.vamsas.SeqSearchServiceService');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ScanPSService_address=null;
this.ScanPSServiceWSDDServiceName=null;
this.ports=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.ScanPSService_address="http://localhost:8080/TestJWS/services/ScanPSService";
this.ScanPSServiceWSDDServiceName="ScanPSService";
this.ports=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$org_apache_axis_EngineConfiguration', function (config) {
C$.superclazz.c$$org_apache_axis_EngineConfiguration.apply(this, [config]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getSeqSeachServiceAddress$', function () {
return this.ScanPSService_address;
});

Clazz.newMeth(C$, 'getScanPSServiceWSDDServiceName$', function () {
return this.ScanPSServiceWSDDServiceName;
});

Clazz.newMeth(C$, 'setScanPSServiceWSDDServiceName$S', function (name) {
this.ScanPSServiceWSDDServiceName=name;
});

Clazz.newMeth(C$, 'getSeqSearchService$', function () {
var endpoint;
try {
endpoint=Clazz.new_($I$(1).c$$S,[this.ScanPSService_address]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
throw Clazz.new_(Clazz.load('javax.xml.rpc.ServiceException').c$$Throwable,[e]);
} else {
throw e;
}
}
return this.getSeqSearchService$java_net_URL(endpoint);
});

Clazz.newMeth(C$, 'getSeqSearchService$java_net_URL', function (portAddress) {
try {
var _stub=Clazz.new_($I$(2).c$$java_net_URL$javax_xml_rpc_Service,[portAddress, this]);
_stub.setPortName$S(this.getScanPSServiceWSDDServiceName$());
return _stub;
} catch (e) {
if (Clazz.exceptionOf(e,"org.apache.axis.AxisFault")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setScanPSServiceEndpointAddress$S', function (address) {
this.ScanPSService_address=address;
});

Clazz.newMeth(C$, 'getPort$Class', function (serviceEndpointInterface) {
try {
if (Clazz.getClass($I$(3),['cancel$S','getDatabase$','getResult$S','psearch$vamsas_objects_simple_Alignment$S','search$vamsas_objects_simple_Sequence$S']).isAssignableFrom$Class(serviceEndpointInterface)) {
var _stub=Clazz.new_($I$(2).c$$java_net_URL$javax_xml_rpc_Service,[Clazz.new_($I$(1).c$$S,[this.ScanPSService_address]), this]);
_stub.setPortName$S(this.getScanPSServiceWSDDServiceName$());
return _stub;
}} catch (t) {
throw Clazz.new_(Clazz.load('javax.xml.rpc.ServiceException').c$$Throwable,[t]);
}
throw Clazz.new_(Clazz.load('javax.xml.rpc.ServiceException').c$$S,[$I$(4).formatMessage$S$SA("exception.no_stub_implementation_for_interface", Clazz.array(String, -1, [(serviceEndpointInterface == null  ? "null" : serviceEndpointInterface.getName$())]))]);
});

Clazz.newMeth(C$, 'getPort$javax_xml_namespace_QName$Class', function (portName, serviceEndpointInterface) {
if (portName == null ) {
return this.getPort$Class(serviceEndpointInterface);
}var inputPortName=portName.getLocalPart$();
if ("ScanPSService".equals$O(inputPortName)) {
return this.getSeqSearchService$();
} else {
var _stub=this.getPort$Class(serviceEndpointInterface);
(_stub).setPortName$javax_xml_namespace_QName(portName);
return _stub;
}});

Clazz.newMeth(C$, 'getServiceName$', function () {
return Clazz.new_($I$(5).c$$S$S,["vamsas", "ScanPSServiceService"]);
});

Clazz.newMeth(C$, 'getPorts$', function () {
if (this.ports == null ) {
this.ports=Clazz.new_($I$(6));
this.ports.add$TE(Clazz.new_($I$(5).c$$S$S,["vamsas", "ScanPSService"]));
}return this.ports.iterator$();
});

Clazz.newMeth(C$, 'setEndpointAddress$S$S', function (portName, address) {
if ("ScanPSService".equals$O(portName)) {
this.setScanPSServiceEndpointAddress$S(address);
} else {
throw Clazz.new_(Clazz.load('javax.xml.rpc.ServiceException').c$$S,[$I$(4).formatMessage$S$SA("exception.cannot_set_endpoint_address_unknown_port", Clazz.array(String, -1, [portName]))]);
}});

Clazz.newMeth(C$, 'setEndpointAddress$javax_xml_namespace_QName$S', function (portName, address) {
this.setEndpointAddress$S$S(portName.getLocalPart$(), address);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
