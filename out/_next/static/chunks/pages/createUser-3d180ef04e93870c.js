(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[554],{9721:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/createUser",function(){return t(3717)}])},4816:function(e,n,t){"use strict";var s=t(5893),r=t(7294),a=t(2293),i=t(9226),l=t(155),o=t(3946),c=t(5861),h=t(5319),d=t(326),x=t(5582),u=t(3321),j=t(9840),p=t(3073),m=t(1664),Z=t.n(m),f=t(5885),g=t(1163);let y=["dashboard","createUser"],v="logout";n.Z=function(){let[e,n]=r.useState(null),[t,m]=r.useState(null),k=new f.Z,w=(0,g.useRouter)(),b=e=>{n(e.currentTarget)},C=()=>{n(null)},S=()=>{k.set("token","",{path:"/",expires:new Date(Date.now())}),w.push("/login")};return(0,s.jsx)(a.Z,{color:"secondary",children:(0,s.jsx)(x.Z,{maxWidth:"xl",children:(0,s.jsxs)(l.Z,{disableGutters:!0,children:[(0,s.jsx)(p.Z,{sx:{display:{xs:"none",md:"flex"},mr:1}}),(0,s.jsx)(c.Z,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,color:"inherit",textDecoration:"none"},children:"PaisaBacha"}),(0,s.jsxs)(i.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[(0,s.jsx)(o.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:b,color:"inherit",children:(0,s.jsx)(d.Z,{})}),(0,s.jsxs)(h.Z,{id:"menu-appbar",anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:!!e,onClose:C,sx:{display:{xs:"block",md:"none"}},children:[y.map(e=>(0,s.jsx)(j.Z,{onClick:C,children:(0,s.jsx)(Z(),{href:e,legacyBehavior:!0,children:(0,s.jsx)(c.Z,{textAlign:"center",children:e})})},e)),(0,s.jsx)(j.Z,{onClick:C,children:(0,s.jsx)(c.Z,{textAlign:"center",onClick:S,children:v})},v)]})]}),(0,s.jsx)(p.Z,{sx:{display:{xs:"flex",md:"none"},mr:1}}),(0,s.jsx)(c.Z,{variant:"h5",noWrap:!0,component:"a",href:"",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"PaisaBacha"}),(0,s.jsxs)(i.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[y.map(e=>(0,s.jsx)(Z(),{href:e,legacyBehavior:!0,children:(0,s.jsx)("a",{style:{textDecoration:"none"},children:(0,s.jsx)(u.Z,{onClick:C,sx:{my:2,color:"white",display:"block"},children:e},e)})})),(0,s.jsx)(u.Z,{onClick:S,sx:{my:2,color:"white",display:"block"},children:"Logout"},v)]})]})})})}},4661:function(e,n,t){"use strict";t.d(n,{A:function(){return s}});let s="https://api.paisabacha.in/"},3717:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return P}});var s=t(5893),r=t(4661),a=t(6242),i=t(4267),l=t(5861),o=t(8986),c=t(1233),h=t(3321),d=t(1163),x=t.n(d),u=t(7294),j=t(5885);function p(){let[e,n]=(0,u.useState)(""),[t,d]=(0,u.useState)(""),[p,m]=(0,u.useState)(""),Z=new j.Z;(0,u.useEffect)(()=>{null!=Z.get("token")&&fetch(r.A+"check_admin",{method:"POST",body:JSON.stringify({tkn:Z.get("token")}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(e=>{200!=e.status?(Z.set("token","",{path:"/",expires:new Date(Date.now())}),x().push("/dashboard")):m(Z.get("token"))}),null==Z.get("token")&&x().push("/login")},[]);let f=e=>{n(e.currentTarget.value)},g=e=>{d(e.currentTarget.value)},y=n=>{(""==e||""==t)&&alert("something is not filed"),fetch(r.A+"create_user",{method:"POST",body:JSON.stringify({username:e,password:t,tkn:p}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(e=>{alert(e.message)})};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.Z,{children:(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(l.Z,{gutterBottom:!0,variant:"h5",component:"div",children:"Create User"}),(0,s.jsx)(o.Z,{style:{margin:"3px 0"},label:"username",variant:"outlined",value:e,onChange:f,fullWidth:!0}),(0,s.jsx)(o.Z,{style:{margin:"5px 0"},label:"password",type:"password",variant:"outlined",value:t,onChange:g,fullWidth:!0}),(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"16px 0"},children:(0,s.jsx)(c.Z,{spacing:2,direction:"row",children:(0,s.jsx)(h.Z,{variant:"contained",color:"secondary",onClick:y,children:"Create User"})})})]})})})}var m=t(4816),Z=t(2882),f=t(629),g=t(7906),y=t(3184),v=t(3816),k=t(3252),w=t(295),b=t(7957);function C(){let[e,n]=(0,u.useState)([]),[t,c]=(0,u.useState)(!1),[d,x]=(0,u.useState)(8e3),[p,m]=(0,u.useState)(""),[C,S]=(0,u.useState)(""),_=new j.Z;(0,u.useEffect)(()=>{fetch(r.A+"get_users").then(e=>e.json()).then(e=>{200==e.status&&n(e.message)})});let P=(n,t)=>{c(!0),x(t),m(e[t])},T=(e,n)=>{c(!1),x(6e3),C.length<5&&alert("Password should contain atleast 5 char"),C.length>5&&fetch(r.A+"change_password",{method:"POST",body:JSON.stringify({tkn:_.get("token"),user:p,pwrd:C}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(e=>{200===e.status?alert("New password is updated"):alert("User Not found in database")}),m(""),S("")},A=e=>{S(e.target.value)};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.Z,{children:(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(l.Z,{variant:"h5",children:"All Users"}),(0,s.jsx)("br",{}),(0,s.jsx)(Z.Z,{component:f.Z,children:(0,s.jsxs)(g.Z,{"aria-label":"Active Users",children:[(0,s.jsx)(y.Z,{children:(0,s.jsxs)(v.Z,{children:[(0,s.jsxs)(k.Z,{children:[(0,s.jsx)(l.Z,{variant:"h6",children:"Tag"})," "]}),(0,s.jsx)(k.Z,{children:(0,s.jsx)(l.Z,{variant:"h6",children:"Password"})}),(0,s.jsx)(k.Z,{children:(0,s.jsx)(l.Z,{variant:"h6",children:"Edit"})})]})}),(0,s.jsx)(w.Z,{children:e.map((e,n)=>(0,s.jsxs)(v.Z,{children:[(0,s.jsx)(k.Z,{children:e}),(0,s.jsx)(k.Z,{children:t&&d===n?(0,s.jsx)(o.Z,{label:"enter password",value:C,onChange:A,variant:"outlined"}):(0,s.jsx)(l.Z,{variant:"h6",children:"*********"})}),(0,s.jsx)(k.Z,{children:t&&d===n?(0,s.jsx)(h.Z,{onClick:e=>{T(e,n)},variant:"contained",color:"success",children:" save"}):(0,s.jsx)(h.Z,{onClick:e=>{P(e,n)},children:(0,s.jsx)(b.Z,{})})})]}))})]})})]})})})}var S=t(5582),_=t(6886);function P(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.Z,{}),(0,s.jsx)(S.Z,{maxWidth:"md",style:{textAlign:"center",marginTop:"6rem",marginBottom:"3rem"},children:(0,s.jsx)(l.Z,{variant:"h4",component:"h1",children:"Create link here"})}),(0,s.jsxs)(_.ZP,{container:!0,children:[(0,s.jsx)(_.ZP,{item:!0,xs:12,sm:12,md:1,children:" "}),(0,s.jsx)(_.ZP,{item:!0,xs:12,sm:12,md:4,children:(0,s.jsx)(p,{})}),(0,s.jsx)(_.ZP,{item:!0,xs:12,sm:12,md:1,children:" "}),(0,s.jsx)(_.ZP,{item:!0,xs:12,sm:12,md:6,children:(0,s.jsx)(C,{})})]})]})}}},function(e){e.O(0,[951,886,298,844,774,888,179],function(){return e(e.s=9721)}),_N_E=e.O()}]);