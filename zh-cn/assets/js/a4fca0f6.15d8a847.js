"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[4404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),g=a,d=c["".concat(o,".").concat(g)]||c[g]||m[g]||s;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const s={title:"\u81ea\u5b9a\u4e49\u63d2\u4ef6",keywords:["higress","custom","plugin"],description:"\u81ea\u5b9a\u4e49\u63d2\u4ef6\u914d\u7f6e\u53c2\u8003"},l=void 0,i={unversionedId:"plugins/custom",id:"plugins/custom",title:"\u81ea\u5b9a\u4e49\u63d2\u4ef6",description:"\u81ea\u5b9a\u4e49\u63d2\u4ef6\u914d\u7f6e\u53c2\u8003",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/plugins/custom.md",sourceDirName:"plugins",slug:"/plugins/custom",permalink:"/zh-cn/docs/plugins/custom",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/plugins/custom.md",tags:[],version:"current",frontMatter:{title:"\u81ea\u5b9a\u4e49\u63d2\u4ef6",keywords:["higress","custom","plugin"],description:"\u81ea\u5b9a\u4e49\u63d2\u4ef6\u914d\u7f6e\u53c2\u8003"},sidebar:"docs",previous:{title:"Wasm \u63d2\u4ef6\u4f7f\u7528\u7b80\u4ecb",permalink:"/zh-cn/docs/plugins/intro"},next:{title:"JWT \u8ba4\u8bc1",permalink:"/zh-cn/docs/plugins/jwt-auth"}},o={},u=[{value:"\u7f16\u8f91 Wasm \u6587\u4ef6",id:"\u7f16\u8f91-wasm-\u6587\u4ef6",level:2},{value:"\u6784\u5efa Wasm \u955c\u50cf",id:"\u6784\u5efa-wasm-\u955c\u50cf",level:2},{value:"step1. \u7f16\u8bd1 wasm",id:"step1-\u7f16\u8bd1-wasm",level:3},{value:"step2. \u6784\u5efa\u5e76\u63a8\u9001\u63d2\u4ef6\u7684 docker \u955c\u50cf",id:"step2-\u6784\u5efa\u5e76\u63a8\u9001\u63d2\u4ef6\u7684-docker-\u955c\u50cf",level:3},{value:"\u751f\u6548 Wasm \u63d2\u4ef6",id:"\u751f\u6548-wasm-\u63d2\u4ef6",level:2},{value:"\u4f7f\u7528 Higress \u63a7\u5236\u53f0",id:"\u4f7f\u7528-higress-\u63a7\u5236\u53f0",level:3},{value:"\u4f7f\u7528 CRD",id:"\u4f7f\u7528-crd",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7f16\u8f91-wasm-\u6587\u4ef6"},"\u7f16\u8f91 Wasm \u6587\u4ef6"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7528\u4e8e\u4f7f\u7528 Go \u8bed\u8a00\u5f00\u53d1 Higress \u7684 Wasm \u63d2\u4ef6\u7684",(0,a.kt)("a",{parentName:"li",href:"https://github.com/alibaba/higress/tree/main/plugins/wasm-go"},"SDK")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/user/wasm-go"},"\u63d2\u4ef6\u5f00\u53d1\u793a\u4f8b"))),(0,a.kt)("h2",{id:"\u6784\u5efa-wasm-\u955c\u50cf"},"\u6784\u5efa Wasm \u955c\u50cf"),(0,a.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u5148\u5728\u672c\u5730\u5c06 wasm \u6784\u5efa\u51fa\u6765\uff0c\u518d\u62f7\u8d1d\u5230 Docker \u955c\u50cf\u4e2d\u3002\u8fd9\u8981\u6c42\u4f60\u8981\u5148\u5728\u672c\u5730\u642d\u5efa\u6784\u5efa\u73af\u5883\u3002"),(0,a.kt)("p",null,"\u7f16\u8bd1\u73af\u5883\u8981\u6c42\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Go \u7248\u672c: >= 1.18\uff08\u9700\u8981\u652f\u6301\u6cdb\u578b\u7279\u6027\uff09")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"TinyGo \u7248\u672c: >= 0.25.0\uff08\u5efa\u8bae\u4f7f\u7528 0.25.0\uff09"))),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u672c\u5730\u6b65\u9aa4\u6784\u5efa ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions/request-block"},"request-block")," \u63d2\u4ef6\u7684\u4f8b\u5b50\u3002"),(0,a.kt)("h3",{id:"step1-\u7f16\u8bd1-wasm"},"step1. \u7f16\u8bd1 wasm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tinygo build -o main.wasm -scheduler=none -target=wasi ./main.go\n")),(0,a.kt)("h3",{id:"step2-\u6784\u5efa\u5e76\u63a8\u9001\u63d2\u4ef6\u7684-docker-\u955c\u50cf"},"step2. \u6784\u5efa\u5e76\u63a8\u9001\u63d2\u4ef6\u7684 docker \u955c\u50cf"),(0,a.kt)("p",null,"\u4f7f\u7528\u8fd9\u4efd\u7b80\u5355\u7684 Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM scratch\nCOPY main.wasm plugin.wasm\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t <your_registry_hub>/request-block:1.0.0 -f <your_dockerfile> .\ndocker push <your_registry_hub>/request-block:1.0.0\n")),(0,a.kt)("h2",{id:"\u751f\u6548-wasm-\u63d2\u4ef6"},"\u751f\u6548 Wasm \u63d2\u4ef6"),(0,a.kt)("h3",{id:"\u4f7f\u7528-higress-\u63a7\u5236\u53f0"},"\u4f7f\u7528 Higress \u63a7\u5236\u53f0"),(0,a.kt)("p",null,"\u5728\u63d2\u4ef6\u5e02\u573a\u4e2d\u521b\u5efa\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u521b\u5efa"),"\u6309\u94ae\uff0c\u5c31\u53ef\u4ee5\u521b\u5efa\u81ea\u5b9a\u4e49\u63d2\u4ef6\uff0c\u5728\u955c\u50cf\u5730\u5740\u4e00\u680f\u4e2d\u586b\u5165\u4e0a\u9762\u6784\u5efa\u51fa\u7684 Wasm \u955c\u50cf\u5730\u5740\u5373\u53ef\uff1b"),(0,a.kt)("p",null,"\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u70b9\u51fb\u63d2\u4ef6\u5361\u7247\u7684\u914d\u7f6e\u6309\u94ae\uff0c\u586b\u5165\u63d2\u4ef6\u7684\u914d\u7f6e\uff08\u5982\u679c\u6709\uff09\uff0c\u6253\u5f00\u5f00\u542f\u5f00\u5173\u5c31\u751f\u6548\u4e86\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u63d2\u4ef6\u903b\u8f91\u53d1\u751f\u4e86\u53d8\u66f4\uff0c\u53ef\u4ee5\u6784\u5efa\u4e00\u4e2a\u65b0\u7684\u955c\u50cf\uff0c\u5e76\u4f7f\u7528\u4e0d\u540c\u7684\u955c\u50cf tag\uff0c\u70b9\u63d2\u4ef6\u5361\u7247\u53f3\u4e0a\u65b9\u83dc\u5355\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u7f16\u8f91"),"\u6309\u94ae\uff0c\u5c06 Wasm \u955c\u50cf\u5730\u5740\u4fee\u6539\u4e3a\u65b0\u7248\u672c\u7684\u5730\u5740\u5373\u53ef\u3002"),(0,a.kt)("h3",{id:"\u4f7f\u7528-crd"},"\u4f7f\u7528 CRD"),(0,a.kt)("p",null,"\u7f16\u5199 WasmPlugin \u8d44\u6e90\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: extensions.higress.io/v1alpha1\nkind: WasmPlugin\nmetadata:\n  name: request-block\n  namespace: higress-system\nspec:\n  defaultConfig:\n    block_urls:\n    - "swagger.html"\n  url: oci://<your_registry_hub>/request-block:1.0.0  # \u4e4b\u524d\u6784\u5efa\u548c\u63a8\u9001\u7684 image \u5730\u5740\n')),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl apply -f <your-wasm-plugin-yaml>")," \u4f7f\u8d44\u6e90\u751f\u6548\u3002\n\u8d44\u6e90\u751f\u6548\u540e\uff0c\u5982\u679c\u8bf7\u6c42url\u643a\u5e26 ",(0,a.kt)("inlineCode",{parentName:"p"},"swagger.html"),", \u5219\u8fd9\u4e2a\u8bf7\u6c42\u5c31\u4f1a\u88ab\u62d2\u7edd\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl <your_gateway_address>/api/user/swagger.html\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"HTTP/1.1 403 Forbidden\ndate: Wed, 09 Nov 2022 12:12:32 GMT\nserver: istio-envoy\ncontent-length: 0\n")))}m.isMDXComponent=!0}}]);