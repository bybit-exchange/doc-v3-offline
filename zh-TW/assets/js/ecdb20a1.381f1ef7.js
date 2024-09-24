"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[717],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),d=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=d(n),g=a,N=k["".concat(o,".").concat(g)]||k[g]||s[g]||l;return n?r.createElement(N,p(p({ref:e},m),{},{components:n})):r.createElement(N,p({ref:e},m))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,p=new Array(l);p[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:a,p[1]=i;for(var d=2;d<l;d++)p[d]=n[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},71819:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u6b62\u76c8\u6b62\u640d\u8a02\u55ae",sidebar_label:"\u6b62\u76c8\u6b62\u640d\u8a02\u55ae",sidebar_position:2,slug:"/spot/ws-private/stop-order"},p=void 0,i={unversionedId:"v3/spot/wss-private/stop-order",id:"v3/spot/wss-private/stop-order",title:"\u6b62\u76c8\u6b62\u640d\u8a02\u55ae",description:"\u8a72\u8a02\u95b1\u63a8\u9001web/app\u4e0b\u7684\u689d\u4ef6\u548c\u6b62\u76c8\u6b62\u640d\u8a02\u55ae\u4fe1\u606f, \u6216\u8005\u662fopenAPI\u4e0b\u7684\u6b62\u76c8\u6b62\u640d\u8a02\u55ae\u4fe1\u606f\u63a8\u9001\u3002\u53ea\u8981\u8a02\u55ae\u72c0\u614b\u767c\u751f\u6539\u8b8a\uff0c\u5c31\u6703\u63a8\u9001\u6d88\u606f\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/spot/wss-private/stop-order.mdx",sourceDirName:"v3/spot/wss-private",slug:"/spot/ws-private/stop-order",permalink:"/doc-v3-offline/zh-TW/spot/ws-private/stop-order",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u6b62\u76c8\u6b62\u640d\u8a02\u55ae",sidebar_label:"\u6b62\u76c8\u6b62\u640d\u8a02\u55ae",sidebar_position:2,slug:"/spot/ws-private/stop-order"},sidebar:"v3SideBar",previous:{title:"\u8a02\u55ae",permalink:"/doc-v3-offline/zh-TW/spot/ws-private/order"},next:{title:"\u500b\u4eba\u6210\u4ea4",permalink:"/doc-v3-offline/zh-TW/spot/ws-private/execution"}},o={},d=[{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8a02\u95b1\u793a\u4f8b",id:"\u8a02\u95b1\u793a\u4f8b",level:3},{value:"\u63a8\u9001\u793a\u4f8b",id:"\u63a8\u9001\u793a\u4f8b",level:3}],m={toc:d};function s(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8a72\u8a02\u95b1\u63a8\u9001web/app\u4e0b\u7684\u689d\u4ef6\u548c\u6b62\u76c8\u6b62\u640d\u8a02\u55ae\u4fe1\u606f, \u6216\u8005\u662fopenAPI\u4e0b\u7684\u6b62\u76c8\u6b62\u640d\u8a02\u55ae\u4fe1\u606f\u63a8\u9001\u3002\u53ea\u8981\u8a02\u55ae\u72c0\u614b\u767c\u751f\u6539\u8b8a\uff0c\u5c31\u6703\u63a8\u9001\u6d88\u606f\u3002"),(0,a.kt)("p",null,(0,a.kt)("b",null,"\u63a8\u9001\u983b\u7387"),": \u5be6\u6642"),(0,a.kt)("p",null,(0,a.kt)("b",null,"Topic"),": ",(0,a.kt)("code",null,"stopOrder")),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Topic\u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u88ab\u63a8\u9001\u51fa\u4f86\u7684\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"type"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6578\u64da\u985e\u578b. ",(0,a.kt)("inlineCode",{parentName:"td"},"snapshot"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"data"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> e"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u985e\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> E"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u6642\u9593\u6233")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> s"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u5c0d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> c"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"U\u7528\u6236\u81ea\u5b9a\u7fa9\u8a02\u55aeID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> S"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u65b9\u5411. ",(0,a.kt)("inlineCode",{parentName:"td"},"BUY"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"SELL"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> ",(0,a.kt)("a",{parentName:"td",href:"../enum#ordertype"},"o")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u985e\u578b. ",(0,a.kt)("inlineCode",{parentName:"td"},"LIMIT"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"MARKET_OF_QUOTE"),"(\u5e02\u50f9\u8cb7), ",(0,a.kt)("inlineCode",{parentName:"td"},"MARKET_OF_BASE"),"(\u5e02\u50f9\u8ce3)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> ",(0,a.kt)("a",{parentName:"td",href:"../enum#timeinforce"},"f")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001044"},"\u57f7\u884c\u7b56\u7565"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> q"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u6578\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> p"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u50f9\u683c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> ",(0,a.kt)("a",{parentName:"td",href:"../enum#orderstatus"},"X")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u6b62\u640d\u55ae\u8a02\u55ae\u72c0\u614b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> i"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> T"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u5275\u5efa\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> t"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u89f8\u767c\u6642\u9593\u6233 (\u6beb\u79d2). \u50c5\u8a02\u55ae\u72c0\u614b\u662f",(0,a.kt)("inlineCode",{parentName:"td"},"ORDER_FILLED"),"\u6216\u8005",(0,a.kt)("inlineCode",{parentName:"td"},"ORDER_FAILED"),"\u624d\u6709\u503c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> C"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u66f4\u65b0\u6642\u9593\u6233 (\u6beb\u79d2). \u6bcf\u7576\u8a02\u55ae\u72c0\u614b\u767c\u751f\u8b8a\u66f4\u6642\uff0c\u6703\u66f4\u65b0\u8a72\u6642\u9593")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> qp"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e0b\u55ae\u6642\u7684\u884c\u60c5\u50f9\u683c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> eo"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u6b62\u640d\u8a02\u55ae\u88ab\u89f8\u767c\u5f8c\u8f49\u5316\u70ba\u666e\u901a\u8a02\u55ae\u5f8c\u7684\u8a02\u55aeID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> ti"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8207\u696d\u52d9\u7121\u95dc\uff0c\u8acb\u5ffd\u7565")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> si"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8207\u696d\u52d9\u7121\u95dc\uff0c\u8acb\u5ffd\u7565")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> tp"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u50f9\u683c")))),(0,a.kt)("h3",{id:"\u8a02\u95b1\u793a\u4f8b"},"\u8a02\u95b1\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "req_id": "stopOrder_1", //optional\n    "op": "subscribe",\n    "args": [\n        "stopOrder"\n    ]\n}\n')),(0,a.kt)("h3",{id:"\u63a8\u9001\u793a\u4f8b"},"\u63a8\u9001\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "snapshot",\n    "topic": "stopOrder",\n    "ts": "1678689442476",\n    "data": [\n        {\n            "e": "stopOrder",\n            "E": "1678689442476",\n            "s": "XRPUSDT",\n            "c": "1678689442086",\n            "S": "BUY",\n            "o": "LIMIT",\n            "f": "GTC",\n            "q": "100",\n            "p": "0.335",\n            "X": "ORDER_NEW",\n            "i": "1375341158856660992",\n            "T": "1678689442437",\n            "t": "0",\n            "C": "1678689442437",\n            "qp": "0.3666",\n            "eo": "1375341158856660993",\n            "ti": "209a1cc923e1322315805fea6ed6fcbf",\n            "si": "d980d5212ea83c87",\n            "tp": "0.33"\n        }\n    ]\n}\n')))}s.isMDXComponent=!0}}]);