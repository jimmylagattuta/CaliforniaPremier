if(!self.define){let e,s={};const n=(n,l)=>(n=new URL(n+".js",l).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let u={};const c=e=>n(e,r),o={module:{uri:r},exports:u,require:c};s[r]=Promise.all(l.map((e=>o[e]||c(e)))).then((e=>(i(...e),u)))}}define(["./workbox-3175ccc6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/256.cae438f115442e0acd92.js",revision:null},{url:"/277.91db21466f38649b424b.js",revision:null},{url:"/312.734fbc12615216a54bc3.js",revision:null},{url:"/321.df824d328b93bc952b3f.js",revision:null},{url:"/462.793f84c871989f310d54.js",revision:null},{url:"/619.a9d546fbd9b02f8c43ac.js",revision:null},{url:"/74.47ec1958f84e5cfa056c.js",revision:null},{url:"/770.fbd0ad22ccd418e427da.js",revision:null},{url:"/78.017feb90f3dc929d9aa1.js",revision:null},{url:"/845.33b448adae15f647bbb1.js",revision:null},{url:"/852.968bb23445845827c590.js",revision:null},{url:"/950.f9c3910fbf0ef80509fa.js",revision:null},{url:"/955.ea56ba009ed2179da558.js",revision:null},{url:"/index.html",revision:"9415bda559a6ad3ee900ed9f8bf53c2a"},{url:"/main.ee2215d61ca40fa5d452.js",revision:null}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg|webp)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
