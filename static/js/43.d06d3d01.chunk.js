"use strict";(self.webpackChunkvacations_tracking_app=self.webpackChunkvacations_tracking_app||[]).push([[43],{5546:function(e,t,n){var r,i;n.d(t,{_:function(){return i},l:function(){return r}}),function(e){e.TABLE_VIEW="table view",e.CALENDAR_VIEW="calendar view"}(r||(r={})),function(e){e.ACTUAL="actual",e.HISTORY="history"}(i||(i={}))},8043:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(885),i=n(2791),a=n(1087),c=n(2419),s=n(919),l=n(5546),o=n(6015),u=n(148),d=n(8854),h=n(5590),f=n(4565),p=n(7205),x=n(4165),Z=n(5861),j=n(9940),v=n(1441),m=n(7834),g=n(184),w=[{field:"id",headerName:"Absence ID",width:130},{field:"type",headerName:"Type",width:120},{field:"startDate",headerName:"Start Date",width:130},{field:"endDate",headerName:"End Date",width:130},{field:"notes",headerName:"Notes",width:500},{field:"actions",headerName:"Actions",width:130}],A=function(e){var t=e.filter,n=(0,i.useState)([]),a=(0,r.Z)(n,2),c=a[0],s=a[1],l=(0,i.useState)(!1),u=(0,r.Z)(l,2),d=u[0],h=u[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,Z.Z)((0,x.Z)().mark((function e(){var n;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.X)({filter:t});case 2:n=e.sent,s(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{h(!0),e()}catch(n){console.log(n)}finally{h(!1)}}),[t]),d?(0,g.jsx)(v.Z,{width:"100%",component:"div",height:"400px",children:(0,g.jsx)(j._,{rows:c,columns:w})}):c.length<1?(0,g.jsx)(o.Z,{display:"flex",justifyContent:"center",children:(0,g.jsx)(f.Z,{children:"First add data"})}):(0,g.jsx)(j._,{rows:c,columns:w,pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!0})};function b(){var e=(0,i.useState)(l._.ACTUAL),t=(0,r.Z)(e,2),n=t[0],x=t[1],Z=(0,i.useState)(l.l.TABLE_VIEW),j=(0,r.Z)(Z,2),v=j[0],m=j[1];return(0,g.jsx)(s.A,{title:"Dashboard",children:(0,g.jsxs)(o.Z,{component:"section",pt:"30px",pb:"30px",children:[(0,g.jsxs)(o.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,g.jsx)(o.Z,{maxWidth:"400px",children:(0,g.jsxs)(u.Z,{fullWidth:!0,color:"primary",value:n,exclusive:!0,onChange:function(e,t){x(t)},"aria-label":"Platform",children:[(0,g.jsx)(d.Z,{fullWidth:!0,value:"actual",children:"Actual"}),(0,g.jsx)(d.Z,{fullWidth:!0,value:"history",children:"History"})]})}),(0,g.jsx)(o.Z,{children:(0,g.jsxs)(h.Z,{component:a.rU,to:"/vacation/request",color:"primary",variant:"extended","aria-label":"add",children:[(0,g.jsx)(c.Z,{}),(0,g.jsx)(o.Z,{pr:"20px",pl:"20px",children:(0,g.jsx)(f.Z,{children:"New request"})})]})}),(0,g.jsx)(o.Z,{children:(0,g.jsx)(p.Z,{variant:"contained",onClick:function(){v===l.l.TABLE_VIEW?m(l.l.CALENDAR_VIEW):m(l.l.TABLE_VIEW)},children:v})})]}),(0,g.jsx)(o.Z,{overflow:"auto",pt:"30px",height:"400px",width:"100%",children:v===l.l.TABLE_VIEW?(0,g.jsx)(A,{filter:n}):null})]})})}},7834:function(e,t,n){n.d(t,{X:function(){return u},m:function(){return d}});var r=n(1413),i=n(2982),a=n(4165),c=n(5861),s=n(2426),l=n.n(s),o=n(5546),u=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(t){var n,r,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.filter,r=localStorage.getItem("requests")){e.next=4;break}return e.abrupt("return",[]);case 4:i=JSON.parse(r),e.t0=n,e.next=e.t0===o._.ACTUAL?8:e.t0===o._.HISTORY?9:10;break;case 8:return e.abrupt("return",i.filter((function(e){var t=e.endDate;return l()(t).isAfter(l()())})));case 9:return e.abrupt("return",i.filter((function(e){var t=e.endDate;return l()(t).isBefore(l()())})));case 10:return e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(t){var n,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({});case 2:return n=e.sent,c=[].concat((0,i.Z)(n),[(0,r.Z)((0,r.Z)({},t),{},{id:l()(t.endDate).unix()})]),localStorage.setItem("requests",JSON.stringify(c)),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},919:function(e,t,n){n.d(t,{A:function(){return j}});var r=n(885),i=n(2791),a=n(2892),c=n(4565),s=n(3811),l=n(4666),o=n(3978),u=n(3278),d=n(6015),h=n(7205),f=n(184),p=function(e){var t=e.title,n=e.auth,p=e.email,x=e.handleLogOut,Z=(0,i.useState)(!1),j=(0,r.Z)(Z,2),v=j[0],m=j[1],g=(0,i.useState)(null),w=(0,r.Z)(g,2),A=w[0],b=w[1];return(0,f.jsx)(a.Z,{position:"static",children:(0,f.jsxs)(l.Z,{children:[(0,f.jsx)(c.Z,{textAlign:"center",variant:"h6",component:"p",sx:{flexGrow:1},children:t}),n&&(0,f.jsxs)("div",{children:[(0,f.jsx)(s.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){m(!0),b(e.currentTarget)},color:"inherit",children:(0,f.jsx)(o.Z,{sx:{bgcolor:"#74gfhg"},children:p[0].toUpperCase()})}),(0,f.jsx)(u.ZP,{open:v,anchorEl:A,onClose:function(){b(null),m(!1)},anchorOrigin:{vertical:"bottom",horizontal:"left"},children:(0,f.jsxs)(d.Z,{p:"20px",children:[(0,f.jsx)(c.Z,{children:p}),(0,f.jsx)(d.Z,{color:"primary",display:"flex",justifyContent:"center",width:"100%",children:(0,f.jsx)(h.Z,{title:"Logout",onClick:x,children:"Logout"})})]})})]})]})})},x=n(1868),Z=n(7020),j=function(e){var t=e.title,n=e.children,r=(0,x.K)(),i=r.email,a=r.handleLogOut,c=r.isLoggedIn;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{auth:c,email:i,handleLogOut:a,title:t}),(0,f.jsx)(Z.Z,{component:"main",children:n})]})}}}]);
//# sourceMappingURL=43.d06d3d01.chunk.js.map