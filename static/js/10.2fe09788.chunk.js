(this.webpackJsonpinstagram_clone=this.webpackJsonpinstagram_clone||[]).push([[10],{56:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(53),a=n.n(c),r=n(54),s=n(30),i=n(1),l=n(31),o=n(55);function u(){var e=Object(i.useState)({}),t=Object(s.a)(e,2),n=t[0],c=t[1],u=Object(i.useContext)(l.a).user;return Object(i.useEffect)((function(){function e(){return(e=Object(r.a)(a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.i)(u.uid);case 2:t=e.sent,n=Object(s.a)(t,1),r=n[0],c(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(null===u||void 0===u?void 0:u.uid)&&function(){e.apply(this,arguments)}()}),[u]),{userInfo:n}}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(1),a=n(18),r=n(19),s=n(31),i=n(9),l=n(56),o=n.p+"static/media/newPost.84a497c2.png",u=n(5),d=n(59),j=n(4);function b(){var e=Object(c.useContext)(r.a).firebase,t=Object(c.useContext)(s.a).user,n=Object(l.a)().userInfo,b=Object(u.g)();return Object(j.jsx)("header",{className:"h-16 bg-white border-b border-gray-primary sticky top-0 z-50",children:Object(j.jsx)("div",{className:"container mx-auto max-w-screen-lg h-full",children:Object(j.jsxs)("div",{className:"flex justify-between h-full",children:[Object(j.jsx)("div",{className:"text-gray-700 text-center flex items-center align-items cursor-pointer",children:Object(j.jsx)("h1",{className:"flex justify-center w-full",children:Object(j.jsx)(a.b,{to:i.a,"aria-label":"instagram header",children:Object(j.jsx)("img",{src:d.a,alt:"instagram header",className:"mt-2 w-6/12"})})})}),Object(j.jsx)("div",{className:"text-gray-700 text-center flex items-center align-items",children:t?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(a.b,{to:{pathname:"".concat(i.g),state:{type:"post"}},"aria-label":"upload post",children:Object(j.jsx)("img",{src:o,alt:"add post",className:"w-8 mr-6 cursor-pointer"})}),Object(j.jsx)(a.b,{to:i.a,"aria-label":"timeline",children:Object(j.jsxs)("svg",{className:"w-8 mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}),Object(j.jsx)("title",{children:"Timeline"})]})}),Object(j.jsx)("button",{type:"button",title:"Sign-out",onClick:function(){return e.auth().signOut()},onKeyDown:function(t){"enter"===t.key&&(b.push("/login"),e.auth().signOut())},children:Object(j.jsx)("svg",{className:"w-8 mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})}),Object(j.jsx)("div",{className:"flex items-center cursor-pointer",children:Object(j.jsx)(a.b,{to:"/p/".concat(n.username),children:Object(j.jsx)("img",{title:"".concat(n.username),className:"rounded-full h-8 w-8 flex object-cover",src:"".concat(n.avatar),alt:"".concat(n.username," profile")})})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(a.b,{to:i.b,children:Object(j.jsx)("button",{type:"button",className:"bg-blue-primary font-bold text-sm rounded text-white w-20 h-8",children:"Login"})}),Object(j.jsx)(a.b,{to:i.f,children:Object(j.jsx)("button",{type:"button",className:"bg-white font-bold text-sm rounded text-blue-primary w-20 h-8",children:"Sign-up"})})]})})]})})})}},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var c=n(53),a=n.n(c),r=n(54),s=n(30),i=n(1),l=n(18),o=n(55),u=n(9),d=n(5),j=n(56),b=n(4);function h(e){var t=e.userId,n=e.docId,c=e.photoStorageName,h=e.page,m=Object(i.useState)(""),x=Object(s.a)(m,2),f=x[0],p=x[1],O=Object(i.useState)(!1),g=Object(s.a)(O,2),v=g[0],y=g[1],w=Object(j.a)().userInfo,N=Object(d.g)();Object(i.useEffect)((function(){function e(){return(e=Object(r.a)(a.a.mark((function e(){var n,c,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.i)(t);case 2:n=e.sent,c=Object(s.a)(n,1),(r=c[0]).userId?p(r):N.push(u.c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,N]);return Object(b.jsx)("div",{className:"flex border-b border-gray-primary h-4 p-4 py-8",children:Object(b.jsxs)("div",{className:"flex items-center justify-between w-full",children:[Object(b.jsxs)(l.b,{to:"/p/".concat(f.username),className:"flex items-center",children:[Object(b.jsx)("img",{src:f.avatar,className:"rounded-full h-8 w-8 flex mr-3 object-cover",alt:"".concat(f.username," avi")}),Object(b.jsx)("p",{className:"font-bold",children:f.username})]}),Object(b.jsxs)("div",{className:"flex justify-center items-center",children:[v&&Object(b.jsx)("button",{onClick:function(){Object(o.b)(n,c),setTimeout((function(){N.push("/")}),500)},className:"hover:bg-red-primary hover:text-white font-bold h-5/6 px-2 py-1 rounded mr-6 duration-150",title:"confirm delete",children:"delete?"}),w.userId===f.userId&&"post"===h&&Object(b.jsx)("p",{className:"font-bold text-4xl hover:text-red-primary mb-2 cursor-pointer duration-150 ".concat(v?"hover:text-green-primary":"hover:text-red-primary"),onClick:function(){y(!v)},title:v?"cancel delete":"delete your post",children:"\xd7"})]})]})})}},75:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var c=n(30),a=n(1),r=n(5),s=n(58),i=n(53),l=n.n(i),o=n(54),u=n(81),d=function(e){return new Promise((function(t,n){var c=new Image;c.addEventListener("load",(function(){return t(c)})),c.addEventListener("error",(function(e){return n(e)})),c.setAttribute("crossOrigin","anonymous"),c.src=e}))};function j(e){return e*Math.PI/180}function b(e,t){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(l.a.mark((function e(t,n){var c,a,r,s,i,o,u,b=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=b.length>2&&void 0!==b[2]?b[2]:0,e.next=3,d(t);case 3:return a=e.sent,r=document.createElement("canvas"),s=r.getContext("2d"),i=Math.max(a.width,a.height),o=i/2*Math.sqrt(2)*2,r.width=o,r.height=o,s.translate(o/2,o/2),s.rotate(j(c)),s.translate(-o/2,-o/2),s.drawImage(a,o/2-.5*a.width,o/2-.5*a.height),u=s.getImageData(0,0,o,o),r.width=n.width,r.height=n.height,s.putImageData(u,Math.round(0-o/2+.5*a.width-n.x),Math.round(0-o/2+.5*a.height-n.y)),e.abrupt("return",r.toDataURL("image/jpeg"));case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(75);var m=n(4);function x(e){var t=e.selectedImage,n=e.handleImage,r=e.handleEditingCancel,s=e.handleEditingContinue,i=e.handleFinishEditingContinue,d=Object(a.useState)({x:0,y:0}),j=Object(c.a)(d,2),h=j[0],x=j[1],f=Object(a.useState)(1),p=Object(c.a)(f,2),O=p[0],g=p[1],v=Object(a.useState)(null),y=Object(c.a)(v,2),w=y[0],N=y[1],C=Object(a.useCallback)((function(e,t){N(t)}),[]),k=Object(a.useCallback)(Object(o.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(),e.next=4,b(t,w);case 4:c=e.sent,n(c),i(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),[i,s,n,t,w]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"border border-gray-primary mt-12",style:{position:"relative",height:"65vh",width:"100vh"},children:Object(m.jsx)(u.a,{image:t,crop:h,zoom:O,aspect:1,onCropChange:x,onCropComplete:C,onZoomChange:g})}),Object(m.jsxs)("div",{className:"w-full mt-5 flex flex-col justify-center items-center",children:[Object(m.jsx)("input",{type:"range",value:O,min:1,max:10,step:.1,"aria-labelledby":"Zoom",onChange:function(e){g(e.target.value)},className:"slider"}),Object(m.jsx)("span",{className:"mt-2",children:"Zoom"})]}),Object(m.jsx)("div",{className:"h-16 bg-white border-t border-gray-primary absolute inset-x-0 bottom-0 justify-center",children:Object(m.jsxs)("div",{className:"flex w-3/5 h-full items-center justify-around m-auto",children:[Object(m.jsx)("button",{className:"bg-blue-primary font-bold text-sm rounded text-white w-20 h-8",onClick:r,children:"Cancel"}),Object(m.jsx)("button",{className:"bg-blue-primary font-bold text-sm rounded text-white w-20 h-8",onClick:k,children:"Continue"})]})})]})}var f=n(56),p=n(33),O=n(9),g=n(62),v=n(55);function y(e){var t=e.selectedImage,n=e.handleFinishEditingCancel,s=e.fileName,i=e.type,l=Object(a.useState)(""),o=Object(c.a)(l,2),u=o[0],d=o[1],j=Object(a.useState)(!1),b=Object(c.a)(j,2),h=b[0],x=b[1],y=Object(f.a)().userInfo,w=Object(p.a)().user;return Object(m.jsxs)("div",{className:"flex flex-col items-center w-full h-full justify-center ",children:[y.username===w.displayName&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"rounded col-span-4 border border-gray-primary bg-white",children:[Object(m.jsx)(g.a,{userId:y.userId,page:"edit"}),Object(m.jsx)("div",{className:"flex items-center justify-center outline-none h-full max-w-sm max-h-sm",children:Object(m.jsx)("img",{className:"w-full cursor-pointer",src:t,alt:"The chosen, cropped post"})}),"post"===i&&Object(m.jsx)("form",{className:"flex flex-row place-items-center justify-evenly h-auto",children:Object(m.jsx)("textarea",{className:"outline-none w-full p-2",placeholder:"Write a caption...",onChange:function(e){var t=e.currentTarget.value;t.length<2200&&d(t)},"ng-trim":!1,type:"text"})})]}),Object(m.jsx)("div",{className:"h-16 bg-white border-t border-gray-primary absolute inset-x-0 bottom-0 justify-center",children:Object(m.jsxs)("div",{className:"flex w-3/5 h-full items-center justify-around m-auto",children:[Object(m.jsx)("button",{className:"bg-blue-primary font-bold text-sm rounded text-white w-20 h-8",onClick:n,children:"Back"}),Object(m.jsx)("button",{className:"bg-blue-primary font-bold text-sm rounded text-white w-20 h-8",onClick:"post"===i?function(){Object(v.m)(y,t,u,s),setTimeout((function(){x(!0)}),2e3)}:function(){Object(v.q)(y,t,s),setTimeout((function(){x(!0)}),2e3)},children:"post"===i?"Post":"Confirm"})]})})]}),h&&Object(m.jsx)(r.a,{to:O.a})]})}function w(e){var t=e.type,n=Object(a.useState)(""),r=Object(c.a)(n,2),s=r[0],i=r[1],l=Object(a.useState)(!1),o=Object(c.a)(l,2),u=o[0],d=o[1],j=Object(a.useState)(!1),b=Object(c.a)(j,2),h=b[0],f=b[1],p=Object(a.useState)(!1),O=Object(c.a)(p,2),g=O[0],v=O[1],w=Object(a.useState)(""),N=Object(c.a)(w,2),C=N[0],k=N[1];return Object(m.jsxs)("div",{className:"flex items-center justify-center w-full",children:[!u&&!h&&!g&&Object(m.jsx)("div",{className:"p-24 shadow-lg bg-white outline-none",style:{zIndex:"5"},children:Object(m.jsxs)("label",{children:[Object(m.jsx)("div",{className:"flex items-center justify-center ",children:Object(m.jsxs)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 490.2 490.2",className:"w-24 text-black-light cursor-pointer",children:[Object(m.jsx)("path",{d:"M418.5,418.5c95.6-95.6,95.6-251.2,0-346.8s-251.2-95.6-346.8,0s-95.6,251.2,0,346.8S322.9,514.1,418.5,418.5z M89,89\r c86.1-86.1,226.1-86.1,312.2,0s86.1,226.1,0,312.2s-226.1,86.1-312.2,0S3,175.1,89,89z"}),Object(m.jsx)("path",{d:"M245.1,336.9c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7v-67.3h67.3c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7\r c0-6.8-5.5-12.3-12.2-12.2h-67.3v-67.3c0-6.8-5.5-12.3-12.2-12.2c-6.8,0-12.3,5.5-12.2,12.2v67.3h-67.3c-6.8,0-12.3,5.5-12.2,12.2\r c0,6.8,5.5,12.3,12.2,12.2h67.3v67.3C232.8,331.4,238.3,336.9,245.1,336.9z"})]})}),Object(m.jsx)("input",{style:{display:"none"},type:"file",name:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=URL.createObjectURL(t);k(t.name),i(n),f(!h),d(!u)}}),Object(m.jsx)("div",{className:"flex items-end justify-evenly bg-none font-semibold cursor-pointer outline-none p-4",children:"Choose image to upload"})]})}),s&&!g&&h&&u&&Object(m.jsx)("div",{style:{zIndex:"5"},children:Object(m.jsx)(x,{selectedImage:s,handleImage:function(e){i(e)},handleEditingCancel:function(){f(!h),d(!u)},handleEditingContinue:function(){f(!h)},handleFinishEditingContinue:function(){v(!g)}})}),g&&u&&Object(m.jsx)("div",{style:{zIndex:"5"},children:Object(m.jsx)(y,{selectedImage:s,handleFinishEditingCancel:function(){v(!g),f(!h)},fileName:C,type:t})}),Object(m.jsx)("p",{className:"absolute",style:{zIndex:"1"},children:"loading... (possibly)"})]})}function N(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],i=t[1],l=Object(r.h)();return Object(a.useEffect)((function(){i(l.state.type)}),[l.state.type,n]),Object(m.jsxs)("div",{className:"bg-gray-background",children:[Object(m.jsx)(s.a,{}),Object(m.jsx)("div",{className:"mx-auto max-w-screen-lg justify-center items-center flex",style:{height:"75vh"},children:Object(m.jsx)(w,{type:n})})]})}}}]);
//# sourceMappingURL=10.2fe09788.chunk.js.map