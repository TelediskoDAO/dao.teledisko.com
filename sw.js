if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>i(e,l),d={module:{uri:l},exports:o,require:t};s[l]=Promise.all(n.map((e=>d[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-8bfa659f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/dijkstra.0f8f46b3.js",revision:null},{url:"assets/index.077b8dfa.js",revision:null},{url:"assets/index.0d318d5d.css",revision:null},{url:"assets/index.85337021.js",revision:null},{url:"assets/index.9555c7fc.js",revision:null},{url:"assets/index.abb67f1d.js",revision:null},{url:"assets/tslib.es6.cb12a069.js",revision:null},{url:"assets/workbox-window.prod.es5.6954f450.js",revision:null},{url:"core.js",revision:"3ba537269be9a1f6bd953918ad0b18ea"},{url:"index.html",revision:"5d8237c7d54254d6f04e4a7a750a2f2f"},{url:"main.css",revision:"95805322ebaf23154373d13f6ca369d6"},{url:"images/teledisko/logo-192.png",revision:"5290fa0e70e41d9211e882265fb59207"},{url:"images/teledisko/logo-512.png",revision:"55a099f78bbeae3cc8b175b57ab98c51"},{url:"images/shortcut-time-tracking-192.png",revision:"7b4822fd1db08c3ce9be13ad8db57483"},{url:"manifest.webmanifest",revision:"b8ab1e62ac4d49a7b12c25e0f3230abc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
