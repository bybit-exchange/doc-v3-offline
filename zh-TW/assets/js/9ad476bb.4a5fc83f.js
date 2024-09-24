"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1355],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),m=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return r.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),N=m(a),g=n,s=N["".concat(d,".").concat(g)]||N[g]||k[g]||l;return a?r.createElement(s,i(i({ref:e},o),{},{components:a})):r.createElement(s,i({ref:e},o))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},49593:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={title:"\u5275\u5efa\u59d4\u8a17\u55ae",sidebar_label:"\u5275\u5efa\u59d4\u8a17\u55ae",sidebar_position:1,slug:"/derivatives/unified/place-order"},i=void 0,p={unversionedId:"v3/derivatives/rest-unified/order/place-order",id:"v3/derivatives/rest-unified/order/place-order",title:"\u5275\u5efa\u59d4\u8a17\u55ae",description:"- \u5e02\u50f9\u55ae: \u4e00\u500b\u50b3\u7d71\u7684\u5e02\u5834\u50f9\u683c\u8a02\u55ae,",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-unified/order/place-order.mdx",sourceDirName:"v3/derivatives/rest-unified/order",slug:"/derivatives/unified/place-order",permalink:"/offline/zh-TW/derivatives/unified/place-order",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5275\u5efa\u59d4\u8a17\u55ae",sidebar_label:"\u5275\u5efa\u59d4\u8a17\u55ae",sidebar_position:1,slug:"/derivatives/unified/place-order"},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u591a\u7a7a\u6bd4",permalink:"/offline/zh-TW/derivatives/public/long-short-ratio"},next:{title:"\u67e5\u8a62\u5be6\u6642\u59d4\u8a17\u55ae",permalink:"/offline/zh-TW/derivatives/unified/open-order"}},d={},m=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],o=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},k=o("Tabs"),N=o("TabItem"),g={toc:m};function s(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001135"},"\u5e02\u50f9\u55ae")),": \u4e00\u500b\u50b3\u7d71\u7684\u5e02\u5834\u50f9\u683c\u8a02\u55ae,\n\u6703\u4ee5\u7576\u524d\u7684\u6700\u512a\u50f9\u683c\u70ba\u60a8\u6210\u4ea4\u8a02\u55ae\u3002\u7576\u4e14\u50c5\u7576\u9078\u64c7\u5e02\u50f9\u55ae\u6642\uff0c price\u53ef\u70ba\u7a7a. \u70ba\u4e86\u4fdd\u8b77\u5e02\u50f9\u55ae\u906d\u9047\u56b4\u91cd\u7684\u6ed1\u9ede\uff0cBybit\u5c07",(0,n.kt)("strong",{parentName:"p"},"\u50f9\u55ae\u8f49\u70ba\u9650\u50f9\u55ae"),"\u5165\u64ae\u5408\uff0c\n\u8cb7\u55ae\u50f9\u683c\u9ad8\u65bc\u6700\u512a\u8ce3\u50f9\uff0c\u8ce3\u55ae\u50f9\u683c\u4f4e\u65bc\u6700\u512a\u8cb7\u50f9\u3002\u9650\u50f9\u50f9\u683c\u548c\u6210\u4ea4\u50f9\u683c\u5747\u53ef\u901a\u904e\u7528\u6236\u6210\u4ea4\u8a18\u9304\u63a5\u53e3\u67e5\u8a62.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u9650\u50f9\u55ae"),": \u60a8\u53ef\u4ee5\u70ba\u60a8\u7684\u8a02\u55ae\u8a2d\u7f6e\u4e00\u500b\u57f7\u884c\u50f9\u683c\uff0c\u7576\u5e02\u5834\u50f9\u683c\u9054\u5230\u60a8\u7684\u8a2d\u7f6e\u50f9\u683c\u6642\uff0c\u7cfb\u7d71\u6703\u70ba\u60a8\u6210\u4ea4\u8a02\u55ae\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001138"},"\u6b62\u76c8\u6b62\u640d")),": \u60a8\u53ef\u4ee5\u5728\u4e0b\u55ae\u6642\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d\u3002\u53e6\u5916\uff0c\u60a8\u53ef\u4ee5\u901a\u904e\u8a2d\u7f6e",(0,n.kt)("a",{parentName:"p",href:"trading-stop#"},"\u6b62\u76c8\u6b62\u640d"),"\u63a5\u53e3\u4fee\u6539\u6301\u5009\u6642\u7684\u6b62\u76c8\u6b62\u640d\u50f9\u683c\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u59d4\u6258\u6578\u91cf"),": \u8868\u793a\u60a8\u8981\u8cfc\u8cb7/\u8ce3\u51fa\u7684\u6c38\u7e8c\u5408\u7d04\u6578\uff0c\u5c0d\u65bc\u59d4\u6258\u6578\u91cf\u76ee\u524dBybit\u53ea\u5141\u8a31\u63d0\u4ea4\u6b63\u6574\u6578\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u59d4\u6258\u50f9\u683c"),": \u5982\u679c\u662f\u4e0b\u9650\u50f9\u55ae\uff0c\u8a72\u53c3\u6578\u70ba",(0,n.kt)("strong",{parentName:"p"},"\u5fc5\u586b"),". \u5728\u6c92\u6709\u5009\u4f4d\u6642\uff0c\u505a\u591a\u7684\u59d4\u6258\u50f9\u683c\u9700\u9ad8\u65bc\u5e02\u50f9\u7684 ",(0,n.kt)("em",{parentName:"p"},"10%"),"\u3001\u4f4e\u65bc1\u767e\u842c\u3002\u5982\u6709\u5009\u4f4d\u6642\u5247\u9700\u512a\u65bc",(0,n.kt)("strong",{parentName:"p"},"\u5f37\u5e73\u50f9"),"\u3002\n\u50f9\u683c\u589e\u6e1b\u6700\u5c0f\u55ae\u4f4d\u8acb\u53c3\u8003",(0,n.kt)("a",{parentName:"p",href:"../public/instrument-info#"},"\u4ea4\u6613\u5c0d"),"\u63a5\u53e3\u97ff\u61c9\u4e2d\u7684priceFilter\u5b57\u6bb5\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u7528\u6236\u81ea\u5b9a\u7fa9\u8a02\u55aeID"),": \u60a8\u53ef\u4ee5\u81ea\u5b9a\u7fa9\u6d3b\u52d5\u59d4\u6258\u8a02\u55aeID\uff0c\u6211\u5011\u6703\u70ba\u60a8\u95dc\u806f\u5230\u7cfb\u7d71\u7684\u8a02\u55aeID\uff0c\u4e26\u628a\u7cfb\u7d71\u7684\u552f\u4e00\u8a02\u55aeID\u5728\u6d3b\u52d5\u59d4\u6258\u5275\u5efa\u6210\u529f\u5f8c\u4e00\u4e26\u8fd4\u56de\u7d66\u60a8\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\n\u8a72\u8a02\u55aeID\u53bb\u53d6\u6d88\u6d3b\u52d5\u59d4\u6258\uff0c\u540c\u6642\u8981\u6c42\u60a8\u50b3\u905e\u7684\u81ea\u5b9a\u7fa9\u8a02\u55aeID \u6700\u5927\u9577\u5ea6\u4e0d\u8d85\u904e36\u500b\u5b57\u6bb5\u4e14",(0,n.kt)("strong",{parentName:"p"},"\u552f\u4e00"),"\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u8a02\u55ae\u6301\u6709\u4e0a\u9650"),": \u671f\u8ca8: \u55ae\u500b\u8d26\u6237\u9488\u5bf9\u5408\u7ea6\u53ef\u6301\u6709\u6bcf\u4e2a symbol \u6700\u591a\u53ef\u540c\u65f6\u6301\u6709500\u4e2a\u666e\u901a\u6d3b\u52a8\u8ba2\u5355\u3002\u8fd9\u662f\u9488\u5bf9\u5408\u7ea6\u7684\uff0c\u56e0\u6b64\u53ef\u4ee5\u5141\u8bb8\u51fa\u73b0\u4f8b\u5982\uff1a\u8d26\u6237\u540c\u65f6\u6301\u6709300\u4e2aBTCUSD\u7684\u6d3b\u52a8\u5355\u3001\n280\u4e2aETHUSD\u5408\u7ea6\u7684\u6d3b\u52a8\u5355\u3002\u91dd\u5c0d\u689d\u4ef6\u55ae\uff0c\u55ae\u500b\u5e33\u6236\u91dd\u5c0d\u5408\u7d04\u53ef\u6301\u6709\u6bcf\u500b symbol \u6700\u591a\u540c\u6642\u6301\u6709 10 \u500b\u689d\u4ef6\u55ae\u3002\n\u671f\u6b0a: \u6700\u591a\u53ef\u6301\u6709100\u500b\u59d4\u8a17\u55ae")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u671f\u6b0a",(0,n.kt)("strong",{parentName:"p"},"\u4e0d\u652f\u6301"),"\u5275\u5efa\u689d\u4ef6\u55ae")))),(0,n.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,n.kt)("p",null,"POST ",(0,n.kt)("inlineCode",{parentName:"p"},"/unified/v3/private/order/create")),(0,n.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,n.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"side"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u65b9\u5411. ",(0,n.kt)("inlineCode",{parentName:"td"},"Buy"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"Sell"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderType"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u985e\u578b. ",(0,n.kt)("inlineCode",{parentName:"td"},"Market"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"Limit"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"qty"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0b\u55ae\u6578\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"price"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u50f9\u683c. ",(0,n.kt)("inlineCode",{parentName:"td"},"orderType"),"=",(0,n.kt)("em",{parentName:"td"},"Market"),"\u6642\uff0c\u503c\u5c07\u88ab\u5ffd\u7565")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"basePrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7576\u524d\u5e02\u50f9",(0,n.kt)("ul",null,(0,n.kt)("li",null,"\u7528\u65bc\u548c",(0,n.kt)("inlineCode",{parentName:"td"},"triggerPrice"),"\u503c\u9032\u884c\u6bd4\u8f03\uff0c\u78ba\u5b9a\u7576\u524d\u689d\u4ef6\u59d4\u6258\u662f\u770b\u7a7a\u5230triggerPrice\u6642\u89f8\u767c\u9084\u662f\u770b\u591a\u5230triggerPrice\u89f8\u767c"),(0,n.kt)("li",null,"\u4e3b\u8981\u662f\u7528\u4f86\u6a19\u8b58\u7576\u524d\u689d\u4ef6\u55ae\u9810\u671f\u7684\u65b9\u5411")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"triggerPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u50f9\u683c. \u5982\u679c\u60a8\u671f\u671b\u50f9\u683c\u4e0a\u6f32\u65f6\u89f8\u767c\u60a8\u7684\u689d\u4ef6\u8a02\u55ae, \u8acb\u78ba\u4fdd:",(0,n.kt)("br",null)," ",(0,n.kt)("em",{parentName:"td"},"triggerPrice > max(market price, basePrice)"),(0,n.kt)("br",null),"\u5426\u5247, ",(0,n.kt)("em",{parentName:"td"},"triggerPrice < min(market price, basePrice)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"triggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u50f9\u683c\u985e\u578b. ",(0,n.kt)("inlineCode",{parentName:"td"},"LastPrice"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"IndexPrice"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"MarkPrice"),". \u9ed8\u8a8d: ",(0,n.kt)("inlineCode",{parentName:"td"},"LastPrice"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"iv"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u96b1\u542b\u6ce2\u52d5\u7387. \u50c5\u9069\u7528\u65bc",(0,n.kt)("inlineCode",{parentName:"td"},"option"),". \u6309\u7167\u5be6\u969b\u503c\u50b3\u6158\uff0c\u598210%\uff0c\u5247\u50b30.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#timeinforce"},"timeInForce")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001044"},"\u8a02\u55ae\u57f7\u884c\u7b56\u7565")," ",(0,n.kt)("inlineCode",{parentName:"td"},"GoodTillCancel"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ImmediateOrCancel"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"FillOrKill"),", ",(0,n.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001051"},(0,n.kt)("inlineCode",{parentName:"td"},"PostOnly")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"positionIdx"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5009\u4f4d\u6a19\u8b58. ",(0,n.kt)("inlineCode",{parentName:"td"},"0"),": \u55ae\u5411\u6301\u5009, ",(0,n.kt)("inlineCode",{parentName:"td"},"1"),": \u8cb7\u5074\u96d9\u5411\u6301\u5009, ",(0,n.kt)("inlineCode",{parentName:"td"},"2"),": \u8ce3\u5074\u96d9\u5411\u6301\u5009. \u7d71\u4e00\u4fdd\u8b49\u91d1\u50c5\u652f\u6301\u55ae\u5411\u6301\u5009")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9\u8a02\u55aeID, \u6700\u5927\u9577\u5ea636\u4f4d\uff0c\u4e14\u540c\u4e00\u6a5f\u69cb\u4e0b\u81ea\u5b9a\u7fa9ID\u652f\u6301\u6578\u5b57\u3001\u5b57\u6bcd\uff08\u5927\u5c0f\u5beb\uff09\u3001\u4e2d\u5283\u7dda\u3001\u4e0b\u5283\u7dda\u9019\u4e9b\u5b57\u7b26\u7684\u7d44\u5408",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u671f\u8ca8\u898f\u5247"),":",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",null,"\u8a72\u53c3\u6578\u9078\u586b"),(0,n.kt)("li",null,"USDC\u6c38\u7e8c\u548cUSDT\u6c38\u7e8c\u7684orderLinkId\u4e92\u76f8\u7368\u7acb\uff0c\u5373orderLinkId\u53ef\u76f8\u540c"),(0,n.kt)("li",null,"\u5728\u8a02\u55ae\u672a\u5b8c\u5168\u6210\u4ea4\u6216\u53d6\u6d88\u524d\uff0corderLinkId\u9700\u4fdd\u6301\u4e0d\u4e00\u81f4; \u8a02\u55ae\u5b8c\u5168\u6210\u4ea4\u6216\u53d6\u6d88\u5f8c\uff0corderLinkId\u53ef\u4f7f\u7528\u4e4b\u524d\u4f7f\u7528\u904e\u7684"),(0,n.kt)("em",{parentName:"td"},"\u671f\u6b0a\u898f\u5247"),":",(0,n.kt)("br",null),(0,n.kt)("li",null,"\u8a72\u53c3\u6578",(0,n.kt)("strong",{parentName:"td"},"\u5fc5\u50b3")),(0,n.kt)("li",null,"\u7e3d\u662f\u552f\u4e00")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"takeProfit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u50f9\u683c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stopLoss"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b62\u640d\u50f9\u683c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"tpTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u6fc0\u6d3b\u50f9\u683c\u985e\u578b\uff0c",(0,n.kt)("inlineCode",{parentName:"td"},"MarkPrice"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"IndexPrice"),", \u9ed8\u8a8d:",(0,n.kt)("inlineCode",{parentName:"td"},"LastPrice"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"slTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b62\u640d\u6fc0\u6d3b\u50f9\u683c\u985e\u578b. ",(0,n.kt)("inlineCode",{parentName:"td"},"MarkPrice"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"IndexPrice"),", \u9ed8\u8a8d:",(0,n.kt)("inlineCode",{parentName:"td"},"LastPrice"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"reduceOnly"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001047"},"\u4ec0\u9ebc\u662f\u53ea\u6e1b\u5009?")," ",(0,n.kt)("inlineCode",{parentName:"td"},"true")," \u5c07\u9019\u7b46\u8a02\u55ae\u8a2d\u70ba\u53ea\u6e1b\u5009. ",(0,n.kt)("em",{parentName:"td"},"\u53ea\u6e1b\u5009\u55ae\u7684\u6b62\u76c8\u6b62\u640d\u4e0d\u751f\u6548"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"closeOnTrigger"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001050"},"\u4ec0\u9ebc\u662f\u89f8\u767c\u5f8c\u5e73\u5009\u59d4\u8a17?")," \u6b64\u9078\u9805\u53ef\u4ee5\u78ba\u4fdd\u60a8\u7684\u6b62\u640d\u55ae\u88ab\u7528\u65bc\u6e1b\u5009\uff08\u5e73\u5009\uff09\u800c\u975e\u52a0\u5009\uff0c\u4e26\u4e14\u5728\u53ef\u7528\u4fdd\u8b49\u91d1\u4e0d\u8db3\u7684\u60c5\u6cc1\u4e0b\uff0c\u53d6\u6d88\u5176\u4ed6\u59d4\u8a17\uff0c\u9a30\u51fa\u4fdd\u8b49\u91d1\u4ee5\u78ba\u4fdd\u5e73\u5009\u59d4\u8a17\u7684\u57f7\u884c.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mmp"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"\u505a\u5e02\u5546\u4fdd\u8b77. \u50c5\u5c0d\u671f\u6b0a\u751f\u6548. ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),"\u8868\u793a\u8a72\u8a02\u55ae\u662f\u505a\u5e02\u5546\u4fdd\u8b77\u8a02\u55ae")))),(0,n.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9\u8a02\u55aeID")))),(0,n.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,n.kt)(k,{mdxType:"Tabs"},(0,n.kt)(N,{value:"console-linear",label:"linear",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},'curl --location --request POST \'https://api-testnet.bybit.com/unified/v3/private/order/create\' \\\n--header \'X-BAPI-SIGN-TYPE: 2\' \\\n--header \'X-BAPI-SIGN: XXXXX\' \\\n--header \'X-BAPI-API-KEY: {api key}\' \\\n--header \'X-BAPI-TIMESTAMP: 1657871228347\' \\\n--header \'X-BAPI-RECV-WINDOW: 5000\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "symbol": "BTCUSDT",\n    "orderType": "Limit",\n    "side": "Buy",\n    "qty": "0.01",\n    "price": "20002",\n    "timeInForce": "GoodTillCancel",\n    "category": "linear"\n}\'\n')))),(0,n.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,n.kt)(k,{mdxType:"Tabs"},(0,n.kt)(N,{value:"js linear",label:"linear",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "orderId": "e10b0716-7c91-4091-b98a-1fa0f401c7d5",\n        "orderLinkId": "test0000003"\n    },\n    "retExtInfo": {},\n    "time": 1664441344238\n}\n')))))}s.isMDXComponent=!0}}]);