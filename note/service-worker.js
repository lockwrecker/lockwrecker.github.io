if(!self.define){let e,i={};const t=(t,s)=>(t=new URL(t+".js",s).href,i[t]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=i,document.head.appendChild(e)}else e=t,importScripts(t),i()})).then((()=>{let e=i[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(s,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const c=e=>t(e,r),f={module:{uri:r},exports:o,require:c};i[r]=Promise.all(s.map((e=>f[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"e3676f276e482ee14743edfdeb3e6587"},{url:"main.js",revision:"bb927c3fb915816ef13079c7f3d812da"},{url:"main.js.LICENSE.txt",revision:"90aa4a2470ceabc6c11ebe4aa1cc2c79"}],{})}));
