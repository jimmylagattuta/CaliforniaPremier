if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const u=e=>n(e,r),o={module:{uri:r},exports:c,require:u};s[r]=Promise.all(i.map((e=>o[e]||u(e)))).then((e=>(l(...e),c)))}}define(["./workbox-3175ccc6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/256.c999f610e190fd84b6b4.js",revision:null},{url:"/277.c7abb3acbfc651ddf06f.js",revision:null},{url:"/321.8e42bbc93c9b83c31548.js",revision:null},{url:"/462.69164a349988ea989d8f.js",revision:null},{url:"/74.47ec1958f84e5cfa056c.js",revision:null},{url:"/770.fbd0ad22ccd418e427da.js",revision:null},{url:"/78.017feb90f3dc929d9aa1.js",revision:null},{url:"/845.deac8432337804c33943.js",revision:null},{url:"/852.968bb23445845827c590.js",revision:null},{url:"/950.1dca400ecb555c0fe28d.js",revision:null},{url:"/index.html",revision:"ed494d819231a2fbf8d597285001b22d"},{url:"/main.67322bd036e464f17169.js",revision:null}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg|webp)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
