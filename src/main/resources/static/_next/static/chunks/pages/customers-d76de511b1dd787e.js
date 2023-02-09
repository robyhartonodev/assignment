(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[525],{4477:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customers",function(){return t(1500)}])},5294:function(e,s,t){"use strict";t.d(s,{Z:function(){return j}});var n=t(5893),i=t(7357),a=t(2293),l=t(155),r=t(6886),c=t(5861),o=t(1664),d=t.n(o);function h(){return(0,n.jsx)(i.Z,{sx:{flexGrow:1},children:(0,n.jsx)(a.Z,{position:"static",component:"div",children:(0,n.jsx)(l.Z,{children:(0,n.jsxs)(r.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,n.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,n.jsx)(c.Z,{variant:"h6",color:"inherit",component:"div",children:"Empulse - Assignment"})}),(0,n.jsx)(r.ZP,{item:!0,xs:12,md:8,children:(0,n.jsx)(i.Z,{sx:{flexGrow:1,display:{xs:"flex"}},justifyContent:{md:"flex-end",sm:"flex-start"},children:[{title:"Home",link:"/"},{title:"Order",link:"/orders"},{title:"Customer",link:"/customers"}].map(e=>(0,n.jsx)(c.Z,{color:"inherit",children:(0,n.jsx)(d(),{href:e.link,style:{textDecoration:"none",color:"#fff",padding:"4px",margin:"8px",textTransform:"uppercase",fontFamily:"inherit"},children:e.title})},e.title))})})]})})})})}var m=t(9008),u=t.n(m),p=t(2115),x=t(4866),f=t(6901);function g(){let e={type:"info",message:"flash message 123",isOpen:!1},s=(0,p.V)(e=>e.flashMessage),t=(0,p.V)(e=>e.showFlashMessage);return(0,n.jsx)(n.Fragment,{children:s.isOpen?(0,n.jsx)(x.Z,{open:s.isOpen,message:s.message,autoHideDuration:6e3,onClose:()=>{t(e)},children:(0,n.jsx)(f.Z,{severity:s.type,fullWidth:!0,children:s.message})}):(0,n.jsx)(n.Fragment,{})})}function j(e){let{children:s}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u(),{children:[(0,n.jsx)("title",{children:"Empulse - Assignment"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(h,{}),(0,n.jsxs)("main",{style:{padding:"16px"},children:[(0,n.jsx)(g,{}),s]})]})}},1500:function(e,s,t){"use strict";t.r(s);var n=t(5893),i=t(5294),a=t(2156),l=t(7357),r=t(3321),c=t(4666),o=t(7645),d=t(6580),h=t(6886),m=t(1903),u=t(1425),p=t(5861),x=t(7294),f=t(2115);let g=()=>{let[e,s]=(0,x.useState)([]),t=(0,f.V)(e=>e.showFlashMessage),g=()=>{fetch("http://localhost:8080/api/v1/customers").then(e=>e.json()).then(e=>s(e)).catch(()=>{t({type:"danger",message:"Get customers failed",isOpen:!0})})},j=e=>{let s=e.id;fetch("http://localhost:8080/api/v1/customers/".concat(s),{method:"DELETE"}).then(e=>{t({type:"success",message:"Customer Deleted Successfuly",isOpen:!0})}).catch(()=>{t({type:"danger",message:"Delete failed",isOpen:!0})}).finally(()=>{g()})};(0,x.useEffect)(()=>{g()},[]);let[y,Z]=(0,x.useState)(!1),[v,C]=(0,x.useState)(""),[O,w]=(0,x.useState)(""),k=()=>{Z(!0)},E=()=>{Z(!1),C(""),w("")},N=()=>{fetch("http://localhost:8080/api/v1/customers",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:v,email:O})}).then(e=>{e.status>=200&&e.status<=300&&(t({type:"success",message:"Customer Created Successfuly",isOpen:!0}),E()),e.status>=400&&e.status<=500&&t({type:"error",message:"Create failed. Please check your inputs",isOpen:!0})}).finally(()=>{g()})},_=(0,n.jsxs)("div",{children:[(0,n.jsx)(r.Z,{color:"secondary",variant:"contained",onClick:k,children:"Create"}),(0,n.jsxs)(c.Z,{open:y,onClose:E,"aria-labelledby":"alert-dialog-title",children:[(0,n.jsx)(o.Z,{id:"alert-dialog-title",children:"Form Customer"}),(0,n.jsx)(d.Z,{children:(0,n.jsxs)(h.ZP,{container:!0,spacing:2,children:[(0,n.jsx)(h.ZP,{item:!0,xs:12,children:(0,n.jsx)(m.Z,{label:"Name",variant:"filled",fullWidth:!0,value:v,onChange:e=>{C(e.target.value)}})}),(0,n.jsx)(h.ZP,{item:!0,xs:12,children:(0,n.jsx)(m.Z,{label:"Email",variant:"filled",fullWidth:!0,value:O,onChange:e=>{w(e.target.value)}})})]})}),(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(r.Z,{onClick:E,children:"CANCEL"}),(0,n.jsx)(r.Z,{onClick:N,autoFocus:!0,children:"OK"})]})]})]});return(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(p.Z,{variant:"h3",marginBottom:4,children:"Customers"}),(0,n.jsx)("div",{style:{marginBottom:"8px"},children:_}),(0,n.jsx)("div",{style:{width:"100%"},children:(0,n.jsx)(a._,{rows:e,columns:[{field:"id",headerName:"ID",flex:1},{field:"name",headerName:"Name",flex:1},{field:"email",headerName:"Email",flex:1},{field:"action",headerName:"Actions",flex:1,renderCell:e=>{let{row:s}=e;return(0,n.jsx)(l.Z,{sx:{display:"flex",alignItems:"center"},children:(0,n.jsx)(r.Z,{color:"error",onClick:()=>{j(s)},variant:"contained",children:"Delete"})})}}],pageSize:5,rowsPerPageOptions:[5],disableSelectionOnClick:!0,autoHeight:!0})})]})};s.default=g},2115:function(e,s,t){"use strict";t.d(s,{V:function(){return i}});var n=t(4529);let i=(0,n.Ue)(e=>({flashMessage:{type:"info",message:"flash message 123",isOpen:!1},type:"info",message:"flash message 123",isOpen:!1,updateIsOpen:s=>e(()=>({isOpen:s})),showFlashMessage:s=>e(()=>({flashMessage:{isOpen:s.isOpen,message:s.message,type:s.type}}))}))}},function(e){e.O(0,[411,18,774,888,179],function(){return e(e.s=4477)}),_N_E=e.O()}]);