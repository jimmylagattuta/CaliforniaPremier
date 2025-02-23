"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[950],{616:(e,n,r)=>{r.d(n,{A:()=>l});var t=r(354),a=r.n(t),o=r(314),i=r.n(o)()(a());i.push([e.id,"/* Main Footer Container */\n.footer-container {\n    background-color: #111; /* Dark background */\n    color: #fff;            /* Light text */\n    padding: 3rem 1.2rem 2rem 1.2rem;\n    font-family: Arial, sans-serif;\n  }\n  \n  /* ========================\n     FANCY BRAND ROW\n     ======================== */\n  .fancy-brand-row {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    margin-bottom: 1rem;\n  }\n  \n  .fancy-brand-logo {\n    max-width: 70px;\n    height: auto;\n    border-radius: 10px;\n  }\n  \n  .fancy-text-group {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  \n  .fancy-brand-title {\n    margin: 0;\n    font-size: 1.4rem;\n    font-weight: 700;\n    font-family: math;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n  }\n  \n  .fancy-brand-subtitle {\n    margin: 0;\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0.5px;\n    opacity: 0.8;\n  }\n  \n  /* ========================\n     TAGLINE BELOW BRAND\n     ======================== */\n  .footer-tagline-container {\n    text-align: center;\n    margin-bottom: 2rem;\n  }\n  \n  .fancy-brand-slogan {\n    margin: 0;\n    font-size: 0.9rem;\n    opacity: 0.9;\n    text-align: left;\n    line-height: 1.4;\n  }\n  \n  /* ========================\n     SOCIAL ICONS ROW\n     ======================== */\n\n   .footer-social-icons {\n    display: flex;\n    justify-content: flex-start;\n    margin-top: 1rem;\n  }\n  \n  /* Circle for the icon with Instagram gradient */\n  .social-circle {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 40px;\n    height: 40px;\n    background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);\n    border-radius: 50%;\n    margin: 0 0;\n    padding: 0 0;\n    transition: transform 0.2s ease;\n  }\n  \n  .social-circle:hover {\n    transform: scale(1.05);\n  }\n  \n  /* The actual icon image inside the circle */\n  .social-icon-img {\n    width: 24px;\n    height: 24px;\n  }\n  \n  \n  /* ========================\n     FOOTER SECTIONS\n     ======================== */\n  .footer-section {\n    margin-bottom: 2rem;\n  }\n  \n  .footer-section h3 {\n    font-size: 1rem;\n    margin: 2rem 0;\n  }\n  \n  .footer-section ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n  \n  .footer-section ul li {\n    margin: 1rem 0;\n    opacity: 0.8;\n  }\n  \n  .footer-section ul li a {\n    color: #fff;\n    font-size: 0.8rem;\n    text-decoration: underline;\n    text-decoration-color: #5b5bed;\n  }\n  \n  .footer-section ul li a:hover {\n    text-decoration: underline;\n  }\n  \n  .footer-section ul li:active {\n    opacity: 100;\n  }\n  \n  /* Additional styling for the address list */\n  .address-list li {\n    margin-bottom: 0.75rem;\n    display: flex;\n    align-items: center;\n  }\n  \n  .map-icon {\n    width: 16px;\n    height: auto;\n    margin-right: 0.5rem;\n    vertical-align: middle;\n  }\n  \n  /* Updated address link styling with blue underline */\n  .address-list li a {\n    color: #fff;\n    text-decoration: underline;\n    text-decoration-color: #5b5bed;\n    font-size: 0.8rem;\n  }\n  \n  .address-list li a:hover {\n    text-decoration-color: lightblue;\n  }\n  \n/* Book Appointment Button */\n.book-appointment-link {\n    display: inline-block;\n    color: #fff;\n    text-decoration: none;\n    background-color: rgb(87, 128, 124);\n    padding: 0.75rem 1.5rem;\n    border-radius: 5px;\n    font-weight: bold;\n    font-size: 0.9rem;\n    transition: background-color 0.2s ease;\n  }\n  \n  .book-appointment-link:hover {\n    background-color: rgb(19, 223, 202);\n  }\n  \n  .book-appointment-p {\n    margin: 2rem 0;\n    text-align: center;\n  }\n  \n  \n  /* Disclaimer Text */\n  .footer-disclaimer-text {\n    font-size: 0.8rem;\n    opacity: 0.8;\n    margin-top: 1rem;\n    line-height: 1.4;\n  }\n  \n  /* ========================\n     BOTTOM BAR\n     ======================== */\n  .footer-bottom {\n    border-top: 1px solid #333;\n    padding-top: 1rem;\n    text-align: center;\n    font-size: 0.75rem;\n  }\n  \n  .footer-bottom-links {\n    list-style: none;\n    display: inline-flex;\n    gap: 1rem;\n    padding: 0;\n    margin: 0.5rem 0;\n    text-decoration: underline;\n    text-decoration-color: #5b5bed;\n  }\n  \n  .footer-bottom-links li a {\n    color: #fff;\n    text-decoration: none;\n  }\n  \n  .footer-bottom-links li a:hover {\n    text-decoration: underline;\n  }\n  \n  .footer-credit {\n    font-size: 0.75rem;\n    opacity: 0.8;\n  }\n  ","",{version:3,sources:["webpack://./src/sections/FooterComponent.css"],names:[],mappings:"AAAA,0BAA0B;AAC1B;IACI,sBAAsB,EAAE,oBAAoB;IAC5C,WAAW,aAAa,eAAe;IACvC,gCAAgC;IAChC,8BAA8B;EAChC;;EAEA;;+BAE6B;EAC7B;IACE,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,YAAY;IACZ,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;EACzB;;EAEA;IACE,SAAS;IACT,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,yBAAyB;EAC3B;;EAEA;IACE,SAAS;IACT,eAAe;IACf,gBAAgB;IAChB,qBAAqB;IACrB,YAAY;EACd;;EAEA;;+BAE6B;EAC7B;IACE,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;IACE,SAAS;IACT,iBAAiB;IACjB,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;;+BAE6B;;GAE5B;IACC,aAAa;IACb,2BAA2B;IAC3B,gBAAgB;EAClB;;EAEA,gDAAgD;EAChD;IACE,oBAAoB;IACpB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,wFAAwF;IACxF,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,+BAA+B;EACjC;;EAEA;IACE,sBAAsB;EACxB;;EAEA,4CAA4C;EAC5C;IACE,WAAW;IACX,YAAY;EACd;;;EAGA;;+BAE6B;EAC7B;IACE,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,cAAc;EAChB;;EAEA;IACE,gBAAgB;IAChB,UAAU;IACV,SAAS;EACX;;EAEA;IACE,cAAc;IACd,YAAY;EACd;;EAEA;IACE,WAAW;IACX,iBAAiB;IACjB,0BAA0B;IAC1B,8BAA8B;EAChC;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,YAAY;EACd;;EAEA,4CAA4C;EAC5C;IACE,sBAAsB;IACtB,aAAa;IACb,mBAAmB;EACrB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,sBAAsB;EACxB;;EAEA,qDAAqD;EACrD;IACE,WAAW;IACX,0BAA0B;IAC1B,8BAA8B;IAC9B,iBAAiB;EACnB;;EAEA;IACE,gCAAgC;EAClC;;AAEF,4BAA4B;AAC5B;IACI,qBAAqB;IACrB,WAAW;IACX,qBAAqB;IACrB,mCAAmC;IACnC,uBAAuB;IACvB,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,sCAAsC;EACxC;;EAEA;IACE,mCAAmC;EACrC;;EAEA;IACE,cAAc;IACd,kBAAkB;EACpB;;;EAGA,oBAAoB;EACpB;IACE,iBAAiB;IACjB,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;;+BAE6B;EAC7B;IACE,0BAA0B;IAC1B,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;EACpB;;EAEA;IACE,gBAAgB;IAChB,oBAAoB;IACpB,SAAS;IACT,UAAU;IACV,gBAAgB;IAChB,0BAA0B;IAC1B,8BAA8B;EAChC;;EAEA;IACE,WAAW;IACX,qBAAqB;EACvB;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,kBAAkB;IAClB,YAAY;EACd",sourcesContent:["/* Main Footer Container */\r\n.footer-container {\r\n    background-color: #111; /* Dark background */\r\n    color: #fff;            /* Light text */\r\n    padding: 3rem 1.2rem 2rem 1.2rem;\r\n    font-family: Arial, sans-serif;\r\n  }\r\n  \r\n  /* ========================\r\n     FANCY BRAND ROW\r\n     ======================== */\r\n  .fancy-brand-row {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .fancy-brand-logo {\r\n    max-width: 70px;\r\n    height: auto;\r\n    border-radius: 10px;\r\n  }\r\n  \r\n  .fancy-text-group {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n  \r\n  .fancy-brand-title {\r\n    margin: 0;\r\n    font-size: 1.4rem;\r\n    font-weight: 700;\r\n    font-family: math;\r\n    letter-spacing: 1px;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .fancy-brand-subtitle {\r\n    margin: 0;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    letter-spacing: 0.5px;\r\n    opacity: 0.8;\r\n  }\r\n  \r\n  /* ========================\r\n     TAGLINE BELOW BRAND\r\n     ======================== */\r\n  .footer-tagline-container {\r\n    text-align: center;\r\n    margin-bottom: 2rem;\r\n  }\r\n  \r\n  .fancy-brand-slogan {\r\n    margin: 0;\r\n    font-size: 0.9rem;\r\n    opacity: 0.9;\r\n    text-align: left;\r\n    line-height: 1.4;\r\n  }\r\n  \r\n  /* ========================\r\n     SOCIAL ICONS ROW\r\n     ======================== */\r\n\r\n   .footer-social-icons {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    margin-top: 1rem;\r\n  }\r\n  \r\n  /* Circle for the icon with Instagram gradient */\r\n  .social-circle {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 40px;\r\n    height: 40px;\r\n    background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);\r\n    border-radius: 50%;\r\n    margin: 0 0;\r\n    padding: 0 0;\r\n    transition: transform 0.2s ease;\r\n  }\r\n  \r\n  .social-circle:hover {\r\n    transform: scale(1.05);\r\n  }\r\n  \r\n  /* The actual icon image inside the circle */\r\n  .social-icon-img {\r\n    width: 24px;\r\n    height: 24px;\r\n  }\r\n  \r\n  \r\n  /* ========================\r\n     FOOTER SECTIONS\r\n     ======================== */\r\n  .footer-section {\r\n    margin-bottom: 2rem;\r\n  }\r\n  \r\n  .footer-section h3 {\r\n    font-size: 1rem;\r\n    margin: 2rem 0;\r\n  }\r\n  \r\n  .footer-section ul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  .footer-section ul li {\r\n    margin: 1rem 0;\r\n    opacity: 0.8;\r\n  }\r\n  \r\n  .footer-section ul li a {\r\n    color: #fff;\r\n    font-size: 0.8rem;\r\n    text-decoration: underline;\r\n    text-decoration-color: #5b5bed;\r\n  }\r\n  \r\n  .footer-section ul li a:hover {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  .footer-section ul li:active {\r\n    opacity: 100;\r\n  }\r\n  \r\n  /* Additional styling for the address list */\r\n  .address-list li {\r\n    margin-bottom: 0.75rem;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  .map-icon {\r\n    width: 16px;\r\n    height: auto;\r\n    margin-right: 0.5rem;\r\n    vertical-align: middle;\r\n  }\r\n  \r\n  /* Updated address link styling with blue underline */\r\n  .address-list li a {\r\n    color: #fff;\r\n    text-decoration: underline;\r\n    text-decoration-color: #5b5bed;\r\n    font-size: 0.8rem;\r\n  }\r\n  \r\n  .address-list li a:hover {\r\n    text-decoration-color: lightblue;\r\n  }\r\n  \r\n/* Book Appointment Button */\r\n.book-appointment-link {\r\n    display: inline-block;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    background-color: rgb(87, 128, 124);\r\n    padding: 0.75rem 1.5rem;\r\n    border-radius: 5px;\r\n    font-weight: bold;\r\n    font-size: 0.9rem;\r\n    transition: background-color 0.2s ease;\r\n  }\r\n  \r\n  .book-appointment-link:hover {\r\n    background-color: rgb(19, 223, 202);\r\n  }\r\n  \r\n  .book-appointment-p {\r\n    margin: 2rem 0;\r\n    text-align: center;\r\n  }\r\n  \r\n  \r\n  /* Disclaimer Text */\r\n  .footer-disclaimer-text {\r\n    font-size: 0.8rem;\r\n    opacity: 0.8;\r\n    margin-top: 1rem;\r\n    line-height: 1.4;\r\n  }\r\n  \r\n  /* ========================\r\n     BOTTOM BAR\r\n     ======================== */\r\n  .footer-bottom {\r\n    border-top: 1px solid #333;\r\n    padding-top: 1rem;\r\n    text-align: center;\r\n    font-size: 0.75rem;\r\n  }\r\n  \r\n  .footer-bottom-links {\r\n    list-style: none;\r\n    display: inline-flex;\r\n    gap: 1rem;\r\n    padding: 0;\r\n    margin: 0.5rem 0;\r\n    text-decoration: underline;\r\n    text-decoration-color: #5b5bed;\r\n  }\r\n  \r\n  .footer-bottom-links li a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .footer-bottom-links li a:hover {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  .footer-credit {\r\n    font-size: 0.75rem;\r\n    opacity: 0.8;\r\n  }\r\n  "],sourceRoot:""}]);const l=i},950:(e,n,r)=>{r.r(n),r.d(n,{default:()=>C});var t=r(540),a=r(72),o=r.n(a),i=r(825),l=r.n(i),A=r(659),c=r.n(A),s=r(56),m=r.n(s),f=r(159),d=r.n(f),g=r(113),E=r.n(g),p=r(616),B={};B.styleTagTransform=E(),B.setAttributes=m(),B.insert=c().bind(null,"head"),B.domAPI=l(),B.insertStyleElement=d();o()(p.A,B);p.A&&p.A.locals&&p.A.locals;const C=function(){return t.createElement("footer",{className:"footer-container"},t.createElement("div",{className:"fancy-brand-row"},t.createElement("img",{src:"https://i.postimg.cc/mrH0xfnF/i-Stock-1137683414-1-3.webp",alt:"California Premier Pain Clinics",className:"fancy-brand-logo"}),t.createElement("div",{className:"fancy-text-group"},t.createElement("h1",{className:"fancy-brand-title"},"CALIFORNIA PREMIER"),t.createElement("h2",{className:"fancy-brand-subtitle"},"PAIN CLINICS"))),t.createElement("div",{className:"footer-tagline-container"},t.createElement("p",{className:"fancy-brand-slogan"},"Personalized Treatments for Lasting Relief, Restored Independence, and a Life Beyond Pain."),t.createElement("div",{className:"footer-social-icons"},t.createElement("a",{href:"https://www.instagram.com/californiapremierpainclinics/",target:"_blank",rel:"noopener noreferrer",className:"social-circle"},t.createElement("img",{src:"https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png",alt:"Instagram",className:"social-icon-img"})))),t.createElement("div",{className:"footer-section"},t.createElement("h3",null,"Navigation"),t.createElement("ul",null,t.createElement("li",null,t.createElement("a",{href:"/"},"Home")),t.createElement("li",null,t.createElement("a",{href:"/about-us"},"About Us")),t.createElement("li",null,t.createElement("a",{href:"/become-a-patient"},"Become A Patient")),t.createElement("li",null,t.createElement("a",{href:"/book-appointment"},"Book Appointment")),t.createElement("li",null,t.createElement("a",{href:"/faqs"},"FAQs")),t.createElement("li",null,t.createElement("a",{href:"/contact-us"},"Contact Us")),t.createElement("li",null,t.createElement("a",{href:"/blog"},"Blog")))),t.createElement("div",{className:"footer-section"},t.createElement("h3",null,"Services"),t.createElement("ul",null,t.createElement("li",null,t.createElement("a",{href:"/services/new-patient-consultations"},"New Patient Consultations")),t.createElement("li",null,t.createElement("a",{href:"/services/platelet-rich-plasma"},"Platelet Rich Plasma")),t.createElement("li",null,t.createElement("a",{href:"/services/facet-joint-injections"},"Facet Joint Injections")),t.createElement("li",null,t.createElement("a",{href:"/services/epidural-injections"},"Epidural Injections")),t.createElement("li",null,t.createElement("a",{href:"/services/botox-injections"},"Botox Injections")),t.createElement("li",null,t.createElement("a",{href:"/services/steroid-injections"},"Steroid Injections")),t.createElement("li",null,t.createElement("a",{href:"/services/si-joint-injections"},"SI Joint Injections")),t.createElement("li",null,t.createElement("a",{href:"/services/trigger-point-injections"},"Trigger Point Injections")),t.createElement("li",null,t.createElement("a",{href:"/services/emg-testing"},"Electromyography (EMG) Testing")))),t.createElement("div",{className:"footer-section"},t.createElement("h3",null,"Get In Touch"),t.createElement("ul",{className:"address-list"},t.createElement("li",null,t.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=Santa+Rosa+-+864+2nd+Street+Suite+B,+Santa+Rosa,+CA+95404",target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://img.icons8.com/ios-filled/16/ffffff/marker.png",alt:"Map icon",className:"map-icon"}),"Santa Rosa - 864 2nd Street Suite B, Santa Rosa, CA 95404")),t.createElement("li",null,t.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=Sacramento+-+7275+E.+Southgate+Drive+Suite+306,+Sacramento,+CA+95823",target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://img.icons8.com/ios-filled/16/ffffff/marker.png",alt:"Map icon",className:"map-icon"}),"Sacramento - 7275 E. Southgate Drive Suite 306, Sacramento, CA 95823")),t.createElement("li",null,t.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=Stockton+-+420+Acacia+Street+Suite+19,+Stockton,+CA+95203",target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://img.icons8.com/ios-filled/16/ffffff/marker.png",alt:"Map icon",className:"map-icon"}),"Stockton - 420 Acacia Street Suite 19, Stockton, CA 95203")),t.createElement("li",null,t.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=Modesto+-+1130+Coffee+Road+BLDG+2B,+Modesto,+CA+95355",target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://img.icons8.com/ios-filled/16/ffffff/marker.png",alt:"Map icon",className:"map-icon"}),"Modesto - 1130 Coffee Road BLDG 2B, Modesto, CA 95355")),t.createElement("li",null,t.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=Hayward+-+24700+Calaroga+Ave+Suite+103,+Hayward,+CA+94545",target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://img.icons8.com/ios-filled/16/ffffff/marker.png",alt:"Map icon",className:"map-icon"}),"Hayward - 24700 Calaroga Ave Suite 103, Hayward, CA 94545")),t.createElement("li",null,t.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=Salinas+-+945+N.+Blanco+Suite+A,+Salinas,+CA+93901",target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://img.icons8.com/ios-filled/16/ffffff/marker.png",alt:"Map icon",className:"map-icon"}),"Salinas - 945 N. Blanco Suite A, Salinas, CA 93901")),t.createElement("li",null,t.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=San+Jose+-+2375+Montpelier+Drive+Suite+10,+San+Jose,+CA+95116",target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://img.icons8.com/ios-filled/16/ffffff/marker.png",alt:"Map icon",className:"map-icon"}),"San Jose - 2375 Montpelier Drive Suite 10, San Jose, CA 95116")),t.createElement("li",null,t.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=Fresno+-+349+E.+Bullard+Ave+Suite+105,+Fresno,+CA+93710",target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://img.icons8.com/ios-filled/16/ffffff/marker.png",alt:"Map icon",className:"map-icon"}),"Fresno - 349 E. Bullard Ave Suite 105, Fresno, CA 93710")),t.createElement("li",null,t.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=Hanford+-+1004+N.+Douty+Street,+Hanford,+CA+93230",target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://img.icons8.com/ios-filled/16/ffffff/marker.png",alt:"Map icon",className:"map-icon"}),"Hanford - 1004 N. Douty Street, Hanford, CA 93230")),t.createElement("li",null,t.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=Bakersfield+-+3550+Q.+Street+Suite+105,+Bakersfield,+CA+93301",target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://img.icons8.com/ios-filled/16/ffffff/marker.png",alt:"Map icon",className:"map-icon"}),"Bakersfield - 3550 Q. Street Suite 105, Bakersfield, CA 93301"))),t.createElement("p",{className:"book-appointment-p"},t.createElement("a",{href:"/book-appointment",className:"book-appointment-link"},"Book Appointment")),t.createElement("p",{className:"footer-disclaimer-text"},"*All testimonials on our website are verified customers and none have been compensated monetarily or provided product in exchange for their testimonials.")),t.createElement("div",{className:"footer-bottom"},t.createElement("p",null,"© 2025 California Premier Pain Clinics. All Rights Reserved."),t.createElement("ul",{className:"footer-bottom-links"},t.createElement("li",null,t.createElement("a",{href:"/privacy-policy"},"Privacy Policy")),t.createElement("li",null,t.createElement("a",{href:"/terms-and-conditions"},"Terms & Conditions")),t.createElement("li",null,t.createElement("a",{href:"/return-and-refund"},"Return and Refund Policy"))),t.createElement("p",{className:"footer-credit"},"Website by James Lagattuta")))}}}]);
//# sourceMappingURL=950.646a191de13890894da4.js.map