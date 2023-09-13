"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[8854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||s;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const s={title:"Quick Start",keywords:["Higress"],description:"Quick Start.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en-us/docusaurus-plugin-content-docs/current/user/quickstart.md",toc_max_heading_level:4},r="Quick Start",i={unversionedId:"user/quickstart",id:"user/quickstart",title:"Quick Start",description:"Quick Start.",source:"@site/i18n/en-us/docusaurus-plugin-content-docs/current/user/quickstart.md",sourceDirName:"user",slug:"/user/quickstart",permalink:"/en-us/docs/user/quickstart",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en-us/docusaurus-plugin-content-docs/current/user/quickstart.md",tags:[],version:"current",frontMatter:{title:"Quick Start",keywords:["Higress"],description:"Quick Start.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en-us/docusaurus-plugin-content-docs/current/user/quickstart.md",toc_max_heading_level:4},sidebar:"docs",previous:{title:"Higress Terminology",permalink:"/en-us/docs/overview/terminology"},next:{title:"configmap",permalink:"/en-us/docs/user/configmap"}},l={},c=[{value:"Environment 1: Use in K8s",id:"environment-1-use-in-k8s",level:2},{value:"Stage 1: Installation",id:"stage-1-installation",level:3},{value:"Scenario 1: Use in a Standard K8s Cluster",id:"scenario-1-use-in-a-standard-k8s-cluster",level:4},{value:"Scenario 2: Use in Local Environment",id:"scenario-2-use-in-local-environment",level:4},{value:"Step 1: Install kubectl &amp; kind",id:"step-1-install-kubectl--kind",level:5},{value:"Step 2: Create and Activate kind",id:"step-2-create-and-activate-kind",level:5},{value:"Step 3: Install Higress",id:"step-3-install-higress",level:5},{value:"Stage 2: Configuration",id:"stage-2-configuration",level:3},{value:"Method 1: Use Higress Console",id:"method-1-use-higress-console",level:4},{value:"Method 2: Use Ingress CRD",id:"method-2-use-ingress-crd",level:4},{value:"Stage 3: Validate",id:"stage-3-validate",level:3},{value:"Environment 2: Use in Docker Compose without K8s",id:"environment-2-use-in-docker-compose-without-k8s",level:2},{value:"Stage 1: Installation",id:"stage-1-installation-1",level:3},{value:"Stage 2: Configuration",id:"stage-2-configuration-1",level:3},{value:"Stage 3: Validate",id:"stage-3-validate-1",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...s}=e;return(0,o.kt)(d,(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start"},"Quick Start"),(0,o.kt)("h2",{id:"environment-1-use-in-k8s"},"Environment 1: Use in K8s"),(0,o.kt)("h3",{id:"stage-1-installation"},"Stage 1: Installation"),(0,o.kt)("h4",{id:"scenario-1-use-in-a-standard-k8s-cluster"},"Scenario 1: Use in a Standard K8s Cluster"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Helm Installation Command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add higress.io https://higress.io/helm-charts\nhelm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set higress-console.domain=console.higress.io\n")),(0,o.kt)("p",null,"Note: A short note will be printed on the screen after installation, which contains the commands used to obtain the console login credential. Please execute them and record the output username and password."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(6039).Z,width:"1240",height:"250"})),(0,o.kt)("p",null,"Obtain the LoadBalancer IP of Higress Gateway and write it down. You can use it and port 80 and 443 to access Higress Gateway."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc -n higress-system higress-gateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}'\n")),(0,o.kt)("h4",{id:"scenario-2-use-in-local-environment"},"Scenario 2: Use in Local Environment"),(0,o.kt)("p",null,"The following groups can be applied to all local K8s clusters. If there is already a test cluster running on your PC, you can go to Step 3 directly and install Higress."),(0,o.kt)("h5",{id:"step-1-install-kubectl--kind"},"Step 1: Install kubectl & kind"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MacOS:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# for Intel Macs\n[ $(uname -m) = x86_64 ] && curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl"\n[ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-amd64\n# for Apple Silicon Macs (M1/M2)\n[ $(uname -m) = arm64 ] && curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/arm64/kubectl"\n[ $(uname -m) = arm64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-arm64\nchmod +x ./kubectl ./kind\nsudo mv ./kubectl ./kind /usr/local/bin\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use PowerShell in Windows:")),(0,o.kt)("p",null,"Download ",(0,o.kt)("a",{parentName:"p",href:"https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe"},"kubectl v1.27.1")," and ",(0,o.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/dl/v0.18.0/kind-windows-amd64"},"kind v0.18.0"),"."),(0,o.kt)("p",null,"Or if you have ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," installed, use the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},'curl.exe -LO "https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe"\ncurl.exe -Lo kind-windows-amd64.exe https://kind.sigs.k8s.io/dl/v0.18.0/kind-windows-amd64\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: To find out the latest stable version of ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," (for example, for scripting), take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://dl.k8s.io/release/stable.txt"},"https://dl.k8s.io/release/stable.txt"),".")),(0,o.kt)("p",null,"Then rename downloaded ",(0,o.kt)("inlineCode",{parentName:"p"},"kind-windows-amd64")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"kind-windows-amd64.exe")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"kind.exe"),". And move both exe files to a file location on your system PATH."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Linux:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"\ncurl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-linux-amd64\nchmod +x ./kubectl ./kind\nsudo mv ./kubectl ./kind /usr/local/bin\n')),(0,o.kt)("h5",{id:"step-2-create-and-activate-kind"},"Step 2: Create and Activate kind"),(0,o.kt)("p",null,"First, create a cluster config file: ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.conf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# cluster.conf\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n  kubeadmConfigPatches:\n  - |\n    kind: InitConfiguration\n    nodeRegistration:\n      kubeletExtraArgs:\n        node-labels: "ingress-ready=true"\n  extraPortMappings:\n  - containerPort: 80\n    hostPort: 80\n    protocol: TCP\n  - containerPort: 443\n    hostPort: 443\n    protocol: TCP\n')),(0,o.kt)("p",null,"Commands for Mac & Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kind create cluster --name higress --config=cluster.conf\nkubectl config use-context kind-higress\n")),(0,o.kt)("p",null,"Commands for Windows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kind.exe create cluster --name higress --config=cluster.conf\nkubectl.exe config use-context kind-higress\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")),(0,o.kt)("p",null,"currently, the namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"higress-system")," has a svc which type is ",(0,o.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),", it can not get IP in cluster by default.\nwe can use official support to enable this function,please refer to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://kind.sigs.k8s.io/docs/user/loadbalancer/")),(0,o.kt)("h5",{id:"step-3-install-higress"},"Step 3: Install Higress"),(0,o.kt)("p",null,"when you install ",(0,o.kt)("inlineCode",{parentName:"p"},"higress")," in local environment, you should use ",(0,o.kt)("inlineCode",{parentName:"p"},"--set global.kind=true"),";\nin the future, we will use ",(0,o.kt)("inlineCode",{parentName:"p"},"--set global.local=true")," for unambiguous."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add higress.io https://higress.io/helm-charts\nhelm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set higress-console.o11y.enabled=false  --set higress-console.domain=console.higress.io --set higress-console.admin.password.value=<YOUR-PASSWORD>\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you'd like to enable the built-in o11y suite, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../ops/deploy-by-helm"},"Deploy by Helm")," document.")),(0,o.kt)("p",null,"After installation, you can access Higress Gateway in the local cluster via port 80 and 443."),(0,o.kt)("p",null,"Note: If you are using a pre-existed local K8s cluster, you may need to use the command below to forward ports out of the cluster, and try the local ports later."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward service/higress-gateway -n higress-system 80:80 443:443\n")),(0,o.kt)("h3",{id:"stage-2-configuration"},"Stage 2: Configuration"),(0,o.kt)("p",null,'Assuming that there is already a service named "foo" deployed in the default namespace, we\'d like to create a route, forwarding ',(0,o.kt)("a",{parentName:"p",href:"http://foo.bar.com/foo"},"http://foo.bar.com/foo")," requests to this service."),(0,o.kt)("p",null,"You can use the following YAML to create this test service if needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Pod\napiVersion: v1\nmetadata:\n  name: foo-app\n  labels:\n    app: foo\nspec:\n  containers:\n  - name: foo-app\n    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine\n    args:\n    - "-text=foo"\n---\nkind: Service\napiVersion: v1\nmetadata:\n  name: foo-service\nspec:\n  selector:\n    app: foo\n  ports:\n  # Default port used by the image\n  - port: 5678\n')),(0,o.kt)("h4",{id:"method-1-use-higress-console"},"Method 1: Use Higress Console"),(0,o.kt)("p",null,"Edit the hosts file and point domain ",(0,o.kt)("inlineCode",{parentName:"p"},"console.higress.io")," to the IP of Higress Gateway (In a standard K8s cluster, use the previously obtained LoadBalancer IP. And use 127.0.0.1 instead in a local cluster)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GatewayIP console.higress.io\n")),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"http://console.higress.io")," in browser and log into Higress Console using the credential obtained above."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(6470).Z,width:"500",height:"350"})),(0,o.kt)("p",null,'Click "Domain Management" on the navigation bar left. Click "Create Domain" button. Then fill the form according to the image below and click "Confirm" button.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(7744).Z,width:"1274",height:"585"})),(0,o.kt)("p",null,'Click "Route Management" on the navigation bar left. Click "Create Route" button. Then fill the form according to the image below and click "Confirm" button.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(5081).Z,width:"1274",height:"1037"})),(0,o.kt)("h4",{id:"method-2-use-ingress-crd"},"Method 2: Use Ingress CRD"),(0,o.kt)("p",null,"Use the YAML below to create the test route we need."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: foo\nspec:\n  ingressClassName: higress\n  rules:\n  - host: foo.bar.com\n    http:\n      paths:\n      - pathType: Prefix\n        path: "/foo"\n        backend:\n          service:\n            name: foo-service\n            port:\n              number: 5678\n')),(0,o.kt)("h3",{id:"stage-3-validate"},"Stage 3: Validate"),(0,o.kt)("p",null,"Use the following command to check whether the test route works properly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# should output "foo"\ncurl http://GatewayIP/foo -H "Host: foo.bar.com"\n')),(0,o.kt)("h2",{id:"environment-2-use-in-docker-compose-without-k8s"},"Environment 2: Use in Docker Compose without K8s"),(0,o.kt)("h3",{id:"stage-1-installation-1"},"Stage 1: Installation"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Installation Command 1: Use a separated-deployed Nacos service")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- -c nacos://192.168.0.1:8848 --nacos-username=nacos --nacos-password=nacos -p <YOUR-PASSWORD>\n")),(0,o.kt)("p",null,"Please replace ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.0.1")," with the actual IP address of Nacos service (if Nacos is deployed locally, please use a non-loopback address such as ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"), and update the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"--nacos-username")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--nacos-password")," based on actual configurations. If authentication isn't enabled in Nacos, you can remove these two arguments."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Installation Command 2: Use the Higress Built-In Nacos")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- --use-builtin-nacos -p <YOUR-PASSWORD>\n")),(0,o.kt)("p",null,"Note: On Windows, you can use Unix-like shells such as Cygwin, Git Bash to execute the command above."),(0,o.kt)("h3",{id:"stage-2-configuration-1"},"Stage 2: Configuration"),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080")," in browser and log into Higress Console using username ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," and the previously set password."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(6470).Z,width:"500",height:"350"})),(0,o.kt)("p",null,'Click "Service Sources" on the navigation bar left. Click "Create Service Source" button. Then fill the form according to the image below and click "Confirm" button.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(7593).Z,width:"2179",height:"858"})),(0,o.kt)("p",null,'Click "Domain Management" on the navigation bar left. Click "Create Domain" button. Then fill the form according to the image below and click "Confirm" button.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(7744).Z,width:"1274",height:"585"})),(0,o.kt)("p",null,'Click "Route Management" on the navigation bar left. Click "Create Route" button. Then fill the form according to the image below and click "Confirm" button.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(9170).Z,width:"2179",height:"1894"})),(0,o.kt)("h3",{id:"stage-3-validate-1"},"Stage 3: Validate"),(0,o.kt)("p",null,"Use the following command to check whether the test route works properly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# should output a JSON object containing request data \ncurl http://localhost/get?foo=bar -H 'host: foo.bar.com'\n")))}p.isMDXComponent=!0},7744:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/domain_management-acca07092d115de7b947e41855395696.png"},6470:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},5081:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/route_management-02999aaa4d28cce95b6b70526b2597ad.png"},9170:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/route_management_standalone-9c83064b59552128b737a4f731e901dd.png"},7593:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/service_source_management_standalone-f89afb473a183053d2079afbd2bace61.png"},6039:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/console-credentials-3f846851a9dfeed79cf5e782173eb20a.png"}}]);