"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=u(n),s=i,N=k["".concat(p,".").concat(s)]||k[s]||d[s]||a;return n?l.createElement(N,r(r({ref:t},m),{},{components:n})):l.createElement(N,r({ref:t},m))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<a;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},48503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var l=n(87462),i=(n(67294),n(3905));const a={title:"Enums Definitions",sidebar_label:"Enums Definitions",slug:"/spot/enum"},r=void 0,o={unversionedId:"v3/spot/enum",id:"v3/spot/enum",title:"Enums Definitions",description:"side",source:"@site/docs/v3/spot/enum.mdx",sourceDirName:"v3/spot",slug:"/spot/enum",permalink:"/doc-v3-offline/spot/enum",draft:!1,tags:[],version:"current",frontMatter:{title:"Enums Definitions",sidebar_label:"Enums Definitions",slug:"/spot/enum"},sidebar:"v3SideBar",previous:{title:"Rate Limit",permalink:"/doc-v3-offline/spot/rate-limit"},next:{title:"Error Code",permalink:"/doc-v3-offline/spot/error"}},p={},u=[{value:"side",id:"side",level:3},{value:"timeInForce",id:"timeinforce",level:3},{value:"symbol",id:"symbol",level:3},{value:"orderType",id:"ordertype",level:3},{value:"currency/coin",id:"currencycoin",level:3},{value:"orderStatus",id:"orderstatus",level:3},{value:"interval",id:"interval",level:3},{value:"ltStatus",id:"ltstatus",level:3},{value:"ltOrderStatus",id:"ltorderstatus",level:3},{value:"ltOrderType",id:"ltordertype",level:3},{value:"smpType",id:"smptype",level:3}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"side"},"side"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BUY")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SELL"))),(0,i.kt)("h3",{id:"timeinforce"},"timeInForce"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GTC"),"\u2003","Good Till Cancel"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FOK"),"\u2003","Fill or Kill"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IOC"),"\u2003","Immediate or Cancel")),(0,i.kt)("h3",{id:"symbol"},"symbol"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BTCUSDT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ETHUSDT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BTCUSDC")),(0,i.kt)("li",{parentName:"ul"},"...",(0,i.kt)("br",null),"\nYou can get all symbols with the ",(0,i.kt)("a",{parentName:"li",href:"/spot/public/instrument"},"instrument")," endpoint.")),(0,i.kt)("h3",{id:"ordertype"},"orderType"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MARKET")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LIMIT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LIMIT_MAKER"))),(0,i.kt)("h3",{id:"currencycoin"},"currency/coin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BTC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ETH")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"USDT")),(0,i.kt)("li",{parentName:"ul"},"...")),(0,i.kt)("p",null,"Cross Margin Trading Endpoints support below currency:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BTC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ETH")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"XRP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SOL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LTC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EOS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LINK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"XLM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"USDC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"USDT"),"\nYou could find all supported coins of margin trade ",(0,i.kt)("a",{href:"https://www.bybit.com/en-US/trade/spot/leverage/vip"},"here"),".")),(0,i.kt)("h3",{id:"orderstatus"},"orderStatus"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NEW"),"\u2003","normal order is placed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ORDER_NEW"),"\u2003","TP/SL order is placed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PARTIALLY_FILLED")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FILLED")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ORDER_FILLED"),"\u2003","TP/SL order is filled"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CANCELED"),"\u2003","normal order is cancelled"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ORDER_CANCELED"),"\u2003","TP/SL order is cancelled"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REJECTED")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ORDER_REJECTED"),"\u2003","TP/SL order is cancelled"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PARTIALLY_FILLED_CANCELED")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ORDER_FAILED"),"\u2003","TP/SL order is failed")),(0,i.kt)("h3",{id:"interval"},"interval"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1m"),"\u2003","1 minute"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"3m"),"\u2003","3 minutes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"5m"),"\u2003","5 minutes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"15m"),"\u2003","15 minutes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"30m"),"\u2003","30 minutes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1h"),"\u2003","1 hour"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2h"),"\u2003","2 hours"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"4h"),"\u2003","4 hours"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"6h"),"\u2003","6 hours"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"12h"),"\u2003","12 hours"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1d"),"\u2003","1 day"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1w"),"\u2003","1 week"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1M"),"\u2003","1 month")),(0,i.kt)("h3",{id:"ltstatus"},"ltStatus"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1"),"\u2003","ETP can be purchased and redeemed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2"),"\u2003","ETP can be purchased, but not redeemed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"3"),"\u2003","ETP can be redeemed, but not purchased"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"4"),"\u2003","ETP cannot be purchased nor redeemed")),(0,i.kt)("h3",{id:"ltorderstatus"},"ltOrderStatus"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1"),"\u2003","Completed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2"),"\u2003","In progress"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"3"),"\u2003","Failed")),(0,i.kt)("h3",{id:"ltordertype"},"ltOrderType"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1"),"\u2003","Purchase"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2"),"\u2003","Redemption")),(0,i.kt)("h3",{id:"smptype"},"smpType"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"default: ",(0,i.kt)("inlineCode",{parentName:"li"},"None")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CancelMaker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CancelTaker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CancelBoth"))))}d.isMDXComponent=!0}}]);