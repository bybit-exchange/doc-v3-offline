"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7442],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(n),c=a,g=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return n?r.createElement(g,i(i({ref:e},m),{},{components:n})):r.createElement(g,i({ref:e},m))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},79747:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u67e5\u8a62\u4fdd\u8b49\u91d1\u7522\u54c1\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u4fdd\u8b49\u91d1\u7522\u54c1\u4fe1\u606f",sidebar_position:1,slug:"/spot/otc/product-info"},i=void 0,o={unversionedId:"v3/spot/rest-institution-loan/margin-product-info",id:"v3/spot/rest-institution-loan/margin-product-info",title:"\u67e5\u8a62\u4fdd\u8b49\u91d1\u7522\u54c1\u4fe1\u606f",description:"\u9019\u662f\u516c\u5171\u63a5\u53e3\uff0c\u7121\u9700\u9452\u6b0a\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/spot/rest-institution-loan/margin-product-info.mdx",sourceDirName:"v3/spot/rest-institution-loan",slug:"/spot/otc/product-info",permalink:"/doc-v3-offline/zh-TW/spot/otc/product-info",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u67e5\u8a62\u4fdd\u8b49\u91d1\u7522\u54c1\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u4fdd\u8b49\u91d1\u7522\u54c1\u4fe1\u606f",sidebar_position:1,slug:"/spot/otc/product-info"},sidebar:"v3SideBar",previous:{title:"\u5168\u5009\u69d3\u687f\u958b\u95dc",permalink:"/doc-v3-offline/zh-TW/spot/margin/toggle"},next:{title:"\u67e5\u8a62\u4fdd\u8b49\u91d1\u5e63\u7a2e\u4fe1\u606f",permalink:"/doc-v3-offline/zh-TW/spot/otc/coin-info"}},p={},d=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m={toc:d};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u9019\u662f\u516c\u5171\u63a5\u53e3\uff0c\u7121\u9700\u9452\u6b0a\u3002")),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"GET ",(0,a.kt)("code",null,"/spot/v3/public/margin-product-infos")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"productId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1ID. \u82e5\u4e0d\u50b3\uff0c\u5247\u8fd4\u56de\u6240\u6709\u7522\u54c1\u6578\u64da")))),(0,a.kt)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"marginProductInfo"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> productId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> leverage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u69d3\u687f\u500d\u6578")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> supportSpot"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301\u73fe\u8ca8. ",(0,a.kt)("inlineCode",{parentName:"td"},"0"),":\u5426; ",(0,a.kt)("inlineCode",{parentName:"td"},"1"),":\u662f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> supportContract"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301\u5408\u7d04 . ",(0,a.kt)("inlineCode",{parentName:"td"},"0"),": \u5426; ",(0,a.kt)("inlineCode",{parentName:"td"},"1"),": \u662f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> withdrawLine"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9650\u5236\u63d0\u5e63\u7dda")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> transferLine"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9650\u5236\u5283\u8f49\u7dda")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> spotBuyLine"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9650\u5236\u73fe\u8ca8\u8cb7\u5165\u7dda")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> spotSellLine"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9650\u5236\u73fe\u8ca8\u8ce3\u51fa\u7dda")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> contractOpenLine"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9650\u5236\u5408\u7d04\u958b\u5009\u7dda")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> liquidationLine"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f37\u5e73\u7dda")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> stopLiquidationLine"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u505c\u6b62\u5f37\u5e73\u7dda")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> contractLeverage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5141\u8a31\u5408\u7d04\u958b\u5009\u500d\u6578")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> transferRatio"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u501f\u8cb8\u8cc7\u91d1\u5283\u8f49\u6bd4\u4f8b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> spotSymbols"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"\u73fe\u8ca8\u4ea4\u6613\u5c0d\u767d\u540d\u55ae")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> contractSymbols"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u4ea4\u6613\u5c0d\u767d\u540d\u55ae")))),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"curl --location --request GET 'https://api-testnet.bybit.com/spot/v3/public/margin-product-infos?productId=70'\n")),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "marginProductInfo": [\n            {\n                "productId": "70",\n                "leverage": "5.00000000",\n                "supportSpot": 1,\n                "supportContract": 1,\n                "withdrawLine": "0.5",\n                "transferLine": "0.6",\n                "spotBuyLine": "0.7",\n                "spotSellLine": "0.8",\n                "contractOpenLine": "0.9",\n                "liquidationLine": "0.95",\n                "stopLiquidationLine": "0.40000000",\n                "contractLeverage": "",\n                "transferRatio": "",\n                "spotSymbols": [\n                    "DYDXQQTEST001"\n                ],\n                "contractSymbols": [\n                    "RAYUSDT",\n                    "API3USDT"\n                ]\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1669362961705\n}\n')))}u.isMDXComponent=!0}}]);