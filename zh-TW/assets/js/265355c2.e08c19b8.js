"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7661],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),p=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),k=p(n),s=a,u=k["".concat(o,".").concat(s)]||k[s]||c[s]||l;return n?r.createElement(u,i(i({ref:e},m),{},{components:n})):r.createElement(u,i({ref:e},m))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=k;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:a,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},90526:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u6279\u91cf\u64a4\u92b7\u59d4\u8a17\u55ae",sidebar_label:"\u6279\u91cf\u64a4\u92b7\u59d4\u8a17\u55ae",sidebar_position:8,slug:"/derivatives/unified/batch-cancel"},i=void 0,d={unversionedId:"v3/derivatives/rest-unified/order/batch-cancel",id:"v3/derivatives/rest-unified/order/batch-cancel",title:"\u6279\u91cf\u64a4\u92b7\u59d4\u8a17\u55ae",description:"\u8a72\u63a5\u53e3\u53ef\u4ee5\u6279\u91cf\u64a4\u92b7\u591a\u7b46\u8a02\u55ae",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-unified/order/batch-cancel.mdx",sourceDirName:"v3/derivatives/rest-unified/order",slug:"/derivatives/unified/batch-cancel",permalink:"/doc-v3-offline/zh-TW/derivatives/unified/batch-cancel",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\u6279\u91cf\u64a4\u92b7\u59d4\u8a17\u55ae",sidebar_label:"\u6279\u91cf\u64a4\u92b7\u59d4\u8a17\u55ae",sidebar_position:8,slug:"/derivatives/unified/batch-cancel"},sidebar:"v3SideBar",previous:{title:"\u6279\u91cf\u4fee\u6539\u59d4\u8a17\u55ae",permalink:"/doc-v3-offline/zh-TW/derivatives/unified/batch-replace"},next:{title:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae",permalink:"/doc-v3-offline/zh-TW/derivatives/unified/order-list"}},o={},p=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m={toc:p};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u8a72\u63a5\u53e3\u53ef\u4ee5\u6279\u91cf\u64a4\u92b7\u591a\u7b46\u8a02\u55ae"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u60a8\u5fc5\u9808\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"li"},"orderId"),"\u6216\u8005",(0,a.kt)("inlineCode",{parentName:"li"},"orderLinkId"),"."),(0,a.kt)("li",{parentName:"ul"},"\u82e5orderId\u548corderLinkId\u4e4b\u9593\u4e0d\u5339\u914d, \u7cfb\u7d71\u5c07\u6703\u512a\u5148\u8655\u7406orderId"),(0,a.kt)("li",{parentName:"ul"},"\u60a8\u53ea\u80fd\u64a4\u92b7\u672a\u6210\u4ea4\u548c\u90e8\u5206\u6210\u4ea4\u7684\u8a02\u55ae."),(0,a.kt)("li",{parentName:"ul"},"\u671f\u8ca8\u548c\u671f\u6b0a\u7684\u8a02\u55ae\u64a4\u92b7\u7121\u6cd5\u540c\u6642\u5728\u4e00\u6b21\u8acb\u6c42\u88cf\u540c\u6642\u64a4\u55ae\u3002\u5982\u679c\u671f\u8ca8\u548c\u671f\u6b0a\u7684\u8a02\u55ae\u90fd\u5728\u4e00\u500b\u8acb\u6c42\u88cf\uff0c\u5247\u6839\u64dacategory\u7684\u985e\u578b\uff0c\u50c5\u6703\u64cd\u4f5c\u8207category\u76f8\u5339\u914d\u7684\u8a02\u55ae\u3002"))),(0,a.kt)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/unified/v3/private/order/cancel-batch")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,a.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,a.kt)("inlineCode",{parentName:"td"},"option"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"request"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> orderId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeId. ",(0,a.kt)("inlineCode",{parentName:"td"},"orderId"),"\u548c",(0,a.kt)("inlineCode",{parentName:"td"},"orderLinkId"),"\u5fc5\u50b3\u5176\u4e2d\u4e00\u500b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> orderLinkId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9\u8a02\u55aeId. ",(0,a.kt)("inlineCode",{parentName:"td"},"orderId"),"\u548c",(0,a.kt)("inlineCode",{parentName:"td"},"orderLinkId"),"\u5fc5\u50b3\u5176\u4e2d\u4e00\u500b")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"result"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> list"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> category"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> orderId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeId")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> orderLinkId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9\u8a02\u55aeId")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"retExtInfo"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> list"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> code"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6210\u529f/\u932f\u8aa4\u78bc")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> msg"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6210\u529f/\u932f\u8aa4\u4fe1\u606f")))),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /unified/v3/private/order/cancel-batch HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN-TYPE: 2\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672818987475\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n\n{\n    "category": "linear",\n    "request": [\n        {\n            "symbol": "ETHUSDT",\n            "orderLinkId": "test-002"\n        },\n        {\n            "symbol": "XRPUSDT",\n            "orderLinkId": "test-003"\n        }\n    ]\n}\n')),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "list": [\n            {\n                "category": "linear",\n                "symbol": "ETHUSDT",\n                "orderId": "",\n                "orderLinkId": "test-002"\n            },\n            {\n                "category": "linear",\n                "symbol": "XRPUSDT",\n                "orderId": "",\n                "orderLinkId": "test-003"\n            }\n        ]\n    },\n    "retExtInfo": {\n        "list": [\n            {\n                "code": 0,\n                "msg": "success"\n            },\n            {\n                "code": 110001,\n                "msg": "order not exists or too late to cancel"\n            }\n        ]\n    },\n    "time": 1672818989928\n}\n')))}c.isMDXComponent=!0}}]);