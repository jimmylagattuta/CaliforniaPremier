(()=>{"use strict";var n,e={517:(n,e,t)=>{t.d(e,{A:()=>o});var r=t(354),A=t.n(r),i=t(314),a=t.n(i)()(A());a.push([n.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const o=a},523:(n,e,t)=>{t.d(e,{A:()=>o});var r=t(354),A=t.n(r),i=t(314),a=t.n(i)()(A());a.push([n.id,"/* Reset Body and HTML */\nhtml, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  overflow-x: hidden; /* Prevents horizontal scroll */\n}\n","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA,wBAAwB;AACxB;EACE,SAAS;EACT,UAAU;EACV,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,kBAAkB,EAAE,+BAA+B;AACrD",sourcesContent:["/* Reset Body and HTML */\nhtml, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  overflow-x: hidden; /* Prevents horizontal scroll */\n}\n"],sourceRoot:""}]);const o=a},626:(n,e,t)=>{t.d(e,{A:()=>o});var r=t(354),A=t.n(r),i=t(314),a=t.n(i)()(A());a.push([n.id,".container {\n  display: flex;\n  flex-direction: column;\n  background: grey;\n  width: 100%;\n  height: 100vh; /* Full viewport height */\n  box-sizing: border-box;\n  padding: 0px;\n  margin: 0px;\n  overflow: hidden;\n}\n\n@media (min-width: 768px) {\n  .container {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container {\n    width: 100%;\n    max-width: 100%;\n    margin: 0 auto;\n  }\n}\n","",{version:3,sources:["webpack://./src/App.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,WAAW;EACX,aAAa,EAAE,yBAAyB;EACxC,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE;IACE,mBAAmB;IACnB,8BAA8B;EAChC;AACF;;AAEA;EACE;IACE,WAAW;IACX,eAAe;IACf,cAAc;EAChB;AACF",sourcesContent:[".container {\n  display: flex;\n  flex-direction: column;\n  background: grey;\n  width: 100%;\n  height: 100vh; /* Full viewport height */\n  box-sizing: border-box;\n  padding: 0px;\n  margin: 0px;\n  overflow: hidden;\n}\n\n@media (min-width: 768px) {\n  .container {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container {\n    width: 100%;\n    max-width: 100%;\n    margin: 0 auto;\n  }\n}\n"],sourceRoot:""}]);const o=a},699:(n,e,t)=>{t.d(e,{A:()=>o});var r=t(354),A=t.n(r),i=t(314),a=t.n(i)()(A());a.push([n.id,'/* Base (Mobile First) */\n.hero-section {\n    position: relative;\n    width: 100%;\n    height: 60vh; /* Reduce height for mobile */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    background-color: #f0f0f0;\n  }\n\n  .hero-section::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: radial-gradient(circle, rgba(0, 0, 0, 0.3) 20%, transparent 60%);\n    z-index: 1;\n    pointer-events: none;\n  }\n  \n  \n  \n  .hero-section img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: center center; /* Center the image */\n  }\n  \n  /* Tablet (From 481px up to 768px) */\n  @media (min-width: 481px) and (max-width: 768px) {\n    .hero-section {\n      height: 75vh; /* Slightly larger for tablets */\n    }\n  \n    .company-name {\n      font-size: 2.5rem;\n    }\n  }\n  \n  /* Desktop */\n  @media (min-width: 769px) {\n    .hero-section {\n      height: 100vh; /* Full height for desktops */\n    }\n  \n    .company-name {\n      font-size: 3rem;\n    }\n  }\n  \n  /* Content Style */\n  .hero-content {\n    position: relative;\n    text-align: center;\n    color: white;\n    font-family: Arial, sans-serif;\n  }\n  \n  .company-name {\n    font-size: 2rem;\n    font-weight: bold;\n    margin-bottom: 20px;\n    letter-spacing: 2px;\n  }\n  ',"",{version:3,sources:["webpack://./src/sections/HeroSection.css"],names:[],mappings:"AAAA,wBAAwB;AACxB;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY,EAAE,6BAA6B;IAC3C,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,yBAAyB;EAC3B;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,4EAA4E;IAC5E,UAAU;IACV,oBAAoB;EACtB;;;;EAIA;IACE,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,8BAA8B,EAAE,qBAAqB;EACvD;;EAEA,oCAAoC;EACpC;IACE;MACE,YAAY,EAAE,gCAAgC;IAChD;;IAEA;MACE,iBAAiB;IACnB;EACF;;EAEA,YAAY;EACZ;IACE;MACE,aAAa,EAAE,6BAA6B;IAC9C;;IAEA;MACE,eAAe;IACjB;EACF;;EAEA,kBAAkB;EAClB;IACE,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,8BAA8B;EAChC;;EAEA;IACE,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;EACrB",sourcesContent:['/* Base (Mobile First) */\r\n.hero-section {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 60vh; /* Reduce height for mobile */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    overflow: hidden;\r\n    background-color: #f0f0f0;\r\n  }\r\n\r\n  .hero-section::before {\r\n    content: "";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: radial-gradient(circle, rgba(0, 0, 0, 0.3) 20%, transparent 60%);\r\n    z-index: 1;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  \r\n  \r\n  .hero-section img {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    object-position: center center; /* Center the image */\r\n  }\r\n  \r\n  /* Tablet (From 481px up to 768px) */\r\n  @media (min-width: 481px) and (max-width: 768px) {\r\n    .hero-section {\r\n      height: 75vh; /* Slightly larger for tablets */\r\n    }\r\n  \r\n    .company-name {\r\n      font-size: 2.5rem;\r\n    }\r\n  }\r\n  \r\n  /* Desktop */\r\n  @media (min-width: 769px) {\r\n    .hero-section {\r\n      height: 100vh; /* Full height for desktops */\r\n    }\r\n  \r\n    .company-name {\r\n      font-size: 3rem;\r\n    }\r\n  }\r\n  \r\n  /* Content Style */\r\n  .hero-content {\r\n    position: relative;\r\n    text-align: center;\r\n    color: white;\r\n    font-family: Arial, sans-serif;\r\n  }\r\n  \r\n  .company-name {\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n    margin-bottom: 20px;\r\n    letter-spacing: 2px;\r\n  }\r\n  '],sourceRoot:""}]);const o=a},846:(n,e,t)=>{t.d(e,{A:()=>o});var r=t(354),A=t.n(r),i=t(314),a=t.n(i)()(A());a.push([n.id,"/* CSS for Hamburger Menu */\n.navbar {\n    height: 65px;\n    background: white;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 5px 5px 0px 5px;\n    margin: 0px;\n    position: relative;\n  }\n  .navbar-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n  }\n  \n  .navbar-logo img {\n    width: auto;\n    height: 55px;\n  }\n  \n  .menu-icon {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 20px;\n    cursor: pointer;\n  }\n  \n  .bar {\n    width: 30px;\n    height: 4px;\n    background-color: #333;\n    margin: 3px 10px;\n    transition: 0.4s;\n  }\n  \n  .menu-icon .bar.change:nth-child(1) {\n    transform: translateY(7px) rotate(45deg);\n  }\n  .menu-icon .bar.change:nth-child(2) {\n    opacity: 0;\n  }\n  .menu-icon .bar.change:nth-child(3) {\n    transform: translateY(-7px) rotate(-45deg);\n  }\n  \n  .nav-menu {\n    display: none;\n    flex-direction: column;\n    position: absolute;\n    top: 55px; /* Below navbar */\n    left: 0;\n    width: 100%;\n    height: calc(100vh - 65px);\n    background-color: #7ea19f;\n    padding: 2rem;\n    box-sizing: border-box;\n    overflow: hidden;\n    z-index: 999;\n  }\n  \n  .nav-menu.active {\n    display: flex;\n    align-items: center; /* Vertically center */\n    justify-content: flex-start; /* Horizontally center */\n  }\n  \n/* Style the list items */\n.nav-item {\n    list-style: none; /* Removes bullets */\n    padding: 20px 0; /* Slightly more spacing */\n    text-align: center;\n    color: white;\n    font-size: 1.75rem; /* Slightly bigger font */\n    font-weight: 500;\n    transition: color 0.3s;\n  }\n  \n  \n  .nav-item:hover {\n    color: #c5c5c5;\n  }\n  \n  ","",{version:3,sources:["webpack://./src/utilities/Navbar.css"],names:[],mappings:"AAAA,2BAA2B;AAC3B;IACI,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,wBAAwB;IACxB,WAAW;IACX,kBAAkB;EACpB;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;EACb;;EAEA;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,YAAY;IACZ,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,WAAW;IACX,sBAAsB;IACtB,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,wCAAwC;EAC1C;EACA;IACE,UAAU;EACZ;EACA;IACE,0CAA0C;EAC5C;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,SAAS,EAAE,iBAAiB;IAC5B,OAAO;IACP,WAAW;IACX,0BAA0B;IAC1B,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,YAAY;EACd;;EAEA;IACE,aAAa;IACb,mBAAmB,EAAE,sBAAsB;IAC3C,2BAA2B,EAAE,wBAAwB;EACvD;;AAEF,yBAAyB;AACzB;IACI,gBAAgB,EAAE,oBAAoB;IACtC,eAAe,EAAE,0BAA0B;IAC3C,kBAAkB;IAClB,YAAY;IACZ,kBAAkB,EAAE,yBAAyB;IAC7C,gBAAgB;IAChB,sBAAsB;EACxB;;;EAGA;IACE,cAAc;EAChB",sourcesContent:["/* CSS for Hamburger Menu */\r\n.navbar {\r\n    height: 65px;\r\n    background: white;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 5px 5px 0px 5px;\r\n    margin: 0px;\r\n    position: relative;\r\n  }\r\n  .navbar-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n  }\r\n  \r\n  .navbar-logo img {\r\n    width: auto;\r\n    height: 55px;\r\n  }\r\n  \r\n  .menu-icon {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    height: 20px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .bar {\r\n    width: 30px;\r\n    height: 4px;\r\n    background-color: #333;\r\n    margin: 3px 10px;\r\n    transition: 0.4s;\r\n  }\r\n  \r\n  .menu-icon .bar.change:nth-child(1) {\r\n    transform: translateY(7px) rotate(45deg);\r\n  }\r\n  .menu-icon .bar.change:nth-child(2) {\r\n    opacity: 0;\r\n  }\r\n  .menu-icon .bar.change:nth-child(3) {\r\n    transform: translateY(-7px) rotate(-45deg);\r\n  }\r\n  \r\n  .nav-menu {\r\n    display: none;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    top: 55px; /* Below navbar */\r\n    left: 0;\r\n    width: 100%;\r\n    height: calc(100vh - 65px);\r\n    background-color: #7ea19f;\r\n    padding: 2rem;\r\n    box-sizing: border-box;\r\n    overflow: hidden;\r\n    z-index: 999;\r\n  }\r\n  \r\n  .nav-menu.active {\r\n    display: flex;\r\n    align-items: center; /* Vertically center */\r\n    justify-content: flex-start; /* Horizontally center */\r\n  }\r\n  \r\n/* Style the list items */\r\n.nav-item {\r\n    list-style: none; /* Removes bullets */\r\n    padding: 20px 0; /* Slightly more spacing */\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 1.75rem; /* Slightly bigger font */\r\n    font-weight: 500;\r\n    transition: color 0.3s;\r\n  }\r\n  \r\n  \r\n  .nav-item:hover {\r\n    color: #c5c5c5;\r\n  }\r\n  \r\n  "],sourceRoot:""}]);const o=a},878:(n,e,t)=>{var r=t(540),A=t(338),i=t(536),a=t(72),o=t.n(a),l=t(825),s=t.n(l),c=t(659),m=t.n(c),h=t(56),p=t.n(h),d=t(159),B=t.n(d),C=t(113),g=t.n(C),E=t(846),u={};u.styleTagTransform=g(),u.setAttributes=p(),u.insert=m().bind(null,"head"),u.domAPI=s(),u.insertStyleElement=B();o()(E.A,u);E.A&&E.A.locals&&E.A.locals;const b=function(){const[n,e]=(0,r.useState)(!1),t=(0,i.Zp)();return r.createElement("nav",{className:"navbar"},r.createElement("div",{className:"navbar-container"},r.createElement("div",{className:"navbar-logo",onClick:()=>t("/")},r.createElement("img",{src:"https://i.postimg.cc/vHxSVm2p/i-Stock-2161608991-1.webp",alt:"Company Logo",width:"100%",height:"auto",loading:"eager",fetchpriority:"high"})),r.createElement("div",{className:"menu-icon",onClick:()=>{e(!n)}},r.createElement("div",{className:n?"bar change":"bar"}),r.createElement("div",{className:n?"bar change":"bar"}),r.createElement("div",{className:n?"bar change":"bar"})),r.createElement("ul",{className:n?"nav-menu active":"nav-menu"},r.createElement("li",{className:"nav-item",onClick:()=>t("/")},"Home"),r.createElement("li",{className:"nav-item",onClick:()=>t("/services")},"Services"),r.createElement("li",{className:"nav-item",onClick:()=>t("/about")},"About Us"),r.createElement("li",{className:"nav-item",onClick:()=>t("/patient")},"Become a Patient"),r.createElement("li",{className:"nav-item",onClick:()=>t("/portal")},"Patient Portal"),r.createElement("li",{className:"nav-item",onClick:()=>t("/appointment")},"Book Appointment"))))};var x=t(699),f={};f.styleTagTransform=g(),f.setAttributes=p(),f.insert=m().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=B();o()(x.A,f);x.A&&x.A.locals&&x.A.locals;const v=function(){return r.createElement("section",{className:"hero-section"},r.createElement("picture",null,r.createElement("source",{srcSet:"https://i.postimg.cc/SxcHYK1g/i-Stock-1069988650-1-2.webp",media:"(max-width: 480px)",type:"image/webp"}),r.createElement("source",{srcSet:"https://i.postimg.cc/SxcHYK1g/i-Stock-1069988650-1-2.webp",media:"(max-width: 768px)",type:"image/webp"}),r.createElement("source",{srcSet:"https://i.postimg.cc/SxcHYK1g/i-Stock-1069988650-1-2.webp",media:"(min-width: 769px)",type:"image/webp"}),r.createElement("img",{src:"https://i.postimg.cc/SxcHYK1g/i-Stock-1069988650-1-2.webp",alt:"Hero",width:"100%",height:"auto",loading:"eager"})),r.createElement("div",{className:"hero-content"},r.createElement("h1",{className:"company-name"},"PURE HEALTH & WELLNESS"),r.createElement("div",{className:"line left"}),r.createElement("div",{className:"line right"})))};var I=t(517),w={};w.styleTagTransform=g(),w.setAttributes=p(),w.insert=m().bind(null,"head"),w.domAPI=s(),w.insertStyleElement=B();o()(I.A,w);I.A&&I.A.locals&&I.A.locals;const y=function(){return r.createElement("div",null,r.createElement(v,null))};var k=t(626),S={};S.styleTagTransform=g(),S.setAttributes=p(),S.insert=m().bind(null,"head"),S.domAPI=s(),S.insertStyleElement=B();o()(k.A,S);k.A&&k.A.locals&&k.A.locals;const Y=function(){return r.createElement("div",{className:"container"},r.createElement(b,null),r.createElement("main",{className:"content"},r.createElement(i.BV,null,r.createElement(i.qh,{path:"/",element:r.createElement(y,null)}),r.createElement(i.qh,{path:"/services",element:r.createElement("h1",null,"Services")}),r.createElement(i.qh,{path:"/about",element:r.createElement("h1",null,"About Us")}),r.createElement(i.qh,{path:"/patient",element:r.createElement("h1",null,"Become a Patient")}),r.createElement(i.qh,{path:"/portal",element:r.createElement("h1",null,"Patient Portal")}),r.createElement(i.qh,{path:"/appointment",element:r.createElement("h1",null,"Book Appointment")}))))};var W=t(523),j={};j.styleTagTransform=g(),j.setAttributes=p(),j.insert=m().bind(null,"head"),j.domAPI=s(),j.insertStyleElement=B();o()(W.A,j);W.A&&W.A.locals&&W.A.locals;A.createRoot(document.getElementById("root")).render(r.createElement(r.StrictMode,null,r.createElement(i.Kd,{basename:"/"},r.createElement(Y,null))))}},t={};function r(n){var A=t[n];if(void 0!==A)return A.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,n=[],r.O=(e,t,A,i)=>{if(!t){var a=1/0;for(c=0;c<n.length;c++){t=n[c][0],A=n[c][1],i=n[c][2];for(var o=!0,l=0;l<t.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every((n=>r.O[n](t[l])))?t.splice(l--,1):(o=!1,i<a&&(a=i));if(o){n.splice(c--,1);var s=A();void 0!==s&&(e=s)}}return e}i=i||0;for(var c=n.length;c>0&&n[c-1][2]>i;c--)n[c]=n[c-1];n[c]=[t,A,i]},r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n={792:0};r.O.j=e=>0===n[e];var e=(e,t)=>{var A,i,a=t[0],o=t[1],l=t[2],s=0;if(a.some((e=>0!==n[e]))){for(A in o)r.o(o,A)&&(r.m[A]=o[A]);if(l)var c=l(r)}for(e&&e(t);s<a.length;s++)i=a[s],r.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return r.O(c)},t=self.webpackChunkclient=self.webpackChunkclient||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})(),r.nc=void 0;var A=r.O(void 0,[74],(()=>r(878)));A=r.O(A)})();
//# sourceMappingURL=main.8200470fd9e9ff091729.js.map