"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1804],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(r),c=i,f=u["".concat(s,".").concat(c)]||u[c]||d[c]||a;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function c(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},60967:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={title:"Set Risk Limit",sidebar_label:"Set Risk Limit",sidebar_position:4,slug:"/derivatives/unified/risk-limit"},l=void 0,o={unversionedId:"v3/derivatives/rest-unified/position/set-risk-limit",id:"v3/derivatives/rest-unified/position/set-risk-limit",title:"Set Risk Limit",description:"The risk limit will limit the maximum position value you can hold under different margin requirements.",source:"@site/docs/v3/derivatives/rest-unified/position/set-risk-limit.mdx",sourceDirName:"v3/derivatives/rest-unified/position",slug:"/derivatives/unified/risk-limit",permalink:"/offline/derivatives/unified/risk-limit",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Set Risk Limit",sidebar_label:"Set Risk Limit",sidebar_position:4,slug:"/derivatives/unified/risk-limit"},sidebar:"v3SideBar",previous:{title:"Switch TP/SL Mode",permalink:"/offline/derivatives/unified/tp-sl-mode"},next:{title:"Set Trading Stop",permalink:"/offline/derivatives/unified/trading-stop"}},s={},p=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The risk limit will limit the maximum position value you can hold under different margin requirements.\nIf you want to hold a bigger position size, you need more margin. This interface can set the risk limit of a single\nposition. If the order exceeds the current risk limit when placing an order, it will be rejected. Click ",(0,i.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001164"},"here")," to learn more about risk limit."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Set the risk limit of the position. You could get risk limit information of each symbol ",(0,i.kt)("a",{parentName:"p",href:"../public/risk-limit#"},"here"),".")),(0,i.kt)("h3",{id:"http-request"},"HTTP Request"),(0,i.kt)("p",null,"POST ",(0,i.kt)("inlineCode",{parentName:"p"},"/unified/v3/private/position/set-risk-limit")),(0,i.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Product type. ",(0,i.kt)("inlineCode",{parentName:"td"},"linear")," ",(0,i.kt)("strong",{parentName:"td"},"only"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"riskId"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"Risk id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"positionIdx"),(0,i.kt)("td",{parentName:"tr",align:"left"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"Position index. ",(0,i.kt)("inlineCode",{parentName:"td"},"0"),": one-way mode")))),(0,i.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,i.kt)("p",null,"None"),(0,i.kt)("h3",{id:"request-example"},"Request Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'POST /unified/v3/private/position/set-risk-limit HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672016123862\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n\n{\n    "category": "linear",\n    "symbol": "BTCUSDT",\n    "riskId": 2,\n    "positionIdx": 0\n}\n')),(0,i.kt)("h3",{id:"response-example"},"Response Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "",\n    "result": {},\n    "retExtInfo": {},\n    "time": 1672016125676\n}\n')))}d.isMDXComponent=!0}}]);