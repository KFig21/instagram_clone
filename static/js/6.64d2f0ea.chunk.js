(this.webpackJsonpinstagram_clone=this.webpackJsonpinstagram_clone||[]).push([[6],{53:function(e,t,r){e.exports=r(59)},54:function(e,t,r){"use strict";function n(e,t,r,n,c,o,a){try{var s=e[o](a),i=s.value}catch(l){return void r(l)}s.done?t(i):Promise.resolve(i).then(n,c)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(c,o){var a=e.apply(t,r);function s(e){n(a,c,o,s,i,"next",e)}function i(e){n(a,c,o,s,i,"throw",e)}s(void 0)}))}}r.d(t,"a",(function(){return c}))},55:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(53),c=r.n(n),o=r(54),a=r(30),s=r(1),i=r(31),l=r(56);function u(){var e=Object(s.useState)({}),t=Object(a.a)(e,2),r=t[0],n=t[1],u=Object(s.useContext)(i.a).user;return Object(s.useEffect)((function(){function e(){return(e=Object(o.a)(c.a.mark((function e(){var t,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.i)(u.uid);case 2:t=e.sent,r=Object(a.a)(t,1),o=r[0],n(o);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(null===u||void 0===u?void 0:u.uid)&&function(){e.apply(this,arguments)}()}),[u]),{userInfo:r}}},57:function(e,t,r){"use strict";t.a=r.p+"static/media/newPost.84a497c2.png"},59:function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,c="function"===typeof Symbol?Symbol:{},o=c.iterator||"@@iterator",a=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(F){i=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var c=t&&t.prototype instanceof j?t:j,o=Object.create(c.prototype),a=new C(n||[]);return o._invoke=function(e,t,r){var n=d;return function(c,o){if(n===m)throw new Error("Generator is already running");if(n===b){if("throw"===c)throw o;return E()}for(r.method=c,r.arg=o;;){var a=r.delegate;if(a){var s=k(a,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=b,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=m;var i=u(e,t,r);if("normal"===i.type){if(n=r.done?b:h,i.arg===f)continue;return{value:i.arg,done:r.done}}"throw"===i.type&&(n=b,r.method="throw",r.arg=i.arg)}}}(e,r,a),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(F){return{type:"throw",arg:F}}}e.wrap=l;var d="suspendedStart",h="suspendedYield",m="executing",b="completed",f={};function j(){}function p(){}function x(){}var v={};v[o]=function(){return this};var O=Object.getPrototypeOf,g=O&&O(O(S([])));g&&g!==r&&n.call(g,o)&&(v=g);var y=x.prototype=j.prototype=Object.create(v);function w(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){function r(c,o,a,s){var i=u(e[c],e,o);if("throw"!==i.type){var l=i.arg,d=l.value;return d&&"object"===typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(d).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,s)}))}s(i.arg)}var c;this._invoke=function(e,n){function o(){return new t((function(t,c){r(e,n,t,c)}))}return c=c?c.then(o,o):o()}}function k(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var c=u(n,e.iterator,r.arg);if("throw"===c.type)return r.method="throw",r.arg=c.arg,r.delegate=null,f;var o=c.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function S(e){if(e){var r=e[o];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var c=-1,a=function r(){for(;++c<e.length;)if(n.call(e,c))return r.value=e[c],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:E}}function E(){return{value:t,done:!0}}return p.prototype=y.constructor=x,x.constructor=p,p.displayName=i(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,i(e,s,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(N.prototype),N.prototype[a]=function(){return this},e.AsyncIterator=N,e.async=function(t,r,n,c,o){void 0===o&&(o=Promise);var a=new N(l(t,r,n,c),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(y),i(y,s,"Generator"),y[o]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function c(n,c){return s.type="throw",s.arg=e,r.next=n,c&&(r.method="next",r.arg=t),!!c}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return c("end");if(a.tryLoc<=this.prev){var i=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(i&&l){if(this.prev<a.catchLoc)return c(a.catchLoc,!0);if(this.prev<a.finallyLoc)return c(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return c(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return c(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var c=this.tryEntries[r];if(c.tryLoc<=this.prev&&n.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var o=c;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var c=n.arg;L(r)}return c}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:S(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),f}},e}(e.exports);try{regeneratorRuntime=n}catch(c){Function("r","regeneratorRuntime = r")(n)}},60:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r(1),c=r(18),o=r(19),a=r(31),s=r(9),i=r(55),l=r(57),u=r(5),d=r(58),h=r(4);function m(){var e=Object(n.useContext)(o.a).firebase,t=Object(n.useContext)(a.a).user,r=Object(i.a)().userInfo,m=Object(u.g)();return Object(h.jsx)("header",{className:"h-16 bg-white border-b border-gray-primary sticky top-0 z-50",children:Object(h.jsx)("div",{className:"container mx-auto max-w-screen-lg h-full",children:Object(h.jsxs)("div",{className:"flex justify-between h-full pr-5 pl-5",children:[Object(h.jsx)("div",{className:"text-gray-700 text-center flex  items-center align-items cursor-pointer",children:Object(h.jsx)("h1",{className:"flex justify-center w-full",children:Object(h.jsx)(c.b,{to:s.a,"aria-label":"instagram header",children:Object(h.jsx)("img",{src:d.a,alt:"instagram header",className:"mt-2 w-28"})})})}),Object(h.jsx)("div",{className:"text-gray-700 text-center flex flex-none items-center align-items",children:t?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(c.b,{to:{pathname:"".concat(s.g),state:{type:"post"}},"aria-label":"upload post",children:Object(h.jsx)("img",{src:l.a,alt:"add post",className:"w-8 mr-4 lg:mr-6 cursor-pointer"})}),Object(h.jsx)(c.b,{to:s.a,"aria-label":"timeline",children:Object(h.jsxs)("svg",{className:"w-8 mr-4 lg:mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}),Object(h.jsx)("title",{children:"Timeline"})]})}),Object(h.jsx)("button",{type:"button",title:"Sign-out",onClick:function(){return e.auth().signOut()},onKeyDown:function(t){"enter"===t.key&&(m.push("/login"),e.auth().signOut())},children:Object(h.jsx)("svg",{className:"w-8 mr-4 lg:mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})}),Object(h.jsx)("div",{className:"flex items-center cursor-pointer",children:Object(h.jsx)(c.b,{to:"/p/".concat(r.username),children:Object(h.jsx)("img",{title:"".concat(r.username),className:"rounded-full h-8 w-8 flex object-cover",src:"".concat(r.avatar),alt:"".concat(r.username," profile")})})})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(c.b,{to:s.b,children:Object(h.jsx)("button",{type:"button",className:"bg-blue-primary font-bold text-sm rounded text-white w-20 h-8",children:"Login"})}),Object(h.jsx)(c.b,{to:s.f,children:Object(h.jsx)("button",{type:"button",className:"bg-white font-bold text-sm rounded text-blue-primary w-20 h-8",children:"Sign-up"})})]})})]})})})}},61:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(1),c=r(18),o=r(19),a=r(31),s=r(9),i=r(5),l=r(58),u=r(4);function d(){var e=Object(n.useContext)(o.a).firebase,t=Object(n.useContext)(a.a).user,r=Object(i.g)();return Object(u.jsx)("header",{className:"h-12 bg-white border-b border-gray-primary sticky top-0 z-50 mobile-header relative",children:Object(u.jsx)("div",{className:"container mx-auto max-w-screen-lg h-full",children:Object(u.jsxs)("div",{className:"flex justify-end h-full pr-5 pl-5",children:[Object(u.jsx)("div",{className:"text-gray-700 text-center flex  items-center align-items cursor-pointer absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",children:Object(u.jsx)("h1",{className:"flex justify-center w-full",children:Object(u.jsx)(c.b,{to:s.a,"aria-label":"instagram header",children:Object(u.jsx)("img",{src:l.a,alt:"instagram header",className:"mt-2 w-28"})})})}),Object(u.jsx)("div",{className:"text-gray-700 text-center flex flex-none items-center align-items",children:t?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("button",{type:"button",title:"Sign-out",onClick:function(){return e.auth().signOut()},onKeyDown:function(t){"enter"===t.key&&(r.push("/login"),e.auth().signOut())},children:Object(u.jsx)("svg",{className:"w-8  text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})})}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(c.b,{to:s.b,children:Object(u.jsx)("button",{type:"button",className:"bg-blue-primary font-bold text-sm rounded text-white w-20 h-8",children:"Login"})}),Object(u.jsx)(c.b,{to:s.f,children:Object(u.jsx)("button",{type:"button",className:"bg-white font-bold text-sm rounded text-blue-primary w-20 h-8",children:"Sign-up"})})]})})]})})})}},62:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(1),c=r(18),o=r(31),a=r(9),s=r(55),i=r(57),l=(r(63),r(4));function u(){var e=Object(n.useContext)(o.a).user,t=Object(s.a)().userInfo;return Object(l.jsx)("footer",{className:"h-12 bg-white border-b border-gray-primary fixed bottom-0 z-50 w-screen",children:Object(l.jsx)("div",{className:"container mx-auto max-w-screen-lg h-full",children:Object(l.jsx)("div",{className:"flex h-full px-8",children:Object(l.jsx)("div",{className:"text-gray-700 text-center flex justify-between w-screen items-center align-items",children:e?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(c.b,{to:{pathname:"".concat(a.g),state:{type:"post"}},"aria-label":"upload post",children:Object(l.jsx)("img",{src:i.a,alt:"add post",className:"w-8  lg:mr-6 cursor-pointer"})}),Object(l.jsx)(c.b,{to:a.a,"aria-label":"timeline",children:Object(l.jsxs)("svg",{className:"w-8  lg:mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}),Object(l.jsx)("title",{children:"Timeline"})]})}),Object(l.jsx)("div",{className:"flex items-center cursor-pointer",children:Object(l.jsx)(c.b,{to:"/p/".concat(t.username),children:Object(l.jsx)("img",{title:"".concat(t.username),className:"rounded-full h-8 w-8 flex object-cover",src:"".concat(t.avatar),alt:"".concat(t.username," profile")})})})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(c.b,{to:a.b,children:Object(l.jsx)("button",{type:"button",className:"bg-blue-primary font-bold text-sm rounded text-white w-20 h-8",children:"Login"})}),Object(l.jsx)(c.b,{to:a.f,children:Object(l.jsx)("button",{type:"button",className:"bg-white font-bold text-sm rounded text-blue-primary w-20 h-8",children:"Sign-up"})})]})})})})})}},63:function(e,t,r){},64:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(22);var c=r(32);function o(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},66:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(53),c=r.n(n),o=r(54),a=r(30),s=r(1),i=r(18),l=r(56),u=r(9),d=r(5),h=r(55),m=r(4);function b(e){var t=e.userId,r=e.docId,n=e.photoStorageName,b=e.page,f=Object(s.useState)(""),j=Object(a.a)(f,2),p=j[0],x=j[1],v=Object(s.useState)(!1),O=Object(a.a)(v,2),g=O[0],y=O[1],w=Object(h.a)().userInfo,N=Object(d.g)();Object(s.useEffect)((function(){function e(){return(e=Object(o.a)(c.a.mark((function e(){var r,n,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.i)(t);case 2:r=e.sent,n=Object(a.a)(r,1),(o=n[0]).userId?x(o):N.push(u.c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,N]);return Object(m.jsx)("div",{className:"flex border-b border-gray-primary h-4 p-4 py-8",children:Object(m.jsxs)("div",{className:"flex items-center justify-between w-full",children:[Object(m.jsxs)(i.b,{to:"/p/".concat(p.username),className:"flex items-center",children:[Object(m.jsx)("img",{src:p.avatar,className:"rounded-full h-8 w-8 flex mr-3 object-cover",alt:"".concat(p.username," avi")}),Object(m.jsx)("p",{className:"font-bold",children:p.username})]}),Object(m.jsxs)("div",{className:"flex justify-center items-center",children:[g&&Object(m.jsx)("button",{onClick:function(){Object(l.b)(r,n),setTimeout((function(){N.push("/")}),500)},className:"hover:bg-red-primary hover:text-white font-bold h-5/6 px-2 py-1 rounded mr-6 duration-150",title:"confirm delete",children:"delete?"}),w.userId===p.userId&&"post"===b&&Object(m.jsx)("p",{className:"font-bold text-4xl hover:text-red-primary mb-2 cursor-pointer duration-150 ".concat(g?"hover:text-green-primary":"hover:text-red-primary"),onClick:function(){y(!g)},title:g?"cancel delete":"delete your post",children:"\xd7"})]})]})})}},68:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(53),c=r.n(n),o=r(54),a=r(30),s=r(1),i=r(31),l=r(56),u=r(5);function d(){var e=Object(s.useState)(null),t=Object(a.a)(e,2),r=t[0],n=t[1],d=Object(s.useContext)(i.a).user,h=Object(u.g)();return Object(s.useEffect)((function(){function e(){return(e=Object(o.a)(c.a.mark((function e(){var t,r,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.i)(d.uid);case 2:if(t=e.sent,r=Object(a.a)(t,1),o=r[0].following,s=[],void 0!==o){e.next=10;break}s=[],e.next=14;break;case 10:if(!(o.length>0)){e.next=14;break}return e.next=13,Object(l.f)(d.uid,o,d.displayName);case 13:s=e.sent;case 14:s.sort((function(e,t){return t.dateCreated-e.dateCreated})),n(s);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}null!==d?function(){e.apply(this,arguments)}():h.push("/login")}),[d,h]),{photos:r}}},69:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r(53),c=r.n(n),o=r(54),a=r(30),s=r(1),i=r(19),l=r(31),u=r(55),d=r(4);function h(e){var t=e.docId,r=e.totalLikes,n=e.likedPhoto,h=e.handleFocus,m=Object(s.useContext)(l.a).user,b=Object(u.a)().userInfo,f=Object(s.useState)(n),j=Object(a.a)(f,2),p=j[0],x=j[1],v=Object(s.useState)(r),O=Object(a.a)(v,2),g=O[0],y=O[1],w=Object(s.useContext)(i.a),N=w.firebase,k=w.FieldValue,I=function(){var e=Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x((function(e){return!e})),e.next=3,N.firestore().collection("photos").doc(t).update({likes:p?k.arrayRemove(m.uid):k.arrayUnion(m.uid)});case 3:return e.next=5,N.firestore().collection("users").doc(b.docId).update({likes:p?k.arrayRemove(t):k.arrayUnion(t)});case 5:y((function(e){return p?e-1:e+1}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"flex justify-between p-4",children:Object(d.jsxs)("div",{className:"flex",children:[Object(d.jsx)("svg",{onClick:I,onKeyDown:function(e){"Enter"===e.key&&I()},xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",tabIndex:0,className:"w-8 mr-4 select-none cursor-pointer focus:outline-none hover:text-red-primary duration-200 ".concat(p?"fill-red text-red-primary":"text-black-light"),children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),Object(d.jsx)("svg",{onClick:h,onKeyDown:function(e){"Enter"===e.key&&h()},className:"w-8 text-black-light select-none cursor-pointer focus:outline-none",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",tabIndex:0,children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})]})}),Object(d.jsx)("div",{className:"p-4 py-0",children:Object(d.jsx)("p",{className:"font-bold",children:"".concat(g,1===g?" like":" likes")})})]})}},70:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(1);var n=r(18),c=r(4);function o(e){var t=e.caption,r=e.username;return Object(c.jsxs)("div",{className:"p-4 pt-2 pb-0",children:[Object(c.jsx)(n.b,{to:"/p/".concat(r),children:Object(c.jsx)("span",{className:"mr-2 font-bold",children:r})}),Object(c.jsx)("span",{className:"",children:t})]})}},71:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r(30),c=r(1),o=r(91),a=r(18),s=r(53),i=r.n(s),l=r(64),u=r(54),d=r(19),h=r(31),m=r(72),b=r.n(m),f=r(55),j=r(4);function p(e){var t=e.docId,r=e.comments,o=e.setComments,a=e.commentInput,s=Object(c.useState)(""),m=Object(n.a)(s,2),p=m[0],x=m[1],v=Object(c.useContext)(d.a),O=v.firebase,g=v.FieldValue,y=Object(c.useContext)(h.a).user,w=Object(f.a)().userInfo,N=function(){var e=Object(u.a)(i.a.mark((function e(n){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),o([{displayName:y.displayName,comment:p}].concat(Object(l.a)(r))),x(""),c=b()(),O.firestore().collection("users").doc(w.docId).update({comments:g.arrayUnion({photoDocId:t,comment:p,commentId:c})}),e.abrupt("return",O.firestore().collection("photos").doc(t).update({comments:g.arrayUnion({displayName:y.displayName,comment:p,userId:y.uid,commentId:c,userDocId:w.docId})}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"border-t border-gray-primary bg-white absolute inset-x-0 bottom-0 justify-center ",children:Object(j.jsxs)("form",{className:"flex justify-between pl-0 pr-5 ",method:"post",onSubmit:function(e){return p.length>=1?N(e):e.preventDefault()},children:[Object(j.jsx)("input",{"aria-label":"Add a comment",autoComplete:"off",className:"text-sm text-gray-base w-full mr-3 py-5 px-4",type:"text",name:"add-comment",placeholder:"Add a comment",value:p,onChange:function(e){var t=e.target;return x(t.value)},ref:a}),Object(j.jsx)("button",{className:"text-sm font-bold text-blue-primary ".concat(!p&&"opacity-25"),type:"button",disabled:p.length<1,onClick:N,children:"Post"})]})})}var x=r(56);function v(e){var t=e.docId,r=e.comments,s=e.posted,i=e.commentInput,l=e.page,u=Object(c.useState)(r),d=Object(n.a)(u,2),h=d[0],m=d[1],b=Object(f.a)().userInfo,v=Object(c.useState)(!1),O=Object(n.a)(v,2),g=O[0],y=O[1],w=Object(c.useState)(""),N=Object(n.a)(w,2),k=N[0],I=N[1],L=3;function C(){Object(x.a)(t,r,k,b),y(!g),setTimeout((function(){window.location.reload()}),500)}function S(){y(!g)}return"post"===l&&(L=h.length),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"p-4 pt-1 pb-4 mb-14",children:[h.length>=3&&"timeline"===l&&Object(j.jsx)(a.b,{to:"/post/".concat(t),children:Object(j.jsx)("p",{className:"text-sm text-gray-base mb-1 cursor-pointer",children:"View all comments"})}),h.slice(0,L).map((function(e){return Object(j.jsxs)("div",{className:"mb-1 flex flex-row justify-between",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(a.b,{to:"/p/".concat(e.displayName),children:Object(j.jsx)("span",{className:"mr-2 font-bold",children:e.displayName})}),Object(j.jsx)("span",{children:e.comment})]}),Object(j.jsxs)("div",{className:"flex flex-col",children:[b.userId===e.userId&&!g&&Object(j.jsx)("p",{className:"font-bold text-xl hover:text-red-primary cursor-pointer duration-150 leading-5",title:"delete your comment",onClick:function(){var t;t=e.commentId,I(t),y(!g)},children:"\xd7"}),g&&k===e.commentId&&Object(j.jsxs)("div",{className:"flex flex-row",children:[Object(j.jsx)("p",{className:"font-bold text-xs hover:text-red-primary cursor-pointer duration-150 leading-loose mr-2",onClick:C,title:"confirm delete",children:"y"}),Object(j.jsx)("p",{className:"font-bold text-xs hover:text-green-primary cursor-pointer duration-150 leading-loose",onClick:S,title:"cancel delete",children:"n"})]})]})]},"".concat(e.comment,"-").concat(e.displayName))})),Object(j.jsxs)("p",{className:"text-gray-base uppercase text-xs mt-2",children:[Object(o.a)(s,new Date)," ago"]})]}),Object(j.jsx)(p,{docId:t,comments:h,setComments:m,commentInput:i})]})}},79:function(e,t,r){},89:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return O}));var n=r(53),c=r.n(n),o=r(54),a=r(30),s=r(1),i=r(60),l=r(61),u=r(62),d=r(66),h=r(69),m=r(70),b=r(71),f=r(5),j=r(56),p=r(68),x=r(55),v=(r(79),r(4));function O(){var e=Object(x.a)().userInfo,t=Object(p.a)().photos,r=Object(f.i)().docId,n=Object(s.useState)(null),O=Object(a.a)(n,2),g=O[0],y=O[1],w=Object(f.g)(),N=Object(s.useRef)(null),k=function(){return N.current.focus()};return Object(s.useEffect)((function(){function t(){return(t=Object(o.a)(c.a.mark((function t(){var n,o,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.g)(r,e.userId);case 2:n=t.sent,o=Object(a.a)(n,1),(s=o[0])?y(s):w.push("/not-found");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[r,w,t,e.userId]),(null===g||void 0===g?void 0:g.docId)?Object(v.jsxs)("div",{children:[Object(v.jsx)(i.a,{}),Object(v.jsx)(l.a,{}),Object(v.jsx)("div",{className:"post-desktop",children:Object(v.jsxs)("div",{className:"flex",children:[Object(v.jsx)("div",{className:"h-full mt-6 w-min mx-auto items-center justify-center flex",style:{zIndex:"5"},children:Object(v.jsxs)("div",{className:"flex flex-col lg:flex-row lg:flex-col-2 border border-gray-primary m-auto w-max",children:[Object(v.jsx)("div",{className:"",children:Object(v.jsx)("img",{src:g.imageSrc,alt:"post",className:"border-r border-gray-primary",style:{width:"80vh"}})}),Object(v.jsxs)("div",{className:"relative bg-white",style:{width:"60vh"},children:[Object(v.jsx)(d.a,{userId:g.userId,docId:r,page:"post",photoStorageName:g.photoStorageName}),Object(v.jsx)(h.a,{docId:g.docId,totalLikes:g.likes.length,likedPhoto:g.userLikedPhoto,handleFocus:k}),Object(v.jsx)(m.a,{username:g.username,caption:g.caption}),Object(v.jsx)(b.a,{docId:g.docId,comments:g.comments,posted:g.dateCreated,commentInput:N,page:"post"})]})]})}),Object(v.jsx)("div",{className:"w-screen bg-black-light opacity-40 absolute cursor-pointer",style:{zIndex:"1",height:"calc(100vh - 4rem)"},onClick:function(){return w.goBack()}})]})}),Object(v.jsxs)("div",{className:"post-mobile",children:[Object(v.jsxs)("div",{className:"rounded col-span-4 border border-gray-primary bg-white mt-4 mb-2 relative",children:[Object(v.jsx)(d.a,{userId:g.userId,docId:g.docId,photoStorageName:g.photoStorageName,page:"post"}),Object(v.jsx)("div",{className:"",children:Object(v.jsx)("img",{src:g.imageSrc,alt:"post",className:"border-r border-gray-primary"})}),Object(v.jsx)(h.a,{docId:g.docId,totalLikes:g.likes.length,likedPhoto:g.userLikedPhoto,handleFocus:k}),Object(v.jsx)(m.a,{username:g.username,caption:g.caption}),Object(v.jsx)(b.a,{docId:g.docId,comments:g.comments,posted:g.dateCreated,commentInput:N,page:"post"})]}),Object(v.jsx)("div",{className:"flex justify-center align-center mt-5 mb-24 lg:my-5",children:Object(v.jsx)("button",{className:"bg-blue-primary font-bold text-sm rounded text-white w-20 h-8",onClick:function(){return w.goBack()},children:"Go Back"})})]}),Object(v.jsx)(u.a,{})]}):null}}}]);
//# sourceMappingURL=6.64d2f0ea.chunk.js.map