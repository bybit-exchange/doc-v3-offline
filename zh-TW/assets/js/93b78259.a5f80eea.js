"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6559],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),u=m(n),s=r,N=u["".concat(o,".").concat(s)]||u[s]||d[s]||l;return n?a.createElement(N,i(i({ref:e},k),{},{components:n})):a.createElement(N,i({ref:e},k))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37656:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u6982\u89bd",sidebar_name:"\u6982\u89bd"},i=void 0,p={unversionedId:"v3/intro",id:"v3/intro",title:"\u6982\u89bd",description:"Bybit V3 Open API \u80fd\u7d66\u8b93\u7528\u6236\u57fa\u65bc\u4e0d\u540c\u7684\u7522\u54c1\u69cb\u5efaAPI\u6a21\u578b\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/intro.mdx",sourceDirName:"v3",slug:"/v3/intro",permalink:"/doc-v3-offline/zh-TW/v3/intro",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6982\u89bd",sidebar_name:"\u6982\u89bd"},sidebar:"v3SideBar",next:{title:"Bybit\u670d\u52d9\u5668\u6642\u9593",permalink:"/doc-v3-offline/zh-TW/v3/server-time"}},o={},m=[{value:"\u9452\u6b0a/\u8a8d\u8b49",id:"\u9452\u6b0a\u8a8d\u8b49",level:2},{value:"\u9078\u64c7\u7528\u65bc\u9452\u6b0a\u7684API\u5bc6\u9470\u985e\u578b",id:"\u9078\u64c7\u7528\u65bc\u9452\u6b0a\u7684api\u5bc6\u9470\u985e\u578b",level:3},{value:"\u516c\u5171\u53c3\u6578",id:"\u516c\u5171\u53c3\u6578",level:3},{value:"\u69cb\u5efa\u8acb\u6c42",id:"\u69cb\u5efa\u8acb\u6c42",level:3},{value:"\u5916\u5c64\u901a\u7528\u6578\u64da\u7d50\u69cb",id:"\u5916\u5c64\u901a\u7528\u6578\u64da\u7d50\u69cb",level:2},{value:"\u884d\u751f\u54c1",id:"\u884d\u751f\u54c1",level:3},{value:"\u73fe\u8ca8",id:"\u73fe\u8ca8",level:3},{value:"\u5e33\u6236\u8cc7\u7522",id:"\u5e33\u6236\u8cc7\u7522",level:3}],k=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},d=k("Tabs"),u=k("TabItem"),s={toc:m};function N(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Bybit V3 Open API \u80fd\u7d66\u8b93\u7528\u6236\u57fa\u65bc\u4e0d\u540c\u7684\u7522\u54c1\u69cb\u5efaAPI\u6a21\u578b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u884d\u751f\u54c1 - \u5408\u7d04:")," \u60a8\u53ef\u4ee5\u901a\u904e",(0,r.kt)("inlineCode",{parentName:"li"},"contract/v3"),"\u63a5\u53e3\u4ea4\u6613",(0,r.kt)("em",{parentName:"li"},"USDT\u6c38\u7e8c"),", ",(0,r.kt)("em",{parentName:"li"},"\u53cd\u5411\u6c38\u7e8c"),", ",(0,r.kt)("em",{parentName:"li"},"\u53cd\u5411\u4ea4\u5272"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u73fe\u8ca8:")," \u60a8\u53ef\u4ee5\u901a\u904e",(0,r.kt)("inlineCode",{parentName:"li"},"spot/v3"),"\u4ea4\u6613\u73fe\u8ca8\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5e33\u6236\u8cc7\u7522:")," \u6d89\u53ca\u4e86\u5283\u8f49\u3001\u63d0\u73fe\u3001\u5bc6\u9470\u76f8\u95dc\u7b49\u63a5\u53e3\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7a05\u52d9:")," \u60a8\u53ef\u4ee5\u901a\u904e\u9019\u90e8\u5206\u63a5\u53e3\u751f\u6210\u7a05\u52d9\u76f8\u95dc\u7684\u5831\u544a\u3002")),(0,r.kt)("h2",{id:"\u9452\u6b0a\u8a8d\u8b49"},"\u9452\u6b0a/\u8a8d\u8b49"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8acb\u5148\u751f\u6210",(0,r.kt)("a",{href:"https://testnet.bybit.com/app/user/api-management"},(0,r.kt)("b",null,"\u6e2c\u8a66\u7db2")),"\u6216",(0,r.kt)("a",{href:"https://www.bybit.com/app/user/api-management"},(0,r.kt)("b",null,"\u4e3b\u7db2")),"API KEY\u3002")),(0,r.kt)("p",null,"REST\u63a5\u53e3\u6839URL:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6e2c\u8a66\u7db2:"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"li",href:"https://api-testnet.bybit.com"},"https://api-testnet.bybit.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4e3b\u7db2"),"(\u8acb\u6839\u64da\u60a8\u7684\u7db2\u7d61\u60c5\u6cc1\u9078\u64c7\u4ee5\u4e0b\u4efb\u610f\u4e00\u500b\u5730\u5740\u4f7f\u7528):",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"li",href:"https://api.bybit.com"},"https://api.bybit.com"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"li",href:"https://api.bytick.com"},"https://api.bytick.com"))),(0,r.kt)("h3",{id:"\u9078\u64c7\u7528\u65bc\u9452\u6b0a\u7684api\u5bc6\u9470\u985e\u578b"},"\u9078\u64c7\u7528\u65bc\u9452\u6b0a\u7684API\u5bc6\u9470\u985e\u578b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7cfb\u7d71\u751f\u7522\u7684API\u5bc6\u9470"),": Bybit \u7cfb\u7d71\u751f\u6210\u7684 API \u5bc6\u9470\u57fa\u65bc HMAC \u5c0d\u7a31\u52a0\u5bc6\u7b97\u6cd5\u904b\u4f5c\u3002\u60a8\u5c07\u7372\u5f97\u4e00\u5c0d\u516c\u9470\u548c\u79c1\u9470\u3002\u8acb\u5c07\u9019\u5c0d\u5bc6\u9470\u8996\u70ba\u5bc6\u78bc\u4e00\u6a23\u59a5\u5584\u4fdd\u7ba1\u3002"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u8ddf\u96a8",(0,r.kt)("a",{href:"https://github.com/bybit-exchange/api-usage-examples"},"HMAC\u7c3d\u540d\u793a\u4f8b"),"\u4f86\u5b8c\u6210\u52a0\u5bc6\u904e\u7a0b\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u81ea\u52d5\u751f\u6210\u7684API\u5bc6\u9470"),": \u81ea\u52d5\u751f\u6210\u7684 API \u5bc6\u9470\u57fa\u65bc RSA \u975e\u5c0d\u7a31\u52a0\u5bc6\u7b97\u6cd5\u904b\u4f5c\u3002\u60a8\u5fc5\u9808\u901a\u904e\u8edf\u4ef6\u81ea\u884c\u5275\u5efa\u516c\u9470\u548c\u79c1\u9470\uff0c\u7136\u5f8c\u50c5\u5411 Bybit \u63d0\u4f9b\u516c\u9470\u3002Bybit \u4e0d\u6703\u66ff\u60a8\u4fdd\u7ba1\u79c1\u9470\u3002"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"1.\u4f7f\u7528\u958b\u6e90\u7684",(0,r.kt)("a",{href:"https://github.com/bybit-exchange/api-rsa-generator"},"RSA\u5bc6\u9470\u5c0d\u5275\u5efa\u5668"),"\u4f86\u5275\u5efa\u51fa\u4e00\u7d44RSA\u5bc6\u9470\u5c0d",(0,r.kt)("br",null),"2.\u8ddf\u96a8",(0,r.kt)("a",{href:"https://github.com/bybit-exchange/api-usage-examples"},"RSA\u7c3d\u540d\u793a\u4f8b"),"\u4f86\u5b8c\u6210\u52a0\u5bc6\u904e\u7a0b\u3002")))),(0,r.kt)("h3",{id:"\u516c\u5171\u53c3\u6578"},"\u516c\u5171\u53c3\u6578"),(0,r.kt)("p",null,"\u9700\u8981\u7c3d\u540d\u7684\u63a5\u53e3\u5fc5\u9808\u5305\u542b\u4ee5\u4e0bhttp\u982d\u53c3\u6578:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-BAPI-API-KEY")," - api\u5bc6\u9470"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-BAPI-TIMESTAMP")," - UTC\u6beb\u79d2\u6642\u9593\u6233"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-BAPI-SIGN")," - \u8acb\u6c42\u53c3\u6578\u7c3d\u540d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-Referer")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Referer")," - \u7d93\u7d00\u5546\u7528\u6236\u5c08\u7528\u7684\u982d\u53c3\u6578",(0,r.kt)("br",null))),(0,r.kt)("p",null,"\u53e6\u5916\u6211\u5011\u63d0\u4f9b\u53ef\u9078\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"X-BAPI-RECV-WINDOW"),"\u53c3\u6578\uff08\u55ae\u4f4d\u662f\u6beb\u79d2\uff0c\u9ed8\u8a8d\u503c\u70ba",(0,r.kt)("inlineCode",{parentName:"p"},"5000"),"\uff09\uff0c\u4f86\u6307\u5b9a\u8acb\u6c42\u5728\u591a\u9577\u6642\u9593\u5167\u6709\u6548\uff0c\u540c\u6642\u7528\u4f86\u9632\u6b62\u91cd\u653e\u653b\u64ca\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u8a3b\u610f\uff0ctimestamp\u53c3\u6578\u5fc5\u9808\u7b26\u5408\u5982\u4e0b\u898f\u5247:",(0,r.kt)("br",null),"\n",(0,r.kt)("em",{parentName:"p"},"server_time - recv_window <= timestamp < server_time + 1000"),(0,r.kt)("br",null),"\n\u5176\u4e2dserver_time\u662fBybit\u670d\u52d9\u5668\u6642\u9593\uff0c\u60a8\u53ef\u4ee5\u901a\u904e",(0,r.kt)("a",{parentName:"p",href:"server-time#"},"Bybit\u670d\u52d9\u5668\u6642\u9593"),"\u63a5\u53e3\u7372\u53d6.")),(0,r.kt)("h3",{id:"\u69cb\u5efa\u8acb\u6c42"},"\u69cb\u5efa\u8acb\u6c42"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u70ba\u4e86\u5e6b\u52a9\u8a3a\u65b7\u9ad8\u7d1a\u7db2\u7d61\u554f\u984c\uff0c\u60a8\u53ef\u4ee5\u8003\u616e\u5c07",(0,r.kt)("inlineCode",{parentName:"p"},"cdn-request-id"),"\u6dfb\u52a0\u5230\u60a8\u7684\u8acb\u6c42\u982d\u4e2d\u3002\u5c0d\u65bc\u6bcf\u500b\u8acb\u6c42\uff0c\u5b83\u7684\u503c\u61c9\u8a72\u662f\u552f\u4e00\u7684\u3002.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("a",{href:"https://github.com/bybit-exchange/api-usage-examples"},"\u7c3d\u540d\u8a08\u7b97\u793a\u4f8b")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u57fa\u672c\u6b65\u9a5f:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6642\u9593\u6233 + api-key + ","[recv_window]","+ ","[queryString(\u7121\u9700\u6392\u5e8f) | jsonBodyString]",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,r.kt)("strong",{parentName:"li"},"HMAC_SHA256"),"\u6216\u8005",(0,r.kt)("strong",{parentName:"li"},"RSA_SHA256"),"\u7b97\u6cd5\u5c0d\u7b2c1\u6b65\u4e2d\u62fc\u63a5\u7684string\u7c3d\u540d\uff0c\u4e26\u8f49\u63db\u70ba16\u9032\u88fd\u5b57\u7b26\u4e32(HMAC_SHA256) / Base64\u7de8\u78bc (RSA_SHA256)\uff0c\u5f97\u51fasign\u53c3\u6578\u3002",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u751f\u6210\u7684\u7c3d\u540d\u5230HTTP\u982d\u7576\u4e2d\n",(0,r.kt)("strong",{parentName:"li"},"\u6ce8\u610f:")," ",(0,r.kt)("strong",{parentName:"li"},"GET"),"\u548c",(0,r.kt)("strong",{parentName:"li"},"POST"),"\u8acb\u6c42\u7684\u52a0\u5bc6\u660e\u6587\u662f\u4e0d\u76f8\u540c\uff0c\u8acb\u53c3\u8003\u4ee5\u4e0b\u793a\u4f8b.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5c0d\u660e\u6587\u52a0\u5bc6\u7684\u793a\u4f8b")),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(u,{value:"GET",label:"GET",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# \u62fc\u63a5\u898f\u5247:\ntimestamp+api_key+recv_window+queryString\n\n# \u660e\u6587\n"1658384314791XXXXXXXXXX5000category=option&symbol=BTC-29JUL22-25000-C"\n\n# \u89e3\u6790\ntimestamp = "1658384314791"\napi_key = "XXXXXXXXXX"\nrecv_window = "5000"\nqueryString = "category=option&symbol=BTC-29JUL22-25000-C"\n'))),(0,r.kt)(u,{value:"POST",label:"POST",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# \u62fc\u63a5\u898f\u5247:\ntimestamp+api_key+recv_window+raw_request_body\n\n# \u660e\u6587\n1658385579423XXXXXXXXXX5000{\n"category": "option"\n}\n\n# \u89e3\u6790\ntimestamp = 1658385579423\napi_key = XXXXXXXXXX\nrecv_window = 5000\nraw_request_body = {"category": "option"}\n')))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"http\u8acb\u6c42\u793a\u4f8b")),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(u,{value:"http-get",label:"http-get",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /unified/v3/private/order/list?category=option&symbol=BTC-29JUL22-25000-C HTTP/1.1\nHost: api-testnet.bybit.com\n-H 'X-BAPI-SIGN: XXXXXXXXXX' \\\n-H 'X-BAPI-API-KEY: XXXXXXXXXX' \\\n-H 'X-BAPI-TIMESTAMP: 1658384431891' \\\n-H 'X-BAPI-RECV-WINDOW: 5000'\n"))),(0,r.kt)(u,{value:"http-post",label:"http-post",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"POST /unified/v3/private/order/cancel-all HTTP/1.1\nHost: api-testnet.bybit.com\n-H 'X-Referer: XXXXXXXXXX' \\ [\u7d93\u7d00\u5546\u7528\u6236\u5c08\u7528\u7684\u982d\u53c3\u6578]\n-H 'X-BAPI-SIGN: XXXXXXXXXX' \\\n-H 'X-BAPI-API-KEY: XXXXXXXXXX' \\\n-H 'X-BAPI-TIMESTAMP: 1658385589135' \\\n-H 'X-BAPI-RECV-WINDOW: 5000' \\\n-H 'Content-Type: application/json' \\\n-d '{\n\"category\": \"option\"\n}'\n")))),(0,r.kt)("h2",{id:"\u5916\u5c64\u901a\u7528\u6578\u64da\u7d50\u69cb"},"\u5916\u5c64\u901a\u7528\u6578\u64da\u7d50\u69cb"),(0,r.kt)("h3",{id:"\u884d\u751f\u54c1"},"\u884d\u751f\u54c1"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retCode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u529f/\u932f\u8aa4\u78bc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retMsg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u529f/\u932f\u8aa4\u6d88\u606f. \u6210\u529f\u6d88\u606f\u53ef\u4ee5\u662f",(0,r.kt)("inlineCode",{parentName:"td"},"OK"),",",(0,r.kt)("inlineCode",{parentName:"td"},"success"),",",(0,r.kt)("inlineCode",{parentName:"td"},"SUCCESS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"result"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u696d\u52d9\u6578\u64da\u9ad4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retExtInfo"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u984d\u5916\u4fe1\u606f. \u5927\u90e8\u5206\u5834\u666f\u4e0b\u90fd\u662f",(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7576\u524d\u6642\u9593\u6233 (\u6beb\u79d2)")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n    },\n    "retExtInfo": {},\n    "time": 1671017382656\n}\n\n{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n    },\n    "retExtInfo": {},\n    "time": 1671017473888\n}\n\n{\n    "retCode": 0,\n    "retMsg": "Success",\n    "result": {\n    },\n    "retExtInfo": {},\n    "time": 1671017572923\n}\n')),(0,r.kt)("h3",{id:"\u73fe\u8ca8"},"\u73fe\u8ca8"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retCode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u529f/\u932f\u8aa4\u78bc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retMsg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u529f/\u932f\u8aa4\u6d88\u606f. \u6210\u529f\u6d88\u606f\u53ef\u4ee5\u662f",(0,r.kt)("inlineCode",{parentName:"td"},"OK"),",",(0,r.kt)("inlineCode",{parentName:"td"},"success"),",",(0,r.kt)("inlineCode",{parentName:"td"},"SUCCESS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"result"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u696d\u52d9\u6578\u64da\u9ad4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retExtInfo"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u984d\u5916\u4fe1\u606f. \u5927\u90e8\u5206\u5834\u666f\u4e0b\u90fd\u662f",(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7576\u524d\u6642\u9593\u6233 (\u6beb\u79d2)")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n    },\n    "retExtInfo": {},\n    "time": 1671017382656\n}\n\n{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n    },\n    "retExtInfo": {},\n    "time": 1671017473888\n}\n\n{\n    "retCode": 0,\n    "retMsg": "Success",\n    "result": {\n    },\n    "retExtInfo": {},\n    "time": 1671017572923\n}\n')),(0,r.kt)("h3",{id:"\u5e33\u6236\u8cc7\u7522"},"\u5e33\u6236\u8cc7\u7522"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retCode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u529f/\u932f\u8aa4\u78bc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retMsg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u529f/\u932f\u8aa4\u6d88\u606f. \u6210\u529f\u6d88\u606f\u53ef\u4ee5\u662f",(0,r.kt)("inlineCode",{parentName:"td"},"OK"),",",(0,r.kt)("inlineCode",{parentName:"td"},"success"),",",(0,r.kt)("inlineCode",{parentName:"td"},"SUCCESS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"result"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u696d\u52d9\u6578\u64da\u9ad4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retExtInfo"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u984d\u5916\u4fe1\u606f. \u5927\u90e8\u5206\u5834\u666f\u4e0b\u90fd\u662f",(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7576\u524d\u6642\u9593\u6233 (\u6beb\u79d2)")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n    },\n    "retExtInfo": {},\n    "time": 1671017382656\n}\n\n{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n    },\n    "retExtInfo": {},\n    "time": 1671017473888\n}\n\n{\n    "retCode": 0,\n    "retMsg": "Success",\n    "result": {\n    },\n    "retExtInfo": {},\n    "time": 1671017572923\n}\n')))}N.isMDXComponent=!0}}]);