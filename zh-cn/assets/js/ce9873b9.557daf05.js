"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[2595],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),g=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=g(t.components);return a.createElement(u.Provider,{value:e},t.children)},p="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,k=s(t,["components","mdxType","originalType","parentName"]),p=g(n),d=r,m=p["".concat(u,".").concat(d)]||p[d]||o[d]||l;return n?a.createElement(m,i(i({ref:e},k),{},{components:n})):a.createElement(m,i({ref:e},k))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s[p]="string"==typeof t?t:r,i[1]=s;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5340:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>g});var a=n(7462),r=(n(7294),n(3905));const l={title:"Ingress Annotaion \u914d\u7f6e\u8bf4\u660e",keywords:["Ingress"],description:"Higress Ingress Annotaion \u914d\u7f6e\u8bf4\u660e\u3002",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/annotation.md"},i="Ingress Annotaion \u914d\u7f6e\u8bf4\u660e",s={unversionedId:"user/annotation",id:"user/annotation",title:"Ingress Annotaion \u914d\u7f6e\u8bf4\u660e",description:"Higress Ingress Annotaion \u914d\u7f6e\u8bf4\u660e\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/annotation.md",sourceDirName:"user",slug:"/user/annotation",permalink:"/zh-cn/docs/user/annotation",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/annotation.md",tags:[],version:"current",frontMatter:{title:"Ingress Annotaion \u914d\u7f6e\u8bf4\u660e",keywords:["Ingress"],description:"Higress Ingress Annotaion \u914d\u7f6e\u8bf4\u660e\u3002",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/annotation.md"},sidebar:"docs",previous:{title:"\u5f00\u542f WAF \u9632\u62a4\u7684\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-cn/docs/user/waf"},next:{title:"\u8fd0\u7ef4\u53c2\u6570\u914d\u7f6e\u8bf4\u660e",permalink:"/zh-cn/docs/user/configurations"}},u={},g=[{value:"Ingress Annotation",id:"ingress-annotation",level:2},{value:"\u7279\u6b8a\u8bf4\u660e",id:"\u7279\u6b8a\u8bf4\u660e",level:3},{value:"Annotation Key \u524d\u7f00",id:"annotation-key-\u524d\u7f00",level:4},{value:"\u4f5c\u7528\u57df\u8bf4\u660e",id:"\u4f5c\u7528\u57df\u8bf4\u660e",level:4},{value:"\u6d41\u91cf\u6cbb\u7406",id:"\u6d41\u91cf\u6cbb\u7406",level:3},{value:"\u7070\u5ea6\u53d1\u5e03",id:"\u7070\u5ea6\u53d1\u5e03",level:4},{value:"Fallback\uff08\u5bb9\u707e\uff09",id:"fallback\u5bb9\u707e",level:4},{value:"\u91cd\u5199",id:"\u91cd\u5199",level:4},{value:"\u91cd\u5b9a\u5411",id:"\u91cd\u5b9a\u5411",level:4},{value:"\u8de8\u57df",id:"\u8de8\u57df",level:4},{value:"\u91cd\u8bd5",id:"\u91cd\u8bd5",level:4},{value:"\u540e\u7aef\u670d\u52a1\u4f7f\u7528\u7684\u534f\u8bae",id:"\u540e\u7aef\u670d\u52a1\u4f7f\u7528\u7684\u534f\u8bae",level:4},{value:"\u8d1f\u8f7d\u5747\u8861",id:"\u8d1f\u8f7d\u5747\u8861",level:4},{value:"Cookie\u4eb2\u548c\u6027",id:"cookie\u4eb2\u548c\u6027",level:4},{value:"IP\u8bbf\u95ee\u63a7\u5236",id:"ip\u8bbf\u95ee\u63a7\u5236",level:4},{value:"\u5b89\u5168\u9632\u62a4",id:"\u5b89\u5168\u9632\u62a4",level:3},{value:"\u5ba2\u6237\u7aef\u4e0e\u7f51\u5173\u4e4b\u524d\u7684\u901a\u4fe1\u52a0\u5bc6",id:"\u5ba2\u6237\u7aef\u4e0e\u7f51\u5173\u4e4b\u524d\u7684\u901a\u4fe1\u52a0\u5bc6",level:4},{value:"\u7f51\u5173\u4e0e\u540e\u7aef\u670d\u52a1\u4e4b\u95f4\u901a\u4fe1\u52a0\u5bc6",id:"\u7f51\u5173\u4e0e\u540e\u7aef\u670d\u52a1\u4e4b\u95f4\u901a\u4fe1\u52a0\u5bc6",level:4},{value:"\u5b89\u5168\u8ba4\u8bc1",id:"\u5b89\u5168\u8ba4\u8bc1",level:4},{value:"Basic",id:"basic",level:5},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2}],k={toc:g},p="wrapper";function o(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ingress-annotaion-\u914d\u7f6e\u8bf4\u660e"},"Ingress Annotaion \u914d\u7f6e\u8bf4\u660e"),(0,r.kt)("p",null,"\u6807\u51c6\u7684K8s Ingress\u8d44\u6e90\u53ea\u80fd\u5904\u7406\u7b80\u5355\u573a\u666f\u4e0b\u7684HTTP(S)\u6d41\u91cf\u8def\u7531\uff0c\u65e0\u6cd5\u5904\u7406\u6d41\u91cf\u5207\u5206\uff0c\u8d85\u65f6\u91cd\u8bd5\uff0cHeader\u63a7\u5236\u548c\u8de8\u57df\u7b49\u95ee\u9898\u3002\u56e0\u6b64\uff0c\u4e0d\u540c\u7684Ingress Controller\u5229\u7528\u81ea\u5b9a\u4e49\u7684Ingress Annotation\u589e\u5f3aIngress\u80fd\u529b\u3002\u5e38\u89c1\u7684Nginx Ingress Controller\u5f15\u5165\u4e86100\u591a\u4e2aAnnotation\u5bf9Ingress\u5728\u6d41\u91cf\u6cbb\u7406\u548c\u5b89\u5168\u9632\u62a4\u4e0a\u8fdb\u884c\u4e86\u6269\u5c55\u5b9e\u73b0\u3002\u76ee\u524d\uff0cHigress\u5df2\u7ecf\u5168\u9762\u517c\u5bb9\u4e86\u5927\u90e8\u5206Nginx Ingress Annotation\uff0c\u65b9\u4fbf\u7528\u6237\u4eceNginx Ingress\u65e0\u7f1d\u8fc1\u79fb\u81f3Higress\uff0c\u672c\u6587\u4e3b\u8981\u4ecb\u7ecdHigress\u5173\u4e8eIngress Annotation\u7684\u914d\u7f6e\u8bf4\u660e\u3002"),(0,r.kt)("h2",{id:"ingress-annotation"},"Ingress Annotation"),(0,r.kt)("h3",{id:"\u7279\u6b8a\u8bf4\u660e"},"\u7279\u6b8a\u8bf4\u660e"),(0,r.kt)("h4",{id:"annotation-key-\u524d\u7f00"},"Annotation Key \u524d\u7f00"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u51fa\u73b0\u7684Nginx Ingress Annotation\u90fd\u5df2\u88abHigress\u652f\u6301\uff0c\u60a8\u53ef\u4ee5\u6839\u636e\u4f7f\u7528\u4e60\u60ef\u7ee7\u7eed\u4f7f\u7528Nginx Ingress\u7684Annotation\u524d\u7f00",(0,r.kt)("inlineCode",{parentName:"p"},"nginx.ingress.kubernetes.io"),"\uff0c\u6216\u8005\u4f7f\u7528Higress Ingress\u7684Annotation\u524d\u7f00",(0,r.kt)("inlineCode",{parentName:"p"},"higress.io"),"\uff0c\u4e24\u8005\u662f\u7b49\u4ef7\u7684\u3002"),(0,r.kt)("h4",{id:"\u4f5c\u7528\u57df\u8bf4\u660e"},"\u4f5c\u7528\u57df\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ingress\uff1a\u4f5c\u7528\u57df\u4e3aIngress\u7684Annotation\u7684\u4f5c\u7528\u8303\u56f4\u4ec5\u9650\u5f53\u524dIngress\u4e0a\u5b9a\u4e49\u7684\u8def\u7531\u89c4\u5219\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u57df\u540d\uff1a\u4f5c\u7528\u57df\u4e3a\u57df\u540d\u7684Annotation\uff0c\u5176\u4f5c\u7528\u8303\u56f4\u4e3a\u6240\u6709Ingress\u4e0a\u51fa\u73b0\u7684\u76f8\u540cHost\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u670d\u52a1\uff1a\u4f5c\u7528\u57df\u4e3a\u670d\u52a1\u7684Annotation\uff0c\u5176\u4f5c\u7528\u8303\u56f4\u4e3a\u6240\u6709Ingress\u4e0a\u51fa\u73b0\u7684\u76f8\u540cService\u3002")),(0,r.kt)("h3",{id:"\u6d41\u91cf\u6cbb\u7406"},"\u6d41\u91cf\u6cbb\u7406"),(0,r.kt)("h4",{id:"\u7070\u5ea6\u53d1\u5e03"},"\u7070\u5ea6\u53d1\u5e03"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6ce8\u89e3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u57df"),(0,r.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u5ea6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/canary"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f00\u542f\u6216\u5173\u95ed\u7070\u5ea6\u53d1\u5e03")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/canary-by-header"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eRequest Header Key \u6d41\u91cf\u5207\u5206")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/canary-by-header-value"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eRequest Header Value \u6d41\u91cf\u5207\u5206\uff0cValue\u4e3a\u7cbe\u786e\u5339\u914d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/canary-by-header-pattern"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eRequest Header Value \u6d41\u91cf\u5207\u5206\uff0cValue\u4e3a\u6b63\u5219\u5339\u914d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/canary-by-cookie"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eRequest Cookie Key \u6d41\u91cf\u5207\u5206")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/canary-weight"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8e\u6743\u91cd \u6d41\u91cf\u5207\u5206")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/canary-weight-total"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6743\u91cd\u603b\u548c")))),(0,r.kt)("h4",{id:"fallback\u5bb9\u707e"},"Fallback\uff08\u5bb9\u707e\uff09"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6ce8\u89e3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u57df"),(0,r.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u5ea6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/default-backend"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bb9\u707e\u670d\u52a1\u3002\u5f53Ingress\u5b9a\u4e49\u7684\u670d\u52a1\u6ca1\u6709\u53ef\u7528\u8282\u70b9\u65f6\uff0c\u8bf7\u6c42\u4f1a\u81ea\u52a8\u8f6c\u53d1\u8be5\u5bb9\u707e\u670d\u52a1\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/custom-http-errors"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5\u6ce8\u89e3\u548c",(0,r.kt)("inlineCode",{parentName:"td"},"default-backend"),"\u4e00\u8d77\u5de5\u4f5c\u3002\u5f53\u540e\u7aef\u670d\u52a1\u8fd4\u56de\u6307\u5b9aHTTP\u54cd\u5e94\u7801\uff0c\u539f\u59cb\u8bf7\u6c42\u4f1a\u88ab\u518d\u6b21\u8f6c\u53d1\u81f3\u5bb9\u707e\u670d\u52a1\u3002",(0,r.kt)("br",null)," > \u6ce8\u610f\uff1a\u8f6c\u53d1\u81f3\u5bb9\u707e\u670d\u52a1\u65f6\uff0c\u8bf7\u6c42\u7684Path\u4f1a\u88ab\u91cd\u5199\u4e3a/\uff0c\u8be5\u884c\u4e3a\u4e0eingress-nginx\u4fdd\u6301\u4e00\u81f4")))),(0,r.kt)("h4",{id:"\u91cd\u5199"},"\u91cd\u5199"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6ce8\u89e3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u57df"),(0,r.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u5ea6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/rewrite-target"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06Ingress\u5b9a\u4e49\u7684\u539fpath\u91cd\u5199\u4e3a\u6307\u5b9a\u76ee\u6807\uff0c\u652f\u6301Group Capture.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/upstream-vhost"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5339\u914dIngress\u5b9a\u4e49\u7684\u8def\u7531\u7684\u8bf7\u6c42\u5728\u8f6c\u53d1\u7ed9\u540e\u7aef\u670d\u52a1\u65f6\uff0c\u4fee\u6539\u5934\u90e8host\u503c\u4e3a\u6307\u5b9a\u503c\u3002")))),(0,r.kt)("h4",{id:"\u91cd\u5b9a\u5411"},"\u91cd\u5b9a\u5411"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6ce8\u89e3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u57df"),(0,r.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u5ea6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/ssl-redirect"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP \u91cd\u5b9a\u5411\u4e3aHTTPS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/force-ssl-redirect"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP \u91cd\u5b9a\u5411\u4e3aHTTPS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/permanent-redirect"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6c38\u4e45\u91cd\u5b9a\u5411")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/permanent-redirect-code"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6c38\u4e45\u91cd\u5b9a\u5411\u72b6\u6001\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/temporal-redirect"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e34\u65f6\u91cd\u5b9a\u5411")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/app-root"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u5e94\u7528\u6839\u8def\u5f84\uff0c\u5bf9\u4e8e\u8bbf\u95ee/\u7684\u8bf7\u6c42\u5c06\u4f1a\u88ab\u91cd\u5b9a\u5411\u4e3a\u8bbe\u7f6e\u7684\u65b0\u8def\u5f84")))),(0,r.kt)("h4",{id:"\u8de8\u57df"},"\u8de8\u57df"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6ce8\u89e3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u57df"),(0,r.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u5ea6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/enable-cors"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f00\u542f\u6216\u5173\u95ed\u8de8\u57df")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/cors-allow-origin"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u7684\u7b2c\u4e09\u65b9\u7ad9\u70b9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/cors-allow-methods"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u7684\u8bf7\u6c42\u65b9\u6cd5\uff0c\u5982GET\u3001POST\u3001PUT\u7b49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/cors-allow-headers"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u7684\u8bf7\u6c42Header")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/cors-expose-headers"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u7684\u66b4\u9732\u7ed9\u6d4f\u89c8\u5668\u7684\u54cd\u5e94Header")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/cors-allow-credentials"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5141\u8bb8\u643a\u5e26\u51ed\u8bc1\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/cors-max-age"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9884\u68c0\u7ed3\u679c\u7684\u6700\u5927\u7f13\u5b58\u65f6\u95f4")))),(0,r.kt)("h4",{id:"\u91cd\u8bd5"},"\u91cd\u8bd5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6ce8\u89e3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u57df"),(0,r.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u5ea6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/proxy-next-upstream-tries"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u3002\u9ed8\u8ba43\u6b21\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/proxy-next-upstream-timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u91cd\u8bd5\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\u3002\u9ed8\u8ba4\u672a\u914d\u7f6e\u8d85\u65f6\u65f6\u95f4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/proxy-next-upstream"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u91cd\u8bd5\u6761\u4ef6\uff0c\u53c2\u8003",(0,r.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream"},"http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream"))))),(0,r.kt)("h4",{id:"\u540e\u7aef\u670d\u52a1\u4f7f\u7528\u7684\u534f\u8bae"},"\u540e\u7aef\u670d\u52a1\u4f7f\u7528\u7684\u534f\u8bae"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6ce8\u89e3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u57df"),(0,r.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u5ea6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/backend-protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u90e8\u5206\u517c\u5bb9\u3002\u4e0d\u652f\u6301AJP\u548cFCGI"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u540e\u7aef\u670d\u52a1\u4f7f\u7528\u7684\u534f\u8bae\uff0c\u9ed8\u8ba4\u4e3aHTTP\uff0c\u652f\u6301HTTP\u3001HTTP2\u3001HTTPS\u3001GRPC\u548cGRPCS")))),(0,r.kt)("h4",{id:"\u8d1f\u8f7d\u5747\u8861"},"\u8d1f\u8f7d\u5747\u8861"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6ce8\u89e3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u57df"),(0,r.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u5ea6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/load-balance"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u90e8\u5206\u517c\u5bb9\u3002\u4e0d\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"td"},"ewma"),"\u7b97\u6cd5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540e\u7aef\u670d\u52a1\u7684\u666e\u901a\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5\u3002\u9ed8\u8ba4\u4e3around_robin\u3002 ",(0,r.kt)("br",null),"\u5408\u6cd5\u503c\u5982\u4e0b\uff1a",(0,r.kt)("br",null),"- round_robin\uff1a\u57fa\u4e8e\u8f6e\u8be2\u7684\u8d1f\u8f7d\u5747\u8861\u3002",(0,r.kt)("br",null),"- least_conn\uff1a\u57fa\u4e8e\u6700\u5c0f\u8bf7\u6c42\u6570\u7684\u8d1f\u8f7d\u5747\u8861\u3002",(0,r.kt)("br",null),"- random\uff1a\u57fa\u4e8e\u968f\u673a\u7684\u8d1f\u8f7d\u5747\u8861\u3002",(0,r.kt)("br",null)," > \u6ce8\u610f\uff1aHigress\u4e0d\u652f\u6301ewma\u7b97\u6cd5\uff0c\u82e5\u914d\u7f6e\u4e3aewma\u7b97\u6cd5\uff0c\u4f1a\u56de\u9000\u5230round_robin\u7b97\u6cd5\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/upstream-hash-by"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u90e8\u5206\u517c\u5bb9\u3002\u6682\u4e0d\u652f\u6301Nginx\u53d8\u91cf\u3001\u5e38\u91cf\u7684\u7ec4\u5408\u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8e\u4e00\u81f4Hash\u7684\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5\uff0cHigress\u652f\u6301\u4ee5\u4e0b\u51e0\u79cd\u5f62\u5f0f\uff1a",(0,r.kt)("br",null),"1. Higress\u652f\u6301\u914d\u7f6e\u90e8\u5206nginx\u53d8\u91cf\uff1a",(0,r.kt)("br",null),"- $request_uri\uff1a\u8bf7\u6c42\u7684Path\uff08\u5305\u62ec\u8def\u5f84\u53c2\u6570\uff09\u4f5c\u4e3aHash Key ",(0,r.kt)("br",null),"- $host\uff1a\u8bf7\u6c42\u7684Host\u4f5c\u4e3aHash Key",(0,r.kt)("br",null),"- $remote_addr\uff1a\u8bf7\u6c42\u7684\u5ba2\u6237\u7aefIP\u4f5c\u4e3aHash Key\u3002",(0,r.kt)("br",null),"2. \u57fa\u4e8e\u8bf7\u6c42header\u7684\u4e00\u81f4\u6027Hash\u3002\u60a8\u53ea\u9700\u914d\u7f6e\u4e3a$http_headerName\u3002",(0,r.kt)("br",null),"3. \u57fa\u4e8e\u8bf7\u6c42\u8def\u5f84\u53c2\u6570\u7684\u4e00\u81f4\u6027Hash\u3002\u60a8\u53ea\u9700\u914d\u7f6e\u4e3a$arg_varName")))),(0,r.kt)("h4",{id:"cookie\u4eb2\u548c\u6027"},"Cookie\u4eb2\u548c\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6ce8\u89e3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"),(0,r.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u5ea6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/affinity"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4eb2\u548c\u6027\u79cd\u7c7b\uff0c\u76ee\u524d\u53ea\u652f\u6301cookie\uff0c\u9ed8\u8ba4\u4e3acookie\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/affinity-mode"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u90e8\u5206\u517c\u5bb9\u3002\u6682\u4e0d\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"td"},"persistent"),"\u6a21\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4eb2\u548c\u6027\u6a21\u5f0f\uff0c\u4e91\u539f\u751f\u7f51\u5173\u76ee\u524d\u53ea\u652f\u6301balanced\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u4e3abalanced\u6a21\u5f0f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/session-cookie-name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u6307\u5b9aCookie\u7684\u503c\u4f5c\u4e3aHash Key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/session"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-cookie-path"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u6307\u5b9aCookie\u4e0d\u5b58\u5728\uff0c\u751f\u6210\u7684Cookie\u7684Path\u503c\uff0c\u9ed8\u8ba4\u4e3a/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/session-cookie-max-age"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u6307\u5b9aCookie\u4e0d\u5b58\u5728\uff0c\u751f\u6210\u7684Cookie\u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u9ed8\u8ba4\u4e3aSession\u4f1a\u8bdd\u7ea7\u522b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/session-cookie-expires"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u6307\u5b9aCookie\u4e0d\u5b58\u5728\uff0c\u751f\u6210\u7684Cookie\u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u9ed8\u8ba4\u4e3aSession\u4f1a\u8bdd\u7ea7\u522b\u3002")))),(0,r.kt)("h4",{id:"ip\u8bbf\u95ee\u63a7\u5236"},"IP\u8bbf\u95ee\u63a7\u5236"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6ce8\u89e3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u57df"),(0,r.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u5ea6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#whitelist-source-range"},"whitelist-source-range")),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8def\u7531\u4e0a\u7684IP\u767d\u540d\u5355\uff0c\u652f\u6301IP\u5730\u5740\u6216CIDR\u5730\u5740\u5757\uff0c\u4ee5\u9017\u53f7\u5206\u9694\u3002")))),(0,r.kt)("h3",{id:"\u5b89\u5168\u9632\u62a4"},"\u5b89\u5168\u9632\u62a4"),(0,r.kt)("h4",{id:"\u5ba2\u6237\u7aef\u4e0e\u7f51\u5173\u4e4b\u524d\u7684\u901a\u4fe1\u52a0\u5bc6"},"\u5ba2\u6237\u7aef\u4e0e\u7f51\u5173\u4e4b\u524d\u7684\u901a\u4fe1\u52a0\u5bc6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6ce8\u89e3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u57df"),(0,r.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u5ea6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/ssl-cipher"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57df\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9atls\u7684\u52a0\u5bc6\u5957\u4ef6\uff0c\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\uff0c\u82f1\u6587\u9017\u53f7\u5206\u9694\uff0c\u4ec5\u5f53tls\u63e1\u624b\u65f6\u91c7\u7528TLSv1.0-1.2\u751f\u6548\u3002",(0,r.kt)("br",null),"\u9ed8\u8ba4\u52a0\u5bc6\u5957\u4ef6\u5982\u4e0b\uff1a",(0,r.kt)("br",null),"- ECDHE-ECDSA-AES128-GCM-SHA256",(0,r.kt)("br",null),"- ECDHE-RSA-AES128-GCM-SHA256",(0,r.kt)("br",null),"- ECDHE-ECDSA-AES128-SHA",(0,r.kt)("br",null),"- ECDHE-RSA-AES128-SHA",(0,r.kt)("br",null),"- AES128-GCM-SHA256",(0,r.kt)("br",null),"- AES128-SHA",(0,r.kt)("br",null),"- ECDHE-ECDSA-AES256-GCM-SHA384",(0,r.kt)("br",null),"- ECDHE-RSA-AES256-GCM-SHA384",(0,r.kt)("br",null),"- ECDHE-ECDSA-AES256-SHA",(0,r.kt)("br",null),"- ECDHE-RSA-AES256-SHA",(0,r.kt)("br",null),"- AES256-GCM-SHA384",(0,r.kt)("br",null),"- AES256-SHA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/auth-tls-secret"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57df\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u90e8\u5206\u517c\u5bb9\u3002secret\u540d\u5b57\u683c\u5f0f\u5fc5\u987b\u662f\uff1a(\u8be5\u57df\u540d\u8bc1\u4e66\u6240\u5728\u7684secret\u7684\u540d\u5b57)-cacert"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f51\u5173\u4f7f\u7528\u7684CA\u8bc1\u4e66\uff0c\u7528\u4e8e\u9a8c\u8bc1MTLS\u63e1\u624b\u671f\u95f4\uff0c\u5ba2\u6237\u7aef\u63d0\u4f9b\u7684\u8bc1\u4e66\u3002\u8be5\u6ce8\u89e3\u4e3b\u8981\u5e94\u7528\u4e8e\u7f51\u5173\u9700\u8981\u9a8c\u8bc1\u5ba2\u6237\u7aef\u8eab\u4efd\u7684\u573a\u666f\u3002")))),(0,r.kt)("h4",{id:"\u7f51\u5173\u4e0e\u540e\u7aef\u670d\u52a1\u4e4b\u95f4\u901a\u4fe1\u52a0\u5bc6"},"\u7f51\u5173\u4e0e\u540e\u7aef\u670d\u52a1\u4e4b\u95f4\u901a\u4fe1\u52a0\u5bc6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6ce8\u89e3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u57df"),(0,r.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u5ea6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/proxy-ssl-secret"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f51\u5173\u4f7f\u7528\u7684\u5ba2\u6237\u7aef\u8bc1\u4e66\uff0c\u7528\u4e8e\u540e\u7aef\u670d\u52a1\u5bf9\u7f51\u5173\u8fdb\u884c\u8eab\u4efd\u8ba4\u8bc1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/proxy-ssl-name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"TLS\u63e1\u624b\u671f\u95f4\u4f7f\u7528\u7684SNI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/proxy-ssl-server-name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f00\u542f\u6216\u5173\u95edTLS\u63e1\u624b\u671f\u95f4\u4f7f\u7528SNI")))),(0,r.kt)("h4",{id:"\u5b89\u5168\u8ba4\u8bc1"},"\u5b89\u5168\u8ba4\u8bc1"),(0,r.kt)("h5",{id:"basic"},"Basic"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6ce8\u89e3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u57df"),(0,r.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u5ea6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/auth-type"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u90e8\u5206\u517c\u5bb9\u3002\u6682\u53ea\u652f\u6301Basic\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ba4\u8bc1\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/auth-secret"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"Secret\u540d\u5b57\uff0c\u683c\u5f0f\u652f\u6301","<","namespace",">","/","<","name",">","\uff0c\u5305\u542b\u88ab\u6388\u4e88\u80fd\u591f\u8bbf\u95ee\u8be5Ingress\u4e0a\u5b9a\u4e49\u7684\u8def\u7531\u7684\u8bbf\u95ee\u6743\u9650\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/auth-secret-type"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"Secret\u5185\u5bb9\u683c\u5f0f\u3002",(0,r.kt)("br",null),"- auth-file\uff1adata\u7684key\u4e3aauth\uff1bvalue\u4e3a\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u591a\u5e10\u53f7\u56de\u8f66\u5206\u9694",(0,r.kt)("br",null),"- auth-map\uff1adata\u7684key\u4e3a\u7528\u6237\u540d\uff1bvalue\u4e3a\u5bc6\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nginx.ingress.kubernetes.io/auth-realm"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fdd\u62a4\u57df\u3002\u76f8\u540c\u7684\u4fdd\u62a4\u57df\u5171\u4eab\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002")))),(0,r.kt)("h2",{id:"\u5907\u6ce8"},"\u5907\u6ce8"),(0,r.kt)("p",null,"\u5173\u4e8e\u4ee5\u4e0a\u63d0\u5230\u7684Nginx Ingress Annotation\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5b98\u65b9\u6587\u6863\uff08",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#annotations"},"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#annotations"),"\uff09\u3002"))}o.isMDXComponent=!0}}]);