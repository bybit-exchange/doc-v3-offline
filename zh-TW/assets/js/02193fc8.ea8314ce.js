"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7889],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),d=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(r),m=n,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return r?a.createElement(g,i(i({ref:e},s),{},{components:r})):a.createElement(g,i({ref:e},s))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1831:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const l={title:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",sidebar_label:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",sidebar_position:2,slug:"/copy-trade/trade/trading-stop"},i=void 0,o={unversionedId:"v3/copy-trade/rest-trade/order/set-trading-stop",id:"v3/copy-trade/rest-trade/order/set-trading-stop",title:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",description:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/copy-trade/rest-trade/order/set-trading-stop.mdx",sourceDirName:"v3/copy-trade/rest-trade/order",slug:"/copy-trade/trade/trading-stop",permalink:"/offline/zh-TW/copy-trade/trade/trading-stop",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",sidebar_label:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",sidebar_position:2,slug:"/copy-trade/trade/trading-stop"},sidebar:"v3SideBar",previous:{title:"\u4ea4\u6613\u54e1\u5275\u5efa\u8a02\u55ae",permalink:"/offline/zh-TW/copy-trade/trade/create-order"},next:{title:"\u67e5\u8a62\u4ea4\u6613\u54e1\u6b77\u53f2\u5e36\u55ae\u8a02\u55ae",permalink:"/offline/zh-TW/copy-trade/trade/get-order"}},p={},d=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],s={toc:d};function c(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d"),(0,n.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,n.kt)("p",null,"POST ",(0,n.kt)("inlineCode",{parentName:"p"},"/contract/v3/private/copytrading/order/trading-stop")),(0,n.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("b",null,"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u985e\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"parentOrderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("b",null,"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6bcd\u8a02\u55aeId")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"takeProfit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},'\u6b62\u76c8\u89f8\u767c\u50f9\u683c. \u50b3 0, \u8868\u793a\u6e05\u9664\u6b62\u76c8\u8a2d\u7f6e; \u50b3"", \u8868\u793a\u4e0d\u505a\u4fee\u6539')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stopLoss"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},'\u6b62\u640d\u89f8\u767c\u50f9\u683c. \u50b3 0, \u8868\u793a\u6e05\u9664\u6b62\u640d\u8a2d\u7f6e; \u50b3"", \u8868\u793a\u4e0d\u505a\u4fee\u6539')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"tpTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u6fc0\u6d3b\u50f9\u683c\u985e\u578b\uff0c\u9ed8\u8a8d\u70ba",(0,n.kt)("inlineCode",{parentName:"td"},"LastPrice"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"slTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b62\u640d\u6fc0\u6d3b\u50f9\u683c\u985e\u578b\uff0c\u9ed8\u8a8d\u70ba",(0,n.kt)("inlineCode",{parentName:"td"},"LastPrice"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"parentOrderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6bcd\u8a02\u55aeorderLinkID")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e")))),(0,n.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},'curl --location --request POST \'https://api.bybit.com/contract/v3/private/copytrading/order/trading-stop\' \\\n--header \'X-BAPI-SIGN-TYPE: 2\' \\\n--header \'X-BAPI-SIGN: XXXXX\' \\\n--header \'X-BAPI-API-KEY: XXXXXXXXX\' \\\n--header \'X-BAPI-TIMESTAMP: 1662026807816\' \\\n--header \'X-BAPI-RECV-WINDOW: 5000\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "symbol": "BTCUSDT",\n    "parentOrderId": "XXXXXXXX",\n    "takeProfit": "0",\n    "stopLoss": "0",\n    "tpTriggerBy": "MarkPrice",\n    "slTriggerBy": "LastPrice",\n    "parentOrderLinkId": "XXXXXXXX"\n}\'\n')),(0,n.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {}\n}\n')))}c.isMDXComponent=!0}}]);