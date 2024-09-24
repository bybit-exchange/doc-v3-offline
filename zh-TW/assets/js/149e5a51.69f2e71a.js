"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6098],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=s(n),u=a,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return n?r.createElement(g,i(i({ref:e},c),{},{components:n})):r.createElement(g,i({ref:e},c))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26055:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u67e5\u8a62\u4fdd\u8b49\u91d1\u5e63\u7a2e\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u4fdd\u8b49\u91d1\u5e63\u7a2e\u4fe1\u606f",slug:"/spot/margin/margin-data"},i=void 0,o={unversionedId:"v3/spot/rest-spot-margin/margin-data",id:"v3/spot/rest-spot-margin/margin-data",title:"\u67e5\u8a62\u4fdd\u8b49\u91d1\u5e63\u7a2e\u4fe1\u606f",description:"\u9019\u662f\u500b\u516c\u5171\u63a5\u53e3\uff0c\u4e0d\u9700\u8981\u9452\u6b0a",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/spot/rest-spot-margin/margin-data.mdx",sourceDirName:"v3/spot/rest-spot-margin",slug:"/spot/margin/margin-data",permalink:"/doc-v3-offline/zh-TW/spot/margin/margin-data",draft:!1,tags:[],version:"current",frontMatter:{title:"\u67e5\u8a62\u4fdd\u8b49\u91d1\u5e63\u7a2e\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u4fdd\u8b49\u91d1\u5e63\u7a2e\u4fe1\u606f",slug:"/spot/margin/margin-data"},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u5229\u7387\u53ca\u984d\u5ea6",permalink:"/doc-v3-offline/zh-TW/spot/margin/interest"},next:{title:"\u67e5\u8a62\u9084\u6b3e\u8a02\u55ae\u4fe1\u606f",permalink:"/doc-v3-offline/zh-TW/spot/margin/repay-history"}},p={},s=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],c={toc:s};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u9019\u662f\u500b\u516c\u5171\u63a5\u53e3\uff0c\u4e0d\u9700\u8981\u9452\u6b0a")),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/spot/v3/public/cross-margin-bond-data")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e\u540d\u7a31")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"list"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> coin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e\u540d\u7a31")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> conversionRate"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6298\u7b97\u7387, \u8fd4\u56de\u70ba\u5be6\u969b\u6578\u503c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> liquidationOrder"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f37\u5e73\u9806\u5e8f")))),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"GET /spot/v3/public/cross-margin-bond-data?coin=ETH HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-API-KEY: XXXXXX\nX-BAPI-TIMESTAMP: 1677750396890\nX-BAPI-RECV-WINDOW: 5000\nX-BAPI-SIGN: XXXXXX\n")),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "list": [\n            {\n                "coin": "ETH",\n                "conversionRate": "0.95",\n                "liquidationOrder": 2\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1677750397414\n}\n')))}d.isMDXComponent=!0}}]);