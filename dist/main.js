!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class o{constructor(e){this.name=e,this.store=[]}}class r{constructor(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.priority=o}}function c(e){const t=new o(e);localStorage.setItem(t.name,JSON.stringify(t))}function u(e,t){const n=(o=t,JSON.parse(localStorage.getItem(o)));var o;n.store.push(e),function(e){localStorage.setItem(e.name,JSON.stringify(e))}(n)}function i(){const e=function(){const e={...localStorage};return 0===Object.keys(e).length&&e.constructor===Object&&c("My todos"),e}(),t=document.querySelector(".projects");for(let n in e)if(e.hasOwnProperty(n)){const e=document.createElement("option");e.innerHTML=n,e.value=n,t.appendChild(e)}}const l=document.querySelector(".projects");document.querySelector(".add-todo").addEventListener("click",()=>{const e=l.options[l.selectedIndex].value,t=document.querySelector(".title").value,n=document.querySelector(".description").value,o=document.querySelector(".due-date").value,c=document.querySelector(".priority").value;u(new r(t,n,o,c),e)});const s=document.querySelector(".new-project");document.querySelector(".add-project").addEventListener("click",()=>{c(s.value),l.options[-1],function(e,t){e.innerHTML="",t()}(l,i)}),i()}]);