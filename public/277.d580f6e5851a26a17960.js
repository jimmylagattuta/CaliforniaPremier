"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[277],{5249:(n,e,r)=>{r.d(e,{A:()=>i});var o=r(1354),t=r.n(o),A=r(6314),a=r.n(A)()(t());a.push([n.id,'/* Section container */\n.locations-section {\n  padding: 1rem;\n  background-color: #f5f5f5;\n  text-align: center;\n}\n\n/* Title styles */\n.hero-content-title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n\n.line-locations {\n  background-color: rgb(37, 54, 53);\n  width: 31px;\n  height: 2px;\n}\n\n.company-name-locations {\n  color: rgb(37, 54, 53);\n  font-size: 0.9rem;\n  font-weight: bolder;\n}\n\n/* Base grid layout for tablets & smaller \n   (auto-fit ensures they wrap nicely)\n*/\n.locations-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 2rem;\n  margin-top: 1rem;\n}\n\n/* Location card */\n.location-card {\n  display: flex;\n  flex-direction: row;\n  background: #fff;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  max-width: 600px; /* for smaller screens, keep them narrower */\n  margin: 0 auto;\n}\n\n.location-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);\n}\n\n/* Reverse order for alternating cards (for tablet & below) */\n.location-card.reverse {\n  flex-direction: row-reverse;\n}\n\n/* Image column */\n.location-image {\n  flex: 0 0 40%;\n  min-width: 100px;\n  background-size: cover;\n  background-position: center;\n}\n\n/* Info column */\n.location-info {\n  flex: 1;\n  padding: 0.8rem 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: left;\n  background: linear-gradient(135deg, #ffffff, #f8f8f8);\n}\n\n/* City title */\n.location-city {\n  font-size: 1.2rem;\n  margin: 0 0 0.3rem;\n  text-transform: uppercase;\n  color: #222;\n  font-weight: 700;\n  letter-spacing: 1px;\n  border-bottom: 2px solid rgb(87, 128, 124);\n  padding-bottom: 0.2rem;\n}\n\n/* Address styling */\n.location-address {\n  font-size: 0.8rem;\n  margin: 0;\n  color: #555;\n  padding: 5px 0 5px 0;\n  background-color: #fafafa;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n.location-address a {\n  color: #555;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  text-decoration: underline;\n  text-decoration-color: #d6d6ec;\n}\n\n.location-address a:hover {\n  text-decoration: underline;\n}\n\n/* Map icon styling */\n.map-icon {\n  width: 16px;\n  height: auto;\n  margin-right: 0.5rem;\n  vertical-align: middle;\n}\n\n/* Button container */\n.button-container {\n  margin-top: 20px;\n}\n\n.location-section-button {\n  display: inline-block;\n  padding: 12px 24px;\n  font-size: 1rem;\n  font-weight: bold;\n  color: white;\n  background-color: rgb(48, 68, 66);\n  border-radius: 25px;\n  text-decoration: none;\n  transition: background-color 0.3s;\n}\n\n/* ---------------------------------\n   Desktop (≥769px):\n   => 2-column grid \n   => Each card\'s image on top\n   => No reverse flipping\n---------------------------------- */\n@media (min-width: 769px) {\n  .locations-grid {\n    /* Force exactly 2 columns on desktop */\n    grid-template-columns: repeat(2, 1fr);\n    max-width: 1200px;\n    margin: 0 auto;\n    gap: 2rem;\n  }\n\n  /* Each card is now stacked (image on top) */\n  .location-card {\n    flex-direction: column;\n    max-width: 500px; /* optional narrower width on desktop */\n    margin: 0;\n  }\n\n  /* Remove the "reverse" effect on desktop */\n  .location-card.reverse {\n    flex-direction: column;\n  }\n\n  /* Image now full width on top, 200-250px tall */\n  .location-image {\n    width: 100%;\n    flex: 0 0 auto;\n    height: 200px; /* adjust as needed */\n  }\n\n  /* Info below the image, text left-aligned */\n  .location-info {\n    text-align: left;\n    padding: 1rem;\n  }\n}',"",{version:3,sources:["webpack://./src/sections/LocationsSection.css"],names:[],mappings:"AAAA,sBAAsB;AACtB;EACE,aAAa;EACb,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,iCAAiC;EACjC,WAAW;EACX,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;;CAEC;AACD;EACE,aAAa;EACb,2DAA2D;EAC3D,SAAS;EACT,gBAAgB;AAClB;;AAEA,kBAAkB;AAClB;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,0CAA0C;EAC1C,qDAAqD;EACrD,gBAAgB,EAAE,4CAA4C;EAC9D,cAAc;AAChB;;AAEA;EACE,2BAA2B;EAC3B,0CAA0C;AAC5C;;AAEA,6DAA6D;AAC7D;EACE,2BAA2B;AAC7B;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,gBAAgB;EAChB,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA,gBAAgB;AAChB;EACE,OAAO;EACP,oBAAoB;EACpB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,gBAAgB;EAChB,qDAAqD;AACvD;;AAEA,eAAe;AACf;EACE,iBAAiB;EACjB,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;EACX,gBAAgB;EAChB,mBAAmB;EACnB,0CAA0C;EAC1C,sBAAsB;AACxB;;AAEA,oBAAoB;AACpB;EACE,iBAAiB;EACjB,SAAS;EACT,WAAW;EACX,oBAAoB;EACpB,yBAAyB;EACzB,kBAAkB;EAClB,+CAA+C;AACjD;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,oBAAoB;EACpB,mBAAmB;EACnB,0BAA0B;EAC1B,8BAA8B;AAChC;;AAEA;EACE,0BAA0B;AAC5B;;AAEA,qBAAqB;AACrB;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA,qBAAqB;AACrB;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,iCAAiC;EACjC,mBAAmB;EACnB,qBAAqB;EACrB,iCAAiC;AACnC;;AAEA;;;;;oCAKoC;AACpC;EACE;IACE,uCAAuC;IACvC,qCAAqC;IACrC,iBAAiB;IACjB,cAAc;IACd,SAAS;EACX;;EAEA,4CAA4C;EAC5C;IACE,sBAAsB;IACtB,gBAAgB,EAAE,uCAAuC;IACzD,SAAS;EACX;;EAEA,2CAA2C;EAC3C;IACE,sBAAsB;EACxB;;EAEA,gDAAgD;EAChD;IACE,WAAW;IACX,cAAc;IACd,aAAa,EAAE,qBAAqB;EACtC;;EAEA,4CAA4C;EAC5C;IACE,gBAAgB;IAChB,aAAa;EACf;AACF",sourcesContent:['/* Section container */\r\n.locations-section {\r\n  padding: 1rem;\r\n  background-color: #f5f5f5;\r\n  text-align: center;\r\n}\r\n\r\n/* Title styles */\r\n.hero-content-title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.5rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.line-locations {\r\n  background-color: rgb(37, 54, 53);\r\n  width: 31px;\r\n  height: 2px;\r\n}\r\n\r\n.company-name-locations {\r\n  color: rgb(37, 54, 53);\r\n  font-size: 0.9rem;\r\n  font-weight: bolder;\r\n}\r\n\r\n/* Base grid layout for tablets & smaller \r\n   (auto-fit ensures they wrap nicely)\r\n*/\r\n.locations-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\r\n  gap: 2rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n/* Location card */\r\n.location-card {\r\n  display: flex;\r\n  flex-direction: row;\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  max-width: 600px; /* for smaller screens, keep them narrower */\r\n  margin: 0 auto;\r\n}\r\n\r\n.location-card:hover {\r\n  transform: translateY(-4px);\r\n  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n/* Reverse order for alternating cards (for tablet & below) */\r\n.location-card.reverse {\r\n  flex-direction: row-reverse;\r\n}\r\n\r\n/* Image column */\r\n.location-image {\r\n  flex: 0 0 40%;\r\n  min-width: 100px;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n/* Info column */\r\n.location-info {\r\n  flex: 1;\r\n  padding: 0.8rem 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  text-align: left;\r\n  background: linear-gradient(135deg, #ffffff, #f8f8f8);\r\n}\r\n\r\n/* City title */\r\n.location-city {\r\n  font-size: 1.2rem;\r\n  margin: 0 0 0.3rem;\r\n  text-transform: uppercase;\r\n  color: #222;\r\n  font-weight: 700;\r\n  letter-spacing: 1px;\r\n  border-bottom: 2px solid rgb(87, 128, 124);\r\n  padding-bottom: 0.2rem;\r\n}\r\n\r\n/* Address styling */\r\n.location-address {\r\n  font-size: 0.8rem;\r\n  margin: 0;\r\n  color: #555;\r\n  padding: 5px 0 5px 0;\r\n  background-color: #fafafa;\r\n  border-radius: 4px;\r\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.location-address a {\r\n  color: #555;\r\n  text-decoration: none;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  text-decoration: underline;\r\n  text-decoration-color: #d6d6ec;\r\n}\r\n\r\n.location-address a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n/* Map icon styling */\r\n.map-icon {\r\n  width: 16px;\r\n  height: auto;\r\n  margin-right: 0.5rem;\r\n  vertical-align: middle;\r\n}\r\n\r\n/* Button container */\r\n.button-container {\r\n  margin-top: 20px;\r\n}\r\n\r\n.location-section-button {\r\n  display: inline-block;\r\n  padding: 12px 24px;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  color: white;\r\n  background-color: rgb(48, 68, 66);\r\n  border-radius: 25px;\r\n  text-decoration: none;\r\n  transition: background-color 0.3s;\r\n}\r\n\r\n/* ---------------------------------\r\n   Desktop (≥769px):\r\n   => 2-column grid \r\n   => Each card\'s image on top\r\n   => No reverse flipping\r\n---------------------------------- */\r\n@media (min-width: 769px) {\r\n  .locations-grid {\r\n    /* Force exactly 2 columns on desktop */\r\n    grid-template-columns: repeat(2, 1fr);\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    gap: 2rem;\r\n  }\r\n\r\n  /* Each card is now stacked (image on top) */\r\n  .location-card {\r\n    flex-direction: column;\r\n    max-width: 500px; /* optional narrower width on desktop */\r\n    margin: 0;\r\n  }\r\n\r\n  /* Remove the "reverse" effect on desktop */\r\n  .location-card.reverse {\r\n    flex-direction: column;\r\n  }\r\n\r\n  /* Image now full width on top, 200-250px tall */\r\n  .location-image {\r\n    width: 100%;\r\n    flex: 0 0 auto;\r\n    height: 200px; /* adjust as needed */\r\n  }\r\n\r\n  /* Info below the image, text left-aligned */\r\n  .location-info {\r\n    text-align: left;\r\n    padding: 1rem;\r\n  }\r\n}'],sourceRoot:""}]);const i=a},6277:(n,e,r)=>{r.r(e),r.d(e,{default:()=>u});var o=r(6540),t=r(9536),A=r(4120),a=r(5072),i=r.n(a),l=r(7825),c=r.n(l),s=r(7659),d=r.n(s),m=r(5056),p=r.n(m),g=r(540),B=r.n(g),C=r(1113),E=r.n(C),f=r(5249),x={};x.styleTagTransform=E(),x.setAttributes=p(),x.insert=d().bind(null,"head"),x.domAPI=c(),x.insertStyleElement=B();i()(f.A,x);f.A&&f.A.locals&&f.A.locals;const u=function(n){let{showButton:e=!0}=n;const r=Object.entries(A.x).map((n=>{let[e,r]=n;return{...r,id:e}})),[a,i]=(0,o.useState)(window.innerWidth>=769);(0,o.useEffect)((()=>{const n=()=>{i(window.innerWidth>=769)};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[]);const l=n=>a&&n.desktopImage?n.desktopImage:n.image||n.heroImage;return o.createElement("section",{className:"locations-section"},o.createElement("div",{className:"hero-content-title"},o.createElement("div",{className:"line-locations"}),o.createElement("h1",{className:"company-name-locations"},"OUR LOCATIONS"),o.createElement("div",{className:"line-locations"})),o.createElement("div",{className:"locations-grid"},r.map(((n,e)=>o.createElement(t.N_,{key:n.id,to:`/locations/${n.id}`,className:"location-card-link"},o.createElement("div",{className:"location-card "+(e%2!=0?"reverse":"")},o.createElement("div",{className:"location-image",style:{backgroundImage:`url(${l(n)})`}}),o.createElement("div",{className:"location-info"},o.createElement("h2",{className:"location-city"},n.name),o.createElement("p",{className:"location-address"},n.address?o.createElement("span",{onClick:e=>((n,e)=>{e.stopPropagation(),window.open(`https://www.google.com/maps/search/?api=1&query=${n.replace(/ /g,"+")}`,"_blank")})(n.address,e),className:"map-link",style:{cursor:"pointer"}},o.createElement("img",{src:"https://i.postimg.cc/HLxtkzZm/map-pin-1-1.webp",alt:"Map icon",className:"map-icon",height:"16",width:"16"}),n.address):"Address coming soon"),n.phone&&o.createElement("p",{className:"location-address"},o.createElement("strong",null,"Phone:"),o.createElement("span",{onClick:e=>((n,e)=>{e.stopPropagation(),window.location.href=`tel:${n.replace(/[^0-9]/g,"")}`})(n.phone,e),className:"phone-link",style:{cursor:"pointer",marginLeft:"5px"}},n.phone)))))))),e&&o.createElement("div",{className:"button-container",style:{textAlign:"center",marginTop:"20px"}},o.createElement(t.N_,{to:"/locations",className:"location-section-button"},"View All Locations")))}}}]);
//# sourceMappingURL=277.d580f6e5851a26a17960.js.map