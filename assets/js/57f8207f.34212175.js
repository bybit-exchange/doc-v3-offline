"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[5309],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=p(n),u=r,g=k["".concat(s,".").concat(u)]||k[u]||m[u]||i;return n?a.createElement(g,l(l({ref:e},d),{},{components:n})):a.createElement(g,l({ref:e},d))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},97470:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Position",sidebar_label:"Position",sidebar_position:1,slug:"/derivatives/ws-contract/position"},l=void 0,o={unversionedId:"v3/derivatives/wss-contract/position",id:"v3/derivatives/wss-contract/position",title:"Position",description:"Subscribe to the position stream to see changes to your position size, position setting changes, etc.",source:"@site/docs/v3/derivatives/wss-contract/position.mdx",sourceDirName:"v3/derivatives/wss-contract",slug:"/derivatives/ws-contract/position",permalink:"/doc-v3-offline/derivatives/ws-contract/position",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Position",sidebar_label:"Position",sidebar_position:1,slug:"/derivatives/ws-contract/position"},sidebar:"v3SideBar",previous:{title:"Greek",permalink:"/doc-v3-offline/derivatives/ws-unified/greek"},next:{title:"Execution",permalink:"/doc-v3-offline/derivatives/ws-contract/execution"}},s={},p=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Stream Example",id:"stream-example",level:3}],d={toc:p};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Subscribe to the position stream to see changes to your position size, position setting changes, etc."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Covers: USDT Perpetual, Inverse Perpetual, Inverse Future"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Topic:"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"user.position.contractAccount")),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Topic name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> riskId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Risk limit id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> riskLimitValue"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Risk limit value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> side"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Side. ",(0,r.kt)("inlineCode",{parentName:"td"},"Buy"),",",(0,r.kt)("inlineCode",{parentName:"td"},"Sell"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> size"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> entryPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Average entry price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> positionValue"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Entry position value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> ",(0,r.kt)("a",{parentName:"td",href:"../enum#positionidx"},"positionIdx")),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Position idx, used to identify positions in different position modes",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"0"),": One-Way Mode"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"1"),": Buy side of both side mode"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"2"),": Sell side of both side mode")," "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> tradeMode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Trade mode. ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),": cross margin, ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),": isolated margin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> autoAddMargin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Auto add margin. ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),": false, ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),": true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> leverage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position leverage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> positionBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position margin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> markPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Mark price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> liqPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Liquidation price. It returns value only when minPrice < liqPrice < maxPrice")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> bustPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Bankruptcy price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> tpSlMode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'Depreciated, meaningless here, always "Full"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> takeProfit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Take profit price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> stopLoss"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Stop loss price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> trailingStop"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Trailing stop")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> activePrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Trailing stop trigger price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> unrealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Unrealised PnL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> cumRealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Cumulative realized P&L")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> occClosingFee"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position closing fee occupied")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> sessionAvgPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Settlement price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> positionStatus"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> positionMM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position Initial margin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> positionIM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position Maintenance margin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> createdTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position created timestamp (ms)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> updatedTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position data updated timestamp (ms)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> ",(0,r.kt)("a",{parentName:"td",href:"../enum#adlrankindicator"},"adlRankIndicator")),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Auto-deleverage rank indicator. ",(0,r.kt)("a",{href:"https://www.bybit.com/en-US/help-center/s/article/What-is-Auto-Deleveraging-ADL"},"What is Auto-Deleveraging?"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> isReduceOnly"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Useful when Bybit lower the risk limit ",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"true"),": Only allowed to reduce the position. You can consider a series of measures, e.g., lower the risk limit, decrease leverage or reduce the position, add margin, or cancel orders, after these operations, you can call ",(0,r.kt)("a",{parentName:"td",href:"../contract/confirm-mmr#"},"confirm new risk limit")," endpoint to check if your position can be removed the reduceOnly mark"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"false"),": There is no restriction, and it means your position is under the risk when the risk limit is systematically adjusted"),(0,r.kt)("li",null,"Only meaningful for isolated margin & cross margin of USDT Perp, USDC Perp, USDC Futures, Inverse Perp and Inverse Futures, meaningless for others")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> mmrSysUpdatedTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Useful when Bybit lower the risk limit ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"When isReduceOnly=",(0,r.kt)("inlineCode",{parentName:"td"},"true"),": the timestamp (ms) when the MMR will be forcibly adjusted by the system"),"When isReduceOnly=",(0,r.kt)("inlineCode",{parentName:"td"},"false"),": the timestamp when the MMR had been adjusted by system",(0,r.kt)("li",null,"It returns the timestamp when the system operates, and if you manually operate, there is no timestamp"),(0,r.kt)("li",null,"Keeps ",(0,r.kt)("inlineCode",{parentName:"td"},'""')," by default, if there was a lower risk limit system adjustment previously, it shows that system operation timestamp"),(0,r.kt)("li",null,"Only meaningful for isolated margin & cross margin of USDT Perp, USDC Perp, USDC Futures, Inverse Perp and Inverse Futures, meaningless for others")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> leverageSysUpdatedTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Useful when Bybit lower the risk limit ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"When isReduceOnly=",(0,r.kt)("inlineCode",{parentName:"td"},"true"),": the timestamp (ms) when the leverage will be forcibly adjusted by the system"),"When isReduceOnly=",(0,r.kt)("inlineCode",{parentName:"td"},"false"),": the timestamp when the leverage had been adjusted by system",(0,r.kt)("li",null,"It returns the timestamp when the system operates, and if you manually operate, there is no timestamp"),(0,r.kt)("li",null,"Keeps ",(0,r.kt)("inlineCode",{parentName:"td"},'""')," by default, if there was a lower risk limit system adjustment previously, it shows that system operation timestamp"),(0,r.kt)("li",null,"Only meaningful for isolated margin & cross margin of USDT Perp, USDC Perp, USDC Futures, Inverse Perp and Inverse Futures, meaningless for others")))))),(0,r.kt)("h3",{id:"stream-example"},"Stream Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "user.position.contractAccount",\n    "data": [\n        {\n            "positionIdx": 0,\n            "riskId": 1,\n            "symbol": "ARBUSDT",\n            "side": "None",\n            "size": "0",\n            "positionValue": "0",\n            "entryPrice": "0",\n            "tradeMode": 0,\n            "autoAddMargin": 0,\n            "leverage": "10",\n            "positionBalance": "0",\n            "liqPrice": "",\n            "bustPrice": "0.0000",\n            "takeProfit": "0.0000",\n            "stopLoss": "0.0000",\n            "trailingStop": "0.0000",\n            "unrealisedPnl": "0",\n            "createdTime": "1695115891722",\n            "updatedTime": "1697686565866",\n            "tpSlMode": "Full",\n            "sessionAvgPrice": "0.0000",\n            "positionStatus": "Normal",\n            "occClosingFee": "0",\n            "markPrice": "0.7747",\n            "cumRealisedPnl": "21.84890946",\n            "activePrice": "0.0000",\n            "riskLimitValue": "200000",\n            "positionMM": "0",\n            "positionIM": "0",\n            "adlRankIndicator": 0,\n            "isReduceOnly": false,\n            "mmrSysUpdateTime": "",\n            "leverageSysUpdatedTime": ""\n        }\n    ]\n}\n')))}m.isMDXComponent=!0}}]);