!function(){var t={7940:function(){window.jetpackForms=window.jetpackForms||{},window.jetpackForms.getBackgroundColor=function(t){let o=window.getComputedStyle(t).backgroundColor;for(;"rgba(0, 0, 0, 0)"===o&&t.parentNode&&t.parentNode.nodeType===window.Node.ELEMENT_NODE;)t=t.parentNode,o=window.getComputedStyle(t).backgroundColor;return o},window.jetpackForms.generateStyleVariables=function(t){const o=window["editor-canvas"]?window["editor-canvas"].document:document,e=o.querySelector("body");if(!o.querySelectorAll(t).length)return;const n=o.createElement("div");n.className="contact-form__style-probe",n.style="position: absolute; z-index: -1; width: 1px; height: 1px; visibility: hidden",n.innerHTML='\n\t\t\t<div class="contact-form" style="">\n\t\t\t\t<div class="wp-block-button is-style-outline">\n\t\t\t\t\t<div class="wp-block-button__link">Test</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="jetpack-field">\n\t\t\t\t\t<input class="jetpack-field__input" type="text">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t';o.querySelector(t).appendChild(n);const r=n.querySelector(".wp-block-button__link"),c=n.querySelector('input[type="text"]'),a=window.jetpackForms.getBackgroundColor(e),i=window.jetpackForms.getBackgroundColor(c),d=window.getComputedStyle(r).borderColor,{color:p,padding:l,paddingTop:u,paddingLeft:s,border:f,borderColor:m,borderWidth:k,borderStyle:w,borderRadius:b,fontSize:y,fontFamily:g,lineHeight:j}=window.getComputedStyle(c);return n.remove(),{"--jetpack--contact-form--primary-color":d,"--jetpack--contact-form--background-color":a,"--jetpack--contact-form--text-color":p,"--jetpack--contact-form--border":f,"--jetpack--contact-form--border-color":m,"--jetpack--contact-form--border-size":k,"--jetpack--contact-form--border-style":w,"--jetpack--contact-form--border-radius":b,"--jetpack--contact-form--input-background":i,"--jetpack--contact-form--input-padding":l,"--jetpack--contact-form--input-padding-top":u,"--jetpack--contact-form--input-padding-left":s,"--jetpack--contact-form--font-size":y,"--jetpack--contact-form--font-family":g,"--jetpack--contact-form--line-height":j}}}},o={};function e(n){var r=o[n];if(void 0!==r)return r.exports;var c=o[n]={exports:{}};return t[n](c,c.exports,e),c.exports}e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,{a:o}),o},e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},function(){"use strict";e(7940);const{generateStyleVariables:t}=window.jetpackForms,o=".wp-block-jetpack-contact-form-container",n=setTimeout((()=>{r()}),3e3);function r(){const e=t(o);if(!e)return;const n=document.querySelector(o);for(const t in e)n.style.setProperty(t,e[t])}window.addEventListener("load",(()=>{clearTimeout(n),r()}))}()}();