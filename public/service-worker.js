if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let c={};const o=e=>n(e,l),u={module:{uri:l},exports:c,require:o};s[l]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3175ccc6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/321.2cd7679e9452eac0c5a6.js",revision:null},{url:"/74.8795437f7b128e9d03a3.js",revision:null},{url:"/770.fbd0ad22ccd418e427da.js",revision:null},{url:"/78.017feb90f3dc929d9aa1.js",revision:null},{url:"/845.deac8432337804c33943.js",revision:null},{url:"/852.968bb23445845827c590.js",revision:null},{url:"/950.b97eb82ba4c439c0a91c.js",revision:null},{url:"/index.html",revision:"51333efc4be20e08aec33274f864eb66"},{url:"/main.485bb87897981b7b0e28.js",revision:null}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg|webp)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
