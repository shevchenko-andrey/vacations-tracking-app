"use strict";(self.webpackChunkvacations_tracking_app=self.webpackChunkvacations_tracking_app||[]).push([[394],{3951:function(n,t,e){e.d(t,{Q:function(){return i}});var r=e(3967),a=e(5193),i=function(){var n=(0,r.Z)();return{isMobile:(0,a.Z)(n.breakpoints.down("sm")),isDesktop:(0,a.Z)(n.breakpoints.up("md"))}}},9118:function(n,t,e){var r;e.d(t,{U:function(){return r}}),function(n){n.DOT_FORMAT="DD.MM.YYYY",n.DAY="D",n.SHORT_DAY_OF_WEEK="ddd",n.SPACE_MONTH_YEAR_FORMAT="MMMM YYYY"}(r||(r={}))},3888:function(n,t,e){var r;e.d(t,{s:function(){return r}}),function(n){n.Staycation="Staycation",n.Sports_Vacation="Sports Vacation",n.Volunteer_Vacation="Volunteer Vacation",n.Beach_Vacation="Beach Vacation",n.Cruise_Vacation="Cruise Vacation",n.Camping_Vacation="Camping vacation",n.Road_Trip_Vacation="Road Trip Vacation",n.Sightseeing_Type_Of_Vacation="Sightseeing Type of Vacation"}(r||(r={}))},4038:function(n,t,e){var r,a;e.d(t,{H:function(){return a},V:function(){return r}}),function(n){n.TABLE_VIEW="table view",n.CALENDAR_VIEW="calendar view"}(r||(r={})),function(n){n.ACTUAL="actual",n.HISTORY="history"}(a||(a={}))},4394:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r=e(4165),a=e(5861),i=e(885),o=e(8870),s=e(3888),u=e(7892),c=e.n(u),l=e(7834),d=e(919),h=e(7689),p=e(3266),f=e(2791),v=e(7047),m=e(4518),x=e(184),Z=function(){var n=(0,h.UO)(),t=(0,h.s0)(),e=(0,f.useState)(!0),u=(0,i.Z)(e,2),Z=u[0],g=u[1],b=(0,f.useState)({type:s.s.Staycation,startDate:c()(),endDate:c()(),notes:""}),y=(0,i.Z)(b,2),w=y[0],j=y[1];(0,f.useEffect)((function(){var t=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a,i,o,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,l.QJ)(t);case 2:if(e=n.sent){n.next=5;break}return n.abrupt("return");case 5:a=e.endDate,i=e.startDate,o=e.notes,s=e.type,j({type:s,notes:o,startDate:c()(i),endDate:c()(a)});case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();try{t(Number(n.requestId)),g(!1)}catch(e){}finally{g(!1)}}),[n.requestId]);var S=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.LX)(Number(n.requestId),a);case 2:t("/dushboard");case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),k=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.tE)(Number(n.requestId));case 2:t("/dushboard");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,x.jsx)(d.A,{title:"Edit request #".concat(n.requestId),backLinkPath:"/dushboard",children:(0,x.jsx)(o.Z,{pt:"60px",display:"flex",justifyContent:"center",children:Z?(0,x.jsx)(v.Z,{}):(0,x.jsxs)(o.Z,{children:[(0,x.jsx)(p.B,{initialValues:w,handleSubmit:S}),(0,x.jsx)(o.Z,{display:"flex",justifyContent:"flex-end",children:(0,x.jsx)(m.Z,{color:"error",variant:"outlined",onClick:k,children:"Delete"})})]})})})}},7834:function(n,t,e){e.d(t,{Kt:function(){return h},LX:function(){return p},QJ:function(){return d},XJ:function(){return l},m:function(){return v},tE:function(){return f}});var r=e(1413),a=e(2982),i=e(4165),o=e(5861),s=e(7892),u=e.n(s),c=e(4038),l=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(t){var e,r,a;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.filter,r=localStorage.getItem("requests")){n.next=4;break}return n.abrupt("return",[]);case 4:a=JSON.parse(r),n.t0=e,n.next=n.t0===c.H.ACTUAL?8:n.t0===c.H.HISTORY?9:10;break;case 8:return n.abrupt("return",a.filter((function(n){var t=n.endDate;return u()(t).isAfter(u()().subtract(1,"day"))})));case 9:return n.abrupt("return",a.filter((function(n){var t=n.endDate;return u()(t).isBefore(u()())})));case 10:return n.abrupt("return",a);case 11:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(t){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l({});case 2:return e=n.sent,n.abrupt("return",e.find((function(n){var e=n.id;return t===e})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(t){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l({});case 2:return e=n.sent,n.abrupt("return",e.filter((function(n){var e=n.endDate,r=n.startDate;return u()(e).isSame(t,"month")||u()(r).isSame(t,"month")})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(t,e){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f(t);case 2:return n.abrupt("return",v(e));case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(t){var e,r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l({});case 2:return e=n.sent,r=e.filter((function(n){return n.id!==t})),localStorage.setItem("requests",JSON.stringify(r)),n.abrupt("return");case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(t){var e,o;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l({});case 2:return e=n.sent,o=[].concat((0,a.Z)(e),[(0,r.Z)((0,r.Z)({},t),{},{id:u()().unix(),action:u()()})]),localStorage.setItem("requests",JSON.stringify(o)),n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},919:function(n,t,e){e.d(t,{A:function(){return y}});var r=e(885),a=e(2791),i=e(1087),o=e(4395),s=e(890),u=e(7394),c=e(4663),l=e(8870),d=e(9877),h=e(3400),p=e(3044),f=e(5473),v=e(4518),m=e(6598),x=e(184),Z=function(n){var t=n.title,e=n.auth,Z=n.email,g=n.handleLogOut,b=n.backLinkPath,y=(0,a.useState)(!1),w=(0,r.Z)(y,2),j=w[0],S=w[1],k=(0,a.useState)(null),C=(0,r.Z)(k,2),D=C[0],V=C[1];return(0,x.jsx)(o.Z,{position:"static",children:(0,x.jsx)(m.Z,{children:(0,x.jsxs)(c.Z,{children:[(0,x.jsx)(l.Z,{children:b&&(0,x.jsx)(d.Z,{component:i.rU,to:b,color:"secondary",variant:"circular",children:(0,x.jsx)(u.Z,{})})}),(0,x.jsx)(s.Z,{textAlign:"center",variant:"h6",component:"p",sx:{flexGrow:1},children:t}),e&&(0,x.jsxs)("div",{children:[(0,x.jsx)(h.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(n){S(!0),V(n.currentTarget)},color:"inherit",children:(0,x.jsx)(p.Z,{sx:{bgcolor:"#74gfhg"},children:Z[0].toUpperCase()})}),(0,x.jsx)(f.ZP,{open:j,anchorEl:D,onClose:function(){V(null),S(!1)},anchorOrigin:{vertical:"bottom",horizontal:"left"},children:(0,x.jsxs)(l.Z,{p:"20px",children:[(0,x.jsx)(s.Z,{children:Z}),(0,x.jsx)(l.Z,{color:"primary",display:"flex",justifyContent:"center",width:"100%",children:(0,x.jsx)(v.Z,{title:"Logout",onClick:g,children:"Logout"})})]})})]})]})})})},g=e(1868),b=e(266),y=function(n){var t=n.title,e=n.children,r=n.backLinkPath,a=(0,g.K)(),i=a.email,o=a.handleLogOut,s=a.isLoggedIn;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Z,{auth:s,email:i,handleLogOut:o,title:t,backLinkPath:r}),(0,x.jsx)(b.Z,{component:"main",children:e})]})}},3266:function(n,t,e){e.d(t,{B:function(){return S}});var r=e(1413),a=e(7103),i=e(7892),o=e.n(i),s=e(7792),u=e(4925),c=e(4535),l=e(9891),d=e(1747),h=e(7607),p=e(1161),f=e(6571),v=e(9118),m=e(4518),x=e(7391),Z=e(8870),g=e(5705),b=e(3888),y=e(3951),w=e(184),j=a.Ry().shape({type:a.Z_().min(2).max(20).required(),startDate:a.hT().required(),endDate:a.hT().min(a.iH("startDate"),"You cannot assign the end of the vacation before it starts").required(),notes:a.Z_()}),S=function(n){var t=n.handleSubmit,e=n.initialValues,a=(0,y.Q)(),i=a.isMobile,S=a.isDesktop,k=(0,g.TA)({initialValues:null!==e&&void 0!==e?e:{type:b.s.Sports_Vacation,startDate:null,endDate:null,notes:""},validationSchema:j,onSubmit:t}),C=i?p.O:h.$,D=o()().add(365,"days"),V=o()();return(0,w.jsxs)(Z.Z,{component:"form",onSubmit:k.handleSubmit,alignItems:"center",noValidate:!0,display:"flex",justifyContent:"space-between",children:[(0,w.jsxs)(Z.Z,{children:[(0,w.jsxs)(Z.Z,{children:[(0,w.jsx)(u.Z,{margin:"dense",id:"select-label-type",children:"Type"}),(0,w.jsxs)(c.Z,{fullWidth:!0,placeholder:"Type",labelId:"select-label-type",id:"vacation-type-select",name:"type",value:k.values.type,onChange:k.handleChange,children:[(0,w.jsx)(l.Z,{value:b.s.Staycation,children:"Staycation"}),(0,w.jsx)(l.Z,{value:b.s.Sports_Vacation,children:"Sports Vacation"}),(0,w.jsx)(l.Z,{value:b.s.Cruise_Vacation,children:"Cruise Vacation"}),(0,w.jsx)(l.Z,{value:b.s.Volunteer_Vacation,children:"Volunteer Vacation"}),(0,w.jsx)(l.Z,{value:b.s.Beach_Vacation,children:"Beach Vacation"}),(0,w.jsx)(l.Z,{value:b.s.Camping_Vacation,children:"Camping vacation"}),(0,w.jsx)(l.Z,{value:b.s.Road_Trip_Vacation,children:"Road Trip Vacation"}),(0,w.jsx)(l.Z,{value:b.s.Sightseeing_Type_Of_Vacation,children:"Sightseeing Type Of Vacation"})]})]}),(0,w.jsxs)(f._,{dateAdapter:s.y,children:[(0,w.jsx)(C,{maxDate:D,minDate:V,label:"Start Date",inputFormat:v.U.DOT_FORMAT,value:k.values.startDate,onChange:function(n){return k.setFieldValue("startDate",n)},renderInput:function(n){return(0,w.jsx)(x.Z,(0,r.Z)({error:k.touched.startDate&&Boolean(k.errors.endDate),helperText:k.errors.endDate&&k.touched.startDate?k.errors.endDate:"",fullWidth:!0,margin:"normal",required:!0},n))}}),(0,w.jsx)(C,{maxDate:D,minDate:k.values.startDate,label:"End Date",inputFormat:v.U.DOT_FORMAT,value:k.values.endDate,onChange:function(n){return k.setFieldValue("endDate",n)},renderInput:function(n){return(0,w.jsx)(x.Z,(0,r.Z)({fullWidth:!0,margin:"normal",required:!0},n))}})]}),i&&(0,w.jsx)(d.Z,{id:"notes",style:{display:"block",width:"100%",marginTop:"10px",padding:"10px"},minRows:15,name:"notes",onChange:k.handleChange,value:k.values.notes}),(0,w.jsx)(m.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Submit"})]}),S&&(0,w.jsx)(d.Z,{id:"notes",style:{display:"block",width:"100%",marginLeft:"20px",padding:"10px"},minRows:17,name:"notes",onChange:k.handleChange,value:k.values.notes})]})}},7047:function(n,t,e){e.d(t,{Z:function(){return A}});var r=e(168),a=e(3366),i=e(7462),o=e(2791),s=e(8182),u=e(2554),c=e(4419);function l(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function d(n){return parseFloat(n)}var h=e(2065),p=e(6934),f=e(1402),v=e(5878),m=e(1217);function x(n){return(0,m.Z)("MuiSkeleton",n)}(0,v.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var Z,g,b,y,w,j,S,k,C=e(184),D=["animation","className","component","height","style","variant","width"],V=(0,u.F4)(w||(w=Z||(Z=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),_=(0,u.F4)(j||(j=g||(g=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),T=(0,p.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t[e.variant],!1!==e.animation&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})((function(n){var t=n.theme,e=n.ownerState,r=l(t.shape.borderRadius)||"px",a=d(t.shape.borderRadius);return(0,i.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,h.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(r,"/").concat(Math.round(a/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,u.iv)(S||(S=b||(b=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),V)}),(function(n){var t=n.ownerState,e=n.theme;return"wave"===t.animation&&(0,u.iv)(k||(k=y||(y=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),_,(e.vars||e).palette.action.hover)})),A=o.forwardRef((function(n,t){var e=(0,f.Z)({props:n,name:"MuiSkeleton"}),r=e.animation,o=void 0===r?"pulse":r,u=e.className,l=e.component,d=void 0===l?"span":l,h=e.height,p=e.style,v=e.variant,m=void 0===v?"text":v,Z=e.width,g=(0,a.Z)(e,D),b=(0,i.Z)({},e,{animation:o,component:d,variant:m,hasChildren:Boolean(g.children)}),y=function(n){var t=n.classes,e=n.variant,r=n.animation,a=n.hasChildren,i=n.width,o=n.height,s={root:["root",e,r,a&&"withChildren",a&&!i&&"fitContent",a&&!o&&"heightAuto"]};return(0,c.Z)(s,x,t)}(b);return(0,C.jsx)(T,(0,i.Z)({as:d,ref:t,className:(0,s.Z)(y.root,u),ownerState:b},g,{style:(0,i.Z)({width:Z,height:h},p)}))}))}}]);
//# sourceMappingURL=394.2168e746.chunk.js.map