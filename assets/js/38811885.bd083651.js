"use strict";(self.webpackChunkdocusaurus_ciadocs=self.webpackChunkdocusaurus_ciadocs||[]).push([[1840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i="VendorInvoice API v1.0.0",c={unversionedId:"CIA Funciones/vendorInvoice",id:"CIA Funciones/vendorInvoice",title:"VendorInvoice API v1.0.0",description:"Tabla de Contenidos",source:"@site/docs/CIA Funciones/vendorInvoice.md",sourceDirName:"CIA Funciones",slug:"/CIA Funciones/vendorInvoice",permalink:"/docusaurus-ciadocs/docs/CIA Funciones/vendorInvoice",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CIA Funciones/vendorInvoice.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CIA Funciones",permalink:"/docusaurus-ciadocs/docs/category/cia-funciones"},next:{title:"CIA Workflow",permalink:"/docusaurus-ciadocs/docs/cia-workflow"}},s={},l=[{value:"Tabla de Contenidos",id:"tabla-de-contenidos",level:2},{value:"Especificaci\xf3n Open API",id:"especificaci\xf3n-open-api",level:2},{value:"Operaciones",id:"operaciones",level:2},{value:"<strong>validateInvoiceStatus (POST v1/invoice-management/fiscal-document/validate-status)</strong>",id:"validateinvoicestatus-post-v1invoice-managementfiscal-documentvalidate-status",level:3}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vendorinvoice-api-v100"},"VendorInvoice API v1.0.0"),(0,r.kt)("h2",{id:"tabla-de-contenidos"},"Tabla de Contenidos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#especificaci%C3%B3n-open-api"},"Especificaci\xf3n Open API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#operaciones"},"Operaciones"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#validateInvoiceStatus-post-v1invoice-managementfiscal-documentvalidate-status"},"validateInvoiceStatus (POST v1/invoice-management/fiscal-document/validate-status)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sendInvoiceStatus-post-v1invoice-managementfiscal-documentstatus"},"sendInvoiceStatus (POST v1/invoice-management/fiscal-document/status)"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"especificaci\xf3n-open-api"},"Especificaci\xf3n Open API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://portal.prd.api-alicorp.com/alicorp/sandbox/product/40/api/10#/VendorInvoiceAPI_v1/overview"},"VendorInvoice API v1.0.0")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"operaciones"},"Operaciones"),(0,r.kt)("h3",{id:"validateinvoicestatus-post-v1invoice-managementfiscal-documentvalidate-status"},(0,r.kt)("strong",{parentName:"h3"},"validateInvoiceStatus (POST v1/invoice-management/fiscal-document/validate-status)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Diagrama de Secuencia")),(0,r.kt)("p",null,":::mermaid\nsequenceDiagram\nrect rgb(93, 93, 93)\nEBIZ->>CIA: Call ValidateStatus(REST API) Env\xedo de bloque de facturas disconformes\nCIA->>S4Hana: Call ZB_ZR2RGF_WEBSERVICE_8VO_DIA(SOAP)\nS4Hana--\x3e>CIA: ack\nCIA--\x3e>EBIZ: ack\nend"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n<br/>\n\n<table>\n  <thead>\n    <tr>\n      <th>Seq</th>\n      <th>Description & Mapping Details </th>\n    </tr>\n  </thead>\n<tbody>\n\n  <tr>\n    <td>1</td>\n    <td>\n      Invoca ZB_ZR2RGF_WEBSERVICE_8VO_DIA:\n      <br />\n<pre>\nS4HanaWSRequest.ZRfcComprobantes8voDia.PfiComprobantes.item.NifProveedor \u2190 API.Vendor.TaxIdentificationNumber\nS4HanaWSRequest.ZRfcComprobantes8voDia.PfiComprobantes.item.TipoDocumentoProveedor \u2190 API.SalesOrganization.DocumentType\nS4HanaWSRequest.ZRfcComprobantes8voDia.PfiComprobantes.item.NifCliente \u2190 API.SalesOrganization.TaxIdentificationNumber\nS4HanaWSRequest.ZRfcComprobantes8voDia.PfiComprobantes.item.TipoDocumentoCliente \u2190 API.Vendor.DocumentType\nS4HanaWSRequest.ZRfcComprobantes8voDia.PfiComprobantes.item.IsoPaisCliente \u2190 API.SalesOrganization.CountryCode\nS4HanaWSRequest.ZRfcComprobantes8voDia.PfiComprobantes.item.TipoComprobante \u2190 API.FiscalDocument.Type\nS4HanaWSRequest.ZRfcComprobantes8voDia.PfiComprobantes.item.NroComprobante \u2190 API.FiscalDocument.Number\nS4HanaWSRequest.ZRfcComprobantes8voDia.PfiComprobantes.item.FechaRecepcion \u2190 API.FiscalDocument.ReceivedDate\nS4HanaWSRequest.ZRfcComprobantes8voDia.PfiComprobantes.item.FechaEmision \u2190 API.FiscalDocument.IssueDate\nS4HanaWSRequest.ZRfcComprobantes8voDia.PfiComprobantes.item.MontoTotal \u2190 API.FiscalDocument.TotalAmount\nS4HanaWSRequest.ZRfcComprobantes8voDia.PfiComprobantes.item.Moneda \u2190 API.FiscalDocument.Currency\n</pre>\n    </td>\n</tr>\n<tr>\n    <td>2</td>\n    <td>\n      Response de \xe9xito:\n      <br />\n      <br />\n<pre>\nnull\n</pre>\n    </td>\n</tr>\n  </tbody>\n</table>\n<br/>\n\n* Cat\xe1logo de Errores\n\n|   #   | Escenario                           | Status Code | Error Message                                                                                       | Descripci\xf3n |\n|:-----:|:------------------------------------|:-----------:|:----------------------------------------------------------------------------------------------------|:-----------:|\n| **1** | BAD_REQUEST |     400     | Request is not well-formed, syntactically incorrect, or violates schema.                            |      -      |\n| **2** | UNPROCESSABLE_ENTITY    |     422     | The requested action could not be performed, semantically incorrect, or failed business validation. |      -      |\n| **3** | INTERNAL_SERVER_ERROR      |     500     | An internal server error has occurred. |      -      |\n\n### **sendInvoiceStatus (POST v1/invoice-management/fiscal-document/status)**\n\n* Diagrama de Secuencia\n\n```mermaid\nsequenceDiagram\nrect rgb(93, 93, 93)\nS4Hana->>CIA: Call SendStatus(REST API) Env\xeda estado de facturas\nCIA->>EBIZ: Call RecepComprobante(REST API) Env\xeda estado de facturas\nEBIZ--\x3e>CIA: ack\nCIA--\x3e>S4Hana: ack\nend\n")),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Seq"),(0,r.kt)("th",null,"Description & Mapping Details "))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"Invoca API:",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("pre",null,"Ebiz.API.COMPROBANTES.NIFCliente \u2190 API.SalesOrganization.TaxIdentificationNumber Ebiz.API.COMPROBANTES.IsoPaisCliente \u2190 API.SalesOrganization.CountryCode Ebiz.API.COMPROBANTES.TipoNIFCliente \u2190 API.SalesOrganization.DocumentType Ebiz.API.COMPROBANTES.ListadoComprobantes.Item.TipoComprobante \u2190 API.FiscalDocument.Type Ebiz.API.COMPROBANTES.ListadoComprobantes.Item.NroComprobante \u2190 API.FiscalDocument.Number Ebiz.API.COMPROBANTES.ListadoComprobantes.Item.NIFProveedor \u2190 API.Vendor.TaxIdentificationNumber Ebiz.API.COMPROBANTES.ListadoComprobantes.Item.IsoPaisProveedor \u2190 API.SalesOrganization.CountryCode Ebiz.API.COMPROBANTES.ListadoComprobantes.Item.TipoNIFProveedor \u2190 API.Vendor.DocumentType Ebiz.API.COMPROBANTES.ListadoComprobantes.Item.AnioFiscal \u2190 API.FiscalDocument.IssueDate.GetYear() Ebiz.API.COMPROBANTES.ListadoComprobantes.Item.EstadoComprobante \u2190 API.FiscalDocument.Status"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"2"),(0,r.kt)("td",null,"Response \xe9xito:",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("pre",null,"null"))))),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cat\xe1logo de Errores")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"#"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Escenario"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Status Code"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Error Message"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"BAD_REQUEST"),(0,r.kt)("td",{parentName:"tr",align:"center"},"400"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Request is not well-formed, syntactically incorrect, or violates schema."),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"2")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UNPROCESSABLE_ENTITY"),(0,r.kt)("td",{parentName:"tr",align:"center"},"422"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The requested action could not be performed, semantically incorrect, or failed business validation."),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"3")),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTERNAL_SERVER_ERROR"),(0,r.kt)("td",{parentName:"tr",align:"center"},"500"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An internal server error has occurred."),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")))))}p.isMDXComponent=!0}}]);