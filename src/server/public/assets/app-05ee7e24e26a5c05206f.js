!function(e){function t(t){for(var r,i,l=t[0],c=t[1],d=t[2],u=0,f=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);f.length;)f.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,l=1;l<a.length;l++){var c=a[l];0!==o[c]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},o={0:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var s=c;n.push([52,1]),a()}([,,,,,,,,function(e,t,a){"use strict";(function(e){var r;a.d(t,"g",(function(){return i})),a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return d})),a.d(t,"e",(function(){return s})),a.d(t,"b",(function(){return u})),a.d(t,"f",(function(){return f})),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,n,i=function(e){return{type:"SET_FAVORITE",payload:e}},l=function(e){return{type:"DELETE_FAVORITE",payload:e}},c=function(e){return{type:"LOGIN_REQUEST",payload:e}},d=function(e){return{type:"LOGOUT_REQUEST",payload:e}},s=function(e){return{type:"REGISTER_REQUEST",payload:e}},u=function(e){return{type:"GET_VIDEO_SOURCE",payload:e}},f=function(e){return{type:"SEARCHING_VIDEO",payload:e}};(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(o.register(i,"setFavorite","/home/jagarcia/Platzi/Platzi_Video/src/frontend/actions/index.js"),o.register(l,"deleteFavorite","/home/jagarcia/Platzi/Platzi_Video/src/frontend/actions/index.js"),o.register(c,"loginRequest","/home/jagarcia/Platzi/Platzi_Video/src/frontend/actions/index.js"),o.register(d,"logoutRequest","/home/jagarcia/Platzi/Platzi_Video/src/frontend/actions/index.js"),o.register(s,"registerRequest","/home/jagarcia/Platzi/Platzi_Video/src/frontend/actions/index.js"),o.register(u,"getVideoSource","/home/jagarcia/Platzi/Platzi_Video/src/frontend/actions/index.js"),o.register(f,"searchingVideo","/home/jagarcia/Platzi/Platzi_Video/src/frontend/actions/index.js")),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,a(3)(e))},,function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),i=a(7),l=a(4),c=a(6),d=a.n(c),s=a(21),u=a.n(s),f=a(8),m=a(38),p=(a(64),a(40)),b=a(41);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var g=function(e){var t=e.user,a=e.isLogin,r=e.isRegister,o=Object.keys(t).length>0,l=u()("header",{isLogin:a,isRegister:r});return n.a.createElement("header",{className:l},n.a.createElement(i.b,{to:"/"},n.a.createElement("img",{className:"header__img",src:p.a,alt:"logo platzi video"})),n.a.createElement("div",{className:"header__menu"},n.a.createElement("div",{className:"header__menu--profile"},n.a.createElement("img",{className:"user__icon",src:o?Object(m.a)(t.email):b.a,alt:o?t.email:"userIcon"}),n.a.createElement("p",null,o?t.name:"Perfil")),n.a.createElement("ul",null,o?n.a.createElement(n.a.Fragment,null,n.a.createElement("li",null,n.a.createElement(i.b,{to:"a"},"Cuenta")),n.a.createElement("li",null,n.a.createElement(i.b,{to:"/login",onClick:function(){e.logoutRequest({})}},"Cerrar Sesión"))):n.a.createElement(n.a.Fragment,null,n.a.createElement("li",null,n.a.createElement(i.b,{to:"/login"},"Iniciar Sesion"))))))};g.protoTypes={user:d.a.object.isRequired,logoutRequest:d.a.object.isRequired};var y,v,h={logoutRequest:f.d},E=function(e){return{user:e.user}},j=Object(l.b)(E,h)(g);t.a=j,(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(g,"Header","/home/jagarcia/Platzi/Platzi_Video/src/frontend/components/Header.jsx"),y.register(h,"mapDispatchToProps","/home/jagarcia/Platzi/Platzi_Video/src/frontend/components/Header.jsx"),y.register(E,"mapStateToProps","/home/jagarcia/Platzi/Platzi_Video/src/frontend/components/Header.jsx"),y.register(j,"default","/home/jagarcia/Platzi/Platzi_Video/src/frontend/components/Header.jsx")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)}).call(this,a(3)(e))},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),i=(a(69),a(21)),l=a.n(i);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,d,s=function(e){var t=e.isHome,a=l()("footer",{isHome:t});return n.a.createElement("footer",{className:a},n.a.createElement("a",{href:"/"},"Términos de uso"),n.a.createElement("a",{href:"/"},"Declaración de privacidad"),n.a.createElement("a",{href:"/"},"Centro de ayuda"))},u=s;t.a=u,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(s,"Footer","/home/jagarcia/Platzi/Platzi_Video/src/frontend/components/Footer.jsx"),c.register(u,"default","/home/jagarcia/Platzi/Platzi_Video/src/frontend/components/Footer.jsx")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,a(3)(e))},,function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),i=a(4),l=a(6),c=a.n(l),d=a(7),s=a(8),u=(a(68),a(42)),f=a(28),m=a(43),p=a(44);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var b=function(e){var t=e.id,a=e.title,r=e.cover,o=e.year,i=e.duration,l=e.contentRating,c=e.isList;return n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{className:"carousel-item__img",src:r,alt:a}),n.a.createElement("div",{className:"carousel-item__details"},n.a.createElement("div",null,n.a.createElement(d.b,{to:"/Player/".concat(t)},n.a.createElement("img",{className:"carousel-item__details-img",src:u.a,alt:"Play"})),c?n.a.createElement("img",{className:"carousel-item__details-img",src:m.a,alt:"Remove",onClick:function(){e.deleteFavorite(t),document.getElementById(t).src=f.a}}):n.a.createElement("img",{className:"carousel-item__details-img",id:t,src:f.a,alt:"Más",onClick:function(){e.setFavorite({id:t,title:a,cover:r,year:o,duration:i,contentRating:l}),document.getElementById(t).src=p.a}}),n.a.createElement("p",{className:"carousel-item__details--title"},a),n.a.createElement("p",{className:"carousel-item__details--subtitle"},"".concat(o," ").concat(l," ").concat(i)))))};b.propTypes={title:c.a.string,cover:c.a.string,year:c.a.number,duration:c.a.number,contentRating:c.a.string};var g,y,v={setFavorite:s.g,deleteFavorite:s.a},h=Object(i.b)(null,v)(b);t.a=h,(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(g.register(b,"CarouselItem","/home/jagarcia/Platzi/Platzi_Video/src/frontend/components/CarouselItem.jsx"),g.register(v,"mapDispatchToProps","/home/jagarcia/Platzi/Platzi_Video/src/frontend/components/CarouselItem.jsx"),g.register(h,"default","/home/jagarcia/Platzi/Platzi_Video/src/frontend/components/CarouselItem.jsx")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}).call(this,a(3)(e))},,function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o);a(66);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,l,c=function(e){var t=e.children,a=e.title;return n.a.createElement("div",{className:"Categories"},n.a.createElement("h2",{className:"categories__title"},a),t)},d=c;t.a=d,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(c,"Categories","/home/jagarcia/Platzi/Platzi_Video/src/frontend/components/Categories.jsx"),i.register(d,"default","/home/jagarcia/Platzi/Platzi_Video/src/frontend/components/Categories.jsx")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,a(3)(e))},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o);a(67);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,l,c=function(e){var t=e.children;return n.a.createElement("section",{className:"carousel"},n.a.createElement("div",{className:"carousel__container"},t))},d=c;t.a=d,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(c,"Carousel","/home/jagarcia/Platzi/Platzi_Video/src/frontend/components/Carousel.jsx"),i.register(d,"default","/home/jagarcia/Platzi/Platzi_Video/src/frontend/components/Carousel.jsx")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,a(3)(e))},,,,,,,,,,,,function(e,t,a){"use strict";t.a=a.p+"assets/ab430cf65e561c537e96e55f6d05d4fd.png"},,,,function(e,t,a){},,function(e,t,a){"use strict";(function(e){var a;function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,d,s=function(e,t){switch(t.type){case"SET_FAVORITE":return e.myList.find((function(e){return e.id===t.payload.id}))?i({},e):i(i({},e),{},{myList:[].concat(r(e.myList),[t.payload])});case"DELETE_FAVORITE":return i(i({},e),{},{myList:e.myList.filter((function(e){return e.id!==t.payload}))});case"LOGIN_REQUEST":case"LOGOUT_REQUEST":case"REGISTER_REQUEST":return i(i({},e),{},{user:t.payload});case"GET_VIDEO_SOURCE":return i(i({},e),{},{playing:e.trends.concat(e.originals).find((function(e){return e.id===+t.payload}))||[]});case"SEARCHING_VIDEO":return""===t.payload?i(i({},e),{},{searching:[]}):i(i({},e),{},{searching:e.trends.concat(e.originals).filter((function(e){return e.title.toLowerCase().includes(t.payload.toLowerCase())}))||[]});default:return e}},u=s;t.a=u,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(s,"reducer","/home/jagarcia/Platzi/Platzi_Video/src/frontend/reducers/index.js"),c.register(u,"default","/home/jagarcia/Platzi/Platzi_Video/src/frontend/reducers/index.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,a(3)(e))},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),i=a(7),l=a(2),c=a(36),d=a(45),s=a(48),u=a(49),f=a(50);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,p,b=function(){return n.a.createElement(i.a,null,n.a.createElement(l.d,null,n.a.createElement(l.b,{exact:!0,path:"/",component:c.a}),n.a.createElement(l.b,{exact:!0,path:"/login",component:d.a}),n.a.createElement(l.b,{exact:!0,path:"/Register",component:s.a}),n.a.createElement(l.b,{exact:!0,path:"/Player/:id",component:f.a}),n.a.createElement(l.b,{component:u.a})))},g=b;t.a=g,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(b,"App","/home/jagarcia/Platzi/Platzi_Video/src/frontend/routes/App.js"),m.register(g,"default","/home/jagarcia/Platzi/Platzi_Video/src/frontend/routes/App.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,a(3)(e))},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),i=a(4),l=a(37),c=a(10),d=a(15),s=a(16),u=a(13),f=(a(32),a(11));function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var p,b,g=function(e){var t=e.searching,a=e.myList,r=e.trends,o=e.originals;return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null),n.a.createElement(l.a,null),Object.keys(t).length>0&&n.a.createElement(d.a,{title:"Estas buscando"},n.a.createElement(s.a,null,null==t?void 0:t.map((function(e){return n.a.createElement(u.a,m({key:e.id},e))})))),(null==a?void 0:a.length)>0&&n.a.createElement(d.a,{title:"Mi Lista"},n.a.createElement(s.a,null,null==a?void 0:a.map((function(e){return n.a.createElement(u.a,m({key:e.id},e,{isList:!0}))})))),n.a.createElement(d.a,{title:"Tendencias"},n.a.createElement(s.a,null,null==r?void 0:r.map((function(e){return n.a.createElement(u.a,m({key:e.id},e))})),n.a.createElement(u.a,null))),n.a.createElement(d.a,{title:"Originales De Platzi Video"},n.a.createElement(s.a,null,null==o?void 0:o.map((function(e){return n.a.createElement(u.a,m({key:e.id},e))})))),n.a.createElement(f.a,{isHome:!0}))},y=function(e){return{searching:e.searching,myList:e.myList,trends:e.trends,originals:e.originals}},v=Object(i.b)(y,null)(g);t.a=v,(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(g,"Home","/home/jagarcia/Platzi/Platzi_Video/src/frontend/containers/Home.jsx"),p.register(y,"mapStateToProps","/home/jagarcia/Platzi/Platzi_Video/src/frontend/containers/Home.jsx"),p.register(v,"default","/home/jagarcia/Platzi/Platzi_Video/src/frontend/containers/Home.jsx")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,a(3)(e))},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),i=a(4),l=a(8);a(61);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,d,s=function(e){return n.a.createElement("section",{className:"main"},n.a.createElement("h2",{className:"main__title"},"¿Qué quieres ver hoy?"),n.a.createElement("input",{className:"input_search",type:"text",placeholder:"Buscar...",onChange:function(t){e.searchingVideo(t.target.value)}}))},u={searchingVideo:l.f},f=Object(i.b)(null,u)(s);t.a=f,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(s,"Search","/home/jagarcia/Platzi/Platzi_Video/src/frontend/components/Search.jsx"),c.register(u,"mapDispatchToProps","/home/jagarcia/Platzi/Platzi_Video/src/frontend/components/Search.jsx"),c.register(f,"default","/home/jagarcia/Platzi/Platzi_Video/src/frontend/components/Search.jsx")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,a(3)(e))},function(e,t,a){"use strict";(function(e){var r,o=a(39),n=a.n(o);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,l,c=function(e){var t=e.trim().toLowerCase(),a=n()(t,{encoding:"binary"});return"".concat("https://gravatar.com/avatar/").concat(a)},d=c;t.a=d,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(c,"gravatar","/home/jagarcia/Platzi/Platzi_Video/src/frontend/utils/gravatar.js"),i.register(d,"default","/home/jagarcia/Platzi/Platzi_Video/src/frontend/utils/gravatar.js")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,a(3)(e))},,function(e,t,a){"use strict";t.a=a.p+"assets/7104263cc7ae188d7e1275934c32a378.png"},function(e,t,a){"use strict";t.a=a.p+"assets/5a89d07e023cabc9bd46b8ef3e33b9c3.png"},function(e,t,a){"use strict";t.a=a.p+"assets/a341eae0b94807bb5a1663fee6d6e1f2.png"},function(e,t,a){"use strict";t.a=a.p+"assets/1baf6f54be269d1d45a5ebb09a788ded.png"},function(e,t,a){"use strict";t.a=a.p+"assets/9dc22cb06575ca4f965e50fa42548e74.png"},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),i=a(7),l=a(4),c=a(10),d=a(8),s=(a(70),a(46)),u=a(47),f=a(11);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,o=!1,n=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){o=!0,n=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},h=function(e){var t=g(Object(o.useState)({}),2),a=t[0],r=t[1],l=function(e){r(p(p({},a),{},b({},e.target.name,e.target.value)))};return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{isLogin:!0}),n.a.createElement("section",{className:"login"},n.a.createElement("section",{className:"login__container"},n.a.createElement("h2",{tabIndex:"0"},"Inicia sesión"),n.a.createElement("form",{className:"login__container--form",onSubmit:function(t){t.preventDefault(),e.loginRequest(a),e.history.push("/")}},n.a.createElement("input",{name:"email","aria-label":"correo",className:"input",type:"text",placeholder:"Correo",onChange:l}),n.a.createElement("input",{name:"password","aria-label":"contraseña",className:"input",type:"password",placeholder:"Contraseña",onChange:l}),n.a.createElement("button",{className:"button"},"Iniciar sesión"),n.a.createElement("div",{className:"login__container--remember-me"},n.a.createElement("label",null,n.a.createElement("input",{type:"checkbox",name:"",id:"cbox1",value:"checkbox"}),"Recuérdame"),n.a.createElement("a",{href:"/"},"Olvidé mi contraseña"))),n.a.createElement("section",{className:"login__container--social-media"},n.a.createElement("div",null,n.a.createElement("img",{src:s.a,alt:"Google"}),"Inicia sesión con Google"),n.a.createElement("div",null,n.a.createElement("img",{src:u.a,alt:"Twitter"}),"Inicia sesión con Twitter")),n.a.createElement("p",{className:"login__container--register"},"¿No tienes ninguna cuenta?",n.a.createElement(i.b,{to:"/register"},"Regístrate")))),n.a.createElement(f.a,null))};v(h,"useState{[form, setValues]({})}");var E,j,L={loginRequest:d.c},P=Object(l.b)(null,L)(h);t.a=P,(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(E.register(h,"Login","/home/jagarcia/Platzi/Platzi_Video/src/frontend/containers/Login.jsx"),E.register(L,"mapDispatchToProps","/home/jagarcia/Platzi/Platzi_Video/src/frontend/containers/Login.jsx"),E.register(P,"default","/home/jagarcia/Platzi/Platzi_Video/src/frontend/containers/Login.jsx")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(e)}).call(this,a(3)(e))},function(e,t,a){"use strict";t.a=a.p+"assets/87fee39f3ffc377fa871d31587cc532c.png"},function(e,t,a){"use strict";t.a=a.p+"assets/0103ef81347edc3344acec319325eb81.png"},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),i=a(4),l=a(7),c=a(10),d=a(11),s=a(8);a(71);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,o=!1,n=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){o=!0,n=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},y=function(e){var t=p(Object(o.useState)({}),2),a=t[0],r=t[1],i=function(e){r(f(f({},a),{},m({},e.target.name,e.target.value)))};return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{isLogin:!0}),n.a.createElement("section",{className:"register"},n.a.createElement("div",{className:"register__container"},n.a.createElement("h2",{tabIndex:"0"},"Regístrate"),n.a.createElement("form",{className:"register__container--form",onSubmit:function(t){t.preventDefault(),e.registerRequest(a),e.history.push("/")}},n.a.createElement("input",{name:"name",className:"input",type:"text",placeholder:"Nombre",onChange:i}),n.a.createElement("input",{name:"email",className:"input",type:"text",placeholder:"Correo",onChange:i}),n.a.createElement("input",{name:"password",className:"input",type:"password",placeholder:"Contraseña",onChange:i}),n.a.createElement("button",{className:"button"},"Registrarme")),n.a.createElement("p",null,n.a.createElement(l.b,{to:"/login"},"Iniciar Sesion")))),n.a.createElement(d.a,null))};g(y,"useState{[form, setValues]({})}");var v,h,E={registerRequest:s.e},j=Object(i.b)(null,E)(y);t.a=j,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(y,"Register","/home/jagarcia/Platzi/Platzi_Video/src/frontend/containers/Register.jsx"),v.register(E,"mapDispatchToProps","/home/jagarcia/Platzi/Platzi_Video/src/frontend/containers/Register.jsx"),v.register(j,"default","/home/jagarcia/Platzi/Platzi_Video/src/frontend/containers/Register.jsx")),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)}).call(this,a(3)(e))},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),i=(a(32),a(72),a(10)),l=a(11);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,d,s=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{isLogin:!0}),n.a.createElement("div",{className:"info__container"},n.a.createElement("h1",{className:"info__container--important"},"404"),n.a.createElement("p",{className:"info__container--message"},"página no encontrada")),n.a.createElement(l.a,null))},u=s;t.a=u,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(s,"NotFound","/home/jagarcia/Platzi/Platzi_Video/src/frontend/containers/NotFound.jsx"),c.register(u,"default","/home/jagarcia/Platzi/Platzi_Video/src/frontend/containers/NotFound.jsx")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,a(3)(e))},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),i=a(4),l=a(2),c=a(8);a(73);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,o=!1,n=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){o=!0,n=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},f=function(e){var t=e.match.params.id,a=d(Object(o.useState)(!0),2),r=a[0],i=a[1];Object(o.useLayoutEffect)((function(){e.getVideoSource(t),i(!1)}),[]);var c=Object.keys(e.playing).length>0;return r?n.a.createElement("h2",null,"Loading"):c?n.a.createElement("div",{className:"player"},n.a.createElement("video",{controls:!0,autoPlay:!0},n.a.createElement("source",{src:e.playing.source,type:"video/mp4"})),n.a.createElement("div",{className:"Player-back"},n.a.createElement("button",{type:"button",className:"Player-backButton",onClick:function(){e.history.goBack()}},"Regresar"))):n.a.createElement(l.a,{to:"/404"})};u(f,"useState{[loading, setLoading](true)}\nuseLayoutEffect{}");var m,p,b=function(e){return{playing:e.playing}},g={getVideoSource:c.b},y=Object(i.b)(b,g)(f);t.a=y,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(f,"Player","/home/jagarcia/Platzi/Platzi_Video/src/frontend/containers/Player.jsx"),m.register(b,"mapStateToProps","/home/jagarcia/Platzi/Platzi_Video/src/frontend/containers/Player.jsx"),m.register(g,"mapDispatchToProps","/home/jagarcia/Platzi/Platzi_Video/src/frontend/containers/Player.jsx"),m.register(y,"default","/home/jagarcia/Platzi/Platzi_Video/src/frontend/containers/Player.jsx")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,a(3)(e))},,function(e,t,a){e.exports=a(53)},function(e,t,a){"use strict";a.r(t),function(e){var t,r=a(0),o=a.n(r),n=a(18),i=a.n(n),l=a(4),c=a(20),d=a(51),s=a(2),u=a(34),f=a(35);(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,p,b=Object(d.a)(),g=window.__PRELOADED_STATE__,y=Object(c.b)(u.a,g,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());delete window.__PRELOADED_STATE__,i.a.hydrate(o.a.createElement(l.a,{store:y},o.a.createElement(s.c,{history:b},o.a.createElement(f.a,null))),document.getElementById("app")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(b,"history","/home/jagarcia/Platzi/Platzi_Video/src/frontend/index.js"),m.register(g,"preloadedState","/home/jagarcia/Platzi/Platzi_Video/src/frontend/index.js"),m.register(y,"store","/home/jagarcia/Platzi/Platzi_Video/src/frontend/index.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}.call(this,a(3)(e))},,,,,,,,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){}]);