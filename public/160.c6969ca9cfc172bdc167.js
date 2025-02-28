"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[160,277],{160:(n,e,r)=>{r.r(e),r.d(e,{default:()=>x});var t=r(540),a=r(72),o=r.n(a),A=r(825),i=r.n(A),s=r(659),l=r.n(s),c=r(56),m=r.n(c),d=r(159),B=r.n(d),p=r(113),g=r.n(p),C=r(595),f={};f.styleTagTransform=g(),f.setAttributes=m(),f.insert=l().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=B();o()(C.A,f);C.A&&C.A.locals&&C.A.locals;var u=r(277),E=r(950);const x=function(){const[n,e]=(0,t.useState)({firstName:"",lastName:"",email:"",phone:"",message:"",agreement:!1}),[r,a]=(0,t.useState)({}),[o,A]=(0,t.useState)(!1),i=n=>{const{name:r,value:t,type:a,checked:o}=n.target;e((n=>({...n,[r]:"checkbox"===a?o:t})))};return t.createElement("div",{className:"locations-page-container"},t.createElement("div",{className:"contact-header"},t.createElement("p",{className:"small-heading"},"CALIFORNIA PREMIER PAIN CLINICS"),t.createElement("h2",{className:"main-heading"},"Finding Paths to Relief"),t.createElement("p",{className:"sub-text"},"Our mission is to work with you in reducing your level of pain and suffering, getting you back to your highest level of independence and functioning, and improving the quality of your life."),t.createElement("p",{className:"sub-text"},"For personal injury patients, your lawyer may suggest that you visit CPPC for an assessment or continuous care. We offer a variety of treatments individually tailored to your needs.")),o?t.createElement("div",{className:"contact-submitted-message"},t.createElement("h3",null,"Thank You!"),t.createElement("p",null,"Your message has been sent successfully. We will get back to you shortly.")):t.createElement("form",{className:"contact-container",onSubmit:async e=>{e.preventDefault();const r=(()=>{const e={};return n.firstName||(e.firstName="First Name is required."),n.lastName||(e.lastName="Last Name is required."),n.email?/\S+@\S+\.\S+/.test(n.email)||(e.email="Invalid email format."):e.email="Email address is required.",n.phone?/^\+?[1-9]\d{1,14}$/.test(n.phone)||(e.phone="Invalid phone number. Include country code."):e.phone="Phone number is required.",n.message||(e.message="Message is required."),n.agreement||(e.agreement="You must agree to the terms."),e})();if(Object.keys(r).length>0)a(r);else{a({}),A(!1);try{const e=document.querySelector('meta[name="csrf-token"]')?.getAttribute("content");(await fetch("https://californiapremier-5591e4325563.herokuapp.com/contact",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-Token":e},body:JSON.stringify({contact:n})})).ok?A(!0):a({form:"There was an error sending your message. Try again later."})}catch(n){a({form:"There was an error sending your message. Try again later."})}}}},t.createElement("div",{className:"contact-left"},t.createElement("div",{className:"form-group"},t.createElement("label",{htmlFor:"firstName"},"First Name"),t.createElement("input",{type:"text",name:"firstName",value:n.firstName,onChange:i,required:!0}),r.firstName&&t.createElement("span",{className:"error-message"},r.firstName)),t.createElement("div",{className:"form-group"},t.createElement("label",{htmlFor:"lastName"},"Last Name"),t.createElement("input",{type:"text",name:"lastName",value:n.lastName,onChange:i,required:!0}),r.lastName&&t.createElement("span",{className:"error-message"},r.lastName)),t.createElement("div",{className:"form-group"},t.createElement("label",{htmlFor:"email"},"Email Address"),t.createElement("input",{type:"email",name:"email",value:n.email,onChange:i,required:!0}),r.email&&t.createElement("span",{className:"error-message"},r.email)),t.createElement("div",{className:"form-group"},t.createElement("label",{htmlFor:"phone"},"Phone Number"),t.createElement("input",{type:"tel",name:"phone",value:n.phone,onChange:i,required:!0}),r.phone&&t.createElement("span",{className:"error-message"},r.phone)),t.createElement("div",{className:"form-group"},t.createElement("label",{htmlFor:"message"},"Message"),t.createElement("textarea",{name:"message",value:n.message,onChange:i,required:!0}),r.message&&t.createElement("span",{className:"error-message"},r.message)),t.createElement("div",{className:"form-group"},t.createElement("div",{style:{display:"flex",flexDirection:"row"}},t.createElement("input",{id:"checkbox-agree",type:"checkbox",name:"agreement",checked:n.agreement,onChange:i,required:!0}),t.createElement("label",{htmlFor:"agreement"},"By clicking SEND, I understand and agree that any information submitted will be forwarded to the CPPC office by email and is not a secure messaging system. This form should not be used to transmit private health information. We only treat personal injury patients (patients on liens).")),r.agreement&&t.createElement("span",{className:"error-message"},r.agreement))),t.createElement("button",{type:"submit",className:"submit-button"},"SEND")),t.createElement(u.default,{showButton:!1}),t.createElement(E.default,null))}},249:(n,e,r)=>{r.d(e,{A:()=>i});var t=r(354),a=r.n(t),o=r(314),A=r.n(o)()(a());A.push([n.id,"/* Section container */\n.locations-section {\n    padding: 1rem;\n    background-color: #f5f5f5;\n    text-align: center;\n  }\n\n  .location-section-button {\n    display: inline-block;\n    padding: 12px 24px;\n    font-size: 1rem;\n    font-weight: bold;\n    color: white;\n    background-color: rgb(87, 128, 124);\n    border-radius: 25px;\n    text-decoration: none;\n    transition: background-color 0.3s;\n}\n\n  \n  /* Title styles */\n  .hero-content-title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.5rem;\n    margin-bottom: 1rem;\n  }\n  \n  .line-locations {\n    background-color: rgb(37, 54, 53);\n    width: 31px;\n    height: 2px;\n  }\n  \n  .company-name-locations {\n    color: rgb(37, 54, 53);\n    font-size: 0.9rem;\n    font-weight: bolder;\n  }\n  \n  /* Grid layout for cards */\n  .locations-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: 2rem;\n    margin-top: 1rem;\n  }\n  \n  /* Horizontal card layout with alternating order */\n  .location-card {\n    display: flex;\n    flex-direction: row;\n    background: #fff;\n    border-radius: 8px;\n    overflow: hidden;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\n    max-width: 600px;\n    margin: 0 auto;\n  }\n  \n  .location-card:hover {\n    transform: translateY(-4px);\n    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);\n  }\n  \n  /* Reverse order for odd-index cards */\n  .location-card.reverse {\n    flex-direction: row-reverse;\n  }\n  \n  /* Image column */\n  .location-image {\n    flex: 0 0 40%;\n    min-width: 100px;\n    background-size: cover;\n    background-position: center;\n  }\n  \n  /* Info column */\n  .location-info {\n    flex: 1;\n    padding: 0.8rem 1rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: left;\n    background: linear-gradient(135deg, #ffffff, #f8f8f8);\n  }\n  \n  /* Emphasized city title */\n  .location-city {\n    font-size: 1.2rem;\n    margin: 0 0 0.3rem;\n    text-transform: uppercase;\n    color: #222;\n    font-weight: 700;\n    letter-spacing: 1px;\n    border-bottom: 2px solid rgb(87, 128, 124);\n    padding-bottom: 0.2rem;\n  }\n  \n  /* Refined address container */\n  .location-address {\n    font-size: 0.8rem;\n    margin: 0;\n    color: #555;\n    padding: 0rem;\n    background-color: #fafafa;\n    border-radius: 4px;\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.08);\n  }\n  \n  .location-address a {\n    color: #555;\n    text-decoration: none;\n    display: inline-flex;\n    align-items: center;\n    text-decoration: underline;\n    text-decoration-color: #d6d6ec;\n  }\n  \n  .location-address a:hover {\n    text-decoration: underline;\n  }\n  \n  /* Map icon styling */\n  .map-icon {\n    width: 16px;\n    height: auto;\n    margin-right: 0.5rem;\n    vertical-align: middle;\n  }\n  ","",{version:3,sources:["webpack://./src/sections/LocationsSection.css"],names:[],mappings:"AAAA,sBAAsB;AACtB;IACI,aAAa;IACb,yBAAyB;IACzB,kBAAkB;EACpB;;EAEA;IACE,qBAAqB;IACrB,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,mCAAmC;IACnC,mBAAmB;IACnB,qBAAqB;IACrB,iCAAiC;AACrC;;;EAGE,iBAAiB;EACjB;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,mBAAmB;EACrB;;EAEA;IACE,iCAAiC;IACjC,WAAW;IACX,WAAW;EACb;;EAEA;IACE,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA,0BAA0B;EAC1B;IACE,aAAa;IACb,2DAA2D;IAC3D,SAAS;IACT,gBAAgB;EAClB;;EAEA,kDAAkD;EAClD;IACE,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,0CAA0C;IAC1C,qDAAqD;IACrD,gBAAgB;IAChB,cAAc;EAChB;;EAEA;IACE,2BAA2B;IAC3B,0CAA0C;EAC5C;;EAEA,sCAAsC;EACtC;IACE,2BAA2B;EAC7B;;EAEA,iBAAiB;EACjB;IACE,aAAa;IACb,gBAAgB;IAChB,sBAAsB;IACtB,2BAA2B;EAC7B;;EAEA,gBAAgB;EAChB;IACE,OAAO;IACP,oBAAoB;IACpB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,gBAAgB;IAChB,qDAAqD;EACvD;;EAEA,0BAA0B;EAC1B;IACE,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,0CAA0C;IAC1C,sBAAsB;EACxB;;EAEA,8BAA8B;EAC9B;IACE,iBAAiB;IACjB,SAAS;IACT,WAAW;IACX,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,+CAA+C;EACjD;;EAEA;IACE,WAAW;IACX,qBAAqB;IACrB,oBAAoB;IACpB,mBAAmB;IACnB,0BAA0B;IAC1B,8BAA8B;EAChC;;EAEA;IACE,0BAA0B;EAC5B;;EAEA,qBAAqB;EACrB;IACE,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,sBAAsB;EACxB",sourcesContent:["/* Section container */\r\n.locations-section {\r\n    padding: 1rem;\r\n    background-color: #f5f5f5;\r\n    text-align: center;\r\n  }\r\n\r\n  .location-section-button {\r\n    display: inline-block;\r\n    padding: 12px 24px;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    color: white;\r\n    background-color: rgb(87, 128, 124);\r\n    border-radius: 25px;\r\n    text-decoration: none;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n  \r\n  /* Title styles */\r\n  .hero-content-title {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 0.5rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .line-locations {\r\n    background-color: rgb(37, 54, 53);\r\n    width: 31px;\r\n    height: 2px;\r\n  }\r\n  \r\n  .company-name-locations {\r\n    color: rgb(37, 54, 53);\r\n    font-size: 0.9rem;\r\n    font-weight: bolder;\r\n  }\r\n  \r\n  /* Grid layout for cards */\r\n  .locations-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\r\n    gap: 2rem;\r\n    margin-top: 1rem;\r\n  }\r\n  \r\n  /* Horizontal card layout with alternating order */\r\n  .location-card {\r\n    display: flex;\r\n    flex-direction: row;\r\n    background: #fff;\r\n    border-radius: 8px;\r\n    overflow: hidden;\r\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\r\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .location-card:hover {\r\n    transform: translateY(-4px);\r\n    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);\r\n  }\r\n  \r\n  /* Reverse order for odd-index cards */\r\n  .location-card.reverse {\r\n    flex-direction: row-reverse;\r\n  }\r\n  \r\n  /* Image column */\r\n  .location-image {\r\n    flex: 0 0 40%;\r\n    min-width: 100px;\r\n    background-size: cover;\r\n    background-position: center;\r\n  }\r\n  \r\n  /* Info column */\r\n  .location-info {\r\n    flex: 1;\r\n    padding: 0.8rem 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    text-align: left;\r\n    background: linear-gradient(135deg, #ffffff, #f8f8f8);\r\n  }\r\n  \r\n  /* Emphasized city title */\r\n  .location-city {\r\n    font-size: 1.2rem;\r\n    margin: 0 0 0.3rem;\r\n    text-transform: uppercase;\r\n    color: #222;\r\n    font-weight: 700;\r\n    letter-spacing: 1px;\r\n    border-bottom: 2px solid rgb(87, 128, 124);\r\n    padding-bottom: 0.2rem;\r\n  }\r\n  \r\n  /* Refined address container */\r\n  .location-address {\r\n    font-size: 0.8rem;\r\n    margin: 0;\r\n    color: #555;\r\n    padding: 0rem;\r\n    background-color: #fafafa;\r\n    border-radius: 4px;\r\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.08);\r\n  }\r\n  \r\n  .location-address a {\r\n    color: #555;\r\n    text-decoration: none;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    text-decoration: underline;\r\n    text-decoration-color: #d6d6ec;\r\n  }\r\n  \r\n  .location-address a:hover {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  /* Map icon styling */\r\n  .map-icon {\r\n    width: 16px;\r\n    height: auto;\r\n    margin-right: 0.5rem;\r\n    vertical-align: middle;\r\n  }\r\n  "],sourceRoot:""}]);const i=A},277:(n,e,r)=>{r.r(e),r.d(e,{default:()=>E});var t=r(540),a=r(72),o=r.n(a),A=r(825),i=r.n(A),s=r(659),l=r.n(s),c=r(56),m=r.n(c),d=r(159),B=r.n(d),p=r(113),g=r.n(p),C=r(249),f={};f.styleTagTransform=g(),f.setAttributes=m(),f.insert=l().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=B();o()(C.A,f);C.A&&C.A.locals&&C.A.locals;const u=[{city:"Santa Rosa",address:"864 2nd Street Suite B, Santa Rosa, CA 95404",image:"https://i.postimg.cc/8cBRDRnQ/i-Stock-1878629507-2-1-1.webp",mapsQuery:"Santa+Rosa+-+864+2nd+Street+Suite+B,+Santa+Rosa,+CA+95404"},{city:"Sacramento",address:"7275 E. Southgate Drive Suite 306, Sacramento, CA 95823",image:"https://i.postimg.cc/K8NmLRCG/i-Stock-2159424867-1.webp",mapsQuery:"Sacramento+-+7275+E.+Southgate+Drive+Suite+306,+Sacramento,+CA+95823"},{city:"Stockton",address:"420 Acacia Street Suite 19, Stockton, CA 95203",image:"https://i.postimg.cc/KjyWJ5gd/i-Stock-1357814327-1.webp",mapsQuery:"Stockton+-+420+Acacia+Street+Suite+19,+Stockton,+CA+95203"},{city:"Modesto",address:"1130 Coffee Road BLDG 2B, Modesto, CA 95355",image:"https://i.postimg.cc/QdpHz8Pw/i-Stock-1343463188-1.webp",mapsQuery:"Modesto+-+1130+Coffee+Road+BLDG+2B,+Modesto,+CA+95355"},{city:"Hayward",address:"24700 Calaroga Ave Suite 103, Hayward, CA 94545",image:"https://i.postimg.cc/Hnwkh3v5/i-Stock-1135194294-1.webp",mapsQuery:"Hayward+-+24700+Calaroga+Ave+Suite+103,+Hayward,+CA+94545"},{city:"Salinas",address:"945 N. Blanco Suite A, Salinas, CA 93901",image:"https://i.postimg.cc/MTzPBG2S/i-Stock-1176374269-1.webp",mapsQuery:"Salinas+-+945+N.+Blanco+Suite+A,+Salinas,+CA+93901"},{city:"San Jose",address:"2375 Montpelier Drive Suite 10, San Jose, CA 95116",image:"https://i.postimg.cc/13PWgKkd/i-Stock-465837688-1.webp",mapsQuery:"San+Jose+-+2375+Montpelier+Drive+Suite+10,+San+Jose,+CA+95116"},{city:"Fresno",address:"349 E. Bullard Ave Suite 105, Fresno, CA 93710",image:"https://i.postimg.cc/cH87kgqY/i-Stock-588965234-1.webp",mapsQuery:"Fresno+-+349+E.+Bullard+Ave+Suite+105,+Fresno,+CA+93710"},{city:"Hanford",address:"1004 N. Douty Street, Hanford, CA 93230",image:"https://i.postimg.cc/50qytbLT/i-Stock-2198440524-1.webp",mapsQuery:"Hanford+-+1004+N.+Douty+Street,+Hanford,+CA+93230"},{city:"Bakersfield",address:"3550 Q. Street Suite 105, Bakersfield, CA 93301",image:"https://i.postimg.cc/ZnCGMLbH/i-Stock-2178001181-1.webp",mapsQuery:"Bakersfield+-+3550+Q.+Street+Suite+105,+Bakersfield,+CA+93301"}];const E=function(n){let{showButton:e=!0}=n;return t.createElement("section",{className:"locations-section"},t.createElement("div",{className:"hero-content-title"},t.createElement("div",{className:"line-locations"}),t.createElement("h1",{className:"company-name-locations"},"OUR LOCATIONS"),t.createElement("div",{className:"line-locations"})),t.createElement("div",{className:"locations-grid"},u.map(((n,e)=>t.createElement("div",{key:e,className:"location-card "+(e%2!=0?"reverse":"")},t.createElement("div",{className:"location-image",style:{backgroundImage:`url(${n.image})`}}),t.createElement("div",{className:"location-info"},t.createElement("h2",{className:"location-city"},n.city),t.createElement("p",{className:"location-address"},t.createElement("a",{href:`https://www.google.com/maps/search/?api=1&query=${n.mapsQuery}`,target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://i.postimg.cc/HLxtkzZm/map-pin-1-1.webp",alt:"Map icon",className:"map-icon",height:"16",width:"16"}),n.address))))))),e&&t.createElement("div",{className:"button-container",style:{textAlign:"center",marginTop:"20px"}},t.createElement("a",{href:"/locations",className:"location-section-button"},"View All Locations")))}},595:(n,e,r)=>{r.d(e,{A:()=>i});var t=r(354),a=r.n(t),o=r(314),A=r.n(o)()(a());A.push([n.id,'/* \n  LocationsPage.css\n  Styling for a two-column contact form layout, including integrated invisible reCAPTCHA,\n  floating labels, disclaimers, and “SEND” button.\n*/\n\n/* Overall Container */\n.locations-page-container {\n    max-width: 1200px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #f5f5f5;\n    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n    border-radius: 8px;\n    box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n  }\n  \n  /* Header Section */\n  .contact-header {\n    text-align: center;\n    margin-bottom: 40px;\n  }\n  \n  .small-heading {\n    font-size: 0.9rem;\n    letter-spacing: 1px;\n    color: #888;\n    margin: 0 0 10px;\n    text-transform: uppercase;\n  }\n  \n  .main-heading {\n    font-size: 1.8rem;\n    color: #333;\n    margin: 0 0 15px;\n    font-weight: 600;\n  }\n  \n  .sub-text {\n    font-size: 1rem;\n    color: #666;\n    margin: 0 auto 10px;\n    max-width: 700px;\n    line-height: 1.5;\n  }\n  \n  /* Contact Form Container */\n  .contact-container {\n    display: flex;\n    margin-bottom: 40px;\n  }\n  \n  /* Left Column (Form Fields) */\n  .contact-left {\n    flex: 1;\n  }\n  \n  /* Right Column (Disclaimers, reCAPTCHA, Button) */\n  .contact-right {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  \n  /* Form Rows */\n  .form-row {\n    display: flex;\n    gap: 20px;\n    margin-bottom: 20px;\n    flex-direction: column;\n  }\n  \n  /* Full-width field (e.g. message) */\n  .full-width {\n    flex: 1;\n  }\n  \n  /* Floating Label Groups */\n  .form-group {\n    position: relative;\n    flex: 1;\n  }\n  #checkbox-agree {\n    height: 1.5rem;\n  }\n  /* Inputs & Textarea */\n  .form-group input,\n  .form-group textarea {\n    width: 90%;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    padding: 14px;\n    font-size: 1rem;\n    transition: border-color 0.3s;\n    background-color: #fafafa;\n  }\n  \n  /* On focus, highlight border */\n  .form-group input:focus,\n  .form-group textarea:focus {\n    outline: none;\n    border-color: #ec7575;\n  }\n  \n  /* Floating Label */\n  .float-label {\n    pointer-events: none;\n    position: absolute;\n    top: 14px;\n    left: 14px;\n    transition: 0.2s ease;\n    font-size: 0.95rem;\n    color: #999;\n    background-color: #fff;\n    padding: 0 4px;\n    border-radius: 4px;\n  }\n  \n  /* Active/focused label */\n  .label-active {\n    transform: translateY(-22px) scale(0.8);\n    color: #ec7575;\n  }\n  \n  /* Keep label floated when input is non-empty */\n  .form-group input:not(:placeholder-shown) + .float-label,\n  .form-group textarea:not(:placeholder-shown) + .float-label {\n    transform: translateY(-22px) scale(0.8);\n    color: #ec7575;\n  }\n  \n  /* Disclaimer Text */\n  .disclaimer-text {\n    font-size: 0.95rem;\n    line-height: 1.4;\n    color: #666;\n    margin-bottom: 20px;\n  }\n  \n  /* reCAPTCHA placeholder styling */\n  .recaptcha-box {\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    background-color: #fafafa;\n    min-height: 80px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 20px;\n    color: #999;\n    font-size: 0.9rem;\n  }\n  \n  /* Button Row */\n  .button-row {\n    text-align: center;\n  }\n  \n  /* Submit Button */\n  .submit-button {\n    padding: 12px 36px;\n    font-size: 1rem;\n    font-weight: bold;\n    color: #fff;\n    background-color: #ec7575;\n    border: none;\n    border-radius: 25px;\n    cursor: pointer;\n    transition: background-color 0.3s;\n    margin-top: 20px;\n  }\n  \n  .submit-button:hover {\n    background-color: #e44343;\n  }\n  \n  /* Status Message */\n  .form-status {\n    text-align: center;\n    margin-top: 10px;\n    font-size: 0.95rem;\n    color: #555;\n  }\n  \n  /* Offices Section */\n  .offices-heading {\n    text-align: center;\n    font-size: 1.5rem;\n    color: #333;\n    margin: 0 0 20px;\n    font-weight: 600;\n  }\n  \n  .offices-list {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n    gap: 20px;\n    margin-bottom: 20px;\n  }\n  \n  .office-card {\n    background: #fafafa;\n    border-radius: 6px;\n    padding: 20px;\n    box-shadow: 0 3px 8px rgba(0,0,0,0.05);\n    transition: transform 0.3s;\n  }\n  \n  .office-card:hover {\n    transform: translateY(-4px);\n  }\n  \n  .office-card h3 {\n    margin: 0 0 10px;\n    font-size: 1.2rem;\n    color: #ec7575;\n  }\n  \n  .office-card p {\n    margin: 4px 0;\n    color: #555;\n    font-size: 0.95rem;\n  }\n  \n  /* "Coming soon" text */\n  .coming-soon {\n    text-align: center;\n    font-size: 1rem;\n    color: #777;\n    margin-top: 10px;\n  }\n  \n  /* Responsive Adjustments */\n  @media (max-width: 992px) {\n    .contact-container {\n      flex-direction: column;\n    }\n  \n    .contact-right {\n      /* margin-top: 30px; */\n    }\n  }\n  ',"",{version:3,sources:["webpack://./src/pages/LocationsPage.css"],names:[],mappings:"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",sourcesContent:['/* \r\n  LocationsPage.css\r\n  Styling for a two-column contact form layout, including integrated invisible reCAPTCHA,\r\n  floating labels, disclaimers, and “SEND” button.\r\n*/\r\n\r\n/* Overall Container */\r\n.locations-page-container {\r\n    max-width: 1200px;\r\n    margin: 20px auto;\r\n    padding: 20px;\r\n    background-color: #f5f5f5;\r\n    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n    border-radius: 8px;\r\n    box-shadow: 0 4px 12px rgba(0,0,0,0.1);\r\n  }\r\n  \r\n  /* Header Section */\r\n  .contact-header {\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n  }\r\n  \r\n  .small-heading {\r\n    font-size: 0.9rem;\r\n    letter-spacing: 1px;\r\n    color: #888;\r\n    margin: 0 0 10px;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .main-heading {\r\n    font-size: 1.8rem;\r\n    color: #333;\r\n    margin: 0 0 15px;\r\n    font-weight: 600;\r\n  }\r\n  \r\n  .sub-text {\r\n    font-size: 1rem;\r\n    color: #666;\r\n    margin: 0 auto 10px;\r\n    max-width: 700px;\r\n    line-height: 1.5;\r\n  }\r\n  \r\n  /* Contact Form Container */\r\n  .contact-container {\r\n    display: flex;\r\n    margin-bottom: 40px;\r\n  }\r\n  \r\n  /* Left Column (Form Fields) */\r\n  .contact-left {\r\n    flex: 1;\r\n  }\r\n  \r\n  /* Right Column (Disclaimers, reCAPTCHA, Button) */\r\n  .contact-right {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  /* Form Rows */\r\n  .form-row {\r\n    display: flex;\r\n    gap: 20px;\r\n    margin-bottom: 20px;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  /* Full-width field (e.g. message) */\r\n  .full-width {\r\n    flex: 1;\r\n  }\r\n  \r\n  /* Floating Label Groups */\r\n  .form-group {\r\n    position: relative;\r\n    flex: 1;\r\n  }\r\n  #checkbox-agree {\r\n    height: 1.5rem;\r\n  }\r\n  /* Inputs & Textarea */\r\n  .form-group input,\r\n  .form-group textarea {\r\n    width: 90%;\r\n    border: 1px solid #ccc;\r\n    border-radius: 6px;\r\n    padding: 14px;\r\n    font-size: 1rem;\r\n    transition: border-color 0.3s;\r\n    background-color: #fafafa;\r\n  }\r\n  \r\n  /* On focus, highlight border */\r\n  .form-group input:focus,\r\n  .form-group textarea:focus {\r\n    outline: none;\r\n    border-color: #ec7575;\r\n  }\r\n  \r\n  /* Floating Label */\r\n  .float-label {\r\n    pointer-events: none;\r\n    position: absolute;\r\n    top: 14px;\r\n    left: 14px;\r\n    transition: 0.2s ease;\r\n    font-size: 0.95rem;\r\n    color: #999;\r\n    background-color: #fff;\r\n    padding: 0 4px;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  /* Active/focused label */\r\n  .label-active {\r\n    transform: translateY(-22px) scale(0.8);\r\n    color: #ec7575;\r\n  }\r\n  \r\n  /* Keep label floated when input is non-empty */\r\n  .form-group input:not(:placeholder-shown) + .float-label,\r\n  .form-group textarea:not(:placeholder-shown) + .float-label {\r\n    transform: translateY(-22px) scale(0.8);\r\n    color: #ec7575;\r\n  }\r\n  \r\n  /* Disclaimer Text */\r\n  .disclaimer-text {\r\n    font-size: 0.95rem;\r\n    line-height: 1.4;\r\n    color: #666;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  /* reCAPTCHA placeholder styling */\r\n  .recaptcha-box {\r\n    border: 1px solid #ccc;\r\n    border-radius: 6px;\r\n    background-color: #fafafa;\r\n    min-height: 80px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 20px;\r\n    color: #999;\r\n    font-size: 0.9rem;\r\n  }\r\n  \r\n  /* Button Row */\r\n  .button-row {\r\n    text-align: center;\r\n  }\r\n  \r\n  /* Submit Button */\r\n  .submit-button {\r\n    padding: 12px 36px;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    background-color: #ec7575;\r\n    border: none;\r\n    border-radius: 25px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .submit-button:hover {\r\n    background-color: #e44343;\r\n  }\r\n  \r\n  /* Status Message */\r\n  .form-status {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    font-size: 0.95rem;\r\n    color: #555;\r\n  }\r\n  \r\n  /* Offices Section */\r\n  .offices-heading {\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    color: #333;\r\n    margin: 0 0 20px;\r\n    font-weight: 600;\r\n  }\r\n  \r\n  .offices-list {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\r\n    gap: 20px;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .office-card {\r\n    background: #fafafa;\r\n    border-radius: 6px;\r\n    padding: 20px;\r\n    box-shadow: 0 3px 8px rgba(0,0,0,0.05);\r\n    transition: transform 0.3s;\r\n  }\r\n  \r\n  .office-card:hover {\r\n    transform: translateY(-4px);\r\n  }\r\n  \r\n  .office-card h3 {\r\n    margin: 0 0 10px;\r\n    font-size: 1.2rem;\r\n    color: #ec7575;\r\n  }\r\n  \r\n  .office-card p {\r\n    margin: 4px 0;\r\n    color: #555;\r\n    font-size: 0.95rem;\r\n  }\r\n  \r\n  /* "Coming soon" text */\r\n  .coming-soon {\r\n    text-align: center;\r\n    font-size: 1rem;\r\n    color: #777;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  /* Responsive Adjustments */\r\n  @media (max-width: 992px) {\r\n    .contact-container {\r\n      flex-direction: column;\r\n    }\r\n  \r\n    .contact-right {\r\n      /* margin-top: 30px; */\r\n    }\r\n  }\r\n  '],sourceRoot:""}]);const i=A}}]);
//# sourceMappingURL=160.c6969ca9cfc172bdc167.js.map