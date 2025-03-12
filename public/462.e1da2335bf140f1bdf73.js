"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[462],{462:(e,A,t)=>{t.r(A),t.d(A,{default:()=>b});var i=t(540),o=t(536),r=t(120),a=t(950),n=t(72),s=t.n(n),l=t(825),C=t.n(l),c=t(659),m=t.n(c),g=t(56),p=t.n(g),d=t(159),B=t.n(d),f=t(113),h=t.n(f),v=t(808),x={};x.styleTagTransform=h(),x.setAttributes=p(),x.insert=m().bind(null,"head"),x.domAPI=C(),x.insertStyleElement=B();s()(v.A,x);v.A&&v.A.locals&&v.A.locals;const b=()=>{const{serviceId:e}=(0,o.g)(),[A,t]=(0,i.useState)(window.innerWidth>=569);(0,i.useEffect)((()=>{const e=()=>t(window.innerWidth>=569);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const n=r.X[e];if(!n)return i.createElement("div",{className:"service-page"},i.createElement("p",{className:"small-heading"},"CALIFORNIA PREMIER PAIN CLINICS"),i.createElement("h1",null,"Service Not Found"),i.createElement("p",null,"We couldn’t find the service you’re looking for."),i.createElement(o.N_,{to:"/services"},"Go back to all services"));const s=A&&n.images.desktopHero?n.images.desktopHero:n.images.hero,l=A&&n.desktopWhyChooseBg?n.desktopWhyChooseBg:n.whyChooseBg;return i.createElement("div",{className:"service-page"},i.createElement("div",{className:"service-hero",style:{backgroundImage:`url(${s})`}},i.createElement("div",{className:"services-hero-overlay"},i.createElement("div",{className:"services-hero-content-title"},i.createElement("div",{className:"line"}),i.createElement("h1",{className:"company-name-services"},"CALIFORNIA PREMIER PAIN CLINICS"),i.createElement("div",{className:"line"})),i.createElement("h1",null,n.title),i.createElement("p",null,n.shortDescription),i.createElement(o.N_,{to:"/contact",className:"cta-button"},"Book an Appointment"))),!A&&i.createElement("div",{className:"overlay-images"},i.createElement("img",{src:n.images.overlay1,alt:"Overlay 1",className:"image1"}),i.createElement("img",{src:n.images.overlay2,alt:"Overlay 2",className:"image2"})),i.createElement("div",{className:"service-content"},i.createElement("div",{className:"content-section"},i.createElement("img",{src:A?"https://i.postimg.cc/FRn1qY8d/Screenshot-2025-03-11-190333.png":n.images.section,alt:n.title,className:"content-image"}),i.createElement("div",{className:"service-content-with-title"},i.createElement("h1",{id:"services-title-small"},n.title),i.createElement("div",{className:"content-text"},n.mainContent.split("\n\n").filter((e=>""!==e.trim())).map(((e,A)=>i.createElement("p",{key:A},e.trim()))))))),i.createElement("div",{className:"info-section",style:{backgroundImage:`url(${l})`,backgroundSize:"cover",backgroundPosition:"center"}},i.createElement("div",{className:"info-overlay"},i.createElement("h2",{className:"info-title"},n.whyChooseTitle),i.createElement("p",{className:"info-text"},n.whyChooseContent),i.createElement("h3",{className:"info-subtitle"},n.helpTitle),i.createElement("ul",{className:"info-list"},n.helpList.map(((e,A)=>i.createElement("li",{key:A},e)))),i.createElement(o.N_,{to:"/about-us"},i.createElement("h3",{className:"info-subtitle"},n.providerTitle)),i.createElement("div",{className:"provider-container"},i.createElement("div",{className:"provider-text"},i.createElement("p",{className:"info-text"},n.providerContent)),i.createElement("div",{className:"provider-image"},i.createElement("img",{src:"https://i.postimg.cc/tRW060nV/Screenshot-2025-03-08-132625-1-1.webp",alt:"Our Provider"}))),i.createElement(o.N_,{to:"/contact",className:"cta-button",style:{margin:"20px"}},"Book an Appointment"))),i.createElement(a.default,null))}},808:(e,A,t)=>{t.d(A,{A:()=>n});var i=t(354),o=t.n(i),r=t(314),a=t.n(r)()(o());a.push([e.id,'.service-page{position:relative;font-family:Helvetica,sans-serif}.service-hero{position:relative;width:100%;height:90vh;background-size:cover;background-position:center;display:flex;align-items:center;justify-content:space-evenly;color:#fff}.services-hero-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.4);display:flex;flex-direction:column;justify-content:flex-start;align-items:center;text-align:center}.services-hero-content-title{display:flex;flex-direction:row;align-items:baseline}.company-name-services{font-size:.7rem!important;font-weight:lighter;letter-spacing:1.5px;margin:0 12px;padding:40px 20px}.line{width:30px;height:1px;background-color:rgba(255,255,255,.5);margin:20px}.services-hero-overlay h1{font-size:2.6rem;font-weight:700;margin-bottom:1rem;text-shadow:2px 2px 4px rgba(119,116,148,.6);width:70%;margin:40px auto}.services-hero-overlay p{font-size:1.1rem;line-height:1.4;max-width:600px;margin:0 auto 1.5rem}.cta-button{display:inline-block;padding:.75rem 1.5rem;background-color:#00a38c;color:#fff;border-radius:5px;text-decoration:none;font-weight:600;transition:background-color .3s}.cta-button:hover{background-color:#008977}.overlay-images{position:absolute;top:100vh;left:50%;transform:translateX(-50%);z-index:5;width:300px;height:200px}.overlay-images .image1,.overlay-images .image2{position:absolute;border-radius:6px;box-shadow:0 4px 8px rgba(0,0,0,.3)}.overlay-images .image1{top:0;left:0;width:70%}.overlay-images .image2{top:18vh;left:35%;width:70%}.service-content{max-width:1200px;margin:0 auto;padding:0 1rem}.content-section{display:flex;flex-direction:column;align-items:center;gap:2rem}.provider-container{display:flex;flex-direction:row;gap:1rem;margin-top:1rem;align-items:center}.provider-text{flex:1}.provider-image img{width:100%;max-width:80px;border-radius:4px;display:block}.content-image{width:100%;min-width:100vw;border-radius:8px;-webkit-mask-image:linear-gradient(to bottom,rgba(0,0,0,1) 80%,rgba(0,0,0,0) 100%);mask-image:linear-gradient(to bottom,rgba(0,0,0,1) 80%,rgba(0,0,0,0) 100%);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}#services-title-small{margin:4rem 0 0;text-align:left;font-size:2.5rem}.content-text{flex:1;font-size:1rem;line-height:1.6;color:#333}.content-text p{margin-bottom:1rem}.info-section{max-width:1200px;margin:2rem auto 0;padding:2rem;background-size:cover;background-position:center;border-radius:8px;position:relative}.info-overlay{background-color:rgba(0,0,0,.7);padding:2rem;border-radius:8px;color:#fff}.info-title{font-size:1.8rem;margin-bottom:1rem;color:#fff}.info-subtitle{font-size:1.4rem;margin-top:1.5rem;margin-bottom:.75rem;color:#fff}.info-text{font-size:1rem;line-height:1.6;color:#fff;margin-bottom:1rem}.info-list{list-style:none;padding-left:0;margin:1rem 0}.info-list li{position:relative;padding-left:2rem;margin-bottom:.75rem}.info-list li::before{content:"✓";position:absolute;left:0;top:0;color:#00a38c;font-weight:bold}.info-overlay h2,.info-overlay h3,.info-overlay p,.info-overlay li{text-shadow:1px 1px 3px rgba(0,0,0,.7)}@media (min-width:768px){.service-hero{height:70vh}.services-hero-overlay h1{font-size:3rem;width:60%;margin:40px auto}.services-hero-overlay p{font-size:1.2rem;max-width:700px}.overlay-images{top:810px;width:500px;height:300px}.overlay-images .image1{width:45%}.overlay-images .image2{top:30%;left:45%;width:50%}.service-content-with-title{display:flex;flex-direction:column;align-items:center}.content-section{flex-direction:column;align-items:flex-start;margin-top:6rem}.content-text{width:50%;margin-left:60px}#services-title-small{margin-top:0;font-size:2.8rem;width:50%;margin-left:60px}}',"",{version:3,sources:["webpack://./src/pages/Services.css"],names:[],mappings:"AAAA,cAAc,iBAAiB,CAAC,gCAAgC,CAAC,cAAc,iBAAiB,CAAC,UAAU,CAAC,WAAW,CAAC,qBAAqB,CAAC,0BAA0B,CAAC,YAAY,CAAC,kBAAkB,CAAC,4BAA4B,CAAC,UAAU,CAAC,uBAAuB,iBAAiB,CAAC,KAAK,CAAC,MAAM,CAAC,UAAU,CAAC,WAAW,CAAC,+BAA+B,CAAC,YAAY,CAAC,qBAAqB,CAAC,0BAA0B,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,6BAA6B,YAAY,CAAC,kBAAkB,CAAC,oBAAoB,CAAC,uBAAuB,yBAAyB,CAAC,mBAAmB,CAAC,oBAAoB,CAAC,aAAa,CAAC,iBAAiB,CAAC,MAAM,UAAU,CAAC,UAAU,CAAC,qCAAqC,CAAC,WAAW,CAAC,0BAA0B,gBAAgB,CAAC,eAAe,CAAC,kBAAkB,CAAC,4CAA4C,CAAC,SAAS,CAAC,gBAAgB,CAAC,yBAAyB,gBAAgB,CAAC,eAAe,CAAC,eAAe,CAAC,oBAAoB,CAAC,YAAY,oBAAoB,CAAC,qBAAqB,CAAC,wBAAwB,CAAC,UAAU,CAAC,iBAAiB,CAAC,oBAAoB,CAAC,eAAe,CAAC,+BAA+B,CAAC,kBAAkB,wBAAwB,CAAC,gBAAgB,iBAAiB,CAAC,SAAS,CAAC,QAAQ,CAAC,0BAA0B,CAAC,SAAS,CAAC,WAAW,CAAC,YAAY,CAAC,gDAAgD,iBAAiB,CAAC,iBAAiB,CAAC,mCAAmC,CAAC,wBAAwB,KAAK,CAAC,MAAM,CAAC,SAAS,CAAC,wBAAwB,QAAQ,CAAC,QAAQ,CAAC,SAAS,CAAC,iBAAiB,gBAAgB,CAAC,aAAa,CAAC,cAAc,CAAC,iBAAiB,YAAY,CAAC,qBAAqB,CAAC,kBAAkB,CAAC,QAAQ,CAAC,oBAAoB,YAAY,CAAC,kBAAkB,CAAC,QAAQ,CAAC,eAAe,CAAC,kBAAkB,CAAC,eAAe,MAAM,CAAC,oBAAoB,UAAU,CAAC,cAAc,CAAC,iBAAiB,CAAC,aAAa,CAAC,eAAe,UAAU,CAAC,eAAe,CAAC,iBAAiB,CAAC,kFAAkF,CAAC,0EAA0E,CAAC,6BAA6B,CAAC,qBAAqB,CAAC,sBAAsB,eAAe,CAAC,eAAe,CAAC,gBAAgB,CAAC,cAAc,MAAM,CAAC,cAAc,CAAC,eAAe,CAAC,UAAU,CAAC,gBAAgB,kBAAkB,CAAC,cAAc,gBAAgB,CAAC,kBAAkB,CAAC,YAAY,CAAC,qBAAqB,CAAC,0BAA0B,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,cAAc,+BAA+B,CAAC,YAAY,CAAC,iBAAiB,CAAC,UAAU,CAAC,YAAY,gBAAgB,CAAC,kBAAkB,CAAC,UAAU,CAAC,eAAe,gBAAgB,CAAC,iBAAiB,CAAC,oBAAoB,CAAC,UAAU,CAAC,WAAW,cAAc,CAAC,eAAe,CAAC,UAAU,CAAC,kBAAkB,CAAC,WAAW,eAAe,CAAC,cAAc,CAAC,aAAa,CAAC,cAAc,iBAAiB,CAAC,iBAAiB,CAAC,oBAAoB,CAAC,sBAAsB,WAAW,CAAC,iBAAiB,CAAC,MAAM,CAAC,KAAK,CAAC,aAAa,CAAC,gBAAgB,CAAC,mEAAmE,sCAAsC,CAAC,yBAAyB,cAAc,WAAW,CAAC,0BAA0B,cAAc,CAAC,SAAS,CAAC,gBAAgB,CAAC,yBAAyB,gBAAgB,CAAC,eAAe,CAAC,gBAAgB,SAAS,CAAC,WAAW,CAAC,YAAY,CAAC,wBAAwB,SAAS,CAAC,wBAAwB,OAAO,CAAC,QAAQ,CAAC,SAAS,CAAC,4BAA4B,YAAY,CAAC,qBAAqB,CAAC,kBAAkB,CAAC,iBAAiB,qBAAqB,CAAC,sBAAsB,CAAC,eAAe,CAAC,cAAc,SAAS,CAAC,gBAAgB,CAAC,sBAAsB,YAAY,CAAC,gBAAgB,CAAC,SAAS,CAAC,gBAAgB,CAAC",sourcesContent:['.service-page{position:relative;font-family:Helvetica,sans-serif}.service-hero{position:relative;width:100%;height:90vh;background-size:cover;background-position:center;display:flex;align-items:center;justify-content:space-evenly;color:#fff}.services-hero-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.4);display:flex;flex-direction:column;justify-content:flex-start;align-items:center;text-align:center}.services-hero-content-title{display:flex;flex-direction:row;align-items:baseline}.company-name-services{font-size:.7rem!important;font-weight:lighter;letter-spacing:1.5px;margin:0 12px;padding:40px 20px}.line{width:30px;height:1px;background-color:rgba(255,255,255,.5);margin:20px}.services-hero-overlay h1{font-size:2.6rem;font-weight:700;margin-bottom:1rem;text-shadow:2px 2px 4px rgba(119,116,148,.6);width:70%;margin:40px auto}.services-hero-overlay p{font-size:1.1rem;line-height:1.4;max-width:600px;margin:0 auto 1.5rem}.cta-button{display:inline-block;padding:.75rem 1.5rem;background-color:#00a38c;color:#fff;border-radius:5px;text-decoration:none;font-weight:600;transition:background-color .3s}.cta-button:hover{background-color:#008977}.overlay-images{position:absolute;top:100vh;left:50%;transform:translateX(-50%);z-index:5;width:300px;height:200px}.overlay-images .image1,.overlay-images .image2{position:absolute;border-radius:6px;box-shadow:0 4px 8px rgba(0,0,0,.3)}.overlay-images .image1{top:0;left:0;width:70%}.overlay-images .image2{top:18vh;left:35%;width:70%}.service-content{max-width:1200px;margin:0 auto;padding:0 1rem}.content-section{display:flex;flex-direction:column;align-items:center;gap:2rem}.provider-container{display:flex;flex-direction:row;gap:1rem;margin-top:1rem;align-items:center}.provider-text{flex:1}.provider-image img{width:100%;max-width:80px;border-radius:4px;display:block}.content-image{width:100%;min-width:100vw;border-radius:8px;-webkit-mask-image:linear-gradient(to bottom,rgba(0,0,0,1) 80%,rgba(0,0,0,0) 100%);mask-image:linear-gradient(to bottom,rgba(0,0,0,1) 80%,rgba(0,0,0,0) 100%);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}#services-title-small{margin:4rem 0 0;text-align:left;font-size:2.5rem}.content-text{flex:1;font-size:1rem;line-height:1.6;color:#333}.content-text p{margin-bottom:1rem}.info-section{max-width:1200px;margin:2rem auto 0;padding:2rem;background-size:cover;background-position:center;border-radius:8px;position:relative}.info-overlay{background-color:rgba(0,0,0,.7);padding:2rem;border-radius:8px;color:#fff}.info-title{font-size:1.8rem;margin-bottom:1rem;color:#fff}.info-subtitle{font-size:1.4rem;margin-top:1.5rem;margin-bottom:.75rem;color:#fff}.info-text{font-size:1rem;line-height:1.6;color:#fff;margin-bottom:1rem}.info-list{list-style:none;padding-left:0;margin:1rem 0}.info-list li{position:relative;padding-left:2rem;margin-bottom:.75rem}.info-list li::before{content:"✓";position:absolute;left:0;top:0;color:#00a38c;font-weight:bold}.info-overlay h2,.info-overlay h3,.info-overlay p,.info-overlay li{text-shadow:1px 1px 3px rgba(0,0,0,.7)}@media (min-width:768px){.service-hero{height:70vh}.services-hero-overlay h1{font-size:3rem;width:60%;margin:40px auto}.services-hero-overlay p{font-size:1.2rem;max-width:700px}.overlay-images{top:810px;width:500px;height:300px}.overlay-images .image1{width:45%}.overlay-images .image2{top:30%;left:45%;width:50%}.service-content-with-title{display:flex;flex-direction:column;align-items:center}.content-section{flex-direction:column;align-items:flex-start;margin-top:6rem}.content-text{width:50%;margin-left:60px}#services-title-small{margin-top:0;font-size:2.8rem;width:50%;margin-left:60px}}'],sourceRoot:""}]);const n=a}}]);
//# sourceMappingURL=462.e1da2335bf140f1bdf73.js.map