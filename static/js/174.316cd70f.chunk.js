"use strict";(self.webpackChunkvacations_tracking_app=self.webpackChunkvacations_tracking_app||[]).push([[174],{3951:function(n,t,e){e.d(t,{Q:function(){return i}});var r=e(3967),a=e(5193),i=function(){var n=(0,r.Z)();return{isMobile:(0,a.Z)(n.breakpoints.down("sm")),isDesktop:(0,a.Z)(n.breakpoints.up("md"))}}},9118:function(n,t,e){var r;e.d(t,{U:function(){return r}}),function(n){n.DOT_FORMAT="DD.MM.YYYY",n.DAY="D",n.SHORT_DAY_OF_WEEK="ddd",n.SPACE_MONTH_YEAR_FORMAT="MMMM YYYY"}(r||(r={}))},3888:function(n,t,e){var r;e.d(t,{s:function(){return r}}),function(n){n.Staycation="Staycation",n.Sports_Vacation="Sports Vacation",n.Volunteer_Vacation="Volunteer Vacation",n.Beach_Vacation="Beach Vacation",n.Cruise_Vacation="Cruise Vacation",n.Camping_Vacation="Camping vacation",n.Road_Trip_Vacation="Road Trip Vacation",n.Sightseeing_Type_Of_Vacation="Sightseeing Type of Vacation"}(r||(r={}))},4038:function(n,t,e){var r,a;e.d(t,{H:function(){return a},V:function(){return r}}),function(n){n.TABLE_VIEW="table view",n.CALENDAR_VIEW="calendar view"}(r||(r={})),function(n){n.ACTUAL="actual",n.HISTORY="history"}(a||(a={}))},3174:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r=e(4165),a=e(5861),i=e(8870),u=e(7834),o=e(919),c=e(7689),s=e(3266),l=e(184),d=function(){var n=(0,c.s0)(),t=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.m)(e);case 2:n("/dushboard");case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return(0,l.jsx)(o.A,{title:"Request new vacantions",backLinkPath:"/dushboard",children:(0,l.jsx)(i.Z,{pt:"60px",display:"flex",justifyContent:"center",children:(0,l.jsx)(s.B,{handleSubmit:t})})})}},7834:function(n,t,e){e.d(t,{Kt:function(){return p},LX:function(){return f},QJ:function(){return d},XJ:function(){return l},m:function(){return x},tE:function(){return h}});var r=e(1413),a=e(2982),i=e(4165),u=e(5861),o=e(7892),c=e.n(o),s=e(4038),l=function(){var n=(0,u.Z)((0,i.Z)().mark((function n(t){var e,r,a;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.filter,r=localStorage.getItem("requests")){n.next=4;break}return n.abrupt("return",[]);case 4:a=JSON.parse(r),n.t0=e,n.next=n.t0===s.H.ACTUAL?8:n.t0===s.H.HISTORY?9:10;break;case 8:return n.abrupt("return",a.filter((function(n){var t=n.endDate;return c()(t).isAfter(c()().subtract(1,"day"))})));case 9:return n.abrupt("return",a.filter((function(n){var t=n.endDate;return c()(t).isBefore(c()())})));case 10:return n.abrupt("return",a);case 11:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,u.Z)((0,i.Z)().mark((function n(t){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l({});case 2:return e=n.sent,n.abrupt("return",e.find((function(n){var e=n.id;return t===e})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,u.Z)((0,i.Z)().mark((function n(t){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l({});case 2:return e=n.sent,n.abrupt("return",e.filter((function(n){var e=n.endDate,r=n.startDate;return c()(e).isSame(t,"month")||c()(r).isSame(t,"month")})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,u.Z)((0,i.Z)().mark((function n(t,e){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h(t);case 2:return n.abrupt("return",x(e));case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),h=function(){var n=(0,u.Z)((0,i.Z)().mark((function n(t){var e,r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l({});case 2:return e=n.sent,r=e.filter((function(n){return n.id!==t})),localStorage.setItem("requests",JSON.stringify(r)),n.abrupt("return");case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,u.Z)((0,i.Z)().mark((function n(t){var e,u;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l({});case 2:return e=n.sent,u=[].concat((0,a.Z)(e),[(0,r.Z)((0,r.Z)({},t),{},{id:c()().unix(),action:c()()})]),localStorage.setItem("requests",JSON.stringify(u)),n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},919:function(n,t,e){e.d(t,{A:function(){return j}});var r=e(885),a=e(2791),i=e(1087),u=e(4395),o=e(890),c=e(7394),s=e(4663),l=e(8870),d=e(9877),p=e(3400),f=e(3044),h=e(5473),x=e(4518),v=e(6598),m=e(184),Z=function(n){var t=n.title,e=n.auth,Z=n.email,g=n.handleLogOut,b=n.backLinkPath,j=(0,a.useState)(!1),y=(0,r.Z)(j,2),V=y[0],_=y[1],D=(0,a.useState)(null),S=(0,r.Z)(D,2),k=S[0],T=S[1];return(0,m.jsx)(u.Z,{position:"static",children:(0,m.jsx)(v.Z,{children:(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(l.Z,{children:b&&(0,m.jsx)(d.Z,{component:i.rU,to:b,color:"secondary",variant:"circular",children:(0,m.jsx)(c.Z,{})})}),(0,m.jsx)(o.Z,{textAlign:"center",variant:"h6",component:"p",sx:{flexGrow:1},children:t}),e&&(0,m.jsxs)("div",{children:[(0,m.jsx)(p.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(n){_(!0),T(n.currentTarget)},color:"inherit",children:(0,m.jsx)(f.Z,{sx:{bgcolor:"#74gfhg"},children:Z[0].toUpperCase()})}),(0,m.jsx)(h.ZP,{open:V,anchorEl:k,onClose:function(){T(null),_(!1)},anchorOrigin:{vertical:"bottom",horizontal:"left"},children:(0,m.jsxs)(l.Z,{p:"20px",children:[(0,m.jsx)(o.Z,{children:Z}),(0,m.jsx)(l.Z,{color:"primary",display:"flex",justifyContent:"center",width:"100%",children:(0,m.jsx)(x.Z,{title:"Logout",onClick:g,children:"Logout"})})]})})]})]})})})},g=e(1868),b=e(266),j=function(n){var t=n.title,e=n.children,r=n.backLinkPath,a=(0,g.K)(),i=a.email,u=a.handleLogOut,o=a.isLoggedIn;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Z,{auth:o,email:i,handleLogOut:u,title:t,backLinkPath:r}),(0,m.jsx)(b.Z,{component:"main",children:e})]})}},3266:function(n,t,e){e.d(t,{B:function(){return _}});var r=e(1413),a=e(7103),i=e(7892),u=e.n(i),o=e(7792),c=e(4925),s=e(4535),l=e(9891),d=e(1747),p=e(7607),f=e(1161),h=e(6571),x=e(9118),v=e(4518),m=e(7391),Z=e(8870),g=e(5705),b=e(3888),j=e(3951),y=e(184),V=a.Ry().shape({type:a.Z_().min(2).max(20).required(),startDate:a.hT().required(),endDate:a.hT().min(a.iH("startDate"),"You cannot assign the end of the vacation before it starts").required(),notes:a.Z_()}),_=function(n){var t=n.handleSubmit,e=n.initialValues,a=(0,j.Q)(),i=a.isMobile,_=a.isDesktop,D=(0,g.TA)({initialValues:null!==e&&void 0!==e?e:{type:b.s.Sports_Vacation,startDate:null,endDate:null,notes:""},validationSchema:V,onSubmit:t}),S=i?f.O:p.$,k=u()().add(365,"days"),T=u()();return(0,y.jsxs)(Z.Z,{component:"form",onSubmit:D.handleSubmit,alignItems:"center",noValidate:!0,display:"flex",justifyContent:"space-between",children:[(0,y.jsxs)(Z.Z,{children:[(0,y.jsxs)(Z.Z,{children:[(0,y.jsx)(c.Z,{margin:"dense",id:"select-label-type",children:"Type"}),(0,y.jsxs)(s.Z,{fullWidth:!0,placeholder:"Type",labelId:"select-label-type",id:"vacation-type-select",name:"type",value:D.values.type,onChange:D.handleChange,children:[(0,y.jsx)(l.Z,{value:b.s.Staycation,children:"Staycation"}),(0,y.jsx)(l.Z,{value:b.s.Sports_Vacation,children:"Sports Vacation"}),(0,y.jsx)(l.Z,{value:b.s.Cruise_Vacation,children:"Cruise Vacation"}),(0,y.jsx)(l.Z,{value:b.s.Volunteer_Vacation,children:"Volunteer Vacation"}),(0,y.jsx)(l.Z,{value:b.s.Beach_Vacation,children:"Beach Vacation"}),(0,y.jsx)(l.Z,{value:b.s.Camping_Vacation,children:"Camping vacation"}),(0,y.jsx)(l.Z,{value:b.s.Road_Trip_Vacation,children:"Road Trip Vacation"}),(0,y.jsx)(l.Z,{value:b.s.Sightseeing_Type_Of_Vacation,children:"Sightseeing Type Of Vacation"})]})]}),(0,y.jsxs)(h._,{dateAdapter:o.y,children:[(0,y.jsx)(S,{maxDate:k,minDate:T,label:"Start Date",inputFormat:x.U.DOT_FORMAT,value:D.values.startDate,onChange:function(n){return D.setFieldValue("startDate",n)},renderInput:function(n){return(0,y.jsx)(m.Z,(0,r.Z)({error:D.touched.startDate&&Boolean(D.errors.endDate),helperText:D.errors.endDate&&D.touched.startDate?D.errors.endDate:"",fullWidth:!0,margin:"normal",required:!0},n))}}),(0,y.jsx)(S,{maxDate:k,minDate:D.values.startDate,label:"End Date",inputFormat:x.U.DOT_FORMAT,value:D.values.endDate,onChange:function(n){return D.setFieldValue("endDate",n)},renderInput:function(n){return(0,y.jsx)(m.Z,(0,r.Z)({fullWidth:!0,margin:"normal",required:!0},n))}})]}),i&&(0,y.jsx)(d.Z,{id:"notes",style:{display:"block",width:"100%",marginTop:"10px",padding:"10px"},minRows:15,name:"notes",onChange:D.handleChange,value:D.values.notes}),(0,y.jsx)(v.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Submit"})]}),_&&(0,y.jsx)(d.Z,{id:"notes",style:{display:"block",width:"100%",marginLeft:"20px",padding:"10px"},minRows:17,name:"notes",onChange:D.handleChange,value:D.values.notes})]})}}}]);
//# sourceMappingURL=174.316cd70f.chunk.js.map