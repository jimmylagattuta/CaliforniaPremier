if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let c={};const o=e=>n(e,l),t={module:{uri:l},exports:c,require:o};s[l]=Promise.all(i.map((e=>t[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3175ccc6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/321.040be0ff6ce3f67e43c2.js",revision:null},{url:"/74.8795437f7b128e9d03a3.js",revision:null},{url:"/78.52588a16b176aeeba83c.js",revision:null},{url:"/845.f4649481e7282c42a88b.js",revision:null},{url:"/852.968bb23445845827c590.js",revision:null},{url:"/index.html",revision:"ca4db6b961ee27091336b838718bc537"},{url:"/main.43000880539534696d79.js",revision:null}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg|webp)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
