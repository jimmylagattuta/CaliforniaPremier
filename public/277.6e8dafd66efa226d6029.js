"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[277],{249:(n,e,r)=>{r.d(e,{A:()=>A});var t=r(354),a=r.n(t),o=r(314),i=r.n(o)()(a());i.push([n.id,"/* Section container */\n.locations-section {\n    padding: 1rem;\n    background-color: #f5f5f5;\n    text-align: center;\n  }\n  \n  /* Title styles */\n  .hero-content-title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.5rem;\n    margin-bottom: 1rem;\n  }\n  \n  .line {\n    background-color: rgb(37, 54, 53);\n    width: 31px;\n    height: 2px;\n  }\n  \n  .company-name {\n    color: rgb(37, 54, 53);\n    font-size: 0.9rem;\n    font-weight: bolder;\n  }\n  \n  /* Grid layout for cards */\n  .locations-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: 2rem;\n    margin-top: 1rem;\n  }\n  \n  /* Horizontal card layout with alternating order */\n  .location-card {\n    display: flex;\n    flex-direction: row;\n    background: #fff;\n    border-radius: 8px;\n    overflow: hidden;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\n    max-width: 600px;\n    margin: 0 auto;\n  }\n  \n  .location-card:hover {\n    transform: translateY(-4px);\n    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);\n  }\n  \n  /* Reverse order for odd-index cards */\n  .location-card.reverse {\n    flex-direction: row-reverse;\n  }\n  \n  /* Image column */\n  .location-image {\n    flex: 0 0 40%;\n    min-width: 100px;\n    background-size: cover;\n    background-position: center;\n  }\n  \n  /* Info column */\n  .location-info {\n    flex: 1;\n    padding: 0.8rem 1rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: left;\n    background: linear-gradient(135deg, #ffffff, #f8f8f8);\n  }\n  \n  /* Emphasized city title */\n  .location-city {\n    font-size: 1.2rem;\n    margin: 0 0 0.3rem;\n    text-transform: uppercase;\n    color: #222;\n    font-weight: 700;\n    letter-spacing: 1px;\n    border-bottom: 2px solid rgb(87, 128, 124);\n    padding-bottom: 0.2rem;\n  }\n  \n  /* Refined address container */\n  .location-address {\n    font-size: 0.8rem;\n    margin: 0;\n    color: #555;\n    padding: 0rem;\n    background-color: #fafafa;\n    border-radius: 4px;\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.08);\n  }\n  \n  .location-address a {\n    color: #555;\n    text-decoration: none;\n    display: inline-flex;\n    align-items: center;\n    text-decoration: underline;\n    text-decoration-color: #d6d6ec;\n  }\n  \n  .location-address a:hover {\n    text-decoration: underline;\n  }\n  \n  /* Map icon styling */\n  .map-icon {\n    width: 16px;\n    height: auto;\n    margin-right: 0.5rem;\n    vertical-align: middle;\n  }\n  ","",{version:3,sources:["webpack://./src/sections/LocationsSection.css"],names:[],mappings:"AAAA,sBAAsB;AACtB;IACI,aAAa;IACb,yBAAyB;IACzB,kBAAkB;EACpB;;EAEA,iBAAiB;EACjB;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,mBAAmB;EACrB;;EAEA;IACE,iCAAiC;IACjC,WAAW;IACX,WAAW;EACb;;EAEA;IACE,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA,0BAA0B;EAC1B;IACE,aAAa;IACb,2DAA2D;IAC3D,SAAS;IACT,gBAAgB;EAClB;;EAEA,kDAAkD;EAClD;IACE,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,0CAA0C;IAC1C,qDAAqD;IACrD,gBAAgB;IAChB,cAAc;EAChB;;EAEA;IACE,2BAA2B;IAC3B,0CAA0C;EAC5C;;EAEA,sCAAsC;EACtC;IACE,2BAA2B;EAC7B;;EAEA,iBAAiB;EACjB;IACE,aAAa;IACb,gBAAgB;IAChB,sBAAsB;IACtB,2BAA2B;EAC7B;;EAEA,gBAAgB;EAChB;IACE,OAAO;IACP,oBAAoB;IACpB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,gBAAgB;IAChB,qDAAqD;EACvD;;EAEA,0BAA0B;EAC1B;IACE,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,0CAA0C;IAC1C,sBAAsB;EACxB;;EAEA,8BAA8B;EAC9B;IACE,iBAAiB;IACjB,SAAS;IACT,WAAW;IACX,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,+CAA+C;EACjD;;EAEA;IACE,WAAW;IACX,qBAAqB;IACrB,oBAAoB;IACpB,mBAAmB;IACnB,0BAA0B;IAC1B,8BAA8B;EAChC;;EAEA;IACE,0BAA0B;EAC5B;;EAEA,qBAAqB;EACrB;IACE,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,sBAAsB;EACxB",sourcesContent:["/* Section container */\r\n.locations-section {\r\n    padding: 1rem;\r\n    background-color: #f5f5f5;\r\n    text-align: center;\r\n  }\r\n  \r\n  /* Title styles */\r\n  .hero-content-title {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 0.5rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .line {\r\n    background-color: rgb(37, 54, 53);\r\n    width: 31px;\r\n    height: 2px;\r\n  }\r\n  \r\n  .company-name {\r\n    color: rgb(37, 54, 53);\r\n    font-size: 0.9rem;\r\n    font-weight: bolder;\r\n  }\r\n  \r\n  /* Grid layout for cards */\r\n  .locations-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\r\n    gap: 2rem;\r\n    margin-top: 1rem;\r\n  }\r\n  \r\n  /* Horizontal card layout with alternating order */\r\n  .location-card {\r\n    display: flex;\r\n    flex-direction: row;\r\n    background: #fff;\r\n    border-radius: 8px;\r\n    overflow: hidden;\r\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\r\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .location-card:hover {\r\n    transform: translateY(-4px);\r\n    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);\r\n  }\r\n  \r\n  /* Reverse order for odd-index cards */\r\n  .location-card.reverse {\r\n    flex-direction: row-reverse;\r\n  }\r\n  \r\n  /* Image column */\r\n  .location-image {\r\n    flex: 0 0 40%;\r\n    min-width: 100px;\r\n    background-size: cover;\r\n    background-position: center;\r\n  }\r\n  \r\n  /* Info column */\r\n  .location-info {\r\n    flex: 1;\r\n    padding: 0.8rem 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    text-align: left;\r\n    background: linear-gradient(135deg, #ffffff, #f8f8f8);\r\n  }\r\n  \r\n  /* Emphasized city title */\r\n  .location-city {\r\n    font-size: 1.2rem;\r\n    margin: 0 0 0.3rem;\r\n    text-transform: uppercase;\r\n    color: #222;\r\n    font-weight: 700;\r\n    letter-spacing: 1px;\r\n    border-bottom: 2px solid rgb(87, 128, 124);\r\n    padding-bottom: 0.2rem;\r\n  }\r\n  \r\n  /* Refined address container */\r\n  .location-address {\r\n    font-size: 0.8rem;\r\n    margin: 0;\r\n    color: #555;\r\n    padding: 0rem;\r\n    background-color: #fafafa;\r\n    border-radius: 4px;\r\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.08);\r\n  }\r\n  \r\n  .location-address a {\r\n    color: #555;\r\n    text-decoration: none;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    text-decoration: underline;\r\n    text-decoration-color: #d6d6ec;\r\n  }\r\n  \r\n  .location-address a:hover {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  /* Map icon styling */\r\n  .map-icon {\r\n    width: 16px;\r\n    height: auto;\r\n    margin-right: 0.5rem;\r\n    vertical-align: middle;\r\n  }\r\n  "],sourceRoot:""}]);const A=i},277:(n,e,r)=>{r.r(e),r.d(e,{default:()=>E});var t=r(540),a=r(72),o=r.n(a),i=r(825),A=r.n(i),s=r(659),c=r.n(s),d=r(56),l=r.n(d),m=r(159),B=r.n(m),p=r(113),g=r.n(p),C=r(249),f={};f.styleTagTransform=g(),f.setAttributes=l(),f.insert=c().bind(null,"head"),f.domAPI=A(),f.insertStyleElement=B();o()(C.A,f);C.A&&C.A.locals&&C.A.locals;const u=[{city:"Santa Rosa",address:"864 2nd Street Suite B, Santa Rosa, CA 95404",image:"https://i.postimg.cc/8cBRDRnQ/i-Stock-1878629507-2-1-1.webp",mapsQuery:"Santa+Rosa+-+864+2nd+Street+Suite+B,+Santa+Rosa,+CA+95404"},{city:"Sacramento",address:"7275 E. Southgate Drive Suite 306, Sacramento, CA 95823",image:"https://i.postimg.cc/K8NmLRCG/i-Stock-2159424867-1.webp",mapsQuery:"Sacramento+-+7275+E.+Southgate+Drive+Suite+306,+Sacramento,+CA+95823"},{city:"Stockton",address:"420 Acacia Street Suite 19, Stockton, CA 95203",image:"https://i.postimg.cc/KjyWJ5gd/i-Stock-1357814327-1.webp",mapsQuery:"Stockton+-+420+Acacia+Street+Suite+19,+Stockton,+CA+95203"},{city:"Modesto",address:"1130 Coffee Road BLDG 2B, Modesto, CA 95355",image:"https://i.postimg.cc/QdpHz8Pw/i-Stock-1343463188-1.webp",mapsQuery:"Modesto+-+1130+Coffee+Road+BLDG+2B,+Modesto,+CA+95355"},{city:"Hayward",address:"24700 Calaroga Ave Suite 103, Hayward, CA 94545",image:"https://i.postimg.cc/Hnwkh3v5/i-Stock-1135194294-1.webp",mapsQuery:"Hayward+-+24700+Calaroga+Ave+Suite+103,+Hayward,+CA+94545"},{city:"Salinas",address:"945 N. Blanco Suite A, Salinas, CA 93901",image:"https://i.postimg.cc/MTzPBG2S/i-Stock-1176374269-1.webp",mapsQuery:"Salinas+-+945+N.+Blanco+Suite+A,+Salinas,+CA+93901"},{city:"San Jose",address:"2375 Montpelier Drive Suite 10, San Jose, CA 95116",image:"https://i.postimg.cc/13PWgKkd/i-Stock-465837688-1.webp",mapsQuery:"San+Jose+-+2375+Montpelier+Drive+Suite+10,+San+Jose,+CA+95116"},{city:"Fresno",address:"349 E. Bullard Ave Suite 105, Fresno, CA 93710",image:"https://i.postimg.cc/cH87kgqY/i-Stock-588965234-1.webp",mapsQuery:"Fresno+-+349+E.+Bullard+Ave+Suite+105,+Fresno,+CA+93710"},{city:"Hanford",address:"1004 N. Douty Street, Hanford, CA 93230",image:"https://i.postimg.cc/50qytbLT/i-Stock-2198440524-1.webp",mapsQuery:"Hanford+-+1004+N.+Douty+Street,+Hanford,+CA+93230"},{city:"Bakersfield",address:"3550 Q. Street Suite 105, Bakersfield, CA 93301",image:"https://i.postimg.cc/ZnCGMLbH/i-Stock-2178001181-1.webp",mapsQuery:"Bakersfield+-+3550+Q.+Street+Suite+105,+Bakersfield,+CA+93301"}];const E=function(){return t.createElement("section",{className:"locations-section"},t.createElement("div",{className:"hero-content-title"},t.createElement("div",{className:"line"}),t.createElement("h1",{className:"company-name"},"OUR LOCATIONS"),t.createElement("div",{className:"line"})),t.createElement("div",{className:"locations-grid"},u.map(((n,e)=>t.createElement("div",{key:e,className:"location-card "+(e%2!=0?"reverse":"")},t.createElement("div",{className:"location-image",style:{backgroundImage:`url(${n.image})`}}),t.createElement("div",{className:"location-info"},t.createElement("h3",{className:"location-city"},n.city),t.createElement("p",{className:"location-address"},t.createElement("a",{href:`https://www.google.com/maps/search/?api=1&query=${n.mapsQuery}`,target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://i.postimg.cc/HLxtkzZm/map-pin-1-1.webp",alt:"Map icon",className:"map-icon"}),n.address))))))))}}}]);
//# sourceMappingURL=277.6e8dafd66efa226d6029.js.map