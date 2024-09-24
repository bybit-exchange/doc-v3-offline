"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6948],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(n),g=r,u=k["".concat(o,".").concat(g)]||k[g]||s[g]||l;return n?a.createElement(u,i(i({ref:e},m),{},{components:n})):a.createElement(u,i({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},61813:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",sidebar_label:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",sidebar_position:6,slug:"/derivatives/contract/trading-stop"},i=void 0,p={unversionedId:"v3/derivatives/rest-contract/position/trading-stop",id:"v3/derivatives/rest-contract/position/trading-stop",title:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",description:"\u8a72\u63a5\u53e3\u53ef\u4ee5\u8a2d\u7f6e\u6b62\u76c8\u3001\u6b62\u640d\u548c\u8ffd\u8e64\u6b62\u640d.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-contract/position/trading-stop.mdx",sourceDirName:"v3/derivatives/rest-contract/position",slug:"/derivatives/contract/trading-stop",permalink:"/doc-v3-offline/zh-TW/derivatives/contract/trading-stop",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",sidebar_label:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",sidebar_position:6,slug:"/derivatives/contract/trading-stop"},sidebar:"v3SideBar",previous:{title:"\u8a2d\u7f6e\u69d3\u687f\u500d\u6578",permalink:"/doc-v3-offline/zh-TW/derivatives/contract/leverage"},next:{title:"\u8a2d\u7f6e\u98a8\u96aa\u9650\u984d (\u5ee2\u68c4)",permalink:"/doc-v3-offline/zh-TW/derivatives/contract/set-risk-limit"}},o={},d=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m={toc:d};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8a72\u63a5\u53e3\u53ef\u4ee5\u8a2d\u7f6e\u6b62\u76c8\u3001\u6b62\u640d\u548c\u8ffd\u8e64\u6b62\u640d."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5728\u63d0\u4ea4\u8acb\u6c42\u5f8c\uff0c\u7cfb\u7d71\u5167\u90e8\u5c07\u6703\u81ea\u52d5\u5275\u5efa\u5c0d\u61c9\u985e\u578b\u7684\u689d\u4ef6\u55ae"),(0,r.kt)("li",{parentName:"ul"},"\u82e5\u5009\u4f4d\u88ab\u5e73\uff0c\u7cfb\u7d71\u5c07\u6703\u8abf\u6574\u76f8\u95dc\u689d\u4ef6\u8a02\u55ae\u6578\u91cf\u6216\u8005\u53d6\u6d88\u9019\u4e9b\u689d\u4ef6\u55ae\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301USDT\u6c38\u7e8c\uff0cUSDC\u6c38\u7e8c\uff0c\u53cd\u5411\u6c38\u7e8c\u548c\u53cd\u5411\u4ea4\u5272."))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u65b0\u7248\u6b62\u76c8\u6b62\u640d, \u652f\u6301\u65e2\u6301\u6709\u5168\u90e8\u6b62\u76c8\u6b62\u640d\u55ae, \u4e5f\u53ef\u4ee5\u6301\u6709\u90e8\u5206\u6b62\u76c8\u6b62\u640d\u55ae"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5168\u90e8\u5009\u4f4d\u6b62\u76c8\u6b62\u640d\u55ae: \u8a72\u63a5\u53e3\u53ef\u7528\u65bc\u4fee\u6539\u8a72\u985e\u578b\u7684\u6b62\u76c8\u6b62\u640d\u55ae\u7684\u53c3\u6578"),(0,r.kt)("li",{parentName:"ul"},"\u90e8\u5206\u5009\u4f4d\u6b62\u76c8\u6b62\u640d\u55ae: \u8a72\u63a5\u53e3\u50c5\u80fd\u65b0\u589e\u90e8\u5206\u5009\u4f4d\u6b62\u76c8\u6b62\u640d\u55ae"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u65b0\u7248\u6b62\u76c8\u6b62\u640d\u4e0b, \u8abf\u7528\u8a72\u63a5\u53e3\u5c0d\u6301\u5009\u4e0a\u7684\u5df2\u6709\u7684\u6b62\u76c8\u6b62\u640d\u9032\u884c\u55ae\u908a\u6b62\u76c8\u6216\u8005\u6b62\u640d\u4fee\u6539\u6642, \u6703\u5c0e\u81f4\u6210\u5c0d\u7684tp/sl\u8a02\u55ae\u5931\u53bb\u7d81\u5b9a\u95dc\u4fc2, \u9019\u610f\u5473\u8457\u7576\u901a\u904etp/sl\u8a02\u55aeID\u8abf\u7528\n\u53d6\u6d88\u63a5\u53e3\u6642, \u53ea\u6703\u53d6\u6d88\u5c0d\u61c9\u8a02\u55aeID\u7684\u55ae\u908a\u6b62\u76c8\u6216\u6b62\u640d.")),(0,r.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,r.kt)("p",null,"POST ",(0,r.kt)("inlineCode",{parentName:"p"},"/contract/v3/private/position/trading-stop")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"takeProfit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u80fd\u5c0f\u65bc0. \u8a2d\u7f6e\u70ba0\u6642\uff0c\u5247\u8868\u793a\u53d6\u6d88\u6b62\u76c8. \u90e8\u5206\u6b62\u76c8\u6b62\u640d\u7121\u6cd5\u901a\u904e\u8a2d\u7f6e0\u4f86\u53d6\u6d88")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"stopLoss"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u80fd\u5c0f\u65bc0. \u8a2d\u7f6e\u70ba0\u6642\uff0c\u5247\u8868\u793a\u53d6\u6d88\u6b62\u640d. \u90e8\u5206\u6b62\u76c8\u6b62\u640d\u7121\u6cd5\u901a\u904e\u8a2d\u7f6e0\u4f86\u53d6\u6d88")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tpSize"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u5009\u4f4d\u6578\u91cf. \u50c5\u90e8\u5206\u6b62\u76c8\u6b62\u640d\u6642\u6709\u6548. \u6ce8\u610f: tpSize\u548cslSize\u7684\u6578\u503c\u5fc5\u9808\u76f8\u7b49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"slSize"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u5009\u4f4d\u6578\u91cf. \u50c5\u90e8\u5206\u6b62\u76c8\u6b62\u640d\u6642\u6709\u6548. \u6ce8\u610f: tpSize\u548cslSize\u7684\u6578\u503c\u5fc5\u9808\u76f8\u7b49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#triggerby"},"tpTriggerBy")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u50f9\u683c\u985e\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#triggerby"},"slTriggerBy")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b62\u640d\u50f9\u683c\u985e\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"trailingStop"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u80fd\u5c0f\u65bc0. \u8a2d\u7f6e\u70ba0\u6642\uff0c\u5247\u8868\u793a\u53d6\u6d88\u8ffd\u8e64\u6b62\u640d. ",(0,r.kt)("em",{parentName:"td"},"\u6ce8\u610f: \u50c5\u5c0dUSDT\u6c38\u7e8c\u6709\u6548"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"activePrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ffd\u8e64\u6b62\u640d\u6fc0\u6d3b\u50f9\u683c. \u8ffd\u8e64\u6b62\u640d\u6703\u5728\u5230\u9054\u8a72\u50f9\u683c\u6642\u89f8\u767c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tpslMode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u6b62\u640d\u6a21\u5f0f. ",(0,r.kt)("inlineCode",{parentName:"td"},"Full"),": \u5168\u90e8\u5009\u4f4d\u6b62\u76c8\u6b62\u640d, ",(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),": \u90e8\u5206\u5009\u4f4d\u6b62\u76c8\u6b62\u640d. \u7531\u65bc\u6bcf\u500b\u5408\u7d04\u90fd\u6709\u521d\u59cb\u7684\u6b62\u76c8\u6b62\u640d\u6a21\u5f0f(Full), \u82e5\u66fe\u7d93\u4fee\u6539\u904e, \u90a3\u9ebc\u53ef\u80fd\u662fPartial, \u56e0\u6b64\u82e5\u4e0d\u50b3\u5165, \u5247\u7cfb\u7d71\u6703\u81ea\u52d5\u7372\u53d6\u8a72\u5408\u7d04\u7576\u524d\u7684\u6b62\u76c8\u6b62\u640d\u6a21\u5f0f\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tpLimitPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u6b62\u76c8\u5f8c\u8f49\u63db\u70ba\u9650\u50f9\u55ae\u7684\u50f9\u683c. \u50c5tpslMode=Partial\u4e14tpOrderType=Limit\u6642\u6709\u6548")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"slLimitPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u6b62\u640d\u5f8c\u8f49\u63db\u70ba\u9650\u50f9\u55ae\u7684\u50f9\u683c. \u50c5tpslMode=Partial\u4e14slOrderType=Limit\u6642\u6709\u6548")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tpOrderType"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u89f8\u767c\u5f8c\u7684\u8a02\u55ae\u985e\u578b. ",(0,r.kt)("inlineCode",{parentName:"td"},"Market"),"(\u9ed8\u8a8d), ",(0,r.kt)("inlineCode",{parentName:"td"},"Limit"),". \u5c0d\u65bctpslMode=Full\u6642, \u50c5\u652f\u6301tpOrderType=Market")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"slOrderType"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b62\u640d\u89f8\u767c\u5f8c\u7684\u8a02\u55ae\u985e\u578b. ",(0,r.kt)("inlineCode",{parentName:"td"},"Market"),"(\u9ed8\u8a8d), ",(0,r.kt)("inlineCode",{parentName:"td"},"Limit"),". \u5c0d\u65bctpslMode=Full\u6642, \u50c5\u652f\u6301slOrderType=Market")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"positionIdx"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5009\u4f4d\u6a19\u8b58\uff0c\u7528\u65bc\u8b58\u5225\u5009\u4f4d. ",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"0"),": \u55ae\u5411\u6301\u5009"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"1"),": \u8cb7\u5074\u96d9\u5411\u6301\u5009"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"2"),": \u8ce3\u5074\u96d9\u5411\u6301\u5009")," "))))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.kt)("p",null,"\u7121"),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'POST /contract/v3/private/position/trading-stop HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1670852788387\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n{\n    "symbol": "SOLPERP",\n    "takeProfit": "19",\n    "stopLoss": "10",\n    "activePrice": null,\n    "trailingStop": null,\n    "tpTriggerBy": null,\n    "slTriggerBy": null,\n    "tpslMode": "Partial",\n    "tpOrderType": "Limit"\n    "slOrderType": "Limit"\n    "tpSize": "50",\n    "slSize": "50",\n    "tpLimitPrice": "18",\n    "slLimitPrice": "11",\n    "positionIdx": 0\n}\n')),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {},\n    "retExtInfo": {},\n    "time": 1670852788558\n}\n')))}s.isMDXComponent=!0}}]);