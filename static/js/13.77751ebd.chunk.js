(this.webpackJsonpinstagram_clone=this.webpackJsonpinstagram_clone||[]).push([[13],{86:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return g}));var n=c(53),l=c.n(n),s=c(54),r=c(30),o=c(1),a=c(5),i=c(55),u=c(13),j=c(61),b=c(16),d=c(18),h=c(59),m=c.n(h),f=c(56),x=c(4);function p(e){var t=e.photosCount,c=e.followerCount,n=e.setFollowerCount,j=e.handleShowFollowers,b=e.handleShowFollowing,h=e.handleShowPhotos,p=e.profile,w=p.avatar,O=p.docId,v=p.userId,g=p.fullName,N=p.following,A=void 0===N?[]:N,G=p.followers,y=void 0===G?[]:G,M=p.username,W=Object(f.a)().userInfo,Y=Object(a.g)(),S=Object(o.useState)(null),I=Object(r.a)(S,2),k=I[0],B=I[1],D=Object(o.useState)(!1),V=Object(r.a)(D,2),F=V[0],J=V[1],L=(null===W||void 0===W?void 0:W.username)&&(null===W||void 0===W?void 0:W.username)!==M,R=(null===W||void 0===W?void 0:W.username)===M,Z=function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B((function(e){return!e})),n({followerCount:k?c-1:c+1}),e.next=4,Object(i.n)(k,W.docId,O,v,W.userId);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){var e=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.l)(W.username,v);case 2:t=e.sent,B(!!t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(null===W||void 0===W?void 0:W.username)&&v&&e()}),[W.username,v]),Object(x.jsxs)("div",{className:"grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg mt-6 pb-6 border-b border-gray-primary ",children:[Object(x.jsxs)("div",{className:"flex",style:{position:"absolute",left:"82%"},children:[R&&"i6isWMwVjqaouBIqqSERS7jCnyN2"!==W.userId&&Object(x.jsx)("div",{title:F?"cancel delete":"delete your profile",onClick:function(){J(!F)},children:Object(x.jsx)("p",{className:"font-bold text-4xl hover:text-red-primary mb-2 cursor-pointer duration-150 ".concat(F?"hover:text-green-primary":"hover:text-red-primary"),children:"\xd7"})}),F&&Object(x.jsx)("button",{onClick:function(){Object(i.c)(W),setTimeout((function(){Y.push("/login")}),500)},className:"hover:bg-red-primary hover:text-white font-bold h-12 px-2 py-1 rounded ml-6 duration-150",title:"confirm delete",children:"delete?"})]}),Object(x.jsxs)("div",{className:"container flex justify-center relative group w-40 m-auto",children:[Object(x.jsx)("img",{src:w,className:"rounded-full h-40 w-40 flex object-cover",alt:"".concat(M," avi")}),R&&Object(x.jsx)(d.b,{to:{pathname:"".concat(u.g),state:{type:"avatar"}},"aria-label":"upload post",className:"absolute justify-center",children:Object(x.jsx)("div",{className:" bottom-0 bg-gray-200 z-10 w-40 justify-evenly items-center h-40 bg-black-faded group-hover:flex hidden rounded-full",children:Object(x.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAADWCAYAAACt43wuAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA3LTA1VDExOjI0OjQxLTA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNy0wNVQxMTozOTowNS0wNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNy0wNVQxMTozOTowNS0wNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNGFkMDdhYS1jYzBiLTM5NDItYjAzYy1hMTFmODFjN2ZkYTUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyNWNiZTk3ZC1hODIxLTViNGItYWExOC03NzBiYmYyZGU1NmYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphYmIxZmUyZi1lNWFhLThlNDMtYjRlNi01OTI0MWNlNDVjZDMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmFiYjFmZTJmLWU1YWEtOGU0My1iNGU2LTU5MjQxY2U0NWNkMyIgc3RFdnQ6d2hlbj0iMjAyMS0wNy0wNVQxMToyNDo0MS0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjM0YWQwN2FhLWNjMGItMzk0Mi1iMDNjLWExMWY4MWM3ZmRhNSIgc3RFdnQ6d2hlbj0iMjAyMS0wNy0wNVQxMTozOTowNS0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqD0V30AAAqISURBVHic7d3tcdvGGobhW2fyP3AHVAd0BaIriFxBqAoiVWC7AskViK7ASgWhKzA7EDswUoHOj6WOlROLInb3xYd5XzMezZDE7isLD3exBIGTh4cHJNX1n6ELkH5GBksKYLCkAAZLCmCw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",alt:"plus",className:"flex items-center h-20 w-20 opacity-60 cursor-pointer"})})})]}),Object(x.jsxs)("div",{className:"flex items-center justify-center flex-col col-span-2",children:[Object(x.jsxs)("div",{className:"container flex items-center",children:[Object(x.jsx)("p",{className:"text-2xl mr-4",children:M}),L&&Object(x.jsx)("button",{className:"bg-blue-primary font-bold text-sm rounded text-white w-20 h-8",type:"button",onClick:Z,onKeyDown:function(e){"Enter"===e.key&&Z()},children:k?"Unfollow":"Follow"})]}),Object(x.jsx)("div",{className:"container flex mt-4",children:void 0===y||void 0===A?Object(x.jsx)(m.a,{count:1,width:677,height:24}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("p",{className:"mr-10 cursor-pointer",onClick:h,children:[Object(x.jsx)("span",{className:"font-bold",children:t})," "," ",1===t?"photo":"photos"]}),Object(x.jsxs)("p",{className:"mr-10 cursor-pointer",onClick:j,children:[Object(x.jsx)("span",{className:"font-bold",children:c})," "," ",1===c?"follower":"followers"]}),Object(x.jsxs)("p",{className:"mr-10 cursor-pointer",onClick:b,children:[Object(x.jsx)("span",{className:"font-bold",children:A.length})," following"]})]})}),Object(x.jsx)("div",{className:"container mt-4",children:Object(x.jsx)("p",{className:"font-medium",children:g||Object(x.jsx)(m.a,{count:1,height:24})})})]})]})}function w(e){var t=e.photos;return Object(x.jsxs)("div",{className:"h-16 pt-4",children:[Object(x.jsx)("div",{className:"grid grid-cols-3 gap-8 mt-4 mb-12",children:t?t.length>0?t.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(d.b,{to:"/post/".concat(e.docId),children:Object(x.jsxs)("div",{className:"relative group",children:[Object(x.jsx)("img",{src:e.imageSrc,alt:e.caption}),Object(x.jsxs)("div",{className:"absolute bottom-0 left-0 bg-gray-200 z-10 w-full justify-evenly items-center h-full bg-black-faded group-hover:flex hidden",children:[Object(x.jsxs)("p",{className:"flex items-center text-white font-bold",children:[Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-8 mr-4",children:Object(x.jsx)("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"})}),e.likes.length]}),Object(x.jsxs)("p",{className:"flex items-center text-white font-bold",children:[Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-8 mr-4",children:Object(x.jsx)("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})}),e.comments.length]})]})]})})},e.docId)})):null:Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(m.a,{count:12,width:320,height:400})})}),!t||0===t.length&&Object(x.jsx)("p",{className:"text-center text-2xl",children:"No Posts Yet"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]})}function O(e){var t=e.follows,c=e.title;return console.log("follows",t),Object(x.jsxs)("div",{className:"flex flex-col justify-center m-auto items-center",children:[Object(x.jsx)("p",{className:"text-center text-2xl m-3",children:c}),t?t.length>0?t.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(d.b,{to:"/p/".concat(e.username),children:Object(x.jsxs)("div",{className:"flex items-center justify-start w-64 hover:bg-gray-primary bg-gray-light p-2 m-1 rounded",children:[Object(x.jsx)("img",{src:e.avatar,className:"rounded-full h-12 w-12 flex mr-3 object-cover",alt:"".concat(e.username," avi")}),Object(x.jsxs)("div",{className:"col-span-3",children:[Object(x.jsx)("p",{className:"text-sm font-bold",children:e.username}),Object(x.jsx)("p",{className:"text-sm text-gray-dark",children:e.fullName})]})]})})},e.userId)})):null:Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"flex items-center justify-start w-64",children:Object(x.jsx)(m.a,{count:12,width:256,height:64,className:"m-1"})})}),!t||0===t.length&&Object(x.jsx)("p",{className:"text-center text-2xl",children:"..."})]})}function v(e){var t=e.user,c=Object(o.useState)(!0),n=Object(r.a)(c,2),a=n[0],u=n[1],j=Object(o.useState)(!1),d=Object(r.a)(j,2),h=d[0],m=d[1],f=Object(o.useState)(!1),v=Object(r.a)(f,2),g=v[0],N=v[1],A=function(e){var t=Object(o.useState)(null),c=Object(r.a)(t,2),n=c[0],a=c[1];return Object(o.useEffect)((function(){function t(){return(t=Object(s.a)(l.a.mark((function t(){var c,n,s,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.i)(e.userId);case 2:if(c=t.sent,n=Object(r.a)(c,1),s=n[0].following,o=[],!(s.length>0)){t.next=10;break}return t.next=9,Object(i.e)(s);case 9:o=t.sent;case 10:a(o);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),{following:n}}(t).following,G=function(e){var t=Object(o.useState)(null),c=Object(r.a)(t,2),n=c[0],a=c[1];return Object(o.useEffect)((function(){function t(){return(t=Object(s.a)(l.a.mark((function t(){var c,n,s,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.i)(e.userId);case 2:if(c=t.sent,n=Object(r.a)(c,1),s=n[0].followers,o=[],void 0!==s){t.next=10;break}o=[],t.next=14;break;case 10:if(!(s.length>0)){t.next=14;break}return t.next=13,Object(i.e)(s);case 13:o=t.sent;case 14:a(o);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),{followers:n}}(t).followers,y=function(){u(!0),m(!1),N(!1)};Object(o.useEffect)((function(){y()}),[t]);var M=Object(o.useReducer)((function(e,t){return Object(b.a)(Object(b.a)({},e),t)}),{profile:{},photosCollection:null,followerCount:0}),W=Object(r.a)(M,2),Y=W[0],S=Y.profile,I=Y.photosCollection,k=Y.followerCount,B=W[1];return Object(o.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.k)(t.username);case 2:c=e.sent,n=0,void 0===t.followers||(n=t.followers.length),B({profile:t,photosCollection:c.sort((function(e,t){return t.dateCreated-e.dateCreated})),followerCount:n});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.username&&function(){e.apply(this,arguments)}()}),[t]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(p,{photosCount:I?I.length:0,profile:S,followerCount:k,setFollowerCount:B,handleShowFollowers:function(){u(!1),m(!0),N(!1)},handleShowFollowing:function(){u(!1),m(!1),N(!0)},handleShowPhotos:y}),a&&Object(x.jsx)(w,{photos:I}),h&&Object(x.jsx)(O,{follows:G,title:"Followers"}),g&&Object(x.jsx)(O,{follows:A,title:"Following"})]})}function g(){var e=Object(a.i)().username,t=Object(o.useState)(null),c=Object(r.a)(t,2),n=c[0],b=c[1],d=Object(a.g)();return Object(o.useEffect)((function(){function t(){return(t=Object(s.a)(l.a.mark((function t(){var c,n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.j)(e);case 2:c=t.sent,n=Object(r.a)(c,1),(s=n[0]).userId?b(s):d.push(u.c);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e,d]),(null===n||void 0===n?void 0:n.username)?Object(x.jsxs)("div",{className:"bg-gray-background",children:[Object(x.jsx)(j.a,{}),Object(x.jsx)("div",{className:"mx-auto max-w-screen-lg",children:Object(x.jsx)(v,{user:n})})]}):null}}}]);
//# sourceMappingURL=13.77751ebd.chunk.js.map