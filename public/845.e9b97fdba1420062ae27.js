"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[845],{300:(n,e,t)=>{t.d(e,{A:()=>A});var r=t(354),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([n.id,"/* Mobile First Styles */\n.about-section {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 55px 20px 20px 20px;\n    background-color: #f0f0f0;\n    position: relative;\n    max-width: -webkit-fit-content;\n    max-width: fit-content;\n  }\n  \n\n  /* Image with rounded corners */\n  .about-image {\n    width: 100%;\n    max-width: 500px;  /* Adjust size as needed */\n    border-radius: 10px;\n    display: block;\n    box-shadow: \n\n    10px 0 15px rgba(0, 0, 0, 0.1),   /* right shadow */\n    -10px 0 15px rgba(0, 0, 0, 0.1);  /* left shadow */\n  }\n  \n  .about-us-content-title {\n    margin:0;\n    position:relative;\n    text-align:center;\n    color: rgb(35, 53, 51);\n    font-family:Arial,sans-serif;\n    display:flex;\n    flex-direction:row;\n    align-items:center;\n\n  }\n\n  .about-us-name{\n    font-size:1rem;\n    font-weight:bolder;\n    letter-spacing:1.5px;\n    margin: 20px 5px;\n    z-index: 3;\n   }\n  .about-us-line {\n    width:30px;\n    height:3px;\n    background-color:rgba(87, 128, 124,0.75);\n    margin:20px 5px 20px 5px;\n  }\n  .about-us-company-name {\n    font-size: 38px;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-weight: bolder;\n    color:rgb(35, 53, 51);\n    line-height: 40px;\n    margin: 5px 2px 15px 2px;\n    padding: 5px 0px 5px 0px;\n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);\n\n  }\n  .about-us-paragraph {\n    font-size: 1.1rem;\n    font-family: sans-serif;\n    color: black;\n    margin: 5px 2px 5px 2px;\n    padding: 5px 0px 5px 0px;\n    letter-spacing: 1px;\n    line-height: 30px;\n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);\n\n    font-weight: lighter;\n  }\n  .about-us-button {\n    display: inline-block;\n    padding: 12px 24px;\n    margin-top: 25px;\n    font-size: 1rem;\n    font-family: Arial, sans-serif;\n    font-weight: 600;\n    color: rgb(35, 53, 51);\n    background-color: transparent;\n    border: 2px solid rgb(35, 53, 51);\n    border-radius: 5px;\n    cursor: pointer;\n    text-align: center;\n    text-decoration: none; /* For anchor tags if you use <a> instead of <button> */\n    transition: background-color 0.3s ease, color 0.3s ease;\n    line-height: 25px;\n  }\n  \n  .about-us-button:hover {\n    background-color: #354D4B;\n    color: #fff;\n  }\n  \n  /* Tablet (481px to 768px) */\n  @media (min-width: 481px) and (max-width: 768px) {\n    .about-section {\n      padding: 30px;\n    }\n    \n    .about-image {\n      max-width: 350px;\n    }\n  }\n  \n  /* Desktop (769px and up) */\n  @media (min-width: 769px) {\n    .about-section {\n      padding: 50px;\n    }\n    \n    .about-image {\n      max-width: 400px;\n    }\n  }\n  ","",{version:3,sources:["webpack://./src/sections/AboutUsComponent.css"],names:[],mappings:"AAAA,wBAAwB;AACxB;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,4BAA4B;IAC5B,yBAAyB;IACzB,kBAAkB;IAClB,8BAA8B;IAC9B,sBAAsB;EACxB;;;EAGA,+BAA+B;EAC/B;IACE,WAAW;IACX,gBAAgB,GAAG,0BAA0B;IAC7C,mBAAmB;IACnB,cAAc;IACd;;;mCAG+B,GAAG,gBAAgB;EACpD;;EAEA;IACE,QAAQ;IACR,iBAAiB;IACjB,iBAAiB;IACjB,sBAAsB;IACtB,4BAA4B;IAC5B,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;;EAEpB;;EAEA;IACE,cAAc;IACd,kBAAkB;IAClB,oBAAoB;IACpB,gBAAgB;IAChB,UAAU;GACX;EACD;IACE,UAAU;IACV,UAAU;IACV,wCAAwC;IACxC,wBAAwB;EAC1B;EACA;IACE,eAAe;IACf,mJAAmJ;IACnJ,mBAAmB;IACnB,qBAAqB;IACrB,iBAAiB;IACjB,wBAAwB;IACxB,wBAAwB;IACxB,2CAA2C;;EAE7C;EACA;IACE,iBAAiB;IACjB,uBAAuB;IACvB,YAAY;IACZ,uBAAuB;IACvB,wBAAwB;IACxB,mBAAmB;IACnB,iBAAiB;IACjB,2CAA2C;;IAE3C,oBAAoB;EACtB;EACA;IACE,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,8BAA8B;IAC9B,gBAAgB;IAChB,sBAAsB;IACtB,6BAA6B;IAC7B,iCAAiC;IACjC,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,qBAAqB,EAAE,uDAAuD;IAC9E,uDAAuD;IACvD,iBAAiB;EACnB;;EAEA;IACE,yBAAyB;IACzB,WAAW;EACb;;EAEA,4BAA4B;EAC5B;IACE;MACE,aAAa;IACf;;IAEA;MACE,gBAAgB;IAClB;EACF;;EAEA,2BAA2B;EAC3B;IACE;MACE,aAAa;IACf;;IAEA;MACE,gBAAgB;IAClB;EACF",sourcesContent:["/* Mobile First Styles */\r\n.about-section {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 55px 20px 20px 20px;\r\n    background-color: #f0f0f0;\r\n    position: relative;\r\n    max-width: -webkit-fit-content;\r\n    max-width: fit-content;\r\n  }\r\n  \r\n\r\n  /* Image with rounded corners */\r\n  .about-image {\r\n    width: 100%;\r\n    max-width: 500px;  /* Adjust size as needed */\r\n    border-radius: 10px;\r\n    display: block;\r\n    box-shadow: \r\n\r\n    10px 0 15px rgba(0, 0, 0, 0.1),   /* right shadow */\r\n    -10px 0 15px rgba(0, 0, 0, 0.1);  /* left shadow */\r\n  }\r\n  \r\n  .about-us-content-title {\r\n    margin:0;\r\n    position:relative;\r\n    text-align:center;\r\n    color: rgb(35, 53, 51);\r\n    font-family:Arial,sans-serif;\r\n    display:flex;\r\n    flex-direction:row;\r\n    align-items:center;\r\n\r\n  }\r\n\r\n  .about-us-name{\r\n    font-size:1rem;\r\n    font-weight:bolder;\r\n    letter-spacing:1.5px;\r\n    margin: 20px 5px;\r\n    z-index: 3;\r\n   }\r\n  .about-us-line {\r\n    width:30px;\r\n    height:3px;\r\n    background-color:rgba(87, 128, 124,0.75);\r\n    margin:20px 5px 20px 5px;\r\n  }\r\n  .about-us-company-name {\r\n    font-size: 38px;\r\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-weight: bolder;\r\n    color:rgb(35, 53, 51);\r\n    line-height: 40px;\r\n    margin: 5px 2px 15px 2px;\r\n    padding: 5px 0px 5px 0px;\r\n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);\r\n\r\n  }\r\n  .about-us-paragraph {\r\n    font-size: 1.1rem;\r\n    font-family: sans-serif;\r\n    color: black;\r\n    margin: 5px 2px 5px 2px;\r\n    padding: 5px 0px 5px 0px;\r\n    letter-spacing: 1px;\r\n    line-height: 30px;\r\n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);\r\n\r\n    font-weight: lighter;\r\n  }\r\n  .about-us-button {\r\n    display: inline-block;\r\n    padding: 12px 24px;\r\n    margin-top: 25px;\r\n    font-size: 1rem;\r\n    font-family: Arial, sans-serif;\r\n    font-weight: 600;\r\n    color: rgb(35, 53, 51);\r\n    background-color: transparent;\r\n    border: 2px solid rgb(35, 53, 51);\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    text-decoration: none; /* For anchor tags if you use <a> instead of <button> */\r\n    transition: background-color 0.3s ease, color 0.3s ease;\r\n    line-height: 25px;\r\n  }\r\n  \r\n  .about-us-button:hover {\r\n    background-color: #354D4B;\r\n    color: #fff;\r\n  }\r\n  \r\n  /* Tablet (481px to 768px) */\r\n  @media (min-width: 481px) and (max-width: 768px) {\r\n    .about-section {\r\n      padding: 30px;\r\n    }\r\n    \r\n    .about-image {\r\n      max-width: 350px;\r\n    }\r\n  }\r\n  \r\n  /* Desktop (769px and up) */\r\n  @media (min-width: 769px) {\r\n    .about-section {\r\n      padding: 50px;\r\n    }\r\n    \r\n    .about-image {\r\n      max-width: 400px;\r\n    }\r\n  }\r\n  "],sourceRoot:""}]);const A=o},845:(n,e,t)=>{t.r(e),t.d(e,{default:()=>b});var r=t(540),a=t(536),i=t(72),o=t.n(i),A=t(825),s=t.n(A),p=t(659),l=t.n(p),c=t(56),x=t.n(c),d=t(159),B=t.n(d),u=t(113),g=t.n(u),m=t(300),C={};C.styleTagTransform=g(),C.setAttributes=x(),C.insert=l().bind(null,"head"),C.domAPI=s(),C.insertStyleElement=B();o()(m.A,C);m.A&&m.A.locals&&m.A.locals;const b=function(){return r.createElement("section",{className:"about-section"},r.createElement("div",{className:"about-content"},r.createElement("img",{src:"https://i.postimg.cc/qB3ZY64r/i-Stock-1443170756-1-1.webp",alt:"About Us",loading:"lazy",className:"about-image",width:"350",height:"328"}),r.createElement("div",{className:"about-us-content-title"},r.createElement("div",{className:"about-us-line"}),r.createElement("h1",{className:"about-us-name"},"ABOUT US")),r.createElement("p",{className:"about-us-company-name"},"California Premier Pain Clinics"),r.createElement("p",{className:"about-us-paragraph"},"At California Premier Pain Clinics, we specialize in delivering advanced, individualized pain management solutions designed to restore mobility, reduce pain, and enhance overall quality of life. Our expert team uses state-of-the-art treatments—from minimally invasive injections guided by ultrasound or fluoroscopy to innovative regenerative therapies—to tailor personalized care plans for each patient. With a commitment to excellence and a focus on cutting-edge procedures, we ensure that every patient receives the highest level of care to achieve lasting relief and renewed independence."),r.createElement("p",{className:"about-us-paragraph"},"Proudly serving communities across California, our clinics are strategically located in Santa Rosa, Sacramento, Stockton, Modesto, Hayward, Salinas, San Jose, Fresno, Hanford, and Bakersfield—with exciting new locations coming soon in Napa and San Francisco in 2025. Our extensive network enables us to offer both in-person and telemedicine appointments, ensuring convenient access to top-quality pain management services. Trust California Premier Pain Clinics for comprehensive, expert care as you begin your journey to a pain-free and healthier life."),r.createElement(a.N_,{to:"/about",className:"about-us-button"},"Learn More About California Premier Pain Clinics")))}}}]);
//# sourceMappingURL=845.e9b97fdba1420062ae27.js.map