if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>n(e,o),c={module:{uri:o},exports:t,require:l};s[o]=Promise.all(i.map((e=>c[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3175ccc6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/321.3c3b59c1941e6f2b002d.js",revision:null},{url:"/74.fdf8165e20fed25190fb.js",revision:null},{url:"/845.15692247214f06b27b91.js",revision:null},{url:"/index.html",revision:"e64bd7733587b90ca42ee15f8432014e"},{url:"/main.f8486887e4e0b3600d8b.js",revision:null}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg|webp)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
