"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[94],{"./app/components/Page/Page.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MockedError:()=>MockedError,MockedSuccess:()=>MockedSuccess,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Page_stories});var http=__webpack_require__("./node_modules/msw/lib/core/http.mjs"),HttpResponse=__webpack_require__("./node_modules/msw/lib/core/HttpResponse.mjs"),delay=__webpack_require__("./node_modules/msw/lib/core/delay.mjs"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function cov_1v1jmyy6gx(){var path="D:\\SabaiCode\\Week9\\storybook\\app\\components\\Page\\page.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"D:\\SabaiCode\\Week9\\storybook\\app\\components\\Page\\page.tsx",statementMap:{0:{start:{line:6,column:32},end:{line:6,column:48}},1:{start:{line:7,column:28},end:{line:7,column:42}},2:{start:{line:8,column:4},end:{line:21,column:11}},3:{start:{line:9,column:8},end:{line:9,column:29}},4:{start:{line:10,column:8},end:{line:20,column:11}},5:{start:{line:11,column:12},end:{line:13,column:13}},6:{start:{line:12,column:16},end:{line:12,column:48}},7:{start:{line:14,column:12},end:{line:14,column:30}},8:{start:{line:16,column:12},end:{line:16,column:33}},9:{start:{line:17,column:12},end:{line:17,column:26}},10:{start:{line:19,column:12},end:{line:19,column:31}},11:{start:{line:22,column:4},end:{line:25,column:6}},12:{start:{line:28,column:29},end:{line:28,column:43}},13:{start:{line:29,column:4},end:{line:33,column:5}},14:{start:{line:30,column:8},end:{line:32,column:11}},15:{start:{line:34,column:4},end:{line:38,column:5}},16:{start:{line:35,column:8},end:{line:37,column:11}},17:{start:{line:39,column:4},end:{line:41,column:5}},18:{start:{line:40,column:8},end:{line:40,column:20}},19:{start:{line:42,column:31},end:{line:42,column:35}},20:{start:{line:43,column:4},end:{line:84,column:7}},21:{start:{line:86,column:0},end:{line:90,column:2}}},fnMap:{0:{name:"useFetchData",decl:{start:{line:5,column:9},end:{line:5,column:21}},loc:{start:{line:5,column:24},end:{line:26,column:1}},line:5},1:{name:"(anonymous_1)",decl:{start:{line:8,column:14},end:{line:8,column:15}},loc:{start:{line:8,column:18},end:{line:21,column:5}},line:8},2:{name:"(anonymous_2)",decl:{start:{line:10,column:52},end:{line:10,column:53}},loc:{start:{line:10,column:59},end:{line:15,column:9}},line:10},3:{name:"(anonymous_3)",decl:{start:{line:15,column:16},end:{line:15,column:17}},loc:{start:{line:15,column:24},end:{line:18,column:9}},line:15},4:{name:"(anonymous_4)",decl:{start:{line:18,column:17},end:{line:18,column:18}},loc:{start:{line:18,column:21},end:{line:20,column:9}},line:18},5:{name:"Component",decl:{start:{line:27,column:24},end:{line:27,column:33}},loc:{start:{line:27,column:36},end:{line:85,column:1}},line:27}},branchMap:{0:{loc:{start:{line:11,column:12},end:{line:13,column:13}},type:"if",locations:[{start:{line:11,column:12},end:{line:13,column:13}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:11},1:{loc:{start:{line:29,column:4},end:{line:33,column:5}},type:"if",locations:[{start:{line:29,column:4},end:{line:33,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:29},2:{loc:{start:{line:34,column:4},end:{line:38,column:5}},type:"if",locations:[{start:{line:34,column:4},end:{line:38,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:34},3:{loc:{start:{line:39,column:4},end:{line:41,column:5}},type:"if",locations:[{start:{line:39,column:4},end:{line:41,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:39}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0},f:{0:0,1:0,2:0,3:0,4:0,5:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0]},inputSourceMap:{version:3,sources:["D:/SabaiCode/Week9/storybook/app/components/Page/page.tsx"],sourcesContent:['"use client";\r\nimport React, { useState, useEffect } from "react";\r\n\r\n// Define the structure of the expected data\r\ninterface User {\r\n  userID: number;\r\n  name: string;\r\n}\r\n\r\ninterface Document {\r\n  id: number;\r\n  userID: number;\r\n  title: string;\r\n  brief: string;\r\n  status: string;\r\n}\r\n\r\ninterface Data {\r\n  user: User;\r\n  document: Document;\r\n}\r\n\r\n// Example hook to retrieve data from an external endpoint\r\nfunction useFetchData() {\r\n  const [status, setStatus] = useState<\r\n    "idle" | "loading" | "success" | "error"\r\n  >("idle");\r\n  const [data, setData] = useState<Data | null>(null);\r\n\r\n  useEffect(() => {\r\n    setStatus("loading");\r\n    fetch("https://your-restful-endpoint")\r\n      .then((res) => {\r\n        if (!res.ok) {\r\n          throw new Error(res.statusText);\r\n        }\r\n        return res.json();\r\n      })\r\n      .then((data: Data) => {\r\n        setStatus("success");\r\n        setData(data);\r\n      })\r\n      .catch(() => {\r\n        setStatus("error");\r\n      });\r\n  }, []);\r\n\r\n  return {\r\n    status,\r\n    data,\r\n  };\r\n}\r\n\r\nexport default function Component() {\r\n  const { status, data } = useFetchData();\r\n\r\n  if (status === "loading") {\r\n    return <p>Loading...</p>;\r\n  }\r\n  if (status === "error") {\r\n    return <p>There was an error fetching the data!</p>;\r\n  }\r\n  if (!data) {\r\n    return null; // Handle case where data is null\r\n  }\r\n\r\n  const { user, document } = data;\r\n\r\n  return (\r\n    <>\r\n      <div className="flex flex-col w-48 p-7 bg-slate-500">\r\n        <h1 className="text-4xl">User</h1>\r\n        <h1 className="text-4xl">{user.userID}</h1>\r\n        <p className="text-sm">{user.name}</p>\r\n      </div>\r\n      <div className="flex flex-col w-48 p-7 bg-slate-500">\r\n        <h1 className="text-4xl">Document</h1>\r\n        <h1 className="text-4xl">{document.title}</h1>\r\n        <p className="text-sm">{document.brief}</p>\r\n        <p className="text-sm">{document.status}</p>\r\n      </div>\r\n    </>\r\n  );\r\n}\r\n'],names:["React","useState","useEffect","useFetchData","status","setStatus","data","setData","fetch","then","res","ok","Error","statusText","json","catch","Component","p","user","document","div","className","h1","userID","name","title","brief"],mappings:"AAAA;;AACA,OAAOA,SAASC,QAAQ,EAAEC,SAAS,QAAQ,QAAQ;AAqBnD,0DAA0D;AAC1D,SAASC;IACP,MAAM,CAACC,QAAQC,UAAU,GAAGJ,SAE1B;IACF,MAAM,CAACK,MAAMC,QAAQ,GAAGN,SAAsB;IAE9CC,UAAU;QACRG,UAAU;QACVG,MAAM,iCACHC,IAAI,CAAC,CAACC;YACL,IAAI,CAACA,IAAIC,EAAE,EAAE;gBACX,MAAM,IAAIC,MAAMF,IAAIG,UAAU;YAChC;YACA,OAAOH,IAAII,IAAI;QACjB,GACCL,IAAI,CAAC,CAACH;YACLD,UAAU;YACVE,QAAQD;QACV,GACCS,KAAK,CAAC;YACLV,UAAU;QACZ;IACJ,GAAG,EAAE;IAEL,OAAO;QACLD;QACAE;IACF;AACF;AAEA,eAAe,SAASU;IACtB,MAAM,EAAEZ,MAAM,EAAEE,IAAI,EAAE,GAAGH;IAEzB,IAAIC,WAAW,WAAW;QACxB,qBAAO,KAACa;sBAAE;;IACZ;IACA,IAAIb,WAAW,SAAS;QACtB,qBAAO,KAACa;sBAAE;;IACZ;IACA,IAAI,CAACX,MAAM;QACT,OAAO,MAAM,iCAAiC;IAChD;IAEA,MAAM,EAAEY,IAAI,EAAEC,QAAQ,EAAE,GAAGb;IAE3B,qBACE;;0BACE,MAACc;gBAAIC,WAAU;;kCACb,KAACC;wBAAGD,WAAU;kCAAW;;kCACzB,KAACC;wBAAGD,WAAU;kCAAYH,KAAKK,MAAM;;kCACrC,KAACN;wBAAEI,WAAU;kCAAWH,KAAKM,IAAI;;;;0BAEnC,MAACJ;gBAAIC,WAAU;;kCACb,KAACC;wBAAGD,WAAU;kCAAW;;kCACzB,KAACC;wBAAGD,WAAU;kCAAYF,SAASM,KAAK;;kCACxC,KAACR;wBAAEI,WAAU;kCAAWF,SAASO,KAAK;;kCACtC,KAACT;wBAAEI,WAAU;kCAAWF,SAASf,MAAM;;;;;;AAI/C"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f23af75f57f8417017baeec2c30d3cdb73842056"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"f23af75f57f8417017baeec2c30d3cdb73842056"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_1v1jmyy6gx=function(){return actualCoverage},actualCoverage}function Component(){cov_1v1jmyy6gx().f[5]++;const{status,data}=(cov_1v1jmyy6gx().s[12]++,function useFetchData(){cov_1v1jmyy6gx().f[0]++;const[status,setStatus]=(cov_1v1jmyy6gx().s[0]++,(0,react.useState)("idle")),[data,setData]=(cov_1v1jmyy6gx().s[1]++,(0,react.useState)(null));return cov_1v1jmyy6gx().s[2]++,(0,react.useEffect)((()=>{cov_1v1jmyy6gx().f[1]++,cov_1v1jmyy6gx().s[3]++,setStatus("loading"),cov_1v1jmyy6gx().s[4]++,fetch("https://your-restful-endpoint").then((res=>{if(cov_1v1jmyy6gx().f[2]++,cov_1v1jmyy6gx().s[5]++,!res.ok)throw cov_1v1jmyy6gx().b[0][0]++,cov_1v1jmyy6gx().s[6]++,new Error(res.statusText);return cov_1v1jmyy6gx().b[0][1]++,cov_1v1jmyy6gx().s[7]++,res.json()})).then((data=>{cov_1v1jmyy6gx().f[3]++,cov_1v1jmyy6gx().s[8]++,setStatus("success"),cov_1v1jmyy6gx().s[9]++,setData(data)})).catch((()=>{cov_1v1jmyy6gx().f[4]++,cov_1v1jmyy6gx().s[10]++,setStatus("error")}))}),[]),cov_1v1jmyy6gx().s[11]++,{status,data}}());if(cov_1v1jmyy6gx().s[13]++,"loading"===status)return cov_1v1jmyy6gx().b[1][0]++,cov_1v1jmyy6gx().s[14]++,(0,jsx_runtime.jsx)("p",{children:"Loading..."});if(cov_1v1jmyy6gx().b[1][1]++,cov_1v1jmyy6gx().s[15]++,"error"===status)return cov_1v1jmyy6gx().b[2][0]++,cov_1v1jmyy6gx().s[16]++,(0,jsx_runtime.jsx)("p",{children:"There was an error fetching the data!"});if(cov_1v1jmyy6gx().b[2][1]++,cov_1v1jmyy6gx().s[17]++,!data)return cov_1v1jmyy6gx().b[3][0]++,cov_1v1jmyy6gx().s[18]++,null;cov_1v1jmyy6gx().b[3][1]++;const{user,document}=(cov_1v1jmyy6gx().s[19]++,data);return cov_1v1jmyy6gx().s[20]++,(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"flex flex-col w-48 p-7 bg-slate-500",children:[(0,jsx_runtime.jsx)("h1",{className:"text-4xl",children:"User"}),(0,jsx_runtime.jsx)("h1",{className:"text-4xl",children:user.userID}),(0,jsx_runtime.jsx)("p",{className:"text-sm",children:user.name})]}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-col w-48 p-7 bg-slate-500",children:[(0,jsx_runtime.jsx)("h1",{className:"text-4xl",children:"Document"}),(0,jsx_runtime.jsx)("h1",{className:"text-4xl",children:document.title}),(0,jsx_runtime.jsx)("p",{className:"text-sm",children:document.brief}),(0,jsx_runtime.jsx)("p",{className:"text-sm",children:document.status})]})]})}cov_1v1jmyy6gx(),cov_1v1jmyy6gx().s[21]++,Component.__docgenInfo={description:"",methods:[],displayName:"Component"};var index_browser=__webpack_require__("./node_modules/msw-storybook-addon/dist/index.browser.js");const Page_stories={title:"Page",component:Component,loaders:[index_browser.Rc]},TestData={user:{userID:1,name:"Kimhab"},document:{id:1,userID:1,title:"Love Alone",brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",status:"approved"}},MockedSuccess={parameters:{msw:{handlers:[http.L.get("https://your-restful-endpoint/",(()=>HttpResponse.c.json(TestData)))]}},loaders:[index_browser.Rc]},MockedError={parameters:{msw:{handlers:[http.L.get("https://your-restful-endpoint/",(async()=>(await(0,delay.cb)(800),new HttpResponse.c(null,{status:403}))))]}},loaders:[index_browser.Rc]},__namedExportsOrder=["MockedSuccess","MockedError"];MockedSuccess.parameters={...MockedSuccess.parameters,docs:{...MockedSuccess.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    msw: {\n      handlers: [http.get("https://your-restful-endpoint/", () => {\n        return HttpResponse.json(TestData);\n      })]\n    }\n  },\n  loaders: [mswLoader]\n}',...MockedSuccess.parameters?.docs?.source}}},MockedError.parameters={...MockedError.parameters,docs:{...MockedError.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    msw: {\n      handlers: [http.get("https://your-restful-endpoint/", async () => {\n        await delay(800);\n        return new HttpResponse(null, {\n          status: 403\n        });\n      })]\n    }\n  },\n  loaders: [mswLoader]\n}',...MockedError.parameters?.docs?.source}}}}}]);