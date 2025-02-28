(()=>{"use strict";var e,t,n,a={254:(e,t,n)=>{var a=n(540),r=n(338),l=n(536);const o=function(){const[e,t]=(0,a.useState)(!1),n=(0,l.Zp)(),r=e=>{n(e),t(!1)};return a.createElement("nav",{className:"navbar",style:{position:"static"}},a.createElement("div",{className:"navbar-container"},a.createElement("div",{className:"navbar-logo",onClick:()=>r("/")},a.createElement("img",{src:"https://i.postimg.cc/mrH0xfnF/i-Stock-1137683414-1-3.webp",alt:"Company Logo",width:"100%",height:"auto",loading:"eager"})),a.createElement("div",{className:"menu-icon",alt:"Toggle navigation menu",onClick:()=>{t(!e)}},a.createElement("div",{className:e?"bar change":"bar"}),a.createElement("div",{className:e?"bar change":"bar"}),a.createElement("div",{className:e?"bar change":"bar"})),a.createElement("ul",{className:e?"nav-menu active":"nav-menu"},a.createElement("li",{className:"nav-item",onClick:()=>r("/")},"Home"),a.createElement("li",{className:"nav-item",onClick:()=>r("/services")},"Services"),a.createElement("li",{className:"nav-item",onClick:()=>r("/locations")},"Locations"),a.createElement("li",{className:"nav-item",onClick:()=>r("/about")},"About Us"),a.createElement("li",{className:"nav-item",onClick:()=>r("/patient")},"Become a Patient"),a.createElement("li",{className:"nav-item",onClick:()=>r("/portal")},"Patient Portal"),a.createElement("li",{className:"nav-item",onClick:()=>r("/appointment")},"Book Appointment"))))},i=(0,a.lazy)((()=>n.e(321).then(n.bind(n,321)))),c=(0,a.lazy)((()=>Promise.all([n.e(950),n.e(160)]).then(n.bind(n,160))));const s=function(){return a.createElement("div",{className:"container"},a.createElement(o,null),a.createElement("main",{className:"content"},a.createElement(a.Suspense,{fallback:a.createElement("div",null,"Loading...")},a.createElement(l.BV,null,a.createElement(l.qh,{path:"/",element:a.createElement(i,null)}),a.createElement(l.qh,{path:"/locations",element:a.createElement(c,null)})))))};var m=n(72),d=n.n(m),u=n(825),v=n.n(u),b=n(659),p=n.n(b),f=n(56),h=n.n(f),g=n(159),E=n.n(g),A=n(113),k=n.n(A),y=n(523),C={};C.styleTagTransform=k(),C.setAttributes=h(),C.insert=p().bind(null,"head"),C.domAPI=v(),C.insertStyleElement=E();d()(y.A,C);y.A&&y.A.locals&&y.A.locals;r.createRoot(document.getElementById("root")).render(a.createElement(a.StrictMode,null,a.createElement(l.Kd,{basename:"/"},a.createElement(s,null)))),"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/service-worker.js").then((e=>{})).catch((e=>{}))}))},523:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(354),r=n.n(a),l=n(314),o=n.n(l)()(r());o.push([e.id,"/* Reset Body and HTML */\nhtml, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  overflow-x: hidden; /* Prevents horizontal scroll */\n}\n","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA,wBAAwB;AACxB;EACE,SAAS;EACT,UAAU;EACV,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,kBAAkB,EAAE,+BAA+B;AACrD",sourcesContent:["/* Reset Body and HTML */\nhtml, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  overflow-x: hidden; /* Prevents horizontal scroll */\n}\n"],sourceRoot:""}]);const i=o}},r={};function l(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={id:e,exports:{}};return a[e](n,n.exports,l),n.exports}l.m=a,e=[],l.O=(t,n,a,r)=>{if(!n){var o=1/0;for(m=0;m<e.length;m++){n=e[m][0],a=e[m][1],r=e[m][2];for(var i=!0,c=0;c<n.length;c++)(!1&r||o>=r)&&Object.keys(l.O).every((e=>l.O[e](n[c])))?n.splice(c--,1):(i=!1,r<o&&(o=r));if(i){e.splice(m--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[n,a,r]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,n)=>(l.f[n](e,t),t)),[])),l.u=e=>e+"."+{78:"017feb90f3dc929d9aa1",160:"c6969ca9cfc172bdc167",277:"a636f39a7ab4d5bb3f06",321:"8e42bbc93c9b83c31548",770:"fbd0ad22ccd418e427da",845:"deac8432337804c33943",852:"968bb23445845827c590",950:"1dca400ecb555c0fe28d"}[e]+".js",l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},n="client:",l.l=(e,a,r,o)=>{if(t[e])t[e].push(a);else{var i,c;if(void 0!==r)for(var s=document.getElementsByTagName("script"),m=0;m<s.length;m++){var d=s[m];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+r){i=d;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",n+r),i.src=e),t[e]=[a];var u=(n,a)=>{i.onerror=i.onload=null,clearTimeout(v);var r=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((e=>e(a))),n)return n(a)},v=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),c&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="/",(()=>{var e={792:0};l.f.j=(t,n)=>{var a=l.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var r=new Promise(((n,r)=>a=e[t]=[n,r]));n.push(a[2]=r);var o=l.p+l.u(t),i=new Error;l.l(o,(n=>{if(l.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,a[1](i)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,n)=>{var a,r,o=n[0],i=n[1],c=n[2],s=0;if(o.some((t=>0!==e[t]))){for(a in i)l.o(i,a)&&(l.m[a]=i[a]);if(c)var m=c(l)}for(t&&t(n);s<o.length;s++)r=o[s],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(m)},n=self.webpackChunkclient=self.webpackChunkclient||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),l.nc=void 0;var o=l.O(void 0,[74],(()=>l(254)));o=l.O(o)})();
//# sourceMappingURL=main.6a8f31ee4be3fd38ce65.js.map