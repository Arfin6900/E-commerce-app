if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),f={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"3732bd9a39c1a7c1dfb2c9b88fe0fbb7"},{url:"/_next/static/Qae53qOEJQv7smFa1iZus/_buildManifest.js",revision:"a1b7599199e2e8c82f2c6bcf8d8aca61"},{url:"/_next/static/Qae53qOEJQv7smFa1iZus/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/270-38c6a4896264823e.js",revision:"Qae53qOEJQv7smFa1iZus"},{url:"/_next/static/chunks/664-6bfa4966bc679550.js",revision:"Qae53qOEJQv7smFa1iZus"},{url:"/_next/static/chunks/938-99f8db49fa658888.js",revision:"Qae53qOEJQv7smFa1iZus"},{url:"/_next/static/chunks/app/_not-found-f9f32029a035af2d.js",revision:"Qae53qOEJQv7smFa1iZus"},{url:"/_next/static/chunks/app/cart/page-48f12671fd77f454.js",revision:"Qae53qOEJQv7smFa1iZus"},{url:"/_next/static/chunks/app/layout-be302b60fd318758.js",revision:"Qae53qOEJQv7smFa1iZus"},{url:"/_next/static/chunks/app/login/page-35464eb22e5d6c47.js",revision:"Qae53qOEJQv7smFa1iZus"},{url:"/_next/static/chunks/app/orders/page-b6357583fc4ecb38.js",revision:"Qae53qOEJQv7smFa1iZus"},{url:"/_next/static/chunks/app/page-d4f95b20301d7cca.js",revision:"Qae53qOEJQv7smFa1iZus"},{url:"/_next/static/chunks/app/payment-failure/page-7ac51ce5db37ef17.js",revision:"Qae53qOEJQv7smFa1iZus"},{url:"/_next/static/chunks/app/payment-success/page-4045ea56473e171d.js",revision:"Qae53qOEJQv7smFa1iZus"},{url:"/_next/static/chunks/app/signup/page-fc139de79e63a1d7.js",revision:"Qae53qOEJQv7smFa1iZus"},{url:"/_next/static/chunks/fd9d1056-a75fe3ba478e1b58.js",revision:"Qae53qOEJQv7smFa1iZus"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"Qae53qOEJQv7smFa1iZus"},{url:"/_next/static/chunks/main-app-ab6b1decde087221.js",revision:"Qae53qOEJQv7smFa1iZus"},{url:"/_next/static/chunks/main-b97ec2e6a4123a21.js",revision:"Qae53qOEJQv7smFa1iZus"},{url:"/_next/static/chunks/pages/_app-98cb51ec6f9f135f.js",revision:"Qae53qOEJQv7smFa1iZus"},{url:"/_next/static/chunks/pages/_error-e87e5963ec1b8011.js",revision:"Qae53qOEJQv7smFa1iZus"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-7d020062bed07521.js",revision:"Qae53qOEJQv7smFa1iZus"},{url:"/_next/static/css/d7b7929b98f92c92.css",revision:"d7b7929b98f92c92"},{url:"/_next/static/css/f6fc5b1b214866f3.css",revision:"f6fc5b1b214866f3"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/add-to-cart.gif",revision:"c62fad75ceae63bb8719b628a7d03d0a"},{url:"/closeicon.webp",revision:"627d84a47e37707bbd416282964fbe3f"},{url:"/done.svg",revision:"c210f9b751c57b2173daf2219e6e91cf"},{url:"/favicon.ico",revision:"05fe0c25b1a879942c81dca7b9c544f6"},{url:"/hero-2-img1.webp",revision:"dbfec4b283337702f8e16e31f4649ee1"},{url:"/hero-2-img2.webp",revision:"e00706816ebe958e8a70a3019a445ab2"},{url:"/hero-2-img3.webp",revision:"75118b921b0c3d0a3374ee9b73738a10"},{url:"/hero-img.webp",revision:"710f8e54a37d597fb72dc53d4fee6f52"},{url:"/item-1.png",revision:"acea2f5a51abaaaf8d03f7e50ccd3fa1"},{url:"/item-2.png",revision:"3a1f44231c6e28acc2f9ef4a1596081d"},{url:"/item-3.png",revision:"d8145d0990989c418fc35dfeeff5ce3d"},{url:"/item-4.png",revision:"32af323b98ed82e86309aad307e8fe23"},{url:"/item-5.png",revision:"fdd36c99a681f90c54b74718e12db722"},{url:"/item-6.png",revision:"ce3d6bb4815e78e8fe7ce5559e575ce3"},{url:"/item-7.png",revision:"9750b9ea9ee137d6567891d0d03b840e"},{url:"/item-8.png",revision:"ddd0d72534d895aff084f36f70930c21"},{url:"/joqcafelogo.webp",revision:"bfa5a291437dd420d17849c2b8014e66"},{url:"/manifest.json",revision:"109b62848a198d7e67d0debd76bb31ab"},{url:"/service-worker.js",revision:"effbfec78a85b31fa87eec532f56c92d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
