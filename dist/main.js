!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class o{constructor(e){this.name=e,this.store=[]}}function r(){const e={...localStorage};return 0===Object.keys(e).length&&e.constructor===Object&&c("My todos"),e}function c(e){const t=new o(e);localStorage.setItem(t.name,JSON.stringify(t))}class d{constructor(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.priority=o}}function i(e,t){const n=(o=t,JSON.parse(localStorage.getItem(o)));var o;n.store.push(e),function(e){localStorage.setItem(e.name,JSON.stringify(e))}(n)}(()=>{const e=r(),t=document.querySelector("#content"),n=document.createElement("div");n.classList.add("project-form");const o=document.createElement("select");o.classList.add("projects");const d=document.createElement("input");d.classList.add(".new-project"),d.setAttribute("type","text"),d.setAttribute("placeholder","Project name");const i=document.createElement("input");i.classList.add(".add-project"),i.setAttribute("type","button"),i.value="Add project";for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)){const e=document.createElement("option");e.innerHTML=t,e.value=t,o.appendChild(e)}i.addEventListener("click",()=>{c(d.value),function(e,t){e.innerHTML="",t()}(o,()=>{const e=r(),t=document.querySelector(".projects");for(let n in e)if(e.hasOwnProperty(n)){const e=document.createElement("option");e.innerHTML=n,e.value=n,t.appendChild(e)}})}),n.appendChild(o),n.appendChild(d),n.appendChild(i),t.appendChild(n)})(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("todo-form");const n=document.createElement("input");n.setAttribute("type","button"),n.setAttribute("value","Add todo"),n.classList.add(".add-todo");const o=document.createElement("input");o.setAttribute("placeholder","Title"),o.setAttribute("type","text"),o.classList.add(".title");const r=document.createElement("textarea");r.setAttribute("placeholder","Description"),r.classList.add(".description");const c=document.createElement("input");c.setAttribute("type","date"),c.classList.add(".due-date");const a=document.createElement("input");a.setAttribute("type","number"),a.classList.add(".priority"),t.appendChild(o),t.appendChild(r),t.appendChild(c),t.appendChild(a),t.appendChild(n),e.appendChild(t),n.addEventListener("click",()=>{i(new d(o.value,r.value,c.value,a.value),document.querySelector(".projects").value)})})(),function(){const e=r(),t=document.querySelector("#content"),n=document.createElement("div");n.classList.add("todos"),t.appendChild(n);for(let t in e){let o=document.createElement("p");o.classList.add("project-name"),o.innerHTML=t,n.appendChild(o);let r=JSON.parse(e[t]).store;const c=document.createElement("ul");n.appendChild(c);for(let e in r){const t=document.createElement("li");t.innerHTML=r[e].title,c.appendChild(t)}}}()}]);