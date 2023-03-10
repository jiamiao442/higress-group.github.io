"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[5096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,c=u["".concat(i,".").concat(m)]||u[m]||g[m]||l;return n?a.createElement(c,o(o({ref:t},d),{},{components:n})):a.createElement(c,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"Developing a WASM plugin with Golang",keywords:["wasm"],description:"Developing a WASM plugin with Golang",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/wasm-go.md"},o="Implement a WASM plugin with Golang",s={unversionedId:"user/wasm-go",id:"user/wasm-go",title:"Developing a WASM plugin with Golang",description:"Developing a WASM plugin with Golang",source:"@site/i18n/en-us/docusaurus-plugin-content-docs/current/user/wasm-go.md",sourceDirName:"user",slug:"/user/wasm-go",permalink:"/en-us/docs/user/wasm-go",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/wasm-go.md",tags:[],version:"current",frontMatter:{title:"Developing a WASM plugin with Golang",keywords:["wasm"],description:"Developing a WASM plugin with Golang",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/wasm-go.md"},sidebar:"docs",previous:{title:"Quick Start",permalink:"/en-us/docs/user/quickstart"},next:{title:"OpenKruise Rollout",permalink:"/en-us/docs/user/kruise-rollout"}},i={},p=[{value:"MacOS",id:"macos",level:3},{value:"Linux",id:"linux",level:3},{value:"MacOS",id:"macos-1",level:3},{value:"Linux",id:"linux-1",level:3}],d={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"implement-a-wasm-plugin-with-golang"},"Implement a WASM plugin with Golang"),(0,r.kt)("h1",{id:"1-prepare-development-tools"},"1. Prepare Development Tools"),(0,r.kt)("p",null,"First, install Golang and Tinygo."),(0,r.kt)("a",{name:"a81fa"}),"## 1. Golang Min Version: 1.18",(0,r.kt)("br",null),"Official download link: [https://go.dev/doc/install](https://go.dev/doc/install)",(0,r.kt)("a",{name:"JFoN6"}),"### Windows",(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the installer: ",(0,r.kt)("a",{parentName:"li",href:"https://go.dev/dl/go1.19.windows-amd64.msi"},"https://go.dev/dl/go1.19.windows-amd64.msi")),(0,r.kt)("li",{parentName:"ol"},"Run the downloaded installer to start the installation. It will be installed to ",(0,r.kt)("inlineCode",{parentName:"li"},"Program Files")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Program Files (x86)")," folder by default."),(0,r.kt)("li",{parentName:"ol"},'After completed the installation, open "Run" dialog with hotkey "Win+R". Type "cmd" in the dialog and click "OK" to open Command Line Prompt. Type: ',(0,r.kt)("inlineCode",{parentName:"li"},"go version"),". If version info is displayed, the package has been successfully installed.",(0,r.kt)("a",{name:"tavPX"}))),(0,r.kt)("h3",{id:"macos"},"MacOS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the installer: ",(0,r.kt)("a",{parentName:"li",href:"https://go.dev/dl/go1.19.darwin-amd64.pkg"},"https://go.dev/dl/go1.19.darwin-amd64.pkg")),(0,r.kt)("li",{parentName:"ol"},"Run the downloaded installer to start the installation. It will be installed to ",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/local/go")," folder by default."),(0,r.kt)("li",{parentName:"ol"},"Open Terminal and type: ",(0,r.kt)("inlineCode",{parentName:"li"},"go version"),". If version info is displayed, the package has been successfully installed.",(0,r.kt)("a",{name:"olPlT"}))),(0,r.kt)("h3",{id:"linux"},"Linux"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the installer: ",(0,r.kt)("a",{parentName:"li",href:"https://go.dev/dl/go1.19.linux-amd64.tar.gz"},"https://go.dev/dl/go1.19.linux-amd64.tar.gz")),(0,r.kt)("li",{parentName:"ol"},"Execute following commands to start the installation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf /usr/local/go && tar -C /usr/local -xzf go1.19.linux-amd64.tar.gz\nexport PATH=$PATH:/usr/local/go/bin\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Execute ",(0,r.kt)("inlineCode",{parentName:"li"},"go version"),". If version info is displayed, the package has been successfully installed.")),(0,r.kt)("a",{name:"qugm0"}),"## 2. TinyGo Min Version: 0.25.0",(0,r.kt)("br",null),"Official download link: [https://tinygo.org/getting-started/install/](https://tinygo.org/getting-started/install/)",(0,r.kt)("a",{name:"ELNis"}),"### Windows",(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the package: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tinygo-org/tinygo/releases/download/v0.25.0/tinygo0.25.0.windows-amd64.zip"},"https://github.com/tinygo-org/tinygo/releases/download/v0.25.0/tinygo0.25.0.windows-amd64.zip")),(0,r.kt)("li",{parentName:"ol"},"Unpack the package to the target folder"),(0,r.kt)("li",{parentName:"ol"},"If the package is unpacked to folder ",(0,r.kt)("inlineCode",{parentName:"li"},"C:\\tinygo"),", you need to add ",(0,r.kt)("inlineCode",{parentName:"li"},"C:\\tinygo\\bin")," into the environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH"),", using set command in Command Line Prompt for example.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'set PATH=%PATH%;"C:\\tinygo\\bin";\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Execute ",(0,r.kt)("inlineCode",{parentName:"li"},"tinygo version")," command in Command Line Prompt. If version info is displayed, the package has been successfully installed.",(0,r.kt)("a",{name:"iCo9z"}))),(0,r.kt)("h3",{id:"macos-1"},"MacOS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download and unpack the package")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/tinygo-org/tinygo/releases/download/v0.25.0/tinygo0.25.0.darwin-amd64.tar.gz\ntar -zxf tinygo0.25.0.darwin-amd64.tar.gz\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"If the package is unpacked to folder ",(0,r.kt)("inlineCode",{parentName:"li"},"/tmp"),", you need to add ",(0,r.kt)("inlineCode",{parentName:"li"},"/tmp/tinygo/bin")," to the environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=/tmp/tinygo/bin:$PATH\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Execute command ",(0,r.kt)("inlineCode",{parentName:"li"},"tinygo version")," in Terminal.  If version info is displayed, the package has been successfully installed.",(0,r.kt)("a",{name:"hNZeF"}))),(0,r.kt)("h3",{id:"linux-1"},"Linux"),(0,r.kt)("p",null,"Following steps are based on Ubuntu AMD64. For other OSes, please refer to the official document."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download and install the DEB package.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/tinygo-org/tinygo/releases/download/v0.25.0/tinygo_0.25.0_amd64.deb\nsudo dpkg -i tinygo_0.25.0_amd64.deb\nexport PATH=$PATH:/usr/local/bin\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Execute command ",(0,r.kt)("inlineCode",{parentName:"li"},"tinygo version")," in Terminal. If version info is displayed, the package has been successfully installed.")),(0,r.kt)("a",{name:"QZbcA"}),"# 2. Write a plugin",(0,r.kt)("a",{name:"u83FM"}),"## 1. Initialize the project",(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new folder for the project. For example: ",(0,r.kt)("inlineCode",{parentName:"li"},"wasm-demo-go"),"."),(0,r.kt)("li",{parentName:"ol"},"Execute following commands in the new folder to initialize the Go project:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init wasm-demo-go\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"If you are in the Chinese mainland, you may need to set a proxy for downloading dependencies.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go env -w GOPROXY=https://proxy.golang.com.cn,direct\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Download dependencies for plugin building. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/tetratelabs/proxy-wasm-go-sdk\ngo get github.com/alibaba/higress/plugins/wasm-go@main\ngo get github.com/tidwall/gjson\n")),(0,r.kt)("a",{name:"Z2lFM"}),"## 2. Write main.go You can find a simple sample below, which provides following functions: 1. If `mockEnable` is set to `true`, send `hello world` directly as the response. 2. If `mockEnable` is not set or set to `false`, add an extra HTTP header `hello: world` to the original request. More samples can be found in section 4 below.",(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Plugin configurations use YAML format in the gateway console. But plugins receive them in JSON format. So in the sample below, actual config data are extracted from JSON by the ",(0,r.kt)("inlineCode",{parentName:"p"},"parseConfig")," function.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'package main\n\nimport (\n        "github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper",\n        "github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm",\n        "github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm/types",\n        "github.com/tidwall/gjson",\n)\n\nfunc main() {\n        wrapper.SetCtx(\n                // Plugin name\n                "my-plugin",\n                // A custom function for parsing plugin configurations\n                wrapper.ParseConfigBy(parseConfig),\n                // A custom function for processing request headers\n                wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),\n        )\n}\n\n// Custom plugin configuration\ntype MyConfig struct {\n        mockEnable bool\n}\n\n// Plugin configurations set in the console with YAML format will be converted to JSON. So we just need to parse config data from JSON.\nfunc parseConfig(json gjson.Result, config *MyConfig, log wrapper.Log) error {\n        // Get the configuration property and set to the config object.\n        config.mockEnable = json.Get("mockEnable").Bool()\n        return nil\n}\n\nfunc onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {\n        proxywasm.AddHttpRequestHeader("hello", "world")\n        if config.mockEnable {\n                proxywasm.SendHttpResponse(200, nil, []byte("hello world"), -1)\n        }\n        return types.ActionContinue\n}\n')),(0,r.kt)("a",{name:"SYNZJ"}),"### HTTP Processing Pointcuts In the sample above, `wrapper.ProcessRequestHeadersBy` applies custom function `onHttpRequestHeaders` when processing requests in`HTTP request header processing stage`. Besides that, you can use following methods to set custom processing functions for various stages.",(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Processing Stage"),(0,r.kt)("th",{parentName:"tr",align:null},"Trigger Time"),(0,r.kt)("th",{parentName:"tr",align:null},"Pointcut Mounting Method"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTP request header processing stage"),(0,r.kt)("td",{parentName:"tr",align:null},"When gateway receives request headers from client"),(0,r.kt)("td",{parentName:"tr",align:null},"wrapper.ProcessRequestHeadersBy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTP request body processing stage"),(0,r.kt)("td",{parentName:"tr",align:null},"When gateway receives request body from client"),(0,r.kt)("td",{parentName:"tr",align:null},"wrapper.ProcessRequestBodyBy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTP response header processing stage"),(0,r.kt)("td",{parentName:"tr",align:null},"When gateway receives response headers from upstream"),(0,r.kt)("td",{parentName:"tr",align:null},"wrapper.ProcessResponseHeadersBy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTP response body processing stage"),(0,r.kt)("td",{parentName:"tr",align:null},"When gateway receives response body from upstream"),(0,r.kt)("td",{parentName:"tr",align:null},"wrapper.ProcessResponseBodyBy")))),(0,r.kt)("a",{name:"r6rK5"}),"### Utility Functions In the sample above, `proxywasm.AddHttpRequestHeader` and `proxywasm.SendHttpResponse` are two utility methods provided by the plugin SDK. You can find major utility functions in the table below:",(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Usage"),(0,r.kt)("th",{parentName:"tr",align:null},"Available",(0,r.kt)("br",null),"HTTP Processing Stage(s)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Request Header Processing"),(0,r.kt)("td",{parentName:"tr",align:null},"GetHttpRequestHeaders"),(0,r.kt)("td",{parentName:"tr",align:null},"Get all the request headers sent by the client"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP request header processing stage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ReplaceHttpRequestHeaders"),(0,r.kt)("td",{parentName:"tr",align:null},"Replace all headers in the request."),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP request header processing stage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"GetHttpRequestHeader"),(0,r.kt)("td",{parentName:"tr",align:null},"Get the specified header in the request."),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP request header processing stage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"RemoveHttpRequestHeader"),(0,r.kt)("td",{parentName:"tr",align:null},"Remove the specified header from the request."),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP request header processing stage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ReplaceHttpRequestHeader"),(0,r.kt)("td",{parentName:"tr",align:null},"Replace the specified header in the response."),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP request header processing stage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"AddHttpRequestHeader"),(0,r.kt)("td",{parentName:"tr",align:null},"Add a new header to the request."),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP request header processing stage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Request Body Processing"),(0,r.kt)("td",{parentName:"tr",align:null},"GetHttpRequestBody"),(0,r.kt)("td",{parentName:"tr",align:null},"Get the request body received from client."),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP request body processing stage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"AppendHttpRequestBody"),(0,r.kt)("td",{parentName:"tr",align:null},"Append the specified binary data to the request body."),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP request body processing stage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"PrependHttpRequestBody"),(0,r.kt)("td",{parentName:"tr",align:null},"Prepend the specified binary data to the request body."),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP request body processing stage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ReplaceHttpRequestBody"),(0,r.kt)("td",{parentName:"tr",align:null},"Replace the entire request body received from client."),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP request body processing stage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Response Header Processing"),(0,r.kt)("td",{parentName:"tr",align:null},"GetHttpResponseHeaders"),(0,r.kt)("td",{parentName:"tr",align:null},"Get all the response headers received from upstream."),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP response header processing stage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ReplaceHttpResponseHeaders"),(0,r.kt)("td",{parentName:"tr",align:null},"Replace all headers in the response."),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP response header processing stage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"GetHttpResponseHeader"),(0,r.kt)("td",{parentName:"tr",align:null},"Get the specified header in the response."),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP response header processing stage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"RemoveHttpResponseHeader"),(0,r.kt)("td",{parentName:"tr",align:null},"Remove the specified header from the response."),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP response header processing stage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ReplaceHttpResponseHeader"),(0,r.kt)("td",{parentName:"tr",align:null},"Replace the specified header in the response."),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP response header processing stage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"AddHttpResponseHeader"),(0,r.kt)("td",{parentName:"tr",align:null},"Add a new header to the response."),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP response header processing stage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Response Body Processing"),(0,r.kt)("td",{parentName:"tr",align:null},"GetHttpResponseBody"),(0,r.kt)("td",{parentName:"tr",align:null},"Get the response body received from upstream."),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP response body processing stage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"AppendHttpResponseBody"),(0,r.kt)("td",{parentName:"tr",align:null},"Append the specified binary data to the response body."),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP response body processing stage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"PrependHttpResponseBody"),(0,r.kt)("td",{parentName:"tr",align:null},"Prepend the specified binary data to the response body."),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP response body processing stage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ReplaceHttpResponseBody"),(0,r.kt)("td",{parentName:"tr",align:null},"Replace the entire response body with specific data."),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP response body processing stage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTP Call"),(0,r.kt)("td",{parentName:"tr",align:null},"DispatchHttpCall"),(0,r.kt)("td",{parentName:"tr",align:null},"Send an HTTP request."),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"GetHttpCallResponseHeaders"),(0,r.kt)("td",{parentName:"tr",align:null},"Get the response headers associated with a DispatchHttpCall call."),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"GetHttpCallResponseBody"),(0,r.kt)("td",{parentName:"tr",align:null},"Get the response body associated with a DispatchHttpCall call."),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"GetHttpCallResponseTrailers"),(0,r.kt)("td",{parentName:"tr",align:null},"Get the response trailer associated with a DispatchHttpCall call."),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Respond Directly"),(0,r.kt)("td",{parentName:"tr",align:null},"SendHttpResponse"),(0,r.kt)("td",{parentName:"tr",align:null},"Return a specific HTTP response immediately."),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Process Resuming"),(0,r.kt)("td",{parentName:"tr",align:null},"ResumeHttpRequest"),(0,r.kt)("td",{parentName:"tr",align:null},"Resume the request processing workflow paused before."),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ResumeHttpResponse"),(0,r.kt)("td",{parentName:"tr",align:null},"Resume the response processing workflow paused before."),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("a",{name:"GAa0T"}),"## 3. Build WASM file Execute the following command: ```bash tinygo build -o main.wasm -scheduler=none -target=wasi ./main.go ``` A new file named main.wasm will be created after a successful compilation, which will be used in the local debugging sample below as well.",(0,r.kt)("br",null),"When using custom plugin function in the cloud native gateway market, you just need to upload this file.",(0,r.kt)("a",{name:"yJdN5"}),"# 3. Local Debugging",(0,r.kt)("p",null,"TBD"),(0,r.kt)("h1",{id:"more-samples"},"More Samples"),(0,r.kt)("a",{name:"vdifW"}),"## Plugin with No Configuration If the plugin needs no configuration, just define an empty config struct.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'package main\n\nimport (\n        "github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper",\n        "github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm",\n        "github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm/types",\n)\n\nfunc main() {\n        wrapper.SetCtx(\n                "hello-world",\n                wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),\n        )\n}\n\ntype MyConfig struct {}\n\nfunc onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {\n        proxywasm.SendHttpResponse(200, nil, []byte("hello world"), -1)\n        return types.ActionContinue\n}\n')),(0,r.kt)("a",{name:"dSdLn"}),"## Send Requests to External Services in the Plugin Only HTTP requests are supported for now. You can send requests to Nacos and K8s services with service sources configured in the gateway console, and services with a static IP or DNS source. Please be noted, HTTP client in the `net/http` package cannot be used here. You only use the wrapped HTTP client as shown in the sample below.",(0,r.kt)("br",null),"In the following sample works as below: 1. Parse service type in the config parsing stage, and generate the corresponding HTTP client. 2. In the HTTP request header processing stage, send a service request to the configured URL. 3. Parse response headers and get token value using the specified key. 4. Set the token value to the headers of the original request.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'package main\n\nimport (\n    "errors",\n    "net/http",\n    "strings",\n  "github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper",\n    "github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm",\n    "github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm/types",\n    "github.com/tidwall/gjson"\n)\n\nfunc main() {\n    wrapper.SetCtx(\n        "http-call",\n        wrapper.ParseConfigBy(parseConfig),\n        wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),\n    )\n}\n\ntype MyConfig struct {\n    // The client used to initiate an HTTP request\n    client      wrapper.HttpClient\n    // Request URL\n    requestPath string\n    // Use this key when extracting token header from the service response and setting a header to the request. The value is configurable.\n    tokenHeader string\n}\n\nfunc parseConfig(json gjson.Result, config *MyConfig, log wrapper.Log) error {\n    config.tokenHeader = json.Get("tokenHeader").String()\n    if config.tokenHeader == "" {\n        return errors.New("missing tokenHeader in config")\n    }\n    config.requestPath = json.Get("requestPath").String()\n    if config.requestPath == "" {\n        return errors.New("missing requestPath in config")\n    }\n    serviceSource := json.Get("serviceSource").String()\n    // If serviceSource is set to "ip" or "dns", serviceName shall be specified when creating the service.\n    // If serviceSource is set to "nacos" or "k8s", serviceName shall be set to the original name specified when registering the service.\n    serviceName := json.Get("serviceName").String()\n    servicePort := json.Get("servicePort").Int()\n    if serviceName == "" || servicePort == 0 {\n        return errors.New("invalid service config")\n    }\n    switch serviceSource {\n    case "k8s":\n        namespace := json.Get("namespace").String()\n        config.client = wrapper.NewClusterClient(wrapper.K8sCluster{\n            ServiceName: serviceName,\n            Namespace:   namespace,\n            Port:        servicePort,\n        })\n        return nil\n    case "nacos":\n        namespace := json.Get("namespace").String()\n        config.client = wrapper.NewClusterClient(wrapper.NacosCluster{\n            ServiceName: serviceName,\n            NamespaceID: namespace,\n            Port:        servicePort,\n        })\n        return nil\n    case "ip":\n        config.client = wrapper.NewClusterClient(wrapper.StaticIpCluster{\n            ServiceName: serviceName,\n            Port:        servicePort,\n        })\n        return nil\n    case "dns":\n        domain := json.Get("domain").String()\n        config.client = wrapper.NewClusterClient(wrapper.DnsCluster{\n            ServiceName: serviceName,\n            Port:        servicePort,\n            Domain:      domain,\n        })\n        return nil\n    default:\n        return errors.New("unknown service source: " + serviceSource)\n    }\n}\n\nfunc onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {\n    // Use the Get function of the client to initiate an HTTP Get request.\n    // The timeout parameter is omitted here, whose default value is 500ms.\n    config.client.Get(config.requestPath, nil,\n        // A callback function which will be called asynchronously when receiving the response.\n        func(statusCode int, responseHeaders http.Header, responseBody []byte) {\n            // Process the response with a status code other than 200.\n            if statusCode != http.StatusOK {\n                log.Errorf("http call failed, status: %d", statusCode)\n                proxywasm.SendHttpResponse(http.StatusInternalServerError, nil,\n                    []byte("http call failed"), -1)\n                return\n            }\n            // Print out the status code and response body\n            log.Infof("get status: %d, response body: %s", statusCode, responseBody)\n            // Extract token value from the response header and set the header of the original request\n            token := responseHeaders.Get(config.tokenHeader)\n            if token != "" {\n                proxywasm.AddHttpRequestHeader(config.tokenHeader, token)\n            }\n            // Resume the original request processing workflow. Continue the process, so the request can be forwarded to the upstream.\n            proxywasm.ResumeHttpRequest()\n        })\n    // We need to wait for the callback to finish its process.\n    // Return Pause action here to pause the request processing workflow, which can be resumed by a ResumeHttpRequest call.\n    return types.ActionPause\n}\n')))}g.isMDXComponent=!0}}]);