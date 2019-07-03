!function(t){var e={};function n(o){if(e[o])return e[o].exports;var c=e[o]={i:o,l:!1,exports:{}};return t[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(o,c,function(e){return t[e]}.bind(null,c));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);class o{constructor(t){this.name=t,this.store=[]}}function c(t){const e=new o(t);localStorage.setItem(e.name,JSON.stringify(e))}function i(){const t={...localStorage};return 0===Object.keys(t).length&&t.constructor===Object&&c("My todos"),t}function r(t){return JSON.parse(localStorage.getItem(t))}class d{constructor(t,e,n,o){this.title=t,this.description=e,this.dueDate=n,this.priority=o}}function a(t,e){const n=r(e);n.store.push(t),function(t){localStorage.setItem(t.name,JSON.stringify(t))}(n)}const l=document.createElement("div");function s(t,e){for(;t.firstChild;)t.removeChild(t.firstChild);e()}function u(t,e,n,o){const c=document.createElement("div");c.classList.add("edit-form","hidden"),n.appendChild(c);const i=document.createElement("input");i.setAttribute("placeholder","Title"),i.setAttribute("type","text"),i.classList.add(".title"),i.value=o.title;const d=document.createElement("textarea");d.setAttribute("placeholder","Description"),d.value=o.description;const a=document.createElement("input");a.setAttribute("type","date"),a.value=o.dueDate;const u=document.createElement("input");u.setAttribute("type","number"),u.value=o.priority;const m=document.createElement("button");m.innerHTML="Save",c.appendChild(m),m.addEventListener("click",()=>{const e=o.title;o.title=i.value,o.description=d.value,o.dueDate=a.value,o.priority=u.value,function(t,e,n){const o=r(e),c=o.store;let i=0;c.forEach((t,e)=>{n===t.title&&(i=e)}),c[i]=t,localStorage.setItem(e,JSON.stringify(o))}(o,t,e),s(l,p)}),c.appendChild(i),c.appendChild(d),c.appendChild(a),c.appendChild(u),c.appendChild(m),e.addEventListener("click",()=>{c.classList.toggle("hidden"),e.innerHTML="Edit"===e.innerHTML?"Cancel":"Edit"})}function p(){const t=i();l.classList.add("todos"),content.appendChild(l);let e=0;Object.keys(t).forEach(n=>{const o=document.createElement("h3");o.classList.add("project-name"),o.innerHTML=n,l.appendChild(o);let c=0;JSON.parse(t[n]).store.forEach(t=>{const o=document.createElement("div");o.id="accordionExample",o.classList.add("accordion"),l.appendChild(o);const i=document.createElement("button");i.classList.add("btn","btn-link"),i.setAttribute("type","button"),i.setAttribute("data-toggle","collapse"),i.setAttribute("data-target",`#collapse${e}${c}`),i.setAttribute("aria-expanded","true"),i.setAttribute("aria-controls",`collapse${e}${c}`),i.innerHTML=t.title;const d=document.createElement("div");d.id=`collapse${e}${c}`,d.classList.add("collapse"),d.setAttribute("aria-labelledby",`heading${e}${c}`),i.setAttribute("data-parent","#accordionExample");const a=document.createElement("p");a.innerHTML=t.description,d.appendChild(a);const m=document.createElement("p");m.innerHTML=t.dueDate,d.appendChild(m);const h=document.createElement("p");h.innerHTML=t.priority,d.appendChild(h);const b=document.createElement("button");b.innerHTML="Edit",d.appendChild(b),u(n,b,d,t);const f=document.createElement("button");f.innerHTML="Delete",d.appendChild(f),f.addEventListener("click",()=>{!function(t,e){const n=r(e),o=n.store;let c=0;o.forEach((e,n)=>{t===e.title&&(c=n)}),o.splice(c,1),localStorage.setItem(e,JSON.stringify(n))}(t.title,n),s(l,p)}),o.appendChild(i),o.appendChild(d),c+=1}),e+=1})}const m=document.createElement("div");m.classList.add("project-form"),content.appendChild(m);const h=()=>{const t=i(),e=document.createElement("h3");e.innerHTML="Project";const n=document.createElement("select");n.classList.add("projects");const o=document.createElement("input");o.classList.add(".new-project"),o.setAttribute("type","text"),o.setAttribute("placeholder","Project name");const r=document.createElement("input");r.classList.add(".add-project"),r.setAttribute("type","button"),r.value="Add project";const d=Object.keys(t);d.sort(),d.forEach(t=>{const e=document.createElement("option");e.innerHTML=t,e.value=t,n.appendChild(e)}),r.addEventListener("click",()=>{c(o.value),s(m,h)}),m.appendChild(e),m.appendChild(n),m.appendChild(o),m.appendChild(r)};document.querySelector("#content").classList.add("container"),h(),(()=>{const t=document.createElement("div");t.classList.add("todo-form");const e=document.createElement("h3");e.innerHTML="New Todo";const n=document.createElement("input");n.setAttribute("type","button"),n.setAttribute("value","Add todo"),n.classList.add(".add-todo");const o=document.createElement("input");o.setAttribute("placeholder","Title"),o.setAttribute("type","text"),o.classList.add(".title");const c=document.createElement("textarea");c.setAttribute("placeholder","Description"),c.classList.add(".description");const i=document.createElement("input");i.setAttribute("type","date"),i.classList.add(".due-date");const r=document.createElement("input");r.setAttribute("type","number"),r.setAttribute("min","1"),r.setAttribute("max","10"),r.setAttribute("placeholder","Your priority , from 1 to 10"),r.classList.add(".priority"),t.appendChild(e),t.appendChild(o),t.appendChild(c),t.appendChild(i),t.appendChild(r),t.appendChild(n),content.appendChild(t),n.addEventListener("click",()=>{a(new d(o.value,c.value,i.value,r.value),document.querySelector(".projects").value),s(document.querySelector(".todos"),p)})})(),p()}]);