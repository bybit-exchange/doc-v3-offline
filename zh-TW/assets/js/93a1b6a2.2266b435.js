"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[4746],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=m(n),d=a,k=s["".concat(p,".").concat(d)]||s[d]||c[d]||i;return n?r.createElement(k,l(l({ref:e},u),{},{components:n})):r.createElement(k,l({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},35408:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u983b\u7387\u9650\u5236",sidebar_label:"\u983b\u7387\u9650\u5236",slug:"/spot/rate-limit"},l=void 0,o={unversionedId:"v3/spot/rate-limit",id:"v3/spot/rate-limit",title:"\u983b\u7387\u9650\u5236",description:"IP\u9650\u983b",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/spot/rate-limit.mdx",sourceDirName:"v3/spot",slug:"/spot/rate-limit",permalink:"/doc-v3-offline/zh-TW/spot/rate-limit",draft:!1,tags:[],version:"current",frontMatter:{title:"\u983b\u7387\u9650\u5236",sidebar_label:"\u983b\u7387\u9650\u5236",slug:"/spot/rate-limit"},sidebar:"v3SideBar",previous:{title:"\u9322\u5305",permalink:"/doc-v3-offline/zh-TW/spot/ws-private/wallet"},next:{title:"\u679a\u8209\u5b9a\u7fa9",permalink:"/doc-v3-offline/zh-TW/spot/enum"}},p={},m=[{value:"IP\u9650\u983b",id:"ip\u9650\u983b",level:2},{value:"\u8cec\u6236\u983b\u7387\u9650\u88fd",id:"\u8cec\u6236\u983b\u7387\u9650\u88fd",level:2},{value:"\u63a5\u53e3\u983b\u7387\u9650\u5236\u8868",id:"\u63a5\u53e3\u983b\u7387\u9650\u5236\u8868",level:3},{value:"\u5982\u4f55\u63d0\u9ad8\u983b\u7387\u9650\u88fd",id:"\u5982\u4f55\u63d0\u9ad8\u983b\u7387\u9650\u88fd",level:2}],u={toc:m};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ip\u9650\u983b"},"IP\u9650\u983b"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u6536\u5230",(0,a.kt)("strong",{parentName:"p"},"HTTP 403"),"\uff08\u62d2\u7d55\u8a2a\u554f\uff09\u97ff\u61c9, \u60a8\u7684 IP \u5df2\u88ab\u66ab\u6642\u6216\u6c38\u4e45\u7981\u6b62\u3002 ",(0,a.kt)("strong",{parentName:"p"},"\u60a8\u61c9\u7acb\u5373\u67e5\u770b\u4ee5\u4e0b\u6307\u5357\uff0c\u4ee5\u78ba\u4fdd\u60a8\u7684\u61c9\u7528\u7a0b\u5e8f\u4e0d\u6703\u7e7c\u7e8c\u9055\u53cd\u9650\u5236"),"\u3002\u5982\u679c\u60a8\u5728 30 \u5206\u9418\u5f8c\n\u4ecd\u88ab\u7981\u6b62\uff0c\u5247\u60a8\u53ef\u80fd\u6703\u88ab\u6c38\u4e45\u7981\u6b62\u3002")),(0,a.kt)("p",null,"\u6211\u5011\u4e0d\u5efa\u8b70\u60a8\u5728\u9019\u4e9b\u9650\u5236\u7684\u908a\u7de3\u904b\u884c\u60a8\u7684\u61c9\u7528\u7a0b\u5e8f\uff0c\u4ee5\u9632\u7570\u5e38\u7684\u7db2\u7d61\u6d3b\u52d5\u5c0e\u81f4\u610f\u5916\u9055\u898f\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GET"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"POST")," \u8acb\u6c42 (\u5171\u4eab):",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9023\u7e8c 5 \u79d2\u5167\u6bcf\u79d2\u4e0d\u8d85\u904e 120 \u500b\u8acb\u6c42")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u6240\u6709\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"api.bybit.com"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"api.bytick.com"),"\u7684\u6d41\u91cf\u5171\u4eab\u6b64\u9650\u5236\uff0c\u7121\u8ad6\u662f\u8a2a\u554f\u73fe\u8ca8\u3001\u671f\u8ca8\u9084\u662f\u671f\u6b0a\u3002")),(0,a.kt)("p",null,"\u9055\u53cd\u9650\u5236\u5f8c\uff0c\u60a8\u7684 IP \u5c07\u88ab\u7981\u6b62\u4e00\u6bb5\u6642\u9593\uff08\u901a\u5e38\u70ba 30 \u5206\u9418\uff09\u3002 \u6301\u7e8c\u9055\u53cd\u9650\u5236\u5c07\u5c0e\u81f4\u6c38\u4e45\u7981\u6b62\u3002 \u6211\u5011\u4e0d\u80fd\u64a4\u92b7\u6c38\u4e45\u7981\u4ee4\u6216\u7e2e\u77ed\u81e8\u6642\u7981\u4ee4\u3002"),(0,a.kt)("h2",{id:"\u8cec\u6236\u983b\u7387\u9650\u88fd"},"\u8cec\u6236\u983b\u7387\u9650\u88fd"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u6536\u5230\u9019\u6a23\u7684\u97ff\u61c9",(0,a.kt)("inlineCode",{parentName:"p"},'"ret_msg": "Too many visits!"'),", \u5247\u8868\u793a\u60a8\u89f8\u767c\u4e86\u5e33\u6236\u983b\u7387\u9650\u5236, \u8acb\u7b49\u5230\u983b\u7387\u9650\u5236\u91cd\u7f6e\u4ee5\u5f8c, \u518d\u7e7c\u7e8c\u767c\u9001\u8acb\u6c42\u3002")),(0,a.kt)("p",null,"Bybit\u57fa\u65bc",(0,a.kt)("strong",{parentName:"p"},"\u6bcf\u79d2\u937e"),"\u7684\u6efe\u52d5\u6642\u9593\u7a97\u53e3\u4f86\u505a\u983b\u7387\u9650\u88fd\uff0c\u4e26\u4e14\u662f\u6309",(0,a.kt)("strong",{parentName:"p"},"\u8cec\u6236"),"\uff08uid\uff09\u4f86\u505a\u5283\u5206\u9650\u88fd\uff0c\u6bcf\u6b21\u8acb\u6c42API\u97ff\u61c9\u982d(response header)\u4e2d\u90fd\u6703\u5305\u542b\u5982\u4e0b\u5b57\u6bb5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit-Status")," - \u8a72\u63a5\u53e3\u7576\u524d\u6642\u9593\u7a97\u53e3\u5269\u4f59\u53ef\u7528\u8acb\u6c42\u6578"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit")," - \u8a72\u63a5\u53e3\u7576\u524d\u983b\u7387\u9650\u88fd\u4e0a\u9650"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit-Reset-Timestamp")," - \u5982\u679c\u60a8\u5df2\u8d85\u904e\u8a72\u63a5\u53e3\u7576\u524d\u7a97\u53e3\u983b\u7387\u9650\u88fd\uff0c\u8a72\u5b57\u6bb5\u8868\u793a\u4e0b\u500b\u53ef\u7528\u6642\u9593\u7a97\u53e3\u7684\u6642\u9593\u6233\uff08\u6beb\u79d2\uff09\uff0c\u5373\u4ec0\u9ebd\u6642\u5019\u53ef\u4ee5\u6062\u5fa9\u8a2a\u554f\uff1b\u5982\u679c\u60a8\u672a\u8d85\u904e\u8a72\u63a5\u53e3\u7576\u524d\u7a97\u53e3\u983b\u7387\u9650\u88fd\uff0c\u8a72\u5b57\u6bb5\u8868\u793a\u8fd4\u56de\u7684\u662f\u7576\u524d\u670d\u52d9\u5668\u6642\u9593\uff08\u6beb\u79d2).")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Http \u97ff\u61c9\u982d\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"\u25b6Response Headers\nContent-Type: application/json; charset=utf-8\nContent-Length: 141\nX-Bapi-Limit: 100\nX-Bapi-Limit-Status: 99\nX-Bapi-Limit-Reset-Timestamp: 1672738134824\n")),(0,a.kt)("h3",{id:"\u63a5\u53e3\u983b\u7387\u9650\u5236\u8868"},"\u63a5\u53e3\u983b\u7387\u9650\u5236\u8868"),(0,a.kt)("span",{class:"blocky_table"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8def\u5f91"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u983b\u7387"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5168\u5009\u69d3\u687f"),(0,a.kt)("td",{parentName:"tr",align:"left"},"5 req/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6240\u6709\u5176\u4ed6\u79c1\u6709\u63a5\u53e3"),(0,a.kt)("td",{parentName:"tr",align:"left"},"20 req/s"))))),(0,a.kt)("h2",{id:"\u5982\u4f55\u63d0\u9ad8\u983b\u7387\u9650\u88fd"},"\u5982\u4f55\u63d0\u9ad8\u983b\u7387\u9650\u88fd"),(0,a.kt)("p",null,"\u8acb\u767c\u9001\u90f5\u4ef6\u5230 ",(0,a.kt)("a",{parentName:"p",href:"mailto:api@bybit.com"},"api@bybit.com"),"\uff0c\u6211\u5011\u6703\u5728 1-4 \u500b\u5de5\u4f5c\u65e5\u5167\u7b54\u5fa9\u3002\u90f5\u4ef6\u5167\u5bb9\u5fc5\u9808\u5305\u542b\u4ee5\u4e0b\u5167\u5bb9\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u60a8\u7684\u59d3\u540d\u548c\u516c\u53f8\u540d\u7a31\u548c\u7c21\u4ecb"),(0,a.kt)("li",{parentName:"ol"},"\u60a8\u7684bybit \u8cec\u865fuid\u6216\u8a3b\u518a\u90f5\u7bb1\u624b\u6a5f\u865f,\u4ee5\u53ca\u60a8\u8981\u7533\u8acb\u63d0\u983b\u7684\u4ea4\u6613\u5c0d"),(0,a.kt)("li",{parentName:"ol"},"\u60a8\u4e0a\u500b\u6708\u7684\u4ea4\u6613\u91cf\uff08\u5403\u55ae/\u639b\u55ae\uff09\u4e26\u63d0\u4f9b\u622a\u5716"),(0,a.kt)("li",{parentName:"ol"},"\u7c21\u55ae\u4ecb\u7d39\u60a8\u7684\u4ea4\u6613\u7b56\u7565\u548c\u70ba\u4ec0\u9ebd\u9700\u8981\u66f4\u9ad8\u9650\u983b"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u53ef\u4ee5\uff0c\u8acb\u63d0\u4f9b\u60a8\u7684\u6210\u4ea4\u8a18\u9304csv\u6587\u6a94")))}c.isMDXComponent=!0}}]);