!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class o{constructor(e){this.name=e,this.store=[]}}function r(){const e={...localStorage};return 0===Object.keys(e).length&&e.constructor===Object&&c("My todos"),e}function c(e){const t=new o(e);localStorage.setItem(t.name,JSON.stringify(t))}class a{constructor(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.priority=o}}function d(e,t){const n=(o=t,JSON.parse(localStorage.getItem(o)));var o;n.store.push(e),function(e){localStorage.setItem(e.name,JSON.stringify(e))}(n)}function i(e,t){const n=JSON.parse(t).store,o=n.indexOf(e);n.splice(o,1),console.log(JSON.parse(t).store),JSON.parse(t).store=n}function l(e,t){e.innerHTML="",t()}function s(){const e=r(),t=document.querySelector("#content"),n=document.createElement("div");n.classList.add("todos"),t.appendChild(n);let o=0;for(let t in e){let r=document.createElement("h3");r.classList.add("project-name"),r.innerHTML=t,n.appendChild(r);let c=JSON.parse(e[t]).store,a=0;for(let r in c){const d=document.createElement("div");d.id="accordionExample",d.classList.add("accordion"),n.appendChild(d);const l=document.createElement("button");l.classList.add("btn","btn-link"),l.setAttribute("type","button"),l.setAttribute("data-toggle","collapse"),l.setAttribute("data-target",`#collapse${o}${a}`),l.setAttribute("aria-expanded","true"),l.setAttribute("aria-controls",`collapse${o}${a}`),l.innerHTML=c[r].title;const s=document.createElement("div");s.id=`collapse${o}${a}`,s.classList.add("collapse"),s.setAttribute("aria-labelledby",`heading${o}${a}`),l.setAttribute("data-parent","#accordionExample");const u=document.createElement("p");u.innerHTML=c[r].description,s.appendChild(u);const p=document.createElement("p");p.innerHTML=c[r].dueDate,s.appendChild(p);const m=document.createElement("p");m.innerHTML=c[r].priority,s.appendChild(m);const f=document.createElement("button");f.innerHTML="Delete",s.appendChild(f),f.addEventListener("click",()=>{i(c[r].title,e[t])}),d.appendChild(l),d.appendChild(s),a+=1}o+=1}}(()=>{const e=r(),t=document.querySelector("#content"),n=document.createElement("div");n.classList.add("project-form");const o=document.createElement("select");o.classList.add("projects");const a=document.createElement("input");a.classList.add(".new-project"),a.setAttribute("type","text"),a.setAttribute("placeholder","Project name");const d=document.createElement("input");d.classList.add(".add-project"),d.setAttribute("type","button"),d.value="Add project";for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)){const e=document.createElement("option");e.innerHTML=t,e.value=t,o.appendChild(e)}d.addEventListener("click",()=>{c(a.value),l(o,()=>{const e=r(),t=document.querySelector(".projects");for(let n in e)if(e.hasOwnProperty(n)){const e=document.createElement("option");e.innerHTML=n,e.value=n,t.appendChild(e)}})}),n.appendChild(o),n.appendChild(a),n.appendChild(d),t.appendChild(n)})(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("todo-form");const n=document.createElement("input");n.setAttribute("type","button"),n.setAttribute("value","Add todo"),n.classList.add(".add-todo");const o=document.createElement("input");o.setAttribute("placeholder","Title"),o.setAttribute("type","text"),o.classList.add(".title");const r=document.createElement("textarea");r.setAttribute("placeholder","Description"),r.classList.add(".description");const c=document.createElement("input");c.setAttribute("type","date"),c.classList.add(".due-date");const i=document.createElement("input");i.setAttribute("type","number"),i.classList.add(".priority"),t.appendChild(o),t.appendChild(r),t.appendChild(c),t.appendChild(i),t.appendChild(n),e.appendChild(t),n.addEventListener("click",()=>{d(new a(o.value,r.value,c.value,i.value),document.querySelector(".projects").value),l(document.querySelector(".todos"),s())})})(),s()}]);