!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["v-clipboard"]=t():e["v-clipboard"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t=document.createElement("textarea"),n=void 0;if("string"!=typeof e)try{n=JSON.stringify(e)}catch(e){throw"Failed to copy value to clipboard. Unknown type."}else n=e;if(t.value=n,t.setAttribute("readonly",""),t.style="position:fixed;pointer-events:none;z-index:-9999;opacity:0;",document.body.appendChild(t),navigator.userAgent.match(/ipad|ipod|iphone/i)){var r=t.contentEditable,o=t.readOnly;t.contentEditable=!0,t.readOnly=!0;var a=document.createRange();a.selectNodeContents(t);var i=window.getSelection();i.removeAllRanges(),i.addRange(a),t.setSelectionRange(0,999999),t.contentEditable=r,t.readOnly=o}else t.select();var c=!1;try{c=document.execCommand("copy")}catch(e){console.warn(e)}return document.body.removeChild(t),c};t.default={install:function(e){e.prototype.$clipboard=r;var t=function(e){return function(){return"$"+e++}}(1),n={},o=function(e){e&&(n[e]=null,delete n[e])},a=function(e){var r=t();return n[r]=e,r};e.directive("clipboard",{bind:function(e,t){var o=t.arg,i=t.value;switch(o){case"error":var c=a(i);return void(e.dataset.clipboardErrorHandler=c);case"success":var d=a(i);return void(e.dataset.clipboardSuccessHandler=d);default:var l=function(o){if(t.hasOwnProperty("value")){var a={value:"function"==typeof i?i():i,event:o},c=r(a.value)?e.dataset.clipboardSuccessHandler:e.dataset.clipboardErrorHandler,d=n[c];d&&d(a)}},u=a(l);return e.dataset.clipboardClickHandler=u,void e.addEventListener("click",n[u])}},unbind:function(e){var t=e.dataset,r=t.clipboardSuccessHandler,a=t.clipboardErrorHandler,i=t.clipboardClickHandler;o(r),o(a),i&&(e.removeEventListener("click",n[i]),o(i))}})}}}])});
//# sourceMappingURL=index.min.js.map
