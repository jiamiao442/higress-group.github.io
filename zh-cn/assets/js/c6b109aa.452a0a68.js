"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[4900],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,b=p["".concat(c,".").concat(m)]||p[m]||g[m]||a;return r?n.createElement(b,s(s({ref:t},l),{},{components:r})):n.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3859:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"Higress + Nacos \u5fae\u670d\u52a1\u7f51\u5173\u6700\u4f73\u5b9e\u8df5",keywords:["higress","wasm"],description:"Higress\uff1aNacos\u7684\u6700\u4f73\u62cd\u6863",author:"\u6f84\u6f6d",date:new Date("2023-01-10T00:00:00.000Z"),custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-blog/nacos.md"},s="\u524d\u8a00",i={permalink:"/zh-cn/blog/nacos",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/nacos.md",title:"Higress + Nacos \u5fae\u670d\u52a1\u7f51\u5173\u6700\u4f73\u5b9e\u8df5",description:"Higress\uff1aNacos\u7684\u6700\u4f73\u62cd\u6863",date:"2023-01-10T00:00:00.000Z",formattedDate:"2023\u5e741\u670810\u65e5",tags:[],readingTime:13.13,hasTruncateMarker:!0,authors:[{name:"\u6f84\u6f6d"}],frontMatter:{title:"Higress + Nacos \u5fae\u670d\u52a1\u7f51\u5173\u6700\u4f73\u5b9e\u8df5",keywords:["higress","wasm"],description:"Higress\uff1aNacos\u7684\u6700\u4f73\u62cd\u6863",author:"\u6f84\u6f6d",date:"2023-01-10T00:00:00.000Z",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-blog/nacos.md"},nextItem:{title:"30\u884c\u4ee3\u7801\u5199\u4e00\u4e2aWasm Go\u63d2\u4ef6",permalink:"/zh-cn/blog/30-line-wasm"}},c={authorsImageUrls:[void 0]},u=[],l={toc:u},p="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u53bb\u5e7411\u6708\u7684\u4e91\u6816\u5927\u4f1a\u4e0a\uff0c\u6211\u4eec\u5f00\u6e90\u4e86\u4e91\u539f\u751f\u7f51\u5173 Higress\uff0c\u65f6\u9694 2 \u6708\uff0cHigress \u7684 Github \u9879\u76ee(",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/higress"},"https://github.com/alibaba/higress"),")\u5df2\u7ecf\u6536\u83b7\u4e86 700+ star\uff0c\u4ee5\u53ca\u5927\u91cf\u793e\u533a\u5c0f\u4f19\u4f34\u7684\u5173\u6ce8\u3002"))}g.isMDXComponent=!0}}]);