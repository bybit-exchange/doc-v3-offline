"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1360],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=d(n),f=r,c=s["".concat(o,".").concat(f)]||s[f]||u[f]||l;return n?a.createElement(c,i(i({ref:e},m),{},{components:n})):a.createElement(c,i({ref:e},m))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},31261:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u67e5\u8a62\u6b77\u53f2\u8cc7\u91d1\u8cbb\u7387",sidebar_label:"\u67e5\u8a62\u6b77\u53f2\u8cc7\u91d1\u8cbb\u7387",sidebar_position:10,slug:"/derivatives/public/funding-rate"},i=void 0,p={unversionedId:"v3/derivatives/rest-public/fund-rate-history",id:"v3/derivatives/rest-public/fund-rate-history",title:"\u67e5\u8a62\u6b77\u53f2\u8cc7\u91d1\u8cbb\u7387",description:"\u67e5\u8a62\u8cc7\u91d1\u8cbb\u7387\uff0c\u6bcf\u500bsymbol\u7684\u8cc7\u91d1\u8cbb\u7387\u7522\u751f\u9031\u671f\u4e0d\u540c\u3002\u5047\u8a2d\u8cc7\u91d1\u8cbb\u7387\u70ba8\u5c0f\u6642\uff0c\u7576\u524d\u6642\u9593\u662fUTC12\u9ede\uff0c\u5247\u8fd4\u56de\u7684\u662f\u4e0a\u4e00\u500b\u7d50\u7b97\u5373UTC8\u9ede\u7522\u751f\u7684\u8cc7\u91d1\u8cbb\u7387\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-public/fund-rate-history.mdx",sourceDirName:"v3/derivatives/rest-public",slug:"/derivatives/public/funding-rate",permalink:"/doc-v3-offline/zh-TW/derivatives/public/funding-rate",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u67e5\u8a62\u6b77\u53f2\u8cc7\u91d1\u8cbb\u7387",sidebar_label:"\u67e5\u8a62\u6b77\u53f2\u8cc7\u91d1\u8cbb\u7387",sidebar_position:10,slug:"/derivatives/public/funding-rate"},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u5408\u7d04\u98a8\u96aa\u9650\u984d",permalink:"/doc-v3-offline/zh-TW/derivatives/public/risk-limit"},next:{title:"\u67e5\u8a62\u672a\u5e73\u5009\u5408\u7d04\u6301\u5009\u6578\u91cf",permalink:"/doc-v3-offline/zh-TW/derivatives/public/open-interest"}},o={},d=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},u=m("Tabs"),s=m("TabItem"),f={toc:d};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u67e5\u8a62\u8cc7\u91d1\u8cbb\u7387\uff0c\u6bcf\u500bsymbol\u7684\u8cc7\u91d1\u8cbb\u7387\u7522\u751f\u9031\u671f\u4e0d\u540c\u3002\u5047\u8a2d\u8cc7\u91d1\u8cbb\u7387\u70ba8\u5c0f\u6642\uff0c\u7576\u524d\u6642\u9593\u662fUTC12\u9ede\uff0c\u5247\u8fd4\u56de\u7684\u662f\u4e0a\u4e00\u500b\u7d50\u7b97\u5373UTC8\u9ede\u7522\u751f\u7684\u8cc7\u91d1\u8cbb\u7387\u3002\n\u5982\u8981\u67e5\u8a62symbol\u7684\u8cc7\u91d1\u8cbb\u7387\u6642\u9593\u9593\u9694\uff0c\u8acb\u67e5\u8a62",(0,r.kt)("a",{parentName:"p",href:"instrument-info#"},"\u53ef\u4ea4\u6613\u7522\u54c1\u898f\u683c"),"\u63a5\u53e3"),(0,r.kt)("admonition",{title:"\u6642\u9593\u5165\u53c2\u898f\u5247",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u53ea\u50b3",(0,r.kt)("inlineCode",{parentName:"li"},"startTime"),"\u6703\u5831\u932f"),(0,r.kt)("li",{parentName:"ul"},"\u53ea\u50b3",(0,r.kt)("inlineCode",{parentName:"li"},"endTime"),"\uff0c\u5247\u8fd4\u56deendTime\u5f80\u524d\u7684200\u689d\u6578\u64da"),(0,r.kt)("li",{parentName:"ul"},"\u90fd\u4e0d\u50b3\uff0c\u8fd4\u56de\u7576\u524d\u6642\u9593\u7684\u5f80\u524d200\u689d\u6578\u64da"))),(0,r.kt)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/derivatives/v3/public/funding/history-funding-rate")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,r.kt)("inlineCode",{parentName:"td"},"inverse"),". \u9ed8\u8a8d: ",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),", \u7576\u4e0d\u50b3\u6642\uff0c\u97ff\u61c9\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("b",null,"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"startTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u958b\u59cb\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"endTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7d50\u675f\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u6578\u91cf\u9650\u5236. ","[",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"200"),"]",". \u9ed8\u8a8d: ",(0,r.kt)("inlineCode",{parentName:"td"},"200"))))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"list"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> fundingRate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cc7\u91d1\u8cbb\u7387")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> fundingRateTimestamp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cc7\u91d1\u8cbb\u7387\u6642\u9593\u6233(\u6beb\u79d2)")))),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(s,{value:"console-linear",label:"linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /derivatives/v3/public/funding/history-funding-rate?symbol=BTCPERP&limit=2 HTTP/1.1\nHost: api.bybit.com\u200b\u200b\n")))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(s,{value:"js linear",label:"linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "retCode": 0,\n        "retMsg": "OK",\n        "result": {\n            "category": "",\n            "list": [\n                {\n                    "symbol": "BTCPERP",\n                    "fundingRate": "0.0001",\n                    "fundingRateTimestamp": "1671955200000"\n                },\n                {\n                    "symbol": "BTCPERP",\n                    "fundingRate": "0.0001",\n                    "fundingRateTimestamp": "1671926400000"\n                }\n            ]\n    },\n        "retExtInfo": {},\n        "time": 1671970750651\n    }\n')))))}c.isMDXComponent=!0}}]);