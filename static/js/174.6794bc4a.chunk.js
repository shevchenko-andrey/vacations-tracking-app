"use strict";(self.webpackChunkvacations_tracking_app=self.webpackChunkvacations_tracking_app||[]).push([[174],{3951:function(n,t,e){e.d(t,{Q:function(){return i}});var r=e(4142),a=e(2797),i=function(){var n=(0,r.Z)();return{isMobile:(0,a.Z)(n.breakpoints.down("sm")),isDesktop:(0,a.Z)(n.breakpoints.up("md"))}}},9118:function(n,t,e){var r;e.d(t,{U:function(){return r}}),function(n){n.DOT_FORMAT="DD.MM.YYYY",n.DAY="D",n.SHORT_DAY_OF_WEEK="ddd",n["SPA\u0421E_FULL_FORMAT"]="DD MM YYYY hh:mm:ss",n.SPACE_MONTH_YEAR_FORMAT="MMMM YYYY"}(r||(r={}))},4038:function(n,t,e){var r,a;e.d(t,{H:function(){return a},V:function(){return r}}),function(n){n.TABLE_VIEW="table view",n.CALENDAR_VIEW="calendar view"}(r||(r={})),function(n){n.ACTUAL="actual",n.HISTORY="history"}(a||(a={}))},3174:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r=e(4165),a=e(5861),i=e(228),u=e(7834),o=e(919),s=e(7689),c=e(3266),l=e(184),d=function(){var n=(0,s.s0)(),t=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.m)(e);case 2:n("/dushboard");case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return(0,l.jsx)(o.A,{title:"Request new vacantions",backLinkPath:"/dushboard",children:(0,l.jsx)(i.Z,{pt:"60px",display:"flex",justifyContent:"center",children:(0,l.jsx)(c.B,{handleSubmit:t})})})}},7834:function(n,t,e){e.d(t,{Kt:function(){return f},LX:function(){return h},QJ:function(){return p},XJ:function(){return d},m:function(){return m},tE:function(){return x}});var r=e(1413),a=e(2982),i=e(4165),u=e(5861),o=e(9118),s=e(7892),c=e.n(s),l=e(4038),d=function(){var n=(0,u.Z)((0,i.Z)().mark((function n(t){var e,r,a;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.filter,r=localStorage.getItem("requests")){n.next=4;break}return n.abrupt("return",[]);case 4:a=JSON.parse(r),n.t0=e,n.next=n.t0===l.H.ACTUAL?8:n.t0===l.H.HISTORY?9:10;break;case 8:return n.abrupt("return",a.filter((function(n){var t=n.endDate;return c()(t).isAfter(c()())})));case 9:return n.abrupt("return",a.filter((function(n){var t=n.endDate;return c()(t).isBefore(c()())})));case 10:return n.abrupt("return",a);case 11:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,u.Z)((0,i.Z)().mark((function n(t){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d({});case 2:return e=n.sent,n.abrupt("return",e.find((function(n){var e=n.id;return t===e})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,u.Z)((0,i.Z)().mark((function n(t){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d({});case 2:return e=n.sent,n.abrupt("return",e.filter((function(n){var e=n.endDate,r=n.startDate;return c()(e).isSame(t,"month")||c()(r).isSame(t,"month")})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,u.Z)((0,i.Z)().mark((function n(t,e){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x(t);case 2:return n.abrupt("return",m(e));case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),x=function(){var n=(0,u.Z)((0,i.Z)().mark((function n(t){var e,r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d({});case 2:return e=n.sent,r=e.filter((function(n){return n.id!==t})),localStorage.setItem("requests",JSON.stringify(r)),n.abrupt("return");case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,u.Z)((0,i.Z)().mark((function n(t){var e,u;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d({});case 2:return e=n.sent,u=[].concat((0,a.Z)(e),[(0,r.Z)((0,r.Z)({},t),{},{id:c()().unix(),actions:c()().format(o.U["SPA\u0421E_FULL_FORMAT"])})]),localStorage.setItem("requests",JSON.stringify(u)),n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},919:function(n,t,e){e.d(t,{A:function(){return j}});var r=e(885),a=e(2791),i=e(1087),u=e(2892),o=e(4565),s=e(7394),c=e(4666),l=e(228),d=e(5590),p=e(3811),f=e(3978),h=e(4407),x=e(1091),m=e(6598),v=e(184),Z=function(n){var t=n.title,e=n.auth,Z=n.email,b=n.handleLogOut,g=n.backLinkPath,j=(0,a.useState)(!1),y=(0,r.Z)(j,2),k=y[0],w=y[1],D=(0,a.useState)(null),A=(0,r.Z)(D,2),S=A[0],T=A[1];return(0,v.jsx)(u.Z,{position:"static",children:(0,v.jsx)(m.Z,{children:(0,v.jsxs)(c.Z,{children:[(0,v.jsx)(l.Z,{children:g&&(0,v.jsx)(d.Z,{component:i.rU,to:g,color:"secondary",variant:"circular",children:(0,v.jsx)(s.Z,{})})}),(0,v.jsx)(o.Z,{textAlign:"center",variant:"h6",component:"p",sx:{flexGrow:1},children:t}),e&&(0,v.jsxs)("div",{children:[(0,v.jsx)(p.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(n){w(!0),T(n.currentTarget)},color:"inherit",children:(0,v.jsx)(f.Z,{sx:{bgcolor:"#74gfhg"},children:Z[0].toUpperCase()})}),(0,v.jsx)(h.ZP,{open:k,anchorEl:S,onClose:function(){T(null),w(!1)},anchorOrigin:{vertical:"bottom",horizontal:"left"},children:(0,v.jsxs)(l.Z,{p:"20px",children:[(0,v.jsx)(o.Z,{children:Z}),(0,v.jsx)(l.Z,{color:"primary",display:"flex",justifyContent:"center",width:"100%",children:(0,v.jsx)(x.Z,{title:"Logout",onClick:b,children:"Logout"})})]})})]})]})})})},b=e(1868),g=e(7020),j=function(n){var t=n.title,e=n.children,r=n.backLinkPath,a=(0,b.K)(),i=a.email,u=a.handleLogOut,o=a.isLoggedIn;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Z,{auth:o,email:i,handleLogOut:u,title:t,backLinkPath:r}),(0,v.jsx)(g.Z,{component:"main",children:e})]})}},3266:function(n,t,e){e.d(t,{B:function(){return g}});var r=e(1413),a=e(7103),i=e(7892),u=e.n(i),o=e(7792),s=e(1747),c=e(7607),l=e(4208),d=e(6571),p=e(9118),f=e(1091),h=e(5017),x=e(228),m=e(5705),v=e(3951),Z=e(184),b=a.Ry().shape({type:a.Z_().min(2).max(20).required(),startDate:a.hT().required(),endDate:a.hT().required(),notes:a.Z_()}),g=function(n){var t=n.handleSubmit,e=n.initialValues,a=(0,v.Q)(),i=a.isMobile,g=a.isDesktop,j=(0,m.TA)({initialValues:null!==e&&void 0!==e?e:{type:"",startDate:u()(),endDate:u()(),notes:""},validationSchema:b,onSubmit:t}),y=i?l.O:c.$;return(0,Z.jsxs)(x.Z,{component:"form",onSubmit:j.handleSubmit,alignItems:"center",noValidate:!0,display:"flex",justifyContent:"space-between",children:[(0,Z.jsxs)(x.Z,{children:[(0,Z.jsx)(h.Z,{margin:"normal",required:!0,fullWidth:!0,id:"type",label:"Vacation Type",name:"type",onChange:j.handleChange,value:j.values.type,error:j.touched.type&&Boolean(j.errors.type),helperText:j.touched.type&&j.errors.type}),(0,Z.jsxs)(d._,{dateAdapter:o.y,children:[(0,Z.jsx)(y,{label:"Start Date",inputFormat:p.U.DOT_FORMAT,value:j.values.startDate,onChange:function(n){return j.setFieldValue("startDate",n)},renderInput:function(n){return(0,Z.jsx)(h.Z,(0,r.Z)({fullWidth:!0,margin:"normal",required:!0},n))}}),(0,Z.jsx)(y,{label:"End Date",inputFormat:p.U.DOT_FORMAT,value:j.values.endDate,onChange:function(n){return j.setFieldValue("endDate",n)},renderInput:function(n){return(0,Z.jsx)(h.Z,(0,r.Z)({fullWidth:!0,margin:"normal",required:!0},n))}})]}),i&&(0,Z.jsx)(s.Z,{id:"notes",style:{display:"block",width:"100%",marginTop:"10px",padding:"10px"},minRows:15,name:"notes",onChange:j.handleChange,value:j.values.notes}),(0,Z.jsx)(f.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Submit"})]}),g&&(0,Z.jsx)(s.Z,{id:"notes",style:{display:"block",width:"100%",marginLeft:"20px",padding:"10px"},minRows:17,name:"notes",onChange:j.handleChange,value:j.values.notes})]})}}}]);
//# sourceMappingURL=174.6794bc4a.chunk.js.map