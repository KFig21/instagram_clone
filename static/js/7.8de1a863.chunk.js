(this.webpackJsonpinstagram_clone=this.webpackJsonpinstagram_clone||[]).push([[7],{55:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(53),r=n.n(c),s=n(54),a=n(30),o=n(1),i=n(31),l=n(56);function u(){var e=Object(o.useState)({}),t=Object(a.a)(e,2),n=t[0],c=t[1],u=Object(o.useContext)(i.a).user;return Object(o.useEffect)((function(){function e(){return(e=Object(s.a)(r.a.mark((function e(){var t,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.i)(u.uid);case 2:t=e.sent,n=Object(a.a)(t,1),s=n[0],c(s);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(null===u||void 0===u?void 0:u.uid)&&function(){e.apply(this,arguments)}()}),[u]),{userInfo:n}}},57:function(e,t,n){"use strict";t.a=n.p+"static/media/newPost.84a497c2.png"},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(1),r=n(18),s=n(19),a=n(31),o=n(9),i=n(55),l=n(57),u=n(5),d=n(58),j=n(4);function b(){var e=Object(c.useContext)(s.a).firebase,t=Object(c.useContext)(a.a).user,n=Object(i.a)().userInfo,b=Object(u.g)();return Object(j.jsx)("header",{className:"h-16 bg-white border-b border-gray-primary sticky top-0 z-50",children:Object(j.jsx)("div",{className:"container mx-auto max-w-screen-lg h-full",children:Object(j.jsxs)("div",{className:"flex justify-between h-full pr-5 pl-5",children:[Object(j.jsx)("div",{className:"text-gray-700 text-center flex  items-center align-items cursor-pointer",children:Object(j.jsx)("h1",{className:"flex justify-center w-full",children:Object(j.jsx)(r.b,{to:o.a,"aria-label":"instagram header",children:Object(j.jsx)("img",{src:d.a,alt:"instagram header",className:"mt-2 w-28"})})})}),Object(j.jsx)("div",{className:"text-gray-700 text-center flex flex-none items-center align-items",children:t?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(r.b,{to:{pathname:"".concat(o.g),state:{type:"post"}},"aria-label":"upload post",children:Object(j.jsx)("img",{src:l.a,alt:"add post",className:"w-8 mr-4 lg:mr-6 cursor-pointer"})}),Object(j.jsx)(r.b,{to:o.a,"aria-label":"timeline",children:Object(j.jsxs)("svg",{className:"w-8 mr-4 lg:mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}),Object(j.jsx)("title",{children:"Timeline"})]})}),Object(j.jsx)("button",{type:"button",title:"Sign-out",onClick:function(){return e.auth().signOut()},onKeyDown:function(t){"enter"===t.key&&(b.push("/login"),e.auth().signOut())},children:Object(j.jsx)("svg",{className:"w-8 mr-4 lg:mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})}),Object(j.jsx)("div",{className:"flex items-center cursor-pointer",children:Object(j.jsx)(r.b,{to:"/p/".concat(n.username),children:Object(j.jsx)("img",{title:"".concat(n.username),className:"rounded-full h-8 w-8 flex object-cover",src:"".concat(n.avatar),alt:"".concat(n.username," profile")})})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(r.b,{to:o.b,children:Object(j.jsx)("button",{type:"button",className:"bg-blue-primary font-bold text-sm rounded text-white w-20 h-8",children:"Login"})}),Object(j.jsx)(r.b,{to:o.f,children:Object(j.jsx)("button",{type:"button",className:"bg-white font-bold text-sm rounded text-blue-primary w-20 h-8",children:"Sign-up"})})]})})]})})})}},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(1),r=n(18),s=n(19),a=n(31),o=n(9),i=n(5),l=n(58),u=n(4);function d(){var e=Object(c.useContext)(s.a).firebase,t=Object(c.useContext)(a.a).user,n=Object(i.g)();return Object(u.jsx)("header",{className:"h-16 bg-white border-b border-gray-primary sticky top-0 z-50 mobile-header relative",children:Object(u.jsx)("div",{className:"container mx-auto max-w-screen-lg h-full",children:Object(u.jsxs)("div",{className:"flex justify-end h-full pr-5 pl-5",children:[Object(u.jsx)("div",{className:"text-gray-700 text-center flex  items-center align-items cursor-pointer absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",children:Object(u.jsx)("h1",{className:"flex justify-center w-full",children:Object(u.jsx)(r.b,{to:o.a,"aria-label":"instagram header",children:Object(u.jsx)("img",{src:l.a,alt:"instagram header",className:"mt-2 w-28"})})})}),Object(u.jsx)("div",{className:"text-gray-700 text-center flex flex-none items-center align-items",children:t?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("button",{type:"button",title:"Sign-out",onClick:function(){return e.auth().signOut()},onKeyDown:function(t){"enter"===t.key&&(n.push("/login"),e.auth().signOut())},children:Object(u.jsx)("svg",{className:"w-8  text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})})}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(r.b,{to:o.b,children:Object(u.jsx)("button",{type:"button",className:"bg-blue-primary font-bold text-sm rounded text-white w-20 h-8",children:"Login"})}),Object(u.jsx)(r.b,{to:o.f,children:Object(u.jsx)("button",{type:"button",className:"bg-white font-bold text-sm rounded text-blue-primary w-20 h-8",children:"Sign-up"})})]})})]})})})}},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(1),r=n(18),s=n(31),a=n(9),o=n(55),i=n(57),l=(n(63),n(4));function u(){var e=Object(c.useContext)(s.a).user,t=Object(o.a)().userInfo;return Object(l.jsx)("footer",{className:"h-16 bg-white border-b border-gray-primary fixed bottom-0 z-50 w-screen",children:Object(l.jsx)("div",{className:"container mx-auto max-w-screen-lg h-full",children:Object(l.jsx)("div",{className:"flex h-full px-8",children:Object(l.jsx)("div",{className:"text-gray-700 text-center flex justify-between w-screen items-center align-items",children:e?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(r.b,{to:{pathname:"".concat(a.g),state:{type:"post"}},"aria-label":"upload post",children:Object(l.jsx)("img",{src:i.a,alt:"add post",className:"w-8  lg:mr-6 cursor-pointer"})}),Object(l.jsx)(r.b,{to:a.a,"aria-label":"timeline",children:Object(l.jsxs)("svg",{className:"w-8  lg:mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}),Object(l.jsx)("title",{children:"Timeline"})]})}),Object(l.jsx)("div",{className:"flex items-center cursor-pointer",children:Object(l.jsx)(r.b,{to:"/p/".concat(t.username),children:Object(l.jsx)("img",{title:"".concat(t.username),className:"rounded-full h-8 w-8 flex object-cover",src:"".concat(t.avatar),alt:"".concat(t.username," profile")})})})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(r.b,{to:a.b,children:Object(l.jsx)("button",{type:"button",className:"bg-blue-primary font-bold text-sm rounded text-white w-20 h-8",children:"Login"})}),Object(l.jsx)(r.b,{to:a.f,children:Object(l.jsx)("button",{type:"button",className:"bg-white font-bold text-sm rounded text-blue-primary w-20 h-8",children:"Sign-up"})})]})})})})})}},63:function(e,t,n){},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var c=n(53),r=n.n(c),s=n(54),a=n(30),o=n(1),i=n(18),l=n(56),u=n(9),d=n(5),j=n(55),b=n(4);function m(e){var t=e.userId,n=e.docId,c=e.photoStorageName,m=e.page,x=Object(o.useState)(""),f=Object(a.a)(x,2),h=f[0],p=f[1],O=Object(o.useState)(!1),g=Object(a.a)(O,2),v=g[0],w=g[1],y=Object(j.a)().userInfo,N=Object(d.g)();Object(o.useEffect)((function(){function e(){return(e=Object(s.a)(r.a.mark((function e(){var n,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.i)(t);case 2:n=e.sent,c=Object(a.a)(n,1),(s=c[0]).userId?p(s):N.push(u.c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,N]);return Object(b.jsx)("div",{className:"flex border-b border-gray-primary h-4 p-4 py-8",children:Object(b.jsxs)("div",{className:"flex items-center justify-between w-full",children:[Object(b.jsxs)(i.b,{to:"/p/".concat(h.username),className:"flex items-center",children:[Object(b.jsx)("img",{src:h.avatar,className:"rounded-full h-8 w-8 flex mr-3 object-cover",alt:"".concat(h.username," avi")}),Object(b.jsx)("p",{className:"font-bold",children:h.username})]}),Object(b.jsxs)("div",{className:"flex justify-center items-center",children:[v&&Object(b.jsx)("button",{onClick:function(){Object(l.b)(n,c),setTimeout((function(){N.push("/")}),500)},className:"hover:bg-red-primary hover:text-white font-bold h-5/6 px-2 py-1 rounded mr-6 duration-150",title:"confirm delete",children:"delete?"}),y.userId===h.userId&&"post"===m&&Object(b.jsx)("p",{className:"font-bold text-4xl hover:text-red-primary mb-2 cursor-pointer duration-150 ".concat(v?"hover:text-green-primary":"hover:text-red-primary"),onClick:function(){w(!v)},title:v?"cancel delete":"delete your post",children:"\xd7"})]})]})})}},68:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(53),r=n.n(c),s=n(54),a=n(30),o=n(1),i=n(31),l=n(56),u=n(5);function d(){var e=Object(o.useState)(null),t=Object(a.a)(e,2),n=t[0],c=t[1],d=Object(o.useContext)(i.a).user,j=Object(u.g)();return Object(o.useEffect)((function(){function e(){return(e=Object(s.a)(r.a.mark((function e(){var t,n,s,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.i)(d.uid);case 2:if(t=e.sent,n=Object(a.a)(t,1),s=n[0].following,o=[],void 0!==s){e.next=10;break}o=[],e.next=14;break;case 10:if(!(s.length>0)){e.next=14;break}return e.next=13,Object(l.f)(d.uid,s,d.displayName);case 13:o=e.sent;case 14:o.sort((function(e,t){return t.dateCreated-e.dateCreated})),c(o);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}null!==d?function(){e.apply(this,arguments)}():j.push("/login")}),[d,j]),{photos:n}}},69:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(53),r=n.n(c),s=n(54),a=n(30),o=n(1),i=n(19),l=n(31),u=n(55),d=n(4);function j(e){var t=e.docId,n=e.totalLikes,c=e.likedPhoto,j=e.handleFocus,b=Object(o.useContext)(l.a).user,m=Object(u.a)().userInfo,x=Object(o.useState)(c),f=Object(a.a)(x,2),h=f[0],p=f[1],O=Object(o.useState)(n),g=Object(a.a)(O,2),v=g[0],w=g[1],y=Object(o.useContext)(i.a),N=y.firebase,k=y.FieldValue,I=function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p((function(e){return!e})),e.next=3,N.firestore().collection("photos").doc(t).update({likes:h?k.arrayRemove(b.uid):k.arrayUnion(b.uid)});case 3:return e.next=5,N.firestore().collection("users").doc(m.docId).update({likes:h?k.arrayRemove(t):k.arrayUnion(t)});case 5:w((function(e){return h?e-1:e+1}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"flex justify-between p-4",children:Object(d.jsxs)("div",{className:"flex",children:[Object(d.jsx)("svg",{onClick:I,onKeyDown:function(e){"Enter"===e.key&&I()},xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",tabIndex:0,className:"w-8 mr-4 select-none cursor-pointer focus:outline-none hover:text-red-primary duration-200 ".concat(h?"fill-red text-red-primary":"text-black-light"),children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),Object(d.jsx)("svg",{onClick:j,onKeyDown:function(e){"Enter"===e.key&&j()},className:"w-8 text-black-light select-none cursor-pointer focus:outline-none",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",tabIndex:0,children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})]})}),Object(d.jsx)("div",{className:"p-4 py-0",children:Object(d.jsx)("p",{className:"font-bold",children:"".concat(v,1===v?" like":" likes")})})]})}},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(1);var c=n(18),r=n(4);function s(e){var t=e.caption,n=e.username;return Object(r.jsxs)("div",{className:"p-4 pt-2 pb-0",children:[Object(r.jsx)(c.b,{to:"/p/".concat(n),children:Object(r.jsx)("span",{className:"mr-2 font-bold",children:n})}),Object(r.jsx)("span",{className:"",children:t})]})}},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var c=n(30),r=n(1),s=n(91),a=n(18),o=n(53),i=n.n(o),l=n(64),u=n(54),d=n(19),j=n(31),b=n(72),m=n.n(b),x=n(55),f=n(4);function h(e){var t=e.docId,n=e.comments,s=e.setComments,a=e.commentInput,o=Object(r.useState)(""),b=Object(c.a)(o,2),h=b[0],p=b[1],O=Object(r.useContext)(d.a),g=O.firebase,v=O.FieldValue,w=Object(r.useContext)(j.a).user,y=Object(x.a)().userInfo,N=function(){var e=Object(u.a)(i.a.mark((function e(c){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),s([{displayName:w.displayName,comment:h}].concat(Object(l.a)(n))),p(""),r=m()(),g.firestore().collection("users").doc(y.docId).update({comments:v.arrayUnion({photoDocId:t,comment:h,commentId:r})}),e.abrupt("return",g.firestore().collection("photos").doc(t).update({comments:v.arrayUnion({displayName:w.displayName,comment:h,userId:w.uid,commentId:r,userDocId:y.docId})}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"border-t border-gray-primary bg-white absolute inset-x-0 bottom-0 justify-center ",children:Object(f.jsxs)("form",{className:"flex justify-between pl-0 pr-5 ",method:"post",onSubmit:function(e){return h.length>=1?N(e):e.preventDefault()},children:[Object(f.jsx)("input",{"aria-label":"Add a comment",autoComplete:"off",className:"text-sm text-gray-base w-full mr-3 py-5 px-4",type:"text",name:"add-comment",placeholder:"Add a comment",value:h,onChange:function(e){var t=e.target;return p(t.value)},ref:a}),Object(f.jsx)("button",{className:"text-sm font-bold text-blue-primary ".concat(!h&&"opacity-25"),type:"button",disabled:h.length<1,onClick:N,children:"Post"})]})})}var p=n(56);function O(e){var t=e.docId,n=e.comments,o=e.posted,i=e.commentInput,l=e.page,u=Object(r.useState)(n),d=Object(c.a)(u,2),j=d[0],b=d[1],m=Object(x.a)().userInfo,O=Object(r.useState)(!1),g=Object(c.a)(O,2),v=g[0],w=g[1],y=Object(r.useState)(""),N=Object(c.a)(y,2),k=N[0],I=N[1],C=3;function S(){Object(p.a)(t,n,k,m),w(!v),setTimeout((function(){window.location.reload()}),500)}function L(){w(!v)}return"post"===l&&(C=j.length),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"p-4 pt-1 pb-4 mb-14",children:[j.length>=3&&"timeline"===l&&Object(f.jsx)(a.b,{to:"/post/".concat(t),children:Object(f.jsx)("p",{className:"text-sm text-gray-base mb-1 cursor-pointer",children:"View all comments"})}),j.slice(0,C).map((function(e){return Object(f.jsxs)("div",{className:"mb-1 flex flex-row justify-between",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)(a.b,{to:"/p/".concat(e.displayName),children:Object(f.jsx)("span",{className:"mr-2 font-bold",children:e.displayName})}),Object(f.jsx)("span",{children:e.comment})]}),Object(f.jsxs)("div",{className:"flex flex-col",children:[m.userId===e.userId&&!v&&Object(f.jsx)("p",{className:"font-bold text-xl hover:text-red-primary cursor-pointer duration-150 leading-5",title:"delete your comment",onClick:function(){var t;t=e.commentId,I(t),w(!v)},children:"\xd7"}),v&&k===e.commentId&&Object(f.jsxs)("div",{className:"flex flex-row",children:[Object(f.jsx)("p",{className:"font-bold text-xs hover:text-red-primary cursor-pointer duration-150 leading-loose mr-2",onClick:S,title:"confirm delete",children:"y"}),Object(f.jsx)("p",{className:"font-bold text-xs hover:text-green-primary cursor-pointer duration-150 leading-loose",onClick:L,title:"cancel delete",children:"n"})]})]})]},"".concat(e.comment,"-").concat(e.displayName))})),Object(f.jsxs)("p",{className:"text-gray-base uppercase text-xs mt-2",children:[Object(s.a)(o,new Date)," ago"]})]}),Object(f.jsx)(h,{docId:t,comments:j,setComments:b,commentInput:i})]})}},92:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return L}));var c=n(1),r=n(65),s=n.n(r),a=n(68),o=n(66),i=n(4);function l(e){var t=e.src,n=e.caption;return Object(i.jsx)("img",{src:t,alt:n})}var u=n(69),d=n(70),j=n(71),b=n(18);function m(e){var t=e.content,n=Object(c.useRef)(null),r=t.docId;return Object(i.jsxs)("div",{className:"lg:rounded col-span-4 border-t border-b lg:border border-gray-primary bg-white mt-4 mb-2 relative",children:[Object(i.jsx)(o.a,{userId:t.userId,docId:t.docId,photoStorageName:t.photoStorageName,page:"post"}),Object(i.jsx)(b.b,{to:"/post/".concat(r),children:Object(i.jsx)(l,{src:t.imageSrc,caption:t.caption})}),Object(i.jsx)(u.a,{docId:t.docId,totalLikes:t.likes.length,likedPhoto:t.userLikedPhoto,handleFocus:function(){return n.current.focus()}}),Object(i.jsx)(d.a,{username:t.username,caption:t.caption}),Object(i.jsx)(j.a,{docId:t.docId,comments:t.comments,posted:t.dateCreated,commentInput:n,page:"timeline"})]})}function x(){var e=Object(a.a)().photos;return Object(i.jsx)("div",{className:"container col-span-2",children:e?(null===e||void 0===e?void 0:e.length)>0?e.map((function(e){return Object(i.jsx)(m,{content:e},e.docId)})):Object(i.jsx)("p",{className:"text-center text-2xl mt-5",children:"Follow users to see photos!"}):Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(s.a,{count:4,width:500,height:500,className:"mt-6"})})})}var f=n(60),h=n(61),p=n(62),O=n(55);function g(e){var t=e.username,n=e.fullName,c=e.avatar;return t&&n?Object(i.jsxs)(b.b,{to:"/p/".concat(t),className:"grid grid-cols-4 gap-4 mb-6 items-center",children:[Object(i.jsx)("div",{className:"flex items-center justify-between col-span-1",children:Object(i.jsx)("img",{src:c,className:"rounded-full h-12 w-12 flex mr-3 object-cover",alt:"avi"})}),Object(i.jsxs)("div",{className:"col-span-3",children:[Object(i.jsx)("p",{className:"text-sm font-bold",children:t}),Object(i.jsx)("p",{className:"text-sm",children:n})]})]}):Object(i.jsx)(s.a,{count:1,height:61})}var v=n(53),w=n.n(v),y=n(54),N=n(30),k=n(56);function I(e){var t=e.profileDocId,n=e.loggedInUserDocId,r=e.username,s=e.profileId,a=e.userId,o=e.avatar,l=Object(c.useState)(!1),u=Object(N.a)(l,2),d=u[0],j=u[1];function m(){return(m=Object(y.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,Object(k.p)(n,s,!1);case 3:return e.next=5,Object(k.o)(t,a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return d?null:Object(i.jsxs)("div",{className:"flex flex-row items-center align-items justify-between",children:[Object(i.jsxs)("div",{className:"flex items-center justify-between",children:[Object(i.jsx)("img",{src:o,className:"rounded-full h-8 w-8 flex object-cover mr-3",alt:"avis"}),Object(i.jsx)(b.b,{to:"/p/".concat(r),children:Object(i.jsx)("p",{className:"font-bold text-sm",children:r})})]}),Object(i.jsx)("button",{className:"text-xs font-bold text-blue-primary",type:"button",onClick:function(){return m.apply(this,arguments)},children:"follow"})]})}function C(e){var t=e.userId,n=e.following,r=e.loggedInUserDocId,a=Object(c.useState)(null),o=Object(N.a)(a,2),l=o[0],u=o[1];return Object(c.useEffect)((function(){function e(){return(e=Object(y.a)(w.a.mark((function e(){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.h)(t,n);case 2:c=e.sent,u(c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t&&function(){e.apply(this,arguments)}()}),[t,n]),l?l.length>0?Object(i.jsxs)("div",{className:"rounded flex flex-col",children:[Object(i.jsx)("div",{className:"text-sm flex items-center align-items justify-between mb-2",children:Object(i.jsx)("p",{className:"font-bold text-gray-base",children:"Suggestions for you"})}),Object(i.jsx)("div",{className:"mt-4 grid gap-5",children:l.map((function(e){return Object(i.jsx)(I,{profileDocId:e.docId,username:e.username,profileId:e.userId,userId:t,avatar:e.avatar,loggedInUserDocId:r},e.docId)}))})]}):null:Object(i.jsx)(s.a,{count:10,height:150,className:"mt-5"})}function S(){var e=Object(O.a)().userInfo;return Object(i.jsx)("div",{className:"p-4 flex justify-center col-span-2 lg:block lg:col-span-1 lg:relative",children:Object(i.jsxs)("div",{className:"flex flex-col lg:fixed",children:[Object(i.jsx)(g,{username:e.username,fullName:e.fullName,avatar:e.avatar}),Object(i.jsx)(C,{userId:e.userId,following:e.following,loggedInUserDocId:e.docId})]})})}function L(){return Object(c.useEffect)((function(){document.title="instagram"}),[]),Object(i.jsxs)("div",{className:"bg-gray-background ",children:[Object(i.jsx)(f.a,{}),Object(i.jsx)(h.a,{}),Object(i.jsxs)("div",{className:"grid sm:grid-cols-2 2xl:grid-cols-3 gap-4 justify between mx-auto max-w-screen-md",children:[Object(i.jsx)(x,{}),Object(i.jsx)(S,{})]}),Object(i.jsx)(p.a,{})]})}}}]);
//# sourceMappingURL=7.8de1a863.chunk.js.map