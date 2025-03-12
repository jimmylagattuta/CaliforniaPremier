"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[950],{616:(e,n,r)=>{r.d(n,{A:()=>l});var t=r(354),a=r.n(t),o=r(314),i=r.n(o)()(a());i.push([e.id,"/* Main Footer Container */\n.footer-container {\n  background-color: #111; /* Dark background */\n  color: #fff;            /* Light text */\n  padding: 3rem 1.2rem 2rem 1.2rem;\n  font-family: Arial, sans-serif;\n}\n\n/* \n   ========================\n   TOP GRID => columns on\n   tablet/desktop\n   ========================\n*/\n.footer-top-grid {\n  display: flex;\n  flex-direction: column; /* stacked on mobile (<769px) */\n  gap: 2rem;\n}\n\n/* Each column in the top grid */\n.footer-col {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start; /* left-align headings/links */\n}\n\n/* \n   BRAND ROW \n   => Logo + Title + Subtitle\n*/\n.fancy-brand-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n\n.fancy-brand-logo {\n  max-width: 70px;\n  height: auto;\n}\n\n.fancy-text-group {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.fancy-brand-title {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 700;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n.fancy-brand-subtitle {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  opacity: 0.8;\n}\n\n/* \n   TAGLINE & SOCIAL ICONS\n*/\n.footer-tagline-container {\n  margin-bottom: 1rem;\n}\n\n.fancy-brand-slogan {\n  margin: 0;\n  font-size: 0.9rem;\n  opacity: 0.9;\n  text-align: left;\n  line-height: 1.4;\n}\n\n.footer-social-icons {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 0.8rem;\n}\n\n/* Instagram circle icon */\n.social-circle {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);\n  border-radius: 50%;\n  transition: transform 0.2s ease;\n}\n\n.social-circle:hover {\n  transform: scale(1.05);\n}\n\n.social-icon-img {\n  width: 24px;\n  height: 24px;\n  opacity: 0.9;\n}\n\n/* \n   FOOTER SECTIONS\n   (Navigation, Services, Contact)\n*/\n.footer-section h3 {\n  font-size: 1rem;\n  margin: 1rem 0;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 600;\n}\n\n.footer-section ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.footer-section ul li {\n  margin: 0.6rem 0;\n  opacity: 0.9;\n}\n\n.footer-section ul li a {\n  color: #fff;\n  font-size: 0.8rem;\n  text-decoration: underline;\n  text-decoration-color: #5b5bed;\n}\n\n.footer-section ul li a:hover {\n  text-decoration: underline;\n}\n\n/* Address list specifics */\n.address-list li {\n  margin-bottom: 0.6rem;\n  display: flex;\n  align-items: center;\n}\n\n.map-icon {\n  width: 16px;\n  height: auto;\n  margin-right: 0.5rem;\n  vertical-align: text-bottom;\n}\n\n/* Book Appointment Button */\n.book-appointment-link {\n  display: inline-block;\n  color: #fff;\n  text-decoration: none;\n  background-color: rgb(49, 71, 69);\n  padding: 0.75rem 1.5rem;\n  border-radius: 5px;\n  font-weight: bold;\n  font-size: 0.9rem;\n  transition: background-color 0.2s ease;\n}\n\n.book-appointment-link:hover {\n  background-color: rgb(19, 223, 202);\n}\n\n.book-appointment-p {\n  margin: 1.5rem 0;\n  text-align: left;\n}\n\n.footer-disclaimer-text {\n  font-size: 0.75rem;\n  opacity: 0.8;\n  margin-top: 1rem;\n  line-height: 1.4;\n}\n\n/* \n   BOTTOM BAR\n   => © 2025... / Privacy / Terms\n*/\n.footer-bottom {\n  border-top: 1px solid #333;\n  padding-top: 1rem;\n  font-size: 0.75rem;\n  opacity: 0.8;\n  margin-top: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  text-align: center;\n}\n\n.footer-bottom p {\n  margin: 0;\n}\n\n.footer-bottom-links {\n  list-style: none;\n  display: inline-flex;\n  gap: 1rem;\n  padding: 0;\n  margin: 0.5rem 0;\n  text-decoration: underline;\n  text-decoration-color: #5b5bed;\n}\n\n.footer-bottom-links li a {\n  color: #fff;\n  text-decoration: none;\n}\n\n.footer-bottom-links li a:hover {\n  text-decoration: underline;\n}\n\n.footer-credit {\n  font-size: 0.75rem;\n  opacity: 0.8;\n}\n\n/* \n   DESKTOP/TABLET (≥769px)\n   => 4 columns, more aligned\n*/\n@media (min-width: 769px) {\n  .footer-top-grid {\n    display: grid;\n    grid-template-columns: 1.5fr 1fr 1fr 1.5fr; \n    gap: 2rem;\n    align-items: start;\n  }\n\n  /* Adjust spacing so columns line up nicely */\n  .brand-col .fancy-brand-row {\n    margin-bottom: 1rem;\n  }\n  .footer-section h3 {\n    margin-top: 0.5rem;\n  }\n\n  .footer-bottom {\n    flex-direction: row;\n    justify-content: space-between;\n    text-align: left;\n  }\n}\n","",{version:3,sources:["webpack://./src/sections/FooterComponent.css"],names:[],mappings:"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",sourcesContent:["/* Main Footer Container */\r\n.footer-container {\r\n  background-color: #111; /* Dark background */\r\n  color: #fff;            /* Light text */\r\n  padding: 3rem 1.2rem 2rem 1.2rem;\r\n  font-family: Arial, sans-serif;\r\n}\r\n\r\n/* \r\n   ========================\r\n   TOP GRID => columns on\r\n   tablet/desktop\r\n   ========================\r\n*/\r\n.footer-top-grid {\r\n  display: flex;\r\n  flex-direction: column; /* stacked on mobile (<769px) */\r\n  gap: 2rem;\r\n}\r\n\r\n/* Each column in the top grid */\r\n.footer-col {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start; /* left-align headings/links */\r\n}\r\n\r\n/* \r\n   BRAND ROW \r\n   => Logo + Title + Subtitle\r\n*/\r\n.fancy-brand-row {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.fancy-brand-logo {\r\n  max-width: 70px;\r\n  height: auto;\r\n}\r\n\r\n.fancy-text-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n\r\n.fancy-brand-title {\r\n  margin: 0;\r\n  font-size: 1.4rem;\r\n  font-weight: 700;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.fancy-brand-subtitle {\r\n  margin: 0;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  letter-spacing: 0.5px;\r\n  opacity: 0.8;\r\n}\r\n\r\n/* \r\n   TAGLINE & SOCIAL ICONS\r\n*/\r\n.footer-tagline-container {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.fancy-brand-slogan {\r\n  margin: 0;\r\n  font-size: 0.9rem;\r\n  opacity: 0.9;\r\n  text-align: left;\r\n  line-height: 1.4;\r\n}\r\n\r\n.footer-social-icons {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  margin-top: 0.8rem;\r\n}\r\n\r\n/* Instagram circle icon */\r\n.social-circle {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 40px;\r\n  height: 40px;\r\n  background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);\r\n  border-radius: 50%;\r\n  transition: transform 0.2s ease;\r\n}\r\n\r\n.social-circle:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.social-icon-img {\r\n  width: 24px;\r\n  height: 24px;\r\n  opacity: 0.9;\r\n}\r\n\r\n/* \r\n   FOOTER SECTIONS\r\n   (Navigation, Services, Contact)\r\n*/\r\n.footer-section h3 {\r\n  font-size: 1rem;\r\n  margin: 1rem 0;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n  font-weight: 600;\r\n}\r\n\r\n.footer-section ul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.footer-section ul li {\r\n  margin: 0.6rem 0;\r\n  opacity: 0.9;\r\n}\r\n\r\n.footer-section ul li a {\r\n  color: #fff;\r\n  font-size: 0.8rem;\r\n  text-decoration: underline;\r\n  text-decoration-color: #5b5bed;\r\n}\r\n\r\n.footer-section ul li a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n/* Address list specifics */\r\n.address-list li {\r\n  margin-bottom: 0.6rem;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.map-icon {\r\n  width: 16px;\r\n  height: auto;\r\n  margin-right: 0.5rem;\r\n  vertical-align: text-bottom;\r\n}\r\n\r\n/* Book Appointment Button */\r\n.book-appointment-link {\r\n  display: inline-block;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  background-color: rgb(49, 71, 69);\r\n  padding: 0.75rem 1.5rem;\r\n  border-radius: 5px;\r\n  font-weight: bold;\r\n  font-size: 0.9rem;\r\n  transition: background-color 0.2s ease;\r\n}\r\n\r\n.book-appointment-link:hover {\r\n  background-color: rgb(19, 223, 202);\r\n}\r\n\r\n.book-appointment-p {\r\n  margin: 1.5rem 0;\r\n  text-align: left;\r\n}\r\n\r\n.footer-disclaimer-text {\r\n  font-size: 0.75rem;\r\n  opacity: 0.8;\r\n  margin-top: 1rem;\r\n  line-height: 1.4;\r\n}\r\n\r\n/* \r\n   BOTTOM BAR\r\n   => © 2025... / Privacy / Terms\r\n*/\r\n.footer-bottom {\r\n  border-top: 1px solid #333;\r\n  padding-top: 1rem;\r\n  font-size: 0.75rem;\r\n  opacity: 0.8;\r\n  margin-top: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  text-align: center;\r\n}\r\n\r\n.footer-bottom p {\r\n  margin: 0;\r\n}\r\n\r\n.footer-bottom-links {\r\n  list-style: none;\r\n  display: inline-flex;\r\n  gap: 1rem;\r\n  padding: 0;\r\n  margin: 0.5rem 0;\r\n  text-decoration: underline;\r\n  text-decoration-color: #5b5bed;\r\n}\r\n\r\n.footer-bottom-links li a {\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n\r\n.footer-bottom-links li a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.footer-credit {\r\n  font-size: 0.75rem;\r\n  opacity: 0.8;\r\n}\r\n\r\n/* \r\n   DESKTOP/TABLET (≥769px)\r\n   => 4 columns, more aligned\r\n*/\r\n@media (min-width: 769px) {\r\n  .footer-top-grid {\r\n    display: grid;\r\n    grid-template-columns: 1.5fr 1fr 1fr 1.5fr; \r\n    gap: 2rem;\r\n    align-items: start;\r\n  }\r\n\r\n  /* Adjust spacing so columns line up nicely */\r\n  .brand-col .fancy-brand-row {\r\n    margin-bottom: 1rem;\r\n  }\r\n  .footer-section h3 {\r\n    margin-top: 0.5rem;\r\n  }\r\n\r\n  .footer-bottom {\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    text-align: left;\r\n  }\r\n}\r\n"],sourceRoot:""}]);const l=i},950:(e,n,r)=>{r.r(n),r.d(n,{default:()=>C});var t=r(540),a=r(72),o=r.n(a),i=r(825),l=r.n(i),A=r(659),c=r.n(A),s=r(56),m=r.n(s),E=r(159),g=r.n(E),p=r(113),d=r.n(p),f=r(616),B={};B.styleTagTransform=d(),B.setAttributes=m(),B.insert=c().bind(null,"head"),B.domAPI=l(),B.insertStyleElement=g();o()(f.A,B);f.A&&f.A.locals&&f.A.locals;const C=function(){return t.createElement("footer",{className:"footer-container"},t.createElement("div",{className:"footer-top-grid"},t.createElement("div",{className:"footer-col brand-col"},t.createElement("div",{className:"fancy-brand-row"},t.createElement("img",{src:"https://i.postimg.cc/wT3CPKY5/i-Stock-1137683414-1-1-bg-removed-png.webp",alt:"California Premier Pain Clinics",className:"fancy-brand-logo",height:"40",width:"40"}),t.createElement("div",{className:"fancy-text-group"},t.createElement("h1",{className:"fancy-brand-title"},"CALIFORNIA PREMIER"),t.createElement("h2",{className:"fancy-brand-subtitle"},"PAIN CLINICS"))),t.createElement("div",{className:"footer-tagline-container"},t.createElement("p",{className:"fancy-brand-slogan"},"Personalized Treatments for Lasting Relief, Restored Independence, and a Life Beyond Pain."),t.createElement("div",{className:"footer-social-icons"},t.createElement("a",{href:"https://www.instagram.com/californiapremierpainclinics/",target:"_blank",rel:"noopener noreferrer",className:"social-circle"},t.createElement("img",{src:"https://i.postimg.cc/j5G6vJHJ/Screenshot-2025-02-22-181601-bg-removed-png.webp",alt:"Instagram",className:"social-icon-img",height:"24",width:"24"}))))),t.createElement("div",{className:"footer-col footer-section nav-col"},t.createElement("h3",null,"Navigation"),t.createElement("ul",null,t.createElement("li",null,t.createElement("a",{href:"/"},"Home")),t.createElement("li",null,t.createElement("a",{href:"/about-us"},"About Us")),t.createElement("li",null,t.createElement("a",{href:"/locations"},"Become A Patient")),t.createElement("li",null,t.createElement("a",{href:"/book-appointment"},"Book Appointment")),t.createElement("li",null,t.createElement("a",{href:"/faqs"},"FAQs")),t.createElement("li",null,t.createElement("a",{href:"/contact-us"},"Contact Us")),t.createElement("li",null,t.createElement("a",{href:"/blog"},"Blog")))),t.createElement("div",{className:"footer-col footer-section services-col"},t.createElement("h3",null,"Services"),t.createElement("ul",null,t.createElement("li",null,t.createElement("a",{href:"/services/new-patient-consultations"},"New Patient Consultations")),t.createElement("li",null,t.createElement("a",{href:"/services/platelet-rich-plasma"},"Platelet Rich Plasma")),t.createElement("li",null,t.createElement("a",{href:"/services/facet-joint-injections"},"Facet Joint Injections")),t.createElement("li",null,t.createElement("a",{href:"/services/epidural-injections"},"Epidural Injections")),t.createElement("li",null,t.createElement("a",{href:"/services/botox-injections"},"Botox Injections")),t.createElement("li",null,t.createElement("a",{href:"/services/steroid-injections"},"Steroid Injections")),t.createElement("li",null,t.createElement("a",{href:"/services/si-joint-injections"},"SI Joint Injections")),t.createElement("li",null,t.createElement("a",{href:"/services/trigger-point-injections"},"Trigger Point Injections")),t.createElement("li",null,t.createElement("a",{href:"/services/emg-testing"},"Electromyography (EMG) Testing")))),t.createElement("div",{className:"footer-col footer-section contact-col"},t.createElement("h3",null,"Get In Touch"),t.createElement("ul",{className:"address-list"},t.createElement("li",null,t.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=Santa+Rosa+-+864+2nd+Street+Suite+B,+Santa+Rosa,+CA+95404",target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://i.postimg.cc/Sx95BsW6/inverted-image-1.webp",alt:"Map icon",className:"map-icon",height:"16",width:"16"}),"Santa Rosa - 864 2nd Street Suite B, Santa Rosa, CA 95404")),t.createElement("li",null,t.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=Sacramento+-+7275+E.+Southgate+Drive+Suite+306,+Sacramento,+CA+95823",target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://i.postimg.cc/Sx95BsW6/inverted-image-1.webp",alt:"Map icon",className:"map-icon",height:"16",width:"16"}),"Sacramento - 7275 E. Southgate Drive Suite 306, Sacramento, CA 95823")),t.createElement("li",null,t.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=Stockton+-+420+Acacia+Street+Suite+19,+Stockton,+CA+95203",target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://i.postimg.cc/Sx95BsW6/inverted-image-1.webp",alt:"Map icon",className:"map-icon",height:"16",width:"16"}),"Stockton - 420 Acacia Street Suite 19, Stockton, CA 95203")),t.createElement("li",null,t.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=Modesto+-+1130+Coffee+Road+BLDG+2B,+Modesto,+CA+95355",target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://i.postimg.cc/Sx95BsW6/inverted-image-1.webp",alt:"Map icon",className:"map-icon",height:"16",width:"16"}),"Modesto - 1130 Coffee Road BLDG 2B, Modesto, CA 95355")),t.createElement("li",null,t.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=Hayward+-+24700+Calaroga+Ave+Suite+103,+Hayward,+CA+94545",target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://i.postimg.cc/Sx95BsW6/inverted-image-1.webp",alt:"Map icon",className:"map-icon",height:"16",width:"16"}),"Hayward - 24700 Calaroga Ave Suite 103, Hayward, CA 94545")),t.createElement("li",null,t.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=Salinas+-+945+N.+Blanco+Suite+A,+Salinas,+CA+93901",target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://i.postimg.cc/Sx95BsW6/inverted-image-1.webp",alt:"Map icon",className:"map-icon",height:"16",width:"16"}),"Salinas - 945 N. Blanco Suite A, Salinas, CA 93901")),t.createElement("li",null,t.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=San+Jose+-+2375+Montpelier+Drive+Suite+10,+San+Jose,+CA+95116",target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://i.postimg.cc/Sx95BsW6/inverted-image-1.webp",alt:"Map icon",className:"map-icon",height:"16",width:"16"}),"San Jose - 2375 Montpelier Drive Suite 10, San Jose, CA 95116")),t.createElement("li",null,t.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=Fresno+-+349+E.+Bullard+Ave+Suite+105,+Fresno,+CA+93710",target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://i.postimg.cc/Sx95BsW6/inverted-image-1.webp",alt:"Map icon",className:"map-icon",height:"16",width:"16"}),"Fresno - 349 E. Bullard Ave Suite 105, Fresno, CA 93710")),t.createElement("li",null,t.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=Hanford+-+1004+N.+Douty+Street,+Hanford,+CA+93230",target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://i.postimg.cc/Sx95BsW6/inverted-image-1.webp",alt:"Map icon",className:"map-icon",height:"16",width:"16"}),"Hanford - 1004 N. Douty Street, Hanford, CA 93230")),t.createElement("li",null,t.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=Bakersfield+-+3550+Q.+Street+Suite+105,+Bakersfield,+CA+93301",target:"_blank",rel:"noopener noreferrer"},t.createElement("img",{src:"https://i.postimg.cc/Sx95BsW6/inverted-image-1.webp",alt:"Map icon",className:"map-icon",height:"16",width:"16"}),"Bakersfield - 3550 Q. Street Suite 105, Bakersfield, CA 93301")),t.createElement("li",null,t.createElement("strong",null,"Phone: "),t.createElement("a",{href:"tel:8772710203"}," (877) 271-0203")),t.createElement("li",null,t.createElement("strong",null,"Fax:")," (800) 887-1723"),t.createElement("li",null,t.createElement("strong",null,"Email: "),t.createElement("a",{href:"mailto:referrals@californiapremierpainclinics.com"}," referrals@californiapremierpainclinics.com")),t.createElement("li",null,t.createElement("strong",null,"Hours:  "),"Mon - Fri: 08:00 AM - 05:00 PM, Sat - Sun: Closed")),t.createElement("p",{className:"book-appointment-p"},t.createElement("a",{href:"/book-appointment",className:"book-appointment-link"},"Book Appointment")),t.createElement("p",{className:"footer-disclaimer-text"},"*All testimonials on our website are verified customers and none have been compensated monetarily or provided product in exchange for their testimonials."))),t.createElement("div",{className:"footer-bottom"},t.createElement("p",null,"© 2025 California Premier Pain Clinics. All Rights Reserved."),t.createElement("ul",{className:"footer-bottom-links"},t.createElement("li",null,t.createElement("a",{href:"/privacy-policy"},"Privacy Policy")),t.createElement("li",null,t.createElement("a",{href:"/terms-and-conditions"},"Terms & Conditions"))),t.createElement("p",{className:"footer-credit"},"Website by James Lagattuta")))}}}]);
//# sourceMappingURL=950.52d879d5d0c89af99c25.js.map