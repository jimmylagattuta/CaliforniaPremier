if(!self.define){let e,s={};const l=(l,n)=>(l=new URL(l+".js",n).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(n,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const u=e=>l(e,r),d={module:{uri:r},exports:c,require:u};s[r]=Promise.all(n.map((e=>d[e]||u(e)))).then((e=>(i(...e),c)))}}define(["./workbox-3175ccc6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/154.bf5f1e108f6ec0c23320.js",revision:null},{url:"/256.03c1786dabcc1968bcba.js",revision:null},{url:"/277.d580f6e5851a26a17960.js",revision:null},{url:"/312.1e00d9adac40160bfcd4.js",revision:null},{url:"/321.dcc4551e8df011b41a97.js",revision:null},{url:"/462.df6d5cc7defc0824ae12.js",revision:null},{url:"/619.593708d320219db506f6.js",revision:null},{url:"/74.4b80c369472d296cf4e7.js",revision:null},{url:"/770.2729663045a0cf127de1.js",revision:null},{url:"/78.cfbfc10e30cd4cab0d09.js",revision:null},{url:"/845.2bf6453c3a9fc8a078ae.js",revision:null},{url:"/852.64a9dfd2d264fd61d1bb.js",revision:null},{url:"/950.bcb13bd4ddfcc4f94f2b.js",revision:null},{url:"/955.7adf95dbae26628531c8.js",revision:null},{url:"/index.html",revision:"44de2974ced76fdf3eaee4bcb292af2b"},{url:"/main.a29703d91bdcd3ba2809.js",revision:null}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg|webp)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
