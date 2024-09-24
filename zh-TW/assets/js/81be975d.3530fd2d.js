"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[3609],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(f,o(o({ref:e},s),{},{components:r})):n.createElement(f,o({ref:e},s))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},22527:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"\u6279\u91cf\u64a4\u92b7\u8a02\u55ae",sidebar_label:"\u6279\u91cf\u64a4\u92b7\u8a02\u55ae",sidebar_position:5,slug:"/spot/trade/batch-cancel"},o=void 0,i={unversionedId:"v3/spot/rest-spot/batch-cancel",id:"v3/spot/rest-spot/batch-cancel",title:"\u6279\u91cf\u64a4\u92b7\u8a02\u55ae",description:"HTTP \u8acb\u6c42",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/spot/rest-spot/batch-cancel.mdx",sourceDirName:"v3/spot/rest-spot",slug:"/spot/trade/batch-cancel",permalink:"/offline/zh-TW/spot/trade/batch-cancel",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u6279\u91cf\u64a4\u92b7\u8a02\u55ae",sidebar_label:"\u6279\u91cf\u64a4\u92b7\u8a02\u55ae",sidebar_position:5,slug:"/spot/trade/batch-cancel"},sidebar:"v3SideBar",previous:{title:"\u8a02\u55ae\u5217\u8868",permalink:"/offline/zh-TW/spot/trade/open-order"},next:{title:"\u6839\u64da\u8a02\u55ae\u865f\u6279\u91cf\u64a4\u92b7\u8a02\u55ae",permalink:"/offline/zh-TW/spot/trade/cancel-by-id"}},p={},c=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],s={toc:c};function d(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"POST ",(0,a.kt)("code",null,"/spot/v3/private/cancel-orders")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e63\u5c0d\u540d\u7a31")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"side"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8cb7\u8ce3\u65b9\u5411. ",(0,a.kt)("code",null,"Buy"),", ",(0,a.kt)("code",null,"Sell"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"orderTypes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u985e\u578b. \u9ed8\u8a8d\u70ba",(0,a.kt)("code",null,"LIMIT"),". \u652f\u6301\u591a\u500b\u8a02\u55ae\u985e\u578b\u53d6\u6d88, \u7528\u82f1\u6587\u9017\u865f\u5206\u958b, \u4f8b\u5982\uff1a",(0,a.kt)("code",null,"LIMIT,LIMIT_MAKER"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"orderCategory"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u985e\u578b. \u9ed8\u8a8d\u70ba",(0,a.kt)("code",null,"0"),"\uff1a\u666e\u901a\u8a02\u55ae; ",(0,a.kt)("code",null,"1"),"\uff1a",(0,a.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001736"},"\u6b62\u76c8\u6b62\u640d\u8a02\u55ae"),"\uff0c\u82e5\u662f\u6b62\u76c8\u6b62\u640d\u5247",(0,a.kt)("b",null,"\u5fc5\u50b3"))))),(0,a.kt)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"success"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u6210\u529f. ",(0,a.kt)("code",null,"0"),"\uff1a\u5931\u6557, ",(0,a.kt)("code",null,"1"),"\uff1a\u6210\u529f")))),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"curl --location --request POST 'https://api-testnet.bybit.com/spot/v3/private/cancel-orders' \\\n--header 'X-BAPI-SIGN: XXXXX' \\\n--header 'X-BAPI-API-KEY: {api key}' \\\n--header 'X-BAPI-TIMESTAMP: 1659078150737' \\\n--header 'X-BAPI-RECV-WINDOW: 5000' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"symbol\": \"BTCUSDT\",\n    \"side\": \"Buy\",\n    \"orderTypes\": \"LIMIT,LIMIT_MAKER\"\n}'\n")),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "success": "1"\n    },\n    "retExtInfo": {},\n    "time": 1659080154042\n}\n')))}d.isMDXComponent=!0}}]);