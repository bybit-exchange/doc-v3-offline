"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6295],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=n,f=c["".concat(d,".").concat(u)]||c[u]||m[u]||l;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},91593:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={title:"Get Wallet Fund Records",sidebar_label:"Get Wallet Fund Records",sidebar_position:3,slug:"/derivatives/contract/wallet-fund"},i=void 0,o={unversionedId:"v3/derivatives/rest-contract/account/wallet-fund-record",id:"v3/derivatives/rest-contract/account/wallet-fund-record",title:"Get Wallet Fund Records",description:"Get wallet fund records. This endpoint also shows exchanges from the Asset Exchange, where the types for the exchange are ExchangeOrderWithdraw and ExchangeOrderDeposit.",source:"@site/docs/v3/derivatives/rest-contract/account/wallet-fund-record.mdx",sourceDirName:"v3/derivatives/rest-contract/account",slug:"/derivatives/contract/wallet-fund",permalink:"/doc-v3-offline/derivatives/contract/wallet-fund",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Get Wallet Fund Records",sidebar_label:"Get Wallet Fund Records",sidebar_position:3,slug:"/derivatives/contract/wallet-fund"},sidebar:"v3SideBar",previous:{title:"Get Trading Fee Rate",permalink:"/doc-v3-offline/derivatives/contract/fee-rate"},next:{title:"Connect",permalink:"/doc-v3-offline/derivatives/ws/connect"}},d={},s=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],p={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Get wallet fund records. This endpoint also shows exchanges from the ",(0,n.kt)("a",{href:"https://www.bybit.com/user/assets/records/trade/exchange"},"Asset Exchange"),", where the types for the exchange are ",(0,n.kt)("inlineCode",{parentName:"p"},"ExchangeOrderWithdraw")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"ExchangeOrderDeposit"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"This endpoint returns incomplete information for transfers involving the derivatives wallet. Use the ",(0,n.kt)("a",{parentName:"li",href:"../../account-asset/internal-transfer#"},"account asset API")," for creating and querying internal transfers."),(0,n.kt)("li",{parentName:"ul"},"Find more detail for types Withdraw and Refund in the ",(0,n.kt)("a",{parentName:"li",href:"../../account-asset/withdraw-record#"},"Withdraw Records endpoint"),"."),(0,n.kt)("li",{parentName:"ul"},"Deposit or withdrawal records which occurred after ",(0,n.kt)("strong",{parentName:"li"},"2021-07-15")," will not be shown by this endpoint. To fetch records after this date you should call the ",(0,n.kt)("a",{parentName:"li",href:"../../account-asset/deposit-record"},"Query Deposit Records"),"and ",(0,n.kt)("a",{parentName:"li",href:"../../account-asset/internal-transfer#"},"Query Withdraw Records endpoint"),". This is due to the introduction of the spot wallet at this time."))),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"GET ",(0,n.kt)("inlineCode",{parentName:"p"},"/contract/v3/private/account/wallet/fund-records")),(0,n.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Coin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#walletfundtype"},"walletFundType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Fund type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"startTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Start timestamp (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"endTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"End timestamp (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[",(0,n.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"50"),"]",". Default: ",(0,n.kt)("inlineCode",{parentName:"td"},"20"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cursor. Use the ",(0,n.kt)("inlineCode",{parentName:"td"},"nextPageCursor")," token from the response to retrieve the next page of the result set")))),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> coin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Coin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#walletfundtype"},"type")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> amount"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Amount")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> walletBalance"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Wallet balance")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> execTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Executed timestamp (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"nextPageCursor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cursor. Used to pagination")))),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"GET /contract/v3/private/account/wallet/fund-records?limit=1 HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1670931970500\nX-BAPI-RECV-WINDOW: 5000\n")),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n    "list": [\n        {\n            "coin": "BTC",\n            "type": "RealisedPNL",\n            "amount": "-0.00003034",\n            "walletBalance": "0.68146653",\n            "execTime": "1665792000030"\n        }\n    ],\n    "nextPageCursor": "K2tqR0xUQ1B1Tyt1a0ZFeVZRa1I2R2ZOT2pVekNKeGZPOTEyWFNpeXd1ejRmRTFoUkhabnVKVlRBNnFtZGk0dlBhRThLdFNHTGxFdWJGQVFMdXBnZ29Bb3JmSDlkczZHV1p1V1JoZmc2dnlRc1VMZ1ZVYlRXeW51ZUVBT3QycjlYSml3alNZampKTHdrdDJzSzFWdnlWK0djRklqczB1M0JYN04wVXltV0ljPQ=="\n},\n    "retExtInfo": {},\n    "time": 1670931971341\n}\n')))}m.isMDXComponent=!0}}]);