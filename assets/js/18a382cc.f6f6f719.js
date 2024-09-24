"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7811],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),k=d(a),u=r,c=k["".concat(o,".").concat(u)]||k[u]||m[u]||i;return a?n.createElement(c,l(l({ref:e},s),{},{components:a})):n.createElement(c,l({ref:e},s))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},96921:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={title:"Get API Key Information",sidebar_label:"Get API Key Information",sidebar_position:5,slug:"/account-asset/apikey-info"},l=void 0,p={unversionedId:"v3/account-asset/user/apikey-info",id:"v3/account-asset/user/apikey-info",title:"Get API Key Information",description:"Get the information of the api key. Use the api key pending to be checked to call the endpoint. Both master and sub user's api key are applicable.",source:"@site/docs/v3/account-asset/user/apikey-info.mdx",sourceDirName:"v3/account-asset/user",slug:"/account-asset/apikey-info",permalink:"/offline/account-asset/apikey-info",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Get API Key Information",sidebar_label:"Get API Key Information",sidebar_position:5,slug:"/account-asset/apikey-info"},sidebar:"v3SideBar",previous:{title:"Froze Sub UID",permalink:"/offline/account-asset/froze-subuid"},next:{title:"Get UID Wallet Type",permalink:"/offline/account-asset/wallet-type"}},o={},d=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],s={toc:d};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Get the information of the api key. Use the api key pending to be checked to call the endpoint. Both ",(0,r.kt)("strong",{parentName:"p"},"master and sub user's api key")," are applicable."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Any permission can access this endpoint.")),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/user/v3/private/query-api")),(0,r.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("p",null,"None"),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique id. Internal used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"note"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The remark")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"apiKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Api key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"readOnly"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0"),"\uff1aRead and Write. ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"\uff1aRead only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"secret"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Always ",(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"permissions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"The types of permission")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> ContractTrade"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission of contract trade")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Spot"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission of spot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Wallet"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission of wallet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission of USDC Contract. It supports trade option and usdc perpetual.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Derivatives"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission of derivatives")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> CopyTrading"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission of copytrade. Not applicable to sub account, always ",(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> BlockTrade"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission of blocktrade. Not applicable to sub account, always ",(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Exchange"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission of exchange")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> NFT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission of NFT. Not applicable to sub account, always ",(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ips"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"IP bound")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of api key. ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"\uff1apersonal, ",(0,r.kt)("inlineCode",{parentName:"td"},"2"),"\uff1aconnected to the third-party app")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"deadlineDay"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The remaining valid days of api key. Only for those api key with no IP bound or the password has been changed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"expiredAt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"The expiry day of the api key. Only for those api key with no IP bound or the password has been changed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"createdAt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"The create day of the api key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"unified"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the account to which the api key belongs is a unified account. ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),"\uff1aregular account; ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"\uff1aunified margin account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uta"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the account to which the account upgrade to unified trade account. ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),"\uff1aregular account; ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"\uff1aunified trade account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"userID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"User ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"inviterID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Inviter ID (the UID of the account which invited this account to the platform)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"vipLevel"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"VIP Level")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"mktMakerLevel"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Market maker level")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"affiliateID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Affiliate Id. ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," represents that there is no binding relationship.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"rsaPublicKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Rsa public key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"isMaster"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If this api key belongs to master account or not")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"parentUid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The main account uid. Returns ",(0,r.kt)("inlineCode",{parentName:"td"},'"0"')," when the endpoint is called by main account")))),(0,r.kt)("h3",{id:"request-example"},"Request Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /user/v3/private/query-api HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: xxxxxxxxxxxxx\nX-BAPI-API-KEY: xxxxxxxxxxxxx\nX-BAPI-TIMESTAMP: 1671177977555\nX-BAPI-RECV-WINDOW: 50000\n")),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "",\n    "result": {\n        "id": "13770661",\n        "note": "XXXXXX",\n        "apiKey": "XXXXXX",\n        "readOnly": 0,\n        "secret": "",\n        "permissions": {\n            "ContractTrade": [\n                "Order",\n                "Position"\n            ],\n            "Spot": [\n                "SpotTrade"\n            ],\n            "Wallet": [\n                "AccountTransfer",\n                "SubMemberTransfer"\n            ],\n            "Options": [\n                "OptionsTrade"\n            ],\n            "Derivatives": [\n                "DerivativesTrade"\n            ],\n            "CopyTrading": [\n                "CopyTrading"\n            ],\n            "BlockTrade": [],\n            "Exchange": [\n                "ExchangeHistory"\n            ],\n            "NFT": [\n                "NFTQueryProductList"\n            ]\n        },\n        "ips": [\n            "*"\n        ],\n        "type": 1,\n        "deadlineDay": 83,\n        "expiredAt": "2023-05-15T03:21:05Z",\n        "createdAt": "2022-10-16T02:24:40Z",\n        "unified": 0,\n        "uta": 0,\n        "userID": 24600000,\n        "inviterID": 0,\n        "vipLevel": "No VIP",\n        "mktMakerLevel": "0",\n        "affiliateID": 0,\n        "rsaPublicKey": "",\n        "isMaster": false,\n        "parentUid": "24617703"\n    },\n    "retExtInfo": {},\n    "time": 1676891757649\n}\n')))}m.isMDXComponent=!0}}]);