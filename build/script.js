!function(){var t=[,function(t,n,e){"use strict";e.r(n);var o=e(2);let i;const r=document.getElementById("header");let c;function d(t,n){t.clearRect(.5*-n.width,.5*-n.height,2*n.width,2*n.height),c.forEach((e=>{e.update(n,t)})),i=requestAnimationFrame((()=>d(t,n)))}!function(){const t=o.canvas();function n(){t.width=window.innerWidth-function(){const t=document.createElement("div");t.style.visibility="hidden",t.style.overflow="scroll",t.style.msOverflowStyle="scrollbar",document.body.appendChild(t);const n=document.createElement("div");t.appendChild(n);const e=t.offsetWidth-n.offsetWidth;return t.parentNode.removeChild(t),e}()-1,t.height=document.getElementById("header").offsetHeight,function(){null!=i&&(o.setVelocity(o.BASE_VELOCITY),cancelAnimationFrame(i));const t=o.canvas(),n=canvas.getContext("2d");n.translate(t.width/2,t.height/2),c=o.grid3d(t),d(n,t),window.addEventListener("mousemove",(function(t){const n=o.canvas(),e=canvas.getContext("2d"),i=n.width/2-.045*t.clientX,r=n.height/2-.045*t.clientY;e.setTransform(1,0,0,1,i,r)}))}()}window.addEventListener("resize",n,!1),n()}();var a=function(t){var n,e,o,i,r=(t=t||{}).delay||50;function c(){n=null,i=0}return c(),function(){return e=window.scrollY,null!=n&&(i=e-n),n=e,clearTimeout(o),o=setTimeout(c,r),i}}();const l=3*o.BASE_VELOCITY;window.onscroll=function(){const t=.22*window.scrollY;r.style.transform=`translateY(${t}px)`;var n=.15*a();n<-l&&(n=-l),n>l&&(n=l),0==n&&(n=o.BASE_VELOCITY),o.setVelocity(n);const e=document.getElementById("contact").offsetTop;if(window.scrollY>=e&&null!=i&&(cancelAnimationFrame(i),i=null),window.scrollY<e&&null==i){const t=o.canvas();d(t.getContext("2d"),t)}}},function(t,n,e){"use strict";function o(){return document.getElementById("canvas")}e.r(n),e.d(n,{canvas:function(){return o},BASE_VELOCITY:function(){return r},setVelocity:function(){return d},getDimensions:function(){return a},grid3d:function(){return l}});const i=()=>.16*(o().width+o().height),r=.08;var c=r;function d(t){c=t??c}function a(t){var n=o();const e={x:n.width/2,y:n.height/2};return{initial:{start:{xs:e.x-.14*n.width,ys:e.y-.14*n.height,xe:e.x+.14*n.width,ye:e.y+.14*n.height},end:{xs:e.x-.05*n.width,ys:e.y-.05*n.height,xe:e.x+.05*n.width,ye:e.y+.05*n.height}},center:e}}function l(t){t=o();const n=Math.floor(.26*(t.width+t.height));return Array(n).fill(0).map((()=>function(t){const n={init:!1,x:0,y:0,size:0,z:0,update:function(t,e){n.z-=c,(n.z<1||n.z>i())&&n.init(!0);var o=.1+s(n.z,0,t.width,n.size,0),r=s(n.x/n.z,0,1,0,t.width),d=s(n.y/n.z,0,1,0,t.height);e.beginPath(),e.arc(r,d,Math.abs(o),0,2*Math.PI,!1),e.fillStyle="white",e.fill()},init:function(e=!1){var o,r;n.x=(2*Math.random()-1)*(.045*t.height),n.y=(2*Math.random()-1)*(.045*t.height),n.size=.7+Math.random(),n.z=c<0?e?(o=0,r=.1,(Math.random()*(r-o)+o)*i()):n.z:e?Math.random()*i():n.z}};n.init||n.init(!1);return n}(t)))}function s(t,n,e,o,i){return(t-n)/(e-n)*(i-o)+o}},function(){window.isToggled=!1,window.toggle=function(){const t=[document.getElementById("download-card"),document.getElementById("footer"),document.getElementById("header")],n=[document.getElementById("contact"),document.getElementById("skills")];window.isToggled?(window.isToggled=!1,t.forEach((t=>{t.style.display="block"})),n.forEach((t=>{t.classList.remove("toggled")}))):(window.isToggled=!0,t.forEach((t=>{t.style.display="none"})),n.forEach((t=>{t.classList.add("toggled")})))}}],n={};function e(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return t[o](r,r.exports,e),r.exports}e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};!function(){"use strict";e.r(o);e(1),e(3);window.onload=function(){}}()}();