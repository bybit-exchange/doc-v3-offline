"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[3685],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>s});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),o=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),k=o(r),s=n,g=k["".concat(p,".").concat(s)]||k[s]||c[s]||l;return r?a.createElement(g,i(i({ref:e},m),{},{components:r})):a.createElement(g,i({ref:e},m))}));function s(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=k;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:n,i[1]=d;for(var o=2;o<l;o++)i[o]=r[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},19542:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const l={title:"\u4fee\u6539\u59d4\u8a17\u55ae",sidebar_label:"\u4fee\u6539\u59d4\u8a17\u55ae",sidebar_position:2,slug:"/derivatives/contract/replace-order"},i=void 0,d={unversionedId:"v3/derivatives/rest-contract/order/replace-order",id:"v3/derivatives/rest-contract/order/replace-order",title:"\u4fee\u6539\u59d4\u8a17\u55ae",description:"\u60a8\u53ea\u80fd\u4fee\u6539\u90a3\u4e9b\u672a\u6210\u4ea4\u6216\u8005\u90e8\u5206\u6210\u4ea4\u7684\u8a02\u55ae\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-contract/order/replace-order.mdx",sourceDirName:"v3/derivatives/rest-contract/order",slug:"/derivatives/contract/replace-order",permalink:"/doc-v3-offline/zh-TW/derivatives/contract/replace-order",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u4fee\u6539\u59d4\u8a17\u55ae",sidebar_label:"\u4fee\u6539\u59d4\u8a17\u55ae",sidebar_position:2,slug:"/derivatives/contract/replace-order"},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u5be6\u6642\u59d4\u8a17\u55ae",permalink:"/doc-v3-offline/zh-TW/derivatives/contract/open-order"},next:{title:"\u64a4\u92b7\u59d4\u8a17\u55ae",permalink:"/doc-v3-offline/zh-TW/derivatives/contract/cancel"}},p={},o=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m={toc:o};function c(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u60a8\u53ea\u80fd\u4fee\u6539\u90a3\u4e9b\u672a\u6210\u4ea4\u6216\u8005\u90e8\u5206\u6210\u4ea4\u7684\u8a02\u55ae\u3002")),(0,n.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,n.kt)("p",null,"POST ",(0,n.kt)("inlineCode",{parentName:"p"},"/contract/v3/private/order/replace")),(0,n.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeId. ",(0,n.kt)("inlineCode",{parentName:"td"},"orderId"),"\u548c",(0,n.kt)("inlineCode",{parentName:"td"},"orderLinkId"),"\u5fc5\u50b3\u5176\u4e2d\u4e00\u500b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9\u8a02\u55aeId. ",(0,n.kt)("inlineCode",{parentName:"td"},"orderId"),"\u548c",(0,n.kt)("inlineCode",{parentName:"td"},"orderLinkId"),"\u5fc5\u50b3\u5176\u4e2d\u4e00\u500b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"price"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u5f8c\u7684\u8a02\u55ae\u50f9\u683c. \u82e5\u4e0d\u4fee\u6539\uff0c\u8acb\u4e0d\u8981\u50b3\u8a72\u5b57\u6bb5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"qty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u5f8c\u7684\u8a02\u55ae\u6578\u91cf. \u82e5\u4e0d\u4fee\u6539\uff0c\u8acb\u4e0d\u8981\u50b3\u8a72\u5b57\u6bb5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"triggerPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u50f9\u683c. \u82e5\u4e0d\u4fee\u6539\uff0c\u8acb\u4e0d\u8981\u50b3\u8a72\u5b57\u6bb5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"takeProfit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u5f8c\u7684\u6b62\u76c8\u50f9\u683c. \u82e5\u4e0d\u4fee\u6539\uff0c\u8acb\u4e0d\u8981\u50b3\u8a72\u5b57\u6bb5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stopLoss"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u5f8c\u7684\u6b62\u640d\u50f9\u683c. \u82e5\u4e0d\u4fee\u6539\uff0c\u8acb\u4e0d\u8981\u50b3\u8a72\u5b57\u6bb5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"tpTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u50f9\u683c\u89f8\u767c\u985e\u578b. \u82e5\u4e0b\u55ae\u6642\u672a\u8a2d\u7f6e\u8a72\u503c\uff0c\u5247\u8abf\u7528\u8a72\u63a5\u53e3\u4fee\u6539\u6b62\u76c8\u50f9\u683c\u6642\uff0c\u8a72\u5b57\u6bb5",(0,n.kt)("strong",{parentName:"td"},"\u5fc5\u50b3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"slTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b62\u640d\u50f9\u683c\u89f8\u767c\u985e\u578b. \u82e5\u4e0b\u55ae\u6642\u672a\u8a2d\u7f6e\u8a72\u503c\uff0c\u5247\u8abf\u7528\u8a72\u63a5\u53e3\u4fee\u6539\u6b62\u640d\u50f9\u683c\u6642\uff0c\u8a72\u5b57\u6bb5",(0,n.kt)("strong",{parentName:"td"},"\u5fc5\u50b3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"triggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u50f9\u683c\u7684\u89f8\u767c\u985e\u578b. ",(0,n.kt)("inlineCode",{parentName:"td"},"LastPrice"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"IndexPrice"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"MarkPrice"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tpLimitPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u6b62\u76c8\u5f8c\u8f49\u63db\u70ba\u9650\u50f9\u55ae\u7684\u50f9\u683c. \u7576\u4e14\u50c5\u7576\u539f\u59cb\u8a02\u55ae\u4e0b\u55ae\u6642\u5275\u5efa\u7684\u662f\u90e8\u5206\u6b62\u76c8\u6b62\u640d\u9650\u50f9\u55ae, \u672c\u5b57\u6bb5\u624d\u6709\u6548")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"slLimitPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u6b62\u640d\u5f8c\u8f49\u63db\u70ba\u9650\u50f9\u55ae\u7684\u50f9\u683c. \u7576\u4e14\u50c5\u7576\u539f\u59cb\u8a02\u55ae\u4e0b\u55ae\u6642\u5275\u5efa\u7684\u662f\u90e8\u5206\u6b62\u76c8\u6b62\u640d\u9650\u50f9\u55ae, \u672c\u5b57\u6bb5\u624d\u6709\u6548")))),(0,n.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeId")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9\u8a02\u55aeId")))),(0,n.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},'POST /contract/v3/private/order/replace HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1670554903846\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n{\n    "symbol": "XRPUSDT",\n    "orderId": "5ba57394-0ff0-4cb8-8000-59085d2c3aba",\n    "orderLinkId": null,\n    "price": "14.5"\n}\n')),(0,n.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "orderId": "5ba57394-0ff0-4cb8-8000-59085d2c3aba",\n        "orderLinkId": ""\n    },\n    "retExtInfo": {},\n    "time": 1670554904609\n}\n')))}c.isMDXComponent=!0}}]);