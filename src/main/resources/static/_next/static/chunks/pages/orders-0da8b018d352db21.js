(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[660],{9159:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/orders",function(){return s(6319)}])},5294:function(e,t,s){"use strict";s.d(t,{Z:function(){return g}});var n=s(5893),a=s(7357),i=s(2293),r=s(155),l=s(6886),d=s(5861),o=s(1664),c=s.n(o);function h(){return(0,n.jsx)(a.Z,{sx:{flexGrow:1},children:(0,n.jsx)(i.Z,{position:"static",component:"div",children:(0,n.jsx)(r.Z,{children:(0,n.jsxs)(l.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,n.jsx)(l.ZP,{item:!0,xs:12,md:4,children:(0,n.jsx)(d.Z,{variant:"h6",color:"inherit",component:"div",children:"Empulse - Assignment"})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,md:8,children:(0,n.jsx)(a.Z,{sx:{flexGrow:1,display:{xs:"flex"}},justifyContent:{md:"flex-end",sm:"flex-start"},children:[{title:"Home",link:"/"},{title:"Order",link:"/orders"},{title:"Customer",link:"/customers"}].map(e=>(0,n.jsx)(d.Z,{color:"inherit",children:(0,n.jsx)(c(),{href:e.link,style:{textDecoration:"none",color:"#fff",padding:"4px",margin:"8px",textTransform:"uppercase",fontFamily:"inherit"},children:e.title})},e.title))})})]})})})})}var u=s(9008),m=s.n(u),p=s(2115),x=s(4866),f=s(6901);function j(){let e={type:"info",message:"flash message 123",isOpen:!1},t=(0,p.V)(e=>e.flashMessage),s=(0,p.V)(e=>e.showFlashMessage);return(0,n.jsx)(n.Fragment,{children:t.isOpen?(0,n.jsx)(x.Z,{open:t.isOpen,message:t.message,autoHideDuration:6e3,onClose:()=>{s(e)},children:(0,n.jsx)(f.Z,{severity:t.type,fullWidth:!0,children:t.message})}):(0,n.jsx)(n.Fragment,{})})}function g(e){let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(m(),{children:[(0,n.jsx)("title",{children:"Empulse - Assignment"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(h,{}),(0,n.jsxs)("main",{style:{padding:"16px"},children:[(0,n.jsx)(j,{}),t]})]})}},6319:function(e,t,s){"use strict";s.r(t);var n=s(5893),a=s(5294),i=s(7294),r=s(2115),l=s(5861),d=s(7357),o=s(3321),c=s(4666),h=s(7645),u=s(6580),m=s(6886),p=s(1903),x=s(913),f=s(3841),j=s(5945),g=s(5819),y=s(1425),Z=s(2156),w=s(2359),v=s(5188),C=s(1360),O=s(2912);let S=()=>{let[e,t]=(0,i.useState)([]),s=(0,r.V)(e=>e.showFlashMessage),S=()=>{fetch("http://localhost:8080/api/v1/orders").then(e=>e.json()).then(e=>t(e)).catch(()=>{s({type:"danger",message:"Get orders failed",isOpen:!0})})},[D,b]=(0,i.useState)([]),P=()=>{fetch("http://localhost:8080/api/v1/customers").then(e=>e.json()).then(e=>b(e))};(0,i.useEffect)(()=>{S(),P()},[]);let[k,F]=(0,i.useState)(!1),[M,E]=(0,i.useState)({subject:"",customerId:0,orderDate:"",orderDateTime:"",status:0}),[I,_]=(0,i.useState)(""),[N,A]=(0,i.useState)(""),[H,U]=(0,i.useState)(new Date),[G,L]=(0,i.useState)(""),[R,T]=(0,i.useState)(0),[V,W]=(0,i.useState)([]),B=()=>{F(!0)},X=()=>{F(!1),_(""),T(0),A(""),U(new Date),L(""),W([])},z=e=>Promise.all(Array.from(e).map(e=>K(e))),K=e=>new Promise((t,s)=>{let n=new FileReader;n.readAsDataURL(e),n.onload=function(s){let n=new Image;n.src=s.target.result,n.onload=function(){let s=document.createElement("canvas");s.width=n.width,s.height=n.height;let a=s.getContext("2d");a.drawImage(n,0,0);let i=a.getImageData(0,0,n.width,n.height),r=i.data;for(let e=0;e<r.length;e+=4){let t=(r[e]+r[e+1]+r[e+2])/3;r[e]=t,r[e+1]=t,r[e+2]=t}a.putImageData(i,0,0),s.toBlob(s=>{t(new File([s],e.name,{type:e.type,lastModified:e.lastModified}))},e.type)}},n.onerror=function(e){s(e)}}),q=()=>{let e=new FormData;for(let t of(e.append("subject",I),e.append("status","0"),e.append("customerId",N),H&&(e.append("orderDate",(0,O.Z)(H,"dd-MM-yyyy")),e.append("orderDateTime",(0,O.Z)(H,"dd-MM-yyyy HH:mm:ss"))),V.forEach(t=>{e.append("multipartFiles",t)}),e.entries()))console.log(t[0]+", "+t[1]);fetch("http://localhost:8080/api/v1/orders",{method:"post",body:e}).then(e=>{e.status>=200&&e.status<=300&&(s({type:"success",message:"Order Created Successfuly",isOpen:!0}),X()),e.status>=400&&e.status<=500&&s({type:"error",message:"Create failed. Please check your inputs",isOpen:!0})}).finally(()=>{S()})},J=(0,n.jsxs)("div",{children:[(0,n.jsx)(o.Z,{color:"secondary",variant:"contained",onClick:B,children:"Create"}),(0,n.jsxs)(c.Z,{open:k,onClose:X,"aria-labelledby":"alert-dialog-title",children:[(0,n.jsx)(h.Z,{id:"alert-dialog-title",children:"Form Order"}),(0,n.jsx)(u.Z,{children:(0,n.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,n.jsx)(m.ZP,{item:!0,xs:12,children:(0,n.jsx)(p.Z,{label:"Subject",variant:"filled",fullWidth:!0,value:I,onChange:e=>{_(e.target.value)}})}),(0,n.jsx)(m.ZP,{item:!0,xs:12,children:(0,n.jsxs)(x.Z,{fullWidth:!0,children:[(0,n.jsx)(f.Z,{id:"customer-select",children:"Customer"}),(0,n.jsx)(j.Z,{labelId:"customer-select",label:"Customer",onChange:e=>{A(e.target.value)},value:N,fullWidth:!0,children:D.map(e=>(0,n.jsx)(g.Z,{value:e.id,children:e.name},e.id))})]})}),(0,n.jsx)(m.ZP,{item:!0,xs:12,children:(0,n.jsx)(w._,{dateAdapter:C.H,children:(0,n.jsx)(v.M,{label:"Order Date",value:H,minDate:new Date,onChange:e=>{U(e),console.log((0,O.Z)(e,"dd-MM-yyyy HH:mm:ss"))},renderInput:e=>(0,n.jsx)(p.Z,{...e,fullWidth:!0})})})}),(0,n.jsx)(m.ZP,{item:!0,xs:12,children:(0,n.jsxs)(o.Z,{variant:"contained",component:"label",children:["Upload Files",(0,n.jsx)("input",{type:"file",hidden:!0,accept:"image/*",onChange:e=>{z(e.target.files).then(e=>{let t=Array.from(e);W(t)})},multiple:!0})]})}),V.map(e=>(0,n.jsx)(m.ZP,{item:!0,xs:3,children:(0,n.jsx)("img",{height:"100%",width:"100%",src:URL.createObjectURL(e),alt:"123"})},e.name))]})}),(0,n.jsxs)(y.Z,{children:[(0,n.jsx)(o.Z,{onClick:X,children:"CANCEL"}),(0,n.jsx)(o.Z,{onClick:q,autoFocus:!0,children:"OK"})]})]})]});return(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(l.Z,{variant:"h3",marginBottom:4,children:"Orders"}),(0,n.jsx)("div",{children:J}),(0,n.jsx)("div",{style:{width:"100%"},children:(0,n.jsx)(Z._,{rows:e,columns:[{field:"id",headerName:"ID",flex:1},{field:"subject",headerName:"Name",flex:1},{field:"orderDate",headerName:"Order Date",flex:1},{field:"status",headerName:"Status",flex:1,renderCell:e=>{let{row:t}=e,s=0===t.status?"PROCESSING":1===t.status?"SUCCESS":"FAILED";return(0,n.jsx)(l.Z,{children:s})}},{field:"action",headerName:"Actions",flex:1,renderCell:e=>{let{row:t}=e;return(0,n.jsx)(d.Z,{sx:{display:"flex",alignItems:"center"},children:(0,n.jsx)(o.Z,{color:"primary",onClick:()=>{},variant:"contained",sx:{mr:"4px"},children:"View"})})}}],pageSize:5,rowsPerPageOptions:[5],disableSelectionOnClick:!0,autoHeight:!0})})]})};t.default=S},2115:function(e,t,s){"use strict";s.d(t,{V:function(){return a}});var n=s(4529);let a=(0,n.Ue)(e=>({flashMessage:{type:"info",message:"flash message 123",isOpen:!1},type:"info",message:"flash message 123",isOpen:!1,updateIsOpen:t=>e(()=>({isOpen:t})),showFlashMessage:t=>e(()=>({flashMessage:{isOpen:t.isOpen,message:t.message,type:t.type}}))}))}},function(e){e.O(0,[411,18,989,774,888,179],function(){return e(e.s=9159)}),_N_E=e.O()}]);