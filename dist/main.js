(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),d=t.n(c),p=new URL(t(830),t.b),l=new URL(t(654),t.b),s=i()(o());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);var m=d()(p),u=d()(l);s.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n}\n:root {\n  box-sizing: border-box;\n  --backclr: #2c2c2ccc;\n  --clrtext: #dedede;\n}\n\nbody {\n  font-family: "Roboto", sans-serif;\n  background-image: url('+m+");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-color: #464646;\n  min-width: 500px;\n  height: 100vh;\n  min-height: 900px;\n\n  color: var(--clrtext);\n  line-height: 1.3;\n\n  position: relative;\n}\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#navigation {\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  width: 80vw;\n  justify-content: space-around;\n  max-width: 1100px;\n  min-width: 500px;\n}\nli {\n  margin: 20px 0;\n  height: auto;\n  /*width: vw;*/\n  min-width: 60px;\n  display: grid;\n  justify-content: center;\n  align-content: center;\n  /*font-size: clamp(30px, 2vw, 40px);*/\n  font-size: 20px;\n  background-color: var(--backclr);\n  border-radius: 15px;\n  padding: 20px 50px 20px 50px;\n}\nli:hover {\n  transform: scale(1.1);\n}\n\nh1 {\n  text-align: center;\n  font-size: clamp(30px, 2.5vw, 40px);\n}\n\n#container {\n  width: 80vw;\n  max-width: 1100px;\n  min-width: 500px;\n  /*font-size: clamp(30px, 2vw, 40px);*/\n  font-size: 20px;\n  background-color: var(--backclr);\n\n  border-radius: 15px;\n  padding: 20px 50px 20px 50px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\ntd {\n  padding-bottom: 10px;\n  width: 100%;\n}\n\n.right {\n  text-align: right;\n  padding-left: 10px;\n}\n.left {\n  padding-right: 10px;\n  text-align: left;\n}\n\n#map {\n  width: 80%;\n  margin-top: 20px;\n}\n\n#headerCont {\n  background-color: var(--backclr);\n  border-radius: 15px;\n  margin-top: 20px;\n  padding: 20px 50px 20px 50px;\n}\n\n#footer {\n  width: 80vw;\n  max-width: 1100px;\n  min-width: 500px;\n  /*font-size: clamp(30px, 2vw, 40px);*/\n  font-size: 15px;\n  background-color: var(--backclr);\n\n  border-radius: 15px;\n  padding: 20px 50px 20px 50px;\n\n  text-align: center;\n  position: absolute;\n  bottom: 10px;\n}\n\n#footer a {\n  color: var(--clrtext);\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n@media (max-width: 767px) {\n  body {\n    background-image: url("+u+");\n    position: relative;\n  }\n\n  li {\n    padding: 10px 1rem 10px 1rem;\n    margin: 10px 0;\n  }\n  #content {\n    gap: 10px;\n  }\n}\n",""]);const h=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var p=0;p<e.length;p++){var l=[].concat(e[p]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],p=r.base?d[0]+r.base:d[0],l=a[p]||0,s="".concat(p," ").concat(l);a[p]=l+1;var m=t(s),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var h=o(u,r);r.byIndex=c,n.splice(c,0,{identifier:s,updater:h,references:1})}i.push(s)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),p=0;p<a.length;p++){var l=t(a[p]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},830:(e,n,t)=>{e.exports=t.p+"8023eac1d5368b86a2bd.jpg"},654:(e,n,t)=>{e.exports=t.p+"ebdc72d2eb8097f1749e.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),d=t.n(c),p=t(216),l=t.n(p),s=t(589),m=t.n(s),u=t(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const f=function(){const e=document.querySelector("main"),n=document.createElement("div");n.id="container";const t=document.createElement("div");t.id="info";const r=document.createElement("p");r.innerText="Hello and welcome to my 'Fake Café' website.";const o=document.createElement("p");o.innerText="This website is result of a task from 'The Odin Project' curriculum. The aim of this simple website is to bundle several separated .js modules together using Webpack. This site also should be responsive.";const a=document.createElement("p");a.innerText="Because I need more text here I will just simply add some Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae beatae qui mollitia optio enim eaque officia illum voluptatibus magni.",t.appendChild(r),t.appendChild(document.createElement("br")),t.appendChild(o),t.appendChild(document.createElement("br")),t.appendChild(a),n.appendChild(t),e.appendChild(n)},x=document.querySelector("#content"),g=document.createElement("div");g.id="headerCont";const v=document.createElement("h1");v.innerText="Fake Fancy Café",g.appendChild(v),x.appendChild(g);const b=document.createElement("nav"),C=document.createElement("ul");C.id="navigation";const y=["home","menu","contact"];for(let e of y){let n=document.createElement("li");n.id=e,n.innerText=e.toUpperCase(),C.appendChild(n)}b.appendChild(C),x.appendChild(b);const w=document.createElement("main");x.appendChild(w),f(),document.querySelector("#container");const E=document.querySelector("#home"),T=document.querySelector("#menu"),k=document.querySelector("#contact");E.addEventListener("click",(function(){document.querySelector("#container").remove(),f()})),T.addEventListener("click",(function(){document.querySelector("#container").remove(),function(){const e=document.querySelector("main"),n=[{item:"Coffe",price:"60CZK"},{item:"Cappuccino",price:"70CZK"},{item:"Beer",price:"50CZK"},{item:"Tea",price:"50CZK"}],t=[{item:"Czech national dessert 'Bábovka'",price:"55CZK"},{item:"Ham & Cheese Toast",price:"70CZK"},{item:"Avocado Toast",price:"70CZK"}],r=document.createElement("div");r.id="container";const o=document.createElement("div");o.id="menu";const a=document.createElement("p");a.innerText="You can eat in or take away.",o.appendChild(a),o.appendChild(document.createElement("br"));let i=document.createElement("p");i.innerText="Beverages",o.appendChild(i);const c=document.createElement("table");for(let e of n){const n=document.createElement("tr"),t=document.createElement("td");t.innerText=e.item,t.classList="left";const r=document.createElement("td");r.innerText=e.price,r.classList="right",n.appendChild(t),n.appendChild(r),c.appendChild(n),o.appendChild(c)}o.appendChild(document.createElement("br"));let d=document.createElement("p");d.innerText="To Eat",o.appendChild(d);const p=document.createElement("table");for(let e of t){const n=document.createElement("tr"),t=document.createElement("td");t.innerText=e.item,t.classList="left";const r=document.createElement("td");r.innerText=e.price,r.classList="right",n.appendChild(t),n.appendChild(r),p.appendChild(n),o.appendChild(p)}o.appendChild(document.createElement("br"));const l=document.createElement("p");l.textContent="We accept credit cards.",o.appendChild(l),r.appendChild(o),e.appendChild(r)}()})),k.addEventListener("click",(function(){document.querySelector("#container").remove(),function(){const e=document.querySelector("main"),n=document.createElement("div");n.id="map",n.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11708.751414257229!2d14.42571435116!3d50.08277903227256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e5e58eb59f%3A0x75209738d1d3b126!2sKarl%C5%AFv%20most!5e0!3m2!1scs!2scz!4v1671108794051!5m2!1scs!2scz" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>\n    ';const t=document.createElement("div");t.id="container";const r=document.createElement("div");r.id="contact";const o=document.createElement("p");o.textContent="MON-SUN...........7AM - 9PM";const a=document.createElement("p");a.textContent="Fake Fancy Café";const i=document.createElement("p");i.textContent="FamousBridge Avenue 1";const c=document.createElement("p");c.textContent="110 00 Prague, Czechia",r.appendChild(o),r.appendChild(document.createElement("br")),r.appendChild(a),r.appendChild(i),r.appendChild(c),t.appendChild(r),r.appendChild(document.createElement("br")),t.appendChild(n),e.appendChild(t)}()}));const S=document.createElement("div");S.id="footer";const M=document.createElement("p");M.innerHTML="<a href='https://www.freepik.com/free-photo/cafe-bar-hotel-loft-style_4690095.htm'  target='_blank'>Background Image by jcomp on Freepik </a> / <a href ='https://github.com/MichalGrecner' target='_blank'>GitHub/MichalGrecner</a>",S.appendChild(M),x.appendChild(S)})()})();