/*! For license information please see tg_header.js.LICENSE.txt */
(()=>{"use strict";var t={56:(t,e,i)=>{t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},72:t=>{var e=[];function i(t){for(var i=-1,o=0;o<e.length;o++)if(e[o].identifier===t){i=o;break}return i}function o(t,o){for(var r={},a=[],s=0;s<t.length;s++){var l=t[s],c=o.base?l[0]+o.base:l[0],d=r[c]||0,h="".concat(c," ").concat(d);r[c]=d+1;var u=i(h),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var g=n(p,o);o.byIndex=s,e.splice(s,0,{identifier:h,updater:g,references:1})}a.push(h)}return a}function n(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;i.update(t=e)}else i.remove()}}t.exports=function(t,n){var r=o(t=t||[],n=n||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var s=i(r[a]);e[s].references--}for(var l=o(t,n),c=0;c<r.length;c++){var d=i(r[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=l}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i="",o=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),o&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),o&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i}).join("")},e.i=function(t,i,o,n,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);o&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),i&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=i):d[2]=i),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),e.push(d))}},e}},472:(t,e,i)=>{i.d(e,{A:()=>s});var o=i(601),n=i.n(o),r=i(314),a=i.n(r)()(n());a.push([t.id,':root{--ktg-rgb-brand1-01: 50, 122, 30;--ktg-color-brand1-01: rgb(var(--ktg-rgb-brand1-01));--ktg-rgb-brand1-02: 23, 104, 34;--ktg-color-brand1-02: rgb(var(--ktg-rgb-brand1-02));--ktg-rgb-brand1-03: 18, 83, 27;--ktg-color-brand1-03: rgb(var(--ktg-rgb-brand1-03));--ktg-rgb-brand2-01: 218, 237, 255;--ktg-color-brand2-01: rgb(var(--ktg-rgb-brand2-01));--ktg-rgb-brand2-02: 193, 225, 255;--ktg-color-brand2-02: rgb(var(--ktg-rgb-brand2-02));--ktg-rgb-brand2-03: 161, 206, 247;--ktg-color-brand2-03: rgb(var(--ktg-rgb-brand2-03));--ktg-rgb-brand3-01: 253, 227, 3;--ktg-color-brand3-01: rgb(var(--ktg-rgb-brand3-01));--ktg-rgb-brand3-02: 252, 207, 11;--ktg-color-brand3-02: rgb(var(--ktg-rgb-brand3-02));--ktg-rgb-brand3-03: 230, 176, 9;--ktg-color-brand3-03: rgb(var(--ktg-rgb-brand3-03));--ktg-rgb-primary-01: var(--ktg-rgb-brand1-01);--ktg-color-primary-01: rgb(var(--ktg-rgb-primary-01));--ktg-rgb-primary-02: var(--ktg-rgb-brand1-02);--ktg-color-primary-02: rgb(var(--ktg-rgb-primary-02));--ktg-rgb-primary-03: var(--ktg-rgb-brand1-03);--ktg-color-primary-03: rgb(var(--ktg-rgb-primary-03));--ktg-rgb-text: 51, 51, 51;--ktg-color-text: rgb(var(--ktg-rgb-text));--ktg-rgb-focus: 24, 73, 200;--ktg-color-focus: rgb(var(--ktg-rgb-focus));--ktg-rgb-link: 24, 73, 200;--ktg-color-link: rgb(var(--ktg-rgb-link));--ktg-rgb-link-visited: 137, 68, 224;--ktg-color-link-visited: rgb(var(--ktg-rgb-link-visited));--ktg-rgb-danger: 242, 72, 34;--ktg-color-danger: rgb(var(--ktg-rgb-danger));--ktg-rgb-danger-light: 255, 227, 218;--ktg-color-danger-light: rgb(var(--ktg-rgb-danger-light));--ktg-rgb-neutral-01: 245, 245, 245;--ktg-color-neutral-01: rgb(var(--ktg-rgb-neutral-01));--ktg-rgb-neutral-02: 235, 235, 235;--ktg-color-neutral-02: rgb(var(--ktg-rgb-neutral-02));--ktg-rgb-neutral-03: 211, 211, 211;--ktg-color-neutral-03: rgb(var(--ktg-rgb-neutral-03));--ktg-rgb-neutral-04: 189, 189, 189;--ktg-color-neutral-04: rgb(var(--ktg-rgb-neutral-04));--ktg-rgb-neutral-05: 118, 118, 118;--ktg-color-neutral-05: rgb(var(--ktg-rgb-neutral-05));--ktg-rgb-background-01: 255, 255, 255;--ktg-color-background-01: rgb(var(--ktg-rgb-background-01));--ktg-rgb-dark-contrast: 255, 255, 255;--ktg-color-dark-contrast: rgb(var(--ktg-rgb-dark-contrast));--ktg-rgb-shadow: 0, 0, 0;--ktg-color-shadow: rgb(var(--ktg-rgb-shadow))}*:not(:defined){visibility:hidden}ktg-account-icon-button:not(:defined),ktg-account-navigation:not(:defined),ktg-account-navigation-item:not(:defined),ktg-card-visual:not(:defined),ktg-context-menu-button:not(:defined),ktg-context-menu-title:not(:defined),ktg-context-menu:not(:defined),ktg-country-code-dropdown-button:not(:defined),ktg-dropdown-option:not(:defined),ktg-dropdown-overlay:not(:defined),ktg-dropdown-overlay-option:not(:defined),ktg-dropdown-custom-overlay:not(:defined),ktg-lightbox:not(:defined),ktg-lightbox-image:not(:defined),ktg-lightbox-navigation:not(:defined),ktg-lightbox-slide:not(:defined),ktg-lightbox-text:not(:defined),ktg-map-info-popup:not(:defined),ktg-message-meta:not(:defined),ktg-modal:not(:defined),ktg-modal-buttons:not(:defined),ktg-modal-title:not(:defined),ktg-form-modal:not(:defined),ktg-form-modal-buttons:not(:defined),ktg-overlay-backdrop:not(:defined),ktg-overlay-outlet:not(:defined),ktg-scrollbar:not(:defined),ktg-tooltip:not(:defined),ktg-tooltip-image:not(:defined),ktg-character-counter:not(:defined){display:none}ktg-accordion:not(:defined),ktg-accordion-item:not(:defined),ktg-action-list:not(:defined),ktg-action-item:not(:defined),ktg-alert-banner:not(:defined),ktg-breadcrumbs:not(:defined),ktg-button-group:not(:defined),ktg-card-eyebrow:not(:defined),ktg-card-text:not(:defined),ktg-card-title:not(:defined),ktg-clues:not(:defined),ktg-clue:not(:defined),ktg-clue-list:not(:defined),ktg-clue-list-item:not(:defined),ktg-clue-text:not(:defined),ktg-clue-title:not(:defined),ktg-content-switcher:not(:defined),ktg-content-switcher-outlet:not(:defined),ktg-content-switcher-panel:not(:defined),ktg-dashboard-widget-list:not(:defined),ktg-dashboard-widget-dock:not(:defined),ktg-dashboard-widget-dock-buttons:not(:defined),ktg-datepicker:not(:defined),ktg-dropdown:not(:defined),ktg-dropdown-multi-select:not(:defined),ktg-dropdown-autocomplete:not(:defined),ktg-dropdown-custom:not(:defined),ktg-field:not(:defined),ktg-field-error:not(:defined),ktg-field-hint:not(:defined),ktg-file-input:not(:defined),ktg-file-input-instructions:not(:defined),ktg-file-input-hint:not(:defined),ktg-footer:not(:defined),ktg-footer-column:not(:defined),ktg-footer-navigation:not(:defined),ktg-form-accordion:not(:defined),ktg-form-accordion-header:not(:defined),ktg-form-accordion-item:not(:defined),ktg-header:not(:defined),ktg-pentaton:not(:defined),ktg-header-topic:not(:defined),ktg-header-topic-paragraph:not(:defined),ktg-header-topic-title:not(:defined),ktg-horizon:not(:defined),ktg-horizontal-navigation:not(:defined),ktg-labelled-choice:not(:defined),ktg-line:not(:defined),ktg-loader:not(:defined),ktg-logo:not(:defined),ktg-main-navigation:not(:defined),ktg-map-layer-accordion:not(:defined),ktg-map-layer-accordion-item:not(:defined),ktg-map-layer-control:not(:defined),ktg-message-feed:not(:defined),ktg-message:not(:defined),ktg-message-attachment:not(:defined),ktg-phone-input:not(:defined),ktg-progress-bar:not(:defined),ktg-skeleton-provider:not(:defined),ktg-skeleton:not(:defined),ktg-table:not(:defined),ktg-table-row:not(:defined),ktg-table-title-row:not(:defined),ktg-tabs:not(:defined),ktg-text-input:not(:defined),ktg-text-area:not(:defined),ktg-upload-files:not(:defined),ktg-upload-file:not(:defined),ktg-vertical-navigation:not(:defined),ktg-vertical-navigation-item:not(:defined){display:block}ktg-badge:not(:defined),ktg-breadcrumbs-item:not(:defined),ktg-button:not(:defined),ktg-link-button:not(:defined),ktg-card:not(:defined),ktg-checkbox:not(:defined),ktg-content-switcher-button:not(:defined),ktg-date-input:not(:defined),ktg-dropdown-pill:not(:defined),ktg-horizontal-navigation-item:not(:defined),ktg-meta-navigation-item:not(:defined),ktg-icon:not(:defined),ktg-label:not(:defined),ktg-link:not(:defined),ktg-hamburger:not(:defined),ktg-pill:not(:defined),ktg-radio:not(:defined),ktg-range-slider:not(:defined),ktg-scale-bar:not(:defined),ktg-tab:not(:defined),ktg-toggle:not(:defined),ktg-tooltip-button:not(:defined){display:inline-block}ktg-alert-banner:not(:defined){height:4.25rem}ktg-icon:not(:defined){height:1rem;width:1rem}ktg-horizon:not(:defined){height:3.5rem}ktg-main-navigation:not(:defined){height:7rem}ktg-breadcrumbs:not(:defined){margin-bottom:4.5rem}ktg-breadcrumbs-item:not(:defined){margin-right:2rem;white-space:nowrap;font-size:.75rem;line-height:180%}ktg-header-topic-title:not(:defined){font-size:calc(var(--ktg-font-size-t, 1rem) * (4.75 - 2.125) + 2.125rem);line-height:100%;margin-bottom:3rem}ktg-header-topic-paragraph:not(:defined){font-weight:var(--ktg-font-weight-default);font-size:calc(var(--ktg-font-size-t) * (1.25 - 1) + 1rem);line-height:140%;margin-bottom:3rem}ktg-tabs:not(:defined){height:3.5rem}ktg-button:not(:defined){height:2.5rem;width:5rem}ktg-checkbox:not(:defined),ktg-radio:not(:defined){height:1rem;width:1rem}ktg-range-slider:not(:defined){min-width:1rem;height:1rem}ktg-toggle:not(:defined){height:1.5rem;width:2.5rem}ktg-card:not(:defined){width:17rem;height:auto}ktg-line:not(:defined){height:.0625rem;border-color:var(--ktg-color-neutral-02);border-width:0 0 .0625rem 0}ktg-scale-bar:not(:defined){height:1.125rem;width:4rem}ktg-footer:not(:defined){visibility:visible;min-height:31rem}ktg-map-layer-control:not(:defined){height:2.375rem}:root{--ktg-layer-above-main-navigation: 1000003;--ktg-layer-main-navigation: 1000002;--ktg-layer-overlay: 1000001}ktg-overlay-outlet[name=default]{z-index:var(--ktg-layer-overlay)}ktg-overlay-outlet[name=above-main-navigation]{z-index:var(--ktg-layer-above-main-navigation)}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}:root{--ktg-font-sans-serif: "aktiv-grotesk", sans-serif;--ktg-font-weight-default: 500;--ktg-font-weight-bold: 700}*::selection{color:var(--ktg-color-dark-contrast);background-color:var(--ktg-color-focus)}body{font-family:var(--ktg-font-sans-serif);font-weight:var(--ktg-font-weight-default);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--ktg-font-size-t: clamp(0rem, calc((100vw - 22.5rem) / (106 - 22.5)), 1rem)}.ktg-title-01{font-style:normal;font-weight:var(--ktg-font-weight-default);line-height:100%;font-size:calc(var(--ktg-font-size-t) * (4.75 - 2.125) + 2.125rem)}.ktg-title-01-small{font-style:normal;font-weight:var(--ktg-font-weight-default);line-height:100%;font-size:calc(var(--ktg-font-size-t) * (3.75 - 2.125) + 2.125rem)}.ktg-title-02{font-style:normal;font-weight:var(--ktg-font-weight-default);line-height:100%;font-size:calc(var(--ktg-font-size-t) * (3.75 - 1.5) + 1.5rem)}.ktg-title-03{font-style:normal;font-weight:var(--ktg-font-weight-default);line-height:100%;font-size:calc(var(--ktg-font-size-t) * (3 - 1.5) + 1.5rem)}.ktg-title-04{font-style:normal;font-weight:var(--ktg-font-weight-default);font-size:2.125rem;line-height:100%;font-size:calc(var(--ktg-font-size-t) * (2.125 - 1.25) + 1.25rem)}.ktg-title-05{font-style:normal;font-weight:var(--ktg-font-weight-default);line-height:100%;font-size:calc(var(--ktg-font-size-t) * (1.5 - 1.25) + 1.25rem)}.ktg-title-06{font-style:normal;font-weight:var(--ktg-font-weight-default);font-size:1.25rem;line-height:100%}.ktg-subtitle-01{font-style:normal;font-weight:var(--ktg-font-weight-default);font-size:1.5rem;line-height:100%}.ktg-subtitle-02{font-style:normal;font-weight:var(--ktg-font-weight-default);font-size:1.25rem;line-height:100%}.ktg-subtitle-03{font-style:normal;font-weight:var(--ktg-font-weight-default);font-size:1rem;line-height:100%}.ktg-subtitle-04{font-style:normal;font-weight:var(--ktg-font-weight-default);font-size:.875rem;line-height:100%}.ktg-body{font-style:normal;font-weight:var(--ktg-font-weight-default);font-size:calc(var(--ktg-font-size-t) * (1 - .875) + .875rem);line-height:180%}.ktg-body-lead{font-style:normal;font-weight:var(--ktg-font-weight-default);font-size:calc(var(--ktg-font-size-t) * (1.25 - 1) + 1rem);line-height:140%}.ktg-body-small{font-style:normal;font-weight:var(--ktg-font-weight-default);font-size:.875rem;line-height:180%}.ktg-unordered-list{list-style:none}.ktg-ordered-list,.ktg-ordered-list--numeric{list-style:numeric}.ktg-ordered-list--alpha{list-style:lower-alpha}.ktg-ordered-list--roman{list-style:upper-roman}.ktg-list-item{--ktg-list-item-font-size: calc( var(--ktg-font-size-t) * (1 - .875) + .875rem );position:relative;font-family:var(--ktg-font-sans-serif);font-weight:var(--ktg-font-weight-default);font-style:normal;font-size:var(--ktg-list-item-font-size);line-height:180%}ktg-modal .ktg-list-item{font-size:.875rem}.ktg-unordered-list .ktg-list-item{padding-left:1.5rem}.ktg-unordered-list .ktg-list-item:before{content:"";display:block;position:absolute;width:.25rem;height:.25rem;background-color:currentColor;border-radius:50%;left:.75rem;top:calc(var(--ktg-list-item-font-size) * .5 + .25rem);transform:translate(-50%)}.ktg-ordered-list .ktg-list-item{margin-left:1.5rem}\n',""]);const s=a},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},601:t=>{t.exports=function(t){return t[1]}},659:t=>{var e={};t.exports=function(t,i){var o=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(i)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(i){!function(t,e,i){var o="";i.supports&&(o+="@supports (".concat(i.supports,") {")),i.media&&(o+="@media ".concat(i.media," {"));var n=void 0!==i.layer;n&&(o+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),o+=i.css,n&&(o+="}"),i.media&&(o+="}"),i.supports&&(o+="}");var r=i.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,i)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}}},e={};function i(o){var n=e[o];if(void 0!==n)return n.exports;var r=e[o]={id:o,exports:{}};return t[o](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.nc=void 0;const o=jQuery;var n=i.n(o);Shiny,(()=>{var t=Object.defineProperty,e=Object.getOwnPropertyDescriptor,i=(e,i)=>t(e,"name",{value:i,configurable:!0}),o=(i,o,n,r)=>{for(var a,s=r>1?void 0:r?e(o,n):o,l=i.length-1;l>=0;l--)(a=i[l])&&(s=(r?a(o,n,s):a(s))||s);return r&&s&&t(o,n,s),s};!function(t){let e=new WeakMap,o=new WeakMap,n=new WeakMap,r=new WeakMap,a=new WeakMap,s=new WeakMap,l=new WeakMap,c=new WeakMap,d=new WeakMap,h=new WeakMap,u=new WeakMap,p=new WeakMap,g=new WeakMap,m=new WeakMap,v=new WeakMap,f={ariaAtomic:"aria-atomic",ariaAutoComplete:"aria-autocomplete",ariaBusy:"aria-busy",ariaChecked:"aria-checked",ariaColCount:"aria-colcount",ariaColIndex:"aria-colindex",ariaColIndexText:"aria-colindextext",ariaColSpan:"aria-colspan",ariaCurrent:"aria-current",ariaDescription:"aria-description",ariaDisabled:"aria-disabled",ariaExpanded:"aria-expanded",ariaHasPopup:"aria-haspopup",ariaHidden:"aria-hidden",ariaInvalid:"aria-invalid",ariaKeyShortcuts:"aria-keyshortcuts",ariaLabel:"aria-label",ariaLevel:"aria-level",ariaLive:"aria-live",ariaModal:"aria-modal",ariaMultiLine:"aria-multiline",ariaMultiSelectable:"aria-multiselectable",ariaOrientation:"aria-orientation",ariaPlaceholder:"aria-placeholder",ariaPosInSet:"aria-posinset",ariaPressed:"aria-pressed",ariaReadOnly:"aria-readonly",ariaRelevant:"aria-relevant",ariaRequired:"aria-required",ariaRoleDescription:"aria-roledescription",ariaRowCount:"aria-rowcount",ariaRowIndex:"aria-rowindex",ariaRowIndexText:"aria-rowindextext",ariaRowSpan:"aria-rowspan",ariaSelected:"aria-selected",ariaSetSize:"aria-setsize",ariaSort:"aria-sort",ariaValueMax:"aria-valuemax",ariaValueMin:"aria-valuemin",ariaValueNow:"aria-valuenow",ariaValueText:"aria-valuetext",role:"role"},b=i((t,e)=>{for(let i in f){e[i]=null;let o=null,n=f[i];Object.defineProperty(e,i,{get:()=>o,set(i){o=i,t.isConnected?t.setAttribute(n,i):h.set(t,e)}})}},"initAom");function y(t){let e=r.get(t),{form:i}=e;N(t,i,e),L(t,e.labels)}i(y,"initNode");let k=i((t,e=!1)=>{let i=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:t=>r.has(t)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}),o=i.nextNode(),n=!e||t.disabled;for(;o;)o.formDisabledCallback&&n&&T(o,t.disabled),o=i.nextNode()},"walkFieldset"),w={attributes:!0,attributeFilter:["disabled","name"]},_=K()?new MutationObserver(t=>{for(let e of t){let t=e.target;if("disabled"===e.attributeName&&(t.constructor.formAssociated?T(t,t.hasAttribute("disabled")):"fieldset"===t.localName&&k(t)),"name"===e.attributeName&&t.constructor.formAssociated){let e=r.get(t),i=d.get(t);e.setFormValue(i)}}}):{};function x(t){t.forEach(t=>{let{addedNodes:e,removedNodes:i}=t,o=Array.from(e),a=Array.from(i);o.forEach(t=>{var e;if(r.has(t)&&t.constructor.formAssociated&&y(t),h.has(t)){let e=h.get(t);Object.keys(f).filter(t=>null!==e[t]).forEach(i=>{t.setAttribute(f[i],e[i])}),h.delete(t)}if(v.has(t)){let e=v.get(t);t.setAttribute("internals-valid",e.validity.valid.toString()),t.setAttribute("internals-invalid",(!e.validity.valid).toString()),t.setAttribute("aria-invalid",(!e.validity.valid).toString()),v.delete(t)}if("form"===t.localName){let e=c.get(t),i=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:t=>!r.has(t)||!t.constructor.formAssociated||e&&e.has(t)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}),o=i.nextNode();for(;o;)y(o),o=i.nextNode()}"fieldset"===t.localName&&(null===(e=_.observe)||void 0===e||e.call(_,t,w),k(t,!0))}),a.forEach(t=>{let e=r.get(t);e&&n.get(e)&&I(e),l.has(t)&&l.get(t).disconnect()})})}function C(t){t.forEach(t=>{let{removedNodes:e}=t;e.forEach(e=>{let i=g.get(t.target);r.has(e)&&V(e),i.disconnect()})})}i(x,"observerCallback"),i(C,"fragmentObserverCallback");let S=i(t=>{var e,i;let o=new MutationObserver(C);!(null===(e=window?.ShadyDOM)||void 0===e)&&e.inUse&&t.mode&&t.host&&(t=t.host),null===(i=o.observe)||void 0===i||i.call(o,t,{childList:!0}),g.set(t,o)},"deferUpgrade");K()&&new MutationObserver(x);let E={childList:!0,subtree:!0},T=i((t,e)=>{t.toggleAttribute("internals-disabled",e),e?t.setAttribute("aria-disabled","true"):t.removeAttribute("aria-disabled"),t.formDisabledCallback&&t.formDisabledCallback.apply(t,[e])},"setDisabled"),I=i(t=>{n.get(t).forEach(t=>{t.remove()}),n.set(t,[])},"removeHiddenInputs"),$=i((t,e)=>{let i=document.createElement("input");return i.type="hidden",i.name=t.getAttribute("name"),t.after(i),n.get(e).push(i),i},"createHiddenInput"),O=i((t,e)=>{var i;n.set(e,[]),null===(i=_.observe)||void 0===i||i.call(_,t,w)},"initRef"),L=i((t,e)=>{if(e.length){Array.from(e).forEach(e=>e.addEventListener("click",t.click.bind(t)));let i=e[0].id;e[0].id||(i=`${e[0].htmlFor}_Label`,e[0].id=i),t.setAttribute("aria-labelledby",i)}},"initLabels"),D=i(t=>{let e=Array.from(t.elements).filter(t=>!t.tagName.includes("-")&&t.validity).map(t=>t.validity.valid),i=c.get(t)||[],o=[...e,...Array.from(i).filter(t=>t.isConnected).map(t=>r.get(t).validity.valid)].includes(!1);t.toggleAttribute("internals-invalid",o),t.toggleAttribute("internals-valid",!o)},"setFormValidity"),A=i(t=>{D(R(t.target))},"formInputCallback"),M=i(t=>{D(R(t.target))},"formChangeCallback"),B=i(t=>{let e=["button[type=submit]","input[type=submit]","button:not([type])"].map(t=>`${t}:not([disabled])`).map(e=>`${e}:not([form])${t.id?`,${e}[form='${t.id}']`:""}`).join(",");t.addEventListener("click",i=>{if(i.target.closest(e)){let e=c.get(t);if(t.noValidate)return;e.size&&Array.from(e).reverse().map(t=>r.get(t).reportValidity()).includes(!1)&&i.preventDefault()}})},"wireSubmitLogic"),z=i(t=>{let e=c.get(t.target);e&&e.size&&e.forEach(t=>{t.constructor.formAssociated&&t.formResetCallback&&t.formResetCallback.apply(t)})},"formResetCallback"),N=i((t,e,i)=>{if(e){let o=c.get(e);if(o)o.add(t);else{let i=new Set;i.add(t),c.set(e,i),B(e),e.addEventListener("reset",z),e.addEventListener("input",A),e.addEventListener("change",M)}s.set(e,{ref:t,internals:i}),t.constructor.formAssociated&&t.formAssociatedCallback&&setTimeout(()=>{t.formAssociatedCallback.apply(t,[e])},0),D(e)}},"initForm"),R=i(t=>{let e=t.parentNode;return e&&"FORM"!==e.tagName&&(e=R(e)),e},"findParentForm"),P=i((t,e,i=DOMException)=>{if(!t.constructor.formAssociated)throw new i(e)},"throwIfNotFormAssociated"),F=i((t,e,i)=>{let o=c.get(t);return o&&o.size&&o.forEach(t=>{r.get(t)[i]()||(e=!1)}),e},"overrideFormMethod"),V=i(t=>{if(t.constructor.formAssociated){let e=r.get(t),{labels:i,form:o}=e;L(t,i),N(t,o,e)}},"upgradeInternals");function K(){return typeof MutationObserver<"u"}i(K,"mutationObserverExists");class H{static{i(this,"ValidityState")}constructor(){this.badInput=!1,this.customError=!1,this.patternMismatch=!1,this.rangeOverflow=!1,this.rangeUnderflow=!1,this.stepMismatch=!1,this.tooLong=!1,this.tooShort=!1,this.typeMismatch=!1,this.valid=!0,this.valueMissing=!1,Object.seal(this)}}let G=i(t=>(t.badInput=!1,t.customError=!1,t.patternMismatch=!1,t.rangeOverflow=!1,t.rangeUnderflow=!1,t.stepMismatch=!1,t.tooLong=!1,t.tooShort=!1,t.typeMismatch=!1,t.valid=!0,t.valueMissing=!1,t),"setValid"),U=i((t,e,i)=>(t.valid=W(e),Object.keys(e).forEach(i=>t[i]=e[i]),i&&D(i),t),"reconcileValidity"),W=i(t=>{let e=!0;for(let i in t)"valid"!==i&&!1!==t[i]&&(e=!1);return e},"isValid"),Y=new WeakMap;function q(t,e){t.toggleAttribute(e,!0),t.part&&t.part.add(e)}i(q,"addState");class j extends Set{static{i(this,"CustomStateSet")}static get isPolyfilled(){return!0}constructor(t){if(super(),!t||!t.tagName||-1===t.tagName.indexOf("-"))throw new TypeError("Illegal constructor");Y.set(this,t)}add(t){if(!/^--/.test(t)||"string"!=typeof t)throw new DOMException(`Failed to execute 'add' on 'CustomStateSet': The specified value ${t} must start with '--'.`);let e=super.add(t),i=Y.get(this),o=`state${t}`;return i.isConnected?q(i,o):setTimeout(()=>{q(i,o)}),e}clear(){for(let[t]of this.entries())this.delete(t);super.clear()}delete(t){let e=super.delete(t),i=Y.get(this);return i.isConnected?(i.toggleAttribute(`state${t}`,!1),i.part&&i.part.remove(`state${t}`)):setTimeout(()=>{i.toggleAttribute(`state${t}`,!1),i.part&&i.part.remove(`state${t}`)}),e}}function Z(t,e,i,o){if("a"===i&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?o:"a"===i?o.call(t):o?o.value:e.get(t)}function X(t,e,i,o,n){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!n:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===o?n.call(t,i):n?n.value=i:e.set(t,i),i}var J;i(Z,"__classPrivateFieldGet"),i(X,"__classPrivateFieldSet");class Q{static{i(this,"HTMLFormControlsCollection")}constructor(t){J.set(this,void 0),X(this,J,t,"f");for(let e=0;e<t.length;e++){let i=t[e];this[e]=i,i.hasAttribute("name")&&(this[i.getAttribute("name")]=i)}Object.freeze(this)}get length(){return Z(this,J,"f").length}[(J=new WeakMap,Symbol.iterator)](){return Z(this,J,"f")[Symbol.iterator]()}item(t){return null==this[t]?null:this[t]}namedItem(t){return null==this[t]?null:this[t]}}function tt(){let t=HTMLFormElement.prototype.checkValidity;HTMLFormElement.prototype.checkValidity=o;let e=HTMLFormElement.prototype.reportValidity;function o(...e){let i=t.apply(this,e);return F(this,i,"checkValidity")}function n(...t){let i=e.apply(this,t);return F(this,i,"reportValidity")}HTMLFormElement.prototype.reportValidity=n,i(o,"checkValidityOverride"),i(n,"reportValidityOverride");let{get:r}=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"elements");Object.defineProperty(HTMLFormElement.prototype,"elements",{get(...t){let e=r.call(this,...t),i=Array.from(c.get(this)||[]);if(0===i.length)return e;let o=Array.from(e).concat(i).sort((t,e)=>t.compareDocumentPosition?2&t.compareDocumentPosition(e)?1:-1:0);return new Q(o)}})}i(tt,"patchFormPrototype");class et{static{i(this,"ElementInternals")}static get isPolyfilled(){return!0}constructor(t){if(!t||!t.tagName||-1===t.tagName.indexOf("-"))throw new TypeError("Illegal constructor");let i=t.getRootNode(),n=new H;this.states=new j(t),e.set(this,t),o.set(this,n),r.set(t,this),b(t,this),O(t,this),Object.seal(this),i instanceof DocumentFragment&&S(i)}checkValidity(){let t=e.get(this);if(P(t,"Failed to execute 'checkValidity' on 'ElementInternals': The target element is not a form-associated custom element."),!this.willValidate)return!0;let i=o.get(this);if(!i.valid){let e=new Event("invalid",{bubbles:!1,cancelable:!0,composed:!1});t.dispatchEvent(e)}return i.valid}get form(){let t,i=e.get(this);return P(i,"Failed to read the 'form' property from 'ElementInternals': The target element is not a form-associated custom element."),!0===i.constructor.formAssociated&&(t=R(i)),t}get labels(){let t=e.get(this);P(t,"Failed to read the 'labels' property from 'ElementInternals': The target element is not a form-associated custom element.");let i=t.getAttribute("id"),o=t.getRootNode();return o&&i?o.querySelectorAll(`[for="${i}"]`):[]}reportValidity(){let t=e.get(this);if(P(t,"Failed to execute 'reportValidity' on 'ElementInternals': The target element is not a form-associated custom element."),!this.willValidate)return!0;let i=this.checkValidity(),o=p.get(this);if(o&&!t.constructor.formAssociated)throw new DOMException("Failed to execute 'reportValidity' on 'ElementInternals': The target element is not a form-associated custom element.");return!i&&o&&(t.focus(),o.focus()),i}setFormValue(t){let i=e.get(this);P(i,"Failed to execute 'setFormValue' on 'ElementInternals': The target element is not a form-associated custom element."),I(this),null==t||t instanceof FormData?null!=t&&t instanceof FormData&&Array.from(t).reverse().forEach(([t,e])=>{if("string"==typeof e){let o=$(i,this);o.name=t,o.value=e}}):i.getAttribute("name")&&($(i,this).value=t),d.set(i,t)}setValidity(t,i,n){let r=e.get(this);if(P(r,"Failed to execute 'setValidity' on 'ElementInternals': The target element is not a form-associated custom element."),!t)throw new TypeError("Failed to execute 'setValidity' on 'ElementInternals': 1 argument required, but only 0 present.");p.set(this,n);let s=o.get(this),l={};for(let e in t)l[e]=t[e];0===Object.keys(l).length&&G(s);let c=Object.assign(Object.assign({},s),l);delete c.valid;let{valid:d}=U(s,c,this.form);if(!d&&!i)throw new DOMException("Failed to execute 'setValidity' on 'ElementInternals': The second argument should not be empty if one or more flags in the first argument are true.");a.set(this,d?"":i),r.isConnected?(r.toggleAttribute("internals-invalid",!d),r.toggleAttribute("internals-valid",d),r.setAttribute("aria-invalid",`${!d}`)):v.set(r,this)}get shadowRoot(){let t=e.get(this);return u.get(t)||null}get validationMessage(){let t=e.get(this);return P(t,"Failed to read the 'validationMessage' property from 'ElementInternals': The target element is not a form-associated custom element."),a.get(this)}get validity(){let t=e.get(this);return P(t,"Failed to read the 'validity' property from 'ElementInternals': The target element is not a form-associated custom element."),o.get(this)}get willValidate(){let t=e.get(this);return P(t,"Failed to read the 'willValidate' property from 'ElementInternals': The target element is not a form-associated custom element."),!(t.disabled||t.hasAttribute("disabled")||t.hasAttribute("readonly"))}}function it(){if(typeof window>"u"||!window.ElementInternals||!HTMLElement.prototype.attachInternals)return!1;class t extends HTMLElement{static{i(this,"ElementInternalsFeatureDetection")}constructor(){super(),this.internals=this.attachInternals()}}let e=`element-internals-feature-detection-${Math.random().toString(36).replace(/[^a-z]+/g,"")}`;customElements.define(e,t);let o=new t;return["shadowRoot","form","willValidate","validity","validationMessage","labels","setFormValue","setValidity","checkValidity","reportValidity"].every(t=>t in o.internals)}i(it,"isElementInternalsSupported");let ot=!1,nt=!1;function rt(t){nt||(nt=!0,window.CustomStateSet=j,t&&(HTMLElement.prototype.attachInternals=function(...e){let i=t.call(this,e);return i.states=new j(this),i}))}function at(t=!0){if(!ot){if(ot=!0,typeof window<"u"&&(window.ElementInternals=et),typeof CustomElementRegistry<"u"){let t=CustomElementRegistry.prototype.define;CustomElementRegistry.prototype.define=function(e,i,o){if(i.formAssociated){let t=i.prototype.connectedCallback;i.prototype.connectedCallback=function(){m.has(this)||(m.set(this,!0),this.hasAttribute("disabled")&&T(this,!0)),t?.apply(this),V(this)}}t.call(this,e,i,o)}}if(typeof HTMLElement<"u"&&(HTMLElement.prototype.attachInternals=function(){if(!this.tagName)return{};if(-1===this.tagName.indexOf("-"))throw new Error("Failed to execute 'attachInternals' on 'HTMLElement': Unable to attach ElementInternals to non-custom elements.");if(r.has(this))throw new DOMException("DOMException: Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");return new et(this)}),typeof Element<"u"){let t=function(...t){let i=e.apply(this,t);if(u.set(this,i),K()){let t=new MutationObserver(x);window.ShadyDOM?t.observe(this,E):t.observe(i,E),l.set(this,t)}return i};i(t,"attachShadowObserver");let e=Element.prototype.attachShadow;Element.prototype.attachShadow=t}K()&&typeof document<"u"&&new MutationObserver(x).observe(document.documentElement,E),typeof HTMLFormElement<"u"&&tt(),(t||typeof window<"u"&&!window.CustomStateSet)&&rt()}}i(rt,"forceCustomStateSetPolyfill"),i(at,"forceElementInternalsPolyfill"),!!customElements.polyfillWrapFlushCallback||(it()?typeof window<"u"&&!window.CustomStateSet&&rt(HTMLElement.prototype.attachInternals):at(!1)),t.forceCustomStateSetPolyfill=rt,t.forceElementInternalsPolyfill=at,Object.defineProperty(t,"__esModule",{value:!0})}({});var n=globalThis,r=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),s=new WeakMap,l=class{static{i(this,"n")}constructor(t,e,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(r&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}},c=i(t=>new l("string"==typeof t?t:t+"",void 0,a),"r"),d=i((t,...e)=>{let i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new l(i,t,a)},"i"),h=i((t,e)=>{if(r)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let i of e){let e=document.createElement("style"),o=n.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,t.appendChild(e)}},"S"),u=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return c(e)})(t):t,{is:p,defineProperty:g,getOwnPropertyDescriptor:m,getOwnPropertyNames:v,getOwnPropertySymbols:f,getPrototypeOf:b}=Object,y=globalThis,k=y.trustedTypes,w=k?k.emptyScript:"",_=y.reactiveElementPolyfillSupport,x=i((t,e)=>t,"d"),C={toAttribute(t,e){switch(e){case Boolean:t=t?w:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},S=i((t,e)=>!p(t,e),"f"),E={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:S};Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;var T=class extends HTMLElement{static{i(this,"b")}static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=E){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&g(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){let{get:o,set:n}=m(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){let r=o?.call(this);n.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??E}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;let t=b(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){let t=this.properties,e=[...v(t),...f(t)];for(let i of e)this.createProperty(i,t[i])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(let[t,e]of this.elementProperties){let i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let t of i)e.unshift(u(t))}else void 0!==t&&e.push(u(t));return e}static _$Eu(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return h(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){let i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){let n=(void 0!==i.converter?.toAttribute?i.converter:C).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){let i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){let t=i.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:C;this._$Em=o,this[o]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??S)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(t){}firstUpdated(t){}};T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[x("elementProperties")]=new Map,T[x("finalized")]=new Map,_?.({ReactiveElement:T}),(y.reactiveElementVersions??=[]).push("2.0.4");var I=globalThis,$=I.trustedTypes,O=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,L="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+D,M=`<${A}>`,B=document,z=i(()=>B.createComment(""),"l"),N=i(t=>null===t||"object"!=typeof t&&"function"!=typeof t,"c"),R=Array.isArray,P=i(t=>R(t)||"function"==typeof t?.[Symbol.iterator],"u"),F="[ \t\n\f\r]",V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,K=/-->/g,H=/>/g,G=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,W=/"/g,Y=/^(?:script|style|textarea|title)$/i,q=i(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),"y"),j=q(1),Z=q(2),X=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),Q=new WeakMap,tt=B.createTreeWalker(B,129);function et(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==O?O.createHTML(e):e}i(et,"C");var it=i((t,e)=>{let i,o=t.length-1,n=[],r=2===e?"<svg>":"",a=V;for(let e=0;e<o;e++){let o,s,l=t[e],c=-1,d=0;for(;d<l.length&&(a.lastIndex=d,s=a.exec(l),null!==s);)d=a.lastIndex,a===V?"!--"===s[1]?a=K:void 0!==s[1]?a=H:void 0!==s[2]?(Y.test(s[2])&&(i=RegExp("</"+s[2],"g")),a=G):void 0!==s[3]&&(a=G):a===G?">"===s[0]?(a=i??V,c=-1):void 0===s[1]?c=-2:(c=a.lastIndex-s[2].length,o=s[1],a=void 0===s[3]?G:'"'===s[3]?W:U):a===W||a===U?a=G:a===K||a===H?a=V:(a=G,i=void 0);let h=a===G&&t[e+1].startsWith("/>")?" ":"";r+=a===V?l+M:c>=0?(n.push(o),l.slice(0,c)+L+l.slice(c)+D+h):l+D+(-2===c?e:h)}return[et(t,r+(t[o]||"<?>")+(2===e?"</svg>":"")),n]},"P"),ot=class t{static{i(this,"V")}constructor({strings:e,_$litType$:i},o){let n;this.parts=[];let r=0,a=0,s=e.length-1,l=this.parts,[c,d]=it(e,i);if(this.el=t.createElement(c,o),tt.currentNode=this.el.content,2===i){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=tt.nextNode())&&l.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(let t of n.getAttributeNames())if(t.endsWith(L)){let e=d[a++],i=n.getAttribute(t).split(D),o=/([.?@])?(.*)/.exec(e);l.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?lt:"?"===o[1]?ct:"@"===o[1]?dt:st}),n.removeAttribute(t)}else t.startsWith(D)&&(l.push({type:6,index:r}),n.removeAttribute(t));if(Y.test(n.tagName)){let t=n.textContent.split(D),e=t.length-1;if(e>0){n.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],z()),tt.nextNode(),l.push({type:2,index:++r});n.append(t[e],z())}}}else if(8===n.nodeType)if(n.data===A)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=n.data.indexOf(D,t+1));)l.push({type:7,index:r}),t+=D.length-1}r++}}static createElement(t,e){let i=B.createElement("template");return i.innerHTML=t,i}};function nt(t,e,i=t,o){if(e===X)return e;let n=void 0!==o?i._$Co?.[o]:i._$Cl,r=N(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=n:i._$Cl=n),void 0!==n&&(e=nt(t,n._$AS(t,e.values),n,o)),e}i(nt,"N");var rt=class{static{i(this,"S")}constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??B).importNode(e,!0);tt.currentNode=o;let n=tt.nextNode(),r=0,a=0,s=i[0];for(;void 0!==s;){if(r===s.index){let e;2===s.type?e=new at(n,n.nextSibling,this,t):1===s.type?e=new s.ctor(n,s.name,s.strings,this,t):6===s.type&&(e=new ht(n,this,t)),this._$AV.push(e),s=i[++a]}r!==s?.index&&(n=tt.nextNode(),r++)}return tt.currentNode=B,o}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},at=class t{static{i(this,"M")}get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=nt(this,t,e),N(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==X&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):P(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==J&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(B.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=ot.createElement(et(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{let t=new rt(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Q.get(t.strings);return void 0===e&&Q.set(t.strings,e=new ot(t)),e}k(e){R(this._$AH)||(this._$AH=[],this._$AR());let i,o=this._$AH,n=0;for(let r of e)n===o.length?o.push(i=new t(this.S(z()),this.S(z()),this,this.options)):i=o[n],i._$AI(r),n++;n<o.length&&(this._$AR(i&&i._$AB.nextSibling,n),o.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}},st=class{static{i(this,"R")}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,n){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=J}_$AI(t,e=this,i,o){let n=this.strings,r=!1;if(void 0===n)t=nt(this,t,e,0),r=!N(t)||t!==this._$AH&&t!==X,r&&(this._$AH=t);else{let o,a,s=t;for(t=n[0],o=0;o<n.length-1;o++)a=nt(this,s[i+o],e,o),a===X&&(a=this._$AH[o]),r||=!N(a)||a!==this._$AH[o],a===J?t=J:t!==J&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!o&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},lt=class extends st{static{i(this,"k")}constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}},ct=class extends st{static{i(this,"H")}constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}},dt=class extends st{static{i(this,"I")}constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){if((t=nt(this,t,e,0)??J)===X)return;let i=this._$AH,o=t===J&&i!==J||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==J&&(i===J||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ht=class{static{i(this,"L")}constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){nt(this,t)}},ut={P:L,A:D,C:A,M:1,L:it,R:rt,D:P,V:nt,I:at,H:st,N:ct,U:dt,B:lt,F:ht},pt=I.litHtmlPolyfillSupport;pt?.(ot,at),(I.litHtmlVersions??=[]).push("3.1.3");var gt=i((t,e,i)=>{let o=i?.renderBefore??e,n=o._$litPart$;if(void 0===n){let t=i?.renderBefore??null;o._$litPart$=n=new at(e.insertBefore(z(),t),t,void 0,i??{})}return n._$AI(t),n},"j"),mt=class extends T{static{i(this,"s")}constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=gt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return X}};mt._$litElement$=!0,mt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:mt});var vt=globalThis.litElementPolyfillSupport;vt?.({LitElement:mt}),(globalThis.litElementVersions??=[]).push("4.0.5");var ft=i(t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},"t"),bt={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:S},yt=i((t=bt,e,i)=>{let{kind:o,metadata:n}=i,r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(i.name,t),"accessor"===o){let{name:o}=i;return{set(i){let n=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,n,t)},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===o){let{name:o}=i;return function(i){let n=this[o];e.call(this,i),this.requestUpdate(o,n,t)}}throw Error("Unsupported decorator location: "+o)},"r");function kt(t){return(e,i)=>"object"==typeof i?yt(t,e,i):((t,e,i)=>{let o=e.hasOwnProperty(i);return e.constructor.createProperty(i,o?{...t,wrapped:!0}:t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function wt(t){return kt({...t,state:!0,attribute:!1})}i(kt,"n"),i(wt,"r");var _t,xt=i((t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i),"e");function Ct(t,e){return(o,n,r)=>{let a=i(e=>e.renderRoot?.querySelector(t)??null,"o");if(e){let{get:t,set:e}="object"==typeof n?o:r??(()=>{let t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return xt(o,n,{get(){let i=t.call(this);return void 0===i&&(i=a(this),(null!==i||this.hasUpdated)&&e.call(this,i)),i}})}return xt(o,n,{get(){return a(this)}})}}function St(t){return(e,i)=>xt(e,i,{get(){return(this.renderRoot??(_t??=document.createDocumentFragment())).querySelectorAll(t)}})}function Et(t){return(e,i)=>{let{slot:o,selector:n}=t??{},r="slot"+(o?`[name=${o}]`:":not([name])");return xt(e,i,{get(){let e=this.renderRoot?.querySelector(r),i=e?.assignedElements(t)??[];return void 0===n?i:i.filter(t=>t.matches(n))}})}}function Tt(t){return(e,i)=>{let{slot:o}=t??{},n="slot"+(o?`[name=${o}]`:":not([name])");return xt(e,i,{get(){return this.renderRoot?.querySelector(n)?.assignedNodes(t)??[]}})}}i(Ct,"e"),i(St,"r"),i(Et,"o"),i(Tt,"n");var It=Symbol.for(""),$t=i(t=>{if(t?.r===It)return t?._$litStatic$},"o"),Ot=i((t,...e)=>({_$litStatic$:e.reduce((e,i,o)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[o+1],t[0]),r:It}),"s"),Lt=new Map,Dt=i(t=>(e,...i)=>{let o,n,r,a=i.length,s=[],l=[],c=0,d=!1;for(;c<a;){for(r=e[c];c<a&&(n=i[c],void 0!==(o=$t(n)));)r+=o+e[++c],d=!0;c!==a&&l.push(n),s.push(r),c++}if(c===a&&s.push(e[a]),d){let t=s.join("$$lit$$");void 0===(e=Lt.get(t))&&(s.raw=s,Lt.set(t,e=s)),i=l}return t(e,...i)},"l"),At=Dt(j);function Mt(t){return Bt(t,0,1)}function Bt(t,e,i){return Math.max(e,Math.min(t,i))}Dt(Z),i(Mt,"clamp01"),i(Bt,"clamp");var zt=class{static{i(this,"KTGAngularUnitsConverter")}static toDegrees(t){return t*(180/Math.PI)}static toRadians(t){return t*(Math.PI/180)}};function Nt(t,e,i){return t*(i-e)+e}function Rt(t,e,i){return(t-e)/(i-e)}function Pt(t,e,i,o,n){return Nt(Rt(t,e,i),o,n)}i(Nt,"lerp"),i(Rt,"invLerp"),i(Pt,"remap");var Ft=class t{static{i(this,"RectUtils")}static new(t){return{x:t?.x??0,y:t?.y??0,width:t?.width??0,height:t?.height??0}}static viewport(){return{x:0,y:0,width:window.innerWidth,height:window.innerHeight}}static fromElement(t){let e=t.getBoundingClientRect();return{x:e.left,y:e.top,width:e.width,height:e.height}}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}static copyInto(t,e){e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height}static clone(t){return{x:t.x,y:t.y,width:t.width,height:t.height}}static round(t){return{x:Math.round(t.x),y:Math.round(t.y),width:Math.round(t.width),height:Math.round(t.height)}}static top(t){return t.y}static left(t){return t.x}static right(t){return t.x+t.width}static bottom(t){return t.y+t.height}static centerX(t){return t.x+.5*t.width}static centerY(t){return t.y+.5*t.height}static surfaceArea(t){return t.width*t.height}static clip(t,e){let i=Math.max(t.x,e.x),o=Math.max(t.y,e.y),n=Math.min(this.right(t),this.right(e)-i),r=Math.min(this.bottom(t),this.bottom(e)-o);return this.new({x:i,y:o,width:n,height:r})}static areColliding(e,i){return t.left(e)<t.right(i)&&t.right(e)>t.left(i)&&t.top(e)<t.bottom(i)&&t.bottom(e)>t.top(i)}static isInsideOther(t,e){return this.left(t)>=this.left(e)&&this.top(t)>=this.top(e)&&this.right(t)<=this.right(e)&&this.bottom(t)<=this.bottom(e)}static inset(t,e){return this.insetXY(t,e,e)}static insetXY(t,e,i){return{x:t.x+e,y:t.y+i,width:t.width-2*e,height:t.height-2*i}}},Vt=class{static{i(this,"Vec2DUtils")}static new(t){return{x:t?.x??0,y:t?.y??0}}static clone(t){return{x:t.x,y:t.y}}static equals(t,e){return t.x===e.x&&t.y===e.y}static subtract(t,e){return{x:t.x-e.x,y:t.y-e.y}}static clampRect(t,e){return{x:Bt(t.x,Ft.left(e),Ft.right(e)),y:Bt(t.y,Ft.top(e),Ft.bottom(e))}}};function Kt(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}i(Kt,"prefersReducedMotion");var Ht=class{static{i(this,"KTGAnimations")}static prefersReducedMotion(){return Kt()}static transition(t){if(t.respectPrefersReducedMotion&&this.prefersReducedMotion())return t.render(1),t.onFinished?.(),t.onCompleted?.(),{completed:Promise.resolve(),cancel:()=>{t.onCanceled?.()}};let e=!1;return{completed:new Promise(o=>{let n=performance.now();requestAnimationFrame(i(function i(r){if(e)return t.onCanceled?.(),t.onCompleted?.(),void o();let a=Mt(Rt(r,n,n+t.duration)),s=t.easing(a),l=Math.round(1e4*s)/1e4;t.render(l),a<1?requestAnimationFrame(i):(t.onFinished?.(),t.onCompleted?.(),o())},"frame"))}),cancel:()=>{e=!0}}}static animate(t,e){let i=e.options.duration;e?.respectPrefersReducedMotion&&this.prefersReducedMotion()&&(i=0);let o=t?.animate(e.keyframes,{...e.options,duration:i});return o&&!e?.persist&&o.persist(),o??null}static scrollIntoView(t,e){let i=e;e?.respectPrefersReducedMotion&&this.prefersReducedMotion()&&(i={...e,behavior:"instant"}),t?.scrollIntoView(i)}static scrollTo(t,e){let i=e;e?.respectPrefersReducedMotion&&this.prefersReducedMotion()&&(i={...e,behavior:"instant"}),t?.scrollTo(i)}};function Gt(t=10){return e=>{let i=2*Math.PI/3;return 0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((e*t-.75)*i)+1}}function Ut(t,e,i=null){return t?t instanceof ShadowRoot?Ut(t.host,e,i):t instanceof HTMLElement?t.matches(e)?t:Ut(t.parentNode,e,i):t===i?null:Ut(t.parentNode,e,i):null}function Wt(t){let e="";for(;t;){let i=t.localName;if(!i)break;i+=t.id?`#${t.id}`:"",i+=t.className&&"string"==typeof t.className?`.${[...t.classList].join(".")}`:"",e=i+(e?" > "+e:""),t=t.parentElement}return e}function Yt(t){let e=t.getRootNode();return e instanceof ShadowRoot?e:document}i(Gt,"easeOutElastic"),i(Ut,"closestPassShadow"),i(Wt,"getCssSelectorPath"),i(Yt,"getRootElement");var qt=document.createElement("a");function jt(t,e=window.location.host){return qt.href=t,qt.host!==e}function Zt(){return window.matchMedia("(pointer: coarse)").matches}function Xt(t,e){let i=Wt(t);console.warn(`${e}\n\nPath to element:\n${i}`)}i(jt,"isExternalUrl"),i(Zt,"isTouchDevice"),i(Xt,"warnWithElementPath");var Jt=class{constructor(t,e,o=""){this.host=t,this.animationAxis=e,this.composedItemSelector=o,this.items=[],this.previousMouseCoords={x:0,y:0},this.direction="",this.wasInside=!1,this.currentMouseCoords={x:0,y:0},this.mouseMoveListener=t=>{if(Zt()||this.items.length<1)return;let e=t.target;this.composedItemSelector&&(e=t.composedPath().find(t=>t instanceof HTMLElement&&t.matches(this.composedItemSelector))??e);let o={x:t.clientX,y:t.clientY},n=this.mainElement.getBoundingClientRect(),r=Math.sign(o.y-n.top)+Math.sign(n.right-o.x)+Math.sign(n.bottom-o.y)+Math.sign(o.x-n.left)===4,a=i(t=>{let e=[Math.sign(n.top-t.y),Math.sign(t.x-n.right),Math.sign(t.y-n.bottom),Math.sign(n.left-t.x)];switch(JSON.stringify(e)){case"[-1,-1,0,-1]":case"[-1,-1,1,-1]":this.direction="bottom";break;case"[0,-1,-1,-1]":case"[1,-1,-1,-1]":this.direction="top";break;case"[-1,0,-1,-1]":case"[-1,1,-1,-1]":this.direction="right";break;case"[-1,-1,-1,0]":case"[-1,-1,-1,1]":this.direction="left"}},"getDirection"),s=i(t=>{let e,i,o,n,r,a=t.getBoundingClientRect(),s=this.mainElement.getBoundingClientRect();return"horizontal"===this.animationAxis?(e=t.clientWidth,i=this.mainElement.clientWidth,o=a.left,n=s.left,r="X"):(e=t.clientHeight,i=this.mainElement.clientHeight,o=a.top,n=s.top,r="Y"),{itemLength:e,mainLength:i,itemSide:o,mainSide:n,xy:r}},"getItemValues"),l=this.items[0].tagName;if(e&&e.tagName===l){let t=s(e),i=t.itemSide-t.mainSide,o=t.itemLength/t.mainLength;this.wasInside?(Ht.prefersReducedMotion()||(this.decorationElement.style.transition="200ms ease-out"),this.decorationElement.style.transform=`\n        translate${t.xy}(${i}px)\n        scale${t.xy}(${o})\n        `):r&&(this.decorationElement.style.transition="",this.decorationElement.style.transform=`\n        translate${t.xy}(${i}px)\n        scale${t.xy}(${o})\n        `)}let c="translate(-100%, 0)",d=i(()=>{switch(this.direction){case"top":c="translate(0, -100%)";break;case"right":c="translate(100%, 0)";break;case"bottom":c="translate(0, 100%)";break;case"left":c="translate(-100%, 0)"}},"getAnimationTranslate"),h=[{},{}];if(r&&!this.wasInside)a(this.previousMouseCoords),d(),h=[{transform:c},{transform:"translate(0, 0)"}];else if(!r&&this.wasInside){let t;if(a(o),d(),"horizontal"===this.animationAxis)switch(this.direction){case"left":t=this.items[0];break;case"right":t=this.items[this.items.length-1]}else switch(this.direction){case"top":t=this.items[0];break;case"bottom":t=this.items[this.items.length-1]}if(t){let e=s(t),i=e.itemSide-e.mainSide,o=e.itemLength/e.mainLength;Ht.prefersReducedMotion()||(this.decorationElement.style.transition="200ms ease-out"),this.decorationElement.style.transform=`\n            translate${e.xy}(${i}px)\n            scale${e.xy}(${o})\n            `}h=[{transform:"translate(0, 0)"},{transform:c}]}Ht.animate(this.decorationElement.firstElementChild,{keyframes:h,options:{fill:"forwards",duration:100},respectPrefersReducedMotion:!0}),this.previousMouseCoords.x=o.x,this.previousMouseCoords.y=o.y,this.wasInside=r},this.host.addController(this)}static{i(this,"KTGHighlightBarAnimation")}setMainElement(t){this.mainElement=t}setDecorationElement(t){this.decorationElement=t}setItems(t){this.items=t}firstUpdated(){this.host.shadowRoot&&window.addEventListener("mousemove",this.mouseMoveListener)}hostDisconnected(){window.removeEventListener("mousemove",this.mouseMoveListener)}},Qt=class{constructor(t){this.modal=t,this.defaultInOptions={duration:800,easing:Gt(2.4)},this.defaultOutOptions={duration:400,easing:"cubic-bezier(0.4, 0, 0.2, 1)"},this.animateInDirection="to-top",this.animateOutDirection="to-bottom"}static{i(this,"KTGModalLikeAnimation")}setAnimateInDirection(t){this.animateInDirection=t}async animateIn(){let t=this.animateInDirection;switch(this.animateInDirection=this.modal.openDirection??"to-top",t){case"to-top":await this.animateInToTop();break;case"to-right":await this.animateInToRight();break;case"to-bottom":await this.animateInToBottom();break;case"to-left":await this.animateInToLeft()}}async animateInToTop(){this.modal.style.transform="translateY(100%)",this.modal.style.opacity="0",await Ht.transition({render:t=>{this.modal.style.transform=`translateY(${100-100*t}%)`,this.modal.style.opacity=`${t}`},duration:this.defaultInOptions.duration,easing:this.defaultInOptions.easing,respectPrefersReducedMotion:!0}).completed,this.modal.style.transform="",this.modal.style.opacity=""}async animateInToRight(){this.modal.style.transform="translateX(-100%)",this.modal.style.opacity="0",await Ht.transition({render:t=>{this.modal.style.transform=`translateX(${100*t-100}%)`,this.modal.style.opacity=`${t}`},duration:this.defaultInOptions.duration,easing:this.defaultInOptions.easing,respectPrefersReducedMotion:!0}).completed,this.modal.style.transform="",this.modal.style.opacity=""}async animateInToBottom(){this.modal.style.transform="translateY(-100%)",this.modal.style.opacity="0",await Ht.transition({render:t=>{this.modal.style.transform=`translateY(${100*t-100}%)`,this.modal.style.opacity=`${t}`},duration:this.defaultInOptions.duration,easing:this.defaultInOptions.easing,respectPrefersReducedMotion:!0}).completed,this.modal.style.transform="",this.modal.style.opacity=""}async animateInToLeft(){this.modal.style.transform="translateX(100%)",this.modal.style.opacity="0",await Ht.transition({render:t=>{this.modal.style.transform=`translateX(${100-100*t}%)`,this.modal.style.opacity=`${t}`},duration:this.defaultInOptions.duration,easing:this.defaultInOptions.easing,respectPrefersReducedMotion:!0}).completed,this.modal.style.transform="",this.modal.style.opacity=""}setAnimateOutDirection(t){this.animateOutDirection=t}async animateOut(){let t=this.animateOutDirection;switch(this.animateOutDirection=this.modal.closeDirection??"to-bottom",t){case"to-top":await this.animateOutToTop();break;case"to-right":await this.animateOutToRight();break;case"to-bottom":await this.animateOutToBottom();break;case"to-left":await this.animateOutToLeft()}}async animateOutToTop(){await Ht.animate(this.modal,{keyframes:[{transform:"none"},{transform:"translateY(-100%)",opacity:0}],options:this.defaultOutOptions,respectPrefersReducedMotion:!0}).finished}async animateOutToRight(){await Ht.animate(this.modal,{keyframes:[{transform:"none"},{transform:"translateX(100%)",opacity:0}],options:this.defaultOutOptions,respectPrefersReducedMotion:!0}).finished}async animateOutToBottom(){await Ht.animate(this.modal,{keyframes:[{transform:"none"},{transform:"translateY(100%)",opacity:0}],options:this.defaultOutOptions,respectPrefersReducedMotion:!0}).finished}async animateOutToLeft(){await Ht.animate(this.modal,{keyframes:[{transform:"none"},{transform:"translateX(-100%)",opacity:0}],options:this.defaultOutOptions,respectPrefersReducedMotion:!0}).finished}},te="expand",ee="collapse",ie=class extends CustomEvent{static{i(this,"KTGCdkAccordionItemExpandEvent")}constructor(t){super(te,t)}},oe=class extends CustomEvent{static{i(this,"KTGCdkAccordionItemCollapseEvent")}constructor(t){super(ee,t)}},ne=[d`
    ::selection,
    *::selection {
      color: var(--ktg-color-dark-contrast);
      background-color: var(--ktg-color-focus);
    }

    :host {
      font-family: var(--ktg-font-sans-serif);
      font-weight: var(--ktg-font-weight-default);
      font-style: normal;
      color: var(--ktg-color-text);
    }
  `];function re(t){let e=document.createElement("style");e.textContent=t.join("").toString().trim(),document.head.prepend(e)}i(re,"registerGlobalStyles");var ae=[d`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :host * {
      font-family: inherit;
      font-weight: inherit;
    }

    button {
      color: inherit;
    }
  `];function se(){return d`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `}i(se,"ktgVisuallyHidden");var le=[d`
    .ktg-visually-hidden {
      ${se()}
    }
  `],ce=[...ae,...ne,d`
    :host {
      display: block;
      width: 100%;
    }

    .header {
      display: flex;
      width: 100%;
      background: transparent;
      border: none;
      border-radius: 0;
      font-size: 1rem;
    }

    .header:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: -0.125rem;
    }

    .expandable {
      overflow: hidden;
      display: none;
      height: 0;
      opacity: 0;
    }

    :host([expanded]) .expandable {
      display: block;
      height: auto;
      opacity: 1;
    }
  `],de=class extends mt{constructor(){super(...arguments),this.animationTiming={duration:250,easing:"ease-out"},this.expanded=!1,this.disabled=!1,this.noHeaderButton=!1}expand(){this.expanded||(this.expanded=!0,this.dispatchExpandEvent(),this.doExpandAnimation())}async doExpandAnimation(){this.expandableElement.style.display="block";let t=this.contentElement.clientHeight;await Ht.animate(this.expandableElement,{keyframes:[{opacity:0,height:0},{opacity:1,height:`${t}px`}],options:this.animationTiming,respectPrefersReducedMotion:!0}).finished,this.expandableElement.style.height="",this.expandableElement.style.display=""}collapse(){this.expanded&&(this.expanded=!1,this.dispatchCollapseEvent(),this.doCollapseAnimation())}async doCollapseAnimation(){this.expandableElement.inert=!0,this.expandableElement.style.display="block";let t=this.contentElement.clientHeight;await Ht.animate(this.expandableElement,{keyframes:[{opacity:1,height:`${t}px`},{opacity:0,height:0}],options:this.animationTiming,respectPrefersReducedMotion:!0}).finished,this.expandableElement.style.display="",this.expandableElement.inert=!1}onKeyDown(t){switch(t.code){case"Enter":case"Space":t.preventDefault(),this.onClick()}}onClick(){this.expanded?this.collapse():this.expand()}render(){let t=this.noHeaderButton?Ot`div`:Ot`button`;return At`
      <${t}
        class="header"
        id="header"
        part="header"
        @keydown=${this.onKeyDown}
        @click=${this.onClick}
        aria-expanded=${this.expanded}
        aria-controls="content"
        .disabled=${this.disabled}
      >
        <slot name="header"></slot>
      </${t}>

      <div
        class="expandable"
        part="expandable"
      >
        <div
          class="content"
          id="content"
          part="content"
          role="region"
          aria-labelledby="header"
        >
          <slot></slot>
        </div>
      </div>
    `}dispatchExpandEvent(){this.dispatchEvent(new ie({bubbles:!0,cancelable:!1,composed:!0}))}dispatchCollapseEvent(){this.dispatchEvent(new oe({bubbles:!0,cancelable:!1,composed:!0}))}};function he(t){let e="expanded"in t,i="expand"in t&&"function"==typeof t.expand,o="collapse"in t&&"function"==typeof t.collapse;e||Xt(t,"Accordion item must implement the `KTGCdkAccordionItem` interface (missing `expanded` property)."),i||Xt(t,"Accordion item must implement the `KTGCdkAccordionItem` interface (missing `expand` method)."),o||Xt(t,"Accordion item must implement the `KTGCdkAccordionItem` interface (missing `collapse` method).")}i(de,"KTGCdkAccordionItemElement"),de.styles=ce,de.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},o([kt({type:Boolean,reflect:!0})],de.prototype,"expanded",2),o([kt({type:Boolean,reflect:!0})],de.prototype,"disabled",2),o([kt({type:Boolean,reflect:!0,attribute:"no-header-button"})],de.prototype,"noHeaderButton",2),o([Ct(".expandable")],de.prototype,"expandableElement",2),o([Ct(".content")],de.prototype,"contentElement",2),de=o([ft("ktg-cdk-accordion-item")],de),i(he,"warnIfNotImplementsKTGCdkAccordionItem");var ue=[d``],pe=class extends mt{constructor(){super(...arguments),this.singleExpanded=!1}connectedCallback(){super.connectedCallback()}updated(t){super.updated(t),t.has("singleExpanded")&&this.singleExpanded&&this.enforceSingleExpanded()}onExpand(t){if(this.singleExpanded)for(let e of this.items)e!==t.target&&e.collapse?.()}onSlotChange(){this.validateSlottedItems(),this.enforceSingleExpanded()}render(){return j`
      <slot
        @expand=${this.onExpand}
        @slotchange=${this.onSlotChange}
      ></slot>
    `}enforceSingleExpanded(){if(this.singleExpanded){let t=!1;for(let e of this.items)!e.expanded||t?e.expanded=!1:t=!0}}validateSlottedItems(){for(let t of this.items)he(t)}};i(pe,"KTGCdkAccordionElement"),pe.styles=ue,o([kt({type:Boolean,reflect:!0,attribute:"single-expanded"})],pe.prototype,"singleExpanded",2),o([Et({flatten:!0})],pe.prototype,"items",2),pe=o([ft("ktg-cdk-accordion")],pe);var ge=class t{constructor(e=null){this._name="ktg-event-bus-"+ ++t.busIdCounter,this.events=new Map,null!==e&&(this._name=e)}static{i(this,"KTGEventBus")}static{this.busIdCounter=0}static{this.listenerIdCounter=-1}get name(){return this._name}on(e,i,o){let n=this.getListenersWithOptions(e)??new Set,r=++t.listenerIdCounter;return n.add({id:r,listener:i,options:o}),this.events.set(e,n),r}emit(t,e){let i=this.getListenersWithOptions(t);if(i)for(let o of i)o.listener(e),o.options?.once&&i.delete(o),o.options?.log&&this.logEvent(t,e)}logEvent(t,e){console.table({bus:this._name,event:t.toString(),data:e})}off(t,e){"number"==typeof e?this.removeListenerById(t,e):this.removeListenerByCallback(t,e)}removeListenerByCallback(t,e){let i=this.getListenersWithOptions(t);if(i)for(let t of i)t.listener===e&&i.delete(t)}removeListenerById(t,e){let i=this.getListenersWithOptions(t);if(i)for(let t of i)t.id===e&&i.delete(t)}destroy(){for(let t of this.events.values())t.clear();this.events.clear()}getListenersWithOptions(t){return this.events.get(t)??null}},me=class t{constructor(){this._minFractionDigits=null,this._maxFractionDigits=t.MAX_FRACTION_DIGITS,this._fixedFractionDigits=null,this._style="decimal",this._unit=null}static{i(this,"KTGNumberFormatter")}static{this.LOCALE="de-CH"}static{this.CURRENCY="CHF"}static{this.MAX_FRACTION_DIGITS=100}withMinFractionDigits(e){return this._minFractionDigits=null===e?null:Bt(e,0,t.MAX_FRACTION_DIGITS),this}withMaxFractionDigits(e){return this._maxFractionDigits=Bt(e,0,t.MAX_FRACTION_DIGITS),this}withFixedFractionDigits(e){return this._fixedFractionDigits=Bt(e,0,t.MAX_FRACTION_DIGITS),this}withStyle(t){return this._style=t,this}asDecimal(){return this.withStyle("decimal"),this}asPercentage(){return this.withStyle("percent"),this}asCurrency(){return this.withStyle("currency"),this}asUnit(t){return this.withStyle("unit"),this._unit=t,this}format(e){return e.toLocaleString(t.LOCALE,this.resolveOptions())}resolveOptions(){let e={currency:t.CURRENCY};return null!==this._fixedFractionDigits?(e.minimumFractionDigits=this._fixedFractionDigits,e.maximumFractionDigits=this._fixedFractionDigits):(null!==this._minFractionDigits&&(e.minimumFractionDigits=this._minFractionDigits),null!==this._maxFractionDigits&&(e.maximumFractionDigits=this._maxFractionDigits)),e.style=this._style,"unit"===this._style&&null!==this._unit&&(e.unit=this._unit),e}},ve=(class t{constructor(){this.numberFormatter=new me}static{i(this,"KTGBytesFormatter")}static{this.BYTES_PER_KILOBYTE=1e3}static{this.BYTES_PER_MEGABYTE=1e6}static{this.BYTES_PER_GIGABYTE=1e9}static{this.BYTES_PER_TERABYTE=1e12}toHumanReadable(e){return this.numberFormatter.withFixedFractionDigits(2),e>=t.BYTES_PER_TERABYTE?this.numberFormatter.asUnit("terabyte").format(this.toTerabytes(e)):e>=t.BYTES_PER_GIGABYTE?this.numberFormatter.asUnit("gigabyte").format(this.toGigabytes(e)):e>=t.BYTES_PER_MEGABYTE?this.numberFormatter.asUnit("megabyte").format(this.toMegabytes(e)):e>=t.BYTES_PER_KILOBYTE?this.numberFormatter.asUnit("kilobyte").format(this.toKilobytes(e)):this.numberFormatter.asUnit("byte").withFixedFractionDigits(0).format(e)}toKilobytes(e){return e/t.BYTES_PER_KILOBYTE}toMegabytes(e){return e/t.BYTES_PER_MEGABYTE}toGigabytes(e){return e/t.BYTES_PER_GIGABYTE}toTerabytes(e){return e/t.BYTES_PER_TERABYTE}},class{constructor(){this.backdrop=null,this.panel=null,this.positioningStrategy=null}static{i(this,"KTGOverlay")}}),fe=[...ae,d`
    :host {
      display: none;
    }

    :host([enabled]) {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgb(var(--ktg-rgb-neutral-05), 0.5);
      pointer-events: all;
    }

    :host([blur]) {
      -webkit-backdrop-filter: blur(var(--ktg-overlay-backdrop-blur, 0.625rem));
      backdrop-filter: blur(var(--ktg-overlay-backdrop-blur, 0.625rem));
    }

    :host([transparent]) {
      background-color: transparent;
    }
  `],be=class extends mt{constructor(){super(...arguments),this.overlay=null,this.enabled=!1,this.isShared=!1,this.sharedKey="",this.shouldBlur=!1,this.transparent=!1,this.closeOnClick=!0,this.onClick=()=>{this.closeOnClick?this.overlay?.handle.close():this.overlay?.handle.backdropClick()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.onClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.onClick)}setOverlay(t){this.overlay=t,this.overlay.backdrop=this,this.overlay.handle.on("close",()=>{this.overlay=null}),this.overlay.request.backdrop&&this.updateConfig(this.overlay.request.backdrop)}async onAttach(){this.style.opacity="0"}async animateIn(){this.transparent||(await Ht.animate(this,{keyframes:[{opacity:0},{opacity:1}],options:{duration:300,easing:"ease-out"}}).finished,this.style.opacity="")}async animateOut(){this.transparent||await Ht.animate(this,{keyframes:[{opacity:1},{opacity:0}],options:{duration:300,easing:"ease-out"}}).finished}updateConfig(t){void 0!==t.enabled&&(this.enabled=t.enabled),void 0!==t.blur&&(this.shouldBlur=t.blur),void 0!==t.transparent&&(this.transparent=t.transparent),void 0!==t.closeOnClick&&(this.closeOnClick=t.closeOnClick),t.sharedKey&&(this.isShared=!0,this.sharedKey=t.sharedKey),t.additionalClasses?this.className=t.additionalClasses:this.className=""}render(){return j``}};i(be,"KTGOverlayBackdropElement"),be.styles=fe,o([kt({type:Boolean,reflect:!0})],be.prototype,"enabled",2),o([kt({type:Boolean,reflect:!0,attribute:"is-shared"})],be.prototype,"isShared",2),o([kt({type:String,attribute:"shared-key"})],be.prototype,"sharedKey",2),o([kt({type:Boolean,reflect:!0,attribute:"blur"})],be.prototype,"shouldBlur",2),o([kt({type:Boolean,reflect:!0})],be.prototype,"transparent",2),o([kt({type:Boolean,reflect:!0,attribute:"close-on-click"})],be.prototype,"closeOnClick",2),be=o([ft("ktg-overlay-backdrop")],be);var ye=class{constructor(t){this.overlay=t,this.eventBus=new ge,this._result=null,this.overlay.handle=this,this._isOpen=!0}static{i(this,"KTGOverlayHandle")}get isOpen(){return this._isOpen}get result(){return this._result}setResult(t){this._result=t}close(){this._isOpen&&(this._isOpen=!1,this.overlay.outlet.close(this.overlay),this.eventBus.emit("close",this._result),this._result=null,this.eventBus.destroy())}backdropClick(){this.eventBus.emit("backdropClick")}on(t,e,i){return this.eventBus.on(t,e,i)}off(t,e){this.eventBus.off(t,e)}},ke=class extends Event{static{i(this,"s")}constructor(t,e,i){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=i??!1}},we=class{static{i(this,"s")}constructor(t,e,i,o){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){let t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=i,this.subscribe=o??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new ke(this.context,this.t,this.subscribe))}},_e=class{static{i(this,"s")}get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){let i=e||!Object.is(t,this.o);this.o=t,i&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(let[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,i){if(!i)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});let{disposer:o}=this.subscriptions.get(t);t(this.value,o)}clearCallbacks(){this.subscriptions.clear()}},xe=class extends Event{static{i(this,"e")}constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}},Ce=class extends _e{static{i(this,"i")}constructor(t,e,i){super(void 0!==e.context?e.initialValue:i),this.onContextRequest=t=>{let e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{let e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;let i=new Set;for(let[t,{consumerHost:e}]of this.subscriptions)i.has(t)||(i.add(t),e.dispatchEvent(new ke(this.context,t,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new xe(this.context))}};function Se({context:t}){return(e,i)=>{let o=new WeakMap;if("object"==typeof i)return i.addInitializer(function(){o.set(this,new Ce(this,{context:t}))}),{get(){return e.get.call(this)},set(t){return o.get(this)?.setValue(t),e.set.call(this,t)},init(t){return o.get(this)?.setValue(t),t}};{e.constructor.addInitializer(e=>{o.set(e,new Ce(e,{context:t}))});let n,r=Object.getOwnPropertyDescriptor(e,i);if(void 0===r){let t=new WeakMap;n={get(){return t.get(this)},set(e){o.get(this).setValue(e),t.set(this,e)},configurable:!0,enumerable:!0}}else{let t=r.set;n={...r,set(e){o.get(this).setValue(e),t?.call(this,e)}}}return void Object.defineProperty(e,i,n)}}}function Ee({context:t,subscribe:e}){return(i,o)=>{"object"==typeof o?o.addInitializer(function(){new we(this,{context:t,callback:t=>{i.set.call(this,t)},subscribe:e})}):i.constructor.addInitializer(i=>{new we(i,{context:t,callback:t=>{i[o]=t},subscribe:e})})}}i(Se,"e"),i(Ee,"c");var Te="ktg-overlay-outlet-name-context";async function Ie(){return new Promise(t=>{window.requestAnimationFrame(t)})}i(Ie,"ktgNextFrame");var $e=class{constructor(){this.startTime=-1,this.lastTime=0,this.animationFrameId=null,this.eventBus=new ge,this._isPlaying=!1,this._frameRate={rate:60,interval:1e3/60,now:0,then:0,elapsed:0},this.animationFrameId=window.requestAnimationFrame(this.update.bind(this))}static{i(this,"KTGRenderLoop")}get isPlaying(){return this._isPlaying}set frameRate(t){this._frameRate.rate=t,this._frameRate.interval=1e3/t}get frameRate(){return this._frameRate.rate}play(){this._isPlaying=!0}pause(){this._isPlaying=!1}update(t){-1===this.startTime&&(this.startTime=t),this._frameRate.now=performance.now(),this._frameRate.elapsed=this._frameRate.now-this._frameRate.then;let e=t-this.startTime,i=e-this.lastTime;this.lastTime=e,this._isPlaying?this._frameRate.elapsed>this._frameRate.interval&&(this._frameRate.then=this._frameRate.now-this._frameRate.elapsed%this._frameRate.elapsed,this.updateRunning(i)):this.updateIdle(i),this.animationFrameId=window.requestAnimationFrame(this.update.bind(this))}updateRunning(t){this.eventBus.emit("update",t)}updateIdle(t){this.lastTime+=t}on(t,e,i){return this.eventBus.on(t,e,i)}off(t,e){this.eventBus.off(t,e)}destroy(){this._isPlaying=!1,this.animationFrameId&&window.cancelAnimationFrame(this.animationFrameId),this.eventBus.destroy()}},Oe=class{static{i(this,"KTGServiceLocator")}static{this.services=new WeakMap}static provide(t,e){this.services.set(t,e)}static get(t){return this.services.get(t)}};function Le(t){Oe.provide(t,new t),window[t.name]=t}function De(t){return(e,i)=>{e[i]=Oe.get(t)}}window.ktgServiceLocator=Oe,i(Le,"service"),i(De,"getService");var Ae=class{constructor(){this.idCounter=-1,this.zIndex=-1,this.outlets=new Map}static{i(this,"KTGOverlaysState")}nextId(){return++this.idCounter}nextZIndex(){return++this.zIndex}registerOutlet(t,e){this.outlets.set(t,e)}unregisterOutlet(t){this.outlets.delete(t)}getOutlet(t="default"){return this.outlets.get(t)??null}getOutlets(){return Array.from(this.outlets.values())}},Me=class{constructor(){this.state=new Ae}registerOutlet(t,e){this.state.registerOutlet(t,e)}unregisterOutlet(t){let e=this.state.getOutlet(t);e?.closeAll(),e?.remove(),this.state.unregisterOutlet(t)}getOrCreateOutlet(t=Me.OUTLETS.DEFAULT){let e=this.state.getOutlet(t);return e||(e=this.createOutlet(t),this.registerOutlet(t,e),document.body.append(e)),e}createOutlet(t){let e=document.createElement("ktg-overlay-outlet");return e.name=t,e}open(t){let e=new ve;e.id=this.state.nextId(),e.initialZIndex=this.nextZIndex(),e.request=t,e.element=t.element;let i=new ye(e);this.openInOutlet(e,t.outlet),e.element.setOverlay?.(e);let o=t.positioning?.(e);return e.positioningStrategy=o??null,o?.start?.(),i}openInOutlet(t,e){this.getOrCreateOutlet(e).open(t)}closeAll(t){if(t)this.state.getOutlet(t)?.closeAll();else for(let t of this.state.getOutlets())t.closeAll()}nextZIndex(){return this.state.nextZIndex()}};i(Me,"KTGOverlayService"),Me.OUTLETS={DEFAULT:"default",ABOVE_MAIN_NAVIGATION:"above-main-navigation"},Me=o([Le],Me);var Be=class{constructor(t){this.key=t,this.overlays=[],this.element=document.createElement("ktg-overlay-backdrop")}static{i(this,"KTGOverlayBackdrop")}addOverlay(t){this.overlays.push(t),this.updateBackdrop()}removeOverlay(t){let e=this.overlays.findIndex(e=>e.id===t);-1!==e&&this.overlays.splice(e,1),this.updateBackdrop()}getOverlays(){return Array.from(this.overlays)}hasNoOverlays(){return 0===this.overlays.length}updateBackdrop(){let t=this.getOverlays().pop();t&&t.request.backdrop&&this.element.setOverlay(t)}},ze=class{constructor(){this.overlays=new Map,this.backdrops=new Map}static{i(this,"KTGOverlayOutletState")}addOverlay(t,e){this.overlays.set(t,e)}removeOverlay(t){this.overlays.delete(t)}getOverlay(t){return this.overlays.get(t)??null}getOverlays(){return Array.from(this.overlays.values())}addBackdrop(t){let e=new Be(t);return this.backdrops.set(t,e),e}removeBackdrop(t){this.backdrops.delete(t)}getBackdrop(t){return this.backdrops.get(t)??null}};re([d`
    :root {
      --ktg-overlay-y-offset-small: 137px;
      --ktg-overlay-y-offset-large: 169px;
    }

    ktg-overlay-outlet {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: clip;
      z-index: var(--ktg-layer-overlay);
      container-type: size;
    }

    ktg-overlay-outlet[name='above-main-navigation'] {
      z-index: var(--ktg-layer-above-main-navigation);
    }

    .ktg-overlay-panel {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .ktg-overlay-panel > * {
      pointer-events: all;
    }
  `]);var Ne=class extends mt{constructor(){super(...arguments),this.state=new ze,this.name="default"}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.overlayService?.registerOutlet(this.name,this)}disconnectedCallback(){super.disconnectedCallback(),this.overlayService?.unregisterOutlet(this.name)}async open(t){t.outlet=this,this.createPanel(t);let{hasCreatedBackdrop:e}=this.createBackdrop(t),i=null;e&&(i=t.backdrop?.onAttach()??null),await Promise.all([i,t.element.onAttach?.()]),await Ie(),await(t.element.afterAttach?.());let o=null;e&&(o=t.backdrop?.animateIn()??null),await Promise.all([o,t.element.animateIn?.()])}createPanel(t){let e=document.createElement("div");e.classList.add("ktg-overlay-panel"),t.request.panel?.pointerEvents&&(e.style.pointerEvents=t.request.panel.pointerEvents),t.request.panel?.additionalClasses&&e.classList.add(...t.request.panel.additionalClasses.split(/\s/)),e.style.zIndex=`${t.initialZIndex}`,e.appendChild(t.element),this.appendChild(e),t.panel=e,this.state.addOverlay(t.id,t)}createBackdrop(t){let e=t.request.backdrop;if(!e||!e.enabled)return{hasCreatedBackdrop:!1};let i=e.sharedKey??t.id,o=this.state.getBackdrop(i),n=!1;return o||(o=this.state.addBackdrop(i),o.element.style.zIndex=`${t.initialZIndex}`,n=!0),o.addOverlay(t),n&&t.panel?.parentElement?.insertBefore(o.element,t.panel),{hasCreatedBackdrop:n}}async close(t){await(t.element.beforeDetach?.()),t.element.animateOut||t.panel?.remove();let e=t.request.backdrop?.sharedKey??t.id,i=this.state.getBackdrop(e),o=null;i&&(i.removeOverlay(t.id),i.hasNoOverlays()&&(o=i.element.animateOut(),this.state.removeBackdrop(e))),await Promise.all([o?.then(()=>i?.element.remove()),t.element.animateOut?.().then(()=>t.panel?.remove())]),this.state.removeOverlay(t.id),await(t.element.onDetach?.())}closeAll(){for(let t of this.state.getOverlays())this.close(t)}};function Re(t){let e="center",i="center";return e="bottom"===t.overlayY&&"top"===t.originY?"top":"right"===t.overlayX&&"left"===t.originX?"left":"top"===t.overlayY&&"bottom"===t.originY?"bottom":"left"===t.overlayX&&"right"===t.originX?"right":"center",("top"===e||"bottom"===e)&&(i="left"===t.overlayX?"left":"right"===t.overlayX?"right":"center"),("left"===e||"right"===e)&&(i="top"===t.overlayY?"top":"bottom"===t.overlayY?"bottom":"center"),{position:e,alignment:i}}i(Ne,"KTGOverlayOutletElement"),o([De(Me)],Ne.prototype,"overlayService",2),o([Se({context:Te}),kt({type:String,reflect:!0})],Ne.prototype,"name",2),Ne=o([ft("ktg-overlay-outlet")],Ne),i(Re,"getRelativeOverlayPositionAndAlignment");var Pe=class{constructor(){this.sameWidthAsOrigin=!1,this.minWidthOfOrigin=!1,this.width="",this.maxWidth="",this.minWidth="",this.offsetFromOrigin=0,this.alignmentOffset=Vt.new(),this.viewportMargin=Vt.new(),this.forceOntoScreen=!1,this.shrinkToFit=!1,this.origin=null,this.anchor=Vt.new(),this.afterRender=null,this.positions=[{originX:"center",originY:"bottom",overlayX:"center",overlayY:"top"},{originX:"center",originY:"top",overlayX:"center",overlayY:"bottom"},{originX:"right",originY:"center",overlayX:"left",overlayY:"center"},{originX:"left",originY:"center",overlayX:"right",overlayY:"center"}]}static{i(this,"KTGConnectedPositioningStrategyConfig")}},Fe=class{constructor(t){this.overlay=t,this.config=new Pe,this.intersectionObserver=null,this.previousRoundedOriginRect=Ft.new(),this.roundedOriginRect=Ft.new(),this.originRect=Ft.new(),this.previousIsOriginVisible=!1,this.isOriginVisible=!0,this.previousRoundedOverlayRect=Ft.new(),this.roundedOverlayRect=Ft.new(),this.overlayRect=Ft.new(),this.previousViewportRect=Ft.new(),this.viewportRect=Ft.new(),this.shouldForceRerender=!1,this.loop=()=>{if(this.updateRenderedOverlayDimensions(),this.updateOriginRect(),this.updateViewportRect(),this.shouldForceRerender||this.haveOverlayDimensionsChanged()||this.hasOriginPositionChanged()||this.hasViewportRectChanged()){this.clearOverlayStyles();let t=this.render();this.config.afterRender?.(t)}this.shouldForceRerender=!1,this.overlay.handle.isOpen||(this.renderLoop.destroy(),this.intersectionObserver?.disconnect())},this.overlayElement=this.overlay.element,this.renderLoop=new $e,this.renderLoop.on("update",this.loop)}static{i(this,"KTGConnectedPositioningStrategy")}withOrigin(t){let e=this.config.origin;return this.config.origin=t,e&&this.intersectionObserver?.disconnect(),this.config.origin&&(this.intersectionObserver=new IntersectionObserver(t=>{this.isOriginVisible=t[0].isIntersecting,this.rerender()}),this.intersectionObserver.observe(this.config.origin)),this.rerender(),this}withSameWidthAsOrigin(t=!0){return this.config.sameWidthAsOrigin=t,this.rerender(),this}width(t){return this.config.width=t,this.rerender(),this}maxWidth(t){return this.config.maxWidth=t,this.rerender(),this}minWidth(t){return this.config.minWidth=t,this.rerender(),this}withMinWidthOfOrigin(t=!0){return this.config.minWidthOfOrigin=t,this.rerender(),this}shrinkToFit(t=!0){return this.config.shrinkToFit=t,this.rerender(),this}offsetFromOrigin(t){return this.config.offsetFromOrigin=t,this.rerender(),this}alignmentOffsetX(t){return this.config.alignmentOffset.x=t,this.rerender(),this}alignmentOffsetY(t){return this.config.alignmentOffset.y=t,this.rerender(),this}anchorX(t){return this.config.anchor.x=t,this.rerender(),this}anchorY(t){return this.config.anchor.y=t,this.rerender(),this}anchor(t){return this.config.anchor=Vt.clone(t),this.rerender(),this}viewportMarginX(t){return this.config.viewportMargin.x=t,this.rerender(),this}viewportMarginY(t){return this.config.viewportMargin.y=t,this.rerender(),this}positions(t){return this.config.positions=t,this.rerender(),this}forceOntoScreen(t=!0){return this.config.forceOntoScreen=t,this.rerender(),this}afterRender(t){return this.config.afterRender=t,this.rerender(),this}start(){this.setInitialStyles(),this.renderLoop.play()}rerender(){this.shouldForceRerender=!0}setInitialStyles(){this.overlayElement.style.position="fixed"}updateRenderedOverlayDimensions(){this.previousRoundedOverlayRect=this.roundedOverlayRect,this.overlayRect=this.overlayElement.getBoundingClientRect(),this.roundedOverlayRect=Ft.round(this.overlayRect)}updateOriginRect(){this.previousRoundedOriginRect=this.roundedOriginRect,this.config.origin?this.originRect=this.config.origin.getBoundingClientRect():this.originRect=Ft.new({...this.config.anchor,width:1,height:1}),this.roundedOriginRect=Ft.round(this.originRect)}updateViewportRect(){Ft.copyInto(this.viewportRect,this.previousViewportRect);let t=Ft.viewport(),e=Ft.insetXY(t,this.config.viewportMargin.x,this.config.viewportMargin.y);this.viewportRect=e}haveOverlayDimensionsChanged(){return!Ft.equals(this.roundedOverlayRect,this.previousRoundedOverlayRect)}hasOriginPositionChanged(){return!Ft.equals(this.roundedOriginRect,this.previousRoundedOriginRect)}hasViewportRectChanged(){return!Ft.equals(this.viewportRect,this.previousViewportRect)}clearOverlayStyles(){this.overlayElement.style.top="",this.overlayElement.style.left="",this.overlayElement.style.width="",this.overlayElement.style.height="",this.overlayElement.style.minWidth="",this.overlayElement.style.minHeight="",this.overlayElement.style.maxWidth="",this.overlayElement.style.maxHeight=""}render(){this.updateOverlayWidthBasedOnConfig();let t=Re(this.config.positions[0]),e=t,i=Ft.new(this.roundedOverlayRect),o=!1;for(let t of this.config.positions){e=Re(t),i=this.getTargetRect(t,e,this.roundedOriginRect,this.roundedOverlayRect);let n=this.isRectCompletelyInViewport(i),r=this.isRectOverlappingWithOrigin(i);if(n&&!r){i=Ft.clone(i),o=!0;break}}let n=!1;if(!o){let o=t,r=Ft.clip(this.roundedOverlayRect,this.viewportRect);for(let t of this.config.positions){o=Re(t);let e=this.getTargetRect(t,o,this.roundedOriginRect,this.roundedOverlayRect);if(this.config.forceOntoScreen){let t=this.forceRectOntoScreen(e);e=t.rect,n=t.wasForcedOntoScreen}if(this.config.shrinkToFit&&(e=Ft.clip(e,this.viewportRect)),!this.isRectOverlappingWithOrigin(e)){r=e;break}}this.config.shrinkToFit&&(this.overlayElement.style.maxWidth=`${r.width}px`,this.overlayElement.style.maxHeight=`${r.height}px`),i=r,e=o}return this.overlayElement.style.left=`${i.x}px`,this.overlayElement.style.top=`${i.y}px`,this.updateRenderedOverlayDimensions(),this.updateOriginRect(),{relativePositionAndAlignment:e,originRect:this.originRect,roundedOriginRect:this.roundedOriginRect,isOriginVisible:this.isOriginVisible,overlayRect:this.overlayRect,roundedOverlayRect:this.roundedOverlayRect,wasForcedOntoScreen:n}}updateOverlayWidthBasedOnConfig(){let t=this.config.width,e=this.config.minWidth,i=this.config.maxWidth;this.config.sameWidthAsOrigin?t=`${this.roundedOriginRect.width}px`:this.config.minWidthOfOrigin?e=`${this.roundedOriginRect.width}px`:t=this.config.width,this.overlayElement.style.width=t,this.overlayElement.style.minWidth=e,this.overlayElement.style.maxWidth=i,this.updateRenderedOverlayDimensions()}getTargetRect(t,e,i,o){let n=this.getOffsets(e),r=Ft.clone(o);switch(t.originX){case"left":r.x=Ft.left(i)+n.fromOrigin.x;break;case"center":r.x=Ft.centerX(i);break;case"right":r.x=Ft.right(i)+n.fromOrigin.x}switch(t.originY){case"top":r.y=Ft.top(i)+n.fromOrigin.y;break;case"center":r.y=Ft.centerY(i);break;case"bottom":r.y=Ft.bottom(i)+n.fromOrigin.y}switch(t.overlayX){case"left":r.x+=n.alignment.x;break;case"center":r.x-=.5*o.width;break;case"right":r.x=r.x-o.width+n.alignment.x}switch(t.overlayY){case"top":r.y+=n.alignment.y;break;case"center":r.y-=.5*o.height;break;case"bottom":r.y=r.y-o.height+n.alignment.y}return r}getOffsets({position:t,alignment:e}){let i={fromOrigin:{x:0,y:0},alignment:{x:0,y:0}};switch(t){case"left":i.fromOrigin.x=-this.config.offsetFromOrigin;break;case"right":i.fromOrigin.x=this.config.offsetFromOrigin;break;case"top":i.fromOrigin.y=-this.config.offsetFromOrigin;break;case"bottom":i.fromOrigin.y=this.config.offsetFromOrigin}switch(e){case"left":i.alignment.x=-this.config.alignmentOffset.x;break;case"top":i.alignment.y=-this.config.alignmentOffset.y;break;case"right":i.alignment.x=this.config.alignmentOffset.x;break;case"bottom":i.alignment.y=this.config.alignmentOffset.y}return i}forceRectOntoScreen(t){let e=!1,i=Ft.clone(t);return Ft.left(t)<Ft.left(this.viewportRect)?(i.x=this.viewportRect.x,e=!0):Ft.right(t)>Ft.right(this.viewportRect)&&(i.x=Ft.right(this.viewportRect)-t.width,e=!0),Ft.top(t)<Ft.top(this.viewportRect)?(i.y=this.viewportRect.y,e=!0):Ft.bottom(t)>Ft.bottom(this.viewportRect)&&(i.y=Ft.bottom(this.viewportRect)-t.height,e=!0),{wasForcedOntoScreen:e,rect:i}}isRectCompletelyInViewport(t){return Ft.isInsideOther(t,this.viewportRect)}isRectOverlappingWithOrigin(t){return Ft.areColliding(t,this.roundedOriginRect)}},Ve=class{static{i(this,"KTGOverlayNoopPositioningStrategy")}},Ke=672,He=1056,Ge=1312,Ue=1696,We=(class t{constructor(){this._identifyBy=t=>t,this.eventBus=new ge("ktg-selection-model-"+ ++t.idCounter),this._selectedItems=[]}static{i(this,"KTGSelectionModel")}static{this.idCounter=-1}get selectedItems(){return this._selectedItems}identifyBy(t){return this._identifyBy=t,this}toggle(t,e){let i=this.isSelected(t);void 0!==e?e&&!i?this.select(t):!e&&i&&this.deselect(t):i?this.deselect(t):this.select(t)}select(t){this.addToSelection(t),this.eventBus.emit("change")}deselect(t){this.removeFromSelection(t),this.eventBus.emit("change")}clear(){this.clearSelection(),this.eventBus.emit("change")}selectMultiple(t){for(let e of t)this.addToSelection(e);this.eventBus.emit("change")}deselectMultiple(t){for(let e of t)this.removeFromSelection(e);this.eventBus.emit("change")}moveItemToIndex(t,e){let i=this.findIndex(t);if(-1===i)return;let[o]=this._selectedItems.splice(i,1);this._selectedItems.splice(e,0,o),this.eventBus.emit("change")}sort(t){this._selectedItems.sort(t),this.eventBus.emit("change")}isSelected(t){return this.findIndex(t)>-1}destroy(){this.eventBus.destroy(),this.clearSelection()}addToSelection(t){this.isSelected(t)||this._selectedItems.push(t)}removeFromSelection(t){let e=this.findIndex(t);e>-1&&this._selectedItems.splice(e,1)}clearSelection(){this._selectedItems=[]}findIndex(t){let e=this._identifyBy(t);return this._selectedItems.findIndex(t=>this._identifyBy(t)===e)}on(t,e,i){return this.eventBus.on(t,e,i)}off(t,e){this.eventBus.off(t,e)}get hasSelection(){return this._selectedItems.length>0}get hasSingleSelection(){return 1===this._selectedItems.length}get hasMultipleSelection(){return this._selectedItems.length>1}get selectionCount(){return this._selectedItems.length}},class extends ie{static{i(this,"KTGAccordionItemExpandEvent")}}),Ye=class extends oe{static{i(this,"KTGAccordionItemCollapseEvent")}},qe=[...ae,...ne,d`
    :host {
      display: block;
    }

    .accordion-item {
      display: block;
      color: var(--ktg-color-text);
    }

    .accordion-item__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      width: 100%;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      border-bottom: 0.0625rem solid
        var(--ktg-accordion-item-border, var(--ktg-color-neutral-02));
      text-align: start;
      cursor: pointer;
    }

    :host([disabled]) .accordion-item__header {
      cursor: default;
    }

    @media screen and (min-width: ${Ke}px) {
      .accordion-item__header {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }

    .accordion-item__header:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
    }

    :host([size='small']) .accordion-item__header {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    :host([size='medium']) .accordion-item__header {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    :host([size='large']) .accordion-item__header {
      padding-top: 1rem;
      padding-right: 0;
      padding-bottom: 1rem;
    }

    :host([expanded]) .accordion-item__header {
      --ktg-accordion-item-border: transparent;
    }

    .accordion-item__title {
      line-height: 100%;
    }

    :host([size='small']) .accordion-item__title {
      font-size: 0.875rem;
    }

    :host([size='medium']) .accordion-item__title {
      font-size: calc(var(--ktg-font-size-t) * (1.25 - 0.875) + 0.875rem);
    }

    :host([size='large']) .accordion-item__title {
      font-size: calc(var(--ktg-font-size-t) * (1.5 - 0.875) + 0.875rem);
    }

    :host([disabled]) .accordion-item__title {
      color: var(--ktg-color-neutral-03);
    }

    .accordion-item__icon {
      flex-shrink: 0;
      color: var(--ktg-color-link);
      transition: transform 0.2s ease-out;
    }

    @media (prefers-reduced-motion: reduce) {
      .accordion-item__icon {
        transition: none;
      }
    }

    :host([expanded]) .accordion-item__icon {
      transform: rotate(180deg);
    }

    :host([disabled]) .accordion-item__icon {
      color: var(--ktg-color-neutral-03);
    }

    .accordion-item__content {
      padding-top: 0.5rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 1.5rem;
    }

    :host([size='small']) .accordion-item__content {
      font-size: 0.875rem;
    }

    :host([size='medium']) .accordion-item__content {
      font-size: 0.875rem;
    }

    :host([size='large']) .accordion-item__content {
      font-size: 1rem;
    }

    :host([disabled]) .accordion-item__content {
      color: var(--ktg-color-neutral-03);
    }

    @media (min-width: ${Ke}px) {
      .accordion-item__content {
        padding-top: 1rem;
        padding-left: 1rem;
        padding-right: 6rem;
        padding-bottom: 2.5rem;
      }

      :host([no-padding]) .accordion-item__content {
        padding-right: 1rem;
      }
    }
  `],je=i(t=>(...e)=>({_$litDirective$:t,values:e}),"e"),Ze=class{static{i(this,"i")}constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},Xe=class extends Ze{static{i(this,"e")}constructor(t){if(super(t),this.it=J,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===J||null==t)return this._t=void 0,this.it=t;if(t===X)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Xe.directiveName="unsafeHTML",Xe.resultType=1,je(Xe);var Je=class extends Xe{static{i(this,"t")}};Je.directiveName="unsafeSVG",Je.resultType=2;var Qe=je(Je),ti=[...ae,d`
    :host {
      display: inline-flex;
      width: var(--ktg-icon-size, 1rem);
      height: var(--ktg-icon-size, 1rem);
      overflow: hidden;
    }

    :host([size='small']) {
      width: var(--ktg-icon-size, 0.75rem);
      height: var(--ktg-icon-size, 0.75rem);
    }

    svg {
      width: 100%;
      height: 100%;
    }

    svg * {
      fill: currentColor;
    }

    .loading-spinner {
      animation: spin 750ms linear infinite;
      position: relative;
      width: 100%;
      height: 100%;
    }

    @media (prefers-reduced-motion: reduce) {
      .loading-spinner {
        /* NOTE: three times slowdown should be less of an issue for users
         * that prefer reduced motion
         */
        animation: spin 2250ms linear infinite;
      }
    }

    .loading-spinner > svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `],ei={activities:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M6.003 2.115 5 1 2.168 3.548 1.003 2.5 0 3.615l2.168 1.951zm0 5L5 6 2.168 8.548 1.003 7.5 0 8.615l2.168 1.951zM16 4.307H6.502v-1.5H16zm-9.498 5H16v-1.5H6.502zM16 14.308H6.502v-1.5H16zm-14.498 0h2v-1.5h-2z"/></svg>'},"arrow-down":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M7.25 11.19V2.5h1.5v8.69l3.72-3.72 1.06 1.06L8 14.06 2.47 8.53l1.06-1.06z" clip-rule="evenodd"/></svg>'},"arrow-left":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M4.56 7.5h8.69V9H4.56l3.72 3.72-1.06 1.06-5.53-5.53 5.53-5.53 1.06 1.06z" clip-rule="evenodd"/></svg>'},"arrow-reload":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M5.03 10.97A4.2 4.2 0 0 1 8 3.8V2.3a5.7 5.7 0 1 0 5.21 3.386l1.199.3.363-1.456-3.83-.956-.956 3.83 1.455.363.379-1.515A4.2 4.2 0 0 1 12.2 8a4.2 4.2 0 0 1-7.17 2.97"/></svg>'},"arrow-right":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M11.44 7.5H2.75V9h8.69l-3.72 3.72 1.06 1.06 5.53-5.53-5.53-5.53-1.06 1.06z" clip-rule="evenodd"/></svg>'},"arrow-swap":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M3.818 7.604A4.2 4.2 0 0 1 10.1 4.363l.75-1.3a5.702 5.702 0 0 0-8.52 4.334l-.887-.857L.4 7.619l2.839 2.743 2.743-2.839-1.079-1.042zM14.557 9.46l-.888-.858a5.71 5.71 0 0 1-4.194 4.903 5.68 5.68 0 0 1-4.325-.569l.75-1.299c.932.538 2.067.72 3.187.42a4.2 4.2 0 0 0 3.095-3.66l-1.085 1.122-1.079-1.042 2.743-2.839L15.6 8.381z"/></svg>'},"arrow-up":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M8.75 4.81v8.69h-1.5V4.81L3.53 8.53 2.47 7.47 8 1.94l5.53 5.53-1.06 1.06z" clip-rule="evenodd"/></svg>'},"bubble-communicate":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path fill="#333" fill-rule="evenodd" d="M9.5 10.5v2.879l2.879-2.879H14a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5zM13 12h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6v2.586c0 .89 1.077 1.337 1.707.707z" clip-rule="evenodd"/></svg>'},"bubble-correct":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M9.5 10.5v2.879l2.879-2.879H14a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5zM13 12h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6v2.586c0 .89 1.077 1.337 1.707.707z" clip-rule="evenodd"/><path fill="#333" fill-rule="evenodd" d="m10.72 3.409 1.06 1.06L7.25 9 4.72 6.47l1.06-1.061 1.47 1.47z" clip-rule="evenodd"/></svg>'},"bubble-empty":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M9.5 10.5v2.879l2.879-2.879H14a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5zM13 12h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6v2.586c0 .89 1.077 1.337 1.707.707z" clip-rule="evenodd"/></svg>'},"bubble-question":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M9.5 10.5v2.879l2.879-2.879H14a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5zM13 12h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6v2.586c0 .89 1.077 1.337 1.707.707z" clip-rule="evenodd"/><path fill="#333" d="M7.599 7.292V7.09q0-.309.065-.57.075-.26.223-.481.149-.222.484-.53.157-.145.288-.28.14-.135.214-.29a.8.8 0 0 0 .083-.356q0-.28-.176-.434-.168-.155-.465-.155-.65 0-.763.762L6 4.592q.12-1.012.744-1.552.623-.54 1.673-.54 1.042 0 1.645.492.605.482.605 1.32 0 .425-.168.772-.158.347-.511.714-.483.501-.632.684a1.2 1.2 0 0 0-.186.318q-.037.135-.037.367v.125zM7.57 9.5V7.832h1.571V9.5z"/></svg>'},"bubble-statement":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M9.5 10.5v2.879l2.879-2.879H14a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5zM13 12h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6v2.586c0 .89 1.077 1.337 1.707.707z" clip-rule="evenodd"/><path fill="#333" d="M7.183 7.076 7 3h2l-.183 4.076zM7.143 9V7.546h1.715V9z"/></svg>'},"bubble-wrong":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M9.5 10.5v2.879l2.879-2.879H14a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5zM13 12h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6v2.586c0 .89 1.077 1.337 1.707.707z" clip-rule="evenodd"/><path fill="#333" fill-rule="evenodd" d="m9.47 8.53-4-4 1.06-1.06 4 4z" clip-rule="evenodd"/><path fill="#333" fill-rule="evenodd" d="m10.53 4.53-4 4-1.06-1.06 4-4z" clip-rule="evenodd"/></svg>'},calendar:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h1.25V1h1.5v1h6.5V1h1.5v1H14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm3.25-.5V5h1.5V3.5h6.5V5h1.5V3.5H14a.5.5 0 0 1 .5.5v2.25h-13V4a.5.5 0 0 1 .5-.5zM14.5 7.75V14a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7.75z" clip-rule="evenodd"/></svg>'},"cart-active":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none" viewBox="0 0 17 16"><path fill="#333" fill-rule="evenodd" d="M2.46 2.75H0v-1.5h3.54l.334 1H15.46l-1.875 7.5H4.43L2.616 3.22zm1.86 1 1.25 4.5h6.844l1.125-4.5zM3.25 12.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m2.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m6-1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m-.75 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0" clip-rule="evenodd"/><circle cx="14" cy="3" r="3" fill="#F24822"/></svg>'},"cart-full":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M2.46 2.75H0v-1.5h3.54l.334 1H15.46l-1.875 7.5H4.43L2.616 3.22zm1.86 1 1.25 4.5h6.844l1.125-4.5zM3.25 12.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m2.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m6-1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m-.75 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0" clip-rule="evenodd"/><path fill="#333" d="m5.57 8.25-1.25-4.5h9.22l-1.126 4.5z"/></svg>'},cart:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M2.46 2.75H0v-1.5h3.54l.334 1H15.46l-1.875 7.5H4.43L2.616 3.22zm1.86 1 1.25 4.5h6.844l1.125-4.5zM3.25 12.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m2.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m6-1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m-.75 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0" clip-rule="evenodd"/></svg>'},"check-small":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="m10.47 5.47 1.06 1.06L7 11.06 4.47 8.53l1.06-1.06L7 8.94z" clip-rule="evenodd"/></svg>'},check:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="m13.543 4.517-7.21 7.57-3.876-4.07 1.086-1.034 2.79 2.93 6.124-6.43z" clip-rule="evenodd"/></svg>'},"circle-active":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/><path fill="#333" fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" clip-rule="evenodd"/></svg>'},"circle-checked-small":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m0-1A5 5 0 1 0 8 3a5 5 0 0 0 0 10" clip-rule="evenodd"/><path fill="#333" fill-rule="evenodd" d="m10.47 5.47 1.06 1.06L7 11.06 4.47 8.53l1.06-1.06L7 8.94z" clip-rule="evenodd"/></svg>'},"circle-checked":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="m11.53 6.53-1.06-1.06L7 8.94 5.53 7.47 4.47 8.53 7 11.06z"/><path fill="#333" fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" clip-rule="evenodd"/></svg>'},"circle-default":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"/></svg>'},clip:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M6.95 1.75c-.955 0-1.7.753-1.7 1.647v8.18c0 1.46 1.216 2.673 2.75 2.673s2.75-1.213 2.75-2.674V4.082h1.5v7.494c0 2.32-1.918 4.174-4.25 4.174s-4.25-1.853-4.25-4.174v-8.18C3.75 1.644 5.198.25 6.95.25s3.2 1.393 3.2 3.147v7.875c0 1.186-.978 2.12-2.15 2.12s-2.15-.934-2.15-2.12v-7.19h1.5v7.19c0 .326.275.62.65.62s.65-.293.65-.62V3.397c0-.894-.745-1.647-1.7-1.647" clip-rule="evenodd"/></svg>'},close:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="m8 9.06 3.712 3.713 1.06-1.06L9.062 8l3.712-3.712-1.06-1.061L8 6.939 4.288 3.227l-1.061 1.06L6.939 8l-3.712 3.712 1.06 1.061z"/></svg>'},"copy-duplicate":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 14 14"><path fill="#333" d="M9.25 2.5v2.25h2.25v1.5H9.25V8.5h-1.5V6.25H5.5v-1.5h2.25V2.5z"/><path fill="#333" fill-rule="evenodd" d="M3 0v11h11V0zm9.5 1.5h-8v8h8z" clip-rule="evenodd"/><path fill="#333" d="M1.5 12.5V3.25H0V14h10.75v-1.5z"/></svg>'},creditcard:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M3 10.75h5v-1.5H3z"/><path fill="#333" fill-rule="evenodd" d="M0 12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm14-8.5H2a.5.5 0 0 0-.5.5v1h13V4a.5.5 0 0 0-.5-.5m.5 8.5V8h-13v4a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5" clip-rule="evenodd"/></svg>'},"do-not-edit-pen":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M5.94 7 .47 1.53 1.53.47 7 5.94l5-5L15.06 4l-5 5 5.47 5.47-1.06 1.06L9 10.06l-4.69 4.69H1.25v-3.06zM7 8.06 4.06 11l.94.94L7.94 9zm2-.12L12.94 4 12 3.06 8.06 7zM3.94 13 3 12.06l-.25.25v.94h.94z" clip-rule="evenodd"/></svg>'},"document-error":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="m8 9.44 1.97-1.97 1.06 1.06-1.97 1.97 1.97 1.97-1.06 1.06L8 11.56l-1.97 1.97-1.06-1.06 1.97-1.97-1.97-1.97 1.06-1.06z"/><path fill="#333" fill-rule="evenodd" d="M14 6v10H2V0h6zm-6.75.75V1.5H3.5v13h9V6.75zm3.879-1.5L8.75 2.871V5.25z" clip-rule="evenodd"/></svg>'},"document-ok":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="m11.53 8.53-1.06-1.06L7 10.94 5.53 9.47l-1.06 1.06L7 13.06z"/><path fill="#333" fill-rule="evenodd" d="M14 16V6L8 0H2v16zM7.25 1.5v5.25h5.25v7.75h-9v-13zm1.5 1.371 2.379 2.379H8.75z" clip-rule="evenodd"/></svg>'},document:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M7.25 6.75V1.5H3.5v13h9V6.75zM14 6v10H2V0h6zm-2.871-.75L8.75 2.871V5.25z" clip-rule="evenodd"/></svg>'},download:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M7.25 1v8.19L3.53 5.47 2.47 6.53 8 12.06l5.53-5.53-1.06-1.06-3.72 3.72V1zM16 13.25H0v1.5h16z"/></svg>'},"drag-horizontal":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M13 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M6.5 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m-5 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M13 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-6.5-1.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m-5 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0"/></svg>'},"drag-vertical":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M7 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M5.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M12 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/></svg>'},"dropdown-arrow-down-medium":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="m2.293 6.707 1.414-1.414L8 9.586l4.293-4.293 1.414 1.414L8 12.414z" clip-rule="evenodd"/></svg>'},"dropdown-arrow-down-small":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="m3.47 7.53 1.06-1.06L8 9.94l3.47-3.47 1.06 1.06L8 12.06z" clip-rule="evenodd"/></svg>'},"dropdown-arrow-left-medium":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="m9.146 2.293 1.415 1.414L6.268 8l4.293 4.293-1.415 1.414L3.44 8z" clip-rule="evenodd"/></svg>'},"dropdown-arrow-left-small":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="m9.735 3.47 1.06 1.06L7.326 8l3.47 3.47-1.06 1.06L5.205 8z" clip-rule="evenodd"/></svg>'},"dropdown-arrow-right-medium":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="m6.854 13.707-1.415-1.414L9.732 8 5.44 3.707l1.415-1.414L12.56 8z" clip-rule="evenodd"/></svg>'},"dropdown-arrow-right-small":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="m7.265 3.47-1.06 1.06L9.675 8l-3.47 3.47 1.06 1.06L11.795 8z" clip-rule="evenodd"/></svg>'},"dropdown-arrow-up-medium":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="m13.707 10.293-1.414 1.414L8 7.414l-4.293 4.293-1.414-1.414L8 4.586z" clip-rule="evenodd"/></svg>'},"dropdown-arrow-up-small":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="m3.47 10.47 1.06 1.06L8 8.06l3.47 3.47 1.06-1.06L8 5.94z" clip-rule="evenodd"/></svg>'},"edit-pen":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M12 .94 15.06 4 4.31 14.75H1.25v-3.06zM2.75 12.31v.94h.94l.25-.25-.94-.94zM4.06 11l.94.94L12.94 4 12 3.06z" clip-rule="evenodd"/></svg>'},"eye-invisible":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill="#333" fill-rule="evenodd" d="M3.283 11.656.47 14.47l1.06 1.06 3.162-3.16c1.03.41 2.147.63 3.308.63a8.86 8.86 0 0 0 8-5 8.9 8.9 0 0 0-3.283-3.656L15.53 1.53 14.47.47l-3.162 3.16A8.9 8.9 0 0 0 8 3a8.86 8.86 0 0 0-8 5 8.9 8.9 0 0 0 3.283 3.656m1.095-1.095A7.4 7.4 0 0 1 1.711 8 7.35 7.35 0 0 1 8 4.5a7.5 7.5 0 0 1 2.13.308l-.606.607a3 3 0 0 0-4.109 4.109zm1.491.63A7.5 7.5 0 0 0 8 11.5 7.35 7.35 0 0 0 14.29 8a7.4 7.4 0 0 0-2.668-2.561l-1.037 1.037a3 3 0 0 1-4.109 4.109zM7.611 9.45A1.502 1.502 0 0 0 9.45 7.611zm.778-2.898A1.502 1.502 0 0 0 6.55 8.389z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>'},"eye-visible":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" clip-rule="evenodd"/><path fill="#333" fill-rule="evenodd" d="M8 3a8.86 8.86 0 0 1 8 5 8.86 8.86 0 0 1-8 5 8.86 8.86 0 0 1-8-5 8.86 8.86 0 0 1 8-5m0 1.5A7.35 7.35 0 0 1 14.29 8 7.35 7.35 0 0 1 8 11.5 7.35 7.35 0 0 1 1.71 8 7.35 7.35 0 0 1 8 4.5" clip-rule="evenodd"/></svg>'},"folder-error":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M8.57 3.85 6.285.995H0V15h16V3.853zm5.93 1.503V13.5h-13V5.35zM6.648 3.85H1.5V2.495h4.065z" clip-rule="evenodd"/><path stroke="#333" stroke-width="1.5" d="m10.5 7-5 5m5 0-5-5"/></svg>'},"folder-ok":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="m11.53 7.53-1.06-1.06L7 9.94 5.53 8.47 4.47 9.53 7 12.06z"/><path fill="#333" fill-rule="evenodd" d="M6.286.995 8.569 3.85 16 3.853V15H0V.995zM7.85 5.353l-.002-.003H1.5v8.15h13V5.353zM1.5 3.85h5.148L5.565 2.495H1.5z" clip-rule="evenodd"/></svg>'},folder:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M8.57 3.85 6.285.995H0V15h16V3.853zm-.722 1.5.002.003h6.65V13.5h-13V5.35zm-1.2-1.5H1.5V2.495h4.065z" clip-rule="evenodd"/></svg>'},"heart-active":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M13.727 8.77 8 14 2.273 8.77C1.445 8.091 1 7.107 1 6c0-2.215 1.59-4 3.818-4 1.333 0 2.319.725 3.07 1.431L8 3.538l.072-.074C8.827 2.694 9.825 2 11.182 2 13.409 2 15 3.785 15 6c0 1.108-.51 2.03-1.273 2.77"/></svg>'},heart:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="m8.043 5.666-1.086-1.05C6.253 3.937 5.604 3.5 4.818 3.5 3.513 3.5 2.5 4.517 2.5 6c0 .688.266 1.235.723 1.608l.031.026L8 11.97l4.699-4.292c.542-.529.801-1.08.801-1.677 0-1.483-1.013-2.5-2.318-2.5-.811 0-1.463.41-2.097 1.074zm5.684 3.103L8 14 2.273 8.77C1.445 8.091 1 7.107 1 6c0-2.215 1.59-4 3.818-4 1.333 0 2.319.725 3.07 1.431L8 3.538l.072-.074C8.827 2.694 9.825 2 11.182 2 13.409 2 15 3.785 15 6c0 1.108-.51 2.03-1.273 2.77" clip-rule="evenodd"/></svg>'},home:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill="#333" fill-rule="evenodd" d="m8 0 7 5.5V16H9.25v-3.75C9.25 11.56 8.69 11 8 11H6V9.5h2a2.75 2.75 0 0 1 2.75 2.75v2.25h2.75V6.168L8 2.018l-5.5 4.15V14.5H6V16H1V5.5z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>'},"info-active":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-.25 2v5h-1.5V7z" clip-rule="evenodd"/></svg>',small:'<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><path fill="#333" fill-rule="evenodd" d="M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0M6.6 5v4H5.4V5zM6 4a.75.75 0 1 0 0-1.5A.75.75 0 0 0 6 4" clip-rule="evenodd"/></svg>'},"info-small-active":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0M8.6 7v4H7.4V7zM8 6a.75.75 0 1 0 0-1.5A.75.75 0 0 0 8 6" clip-rule="evenodd"/></svg>'},"info-small":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M8.6 7v4H7.4V7zM8 6a.75.75 0 1 0 0-1.5A.75.75 0 0 0 8 6"/><path fill="#333" fill-rule="evenodd" d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m0-1A5 5 0 1 0 8 3a5 5 0 0 0 0 10" clip-rule="evenodd"/></svg>'},info:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M8.75 7v5h-1.5V7zM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path fill="#333" fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m0-1.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13" clip-rule="evenodd"/></svg>',small:'<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><path fill="#333" d="M6.6 5v4H5.4V5zM6 4a.75.75 0 1 0 0-1.5A.75.75 0 0 0 6 4"/><path fill="#333" fill-rule="evenodd" d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12m0-1A5 5 0 1 0 6 1a5 5 0 0 0 0 10" clip-rule="evenodd"/></svg>'},link:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M13.184 2.816a2.483 2.483 0 0 0-3.511 0l-.762.762-1.06-1.06.761-.763a3.982 3.982 0 1 1 5.632 5.633l-3.047 3.047a3.98 3.98 0 0 1-5.632 0l-.762-.762 1.06-1.06.762.762c.97.969 2.542.969 3.511 0l3.048-3.048a2.48 2.48 0 0 0 0-3.51m-3.81 3.81a2.483 2.483 0 0 0-3.51 0L2.816 9.672a2.483 2.483 0 0 0 3.51 3.511l.763-.762 1.06 1.06-.761.763a3.982 3.982 0 1 1-5.633-5.633l3.048-3.047a3.983 3.983 0 0 1 5.632 0l.762.762-1.06 1.06z" clip-rule="evenodd"/></svg>'},"loader-spinner":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M13.25 8c0-2.9-2.35-5.25-5.25-5.25v-1.5A6.75 6.75 0 1 1 1.25 8h1.5a5.25 5.25 0 1 0 10.5 0" clip-rule="evenodd"/></svg>'},"lock-closed":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M8 9.5a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1"/><path fill="#333" fill-rule="evenodd" d="M11.75 4.5v1.145A2 2 0 0 1 13 7.5v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 1.25-1.855V4.5a3.75 3.75 0 1 1 7.5 0M8 2.25a2.25 2.25 0 0 1 2.25 2.25v1h-4.5v-1A2.25 2.25 0 0 1 8 2.25M5 7a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-6A.5.5 0 0 0 11 7z" clip-rule="evenodd"/></svg>'},"lock-open":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M8 10a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1"/><path fill="#333" fill-rule="evenodd" d="M8 1.75A2.25 2.25 0 0 1 10.25 4h1.5a3.75 3.75 0 1 0-7.5 0v2.145A2 2 0 0 0 3 8v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5.75V4A2.25 2.25 0 0 1 8 1.75M5 7.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"/></svg>'},"log-out":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><g fill="#333" clip-path="url(#a)"><path d="M14.875 8.625h-8.19l3.72 3.72-1.06 1.06-5.53-5.53 5.53-5.53 1.06 1.06-3.72 3.72h8.19zM2.625-.125v16h-1.5v-16z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>'},"long-arrow-down":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M7.25 12.69V1h1.5v11.69l2.22-2.22 1.06 1.06L8 15.56l-4.03-4.03 1.06-1.06z" clip-rule="evenodd"/></svg>'},"long-arrow-left":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M3.31 7.25H15v1.5H3.31l2.22 2.22-1.06 1.06L.44 8l4.03-4.03 1.06 1.06z" clip-rule="evenodd"/></svg>'},"long-arrow-right":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M12.69 8.75H1v-1.5h11.69l-2.22-2.22 1.06-1.06L15.56 8l-4.03 4.03-1.06-1.06z" clip-rule="evenodd"/></svg>'},"long-arrow-up":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M8.75 3.31V15h-1.5V3.31L5.03 5.53 3.97 4.47 8 .44l4.03 4.03-1.06 1.06z" clip-rule="evenodd"/></svg>'},minus:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M13 8.75H3v-1.5h10z" clip-rule="evenodd"/></svg>'},"needle-north-active":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="m8 2 4 12H4z"/></svg>'},"needle-north-inactive":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M8 2 4 14h8zm0 4.743L6.081 12.5H9.92z" clip-rule="evenodd"/></svg>'},"no-creditcard":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill="#333" fill-rule="evenodd" d="m1.873 13.996-.442.516 1.138.976L3.845 14H14a2 2 0 0 0 2-2V4a2 2 0 0 0-1.873-1.996l.442-.516L13.43.512 12.156 2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 1.873 1.996M5.13 12.5H14a.5.5 0 0 0 .5-.5V8H8.988zM7.012 8l-3.857 4.5H2a.5.5 0 0 1-.5-.5V8zm4.547-3H14.5V4a.5.5 0 0 0-.5-.5h-1.155zm-.69-1.5L9.584 5H1.5V4a.5.5 0 0 1 .5-.5z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>'},"open-new-tab":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M4 2.75c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25V9h1.5v3A2.75 2.75 0 0 1 12 14.75H4A2.75 2.75 0 0 1 1.25 12V4A2.75 2.75 0 0 1 4 1.25h3v1.5z" clip-rule="evenodd"/><path fill="#333" fill-rule="evenodd" d="M13.25 3.81 7.53 9.53 6.47 8.47l5.72-5.72H9v-1.5h5.75V7h-1.5z" clip-rule="evenodd"/></svg>'},pause:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M6.75 11.995h-1.5v-8h1.5zm4 0h-1.5v-8h1.5z"/></svg>'},placeholder:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M1.25 4a2.75 2.75 0 0 1 5.5 0v1.25h2.5V4A2.75 2.75 0 1 1 12 6.75h-1.25v2.5H12A2.75 2.75 0 1 1 9.25 12v-1.25h-2.5V12A2.75 2.75 0 1 1 4 9.25h1.25V8h1.5v1.25h2.5v-2.5H4A2.75 2.75 0 0 1 1.25 4m4 6.75H4A1.25 1.25 0 1 0 5.25 12zm5.5 0V12A1.25 1.25 0 1 0 12 10.75zm0-5.5H12A1.25 1.25 0 1 0 10.75 4zm-5.5 0V4A1.25 1.25 0 1 0 4 5.25z" clip-rule="evenodd"/></svg>',small:'<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><g clip-path="url(#a)"><path fill="#333" fill-rule="evenodd" d="M.5 2.667a2.167 2.167 0 1 1 4.333 0v1.166h2.334V2.667a2.167 2.167 0 1 1 2.166 2.166H8.167v2.334h1.166a2.167 2.167 0 1 1-2.166 2.166V8.167H4.833v1.166a2.167 2.167 0 1 1-2.166-2.166h1.166V6h1v1.167h2.334V4.833h-4.5A2.167 2.167 0 0 1 .5 2.667m3.333 1.166V2.667a1.167 1.167 0 1 0-1.166 1.166zm0 4.334H2.667a1.167 1.167 0 1 0 1.166 1.166zm4.334 0v1.166a1.167 1.167 0 1 0 1.166-1.166zm0-4.334h1.166a1.167 1.167 0 1 0-1.166-1.166z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h12v12H0z"/></clipPath></defs></svg>'},play:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M11.547 7.187c.604.354.604 1.272 0 1.626L6.31 11.882c-.588.344-1.31-.104-1.31-.813V4.93c0-.709.722-1.157 1.31-.813z"/></svg>'},plus:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M7.25 8.75V14h1.5V8.75H14v-1.5H8.75V2h-1.5v5.25H2v1.5z"/></svg>'},scale:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M2.75 3.81V6h-1.5V1.25H6v1.5H3.81l2.72 2.72-1.06 1.06zM10 1.25h4.75V6h-1.5V3.81l-2.72 2.72-1.06-1.06 2.72-2.72H10zM2.75 12.19l2.72-2.72 1.06 1.06-2.72 2.72H6v1.5H1.25V10h1.5zm9.44 1.06-2.72-2.72 1.06-1.06 2.72 2.72V10h1.5v4.75H10v-1.5z" clip-rule="evenodd"/></svg>'},"search-zoom-in":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M6.472 4.222v2.25h-2.25v1.5h2.25v2.25h1.5v-2.25h2.25v-1.5h-2.25v-2.25z"/><path fill="#333" fill-rule="evenodd" d="M7.222 13.444c1.448 0 2.78-.494 3.838-1.324l2.41 2.41 1.06-1.06-2.41-2.41a6.222 6.222 0 1 0-4.898 2.385m0-1.5a4.722 4.722 0 1 0 0-9.444 4.722 4.722 0 0 0 0 9.444" clip-rule="evenodd"/></svg>'},"search-zoom-out":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M4.222 7.972h6v-1.5h-6z"/><path fill="#333" fill-rule="evenodd" d="M7.222 13.444c1.448 0 2.78-.494 3.838-1.324l2.41 2.41 1.06-1.06-2.41-2.41a6.222 6.222 0 1 0-4.898 2.385m0-1.5a4.722 4.722 0 1 0 0-9.444 4.722 4.722 0 0 0 0 9.444" clip-rule="evenodd"/></svg>'},search:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M11.06 12.12a6.222 6.222 0 1 1 1.06-1.06l2.41 2.41-1.06 1.06zm.884-4.898a4.722 4.722 0 1 1-9.444 0 4.722 4.722 0 0 1 9.444 0" clip-rule="evenodd"/></svg>'},"sort-arrow-medium":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="m11.707 5.293-1.414 1.414L8 4.414 5.707 6.707 4.293 5.293 8 1.586zm0 6.414-1.414-1.414L8 12.586l-2.293-2.293-1.414 1.414L8 15.414z" clip-rule="evenodd"/></svg>'},"sort-arrow-up-small":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="m4.47 5.47 1.06 1.06L8 4.06l2.47 2.47 1.06-1.06L8 1.94zm7.06 6.06-1.06-1.06L8 12.94l-2.47-2.47-1.06 1.06L8 15.06z" clip-rule="evenodd"/></svg>'},"sort-down":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M11.25 12.19V3h1.5v9.19l1.72-1.72 1.06 1.06L12 15.06l-3.53-3.53 1.06-1.06zM9 4.75H0v-1.5h9zm-2 4H0v-1.5h7zm-2 4H0v-1.5h5z" clip-rule="evenodd"/></svg>'},"sort-up":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M11.25 4.81V14h1.5V4.81l1.72 1.72 1.06-1.06L12 1.94 8.47 5.47l1.06 1.06zM9 11.25H0v1.5h9zm-2-4H0v1.5h7zm-2-4H0v1.5h5z" clip-rule="evenodd"/></svg>'},stop:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M5 5h6v6H5z"/></svg>'},"tel-phone":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill="#333" fill-rule="evenodd" d="M1.71 7.453C.194 5.48.614 2.836 2.289 1.16a1.6 1.6 0 0 1 2.263 0l1.41 1.41c.84.84.862 2.19.066 3.058.266.434.835 1.225 1.982 2.372s1.938 1.716 2.372 1.982a2.21 2.21 0 0 1 3.058.066l1.41 1.41a1.6 1.6 0 0 1 0 2.263c-1.676 1.675-4.32 2.095-6.292.577A38 38 0 0 1 4.92 11.09a38 38 0 0 1-3.21-3.637m1.638-5.231C2.12 3.45 1.912 5.255 2.9 6.538a36 36 0 0 0 3.08 3.492 36 36 0 0 0 3.493 3.08c1.282.988 3.087.78 4.316-.449a.1.1 0 0 0 0-.142l-1.41-1.409a.71.71 0 0 0-1.006 0c-.393.393-1.045.575-1.628.24-.538-.31-1.47-.961-2.796-2.288C5.62 7.735 4.97 6.803 4.66 6.265c-.336-.583-.154-1.234.239-1.627a.71.71 0 0 0 0-1.007l-1.41-1.41a.1.1 0 0 0-.142 0" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>'},"text-drag":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="#333" stroke-width="1.5" d="M10 12.121 12.121 10m-8.364 2.243 8.486-8.486"/></svg>'},"there-is-more":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M8 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/></svg>'},time:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M8.75 3v5.25h2.75v1.5H7.25V3z"/><path fill="#333" fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-1.5 0a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" clip-rule="evenodd"/></svg>'},top:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M0 2.75h16v-1.5H0zM8.75 15V6.81l3.72 3.72 1.06-1.06L8 3.94 2.47 9.47l1.06 1.06 3.72-3.72V15z"/></svg>'},"trash-delete-no":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill="#333" fill-rule="evenodd" d="M3.25 11.69.47 14.47l1.06 1.06 2.113-2.112A2.75 2.75 0 0 0 6 14.75h4A2.75 2.75 0 0 0 12.75 12V4.31l.56-.56h.19v-.19l2.03-2.03L14.47.47l-1.78 1.78H10v-1H6v1H2.5v1.5h.75zm1.531.59c.127.555.625.97 1.219.97h4c.69 0 1.25-.56 1.25-1.25V5.81l-1 1V12h-1.5V8.31l-1.5 1.5V12h-1.5v-.69zm.969-3.09-1 1V3.75h6.44L9.94 5H8.75v1.19l-1.5 1.5V5h-1.5z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>'},"trash-delete-open":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M7.794 1.432 11.083.235l.513 1.41-6.846 2.49V12c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25V4h1.5v8A2.75 2.75 0 0 1 10 14.75H6A2.75 2.75 0 0 1 3.25 12V4.682l-1.99.725-.514-1.41L4.036 2.8l-.343-.94L7.452.492z"/><path fill="#333" d="M5.75 12V5h1.5v7zm3-7v7h1.5V5z"/></svg>'},"trash-delete":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M5.75 12V5h1.5v7zm3-7v7h1.5V5z"/><path fill="#333" fill-rule="evenodd" d="M10 1.25H6v1H2.5v1.5h.75V12A2.75 2.75 0 0 0 6 14.75h4A2.75 2.75 0 0 0 12.75 12V3.75h.75v-1.5H10zm-5.25 2.5h6.5V12c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25z" clip-rule="evenodd"/></svg>'},user:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M9.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0M3.75 14a4.25 4.25 0 0 1 8.5 0h1.5a5.75 5.75 0 0 0-11.5 0z" clip-rule="evenodd"/></svg>'},"view-grid-filled":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M1 1h4v4H1zm5 0h4v4H6zm9 0h-4v4h4zM1 6h4v4H1zm4 5H1v4h4zm1-5h4v4H6zm4 5H6v4h4zm1-5h4v4h-4zm4 5h-4v4h4z"/></svg>'},"view-grid":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" fill-rule="evenodd" d="M1 1v4h4V1zm3 1H2v2h2zm2-1v4h4V1zm3 1H7v2h2zm2-1h4v4h-4zm1 1h2v2h-2zM1 6v4h4V6zm3 1H2v2h2zm-3 4h4v4H1zm1 1h2v2H2zm4-6v4h4V6zm3 1H7v2h2zm-3 4h4v4H6zm1 1h2v2H7zm4-6v4h4V6zm3 1h-2v2h2zm-3 4h4v4h-4zm1 1h2v2h-2z" clip-rule="evenodd"/></svg>'},"view-list":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M0 2.75h2v-1.5H0zm5 0h11v-1.5H5zm-5 4h2v-1.5H0zm5 0h11v-1.5H5zm-3 4H0v-1.5h2zm14 0H5v-1.5h11zm-16 4h2v-1.5H0zm5 0h11v-1.5H5z"/></svg>'},"warning-small":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M8.6 5.752v3.375H7.4V5.752zm-1.35 4.875a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0"/><path fill="#333" fill-rule="evenodd" d="M8.426 2.49a.5.5 0 0 0-.852 0l-6 9.75a.5.5 0 0 0 .426.762h12a.5.5 0 0 0 .426-.762zM8 3.706l5.105 8.296H2.895z" clip-rule="evenodd"/></svg>'},warning:{default:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="none" viewBox="0 0 18 16"><path fill="#333" d="M9.75 6v4.5h-1.5V6zM8 12.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0"/><path fill="#333" fill-rule="evenodd" d="M9.639 1.607a.75.75 0 0 0-1.278 0l-8 13A.75.75 0 0 0 1 15.75h16a.75.75 0 0 0 .639-1.143zM9 3.43l6.658 10.819H2.342z" clip-rule="evenodd"/></svg>',small:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="none" viewBox="0 0 14 12"><path fill="#333" d="M7.6 4v3.375H6.4V4zM6.25 8.875a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0"/><path fill="#333" fill-rule="evenodd" d="M7.426.738a.5.5 0 0 0-.852 0l-6 9.75A.5.5 0 0 0 1 11.25h12a.5.5 0 0 0 .426-.762zM7 1.954l5.105 8.296H1.895z" clip-rule="evenodd"/></svg>'},"web-browser":{default:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#333" d="M3 4.725a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m2.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"/><path fill="#333" fill-rule="evenodd" d="M0 15h16V2a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1zM1.5 2.5v3h13v-3zm13 11V7h-13v6.5z" clip-rule="evenodd"/></svg>'},lock:{small:'<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><path fill="#333" d="M8.5 4.5v-1C8.5 2.1 7.4 1 6 1S3.5 2.1 3.5 3.5v1C2.65 4.5 2 5.15 2 6v3.5c0 .85.65 1.5 1.5 1.5h5c.85 0 1.5-.65 1.5-1.5V6c0-.85-.65-1.5-1.5-1.5m-4-1C4.5 2.65 5.15 2 6 2s1.5.65 1.5 1.5v1h-3z"/></svg>'}},ii=(Object.keys(ei),class extends mt{constructor(){super(...arguments),this.size="default",this.name="placeholder",this.loading=!1}firstUpdated(t){super.firstUpdated(t),this.setAttribute("aria-hidden","true")}render(){return this.loading?this.renderLoadingSpinner():this.name&&ei[this.name]?this.renderIcon(this.name):j`⍰`}renderLoadingSpinner(){return j`
      <span class="loading-spinner">
        ${this.renderIcon("loader-spinner")}
      </span>
    `}renderIcon(t){let e=ei[t],i=e[this.size]||e.default;return j`${Qe(i)}`}});i(ii,"KTGIconElement"),ii.styles=ti,o([kt({type:String,reflect:!0})],ii.prototype,"size",2),o([kt({type:String})],ii.prototype,"name",2),o([kt({type:Boolean,reflect:!0})],ii.prototype,"loading",2),ii=o([ft("ktg-icon")],ii);var oi=class extends mt{constructor(){super(...arguments),this.contentTitle="",this.expanded=!1,this.size="small",this.disabled=!1,this.noPadding=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}expand(){this.accordionItem.expand()}collapse(){this.accordionItem.collapse()}onExpand(t){t.stopPropagation(),this.expanded=!0,this.dispatchEvent(new We({bubbles:!0,cancelable:!1}))}onCollapse(t){t.stopPropagation(),this.expanded=!1,this.dispatchEvent(new Ye({bubbles:!0,cancelable:!1}))}render(){return j`
      <ktg-cdk-accordion-item
        .expanded=${this.expanded}
        .disabled=${this.disabled}
        @expand=${this.onExpand}
        @collapse=${this.onCollapse}
      >
        <span
          class="accordion-item__header"
          slot="header"
        >
          <span class="accordion-item__title">${this.contentTitle}</span>

          <ktg-icon
            class="accordion-item__icon"
            name="dropdown-arrow-down-medium"
            size="default"
          ></ktg-icon>
        </span>

        <div class="accordion-item__content">
          <slot></slot>
        </div>
      </ktg-cdk-accordion-item>
    `}};i(oi,"KTGAccordionItemElement"),oi.styles=qe,oi.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},o([kt({type:String,attribute:"content-title"})],oi.prototype,"contentTitle",2),o([kt({type:Boolean,reflect:!0})],oi.prototype,"expanded",2),o([kt({type:String,reflect:!0})],oi.prototype,"size",2),o([kt({type:Boolean,reflect:!0})],oi.prototype,"disabled",2),o([kt({type:Boolean,attribute:"no-padding",reflect:!0})],oi.prototype,"noPadding",2),o([Ct("ktg-cdk-accordion-item")],oi.prototype,"accordionItem",2),oi=o([ft("ktg-accordion-item")],oi);var ni=[...ae,d`
    :host {
      display: block;
    }

    .accordion {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    ::slotted(ktg-accordion-item:last-of-type) {
      --ktg-accordion-item-border: transparent;
    }
  `],ri=class extends mt{onExpand(t){t.stopPropagation()}onCollapse(t){t.stopPropagation()}render(){return j`
      <ktg-cdk-accordion
        class="accordion"
        single-expanded
        @expand=${this.onExpand}
        @collapse=${this.onCollapse}
        role="list"
      >
        <slot></slot>
      </ktg-cdk-accordion>
    `}};i(ri,"KTGAccordionElement"),ri.styles=ni,ri=o([ft("ktg-accordion")],ri);var ai=je(class extends Ze{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(let t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}let i=t.element.classList;for(let t of this.st)t in e||(i.remove(t),this.st.delete(t));for(let t in e){let o=!!e[t];o===this.st.has(t)||this.nt?.has(t)||(o?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return X}});function si(t,e,i){return t?e(t):i?.(t)}i(si,"n");var li=[...ae,...ne,d`
    :host {
      display: block;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    .action-item {
      position: relative;
      display: block;
      font-size: 0.875rem;
      line-height: 120%;
      background-color: var(--ktg-color-neutral-01);
      color: var(--ktg-color-text);
      text-decoration: none;
      position: relative;
      width: 100%;
      border: 0;
      cursor: pointer;
      user-select: none;
    }

    :host([appearance='white']) .action-item {
      background-color: var(--ktg-color-background-01);
    }

    .action-item:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
    }

    :host([disabled]) .action-item {
      background-color: var(--ktg-color-neutral-02);
      color: var(--ktg-color-neutral-04);
      pointer-events: none;
    }

    .action-item__hover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--ktg-color-brand2-01);
      transition: opacity 0.15s ease-out;
      opacity: 0;
      z-index: 0;
    }

    :host(:hover) .action-item__hover {
      opacity: 1;
    }

    :host([disabled]) .action-item__hover {
      display: none;
    }

    .action-item__inner {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding-top: 0.75rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 0.75rem;
      z-index: 1;
    }

    .action-item__content {
      hyphens: auto;
      -webkit-hyphens: auto;
    }

    .action-item__button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background-color: transparent;
      border: 0;
      color: var(--ktg-color-link);
      cursor: pointer;
      text-decoration: none;
    }

    .action-item__button:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: 0.125rem;
    }

    .action-item__button:visited {
      color: var(--ktg-color-link-visited);
    }

    .action-item__button--danger {
      color: var(--ktg-color-danger);
    }

    :host([disabled]) .action-item__button {
      color: inherit;
      cursor: default;
    }

    .action-item__button-text {
      position: relative;
      display: block;
      z-index: 1;
    }

    :host(:not([disabled])) .action-item__button-text:hover {
      text-decoration: underline;
    }

    .action-item__button::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }

    .action-item__icon {
      transition: transform 0.125s ease-out;
    }

    @media (prefers-reduced-motion: reduce) {
      .action-item__icon {
        transition: none;
      }
    }

    :host(:hover) .action-item__icon.action-item__icon--animated {
      transform: translateX(0.25rem);
    }
  `],ci=class extends mt{constructor(){super(...arguments),this.linkText="",this.linkAppearance="default",this.href="",this.target="",this.disabled=!1,this.appearance="grey",this.icon=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return j`
      <div class="action-item">
        <span class="action-item__hover"></span>

        <span class="action-item__inner">
          <slot class="action-item__content"></slot>

          ${si(this.href,()=>this.renderLink(),()=>this.renderButton())}
        </span>
      </div>
    `}renderLink(){return j`
      <a
        class=${ai({"action-item__button":!0,"action-item__button--danger":"danger"===this.linkAppearance})}
        role="link"
        href=${this.href}
        target=${this.target}
        aria-disabled=${this.disabled}
        tabindex=${this.disabled?-1:0}
      >
        ${this.renderButtonContents()}
      </a>
    `}renderButton(){return j`
      <button
        class=${ai({"action-item__button":!0,"action-item__button--danger":"danger"===this.linkAppearance})}
        type="button"
        ?disabled=${this.disabled}
      >
        ${this.renderButtonContents()}
      </button>
    `}renderButtonContents(){return j`
      <span class="action-item__button-text">${this.linkText}</span>

      <ktg-icon
        class=${ai({"action-item__icon":!0,"action-item__icon--animated":!this.icon})}
        name=${this.icon?this.icon:"long-arrow-right"}
      >
      </ktg-icon>
    `}};i(ci,"KTGActionItemElement"),ci.styles=li,o([kt({type:String,attribute:"link-text"})],ci.prototype,"linkText",2),o([kt({type:String,attribute:"link-appearance"})],ci.prototype,"linkAppearance",2),o([kt({type:String})],ci.prototype,"href",2),o([kt({type:String})],ci.prototype,"target",2),o([kt({type:Boolean,reflect:!0})],ci.prototype,"disabled",2),o([kt({type:String,reflect:!0})],ci.prototype,"appearance",2),o([kt({type:String})],ci.prototype,"icon",2),ci=o([ft("ktg-action-item")],ci);var di=[...ae,d`
    :host {
      display: block;
    }

    .action-list {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
  `],hi=class extends mt{render(){return j`
      <div
        role="list"
        class="action-list"
      >
        <slot></slot>
      </div>
    `}};i(hi,"KTGActionListElement"),hi.styles=di,hi=o([ft("ktg-action-list")],hi);var ui=class extends CustomEvent{static{i(this,"KTGAlertBannerDismissEvent")}constructor(t){super("dismiss",t)}},pi=[...ae,...ne,d`
    :host {
      display: flex;
      width: 100%;
    }

    .alert-banner {
      padding-top: 1.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
      background-color: var(--ktg-color-brand2-01);
    }

    :host([appearance='danger']) .alert-banner {
      background-color: var(--ktg-color-danger-light);
    }

    .alert-banner__icon {
      flex-shrink: 0;
      color: var(--ktg-color-text);
    }

    :host([appearance='danger']) .alert-banner__icon {
      color: var(--ktg-color-danger);
    }

    .alert-banner__text {
      font-size: 1rem;
      line-height: 120%;
      flex-grow: 1;
      color: var(--ktg-color-text);
    }

    .dismiss-button {
      position: relative;
      flex-shrink: 0;
      display: flex;
      background: transparent;
      border: none;
      margin: 0;
      cursor: pointer;
    }

    .dismiss-button:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: 0.125rem;
    }

    /* NOTE: increase clickable area */
    .dismiss-button::before {
      content: '';
      display: block;
      position: absolute;
      top: -0.5rem;
      left: -0.5rem;
      width: calc(100% + 1rem);
      height: calc(100% + 1rem);
    }
  `],gi=class extends mt{constructor(){super(...arguments),this.appearance="info",this.dismissible=!1}render(){return j`
      <div
        class="alert-banner"
        role="alert"
      >
        ${this.renderIcon()}

        <div class="alert-banner__text">
          <slot></slot>
        </div>

        ${this.renderDismissButton()}
      </div>
    `}renderIcon(){let t="danger"===this.appearance?"warning":"info";return j`
      <ktg-icon
        class="alert-banner__icon"
        name=${t}
      ></ktg-icon>
    `}renderDismissButton(){return this.dismissible?j`
        <button
          class="dismiss-button"
          aria-label="Schliessen"
          @click=${this.dispatchDismissEvent}
        >
          <ktg-icon
            class="dismiss-button__icon"
            name="close"
          ></ktg-icon>
        </button>
      `:j``}dispatchDismissEvent(){this.dispatchEvent(new ui({bubbles:!0,composed:!0}))}};i(gi,"KTGAlertBannerElement"),gi.styles=pi,o([kt({type:String,reflect:!0})],gi.prototype,"appearance",2),o([kt({type:Boolean,reflect:!0})],gi.prototype,"dismissible",2),gi=o([ft("ktg-alert-banner")],gi);var mi=[...ae,...ne,d`
    :host {
      display: none;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    :host([indicate]) {
      display: inline-block;
    }

    :host([count]) {
      display: inline-block;
    }

    .badge {
      display: flex;
      justify-content: center;
      user-select: none;
    }

    .badge-inner {
      font-size: 0.75rem;
      font-weight: var(--ktg-font-weight-default);
      line-height: 1.25rem;
      display: flex;
      justify-content: center;
      min-height: 0.5rem;
      min-width: 0.5rem;
      border-radius: 1rem;
      padding: 0 0.25rem;
    }

    :host([count]) .badge-inner {
      min-width: 1.25rem;
    }

    :host([count='0']) .badge-inner {
      min-width: 0.5rem;
    }

    :host([appearance='black']) .badge-inner {
      background-color: var(--ktg-color-text);
      color: var(--ktg-color-dark-contrast);
    }

    :host([appearance='red']) .badge-inner {
      background-color: var(--ktg-color-danger);
      color: var(--ktg-color-dark-contrast);
    }

    :host([appearance='green']) .badge-inner {
      background-color: var(--ktg-color-primary-01);
      color: var(--ktg-color-dark-contrast);
    }

    :host([appearance='blue']) .badge-inner {
      background-color: var(--ktg-color-focus);
      color: var(--ktg-color-dark-contrast);
    }

    :host([appearance='yellow']) .badge-inner {
      background-color: var(--ktg-color-brand3-01);
      color: var(--ktg-color-text);
    }

    :host([appearance='grey']) .badge-inner {
      background-color: var(--ktg-color-neutral-03);
      color: var(--ktg-color-text);
    }

    :host([disabled]) .badge-inner {
      background-color: var(--ktg-color-neutral-03);
      color: var(--ktg-color-neutral-04);
    }
  `],vi=class extends mt{constructor(){super(...arguments),this.countReplaced="",this.appearance="black",this.count=null,this.indicate=!1,this.label="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","status")}willUpdate(t){if(super.willUpdate(t),t.has("count")&&(this.countReplaced=this.renderCount()),t.has("label")||t.has("count")){let t=this.renderLabel();this.setAttribute("aria-label",t),this.setAttribute("title",t)}}renderLabel(){return this.label.replace(/{count}/g,`${this.countReplaced}`)}renderCount(){return null!==this.count&&this.count>0?this.count>999?"999+":this.count>99?"99+":this.count.toString():""}render(){return j`
      <div class="badge">
        <div class="badge-inner">
          <span class="count">${this.countReplaced}</span>
        </div>
      </div>
    `}};i(vi,"KTGBadgeElement"),vi.styles=mi,o([kt({type:String,reflect:!0})],vi.prototype,"appearance",2),o([kt({type:Number,reflect:!0})],vi.prototype,"count",2),o([kt({type:Boolean,reflect:!0})],vi.prototype,"indicate",2),o([kt({type:String})],vi.prototype,"label",2),o([kt({type:Boolean,reflect:!0})],vi.prototype,"disabled",2),vi=o([ft("ktg-badge")],vi);var fi=i(t=>t??J,"o"),bi=[...ae,...ne,d`
    :host {
      display: inline-block;
      font-size: 0.75rem;
      line-height: 180%;
      letter-spacing: 0.02em;
      list-style: none;
    }

    .breadcrumbs-item {
      white-space: nowrap;
      display: inline-block;
    }

    .breadcrumbs-item__link {
      color: var(--ktg-color-link);
      text-decoration: none;
      letter-spacing: 0.02em;
    }

    .breadcrumbs-item__link:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: 0.125rem;
    }

    .breadcrumbs-item__link:active {
      color: var(--ktg-color-link);
    }

    :host(:last-child) .breadcrumbs-item__link {
      color: var(--ktg-color-neutral-05);
      cursor: default;
      pointer-events: none;
    }

    :host(:not(:last-child)) .breadcrumbs-item__link:hover {
      text-decoration: underline;
    }

    .breadcrumbs-item__divider {
      display: inline-block;
      margin: 0 1rem;
      color: var(--ktg-color-link);
      pointer-events: none;
    }

    :host(:last-child) .breadcrumbs-item__divider {
      display: none;
    }
  `],yi=class extends mt{constructor(){super(...arguments),this.isLastLink=!0,this.href=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}setIsLastLink(t){this.isLastLink=t}render(){let t=this.isLastLink?"page":null;return j`
      <div class="breadcrumbs-item">
        <a
          href=${this.href}
          class="breadcrumbs-item__link"
          aria-current=${fi(t)}
        >
          <slot></slot>
        </a>
        <span
          class="breadcrumbs-item__divider"
          aria-hidden="true"
        >
          /
        </span>
      </div>
    `}};i(yi,"KTGBreadcrumbsItemElement"),yi.styles=bi,yi.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},o([wt()],yi.prototype,"isLastLink",2),o([kt({type:String})],yi.prototype,"href",2),yi=o([ft("ktg-breadcrumbs-item")],yi);var ki=[...ae,d`
    :host {
      display: block;
    }
  `],wi=class extends mt{connectedCallback(){super.connectedCallback(),this.checkAndSetImplicitSlot()}checkAndSetImplicitSlot(){this.closest("ktg-header-topic")&&(this.slot="breadcrumbs")}onSlotChange(){for(let t=0;t<this.items.length;t++)this.items[t].setIsLastLink(t===this.items.length-1);this.renderBreadcrumbListSchema()}render(){return j`
      <nav
        class="breadcrumbs"
        aria-label="breadcrumbs"
      >
        <ol class="breadcrumbs__list">
          <slot @slotchange=${this.onSlotChange}></slot>
        </ol>
      </nav>
    `}renderBreadcrumbListSchema(){this.ldJsonScript?.remove(),this.ldJsonScript=document.createElement("script"),this.ldJsonScript.type="application/ld+json";let t={"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:Array.from(this.querySelectorAll("ktg-breadcrumbs-item")).map((t,e)=>({"@type":"ListItem",position:e,item:{"@id":t.getAttribute("href")?.trim()||"",name:t.textContent?.trim()||""}}))};this.ldJsonScript.innerText=JSON.stringify(t),document.body.appendChild(this.ldJsonScript)}};i(wi,"KTGBreadcrumbsElement"),wi.styles=ki,o([Et({flatten:!0})],wi.prototype,"items",2),wi=o([ft("ktg-breadcrumbs")],wi);var _i=[...ae,d`
    :host {
      display: block;
    }

    .button-group {
      display: flex;
    }
  `],xi=class extends mt{constructor(){super(...arguments),this.isIconButton=!1,this.size="large",this.appearance="primary",this.leadingIcon=null,this.trailingIcon=null,this.disabled=!1,this.loading=!1,this.fullWidth=!1,this.label=null,this.autofocus=!1}static{i(this,"KTGBaseButtonElement")}connectedCallback(){super.connectedCallback(),this.checkAndSetImplicitSlot()}willUpdate(t){super.willUpdate(t),this.checkIfShouldBeIconButton()}click(){this.button.click()}checkAndSetImplicitSlot(){this.closest("ktg-card")||this.closest("ktg-card-plain")?this.slot="primary-action":(this.closest("ktg-form-accordion-header")||this.closest("ktg-table-load-more"))&&(this.slot="button")}checkIfShouldBeIconButton(){let t=this.slottedNodes.filter(t=>{let e=t.nodeType===Node.TEXT_NODE,i=""===t.textContent?.trim();return!(e&&i)});this.isIconButton=!!this.leadingIcon&&!this.trailingIcon&&0===t.length}renderDefaultSlot(){return j`
      <slot
        class="button__content"
        @slotchange=${this.onDefaultSlotChange}
      ></slot>
    `}onDefaultSlotChange(){this.checkIfShouldBeIconButton(),this.querySelector("ktg-icon")&&Xt(this,"Please use the `leading-icon` and `trailing-icon` attributes instead of slotting a `ktg-icon` element.")}renderLeadingIcon(){let t=this.loading&&!this.trailingIcon;return this.leadingIcon?j`
        <ktg-icon
          class="button__icon button__icon--leading"
          name=${this.leadingIcon}
          aria-hidden="true"
          ?loading=${t}
        ></ktg-icon>
      `:j``}renderTrailingIcon(){return this.trailingIcon||this.loading&&!this.leadingIcon?j`
        <ktg-icon
          class="button__icon button__icon--trailing"
          name=${this.trailingIcon}
          aria-hidden="true"
          ?loading=${this.loading}
        ></ktg-icon>
      `:j``}};o([wt()],xi.prototype,"isIconButton",2),o([kt({type:String,reflect:!0})],xi.prototype,"size",2),o([kt({type:String,reflect:!0})],xi.prototype,"appearance",2),o([kt({type:String,attribute:"leading-icon"})],xi.prototype,"leadingIcon",2),o([kt({type:String,attribute:"trailing-icon"})],xi.prototype,"trailingIcon",2),o([kt({type:Boolean,reflect:!0})],xi.prototype,"disabled",2),o([kt({type:Boolean,reflect:!0})],xi.prototype,"loading",2),o([kt({type:Boolean,reflect:!0,attribute:"full-width"})],xi.prototype,"fullWidth",2),o([kt({type:String})],xi.prototype,"label",2),o([kt({type:Boolean,reflect:!0})],xi.prototype,"autofocus",2),o([Ct(".button")],xi.prototype,"button",2),o([Tt({flatten:!0})],xi.prototype,"slottedNodes",2);var Ci=[...ae,...ne,d`
    :host {
      display: inline-block;
      --ktg-icon-size: 1rem;
    }

    :host([full-width]) {
      width: 100%;
    }

    .button {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      cursor: pointer;
      border: 0;
      outline: 0;
      text-decoration: none;
      touch-action: manipulation;
    }

    .button:focus-visible {
      z-index: 1;
    }

    :host([disabled]) .button {
      cursor: default;
    }

    .button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }

    :host(:not([disabled])) .button:hover::before {
      opacity: 1;
    }

    .button::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }

    :host(:not([disabled])) .button:active::after {
      opacity: 1;
    }

    .button__outline {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .button:focus-visible .button__outline {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: -0.125rem;
    }

    :host([appearance='primary']) .button:focus-visible .button__outline {
      border: 0.25rem solid var(--ktg-color-dark-contrast);
    }

    .button__inner {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.625rem;
      z-index: 1;
      font-size: 0.875rem;
      line-height: 1rem;
      padding-top: 0.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 0.5rem;
      user-select: none;
      pointer-events: none;
    }

    :host([size='large']) .button__inner {
      font-size: 1.125rem;
      line-height: 1.25rem;
      padding-top: 0.625rem;
      padding-bottom: 0.625rem;
    }

    :host([size='large']) .button--icon .button__inner {
      padding: 0.75rem;
    }

    .button--icon .button__inner {
      padding: 0.5rem;
    }

    .button__content {
      display: contents;
    }

    /* Primary */
    /* ------------------------------------ */
    :host([appearance='primary']) .button {
      color: var(--ktg-color-dark-contrast);
      background-color: var(--ktg-color-brand1-01);
    }

    :host([appearance='primary']) .button::before {
      background-color: var(--ktg-color-brand1-02);
    }

    :host([appearance='primary']) .button::after {
      background-color: var(--ktg-color-brand1-03);
    }

    :host([appearance='primary']) .button:hover {
      color: var(--ktg-color-neutral-01);
    }

    :host([appearance='primary']) .button:active {
      color: var(--ktg-color-neutral-02);
    }

    :host([appearance='primary'][disabled]) .button {
      color: var(--ktg-color-neutral-04);
      background-color: var(--ktg-color-neutral-02);
    }

    /* Secondary */
    /* ------------------------------------ */
    :host([appearance='secondary']) .button {
      color: var(--ktg-color-brand1-01);
      background-color: var(--ktg-color-neutral-02);
    }

    :host([appearance='secondary']) .button::before {
      background-color: var(--ktg-color-neutral-03);
    }

    :host([appearance='secondary']) .button::after {
      background-color: var(--ktg-color-neutral-04);
    }

    :host([appearance='secondary']) .button:hover {
      color: var(--ktg-color-brand1-02);
    }

    :host([appearance='secondary']) .button:active {
      color: var(--ktg-color-brand1-03);
    }

    :host([appearance='secondary'][disabled]) .button {
      color: var(--ktg-color-neutral-04);
      background-color: var(--ktg-color-neutral-02);
    }

    /* Tertiary */
    /* ------------------------------------ */
    :host([appearance='tertiary']) .button {
      color: var(--ktg-color-brand1-01);
      background-color: transparent;
    }

    :host([appearance='tertiary']) .button::before {
      background-color: var(--ktg-color-neutral-01);
    }

    :host([appearance='tertiary']) .button::after {
      background-color: var(--ktg-color-neutral-02);
    }

    :host([appearance='tertiary']) .button:hover {
      color: var(--ktg-color-brand1-02);
    }

    :host([appearance='tertiary']) .button:active {
      color: var(--ktg-color-brand1-03);
    }

    :host([appearance='tertiary'][disabled]) .button {
      color: var(--ktg-color-neutral-04);
      background: transparent;
    }

    /* Danger */
    /* ------------------------------------ */
    :host([appearance='danger']) .button {
      color: var(--ktg-color-danger);
      background-color: transparent;
    }

    :host([appearance='danger']) .button::before {
      background-color: var(--ktg-color-neutral-01);
    }

    :host([appearance='danger']) .button::after {
      background-color: var(--ktg-color-neutral-02);
    }

    :host([appearance='danger'][disabled]) .button {
      color: var(--ktg-color-neutral-04);
      background: transparent;
    }
  `],Si=[...Ci],Ei=class extends xi{constructor(){super(...arguments),this.formElement=null,this.isInsideGroup=!1,this.type="button",this.pressed=!1,this.form="",this.onFormKeydown=t=>{let e=t.target;"submit"===this.type&&"Enter"===t.code&&e instanceof HTMLInputElement&&this.requestFormSubmission(t)}}connectedCallback(){super.connectedCallback(),this.closest("ktg-button-group")&&(this.isInsideGroup=!0)}disconnectedCallback(){this.formElement?.removeEventListener("keydown",this.onFormKeydown)}willUpdate(t){super.willUpdate(t),this.isInsideGroup&&(this.pressed?this.appearance="primary":this.appearance="secondary")}render(){return j`
      <button
        class=${ai({button:!0,"button--icon":this.isIconButton,"button--group":this.isInsideGroup})}
        ?disabled=${this.disabled}
        .type=${this.type}
        aria-label=${fi(this.label)}
        title=${fi(this.label)}
        aria-pressed=${fi(this.isInsideGroup?this.pressed.toString():null)}
        @click=${this.onClick}
      >
        <span class="button__outline"></span>
        <span class="button__inner">
          ${this.renderLeadingIcon()} ${this.renderDefaultSlot()}
          ${this.renderTrailingIcon()}
        </span>
      </button>
    `}onClick(t){switch(this.updateFormElement(),this.type){case"submit":this.requestFormSubmission(t);break;case"reset":this.formElement?.reset()}}updateFormElement(){this.formElement?.removeEventListener("keydown",this.onFormKeydown);let t=null;t=this.form?document.getElementById(this.form):this.closest("form"),this.formElement=t,this.formElement?.addEventListener("keydown",this.onFormKeydown)}requestFormSubmission(t){let e=null!==this.formElement,i="submit"===this.type;e&&i&&(t.preventDefault(),this.formElement?.requestSubmit())}};i(Ei,"KTGButtonElement"),Ei.styles=Si,Ei.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},o([wt()],Ei.prototype,"isInsideGroup",2),o([kt({type:String})],Ei.prototype,"type",2),o([kt({type:Boolean,reflect:!0})],Ei.prototype,"pressed",2),o([kt({type:String})],Ei.prototype,"form",2),Ei=o([ft("ktg-button")],Ei);var Ti=[...Ci],Ii=class extends xi{constructor(){super(...arguments),this.href="",this.target="auto"}determineLinkTarget(){let t;return t="auto"===this.target?jt(this.href)?"_blank":"_self":this.target,t}render(){let t=!!this.disabled||null,e=this.href&&!t?this.href:null,i=this.determineLinkTarget();return j`
      <a
        class=${ai({button:!0,"button--icon":this.isIconButton})}
        role="link"
        aria-disabled=${fi(t)}
        href=${fi(e)}
        aria-label=${fi(this.label)}
        title=${fi(this.label)}
        .target=${i}
        ?autofocus=${this.autofocus}
      >
        <span class="button__outline"></span>
        <span class="button__inner">
          ${this.renderLeadingIcon()} ${this.renderDefaultSlot()}
          ${this.renderTrailingIcon()}
        </span>
      </a>
    `}};i(Ii,"KTGLinkButtonElement"),Ii.styles=Ti,Ii.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},o([kt({type:String})],Ii.prototype,"href",2),o([kt({type:String})],Ii.prototype,"target",2),Ii=o([ft("ktg-link-button")],Ii);var $i=class extends mt{constructor(){super(...arguments),this.label=""}render(){return j`
      <section
        aria-label=${this.label}
        class="button-group"
      >
        <slot></slot>
      </section>
    `}};i($i,"KTGButtonGroupElement"),$i.styles=_i,o([kt({type:String})],$i.prototype,"label",2),$i=o([ft("ktg-button-group")],$i);var Oi=[...ae,...ne,d`
    .eyebrow {
      display: block;
      font-size: 0.75rem;
      letter-spacing: 0.02em;
      line-height: 1rem;
    }
  `],Li=class extends mt{connectedCallback(){super.connectedCallback(),this.slot="eyebrow"}render(){return j`
      <span class="eyebrow">
        <slot></slot>
      </span>
    `}};i(Li,"KTGCardEyebrowElement"),Li.styles=Oi,Li=o([ft("ktg-card-eyebrow")],Li);var Di=[...ae,...ne,d``],Ai=class extends mt{connectedCallback(){super.connectedCallback(),this.slot="text"}render(){return j`
      <p class="card-text">
        <slot></slot>
      </p>
    `}};i(Ai,"KTGCardTextElement"),Ai.styles=Di,Ai=o([ft("ktg-card-text")],Ai);var Mi=[...ae,...ne,d`
    :host {
      width: 100%;
      display: inline-block;
    }
  `],Bi=class extends mt{connectedCallback(){super.connectedCallback(),this.slot="title"}render(){return j`<slot></slot>`}};i(Bi,"KTGCardTitleElement"),Bi.styles=Mi,Bi=o([ft("ktg-card-title")],Bi);var zi=[...ae,d`
    :host {
      height: 100%;
      width: 100%;
    }

    .visual {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .visual--full,
    :host([full]) .visual {
      padding-top: 0;
      padding-left: 0;
      padding-right: 0;
    }

    ::slotted(*) {
      max-height: 100%;
      max-width: 100%;
    }

    .visual--large {
      padding-top: 0;
      padding-left: 0;
      padding-right: 0;
    }
    .visual--large ::slotted(*) {
      width: 100%;
      aspect-ratio: 360 / 230;
    }

    @media screen and (min-width: ${Ke}px) {
      .visual--large {
        align-items: stretch;
        justify-content: stretch;
        width: 100%;
        height: 100%;
      }

      .visual--large ::slotted(*) {
        aspect-ratio: 752 / 480;
        object-fit: cover;
      }
    }
  `],Ni=class extends mt{constructor(){super(...arguments),this.full=!1}connectedCallback(){super.connectedCallback(),this.slot="visual"}large(){return!!this.closest("ktg-card-large")}_full(){return!!this.closest("ktg-card-image-link")}render(){return j`
      <div
        class=${ai({visual:!0,"visual--large":this.large(),"visual--full":this.full||this._full()})}
      >
        <slot></slot>
      </div>
    `}};i(Ni,"KTGCardVisualElement"),Ni.styles=zi,o([kt({type:Boolean,reflect:!0})],Ni.prototype,"full",2),Ni=o([ft("ktg-card-visual")],Ni);var Ri=[...ae,...ne,d`
    :host {
      position: relative;
      display: block;
      width: 17rem;
      height: auto;
      --ktg-card-padding-left: 0.5rem;
      --ktg-card-padding-right: 0.5rem;
    }

    @media screen and (min-width: ${Ke}px) {
      :host {
        --ktg-card-padding-left: 1rem;
        --ktg-card-padding-right: 1rem;
      }
    }

    .card {
      position: relative;
      width: inherit;
      height: 100%;
    }

    .card__shadow {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      box-shadow: 0 0.625rem 1.25rem rgba(var(--ktg-rgb-shadow), 0.15);
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }

    :host(:not([disabled])) .card--has-link:hover .card__shadow,
    .card--has-link:focus-within .card__shadow {
      opacity: 1;
    }

    .card__inner {
      position: relative;
      display: flex;
      flex-direction: column;
      z-index: 1;
      width: inherit;
      height: inherit;
      color: var(--ktg-color-text);
    }

    :host([appearance='grey']) .card__inner {
      background-color: var(--ktg-color-neutral-01);
    }

    :host([appearance='white']) .card__inner {
      background-color: var(--ktg-color-background-01);
    }

    :host([active]) .card__inner {
      background-color: var(--ktg-color-brand2-01);
    }

    :host([disabled][appearance='grey']) .card__inner {
      color: var(--ktg-color-neutral-04);
      background-color: var(--ktg-color-neutral-02);
    }

    :host([disabled][appearance='white']) .card__inner {
      color: var(--ktg-color-neutral-03);
    }

    :host([disabled]) .card__visual {
      filter: grayscale(1);
    }

    :host([disabled][appearance='grey']) .card__visual {
      /*
        Opacity calculated based on following parameters:
        - Original color #333333
        -	Target color #bdbdbd
        -	Background color #ebebeb
      */
      opacity: 0.25;
    }

    :host([disabled][appearance='white']) .card__visual {
      /*
        Opacity calculated based on following parameters:
        -	Original color #333333
	      -	Target color #d3d3d3
	      -	Background color #ffffff
      */
      opacity: 0.216;
    }

    .card__header {
      padding-top: 0.5rem;
      padding-left: var(--ktg-card-padding-left);
      padding-right: var(--ktg-card-padding-right);
    }

    @media screen and (min-width: ${Ke}px) {
      .card__header {
        padding-top: 1rem;
      }
    }

    .card__header-top {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      margin-bottom: 0.5rem;
      min-height: 1rem;
      flex-wrap: wrap;
    }

    @media screen and (min-width: ${Ke}px) {
      .card__header-top {
        flex-direction: row;
        align-items: center;
      }
    }

    .card__pill {
      display: none;
    }

    .card--has-pill .card__pill {
      display: flex;
      align-items: center;
    }

    .card__eyebrow {
      display: flex;
      align-items: center;
    }

    .card__title {
      font-size: 0.875rem;
      line-height: 120%;
      min-height: 2.4em; /* 2 lines = 1em * 1.2 line-height */
      margin-bottom: 0.5rem;
      hyphens: var(--ktg-card-title-hyphens, auto);
      -webkit-hyphens: var(--ktg-card-title-hyphens, auto);
    }

    @media screen and (min-width: ${Ke}px) {
      .card__title {
        font-size: 1rem;
      }
    }

    .card__text {
      padding-left: var(--ktg-card-padding-left);
      padding-right: var(--ktg-card-padding-right);
      padding-bottom: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      flex-grow: 1;
      font-size: 0.75rem;
      line-height: 120%;
    }

    @media screen and (min-width: ${Ke}px) {
      .card__text {
        font-size: 0.875rem;
      }
    }

    .card__footer {
      position: unset;
      padding-left: var(--ktg-card-padding-left);
      padding-right: var(--ktg-card-padding-right);
      padding-bottom: 1rem;
    }

    .card__primary-actions {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      width: 100%;
    }

    ::slotted(ktg-button) {
      z-index: 1;
    }

    .card__link {
      display: none;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      text-decoration: none;
      outline: 0;
      color: var(--ktg-color-link);
    }

    .card__link:visited {
      color: var(--ktg-color-link-visited);
    }

    .card__link:active {
      color: var(--ktg-color-link);
    }

    :host([disabled]) .card__link {
      color: var(--ktg-color-neutral-04);
    }

    :host(:not([disabled])) .card--has-link .card__link::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .card__link:focus-visible::before {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: -0.125rem;
    }

    .card--has-link .card__link {
      display: flex;
    }

    .card__link-arrow {
      transition: transform 0.125s ease-out;
    }

    @media (prefers-reduced-motion: reduce) {
      .card__link-arrow {
        transition: none;
      }
    }

    :host(:not([disabled]):hover) .card__link-arrow {
      transform: translateX(0.25rem);
    }
  `],Pi=[...ae,...ne,d`
    :host {
      display: contents;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      border-radius: 3.125rem;
      background-color: var(--ktg-pill-background-color);
      color: var(--ktg-pill-color);
      font-size: 0.75rem;
      line-height: 1rem;
      text-align: center;
      width: fit-content;
      padding-left: 0.375rem;
      padding-right: 0.375rem;
      user-select: none;
      text-wrap: nowrap;
    }

    /* idle */
    /* ------------------------------------ */
    .pill--idle {
      color: var(--ktg-pill-color, var(--ktg-color-text));
      background-color: var(
        --ktg-pill-background-color,
        var(--ktg-color-neutral-03)
      );
    }

    /* highlight */
    /* ------------------------------------ */
    .pill--highlight {
      color: var(--ktg-pill-color, var(--ktg-color-text));
      background-color: var(
        --ktg-pill-background-color,
        var(--ktg-color-brand3-01)
      );
    }

    /* running */
    /* ------------------------------------ */
    .pill--running {
      color: var(--ktg-pill-color, var(--ktg-color-text));
      background-color: var(
        --ktg-pill-background-color,
        var(--ktg-color-brand2-02)
      );
    }

    /* warning */
    /* ------------------------------------ */
    .pill--warning {
      background-color: var(--ktg-pill-background-color, var(--ktg-color-text));
      color: var(--ktg-pill-color, var(--ktg-color-dark-contrast));
    }

    /* error */
    /* ------------------------------------ */
    .pill--error {
      color: var(--ktg-pill-color, var(--ktg-color-dark-contrast));
      background-color: var(
        --ktg-pill-background-color,
        var(--ktg-color-danger)
      );
    }

    /* success */
    /* ------------------------------------ */
    .pill--success {
      gap: 0;
      color: var(--ktg-pill-color, var(--ktg-color-dark-contrast));
      background-color: var(
        --ktg-pill-background-color,
        var(--ktg-color-primary-01)
      );
    }

    /* disabled */
    /* ------------------------------------ */
    /* NOTE: must be at bottom, so 'disabled' state can override other styles */
    :host([disabled]) .pill {
      color: var(--ktg-pill-color, var(--ktg-color-neutral-04));
      background-color: var(
        --ktg-pill-background-color,
        var(--ktg-color-neutral-02)
      );
    }
  `],Fi=class extends mt{constructor(){super(...arguments),this.appearance="idle",this.appearanceOverride=null,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.checkAndSetImplicitSlot()}checkAndSetImplicitSlot(){(this.closest("ktg-card")||this.closest("ktg-card-large")||this.closest("ktg-form-accordion-header")||this.closest("ktg-message"))&&(this.slot="pill")}render(){let t=this.appearanceOverride??this.appearance;return j`
      <div class="pill pill--${t}">
        <slot></slot>
        ${si("success"===t,()=>j`
            <ktg-icon
              name="check-small"
              class="pill__icon"
            ></ktg-icon>
          `)}
      </div>
    `}};i(Fi,"KTGPillElement"),Fi.styles=Pi,o([kt({type:String,reflect:!0})],Fi.prototype,"appearance",2),o([kt({type:String,attribute:!1})],Fi.prototype,"appearanceOverride",2),o([kt({type:Boolean,reflect:!0})],Fi.prototype,"disabled",2),Fi=o([ft("ktg-pill")],Fi);var Vi=class extends mt{constructor(){super(...arguments),this.hasPill=!1,this.appearance="grey",this.href="",this.target="_self",this.linkText="",this.linkIcon="long-arrow-right",this.active=!1,this.disabled=!1}get hasLink(){return!!this.href}willUpdate(t){super.willUpdate(t),t.has("disabled")&&(this.updatePillsDisabledState(),this.updatePrimaryActionsDisabledState())}onPillSlotChange(){this.hasPill=this.pills.length>0,this.updatePillsDisabledState()}updatePillsDisabledState(){for(let t of this.pills)t.disabled=this.disabled}onPrimaryActionSlotChange(){this.updatePrimaryActionsDisabledState()}updatePrimaryActionsDisabledState(){for(let t of this.primaryActions)t.disabled=this.disabled}render(){return j`
      <article
        class=${ai({card:!0,"card--has-link":this.hasLink,"card--has-pill":this.hasPill})}
      >
        <div class="card__shadow"></div>

        <div class="card__inner">
          <div class="card__visual">
            <slot name="visual"></slot>
          </div>

          <header class="card__header">
            <div class="card__header-top">
              <div class="card__pill">
                <slot
                  name="pill"
                  @slotchange=${this.onPillSlotChange}
                ></slot>
              </div>

              <small
                class="card__eyebrow"
                id="eyebrow"
              >
                <slot name="eyebrow"> </slot>
              </small>
            </div>

            <h2
              class="card__title"
              id="title"
              aria-describedby="eyebrow"
            >
              <slot name="title"></slot>
            </h2>
          </header>

          <div class="card__text">
            <slot name="text"></slot>
          </div>

          <footer class="card__footer">
            <div class="card__primary-actions">
              <slot
                name="primary-action"
                @slotchange=${this.onPrimaryActionSlotChange}
              ></slot>

              ${this.renderLink()}
            </div>
          </footer>
        </div>
      </article>
    `}renderLink(){return this.hasLink&&!this.disabled?j`
        <a
          class="card__link"
          href=${this.href}
          target=${this.target}
          aria-labelledby="title"
        >
          ${this.renderLinkContent()}
        </a>
      `:j`<span class="card__link">${this.renderLinkContent()}</span>`}renderLinkContent(){return j`
      <span aria-hidden="true">${this.linkText}</span>
      ${si(this.linkIcon,()=>j`
          <ktg-icon
            class="card__link-arrow"
            name=${fi(""!==this.linkIcon?this.linkIcon:null)}
          ></ktg-icon>
        `)}
    `}};i(Vi,"KTGCardElement"),Vi.styles=Ri,Vi.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},o([wt()],Vi.prototype,"hasPill",2),o([kt({type:String,reflect:!0})],Vi.prototype,"appearance",2),o([kt({type:String})],Vi.prototype,"href",2),o([kt({type:String})],Vi.prototype,"target",2),o([kt({type:String,attribute:"link-text"})],Vi.prototype,"linkText",2),o([kt({type:String,attribute:"link-icon"})],Vi.prototype,"linkIcon",2),o([kt({type:Boolean,reflect:!0})],Vi.prototype,"active",2),o([kt({type:Boolean,reflect:!0})],Vi.prototype,"disabled",2),o([Et({slot:"pill",flatten:!0})],Vi.prototype,"pills",2),o([Et({slot:"primary-action",flatten:!0})],Vi.prototype,"primaryActions",2),Vi=o([ft("ktg-card")],Vi);var Ki=[...ae,...ne,d`
    :host {
      position: relative;
      display: block;
      max-width: 10rem;
      height: auto;
    }

    :host([disabled]) {
      --ktg-color-text: var(--ktg-color-neutral-04);
    }

    .card-plain__inner {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    @media screen and (min-width: ${Ke}px) {
      :host {
        max-width: 22rem;
      }
      .card-plain__inner {
        gap: 1.5rem;
      }
    }

    .card-plain__line {
      height: 0.25rem;
      width: 2.5rem;
      background-color: var(--ktg-color-text);
    }

    :host([disabled]) .card-plain__line {
      background-color: var(--ktg-color-neutral-04);
    }

    .card-plain__title {
      font-size: 1.25rem;
      line-height: 120%;
      hyphens: var(--ktg-card-title-hyphens, auto);
      -webkit-hyphens: var(--ktg-card-title-hyphens, auto);
    }

    @media screen and (min-width: ${Ke}px) {
      .card-plain__title {
        font-size: 1.5rem;
      }
    }

    .card-plain__text {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1rem;
      line-height: 120%;
      flex-grow: 1;
      font-size: 0.75rem;
      line-height: 120%;
    }

    @media screen and (min-width: ${Ke}px) {
      .card-plain__text {
        font-size: 0.875rem;
      }
    }

    .card-plain__link {
      display: none;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      text-decoration: none;
      outline: 0;
      color: var(--ktg-color-link);
      border-bottom: 1px solid transparent;
      transition: border 0.125s ease-out;
      padding-right: 0.25rem;
    }

    .card-plain__link:visited {
      color: var(--ktg-color-link-visited);
    }

    .card-plain__link:active {
      color: var(--ktg-color-link);
    }

    :host([disabled]) .card-plain__link {
      color: var(--ktg-color-neutral-04);
    }

    :host(:not([disabled])) .card-plain--has-link .card-plain__link::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .card__link:focus-visible::before {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: -0.125rem;
    }

    .card-plain--has-link .card-plain__link {
      display: inline-flex;
    }

    .card-plain__link-arrow {
      transition: transform 0.125s ease-out;
    }

    @media (prefers-reduced-motion: reduce) {
      .card-plain__link-arrow {
        transition: none;
      }
    }

    :host(:not([disabled]):hover) .card-plain__link-arrow {
      transform: translateX(0.25rem);
    }
    :host(:not([disabled]):hover) .card-plain__link {
      border-color: var(--ktg-color-link);
    }
  `],Hi=class extends mt{constructor(){super(...arguments),this.href="",this.target="_self",this.linkText="",this.linkIcon="long-arrow-right",this.disabled=!1}get hasLink(){return!!this.href}render(){return j`
      <article
        class=${ai({"card-plain":!0,"card-plain--has-link":this.hasLink})}
      >
        <div class="card-plain__inner">
          <div class="card-plain__line"></div>
          <header class="card-plain__header">
            <h2
              class="card-plain__title"
              id="title"
              aria-describedby="eyebrow"
            >
              <slot name="title"></slot>
            </h2>
          </header>
          <div class="card-plain__text">
            <slot name="text"></slot>
          </div>
          ${si(this.hasLink,()=>j` <footer class="card-plain__footer">
                <div class="card-plain__primary-actions">
                  ${this.renderLink()}
                </div>
              </footer>`)}
        </div>
      </article>
    `}renderLink(){return this.hasLink&&!this.disabled?j`
        <a
          class="card-plain__link"
          href=${this.href}
          target=${this.target}
          aria-labelledby="title"
        >
          ${this.renderLinkContent()}
        </a>
      `:j`<span class="card-plain__link"
      >${this.renderLinkContent()}</span
    >`}renderLinkContent(){return j`
      <span aria-hidden="true">${this.linkText}</span>
      ${si(this.linkIcon,()=>j`
          <ktg-icon
            class="card-plain__link-arrow"
            name=${fi(""!==this.linkIcon?this.linkIcon:null)}
          ></ktg-icon>
        `)}
    `}};i(Hi,"KTGCardPlainElement"),Hi.styles=Ki,o([kt({type:String})],Hi.prototype,"href",2),o([kt({type:String})],Hi.prototype,"target",2),o([kt({type:String,attribute:"link-text"})],Hi.prototype,"linkText",2),o([kt({type:String,attribute:"link-icon"})],Hi.prototype,"linkIcon",2),o([kt({type:Boolean,reflect:!0})],Hi.prototype,"disabled",2),Hi=o([ft("ktg-card-plain")],Hi);var Gi=[d`
    ktg-checkbox {
      display: inline-block;
      height: 1rem;
      width: 1rem;
      box-sizing: border-box;
    }

    ktg-checkbox:has(:focus-visible) {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: 0.0625rem;
    }

    ktg-checkbox:has(:hover) {
      --ktg-checkbox-border-color: var(--ktg-color-brand1-02);
    }

    ktg-checkbox:has(:active) {
      --ktg-checkbox-border-color: var(--ktg-color-brand1-03);
    }

    ktg-checkbox[checked] {
      --ktg-checkbox-icon-checked-opacity: 1;
    }

    ktg-checkbox[indeterminate] {
      --ktg-checkbox-icon-indeterminate-opacity: 1;
    }

    ktg-checkbox[checked],
    ktg-checkbox[indeterminate] {
      --ktg-checkbox-background-color: var(--ktg-color-brand1-01);
    }

    ktg-checkbox[checked]:has(:hover),
    ktg-checkbox[indeterminate]:has(:hover) {
      --ktg-checkbox-background-color: var(--ktg-color-brand1-02);
    }

    ktg-checkbox[checked]:has(:active),
    ktg-checkbox[indeterminate]:has(:active) {
      --ktg-checkbox-background-color: var(--ktg-color-brand1-03);
    }

    ktg-checkbox[disabled] {
      --ktg-checkbox-background-color: var(--ktg-color-neutral-03);
      --ktg-checkbox-border-color: var(--ktg-color-neutral-04);
      --ktg-checkbox-icon-color: var(--ktg-color-neutral-05);
    }

    ktg-checkbox[disabled]:has(:hover),
    ktg-checkbox[disabled]:has(:active) {
      --ktg-checkbox-background-color: var(--ktg-color-neutral-03);
      --ktg-checkbox-border-color: var(--ktg-color-neutral-04);
    }

    ktg-checkbox[disabled][checked],
    ktg-checkbox[disabled][indeterminate] {
      --ktg-checkbox-border-color: var(--ktg-color-neutral-03);
    }

    .ktg-checkbox-input {
      box-sizing: inherit;
      height: inherit;
      width: inherit;
      position: absolute;
      z-index: 0;
      opacity: 0;
      cursor: pointer;
      margin: 0;
    }

    .ktg-checkbox-input:disabled {
      cursor: default;
    }

    .ktg-checkbox {
      box-sizing: inherit;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: inherit;
      height: inherit;
      background-color: var(
        --ktg-checkbox-background-color,
        var(--ktg-color-neutral-01)
      );
      border-radius: 0.125rem;
      pointer-events: none;
      z-index: 0;
    }

    .ktg-checkbox__border {
      box-sizing: inherit;
      position: absolute;
      height: 100%;
      width: 100%;
      border: 0.0625rem solid
        var(--ktg-checkbox-border-color, var(--ktg-color-brand1-01));
      border-radius: inherit;
      pointer-events: none;
    }

    .ktg-checkbox__icon {
      box-sizing: inherit;
      position: absolute;
      color: var(--ktg-checkbox-icon-color, var(--ktg-color-dark-contrast));
      z-index: 3;
    }

    .ktg-checkbox__icon--checked {
      opacity: var(--ktg-checkbox-icon-checked-opacity, 0);
    }

    .ktg-checkbox__icon--indeterminate {
      opacity: var(--ktg-checkbox-icon-indeterminate-opacity, 0);
    }
  `];re(Gi);var Ui=class extends mt{constructor(){super(...arguments),this.hasParentLabel=!1,this.label=null,this.labelledBy=null,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.readonly=!1,this.inputId="",this.inputTabindex=0,this.name="",this.value="",this.required=!1,this.autofocus=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.hasParentLabel=null!==this.closest("label, ktg-labelled-choice"),this.checkAndSetImplicitSlot()}checkAndSetImplicitSlot(){this.closest("ktg-labelled-choice")&&(this.slot="input")}updated(t){t.has("checked")&&(this.input.checked=this.checked)}onLabelClick(){this.focus(),this.input.click()}onClick(t){if(this.readonly)return void t.preventDefault();t.stopImmediatePropagation(),t.stopPropagation();let e=!0;this.hasParentLabel||(e=this.dispatchEvent(new MouseEvent(t.type,t)),e||t.preventDefault()),e&&this.indeterminate&&(this.indeterminate=!1)}onCheckedChange(t){t.stopImmediatePropagation(),t.stopPropagation(),this.checked=this.input.checked,this.dispatchEvent(new InputEvent(t.type,t))}focus(){this.input.focus()}click(){this.input.click()}render(){return j`
      <input
        class="ktg-checkbox-input"
        type="checkbox"
        .id=${this.inputId}
        .name=${this.name}
        .value=${this.value}
        tabindex=${this.inputTabindex}
        .required=${this.required}
        .disabled=${this.disabled}
        .autofocus=${this.autofocus}
        .indeterminate=${this.indeterminate}
        aria-readonly=${this.readonly}
        aria-labelledby=${fi(this.labelledBy)}
        aria-label=${fi(this.label)}
        title=${fi(this.label)}
        @click=${this.onClick}
        @input=${this.onCheckedChange}
        @change=${this.onCheckedChange}
      />

      <div class="ktg-checkbox">
        <div class="ktg-checkbox__border"></div>

        <ktg-icon
          name="check"
          class="ktg-checkbox__icon ktg-checkbox__icon--checked"
        ></ktg-icon>

        <ktg-icon
          name="minus"
          class="ktg-checkbox__icon ktg-checkbox__icon--indeterminate"
        ></ktg-icon>
      </div>
    `}};i(Ui,"KTGCheckboxElement"),o([kt({type:String})],Ui.prototype,"label",2),o([kt({type:String,attribute:!1})],Ui.prototype,"labelledBy",2),o([kt({type:Boolean,reflect:!0})],Ui.prototype,"checked",2),o([kt({type:Boolean,reflect:!0})],Ui.prototype,"indeterminate",2),o([kt({type:Boolean,reflect:!0})],Ui.prototype,"disabled",2),o([kt({type:Boolean,reflect:!0})],Ui.prototype,"readonly",2),o([kt({type:String,attribute:"input-id"})],Ui.prototype,"inputId",2),o([kt({type:Number,attribute:"input-tabindex"})],Ui.prototype,"inputTabindex",2),o([kt({type:String})],Ui.prototype,"name",2),o([kt({type:String})],Ui.prototype,"value",2),o([kt({type:Boolean,reflect:!0})],Ui.prototype,"required",2),o([kt({type:Boolean,reflect:!0})],Ui.prototype,"autofocus",2),o([Ct(".ktg-checkbox-input")],Ui.prototype,"input",2),Ui=o([ft("ktg-checkbox")],Ui);var Wi=[...ae,...ne,d`
    :host {
      display: contents;
    }

    .clue-key {
      font-size: 0.75rem;
      line-height: 100%;
      color: var(--ktg-color-neutral-05);
    }
  `],Yi=class extends mt{connectedCallback(){super.connectedCallback(),this.role="term"}render(){return j`
      <span class="clue-key">
        <slot></slot>
      </span>
    `}};i(Yi,"KTGClueKeyElement"),Yi.styles=Wi,Yi=o([ft("ktg-clue-key")],Yi);var qi=[d`
    .clue-key-value {
      display: flex;
      flex-direction: column;
    }
  `],ji=[...ae,...ne,d`
    :host {
      display: contents;
    }

    .clue-value {
      font-size: 0.875rem;
      line-height: 120%;
    }
  `],Zi=class extends mt{connectedCallback(){super.connectedCallback(),this.role="definition"}render(){return j`
      <span class="clue-value">
        <slot></slot>
      </span>
    `}};i(Zi,"KTGClueValueElement"),Zi.styles=ji,Zi=o([ft("ktg-clue-value")],Zi);var Xi=0,Ji=class extends mt{connectedCallback(){super.connectedCallback(),this.role="listitem"}onSlotChange(){this.linkKeyAndValue()}linkKeyAndValue(){let t=this.querySelector("ktg-clue-key"),e=this.querySelector("ktg-clue-value");if(t&&e){let i="clue-key-value-"+ ++Xi;t.id=i,e.setAttribute("aria-labelledby",i)}}render(){return j`
      <div class="clue-key-value">
        <slot @slotchange=${this.onSlotChange}></slot>
      </div>
    `}};i(Ji,"KTGClueKeyValueElement"),Ji.styles=qi,Ji=o([ft("ktg-clue-key-value")],Ji);var Qi=[d`
    :host {
      display: block;
      container-type: inline-size;
    }

    .clue-key-values {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    @container (width > ${320}px) {
      .clue-key-values {
        grid-template-columns: 1fr 1fr;
      }
    }
  `],to=class extends mt{connectedCallback(){super.connectedCallback(),this.role="list"}render(){return j`
      <div class="clue-key-values">
        <slot></slot>
      </div>
    `}};i(to,"KTGClueKeyValuesElement"),to.styles=Qi,to=o([ft("ktg-clue-key-values")],to);var eo="ktg-clues-appearance-context",io="ktg-clues-in-header-context",oo=[...ae,...ne,d`
    :host {
      display: block;
      position: relative;
    }

    .list-item {
      display: flex;
    }

    .list-item__dot {
      position: relative;
      display: flex;
      width: 1.25rem;
      height: calc(1.8 * 0.875rem);
      flex-shrink: 0;
      align-items: center;
      padding-left: 0.375rem;
    }

    .list-item__dot::before {
      content: '';
      display: block;
      width: 0.25rem;
      height: 0.25rem;
      border-radius: 50%;
      background-color: currentColor;
      transform: translateY(-0.0625rem);
    }

    .list-item__text {
      font-size: 0.875rem;
      line-height: 180%;
    }

    .list-item--header .list-item__text {
      font-size: 1rem;
      line-height: 140%;
    }

    @media screen and (min-width: ${He}px) {
      .list-item--header .list-item__text {
        font-size: 1.25rem;
      }
    }
  `],no=class extends mt{constructor(){super(...arguments),this.usedInCluesHeader=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return j`
      <span
        class=${ai({"list-item":!0,"list-item--header":this.usedInCluesHeader})}
      >
        <span class="list-item__dot"></span>
        <span class="list-item__text">
          <slot></slot>
        </span>
      </span>
    `}};i(no,"KTGClueListItemElement"),no.styles=oo,o([Ee({context:io})],no.prototype,"usedInCluesHeader",2),no=o([ft("ktg-clue-list-item")],no);var ro=[...ae,...ne,d`
    :host {
      display: block;
    }
  `],ao=class extends mt{connectedCallback(){super.connectedCallback(),this.setAttribute("role","list")}render(){return j`<slot></slot>`}};i(ao,"KTGClueListElement"),ao.styles=ro,ao=o([ft("ktg-clue-list")],ao);var so=[...ae,...ne,d`
    :host {
      display: block;
    }

    .clue-text {
      font-size: 0.875rem;
      line-height: 180%;
    }

    .clue-text--header {
      font-size: 1rem;
      line-height: 140%;
    }

    @media screen and (min-width: ${He}px) {
      .clue-text--header {
        font-size: 1.25rem;
      }
    }
  `],lo=class extends mt{constructor(){super(...arguments),this.usedInCluesHeader=!1}render(){return j`
      <p
        class=${ai({"clue-text":!0,"clue-text--header":this.usedInCluesHeader})}
      >
        <slot></slot>
      </p>
    `}};i(lo,"KTGClueTextElement"),lo.styles=so,o([Ee({context:io})],lo.prototype,"usedInCluesHeader",2),lo=o([ft("ktg-clue-text")],lo);var co=[...ae,...ne,d`
    :host {
      display: block;
    }

    .clue-title {
      display: flex;
      gap: 0.5625rem;
      align-items: center;
      justify-content: flex-start;
      color: var(--ktg-color-text);
    }

    :host([appearance='danger']) .clue-title {
      color: var(--ktg-color-danger);
    }

    .clue-title__icon {
      flex-shrink: 0;
    }

    .clue-title__icon--danger {
      color: var(--ktg-color-danger);
    }

    .clue-title__text {
      font-size: 0.875rem;
      line-height: 120%;
      letter-spacing: 0.02em;
    }

    .clue-title--header .clue-title__text {
      font-size: 1.5rem;
      line-height: 120%;
    }

    @media screen and (min-width: ${He}px) {
      .clue-title--header .clue-title__text {
        font-size: 2.125rem;
        line-height: 100%;
      }
    }
  `],ho=class extends mt{constructor(){super(...arguments),this.usedInCluesHeader=!1,this.appearance="info",this.icon=""}connectedCallback(){super.connectedCallback(),this.checkAndSetImplicitSlot()}checkAndSetImplicitSlot(){this.closest("ktg-clue")&&(this.slot="title")}render(){return j`
      <h2
        class=${ai({"clue-title":!0,"clue-title--header":this.usedInCluesHeader,"clue-title--danger":"danger"===this.appearance})}
      >
        ${si(""!==this.icon,()=>j`
            <ktg-icon
              class=${ai({"clue-title__icon":!0,"clue-title__icon--danger":"danger"===this.appearanceContext})}
              name=${fi(""!==this.icon?this.icon:null)}
              size="default"
            ></ktg-icon>
          `)}

        <span class="clue-title__text">
          <slot></slot>
        </span>
      </h2>
    `}};i(ho,"KTGClueTitleElement"),ho.styles=co,o([Ee({context:eo,subscribe:!0}),wt()],ho.prototype,"appearanceContext",2),o([Ee({context:io})],ho.prototype,"usedInCluesHeader",2),o([kt({type:String,reflect:!0})],ho.prototype,"appearance",2),o([kt({type:String})],ho.prototype,"icon",2),ho=o([ft("ktg-clue-title")],ho);var uo=[...ae,...ne,d`
    :host {
      display: block;
    }

    .clue {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
      position: relative;
    }

    .clue__body {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
    }

    .clue.clue--header,
    .clue--header .clue__body {
      gap: 1rem;
    }
    @media screen and (min-width: ${He}px) {
      .clue--header .clue__body {
        padding-top: 0.5rem;
      }
    }
    .clue__link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background-color: transparent;
      border: 0;
      color: var(--ktg-color-link);
      cursor: pointer;
      text-decoration: none;
      font-size: 0.875rem;
      line-height: 120%;
    }

    .clue__link:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: 0.125rem;
    }

    .clue__link:visited {
      color: var(--ktg-color-link-visited);
    }

    .clue__link--danger {
      color: var(--ktg-color-danger);
    }

    :host([disabled]) .clue__link {
      color: inherit;
      cursor: default;
    }

    .clue__link-text {
      position: relative;
      display: block;
      z-index: 1;
    }

    :host(:not([disabled])) .clue__link-text:hover {
      text-decoration: underline;
    }

    .clue__link::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }

    .clue__link-icon {
      transition: transform 0.125s ease-out;
    }

    @media (prefers-reduced-motion: reduce) {
      .clue__link-icon {
        transition: none;
      }
    }

    :host(:hover) .clue__link-icon.clue__link-icon--animated {
      transform: translateX(0.25rem);
    }
  `],po=class extends mt{constructor(){super(...arguments),this.usedInCluesHeader=!1,this.linkText="",this.linkAppearance="info",this.href="",this.target="",this.disabled=!1,this.linkIcon=""}render(){return j`
      <div
        class=${ai({clue:!0,"clue--header":this.usedInCluesHeader})}
      >
        <slot name="title"></slot>
        <div class="clue__body">
          <slot></slot>
        </div>
        ${si(this.href&&this.linkText,()=>this.renderLink())}
      </div>
    `}renderLink(){return j`
      <a
        class=${ai({clue__link:!0,"clue__link--danger":"danger"===this.linkAppearance})}
        role="link"
        href=${this.href}
        target=${this.target}
        aria-disabled=${this.disabled}
        tabindex=${this.disabled?-1:0}
      >
        <span class="clue__link-text">${this.linkText}</span>

        <ktg-icon
          class=${ai({"clue__link-icon":!0,"clue__link-icon--animated":!this.linkIcon})}
          name=${this.linkIcon?this.linkIcon:"long-arrow-right"}
        >
        </ktg-icon>
      </a>
    `}};i(po,"KTGClueElement"),po.styles=uo,o([Ee({context:io,subscribe:!0})],po.prototype,"usedInCluesHeader",2),o([kt({type:String,attribute:"link-text"})],po.prototype,"linkText",2),o([kt({type:String,attribute:"link-appearance"})],po.prototype,"linkAppearance",2),o([kt({type:String})],po.prototype,"href",2),o([kt({type:String})],po.prototype,"target",2),o([kt({type:Boolean,reflect:!0})],po.prototype,"disabled",2),o([kt({type:String,attribute:"link-icon"})],po.prototype,"linkIcon",2),po=o([ft("ktg-clue")],po);var go=[...ae,d`
    :host {
      display: block;
    }

    .clues {
      color: var(--ktg-color-text);
      background-color: var(--ktg-color-brand2-01);
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    :host([appearance='danger']) .clues {
      background-color: var(--ktg-color-danger-light);
    }
  `],mo=class extends mt{constructor(){super(...arguments),this.appearance="info"}render(){return j`
      <section class="clues">
        <slot></slot>
      </section>
    `}};i(mo,"KTGCluesElement"),mo.styles=go,o([Se({context:eo}),kt({type:String,reflect:!0})],mo.prototype,"appearance",2),mo=o([ft("ktg-clues")],mo);var vo=[...ae,...ne,d`
    :host {
      display: block;
    }

    .clues-header {
      color: var(--ktg-color-text);
      background-color: var(--ktg-color-brand2-01);
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-left: 0rem;
      padding-right: 0rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      min-height: 21.25rem;
      overflow: hidden;
    }

    @media screen and (min-width: ${He}px) {
      .clues-header {
        padding-bottom: 2.5rem;
      }
    }

    :host([appearance='danger']) .clues-header {
      background-color: var(--ktg-color-danger-light);
    }

    .clues-header__inner {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: ${Ue}px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1rem;
      padding-right: 1rem;
      flex: 1 1 auto;
    }

    @media screen and (min-width: ${Ke}px) {
      .clues-header__inner {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }

    @media screen and (min-width: ${He}px) {
      .clues-header__inner {
        padding-left: 6rem;
        padding-right: 6rem;
      }
    }

    .clues-header__header {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }

    .clues-header__close {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
      color: var(--ktg-color-focus);
      text-decoration: none;
      background: none;
      border: none;
      cursor: pointer;
    }

    .clues-header__close-text {
      font-size: 0.875rem;
      line-height: 120%;
    }

    .clues-header__body {
      display: flex;
      flex-direction: row;
      padding-top: 2.6rem;
      padding-bottom: 2.6rem;
      flex: 1 1 auto;
    }

    @media screen and (min-width: ${He}px) {
      .clues-header__body {
        padding-top: 2rem;
        padding-bottom: 2rem;
      }
    }

    .clues-header__controls {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;
    }

    .clues-header__controls-text {
      font-size: 0.875rem;
      line-height: 120%;
      color: var(--ktg-color-text);
    }

    .clues-header__control {
      display: flex;
      flex-direction: row;
      justify-content: center;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--ktg-color-focus);
    }

    .clues-header__body {
      position: relative;
      --ktg-clue-translation-x: 1rem;
    }
    @media screen and (min-width: ${He}px) {
      .clues-header__body {
        --ktg-clue-translation-x: 2rem;
      }
    }

    .clues-header__body ktg-clue {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      max-width: 46rem;
      transition:
        opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
        transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
      transition-delay: 0.3s;
    }

    .clues-header__body.ltr ktg-clue.new {
      opacity: 0;
      transform: translateY(-50%)
        translateX(calc(var(--ktg-clue-translation-x) * -1));
    }

    .clues-header__body.ltr ktg-clue.old {
      opacity: 0;
      transform: translateY(-50%) translateX(var(--ktg-clue-translation-x));
      transition-delay: 0s;
    }

    .clues-header__body.rtl ktg-clue.new {
      opacity: 0;
      transform: translateY(-50%) translateX(var(--ktg-clue-translation-x));
    }

    .clues-header__body.rtl ktg-clue.old {
      opacity: 0;
      transform: translateY(-50%)
        translateX(calc(var(--ktg-clue-translation-x) * -1));
      transition-delay: 0s;
    }

    .clues-header__body ::slotted(ktg-clue) {
      width: 100%;
      flex: 0 0 auto;
      max-width: 46rem;
      pointer-events: none;
      user-select: none;
      opacity: 0;
    }
  `],fo=class extends CustomEvent{static{i(this,"KTGCluesHeaderCloseEvent")}constructor(t){super("close",t)}},bo=class extends mt{constructor(){super(...arguments),this.appearance="info",this._inHeader=!0,this.isClosed=!1,this._cluesCount=0,this._currentClueIndex=0,this._availableClues=[]}onClose(t){t.stopPropagation(),t.preventDefault(),this.isClosed=!0,this.dispatchEvent(new fo({bubbles:!0,cancelable:!1}))}render(){return j`${si(!this.isClosed,()=>this.renderContent(),()=>j``)}`}onSlotChange(){let t=this.shadowRoot?.querySelector("slot");if(!t)return;let e=t.assignedElements({flatten:!0});this._availableClues=e.filter(t=>"ktg-clue"===t.tagName.toLowerCase()),this._cluesCount=this._availableClues.length,this.showClue(0)}showClue(t){let e=t<0?this._cluesCount-1:t%this._cluesCount;this._currentClueIndex=e;let i=this._bodyElement?.querySelector("ktg-clue"),o=!1;i&&(this._cluesCount>1?(i.addEventListener("transitionend",t=>{"opacity"===t.propertyName&&i.remove()}),i.classList.add("old"),o=!0):i.remove());let n=this._availableClues[this._currentClueIndex].cloneNode(!0);n&&(o&&(n.classList.add("new"),requestAnimationFrame(()=>{n.classList.remove("new")})),this._bodyElement?.appendChild(n))}showPreviousClue(t){this._bodyElement?.classList.remove("rtl"),this._bodyElement?.classList.add("ltr"),t?.stopPropagation(),t?.preventDefault(),this.showClue(this._currentClueIndex-1)}showNextClue(t){this._bodyElement?.classList.remove("ltr"),this._bodyElement?.classList.add("rtl"),t?.stopPropagation(),t?.preventDefault(),this.showClue(this._currentClueIndex+1)}renderContent(){return j`
      <section class="clues-header">
        <div class="clues-header__inner">
          <div class="clues-header__header">
            <button
              @click=${this.onClose}
              type="button"
              aria-label="Info schliessen"
              class="clues-header__close"
            >
              <span class="clues-header__close-text">Info schliessen</span>
              <ktg-icon
                class="clues-header__close-icon"
                name="close"
              ></ktg-icon>
            </button>
          </div>
          <div class="clues-header__body ltr">
            <slot @slotchange=${this.onSlotChange}></slot>
          </div>
          ${si(this._cluesCount>1,()=>j`
              <div class="clues-header__controls">
                <button
                  class="clues-header__control clues-header__control--previous"
                  @click=${this.showPreviousClue}
                >
                  <ktg-icon name="long-arrow-left"></ktg-icon>
                </button>
                <span class="clues-header__controls-text"
                  >${this._currentClueIndex+1} von ${this._cluesCount}</span
                >
                <button
                  class="clues-header__control clues-header__control--next"
                  @click=${this.showNextClue}
                >
                  <ktg-icon name="long-arrow-right"></ktg-icon>
                </button>
              </div>
            `)}
        </div>
      </section>
    `}};i(bo,"KTGCluesHeaderElement"),bo.styles=vo,o([Se({context:eo}),kt({type:String,reflect:!0})],bo.prototype,"appearance",2),o([Se({context:io})],bo.prototype,"_inHeader",2),o([wt()],bo.prototype,"isClosed",2),o([wt()],bo.prototype,"_cluesCount",2),o([wt()],bo.prototype,"_currentClueIndex",2),o([Ct(".clues-header__body")],bo.prototype,"_bodyElement",2),bo=o([ft("ktg-clues-header")],bo);var yo=[...ae,...ne,d`
    :host {
      position: relative;
      display: inline-block;
      outline: 0;
      touch-action: manipulation;
    }

    .content-switcher-button {
      position: relative;
      font-size: 0.875rem;
      line-height: 120%;
      background-color: transparent;
      border: none;
      height: 100%;
      padding-top: 0.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 0.5rem;
      cursor: pointer;
      width: 100%;
      text-align: center;
    }

    :host([active]) .content-switcher-button {
      color: var(--ktg-color-dark-contrast);
      background-color: var(--ktg-color-brand1-01);
    }

    :host([active]) .content-switcher-button--was-rendered {
      transition: background-color ease-out 0s 0.3s;
    }

    :host([disabled]) .content-switcher-button {
      color: var(--ktg-color-neutral-04);
      cursor: pointer;
      pointer-events: none;
    }

    .content-switcher-button__hover {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: var(--ktg-color-neutral-02);
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }

    :host(:hover:not([active])) .content-switcher-button__hover {
      opacity: 1;
    }

    .content-switcher-button__disabled {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: var(--ktg-color-neutral-03);
      opacity: 0;
    }

    :host([disabled]) .content-switcher-button__disabled {
      opacity: 1;
    }

    .content-switcher-button__focus {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: transparent;
      z-index: 3;
    }

    :host(:focus-visible) .content-switcher-button__focus {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: -0.125rem;
      border: 0.25rem solid var(--ktg-color-dark-contrast);
    }

    .content-switcher-button__label {
      position: relative;
      z-index: 2;
      color: var(--ktg-color-neutral-05);
      transition: color 0.3s ease-out;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      white-space: nowrap;
      user-select: none;
    }

    @media (prefers-reduced-motion: reduce) {
      .content-switcher-button__label {
        transition: none;
      }
    }

    :host([active]) .content-switcher-button__label {
      color: var(--ktg-color-dark-contrast);
    }

    :host([disabled]) .content-switcher-button__label {
      color: var(--ktg-color-neutral-04);
    }
  `],ko=class extends mt{constructor(){super(...arguments),this.active=!1,this.disabled=!1,this.for="",this.onClick=t=>{this.disabled&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault())}}connectedCallback(){super.connectedCallback(),this.role="tab",this.id=`ktg-content-switcher-button-${this.for}`,this.addEventListener("click",this.onClick)}firstUpdated(t){super.firstUpdated(t),this.button.classList.add("content-switcher-button--was-rendered")}willUpdate(t){super.willUpdate(t),t.has("active")&&this.setAttribute("aria-selected",this.active.toString()),t.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString()),(t.has("active")||t.has("disabled"))&&(this.disabled?this.tabIndex=-1:this.tabIndex=this.active?0:-1)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.onClick)}moveIntoView(){Ht.scrollIntoView(this,{behavior:"smooth",block:"nearest",inline:"nearest",respectPrefersReducedMotion:!0})}render(){return j`
      <div class="content-switcher-button">
        <span class="content-switcher-button__hover"></span>
        <span class="content-switcher-button__disabled"></span>
        <span class="content-switcher-button__focus"></span>
        <span class="content-switcher-button__label">
          <slot></slot>
        </span>
      </div>
    `}};i(ko,"KTGContentSwitcherButtonElement"),ko.styles=yo,o([kt({type:Boolean,reflect:!0})],ko.prototype,"active",2),o([kt({type:Boolean,reflect:!0})],ko.prototype,"disabled",2),o([kt({type:String})],ko.prototype,"for",2),o([Ct(".content-switcher-button")],ko.prototype,"button",2),ko=o([ft("ktg-content-switcher-button")],ko);var wo=[...ae,...ne,d`
    :host {
      position: relative;
      display: block;
      width: 100%;
      min-height: 100%;
      transition: height 0.3s ease-out;
    }
  `];function _o(t,e,i){return typeof t===e?()=>t:"function"==typeof t?t:i}i(_o,"ensureMethod");var xo=class{constructor(t,{direction:e,elementEnterAction:i,elements:o,focusInIndex:n,isFocusableElement:r,listenerScope:a}={elements:()=>[]}){this._currentIndex=-1,this._direction=()=>"both",this.directionLength=5,this.elementEnterAction=t=>{},this._focused=!1,this._focusInIndex=t=>0,this.isFocusableElement=t=>!0,this._listenerScope=()=>this.host,this.offset=0,this.handleFocusin=t=>{if(!this.isEventWithinListenerScope(t))return;this.isRelatedTargetAnElement(t)&&this.hostContainsFocus();let e=t.composedPath(),i=-1;e.find(t=>(i=this.elements.indexOf(t),-1!==i)),this.currentIndex=i>-1?i:this.currentIndex},this.handleFocusout=t=>{this.isRelatedTargetAnElement(t)&&this.hostNoLongerContainsFocus()},this.handleKeydown=t=>{if(!this.acceptsEventCode(t.code)||t.defaultPrevented)return;let e=0;switch(t.code){case"ArrowRight":e+=1;break;case"ArrowDown":e+="grid"===this.direction?this.directionLength:1;break;case"ArrowLeft":e-=1;break;case"ArrowUp":e-="grid"===this.direction?this.directionLength:1;break;case"End":this.currentIndex=0,e-=1;break;case"Home":this.currentIndex=this.elements.length-1,e+=1}t.preventDefault(),"grid"===this.direction&&this.currentIndex+e<0?this.currentIndex=0:"grid"===this.direction&&this.currentIndex+e>this.elements.length-1?this.currentIndex=this.elements.length-1:this.setCurrentIndexCircularly(e),this.elementEnterAction(this.elements[this.currentIndex]),this.focus()},this.host=t,this.host.addController(this),this._elements=o,this.isFocusableElement=r||this.isFocusableElement,this._direction=_o(e,"string",this._direction),this.elementEnterAction=i||this.elementEnterAction,this._focusInIndex=_o(n,"number",this._focusInIndex),this._listenerScope=_o(a,"object",this._listenerScope)}static{i(this,"FocusGroupController")}get currentIndex(){return-1===this._currentIndex&&(this._currentIndex=this.focusInIndex),this._currentIndex-this.offset}set currentIndex(t){this._currentIndex=t+this.offset}get elements(){return this._elements()}get currentlyFocusedElement(){return this.elements?.[this._currentIndex]||null}get direction(){return this._direction()}set focused(t){t!==this.focused&&(this._focused=t)}get focused(){return this._focused}get focusInElement(){return this.elements[this.focusInIndex]}get focusInIndex(){return this._focusInIndex(this.elements)}hostConnected(){this.addEventListeners()}hostDisconnected(){this.removeEventListeners()}manage(){this.addEventListeners()}unmanage(){this.removeEventListeners()}addEventListeners(){this.host.addEventListener("focusin",this.handleFocusin)}removeEventListeners(){this.host.removeEventListener("focusin",this.handleFocusin),this.host.removeEventListener("focusout",this.handleFocusout),this.host.removeEventListener("keydown",this.handleKeydown)}update({elements:t}={elements:()=>[]}){this.unmanage(),this._elements=t,this.manage()}focus(t){let e=this.elements;if(!e.length)return;let i=e[this.currentIndex];(!i||!this.isFocusableElement(i))&&(this.setCurrentIndexCircularly(1),i=e[this.currentIndex]),i&&this.isFocusableElement(i)&&i.focus(t)}setCurrentIndexCircularly(t){let{length:e}=this.elements,i=e,o=(e+this.currentIndex+t)%e;for(;i&&this.elements[o]&&!this.isFocusableElement(this.elements[o]);)o=(e+o+t)%e,i-=1;this.currentIndex=o}isEventWithinListenerScope(t){return this._listenerScope()===this.host||t.composedPath().includes(this._listenerScope())}hostContainsFocus(){this.host.addEventListener("focusout",this.handleFocusout),this.host.addEventListener("keydown",this.handleKeydown),this.focused=!0}hostNoLongerContainsFocus(){this.host.addEventListener("focusin",this.handleFocusin),this.host.removeEventListener("focusout",this.handleFocusout),this.host.removeEventListener("keydown",this.handleKeydown),this.focused=!1}isRelatedTargetAnElement(t){let e=t.relatedTarget;return!this.elements.includes(e)}acceptsEventCode(t){if("End"===t||"Home"===t)return!0;switch(this.direction){case"horizontal":return"ArrowLeft"===t||"ArrowRight"===t;case"vertical":return"ArrowUp"===t||"ArrowDown"===t;case"both":case"grid":return t.startsWith("Arrow")}}};function Co(t,e){let o,n=[];return(...r)=>new Promise((a,s)=>{let l=i(()=>{o=null;let e=t(...r);e instanceof Promise?e.then(a).catch(s):a(e);for(let t=0;t<n.length;t++)n[t](e);n=[]},"later");o&&clearTimeout(o),o=setTimeout(l,e),n.push(a)})}i(Co,"ktgDebounce");var So=class t{constructor(e){this.letterRegex=/^[\p{L} 0-9]$/u,this._debouncedReset=null,this.eventBus=new ge("ktg-typeahead"),this.items=[],this.letters=[],this.config={autoReset:!1,resetAfterDelay:t.DEFAULT_RESET_AFTER_DELAY},this.config={...this.config,...e},this.setupAutoReset()}static{i(this,"KTGTypeahead")}static{this.DEFAULT_RESET_AFTER_DELAY=750}setupAutoReset(){this.config.autoReset?this._debouncedReset=Co(()=>{this.reset(),this.eventBus.emit("reset")},this.config.resetAfterDelay):this._debouncedReset=null}setItems(t){this.items=t,this.reset()}onKeydown(t){let{key:e}=t;if(this.letterRegex.test(e)){this.letters.push(e);let t=this.findMatch();t&&this.eventBus.emit("match",t)}this._debouncedReset?.()}isTyping(){return this.letters.length>0}findMatch(){for(let t=0;t<this.items.length;t++){let e=this.items[t];if(this.isMatch(e,this.letters))return{item:e,index:t}}return null}isMatch(t,e){let i=[t.getItemLabel(),...t.getItemKeywords?.()??[]];for(let t of i)if(this.isKeywordMatch(t,e))return!0;return!1}isKeywordMatch(t,e){let i=this.normalizeString(t),o=this.normalizeString(e.join(""));return i.startsWith(o)}normalizeString(t){return t.toLowerCase()}reset(){this.letters=[]}destroy(){this.eventBus.destroy(),this.items=[],this.reset()}on(t,e,i){return this.eventBus.on(t,e,i)}off(t,e){this.eventBus.off(t,e)}},Eo=class t{constructor(){this.eventBus=new ge("ktg-list-key-manager-"+ ++t.idCounter),this._activeIndex=-1,this._activeItem=null,this._items=[],this._shouldWrap=!1,this._enableHomeAndEnd=!1,this._typeahead=null,this._layout="vertical",this._isPaused=!1}static{i(this,"KTGListKeyManager")}static{this.idCounter=-1}withWrap(){return this._shouldWrap=!0,this}withVerticalLayout(){return this._layout="vertical",this}withHorizontalLayout(){return this._layout="horizontal",this}withHomeAndEnd(){return this._enableHomeAndEnd=!0,this}withTypeahead(t){return this._typeahead&&this._typeahead.destroy(),this._typeahead=new So(t),this._typeahead.setItems(this._items),this._typeahead.on("match",({index:t})=>{this.index(t)}),this}setItems(t){this._items=t,this._typeahead?.setItems(t),this.updateActiveItem(this._activeIndex)}findItemIndex(t){return this._items.indexOf(t)}index(t){if(this._isPaused||t===this._activeIndex)return;let e=t;this._shouldWrap&&(e=this.wrappedIndex(e)),this.canActivate(e)&&(e=this.safeIndex(e),this.updateActiveItem(e))}next(){let t=this.findClosestActivatableIndex(this._activeIndex,1);null!==t&&this.index(t)}previous(){let t=this.findClosestActivatableIndex(-1===this._activeIndex?0:this._activeIndex,-1);null!==t&&this.index(t)}first(){this.index(0)}last(){this.index(this._items.length-1)}onKeydown(t){if(!this._isPaused)if(t.ctrlKey)switch(t.preventDefault(),t.stopPropagation(),t.code){case"KeyN":this.next();break;case"KeyP":this.previous()}else switch(t.code){case"ArrowDown":"vertical"===this._layout&&this.next();break;case"ArrowUp":"vertical"===this._layout&&this.previous();break;case"ArrowRight":"horizontal"===this._layout&&this.next();break;case"ArrowLeft":"horizontal"===this._layout&&this.previous();break;case"Home":this._enableHomeAndEnd&&this.first();break;case"End":this._enableHomeAndEnd&&this.last();break;default:this._typeahead?.onKeydown(t)}}isTyping(){return this._typeahead?.isTyping()??!1}on(t,e){return this.eventBus.on(t,e)}off(t,e){this.eventBus.off(t,e)}deactivate(){this.updateActiveItem(-1)}pause(){this._isPaused=!0}resume(){this._isPaused=!1}destroy(){this._activeIndex=-1,this._activeItem=null,this._items=[],this.eventBus.destroy()}updateActiveItem(t){let e=this._items[t]??null;this.onActivateItem(e,t),this._activeIndex=t,this._activeItem=e,this.eventBus.emit("change",this._activeItem)}findClosestActivatableIndex(t,e){let i=t,o=0,n=!1;do{i=this.wrappedIndex(i+e),o++,n=this.canActivate(i)}while(!n&&o<this._items.length);return!n&&o>=this._items.length?null:i}canActivate(t){if(t<0||t>=this._items.length)return!1;let e=this._items[t];return!!e&&!e.disabled}wrappedIndex(t){return(t+this._items.length)%this._items.length}safeIndex(t){return Bt(t,0,this._items.length-1)}onActivateItem(t,e){}get activeItem(){return this._activeItem}get activeIndex(){return this._activeIndex}},To=class extends Eo{static{i(this,"KTGActiveDescendantKeyManager")}onActivateItem(t,e){super.onActivateItem(t,e);let i=this.activeItem;i&&i.removeActiveStyles(),t&&t.setActiveStyles()}},Io=class extends Eo{static{i(this,"KTGFocusKeyManager")}onActivateItem(t,e){super.onActivateItem(t,e),t&&t.focus()}},$o=class extends xo{static{i(this,"RovingTabindexController")}set focused(t){t!==this.focused&&(super.focused=t,this.manageTabindexes())}get focused(){return super.focused}manageTabindexes(){this.focused?this.updateTabindexes(()=>({tabIndex:-1})):this.updateTabindexes(t=>({removeTabIndex:t.contains(this.focusInElement)&&t!==this.focusInElement,tabIndex:t===this.focusInElement?0:-1}))}updateTabindexes(t){this.elements.forEach(e=>{let{tabIndex:i,removeTabIndex:o}=t(e);if(!o)return void(e.tabIndex=i);e.removeAttribute("tabindex");let n=e;n.requestUpdate&&n.requestUpdate()})}manage(){this.manageTabindexes(),super.manage()}unmanage(){this.updateTabindexes(()=>({tabIndex:0})),super.unmanage()}hostUpdated(){this.host.hasUpdated||this.manageTabindexes()}},Oo=class{constructor(t,e){this.name=t,this.group=e,this._button=null,this._panel=null,this.onClick=()=>{this.group.activate(this.name),this._button?.moveIntoView()},this.onKeydown=t=>{if(!(t.altKey||t.ctrlKey||t.metaKey))switch(t.code){case"Space":case"Enter":this.group.activate(this.name),this._button?.moveIntoView()}}}static{i(this,"KTGContentSwitcherButtonPanelRelation")}get button(){return this._button}get panel(){return this._panel}get isActive(){return this.button?.active||!1}setButton(t){t?(this._button=t,this._button.addEventListener("click",this.onClick),this._button.addEventListener("keydown",this.onKeydown),this.linkButtonAndPanel()):(this._button?.removeEventListener("click",this.onClick),this._button?.removeEventListener("keydown",this.onKeydown),this._button=null)}setPanel(t){this._panel=t,this.linkButtonAndPanel()}activate(){this._button&&(this._button.active=!0),this._panel&&(this._panel.active=!0)}deactivate(){this._button&&(this._button.active=!1),this._panel&&(this._panel.active=!1)}linkButtonAndPanel(){this._button&&this._panel&&(this._button.setAttribute("aria-controls",`${this._button?.for}`),this._panel.setAttribute("aria-labelledby",`${this._button?.id}`))}},Lo=class{constructor(t){this.name=t,this.switcher=null,this.buttons=[],this.outlet=null,this.buttonPanelRelations=new Map,this.currentRelation=null,this.rovingTabindexController=null,this.onSwitcherSlotChange=()=>{if(!this.switcher)return;this.buttons=Array.from(this.switcher.children);let t=null;for(let e of this.buttons){let i=this.getRelation(e.for);i?.setButton(e),e.active&&!e.disabled&&(t=i)}if(!t)for(let e of this.buttons)if(!e.disabled){t=this.getRelation(e.for);break}t&&this.activate(t.name,!1)},this.onOutletSlotChange=()=>{if(!this.outlet)return;let t=Array.from(this.outlet.children);for(let e of t)this.getRelation(e.id)?.setPanel(e)}}static{i(this,"KTGContentSwitcherGroup")}setSwitcher(t){this.switcher=t,this.switcher?(this.rovingTabindexController=new $o(this.switcher,{direction:"horizontal",elements:()=>Array.from(this.switcher?.children||[]),focusInIndex:t=>t.findIndex(t=>t.active),isFocusableElement:t=>!t.disabled,elementEnterAction:t=>{this.activate(t.for,!1),t.moveIntoView()}}),this.switcher.shadowRoot?.addEventListener("slotchange",this.onSwitcherSlotChange)):this.rovingTabindexController=null}setOutlet(t){this.outlet=t,this.outlet&&this.outlet.shadowRoot?.addEventListener("slotchange",this.onOutletSlotChange)}async activate(t,e=!0){let i=this.currentRelation,o=this.getRelation(t);o&&(i?.deactivate(),await Ie(),o.button&&i?.button&&this.switcher?.animateDecoration(o.button,i.button,e),o.panel&&i?.panel&&o!==i&&this.outlet?.animateInPanel(o.panel,i.panel),o.activate(),this.currentRelation=o)}getRelation(t){return this.buttonPanelRelations.has(t)||this.buttonPanelRelations.set(t,new Oo(t,this)),this.buttonPanelRelations.get(t)}isEmpty(){return null===this.switcher&&null===this.outlet}},Do=class{constructor(){this.groups=new Map}registerSwitcher(t,e){this.getGroup(t)?.setSwitcher(e)}unregisterSwitcher(t){let e=this.getGroup(t);e&&(e.setSwitcher(null),this.cleanupGroup(e))}registerOutlet(t,e){this.getGroup(t)?.setOutlet(e)}unregisterOutlet(t){let e=this.getGroup(t);e&&(e.setOutlet(null),this.cleanupGroup(e))}getGroup(t){return this.groups.has(t)||this.groups.set(t,new Lo(t)),this.groups.get(t)}cleanupGroup(t){t?.isEmpty()&&this.groups.delete(t.name)}};i(Do,"KTGContentSwitcherService"),Do=o([Le],Do);var Ao=class extends mt{constructor(){super(...arguments),this.activeAnimations=new Set,this.name=""}updated(t){if(super.updated(t),t.has("name")){let e=t.get("name");e&&this.contentSwitcherService.unregisterOutlet(e),this.contentSwitcherService.registerOutlet(this.name,this)}}disconnectedCallback(){super.disconnectedCallback(),this.contentSwitcherService.unregisterOutlet(this.name)}async animateInPanel(t,e){let i=++Ao.animationIdCounter;this.activeAnimations.add(i);let o=this.panels.findIndex(t=>t===e),n=this.panels.findIndex(e=>e===t)>o?-1:1,r={duration:300,easing:"ease-out"};this.style.overflow="hidden",e.style.position="absolute",e.style.display="block",e.style.overflow="hidden",t.style.position="relative",t.style.display="block",t.style.overflow="hidden";let a=Ht.animate(this,{keyframes:[{height:`${e.clientHeight}px`},{height:`${t.clientHeight}px`}],options:r,respectPrefersReducedMotion:!0}),s=Ht.animate(e,{keyframes:[{transform:"translateX(0)"},{transform:`translateX(${100*n}%)`}],options:r,respectPrefersReducedMotion:!0}),l=Ht.animate(t,{keyframes:[{transform:`translateX(${-1*n*100}%)`},{transform:"translateX(0)"}],options:r,respectPrefersReducedMotion:!0});await Promise.all([a.finished,s.finished,l.finished]),this.activeAnimations.delete(i),0===this.activeAnimations.size&&(this.style.overflow="",e.style.overflow="",t.style.overflow=""),e.style.position="",e.style.display="",t.style.position="",t.style.display=""}render(){return j`<slot></slot>`}};i(Ao,"KTGContentSwitcherOutletElement"),Ao.styles=wo,Ao.animationIdCounter=0,o([De(Do)],Ao.prototype,"contentSwitcherService",2),o([kt({type:String})],Ao.prototype,"name",2),o([Et({flatten:!0})],Ao.prototype,"panels",2),Ao=o([ft("ktg-content-switcher-outlet")],Ao);var Mo=[...ae,...ne,d`
    :host {
      display: none;
      position: absolute;
      width: 100%;
      background-color: var(--ktg-panel-background-color, transparent);
      top: 0;
      left: 0;
    }

    :host([active]) {
      display: block;
      position: relative;
    }

    :host(:focus-visible) {
      outline: 0.125rem solid var(--ktg-color-focus);
      /*
        NOTE:
        This is done, so the outline is still visible in cases where the panel
        is inside a container with an overflow other than 'visible'.
      */
      outline-offset: -0.125rem;
    }
  `],Bo=class extends mt{constructor(){super(...arguments),this.active=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tabpanel"),this.tabIndex=this.hasAttribute("tabindex")?this.tabIndex:0}willUpdate(t){super.willUpdate(t),t.has("active")&&(this.hidden=!this.active)}render(){return j`<slot></slot>`}};i(Bo,"KTGContentSwitcherPanelElement"),Bo.styles=Mo,o([kt({type:Boolean,reflect:!0})],Bo.prototype,"active",2),Bo=o([ft("ktg-content-switcher-panel")],Bo);var zo=[...ae,...ne,d`
    :host {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    :host([auto-width]) {
      width: fit-content;
    }

    :host([appearance='white']) {
      background-color: var(--ktg-color-background-01);
    }

    :host([appearance='grey']) {
      background-color: var(--ktg-color-neutral-01);
    }

    .content-switcher {
      position: relative;
      width: inherit;
    }

    .content-switcher__tabs {
      padding: 0.25rem;
      width: 100%;
      overflow-x: auto;
      scrollbar-width: none;
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
    }

    .content-switcher__tabs::-webkit-scrollbar {
      display: none;
    }

    :host([auto-width]) .content-switcher__tabs {
      display: flex;
      width: fit-content;
    }

    .content-switcher__decoration-track {
      position: absolute;
      top: 0.25rem;
      left: 0.25rem;
      height: calc(100% - (0.25rem + 0.25rem));
      width: calc(100% - (0.25rem + 0.25rem));
      overflow: hidden;
      pointer-events: none;
    }

    .content-switcher__decoration {
      position: absolute;
      display: none;
      height: 100%;
      width: 0.0625rem;
      background-color: var(--ktg-color-brand1-01);
      transform-origin: left;
    }
  `],No=class extends mt{constructor(){super(...arguments),this.appearance="white",this.autoWidth=!1,this.name=""}firstUpdated(t){super.firstUpdated(t),Ht.prefersReducedMotion()||(this.decorationElement.style.transition="transform 0.3s ease-out"),this.decorationElement.style.display="none"}disconnectedCallback(){super.disconnectedCallback(),this.contentSwitcherService.unregisterSwitcher(this.name)}updated(t){if(super.updated(t),t.has("name")){let e=t.get("name");e&&this.contentSwitcherService.unregisterSwitcher(e),this.contentSwitcherService.registerSwitcher(this.name,this)}}async animateDecoration(t,e,i=!0){i?(Ht.prefersReducedMotion()||(this.decorationElement.style.transition="transform 0.3s ease-out"),this.decorationElement.style.display="none"):(this.decorationElement.style.transition="",this.decorationElement.style.display="none");let o=t.getBoundingClientRect(),n=this.decorationTrackElement.getBoundingClientRect(),r=o.width,a=o.left-n.left,s=r,l=a;if(e){let t=e.getBoundingClientRect();s=t.width,l=t.left-n.left}this.decorationElement.style.display="block",this.decorationElement.style.transform=`translateX(${l}px) scaleX(${s})`,await Ie(),this.decorationElement.addEventListener("transitionend",()=>{this.decorationElement.style.display="none"},{once:!0}),this.decorationElement.style.transform=`translateX(${a}px) scaleX(${r})`}render(){return j`
      <div class="content-switcher">
        <div
          class="content-switcher__tabs"
          role="tablist"
        >
          <slot></slot>
        </div>

        <div class="content-switcher__decoration-track">
          <div class="content-switcher__decoration"></div>
        </div>
      </div>
    `}};i(No,"KTGContentSwitcherElement"),No.styles=zo,o([De(Do)],No.prototype,"contentSwitcherService",2),o([kt({type:String,reflect:!0})],No.prototype,"appearance",2),o([kt({type:Boolean,reflect:!0,attribute:"auto-width"})],No.prototype,"autoWidth",2),o([kt({type:String})],No.prototype,"name",2),o([Ct(".content-switcher__decoration-track")],No.prototype,"decorationTrackElement",2),o([Ct(".content-switcher__decoration")],No.prototype,"decorationElement",2),No=o([ft("ktg-content-switcher")],No);var Ro="ktg-context-menu-display-focus-ring",Po="activate",Fo=class extends CustomEvent{static{i(this,"KTGContextMenuButtonHoverEvent")}constructor(t){super("hover",t)}},Vo=class extends CustomEvent{static{i(this,"KTGContextMenuButtonActivateEvent")}constructor(t){super(Po,t)}},Ko=[...ae,...ne,d`
    :host {
      display: flex;
      width: fit-content;
    }

    .button {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding-top: 0.5rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 0.5rem;
      border: 0;
      outline: 0;
      background: transparent;
      cursor: pointer;
      width: 100%;
      text-align: left;
      transition: background-color 0.15s ease-out;
      touch-action: manipulation;
    }

    .button:hover {
      background-color: var(--ktg-color-brand2-01);
    }

    :host([display-focus-ring]) .button:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: -0.125rem;
    }

    :host([display-focus-ring]) .button:hover {
      background: transparent;
    }

    .button[disabled] {
      cursor: default;
      background-color: transparent;
    }

    .button__label {
      flex-grow: 1;
      font-size: 0.75rem;
      font-weight: 500;
      line-height: 120%;
      white-space: nowrap;
      user-select: none;
    }

    .button[disabled] .button__label {
      color: var(--ktg-color-neutral-04);
    }

    .button__icon {
      flex-shrink: 0;
      color: var(--ktg-color-link);
    }

    .button[disabled] .button__icon {
      color: var(--ktg-color-neutral-04);
    }
  `],Ho=class extends mt{constructor(){super(...arguments),this.displayFocusRing=!1,this.icon="",this.disabled=!1}connectedCallback(){super.connectedCallback()}render(){return j`
      <button
        class="button"
        role="menuitem"
        ?disabled=${this.disabled}
        @mousemove=${this.onHover}
        @click=${this.onClick}
      >
        <span class="button__label">
          <slot></slot>
        </span>

        ${this.renderIcon()}
      </button>
    `}renderIcon(){return this.icon?j`
        <ktg-icon
          class="button__icon"
          .name=${this.icon}
        ></ktg-icon>
      `:j``}getItemLabel(){return this.labelElement.textContent?.trim()??""}onHover(){this.dispatchEvent(new Fo({bubbles:!0,cancelable:!1}))}onClick(t){!this.dispatchEvent(new Vo({bubbles:!0,cancelable:!0}))&&t.preventDefault()}};i(Ho,"KTGContextMenuButtonElement"),Ho.styles=Ko,Ho.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},o([Ee({context:Ro,subscribe:!0}),kt({type:Boolean,reflect:!0,attribute:"display-focus-ring"})],Ho.prototype,"displayFocusRing",2),o([kt({type:String})],Ho.prototype,"icon",2),o([kt({type:Boolean,reflect:!0})],Ho.prototype,"disabled",2),o([Ct(".button__label")],Ho.prototype,"labelElement",2),Ho=o([ft("ktg-context-menu-button")],Ho);var Go=[...ae,...ne,d`
    .context-menu-title {
      margin-top: 0.75rem;
      margin-bottom: 0.5rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      font-size: 1rem;
      line-height: 120%;
    }
  `],Uo=class extends mt{render(){return j`
      <h2 class="context-menu-title">
        <slot></slot>
      </h2>
    `}};i(Uo,"KTGContextMenuTitleElement"),Uo.styles=Go,Uo=o([ft("ktg-context-menu-title")],Uo);var Wo=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],Yo=Wo.join(","),qo=typeof Element>"u",jo=qo?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Zo=!qo&&Element.prototype.getRootNode?function(t){var e;return null==t||null===(e=t.getRootNode)||void 0===e?void 0:e.call(t)}:function(t){return t?.ownerDocument},Xo=i(function t(e,i){var o;void 0===i&&(i=!0);var n=null==e||null===(o=e.getAttribute)||void 0===o?void 0:o.call(e,"inert");return""===n||"true"===n||i&&e&&t(e.parentNode)},"isInert"),Jo=i(function(t){var e,i=null==t||null===(e=t.getAttribute)||void 0===e?void 0:e.call(t,"contenteditable");return""===i||"true"===i},"isContentEditable"),Qo=i(function(t,e,i){if(Xo(t))return[];var o=Array.prototype.slice.apply(t.querySelectorAll(Yo));return e&&jo.call(t,Yo)&&o.unshift(t),o.filter(i)},"getCandidates"),tn=i(function t(e,i,o){for(var n=[],r=Array.from(e);r.length;){var a=r.shift();if(!Xo(a,!1))if("SLOT"===a.tagName){var s=a.assignedElements(),l=t(s.length?s:a.children,!0,o);o.flatten?n.push.apply(n,l):n.push({scopeParent:a,candidates:l})}else{jo.call(a,Yo)&&o.filter(a)&&(i||!e.includes(a))&&n.push(a);var c=a.shadowRoot||"function"==typeof o.getShadowRoot&&o.getShadowRoot(a),d=!Xo(c,!1)&&(!o.shadowRootFilter||o.shadowRootFilter(a));if(c&&d){var h=t(!0===c?a.children:c.children,!0,o);o.flatten?n.push.apply(n,h):n.push({scopeParent:a,candidates:h})}else r.unshift.apply(r,a.children)}}return n},"getCandidatesIteratively"),en=i(function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},"hasTabIndex"),on=i(function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||Jo(t))&&!en(t)?0:t.tabIndex},"getTabIndex"),nn=i(function(t,e){var i=on(t);return i<0&&e&&!en(t)?0:i},"getSortOrderTabIndex"),rn=i(function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},"sortOrderedTabbables"),an=i(function(t){return"INPUT"===t.tagName},"isInput"),sn=i(function(t){return an(t)&&"hidden"===t.type},"isHiddenInput"),ln=i(function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some(function(t){return"SUMMARY"===t.tagName})},"isDetailsWithSummary"),cn=i(function(t,e){for(var i=0;i<t.length;i++)if(t[i].checked&&t[i].form===e)return t[i]},"getCheckedRadio"),dn=i(function(t){if(!t.name)return!0;var e,o=t.form||Zo(t),n=i(function(t){return o.querySelectorAll('input[type="radio"][name="'+t+'"]')},"queryRadios");if(typeof window<"u"&&typeof window.CSS<"u"&&"function"==typeof window.CSS.escape)e=n(window.CSS.escape(t.name));else try{e=n(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var r=cn(e,t.form);return!r||r===t},"isTabbableRadio"),hn=i(function(t){return an(t)&&"radio"===t.type},"isRadio"),un=i(function(t){return hn(t)&&!dn(t)},"isNonTabbableRadio"),pn=i(function(t){var e,i,o,n,r=t&&Zo(t),a=null===(e=r)||void 0===e?void 0:e.host,s=!1;if(r&&r!==t)for(s=!!(null!==(i=a)&&void 0!==i&&null!==(o=i.ownerDocument)&&void 0!==o&&o.contains(a)||null!=t&&null!==(n=t.ownerDocument)&&void 0!==n&&n.contains(t));!s&&a;){var l,c,d;s=!(null===(c=a=null===(l=r=Zo(a))||void 0===l?void 0:l.host)||void 0===c||null===(d=c.ownerDocument)||void 0===d||!d.contains(a))}return s},"isNodeAttached"),gn=i(function(t){var e=t.getBoundingClientRect(),i=e.width,o=e.height;return 0===i&&0===o},"isZeroArea"),mn=i(function(t,e){var i=e.displayCheck,o=e.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var n=jo.call(t,"details>summary:first-of-type")?t.parentElement:t;if(jo.call(n,"details:not([open]) *"))return!0;if(i&&"full"!==i&&"legacy-full"!==i){if("non-zero-area"===i)return gn(t)}else{if("function"==typeof o){for(var r=t;t;){var a=t.parentElement,s=Zo(t);if(a&&!a.shadowRoot&&!0===o(a))return gn(t);t=t.assignedSlot?t.assignedSlot:a||s===t.ownerDocument?a:s.host}t=r}if(pn(t))return!t.getClientRects().length;if("legacy-full"!==i)return!0}return!1},"isHidden"),vn=i(function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var i=0;i<e.children.length;i++){var o=e.children.item(i);if("LEGEND"===o.tagName)return!!jo.call(e,"fieldset[disabled] *")||!o.contains(t)}return!0}e=e.parentElement}return!1},"isDisabledFromFieldset"),fn=i(function(t,e){return!(e.disabled||Xo(e)||sn(e)||mn(e,t)||ln(e)||vn(e))},"isNodeMatchingSelectorFocusable"),bn=i(function(t,e){return!(un(e)||on(e)<0||!fn(t,e))},"isNodeMatchingSelectorTabbable"),yn=i(function(t){var e=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(e)||e>=0)},"isValidShadowRootTabbable"),kn=i(function t(e){var i=[],o=[];return e.forEach(function(e,n){var r=!!e.scopeParent,a=r?e.scopeParent:e,s=nn(a,r),l=r?t(e.candidates):a;0===s?r?i.push.apply(i,l):i.push(a):o.push({documentOrder:n,tabIndex:s,item:e,isScope:r,content:l})}),o.sort(rn).reduce(function(t,e){return e.isScope?t.push.apply(t,e.content):t.push(e.content),t},[]).concat(i)},"sortByOrder"),wn=i(function(t,e){var i;return i=(e=e||{}).getShadowRoot?tn([t],e.includeContainer,{filter:bn.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:yn}):Qo(t,e.includeContainer,bn.bind(null,e)),kn(i)},"tabbable"),_n=i(function(t,e){return(e=e||{}).getShadowRoot?tn([t],e.includeContainer,{filter:fn.bind(null,e),flatten:!0,getShadowRoot:e.getShadowRoot}):Qo(t,e.includeContainer,fn.bind(null,e))},"focusable"),xn=i(function(t,e){if(e=e||{},!t)throw new Error("No node provided");return!1!==jo.call(t,Yo)&&bn(e,t)},"isTabbable"),Cn=Wo.concat("iframe").join(","),Sn=i(function(t,e){if(e=e||{},!t)throw new Error("No node provided");return!1!==jo.call(t,Cn)&&fn(e,t)},"isFocusable");function En(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,o)}return i}function Tn(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?En(Object(i),!0).forEach(function(e){In(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):En(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function In(t,e,i){return(e=On(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function $n(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function On(t){var e=$n(t,"string");return"symbol"==typeof e?e:String(e)}i(En,"ownKeys"),i(Tn,"_objectSpread2"),i(In,"_defineProperty"),i($n,"_toPrimitive"),i(On,"_toPropertyKey");var Ln={activateTrap:i(function(t,e){if(t.length>0){var i=t[t.length-1];i!==e&&i.pause()}var o=t.indexOf(e);-1===o||t.splice(o,1),t.push(e)},"activateTrap"),deactivateTrap:i(function(t,e){var i=t.indexOf(e);-1!==i&&t.splice(i,1),t.length>0&&t[t.length-1].unpause()},"deactivateTrap")},Dn=i(function(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select},"isSelectableInput"),An=i(function(t){return"Escape"===t?.key||"Esc"===t?.key||27===t?.keyCode},"isEscapeEvent"),Mn=i(function(t){return"Tab"===t?.key||9===t?.keyCode},"isTabEvent"),Bn=i(function(t){return Mn(t)&&!t.shiftKey},"isKeyForward"),zn=i(function(t){return Mn(t)&&t.shiftKey},"isKeyBackward"),Nn=i(function(t){return setTimeout(t,0)},"delay"),Rn=i(function(t,e){var i=-1;return t.every(function(t,o){return!e(t)||(i=o,!1)}),i},"findIndex"),Pn=i(function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o];return"function"==typeof t?t.apply(void 0,i):t},"valueOrHandler"),Fn=i(function(t){return t.target.shadowRoot&&"function"==typeof t.composedPath?t.composedPath()[0]:t.target},"getActualTarget"),Vn=[],Kn=i(function(t,e){var o,n=e?.document||document,r=e?.trapStack||Vn,a=Tn({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:Bn,isKeyBackward:zn},e),s={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},l=i(function(t,e,i){return t&&void 0!==t[e]?t[e]:a[i||e]},"getOption"),c=i(function(t,e){var i="function"==typeof e?.composedPath?e.composedPath():void 0;return s.containerGroups.findIndex(function(e){var o=e.container,n=e.tabbableNodes;return o.contains(t)||i?.includes(o)||n.find(function(e){return e===t})})},"findContainerIndex"),d=i(function(t){var e=a[t];if("function"==typeof e){for(var i=arguments.length,o=new Array(i>1?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r];e=e.apply(void 0,o)}if(!0===e&&(e=void 0),!e){if(void 0===e||!1===e)return e;throw new Error("`".concat(t,"` was specified but was not a node, or did not return a node"))}var s=e;if("string"==typeof e&&!(s=n.querySelector(e)))throw new Error("`".concat(t,"` as selector refers to no known node"));return s},"getNodeForOption"),h=i(function(){var t=d("initialFocus");if(!1===t)return!1;if(void 0===t||!Sn(t,a.tabbableOptions))if(c(n.activeElement)>=0)t=n.activeElement;else{var e=s.tabbableGroups[0];t=e&&e.firstTabbableNode||d("fallbackFocus")}if(!t)throw new Error("Your focus-trap needs to have at least one focusable element");return t},"getInitialFocusNode"),u=i(function(){if(s.containerGroups=s.containers.map(function(t){var e=wn(t,a.tabbableOptions),o=_n(t,a.tabbableOptions),n=e.length>0?e[0]:void 0,r=e.length>0?e[e.length-1]:void 0,s=o.find(function(t){return xn(t)}),l=o.slice().reverse().find(function(t){return xn(t)}),c=!!e.find(function(t){return on(t)>0});return{container:t,tabbableNodes:e,focusableNodes:o,posTabIndexesFound:c,firstTabbableNode:n,lastTabbableNode:r,firstDomTabbableNode:s,lastDomTabbableNode:l,nextTabbableNode:i(function(t){var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e.indexOf(t);return n<0?i?o.slice(o.indexOf(t)+1).find(function(t){return xn(t)}):o.slice(0,o.indexOf(t)).reverse().find(function(t){return xn(t)}):e[n+(i?1:-1)]},"nextTabbableNode")}}),s.tabbableGroups=s.containerGroups.filter(function(t){return t.tabbableNodes.length>0}),s.tabbableGroups.length<=0&&!d("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(s.containerGroups.find(function(t){return t.posTabIndexesFound})&&s.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},"updateTabbableNodes"),p=i(function t(e){var i=e.activeElement;if(i)return i.shadowRoot&&null!==i.shadowRoot.activeElement?t(i.shadowRoot):i},"getActiveElement"),g=i(function t(e){if(!1!==e&&e!==p(document)){if(!e||!e.focus)return void t(h());e.focus({preventScroll:!!a.preventScroll}),s.mostRecentlyFocusedNode=e,Dn(e)&&e.select()}},"tryFocus"),m=i(function(t){var e=d("setReturnFocus",t);return e||!1!==e&&t},"getReturnFocusNode"),v=i(function(t){var e=t.target,i=t.event,o=t.isBackward,n=void 0!==o&&o;e=e||Fn(i),u();var r=null;if(s.tabbableGroups.length>0){var l=c(e,i),h=l>=0?s.containerGroups[l]:void 0;if(l<0)r=n?s.tabbableGroups[s.tabbableGroups.length-1].lastTabbableNode:s.tabbableGroups[0].firstTabbableNode;else if(n){var p=Rn(s.tabbableGroups,function(t){var i=t.firstTabbableNode;return e===i});if(p<0&&(h.container===e||Sn(e,a.tabbableOptions)&&!xn(e,a.tabbableOptions)&&!h.nextTabbableNode(e,!1))&&(p=l),p>=0){var g=0===p?s.tabbableGroups.length-1:p-1,m=s.tabbableGroups[g];r=on(e)>=0?m.lastTabbableNode:m.lastDomTabbableNode}else Mn(i)||(r=h.nextTabbableNode(e,!1))}else{var v=Rn(s.tabbableGroups,function(t){var i=t.lastTabbableNode;return e===i});if(v<0&&(h.container===e||Sn(e,a.tabbableOptions)&&!xn(e,a.tabbableOptions)&&!h.nextTabbableNode(e))&&(v=l),v>=0){var f=v===s.tabbableGroups.length-1?0:v+1,b=s.tabbableGroups[f];r=on(e)>=0?b.firstTabbableNode:b.firstDomTabbableNode}else Mn(i)||(r=h.nextTabbableNode(e))}}else r=d("fallbackFocus");return r},"findNextNavNode"),f=i(function(t){var e=Fn(t);if(!(c(e,t)>=0)){if(Pn(a.clickOutsideDeactivates,t))return void o.deactivate({returnFocus:a.returnFocusOnDeactivate});Pn(a.allowOutsideClick,t)||t.preventDefault()}},"checkPointerDown"),b=i(function(t){var e=Fn(t),i=c(e,t)>=0;if(i||e instanceof Document)i&&(s.mostRecentlyFocusedNode=e);else{t.stopImmediatePropagation();var o,n=!0;if(s.mostRecentlyFocusedNode)if(on(s.mostRecentlyFocusedNode)>0){var r=c(s.mostRecentlyFocusedNode),l=s.containerGroups[r].tabbableNodes;if(l.length>0){var d=l.findIndex(function(t){return t===s.mostRecentlyFocusedNode});d>=0&&(a.isKeyForward(s.recentNavEvent)?d+1<l.length&&(o=l[d+1],n=!1):d-1>=0&&(o=l[d-1],n=!1))}}else s.containerGroups.some(function(t){return t.tabbableNodes.some(function(t){return on(t)>0})})||(n=!1);else n=!1;n&&(o=v({target:s.mostRecentlyFocusedNode,isBackward:a.isKeyBackward(s.recentNavEvent)})),g(o||s.mostRecentlyFocusedNode||h())}s.recentNavEvent=void 0},"checkFocusIn"),y=i(function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s.recentNavEvent=t;var i=v({event:t,isBackward:e});i&&(Mn(t)&&t.preventDefault(),g(i))},"checkKeyNav"),k=i(function(t){if(An(t)&&!1!==Pn(a.escapeDeactivates,t))return t.preventDefault(),void o.deactivate();(a.isKeyForward(t)||a.isKeyBackward(t))&&y(t,a.isKeyBackward(t))},"checkKey"),w=i(function(t){var e=Fn(t);c(e,t)>=0||Pn(a.clickOutsideDeactivates,t)||Pn(a.allowOutsideClick,t)||(t.preventDefault(),t.stopImmediatePropagation())},"checkClick"),_=i(function(){if(s.active)return Ln.activateTrap(r,o),s.delayInitialFocusTimer=a.delayInitialFocus?Nn(function(){g(h())}):g(h()),n.addEventListener("focusin",b,!0),n.addEventListener("mousedown",f,{capture:!0,passive:!1}),n.addEventListener("touchstart",f,{capture:!0,passive:!1}),n.addEventListener("click",w,{capture:!0,passive:!1}),n.addEventListener("keydown",k,{capture:!0,passive:!1}),o},"addListeners"),x=i(function(){if(s.active)return n.removeEventListener("focusin",b,!0),n.removeEventListener("mousedown",f,!0),n.removeEventListener("touchstart",f,!0),n.removeEventListener("click",w,!0),n.removeEventListener("keydown",k,!0),o},"removeListeners"),C=i(function(t){t.some(function(t){return Array.from(t.removedNodes).some(function(t){return t===s.mostRecentlyFocusedNode})})&&g(h())},"checkDomRemoval"),S=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(C):void 0,E=i(function(){S&&(S.disconnect(),s.active&&!s.paused&&s.containers.map(function(t){S.observe(t,{subtree:!0,childList:!0})}))},"updateObservedNodes");return(o={get active(){return s.active},get paused(){return s.paused},activate:i(function(t){if(s.active)return this;var e=l(t,"onActivate"),o=l(t,"onPostActivate"),r=l(t,"checkCanFocusTrap");r||u(),s.active=!0,s.paused=!1,s.nodeFocusedBeforeActivation=n.activeElement,e?.();var a=i(function(){r&&u(),_(),E(),o?.()},"finishActivation");return r?(r(s.containers.concat()).then(a,a),this):(a(),this)},"activate"),deactivate:i(function(t){if(!s.active)return this;var e=Tn({onDeactivate:a.onDeactivate,onPostDeactivate:a.onPostDeactivate,checkCanReturnFocus:a.checkCanReturnFocus},t);clearTimeout(s.delayInitialFocusTimer),s.delayInitialFocusTimer=void 0,x(),s.active=!1,s.paused=!1,E(),Ln.deactivateTrap(r,o);var n=l(e,"onDeactivate"),c=l(e,"onPostDeactivate"),d=l(e,"checkCanReturnFocus"),h=l(e,"returnFocus","returnFocusOnDeactivate");n?.();var u=i(function(){Nn(function(){h&&g(m(s.nodeFocusedBeforeActivation)),c?.()})},"finishDeactivation");return h&&d?(d(m(s.nodeFocusedBeforeActivation)).then(u,u),this):(u(),this)},"deactivate"),pause:i(function(t){if(s.paused||!s.active)return this;var e=l(t,"onPause"),i=l(t,"onPostPause");return s.paused=!0,e?.(),x(),E(),i?.(),this},"pause"),unpause:i(function(t){if(!s.paused||!s.active)return this;var e=l(t,"onUnpause"),i=l(t,"onPostUnpause");return s.paused=!1,e?.(),u(),_(),E(),i?.(),this},"unpause"),updateContainerElements:i(function(t){var e=[].concat(t).filter(Boolean);return s.containers=e.map(function(t){return"string"==typeof t?n.querySelector(t):t}),s.active&&u(),E(),this},"updateContainerElements")}).updateContainerElements(t),o},"createFocusTrap"),Hn=class t extends mt{constructor(){super(...arguments),this.OFFSET_FROM_TRIGGER=0,this.VIEWPORT_MARGIN=16,this.ALIGNMENT_OFFSET=24,this.ARROW_SIZE=8,this.trigger=null,this.overlayPositions=[],this.handle=null,this.positioningStrategy=null,this.outlet=null,this.isOpen=!1,this.positions="top, bottom, right, left",this.alignmentX="center",this.alignmentY="center",this.offsetX=this.ALIGNMENT_OFFSET,this.offsetY=this.ALIGNMENT_OFFSET,this.for="",this.offsetFromTrigger=this.OFFSET_FROM_TRIGGER,this.anchorX=null,this.anchorY=null,this._onKeydown=t=>{"Escape"===t.code&&this.onEscape(t),this.onKeydown(t)},this._onTriggerKeydown=t=>{this.onTriggerKeydown(t)},this._onTriggerClick=t=>{this.toggleOpen(),this.onTriggerClick(t)}}static{i(this,"KTGCdkPopoverElement")}static{this.idCounter=-1}connectedCallback(){super.connectedCallback(),this.id=this.hasAttribute("id")?this.id:this.createId(),this.addEventListener("keydown",this._onKeydown)}willUpdate(t){super.willUpdate(t),(t.has("positions")||t.has("alignmentX")||t.has("alignmentY"))&&this.updateOverlayPositions(),t.has("isOpen")&&this.trigger?.setAttribute("aria-expanded",this.isOpen.toString()),(t.has("positions")||t.has("alignmentX")||t.has("alignmentY")||t.has("offsetFromTrigger")||t.has("offsetX")||t.has("offsetY")||t.has("anchorX")||t.has("anchorY")||t.has("isOpen"))&&this.positioningStrategy&&(this.positioningStrategy.positions(this.overlayPositions).offsetFromOrigin(this.offsetFromTrigger+this.ARROW_SIZE).alignmentOffsetX(this.offsetX).alignmentOffsetY(this.offsetY),null!==this.anchorX&&null!==this.anchorY&&this.positioningStrategy.anchor({x:this.anchorX,y:this.anchorY}))}updated(t){if(super.updated(t),!this.arrow)throw new Error("KTGCdkPopoverElement: requires an arrow element '.ktg-cdk-popover-arrow'");t.has("for")&&this.onNewTrigger()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeydown)}async onAttach(){this.isOpen=!0}async beforeDetach(){this.style.display="",this.trigger?.focus()}async onDetach(){this.positioningStrategy=null,this.handle=null,this.isOpen=!1}createId(){return"ktg-cdk-popover-"+ ++t.idCounter}onKeydown(t){}updateOverlayPositions(){let t=this.positions.split(",").map(t=>t.trim());this.overlayPositions=[];for(let e of t)switch(e){case"top":this.overlayPositions.push({originX:"center",originY:"top",overlayX:this.alignmentX,overlayY:"bottom"});break;case"bottom":this.overlayPositions.push({originX:"center",originY:"bottom",overlayX:this.alignmentX,overlayY:"top"});break;case"right":this.overlayPositions.push({originX:"right",originY:"center",overlayX:"left",overlayY:this.alignmentY});break;case"left":this.overlayPositions.push({originX:"left",originY:"center",overlayX:"right",overlayY:this.alignmentY})}0===this.overlayPositions.length&&(this.overlayPositions=[{originX:"center",originY:"top",overlayX:"center",overlayY:"bottom"}])}async onNewTrigger(){await Ie();let t=this.trigger;this.trigger=Yt(this).getElementById(this.for),t!==this.trigger&&(t&&(t.removeAttribute("aria-controls"),t.removeEventListener("click",this._onTriggerClick),t.removeEventListener("keydown",this._onTriggerKeydown)),this.trigger&&(this.trigger.setAttribute("aria-controls",this.id),this.trigger.addEventListener("click",this._onTriggerClick),this.trigger.addEventListener("keydown",this._onTriggerKeydown)),this.positioningStrategy?.withOrigin(this.trigger))}onTriggerKeydown(t){}onTriggerClick(t){}onEscape(t){this.isOpen&&(t.preventDefault(),t.stopPropagation(),this.close(),this.dispatchDismissEvent())}toggleOpen(){this.isOpen?this.close():this.open()}open(){if(this.handle)return this.handle;let t=this.outlet??Me.OUTLETS.DEFAULT;return this.handle=this.overlayService.open({element:this,outlet:t,backdrop:{enabled:!0,transparent:!0,closeOnClick:!1},positioning:t=>(this.positioningStrategy=new Fe(t).withOrigin(this.trigger).anchor({x:this.anchorX??0,y:this.anchorY??0}).offsetFromOrigin(this.offsetFromTrigger+this.ARROW_SIZE).viewportMarginX(this.VIEWPORT_MARGIN).viewportMarginY(this.VIEWPORT_MARGIN).alignmentOffsetX(this.offsetX).alignmentOffsetY(this.offsetY).positions(this.overlayPositions).forceOntoScreen().afterRender(t=>{this.updateVisibility(t),this.updateArrowPosition(t)}),this.positioningStrategy)}),this.handle.on("backdropClick",this.onBackdropClick.bind(this)),this.handle.on("close",()=>{this.dispatchCloseEvent()}),this.handle}onBackdropClick(){this.close(),this.dispatchDismissEvent()}updateVisibility(t){this.classList.toggle("ktg-cdk-popover--hidden",!t.isOriginVisible)}updateArrowPosition(t){this.arrow.style.top="",this.arrow.style.left="",this.arrow.style.transform="";let e=0,i=0,o=0;switch(t.relativePositionAndAlignment.position){case"top":e=Ft.centerX(t.originRect)-t.overlayRect.x-this.ARROW_SIZE,i=t.overlayRect.height,o=0;break;case"right":{let n=Ft.centerY(t.originRect);e=-1.5*this.ARROW_SIZE,i=n-t.overlayRect.y-.5*this.ARROW_SIZE,o=90}break;case"bottom":e=Ft.centerX(t.originRect)-t.overlayRect.x-this.ARROW_SIZE,i=-1*this.ARROW_SIZE,o=180;break;case"left":{let n=Ft.centerY(t.originRect);e=t.overlayRect.width-.5*this.ARROW_SIZE,i=n-t.overlayRect.y-.5*this.ARROW_SIZE,o=-90}}this.arrow.style.top=`${i}px`,this.arrow.style.left=`${e}px`,this.arrow.style.transform=`rotate(${o}deg)`}close(){this.handle?.close()}setAnchor(t){this.anchorX=t.x,this.anchorY=t.y}};o([De(Me)],Hn.prototype,"overlayService",2),o([wt()],Hn.prototype,"handle",2),o([Ee({context:Te,subscribe:!0}),kt({type:String})],Hn.prototype,"outlet",2),o([kt({type:Boolean,reflect:!0,attribute:"open"})],Hn.prototype,"isOpen",2),o([kt({type:String})],Hn.prototype,"positions",2),o([kt({type:String,attribute:"alignment-x"})],Hn.prototype,"alignmentX",2),o([kt({type:String,attribute:"alignment-y"})],Hn.prototype,"alignmentY",2),o([kt({type:Number,attribute:"offset-x"})],Hn.prototype,"offsetX",2),o([kt({type:Number,attribute:"offset-y"})],Hn.prototype,"offsetY",2),o([kt({type:String})],Hn.prototype,"for",2),o([kt({type:Number,attribute:"offset-from-trigger"})],Hn.prototype,"offsetFromTrigger",2),o([kt({type:Number,attribute:"anchor-x"})],Hn.prototype,"anchorX",2),o([kt({type:Number,attribute:"anchor-y"})],Hn.prototype,"anchorY",2),o([Ct(".ktg-cdk-popover-arrow")],Hn.prototype,"arrow",2);var Gn=Hn,Un="close",Wn="dismiss",Yn=class extends CustomEvent{static{i(this,"KTGCdkPopoverCloseEvent")}constructor(t){super(Un,t)}},qn=class extends CustomEvent{static{i(this,"KTGCdkPopoverDismissEvent")}constructor(t){super(Wn,t)}},jn=[...ae,d`
    :host {
      display: none;
    }

    :host([open]) {
      display: block;
    }

    :host(.ktg-cdk-popover--hidden) {
      visibility: hidden;
    }

    .ktg-cdk-popover {
      position: relative;
      background-color: var(--ktg-color-background-01);
      color: var(--ktg-color-text);
      border-radius: 0.25rem;
      box-shadow: 0 0.625rem 1.25rem rgba(var(--ktg-rgb-shadow), 0.15);
      width: 100%;
    }

    .ktg-cdk-popover-arrow {
      position: absolute;
      width: 0;
      height: 0;
      border-left: 0.5rem solid transparent;
      border-right: 0.5rem solid transparent;
      border-top: 0.5rem solid var(--ktg-color-dark-contrast);
    }
  `],Zn=class extends Yn{static{i(this,"KTGContextMenuCloseEvent")}},Xn=class extends qn{static{i(this,"KTGContextMenuDismissEvent")}},Jn=[...ae,...jn,d`
    :host {
      min-width: 12.5rem;
    }

    .context-menu {
      padding-top: 0.5rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 0.5rem;
    }

    ::slotted(ktg-context-menu-button) {
      width: 100%;
      border-bottom: 0.0625rem solid var(--ktg-color-neutral-02);
    }

    ::slotted(ktg-context-menu-button:last-child) {
      border-bottom: none;
    }
  `],Qn=class extends Gn{constructor(){super(...arguments),this.focusKeyManager=(new Io).withVerticalLayout().withHomeAndEnd().withWrap().withTypeahead(),this.focusTrap=Kn(this,{allowOutsideClick:!0,returnFocusOnDeactivate:!0,tabbableOptions:{getShadowRoot:!0},escapeDeactivates:!1}),this.positions="right, left, bottom, top",this.displayFocusRing=!1,this.onActivate=()=>{this.close()}}connectedCallback(){super.connectedCallback(),this.role="menu",this.addEventListener(Po,this.onActivate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Po,this.onActivate)}render(){return j`
      <div class="context-menu ktg-cdk-popover">
        <div class="context-menu-arrow ktg-cdk-popover-arrow"></div>
        <div class="context-menu__content">
          <slot
            @slotchange=${this.onSlotChange}
            @hover=${this.onHover}
          ></slot>
        </div>
      </div>
    `}async afterAttach(){try{this.focusTrap.activate()}catch{console.warn("KTGContextMenuElement: could not activate focus trap")}this.focusKeyManager.index(0)}async beforeDetach(){try{this.focusTrap.deactivate()}catch{}this.displayFocusRing=!1}createId(){return"ktg-context-menu-"+ ++Qn.idCounter}onKeydown(t){if(this.isOpen){switch(t.code){case"Escape":case"ArrowUp":case"ArrowLeft":case"ArrowRight":case"ArrowDown":t.preventDefault(),t.stopPropagation()}this.focusKeyManager.onKeydown(t),this.displayFocusRing=!0}}onTriggerClick(t){this.displayFocusRing=0===t.detail}onSlotChange(){this.focusKeyManager.setItems(this.buttons)}onHover(t){this.displayFocusRing=!1;let e=t.target;if(e instanceof Ho){let t=this.focusKeyManager.findItemIndex(e);-1!==t&&this.focusKeyManager.index(t)}}dispatchCloseEvent(){this.dispatchEvent(new Zn({bubbles:!0,cancelable:!1}))}dispatchDismissEvent(){this.dispatchEvent(new Xn({bubbles:!0,cancelable:!1}))}};i(Qn,"KTGContextMenuElement"),Qn.styles=Jn,o([kt({type:String})],Qn.prototype,"positions",2),o([Se({context:Ro}),kt({type:Boolean,reflect:!0,attribute:"display-focus-ring"})],Qn.prototype,"displayFocusRing",2),o([Et({selector:"ktg-context-menu-button",flatten:!0})],Qn.prototype,"buttons",2),Qn=o([ft("ktg-context-menu")],Qn);var tr=[...ae,d`
    :host {
      display: block;
    }

    .dashboard-widget-dock-buttons {
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
      margin-top: 1.5rem;
    }
  `],er=class extends mt{connectedCallback(){super.connectedCallback(),this.slot="buttons"}render(){return j`
      <div class="dashboard-widget-dock-buttons">
        <slot></slot>
      </div>
    `}};i(er,"KTGDashboardWidgetDockButtonsElement"),er.styles=tr,er=o([ft("ktg-dashboard-widget-dock-buttons")],er);var ir=[...ae,d`
    :host {
      display: block;
    }

    :host(.ktg-dashboard-widget-dock--dragging) {
      outline: 0.125rem solid var(--ktg-color-focus);
    }

    .dashboard-widget-dock {
      position: relative;
      background-color: var(--ktg-color-neutral-01);
      padding-top: 1.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 1.5rem;
    }

    @media (min-width: ${Ke}px) {
      .dashboard-widget-dock {
        padding-top: 3rem;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-bottom: 2rem;
      }
    }

    .dashboard-widget-dock__drag-handle {
      position: absolute;
      top: 0;
      right: 0;
      color: var(--ktg-color-focus);
      cursor: grab;
      padding: 1rem;
      background: none;
      border: none;
      display: flex;
      touch-action: manipulation;
    }

    .dashboard-widget-dock__drag-handle:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
    }

    :host(.ktg-dashboard-widget-dock--dragging)
      .dashboard-widget-dock__drag-handle:focus-visible {
      outline: 0;
    }

    @media (min-width: ${Ke}px) {
      .dashboard-widget-dock__drag-handle {
        right: 1rem;
      }
    }

    .dashboard-widget-dock__content {
    }
  `],or=class extends mt{constructor(){super(...arguments),this.canDrag=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return j`
      <div class="dashboard-widget-dock">
        ${this.renderDragHandle()}

        <slot></slot>

        <slot name="buttons"></slot>
      </div>
    `}renderDragHandle(){return this.canDrag?j`
        <button
          class="dashboard-widget-dock__drag-handle"
          type="button"
          title="Neu anordnen"
          aria-label="Neu anordnen"
        >
          <ktg-icon name="drag-horizontal"></ktg-icon>
        </button>
      `:j``}};i(or,"KTGDashboardWidgetDockElement"),or.styles=ir,o([kt({type:Boolean,attribute:!1})],or.prototype,"canDrag",2),or=o([ft("ktg-dashboard-widget-dock")],or);var nr=class{constructor(t,e,i){this.draggingItem=t,this.items=e,this.options=i,this.currentDropTarget=null,this.previousOrder=[],this.fromIndex=-1,this.isEdgeScrollEnabled=!1,this.pointerY=0,this.scrollLoop=new $e,this.updateEdgeScroll=()=>{if(!this.isEdgeScrollEnabled)return;let t=Pt(this.pointerY,0,window.innerHeight,-1,1),e=10*Math.pow(t,3);Math.abs(t)>.75&&window.scrollBy({top:e})},this.start()}static{i(this,"KTGDragDropReorderInteraction")}start(){this.savePreviousState(),this.updateDraggingItemRect(),this.options.dropzoneDragOverClass&&this.options.dropzone.classList.add(this.options.dropzoneDragOverClass),this.scrollLoop.on("update",this.updateEdgeScroll),this.scrollLoop.play()}savePreviousState(){this.previousOrder=this.items.slice(),this.fromIndex=this.draggingItem.index}enableEdgeScroll(){this.isEdgeScrollEnabled=!0}updatePointerPosition(t){this.pointerY=t}onDropTargetChange(t,e=null){let i=this.items.find(e=>e.element.contains(t))||null;i?(this.onOverNewDropTarget(i),e&&setTimeout(()=>{e()},150)):this.currentDropTarget=null,this.updateDraggingItemRect()}onOverNewDropTarget(t){let e=t.element.getBoundingClientRect();this.currentDropTarget=t;let i=this.draggingItemRect.y<e.y?"afterend":"beforebegin";this.moveNextTo(t.element,i)}updateDraggingItemRect(){this.draggingItemRect=this.draggingItem.element.getBoundingClientRect()}moveDown(){let t=this.draggingItem.element.nextElementSibling;t&&(this.moveNextTo(t,"afterend"),this.afterKeyboardMove())}moveUp(){let t=this.draggingItem.element.previousElementSibling;t&&(this.moveNextTo(t,"beforebegin"),this.afterKeyboardMove())}moveToTop(){this.moveNextTo(this.items[0].element,"beforebegin"),this.afterKeyboardMove()}moveToBottom(){this.moveNextTo(this.items[this.items.length-1].element,"afterend"),this.afterKeyboardMove()}moveNextTo(t,e){for(let t of this.items)t.capturePosition();t.insertAdjacentElement(e,this.draggingItem.element);for(let t of this.items)t.animateToNewPosition(),t.updateIndex();this.items.sort((t,e)=>t.index-e.index)}afterKeyboardMove(){this.draggingItem.handle?.focus(),Ht.scrollIntoView(this.draggingItem.element,{behavior:"smooth",block:"center",inline:"nearest",respectPrefersReducedMotion:!0})}shouldEmitReorderEvent(){return this.fromIndex!==this.draggingItem.index}getReorderEventData(){return{previousOrder:this.previousOrder,newOrder:this.items.slice(),item:this.draggingItem.element,fromIndex:this.fromIndex,toIndex:this.draggingItem.index}}destroy(){this.scrollLoop.destroy(),this.options.dropzoneDragOverClass&&this.options.dropzone.classList.remove(this.options.dropzoneDragOverClass)}},rr=class{constructor(t){this.options=t,this.isDragging=!1,this._index=-1,this._handle=null,this.onMouseDown=t=>{this.shouldStart(t)&&this.setDraggable(!0)},this.onMouseUp=()=>{this.setDraggable(!1)},this.onTouchStart=t=>{this.shouldStart(t)&&(t.preventDefault(),t.stopPropagation(),this.startDragging())},this.onTouchEnd=()=>{this.stopDragging()},this.onDragStart=async t=>{t.dataTransfer&&(t.dataTransfer.effectAllowed="move",this.options.element.style.opacity="0",t.dataTransfer.setDragImage(this.options.element,0,0),await Ie(),this.options.element.style.opacity="1"),this.startDragging()},this.onDragEnd=()=>{this.stopDragging()},this.onKeydown=t=>{if(this.shouldStart(t))switch(t.code){case"Space":t.preventDefault(),this.isDragging?this.cancelDragging():this.startDragging();break;case"Tab":this.cancelDragging();break;case"Escape":this.isDragging&&(t.preventDefault(),t.stopPropagation(),this.cancelDragging())}},this._index=t.initialIndex,Ie().then(this.getHandle.bind(this)),this.addListeners(),this.setDraggable(!1),this.currentPositionRect=this.options.element.getBoundingClientRect(),this.newPositionRect=this.currentPositionRect}static{i(this,"KTGDragDropReorderItem")}get index(){return this._index}get handle(){return this._handle}get element(){return this.options.element}getHandle(){this.options.handleSelector&&(this._handle=this.options.element.querySelector(this.options.handleSelector)??null,this._handle?console.warn("No handle found."):this._handle=this.options.element.shadowRoot?.querySelector(this.options.handleSelector)??null)}addListeners(){Zt()?(this.options.element.addEventListener("touchstart",this.onTouchStart,!0),this.options.element.addEventListener("touchend",this.onTouchEnd)):(this.options.element.addEventListener("mousedown",this.onMouseDown),this.options.element.addEventListener("mouseup",this.onMouseUp),this.options.element.addEventListener("dragstart",this.onDragStart),this.options.element.addEventListener("dragend",this.onDragEnd),this.options.element.addEventListener("keydown",this.onKeydown))}shouldStart(t){return!this.options.handleSelector||!!Ut(t.composedPath()[0],this.options.handleSelector,this.options.dropzone)}setDraggable(t){this.options.element.draggable=t}setDraggingClass(t){this.options.draggingClass&&this.options.element.classList.toggle(this.options.draggingClass,t)}capturePosition(){this.currentPositionRect=this.options.element.getBoundingClientRect()}animateToNewPosition(){this.newPositionRect=this.options.element.getBoundingClientRect();let t=this.currentPositionRect.top-this.newPositionRect.top,e=this.currentPositionRect.left-this.newPositionRect.left;Ht.animate(this.options.element,{keyframes:[{transform:`translate3d(${e}px, ${t}px, 0)`},{transform:"none"}],options:{duration:150,easing:"ease-out"},respectPrefersReducedMotion:!0})}updateIndex(){let t=-1;for(let e=0;e<this.options.dropzone.children.length;e++)if(this.options.dropzone.children[e]===this.options.element){t=e;break}this._index=t}cancelDragging(){this.stopDragging(),this.options.onCancelDragging()}startDragging(){this.isDragging=!0,this.setDraggingClass(!0),this.options.onStartDragging(this)}stopDragging(){this.isDragging=!1,this.setDraggingClass(!1),this.setDraggable(!1)}destroy(){this.options.element.removeAttribute("draggable"),this.removeListeners()}removeListeners(){Zt()?(this.options.element.removeEventListener("touchstart",this.onTouchStart,!0),this.options.element.removeEventListener("touchend",this.onTouchEnd)):(this.options.element.removeEventListener("mousedown",this.onMouseDown),this.options.element.removeEventListener("mouseup",this.onMouseUp),this.options.element.removeEventListener("dragstart",this.onDragStart),this.options.element.removeEventListener("dragend",this.onDragEnd),this.options.element.removeEventListener("keydown",this.onKeydown))}},ar=class{constructor(t){this.options=t,this.eventBus=new ge,this.items=[],this.currentInteraction=null,this.prevClientY=0,this.prevClientX=0,this.dropTargetChangeInProgress=!1,this.onTouchMove=t=>{let e=t.touches[0],i=document.elementFromPoint(e.clientX,e.clientY);!1===this.dropTargetChangeInProgress&&this.currentInteraction&&this.currentInteraction.draggingItem.element!==i&&(this.prevClientY!==e.clientY||this.prevClientX!==e.clientX)&&(this.prevClientY=e.clientY,this.prevClientX=e.clientX,this.dropTargetChangeInProgress=!0,this.currentInteraction.enableEdgeScroll(),this.currentInteraction.updatePointerPosition(e.clientY),this.currentInteraction.onDropTargetChange(i,()=>{this.dropTargetChangeInProgress=!1}))},this.onDragOver=t=>{if(this.currentInteraction&&(t.preventDefault(),!1===this.dropTargetChangeInProgress&&this.currentInteraction.draggingItem.element!==t.target&&(this.prevClientY!==t.clientY||this.prevClientX!==t.clientX))){this.prevClientY=t.clientY,this.prevClientX=t.clientX,this.dropTargetChangeInProgress=!0,this.currentInteraction.enableEdgeScroll(),this.currentInteraction.updatePointerPosition(t.clientY);let e=t.target;this.currentInteraction.onDropTargetChange(e,()=>{this.dropTargetChangeInProgress=!1})}},this.onDrop=t=>{t.preventDefault(),this.onInteractionEnd()},this.onKeydown=t=>{if(this.currentInteraction)switch(t.code){case"ArrowDown":t.preventDefault(),this.currentInteraction.moveDown();break;case"ArrowUp":t.preventDefault(),this.currentInteraction.moveUp();break;case"Home":t.preventDefault(),this.currentInteraction.moveToTop();break;case"End":t.preventDefault(),this.currentInteraction.moveToBottom()}},this.createItems(),this.addDropzoneListeners()}static{i(this,"KTGDragDropReorderController")}createItems(){let t=Array.from(this.options.dropzone.querySelectorAll(this.options.itemSelector));this.items=t.map((t,e)=>new rr({initialIndex:e,dropzone:this.options.dropzone,element:t,handleSelector:this.options.handleSelector,draggingClass:this.options.draggingClass,onStartDragging:t=>{this.currentInteraction?.destroy(),this.currentInteraction=new nr(t,this.items,this.options)},onCancelDragging:()=>{this.onInteractionEnd()}}))}addDropzoneListeners(){Zt()?(this.options.dropzone.addEventListener("touchmove",this.onTouchMove),this.options.dropzone.addEventListener("touchend",this.onDrop)):(this.options.dropzone.addEventListener("dragover",this.onDragOver),this.options.dropzone.addEventListener("drop",this.onDrop),this.options.dropzone.addEventListener("dragend",this.onDrop),this.options.dropzone.addEventListener("keydown",this.onKeydown))}onInteractionEnd(){this.currentInteraction?.shouldEmitReorderEvent()&&this.eventBus.emit("reorder",this.currentInteraction.getReorderEventData()),this.currentInteraction?.destroy(),this.currentInteraction=null}refetchItems(){this.currentInteraction||(this.destroyItems(),this.createItems())}destroy(){this.destroyItems(),this.removeListeners(),this.eventBus.destroy()}on(t,e,i){return this.eventBus.on(t,e,i)}off(t,e){this.eventBus.off(t,e)}destroyItems(){for(let t of this.items)t.destroy();this.items=[]}removeListeners(){Zt()?(this.options.dropzone.removeEventListener("touchmove",this.onTouchMove),this.options.dropzone.removeEventListener("touchend",this.onDrop)):(this.options.dropzone.removeEventListener("dragover",this.onDragOver),this.options.dropzone.removeEventListener("drop",this.onDrop),this.options.dropzone.removeEventListener("dragend",this.onDrop),this.options.dropzone.removeEventListener("keydown",this.onKeydown))}},sr=class{constructor(){this._handleSelector=null,this._dropzoneDragOverClass=null,this._draggingClass=null}static{i(this,"KTGDragDropReorder")}dropzone(t){return this._dropzone=t,this}itemSelector(t){return this._itemSelector=t,this}handleSelector(t){return this._handleSelector=t,this}dropzoneDragOverClass(t){return this._dropzoneDragOverClass=t,this}draggingClass(t){return this._draggingClass=t,this}build(){return this.throwErrorsIfOptionsNotValid(),new ar({dropzone:this._dropzone,itemSelector:this._itemSelector,handleSelector:this._handleSelector,draggingClass:this._draggingClass,dropzoneDragOverClass:this._dropzoneDragOverClass})}throwErrorsIfOptionsNotValid(){if(!this._dropzone)throw new Error("You must provide a dropzone");if(!this._itemSelector)throw new Error("You must provide an item selector")}},lr=class{constructor(){this.forceInsideViewport=!1,this.viewportPadding=0,this.isDragging=!1,this.startPosition=Vt.new(),this.currentPosition=Vt.new(),this.startPositionToTargetOffset=Vt.new(),this.target=null,this.handle=null}static{i(this,"KTGDragMoveState")}},cr=class{constructor(){this.eventBus=new ge,this.state=new lr,this.onPointerDown=t=>{if(t.preventDefault(),!this.state.handle||!this.state.target)return void console.error("Missing handle or target element.");let e=this.state.target.getBoundingClientRect();this.state.startPositionToTargetOffset=Vt.subtract(t,e),this.state.startPosition=Vt.clone(t),this.state.currentPosition=Vt.clone(t),this.state.isDragging=!0,this.eventBus.emit("start",{startMousePositionToTargetOffset:this.state.startPositionToTargetOffset,startMousePosition:this.state.startPosition,currentMousePosition:this.state.currentPosition,mouseDelta:Vt.new(),targetPosition:Vt.clone(e)})},this.onTouchMove=t=>{this.state.isDragging&&t.preventDefault()},this.onPointerMove=t=>{if(!this.state.isDragging)return;t.preventDefault(),this.state.currentPosition=Vt.clampRect(Vt.clone(t),Ft.inset(Ft.viewport(),this.state.viewportPadding));let e=Vt.subtract(this.state.currentPosition,this.state.startPosition);this.eventBus.emit("move",{startMousePositionToTargetOffset:this.state.startPositionToTargetOffset,startMousePosition:this.state.startPosition,currentMousePosition:this.state.currentPosition,mouseDelta:e,targetPosition:Vt.subtract(this.state.currentPosition,this.state.startPositionToTargetOffset)})},this.onDone=t=>{if(!this.state.isDragging)return;t.preventDefault();let e=Vt.subtract(this.state.currentPosition,this.state.startPosition);this.eventBus.emit("end",{startMousePositionToTargetOffset:this.state.startPositionToTargetOffset,startMousePosition:this.state.startPosition,currentMousePosition:this.state.currentPosition,mouseDelta:e,targetPosition:Vt.subtract(this.state.currentPosition,this.state.startPositionToTargetOffset)}),this.state.isDragging=!1,this.state.startPosition=Vt.new(),this.state.currentPosition=Vt.new()},window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onDone),window.addEventListener("pointerleave",this.onDone),window.addEventListener("pointercancel",this.onDone)}static{i(this,"KTGDragMove")}destroy(){window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onDone),window.removeEventListener("pointerleave",this.onDone),window.removeEventListener("pointercancel",this.onDone),this.state.handle?.removeEventListener("pointerdown",this.onPointerDown),this.eventBus.destroy()}withTarget(t){return this.state.target=t,this}withHandle(t){let e=this.state.handle;return e?.removeEventListener("pointerdown",this.onPointerDown),e?.removeEventListener("touchmove",this.onTouchMove),this.state.handle=t,t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this}withForceInsideViewport(){return this.state.forceInsideViewport=!0,this}withViewportPadding(t){return this.state.viewportPadding=t,this}on(t,e,i){return this.eventBus.on(t,e,i)}off(t,e){this.eventBus.off(t,e)}},dr=class extends Event{constructor(t,e,i,o,n,r){super("reorder",t),this.previousOrder=e,this.newOrder=i,this.itemElement=o,this.fromIndex=n,this.toIndex=r}static{i(this,"KTGDashboardWidgetListReorderEvent")}},hr=[d`
    :host {
      display: block;
    }

    .dashboard-widget-list {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }
  `],ur=class extends mt{constructor(){super(...arguments),this.reorderHandler=null,this.reorderable=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","list"),this.reorderHandler=(new sr).dropzone(this).itemSelector("ktg-dashboard-widget-dock").handleSelector(".dashboard-widget-dock__drag-handle").draggingClass("ktg-dashboard-widget-dock--dragging").build(),this.reorderHandler.on("reorder",t=>{this.dispatchEvent(new dr({bubbles:!0,cancelable:!1},t.previousOrder.map(t=>t.element),t.newOrder.map(t=>t.element),t.item,t.fromIndex,t.toIndex))})}willUpdate(t){super.willUpdate(t),t.has("reorderable")&&this.updateCanDragOnWidgetDocks()}updated(t){super.updated(t),t.has("reorderable")&&this.reorderHandler?.refetchItems()}disconnectedCallback(){super.disconnectedCallback(),this.reorderHandler?.destroy()}onSlotChange(){this.updateCanDragOnWidgetDocks(),this.reorderHandler?.refetchItems()}render(){return j`
      <div class="dashboard-widget-list">
        <slot @slotchange=${this.onSlotChange}></slot>
      </div>
    `}updateCanDragOnWidgetDocks(){for(let t of this.widgetDocks)t.canDrag=this.reorderable}};i(ur,"KTGDashboardWidgetListElement"),ur.styles=hr,o([kt({type:Boolean,reflect:!0})],ur.prototype,"reorderable",2),o([Et({selector:"ktg-dashboard-widget-dock"})],ur.prototype,"widgetDocks",2),ur=o([ft("ktg-dashboard-widget-list")],ur);var pr=class extends Error{static{i(this,"LuxonError")}},gr=class extends pr{static{i(this,"InvalidDateTimeError")}constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}},mr=class extends pr{static{i(this,"InvalidIntervalError")}constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}},vr=class extends pr{static{i(this,"InvalidDurationError")}constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}},fr=class extends pr{static{i(this,"ConflictingSpecificationError")}},br=class extends pr{static{i(this,"InvalidUnitError")}constructor(t){super(`Invalid unit ${t}`)}},yr=class extends pr{static{i(this,"InvalidArgumentError")}},kr=class extends pr{static{i(this,"ZoneIsAbstractError")}constructor(){super("Zone is an abstract class")}},wr="numeric",_r="short",xr="long",Cr={year:wr,month:wr,day:wr},Sr={year:wr,month:_r,day:wr},Er={year:wr,month:_r,day:wr,weekday:_r},Tr={year:wr,month:xr,day:wr},Ir={year:wr,month:xr,day:wr,weekday:xr},$r={hour:wr,minute:wr},Or={hour:wr,minute:wr,second:wr},Lr={hour:wr,minute:wr,second:wr,timeZoneName:_r},Dr={hour:wr,minute:wr,second:wr,timeZoneName:xr},Ar={hour:wr,minute:wr,hourCycle:"h23"},Mr={hour:wr,minute:wr,second:wr,hourCycle:"h23"},Br={hour:wr,minute:wr,second:wr,hourCycle:"h23",timeZoneName:_r},zr={hour:wr,minute:wr,second:wr,hourCycle:"h23",timeZoneName:xr},Nr={year:wr,month:wr,day:wr,hour:wr,minute:wr},Rr={year:wr,month:wr,day:wr,hour:wr,minute:wr,second:wr},Pr={year:wr,month:_r,day:wr,hour:wr,minute:wr},Fr={year:wr,month:_r,day:wr,hour:wr,minute:wr,second:wr},Vr={year:wr,month:_r,day:wr,weekday:_r,hour:wr,minute:wr},Kr={year:wr,month:xr,day:wr,hour:wr,minute:wr,timeZoneName:_r},Hr={year:wr,month:xr,day:wr,hour:wr,minute:wr,second:wr,timeZoneName:_r},Gr={year:wr,month:xr,day:wr,weekday:xr,hour:wr,minute:wr,timeZoneName:xr},Ur={year:wr,month:xr,day:wr,weekday:xr,hour:wr,minute:wr,second:wr,timeZoneName:xr},Wr=class{static{i(this,"Zone")}get type(){throw new kr}get name(){throw new kr}get ianaName(){return this.name}get isUniversal(){throw new kr}offsetName(t,e){throw new kr}formatOffset(t,e){throw new kr}offset(t){throw new kr}equals(t){throw new kr}get isValid(){throw new kr}},Yr=null,qr=class t extends Wr{static{i(this,"SystemZone")}static get instance(){return null===Yr&&(Yr=new t),Yr}get type(){return"system"}get name(){return(new Intl.DateTimeFormat).resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:e,locale:i}){return Ts(t,e,i)}formatOffset(t,e){return Ls(this.offset(t),e)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return"system"===t.type}get isValid(){return!0}},jr={};function Zr(t){return jr[t]||(jr[t]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),jr[t]}i(Zr,"makeDTF");var Xr={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Jr(t,e){let i=t.format(e).replace(/\u200E/g,""),o=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(i),[,n,r,a,s,l,c,d]=o;return[a,n,r,s,l,c,d]}function Qr(t,e){let i=t.formatToParts(e),o=[];for(let t=0;t<i.length;t++){let{type:e,value:n}=i[t],r=Xr[e];"era"===e?o[r]=n:es(r)||(o[r]=parseInt(n,10))}return o}i(Jr,"hackyOffset"),i(Qr,"partsOffset");var ta={},ea=class t extends Wr{static{i(this,"IANAZone")}static create(e){return ta[e]||(ta[e]=new t(e)),ta[e]}static resetCache(){ta={},jr={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(e){super(),this.zoneName=e,this.valid=t.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:e,locale:i}){return Ts(t,e,i,this.name)}formatOffset(t,e){return Ls(this.offset(t),e)}offset(t){let e=new Date(t);if(isNaN(e))return NaN;let i=Zr(this.name),[o,n,r,a,s,l,c]=i.formatToParts?Qr(i,e):Jr(i,e);"BC"===a&&(o=1-Math.abs(o));let d=+e,h=d%1e3;return d-=h>=0?h:1e3+h,(xs({year:o,month:n,day:r,hour:24===s?0:s,minute:l,second:c,millisecond:0})-d)/6e4}equals(t){return"iana"===t.type&&t.name===this.name}get isValid(){return this.valid}},ia={};function oa(t,e={}){let i=JSON.stringify([t,e]),o=ia[i];return o||(o=new Intl.ListFormat(t,e),ia[i]=o),o}i(oa,"getCachedLF");var na={};function ra(t,e={}){let i=JSON.stringify([t,e]),o=na[i];return o||(o=new Intl.DateTimeFormat(t,e),na[i]=o),o}i(ra,"getCachedDTF");var aa={};function sa(t,e={}){let i=JSON.stringify([t,e]),o=aa[i];return o||(o=new Intl.NumberFormat(t,e),aa[i]=o),o}i(sa,"getCachedINF");var la={};function ca(t,e={}){let{base:i,...o}=e,n=JSON.stringify([t,o]),r=la[n];return r||(r=new Intl.RelativeTimeFormat(t,e),la[n]=r),r}i(ca,"getCachedRTF");var da=null;function ha(){return da||(da=(new Intl.DateTimeFormat).resolvedOptions().locale)}i(ha,"systemLocale");var ua={};function pa(t){let e=ua[t];if(!e){let i=new Intl.Locale(t);e="getWeekInfo"in i?i.getWeekInfo():i.weekInfo,ua[t]=e}return e}function ga(t){let e=t.indexOf("-x-");-1!==e&&(t=t.substring(0,e));let i=t.indexOf("-u-");if(-1===i)return[t];{let e,o;try{e=ra(t).resolvedOptions(),o=t}catch{let n=t.substring(0,i);e=ra(n).resolvedOptions(),o=n}let{numberingSystem:n,calendar:r}=e;return[o,n,r]}}function ma(t,e,i){return(i||e)&&(t.includes("-u-")||(t+="-u"),i&&(t+=`-ca-${i}`),e&&(t+=`-nu-${e}`)),t}function va(t){let e=[];for(let i=1;i<=12;i++){let o=pd.utc(2009,i,1);e.push(t(o))}return e}function fa(t){let e=[];for(let i=1;i<=7;i++){let o=pd.utc(2016,11,13+i);e.push(t(o))}return e}function ba(t,e,i,o){let n=t.listingMode();return"error"===n?null:"en"===n?i(e):o(e)}function ya(t){return(!t.numberingSystem||"latn"===t.numberingSystem)&&("latn"===t.numberingSystem||!t.locale||t.locale.startsWith("en")||"latn"===new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem)}i(pa,"getCachedWeekInfo"),i(ga,"parseLocaleString"),i(ma,"intlConfigString"),i(va,"mapMonths"),i(fa,"mapWeekdays"),i(ba,"listStuff"),i(ya,"supportsFastNumbers");var ka=class{static{i(this,"PolyNumberFormatter")}constructor(t,e,i){this.padTo=i.padTo||0,this.floor=i.floor||!1;let{padTo:o,floor:n,...r}=i;if(!e||Object.keys(r).length>0){let e={useGrouping:!1,...i};i.padTo>0&&(e.minimumIntegerDigits=i.padTo),this.inf=sa(t,e)}}format(t){if(this.inf){let e=this.floor?Math.floor(t):t;return this.inf.format(e)}return ms(this.floor?Math.floor(t):ys(t,3),this.padTo)}},wa=class{static{i(this,"PolyDateFormatter")}constructor(t,e,i){let o;if(this.opts=i,this.originalZone=void 0,this.opts.timeZone)this.dt=t;else if("fixed"===t.zone.type){let e=t.offset/60*-1,i=e>=0?`Etc/GMT+${e}`:`Etc/GMT${e}`;0!==t.offset&&ea.create(i).valid?(o=i,this.dt=t):(o="UTC",this.dt=0===t.offset?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else"system"===t.zone.type?this.dt=t:"iana"===t.zone.type?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);let n={...this.opts};n.timeZone=n.timeZone||o,this.dtf=ra(e,n)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){let t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(t=>{if("timeZoneName"===t.type){let e=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...t,value:e}}return t}):t}resolvedOptions(){return this.dtf.resolvedOptions()}},_a=class{static{i(this,"PolyRelFormatter")}constructor(t,e,i){this.opts={style:"long",...i},!e&&as()&&(this.rtf=ca(t,i))}format(t,e){return this.rtf?this.rtf.format(t,e):Zs(e,t,this.opts.numeric,"long"!==this.opts.style)}formatToParts(t,e){return this.rtf?this.rtf.formatToParts(t,e):[]}},xa={firstDay:1,minimalDays:4,weekend:[6,7]},Ca=class t{static{i(this,"Locale")}static fromOpts(e){return t.create(e.locale,e.numberingSystem,e.outputCalendar,e.weekSettings,e.defaultToEN)}static create(e,i,o,n,r=!1){let a=e||Na.defaultLocale,s=a||(r?"en-US":ha()),l=i||Na.defaultNumberingSystem,c=o||Na.defaultOutputCalendar,d=us(n)||Na.defaultWeekSettings;return new t(s,l,c,d,a)}static resetCache(){da=null,na={},aa={},la={}}static fromObject({locale:e,numberingSystem:i,outputCalendar:o,weekSettings:n}={}){return t.create(e,i,o,n)}constructor(t,e,i,o,n){let[r,a,s]=ga(t);this.locale=r,this.numberingSystem=e||a||null,this.outputCalendar=i||s||null,this.weekSettings=o,this.intl=ma(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=n,this.fastNumbersCached=null}get fastNumbers(){return null==this.fastNumbersCached&&(this.fastNumbersCached=ya(this)),this.fastNumbersCached}listingMode(){let t=this.isEnglish(),e=!(null!==this.numberingSystem&&"latn"!==this.numberingSystem||null!==this.outputCalendar&&"gregory"!==this.outputCalendar);return t&&e?"en":"intl"}clone(e){return e&&0!==Object.getOwnPropertyNames(e).length?t.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,us(e.weekSettings)||this.weekSettings,e.defaultToEN||!1):this}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,e=!1){return ba(this,t,zs,()=>{let i=e?{month:t,day:"numeric"}:{month:t},o=e?"format":"standalone";return this.monthsCache[o][t]||(this.monthsCache[o][t]=va(t=>this.extract(t,i,"month"))),this.monthsCache[o][t]})}weekdays(t,e=!1){return ba(this,t,Fs,()=>{let i=e?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=e?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=fa(t=>this.extract(t,i,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return ba(this,void 0,()=>Vs,()=>{if(!this.meridiemCache){let t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[pd.utc(2016,11,13,9),pd.utc(2016,11,13,19)].map(e=>this.extract(e,t,"dayperiod"))}return this.meridiemCache})}eras(t){return ba(this,t,Us,()=>{let e={era:t};return this.eraCache[t]||(this.eraCache[t]=[pd.utc(-40,1,1),pd.utc(2017,1,1)].map(t=>this.extract(t,e,"era"))),this.eraCache[t]})}extract(t,e,i){let o=this.dtFormatter(t,e).formatToParts().find(t=>t.type.toLowerCase()===i);return o?o.value:null}numberFormatter(t={}){return new ka(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,e={}){return new wa(t,this.intl,e)}relFormatter(t={}){return new _a(this.intl,this.isEnglish(),t)}listFormatter(t={}){return oa(this.intl,t)}isEnglish(){return"en"===this.locale||"en-us"===this.locale.toLowerCase()||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:ss()?pa(this.locale):xa}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}},Sa=null,Ea=class t extends Wr{static{i(this,"FixedOffsetZone")}static get utcInstance(){return null===Sa&&(Sa=new t(0)),Sa}static instance(e){return 0===e?t.utcInstance:new t(e)}static parseSpecifier(e){if(e){let i=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(i)return new t(Is(i[1],i[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return 0===this.fixed?"UTC":`UTC${Ls(this.fixed,"narrow")}`}get ianaName(){return 0===this.fixed?"Etc/UTC":`Etc/GMT${Ls(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,e){return Ls(this.fixed,e)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return"fixed"===t.type&&t.fixed===this.fixed}get isValid(){return!0}},Ta=class extends Wr{static{i(this,"InvalidZone")}constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}};function Ia(t,e){if(es(t)||null===t)return e;if(t instanceof Wr)return t;if(ns(t)){let i=t.toLowerCase();return"default"===i?e:"local"===i||"system"===i?qr.instance:"utc"===i||"gmt"===i?Ea.utcInstance:Ea.parseSpecifier(i)||ea.create(t)}return is(t)?Ea.instance(t):"object"==typeof t&&"offset"in t&&"function"==typeof t.offset?t:new Ta(t)}i(Ia,"normalizeZone");var $a,Oa=i(()=>Date.now(),"now"),La="system",Da=null,Aa=null,Ma=null,Ba=60,za=null,Na=class{static{i(this,"Settings")}static get now(){return Oa}static set now(t){Oa=t}static set defaultZone(t){La=t}static get defaultZone(){return Ia(La,qr.instance)}static get defaultLocale(){return Da}static set defaultLocale(t){Da=t}static get defaultNumberingSystem(){return Aa}static set defaultNumberingSystem(t){Aa=t}static get defaultOutputCalendar(){return Ma}static set defaultOutputCalendar(t){Ma=t}static get defaultWeekSettings(){return za}static set defaultWeekSettings(t){za=us(t)}static get twoDigitCutoffYear(){return Ba}static set twoDigitCutoffYear(t){Ba=t%100}static get throwOnInvalid(){return $a}static set throwOnInvalid(t){$a=t}static resetCaches(){Ca.resetCache(),ea.resetCache()}},Ra=class{static{i(this,"Invalid")}constructor(t,e){this.reason=t,this.explanation=e}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}},Pa=[0,31,59,90,120,151,181,212,243,273,304,334],Fa=[0,31,60,91,121,152,182,213,244,274,305,335];function Va(t,e){return new Ra("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`)}function Ka(t,e,i){let o=new Date(Date.UTC(t,e-1,i));t<100&&t>=0&&o.setUTCFullYear(o.getUTCFullYear()-1900);let n=o.getUTCDay();return 0===n?7:n}function Ha(t,e,i){return i+(ks(t)?Fa:Pa)[e-1]}function Ga(t,e){let i=ks(t)?Fa:Pa,o=i.findIndex(t=>t<e);return{month:o+1,day:e-i[o]}}function Ua(t,e){return(t-e+7)%7+1}function Wa(t,e=4,i=1){let o,{year:n,month:r,day:a}=t,s=Ha(n,r,a),l=Ua(Ka(n,r,a),i),c=Math.floor((s-l+14-e)/7);return c<1?(o=n-1,c=Ss(o,e,i)):c>Ss(n,e,i)?(o=n+1,c=1):o=n,{weekYear:o,weekNumber:c,weekday:l,...Ds(t)}}function Ya(t,e=4,i=1){let o,{weekYear:n,weekNumber:r,weekday:a}=t,s=Ua(Ka(n,1,e),i),l=ws(n),c=7*r+a-s-7+e;c<1?(o=n-1,c+=ws(o)):c>l?(o=n+1,c-=ws(n)):o=n;let{month:d,day:h}=Ga(o,c);return{year:o,month:d,day:h,...Ds(t)}}function qa(t){let{year:e,month:i,day:o}=t;return{year:e,ordinal:Ha(e,i,o),...Ds(t)}}function ja(t){let{year:e,ordinal:i}=t,{month:o,day:n}=Ga(e,i);return{year:e,month:o,day:n,...Ds(t)}}function Za(t,e){if(es(t.localWeekday)&&es(t.localWeekNumber)&&es(t.localWeekYear))return{minDaysInFirstWeek:4,startOfWeek:1};if(!es(t.weekday)||!es(t.weekNumber)||!es(t.weekYear))throw new fr("Cannot mix locale-based week fields with ISO-based week fields");return es(t.localWeekday)||(t.weekday=t.localWeekday),es(t.localWeekNumber)||(t.weekNumber=t.localWeekNumber),es(t.localWeekYear)||(t.weekYear=t.localWeekYear),delete t.localWeekday,delete t.localWeekNumber,delete t.localWeekYear,{minDaysInFirstWeek:e.getMinDaysInFirstWeek(),startOfWeek:e.getStartOfWeek()}}function Xa(t,e=4,i=1){let o=os(t.weekYear),n=ps(t.weekNumber,1,Ss(t.weekYear,e,i)),r=ps(t.weekday,1,7);return o?n?!r&&Va("weekday",t.weekday):Va("week",t.weekNumber):Va("weekYear",t.weekYear)}function Ja(t){let e=os(t.year),i=ps(t.ordinal,1,ws(t.year));return e?!i&&Va("ordinal",t.ordinal):Va("year",t.year)}function Qa(t){let e=os(t.year),i=ps(t.month,1,12),o=ps(t.day,1,_s(t.year,t.month));return e?i?!o&&Va("day",t.day):Va("month",t.month):Va("year",t.year)}function ts(t){let{hour:e,minute:i,second:o,millisecond:n}=t,r=ps(e,0,23)||24===e&&0===i&&0===o&&0===n,a=ps(i,0,59),s=ps(o,0,59),l=ps(n,0,999);return r?a?s?!l&&Va("millisecond",n):Va("second",o):Va("minute",i):Va("hour",e)}function es(t){return typeof t>"u"}function is(t){return"number"==typeof t}function os(t){return"number"==typeof t&&t%1==0}function ns(t){return"string"==typeof t}function rs(t){return"[object Date]"===Object.prototype.toString.call(t)}function as(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function ss(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function ls(t){return Array.isArray(t)?t:[t]}function cs(t,e,i){if(0!==t.length)return t.reduce((t,o)=>{let n=[e(o),o];return t&&i(t[0],n[0])===t[0]?t:n},null)[1]}function ds(t,e){return e.reduce((e,i)=>(e[i]=t[i],e),{})}function hs(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function us(t){if(null==t)return null;if("object"!=typeof t)throw new yr("Week settings must be an object");if(!ps(t.firstDay,1,7)||!ps(t.minimalDays,1,7)||!Array.isArray(t.weekend)||t.weekend.some(t=>!ps(t,1,7)))throw new yr("Invalid week settings");return{firstDay:t.firstDay,minimalDays:t.minimalDays,weekend:Array.from(t.weekend)}}function ps(t,e,i){return os(t)&&t>=e&&t<=i}function gs(t,e){return t-e*Math.floor(t/e)}function ms(t,e=2){let i;return i=t<0?"-"+(""+-t).padStart(e,"0"):(""+t).padStart(e,"0"),i}function vs(t){if(!es(t)&&null!==t&&""!==t)return parseInt(t,10)}function fs(t){if(!es(t)&&null!==t&&""!==t)return parseFloat(t)}function bs(t){if(!es(t)&&null!==t&&""!==t){let e=1e3*parseFloat("0."+t);return Math.floor(e)}}function ys(t,e,i=!1){let o=10**e;return(i?Math.trunc:Math.round)(t*o)/o}function ks(t){return t%4==0&&(t%100!=0||t%400==0)}function ws(t){return ks(t)?366:365}function _s(t,e){let i=gs(e-1,12)+1;return 2===i?ks(t+(e-i)/12)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][i-1]}function xs(t){let e=Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond);return t.year<100&&t.year>=0&&(e=new Date(e),e.setUTCFullYear(t.year,t.month-1,t.day)),+e}function Cs(t,e,i){return-Ua(Ka(t,1,e),i)+e-1}function Ss(t,e=4,i=1){let o=Cs(t,e,i),n=Cs(t+1,e,i);return(ws(t)-o+n)/7}function Es(t){return t>99?t:t>Na.twoDigitCutoffYear?1900+t:2e3+t}function Ts(t,e,i,o=null){let n=new Date(t),r={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};o&&(r.timeZone=o);let a={timeZoneName:e,...r},s=new Intl.DateTimeFormat(i,a).formatToParts(n).find(t=>"timezonename"===t.type.toLowerCase());return s?s.value:null}function Is(t,e){let i=parseInt(t,10);Number.isNaN(i)&&(i=0);let o=parseInt(e,10)||0;return 60*i+(i<0||Object.is(i,-0)?-o:o)}function $s(t){let e=Number(t);if("boolean"==typeof t||""===t||Number.isNaN(e))throw new yr(`Invalid unit value ${t}`);return e}function Os(t,e){let i={};for(let o in t)if(hs(t,o)){let n=t[o];if(null==n)continue;i[e(o)]=$s(n)}return i}function Ls(t,e){let i=Math.trunc(Math.abs(t/60)),o=Math.trunc(Math.abs(t%60)),n=t>=0?"+":"-";switch(e){case"short":return`${n}${ms(i,2)}:${ms(o,2)}`;case"narrow":return`${n}${i}${o>0?`:${o}`:""}`;case"techie":return`${n}${ms(i,2)}${ms(o,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function Ds(t){return ds(t,["hour","minute","second","millisecond"])}i(Va,"unitOutOfRange"),i(Ka,"dayOfWeek"),i(Ha,"computeOrdinal"),i(Ga,"uncomputeOrdinal"),i(Ua,"isoWeekdayToLocal"),i(Wa,"gregorianToWeek"),i(Ya,"weekToGregorian"),i(qa,"gregorianToOrdinal"),i(ja,"ordinalToGregorian"),i(Za,"usesLocalWeekValues"),i(Xa,"hasInvalidWeekData"),i(Ja,"hasInvalidOrdinalData"),i(Qa,"hasInvalidGregorianData"),i(ts,"hasInvalidTimeData"),i(es,"isUndefined"),i(is,"isNumber"),i(os,"isInteger"),i(ns,"isString"),i(rs,"isDate"),i(as,"hasRelative"),i(ss,"hasLocaleWeekInfo"),i(ls,"maybeArray"),i(cs,"bestBy"),i(ds,"pick"),i(hs,"hasOwnProperty"),i(us,"validateWeekSettings"),i(ps,"integerBetween"),i(gs,"floorMod"),i(ms,"padStart"),i(vs,"parseInteger"),i(fs,"parseFloating"),i(bs,"parseMillis"),i(ys,"roundTo"),i(ks,"isLeapYear"),i(ws,"daysInYear"),i(_s,"daysInMonth"),i(xs,"objToLocalTS"),i(Cs,"firstWeekOffset"),i(Ss,"weeksInWeekYear"),i(Es,"untruncateYear"),i(Ts,"parseZoneInfo"),i(Is,"signedOffset"),i($s,"asNumber"),i(Os,"normalizeObject"),i(Ls,"formatOffset"),i(Ds,"timeObject");var As=["January","February","March","April","May","June","July","August","September","October","November","December"],Ms=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Bs=["J","F","M","A","M","J","J","A","S","O","N","D"];function zs(t){switch(t){case"narrow":return[...Bs];case"short":return[...Ms];case"long":return[...As];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}i(zs,"months");var Ns=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Rs=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Ps=["M","T","W","T","F","S","S"];function Fs(t){switch(t){case"narrow":return[...Ps];case"short":return[...Rs];case"long":return[...Ns];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}i(Fs,"weekdays");var Vs=["AM","PM"],Ks=["Before Christ","Anno Domini"],Hs=["BC","AD"],Gs=["B","A"];function Us(t){switch(t){case"narrow":return[...Gs];case"short":return[...Hs];case"long":return[...Ks];default:return null}}function Ws(t){return Vs[t.hour<12?0:1]}function Ys(t,e){return Fs(e)[t.weekday-1]}function qs(t,e){return zs(e)[t.month-1]}function js(t,e){return Us(e)[t.year<0?0:1]}function Zs(t,e,i="always",o=!1){let n={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},r=-1===["hours","minutes","seconds"].indexOf(t);if("auto"===i&&r){let i="days"===t;switch(e){case 1:return i?"tomorrow":`next ${n[t][0]}`;case-1:return i?"yesterday":`last ${n[t][0]}`;case 0:return i?"today":`this ${n[t][0]}`}}let a=Object.is(e,-0)||e<0,s=Math.abs(e),l=1===s,c=n[t],d=o?l?c[1]:c[2]||c[1]:l?n[t][0]:t;return a?`${s} ${d} ago`:`in ${s} ${d}`}function Xs(t,e){let i="";for(let o of t)o.literal?i+=o.val:i+=e(o.val);return i}i(Us,"eras"),i(Ws,"meridiemForDateTime"),i(Ys,"weekdayForDateTime"),i(qs,"monthForDateTime"),i(js,"eraForDateTime"),i(Zs,"formatRelativeTime"),i(Xs,"stringifyTokens");var Js={D:Cr,DD:Sr,DDD:Tr,DDDD:Ir,t:$r,tt:Or,ttt:Lr,tttt:Dr,T:Ar,TT:Mr,TTT:Br,TTTT:zr,f:Nr,ff:Pr,fff:Kr,ffff:Gr,F:Rr,FF:Fr,FFF:Hr,FFFF:Ur},Qs=class t{static{i(this,"Formatter")}static create(e,i={}){return new t(e,i)}static parseFormat(t){let e=null,i="",o=!1,n=[];for(let r=0;r<t.length;r++){let a=t.charAt(r);"'"===a?(i.length>0&&n.push({literal:o||/^\s+$/.test(i),val:i}),e=null,i="",o=!o):o||a===e?i+=a:(i.length>0&&n.push({literal:/^\s+$/.test(i),val:i}),i=a,e=a)}return i.length>0&&n.push({literal:o||/^\s+$/.test(i),val:i}),n}static macroTokenToFormatOpts(t){return Js[t]}constructor(t,e){this.opts=e,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,e){return null===this.systemLoc&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...e}).format()}dtFormatter(t,e={}){return this.loc.dtFormatter(t,{...this.opts,...e})}formatDateTime(t,e){return this.dtFormatter(t,e).format()}formatDateTimeParts(t,e){return this.dtFormatter(t,e).formatToParts()}formatInterval(t,e){return this.dtFormatter(t.start,e).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,e){return this.dtFormatter(t,e).resolvedOptions()}num(t,e=0){if(this.opts.forceSimple)return ms(t,e);let i={...this.opts};return e>0&&(i.padTo=e),this.loc.numberFormatter(i).format(t)}formatDateTimeFromString(e,o){let n="en"===this.loc.listingMode(),r=this.loc.outputCalendar&&"gregory"!==this.loc.outputCalendar,a=i((t,i)=>this.loc.extract(e,t,i),"string"),s=i(t=>e.isOffsetFixed&&0===e.offset&&t.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,t.format):"","formatOffset"),l=i(()=>n?Ws(e):a({hour:"numeric",hourCycle:"h12"},"dayperiod"),"meridiem"),c=i((t,i)=>n?qs(e,t):a(i?{month:t}:{month:t,day:"numeric"},"month"),"month"),d=i((t,i)=>n?Ys(e,t):a(i?{weekday:t}:{weekday:t,month:"long",day:"numeric"},"weekday"),"weekday"),h=i(i=>{let o=t.macroTokenToFormatOpts(i);return o?this.formatWithSystemDefault(e,o):i},"maybeMacro"),u=i(t=>n?js(e,t):a({era:t},"era"),"era"),p=i(t=>{switch(t){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12==0?12:e.hour%12);case"hh":return this.num(e.hour%12==0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return l();case"d":return r?a({day:"numeric"},"day"):this.num(e.day);case"dd":return r?a({day:"2-digit"},"day"):this.num(e.day,2);case"c":case"E":return this.num(e.weekday);case"ccc":return d("short",!0);case"cccc":return d("long",!0);case"ccccc":return d("narrow",!0);case"EEE":return d("short",!1);case"EEEE":return d("long",!1);case"EEEEE":return d("narrow",!1);case"L":return r?a({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return r?a({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return c("short",!0);case"LLLL":return c("long",!0);case"LLLLL":return c("narrow",!0);case"M":return r?a({month:"numeric"},"month"):this.num(e.month);case"MM":return r?a({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return c("short",!1);case"MMMM":return c("long",!1);case"MMMMM":return c("narrow",!1);case"y":return r?a({year:"numeric"},"year"):this.num(e.year);case"yy":return r?a({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return r?a({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return r?a({year:"numeric"},"year"):this.num(e.year,6);case"G":return u("short");case"GG":return u("long");case"GGGGG":return u("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"n":return this.num(e.localWeekNumber);case"nn":return this.num(e.localWeekNumber,2);case"ii":return this.num(e.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(e.localWeekYear,4);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return h(t)}},"tokenToString");return Xs(t.parseFormat(o),p)}formatDurationFromString(e,o){let n=i(t=>{switch(t[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},"tokenToField"),r=i(t=>e=>{let i=n(e);return i?this.num(t.get(i),e.length):e},"tokenToString"),a=t.parseFormat(o),s=a.reduce((t,{literal:e,val:i})=>e?t:t.concat(i),[]);return Xs(a,r(e.shiftTo(...s.map(n).filter(t=>t))))}},tl=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function el(...t){let e=t.reduce((t,e)=>t+e.source,"");return RegExp(`^${e}$`)}function il(...t){return e=>t.reduce(([t,i,o],n)=>{let[r,a,s]=n(e,o);return[{...t,...r},a||i,s]},[{},null,1]).slice(0,2)}function ol(t,...e){if(null==t)return[null,null];for(let[i,o]of e){let e=i.exec(t);if(e)return o(e)}return[null,null]}function nl(...t){return(e,i)=>{let o,n={};for(o=0;o<t.length;o++)n[t[o]]=vs(e[i+o]);return[n,null,i+o]}}i(el,"combineRegexes"),i(il,"combineExtractors"),i(ol,"parse"),i(nl,"simpleParse");var rl=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,al=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,sl=RegExp(`${al.source}(?:${rl.source}?(?:\\[(${tl.source})\\])?)?`),ll=RegExp(`(?:T${sl.source})?`),cl=nl("weekYear","weekNumber","weekDay"),dl=nl("year","ordinal"),hl=RegExp(`${al.source} ?(?:${rl.source}|(${tl.source}))?`),ul=RegExp(`(?: ${hl.source})?`);function pl(t,e,i){let o=t[e];return es(o)?i:vs(o)}function gl(t,e){return[{year:pl(t,e),month:pl(t,e+1,1),day:pl(t,e+2,1)},null,e+3]}function ml(t,e){return[{hours:pl(t,e,0),minutes:pl(t,e+1,0),seconds:pl(t,e+2,0),milliseconds:bs(t[e+3])},null,e+4]}function vl(t,e){let i=!t[e]&&!t[e+1],o=Is(t[e+1],t[e+2]);return[{},i?null:Ea.instance(o),e+3]}function fl(t,e){return[{},t[e]?ea.create(t[e]):null,e+1]}i(pl,"int"),i(gl,"extractISOYmd"),i(ml,"extractISOTime"),i(vl,"extractISOOffset"),i(fl,"extractIANAZone");var bl=RegExp(`^T?${al.source}$`),yl=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function kl(t){let[e,o,n,r,a,s,l,c,d]=t,h="-"===e[0],u=c&&"-"===c[0],p=i((t,e=!1)=>void 0!==t&&(e||t&&h)?-t:t,"maybeNegate");return[{years:p(fs(o)),months:p(fs(n)),weeks:p(fs(r)),days:p(fs(a)),hours:p(fs(s)),minutes:p(fs(l)),seconds:p(fs(c),"-0"===c),milliseconds:p(bs(d),u)}]}i(kl,"extractISODuration");var wl={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function _l(t,e,i,o,n,r,a){let s={year:2===e.length?Es(vs(e)):vs(e),month:Ms.indexOf(i)+1,day:vs(o),hour:vs(n),minute:vs(r)};return a&&(s.second=vs(a)),t&&(s.weekday=t.length>3?Ns.indexOf(t)+1:Rs.indexOf(t)+1),s}i(_l,"fromStrings");var xl=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Cl(t){let e,[,i,o,n,r,a,s,l,c,d,h,u]=t,p=_l(i,r,n,o,a,s,l);return e=c?wl[c]:d?0:Is(h,u),[p,new Ea(e)]}function Sl(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}i(Cl,"extractRFC2822"),i(Sl,"preprocessRFC2822");var El=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Tl=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Il=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function $l(t){let[,e,i,o,n,r,a,s]=t;return[_l(e,n,o,i,r,a,s),Ea.utcInstance]}function Ol(t){let[,e,i,o,n,r,a,s]=t;return[_l(e,s,i,o,n,r,a),Ea.utcInstance]}i($l,"extractRFC1123Or850"),i(Ol,"extractASCII");var Ll=el(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,ll),Dl=el(/(\d{4})-?W(\d\d)(?:-?(\d))?/,ll),Al=el(/(\d{4})-?(\d{3})/,ll),Ml=el(sl),Bl=il(gl,ml,vl,fl),zl=il(cl,ml,vl,fl),Nl=il(dl,ml,vl,fl),Rl=il(ml,vl,fl);function Pl(t){return ol(t,[Ll,Bl],[Dl,zl],[Al,Nl],[Ml,Rl])}function Fl(t){return ol(Sl(t),[xl,Cl])}function Vl(t){return ol(t,[El,$l],[Tl,$l],[Il,Ol])}function Kl(t){return ol(t,[yl,kl])}i(Pl,"parseISODate"),i(Fl,"parseRFC2822Date"),i(Vl,"parseHTTPDate"),i(Kl,"parseISODuration");var Hl=il(ml);function Gl(t){return ol(t,[bl,Hl])}i(Gl,"parseISOTimeOnly");var Ul=el(/(\d{4})-(\d\d)-(\d\d)/,ul),Wl=el(hl),Yl=il(ml,vl,fl);function ql(t){return ol(t,[Ul,Bl],[Wl,Yl])}i(ql,"parseSQL");var jl="Invalid Duration",Zl={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},Xl={years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6},...Zl},Jl=365.2425,Ql=30.436875,tc={years:{quarters:4,months:12,weeks:Jl/7,days:Jl,hours:24*Jl,minutes:525949.2,seconds:525949.2*60,milliseconds:525949.2*60*1e3},quarters:{months:3,weeks:Jl/28,days:Jl/4,hours:24*Jl/4,minutes:131487.3,seconds:525949.2*60/4,milliseconds:7889237999.999999},months:{weeks:Ql/7,days:Ql,hours:24*Ql,minutes:43829.1,seconds:2629746,milliseconds:2629746e3},...Zl},ec=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],ic=ec.slice(0).reverse();function oc(t,e,i=!1){let o={values:i?e.values:{...t.values,...e.values||{}},loc:t.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||t.conversionAccuracy,matrix:e.matrix||t.matrix};return new sc(o)}function nc(t,e){let i=e.milliseconds??0;for(let o of ic.slice(1))e[o]&&(i+=e[o]*t[o].milliseconds);return i}function rc(t,e){let i=nc(t,e)<0?-1:1;ec.reduceRight((o,n)=>{if(es(e[n]))return o;if(o){let r=e[o]*i,a=t[n][o],s=Math.floor(r/a);e[n]+=s*i,e[o]-=s*a*i}return n},null),ec.reduce((i,o)=>{if(es(e[o]))return i;if(i){let n=e[i]%1;e[i]-=n,e[o]+=n*t[i][o]}return o},null)}function ac(t){let e={};for(let[i,o]of Object.entries(t))0!==o&&(e[i]=o);return e}i(oc,"clone"),i(nc,"durationToMillis"),i(rc,"normalizeValues"),i(ac,"removeZeroes");var sc=class t{static{i(this,"Duration")}constructor(t){let e="longterm"===t.conversionAccuracy||!1,i=e?tc:Xl;t.matrix&&(i=t.matrix),this.values=t.values,this.loc=t.loc||Ca.create(),this.conversionAccuracy=e?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=i,this.isLuxonDuration=!0}static fromMillis(e,i){return t.fromObject({milliseconds:e},i)}static fromObject(e,i={}){if(null==e||"object"!=typeof e)throw new yr("Duration.fromObject: argument expected to be an object, got "+(null===e?"null":typeof e));return new t({values:Os(e,t.normalizeUnit),loc:Ca.fromObject(i),conversionAccuracy:i.conversionAccuracy,matrix:i.matrix})}static fromDurationLike(e){if(is(e))return t.fromMillis(e);if(t.isDuration(e))return e;if("object"==typeof e)return t.fromObject(e);throw new yr(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,i){let[o]=Kl(e);return o?t.fromObject(o,i):t.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,i){let[o]=Gl(e);return o?t.fromObject(o,i):t.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,i=null){if(!e)throw new yr("need to specify a reason the Duration is invalid");let o=e instanceof Ra?e:new Ra(e,i);if(Na.throwOnInvalid)throw new vr(o);return new t({invalid:o})}static normalizeUnit(t){let e={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!e)throw new br(t);return e}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,e={}){let i={...e,floor:!1!==e.round&&!1!==e.floor};return this.isValid?Qs.create(this.loc,i).formatDurationFromString(this,t):jl}toHuman(t={}){if(!this.isValid)return jl;let e=ec.map(e=>{let i=this.values[e];return es(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:e.slice(0,-1)}).format(i)}).filter(t=>t);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(e)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return 0!==this.years&&(t+=this.years+"Y"),(0!==this.months||0!==this.quarters)&&(t+=this.months+3*this.quarters+"M"),0!==this.weeks&&(t+=this.weeks+"W"),0!==this.days&&(t+=this.days+"D"),(0!==this.hours||0!==this.minutes||0!==this.seconds||0!==this.milliseconds)&&(t+="T"),0!==this.hours&&(t+=this.hours+"H"),0!==this.minutes&&(t+=this.minutes+"M"),(0!==this.seconds||0!==this.milliseconds)&&(t+=ys(this.seconds+this.milliseconds/1e3,3)+"S"),"P"===t&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;let e=this.toMillis();return e<0||e>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},pd.fromMillis(e,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?nc(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;let i=t.fromDurationLike(e),o={};for(let t of ec)(hs(i.values,t)||hs(this.values,t))&&(o[t]=i.get(t)+this.get(t));return oc(this,{values:o},!0)}minus(e){if(!this.isValid)return this;let i=t.fromDurationLike(e);return this.plus(i.negate())}mapUnits(t){if(!this.isValid)return this;let e={};for(let i of Object.keys(this.values))e[i]=$s(t(this.values[i],i));return oc(this,{values:e},!0)}get(e){return this[t.normalizeUnit(e)]}set(e){return this.isValid?oc(this,{values:{...this.values,...Os(e,t.normalizeUnit)}}):this}reconfigure({locale:t,numberingSystem:e,conversionAccuracy:i,matrix:o}={}){return oc(this,{loc:this.loc.clone({locale:t,numberingSystem:e}),matrix:o,conversionAccuracy:i})}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;let t=this.toObject();return rc(this.matrix,t),oc(this,{values:t},!0)}rescale(){return this.isValid?oc(this,{values:ac(this.normalize().shiftToAll().toObject())},!0):this}shiftTo(...e){if(!this.isValid)return this;if(0===e.length)return this;e=e.map(e=>t.normalizeUnit(e));let i,o={},n={},r=this.toObject();for(let t of ec)if(e.indexOf(t)>=0){i=t;let e=0;for(let i in n)e+=this.matrix[i][t]*n[i],n[i]=0;is(r[t])&&(e+=r[t]);let a=Math.trunc(e);o[t]=a,n[t]=(1e3*e-1e3*a)/1e3}else is(r[t])&&(n[t]=r[t]);for(let t in n)0!==n[t]&&(o[i]+=t===i?n[t]:n[t]/this.matrix[i][t]);return rc(this.matrix,o),oc(this,{values:o},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;let t={};for(let e of Object.keys(this.values))t[e]=0===this.values[e]?0:-this.values[e];return oc(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return null===this.invalid}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function e(t,e){return void 0===t||0===t?void 0===e||0===e:t===e}i(e,"eq");for(let i of ec)if(!e(this.values[i],t.values[i]))return!1;return!0}},lc="Invalid Interval";function cc(t,e){return t&&t.isValid?e&&e.isValid?e<t?dc.invalid("end before start",`The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`):null:dc.invalid("missing or invalid end"):dc.invalid("missing or invalid start")}i(cc,"validateStartEnd");var dc=class t{static{i(this,"Interval")}constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(e,i=null){if(!e)throw new yr("need to specify a reason the Interval is invalid");let o=e instanceof Ra?e:new Ra(e,i);if(Na.throwOnInvalid)throw new mr(o);return new t({invalid:o})}static fromDateTimes(e,i){let o=gd(e),n=gd(i);return cc(o,n)??new t({start:o,end:n})}static after(e,i){let o=sc.fromDurationLike(i),n=gd(e);return t.fromDateTimes(n,n.plus(o))}static before(e,i){let o=sc.fromDurationLike(i),n=gd(e);return t.fromDateTimes(n.minus(o),n)}static fromISO(e,i){let[o,n]=(e||"").split("/",2);if(o&&n){let e,r,a,s;try{e=pd.fromISO(o,i),r=e.isValid}catch{r=!1}try{a=pd.fromISO(n,i),s=a.isValid}catch{s=!1}if(r&&s)return t.fromDateTimes(e,a);if(r){let o=sc.fromISO(n,i);if(o.isValid)return t.after(e,o)}else if(s){let e=sc.fromISO(o,i);if(e.isValid)return t.before(a,e)}}return t.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return null===this.invalidReason}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",e){if(!this.isValid)return NaN;let i,o=this.start.startOf(t,e);return i=e?.useLocaleWeeks?this.end.reconfigure({locale:o.locale}):this.end,i=i.startOf(t,e),Math.floor(i.diff(o,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return!!this.isValid&&(this.isEmpty()||this.e.minus(1).hasSame(this.s,t))}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return!!this.isValid&&this.s>t}isBefore(t){return!!this.isValid&&this.e<=t}contains(t){return!!this.isValid&&this.s<=t&&this.e>t}set({start:e,end:i}={}){return this.isValid?t.fromDateTimes(e||this.s,i||this.e):this}splitAt(...e){if(!this.isValid)return[];let i=e.map(gd).filter(t=>this.contains(t)).sort((t,e)=>t.toMillis()-e.toMillis()),o=[],{s:n}=this,r=0;for(;n<this.e;){let e=i[r]||this.e,a=+e>+this.e?this.e:e;o.push(t.fromDateTimes(n,a)),n=a,r+=1}return o}splitBy(e){let i=sc.fromDurationLike(e);if(!this.isValid||!i.isValid||0===i.as("milliseconds"))return[];let o,{s:n}=this,r=1,a=[];for(;n<this.e;){let e=this.start.plus(i.mapUnits(t=>t*r));o=+e>+this.e?this.e:e,a.push(t.fromDateTimes(n,o)),n=o,r+=1}return a}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return!!this.isValid&&+this.e==+t.s}abutsEnd(t){return!!this.isValid&&+t.e==+this.s}engulfs(t){return!!this.isValid&&this.s<=t.s&&this.e>=t.e}equals(t){return!(!this.isValid||!t.isValid)&&this.s.equals(t.s)&&this.e.equals(t.e)}intersection(e){if(!this.isValid)return this;let i=this.s>e.s?this.s:e.s,o=this.e<e.e?this.e:e.e;return i>=o?null:t.fromDateTimes(i,o)}union(e){if(!this.isValid)return this;let i=this.s<e.s?this.s:e.s,o=this.e>e.e?this.e:e.e;return t.fromDateTimes(i,o)}static merge(t){let[e,i]=t.sort((t,e)=>t.s-e.s).reduce(([t,e],i)=>e?e.overlaps(i)||e.abutsStart(i)?[t,e.union(i)]:[t.concat([e]),i]:[t,i],[[],null]);return i&&e.push(i),e}static xor(e){let i=null,o=0,n=[],r=e.map(t=>[{time:t.s,type:"s"},{time:t.e,type:"e"}]),a=Array.prototype.concat(...r).sort((t,e)=>t.time-e.time);for(let e of a)o+="s"===e.type?1:-1,1===o?i=e.time:(i&&+i!=+e.time&&n.push(t.fromDateTimes(i,e.time)),i=null);return t.merge(n)}difference(...e){return t.xor([this].concat(e)).map(t=>this.intersection(t)).filter(t=>t&&!t.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:lc}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Cr,e={}){return this.isValid?Qs.create(this.s.loc.clone(e),t).formatInterval(this):lc}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:lc}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:lc}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:lc}toFormat(t,{separator:e=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${e}${this.e.toFormat(t)}`:lc}toDuration(t,e){return this.isValid?this.e.diff(this.s,t,e):sc.invalid(this.invalidReason)}mapEndpoints(e){return t.fromDateTimes(e(this.s),e(this.e))}},hc=class{static{i(this,"Info")}static hasDST(t=Na.defaultZone){let e=pd.now().setZone(t).set({month:12});return!t.isUniversal&&e.offset!==e.set({month:6}).offset}static isValidIANAZone(t){return ea.isValidZone(t)}static normalizeZone(t){return Ia(t,Na.defaultZone)}static getStartOfWeek({locale:t=null,locObj:e=null}={}){return(e||Ca.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:e=null}={}){return(e||Ca.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:e=null}={}){return(e||Ca.create(t)).getWeekendDays().slice()}static months(t="long",{locale:e=null,numberingSystem:i=null,locObj:o=null,outputCalendar:n="gregory"}={}){return(o||Ca.create(e,i,n)).months(t)}static monthsFormat(t="long",{locale:e=null,numberingSystem:i=null,locObj:o=null,outputCalendar:n="gregory"}={}){return(o||Ca.create(e,i,n)).months(t,!0)}static weekdays(t="long",{locale:e=null,numberingSystem:i=null,locObj:o=null}={}){return(o||Ca.create(e,i,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:e=null,numberingSystem:i=null,locObj:o=null}={}){return(o||Ca.create(e,i,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return Ca.create(t).meridiems()}static eras(t="short",{locale:e=null}={}){return Ca.create(e,null,"gregory").eras(t)}static features(){return{relative:as(),localeWeek:ss()}}};function uc(t,e){let o=i(t=>t.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),"utcDayStart"),n=o(e)-o(t);return Math.floor(sc.fromMillis(n).as("days"))}function pc(t,e,i){let o,n,r=[["years",(t,e)=>e.year-t.year],["quarters",(t,e)=>e.quarter-t.quarter+4*(e.year-t.year)],["months",(t,e)=>e.month-t.month+12*(e.year-t.year)],["weeks",(t,e)=>{let i=uc(t,e);return(i-i%7)/7}],["days",uc]],a={},s=t;for(let[l,c]of r)i.indexOf(l)>=0&&(o=l,a[l]=c(t,e),n=s.plus(a),n>e?(a[l]--,(t=s.plus(a))>e&&(n=t,a[l]--,t=s.plus(a))):t=n);return[t,a,n,o]}function gc(t,e,i,o){let[n,r,a,s]=pc(t,e,i),l=e-n,c=i.filter(t=>["hours","minutes","seconds","milliseconds"].indexOf(t)>=0);0===c.length&&(a<e&&(a=n.plus({[s]:1})),a!==n&&(r[s]=(r[s]||0)+l/(a-n)));let d=sc.fromObject(r,o);return c.length>0?sc.fromMillis(l,o).shiftTo(...c).plus(d):d}i(uc,"dayDiff"),i(pc,"highOrderDiffs"),i(gc,"default");var mc={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},vc={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},fc=mc.hanidec.replace(/[\[|\]]/g,"").split("");function bc(t){let e=parseInt(t,10);if(isNaN(e)){e="";for(let i=0;i<t.length;i++){let o=t.charCodeAt(i);if(-1!==t[i].search(mc.hanidec))e+=fc.indexOf(t[i]);else for(let t in vc){let[i,n]=vc[t];o>=i&&o<=n&&(e+=o-i)}}return parseInt(e,10)}return e}function yc({numberingSystem:t},e=""){return new RegExp(`${mc[t||"latn"]}${e}`)}function kc(t,e=t=>t){return{regex:t,deser:([t])=>e(bc(t))}}i(bc,"parseDigits"),i(yc,"digitRegex"),i(kc,"intUnit");var wc="[  ]",_c=new RegExp(wc,"g");function xc(t){return t.replace(/\./g,"\\.?").replace(_c,wc)}function Cc(t){return t.replace(/\./g,"").replace(_c," ").toLowerCase()}function Sc(t,e){return null===t?null:{regex:RegExp(t.map(xc).join("|")),deser:([i])=>t.findIndex(t=>Cc(i)===Cc(t))+e}}function Ec(t,e){return{regex:t,deser:([,t,e])=>Is(t,e),groups:e}}function Tc(t){return{regex:t,deser:([t])=>t}}function Ic(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function $c(t,e){let o=yc(e),n=yc(e,"{2}"),r=yc(e,"{3}"),a=yc(e,"{4}"),s=yc(e,"{6}"),l=yc(e,"{1,2}"),c=yc(e,"{1,3}"),d=yc(e,"{1,6}"),h=yc(e,"{1,9}"),u=yc(e,"{2,4}"),p=yc(e,"{4,6}"),g=i(t=>({regex:RegExp(Ic(t.val)),deser:([t])=>t,literal:!0}),"literal"),m=i(i=>{if(t.literal)return g(i);switch(i.val){case"G":return Sc(e.eras("short"),0);case"GG":return Sc(e.eras("long"),0);case"y":return kc(d);case"yy":case"kk":return kc(u,Es);case"yyyy":case"kkkk":return kc(a);case"yyyyy":return kc(p);case"yyyyyy":return kc(s);case"M":case"L":case"d":case"H":case"h":case"m":case"q":case"s":case"W":return kc(l);case"MM":case"LL":case"dd":case"HH":case"hh":case"mm":case"qq":case"ss":case"WW":return kc(n);case"MMM":return Sc(e.months("short",!0),1);case"MMMM":return Sc(e.months("long",!0),1);case"LLL":return Sc(e.months("short",!1),1);case"LLLL":return Sc(e.months("long",!1),1);case"o":case"S":return kc(c);case"ooo":case"SSS":return kc(r);case"u":return Tc(h);case"uu":return Tc(l);case"uuu":case"E":case"c":return kc(o);case"a":return Sc(e.meridiems(),0);case"EEE":return Sc(e.weekdays("short",!1),1);case"EEEE":return Sc(e.weekdays("long",!1),1);case"ccc":return Sc(e.weekdays("short",!0),1);case"cccc":return Sc(e.weekdays("long",!0),1);case"Z":case"ZZ":return Ec(new RegExp(`([+-]${l.source})(?::(${n.source}))?`),2);case"ZZZ":return Ec(new RegExp(`([+-]${l.source})(${n.source})?`),2);case"z":return Tc(/[a-z_+-/]{1,256}?/i);case" ":return Tc(/[^\S\n\r]/);default:return g(i)}},"unitate")(t)||{invalidReason:"missing Intl.DateTimeFormat.formatToParts support"};return m.token=t,m}i(xc,"fixListRegex"),i(Cc,"stripInsensitivities"),i(Sc,"oneOf"),i(Ec,"offset"),i(Tc,"simple"),i(Ic,"escapeToken"),i($c,"unitForToken");var Oc={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Lc(t,e,i){let{type:o,value:n}=t;if("literal"===o){let t=/^\s+$/.test(n);return{literal:!t,val:t?" ":n}}let r=e[o],a=o;"hour"===o&&(a=null!=e.hour12?e.hour12?"hour12":"hour24":null!=e.hourCycle?"h11"===e.hourCycle||"h12"===e.hourCycle?"hour12":"hour24":i.hour12?"hour12":"hour24");let s=Oc[a];if("object"==typeof s&&(s=s[r]),s)return{literal:!1,val:s}}function Dc(t){return[`^${t.map(t=>t.regex).reduce((t,e)=>`${t}(${e.source})`,"")}$`,t]}function Ac(t,e,i){let o=t.match(e);if(o){let t={},e=1;for(let n in i)if(hs(i,n)){let r=i[n],a=r.groups?r.groups+1:1;!r.literal&&r.token&&(t[r.token.val[0]]=r.deser(o.slice(e,e+a))),e+=a}return[o,t]}return[o,{}]}function Mc(t){let e,o=i(t=>{switch(t){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},"toField"),n=null;return es(t.z)||(n=ea.create(t.z)),es(t.Z)||(n||(n=new Ea(t.Z)),e=t.Z),es(t.q)||(t.M=3*(t.q-1)+1),es(t.h)||(t.h<12&&1===t.a?t.h+=12:12===t.h&&0===t.a&&(t.h=0)),0===t.G&&t.y&&(t.y=-t.y),es(t.u)||(t.S=bs(t.u)),[Object.keys(t).reduce((e,i)=>{let n=o(i);return n&&(e[n]=t[i]),e},{}),n,e]}i(Lc,"tokenForPart"),i(Dc,"buildRegex"),i(Ac,"match"),i(Mc,"dateTimeFromMatches");var Bc=null;function zc(){return Bc||(Bc=pd.fromMillis(1555555555555)),Bc}function Nc(t,e){if(t.literal)return t;let i=Vc(Qs.macroTokenToFormatOpts(t.val),e);return null==i||i.includes(void 0)?t:i}function Rc(t,e){return Array.prototype.concat(...t.map(t=>Nc(t,e)))}function Pc(t,e,i){let o=Rc(Qs.parseFormat(i),t),n=o.map(e=>$c(e,t)),r=n.find(t=>t.invalidReason);if(r)return{input:e,tokens:o,invalidReason:r.invalidReason};{let[t,i]=Dc(n),r=RegExp(t,"i"),[a,s]=Ac(e,r,i),[l,c,d]=s?Mc(s):[null,null,void 0];if(hs(s,"a")&&hs(s,"H"))throw new fr("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:o,regex:r,rawMatches:a,matches:s,result:l,zone:c,specificOffset:d}}}function Fc(t,e,i){let{result:o,zone:n,specificOffset:r,invalidReason:a}=Pc(t,e,i);return[o,n,r,a]}function Vc(t,e){if(!t)return null;let i=Qs.create(e,t).dtFormatter(zc()),o=i.formatToParts(),n=i.resolvedOptions();return o.map(e=>Lc(e,t,n))}i(zc,"getDummyDateTime"),i(Nc,"maybeExpandMacroToken"),i(Rc,"expandMacroTokens"),i(Pc,"explainFromTokens"),i(Fc,"parseFromTokens"),i(Vc,"formatOptsToTokens");var Kc="Invalid DateTime",Hc=864e13;function Gc(t){return new Ra("unsupported zone",`the zone "${t.name}" is not supported`)}function Uc(t){return null===t.weekData&&(t.weekData=Wa(t.c)),t.weekData}function Wc(t){return null===t.localWeekData&&(t.localWeekData=Wa(t.c,t.loc.getMinDaysInFirstWeek(),t.loc.getStartOfWeek())),t.localWeekData}function Yc(t,e){let i={ts:t.ts,zone:t.zone,c:t.c,o:t.o,loc:t.loc,invalid:t.invalid};return new pd({...i,...e,old:i})}function qc(t,e,i){let o=t-60*e*1e3,n=i.offset(o);if(e===n)return[o,e];o-=60*(n-e)*1e3;let r=i.offset(o);return n===r?[o,n]:[t-60*Math.min(n,r)*1e3,Math.max(n,r)]}function jc(t,e){let i=new Date(t+=60*e*1e3);return{year:i.getUTCFullYear(),month:i.getUTCMonth()+1,day:i.getUTCDate(),hour:i.getUTCHours(),minute:i.getUTCMinutes(),second:i.getUTCSeconds(),millisecond:i.getUTCMilliseconds()}}function Zc(t,e,i){return qc(xs(t),e,i)}function Xc(t,e){let i=t.o,o=t.c.year+Math.trunc(e.years),n=t.c.month+Math.trunc(e.months)+3*Math.trunc(e.quarters),r={...t.c,year:o,month:n,day:Math.min(t.c.day,_s(o,n))+Math.trunc(e.days)+7*Math.trunc(e.weeks)},a=sc.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),s=xs(r),[l,c]=qc(s,i,t.zone);return 0!==a&&(l+=a,c=t.zone.offset(l)),{ts:l,o:c}}function Jc(t,e,i,o,n,r){let{setZone:a,zone:s}=i;if(t&&0!==Object.keys(t).length||e){let o=e||s,n=pd.fromObject(t,{...i,zone:o,specificOffset:r});return a?n:n.setZone(s)}return pd.invalid(new Ra("unparsable",`the input "${n}" can't be parsed as ${o}`))}function Qc(t,e,i=!0){return t.isValid?Qs.create(Ca.create("en-US"),{allowZ:i,forceSimple:!0}).formatDateTimeFromString(t,e):null}function td(t,e){let i=t.c.year>9999||t.c.year<0,o="";return i&&t.c.year>=0&&(o+="+"),o+=ms(t.c.year,i?6:4),e?(o+="-",o+=ms(t.c.month),o+="-",o+=ms(t.c.day)):(o+=ms(t.c.month),o+=ms(t.c.day)),o}function ed(t,e,i,o,n,r){let a=ms(t.c.hour);return e?(a+=":",a+=ms(t.c.minute),(0!==t.c.millisecond||0!==t.c.second||!i)&&(a+=":")):a+=ms(t.c.minute),(0!==t.c.millisecond||0!==t.c.second||!i)&&(a+=ms(t.c.second),(0!==t.c.millisecond||!o)&&(a+=".",a+=ms(t.c.millisecond,3))),n&&(t.isOffsetFixed&&0===t.offset&&!r?a+="Z":t.o<0?(a+="-",a+=ms(Math.trunc(-t.o/60)),a+=":",a+=ms(Math.trunc(-t.o%60))):(a+="+",a+=ms(Math.trunc(t.o/60)),a+=":",a+=ms(Math.trunc(t.o%60)))),r&&(a+="["+t.zone.ianaName+"]"),a}i(Gc,"unsupportedZone"),i(Uc,"possiblyCachedWeekData"),i(Wc,"possiblyCachedLocalWeekData"),i(Yc,"clone"),i(qc,"fixOffset"),i(jc,"tsToObj"),i(Zc,"objToTS"),i(Xc,"adjustTime"),i(Jc,"parseDataToDateTime"),i(Qc,"toTechFormat"),i(td,"toISODate"),i(ed,"toISOTime");var id={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},od={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},nd={ordinal:1,hour:0,minute:0,second:0,millisecond:0},rd=["year","month","day","hour","minute","second","millisecond"],ad=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],sd=["year","ordinal","hour","minute","second","millisecond"];function ld(t){let e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[t.toLowerCase()];if(!e)throw new br(t);return e}function cd(t){switch(t.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return ld(t)}}function dd(t,e){let i,o,n=Ia(e.zone,Na.defaultZone),r=Ca.fromObject(e),a=Na.now();if(es(t.year))i=a;else{for(let e of rd)es(t[e])&&(t[e]=id[e]);let e=Qa(t)||ts(t);if(e)return pd.invalid(e);let r=n.offset(a);[i,o]=Zc(t,r,n)}return new pd({ts:i,zone:n,loc:r,o})}function hd(t,e,o){let n=!!es(o.round)||o.round,r=i((t,i)=>(t=ys(t,n||o.calendary?0:2,!0),e.loc.clone(o).relFormatter(o).format(t,i)),"format"),a=i(i=>o.calendary?e.hasSame(t,i)?0:e.startOf(i).diff(t.startOf(i),i).get(i):e.diff(t,i).get(i),"differ");if(o.unit)return r(a(o.unit),o.unit);for(let t of o.units){let e=a(t);if(Math.abs(e)>=1)return r(e,t)}return r(t>e?-0:0,o.units[o.units.length-1])}function ud(t){let e,i={};return t.length>0&&"object"==typeof t[t.length-1]?(i=t[t.length-1],e=Array.from(t).slice(0,t.length-1)):e=Array.from(t),[i,e]}i(ld,"normalizeUnit"),i(cd,"normalizeUnitWithLocalWeeks"),i(dd,"quickDT"),i(hd,"diffRelative"),i(ud,"lastOpts");var pd=class t{static{i(this,"DateTime")}constructor(t){let e=t.zone||Na.defaultZone,i=t.invalid||(Number.isNaN(t.ts)?new Ra("invalid input"):null)||(e.isValid?null:Gc(e));this.ts=es(t.ts)?Na.now():t.ts;let o=null,n=null;if(!i)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(e))[o,n]=[t.old.c,t.old.o];else{let t=e.offset(this.ts);o=jc(this.ts,t),i=Number.isNaN(o.year)?new Ra("invalid input"):null,o=i?null:o,n=i?null:t}this._zone=e,this.loc=t.loc||Ca.create(),this.invalid=i,this.weekData=null,this.localWeekData=null,this.c=o,this.o=n,this.isLuxonDateTime=!0}static now(){return new t({})}static local(){let[t,e]=ud(arguments),[i,o,n,r,a,s,l]=e;return dd({year:i,month:o,day:n,hour:r,minute:a,second:s,millisecond:l},t)}static utc(){let[t,e]=ud(arguments),[i,o,n,r,a,s,l]=e;return t.zone=Ea.utcInstance,dd({year:i,month:o,day:n,hour:r,minute:a,second:s,millisecond:l},t)}static fromJSDate(e,i={}){let o=rs(e)?e.valueOf():NaN;if(Number.isNaN(o))return t.invalid("invalid input");let n=Ia(i.zone,Na.defaultZone);return n.isValid?new t({ts:o,zone:n,loc:Ca.fromObject(i)}):t.invalid(Gc(n))}static fromMillis(e,i={}){if(is(e))return e<-Hc||e>Hc?t.invalid("Timestamp out of range"):new t({ts:e,zone:Ia(i.zone,Na.defaultZone),loc:Ca.fromObject(i)});throw new yr(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,i={}){if(is(e))return new t({ts:1e3*e,zone:Ia(i.zone,Na.defaultZone),loc:Ca.fromObject(i)});throw new yr("fromSeconds requires a numerical input")}static fromObject(e,i={}){e=e||{};let o=Ia(i.zone,Na.defaultZone);if(!o.isValid)return t.invalid(Gc(o));let n=Ca.fromObject(i),r=Os(e,cd),{minDaysInFirstWeek:a,startOfWeek:s}=Za(r,n),l=Na.now(),c=es(i.specificOffset)?o.offset(l):i.specificOffset,d=!es(r.ordinal),h=!es(r.year),u=!es(r.month)||!es(r.day),p=h||u,g=r.weekYear||r.weekNumber;if((p||d)&&g)throw new fr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&d)throw new fr("Can't mix ordinal dates with month/day");let m,v,f=g||r.weekday&&!p,b=jc(l,c);f?(m=ad,v=od,b=Wa(b,a,s)):d?(m=sd,v=nd,b=qa(b)):(m=rd,v=id);let y=!1;for(let t of m)es(r[t])?r[t]=y?v[t]:b[t]:y=!0;let k=(f?Xa(r,a,s):d?Ja(r):Qa(r))||ts(r);if(k)return t.invalid(k);let w=f?Ya(r,a,s):d?ja(r):r,[_,x]=Zc(w,c,o),C=new t({ts:_,zone:o,o:x,loc:n});return r.weekday&&p&&e.weekday!==C.weekday?t.invalid("mismatched weekday",`you can't specify both a weekday of ${r.weekday} and a date of ${C.toISO()}`):C}static fromISO(t,e={}){let[i,o]=Pl(t);return Jc(i,o,e,"ISO 8601",t)}static fromRFC2822(t,e={}){let[i,o]=Fl(t);return Jc(i,o,e,"RFC 2822",t)}static fromHTTP(t,e={}){let[i,o]=Vl(t);return Jc(i,o,e,"HTTP",e)}static fromFormat(e,i,o={}){if(es(e)||es(i))throw new yr("fromFormat requires an input string and a format");let{locale:n=null,numberingSystem:r=null}=o,a=Ca.fromOpts({locale:n,numberingSystem:r,defaultToEN:!0}),[s,l,c,d]=Fc(a,e,i);return d?t.invalid(d):Jc(s,l,o,`format ${i}`,e,c)}static fromString(e,i,o={}){return t.fromFormat(e,i,o)}static fromSQL(t,e={}){let[i,o]=ql(t);return Jc(i,o,e,"SQL",t)}static invalid(e,i=null){if(!e)throw new yr("need to specify a reason the DateTime is invalid");let o=e instanceof Ra?e:new Ra(e,i);if(Na.throwOnInvalid)throw new gr(o);return new t({invalid:o})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,e={}){let i=Vc(t,Ca.fromObject(e));return i?i.map(t=>t?t.val:null).join(""):null}static expandFormat(t,e={}){return Rc(Qs.parseFormat(t),Ca.fromObject(e)).map(t=>t.val).join("")}get(t){return this[t]}get isValid(){return null===this.invalid}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Uc(this).weekYear:NaN}get weekNumber(){return this.isValid?Uc(this).weekNumber:NaN}get weekday(){return this.isValid?Uc(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Wc(this).weekday:NaN}get localWeekNumber(){return this.isValid?Wc(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Wc(this).weekYear:NaN}get ordinal(){return this.isValid?qa(this.c).ordinal:NaN}get monthShort(){return this.isValid?hc.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?hc.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?hc.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?hc.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return!this.isOffsetFixed&&(this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset)}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let t=864e5,e=6e4,i=xs(this.c),o=this.zone.offset(i-t),n=this.zone.offset(i+t),r=this.zone.offset(i-o*e),a=this.zone.offset(i-n*e);if(r===a)return[this];let s=i-r*e,l=i-a*e,c=jc(s,r),d=jc(l,a);return c.hour===d.hour&&c.minute===d.minute&&c.second===d.second&&c.millisecond===d.millisecond?[Yc(this,{ts:s}),Yc(this,{ts:l})]:[this]}get isInLeapYear(){return ks(this.year)}get daysInMonth(){return _s(this.year,this.month)}get daysInYear(){return this.isValid?ws(this.year):NaN}get weeksInWeekYear(){return this.isValid?Ss(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Ss(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){let{locale:e,numberingSystem:i,calendar:o}=Qs.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:e,numberingSystem:i,outputCalendar:o}}toUTC(t=0,e={}){return this.setZone(Ea.instance(t),e)}toLocal(){return this.setZone(Na.defaultZone)}setZone(e,{keepLocalTime:i=!1,keepCalendarTime:o=!1}={}){if((e=Ia(e,Na.defaultZone)).equals(this.zone))return this;if(e.isValid){let t=this.ts;if(i||o){let i=e.offset(this.ts),o=this.toObject();[t]=Zc(o,i,e)}return Yc(this,{ts:t,zone:e})}return t.invalid(Gc(e))}reconfigure({locale:t,numberingSystem:e,outputCalendar:i}={}){return Yc(this,{loc:this.loc.clone({locale:t,numberingSystem:e,outputCalendar:i})})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;let e,i=Os(t,cd),{minDaysInFirstWeek:o,startOfWeek:n}=Za(i,this.loc),r=!es(i.weekYear)||!es(i.weekNumber)||!es(i.weekday),a=!es(i.ordinal),s=!es(i.year),l=!es(i.month)||!es(i.day),c=s||l,d=i.weekYear||i.weekNumber;if((c||a)&&d)throw new fr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new fr("Can't mix ordinal dates with month/day");r?e=Ya({...Wa(this.c,o,n),...i},o,n):es(i.ordinal)?(e={...this.toObject(),...i},es(i.day)&&(e.day=Math.min(_s(e.year,e.month),e.day))):e=ja({...qa(this.c),...i});let[h,u]=Zc(e,this.o,this.zone);return Yc(this,{ts:h,o:u})}plus(t){return this.isValid?Yc(this,Xc(this,sc.fromDurationLike(t))):this}minus(t){return this.isValid?Yc(this,Xc(this,sc.fromDurationLike(t).negate())):this}startOf(t,{useLocaleWeeks:e=!1}={}){if(!this.isValid)return this;let i={},o=sc.normalizeUnit(t);switch(o){case"years":i.month=1;case"quarters":case"months":i.day=1;case"weeks":case"days":i.hour=0;case"hours":i.minute=0;case"minutes":i.second=0;case"seconds":i.millisecond=0}if("weeks"===o)if(e){let t=this.loc.getStartOfWeek(),{weekday:e}=this;e<t&&(i.weekNumber=this.weekNumber-1),i.weekday=t}else i.weekday=1;if("quarters"===o){let t=Math.ceil(this.month/3);i.month=3*(t-1)+1}return this.set(i)}endOf(t,e){return this.isValid?this.plus({[t]:1}).startOf(t,e).minus(1):this}toFormat(t,e={}){return this.isValid?Qs.create(this.loc.redefaultToEN(e)).formatDateTimeFromString(this,t):Kc}toLocaleString(t=Cr,e={}){return this.isValid?Qs.create(this.loc.clone(e),t).formatDateTime(this):Kc}toLocaleParts(t={}){return this.isValid?Qs.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:e=!1,suppressMilliseconds:i=!1,includeOffset:o=!0,extendedZone:n=!1}={}){if(!this.isValid)return null;let r="extended"===t,a=td(this,r);return a+="T",a+=ed(this,r,e,i,o,n),a}toISODate({format:t="extended"}={}){return this.isValid?td(this,"extended"===t):null}toISOWeekDate(){return Qc(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:e=!1,includeOffset:i=!0,includePrefix:o=!1,extendedZone:n=!1,format:r="extended"}={}){return this.isValid?(o?"T":"")+ed(this,"extended"===r,e,t,i,n):null}toRFC2822(){return Qc(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Qc(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?td(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:e=!1,includeOffsetSpace:i=!0}={}){let o="HH:mm:ss.SSS";return(e||t)&&(i&&(o+=" "),e?o+="z":t&&(o+="ZZ")),Qc(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Kc}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};let e={...this.c};return t.includeConfig&&(e.outputCalendar=this.outputCalendar,e.numberingSystem=this.loc.numberingSystem,e.locale=this.loc.locale),e}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,e="milliseconds",i={}){if(!this.isValid||!t.isValid)return sc.invalid("created by diffing an invalid DateTime");let o={locale:this.locale,numberingSystem:this.numberingSystem,...i},n=ls(e).map(sc.normalizeUnit),r=t.valueOf()>this.valueOf(),a=gc(r?this:t,r?t:this,n,o);return r?a.negate():a}diffNow(e="milliseconds",i={}){return this.diff(t.now(),e,i)}until(t){return this.isValid?dc.fromDateTimes(this,t):this}hasSame(t,e,i){if(!this.isValid)return!1;let o=t.valueOf(),n=this.setZone(t.zone,{keepLocalTime:!0});return n.startOf(e,i)<=o&&o<=n.endOf(e,i)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(e={}){if(!this.isValid)return null;let i=e.base||t.fromObject({},{zone:this.zone}),o=e.padding?this<i?-e.padding:e.padding:0,n=["years","months","days","hours","minutes","seconds"],r=e.unit;return Array.isArray(e.unit)&&(n=e.unit,r=void 0),hd(i,this.plus(o),{...e,numeric:"always",units:n,unit:r})}toRelativeCalendar(e={}){return this.isValid?hd(e.base||t.fromObject({},{zone:this.zone}),this,{...e,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...e){if(!e.every(t.isDateTime))throw new yr("min requires all arguments be DateTimes");return cs(e,t=>t.valueOf(),Math.min)}static max(...e){if(!e.every(t.isDateTime))throw new yr("max requires all arguments be DateTimes");return cs(e,t=>t.valueOf(),Math.max)}static fromFormatExplain(t,e,i={}){let{locale:o=null,numberingSystem:n=null}=i;return Pc(Ca.fromOpts({locale:o,numberingSystem:n,defaultToEN:!0}),t,e)}static fromStringExplain(e,i,o={}){return t.fromFormatExplain(e,i,o)}static get DATE_SHORT(){return Cr}static get DATE_MED(){return Sr}static get DATE_MED_WITH_WEEKDAY(){return Er}static get DATE_FULL(){return Tr}static get DATE_HUGE(){return Ir}static get TIME_SIMPLE(){return $r}static get TIME_WITH_SECONDS(){return Or}static get TIME_WITH_SHORT_OFFSET(){return Lr}static get TIME_WITH_LONG_OFFSET(){return Dr}static get TIME_24_SIMPLE(){return Ar}static get TIME_24_WITH_SECONDS(){return Mr}static get TIME_24_WITH_SHORT_OFFSET(){return Br}static get TIME_24_WITH_LONG_OFFSET(){return zr}static get DATETIME_SHORT(){return Nr}static get DATETIME_SHORT_WITH_SECONDS(){return Rr}static get DATETIME_MED(){return Pr}static get DATETIME_MED_WITH_SECONDS(){return Fr}static get DATETIME_MED_WITH_WEEKDAY(){return Vr}static get DATETIME_FULL(){return Kr}static get DATETIME_FULL_WITH_SECONDS(){return Hr}static get DATETIME_HUGE(){return Gr}static get DATETIME_HUGE_WITH_SECONDS(){return Ur}};function gd(t){if(pd.isDateTime(t))return t;if(t&&t.valueOf&&is(t.valueOf()))return pd.fromJSDate(t);if(t&&"object"==typeof t)return pd.fromObject(t);throw new yr(`Unknown datetime argument: ${t}, of type ${typeof t}`)}i(gd,"friendlyDateTime");var md=i(t=>{class e extends t{constructor(){super(...arguments),this.eventBus=new ge,this.label=null,this.labelledBy=null,this.disabled=!1,this.error=!1,this.readonly=!1,this.hintId="",this.errorId=""}static{i(this,"Mixin")}connectedCallback(){super.connectedCallback(),this.checkAndSetImplicitSlot()}updated(t){super.updated(t),t.has("error")&&this.eventBus.emit("error",this.error),t.has("disabled")&&this.eventBus.emit("disabled",this.disabled),t.has("readonly")&&this.eventBus.emit("readonly",this.readonly)}checkAndSetImplicitSlot(){this.closest("ktg-field")&&(this.slot="input")}onLabelClick(){this.focus()}on(t,e,i){return this.eventBus.on(t,e,i)}off(t,e){this.eventBus.off(t,e)}}return o([kt({type:String})],e.prototype,"label",2),o([kt({type:String,attribute:!1})],e.prototype,"labelledBy",2),o([kt({type:Boolean,reflect:!0})],e.prototype,"disabled",2),o([kt({type:Boolean,reflect:!0})],e.prototype,"error",2),o([kt({type:Boolean,reflect:!0})],e.prototype,"readonly",2),o([kt({type:String,attribute:"hint-id"})],e.prototype,"hintId",2),o([kt({type:String,attribute:"error-id"})],e.prototype,"errorId",2),e},"KTGFieldInputMixin"),vd="ktg-datepicker-lang-context",fd=class extends Event{constructor(t,e,i){super("select-date",t),this.isoDate=e,this.date=i}static{i(this,"KTGDatepickerSelectDateEvent")}};function*bd(t,e){if(void 0!==t){let i=0;for(let o of t)yield e(o,i++)}}i(bd,"o");var yd=class{constructor(){this.allDays=[],this.rows=[]}static{i(this,"KTGDatepickerCalendarGridFactory")}createGrid(t){return this.activeDate=t,this.getDaysInMonth(),this.getRestDaysOfPreviousMonth(),this.getRestDaysOfNextMonth(),this.buildRows(),this.rows}getDaysInMonth(){this.allDays=[];for(let t=1;t<=(this.activeDate.daysInMonth||0);t++)this.allDays.push(this.activeDate.set({day:t}))}getRestDaysOfPreviousMonth(){let t=this.allDays[0].weekday-1,e=this.activeDate.set({month:this.activeDate.month-1});if(e.daysInMonth)for(let i=0;i<=t-1;i++)this.allDays.unshift(e.set({day:e.daysInMonth-i}))}getRestDaysOfNextMonth(){let t=7-this.allDays[this.allDays.length-1].weekday,e=this.activeDate.set({month:this.activeDate.month+1});if(e.daysInMonth)for(let i=0;i<=t-1;i++)this.allDays.push(e.set({day:1+i}))}buildRows(){let t=[],e=Math.ceil(this.allDays.length/7);for(let i=0;i<e;i++)t.push(this.allDays.slice(7*i,7*i+7));this.rows=t}},kd=class extends Event{constructor(t,e){super("select-date",t),this.day=e}static{i(this,"KTGDatepickerCalendarSelectDateEvent")}},wd=class extends Event{constructor(t,e){super("active-date-change",t),this.day=e}static{i(this,"KTGDatepickerCalendarActiveDateChangeEvent")}},_d=[...ae,d`
    :host {
      display: inline-block;
    }

    .datepicker-calendar {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      gap: 1rem;
    }

    .datepicker-calendar__dates {
      table-layout: fixed;
      border-collapse: collapse;
    }
  `],xd=[...ae,d`
    :host {
      position: relative;
      display: table-cell;
      height: 2.5rem;
      width: 2.5rem;
      cursor: pointer;
      outline: 0;
      touch-action: manipulation;
    }

    :host([disabled]) {
      cursor: default;
    }

    .datepicker-day {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      z-index: 1;
      color: var(--ktg-color-text);
    }

    :host([today]) .datepicker-day {
      background-color: var(--ktg-color-neutral-01);
      color: var(--ktg-color-brand1-01);
    }

    :host(:hover) .datepicker-day {
      color: var(--ktg-color-text);
    }

    :host([disabled]) .datepicker-day {
      color: var(--ktg-color-neutral-04);
    }

    :host(:not([disabled])[active]) .datepicker-day:after {
      opacity: 1;
    }

    .datepicker-day__background {
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: var(--ktg-color-brand2-01);
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }

    :host(:not([disabled]):hover) .datepicker-day__background {
      opacity: 1;
    }

    :host(:not([disabled])[selected]) .datepicker-day__background {
      background-color: var(--ktg-color-brand2-01);
      opacity: 1;
    }

    .datepicker-day__focus-outline {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    :host(:focus-visible) .datepicker-day__focus-outline {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: -0.125rem;
    }

    .datepicker-day__date {
      font-size: 0.875rem;
      line-height: 1.125rem;
      z-index: 1;
    }

    .datepicker-day__today {
      display: none;
      position: absolute;
      bottom: 0.375rem;
      left: 1.125rem;
      height: 0.25rem;
      width: 0.25rem;
      background-color: var(--ktg-color-text);
    }

    :host([today]) .datepicker-day__today {
      display: block;
      background-color: var(--ktg-color-brand1-01);
    }

    :host(:not([disabled]):hover) .datepicker-day__today {
      background-color: var(--ktg-color-text);
    }

    :host([disabled]) .datepicker-day__today {
      background-color: var(--ktg-color-neutral-04);
    }
  `],Cd=class extends mt{constructor(){super(...arguments),this.today=!1,this.disabled=!1,this.selected=!1,this.active=!1,this.selectDay=()=>{this.dispatchEvent(new kd({bubbles:!0,cancelable:!1,composed:!0},this.day))},this.onKeydown=t=>{switch(t.code){case"Enter":case"Space":t.preventDefault(),this.selectDay()}}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.selectDay),this.addEventListener("keydown",this.onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.selectDay),this.removeEventListener("keydown",this.onKeydown)}firstUpdated(t){super.firstUpdated(t)}updated(t){super.updated(t),t.has("selected")&&(this.ariaSelected=this.selected.toString()),t.has("active")&&(this.active?this.tabIndex=0:this.tabIndex=-1)}render(){return j`
      <div class="datepicker-day">
        <div class="datepicker-day__background"></div>
        <div class="datepicker-day__focus-outline"></div>
        <div class="datepicker-day__today"></div>
        <span class="datepicker-day__date">
          <slot></slot>
        </span>
      </div>
    `}};i(Cd,"KTGDatepickerDayElement"),Cd.styles=xd,o([kt({type:Boolean,reflect:!0})],Cd.prototype,"today",2),o([kt({type:Boolean,reflect:!0})],Cd.prototype,"disabled",2),o([kt({type:Boolean,reflect:!0})],Cd.prototype,"selected",2),o([kt({type:Boolean,reflect:!0})],Cd.prototype,"active",2),o([kt({type:Object,attribute:!1})],Cd.prototype,"day",2),Cd=o([ft("ktg-datepicker-day")],Cd);var Sd=class extends mt{constructor(){super(...arguments),this.gridFactory=new yd,this.rows=[],this.labelId="",this.label="",this.previousMonthLabel="",this.nextMonthLabel="",this.onKeydown=t=>{switch(t.code){case"ArrowUp":t.preventDefault(),this.activeDate=this.activeDate.set({weekNumber:this.activeDate.weekNumber-1}),this.activeDateChange();break;case"ArrowDown":t.preventDefault(),this.activeDate=this.activeDate.set({weekNumber:this.activeDate.weekNumber+1}),this.activeDateChange();break;case"ArrowLeft":t.preventDefault(),this.activeDate=this.activeDate.set({day:this.activeDate.day-1}),this.activeDateChange();break;case"ArrowRight":t.preventDefault(),this.activeDate=this.activeDate.set({day:this.activeDate.day+1}),this.activeDateChange();break;case"Home":t.preventDefault(),1!==this.activeDate.day?this.activeDate=this.activeDate.set({day:1}):this.activeDate=this.activeDate.set({month:this.activeDate.month-1}),this.activeDateChange();break;case"End":t.preventDefault(),this.activeDate.day!==this.activeDate.daysInMonth?this.activeDate=this.activeDate.set({day:this.activeDate.daysInMonth}):this.activeDate=this.activeDate.set({day:this.activeDate.set({month:this.activeDate.month+1}).daysInMonth,month:this.activeDate.month+1}),this.activeDateChange();break;case"PageUp":t.preventDefault(),t.shiftKey?this.activeDate=this.activeDate.set({year:this.activeDate.year-1}):this.activeDate=this.activeDate.set({month:this.activeDate.month-1}),this.activeDateChange();break;case"PageDown":t.preventDefault(),t.shiftKey?this.activeDate=this.activeDate.set({year:this.activeDate.year+1}):this.activeDate=this.activeDate.set({month:this.activeDate.month+1}),this.activeDateChange()}}}get activeDateElement(){return this._activeDateElement}get selectedDateElement(){return this._selectedDateElement}connectedCallback(){super.connectedCallback(),this.setAttribute("role","dialog"),this.setAttribute("aria-modal","true"),this.addEventListener("keydown",this.onKeydown)}firstUpdated(t){super.firstUpdated(t),this.activeDate||(this.activeDate=this.selectedDay)}willUpdate(t){super.willUpdate(t),(t.has("label")||t.has("labelId"))&&(this.label?(this.removeAttribute("aria-labelledby"),this.setAttribute("aria-label",this.label)):(this.removeAttribute("aria-label"),this.setAttribute("aria-labelledby",this.labelId)));let e=t.get("activeDate")??null;if(t.has("activeDate")){let t=e?.month!==this.activeDate.month,i=e?.year!==this.activeDate.year;(t||i)&&(this.rows=this.gridFactory.createGrid(this.activeDate))}}updated(t){if(super.updated(t),t.has("activeDate"))for(let t of this.dayElements)t.active&&(this._activeDateElement=t);if(t.has("selectedDay"))for(let t of this.dayElements)t.selected&&(t.active=!0,this.activeDate=this.selectedDay)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydown)}focus(){this.focusDay()}activeDateChange(){this.dispatchEvent(new wd({bubbles:!0,cancelable:!1,composed:!0},this.activeDate)),this.focusDay()}async focusDay(){await Ie(),this._activeDateElement.focus()}render(){return j`
      <div class="datepicker-calendar">
        <ktg-datepicker-month-selector
          previous-month-label=${this.previousMonthLabel}
          next-month-label=${this.nextMonthLabel}
          .activeDate=${this.activeDate}
        ></ktg-datepicker-month-selector>

        <table
          class="datepicker-calendar__dates"
          role="grid"
        >
          ${bd(this.rows,t=>j`
              <tr>
                ${bd(t,t=>{let e=t.month===this.activeDate.month,i=t.hasSame(this.today,"day"),o=t.hasSame(this.activeDate,"day"),n=t.hasSame(this.selectedDay,"day");return j`
                    <ktg-datepicker-day
                      ?disabled=${!e}
                      role="gridcell"
                      .day=${t}
                      ?today=${i}
                      ?active=${o}
                      ?selected=${n}
                    >
                      ${t.day}
                    </ktg-datepicker-day>
                  `})}
              </tr>
            `)}
        </table>
      </div>
    `}};i(Sd,"KTGDatepickerCalendarElement"),Sd.styles=_d,o([wt()],Sd.prototype,"rows",2),o([kt({type:Object,attribute:!1})],Sd.prototype,"today",2),o([kt({type:Object,attribute:!1})],Sd.prototype,"activeDate",2),o([kt({type:Object,attribute:!1})],Sd.prototype,"selectedDay",2),o([kt({type:String,attribute:!1})],Sd.prototype,"labelId",2),o([kt({type:String,attribute:!1})],Sd.prototype,"label",2),o([kt({type:String,attribute:!1})],Sd.prototype,"previousMonthLabel",2),o([kt({type:String,attribute:!1})],Sd.prototype,"nextMonthLabel",2),o([Ct("ktg-datepicker-month-selector")],Sd.prototype,"monthSelectorElement",2),o([St("ktg-datepicker-day")],Sd.prototype,"dayElements",2),Sd=o([ft("ktg-datepicker-calendar")],Sd);var Ed=class extends Event{static{i(this,"KTGDatepickerMonthSelectorNextMonthEvent")}constructor(t){super("go-to-next-month",t)}},Td=class extends Event{static{i(this,"KTGDatepickerMonthSelectorPreviousMonthEvent")}constructor(t){super("go-to-previous-month",t)}},Id=[...ae,d`
    :host {
      width: 100%;
    }

    .datepicker-month-selector {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1.125rem;
      width: 100%;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    .datepicker-month-selector__arrow {
      touch-action: manipulation;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--ktg-color-link);
      cursor: pointer;
      background-color: transparent;
      border: none;
      outline: none;
    }

    .datepicker-month-selector__arrow:before {
      content: '';
      position: absolute;
      height: 2.5rem;
      width: 2.5rem;
    }

    .datepicker-month-selector__arrow:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
    }

    .datepicker-month-selector__arrow-icon {
    }

    .datepicker-month-selector__label {
      display: flex;
      gap: 0.5rem;
      font-weight: var(--ktg-font-weight-default);
      font-size: 1rem;
      color: var(--ktg-color-text);
    }
  `],$d=class extends mt{constructor(){super(...arguments),this.activeDate=pd.now(),this.lang=document.documentElement.lang,this.previousMonthLabel="",this.nextMonthLabel=""}async onNextMonthClick(){this.dispatchEvent(new Ed({bubbles:!0,cancelable:!1,composed:!0})),await Ie(),this.nextMonthButton.focus()}async onPreviousMonthClick(){this.dispatchEvent(new Td({bubbles:!0,cancelable:!1,composed:!0})),await Ie(),this.previousMonthButton.focus()}render(){return j`
      <div class="datepicker-month-selector">
        <button
          id="previous-button"
          class="datepicker-month-selector__arrow"
          type="button"
          title=${this.previousMonthLabel}
          aria-label=${this.previousMonthLabel}
          @click=${this.onPreviousMonthClick}
        >
          <ktg-icon
            class="datepicker-month-selector__arrow-icon"
            name="arrow-left"
          ></ktg-icon>
        </button>

        <h2
          class="datepicker-month-selector__label"
          aria-live="polite"
        >
          <div class="datepicker-month-selector__month">${this.monthName}</div>

          <div class="datepicker-month-selector__year">
            ${this.activeDate?.year}
          </div>
        </h2>

        <button
          id="next-button"
          class="datepicker-month-selector__arrow"
          type="button"
          title=${this.nextMonthLabel}
          aria-label=${this.nextMonthLabel}
          @click=${this.onNextMonthClick}
        >
          <ktg-icon
            class="datepicker-month-selector__arrow"
            name="arrow-right"
          ></ktg-icon>
        </button>
      </div>
    `}get monthName(){let t=2===this.lang.length?this.lang:document.documentElement.lang||"en";return this.activeDate?.setLocale(t).monthLong||""}};i($d,"KTGDatepickerMonthSelectorElement"),$d.styles=Id,o([wt()],$d.prototype,"activeDate",2),o([kt({type:String}),Ee({context:vd,subscribe:!0})],$d.prototype,"lang",2),o([kt({type:String,attribute:"previous-month-label"})],$d.prototype,"previousMonthLabel",2),o([kt({type:String,attribute:"next-month-label"})],$d.prototype,"nextMonthLabel",2),o([Ct("#next-button")],$d.prototype,"nextMonthButton",2),o([Ct("#previous-button")],$d.prototype,"previousMonthButton",2),$d=o([ft("ktg-datepicker-month-selector")],$d),re([d`
    ktg-datepicker {
      display: block;
      height: fit-content;
      width: fit-content;
      background-color: var(--ktg-color-background-01);
      user-select: none;
    }
  `]);var Od="yyyy-MM-dd",Ld=class extends mt{constructor(){super(...arguments),this.selectedDate=pd.now(),this.today=pd.now(),this.activeDate=pd.now(),this.lang=document.documentElement.lang,this.label="",this.labelId="",this.previousMonthLabel="",this.nextMonthLabel="",this.value=pd.now().toFormat(Od)||"",this.autofocus=!1}createRenderRoot(){return this}willUpdate(t){if(super.willUpdate(t),t.has("value")){let t=pd.fromISO(this.value);t.isValid&&(this.selectedDate=t),this.activeDate=this.selectedDate}this.activeDate.isValid||(this.activeDate=pd.now())}firstUpdated(t){super.firstUpdated(t),this.autofocus&&this.focus()}focus(){this.calendar.focus()}nextMonth(t){t.stopPropagation(),this.activeDate=this.activeDate.set({month:this.activeDate.month+1})}previousMonth(t){t.stopPropagation(),this.activeDate=this.activeDate.set({month:this.activeDate.month-1})}onSelectDate(t){t.stopPropagation(),this.selectedDate=t.day,this.activeDate=t.day;let e=this.selectedDate.toFormat(Od);if(!e)throw new Error("Couldn't convert to ISO date.");this.dispatchEvent(new fd({bubbles:!0,cancelable:!1},e,this.selectedDate.toJSDate()))}activeDateChange(t){t.stopPropagation(),this.activeDate=t.day}render(){return j`
      <ktg-datepicker-calendar
        .today=${this.today}
        .activeDate=${this.activeDate}
        .selectedDay=${this.selectedDate}
        .labelId=${this.labelId}
        .label=${this.label}
        .previousMonthLabel=${this.previousMonthLabel}
        .nextMonthLabel=${this.nextMonthLabel}
        @go-to-next-month=${this.nextMonth}
        @go-to-previous-month=${this.previousMonth}
        @select-date=${this.onSelectDate}
        @active-date-change=${this.activeDateChange}
      ></ktg-datepicker-calendar>
    `}};i(Ld,"KTGDatepickerElement"),o([wt()],Ld.prototype,"selectedDate",2),o([wt()],Ld.prototype,"today",2),o([wt()],Ld.prototype,"activeDate",2),o([kt({type:String}),Se({context:vd})],Ld.prototype,"lang",2),o([kt({type:String})],Ld.prototype,"label",2),o([kt({type:String,attribute:"label-id"})],Ld.prototype,"labelId",2),o([kt({type:String,attribute:"previous-month-label"})],Ld.prototype,"previousMonthLabel",2),o([kt({type:String,attribute:"next-month-label"})],Ld.prototype,"nextMonthLabel",2),o([kt({type:String})],Ld.prototype,"value",2),o([kt({type:Boolean,reflect:!0})],Ld.prototype,"autofocus",2),o([Ct("ktg-datepicker-calendar")],Ld.prototype,"calendar",2),Ld=o([ft("ktg-datepicker")],Ld);var Dd=class extends FocusEvent{static{i(this,"KTGDateInputFocusEvent")}constructor(t){super("focus",t)}},Ad=class extends Event{constructor(t,e,i){super("input",t),this.isoDate=e,this.date=i}static{i(this,"KTGDateInputInputEvent")}},Md=class extends Event{constructor(t,e,i){super("change",t),this.isoDate=e,this.date=i}static{i(this,"KTGDateInputChangeEvent")}},Bd=class extends FocusEvent{static{i(this,"KTGDateInputBlurEvent")}constructor(t){super("blur",t)}},zd=class extends(md(mt)){constructor(){super(...arguments),this.form=null,this.describedby="",this.inputFocused=!1,this.inputId="",this.appearance="white",this.placeholder="",this.value="",this.name="",this.required=!1,this.autofocus=!1,this.leadingIcon="",this.trailingIcon="",this.trailingIconButton=!1,this.trailingIconLabel="",this.onFormReset=()=>{this.value=""}}static{i(this,"KTGCdkTextInputElement")}get input(){return this._input}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.form=this.closest("form"),this.form&&this.form.addEventListener("reset",this.onFormReset)}willUpdate(t){super.willUpdate(t),t.has("error")&&this.updateDescribedBy()}disconnectedCallback(){super.disconnectedCallback(),this.form&&this.form.removeEventListener("reset",this.onFormReset)}renderLeadingIcon(){return this.leadingIcon?j`
        <div class="ktg-cdk-text-input__leading-icon">
          <ktg-icon name=${this.leadingIcon}></ktg-icon>
        </div>
      `:j``}renderTrailingIcon(){return this.trailingIcon?this.trailingIconButton?j`
          <button
            type="button"
            class="ktg-cdk-text-input__trailing-icon"
            @click=${this.onTrailingIconButtonClick}
            ?disabled=${this.disabled}
            aria-label=${this.trailingIconLabel}
            title=${this.trailingIconLabel}
          >
            <ktg-icon name=${this.trailingIcon}></ktg-icon>
          </button>
        `:j`
          <span class="ktg-cdk-text-input__trailing-icon">
            <ktg-icon name=${this.trailingIcon}></ktg-icon>
          </span>
        `:j``}focus(t){this._input.focus(t)}updateDescribedBy(){this.error?this.describedby=this.errorId:this.describedby=this.hintId}onInput(t){this.updateValueFromInput()}onChange(t){this.updateValueFromInput()}updateValueFromInput(){this.value=this.input.value}onFocus(t){t.stopImmediatePropagation(),this.inputFocused=!0,this.dispatchFocusEvent()}onBlur(t){t.stopImmediatePropagation(),this.inputFocused=!1,this.dispatchBlurEvent()}onTrailingIconButtonClick(t){t.stopImmediatePropagation(),t.stopPropagation(),this.dispatchButtonClickEvent()}};o([wt()],zd.prototype,"describedby",2),o([wt()],zd.prototype,"inputFocused",2),o([kt({type:String,reflect:!0,attribute:"input-id"})],zd.prototype,"inputId",2),o([kt({type:String,reflect:!0})],zd.prototype,"appearance",2),o([kt({type:String})],zd.prototype,"placeholder",2),o([kt({type:String})],zd.prototype,"value",2),o([kt({type:String})],zd.prototype,"name",2),o([kt({type:Boolean,reflect:!0})],zd.prototype,"required",2),o([kt({type:Boolean,reflect:!0})],zd.prototype,"autofocus",2),o([kt({type:String,attribute:"leading-icon"})],zd.prototype,"leadingIcon",2),o([kt({type:String,attribute:"trailing-icon"})],zd.prototype,"trailingIcon",2),o([kt({type:Boolean,attribute:"trailing-icon-button"})],zd.prototype,"trailingIconButton",2),o([kt({type:String,attribute:"trailing-icon-label"})],zd.prototype,"trailingIconLabel",2),o([Ct("input")],zd.prototype,"_input",2);var Nd={ButtonClick:"button-click",Focus:"focus",Blur:"blur"},Rd=class extends CustomEvent{static{i(this,"KTGCdkTextInputButtonClickEvent")}constructor(t){super(Nd.ButtonClick,t)}},Pd=class extends CustomEvent{static{i(this,"KTGCdkTextInputFocusEvent")}constructor(t){super(Nd.Focus,t)}},Fd=class extends CustomEvent{static{i(this,"KTGCdkTextInputBlurEvent")}constructor(t){super(Nd.Blur,t)}};function Vd(t){let e=c(t);return d`
    /* Host */
    /* ---------------------------------------------------------------------  */
    ${e} {
      display: inline-block;
      --ktg-cdk-text-input-color: var(--ktg-color-text);
      --ktg-cdk-text-input-leading-icon-color: var(--ktg-color-text);
      --ktg-cdk-text-input-trailing-icon-color: var(--ktg-color-link);
    }

    ${e}[error] {
      --ktg-cdk-text-input-color: var(--ktg-color-danger);
    }

    ${e}[disabled] {
      --ktg-cdk-text-input-color: var(--ktg-color-neutral-04);
      --ktg-cdk-text-input-leading-icon-color: var(--ktg-color-neutral-04);
      --ktg-cdk-text-input-trailing-icon-color: var(--ktg-color-neutral-04);
    }

    /* Wrapper */
    /* ---------------------------------------------------------------------  */
    ${e} .ktg-cdk-text-input {
      position: relative;
      display: flex;
      align-items: center;
      cursor: text;
    }

    ${e}[appearance='white'] .ktg-cdk-text-input {
      background-color: var(--ktg-color-background-01);
    }

    ${e}[appearance='grey'] .ktg-cdk-text-input {
      background-color: var(--ktg-color-neutral-01);
    }

    ${e}[disabled] .ktg-cdk-text-input {
      background-color: var(--ktg-color-neutral-02);
      color: var(--ktg-cdk-text-input-color);
    }

    ${e}[readonly] .ktg-cdk-text-input {
      background-color: var(--ktg-color-neutral-02);
    }

    /* Border */
    /* ---------------------------------------------------------------------  */
    ${e} .ktg-cdk-text-input__border {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-bottom: 0.0625rem solid var(--ktg-color-brand1-01);
      pointer-events: none;
    }

    ${e} .ktg-cdk-text-input--focused:not(.ktg-cdk-text-input--hide-visual-focus)
      .ktg-cdk-text-input__border {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: -0.125rem;
      border: 0;
    }

    ${e}[error] .ktg-cdk-text-input__border {
      border: 0.0625rem solid var(--ktg-color-danger);
    }

    ${e}[error] .ktg-cdk-text-input--focused .ktg-cdk-text-input__border {
      outline: 0.125rem solid var(--ktg-color-danger);
      border: 0;
    }

    ${e}[disabled] .ktg-cdk-text-input__border,
    ${e}[readonly] .ktg-cdk-text-input__border {
      border: none;
    }

    /* Input */
    /* ---------------------------------------------------------------------  */
    ${e} .ktg-cdk-text-input__input {
      width: 100%;
      border: none;
      background-color: transparent;
      font-style: normal;
      font-family: var(--ktg-font-sans-serif);
      font-weight: var(--ktg-font-weight-default);
      font-size: 1rem;
      line-height: 1.125rem;
      outline: none;
      padding-top: 0.6875rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 0.6875rem;
      color: var(--ktg-cdk-text-input-color);
    }

    ${e} .ktg-cdk-text-input__input:-webkit-autofill,
    ${e} .ktg-cdk-text-input__input:-webkit-autofill:hover,
    ${e} .ktg-cdk-text-input__input:-webkit-autofill:focus {
      color: var(--ktg-color-text);
      -webkit-text-fill-color: var(--ktg-color-text);
      -webkit-box-shadow: 0 0 0 10rem var(--ktg-color-brand2-01) inset;
    }

    ${e} .ktg-cdk-text-input__input:-webkit-autofill::selection {
      color: var(--ktg-color-dark-contrast);
      -webkit-text-fill-color: var(--ktg-color-dark-contrast);
    }

    ${e} .ktg-cdk-text-input--has-leading-icon .ktg-cdk-text-input__input {
      padding-left: 2rem;
    }

    ${e} .ktg-cdk-text-input--has-trailing-icon .ktg-cdk-text-input__input {
      padding-right: 2.125rem;
    }

    ${e} .ktg-cdk-text-input__input::placeholder {
      /* opacity for Firefox */
      opacity: 1;
      color: var(--ktg-color-neutral-04);
      user-select: none;
    }

    /* Hide arrow on input type=number / Chrome, Safari, Edge, Opera */
    ${e} .ktg-cdk-text-input__input::-webkit-outer-spin-button,
    ${e} .ktg-cdk-text-input__input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    ${e} .ktg-cdk-text-input__input[type='search']::-webkit-search-decoration,
    ${e} .ktg-cdk-text-input__input[type='search']::-webkit-search-cancel-button,
    ${e} .ktg-cdk-text-input__input[type='search']::-webkit-search-results-button,
    ${e} .ktg-cdk-text-input__input[type='search']::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    /* Firefox */
    ${e} .ktg-cdk-text-input__input[type='number'] {
      -moz-appearance: textfield;
    }

    @media screen and (min-width: ${Ke}px) {
      ${e} .ktg-cdk-text-input__input {
        padding-left: 1rem;
        padding-right: 1.125rem;
      }

      ${e} .ktg-cdk-text-input--has-leading-icon .ktg-cdk-text-input__input {
        padding-left: 2.5rem;
      }

      ${e} .ktg-cdk-text-input--has-trailing-icon .ktg-cdk-text-input__input {
        padding-right: 2.625rem;
      }
    }

    /* Leading icon */
    /* ---------------------------------------------------------------------  */
    ${e} .ktg-cdk-text-input__leading-icon {
      display: none;
      position: absolute;
      left: 0.5rem;
      top: 0.75rem;
      color: var(--ktg-cdk-text-input-leading-icon-color);
      pointer-events: none;
    }

    ${e} .ktg-cdk-text-input--has-leading-icon .ktg-cdk-text-input__leading-icon {
      display: block;
    }

    @media screen and (min-width: ${Ke}px) {
      ${e} .ktg-cdk-text-input__leading-icon {
        left: 1rem;
      }
    }

    /* Trailing button */
    /* ---------------------------------------------------------------------  */
    ${e} .ktg-cdk-text-input__trailing-icon {
      position: absolute;
      display: flex;
      top: 0.5rem;
      right: 0.25rem;
      color: var(--ktg-cdk-text-input-trailing-icon-color);
      border: none;
      background-color: transparent;
      padding-top: 0.25rem;
      padding-left: 0.25rem;
      padding-right: 0.25rem;
      padding-bottom: 0.25rem;
    }

    ${e} button.ktg-cdk-text-input__trailing-icon {
      cursor: pointer;
      touch-action: manipulation;
    }

    ${e} .ktg-cdk-text-input__trailing-icon:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: 0.125rem;
    }

    ${e}[disabled] .ktg-cdk-text-input__trailing-icon {
      cursor: default;
    }

    @media screen and (min-width: ${Ke}px) {
      ${e} .ktg-cdk-text-input__trailing-icon {
        right: 0.75rem;
      }
    }
  `}i(Vd,"ktgCdkTextInputStyles");var Kd=class extends Rd{static{i(this,"KTGTextInputButtonClickEvent")}},Hd=class extends Pd{static{i(this,"KTGTextInputFocusEvent")}},Gd=class extends Fd{static{i(this,"KTGTextInputBlurEvent")}},Ud=[Vd("ktg-text-input")];re(Ud);var Wd=class extends zd{constructor(){super(...arguments),this.type="text",this.minLength=null,this.maxLength=null,this.autocomplete=null,this.hideVisualFocus=!1,this.ariaAutoComplete=null,this.ariaActiveDescendant=null,this.ariaControls=null}willUpdate(t){if(super.willUpdate(t),t.has("type"))switch(this.type){case"number":console.warn('KTGTextInput: instead of type="number", use the dedicated <ktg-number-input> element.');break;case"tel":console.warn('KTGTextInput: instead of type="tel", use the dedicated <ktg-phone-input> element.')}}render(){return j`
      <div
        class=${ai({"ktg-text-input":!0,"ktg-cdk-text-input":!0,"ktg-cdk-text-input--focused":this.inputFocused,"ktg-cdk-text-input--has-leading-icon":this.leadingIcon,"ktg-cdk-text-input--has-trailing-icon":this.trailingIcon,"ktg-cdk-text-input--hide-visual-focus":this.hideVisualFocus})}
      >
        <div class="ktg-cdk-text-input__border"></div>

        ${this.renderLeadingIcon()}

        <input
          id=${this.inputId}
          class="ktg-cdk-text-input__input"
          type=${this.type}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          name=${this.name}
          .value=${this.value}
          ?required=${this.required}
          ?autofocus=${this.autofocus}
          minlength=${fi(this.minLength)}
          maxlength=${fi(this.maxLength)}
          autocomplete=${fi(this.autocomplete)}
          title=${fi(this.label)}
          aria-describedby=${this.describedby}
          aria-label=${fi(this.label)}
          aria-labelledby=${fi(this.labelledBy)}
          aria-invalid=${this.error}
          aria-autocomplete=${fi(this.ariaAutoComplete)}
          aria-activedescendant=${fi(this.ariaActiveDescendant)}
          aria-controls=${fi(this.ariaControls)}
          ?readonly=${this.readonly}
          @focus=${this.onFocus}
          @input=${this.onInput}
          @change=${this.onChange}
          @blur=${this.onBlur}
        />

        ${this.renderTrailingIcon()}
      </div>
    `}dispatchFocusEvent(){this.dispatchEvent(new Hd({bubbles:!1,cancelable:!1}))}dispatchBlurEvent(){this.dispatchEvent(new Gd({bubbles:!1,cancelable:!1}))}dispatchButtonClickEvent(){this.dispatchEvent(new Kd({bubbles:!0,cancelable:!1,composed:!0}))}checkAndSetImplicitSlot(){this.closest("ktg-header")&&(this.slot="search"),super.checkAndSetImplicitSlot()}};i(Wd,"KTGTextInputElement"),o([kt({type:String,reflect:!0})],Wd.prototype,"type",2),o([kt({type:Number,attribute:"minlength"})],Wd.prototype,"minLength",2),o([kt({type:Number,attribute:"maxlength"})],Wd.prototype,"maxLength",2),o([kt({type:String})],Wd.prototype,"autocomplete",2),o([kt({type:Boolean,attribute:!1})],Wd.prototype,"hideVisualFocus",2),o([kt({type:String,attribute:!1})],Wd.prototype,"ariaAutoComplete",2),o([kt({type:String,attribute:!1})],Wd.prototype,"ariaActiveDescendant",2),o([kt({type:String,attribute:!1})],Wd.prototype,"ariaControls",2),Wd=o([ft("ktg-text-input")],Wd);var Yd=class extends mt{constructor(){super(...arguments),this.focusTrap=Kn(this,{allowOutsideClick:!0,initialFocus:!1,tabbableOptions:{getShadowRoot:!0},escapeDeactivates:!1}),this.value="",this.lang=document.documentElement.lang,this.labelId=null,this.previousMonthLabel="",this.nextMonthLabel="",this.onKeydown=t=>{"Escape"===t.code&&(t.preventDefault(),this.close())}}createRenderRoot(){return this}firstUpdated(t){super.firstUpdated(t),this.addEventListener("keydown",this.onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydown)}setOverlay(t){this.overlay=t}async afterAttach(){this.focusTrap.activate(),this.datepicker.focus()}async beforeDetach(){this.focusTrap.deactivate()}close(){this.overlay.handle.close()}onSelectDate(t){this.overlay.handle.setResult({isoDate:t.isoDate,date:t.date}),this.close()}render(){return j`
      <ktg-datepicker
        .lang=${this.lang}
        .value=${this.value}
        previous-month-label=${this.previousMonthLabel}
        next-month-label=${this.nextMonthLabel}
        label-id=${fi(this.labelId)}
        @select-date=${this.onSelectDate}
      ></ktg-datepicker>
    `}};i(Yd,"KTGDateInputOverlayElement"),o([kt({type:String,attribute:!1})],Yd.prototype,"value",2),o([kt({type:String,attribute:!1})],Yd.prototype,"lang",2),o([kt({type:String,attribute:!1})],Yd.prototype,"labelId",2),o([kt({type:String,attribute:!1})],Yd.prototype,"previousMonthLabel",2),o([kt({type:String,attribute:!1})],Yd.prototype,"nextMonthLabel",2),o([Ct("ktg-datepicker")],Yd.prototype,"datepicker",2),Yd=o([ft("ktg-date-input-overlay")],Yd),re([d`
    ktg-date-input {
      height: 100%;
      display: block;
      width: fit-content;
    }

    .ktg-date-input__text-input {
      width: 100%;
    }

    ktg-date-input-overlay {
      display: block;
      box-shadow: 0 0.1rem 0.5rem rgba(var(--ktg-rgb-shadow), 0.1);
      width: fit-content;
    }
  `]);var qd=class extends(md(mt)){constructor(){super(...arguments),this.hasFocus=!1,this.currentDate=null,this.handle=null,this.lang=document.documentElement.lang,this.outlet=null,this.placeholder="01.01.2001",this.inputId="",this.appearance="white",this._value="",this.required=!1,this.emptyButtonLabel="",this.filledButtonLabel="",this.name="",this.previousMonthLabel="",this.nextMonthLabel="",this.autofocus=!1,this.overlay=null}set value(t){if(this._value=t,this._value){let t=pd.fromISO(this.value);t.isValid&&(this.currentDate=t)}else this.currentDate=null;this.requestUpdate("value")}get value(){return this._value}createRenderRoot(){return this}update(t){super.update(t),t.has("lang")&&this.overlay&&(this.overlay.lang=this.lang)}updated(t){super.updated(t),t.has("value")&&(this.input.value=this.formattedDate)}disconnectedCallback(){super.disconnectedCallback(),this.handle?.close()}focus(t){this.input.focus(t)}openOverlay(t=null){if(!this.disabled&&!this.readonly)if(t?.preventDefault(),null!==this.handle)this.closeOverlay();else{this.overlay=document.createElement("ktg-date-input-overlay"),this.overlay.value=this.value,this.overlay.lang=this.lang,this.overlay.labelId=this.input.labelledBy,this.overlay.previousMonthLabel=this.previousMonthLabel,this.overlay.nextMonthLabel=this.nextMonthLabel;let t=this.outlet??Me.OUTLETS.DEFAULT;this.handle=this.overlayService.open({element:this.overlay,outlet:t,backdrop:{enabled:!0,transparent:!0},positioning:t=>new Fe(t).withOrigin(this).forceOntoScreen().viewportMarginX(16).viewportMarginY(16).positions([{originX:"right",originY:"bottom",overlayX:"right",overlayY:"top"},{originX:"right",originY:"top",overlayX:"right",overlayY:"bottom"}])}),this.handle.on("close",t=>{t&&(this.currentDate=pd.fromJSDate(t.date),this.value=t.isoDate,this.dispatchInputEvent(),this.dispatchChangeEvent()),this.handle=null})}}closeOverlay(){this.handle?.close()}onButtonClick(t){this.openOverlay(t)}onFocus(){this.hasFocus=!0,this.dispatchEvent(new Dd({bubbles:!1,cancelable:!1}))}onInput(t){t.stopPropagation(),this.hasFocus=!0,this.dispatchInputEvent()}onChange(t){t.stopPropagation(),this.value=this.onTextInputChange(),this.dispatchChangeEvent()}onBlur(){this.hasFocus=!1,this.dispatchEvent(new Bd({bubbles:!1,cancelable:!1}))}onKeydown(t){if(this.hasFocus){let e=this.value;"Enter"===t.code&&(this.value=this.onTextInputChange(),e!==this.value&&this.dispatchChangeEvent())}}dispatchInputEvent(){this.dispatchEvent(new Ad({cancelable:!1,bubbles:!0},this.currentDate?.toFormat(Od)||null,this.currentDate?.toJSDate()||null))}dispatchChangeEvent(){this.dispatchEvent(new Md({cancelable:!1,bubbles:!0},this.currentDate?.toFormat(Od)||null,this.currentDate?.toJSDate()||null))}onTextInputChange(){let t=this.input.value;return t&&(t=this.turnInputToPossibleDateFragment(t).toFormat(Od)||""),t}turnInputToPossibleDateFragment(t){let e=t.split("."),i=parseInt(e[0]),o=parseInt(e[1]),n=parseInt(e[2]),r=pd.now();if(isNaN(n)||(r=r.set({year:n})),isNaN(o)||(r=r.set({month:Bt(o,1,12)})),!isNaN(i)){let t=Bt(i,1,r.daysInMonth||1);r=r.set({day:t})}return r}render(){return j`
      <ktg-text-input
        class="ktg-date-input__text-input"
        .appearance=${this.appearance}
        .errorId=${this.errorId}
        .hintId=${this.hintId}
        .inputId=${this.inputId}
        .label=${this.label}
        .labelledBy=${this.labelledBy}
        .name=${this.name}
        placeholder=${this.placeholder}
        maxlength="10"
        minlength="10"
        trailing-icon="calendar"
        .trailingIconButton=${!this.disabled&&!this.readonly}
        .trailingIconLabel=${this.renderButtonLabel()}
        .disabled=${this.disabled}
        .error=${this.error}
        .required=${this.required}
        .autofocus=${this.autofocus}
        .readonly=${this.readonly}
        @button-click=${this.onButtonClick}
        @focus=${this.onFocus}
        @input=${this.onInput}
        @blur=${this.onBlur}
        @change=${this.onChange}
        @keydown=${this.onKeydown}
      ></ktg-text-input>
    `}renderButtonLabel(){return this.value?this.replacePlaceholders(this.filledButtonLabel):this.emptyButtonLabel}replacePlaceholders(t){return t.replace("{date}",this.formattedDate)}get formattedDate(){let t=this.value;return this.value&&this.currentDate&&(t=this.currentDate.toFormat("dd.MM.yyyy")),t}get isValidDate(){return this.currentDate?.isValid||!1}};i(qd,"KTGDateInputElement"),o([De(Me)],qd.prototype,"overlayService",2),o([wt()],qd.prototype,"currentDate",2),o([wt()],qd.prototype,"handle",2),o([kt({type:String})],qd.prototype,"lang",2),o([Ee({context:Te,subscribe:!0}),kt({type:String})],qd.prototype,"outlet",2),o([kt({type:String})],qd.prototype,"placeholder",2),o([kt({type:String,attribute:"input-id"})],qd.prototype,"inputId",2),o([kt({type:String,reflect:!0})],qd.prototype,"appearance",2),o([kt({type:String,reflect:!0})],qd.prototype,"value",1),o([kt({type:Boolean,reflect:!0})],qd.prototype,"required",2),o([kt({type:String,attribute:"empty-button-label"})],qd.prototype,"emptyButtonLabel",2),o([kt({type:String,attribute:"filled-button-label"})],qd.prototype,"filledButtonLabel",2),o([kt({type:String})],qd.prototype,"name",2),o([kt({type:String,attribute:"previous-month-label"})],qd.prototype,"previousMonthLabel",2),o([kt({type:String,attribute:"next-month-label"})],qd.prototype,"nextMonthLabel",2),o([kt({type:Boolean,reflect:!0})],qd.prototype,"autofocus",2),o([Ct("ktg-text-input")],qd.prototype,"input",2),qd=o([ft("ktg-date-input")],qd);var jd=[...ae,...ne,...Gi,d`
    :host {
      display: block;
    }

    .overlay-option {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-top: 0.5rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 0.5rem;
      background-color: var(
        --ktg-dropdown-background-color,
        var(--ktg-color-background-01)
      );
      border-bottom: 0.0625rem solid var(--ktg-color-neutral-02);
      z-index: 1;
      color: var(--ktg-color-text);
      transition: background-color 0.15s ease-out;
      cursor: pointer;
    }

    :host(:not([with-focus-outline])) .overlay-option--active,
    .overlay-option--selected {
      background-color: var(--ktg-color-brand2-01);
    }

    :host([with-focus-outline]) .overlay-option--active {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: -0.125rem;
    }

    .overlay-option--disabled {
      background-color: var(--ktg-color-neutral-02);
      cursor: default;
    }

    @media screen and (min-width: ${Ke}px) {
      .overlay-option {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }

    .overlay-option__checkbox {
      margin-right: 0.5rem;
    }

    .overlay-option__text {
      display: inline-block;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
      user-select: none;
      font-size: 1rem;
      line-height: 1.125rem;
    }

    .overlay-option--disabled .overlay-option__text {
      color: var(--ktg-color-neutral-04);
    }

    .overlay-option__icon {
      opacity: 0;
      color: var(--ktg-color-brand1-01);
      transition: opacity 0.15s ease-out;
    }

    .overlay-option--disabled .overlay-option__icon {
      color: var(--ktg-color-neutral-04);
    }

    .overlay-option--selected .overlay-option__icon {
      opacity: 1;
    }

    .overlay-option__outline {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      pointer-events: none;
    }
  `],Zd=class extends mt{constructor(){super(...arguments),this.internals=this.attachInternals(),this.active=!1,this.selected=!1,this.disabled=!1,this.value="",this.label="",this.keywords=[],this.originalOption=null,this.multiSelect=!1,this.withFocusOutline=!1}connectedCallback(){super.connectedCallback(),this.tabIndex=-1,this.role="option",this.id="ktg-dropdown-overlay-option-"+ ++Zd.idCounter}willUpdate(t){t.has("originalOption")&&(this.originalOption&&(this.originalOption.renderedOption=this),this.internals.ariaLabel=this.label,this.internals.ariaSelected=this.selected.toString(),this.internals.ariaDisabled=this.disabled.toString())}update(t){super.update(t),this.title=this.label}getItemLabel(){return this.label}getItemKeywords(){return this.keywords}render(){return j`
      <div
        class=${ai({"overlay-option":!0,"overlay-option--disabled":this.disabled,"overlay-option--active":this.active,"overlay-option--selected":this.selected,"overlay-option--multi-select":this.multiSelect})}
      >
        ${this.renderCheckbox()}

        <span class="overlay-option__text">${this.label}</span>

        ${this.renderIcon()}

        <div class="overlay-option__outline"></div>
      </div>
    `}renderCheckbox(){return this.multiSelect?j`
        <ktg-checkbox
          class="overlay-option__checkbox"
          aria-hidden="true"
          inert
          ?checked=${this.selected}
          ?disabled=${this.disabled}
        ></ktg-checkbox>
      `:j``}renderIcon(){return this.multiSelect?j``:j`
        <ktg-icon
          class="overlay-option__icon"
          name="check"
        ></ktg-icon>
      `}setActiveStyles(){this.active=!0}removeActiveStyles(){this.active=!1}};i(Zd,"KTGDropdownOverlayOptionElement"),Zd.idCounter=-1,Zd.styles=jd,o([kt({type:Boolean,reflect:!0})],Zd.prototype,"active",2),o([kt({type:Boolean,reflect:!0})],Zd.prototype,"selected",2),o([kt({type:Boolean,reflect:!0})],Zd.prototype,"disabled",2),o([kt({type:String})],Zd.prototype,"value",2),o([kt({type:String})],Zd.prototype,"label",2),o([kt({type:Array,attribute:!1})],Zd.prototype,"keywords",2),o([kt({type:Object,attribute:!1})],Zd.prototype,"originalOption",2),o([kt({type:Boolean,reflect:!0,attribute:"multi-select"})],Zd.prototype,"multiSelect",2),o([kt({type:Boolean,reflect:!0,attribute:"with-focus-outline"})],Zd.prototype,"withFocusOutline",2),Zd=o([ft("ktg-dropdown-overlay-option")],Zd);var Xd=class t{constructor(e){this.host=e,this.outlet=null,this.origin=null,this.handle=null,this.eventBus=new ge("ktg-dropdown-overlay-controller-"+ ++t.idCounter),e.addController(this),this.createOverlay()}static{i(this,"KTGDropdownOverlayController")}static{this.idCounter=-1}get overlayId(){return this._overlay.id}hostDisconnected(){this.close()}withTypeahead(){return this._overlay.keyManager.withTypeahead({autoReset:!0}),this}withOrigin(t){return this.origin=t,this}withOutlet(t){return this.outlet=t,this}createOverlay(){this._overlay=document.createElement("ktg-dropdown-overlay"),this._overlay.on("activate-option",t=>{this.eventBus.emit("activate-option",t)}),this._overlay.on("click-option",t=>{this.eventBus.emit("click-option",t)})}async setOptions(t){return this._overlay.options=t,await(this._overlay?.updateComplete)}setDisplayFocusOutline(t){this._overlay.displayFocusOutline=t}setIsLoading(t){this._overlay.loading=t}isTyping(){return this._overlay.keyManager.isTyping()}open(t){if(this.handle)return;this._overlay.displayFocusOutline=t?.displayFocusOutline??!1,this._overlay.on("ready",()=>{t?.onReady?.(this._overlay)},{once:!0}),this.eventBus.emit("before-open",this._overlay);let e=this.outlet??Me.OUTLETS.DEFAULT;this.handle=this.overlayService.open({element:this._overlay,outlet:e,backdrop:{enabled:!0,transparent:!0},positioning:t=>{if(!this.origin)throw new Error("Origin element is not set.");return new Fe(t).withOrigin(this.origin).withSameWidthAsOrigin().viewportMarginX(16).viewportMarginY(16).positions([{originX:"left",originY:"bottom",overlayX:"left",overlayY:"top"},{originX:"left",originY:"top",overlayX:"left",overlayY:"bottom"}]).afterRender(t=>{this._overlay?.classList.toggle("dropdown-overlay--rendered-at-top","top"===t.relativePositionAndAlignment.position),this._overlay?.classList.toggle("dropdown-overlay--rendered-at-bottom","bottom"===t.relativePositionAndAlignment.position)})}}),this.eventBus.emit("open",this._overlay),this.handle.on("close",()=>{this.eventBus.emit("close",this._overlay),this.handle=null})}close(){this.handle?.close(),this.handle=null}on(t,e,i){return this.eventBus.on(t,e,i)}off(t,e){this.eventBus.off(t,e)}activateSelectedIndex(t){let e=this.getSelectedIndex()??t??null;null!==e?(this._overlay.keyManager.index(e),Ht.scrollIntoView(this._overlay.keyManager.activeItem,{block:"center",inline:"nearest"})):this._overlay.keyManager.deactivate()}activateIndex(t){this._overlay.keyManager.index(t)}resetActiveIndex(){this._overlay.keyManager.deactivate()}scrollActiveOptionIntoView(){Ht.scrollIntoView(this._overlay.keyManager.activeItem,{block:"center",inline:"nearest"})}onKeydown(t){this._overlay.keyManager.onKeydown(t)}getSelectedIndex(){let t=this._overlay.options.findIndex(t=>t.selected);return-1===t?null:t}get activeOption(){return this._overlay.keyManager.activeItem?.originalOption??null}};o([De(Me)],Xd.prototype,"overlayService",2);var Jd=Xd,{I:Qd}=ut,th=i(()=>document.createComment(""),"s"),eh=i((t,e,i)=>{let o=t._$AA.parentNode,n=void 0===e?t._$AB:e._$AA;if(void 0===i){let e=o.insertBefore(th(),n),r=o.insertBefore(th(),n);i=new Qd(e,r,t,t.options)}else{let e=i._$AB.nextSibling,r=i._$AM,a=r!==t;if(a){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==r._$AU&&i._$AP(e)}if(e!==n||a){let t=i._$AA;for(;t!==e;){let e=t.nextSibling;o.insertBefore(t,n),t=e}}}return i},"r"),ih=i((t,e,i=t)=>(t._$AI(e,i),t),"v"),oh={},nh=i((t,e=oh)=>t._$AH=e,"m"),rh=i(t=>t._$AH,"p"),ah=i(t=>{t._$AP?.(!1,!0);let e=t._$AA,i=t._$AB.nextSibling;for(;e!==i;){let t=e.nextSibling;e.remove(),e=t}},"h"),sh=i((t,e,i)=>{let o=new Map;for(let n=e;n<=i;n++)o.set(t[n],n);return o},"u"),lh=je(class extends Ze{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let o;void 0===i?i=e:void 0!==e&&(o=e);let n=[],r=[],a=0;for(let e of t)n[a]=o?o(e,a):a,r[a]=i(e,a),a++;return{values:r,keys:n}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,o]){let n=rh(t),{values:r,keys:a}=this.dt(e,i,o);if(!Array.isArray(n))return this.ut=a,r;let s,l,c=this.ut??=[],d=[],h=0,u=n.length-1,p=0,g=r.length-1;for(;h<=u&&p<=g;)if(null===n[h])h++;else if(null===n[u])u--;else if(c[h]===a[p])d[p]=ih(n[h],r[p]),h++,p++;else if(c[u]===a[g])d[g]=ih(n[u],r[g]),u--,g--;else if(c[h]===a[g])d[g]=ih(n[h],r[g]),eh(t,d[g+1],n[h]),h++,g--;else if(c[u]===a[p])d[p]=ih(n[u],r[p]),eh(t,n[h],n[u]),u--,p++;else if(void 0===s&&(s=sh(a,p,g),l=sh(c,h,u)),s.has(c[h]))if(s.has(c[u])){let e=l.get(a[p]),i=void 0!==e?n[e]:null;if(null===i){let e=eh(t,n[h]);ih(e,r[p]),d[p]=e}else d[p]=ih(i,r[p]),eh(t,n[h],i),n[e]=null;p++}else ah(n[u]),u--;else ah(n[h]),h++;for(;p<=g;){let e=eh(t,d[g+1]);ih(e,r[p]),d[p++]=e}for(;h<=u;){let t=n[h++];null!==t&&ah(t)}return this.ut=a,nh(t,d),X}}),ch=[...ae,d`
    :host {
      position: relative;
      width: 0.25rem;
    }

    :host([orientation='horizontal']) {
      width: 100%;
      height: 0.25rem;
    }

    .scrollbar {
      height: 100%;
      width: 100%;
    }

    .scrollbar__track {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }

    :host([appearance='white']) .scrollbar__track {
      background-color: var(--ktg-color-neutral-02);
    }

    :host([appearance='grey']) .scrollbar__track {
      background-color: var(--ktg-color-neutral-03);
    }

    :host([appearance='green']) .scrollbar__track {
      background-color: var(--ktg-color-brand1-02);
    }

    :host([appearance='blue']) .scrollbar__track {
      background-color: var(--ktg-color-brand2-03);
    }

    .scrollbar__thumb {
      position: absolute;
      height: 100%;
      width: 100%;
      transform-origin: top;
      will-change: transform;
    }

    .scrollbar__thumb:hover {
      cursor: grab;
    }

    .ktg-grabbing-cursor--thumb:hover {
      cursor: grabbing;
    }

    :host([orientation='horizontal']) .scrollbar__thumb {
      transform-origin: left;
    }

    :host([appearance='white']) .scrollbar__thumb {
      background-color: var(--ktg-color-brand1-01);
    }

    :host([appearance='grey']) .scrollbar__thumb {
      background-color: var(--ktg-color-brand1-01);
    }

    :host([appearance='green']) .scrollbar__thumb {
      background-color: var(--ktg-color-brand3-01);
    }

    :host([appearance='blue']) .scrollbar__thumb {
      background-color: var(--ktg-color-brand1-01);
    }
  `],dh=[d`
    .ktg-hide-scrollbar {
      -ms-overflow-style-style: none;
      scrollbar-width: none;
    }

    .ktg-hide-scrollbar::-webkit-scrollbar {
      display: none;
    }

    .ktg-grabbing-cursor {
      cursor: grabbing;
    }
  `];re(dh);var hh=[...ae,...ne,...dh,d`
    :host {
      display: block;
    }

    .dropdown-overlay {
      display: flex;
    }

    :host(.dropdown-overlay--rendered-at-top) .dropdown-overlay {
      box-shadow: 0 -0.125rem 0.5rem rgba(var(--ktg-rgb-shadow), 0.1);
      clip-path: inset(-1rem -1rem 0 -1rem);
    }

    :host(.dropdown-overlay--rendered-at-bottom) .dropdown-overlay {
      box-shadow: 0 0.125rem 0.5rem rgba(var(--ktg-rgb-shadow), 0.1);
      clip-path: inset(0 -1rem -1rem -1rem);
    }

    .dropdown-overlay__entry-item:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: -0.1875rem;
    }

    .dropdown-overlay__scroll-container {
      display: flex;
      max-height: 12.75rem;
      width: 100%;
      max-width: 100vw;
      overflow: auto;
    }

    .dropdown-overlay__loading {
      display: none;
      width: 100%;
      color: var(--ktg-color-text);
      padding-top: 0.5rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 0.5rem;
      background-color: var(
        --ktg-dropdown-background-color,
        var(--ktg-color-background-01)
      );
    }

    :host([loading]) .dropdown-overlay__loading {
      display: flex;
    }

    @media screen and (min-width: ${Ke}px) {
      .dropdown-overlay__loading {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }

    .dropdown-overlay__loading-inner {
      height: 1.125rem;
      display: flex;
      align-items: center;
    }

    .dropdown-overlay__loading-icon {
      --ktg-icon-size: 1rem;
    }

    .dropdown-overlay__list {
      position: relative;
      height: fit-content;
      width: 100%;
    }

    :host([loading]) .dropdown-overlay__list {
      display: none;
    }

    .dropdown-overlay__list-entry {
      list-style: none;
    }

    .dropdown-overlay__scrollbar {
      width: 0.5rem;
      z-index: 1;
    }
  `],uh=class extends mt{constructor(){super(...arguments),this.renderLoop=null,this.grabScrolling=!1,this._scrollContainer=null,this.scrollDistanceToTarget=0,this.distanceScrolledThumb=0,this.oldScrollDistance=0,this.oldScrollSize=0,this.oldScrollbarSize=0,this.oldVisibleContentSize=0,this.grabPointDifference=0,this.appearance="white",this.orientation="vertical",this.for="",this.onMouseMove=t=>{if(this.grabScrolling){let e;"vertical"===this.orientation?e=t.clientY:"horizontal"===this.orientation&&(e=t.clientX),e&&(this.scrollDistanceToTarget=Pt(e,0,this.scrollbarSize,0,this.scrollSize))}},this.onMouseUp=()=>{this.grabScrolling=!1,document.body.classList.remove("ktg-grabbing-cursor"),this.thumb.classList.remove("ktg-grabbing-cursor--thumb")}}get scrollContainer(){return this._scrollContainer}connectedCallback(){super.connectedCallback(),this.setAttribute("role","scrollbar"),this.renderLoop=new $e,this.renderLoop.on("update",()=>{this._scrollContainer&&("vertical"===this.orientation&&this._scrollContainer?(this.scrollDistance=this._scrollContainer.scrollTop,this.scrollSize=this._scrollContainer.scrollHeight,this.scrollbarSize=this.offsetHeight,this.viewportSize=this._scrollContainer.offsetHeight):"horizontal"===this.orientation&&this._scrollContainer&&(this.scrollDistance=this._scrollContainer.scrollLeft,this.scrollSize=this._scrollContainer.scrollWidth,this.scrollbarSize=this.offsetWidth,this.viewportSize=this._scrollContainer.offsetWidth),(this.scrollDistance!==this.oldScrollDistance||0!==this.scrollDistanceToTarget||this.scrollSize!==this.oldScrollSize||this.scrollbarSize!==this.oldScrollbarSize||this.viewportSize!==this.oldVisibleContentSize)&&(this.oldScrollDistance=this.scrollDistance,this.oldScrollSize=this.scrollSize,this.oldScrollbarSize=this.scrollbarSize,this.oldVisibleContentSize=this.viewportSize,this.updateScrollbar()))}),this.renderLoop.play(),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp)}willUpdate(t){if(super.willUpdate(t),t.has("for")){let t=this.getRootNode();this._scrollContainer?.classList.remove("ktg-hide-scrollbar"),this._scrollContainer=t.getElementById(this.for),this._scrollContainer?.classList.add("ktg-hide-scrollbar"),this._scrollContainer?this.renderLoop?.play():this.renderLoop?.pause(),this.setAttribute("aria-controls",this.for)}t.has("orientation")&&this.setAttribute("aria-orientation",this.orientation)}disconnectedCallback(){super.disconnectedCallback(),this.renderLoop?.destroy(),this.renderLoop=null,window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp)}updateScrollbar(){if(this.scrollSize-this.viewportSize<=1)this.style.display="none";else{this.style.display="block";let t=Math.round(Pt(this.scrollDistance,0,this.scrollSize-this.viewportSize,0,100));this.setAttribute("aria-valuenow",t.toString());let e=Rt(this.viewportSize,0,this.scrollSize);this.distanceScrolledThumb=Pt(this.scrollDistance,0,this.scrollSize,0,this.scrollbarSize),"vertical"===this.orientation?(this.thumb.style.transform=`translateY(${this.distanceScrolledThumb}px) scaleY(${e})`,this._scrollContainer&&this.scrollDistanceToTarget&&(this._scrollContainer.scrollTop=this.scrollDistanceToTarget-this.scrollSize*this.grabPointDifference)):"horizontal"===this.orientation&&(this.thumb.style.transform=`translateX(${this.distanceScrolledThumb}px) scaleX(${e})`,this._scrollContainer&&this.scrollDistanceToTarget&&(this._scrollContainer.scrollLeft=this.scrollDistanceToTarget-this.scrollSize*this.grabPointDifference)),this.scrollDistanceToTarget=0}}onMouseDownThumb(t){t.preventDefault(),this.grabScrolling=!0,document.body.classList.add("ktg-grabbing-cursor"),this.thumb.classList.add("ktg-grabbing-cursor--thumb");let e=0;"vertical"===this.orientation?e=t.clientY-this.distanceScrolledThumb:"horizontal"===this.orientation&&(e=t.clientX-this.distanceScrolledThumb),this.grabPointDifference=Rt(e,0,this.scrollbarSize)}onClickTrack(t){if(!t.target?.classList.contains("scrollbar__thumb")){let e=this.track.getBoundingClientRect(),i={};switch(this.orientation){case"vertical":i={top:this.caluclateScrollTo(e.top,t.clientY)};break;case"horizontal":i={left:this.caluclateScrollTo(e.left,t.clientX)}}Ht.scrollTo(this._scrollContainer,{...i,behavior:"smooth",respectPrefersReducedMotion:!0})}}caluclateScrollTo(t,e){let i=Rt(e-t,0,this.scrollbarSize);return this.scrollSize*i-this.viewportSize/2}render(){return j`
      <div class="scrollbar">
        <div
          class="scrollbar__track"
          @click=${this.onClickTrack}
        >
          <div
            class="scrollbar__thumb"
            @mousedown=${this.onMouseDownThumb}
          ></div>
        </div>
      </div>
    `}};i(uh,"KTGScrollbarElement"),uh.styles=ch,o([kt({type:String,reflect:!0})],uh.prototype,"appearance",2),o([kt({type:String,reflect:!0})],uh.prototype,"orientation",2),o([kt({type:String})],uh.prototype,"for",2),o([Ct(".scrollbar__track")],uh.prototype,"track",2),o([Ct(".scrollbar__thumb")],uh.prototype,"thumb",2),uh=o([ft("ktg-scrollbar")],uh);var ph=class extends mt{constructor(){super(),this._id="ktg-dropdown-overlay-"+ ++ph.idCounter,this.eventBus=new ge("ktg-dropdown-overlay"),this._keyManager=(new To).withWrap().withVerticalLayout().withHomeAndEnd(),this.displayFocusOutline=!1,this.multiSelect=!1,this.loading=!1,this._keyManager.on("change",t=>{this.eventBus.emit("activate-option",t??null)})}get keyManager(){return this._keyManager}connectedCallback(){super.connectedCallback(),this.id=this._id}willUpdate(t){super.willUpdate(t),t.has("loading")&&(this.loading?this.keyManager.pause():this.keyManager.resume())}updated(t){super.updated(t),t.has("options")&&this._keyManager.setItems(Array.from(this.renderedOptions))}async afterAttach(){this.eventBus.emit("ready")}setOverlay(t){this.overlay=t}close(){this.overlay.handle.close()}onClick(t,e){t.preventDefault();let i=t.target;i.disabled||(this._keyManager.index(e),i.originalOption&&this.eventBus.emit("click-option",i.originalOption))}onHover(t){this.displayFocusOutline=!1,this.renderedOptions[t].disabled?this._keyManager.deactivate():this._keyManager.index(t)}render(){return j`
      <div class="dropdown-overlay">
        <div
          class="dropdown-overlay__scroll-container"
          id="dropdown-overlay__scroll-container"
        >
          <div class="dropdown-overlay__loading">
            <span class="dropdown-overlay__loading-inner">
              <ktg-icon
                class="dropdown-overlay__loading-icon"
                name="loading"
                loading
              ></ktg-icon>
            </span>
          </div>

          <ul
            class="dropdown-overlay__list"
            role="listbox"
            aria-multiselectable=${this.multiSelect}
          >
            ${lh(this.options,t=>t.value,(t,e)=>j`
                  <li class="dropdown-overlay__list-entry">
                    <ktg-dropdown-overlay-option
                      .withFocusOutline=${this.displayFocusOutline}
                      .originalOption=${t}
                      .label=${t.label}
                      .selected=${t.selected}
                      .disabled=${t.disabled}
                      .value=${t.value}
                      .keywords=${t.keywords}
                      ?multi-select=${this.multiSelect}
                      @mousedown=${t=>t.preventDefault()}
                      @click=${t=>this.onClick(t,e)}
                      @mousemove=${()=>this.onHover(e)}
                    >
                    </ktg-dropdown-overlay-option>
                  </li>
                `)}
          </ul>
        </div>

        <ktg-scrollbar
          class="dropdown-overlay__scrollbar"
          appearance="white"
          for="dropdown-overlay__scroll-container"
        ></ktg-scrollbar>
      </div>
    `}on(t,e,i){return this.eventBus.on(t,e,i)}off(t,e){this.eventBus.off(t,e)}};i(ph,"KTGDropdownOverlayElement"),ph.idCounter=-1,ph.styles=hh,o([kt({type:Array,attribute:!1})],ph.prototype,"options",2),o([kt({type:Boolean,attribute:!1})],ph.prototype,"displayFocusOutline",2),o([kt({type:Boolean,attribute:!1})],ph.prototype,"multiSelect",2),o([kt({type:Boolean,reflect:!0})],ph.prototype,"loading",2),o([Ct("#dropdown-overlay__scroll-container")],ph.prototype,"scrollContainer",2),o([St("ktg-dropdown-overlay-option")],ph.prototype,"renderedOptions",2),ph=o([ft("ktg-dropdown-overlay")],ph);var gh=class extends(md(mt)){constructor(){super(),this.internals=this.attachInternals(),this.overlayController=new Jd(this).withTypeahead(),this.hasSelection=!1,this.outlet=null,this.appearance="white",this.placeholder="",this.name="",this.required=!1,this.isOpen=!1,this.autofocus=!1,this.onReset=t=>{},this.overlayController.on("before-open",t=>{this.onBeforeOpen(t)}),this.overlayController.on("open",()=>{this.isOpen=!0,this.setAttribute("aria-controls",this.overlayController.overlayId),this.setAttribute("aria-owns",this.overlayController.overlayId),this.setAttribute("aria-expanded","true"),this.onOverlayOpen()}),this.overlayController.on("activate-option",t=>{this.onActivateOption(t)}),this.overlayController.on("click-option",t=>{this.onSelect(t)}),this.overlayController.on("close",()=>{this.isOpen=!1,this.setAttribute("aria-expanded","false"),this.onOverlayClose()})}static{i(this,"KTGDropdownBaseElement")}static{this.formAssociated=!0}connectedCallback(){super.connectedCallback(),this.role="combobox",this.setAttribute("aria-haspopup","listbox"),this.setAttribute("aria-expanded","false"),this.internals.form?.addEventListener("reset",this.onReset)}willUpdate(t){super.willUpdate(t),(t.has("error")||t.has("hintId")||t.has("errorId"))&&this.updateDescribedBy(),t.has("error")&&(this.internals.ariaInvalid=this.error.toString()),t.has("disabled")&&(this.internals.ariaDisabled=this.disabled.toString(),this.overlayController.close()),t.has("readonly")&&(this.internals.ariaReadOnly=this.readonly.toString(),this.overlayController.close()),t.has("required")&&(this.internals.ariaRequired=this.required.toString())}update(t){super.update(t),t.has("labelledBy")&&(this.labelledBy?this.setAttribute("aria-labelledby",this.labelledBy):this.removeAttribute("aria-labelledby"))}firstUpdated(t){super.firstUpdated(t),this.autofocus&&this.origin.focus(),this.overlayController.withOrigin(this.origin)}disconnectedCallback(){super.disconnectedCallback(),this.internals.form?.removeEventListener("reset",this.onReset)}updateDescribedBy(){let t=this.hintId;this.error&&(t=this.errorId),this.setAttribute("aria-describedby",t)}open(t){this.disabled||this.readonly||this.overlayController.withOutlet(this.outlet).open(t)}close(){this.overlayController.close()}checkValidity(){return this.internals.checkValidity()}onBeforeOpen(t){}onOverlayOpen(){}onOverlayReady(){}onActivateOption(t){}onSelect(t){}onOverlayClose(){}onOptionsSlotChange(){}renderOptionsSlot(){return j`
      <slot
        class="dropdown-options"
        @slotchange=${this.onOptionsSlotChange}
      ></slot>
    `}};o([wt()],gh.prototype,"hasSelection",2),o([Ee({context:Te,subscribe:!0}),kt({type:String})],gh.prototype,"outlet",2),o([kt({type:String,reflect:!0})],gh.prototype,"appearance",2),o([kt({type:String})],gh.prototype,"placeholder",2),o([kt({type:String})],gh.prototype,"name",2),o([kt({type:Boolean,reflect:!0})],gh.prototype,"required",2),o([kt({type:Boolean,reflect:!0,attribute:"open"})],gh.prototype,"isOpen",2),o([kt({type:Boolean,reflect:!0})],gh.prototype,"autofocus",2),o([Et({selector:"ktg-dropdown-option",flatten:!0})],gh.prototype,"optionElements",2);var mh=[...ae,...ne,d`
    .dropdown-button {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.375rem;
      padding-top: 0.6875rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 0.6875rem;
      width: inherit;
      border: none;
      cursor: pointer;
      outline: none;
      user-select: none;
      color: var(--ktg-color-text);
    }

    :host([appearance='white']) .dropdown-button {
      background-color: var(--ktg-color-background-01);
    }

    :host([appearance='grey']) .dropdown-button {
      background-color: var(--ktg-color-neutral-01);
    }

    :host([disabled]) .dropdown-button {
      background-color: var(--ktg-color-neutral-02);
      color: var(--ktg-color-neutral-04);
      cursor: default;
    }

    :host([readonly]) .dropdown-button {
      user-select: unset;
      cursor: text;
      background-color: var(--ktg-color-neutral-02);
    }

    @media screen and (min-width: ${Ke}px) {
      .dropdown-button {
        padding-left: 1rem;
        padding-right: 1rem;
        gap: 0.625rem;
      }
    }

    .dropdown-button__leading-icon {
      color: inherit;
      flex-shrink: 0;
    }

    .dropdown-button__text {
      width: 100%;
      font-size: 1rem;
      line-height: 1.125rem;
      text-align: left;
      border: none;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .dropdown-button__placeholder {
      color: var(--ktg-color-neutral-04);
    }

    :host([error]) .dropdown-button__placeholder {
      color: var(--ktg-color-danger);
    }

    .dropdown-button__value-text {
      color: var(--ktg-color-text);
    }

    :host([error]) .dropdown-button__value-text {
      color: var(--ktg-color-danger);
    }

    :host([disabled]) .dropdown-button__value-text {
      color: var(--ktg-color-neutral-04);
    }

    .dropdown-button__trailing-icon {
      flex-shrink: 0;
      color: var(--ktg-color-link);
      transition: transform 0.2s ease-out;
    }

    @media (prefers-reduced-motion: reduce) {
      .dropdown-button__trailing-icon {
        transition: none;
      }
    }

    :host([disabled]) .dropdown-button__trailing-icon {
      color: var(--ktg-color-neutral-04);
    }

    :host([open]) .dropdown-button__trailing-icon {
      transform: rotate(180deg);
    }

    .dropdown-button__border {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-bottom: 0.0625rem solid var(--ktg-color-brand1-01);
      pointer-events: none;
      outline: 0.125rem solid
        var(--ktg-dropdown-button-focus-outline-color, transparent);
      outline-offset: -0.125rem;
    }

    :host([disabled]) .dropdown-button__border {
      display: none;
    }

    :host([readonly]) .dropdown-button__border {
      border-color: transparent;
    }

    :host([error]) .dropdown-button__border {
      border: 0.0625rem solid var(--ktg-color-danger);
    }
  `],vh=class extends mt{constructor(){super(...arguments),this.appearance="white",this.label="",this.placeholder="",this.valueText="",this.icon="",this.disabled=!1,this.error=!1,this.readonly=!1,this.open=!1}render(){return j`
      <div
        .title=${this.label}
        class=${ai({"dropdown-button":!0,"dropdown-button--open":this.open})}
      >
        ${si(this.icon,()=>j`
            <ktg-icon
              name=${this.icon}
              class="dropdown-button__leading-icon"
            ></ktg-icon>
          `)}

        <span class="dropdown-button__text">${this.renderText()}</span>

        <ktg-icon
          name="dropdown-arrow-down-medium"
          class="dropdown-button__trailing-icon"
        ></ktg-icon>

        <span class="dropdown-button__border"></span>
      </div>
    `}renderText(){return this.valueText?j`
        <span class="dropdown-button__value-text">${this.valueText}</span>
      `:this.placeholder?j`
        <span class="dropdown-button__placeholder">${this.placeholder}</span>
      `:j`&nbsp;`}};i(vh,"KTGDropdownButtonElement"),vh.styles=mh,o([kt({type:String,reflect:!0})],vh.prototype,"appearance",2),o([kt({type:String})],vh.prototype,"label",2),o([kt({type:String})],vh.prototype,"placeholder",2),o([kt({type:String,attribute:"value-text"})],vh.prototype,"valueText",2),o([kt({type:String})],vh.prototype,"icon",2),o([kt({type:Boolean,reflect:!0})],vh.prototype,"disabled",2),o([kt({type:Boolean,reflect:!0})],vh.prototype,"error",2),o([kt({type:Boolean,reflect:!0})],vh.prototype,"readonly",2),o([kt({type:Boolean,reflect:!0})],vh.prototype,"open",2),vh=o([ft("ktg-dropdown-button")],vh);var fh=class extends gh{constructor(){super(...arguments),this.icon="",this.onKeydown=t=>{if(this.isOpen)if(t.preventDefault(),t.stopPropagation(),this.overlayController.setDisplayFocusOutline(!0),t.ctrlKey)if("KeyY"===t.code){let e=this.overlayController.activeOption;e&&(t.stopPropagation(),t.preventDefault(),this.onSelect(e))}else this.overlayController.onKeydown(t),this.overlayController.scrollActiveOptionIntoView();else switch(t.code){case"Escape":case"Tab":t.preventDefault(),t.stopPropagation(),this.close();break;case"Enter":case"Space":{if(this.overlayController.isTyping()&&"Space"===t.code){this.overlayController.onKeydown(t);break}let e=this.overlayController.activeOption;e&&(t.stopPropagation(),t.preventDefault(),this.onSelect(e))}break;default:this.overlayController.onKeydown(t),this.overlayController.scrollActiveOptionIntoView()}else switch(t.code){case"Enter":case"Space":case"ArrowDown":t.preventDefault(),t.stopPropagation(),this.open({displayFocusOutline:!0,onReady:()=>{this.overlayController.activateSelectedIndex(0)}});break;case"ArrowUp":t.preventDefault(),t.stopPropagation(),this.open({displayFocusOutline:!0,onReady:()=>{this.overlayController.activateSelectedIndex(this.optionElements.length-1)}})}}}static{i(this,"KTGDropdownBaseWithButtonElement")}get origin(){return this.button}connectedCallback(){super.connectedCallback(),this.role="combobox",this.internals.ariaHasPopup="listbox",this.addEventListener("keydown",this.onKeydown)}update(t){super.update(t),this.tabIndex=this.disabled?-1:0,this.label?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydown)}onOptionsSlotChange(){super.onOptionsSlotChange(),this.overlayController.setOptions(this.optionElements)}onActivateOption(t){this.isOpen&&t?this.setAttribute("aria-activedescendant",t.id):this.removeAttribute("aria-activedescendant")}onOverlayClose(){super.onOverlayClose(),this.focus(),this.removeAttribute("aria-activedescendant")}onButtonClick(t){t.preventDefault(),t.stopPropagation(),this.isOpen||this.open({displayFocusOutline:!1,onReady:()=>{this.overlayController.activateSelectedIndex()}})}renderButton(){return j`
      <ktg-dropdown-button
        class="dropdown-button"
        .appearance=${this.appearance}
        .label=${this.label}
        .placeholder=${this.placeholder}
        .valueText=${this.renderValueText()}
        .icon=${this.icon}
        ?disabled=${this.disabled}
        ?error=${this.error}
        ?readonly=${this.readonly}
        ?open=${this.isOpen}
        @click=${this.onButtonClick}
      >
      </ktg-dropdown-button>
    `}};o([kt({type:String})],fh.prototype,"icon",2),o([Ct(".dropdown-button")],fh.prototype,"button",2);var bh=class extends Event{constructor(t,e){super("input",t),this.value=e}static{i(this,"KTGDropdownInputEvent")}},yh=class extends Event{constructor(t,e){super("change",t),this.value=e}static{i(this,"KTGDropdownChangeEvent")}},kh=[...ae,...ne,d`
    :host {
      display: inline-block;
      width: auto;
      outline: 0;
    }

    .dropdown-options {
      display: none;
    }
  `],wh=[...kh,d`
    /**
     * NOTE: because the focus isn't on the ktg-dropdown-button element, we
     * need to set the focus-outline color via a custom property
     */
    :host(:not([open]):focus-visible) {
      --ktg-dropdown-button-focus-outline-color: var(--ktg-color-focus);
    }

    :host(:not([open])[error]:focus-visible) {
      --ktg-dropdown-button-focus-outline-color: var(--ktg-color-danger);
    }
  `],_h=[...wh],xh=[d`
    :host {
      display: none;
    }
  `],Ch=class extends mt{constructor(){super(),this.eventBus=new ge,this.renderedOption=null,this.keywords=[],this.value="",this.selected=!1,this.disabled=!1,this._label="",this.default=!1,this.labelMutationObserver=new MutationObserver(t=>{for(let e of t)"characterData"===e.type&&this.updateLabel()})}set label(t){this._label=t,this.eventBus.emit("label-change")}get label(){return this._label}connectedCallback(){super.connectedCallback(),this.updateLabel()}updated(t){super.updated(t),(t.has("value")||t.has("disabled")||t.has("selected"))&&this.updateRenderedOption()}disconnectedCallback(){super.disconnectedCallback(),this.labelMutationObserver.disconnect()}render(){return j`<slot @slotchange=${this.onSlotChange}></slot>`}onSlotChange(){for(let t of this.assignedNodes)t.nodeType===Node.TEXT_NODE&&this.labelMutationObserver.observe(t,{characterData:!0,subtree:!0});this.updateLabel()}updateLabel(){this.label=this.textContent?.trim()??"",this.updateRenderedOption()}updateRenderedOption(){this.renderedOption&&(this.renderedOption.originalOption=this,this.renderedOption.label=this.label,this.renderedOption.selected=this.selected,this.renderedOption.disabled=this.disabled,this.renderedOption.value=this.value)}on(t,e,i){return this.eventBus.on(t,e,i)}off(t,e){this.eventBus.off(t,e)}};i(Ch,"KTGDropdownOptionElement"),Ch.styles=xh,o([kt({type:Object,attribute:!1})],Ch.prototype,"renderedOption",2),o([kt({type:Array,attribute:!1})],Ch.prototype,"keywords",2),o([kt({type:String,converter:t=>t?.toString()??""})],Ch.prototype,"value",2),o([kt({type:Boolean,reflect:!0})],Ch.prototype,"selected",2),o([kt({type:Boolean,reflect:!0})],Ch.prototype,"disabled",2),o([kt({type:String,attribute:!1})],Ch.prototype,"label",1),o([kt({type:Boolean,reflect:!0})],Ch.prototype,"default",2),o([Tt({flatten:!0})],Ch.prototype,"assignedNodes",2),Ch=o([ft("ktg-dropdown-option")],Ch);var Sh=class extends fh{constructor(){super(...arguments),this._currentlySelectedOption=null,this._value="",this.onReset=t=>{if(t.defaultPrevented)return;let e="";for(let t of this.optionElements)t.default&&(e=t.value);this.value=e},this.onCurrentOptionLabelChange=()=>{this.requestUpdate()}}get currentlySelectedOption(){return this._currentlySelectedOption}get value(){return this._value}set value(t){let e=this._value;this._value=t?.toString()??"",this.requestUpdate("value",e)}willUpdate(t){t.has("value")&&(this.updateCurrentlySelectedOption(),this.internals.setFormValue(this.value)),super.willUpdate(t)}updated(t){super.updated(t),this.updateValidity()}updateValidity(){this.internals.setValidity({valueMissing:this.required&&!this.value},"Please select an item in the list.",this.button)}onSelect(t){t.disabled||(this.value=t.value,this.dispatchValueChangeEvents(),this.close())}dispatchValueChangeEvents(){this.dispatchEvent(new bh({cancelable:!1,bubbles:!0},this.value)),this.dispatchEvent(new yh({cancelable:!1,bubbles:!0},this.value))}onOptionsSlotChange(){if(super.onOptionsSlotChange(),!this.value)for(let t of this.optionElements)t.default&&(this.value=t.value);for(let t of this.optionElements)t.selected&&(this.value=t.value);this.updateCurrentlySelectedOption()}updateCurrentlySelectedOption(){this._currentlySelectedOption?.off("label-change",this.onCurrentOptionLabelChange),this._currentlySelectedOption=null;for(let t of this.optionElements)t.selected=t.value===this.value,t.selected&&(this._currentlySelectedOption=t);this.hasSelection=null!==this._currentlySelectedOption,this._currentlySelectedOption?.on("label-change",this.onCurrentOptionLabelChange)}render(){return j`${this.renderOptionsSlot()} ${this.renderButton()}`}renderValueText(){return this.hasSelection?this._currentlySelectedOption?.label??"":""}};i(Sh,"KTGDropdownElement"),Sh.styles=_h,o([wt()],Sh.prototype,"_currentlySelectedOption",2),o([kt({attribute:!1})],Sh.prototype,"value",1),Sh=o([ft("ktg-dropdown")],Sh);var Eh=class extends Event{constructor(t,e){super("search-input",t),this.searchTerm=e}static{i(this,"KTGDropdownAutocompleteSearchInputEvent")}},Th=class extends Event{constructor(t,e){super("input",t),this.value=e}static{i(this,"KTGDropdownAutocompleteInputEvent")}},Ih=class extends Event{constructor(t,e){super("change",t),this.value=e}static{i(this,"KTGDropdownAutocompleteChangeEvent")}},$h=class extends Event{static{i(this,"KTGDropdownAutocompleteFocusEvent")}constructor(t){super("focus",t)}},Oh=class extends Event{static{i(this,"KTGDropdownAutocompleteBlurEvent")}constructor(t){super("blur",t)}},Lh=[...kh,...Ud,d`
    :host {
      display: inline-block;
    }

    .dropdown-autocomplete__input {
      width: 100%;
    }
  `],Dh=class{static{i(this,"KTGFilterStrategy")}},Ah=class extends Dh{static{i(this,"KTGFilterStrategyAuto")}filter(t,e,i){let o=t.trim().toLowerCase(),n=[],r=[];for(let t of e){let e=i(t).toLowerCase();e.startsWith(o)?n.push(t):e.includes(o)&&r.push(t)}return n.concat(r)}},Mh=class extends Dh{static{i(this,"KTGFilterStrategyIncludes")}filter(t,e,i){let o=[],n=t.trim().toLowerCase();for(let t of e)i(t).toLowerCase().includes(n)&&o.push(t);return o}},Bh=class extends Dh{static{i(this,"KTGFilterStrategyNoop")}filter(t,e,i){return e}},zh=class extends Dh{static{i(this,"KTGFilterStrategyStartsWith")}filter(t,e,i){let o=[],n=t.trim().toLowerCase();for(let t of e)i(t).toLowerCase().startsWith(n)&&o.push(t);return o}},Nh=class extends gh{constructor(){super(),this._filteredOptions=[],this._currentlySelectedOption=null,this.isFocused=!1,this.listHasVisualFocus=!1,this.activeOptionId=null,this.leadingIcon="",this.trailingIcon="",this.trailingIconButton=!1,this.trailingIconLabel="",this._value="",this.searchTerm="",this.filterStrategy="auto",this.clearable=!1,this.autoActivateFirst=!1,this.loading=!1,this.onReset=t=>{if(t.defaultPrevented)return;let e=this.findDefaultOption();this.value=e?.value??"",this.searchTerm=e?.label??""},this.onCurrentOptionLabelChange=()=>{this.isFocused||(this.searchTerm=this._currentlySelectedOption?.label??"")},this._filterStrategy=this.createFilterStrategy()}get currentlySelectedOption(){return this._currentlySelectedOption}get value(){return this._value}set value(t){let e=this._value;this._value=t?.toString()??"",this.requestUpdate("value",e)}get origin(){return this.textInput}connectedCallback(){super.connectedCallback(),this.role="combobox"}willUpdate(t){t.has("value")&&(this.updateCurrentlySelectedOption(),this.searchTerm=this._currentlySelectedOption?.label??"",this.internals.setFormValue(this._value)),t.has("loading")&&this.overlayController.setIsLoading(this.loading),t.has("filterStrategy")&&(this._filterStrategy=this.createFilterStrategy()),super.willUpdate(t)}update(t){super.update(t),t.has("label")&&(this.label?(this.setAttribute("aria-label",this.label),this.title=this.label):(this.removeAttribute("aria-label"),this.title=""))}updated(t){super.updated(t),(t.has("filterStrategy")||t.has("searchTerm")||t.has("autoActivateFirst"))&&this.updateOverlayOptions(),this.updateValidity()}onActivateOption(t){this.isOpen&&t?this.activeOptionId=t.id:this.activeOptionId=null}onOverlayClose(){if(this.listHasVisualFocus=!1,this.activeOptionId=null,this.clearable&&""===this.searchTerm){let t=""!==this._value;this.value="",t&&this.dispatchChangeEvents()}else{let t=!1;if(!this.loading)for(let e of this.optionElements)if(this.searchTermEqualsLabel(e.label)&&this._value!==e.value&&!e.disabled){this.value=e.value,this.searchTerm=e.label,this.dispatchChangeEvents(),t=!0;break}!t&&this.hasSelection&&(this.searchTerm=this._currentlySelectedOption?.label??"")}}onSelect(t){t.disabled||(this.value=t.value,this.dispatchChangeEvents(),this.searchTerm=t.label,this.dispatchSearchInputEvent(),this.close())}onFocus(){this.isFocused=!0,this.open({onReady:()=>{this.overlayController.activateSelectedIndex()}}),this.dispatchEvent(new $h({bubbles:!1,cancelable:!1}))}onBlur(){this.isFocused=!1,this.close(),this.hasSelection||(this.searchTerm=""),this.dispatchEvent(new Oh({bubbles:!1,cancelable:!1}))}onClick(){this.open({onReady:()=>{this.overlayController.activateSelectedIndex()}})}onKeyDown(t){if(this.isOpen)if(t.ctrlKey)switch(t.code){case"KeyN":case"KeyP":this.listHasVisualFocus=!0,this.overlayController.setDisplayFocusOutline(!0),this.overlayController.onKeydown(t),this.overlayController.scrollActiveOptionIntoView();break;case"KeyY":{let e=this.overlayController.activeOption;e&&(t.preventDefault(),t.stopPropagation(),this.onSelect(e))}}else switch(t.code){case"Escape":t.preventDefault(),t.stopPropagation(),this.close();break;case"Enter":{let e=this.overlayController.activeOption;e&&(t.preventDefault(),t.stopPropagation(),this.onSelect(e))}break;case"ArrowUp":case"ArrowDown":case"Home":case"End":t.preventDefault(),t.stopPropagation(),this.listHasVisualFocus=!0,this.overlayController.setDisplayFocusOutline(!0),this.overlayController.onKeydown(t),this.overlayController.scrollActiveOptionIntoView();break;default:this.listHasVisualFocus=!1,this.overlayController.setDisplayFocusOutline(!1)}else switch(t.code){case"ArrowUp":t.preventDefault(),t.stopPropagation(),this.open({onReady:()=>{this.listHasVisualFocus=!0,this.overlayController.activateSelectedIndex(this.optionElements.length-1)}});break;case"ArrowDown":t.preventDefault(),t.stopPropagation(),this.open({onReady:()=>{this.listHasVisualFocus=!0,this.overlayController.activateSelectedIndex(0)}})}}onInput(t){t.stopPropagation(),this.open(),this.searchTerm=this.textInput.value,this.dispatchSearchInputEvent()}onOptionsSlotChange(){if(!this._value){let t=this.findDefaultOption();t&&(this.value=t.value)}let t=this.findSelectedOption();t&&(this.value=t.value),this.updateCurrentlySelectedOption(),this.updateOverlayOptions()}updateCurrentlySelectedOption(){let t=this._currentlySelectedOption;this._currentlySelectedOption=null;for(let t of this.optionElements)t.selected=t.value===this._value,t.selected&&(this._currentlySelectedOption=t);this.hasSelection=null!==this._currentlySelectedOption;let e=t?.value!==this._currentlySelectedOption?.value;t?.off("label-change",this.onCurrentOptionLabelChange),e&&!this.isFocused&&(this.searchTerm=this._currentlySelectedOption?.label??""),this._currentlySelectedOption?.on("label-change",this.onCurrentOptionLabelChange)}async updateOverlayOptions(){this._filteredOptions=this._filterStrategy.filter(this.searchTerm,this.optionElements,t=>t.label),await this.overlayController.setOptions(this._filteredOptions),this.autoActivateFirst&&this._filteredOptions.length>0&&this.searchTerm.length>0?this.overlayController.activateIndex(0):this.overlayController.resetActiveIndex()}render(){return j`
      ${this.renderOptionsSlot()}

      <ktg-text-input
        class="dropdown-autocomplete__input"
        autocomplete="off"
        .appearance=${this.appearance}
        .placeholder=${this.placeholder}
        .value=${this.searchTerm}
        .leadingIcon=${this.leadingIcon}
        .trailingIcon=${this.trailingIcon}
        .trailingIconButton=${this.trailingIconButton}
        .trailingIconLabel=${this.trailingIconLabel}
        .hideVisualFocus=${this.listHasVisualFocus}
        .readonly=${this.readonly}
        .disabled=${this.disabled}
        .error=${this.error}
        .ariaAutoComplete=${"list"}
        .ariaActiveDescendant=${this.activeOptionId}
        .ariaControls=${this.overlayController.overlayId}
        @input=${this.onInput}
        @change=${this.onInput}
        @focus=${this.onFocus}
        @blur=${this.onBlur}
        @click=${this.onClick}
        @keydown=${this.onKeyDown}
      ></ktg-text-input>
    `}createFilterStrategy(){switch(this.filterStrategy){case"auto":return new Ah;case"starts-with":return new zh;case"includes":return new Mh;default:return new Bh}}findSelectedOption(){return this.optionElements.find(t=>t.selected)??null}findDefaultOption(){return this.optionElements.find(t=>t.default)??null}searchTermEqualsLabel(t){return this.cleanString(this.searchTerm)===this.cleanString(t)}cleanString(t){return t.trim().toLowerCase()}dispatchChangeEvents(){this.dispatchEvent(new Th({cancelable:!1,bubbles:!0},this._value)),this.dispatchEvent(new Ih({cancelable:!1,bubbles:!0},this._value))}dispatchSearchInputEvent(){this.dispatchEvent(new Eh({cancelable:!1,bubbles:!0},this.searchTerm))}async updateValidity(){await this.textInput.updateComplete,this.internals.setValidity({valueMissing:this.required&&!this._value},"Please provide a value.",this.textInput.input)}};i(Nh,"KTGDropdownAutocompleteElement"),Nh.styles=Lh,Nh.shadowRootOptions={...gh.shadowRootOptions,delegatesFocus:!0},o([wt()],Nh.prototype,"isFocused",2),o([wt()],Nh.prototype,"listHasVisualFocus",2),o([wt()],Nh.prototype,"activeOptionId",2),o([kt({type:String,attribute:"leading-icon"})],Nh.prototype,"leadingIcon",2),o([kt({type:String,attribute:"trailing-icon"})],Nh.prototype,"trailingIcon",2),o([kt({type:Boolean,attribute:"trailing-icon-button"})],Nh.prototype,"trailingIconButton",2),o([kt({type:String,attribute:"trailing-icon-label"})],Nh.prototype,"trailingIconLabel",2),o([kt({type:String,attribute:!1})],Nh.prototype,"value",1),o([kt({type:String,attribute:"search-term"})],Nh.prototype,"searchTerm",2),o([kt({type:String,attribute:"filter-strategy"})],Nh.prototype,"filterStrategy",2),o([kt({type:Boolean,reflect:!0})],Nh.prototype,"clearable",2),o([kt({type:Boolean,reflect:!0,attribute:"auto-activate-first"})],Nh.prototype,"autoActivateFirst",2),o([kt({type:Boolean,reflect:!0})],Nh.prototype,"loading",2),o([Ct("ktg-text-input")],Nh.prototype,"textInput",2),Nh=o([ft("ktg-dropdown-autocomplete")],Nh);var Rh=[...ae,...dh,d`
    :host {
      display: none;
      background-color: var(--ktg-color-background-01);
    }

    :host(.dropdown-custom-overlay--open) {
      display: block;
    }

    :host(.dropdown-custom-overlay--rendered-at-top) {
      box-shadow: 0 -0.125rem 0.5rem rgba(var(--ktg-rgb-shadow), 0.1);
      clip-path: inset(-1rem -1rem 0 -1rem);
    }

    :host(.dropdown-custom-overlay--rendered-at-bottom) {
      box-shadow: 0 0.125rem 0.5rem rgba(var(--ktg-rgb-shadow), 0.1);
      clip-path: inset(0 -1rem -1rem -1rem);
    }

    .overlay {
      position: relative;
      height: 100%;
      max-height: inherit;
    }

    .overlay__scroll-container {
      overflow: auto;
      height: 100%;
      max-height: inherit;
    }

    .overlay__scrollbar {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      z-index: 10;
    }
  `],Ph=class extends mt{constructor(){super(...arguments),this.overlay=null,this.focusTrap=Kn(this,{allowOutsideClick:!0,returnFocusOnDeactivate:!0,tabbableOptions:{getShadowRoot:!0},escapeDeactivates:!1}),this.minWidthOfButton=!1,this.widthOfButton=!1,this.onKeydown=t=>{"Escape"===t.code&&(t.preventDefault(),t.stopPropagation(),this.overlay?.handle.close())}}connectedCallback(){super.connectedCallback(),this.slot="overlay",this.id="ktg-dropdown-custom-overlay-"+ ++Ph.idCounter,this.role="dialog",this.setAttribute("aria-modal","true"),this.addEventListener("keydown",this.onKeydown)}willUpdate(t){super.willUpdate(t),t.has("overlay")&&(this.overlay&&(t.has("minWidthOfButton")||t.has("widthOfButton"))&&this.overlay.positioningStrategy.withSameWidthAsOrigin(this.widthOfButton).withMinWidthOfOrigin(this.minWidthOfButton),this.classList.toggle("dropdown-custom-overlay--open",!!this.overlay))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydown)}async afterAttach(){try{this.focusTrap.activate()}catch{console.error("Couldn't activate focus trap. Please make sure you have at least one focusable element in your <ktg-dropdown-custom-overlay>")}}async beforeDetach(){this.focusTrap.deactivate(),this.overlay=null}render(){return j`
      <div class="overlay">
        <div
          class="overlay__scroll-container"
          id="${this.id}__scroll-container"
        >
          <slot></slot>
        </div>

        <ktg-scrollbar
          class="overlay__scrollbar"
          for=${this.id+"__scroll-container"}
        ></ktg-scrollbar>
      </div>
    `}setOverlay(t){this.overlay=t}};i(Ph,"KTGDropdownCustomOverlayElement"),Ph.idCounter=-1,Ph.styles=Rh,o([wt()],Ph.prototype,"overlay",2),o([kt({type:Boolean,reflect:!0,attribute:"min-width-of-button"})],Ph.prototype,"minWidthOfButton",2),o([kt({type:Boolean,reflect:!0,attribute:"width-of-button"})],Ph.prototype,"widthOfButton",2),Ph=o([ft("ktg-dropdown-custom-overlay")],Ph);var Fh=class extends CustomEvent{static{i(this,"KTGDropdownCustomOpenEvent")}constructor(t){super("open",t)}},Vh=class extends CustomEvent{static{i(this,"KTGDropdownCustomCloseEvent")}constructor(t){super("close",t)}},Kh=[...ae,...ne,d`
    :host {
      display: inline-block;
      width: auto;
      outline: 0;
    }

    /**
     * NOTE: because the focus isn't on the ktg-dropdown-button element, we
     * need to set the focus-outline color via a custom property
     */
    :host(:not([open]):focus-visible) {
      --ktg-dropdown-button-focus-outline-color: var(--ktg-color-focus);
    }

    :host(:not([open])[error]:focus-visible) {
      --ktg-dropdown-button-focus-outline-color: var(--ktg-color-danger);
    }

    .overlay {
      display: none;
    }
  `],Hh=class extends(md(mt)){constructor(){super(...arguments),this.internals=this.attachInternals(),this.overlay=null,this.handle=null,this.CONNECTED_POSITION_TOP={originX:"left",originY:"top",overlayX:"left",overlayY:"bottom"},this.CONNECTED_POSITION_BOTTOM={originX:"left",originY:"bottom",overlayX:"left",overlayY:"top"},this.CONNECTED_POSITIONS_AUTO=[this.CONNECTED_POSITION_TOP,this.CONNECTED_POSITION_BOTTOM],this.outlet=null,this.appearance="white",this.icon="",this.placeholder="",this.valueText="",this.overlayPosition="auto",this.isOpen=!1,this.onKeydown=t=>{if(!this.isOpen)switch(t.code){case"Enter":case"Space":case"ArrowDown":case"ArrowUp":t.preventDefault(),t.stopPropagation(),this.open()}},this.onButtonClick=()=>{this.isOpen||this.open()}}connectedCallback(){super.connectedCallback(),this.role="button",this.internals.ariaHasPopup="dialog",this.addEventListener("keydown",this.onKeydown),this.addEventListener("click",this.onButtonClick)}update(t){if(super.update(t),this.tabIndex=this.disabled?-1:0,this.label?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label"),t.has("isOpen")){let t=this.overlay?.id??"";this.setAttribute("aria-expanded",this.isOpen.toString()),this.setAttribute("aria-controls",t),this.setAttribute("aria-owns",t)}}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydown),this.removeEventListener("click",this.onButtonClick)}render(){return j`
      <ktg-dropdown-button
        .appearance=${this.appearance}
        .label=${this.label}
        .placeholder=${this.placeholder}
        .valueText=${this.valueText}
        .icon=${this.icon}
        ?disabled=${this.disabled}
        ?error=${this.error}
        ?readonly=${this.readonly}
        ?open=${this.isOpen}
        @click=${this.onButtonClick}
      >
      </ktg-dropdown-button>

      <slot
        class="overlay"
        name="overlay"
      ></slot>
    `}open(){if(this.handle)return this.handle;if(this.overlay=this.overlayElements[0],!this.overlay)throw new Error("No overlay element found.");let t=this.CONNECTED_POSITIONS_AUTO;switch(this.overlayPosition){case"top":t=[this.CONNECTED_POSITION_TOP];break;case"bottom":t=[this.CONNECTED_POSITION_BOTTOM]}let e=this.outlet??Me.OUTLETS.DEFAULT;return this.handle=this.overlayService.open({element:this.overlay,outlet:e,backdrop:{enabled:!0,transparent:!0},positioning:e=>new Fe(e).withOrigin(this).withMinWidthOfOrigin(this.overlay?.minWidthOfButton).withSameWidthAsOrigin(this.overlay?.widthOfButton).viewportMarginX(16).viewportMarginY(16).positions(t).shrinkToFit().afterRender(t=>{this.overlay?.classList.toggle("dropdown-custom-overlay--rendered-at-top","top"===t.relativePositionAndAlignment.position),this.overlay?.classList.toggle("dropdown-custom-overlay--rendered-at-bottom","bottom"===t.relativePositionAndAlignment.position)})}),this.handle.on("close",()=>{this.overlay&&this.appendChild(this.overlay),this.overlay=null,this.handle=null,this.isOpen=!1,this.dispatchEvent(new Vh({bubbles:!0,cancelable:!1}))}),this.isOpen=!0,this.dispatchEvent(new Fh({bubbles:!0,cancelable:!1})),this.handle}close(){this.handle?.close()}};function Gh(t,e){if(t.length!==e.length)return!1;let i=[...t].sort(),o=[...e].sort();for(let t=0;t<i.length;t++)if(i[t]!==o[t])return!1;return!0}i(Hh,"KTGDropdownCustomElement"),Hh.styles=Kh,o([De(Me)],Hh.prototype,"overlayService",2),o([Ee({context:Te,subscribe:!0}),kt({type:String})],Hh.prototype,"outlet",2),o([kt({type:String,reflect:!0})],Hh.prototype,"appearance",2),o([kt({type:String})],Hh.prototype,"icon",2),o([kt({type:String})],Hh.prototype,"placeholder",2),o([kt({type:String,attribute:"value-text"})],Hh.prototype,"valueText",2),o([kt({type:String,attribute:"overlay-position"})],Hh.prototype,"overlayPosition",2),o([kt({type:Boolean,reflect:!0,attribute:"open"})],Hh.prototype,"isOpen",2),o([Et({slot:"overlay",selector:"ktg-dropdown-custom-overlay"})],Hh.prototype,"overlayElements",2),Hh=o([ft("ktg-dropdown-custom")],Hh),i(Gh,"arraysContainSameValues");var Uh=class extends Event{constructor(t,e){super("input",t),this.selectedValues=e}static{i(this,"KTGDropdownMultiSelectInputEvent")}},Wh=class extends Event{constructor(t,e){super("change",t),this.selectedValues=e}static{i(this,"KTGDropdownMultiSelectChangeEvent")}},Yh=[...wh,d`
    .dropdown__pills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem;
      margin-top: 0.5rem;
    }
  `],qh=class extends Event{constructor(t,e){super("remove",t),this.value=e}static{i(this,"KTGDropdownPillRemoveEvent")}},jh=[...ae,...ne,d`
    .dropdown-pill {
      display: flex;
      border-radius: 2rem;
      align-items: center;
      padding-top: 0.125rem;
      padding-left: 0.375rem;
      padding-right: 0.375rem;
      padding-bottom: 0.125rem;
      gap: 0.25rem;
      user-select: none;
    }

    :host([appearance='grey']) .dropdown-pill {
      background-color: var(--ktg-color-neutral-01);
    }

    :host([appearance='white']) .dropdown-pill {
      background-color: var(--ktg-color-background-01);
    }

    :host([disabled]) .dropdown-pill,
    :host([readonly]) .dropdown-pill {
      background-color: var(--ktg-color-neutral-02);
    }

    :host([readonly]) .dropdown-pill {
      user-select: unset;
    }

    .dropdown-pill__text {
      color: var(--ktg-color-text);
      font-size: 0.875rem;
      line-height: 1rem;
      letter-spacing: 0.28px;
      text-wrap: nowrap;
    }

    :host([disabled]) .dropdown-pill__text {
      color: var(--ktg-color-neutral-04);
    }

    .dropdown-pill__remove-button {
      display: flex;
      cursor: pointer;
      padding: 0;
      border: 0;
      margin: 0;
      background-color: transparent;
      color: var(--ktg-color-link);
    }

    .dropdown-pill__remove-button:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
    }

    :host([disabled]) .dropdown-pill__remove-button {
      cursor: default;
      color: var(--ktg-color-neutral-04);
    }
  `],Zh=class extends mt{constructor(){super(...arguments),this.appearance="grey",this.optionValue="",this.optionLabel="",this.disabled=!1,this.readonly=!1,this.pillRemoveLabel=null,this.compiledPillRemoveLabel=null}willUpdate(t){super.willUpdate(t),t.has("pillRemoveLabel")&&(this.pillRemoveLabel?this.compiledPillRemoveLabel=this.pillRemoveLabel.replace(/{value}/g,this.optionValue).replace(/{label}/g,this.optionLabel):this.compiledPillRemoveLabel=null)}onRemove(t){t.preventDefault(),t.stopPropagation(),this.dispatchEvent(new qh({bubbles:!1,cancelable:!1},this.optionValue))}render(){return j`
      <div class="dropdown-pill">
        <span class="dropdown-pill__text">
          <slot></slot>
        </span>

        ${this.renderRemoveButton()}
      </div>
    `}renderRemoveButton(){return this.readonly?j``:j`
      <button
        class="dropdown-pill__remove-button"
        type="button"
        @click=${this.onRemove}
        @keydown=${t=>{t.stopPropagation()}}
        ?disabled=${this.disabled||this.readonly}
        aria-label=${fi(this.compiledPillRemoveLabel)}
        title=${fi(this.compiledPillRemoveLabel)}
      >
        <ktg-icon name="close"></ktg-icon>
      </button>
    `}};i(Zh,"KTGDropdownPillElement"),Zh.styles=jh,o([kt({type:String,reflect:!0})],Zh.prototype,"appearance",2),o([kt({type:String,attribute:"option-value"})],Zh.prototype,"optionValue",2),o([kt({type:String,attribute:"option-label"})],Zh.prototype,"optionLabel",2),o([kt({type:Boolean,reflect:!0})],Zh.prototype,"disabled",2),o([kt({type:Boolean,reflect:!0})],Zh.prototype,"readonly",2),o([kt({type:String,attribute:"pill-remove-label"})],Zh.prototype,"pillRemoveLabel",2),Zh=o([ft("ktg-dropdown-pill")],Zh);var Xh=class extends fh{constructor(){super(...arguments),this.selectedValuesBeforeOpen=[],this.displayValue="",this.selectedText="",this.noSelectionText=null,this._selectedValues=[],this._selectedOptions=[],this.withPills=!1,this.pillRemoveLabel=null,this.onReset=t=>{t.defaultPrevented||(this.selectedValues=this.optionElements.filter(t=>t.default).map(t=>t.value))},this.onBeforeOpen=t=>{t.multiSelect=!0},this.onOverlayOpen=()=>{this.selectedValuesBeforeOpen=[...this.selectedValues]},this.onSelect=t=>{super.onSelect(t),t.selected=!t.selected,t.selected?this.selectValue(t.value):this.unselectValue(t.value),this.dispatchInputEvent(),this.focus()},this.onOverlayClose=()=>{!Gh(this.selectedValuesBeforeOpen,this.selectedValues)&&this.dispatchChangeEvent()}}set selectedValues(t){let e=this._selectedValues;this._selectedValues=Array.from(new Set(t)),this._selectedOptions=this.optionElements.filter(t=>this._selectedValues.includes(t.value)),this.requestUpdate("selectedValues",e)}get selectedValues(){return this._selectedValues}willUpdate(t){t.has("selectedValues")&&(this.hasSelection=this.selectedValues.length>0,this.updateOptions(),this.updateFormValue()),(t.has("selectedValues")||t.has("selectedText"))&&this.updateDisplayValue(),super.willUpdate(t)}updated(t){super.updated(t),this.updateValidity()}updateValidity(){this.internals.setValidity({valueMissing:this.required&&!this.hasSelection},"Please select at least one item from the list.",this.origin)}updateDisplayValue(){if(this.hasSelection){let t=this.selectedValues.length,e=this.selectedText.replace(/{selectedCount}/g,t.toString());this.displayValue=e}}updateFormValue(){let t=new FormData;for(let e of this.selectedValues)t.append(this.name,e);this.internals.setFormValue(t)}updateOptions(){for(let t of this.optionElements)t.selected=this.selectedValues.includes(t.value)}selectValue(t){this.selectedValues=this.selectedValues.concat(t)}unselectValue(t){this.selectedValues=this.selectedValues.filter(e=>e!==t)}dispatchInputEvent(){this.dispatchEvent(new Uh({bubbles:!0,cancelable:!1},this.selectedValues))}dispatchChangeEvent(){this.dispatchEvent(new Wh({bubbles:!0,cancelable:!1},this.selectedValues))}onOptionsSlotChange(){super.onOptionsSlotChange();for(let t of this.optionElements)(t.selected||t.default)&&this.selectValue(t.value);this.updateOptions()}onPillRemove(t){this.unselectValue(t.value),this.dispatchInputEvent(),this.dispatchChangeEvent()}render(){return j`${this.renderOptionsSlot()} ${this.renderButton()}
    ${this.renderPills()}`}renderValueText(){return this.hasSelection?this.displayValue:this.noSelectionText?this.noSelectionText:""}renderPills(){return this.withPills&&this.selectedValues.length>0?j`
        <div class="dropdown__pills">
          ${bd(this._selectedOptions,t=>j`
              <ktg-dropdown-pill
                .appearance=${this.appearance}
                .optionValue=${t.value}
                .optionLabel=${t.label}
                .pillRemoveLabel=${this.pillRemoveLabel}
                .readonly=${this.readonly}
                .disabled=${this.disabled}
                @remove=${this.onPillRemove}
              >
                ${t.label}
              </ktg-dropdown-pill>
            `)}
        </div>
      `:j``}};i(Xh,"KTGDropdownMultiSelectElement"),Xh.styles=Yh,o([wt()],Xh.prototype,"displayValue",2),o([kt({type:String,attribute:"selected-text"})],Xh.prototype,"selectedText",2),o([kt({type:String,attribute:"no-selection-text"})],Xh.prototype,"noSelectionText",2),o([kt({type:Array,attribute:!1})],Xh.prototype,"selectedValues",1),o([kt({type:Boolean,reflect:!0,attribute:"with-pills"})],Xh.prototype,"withPills",2),o([kt({type:String,attribute:"pill-remove-label"})],Xh.prototype,"pillRemoveLabel",2),Xh=o([ft("ktg-dropdown-multi-select")],Xh);var Jh=[...ae,...ne,d`
    :host {
      color: var(--ktg-field-text-color, var(--ktg-color-danger));
      display: block;
    }

    .field-error {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      flex-wrap: nowrap;
      padding-left: 0.5rem;
    }

    @media screen and (min-width: ${Ke}px) {
      .field-error {
        padding-left: 1rem;
      }
    }

    .field-error__icon-wrapper {
      position: relative;
      width: 0.75rem;
      height: 0.75rem;
      align-self: flex-start;
      flex-shrink: 0;
    }

    .field-error__icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .field-error__text {
      line-height: 120%;
      font-size: 0.75rem;
    }
  `],Qh=class extends mt{constructor(){super(...arguments),this.icon="warning"}connectedCallback(){super.connectedCallback(),this.checkAndSetImplicitSlot()}checkAndSetImplicitSlot(){this.closest("ktg-field")&&(this.slot="error")}render(){return j`
      <div class="field-error">
        <div class="field-error__icon-wrapper">
          ${si(this.icon,()=>j`
              <ktg-icon
                class="field-error__icon"
                name=${fi(""!==this.icon?this.icon:null)}
                size="small"
              ></ktg-icon>
            `)}
        </div>

        <span class="field-error__text">
          <slot></slot>
        </span>
      </div>
    `}};i(Qh,"KTGFieldErrorElement"),Qh.styles=Jh,o([kt({type:String})],Qh.prototype,"icon",2),Qh=o([ft("ktg-field-error")],Qh);var tu=[...ae,...ne,d`
    :host {
      display: block;
      color: var(--ktg-field-text-color, var(--ktg-color-neutral-05));
    }

    .field-hint {
      display: flex;
      align-items: center;
      font-size: 0.75rem;
      line-height: 120%;
      padding-left: 0.5rem;
    }

    @media screen and (min-width: ${Ke}px) {
      .field-hint {
        padding-left: 1rem;
      }
    }
  `],eu=class extends mt{connectedCallback(){super.connectedCallback(),this.checkAndSetImplicitSlot()}checkAndSetImplicitSlot(){this.closest("ktg-field")&&(this.slot="hint")}render(){return j`
      <div class="field-hint">
        <slot></slot>
      </div>
    `}};i(eu,"KTGFieldHintElement"),eu.styles=tu,eu=o([ft("ktg-field-hint")],eu);var iu=[...ae,d`
    :host {
      display: block;
      width: 100%;
    }

    .field {
    }

    .field--is-disabled {
      --ktg-field-text-color: var(--ktg-color-neutral-04);
    }

    .field__label {
      padding-bottom: 0.5rem;
      padding-left: 0.5rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.375rem;
    }

    @media screen and (min-width: ${Ke}px) {
      .field__label {
        padding-left: 1rem;
      }
    }

    .field--is-disabled .field__label {
      cursor: default;
    }

    .field__input {
      margin-bottom: 0.25rem;
    }

    .field__hints {
      min-height: 0.9rem;
    }

    .field__hint {
    }

    .field__error {
    }
  `],ou=class extends Event{static{i(this,"KTGLabelClickEvent")}constructor(t){super("label-click",t)}},nu=[...ae,...ne,d`
    :host {
      display: inline-flex;
    }

    .field-label {
      display: inline-block;
      font-size: 1rem;
      line-height: 1.2;
      color: var(--ktg-field-text-color, var(--ktg-color-text));
      touch-action: manipulation;
      user-select: none;
    }
  `],ru=["ktg-checkbox","ktg-date-input","ktg-dropdown","ktg-dropdown-autocomplete","ktg-dropdown-multi-select","ktg-dropdown-custom","ktg-file-input","ktg-number-input","ktg-phone-input","ktg-radio","ktg-range-slider","ktg-text-area","ktg-text-input","ktg-toggle"],au=class extends mt{constructor(){super(...arguments),this.currentTarget=null,this.for=""}connectedCallback(){super.connectedCallback(),this.checkAndSetImplicitSlot(),this.id=this.hasAttribute("id")?this.id:"ktg-label-"+ ++au.idCounter}checkAndSetImplicitSlot(){(this.closest("ktg-labelled-choice")||this.closest("ktg-field"))&&(this.slot="label")}updated(t){super.updated(t),t.has("for")&&this.updateLabel()}async updateLabel(){await Ie();let t=this.currentTarget;this.currentTarget=document.getElementById(this.for)?.closest(ru.join(", ")),this.currentTarget&&t!==this.currentTarget&&(t&&(t.labelledBy=null),this.currentTarget&&(this.currentTarget.labelledBy=this.id))}onClick(t){t.stopImmediatePropagation(),t.stopPropagation(),this.currentTarget?.onLabelClick(),this.dispatchEvent(new ou({bubbles:!0,cancelable:!1}))}render(){return j`
      <span
        class="field-label"
        @click=${this.onClick}
      >
        <slot></slot>
      </span>
    `}};i(au,"KTGLabelElement"),au.idCounter=-1,au.styles=nu,o([kt({type:String})],au.prototype,"for",2),au=o([ft("ktg-label")],au);var su=[...ae,d`
    :host {
      display: inline-block;
      height: var(--ktg-icon-size, 1rem);
      width: var(--ktg-icon-size, 1rem);
    }

    :host(:focus-visible) {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: 0.0625rem;
    }

    .tooltip-button {
      color: var(--ktg-field-text-color, var(--ktg-color-link));
      height: inherit;
      width: inherit;
      cursor: pointer;
      display: flex;
    }
  `],lu=class extends mt{constructor(){super(...arguments),this.label="",this.open=!1}connectedCallback(){super.connectedCallback(),this.slot=this.hasAttribute("slot")?this.slot:"tooltip",this.role=this.hasAttribute("role")?this.role:"button",this.tabIndex=this.hasAttribute("tabindex")?this.tabIndex:0}willUpdate(t){t.has("label")&&(this.setAttribute("aria-label",this.label),this.setAttribute("title",this.label))}render(){return j`
      <div class="tooltip-button">
        <ktg-icon name=${this.renderIconName()}></ktg-icon>
      </div>
    `}renderIconName(){return this.open?"info-active":"info"}};i(lu,"KTGTooltipButtonElement"),lu.styles=su,o([kt({type:String})],lu.prototype,"label",2),o([kt({type:Boolean,reflect:!0})],lu.prototype,"open",2),lu=o([ft("ktg-tooltip-button")],lu);var cu=[d`
    .ktg-cdk-modal-panel {
      display: flex;
      justify-content: center;
      overflow: clip;
    }

    .ktg-cdk-modal-panel--default-outlet {
      padding-top: var(--ktg-overlay-y-offset-small);
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 1rem;
      align-items: flex-end;
    }

    .ktg-cdk-modal-panel--custom-outlet {
      padding-top: 0;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 0;
      align-items: center;
    }

    @media screen and (min-width: ${Ke}px) {
      .ktg-cdk-modal-panel--default-outlet {
        align-items: center;
        padding-top: var(--ktg-overlay-y-offset-large);
      }
    }
  `],du=[d`
    .ktg-modal-title {
      font-size: 1.25rem;
      font-family: var(--ktg-font-sans-serif);
      font-weight: var(--ktg-font-weight-default);
      font-style: normal;
      margin-top: 1rem;
    }

    .ktg-modal-title:first-child {
      margin-top: 0;
    }

    .ktg-modal-text {
      font-family: var(--ktg-font-sans-serif);
      font-weight: var(--ktg-font-weight-default);
      font-size: 0.875rem;
      line-height: 120%;
    }
  `];re(cu),re(du);var hu=class t extends mt{constructor(){super(...arguments),this.panelClasses="ktg-cdk-modal-panel",this.focusTrap=Kn(this,{allowOutsideClick:!0,returnFocusOnDeactivate:!0,tabbableOptions:{getShadowRoot:!0},escapeDeactivates:!1}),this.animations=new Qt(this),this.handle=null,this._isOpen=!1,this.outlet=null,this.openDirection="to-top",this.closeDirection="to-bottom",this.onKeydownHandler=this.onKeydown.bind(this)}static{i(this,"KTGCdkModalElement")}static{this.idCounter=-1}get isOpen(){return this._isOpen}connectedCallback(){super.connectedCallback(),this.id=this.hasAttribute("id")?this.id:this.createUniqueId(),this.addEventListener("keydown",this.onKeydownHandler)}update(t){super.update(t),this.classList.toggle("ktg-cdk-modal--in-custom-outlet",(this.handle&&"default"!==this.handle?.overlay.outlet.name)??!1)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydownHandler)}async onAttach(){this.style.display="block",this._isOpen=!0}async afterAttach(){try{this.focusTrap.activate()}catch{}this.focusAutoFocusElement()}focusAutoFocusElement(){let t=this.querySelector("[autofocus]");t&&(t.focus(),Ht.scrollIntoView(t,{block:"nearest",inline:"nearest"}))}async animateIn(){await this.animations.animateIn()}async animateOut(){await this.animations.animateOut()}async beforeDetach(){try{this.focusTrap.deactivate()}catch{}}async onDetach(){this.handle=null,this.style.display="",this._isOpen=!1}onKeydown(t){"Escape"===t.code&&(t.preventDefault(),this.dismiss())}createUniqueId(){return"ktg-cdk-modal-"+ ++t.idCounter}dismiss(){this.close(),this.dispatchDismissEvent()}open(t){if(this.handle)return this.handle;this.animations.setAnimateInDirection(t?.animationDirection??this.openDirection);let e=t?.outlet??this.outlet??void 0,i=[this.panelClasses];return e&&"default"!==e?i.push("ktg-cdk-modal-panel--custom-outlet"):i.push("ktg-cdk-modal-panel--default-outlet"),this.handle=this.overlayService.open({element:this,panel:{additionalClasses:i.join(" ")},outlet:e,backdrop:{enabled:!0,sharedKey:"modal",blur:!0,closeOnClick:!1}}),this.handle.on("close",()=>{this.dispatchCloseEvent()}),this.handle.on("backdropClick",()=>{this.dismiss()}),this.handle}close(t){this.animations.setAnimateOutDirection(t?.animationDirection??this.closeDirection),this.handle?.close()}};o([De(Me)],hu.prototype,"overlayService",2),o([wt()],hu.prototype,"handle",2),o([wt()],hu.prototype,"_isOpen",2),o([kt({type:String})],hu.prototype,"outlet",2),o([kt({type:String,attribute:"open-direction"})],hu.prototype,"openDirection",2),o([kt({type:String,attribute:"close-direction"})],hu.prototype,"closeDirection",2);var uu=hu,pu={Close:"close",Dismiss:"dismiss"},gu=class extends Event{static{i(this,"KTGCdkModalCloseEvent")}constructor(t){super(pu.Close,t)}},mu=class extends Event{static{i(this,"KTGCdkModalDismissEvent")}constructor(t){super(pu.Dismiss,t)}},vu={...pu,NextSlide:"next-slide",PreviousSlide:"previous-slide"},fu=class extends gu{static{i(this,"KTGLightboxCloseEvent")}},bu=class extends mu{static{i(this,"KTGLightboxDismissEvent")}},yu=class extends Event{static{i(this,"KTGLightboxNextSlideEvent")}constructor(t){super(vu.NextSlide,t)}},ku=class extends Event{static{i(this,"KTGLightboxPreviousSlideEvent")}constructor(t){super(vu.PreviousSlide,t)}},wu=[...ae,d`
    :host {
      position: relative;
      display: none;
      background-color: var(--ktg-color-background-01);
      max-width: calc(min(${Ue}px, 100cqw) - 1rem);
      max-height: calc(100cqh - var(--ktg-overlay-y-offset-small) - 2rem);
    }

    :host(.ktg-cdk-modal--in-custom-outlet) {
      max-width: calc(min(${Ue}px, 100cqw) - 1rem);
      max-height: calc(100cqh - 2rem);
    }

    @container (min-width: ${Ke}px) {
      :host {
        max-width: calc(min(${Ue}px, 100cqw) - 4rem);
        max-height: calc(100cqh - var(--ktg-overlay-y-offset-large) - 4rem);
      }

      :host(.ktg-cdk-modal--in-custom-outlet) {
        max-width: calc(min(${Ue}px, 100cqw) - 1rem);
        max-height: calc(100cqh - 2rem);
      }
    }

    .lightbox-slide {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1.5rem;
      color: var(--ktg-color-text);
    }

    .lightbox-slide__header {
      display: flex;
      justify-content: flex-end;
    }

    .lightbox-slide__close-button {
      display: flex;
      border: none;
      background-color: transparent;
      color: var(--ktg-color-link);
      cursor: pointer;
    }

    .lightbox-slide__close-button:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: 0.125rem;
    }

    .lightbox-slide__image {
      overflow: hidden;
    }
  `],_u=[...ae,d`
    :host {
      width: 100%;
      font-size: 0.75rem;
      line-height: 0.875;
    }

    .lightbox-navigation {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    .lightbox-navigation__button {
      display: flex;
      background-color: transparent;
      color: var(--ktg-color-link);
      border: none;
      cursor: pointer;
    }

    .lightbox-navigation__button:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: 0.125rem;
    }

    .lightbox-navigation__text {
      color: var(--ktg-color-neutral-05);
    }
  `],xu=class extends mt{constructor(){super(...arguments),this.currentIndex=0,this.maxIndex=0,this.previousButtonLabel="",this.ofLabel="",this.nextButtonLabel=""}dispatchNextSlide(){this.dispatchEvent(new yu({bubbles:!0,cancelable:!1}))}dispatchPreviousSlide(){this.dispatchEvent(new ku({bubbles:!0,cancelable:!1}))}render(){return j`
      <div class="lightbox-navigation">
        <button
          class="lightbox-navigation__button button-previous"
          type="button"
          @click=${this.dispatchPreviousSlide}
          aria-label=${this.previousButtonLabel}
          title=${this.previousButtonLabel}
        >
          <ktg-icon name="long-arrow-left"></ktg-icon>
        </button>

        <div class="lightbox-navigation__text">
          <span class="lightbox-navigation__index-current">
            ${this.currentIndex+1}
          </span>

          <span class="lightbox-navigation__index-text-filler">
            ${this.ofLabel}
          </span>

          <span class="lightbox-navigation__index-max">
            ${this.maxIndex+1}
          </span>
        </div>

        <button
          class="lightbox-navigation__button button-next"
          type="button"
          @click=${this.dispatchNextSlide}
          aria-label=${this.nextButtonLabel}
          title=${this.nextButtonLabel}
        >
          <ktg-icon name="long-arrow-right"></ktg-icon>
        </button>
      </div>
    `}};i(xu,"KTGLightboxNavigationElement"),xu.styles=_u,o([kt({type:Number,attribute:!1})],xu.prototype,"currentIndex",2),o([kt({type:Number,attribute:!1})],xu.prototype,"maxIndex",2),o([kt({type:String,attribute:!1})],xu.prototype,"previousButtonLabel",2),o([kt({type:String,attribute:!1})],xu.prototype,"ofLabel",2),o([kt({type:String,attribute:!1})],xu.prototype,"nextButtonLabel",2),xu=o([ft("ktg-lightbox-navigation")],xu);var Cu=[...ae,d`
    :host {
      display: none;
    }
  `],Su=[...ae,d`
    :host {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    ::slotted(img) {
      width: auto !important;
      max-width: 100%;
      max-height: 100%;
    }
  `],Eu=class extends mt{constructor(){super(...arguments),this.describedById=null,this.image=null}connectedCallback(){super.connectedCallback(),this.slot="image"}setDescribedBy(t){this.describedById=t}onSlotChange(){this.images.length>0&&(this.image=this.images[0],this.describedById&&this.image.setAttribute("aria-describedby",this.describedById))}render(){return j`<slot @slotchange=${this.onSlotChange}></slot>`}};i(Eu,"KTGLightboxImageElement"),Eu.styles=Su,o([Et({selector:"img",flatten:!0})],Eu.prototype,"images",2),Eu=o([ft("ktg-lightbox-image")],Eu);var Tu=[...ae,d`
    .lightbox-text__outer {
      display: flex;
    }

    .lightbox-text__inner {
      flex-grow: 1;
      width: 0;
      font-size: 0.875rem;
      line-height: 1rem;
    }
  `],Iu=class extends mt{connectedCallback(){super.connectedCallback(),this.id=this.hasAttribute("id")?this.id:"ktg-lightbox-text-"+ ++Iu.idCounter,this.slot="text"}render(){return j`
      <div class="lightbox-text__outer">
        <div class="lightbox-text__inner">
          <slot></slot>
        </div>
      </div>
    `}};i(Iu,"KTGLightboxTextElement"),Iu.idCounter=-1,Iu.styles=Tu,Iu=o([ft("ktg-lightbox-text")],Iu);var $u=class extends mt{onImageSlotChange(){this.image||(this.image=this.imageElements[0],this.updateImageDescribedBy())}onTextSlotChange(){this.text||(this.text=this.textElements[0],this.updateImageDescribedBy())}updateImageDescribedBy(){this.image&&this.text&&this.image.setDescribedBy(this.text.id)}render(){return j`
      <div class="lightbox-slide">
        <slot
          name="image"
          @slotchange=${this.onImageSlotChange}
        ></slot>

        <slot
          name="text"
          @slotchange=${this.onTextSlotChange}
        ></slot>
      </div>
    `}};i($u,"KTGLightboxSlideElement"),$u.styles=Cu,o([Et({slot:"image",selector:"ktg-lightbox-image",flatten:!0})],$u.prototype,"imageElements",2),o([Et({slot:"text",selector:"ktg-lightbox-text",flatten:!0})],$u.prototype,"textElements",2),$u=o([ft("ktg-lightbox-slide")],$u);var Ou=class extends uu{constructor(){super(...arguments),this.currentIndex=0,this.maxIndex=0,this.currentSlide=null,this.previousButtonLabel="Vorheriges Bild",this.ofLabel="von",this.nextButtonLabel="Nächstes Bild",this.closeButtonLabel="Schliessen"}connectedCallback(){super.connectedCallback(),this.role="dialog",this.setAttribute("aria-modal","true")}willUpdate(t){super.update(t),this.maxIndex=this.slides.length-1,this.currentSlide=this.slides[this.currentIndex]}async onAttach(){super.onAttach(),this.style.display="flex"}nextSlide(){this.currentIndex=this.currentIndex+1,this.currentIndex>this.maxIndex&&(this.currentIndex=0)}previousSlide(){this.currentIndex=this.currentIndex-1,this.currentIndex<0&&(this.currentIndex=this.maxIndex)}onSlotChange(){this.requestUpdate()}onKeydown(t){switch(super.onKeydown(t),t.code){case"ArrowLeft":t.preventDefault(),this.previousSlide();break;case"ArrowRight":t.preventDefault(),this.nextSlide()}}render(){return j`
      <slot @slotchange=${this.onSlotChange}></slot>

      <div class="lightbox-slide">
        <div class="lightbox-slide__header">
          <button
            class="lightbox-slide__close-button"
            type="button"
            @click=${this.dismiss}
            aria-label=${this.closeButtonLabel}
          >
            <ktg-icon name="close"></ktg-icon>
          </button>
        </div>

        <div class="lightbox-slide__image">${this.currentSlide?.image}</div>

        ${si(this.maxIndex>0,()=>j`
            <ktg-lightbox-navigation
              .currentIndex=${this.currentIndex}
              .maxIndex=${this.maxIndex}
              .previousButtonLabel=${this.previousButtonLabel}
              .ofLabel=${this.ofLabel}
              .nextButtonLabel=${this.nextButtonLabel}
              @next-slide=${this.nextSlide}
              @previous-slide=${this.previousSlide}
            ></ktg-lightbox-navigation>
          `)}

        <div class="lightbox-slide__text">${this.currentSlide?.text}</div>
      </div>
    `}dispatchCloseEvent(){this.dispatchEvent(new fu({bubbles:!0,cancelable:!1}))}dispatchDismissEvent(){this.dispatchEvent(new bu({bubbles:!0,cancelable:!1}))}};i(Ou,"KTGLightboxElement"),Ou.styles=wu,o([wt()],Ou.prototype,"currentIndex",2),o([wt()],Ou.prototype,"maxIndex",2),o([wt()],Ou.prototype,"currentSlide",2),o([kt({type:String,attribute:"previous-button-label"})],Ou.prototype,"previousButtonLabel",2),o([kt({type:String,attribute:"of-label"})],Ou.prototype,"ofLabel",2),o([kt({type:String,attribute:"next-button-label"})],Ou.prototype,"nextButtonLabel",2),o([kt({type:String,attribute:"close-button-label"})],Ou.prototype,"closeButtonLabel",2),o([Et({selector:"ktg-lightbox-slide",flatten:!0})],Ou.prototype,"slides",2),Ou=o([ft("ktg-lightbox")],Ou);var Lu=class{open(t){return console.warn("KTGLightboxService.open is deprecated. Use the KTGLightboxElement's open method instead."),t.open()}openImageElement(t){let e=document.createElement("ktg-lightbox"),i=document.createElement("ktg-lightbox-slide"),o=document.createElement("ktg-lightbox-image");return o.appendChild(t),i.appendChild(o),e.appendChild(i),e.open()}};i(Lu,"KTGLightboxService"),Lu=o([Le],Lu);var Du=[...ae,d`
    :host {
      display: block;
    }

    .tooltip-image {
      display: block;
      position: relative;
      background: transparent;
      border: 0;
      cursor: pointer;
    }

    .tooltip-image:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
    }

    .tooltip-image__image {
      display: flex;
    }

    .tooltip-image__image ::slotted(*) {
      width: 100%;
    }

    .tooltip-image__overlay {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
    }

    .tooltip-image__overlay-background {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(var(--ktg-rgb-text), 0.2);
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }

    .tooltip-image:hover .tooltip-image__overlay-background,
    .tooltip-image:focus-visible .tooltip-image__overlay-background {
      opacity: 1;
    }

    @media (pointer: coarse) {
      .tooltip-image__overlay-background {
        display: none;
      }
    }

    .tooltip-image__icon-wrapper {
      position: absolute;
      display: flex;
      justify-content: flex-end;
      right: 0;
      bottom: 0;
      padding-right: 1rem;
      padding-bottom: 1rem;
      transform: translateY(100%);
      transition: transform 0.25s ease-out;
    }

    @media (prefers-reduced-motion: reduce) {
      .tooltip-image__icon-wrapper {
        transition: none;
      }
    }

    .tooltip-image:hover .tooltip-image__icon-wrapper,
    .tooltip-image:focus-visible .tooltip-image__icon-wrapper {
      transform: none;
    }

    @media (pointer: coarse) {
      .tooltip-image__icon-wrapper {
        transform: none;
      }
    }

    .tooltip-image__icon {
      display: flex;
      background-color: var(--ktg-color-neutral-01);
      padding: 0.25rem;
      color: var(--ktg-color-link);
    }

    @media (pointer: coarse) {
      .tooltip-image__icon {
        box-shadow: 0 0 1rem rgba(var(--ktg-rgb-shadow), 0.1);
      }
    }
  `],Au=class extends mt{constructor(){super(...arguments),this.image=null}focus(t){this.button.focus(t)}onSlotChange(){let t=this.images[0]||null;t instanceof HTMLImageElement&&(this.image=t)}onClick(){if(this.image){let t=this.image.cloneNode();this.lightboxService.openImageElement(t).on("close",()=>{this.focus()})}}render(){return j`
      <button
        class="tooltip-image"
        type="button"
        @click=${this.onClick}
      >
        <span class="tooltip-image__image">
          <slot @slotchange=${this.onSlotChange}></slot>
        </span>

        <span class="tooltip-image__overlay">
          <span class="tooltip-image__overlay-background"></span>

          <span class="tooltip-image__icon-wrapper">
            <span class="tooltip-image__icon">
              <ktg-icon name="scale"></ktg-icon>
            </span>
          </span>
        </span>
      </button>
    `}};i(Au,"KTGTooltipImageElement"),Au.styles=Du,o([De(Lu)],Au.prototype,"lightboxService",2),o([Et({flatten:!0})],Au.prototype,"images",2),o([Ct(".tooltip-image")],Au.prototype,"button",2),Au=o([ft("ktg-tooltip-image")],Au);var Mu=class extends Yn{static{i(this,"KTGTooltipCloseEvent")}},Bu=class extends qn{static{i(this,"KTGTooltipDismissEvent")}},zu=[...ae,...jn,d`
    :host {
      width: 100%;
      max-width: 12.5rem;
    }

    .tooltip {
      padding-top: 1.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 1.5rem;
    }

    .tooltip__content {
      font-size: 0.75rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .tooltip__content ::slotted(ktg-link) {
      align-self: flex-end;
    }
  `],Nu=class extends Gn{willUpdate(t){super.willUpdate(t),t.has("isOpen")&&this.trigger instanceof lu&&(this.trigger.open=this.isOpen)}render(){return j`
      <div class="tooltip ktg-cdk-popover">
        <div class="tooltip-arrow ktg-cdk-popover-arrow"></div>
        <div class="tooltip__content">
          <slot></slot>
        </div>
      </div>
    `}createId(){return"ktg-tooltip-"+ ++Nu.idCounter}onTriggerKeydown(t){switch(t.code){case"Enter":case"Space":t.preventDefault(),this.toggleOpen();break;case"Escape":this.onEscape(t)}}dispatchCloseEvent(){this.dispatchEvent(new Mu({bubbles:!0,cancelable:!1}))}dispatchDismissEvent(){this.dispatchEvent(new Bu({bubbles:!0,cancelable:!1}))}};i(Nu,"KTGTooltipElement"),Nu.styles=zu,Nu=o([ft("ktg-tooltip")],Nu);var Ru=class extends mt{constructor(){super(...arguments),this.hasError=!1,this.isDisabled=!1,this.isReadonly=!1,this.currentInput=null,this.onErrorStateChange=t=>{this.hasError=t},this.onDisabledStateChange=t=>{this.isDisabled=t},this.onReadonlyStateChange=t=>{this.isReadonly=t}}onInputSlotChange(){this.inputs.length>0&&(this.currentInput&&(this.currentInput.off("error",this.onErrorStateChange),this.currentInput.off("disabled",this.onDisabledStateChange),this.currentInput.off("readonly",this.onReadonlyStateChange)),this.currentInput=this.inputs[0],this.hasError=this.currentInput.error,this.isDisabled=this.currentInput.disabled,this.currentInput.on("error",this.onErrorStateChange),this.currentInput.on("disabled",this.onDisabledStateChange),this.currentInput.on("readonly",this.onReadonlyStateChange))}render(){return j`
      <div
        class=${ai({field:!0,"field--has-error":this.hasError,"field--is-disabled":this.isDisabled,"field--is-readonly":this.isReadonly})}
      >
        <div class="field__label">
          <slot name="label"></slot>
          <slot name="tooltip"></slot>
        </div>

        <div class="field__input">
          <slot
            name="input"
            @slotchange=${this.onInputSlotChange}
          ></slot>
        </div>

        <div class="field__hints">
          <div class="field__hint">
            <slot name="hint"></slot>
          </div>

          <div class="field__error">
            <slot name="error"></slot>
          </div>
        </div>
      </div>
    `}};i(Ru,"KTGFieldElement"),Ru.styles=iu,o([wt()],Ru.prototype,"hasError",2),o([wt()],Ru.prototype,"isDisabled",2),o([wt()],Ru.prototype,"isReadonly",2),o([wt()],Ru.prototype,"currentInput",2),o([Et({slot:"input"})],Ru.prototype,"inputs",2),Ru=o([ft("ktg-field")],Ru);var Pu="ktg-file-input-disabled-context",Fu="ktg-file-input-error-context",Vu=[...ae,...ne,d`
    .file-input-hint {
      font-size: 0.75rem;
      line-height: 120%;
      color: var(--ktg-color-neutral-05);
      user-select: none;
    }

    :host([disabled]) .file-input-hint {
      color: var(--ktg-color-neutral-04);
    }
  `],Ku=class extends mt{constructor(){super(...arguments),this.disabled=!1}connectedCallback(){super.connectedCallback(),this.slot="hint"}render(){return j`
      <p class="file-input-hint">
        <slot></slot>
      </p>
    `}};i(Ku,"KTGFileInputHintElement"),Ku.styles=Vu,o([Ee({context:Pu,subscribe:!0}),kt({type:Boolean,reflect:!0})],Ku.prototype,"disabled",2),Ku=o([ft("ktg-file-input-hint")],Ku);var Hu=[...ae,...ne,d`
    .file-input-instructions {
      font-size: 0.75rem;
      line-height: 120%;
      color: var(--ktg-color-text);
      user-select: none;
    }

    :host([disabled]) .file-input-instructions {
      color: var(--ktg-color-neutral-04);
    }
  `],Gu=class extends mt{constructor(){super(...arguments),this.disabled=!1,this.error=!1}connectedCallback(){super.connectedCallback(),this.slot="instructions"}render(){return j`
      <p class="file-input-instructions">
        <slot></slot>
      </p>
    `}};i(Gu,"KTGFileInputInstructionsElement"),Gu.styles=Hu,o([Ee({context:Pu,subscribe:!0}),kt({type:Boolean,reflect:!0})],Gu.prototype,"disabled",2),o([Ee({context:Fu,subscribe:!0}),kt({type:Boolean,reflect:!0})],Gu.prototype,"error",2),Gu=o([ft("ktg-file-input-instructions")],Gu);var Uu=class extends CustomEvent{static{i(this,"KTGFileInputInputEvent")}constructor(t){super("input",t)}},Wu=[...ae,...ne,d`
    .file-input {
      display: flex;
      flex-direction: column;
    }

    .file-input__input {
      display: none;
    }

    .file-input__dropzone {
      min-height: 10rem;
      padding: 0.5rem;
      border: 0.09375rem dashed var(--ktg-color-neutral-03);
      background-color: var(--ktg-color-background-01);
      display: flex;
      flex-direction: column;
      cursor: pointer;
    }

    :host([error]) .file-input__dropzone {
      border-color: var(--ktg-color-danger);
    }

    :host([disabled]) .file-input__dropzone {
      cursor: default;
    }

    @media (min-width: ${Ke}px) {
      .file-input__dropzone {
        padding: 1rem;
      }
    }

    .file-input__dropzone--dragover {
      border-color: var(--ktg-color-focus);
    }

    .file-input__description {
      width: 100%;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .file-input__button {
      display: flex;
      justify-content: flex-end;
    }
  `],Yu=class extends CustomEvent{static{i(this,"KTGUploadFileCancelEvent")}constructor(t){super("cancel",t)}},qu=class extends CustomEvent{static{i(this,"KTGUploadFileRemoveEvent")}constructor(t){super("remove",t)}},ju=[...ae,...ne,d`
    .upload-file {
      position: relative;
      color: var(--ktg-color-text);
    }

    .upload-file__main {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding-top: 0.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 0.5rem;
      background-color: var(--ktg-color-background-01);
    }

    .upload-file__border {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    :host([error]) .upload-file__border {
      border: 0.0625rem solid var(--ktg-color-danger);
    }

    .upload-file__icon {
      display: flex;
    }

    .upload-file__name {
      background: transparent;
      font-size: 0.75rem;
      line-height: 120%;
      flex-grow: 1;
      border: 0;
      text-align: left;
      font-family: inherit;
      outline: 0;
      color: var(--ktg-color-text);
      text-decoration: none;
    }

    :host([clickable]) .upload-file__name {
      cursor: pointer;
    }

    :host([loading]) .upload-file__name {
      cursor: default;
    }

    .upload-file__name::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .upload-file__name:focus-visible::before {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: -0.125rem;
    }

    .icon-button {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: none;
      cursor: pointer;
      margin: 0;
      padding: 0;
      color: var(--ktg-color-link);
    }

    .icon-button:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: 0.125rem;
    }

    :host([error]) .icon-button {
      color: var(--ktg-color-danger);
    }

    .upload-file__error-message {
      margin-top: 0.25rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      padding-left: 1rem;
      padding-right: 1rem;
      color: var(--ktg-color-danger);
      font-size: 0.75rem;
      line-height: 100%;
    }
  `],Zu=class extends mt{constructor(){super(...arguments),this.removable=!1,this.cancelable=!1,this.clickable=!1,this.loading=!1,this.error=!1,this.errorMessage="",this.href="",this.target="_self",this.download=""}connectedCallback(){super.connectedCallback(),this.role="listitem",this.ariaLive="polite"}update(t){super.update(t),t.has("loading")&&(this.ariaBusy=this.loading.toString())}render(){return j`
      <div class="upload-file">
        <div class="upload-file__main">
          <div class="upload-file__border"></div>
          ${this.renderIcon()} ${this.renderButtonOrLink()}
          ${this.renderButton()}
        </div>

        ${this.renderErrorMessage()}
      </div>
    `}renderButtonOrLink(){if(this.href){let t=this.hasAttribute("download")||this.download?this.download:null;return j`
        <a
          class="upload-file__name"
          .href=${this.href}
          .target=${this.target}
          download=${fi(t)}
          aria-describedby=${fi(this.error&&this.errorMessage?"error-message":null)}
        >
          <slot></slot>
        </a>
      `}return this.clickable?j`
        <button
          class="upload-file__name"
          aria-describedby=${fi(this.error&&this.errorMessage?"error-message":null)}
          .disabled=${this.loading}
        >
          <slot></slot>
        </button>
      `:j`
      <span
        class="upload-file__name"
        aria-describedby=${fi(this.error&&this.errorMessage?"error-message":null)}
      >
        <slot></slot>
      </span>
    `}renderIcon(){let t=this.error?"document-error":"document-ok",e=this.loading?"status":"presentation",i=this.loading?"Lädt":null;return j`
      <div
        class="upload-file__icon"
        role=${e}
        aria-label=${fi(i)}
      >
        <ktg-icon
          ?loading=${this.loading}
          name=${t}
        >
        </ktg-icon>
      </div>
    `}renderButton(){return this.loading&&this.cancelable?j`
        <button
          class="icon-button"
          aria-label="Hochladen abbrechen"
          title="Hochladen abbrechen"
          @click=${this.onCancelClick}
        >
          <ktg-icon
            class="icon-button__icon"
            name="close"
          >
          </ktg-icon>
        </button>
      `:this.removable?j`
        <button
          class="icon-button"
          aria-label="Datei entfernen"
          title="Datei entfernen"
          @click=${this.onRemoveClick}
        >
          <ktg-icon
            class="icon-button__icon"
            name="trash-delete"
          >
          </ktg-icon>
        </button>
      `:j``}renderErrorMessage(){return this.error&&this.errorMessage?j`
        <div
          class="upload-file__error-message"
          id="error-message"
        >
          <ktg-icon
            name="warning"
            size="small"
          ></ktg-icon>

          ${this.errorMessage}
        </div>
      `:j``}onRemoveClick(t){t.preventDefault(),t.stopPropagation(),this.dispatchEvent(new qu({cancelable:!1,bubbles:!0}))}onCancelClick(t){t.preventDefault(),t.stopPropagation(),this.dispatchEvent(new Yu({cancelable:!1,bubbles:!0}))}};i(Zu,"KTGUploadFileElement"),Zu.styles=ju,Zu.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},o([kt({type:Boolean,reflect:!0})],Zu.prototype,"removable",2),o([kt({type:Boolean,reflect:!0})],Zu.prototype,"cancelable",2),o([kt({type:Boolean,reflect:!0})],Zu.prototype,"clickable",2),o([kt({type:Boolean,reflect:!0})],Zu.prototype,"loading",2),o([kt({type:Boolean,reflect:!0})],Zu.prototype,"error",2),o([kt({type:String,attribute:"error-message"})],Zu.prototype,"errorMessage",2),o([kt({type:String})],Zu.prototype,"href",2),o([kt({type:String})],Zu.prototype,"target",2),o([kt({type:String})],Zu.prototype,"download",2),Zu=o([ft("ktg-upload-file")],Zu);var Xu=[d`
    .upload-files {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .upload-files--has-files {
      margin-top: 0.5rem;
    }
  `],Ju=class extends mt{connectedCallback(){super.connectedCallback(),this.slot="files",this.role="list"}onSlotChange(){this.requestUpdate()}render(){let t=this.children.length>0;return j`
      <div
        class=${ai({"upload-files":!0,"upload-files--has-files":t})}
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </div>
    `}};i(Ju,"KTGUploadFilesElement"),Ju.styles=Xu,Ju=o([ft("ktg-upload-files")],Ju);var Qu=class extends(md(mt)){constructor(){super(...arguments),this.multiple=!1,this.accept=null,this.capture=null,this.buttonLabel="Dateien durchsuchen",this.error=!1,this.disabled=!1}update(t){super.update(t),t.has("disabled")&&this.toggleDragOverStyles(!1)}onLabelClick(){super.onLabelClick(),this.clickFileInput()}onInput(t){t.stopPropagation();let e=this.input.files;e&&this.dispatchInputEvent(e),this.input.value=""}handleDragOver(t){t.preventDefault(),this.toggleDragOverStyles(!0)}handleDragLeave(t){t.preventDefault(),this.toggleDragOverStyles(!1)}handleDrop(t){t.preventDefault(),this.toggleDragOverStyles(!1);let e=t.dataTransfer?.files;e&&this.dispatchInputEvent(e)}onZoneClick(){this.clickFileInput()}onButtonClick(t){t.preventDefault(),t.stopPropagation(),this.clickFileInput()}clickFileInput(){this.input.click()}toggleDragOverStyles(t){this.dropzone.classList.toggle("file-input__dropzone--dragover",t)}render(){return j`
      <div class="file-input">
        <input
          class="file-input__input"
          type="file"
          accept=${fi(this.accept)}
          capture=${fi(this.capture)}
          ?multiple=${this.multiple}
          ?disabled=${this.disabled||this.readonly}
          @input=${this.onInput}
        />

        <div
          class="file-input__dropzone"
          @dragover="${this.handleDragOver}"
          @dragleave="${this.handleDragLeave}"
          @dragend="${this.handleDragLeave}"
          @pointerleave="${this.handleDragLeave}"
          @drop="${this.handleDrop}"
          @click=${this.onZoneClick}
        >
          <div class="file-input__description">
            <slot name="instructions"></slot>
            <slot name="hint"></slot>
          </div>

          <div class="file-input__button">
            <ktg-button
              trailing-icon="folder"
              appearance="secondary"
              size="small"
              ?disabled=${this.disabled||this.readonly}
              @click=${this.onButtonClick}
            >
              ${this.buttonLabel}
            </ktg-button>
          </div>
        </div>

        <slot
          class="file-input__files"
          name="files"
        ></slot>
      </div>
    `}dispatchInputEvent(t){let{accepted:e,ignored:i}=this.filterAcceptedFiles(t),o=e;!this.multiple&&e.length>1&&(o=[e[0]]),this.dispatchEvent(new Uu({cancelable:!1,bubbles:!0,detail:{files:o,ignoredFiles:i}}))}filterAcceptedFiles(t){let e=Array.from(t);if(!this.accept)return{accepted:e,ignored:[]};let i=this.accept.split(",").map(t=>t.trim().toLowerCase()),o=[],n=[];for(let t of e){let e=t.type.toLowerCase(),r=t.name.split(".").pop()?.toLowerCase();i.some(t=>{if(t.includes("/")){let[i,o]=t.split("/"),[n,r]=e.split("/");return!(i!==n&&"*"!==i||o!==r&&"*"!==o)}return t===`.${r}`})?o.push(t):n.push(t)}return{accepted:o,ignored:n}}};i(Qu,"KTGFileInputElement"),Qu.styles=Wu,Qu.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},o([kt({type:Boolean,reflect:!0})],Qu.prototype,"multiple",2),o([kt({type:String})],Qu.prototype,"accept",2),o([kt({type:String})],Qu.prototype,"capture",2),o([kt({type:String,attribute:"button-label"})],Qu.prototype,"buttonLabel",2),o([Se({context:Fu}),kt({type:Boolean,reflect:!0})],Qu.prototype,"error",2),o([Se({context:Pu}),kt({type:Boolean,reflect:!0})],Qu.prototype,"disabled",2),o([Ct(".file-input__input")],Qu.prototype,"input",2),o([Ct(".file-input__dropzone")],Qu.prototype,"dropzone",2),Qu=o([ft("ktg-file-input")],Qu);var tp=[...ae,...ne,d`
    :host {
      display: block;
    }

    :host([slot='columns-left']) {
      max-width: 21.875rem;
    }

    :host([slot='columns-right']) {
      width: 15.75rem;
    }

    .footer-column {
      font-size: 0.875rem;
      line-height: 120%;
    }

    .footer-column__title {
      font-size: 1rem;
      line-height: 100%;
      margin-bottom: 1rem;
    }
  `],ep=class extends mt{constructor(){super(...arguments),this.contentTitle=""}render(){return j`
      <div class="footer-column">
        ${si(this.contentTitle,()=>j`<h2 class="footer-column__title">${this.contentTitle}</h2>`)}
        <slot></slot>
      </div>
    `}};i(ep,"KTGFooterColumnElement"),ep.styles=tp,o([kt({type:String,attribute:"content-title"})],ep.prototype,"contentTitle",2),ep=o([ft("ktg-footer-column")],ep);var ip=[...ae,...ne,d`
    :host {
      display: inline-block;
    }

    .footer-navigation-item {
      text-decoration: none;
      color: var(--ktg-color-text);
    }

    .footer-navigation-item:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: 0.125rem;
    }
  `],op=class extends mt{constructor(){super(...arguments),this.href="",this.target="_self"}render(){return j`
      <a
        class="footer-navigation-item"
        href=${this.href}
        target=${this.target}
      >
        <slot></slot>
      </a>
    `}};i(op,"KTGFooterNavigationItemElement"),op.styles=ip,o([kt({type:String})],op.prototype,"href",2),o([kt({type:String})],op.prototype,"target",2),op=o([ft("ktg-footer-navigation-item")],op);var np=[...ae,d`
    :host {
      display: flex;
      gap: 1.5rem;
    }
  `],rp=class extends mt{connectedCallback(){super.connectedCallback(),this.slot="navigation"}render(){return j`<slot></slot>`}};i(rp,"KTGFooterNavigationElement"),rp.styles=np,rp=o([ft("ktg-footer-navigation")],rp);var ap=[...ae,...ne,d`
    :host {
      display: block;
    }

    .footer {
      background-color: var(--ktg-color-neutral-02);
      color: var(--ktg-color-text);
      font-size: 0.875rem;
      line-height: 120%;
      padding-bottom: 1rem;
    }

    @media screen and (min-width: ${He}px) {
      .footer {
        padding-bottom: 2.5rem;
      }
    }

    .footer__content {
      max-width: ${Ue}px;
      margin: 0 auto;
      padding-top: 8.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    @media screen and (min-width: ${Ke}px) {
      .footer__content {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }

    @media screen and (min-width: ${He}px) {
      .footer__content {
        padding-top: 16rem;
        padding-left: 6rem;
        padding-right: 6rem;
      }
    }

    .footer__header {
      background-color: var(--ktg-color-neutral-01);
    }

    .footer__header-inner {
      display: flex;
      padding-top: 1.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 0.625rem;
      position: relative;
      max-width: ${Ue}px;
      width: 100%;
      margin: 0 auto;
    }

    @media screen and (min-width: ${Ke}px) {
      .footer__header-inner {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }

    @media screen and (min-width: ${He}px) {
      .footer__header-inner {
        padding-left: 6rem;
        padding-right: 6rem;
      }
    }

    .footer__logo {
      width: 8.75rem;
    }
    @media screen and (min-width: ${He}px) {
      .footer__logo {
        width: 10rem;
      }
    }

    .footer__main {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
      padding-bottom: 2.5rem;
    }

    ::slotted(ktg-footer-column) {
      width: 100%;
    }

    @media screen and (min-width: ${Ge}px) {
      .footer__main {
        gap: 2rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        margin-left: -1rem;
      }
    }

    .footer__column-left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 2rem;
    }
    @media screen and (min-width: ${He}px) {
      .footer__column-left {
        flex-direction: row;
      }

      .footer__column-left::slotted(ktg-footer-column) {
        max-width: 35rem;
      }
    }
    @media screen and (min-width: ${Ge}px) {
      .footer__column-left {
        max-width: calc((100% - 2rem) / 2);
        width: 37%;
      }
    }

    .footer__column-right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      gap: 2rem;
    }
    @media screen and (min-width: ${Ke}px) {
      .footer__column-right {
        flex-direction: row;
        gap: 5rem;
        justify-content: flex-start;
      }
      .footer__column-right::slotted(ktg-footer-column) {
        width: auto;
      }
    }
    @media screen and (min-width: ${Ge}px) {
      .footer__column-right {
        justify-content: flex-end;
      }
    }

    .footer__links {
      border-top: 0.0625rem solid var(--ktg-color-neutral-03);
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding-top: 2.5rem;
      padding-bottom: 2.5rem;
    }

    .footer__meta {
      padding-top: 1.25rem;
      border-top: 0.0625rem solid var(--ktg-color-neutral-03);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .footer__meta__navigation {
      display: flex;
      gap: 1rem;
    }

    @media screen and (max-width: ${1055}px) {
      .footer__meta {
        align-items: flex-start;
      }
      .footer__meta ::slotted(ktg-footer-navigation) {
        flex-direction: column;
        gap: 0.5rem;
        text-align: right;
      }
    }

    @media screen and (min-width: ${He}px) {
      .footer__meta-wrapper {
      }
      .footer__links {
        flex-direction: row;
      }
      .footer__meta {
      }
    }
    @media screen and (min-width: ${Ue}px) {
      .footer__meta-wrapper {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        border-top: 0.0625rem solid var(--ktg-color-neutral-03);
        padding-top: 2.5rem;
      }
      .footer__links {
        border-top: none;
        flex-direction: row;
        padding-top: 0;
        padding-bottom: 0;
      }
      .footer__meta {
        border-top: none;
        padding-top: 0;
        padding-bottom: 0;
        gap: 1.75rem;
      }
    }
  `],sp=[...ae,d`
    :host {
      display: inline-block;
      width: auto;
      height: auto;
    }

    .logo {
      display: inline-flex;
      justify-content: flex-start;
      width: inherit;
      height: inherit;
    }

    svg {
      width: auto;
      height: auto;
    }

    :host([color='black']) svg path {
      fill: var(--ktg-color-text);
    }

    :host([color='white']) svg path {
      fill: var(--ktg-color-dark-contrast);
    }
  `],lp=class extends mt{constructor(){super(...arguments),this.color="black",this.alt=""}render(){return j`
      <span
        class="logo"
        aria-hidden=${!this.alt}
      >
        <svg
          role="img"
          width="366"
          height="126"
          viewBox="0 0 366 126"
          xmlns="http://www.w3.org/2000/svg"
        >
          ${Z`<title>${this.alt}</title>`}
          <g clip-path="url(#clip0_203_131)">
            <path
              d="M265.9 0.300003C265.815 0.38456 265.748 0.48506 265.702 0.595749C265.656 0.706438 265.632 0.825124 265.632 0.944992C265.632 1.06486 265.656 1.18355 265.702 1.29424C265.748 1.40492 265.815 1.50545 265.9 1.59001L363.83 99.3C364.001 99.4711 364.233 99.5672 364.475 99.5672C364.717 99.5672 364.949 99.4711 365.12 99.3C365.291 99.1289 365.387 98.8969 365.387 98.655C365.387 98.4131 365.291 98.1811 365.12 98.01L267.18 0.300003C267.097 0.214114 266.998 0.145817 266.888 0.0991669C266.778 0.052517 266.659 0.0284576 266.54 0.0284576C266.421 0.0284576 266.302 0.052517 266.192 0.0991669C266.082 0.145817 265.983 0.214114 265.9 0.300003Z"
            />
            <path
              d="M270.69 36.39L270.51 34.22L262.31 32.22L262.48 34.35L270.69 36.39ZM313.93 58.83C313.619 58.0247 313.151 57.2891 312.554 56.666C311.957 56.0429 311.241 55.5446 310.45 55.2L298.85 50.88C298.374 50.7293 297.959 50.429 297.667 50.0236C297.375 49.6182 297.222 49.1295 297.23 48.63C297.234 48.103 297.422 47.5939 297.76 47.19C297.947 47.4923 298.207 47.7424 298.517 47.9172C298.826 48.092 299.175 48.1859 299.53 48.19C299.793 48.2247 300.06 48.204 300.314 48.1293C300.568 48.0546 300.804 47.9275 301.006 47.7563C301.208 47.585 301.373 47.3734 301.488 47.1349C301.604 46.8964 301.668 46.6365 301.677 46.3716C301.686 46.1068 301.64 45.843 301.541 45.5972C301.442 45.3513 301.293 45.1289 301.103 44.9441C300.913 44.7594 300.686 44.6164 300.438 44.5245C300.189 44.4325 299.924 44.3935 299.66 44.41H299.61C298.617 44.3952 297.65 44.7253 296.873 45.3439C296.097 45.9625 295.559 46.8314 295.351 47.8024C295.143 48.7734 295.279 49.7863 295.735 50.6685C296.19 51.5506 296.938 52.2474 297.85 52.64L309.74 57.08C310.818 57.5724 311.661 58.4657 312.09 59.57C312.421 60.4167 312.493 61.3427 312.297 62.2305C312.102 63.1184 311.646 63.928 310.99 64.5568C310.333 65.1856 309.505 65.6052 308.609 65.7625C307.714 65.9197 306.792 65.8075 305.96 65.44L288.16 54.44L293.11 46.79C294.14 45.3728 294.741 43.6892 294.84 41.94C294.854 41.2634 294.763 40.5888 294.57 39.94C293.818 37.8885 292.327 36.1912 290.39 35.18C290.471 34.9235 290.521 34.6583 290.54 34.39C290.569 33.7026 290.38 33.0238 290 32.45C289.718 32.0395 289.345 31.7002 288.909 31.459C288.473 31.2177 287.988 31.0811 287.49 31.06C287.062 30.9743 286.618 31.0158 286.212 31.1792C285.807 31.3427 285.459 31.621 285.21 31.98C283.15 31.45 281.73 31.12 280.99 30.98L280.61 30.92C279 30.61 276 30.06 274.61 29.97H273.99C273.99 29.97 273.29 31.24 272.99 31.88C272.78 32.3733 272.597 32.8773 272.44 33.39C272.3 33.77 272.2 34.09 272.16 34.19L273.23 34.49C273.628 34.6133 273.96 34.8896 274.154 35.2581C274.349 35.6266 274.388 36.0572 274.265 36.455C274.142 36.8528 273.865 37.1854 273.497 37.3795C273.128 37.5736 272.698 37.6133 272.3 37.49L271.21 37.17C270.98 37.94 270.49 39.84 271.4 41.23C271.652 41.6065 271.987 41.9208 272.378 42.1495C272.77 42.3781 273.208 42.515 273.66 42.55C274.538 42.5953 275.4 42.8056 276.2 43.17C276.674 43.5768 276.974 44.1491 277.04 44.77C276.57 45.52 276.04 46.28 275.59 47.02L268.06 42.11C268.06 41.98 268.06 41.86 268.06 41.73C268.073 40.6646 267.708 39.629 267.03 38.8069C266.352 37.9848 265.405 37.4293 264.357 37.2388C263.308 37.0483 262.226 37.2351 261.303 37.7662C260.379 38.2972 259.673 39.1382 259.31 40.14C259.152 40.6005 259.067 41.0831 259.06 41.57L264.94 47.57L260.35 46.38C260.114 45.4472 259.584 44.6151 258.839 44.0061C258.094 43.3972 257.173 43.0437 256.212 42.9978C255.251 42.9519 254.3 43.2159 253.501 43.7511C252.701 44.2862 252.094 45.064 251.77 45.97C251.595 46.4301 251.503 46.9177 251.5 47.41C251.501 47.8732 251.565 48.3341 251.69 48.78L270.69 58.11C270.69 58.21 270.69 58.32 270.69 58.42C270.744 59.3649 271.015 60.2845 271.484 61.1069C271.952 61.9292 272.605 62.632 273.39 63.16C274.595 64.0739 275.978 64.7246 277.45 65.07L289.45 68.44C288.284 69.3436 287.345 70.5081 286.71 71.84C286.05 71.73 284.4 71.33 283.1 71.03C283.014 70.4998 282.818 69.9935 282.524 69.5441C282.231 69.0946 281.845 68.7119 281.394 68.4209C280.943 68.13 280.435 67.9372 279.904 67.8551C279.374 67.773 278.831 67.8035 278.313 67.9445C277.795 68.0855 277.312 68.3339 276.896 68.6736C276.48 69.0133 276.141 69.4367 275.899 69.9162C275.657 70.3958 275.519 70.9209 275.493 71.4573C275.468 71.9937 275.555 72.5296 275.75 73.03H275.8L289 81.24L289.44 80.1C290.074 78.6381 291.089 77.3738 292.38 76.44C292.394 77.2387 292.474 78.0348 292.62 78.82C293.35 82.59 295.78 85.75 299.85 88.23C299.98 88.7 300.54 90.93 300.85 92.35C300.201 93.1386 299.848 94.1287 299.85 95.15C299.831 96.3427 300.286 97.4944 301.114 98.3527C301.943 99.2111 303.077 99.7063 304.27 99.73C305.176 99.7429 306.064 99.4738 306.81 98.96L307.47 84.32L307.11 83.99C303.97 81.19 302.46 78.36 302.49 75.34V75.27C302.49 72.87 303.55 70.32 305.6 67.49C306.784 67.8833 308.056 67.9317 309.267 67.6295C310.478 67.3273 311.578 66.687 312.438 65.7834C313.299 64.8797 313.885 63.7499 314.128 62.5258C314.371 61.3017 314.26 60.0338 313.81 58.87L313.93 58.83ZM273.81 40.53C273.655 40.53 273.502 40.4939 273.363 40.4244C273.224 40.355 273.103 40.2542 273.01 40.13C272.918 39.9703 272.86 39.7932 272.84 39.61C273.596 39.577 274.322 39.306 274.915 38.8358C275.507 38.3655 275.936 37.7201 276.14 36.9916C276.344 36.2631 276.313 35.4887 276.051 34.7791C275.788 34.0695 275.309 33.4608 274.68 33.04C274.8 32.71 274.92 32.39 275.01 32.17C276.35 32.33 278.42 32.71 279.77 32.96L279.33 34.33C279.637 34.5776 280.008 34.7335 280.4 34.78C280.744 34.8267 281.094 34.7637 281.4 34.6L281.79 33.38C282.44 33.53 283.32 33.74 284.55 34.06L284.83 34.12C285.188 34.1888 285.559 34.1472 285.893 34.0008C286.226 33.8544 286.508 33.61 286.7 33.3L286.78 33.2C286.913 33.1792 287.047 33.1792 287.18 33.2C287.87 33.26 288.08 33.56 288.18 33.68C288.338 33.9078 288.409 34.1845 288.38 34.46C288.284 35.0261 288.023 35.5514 287.63 35.97C287.036 36.4204 286.305 36.6502 285.56 36.62C284.514 36.6419 283.489 36.9217 282.577 37.4346C281.664 37.9474 280.893 38.6775 280.33 39.56C280.33 39.56 279.47 40.89 278.33 42.66C278.034 42.1352 277.602 41.7 277.08 41.4C276.058 40.9076 274.952 40.6156 273.82 40.54L273.81 40.53ZM261.22 40.93C261.418 40.394 261.798 39.9447 262.294 39.6611C262.789 39.3775 263.369 39.2776 263.932 39.3791C264.494 39.4806 265.002 39.7768 265.368 40.2159C265.733 40.655 265.932 41.2088 265.93 41.78C265.929 41.976 265.902 42.171 265.85 42.36C265.808 42.6014 265.727 42.8345 265.61 43.05L274.35 48.72L273.66 49.83L268.77 48.57L261.22 40.93ZM272.48 51.75C271.649 53.0146 271.069 54.4267 270.77 55.91L253.66 47.4C253.662 47.1372 253.709 46.8767 253.8 46.63C253.992 46.0882 254.371 45.6326 254.869 45.3448C255.367 45.057 255.951 44.9557 256.516 45.0592C257.082 45.1627 257.592 45.4641 257.955 45.9095C258.319 46.3549 258.512 46.9152 258.5 47.49C258.511 47.6231 258.511 47.7569 258.5 47.89V47.96L272.71 51.62L272.65 51.7L272.48 51.75ZM278.06 63.06L283.84 54.14C283.962 54.039 284.059 53.9103 284.122 53.7645C284.185 53.6187 284.212 53.4601 284.201 53.3017C284.191 53.1433 284.142 52.9898 284.061 52.8537C283.979 52.7177 283.866 52.603 283.731 52.5193C283.596 52.4355 283.443 52.3851 283.285 52.3721C283.127 52.3591 282.968 52.384 282.821 52.4446C282.675 52.5053 282.545 52.6 282.442 52.7209C282.339 52.8418 282.266 52.9855 282.23 53.14L276.23 62.45C275.722 62.2143 275.243 61.9225 274.8 61.58L274.65 61.45L280.03 53.26C280.101 53.0501 280.1 52.8227 280.028 52.6133C279.955 52.4039 279.815 52.2245 279.63 52.1033C279.445 51.982 279.224 51.9256 279.004 51.9432C278.783 51.9607 278.574 52.051 278.41 52.2L273.31 59.97C273.049 59.4133 272.893 58.8133 272.85 58.2C272.83 57.9471 272.83 57.693 272.85 57.44C272.96 55.817 273.487 54.2499 274.38 52.89L282.27 40.66C282.648 40.0722 283.165 39.5868 283.776 39.2467C284.386 38.9066 285.071 38.7222 285.77 38.71C286.475 38.7302 287.177 38.6038 287.832 38.3387C288.486 38.0736 289.078 37.6757 289.57 37.17C290.997 37.9296 292.102 39.1798 292.68 40.69C292.802 41.1157 292.859 41.5573 292.85 42C292.759 43.3627 292.281 44.6709 291.47 45.77L289.65 48.59L279.65 63.59L278.06 63.06ZM292.69 73.87C290.834 74.9169 289.281 76.4257 288.18 78.25C286.8 77.42 279.74 72.98 277.61 71.63C277.609 71.3013 277.691 70.9778 277.85 70.69C278.066 70.3239 278.402 70.043 278.8 69.8941C279.199 69.7453 279.636 69.7375 280.039 69.872C280.443 70.0065 280.788 70.2751 281.017 70.6333C281.247 70.9914 281.347 71.4173 281.3 71.84L281.16 72.61L288.05 74.11L288.36 73.35C289.09 71.5434 290.427 70.0477 292.14 69.12L293.8 69.59C293.294 70.978 292.923 72.4112 292.69 73.87ZM300.57 75.23C300.51 78.75 302.15 82.03 305.51 85.16C305.51 85.87 305.1 94.32 304.95 97.57C304.782 97.602 304.611 97.6187 304.44 97.62C303.797 97.6069 303.186 97.3395 302.74 96.8766C302.294 96.4137 302.049 95.7928 302.06 95.15C302.058 94.8909 302.102 94.6336 302.19 94.39C302.271 94.0972 302.413 93.8251 302.608 93.5922C302.803 93.3593 303.046 93.1709 303.32 93.04L301.76 86.87L301.39 86.66C296.73 83.94 294.49 80.49 294.56 76.04C294.649 73.7212 295.157 71.4376 296.06 69.3L296.49 68.23L281.49 64.05L286.79 56.05L303.79 66.54C301.65 69.59 300.54 72.47 300.5 75.21"
            />
            <path
              d="M314.65 8.3L314.47 6.12999L306.27 4.12999L306.44 6.25999L314.65 8.3ZM357.89 30.74C357.577 29.9358 357.109 29.2012 356.512 28.5783C355.915 27.9554 355.2 27.4564 354.41 27.11L342.81 22.79C342.332 22.6411 341.915 22.3415 341.621 21.936C341.327 21.5304 341.172 21.0407 341.18 20.54C341.182 20.0157 341.37 19.5091 341.71 19.11C341.903 19.4087 342.166 19.6559 342.476 19.8301C342.786 20.0044 343.134 20.1004 343.49 20.11C343.757 20.1512 344.03 20.1352 344.291 20.0631C344.551 19.991 344.793 19.8644 345.001 19.6917C345.209 19.5189 345.378 19.304 345.497 19.0612C345.616 18.8183 345.682 18.553 345.69 18.2828C345.699 18.0126 345.65 17.7436 345.547 17.4937C345.444 17.2438 345.289 17.0186 345.092 16.8331C344.895 16.6476 344.662 16.5059 344.406 16.4174C344.151 16.329 343.879 16.2958 343.61 16.32C342.619 16.3047 341.654 16.6335 340.879 17.2503C340.104 17.8671 339.567 18.7337 339.359 19.7023C339.151 20.671 339.286 21.6817 339.74 22.562C340.195 23.4424 340.94 24.1379 341.85 24.53L353.75 28.97C354.833 29.4796 355.676 30.3906 356.1 31.5104C356.523 32.6302 356.495 33.8709 356.02 34.97C355.778 35.5236 355.429 36.0241 354.993 36.4429C354.558 36.8616 354.044 37.1904 353.481 37.4105C352.918 37.6306 352.318 37.7376 351.714 37.7255C351.109 37.7134 350.514 37.5825 349.96 37.34L332.15 26.34L337.15 18.68C338.179 17.2667 338.776 15.5856 338.87 13.84C338.885 13.1633 338.794 12.4885 338.6 11.84C337.851 9.78693 336.365 8.08634 334.43 7.06999C334.508 6.81656 334.555 6.55467 334.57 6.28999C334.593 5.86954 334.532 5.44876 334.39 5.0522C334.249 4.65564 334.029 4.29124 333.746 3.9803C333.462 3.66936 333.119 3.41812 332.736 3.24123C332.354 3.06433 331.941 2.96532 331.52 2.95C331.092 2.86301 330.647 2.90383 330.242 3.0674C329.836 3.23097 329.488 3.51008 329.24 3.87001C327.18 3.35001 325.77 3.01001 325.04 2.87001L324.64 2.78999C323.03 2.49999 320.04 1.93999 318.64 1.84999H318.04C318.04 1.84999 317.33 3.12002 317.04 3.75002C316.88 4.16002 316.76 4.46999 316.5 5.25999C316.36 5.63999 316.25 5.96001 316.22 6.06001L317.28 6.36C317.473 6.42107 317.652 6.51957 317.807 6.64986C317.962 6.78015 318.09 6.93969 318.183 7.11937C318.277 7.29905 318.334 7.49535 318.351 7.69707C318.369 7.89878 318.346 8.10195 318.285 8.295C318.224 8.48804 318.125 8.66718 317.995 8.82216C317.865 8.97714 317.705 9.10493 317.526 9.19826C317.346 9.29158 317.15 9.34859 316.948 9.36604C316.746 9.3835 316.543 9.36107 316.35 9.3L315.26 8.97002C315.02 9.74002 314.54 11.64 315.45 13.03C315.704 13.4046 316.039 13.717 316.43 13.9439C316.821 14.1707 317.259 14.3062 317.71 14.34C318.586 14.3929 319.444 14.61 320.24 14.98C320.72 15.3777 321.022 15.9496 321.08 16.57C320.61 17.32 320.08 18.08 319.64 18.82L312.06 14.03C312.06 13.9 312.06 13.78 312.06 13.65C312.08 12.4565 311.625 11.304 310.795 10.4461C309.965 9.58808 308.828 9.09489 307.635 9.075C306.442 9.05511 305.289 9.51013 304.431 10.34C303.573 11.1698 303.08 12.3065 303.06 13.5L308.93 19.5L304.4 18.3C304.155 17.3421 303.603 16.4909 302.828 15.8768C302.053 15.2626 301.098 14.9195 300.11 14.9C299.169 14.8835 298.246 15.1646 297.474 15.7034C296.702 16.2421 296.119 17.0108 295.81 17.9C295.644 18.3627 295.553 18.8488 295.54 19.34C295.55 19.8025 295.614 20.2622 295.73 20.71L314.73 30.03C314.73 30.13 314.73 30.24 314.73 30.34C314.782 31.2853 315.053 32.2055 315.522 33.0281C315.99 33.8506 316.644 34.5531 317.43 35.08C318.637 35.9906 320.019 36.641 321.49 36.99L333.49 40.36C332.329 41.2715 331.389 42.4338 330.74 43.76C330.1 43.65 328.44 43.26 327.14 42.95C327.013 42.1735 326.65 41.4551 326.1 40.8928C325.55 40.3305 324.839 39.9519 324.066 39.8085C323.292 39.6652 322.493 39.7642 321.778 40.092C321.063 40.4198 320.466 40.9604 320.07 41.64C319.774 42.1357 319.595 42.6929 319.548 43.2686C319.502 43.8442 319.588 44.4229 319.8 44.96H319.85L333.05 53.18L333.49 52.03C334.126 50.5696 335.141 49.306 336.43 48.37C336.435 49.1687 336.512 49.9652 336.66 50.75C337.39 54.53 339.83 57.68 343.89 60.16C344.01 60.63 344.58 62.85 344.89 64.29C344.551 64.6912 344.284 65.1479 344.1 65.64C343.934 66.1022 343.846 66.5889 343.84 67.08C343.824 68.271 344.28 69.4201 345.108 70.2763C345.936 71.1325 347.069 71.6264 348.26 71.65C348.692 71.6606 349.123 71.6101 349.54 71.5C349.987 71.3568 350.411 71.1514 350.8 70.89L351.47 56.24L351.1 55.92C347.96 53.12 346.45 50.28 346.49 47.26V47.19C346.49 44.79 347.54 42.19 349.6 39.41C350.784 39.805 352.056 39.8546 353.268 39.5528C354.479 39.251 355.579 38.6104 356.439 37.706C357.3 36.8015 357.885 35.6707 358.126 34.4459C358.367 33.2211 358.254 31.9529 357.8 30.79L357.89 30.74ZM317.8 12.45C317.643 12.4516 317.488 12.4162 317.347 12.3467C317.207 12.2772 317.084 12.1756 316.99 12.05C316.906 11.8877 316.852 11.7116 316.83 11.53C317.585 11.495 318.31 11.2226 318.901 10.7517C319.492 10.2807 319.919 9.63524 320.122 8.90715C320.325 8.17906 320.293 7.40553 320.03 6.69679C319.768 5.98806 319.288 5.38026 318.66 4.96001C318.78 4.63001 318.9 4.31001 319 4.09001C320.33 4.25001 322.41 4.62999 323.75 4.87999L323.31 6.24001C323.613 6.49609 323.986 6.65621 324.38 6.7C324.724 6.74144 325.072 6.67875 325.38 6.52L325.75 5.3C326.4 5.45 327.29 5.66 328.52 5.98L328.8 6.03999C329.157 6.11098 329.527 6.07035 329.859 5.92363C330.192 5.77691 330.472 5.53124 330.66 5.22002L330.74 5.12001C330.876 5.10209 331.014 5.10209 331.15 5.12001C331.312 5.11311 331.474 5.14145 331.624 5.20311C331.774 5.26477 331.908 5.35826 332.019 5.47713C332.129 5.59599 332.212 5.7374 332.262 5.89156C332.313 6.04572 332.329 6.20896 332.31 6.37001C332.218 6.93746 331.957 7.46382 331.56 7.87999C330.961 8.31881 330.232 8.54416 329.49 8.52C328.443 8.54463 327.418 8.8255 326.504 9.33803C325.591 9.85056 324.817 10.5791 324.25 11.46C324.25 11.46 323.39 12.79 322.25 14.56C321.943 14.0368 321.506 13.6025 320.98 13.3C319.962 12.8074 318.859 12.5154 317.73 12.44L317.8 12.45ZM305.13 12.84V12.78C305.328 12.2423 305.71 11.7919 306.208 11.5083C306.706 11.2248 307.288 11.1264 307.852 11.2305C308.415 11.3345 308.924 11.6345 309.288 12.0772C309.651 12.5199 309.847 13.077 309.84 13.65C309.84 13.8395 309.813 14.0281 309.76 14.21V14.26C309.711 14.5009 309.626 14.7334 309.51 14.95L318.24 20.62L317.55 21.73L312.68 20.47L305.13 12.84ZM316.39 23.65C315.562 24.9207 314.978 26.335 314.67 27.82L297.62 19.3C297.621 19.0404 297.668 18.783 297.76 18.54C297.952 17.9982 298.331 17.5426 298.829 17.2548C299.327 16.967 299.911 16.8657 300.476 16.9692C301.042 17.0727 301.552 17.3741 301.915 17.8195C302.279 18.2649 302.472 18.8252 302.46 19.4C302.47 19.5332 302.47 19.6669 302.46 19.8V19.86L316.67 23.52L316.62 23.6L316.39 23.65ZM322.06 34.98L327.85 26.06C327.921 25.8491 327.92 25.6205 327.846 25.4105C327.772 25.2005 327.631 25.021 327.444 24.9005C327.257 24.78 327.035 24.7253 326.813 24.7452C326.591 24.765 326.383 24.8582 326.22 25.01L320.22 34.32C319.716 34.084 319.239 33.7922 318.8 33.45L318.63 33.33L324.02 25.13C324.136 25.0286 324.227 24.9017 324.286 24.7593C324.345 24.6169 324.37 24.4629 324.359 24.3092C324.349 24.1554 324.303 24.0062 324.225 23.8732C324.148 23.7401 324.04 23.6268 323.911 23.5421C323.783 23.4574 323.636 23.4035 323.483 23.3848C323.33 23.366 323.175 23.3828 323.03 23.4339C322.885 23.485 322.753 23.569 322.645 23.6794C322.538 23.7897 322.457 23.9234 322.41 24.07L317.3 31.85C317.049 31.287 316.896 30.6848 316.85 30.07C316.835 29.8202 316.835 29.5698 316.85 29.32C316.964 27.7007 317.483 26.1361 318.36 24.77L326.25 12.52C326.633 11.9325 327.154 11.4477 327.768 11.1078C328.381 10.7679 329.069 10.5833 329.77 10.57C330.474 10.5913 331.175 10.4653 331.828 10.2001C332.48 9.9349 333.07 9.53639 333.56 9.03001C334.987 9.785 336.092 11.0321 336.67 12.54C336.795 12.9687 336.856 13.4135 336.85 13.86C336.755 15.2217 336.277 16.5288 335.47 17.63L333.64 20.45L323.64 35.45L322.06 34.98ZM336.69 45.79C334.829 46.8344 333.274 48.348 332.18 50.18C330.8 49.34 323.75 44.9 321.61 43.55C321.607 43.2199 321.694 42.8952 321.86 42.61C322.076 42.2439 322.412 41.963 322.81 41.8142C323.209 41.6653 323.646 41.6575 324.049 41.7919C324.453 41.9264 324.798 42.1951 325.027 42.5532C325.257 42.9114 325.357 43.3373 325.31 43.76L325.18 44.53L332.05 46.03L332.37 45.27C333.097 43.464 334.435 41.9705 336.15 41.05L337.81 41.51C337.301 42.8977 336.926 44.3309 336.69 45.79ZM344.57 47.16C344.51 50.67 346.16 53.95 349.52 57.07C349.52 57.79 349.1 66.24 348.95 69.49C348.781 69.5102 348.609 69.5102 348.44 69.49C348.123 69.4861 347.809 69.4195 347.518 69.2942C347.226 69.1688 346.962 68.9871 346.741 68.7594C346.52 68.5318 346.346 68.2627 346.229 67.9676C346.112 67.6726 346.055 67.3573 346.06 67.04C346.061 66.7738 346.108 66.5099 346.2 66.26C346.281 65.9712 346.423 65.7031 346.616 65.4736C346.809 65.2442 347.049 65.0589 347.32 64.93L345.76 58.76L345.39 58.54C340.73 55.82 338.48 52.37 338.56 47.92C338.662 45.5934 339.191 43.3054 340.12 41.17L340.55 40.11L325.55 35.92L330.86 27.92L347.86 38.41C345.73 41.46 344.62 44.34 344.57 47.09"
            />
            <path d="M0 63.02H36.93V72.53H24.5V111.01H12.49V72.53H0V63.02Z" />
            <path
              d="M51.42 63.02V79.3C52.6871 77.8416 54.2503 76.6699 56.0057 75.863C57.761 75.056 59.6681 74.6323 61.6 74.62C64.3252 74.5682 66.9849 75.4583 69.13 77.14C72.26 79.78 72.8 83.14 72.8 87.73V111H62.41V92.49C62.41 89.63 62.35 88.28 61.94 87.05C61.6322 86.0024 60.9846 85.087 60.0993 84.4479C59.214 83.8088 58.1412 83.4823 57.05 83.52C56.2319 83.5087 55.4219 83.6828 54.6806 84.0291C53.9394 84.3755 53.2862 84.8852 52.77 85.52C51.42 87.36 51.42 90.28 51.42 93.33V110.97H40.96V62.97L51.42 63.02Z"
            />
            <path
              d="M101.31 75.58H111.77V111.01H101.31V107.01C100.501 108.102 99.4811 109.021 98.31 109.71C96.1251 111.056 93.6417 111.843 91.08 112C88.77 112 84.49 111.66 82.08 108.27C80.24 105.69 80.08 103.59 79.91 97.82V75.58H90.43V97.58C90.43 99.14 90.43 100.7 91.24 101.79C91.7552 102.373 92.3944 102.834 93.1107 103.139C93.827 103.443 94.6024 103.584 95.38 103.55C96.6373 103.585 97.8809 103.281 98.98 102.67C101.22 101.31 101.29 99.54 101.35 97.67L101.31 75.58Z"
            />
            <path
              d="M243.32 75.58H253.77V111.01H243.32V107.01C242.504 108.096 241.485 109.012 240.32 109.71C238.131 111.056 235.645 111.843 233.08 112C230.76 112 226.5 111.66 224.08 108.27C222.25 105.69 222.08 103.59 221.91 97.82V75.58H232.43V97.58C232.43 99.14 232.43 100.7 233.25 101.79C233.763 102.374 234.4 102.835 235.115 103.14C235.83 103.444 236.604 103.585 237.38 103.55C238.637 103.585 239.881 103.281 240.98 102.67C243.22 101.31 243.28 99.54 243.36 97.67L243.32 75.58Z"
            />
            <path
              d="M129.15 79.81C131.81 77.36 134.28 75.81 140.25 75.07V84.3L135.94 84.97C130.94 85.86 129.42 86.6 129.42 91.08V111.08H118.97V75.58H129.15V79.81Z"
            />
            <path
              d="M166.24 106.3C163.543 108.319 160.248 109.375 156.88 109.3C154.017 109.351 151.204 108.546 148.8 106.99C144.05 103.93 142.21 98.43 142.21 92.33C142.21 85.21 145.54 74.95 157.29 74.95C159.106 74.9265 160.903 75.3136 162.548 76.0824C164.193 76.8513 165.643 77.982 166.79 79.39V75.49H176.56V111.06C176.43 114.93 176.29 119.47 171.13 122.46C167.53 124.63 162.24 125.18 159.05 125.18C151.99 125.18 147.37 122.73 145.47 120.75C142.69 117.98 142.76 114.39 142.76 112.48H153.55C153.69 114.04 153.82 116.27 156.61 117.57C157.646 118.059 158.785 118.293 159.93 118.25C166.24 118.25 166.24 114.51 166.24 111.59V106.3ZM153.06 92.3C153.06 95.3 153.26 101.47 159.71 101.47C165 101.47 166.23 97.32 166.23 92.3C166.23 90.6 166.09 87.07 164.94 85.38C164.303 84.4847 163.439 83.7743 162.438 83.3211C161.437 82.8679 160.333 82.6881 159.24 82.8C154.24 83 153.06 87.28 153.06 92.3Z"
            />
            <path
              d="M184.49 85.63C184.7 83.18 185.04 80.26 188.23 77.76C191.42 75.26 195.69 74.63 199.84 74.63C204.17 74.63 214.7 75.63 214.7 84.82V105.45C214.7 109.26 214.91 109.8 215.7 111.01H205.47V107.24C203.93 108.54 199.77 111.97 194.6 111.97C186.46 111.97 183 106.13 183 101.17C183 95.47 187.54 92.17 190.47 90.99C193.4 89.81 200.04 88.55 204.47 87.74V85.84C204.33 84.2 204.19 81.49 200.47 81.49C195.85 81.49 195.24 84.33 194.96 85.63H184.49ZM197.73 95.71C195.97 96.39 193.25 97.98 193.25 100.71C193.273 101.762 193.689 102.768 194.416 103.529C195.144 104.29 196.13 104.75 197.18 104.82C198.467 104.782 199.718 104.383 200.79 103.67C204.25 101.5 204.38 97.15 204.45 93.49L197.73 95.71Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_203_131">
              <rect
                width="365.38"
                height="125.2"
              />
            </clipPath>
          </defs>
        </svg>
      </span>
    `}};i(lp,"KTGLogoElement"),lp.styles=sp,o([kt({type:String,reflect:!0})],lp.prototype,"color",2),o([kt({type:String})],lp.prototype,"alt",2),lp=o([ft("ktg-logo")],lp);var cp=[...ae,d`
    :host {
      display: flex;
      position: relative;
      --pentaton-height: var(--ktg-pentaton-height, 40px);
      --pentaton-width: var(--ktg-pentaton-width, 97px);
      height: var(--pentaton-height);
    }

    .pentaton__wrapper {
      position: var(--ktg-pentaton-position, absolute);
      top: var(--ktg-pentaton-top, 0px);
      left: var(--ktg-pentaton-left, 1rem);
    }

    .pentaton__rows {
      width: var(--pentaton-width);
      height: var(--pentaton-height);
      transform-origin: 50% 0;
      transition: var(--ktg-pentaton-transition);
      transform: var(--ktg-pentaton-transform);
    }

    @media screen and (min-width: ${Ke}px) {
      .pentaton__wrapper {
        left: var(--ktg-pentaton-left, 2rem);
      }
    }
    @media screen and (min-width: ${He}px) {
      :host {
        --pentaton-height: var(--ktg-pentaton-height, 48px);
        --pentaton-width: var(--ktg-pentaton-width, 112px);
      }
      .pentaton__wrapper {
        left: var(
          --ktg-pentaton-left,
          calc((50% - min(50%, ${848}px)) + 152px)
        );
      }
      .pentaton__rows {
        position: absolute;
        top: 0;
        left: 50%;
        transform: var(--ktg-pentaton-transform, translateX(-50%));
      }

      .pentaton__wrapper--intro-animation .pentaton__row {
        transform-origin: 100% 100%;
        transition: transform ${.308}s
          linear;
      }
      .pentaton__wrapper--intro-animation .pentaton__row--first {
        transition-delay: ${.78*1.4}s;
      }
      .pentaton__wrapper--intro-animation .pentaton__row--second {
        transition-delay: ${.616}s;
        transition-duration: ${.34375*1.4}s;
      }
      .pentaton__wrapper--intro-animation .pentaton__row--third {
        transition-delay: ${.308}s;
      }
      .pentaton__wrapper--intro-animation .pentaton__row--fourth {
      }

      .pentaton__wrapper--intro-animation .pentaton__row--fifth {
        transition-property: transform, opacity;
        transition-delay: 0s,
          ${.35*3}s;
        transition-duration: ${1.4}s,
          ${.35}s;
        transition-timing-function: linear;
        transform-origin: 100% 0%;
      }
      .pentaton__wrapper--preload .pentaton__row {
        transform: scaleY(0);
        transform-origin: 100% 100%;
      }
      .pentaton__wrapper--preload .pentaton__row--first {
        transform: scaleY(0);
      }
      .pentaton__wrapper--preload .pentaton__row--second {
        transform: scaleY(0);
      }
      .pentaton__wrapper--preload .pentaton__row--third {
        transform: scaleY(0);
      }
      .pentaton__wrapper--preload .pentaton__row--fourth {
        transform: scaleY(0);
      }
      .pentaton__wrapper--preload .pentaton__row--fifth {
        transform: scaleY(0);
        opacity: 1;
        transform-origin: 100% 0%;
      }
    }

    .pentaton__row {
      position: absolute;
      left: 0;
      width: 100%;
      transition: flex-grow 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .pentaton__row--first {
      top: 0;
      background-color: #ffed00;
      height: 11%;
      &::after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: inherit;
      }
    }

    .pentaton__row--second {
      top: 11%;
      background-color: #adc939;
      height: 17%;
      &::after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: inherit;
      }
    }

    .pentaton__row--third {
      top: 28%;
      background-color: #74a732;
      height: 11%;
      &::after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: inherit;
      }
    }

    .pentaton__row--fourth {
      top: 39%;
      background-color: #00a4e8;
      height: 11%;
    }

    .pentaton__row--fifth {
      top: 50%;
      height: 50%;
      background-color: #4db5eb;
      opacity: 0.8;
    }
  `],dp=class extends mt{constructor(){super(...arguments),this.preload=!0,this.horizonIntroAnimation=!0,this.animated=!1,this.renderLoop=null,this.mainNavigationElement=null}firstUpdated(t){super.firstUpdated(t),Ie().then(()=>{this.preload=!1});let e=i(()=>{this.horizonIntroAnimation=!1,this.horizonAnimatedFifthRow?.removeEventListener("transitionend",e)},"horizonIntroAnimationCallback");this.horizonAnimatedFifthRow?.addEventListener("transitionend",e),this.mainNavigationElement=document.querySelector("ktg-main-navigation"),this.createStickyHorizonObserver()}createStickyHorizonObserver(){this.renderLoop||(this.renderLoop=new $e,this.renderLoop.on("update",()=>{let t=this.mainNavigationElement?.getBoundingClientRect().height||0;this.getBoundingClientRect().y<=t?(this.style.setProperty("--ktg-pentaton-top",`${t}px`),this.style.setProperty("--ktg-pentaton-position","fixed")):(this.style.setProperty("--ktg-pentaton-top","0px"),this.style.setProperty("--ktg-pentaton-position","absolute"))}),this.renderLoop.play())}render(){return j`
      <div
        class=${ai({"pentaton__wrapper--preload":this.preload,"pentaton__wrapper--intro-animation":this.horizonIntroAnimation&&this.animated,pentaton__wrapper:!0})}
      >
        <div class="pentaton__rows">
          <div class="pentaton__row pentaton__row--first"></div>
          <div class="pentaton__row pentaton__row--second"></div>
          <div class="pentaton__row pentaton__row--third"></div>
          <div class="pentaton__row pentaton__row--fourth"></div>
          <div class="pentaton__row pentaton__row--fifth"></div>
        </div>
      </div>
    `}};i(dp,"KTGPentatonElement"),dp.styles=cp,o([Ct(".pentaton__wrapper--intro-animation .row--fifth")],dp.prototype,"horizonAnimatedFifthRow",2),o([wt()],dp.prototype,"preload",2),o([wt()],dp.prototype,"horizonIntroAnimation",2),o([kt({type:Boolean,reflect:!0})],dp.prototype,"animated",2),dp=o([ft("ktg-pentaton")],dp);var hp=class extends mt{constructor(){super(...arguments),this.currentYear=(new Date).getFullYear()}render(){return j`
      <footer class="footer">
        <div class="footer__header">
          <div class="footer__header-inner">
            <ktg-logo class="footer__logo"></ktg-logo>
          </div>
        </div>
        <div class="footer__content">
          <div class="footer__main">
            <slot
              class="footer__column-left"
              name="columns-left"
            ></slot>
            <slot
              class="footer__column-right"
              name="columns-right"
            ></slot>
          </div>
          <div class="footer__meta-wrapper">
            <div class="footer__links">
              <slot name="links"></slot>
            </div>
            <div class="footer__meta">
              <span class="footer__copyright">&copy; ${this.currentYear}</span>
              <slot name="navigation"></slot>
            </div>
          </div>
        </div>
      </footer>
    `}};i(hp,"KTGFooterElement"),hp.styles=ap,hp=o([ft("ktg-footer")],hp);var up=[...ae,...ne,d`
    :host {
      display: block;
    }

    .footer {
      background-color: var(--ktg-color-neutral-01);
      color: var(--ktg-color-text);
      font-size: 0.875rem;
      line-height: 120%;
      padding-top: 1.5rem;
      padding-bottom: 1.3125rem;
    }

    @media screen and (min-width: ${He}px) {
      .footer {
        padding-top: 2.5rem;
        padding-bottom: 3rem;
      }
    }

    .footer__content {
      max-width: ${Ue}px;
      margin: 0 auto;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    @media screen and (min-width: ${Ke}px) {
      .footer__content {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }

    @media screen and (min-width: ${Ue}px) {
      .footer__content {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
      }
    }

    .footer__header {
      margin-bottom: 6.75rem;
    }

    @media screen and (min-width: ${He}px) {
      .footer__header {
        margin-bottom: 10rem;
      }
    }

    .footer__logo {
      width: 9rem;
    }

    .footer__main {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
      padding-bottom: 2.5rem;
    }

    @media screen and (min-width: ${He}px) {
      .footer__main {
        gap: 2rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
      }
    }

    .footer__column-left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 2rem;
    }

    @media screen and (min-width: ${He}px) {
      .footer__column-left {
        flex-direction: row;
      }
    }

    .footer__column-right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      gap: 2rem;
    }

    @media screen and (min-width: ${He}px) {
      .footer__column-right {
        flex-direction: row;
      }
    }

    .footer__meta {
      padding-top: 1.25rem;
      border-top: 0.0625rem solid var(--ktg-color-neutral-03);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    @media screen and (min-width: ${He}px) {
      .footer__meta {
        padding-top: 2.5rem;
      }
    }
  `],pp=class extends mt{constructor(){super(...arguments),this.currentYear=(new Date).getFullYear()}render(){return j`
      <footer class="footer">
        <div class="footer__content">
          <div class="footer__header">
            <ktg-logo class="footer__logo"></ktg-logo>
          </div>

          <div class="footer__main">
            <slot
              class="footer__column-left"
              name="columns-left"
            ></slot>
            <slot
              class="footer__column-right"
              name="columns-right"
            ></slot>
          </div>

          <div class="footer__meta">
            <span class="footer__copyright">&copy; ${this.currentYear}</span>
            <slot name="navigation"></slot>
          </div>
        </div>
      </footer>
    `}};i(pp,"KTGFooterLegacyElement"),pp.styles=up,pp=o([ft("ktg-footer-legacy")],pp);var gp=[...ae,...ne,d`
    :host {
      display: inline-block;
    }

    .eyebrow {
      display: block;
      font-size: 0.625rem;
      letter-spacing: 0.02em;
      line-height: 1rem;
    }

    @media (min-width: ${Ke}px) {
      .eyebrow {
        font-size: 0.75rem;
      }
    }
  `],mp=class extends mt{connectedCallback(){super.connectedCallback(),this.checkAndSetImplicitSlot()}checkAndSetImplicitSlot(){this.closest("ktg-form-accordion-header")&&(this.slot="eyebrow")}render(){return j`
      <span class="eyebrow">
        <slot></slot>
      </span>
    `}};i(mp,"KTGFormAccordionHeaderEyebrowElement"),mp.styles=gp,mp=o([ft("ktg-form-accordion-header-eyebrow")],mp);var vp=[...ae,...ne,d`
    :host {
      display: inline-block;
    }
  `],fp=class extends mt{connectedCallback(){super.connectedCallback(),this.checkAndSetImplicitSlot(),this.id=this.hasAttribute("id")?this.id:"ktg-form-accordion-header-title-"+ ++fp.idCounter}checkAndSetImplicitSlot(){this.closest("ktg-form-accordion-header")&&(this.slot="title")}render(){return j`<slot></slot>`}};i(fp,"KTGFormAccordionHeaderTitleElement"),fp.idCounter=-1,fp.styles=vp,fp=o([ft("ktg-form-accordion-header-title")],fp);var bp=[...ae,...ne,d`
    :host {
      display: block;
    }

    .form-accordion-header {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1.25rem 0.5rem;
      color: var(--ktg-color-text);
      background-color: var(--ktg-color-neutral-01);
    }

    @media (min-width: ${Ke}px) {
      .form-accordion-header {
        flex-direction: row;
        align-items: center;
        gap: 1.5rem;
        padding: 1rem 1rem 1rem 1rem;
      }
    }

    :host([disabled]) .form-accordion-header {
      background-color: var(--ktg-color-neutral-01);
      color: var(--ktg-color-neutral-04);
    }

    :host([error]:not([disabled])) .form-accordion-header {
      outline: 0.0125rem solid var(--ktg-color-danger);
    }

    .form-accordion-header__header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.25rem;
      flex: 1;
    }

    .form-accordion-header__eyebrow {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .form-accordion__title {
      font-size: 0.875rem;
    }

    @media (min-width: ${Ke}px) {
      .form-accordion__title {
        font-size: 1.125rem;
      }
    }

    .form-accordion-header__progress-bar {
      display: flex;
      align-items: center;
      width: 100%;
    }

    @media (min-width: ${Ke}px) {
      .form-accordion-header__progress-bar {
        width: 10rem;
      }
    }

    .form-accordion-header__button ::slotted(ktg-button),
    .form-accordion-header__button ::slotted(ktg-link-button) {
      width: 100%;
    }

    @media (min-width: ${Ke}px) {
      .form-accordion-header__button ::slotted(ktg-button),
      .form-accordion-header__button ::slotted(ktg-link-button) {
        width: auto;
      }
    }
  `],yp="important",kp=" !"+yp,wp=je(class extends Ze{constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{let o=t[i];return null==o?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){let{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(let t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(let t in e){let o=e[t];if(null!=o){this.ft.add(t);let e="string"==typeof o&&o.endsWith(kp);t.includes("-")||e?i.setProperty(t,e?o.slice(0,-11):o,e?yp:""):i[t]=o}}return X}}),_p=[...ae,...ne,d`
    :host {
      display: block;
      width: 100%;
      font-size: 0.625rem;
    }

    @media (min-width: ${Ke}px) {
      :host {
        font-size: 0.75rem;
      }
    }

    .progress-bar {
      display: block;
      position: relative;
      width: inherit;
      background-color: var(--ktg-color-neutral-03);
      color: var(--ktg-color-text);
    }

    :host([disabled]) .progress-bar {
      background-color: var(--ktg-color-neutral-02);
    }

    :host([size='small']) .progress-bar {
      height: 0.125rem;
    }

    :host([size='medium']) .progress-bar {
      height: 0.25rem;
    }

    :host([size='large']) .progress-bar {
      height: 0.5rem;
    }

    .progress-bar--overflowing {
      background-color: var(--ktg-color-danger);
    }

    .progress-bar__rect {
      fill: var(--ktg-color-brand1-01);
      transform: scaleX(0);
      transition: transform ease-out 0.2s;
    }

    @media (prefers-reduced-motion: reduce) {
      .progress-bar__rect {
        transition: none;
      }
    }

    .progress-bar--overflowing .progress-bar__rect {
      background-color: var(--ktg-color-brand1-01);
    }

    :host(:not([disabled])[error]) .progress-bar__rect {
      fill: var(--ktg-color-danger);
    }

    :host([disabled]) .progress-bar__rect {
      fill: var(--ktg-color-neutral-03);
    }

    .progress-bar__label {
    }

    :host(:not([disabled])[error]) .progress-bar__label {
      color: var(--ktg-color-danger);
    }

    :host([disabled]) .progress-bar__label {
      color: var(--ktg-color-neutral-04);
    }

    .progress-bar__label-span {
      display: none;
      margin-bottom: 0.375rem;
    }

    .progress-bar__label--visible .progress-bar__label-span {
      display: block;
    }
  `],xp=class extends mt{constructor(){super(...arguments),this.isOverflowing=!1,this.renderedProgress=0,this.min=0,this.max=1,this.progress=0,this.size="medium",this.text="",this.errorText="",this.error=!1,this.disabled=!1}firstUpdated(t){super.firstUpdated(t)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","progressbar"),this.checkAndSetImplicitSlot()}checkAndSetImplicitSlot(){this.closest("ktg-form-accordion-header")&&(this.slot="progress-bar")}willUpdate(t){super.willUpdate(t),(t.has("progress")||t.has("min")||t.has("max"))&&(this.computeBarWidthInPercent(),this.updateAriaAttributes())}computeBarWidthInPercent(){this.isOverflowing=this.progress>this.max;let t=this.progress>this.max?this.progress:this.max,e=this.progress>this.max?this.max:this.progress;this.renderedProgress=Mt(Rt(e,this.min,t))}updateAriaAttributes(){this.text?this.setAttribute("aria-valuetext",this.renderValueText()):this.removeAttribute("aria-valuetext"),this.setAttribute("aria-valuenow",this.progress.toString()),this.setAttribute("aria-valuemin",this.min.toString()),this.setAttribute("aria-valuemax",this.max.toString())}renderValueText(){return this.error&&this.errorText?this.replacePlaceholders(this.errorText):this.replacePlaceholders(this.text)}replacePlaceholders(t){let e=this.progress/this.max*100;return(t=(t=(t=t.replace("{percentage}",`${Math.round(e)}`)).replace("{progress}",`${this.progress}`)).replace("{min}",`${this.min}`)).replace("{max}",`${this.max}`)}render(){return j`
      <div
        class=${ai({"progress-bar__label":!0,"progress-bar__label--visible":""!==this.text})}
      >
        <span class="progress-bar__label-span">
          ${this.renderValueText()}
        </span>
      </div>

      <svg
        class=${ai({"progress-bar":!0,"progress-bar--overflowing":this.isOverflowing})}
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <rect
          class="progress-bar__rect"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          style=${wp({transform:`scaleX(${this.renderBarProgress()})`})}
        />
      </svg>
    `}renderBarProgress(){return this.error?1:this.renderedProgress}};i(xp,"KTGProgressBarElement"),xp.styles=_p,o([wt()],xp.prototype,"renderedProgress",2),o([kt({type:Number})],xp.prototype,"min",2),o([kt({type:Number})],xp.prototype,"max",2),o([kt({type:Number})],xp.prototype,"progress",2),o([kt({type:String,reflect:!0})],xp.prototype,"size",2),o([kt({type:String})],xp.prototype,"text",2),o([kt({type:String,attribute:"error-text"})],xp.prototype,"errorText",2),o([kt({type:Boolean,reflect:!0})],xp.prototype,"error",2),o([kt({type:Boolean,reflect:!0})],xp.prototype,"disabled",2),xp=o([ft("ktg-progress-bar")],xp);var Cp=class extends mt{constructor(){super(...arguments),this.disabled=!1,this.error=!1}connectedCallback(){super.connectedCallback(),this.checkAndSetImplicitSlot()}checkAndSetImplicitSlot(){this.closest("ktg-form-accordion-item")&&(this.slot="header")}updated(t){super.updated(t),t.has("disabled")&&this.updateButtons(),(t.has("disabled")||t.has("error"))&&(this.updateProgressBars(),this.updatePills())}onPillSlotChange(){this.updatePills()}onTitleSlotChange(){this.updateTitles()}onProgressBarSlotChange(){this.updateProgressBars()}onButtonSlotChange(){this.updateButtons()}render(){return j`
      <header class="form-accordion-header">
        <div class="form-accordion-header__header">
          <div class="form-accordion-header__eyebrow">
            <slot name="eyebrow"></slot>

            <slot
              name="pill"
              @slotchange=${this.onPillSlotChange}
            ></slot>
          </div>

          <h2 class="form-accordion__title">
            <slot
              name="title"
              @slotchange=${this.onTitleSlotChange}
            ></slot>
          </h2>
        </div>

        <div class="form-accordion-header__progress-bar">
          <slot
            name="progress-bar"
            @slotchange=${this.onProgressBarSlotChange}
          ></slot>
        </div>

        <div class="form-accordion-header__button">
          <slot
            name="button"
            @slotchange=${this.onButtonSlotChange}
          ></slot>
        </div>
      </header>
    `}updateButtons(){for(let t of this.buttonElements)t.disabled=this.disabled}updateTitles(){this.setLabelledbyOnProgressbar()}updatePills(){for(let t of this.pillElements)t.disabled=this.disabled,this.error?t.appearanceOverride="error":t.appearanceOverride=null}updateProgressBars(){for(let t of this.progressElements)t.disabled=this.disabled,t.error=this.error;this.setLabelledbyOnProgressbar()}setLabelledbyOnProgressbar(){let t=this.titleElements[0],e=this.progressElements[0];t&&e&&e.setAttribute("aria-labelledby",`${t.id}`)}};i(Cp,"KTGFormAccordionHeaderElement"),Cp.styles=bp,o([kt({type:Boolean,reflect:!0})],Cp.prototype,"disabled",2),o([kt({type:Boolean,reflect:!0})],Cp.prototype,"error",2),o([Et({selector:"ktg-pill",slot:"pill"})],Cp.prototype,"pillElements",2),o([Et({selector:"ktg-form-accordion-header-title",slot:"title"})],Cp.prototype,"titleElements",2),o([Et({selector:"ktg-progress-bar",slot:"progress-bar"})],Cp.prototype,"progressElements",2),o([Et({selector:"ktg-button, ktg-link-button",slot:"button"})],Cp.prototype,"buttonElements",2),Cp=o([ft("ktg-form-accordion-header")],Cp);var Sp=[...ae,...ne,d`
    :host {
      display: block;
      background-color: var(--ktg-color-neutral-01);
    }

    :host([disabled]) {
      pointer-events: none;
    }

    .form-accordion-item__header {
      width: 100%;
    }

    .form-accordion-item__content {
      border-top: 0.0625rem solid var(--ktg-color-neutral-02);
      color: var(--ktg-color-text);
    }

    :host([disabled]) .form-accordion-item__content {
      color: var(--ktg-color-neutral-04);
    }
  `],Ep=class extends ie{static{i(this,"KTGFormAccordionItemExpandEvent")}},Tp=class extends oe{static{i(this,"KTGFormAccordionItemCollapseEvent")}},Ip=class extends mt{constructor(){super(...arguments),this.expanded=!1,this.disabled=!1}updated(t){super.updated(t),t.has("disabled")&&this.updateHeaders()}expand(){this.accordionItem.expand()}collapse(){this.accordionItem.collapse()}onExpand(t){t.stopPropagation(),this.expanded=!0,this.dispatchEvent(new Ep({bubbles:!0,cancelable:!1}))}onCollapse(t){t.stopPropagation(),this.expanded=!1,this.dispatchEvent(new Tp({bubbles:!0,cancelable:!1}))}onHeaderSlotChange(){this.updateHeaders()}render(){return j`
      <ktg-cdk-accordion-item
        class="form-accordion-item"
        no-header-button
        .expanded=${this.expanded}
        .disabled=${this.disabled}
        @expand=${this.onExpand}
        @collapse=${this.onCollapse}
      >
        <span
          class="form-accordion-item__header"
          slot="header"
        >
          <slot
            name="header"
            @slotchange=${this.onHeaderSlotChange}
          ></slot>
        </span>

        <div class="form-accordion-item__content">
          <slot></slot>
        </div>
      </ktg-cdk-accordion-item>
    `}updateHeaders(){for(let t of this.headerItems)t.disabled=this.disabled}};i(Ip,"KTGFormAccordionItemElement"),Ip.styles=Sp,o([kt({type:Boolean,reflect:!0})],Ip.prototype,"expanded",2),o([kt({type:Boolean,reflect:!0})],Ip.prototype,"disabled",2),o([Ct("ktg-cdk-accordion-item")],Ip.prototype,"accordionItem",2),o([Et({selector:"ktg-form-accordion-header",slot:"header",flatten:!0})],Ip.prototype,"headerItems",2),Ip=o([ft("ktg-form-accordion-item")],Ip);var $p=[...ae,d`
    :host {
      display: block;
    }

    .form-accordion {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
    }
  `],Op=class extends mt{render(){return j`
      <ktg-cdk-accordion
        class="form-accordion"
        single-expanded
      >
        <slot></slot>
      </ktg-cdk-accordion>
    `}};i(Op,"KTGFormAccordionElement"),Op.styles=$p,Op=o([ft("ktg-form-accordion")],Op);var Lp=class extends gu{static{i(this,"KTGFormModalCloseEvent")}},Dp=class extends mu{static{i(this,"KTGFormModalDismissEvent")}},Ap=[...ae,...ne,...dh,d`
    :host {
      position: relative;
      display: none;
      width: 100%;
      max-width: min(46rem, calc(100cqw - 1rem));
      max-height: min(
        46rem,
        calc(100cqh - var(--ktg-overlay-y-offset-small) - 2rem)
      );
    }

    :host(.ktg-cdk-modal--in-custom-outlet) {
      max-width: min(46rem, calc(100cqw - 1rem));
      max-height: min(46rem, calc(100cqh - 2rem));
    }

    @container (min-width: ${Ke}px) {
      :host {
        max-width: min(46rem, calc(100cqw - 4rem));
        max-height: min(
          46rem,
          calc(100cqh - var(--ktg-overlay-y-offset-large) - 4rem)
        );
      }

      :host(.ktg-cdk-modal--in-custom-outlet) {
        max-width: min(46rem, calc(100cqw - 1rem));
        max-height: min(46rem, calc(100cqh - 2rem));
      }
    }

    .form-modal {
      position: relative;
      display: flex;
      flex-direction: column;
      flex-shrink: 1;
      border: none;
      width: 100%;
      height: 100%;
      min-height: 0;
      max-width: inherit;
      max-height: inherit;
      overflow: hidden;
      color: var(--ktg-color-text);
      background-color: var(--ktg-color-neutral-01);
    }

    :host([closable]) .form-modal {
      padding-top: 0;
    }

    .form-modal__scroll-container {
      position: relative;
      flex-grow: 1;
      overflow: auto;
    }

    .form-modal__icon-header {
      display: flex;
      justify-content: flex-end;
      padding-top: 1.5rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-bottom: 1.5rem;
    }

    @media screen and (min-width: ${Ke}px) {
      .form-modal__icon-header {
        padding-top: 2.5rem;
        padding-left: 2.5rem;
        padding-right: 2.5rem;
        padding-bottom: 1.5rem;
      }
    }

    .form-modal__close-button {
      display: flex;
      border: none;
      background-color: transparent;
      color: var(--ktg-color-link);
      cursor: pointer;
    }

    .form-modal__close-button:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: 0.125rem;
    }

    .form-modal__main {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding-top: 1.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    :host([closable]) .form-modal__main {
      padding-top: 0;
    }

    @media screen and (min-width: ${Ke}px) {
      .form-modal__main {
        padding-top: 2.5rem;
        padding-left: 2.5rem;
        padding-right: 2.5rem;
      }

      :host([closable]) .form-modal__main {
        padding-top: 0;
      }
    }

    .form-modal__buttons {
      width: 100%;
      background-color: var(--ktg-color-neutral-01);
      padding-bottom: 1.5rem;
    }

    @media screen and (min-width: ${Ke}px) {
      .form-modal__buttons {
        padding-bottom: 2.5rem;
      }
    }

    .form-modal__scrollbar {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      z-index: 10;
    }
  `];re([d`
    .ktg-form-modal-title {
      font-family: var(--ktg-font-sans-serif);
      font-weight: var(--ktg-font-weight-default);
      font-size: 1.5rem;
      line-height: 120%;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 0.0625rem solid var(--ktg-color-neutral-02);
      margin-bottom: 1rem;
    }
    .ktg-form-modal-title:last-child {
      margin-bottom: 0;
    }

    @media screen and (min-width: ${Ke}px) {
      .ktg-form-modal-title {
        padding-left: 1rem;
        padding-right: 1rem;
        margin-bottom: 2.5rem;
      }
    }

    .ktg-form-modal-text {
      font-family: var(--ktg-font-sans-serif);
      font-weight: var(--ktg-font-weight-default);
      font-size: 0.875rem;
      line-height: 120%;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      margin-bottom: 1.75rem;
    }

    @media screen and (min-width: ${Ke}px) {
      .ktg-form-modal-text {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
  `]);var Mp=[...ae,...ne,d`
    :host {
      display: block;
    }

    .form-modal-buttons {
      display: flex;
      gap: 1rem;
      padding-top: 1.75rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    :host([vertical]) .form-modal-buttons {
      flex-direction: column;
      gap: 0.5rem;
    }

    @media screen and (min-width: ${Ke}px) {
      .form-modal-buttons {
        padding-top: 1.75rem;
        padding-left: 2.5rem;
        padding-right: 2.5rem;
      }
    }
  `],Bp=class extends mt{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.slot="buttons"}render(){return j`
      <div class="form-modal-buttons">
        <slot></slot>
      </div>
    `}};i(Bp,"KTGFormModalButtonsElement"),Bp.styles=Mp,o([kt({type:Boolean,reflect:!0})],Bp.prototype,"vertical",2),Bp=o([ft("ktg-form-modal-buttons")],Bp);var zp=class extends uu{constructor(){super(...arguments),this.closable=!1}render(){return j`
      <dialog
        class="form-modal"
        aria-modal="true"
        ?open=${this._isOpen}
      >
        <div
          class="form-modal__scroll-container"
          id=${this.id+"__scrollcontainer"}
        >
          ${this.renderCloseButton()}

          <div class="form-modal__main">
            <slot></slot>
          </div>
        </div>

        <div class="form-modal__buttons">
          <slot name="buttons"></slot>
        </div>
      </dialog>

      <ktg-scrollbar
        class="form-modal__scrollbar"
        for=${this.id+"__scrollcontainer"}
      ></ktg-scrollbar>
    `}renderCloseButton(){return this.closable?j`
        <div class="form-modal__icon-header">
          <button
            class="form-modal__close-button"
            type="button"
            @click=${this.dismiss}
            aria-label="form-modal-close-button"
          >
            <ktg-icon name="close"></ktg-icon>
          </button>
        </div>
      `:j``}dispatchCloseEvent(){this.dispatchEvent(new Lp({bubbles:!0,cancelable:!1}))}dispatchDismissEvent(){this.dispatchEvent(new Dp({bubbles:!0,cancelable:!1}))}};i(zp,"KTGFormModalElement"),zp.styles=Ap,o([kt({type:Boolean,reflect:!0})],zp.prototype,"closable",2),zp=o([ft("ktg-form-modal")],zp);var Np=[...ae,d`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      z-index: -1; /* Ensure it is behind other header elements */
    }
    ::slotted(img) {
      width: 100%;
      height: 100%;
      object-fit: cover; /* Cover the entire area */
    }
  `],Rp=class extends mt{connectedCallback(){super.connectedCallback(),this.slot="header-background"}render(){return j`<slot></slot>`}};i(Rp,"KTGHeaderImageBackgroundElement"),Rp.styles=Np,Rp=o([ft("ktg-header-image-background")],Rp);var Pp=[...ae,d`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      z-index: -1; /* Ensure it is behind other header elements */
    }
    ::slotted(video) {
      width: 100%;
      height: 100%;
      object-fit: cover; /* Cover the entire area */
    }
    .play-pause-button {
      --ktg-color-brand1-01: var(--ktg-color-link);
      position: absolute;
      top: 6px;
      right: 6px;
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(15px);
    }
    .play-pause-button__label {
      display: none;
    }
    @media screen and (min-width: ${He}px) {
      .play-pause-button__label {
        color: var(--ktg-color-text);
        display: inline-block;
      }
      .play-pause-button {
        top: auto;
        right: 16px;
        bottom: 16px;
      }
    }
  `],Fp=class extends mt{constructor(){super(...arguments),this.playLabel="Video abspielen",this.pauseLabel="Video pausieren",this.isPlaying=!1}connectedCallback(){super.connectedCallback(),this.slot="header-background",console.log(this.slotChildren)}firstUpdated(){let t=this.slotChildren.find(t=>"video"===t.tagName.toLowerCase());t&&(t.addEventListener("play",()=>{this.isPlaying=!0}),t.addEventListener("pause",()=>{this.isPlaying=!1}),t.addEventListener("ended",()=>{this.isPlaying=!1}),t.setAttribute("autoplay",""),t.setAttribute("loop",""),t.setAttribute("muted",""),t.muted=!0,t.playsInline=!0,t.play()),this.videoElement=t}playPauseVideo(){this.videoElement&&(this.videoElement.paused?this.videoElement.play():this.videoElement.pause())}render(){return j`<slot></slot>
      <div class="play-pause-button">
        ${si(this.isPlaying,()=>j`<ktg-button
              appearance="tertiary"
              trailing-icon="pause"
              size="small"
              @click="${this.playPauseVideo}"
            >
              <span class="play-pause-button__label">${this.pauseLabel}</span>
            </ktg-button>`,()=>j`<ktg-button
              appearance="tertiary"
              trailing-icon="play"
              size="small"
              @click="${this.playPauseVideo}"
            >
              <span class="play-pause-button__label">${this.playLabel}</span>
            </ktg-button>`)}
      </div>`}};i(Fp,"KTGHeaderVideoBackgroundElement"),Fp.styles=Pp,o([Et({flatten:!0})],Fp.prototype,"slotChildren",2),o([Ct(".play-pause-button")],Fp.prototype,"playPauseButton",2),o([kt({type:String,reflect:!0})],Fp.prototype,"playLabel",2),o([kt({type:String,reflect:!0})],Fp.prototype,"pauseLabel",2),o([wt()],Fp.prototype,"isPlaying",2),Fp=o([ft("ktg-header-video-background")],Fp);var Vp=[...ae,...ne,d`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    .header__inner {
      display: flex;
      position: relative;
      flex-direction: column-reverse;
      color: var(--ktg-color-dark-contrast);
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      width: 100%;
      max-width: ${Ue}px;
      min-height: 160px;
    }

    :host([appearance='home']) .header__inner {
      min-height: 403px;
    }

    .header__inner__text {
      display: flex;
      flex-direction: column;
      gap: 9px;
    }
    .header__inner__content {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }
    .header__subtitle {
      font-weight: var(--ktg-font-weight-default);
      line-height: 120%;
      font-size: 0.75rem;
      max-width: 50rem;
    }

    .header__title {
      font-weight: var(--ktg-font-weight-default);
      line-height: 100%;
      font-size: 2.125rem;
      max-width: 50rem;
    }
    .header__background {
      background-color: var(--ktg-color-brand1-03);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .header__horizon {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
    }
    :host([appearance='default']) .header__horizon {
      --ktg-pentaton-width: 97px;
      --ktg-pentaton-height: 80px;
    }
    :host([appearance='home']) .header__horizon {
      --ktg-pentaton-width: 97px;
      --ktg-pentaton-height: 82px;
    }
    :host([appearance='home']) .header__horizon--small,
    :host([appearance='default']) .header__horizon--small {
      --ktg-pentaton-transform: scaleX(1) scaleY(0.5);
    }
    .header__horizon {
      --ktg-pentaton-transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
    @media screen and (min-width: ${Ke}px) {
      .header__inner {
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
      }
    }

    @media screen and (min-width: ${He}px) {
      .header__inner {
        min-height: 360px;
        padding-left: 0rem;
        padding-right: 6rem;
        padding-top: 0rem;
        padding-bottom: 0rem;
      }

      :host([appearance='default']) .header__horizon {
        --ktg-pentaton-width: 112px;
        --ktg-pentaton-height: 112px;
      }
      :host([appearance='default']) .header__horizon--small {
        --ktg-pentaton-transform: translateX(-50%) scaleX(1) scaleY(0.5);
      }

      :host([appearance='home']) .header__inner {
        min-height: 480px;
      }

      :host([appearance='home']) .header__background {
        left: 5rem;
        width: calc(100% - 5rem);
      }
      :host([appearance='home']) .header__inner__content {
        padding-left: 23.75rem;
        padding-top: 80px;
        padding-bottom: 80px;
        flex: 1 1 auto;
        gap: 0;
      }
      :host([appearance='home']) .header__subtitle {
        font-size: 1rem;
      }

      :host([appearance='home']) .header__title {
        font-size: 4.75rem;
      }
      :host([appearance='home']) .header__inner__text {
        flex: 1 1 auto;
        justify-content: center;
      }
      :host([appearance='home']) .header__inner__text--with-search-bar {
        margin-top: 40px;
      }
      :host([appearance='home']) .header__inner__text--with-subtitle {
        padding-bottom: 20px;
      }

      :host([appearance='home']) .header__horizon {
        top: ${5}rem; /* 80px in rem */
        left: 9.375rem;
        --ktg-pentaton-width: 300px;
        --ktg-pentaton-height: 320px;
      }

      :host([appearance='home']) .header__horizon--small {
        --ktg-pentaton-transform: translateX(-50%) scaleX(0.373333333)
          scaleY(0.15);
      }
      :host([appearance='home']) .header__horizon:not(.header__horizon--small) {
        --ktg-pentaton-position: absolute;
        --ktg-pentaton-top: 0;
        --ktg-pentaton-left: 0;
      }
      ::slotted(ktg-text-input) {
        width: 464px;
      }
    }
  `],Kp=class extends mt{constructor(){super(...arguments),this.appearance="default",this.titleText="",this.subtitleText="",this.horizonIsSmall=!1,this.searchHasChildren=!1,this.backgroundHasChildren=!1,this.renderLoop=null,this.mainNavigationElement=null}onSearchSlotChange(){this.searchHasChildren=this.searchSlotChildren.length>0}onBackgroundSlotChange(){this.backgroundHasChildren=this.backgroundSlotChildren.length>0}firstUpdated(t){this.mainNavigationElement=document.querySelector("ktg-main-navigation"),super.firstUpdated(t),this.createStickyHorizonObserver()}createStickyHorizonObserver(){this.renderLoop||(this.renderLoop=new $e,this.renderLoop.on("update",()=>{let t=this.mainNavigationElement?.getBoundingClientRect().height||0;this.getBoundingClientRect().y<=t-80?this.horizonIsSmall=!0:this.horizonIsSmall=!1}),this.renderLoop.play())}disconnectedCallback(){super.disconnectedCallback(),this.renderLoop?.destroy(),this.renderLoop=null}render(){return j`
      <div class="header__inner">
        <div
          class=${ai({"header__horizon--small":this.horizonIsSmall,header__horizon:!0})}
        >
          ${si("home"===this.appearance,()=>j` <ktg-pentaton animated></ktg-pentaton> `,()=>j` <ktg-pentaton></ktg-pentaton> `)}
        </div>
          <div class="header__background">
            <slot
              name="header-background"
              @slotchange=${this.onBackgroundSlotChange}
            ></slot>
          </div>
          ${si("home"===this.appearance,()=>j`<div class="header__inner__content">
                <div
                  class=${ai({header__inner__text:!0,"header__inner__text--with-search-bar":this.searchHasChildren,"header__inner__text--with-subtitle":this.subtitleText})}
                >
                  ${si(this.subtitleText,()=>j`<p class="header__subtitle">${this.subtitleText}</p>`)}
                  ${si(this.titleText,()=>j`<p class="header__title">${this.titleText}</p>`)}
                </div>
                <slot
                  name="search"
                  @slotchange=${this.onSearchSlotChange}
                ></slot>
              </div>`)}
        </div>
      </div>
    `}};i(Kp,"KTGHeaderElement"),Kp.styles=Vp,o([kt({type:String,reflect:!0})],Kp.prototype,"appearance",2),o([kt({type:String,attribute:"title"})],Kp.prototype,"titleText",2),o([kt({type:String,attribute:"subtitle"})],Kp.prototype,"subtitleText",2),o([Et({slot:"search",flatten:!0})],Kp.prototype,"searchSlotChildren",2),o([Et({slot:"header-background",flatten:!0})],Kp.prototype,"backgroundSlotChildren",2),o([wt()],Kp.prototype,"horizonIsSmall",2),o([wt()],Kp.prototype,"searchHasChildren",2),o([wt()],Kp.prototype,"backgroundHasChildren",2),Kp=o([ft("ktg-header")],Kp);var Hp=[...ae,d`
    .header-topic-paragraph {
      font-style: normal;
      font-weight: var(--ktg-font-weight-default);
      font-size: calc(var(--ktg-font-size-t) * (1.25 - 1) + 1rem);
      line-height: 140%;
    }
  `],Gp=class extends mt{connectedCallback(){super.connectedCallback(),this.checkAndSetImplicitSlot()}checkAndSetImplicitSlot(){this.closest("ktg-header-topic")&&(this.slot="paragraph")}render(){return j`
      <p class="header-topic-paragraph">
        <slot></slot>
      </p>
    `}};i(Gp,"KTGHeaderTopicParagraphElement"),Gp.styles=Hp,Gp=o([ft("ktg-header-topic-paragraph")],Gp);var Up=[...ae,d`
    .header-topic-title {
      font-size: calc(var(--ktg-font-size-t, 1rem) * (4.75 - 2.125) + 2.125rem);
      line-height: 100%;
    }
  `],Wp=class extends mt{connectedCallback(){super.connectedCallback(),this.checkAndSetImplicitSlot()}checkAndSetImplicitSlot(){this.closest("ktg-header-topic")&&(this.slot="title")}render(){return j`
      <h1 class="header-topic-title">
        <slot></slot>
      </h1>
    `}};i(Wp,"KTGHeaderTopicTitleElement"),Wp.styles=Up,Wp=o([ft("ktg-header-topic-title")],Wp);var Yp=[...ae,...ne,d`
    :host {
      display: flex;
      flex-direction: column;
      gap: 4.5rem;
    }

    .header-topic__wrapper {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      padding-top: 2.5rem;
      color: var(--ktg-color-text);
    }

    @media screen and (min-width: ${Ke}px) {
      .header-topic__wrapper {
        padding-top: 0;
      }
    }

    .header-topic__title {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    @media screen and (min-width: ${Ke}px) {
      .header-topic__title {
        padding-left: 0;
        padding-right: 0;
      }
    }

    .header-topic__breadcrumbs {
      display: none;
    }

    @media screen and (min-width: ${Ke}px) {
      .header-topic__breadcrumbs--has-children {
        display: block;
      }
    }

    .header-topic__paragraph {
      display: none;
      margin-top: -0.5rem;
      margin-bottom: -0.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      max-width: 58rem;
    }

    .header-topic__paragraph--has-children {
      display: block;
    }

    @media screen and (min-width: ${Ke}px) {
      .header-topic__paragraph {
        margin-top: 0;
        margin-bottom: 0;
        padding-left: 0;
        padding-right: 2rem;
      }
    }

    .header-topic__tabs {
      display: none;
      position: relative;
    }

    .header-topic__tabs--has-children {
      display: block;
    }

    .header-topic__tabs-scroll-container {
      overflow-x: auto;
      width: 100%;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .header-topic__tabs-scroll-container::-webkit-scrollbar {
      display: none;
    }

    .header-topic__tabs--scrollable .header-topic__tabs-scroll-container {
      mask-image: linear-gradient(
        90deg,
        rgba(0, 0, 0, var(--ktg-header-topic-tabs-opacity-start, 1)) 5%,
        rgba(0, 0, 0, 1) 30%,
        rgba(0, 0, 0, 1) 70%,
        rgba(0, 0, 0, var(--ktg-header-topic-tabs-opacity-end, 1)) 95%
      );
    }

    .header-topic__tabs-inner {
      display: inline-block;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 0.0625rem;
      min-width: 100%;
    }

    @media screen and (min-width: ${Ke}px) {
      .header-topic__tabs-inner {
        padding-left: 0;
        padding-right: 0;
        width: 100%;
      }
    }

    .header-topic__scrollable-indicator {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: var(--ktg-color-focus);
      pointer-events: none;
      opacity: 0;
    }

    .header-topic__scrollable-indicator--start {
      opacity: calc(1 - var(--ktg-header-topic-tabs-opacity-start, 1));
      left: 0.5rem;
    }

    .header-topic__scrollable-indicator--end {
      opacity: calc(1 - var(--ktg-header-topic-tabs-opacity-end, 1));
      right: 0.5rem;
    }
  `],qp=class extends Event{static{i(this,"KTGTabActivateEvent")}constructor(t){super("activate",t)}},jp=[...ae,...ne,d`
    :host([disabled]) {
      z-index: 1;
    }

    .tab__button {
      position: relative;
      border: none;
      background-color: var(--ktg-color-neutral-01);
      white-space: nowrap;
      font-size: 1rem;
      cursor: pointer;
      user-select: none;
      color: var(--ktg-color-text);
      outline: 0;
    }

    :host([disabled]) .tab__button {
      cursor: default;
      color: var(--ktg-color-neutral-04);
      background-color: var(--ktg-color-neutral-01);
    }

    :host([active]:not([disabled])) .tab__button {
      box-shadow: 0 0.0625rem 0 var(--ktg-color-background-01);
      opacity: 1;
    }

    .tab__button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: var(--ktg-color-background-01);
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }

    :host([active]:not([disabled])) .tab__button::before {
      opacity: 1;
    }

    .tab__button::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      pointer-events: none;
    }

    .tab__button:focus-visible::after {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: -0.125rem;
    }

    .tab__decoration-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0.25rem;
    }

    .tab__button:focus-visible .tab__decoration-container {
      top: 0.125rem;
    }

    .tab__decoration {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: var(--ktg-color-brand3-01);
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }

    :host(:hover) .tab__decoration {
      opacity: 1;
    }

    :host(:hover:not([active])) .tab__button--inside-list .tab__decoration {
      opacity: 0;
    }

    :host([disabled]) .tab__decoration {
      opacity: 0;
      background-color: var(--ktg-color-neutral-02);
    }

    :host([active]:not([disabled])) .tab__decoration {
      opacity: 1;
    }

    .tab__content {
      padding: 0.75rem 0.5rem;
      position: relative;
      display: flex;
      gap: 0.5rem;
      z-index: 1;
    }

    @media screen and (min-width: ${Ke}px) {
      .tab__content {
        padding: 1rem;
      }
    }

    /* appearance === secondary */
    :host([active]:not([disabled])) .tab__button--appearance-secondary {
      box-shadow: none;
    }

    :host([disabled]) .tab__button--appearance-secondary {
      background-color: transparent;
    }

    .tab__button--appearance-secondary:before {
      background-color: transparent;
    }

    .tab__button--appearance-secondary {
      background-color: transparent;
    }

    .tab__button--appearance-secondary .tab__decoration-container {
      top: unset;
      bottom: 0;
    }

    .tab__button--appearance-secondary:focus-visible
      .tab__decoration-container {
      top: unset;
      bottom: 0.125rem;
    }
  `],Zp=class extends mt{constructor(){super(...arguments),this.active=!1,this.disabled=!1,this.isInsideList=!1,this.appearance="primary"}connectedCallback(){super.connectedCallback(),this.isInsideList=!!this.closest("ktg-tabs")}willUpdate(t){super.willUpdate(t),t.has("disabled")&&this.updateBadges()}updateBadges(){for(let t of this.badges)t.disabled=this.disabled}onClick(){this.disabled||(this.active=!0,this.dispatchEvent(new qp({bubbles:!0,cancelable:!1})))}onSlotChange(){this.updateBadges()}render(){return j`
      <button
        class=${ai({tab__button:!0,"tab__button--inside-list":this.isInsideList,"tab__button--appearance-secondary":"secondary"===this.appearance})}
        type="button"
        role="tab"
        ?disabled=${this.disabled}
        aria-selected=${this.active}
        @click=${this.onClick}
      >
        <span class="tab__decoration-container">
          <span class="tab__decoration"></span>
        </span>
        <slot
          class="tab__content"
          @slotchange=${this.onSlotChange}
        ></slot>
      </button>
    `}};i(Zp,"KTGTabElement"),Zp.styles=jp,Zp.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},o([kt({type:Boolean,reflect:!0})],Zp.prototype,"active",2),o([kt({type:Boolean,reflect:!0})],Zp.prototype,"disabled",2),o([wt()],Zp.prototype,"isInsideList",2),o([kt({type:String,attribute:!1})],Zp.prototype,"appearance",2),o([Et({selector:"ktg-badge"})],Zp.prototype,"badges",2),Zp=o([ft("ktg-tab")],Zp);var Xp=class extends Event{constructor(t,e){super("active-change",t),this.activeIndex=e}static{i(this,"KTGTabsActiveChangeEvent")}},Jp=[...ae,d`
    :host {
      position: relative;
      display: block;
      min-width: 100%;
    }

    .tabs__wrapper {
      position: relative;
      display: flex;
      gap: 0.25rem;
      width: fit-content;
    }

    :host::after,
    .tabs__wrapper::after {
      content: '';
      position: absolute;
      border-bottom: 0.0625rem solid var(--ktg-color-neutral-02);
      z-index: -1;
      top: 100%;
      width: 100%;
    }

    @media screen and (min-width: ${Ke}px) {
      .tabs__wrapper {
        gap: 0.5rem;
      }
    }

    .tabs__decoration-track {
      position: absolute;
      top: 0;
      left: 0;
      height: 0.25rem;
      width: 100%;
      overflow: hidden;
      pointer-events: none;
    }

    .tabs__decoration {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      transform: scaleX(0);
      transform-origin: left;
    }

    .decoration__inner {
      height: 100%;
      width: 100%;
      background-color: var(--ktg-color-brand3-01);
    }

    /* appearance === secondary */
    :host([appearance='secondary']) .tabs__wrapper {
      gap: 2.5rem;
    }

    :host([appearance='secondary']) .tabs__decoration-track {
      top: calc(100% - 0.25rem);
    }
  `],Qp=class extends mt{constructor(){super(...arguments),this.highlightBarAnimationController=new Jt(this,"horizontal"),this.rovingTabindexController=new $o(this,{direction:"horizontal",elements:()=>Array.from(this.tabs),focusInIndex:t=>t.findIndex(t=>t.active),isFocusableElement:t=>!t.disabled,elementEnterAction:t=>{Ht.scrollIntoView(t,{inline:"center",block:"nearest"})}}),this.appearance="primary"}connectedCallback(){super.connectedCallback(),this.checkAndSetImplicitSlot()}checkAndSetImplicitSlot(){this.closest("ktg-header-topic")&&(this.slot="tabs")}firstUpdated(t){super.firstUpdated(t),this.highlightBarAnimationController.setMainElement(this.mainElement),this.highlightBarAnimationController.setDecorationElement(this.decorationElement),this.highlightBarAnimationController.firstUpdated()}updated(t){super.updated(t),t.has("appearance")&&this.updateTabsAppearance()}onActivate(t){let e=-1;for(let[i,o]of this.tabs.entries())o===t.target?(e=i,Ht.scrollIntoView(o,{inline:"center",block:"nearest",behavior:"smooth"})):o.active=!1;this.dispatchEvent(new Xp({bubbles:!0,cancelable:!1},e))}setActive(t){if(t<0||t>this.tabs.length-1)throw new Error(`The chosen Index is not available. Please choose one from 0 to ${this.tabs.length-1}.`);this.tabs[t].active=!0}updateTabsAppearance(){for(let t of this.tabs)t.appearance=this.appearance}onSlotChange(){this.highlightBarAnimationController.setItems(Array.from(this.tabs)),this.updateTabsAppearance()}onHoverIn(t){let e=t.target;if(e instanceof Zp&&e?.disabled){let t=e.getBoundingClientRect(),i=this.getBoundingClientRect();this.decorationTrackElement.style.clipPath=`polygon(0% 0%, 100% 0%, 100% 100%, ${t.right-i.left}px 100%, ${t.right-i.left}px 0%, ${t.left-i.left}px 0%, ${t.left-i.left}px 100%, 0% 100%)`}}render(){return j`
      <div
        class=${ai({tabs__wrapper:!0,"tabs__wrapper--secondary":"secondary"===this.appearance})}
        role="tablist"
        @activate=${this.onActivate}
        @mouseover=${this.onHoverIn}
      >
        <slot @slotchange=${this.onSlotChange}></slot>

        <div class="tabs__decoration-track">
          <div class="tabs__decoration">
            <div class="decoration__inner"></div>
          </div>
        </div>
      </div>
    `}};i(Qp,"KTGTabsElement"),Qp.styles=Jp,o([kt({type:String,reflect:!0})],Qp.prototype,"appearance",2),o([Ct(".tabs__wrapper")],Qp.prototype,"mainElement",2),o([Ct(".tabs__decoration")],Qp.prototype,"decorationElement",2),o([Ct(".tabs__decoration-track")],Qp.prototype,"decorationTrackElement",2),o([Et({selector:"ktg-tab",flatten:!0})],Qp.prototype,"tabs",2),Qp=o([ft("ktg-tabs")],Qp);var tg=class extends mt{constructor(){super(...arguments),this.renderLoop=null,this.breadcrumbsHasChildren=!1,this.paragraphHasChildren=!1,this.tabsHasChildren=!1}connectedCallback(){super.connectedCallback(),this.createScrollFadeRenderLoop()}firstUpdated(t){super.firstUpdated(t),this.createScrollFadeRenderLoop()}createScrollFadeRenderLoop(){if(this.renderLoop||!this.tabsContainer)return;let t=0,e=0,i=0,o=0,n=0,r=0;this.renderLoop=new $e,this.renderLoop.on("update",()=>{if(e=t,t=this.tabsScrollContainer.scrollWidth,i=o,o=this.tabsScrollContainer.clientWidth,n=r,r=this.tabsScrollContainer.scrollLeft,e!==t||i!==o||n!==r){let e=t>o;if(this.tabsContainer.classList.toggle("header-topic__tabs--scrollable",e),e){let e=Math.min(48,t-o),i=t-o,n=Mt(Rt(r,e,0)),a=Mt(Rt(r,i-e,i));this.tabsContainer.style.setProperty("--ktg-header-topic-tabs-opacity-start",n.toString()),this.tabsContainer.style.setProperty("--ktg-header-topic-tabs-opacity-end",a.toString())}else this.tabsContainer.style.removeProperty("--ktg-header-topic-tabs-opacity-start"),this.tabsContainer.style.removeProperty("--ktg-header-topic-tabs-opacity-end")}}),this.renderLoop.play()}disconnectedCallback(){super.disconnectedCallback(),this.renderLoop?.destroy(),this.renderLoop=null}onBreadcrumbsSlotChange(){this.breadcrumbsHasChildren=this.breadcrumbsSlotChildren.length>0}onParagraphSlotChange(){this.paragraphHasChildren=this.paragraphSlotChildren.length>0}onTabsSlotChange(){this.tabsHasChildren=this.tabsSlotChildren.length>0}render(){return j`
      <div
        class=${ai({"header-topic__breadcrumbs":!0,"header-topic__breadcrumbs--has-children":this.breadcrumbsHasChildren})}
      >
        <slot
          name="breadcrumbs"
          @slotchange=${this.onBreadcrumbsSlotChange}
        ></slot>
      </div>

      <div class="header-topic__wrapper">
        <div class="header-topic__title">
          <slot name="title"></slot>
        </div>

        <div
          class=${ai({"header-topic__paragraph":!0,"header-topic__paragraph--has-children":this.paragraphHasChildren})}
        >
          <slot
            name="paragraph"
            @slotchange=${this.onParagraphSlotChange}
          ></slot>
        </div>

        <div
          class=${ai({"header-topic__tabs":!0,"header-topic__tabs--has-children":this.tabsHasChildren})}
        >
          <div class="header-topic__tabs-scroll-container">
            <div class="header-topic__tabs-inner">
              <slot
                name="tabs"
                @slotchange=${this.onTabsSlotChange}
              ></slot>
            </div>
          </div>

          <ktg-icon
            class="header-topic__scrollable-indicator header-topic__scrollable-indicator--start"
            name="long-arrow-left"
          >
          </ktg-icon>

          <ktg-icon
            class="header-topic__scrollable-indicator header-topic__scrollable-indicator--end"
            name="long-arrow-right"
          >
          </ktg-icon>
        </div>
      </div>
    `}};i(tg,"KTGHeaderTopicElement"),tg.styles=Yp,o([wt()],tg.prototype,"breadcrumbsHasChildren",2),o([wt()],tg.prototype,"paragraphHasChildren",2),o([wt()],tg.prototype,"tabsHasChildren",2),o([Ct(".header-topic__tabs")],tg.prototype,"tabsContainer",2),o([Ct(".header-topic__tabs-scroll-container")],tg.prototype,"tabsScrollContainer",2),o([Et({slot:"breadcrumbs",flatten:!0})],tg.prototype,"breadcrumbsSlotChildren",2),o([Et({slot:"paragraph",flatten:!0})],tg.prototype,"paragraphSlotChildren",2),o([Et({slot:"tabs",flatten:!0})],tg.prototype,"tabsSlotChildren",2),tg=o([ft("ktg-header-topic")],tg);var eg=[...ae,d`
    :host {
      display: block;
      height: 3.5rem;
    }

    .rows {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .row {
      flex-grow: 1;
    }

    .row--first {
      background-color: #ffed00;
    }

    .row--second {
      background-color: #adc939;
    }

    .row--third {
      background-color: #74a732;
    }

    .row--fourth {
      background-color: #00a4e8;
    }

    .row--fifth {
      flex-grow: 2;
      background-color: #4db5eb;
    }
  `],ig=class extends mt{render(){return j`
      <div class="rows">
        <div class="row row--first"></div>
        <div class="row row--second"></div>
        <div class="row row--third"></div>
        <div class="row row--fourth"></div>
        <div class="row row--fifth"></div>
      </div>
    `}};i(ig,"KTGHorizonElement"),ig.styles=eg,ig=o([ft("ktg-horizon")],ig);var og=[...ae,...ne,d`
    :host {
      display: inline-block;
      cursor: pointer;
    }

    .horizontal-navigation-item {
      position: relative;
      display: inline-block;
      font-family: inherit;
      font-weight: inherit;
      font-size: 1rem;
      position: relative;
      color: var(--ktg-color-text);
      text-decoration: none;
      background: transparent;
      border: 0;
      outline: 0;
      cursor: pointer;
      user-select: none;
    }

    .horizontal-navigation-item__main {
      padding-left: 0.125rem;
      padding-right: 0.125rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .horizontal-navigation-item:focus-visible
      .horizontal-navigation-item__main {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: 0.125rem;
    }

    .horizontal-navigation-item__icon {
      position: relative;
      display: none;
      align-items: center;
      justify-content: center;
      height: 1rem;
      width: 1rem;
      transition: transform 0.2s ease-out;
      transform-origin: center;
    }

    @media (prefers-reduced-motion: reduce) {
      .horizontal-navigation-item__icon {
        transition: none;
      }
    }

    :host([has-children]) .horizontal-navigation-item__icon {
      display: flex;
    }

    :host([open]) .horizontal-navigation-item__icon {
      transform: translateY(0.125rem) rotate(180deg);
    }

    .horizontal-navigation-item__decoration {
      display: block;
      height: 0.25rem;
      width: 100%;
      margin-top: 1.125rem;
      background-color: #fde303;
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }

    .horizontal-navigation-item:hover .horizontal-navigation-item__decoration {
      opacity: 1;
    }

    :host([selected]) .horizontal-navigation-item__decoration {
      opacity: 1;
    }
  `],ng=class extends mt{constructor(){super(...arguments),this.href="",this.selected=!1,this.hasChildren=!1,this.open=!1}render(){return this.href?this.renderAsLink():this.renderAsButton()}renderAsLink(){return j`
      <a
        class="horizontal-navigation-item"
        .href=${this.href}
      >
        ${this.renderInner()}
      </a>
    `}renderAsButton(){return j`
      <button
        class="horizontal-navigation-item"
        type="button"
      >
        ${this.renderInner()}
      </button>
    `}renderInner(){return j`
      <div class="horizontal-navigation-item__main">
        <slot></slot>

        <div class="horizontal-navigation-item__icon">
          <ktg-icon name="dropdown-arrow-down-small"></ktg-icon>
        </div>
      </div>

      <div class="horizontal-navigation-item__decoration"></div>
    `}};i(ng,"KTGHorizontalNavigationItemElement"),ng.styles=og,ng.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},o([kt({type:String})],ng.prototype,"href",2),o([kt({type:Boolean,reflect:!0})],ng.prototype,"selected",2),o([kt({type:Boolean,reflect:!0,attribute:"has-children"})],ng.prototype,"hasChildren",2),o([kt({type:Boolean,reflect:!0})],ng.prototype,"open",2),ng=o([ft("ktg-horizontal-navigation-item")],ng);var rg=[...ae,...ne,d`
    .horizontal-navigation {
      display: flex;
      flex-direction: row;
      gap: 1.5rem;
    }
  `],ag=[...ae,...ne,d`
    .meta-nav-item {
      font-size: 0.875rem;
      line-height: 120%;
      color: var(--ktg-color-text);
      text-decoration: none;
      outline: 0;
      user-select: none;
    }

    .meta-nav-item:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: 0.125rem;
    }
  `],sg=class extends mt{constructor(){super(...arguments),this.href="",this.target="_self"}render(){return j`
      <a
        class="meta-nav-item"
        href=${fi(this.href?this.href:null)}
        target=${this.target}
      >
        <slot></slot>
      </a>
    `}};i(sg,"KTGMetaNavigationItemElement"),sg.styles=ag,sg.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},o([kt({type:String})],sg.prototype,"href",2),o([kt({type:String})],sg.prototype,"target",2),sg=o([ft("ktg-meta-navigation-item")],sg);var lg=class extends mt{constructor(){super(...arguments),this.label=null}render(){return j`
      <nav
        class="horizontal-navigation"
        aria-label=${fi(this.label)}
      >
        <slot></slot>
      </nav>
    `}};i(lg,"KTGHorizontalNavigationElement"),lg.styles=rg,o([kt({type:String})],lg.prototype,"label",2),lg=o([ft("ktg-horizontal-navigation")],lg);var cg=[...ae,d`
    :host {
      display: inline-block;
      cursor: pointer;
    }

    .labelled-choice {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  `],dg=class extends mt{render(){return j`
      <div class="labelled-choice">
        <slot name="input"></slot>
        <slot name="label"></slot>
      </div>
    `}};i(dg,"KTGLabelledChoiceElement"),dg.styles=cg,dg=o([ft("ktg-labelled-choice")],dg);var hg=[...ae,d`
    :host {
      display: block;
      height: 0.0625rem;
    }

    .ktg-line {
      border-color: var(--ktg-color-neutral-02);
      border-width: 0 0 0.0625rem 0;
    }
  `],ug=class extends mt{render(){return j`<hr class="ktg-line" />`}};i(ug,"KTGLineElement"),ug.styles=hg,ug=o([ft("ktg-line")],ug);var pg=[...ae,...ne,d`
    :host {
      display: inline;
      font-size: inherit;
      line-height: inherit;
    }

    .link {
      display: inline;
      text-decoration: none;
      color: var(--ktg-color-link);
    }

    :host([disabled]) .link {
      color: var(--ktg-color-neutral-03);
    }

    /*
      FIXME(KTGU-16): visited color is not applied to the icon on safari
      Might be related to https://developer.mozilla.org/en-US/docs/Web/CSS/Privacy_and_the_:visited_selector
    */
    .link:visited {
      color: var(--ktg-color-link-visited);
    }

    .link:focus-visible {
      outline: 0.125rem solid var(--ktg-color-link);
    }

    .link:visited:focus-visible {
      outline-color: var(--ktg-color-link-visited);
    }

    .link__icon {
      display: inline-flex;
      vertical-align: middle;
      user-select: none;
      margin-top: -0.0625em; /* NOTE: Looks slightly more centered with this */
      --ktg-icon-size: 1em;
    }

    .link__icon--leading {
      margin-right: 0.25em;
    }

    .link__icon--trailing {
      margin-left: 0.25em;
    }

    .link__icon--arrow {
      transform: translateX(-0.25em);
      transition: transform 0.125s ease-in-out;
      margin-left: 0.5em;
    }

    @media (prefers-reduced-motion: reduce) {
      .link__icon--arrow {
        transition: none;
      }
    }

    :host(:not([disabled])) .link:hover .link__icon--arrow {
      transform: translateX(0);
    }

    .link__content {
      font-size: inherit;
      line-height: inherit;
    }

    :host(:not([disabled])) .link:hover .link__content {
      text-decoration: underline;
    }
  `],gg=class extends mt{constructor(){super(...arguments),this.href="",this.target="_self",this.leadingIcon="",this.trailingIcon="",this.disabled=!1,this.download=!1,this.autofocus=!1}focus(){this.link.focus()}click(){this.link.click()}render(){let t=!!this.disabled||null,e=this.href&&!t?this.href:null;return j`
      <a
        class="link"
        role="link"
        href=${fi(e)}
        aria-disabled=${fi(t)}
        target=${this.target}
        ?download=${this.download}
        ?autofocus=${this.autofocus}
      >
        ${this.renderLeadingIcon()}
        <span class="link__content"><slot></slot></span>
        ${this.renderTrailingIcon()}
      </a>
    `}renderLeadingIcon(){return this.leadingIcon?j`
        <ktg-icon
          .name=${this.leadingIcon}
          class="link__icon link__icon--leading"
        ></ktg-icon>
      `:j``}renderTrailingIcon(){return this.leadingIcon?j``:this.trailingIcon?j`
        <ktg-icon
          .name=${this.trailingIcon}
          class="link__icon link__icon--trailing"
        ></ktg-icon>
      `:this.renderDefaultArrowIcon()}renderDefaultArrowIcon(){return j`
      <ktg-icon
        name="long-arrow-right"
        class="link__icon link__icon--arrow"
      ></ktg-icon>
    `}};i(gg,"KTGLinkElement"),gg.styles=pg,gg.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},o([kt({type:String})],gg.prototype,"href",2),o([kt({type:String})],gg.prototype,"target",2),o([kt({type:String,attribute:"leading-icon"})],gg.prototype,"leadingIcon",2),o([kt({type:String,attribute:"trailing-icon"})],gg.prototype,"trailingIcon",2),o([kt({type:Boolean,reflect:!0})],gg.prototype,"disabled",2),o([kt({type:Boolean,reflect:!0})],gg.prototype,"download",2),o([kt({type:Boolean,reflect:!0})],gg.prototype,"autofocus",2),o([Ct(".link")],gg.prototype,"link",2),gg=o([ft("ktg-link")],gg);var mg=[...ae,d`
    :host {
      display: block;
      width: var(--ktg-loader-size, 8rem);
      height: var(--ktg-loader-size, 8rem);
    }

    .loader {
      position: relative;
      overflow: hidden;
      aspect-ratio: 1;
    }

    @media (prefers-reduced-motion: reduce) {
      .loader {
        animation: reduced-motion-animation 3s infinite;
      }
    }

    .loader__svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      will-change: transform;
      transform-origin: center;
    }

    :host([color='black']) svg * {
      fill: var(--ktg-color-text);
    }

    :host([color='white']) svg * {
      fill: var(--ktg-color-dark-contrast);
    }

    @keyframes reduced-motion-animation {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.3;
      }
      100% {
        opacity: 1;
      }
    }
  `],vg=class extends mt{constructor(){super(...arguments),this.ANIMATION_DURATION=600,this.DELAY_BETWEEN_TICKS=10,this.EASING_FUNCTION=Gt(4.5),this.startRotation=0,this.currentRotation=0,this.color="black",this.alt="",this.animationRender=t=>{let e=this.startRotation+45*t;this.svg.style.transform=`rotate(${e}deg)`}}firstUpdated(t){super.firstUpdated(t),Ht.prefersReducedMotion()||this.start()}start(){setTimeout(()=>{this.tick()},.5*this.ANIMATION_DURATION)}async tick(){this.startRotation=Math.round(this.currentRotation)%360,await Ht.transition({render:this.animationRender,duration:this.ANIMATION_DURATION,easing:this.EASING_FUNCTION}).completed,this.currentRotation=this.startRotation+45,setTimeout(()=>{this.tick()},this.DELAY_BETWEEN_TICKS)}render(){return j`
      <div
        class="loader"
        aria-hidden=${!this.alt}
      >
        <svg
          viewBox="0 0 280 280"
          class="loader__svg"
        >
          ${Z`<title>${this.alt}</title>`}
          <path
            d="M40.908 41.8265C40.738 41.9953 40.603 42.1963 40.511 42.4183C40.419 42.6393 40.372 42.8763 40.372 43.1163C40.372 43.3563 40.419 43.5933 40.511 43.8153C40.603 44.0363 40.738 44.2373 40.908 44.4063L236.768 239.826C237.11 240.168 237.574 240.361 238.058 240.361C238.542 240.361 239.006 240.168 239.348 239.826C239.69 239.484 239.882 239.02 239.882 238.536C239.882 238.052 239.69 237.588 239.348 237.246L43.468 41.8265C43.302 41.6547 43.103 41.5181 42.883 41.4248C42.663 41.3315 42.427 41.2834 42.188 41.2834C41.949 41.2834 41.712 41.3315 41.493 41.4248C41.273 41.5181 41.074 41.6547 40.908 41.8265Z"
          />
          <path
            d="M50.488 114.007L50.128 109.667L33.728 105.667L34.068 109.927L50.488 114.007ZM136.968 158.887C136.346 157.276 135.411 155.805 134.216 154.559C133.021 153.313 131.591 152.316 130.008 151.627L106.808 142.987C105.855 142.686 105.026 142.085 104.442 141.274C103.858 140.463 103.552 139.486 103.568 138.487C103.576 137.433 103.951 136.415 104.628 135.607C105.002 136.211 105.522 136.712 106.141 137.061C106.76 137.411 107.457 137.599 108.168 137.607C108.693 137.676 109.228 137.635 109.736 137.485C110.244 137.336 110.716 137.082 111.121 136.739C111.525 136.397 111.853 135.974 112.084 135.497C112.315 135.02 112.444 134.5 112.463 133.97C112.481 133.44 112.388 132.913 112.19 132.421C111.992 131.93 111.694 131.485 111.314 131.115C110.934 130.746 110.481 130.46 109.984 130.276C109.487 130.092 108.957 130.014 108.428 130.047H108.328C106.342 130.017 104.408 130.677 102.855 131.915C101.301 133.152 100.225 134.89 99.81 136.832C99.395 138.774 99.666 140.799 100.577 142.564C101.489 144.328 102.984 145.722 104.808 146.507L128.588 155.387C130.743 156.372 132.429 158.158 133.288 160.367C133.95 162.06 134.095 163.912 133.703 165.688C133.311 167.464 132.401 169.083 131.088 170.34C129.774 171.598 128.117 172.437 126.326 172.752C124.535 173.066 122.691 172.842 121.028 172.107L85.428 150.107L95.328 134.807C97.388 131.972 98.589 128.605 98.788 125.107C98.815 123.754 98.633 122.404 98.248 121.107C96.743 117.004 93.762 113.609 89.888 111.587C90.05 111.074 90.151 110.544 90.188 110.007C90.245 108.632 89.867 107.274 89.108 106.127C88.544 105.306 87.797 104.627 86.926 104.145C86.055 103.662 85.083 103.389 84.088 103.347C83.231 103.176 82.343 103.258 81.533 103.585C80.723 103.912 80.026 104.469 79.528 105.187C75.408 104.127 72.568 103.467 71.088 103.187L70.328 103.067C67.108 102.447 61.108 101.347 58.328 101.167H57.088C57.088 101.167 55.688 103.707 55.088 104.987C54.668 105.973 54.301 106.982 53.988 108.007C53.708 108.767 53.508 109.407 53.428 109.607L55.568 110.207C56.364 110.454 57.029 111.006 57.417 111.743C57.805 112.48 57.885 113.341 57.638 114.137C57.391 114.933 56.839 115.598 56.102 115.986C55.365 116.374 54.504 116.454 53.708 116.207L51.528 115.567C51.068 117.107 50.088 120.907 51.908 123.687C52.413 124.44 53.082 125.069 53.865 125.526C54.648 125.983 55.524 126.257 56.428 126.327C58.184 126.418 59.908 126.838 61.508 127.567C62.455 128.381 63.056 129.525 63.188 130.767C62.248 132.267 61.188 133.787 60.288 135.267L45.228 125.447C45.228 125.187 45.228 124.947 45.228 124.687C45.253 122.556 44.524 120.485 43.168 118.841C41.812 117.197 39.918 116.086 37.821 115.705C35.725 115.324 33.561 115.697 31.713 116.759C29.866 117.821 28.454 119.503 27.728 121.507C27.412 122.428 27.243 123.393 27.228 124.367L38.988 136.367L29.808 133.987C29.335 132.121 28.276 130.457 26.786 129.239C25.2958 128.021 23.4539 127.314 21.5316 127.223C19.6094 127.131 17.7085 127.659 16.109 128.729C14.5096 129.799 13.2963 131.355 12.648 133.167C12.2978 134.087 12.1149 135.062 12.108 136.047C12.1094 136.973 12.2373 137.895 12.488 138.787L50.488 157.447C50.488 157.647 50.488 157.867 50.488 158.067C50.595 159.957 51.138 161.796 52.075 163.441C53.012 165.085 54.317 166.491 55.888 167.547C58.297 169.375 61.064 170.676 64.008 171.367L88.008 178.107C85.675 179.914 83.798 182.243 82.528 184.907C81.208 184.687 77.908 183.887 75.308 183.287C75.137 182.227 74.745 181.214 74.157 180.315C73.569 179.416 72.799 178.651 71.896 178.069C70.993 177.487 69.978 177.101 68.917 176.937C67.855 176.773 66.771 176.834 65.735 177.116C64.698 177.398 63.733 177.895 62.901 178.574C62.069 179.253 61.389 180.1 60.906 181.059C60.422 182.019 60.146 183.069 60.095 184.141C60.043 185.214 60.218 186.286 60.608 187.287H60.708L87.108 203.707L87.988 201.427C89.255 198.503 91.286 195.975 93.868 194.107C93.895 195.704 94.056 197.296 94.348 198.867C95.808 206.407 100.668 212.727 108.808 217.687C109.068 218.627 110.188 223.087 110.808 225.927C109.51 227.504 108.803 229.484 108.808 231.527C108.771 233.912 109.68 236.216 111.336 237.932C112.993 239.649 115.263 240.64 117.648 240.687C119.46 240.713 121.235 240.174 122.728 239.147L124.048 209.867L123.328 209.207C117.048 203.607 114.028 197.947 114.088 191.907V191.767C114.088 186.967 116.208 181.867 120.308 176.207C122.677 176.993 125.22 177.09 127.642 176.486C130.064 175.882 132.263 174.601 133.985 172.794C135.706 170.986 136.878 168.727 137.364 166.279C137.85 163.83 137.629 161.295 136.728 158.967L136.968 158.887ZM56.728 122.287C56.418 122.287 56.111 122.215 55.834 122.076C55.556 121.937 55.314 121.735 55.128 121.487C54.944 121.167 54.828 120.813 54.788 120.447C56.3 120.381 57.752 119.839 58.937 118.898C60.122 117.958 60.98 116.667 61.388 115.21C61.796 113.753 61.734 112.204 61.209 110.785C60.685 109.366 59.725 108.148 58.468 107.307C58.708 106.647 58.948 106.007 59.128 105.567C61.808 105.887 65.948 106.647 68.648 107.147L67.768 109.887C68.383 110.382 69.124 110.694 69.908 110.787C70.596 110.88 71.296 110.754 71.908 110.427L72.688 107.987C73.988 108.287 75.748 108.707 78.208 109.347L78.768 109.467C79.484 109.605 80.225 109.521 80.893 109.228C81.561 108.936 82.124 108.447 82.508 107.827L82.668 107.627C82.933 107.585 83.203 107.585 83.468 107.627C84.848 107.747 85.268 108.347 85.468 108.587C85.783 109.042 85.925 109.596 85.868 110.147C85.676 111.279 85.154 112.33 84.368 113.167C83.181 114.068 81.717 114.527 80.228 114.467C78.135 114.511 76.086 115.07 74.261 116.096C72.436 117.122 70.893 118.582 69.768 120.347C69.768 120.347 68.048 123.007 65.768 126.547C65.176 125.497 64.313 124.627 63.268 124.027C61.225 123.042 59.011 122.458 56.748 122.307L56.728 122.287ZM31.548 123.087C31.943 122.015 32.703 121.116 33.695 120.549C34.687 119.982 35.847 119.782 36.971 119.985C38.096 120.188 39.112 120.781 39.843 121.659C40.574 122.537 40.972 123.644 40.968 124.787C40.965 125.179 40.912 125.569 40.808 125.947C40.724 126.43 40.561 126.896 40.328 127.327L57.808 138.667L56.428 140.887L46.648 138.367L31.548 123.087ZM54.068 144.727C52.406 147.256 51.245 150.08 50.648 153.047L16.428 136.027C16.4319 135.501 16.5266 134.98 16.708 134.487C17.0927 133.403 17.8506 132.492 18.846 131.916C19.8413 131.341 21.0091 131.138 22.1402 131.345C23.2712 131.552 24.2917 132.155 25.0187 133.046C25.7457 133.937 26.132 135.057 26.108 136.207C26.13 136.473 26.13 136.741 26.108 137.007V137.147L54.528 144.467L54.408 144.627L54.068 144.727ZM65.228 167.347L76.788 149.507C77.033 149.305 77.226 149.047 77.352 148.756C77.477 148.464 77.532 148.147 77.51 147.83C77.489 147.514 77.393 147.206 77.229 146.934C77.066 146.662 76.84 146.433 76.57 146.265C76.301 146.098 75.995 145.997 75.678 145.971C75.362 145.945 75.044 145.995 74.751 146.116C74.457 146.237 74.197 146.427 73.991 146.669C73.786 146.911 73.641 147.198 73.568 147.507L61.568 166.127C60.553 165.655 59.593 165.072 58.708 164.387L58.408 164.127L69.168 147.747C69.31 147.327 69.308 146.872 69.163 146.453C69.019 146.035 68.739 145.676 68.368 145.433C67.997 145.191 67.557 145.078 67.115 145.113C66.673 145.148 66.256 145.329 65.928 145.627L55.728 161.167C55.206 160.054 54.894 158.853 54.808 157.627C54.768 157.121 54.768 156.613 54.808 156.107C55.029 152.861 56.083 149.727 57.868 147.007L73.648 122.547C74.404 121.371 75.439 120.401 76.66 119.72C77.881 119.04 79.25 118.671 80.648 118.647C82.059 118.687 83.463 118.434 84.771 117.904C86.079 117.374 87.263 116.578 88.248 115.567C91.103 117.086 93.312 119.587 94.468 122.607C94.712 123.458 94.827 124.341 94.808 125.227C94.627 127.952 93.669 130.569 92.048 132.767L88.408 138.407L68.408 168.407L65.228 167.347ZM94.488 188.967C90.777 191.061 87.669 194.078 85.468 197.727C82.708 196.067 68.588 187.187 64.328 184.487C64.325 183.83 64.491 183.182 64.808 182.607C65.241 181.875 65.912 181.313 66.708 181.015C67.505 180.717 68.38 180.702 69.187 180.971C69.994 181.24 70.684 181.777 71.143 182.493C71.602 183.21 71.801 184.061 71.708 184.907L71.428 186.447L85.208 189.447L85.828 187.927C87.288 184.314 89.961 181.322 93.388 179.467L96.708 180.407C95.697 183.183 94.953 186.049 94.488 188.967ZM110.248 191.687C110.128 198.727 113.408 205.287 120.128 211.547C120.128 212.967 119.308 229.867 119.008 236.367C118.672 236.431 118.33 236.464 117.988 236.467C116.702 236.441 115.48 235.906 114.588 234.98C113.695 234.054 113.207 232.812 113.228 231.527C113.223 231.009 113.311 230.494 113.488 230.007C113.649 229.421 113.935 228.877 114.324 228.411C114.714 227.945 115.2 227.569 115.748 227.307L112.628 214.967L111.888 214.547C102.568 209.107 98.088 202.207 98.228 193.307C98.406 188.669 99.422 184.102 101.228 179.827L102.088 177.687L72.088 169.327L82.688 153.327L116.688 174.307C112.408 180.407 110.188 186.167 110.108 191.647"
          />
          <path
            d="M138.408 57.8273L138.048 53.4873L121.648 49.4873L121.988 53.7473L138.408 57.8273ZM224.888 102.707C224.262 101.098 223.326 99.6293 222.131 98.3833C220.937 97.1383 219.509 96.1403 217.928 95.4473L194.728 86.8073C193.772 86.5093 192.938 85.9103 192.35 85.0993C191.762 84.2883 191.453 83.3083 191.468 82.3073C191.473 81.2583 191.848 80.2453 192.528 79.4473C192.914 80.0443 193.44 80.5383 194.061 80.8873C194.681 81.2353 195.377 81.4283 196.088 81.4473C196.622 81.5293 197.168 81.4973 197.689 81.3533C198.21 81.2093 198.695 80.9553 199.111 80.6103C199.527 80.2653 199.865 79.8353 200.102 79.3493C200.34 78.8633 200.471 78.3333 200.488 77.7923C200.506 77.2523 200.408 76.7143 200.201 76.2143C199.995 75.7143 199.685 75.2643 199.292 74.8933C198.899 74.5223 198.431 74.2383 197.92 74.0623C197.409 73.8853 196.867 73.8183 196.328 73.8673C194.347 73.8363 192.417 74.4943 190.866 75.7273C189.316 76.9613 188.241 78.6943 187.826 80.6313C187.411 82.5693 187.68 84.5903 188.589 86.3513C189.497 88.1113 190.989 89.5033 192.808 90.2873L216.608 99.1673C218.775 100.186 220.46 102.008 221.308 104.248C222.155 106.487 222.098 108.969 221.148 111.167C220.664 112.274 219.966 113.275 219.095 114.112C218.223 114.95 217.196 115.608 216.07 116.048C214.945 116.488 213.743 116.702 212.535 116.678C211.327 116.654 210.135 116.392 209.028 115.907L173.408 93.9073L183.408 78.5873C185.466 75.7603 186.66 72.3983 186.848 68.9073C186.878 67.5533 186.695 66.2043 186.308 64.9073C184.811 60.8013 181.837 57.3993 177.968 55.3673C178.124 54.8603 178.218 54.3363 178.248 53.8073C178.294 52.9663 178.171 52.1243 177.888 51.3313C177.605 50.5383 177.167 49.8093 176.599 49.1873C176.031 48.5653 175.345 48.0633 174.581 47.7093C173.817 47.3553 172.99 47.1573 172.148 47.1273C171.291 46.9533 170.402 47.0343 169.592 47.3613C168.781 47.6893 168.084 48.2473 167.588 48.9673C163.468 47.9273 160.648 47.2473 159.188 46.9673L158.388 46.8073C155.168 46.2273 149.188 45.1073 146.388 44.9273H145.188C145.188 44.9273 143.768 47.4673 143.188 48.7273C142.868 49.5473 142.628 50.1673 142.108 51.7473C141.828 52.5073 141.608 53.1473 141.548 53.3473L143.668 53.9473C144.054 54.0693 144.412 54.2663 144.722 54.5263C145.032 54.7873 145.288 55.1063 145.475 55.4653C145.661 55.8253 145.775 56.2173 145.81 56.6213C145.845 57.0243 145.8 57.4313 145.678 57.8173C145.556 58.2033 145.359 58.5613 145.098 58.8713C144.838 59.1813 144.519 59.4373 144.159 59.6233C143.8 59.8103 143.407 59.9243 143.004 59.9593C142.601 59.9943 142.194 59.9493 141.808 59.8273L139.628 59.1673C139.148 60.7073 138.188 64.5073 140.008 67.2873C140.515 68.0363 141.185 68.6613 141.968 69.1143C142.751 69.5683 143.626 69.8393 144.528 69.9073C146.28 70.0123 147.997 70.4473 149.588 71.1873C150.548 71.9823 151.152 73.1263 151.268 74.3673C150.328 75.8673 149.268 77.3873 148.388 78.8673L133.228 69.2873C133.228 69.0273 133.228 68.7873 133.228 68.5273C133.268 66.1403 132.358 63.8353 130.698 62.1193C129.038 60.4033 126.765 59.4163 124.378 59.3773C121.991 59.3373 119.686 60.2473 117.97 61.9073C116.254 63.5663 115.268 65.8403 115.228 68.2273L126.968 80.2273L117.908 77.8273C117.418 75.9113 116.314 74.2083 114.764 72.9803C113.215 71.7523 111.305 71.0663 109.328 71.0273C107.445 70.9943 105.6 71.5563 104.056 72.6333C102.512 73.7113 101.347 75.2483 100.728 77.0273C100.397 77.9523 100.215 78.9243 100.188 79.9073C100.209 80.8323 100.336 81.7513 100.568 82.6473L138.568 101.287C138.568 101.487 138.568 101.707 138.568 101.907C138.672 103.797 139.214 105.638 140.151 107.283C141.088 108.928 142.395 110.333 143.968 111.387C146.381 113.208 149.146 114.509 152.088 115.207L176.088 121.947C173.765 123.77 171.885 126.094 170.588 128.747C169.308 128.527 165.988 127.747 163.388 127.127C163.135 125.574 162.409 124.137 161.308 123.012C160.208 121.888 158.787 121.13 157.24 120.844C155.692 120.557 154.095 120.755 152.664 121.411C151.234 122.066 150.041 123.148 149.248 124.507C148.655 125.498 148.299 126.613 148.205 127.764C148.111 128.915 148.283 130.073 148.708 131.147H148.808L175.208 147.587L176.088 145.287C177.36 142.366 179.39 139.839 181.968 137.967C181.978 139.564 182.132 141.157 182.428 142.727C183.888 150.287 188.768 156.587 196.888 161.547C197.128 162.487 198.268 166.927 198.888 169.807C198.21 170.609 197.676 171.523 197.308 172.507C196.976 173.431 196.8 174.404 196.788 175.387C196.756 177.769 197.667 180.067 199.324 181.779C200.98 183.492 203.246 184.479 205.628 184.527C206.491 184.548 207.353 184.447 208.188 184.227C209.081 183.94 209.929 183.53 210.708 183.007L212.048 153.707L211.308 153.067C205.028 147.467 202.008 141.787 202.088 135.747V135.607C202.088 130.807 204.188 125.607 208.308 120.047C210.676 120.837 213.221 120.936 215.643 120.332C218.066 119.729 220.266 118.448 221.987 116.639C223.708 114.83 224.878 112.568 225.359 110.118C225.841 107.669 225.615 105.133 224.708 102.807L224.888 102.707ZM144.708 66.1273C144.394 66.1303 144.084 66.0593 143.803 65.9203C143.521 65.7813 143.276 65.5783 143.088 65.3273C142.92 65.0023 142.811 64.6503 142.768 64.2873C144.278 64.2173 145.727 63.6723 146.91 62.7303C148.092 61.7883 148.947 60.4973 149.352 59.0413C149.758 57.5853 149.694 56.0383 149.169 54.6203C148.644 53.2033 147.684 51.9873 146.428 51.1473C146.668 50.4873 146.908 49.8473 147.108 49.4073C149.768 49.7273 153.928 50.4873 156.608 50.9873L155.728 53.7073C156.334 54.2193 157.079 54.5393 157.868 54.6273C158.556 54.7103 159.252 54.5843 159.868 54.2673L160.608 51.8273C161.908 52.1273 163.688 52.5473 166.148 53.1873L166.708 53.3073C167.421 53.4493 168.161 53.3673 168.827 53.0743C169.493 52.7813 170.052 52.2893 170.428 51.6673L170.588 51.4673C170.86 51.4313 171.136 51.4313 171.408 51.4673C171.732 51.4533 172.055 51.5103 172.355 51.6333C172.655 51.7563 172.925 51.9433 173.145 52.1813C173.366 52.4193 173.532 52.7013 173.633 53.0103C173.734 53.3183 173.766 53.6453 173.728 53.9673C173.544 55.1023 173.021 56.1543 172.228 56.9873C171.03 57.8643 169.572 58.3153 168.088 58.2673C165.994 58.3163 163.943 58.8783 162.116 59.9033C160.29 60.9283 158.742 62.3853 157.608 64.1473C157.608 64.1473 155.888 66.8073 153.608 70.3473C152.995 69.3003 152.119 68.4323 151.068 67.8273C149.032 66.8413 146.825 66.2583 144.568 66.1073L144.708 66.1273ZM119.368 66.9073V66.7873C119.764 65.7113 120.528 64.8103 121.524 64.2433C122.52 63.6763 123.684 63.4793 124.811 63.6883C125.938 63.8963 126.955 64.4963 127.683 65.3813C128.411 66.2673 128.802 67.3813 128.788 68.5273C128.788 68.9063 128.734 69.2833 128.628 69.6473V69.7473C128.529 70.2293 128.361 70.6933 128.128 71.1273L145.588 82.4673L144.208 84.6873L134.468 82.1673L119.368 66.9073ZM141.888 88.5273C140.232 91.0683 139.065 93.8973 138.448 96.8673L104.348 79.8273C104.35 79.3073 104.445 78.7933 104.628 78.3073C105.013 77.2233 105.771 76.3123 106.766 75.7363C107.761 75.1613 108.929 74.9583 110.06 75.1653C111.191 75.3723 112.212 75.9753 112.939 76.8663C113.666 77.7573 114.052 78.8773 114.028 80.0273C114.048 80.2933 114.048 80.5603 114.028 80.8273V80.9473L142.448 88.2673L142.348 88.4273L141.888 88.5273ZM153.228 111.187L164.808 93.3473C164.95 92.9253 164.947 92.4683 164.8 92.0483C164.653 91.6283 164.37 91.2693 163.996 91.0283C163.621 90.7873 163.177 90.6773 162.734 90.7173C162.291 90.7573 161.873 90.9433 161.548 91.2473L149.548 109.867C148.539 109.395 147.587 108.811 146.708 108.127L146.368 107.887L157.148 91.4873C157.38 91.2843 157.562 91.0303 157.68 90.7453C157.797 90.4613 157.848 90.1523 157.827 89.8453C157.806 89.5383 157.714 89.2393 157.559 88.9733C157.403 88.7073 157.188 88.4803 156.931 88.3113C156.674 88.1413 156.381 88.0343 156.075 87.9963C155.769 87.9593 155.459 87.9923 155.168 88.0953C154.877 88.1973 154.614 88.3653 154.399 88.5853C154.184 88.8063 154.023 89.0733 153.928 89.3673L143.708 104.927C143.205 103.801 142.901 102.596 142.808 101.367C142.778 100.867 142.778 100.366 142.808 99.8673C143.036 96.6283 144.074 93.4993 145.828 90.7673L161.608 66.2673C162.374 65.0923 163.417 64.1223 164.644 63.4423C165.871 62.7633 167.246 62.3933 168.648 62.3673C170.056 62.4093 171.458 62.1573 172.763 61.6273C174.068 61.0973 175.249 60.2993 176.228 59.2873C179.083 60.7973 181.293 63.2913 182.448 66.3073C182.698 67.1643 182.819 68.0543 182.808 68.9473C182.618 71.6703 181.661 74.2843 180.048 76.4873L176.388 82.1273L156.388 112.127L153.228 111.187ZM182.488 132.807C178.766 134.896 175.657 137.923 173.468 141.587C170.708 139.907 156.608 131.027 152.328 128.327C152.323 127.667 152.496 127.017 152.828 126.447C153.261 125.714 153.932 125.153 154.728 124.855C155.525 124.557 156.4 124.542 157.207 124.811C158.014 125.08 158.704 125.617 159.163 126.333C159.622 127.049 159.821 127.901 159.728 128.747L159.468 130.287L173.208 133.287L173.848 131.767C175.302 128.155 177.977 125.168 181.408 123.327L184.728 124.247C183.711 127.022 182.96 129.889 182.488 132.807ZM198.248 135.547C198.128 142.567 201.428 149.127 208.148 155.367C208.148 156.807 207.308 173.707 207.008 180.207C206.669 180.247 206.327 180.247 205.988 180.207C205.353 180.199 204.726 180.066 204.143 179.815C203.56 179.564 203.032 179.201 202.59 178.746C202.148 178.29 201.8 177.752 201.566 177.162C201.332 176.572 201.217 175.941 201.228 175.307C201.23 174.774 201.325 174.246 201.508 173.747C201.67 173.169 201.954 172.633 202.34 172.174C202.726 171.715 203.206 171.344 203.748 171.087L200.628 158.747L199.888 158.307C190.568 152.867 186.068 145.967 186.228 137.067C186.432 132.414 187.49 127.837 189.348 123.567L190.208 121.447L160.208 113.067L170.828 97.0673L204.828 118.047C200.568 124.147 198.348 129.907 198.248 135.407"
          />
        </svg>
      </div>
    `}};i(vg,"KTGLoaderElement"),vg.styles=mg,o([kt({type:String,reflect:!0})],vg.prototype,"color",2),o([kt({type:String})],vg.prototype,"alt",2),o([Ct(".loader__svg")],vg.prototype,"svg",2),vg=o([ft("ktg-loader")],vg);var fg=class extends Event{static{i(this,"KTGAccountNavigationLoginEvent")}constructor(t){super("login",t)}},bg=class extends Event{static{i(this,"KTGAccountNavigationOpenEvent")}constructor(t){super("open",t)}},yg=class extends Event{static{i(this,"KTGAccountNavigationItemClickEvent")}constructor(t){super("item-click",t)}},kg=class extends Event{static{i(this,"KTGAccountNavigationCloseEvent")}constructor(t){super("close",t)}},wg=class extends Event{static{i(this,"KTGAccountNavigationLabelChangeEvent")}constructor(t){super("label-change",t)}},_g=class extends mt{constructor(){super(...arguments),this._label="",this.href="",this.target="_self",this.icon="placeholder",this.active=!1}get label(){return this._label}dispatchClickEvent(){this.dispatchEvent(new yg({bubbles:!0,cancelable:!1}))}onSlotchange(){this._label=this.textContent?.trim()??""}render(){return j`<slot @slotchange=${this.onSlotchange}></slot>`}};i(_g,"KTGAccountNavigationItemElement"),o([kt({type:String})],_g.prototype,"href",2),o([kt({type:String})],_g.prototype,"target",2),o([kt({type:String})],_g.prototype,"icon",2),o([kt({type:Boolean,reflect:!0})],_g.prototype,"active",2),_g=o([ft("ktg-account-navigation-item")],_g);var xg=class extends mt{constructor(){super(...arguments),this.buttonLabel="",this.iconButtonLabel="",this.userName=""}get options(){return this._options}connectedCallback(){super.connectedCallback(),this.checkAndSetImplicitSlot()}updated(t){super.updated(t),(t.has("userName")||t.has("buttonLabel")||t.has("iconButtonLabel"))&&this.dispatchEvent(new wg({bubbles:!1,cancelable:!1}))}checkAndSetImplicitSlot(){this.closest("ktg-main-navigation")&&(this.slot="account-navigation")}dispatchLoginEvent(){this.dispatchEvent(new fg({bubbles:!0,cancelable:!1}))}dispatchOpenEvent(){this.dispatchEvent(new bg({bubbles:!0,cancelable:!1}))}dispatchCloseEvent(){this.dispatchEvent(new kg({bubbles:!0,cancelable:!1}))}render(){return j`<slot></slot>`}};i(xg,"KTGAccountNavigationElement"),o([kt({type:String,attribute:"button-label"})],xg.prototype,"buttonLabel",2),o([kt({type:String,attribute:"icon-button-label"})],xg.prototype,"iconButtonLabel",2),o([kt({type:String,attribute:"user-name"})],xg.prototype,"userName",2),o([Et({selector:"ktg-account-navigation-item",flatten:!0})],xg.prototype,"_options",2),xg=o([ft("ktg-account-navigation")],xg);var Cg=[...ae,d`
    :host {
      height: 1.25rem;
      width: 1.25rem;
      display: inline-block;
    }

    .hamburger {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.375rem;
      width: inherit;
      height: inherit;
      background-color: transparent;
      border: 0;
      padding: 0;
      margin: 0;
      cursor: pointer;
    }

    .hamburger:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: 0.0625rem;
    }

    .hamburger__line {
      display: block;
      height: 0.125rem;
      width: inherit;
      background-color: var(--ktg-color-text);
      transform-origin: center;
    }
  `],Sg=class extends mt{constructor(){super(...arguments),this.animationTop=[{transform:"translateY(0)",offset:0},{transform:"translateY(0.25rem)",offset:.3},{transform:"translateY(0.25rem)",offset:.6},{transform:"translateY(0.25rem) rotate(45deg)",offset:1}],this.animationBottom=[{transform:"translateY(0)",offset:0},{transform:"translateY(-0.25rem)",offset:.3},{transform:"translateY(-0.25rem)",offset:.6},{transform:"translateY(-0.25rem) rotate(-45deg)",offset:1}],this.animationTiming={fill:"forwards",duration:0,easing:"ease-in-out"},this.open=!1,this.label=""}connectedCallback(){super.connectedCallback(),this.checkAndSetImplicitSlot()}updated(t){super.updated(t),t.has("open")&&this.animateLines(),this.animationTiming.duration=250}checkAndSetImplicitSlot(){this.closest("ktg-main-navigation")&&(this.slot="hamburger")}animateLines(){let t=this.open?"normal":"reverse";Ht.animate(this.lineTop,{keyframes:this.animationTop,options:{...this.animationTiming,direction:t}}),Ht.animate(this.lineBottom,{keyframes:this.animationBottom,options:{...this.animationTiming,direction:t}})}render(){return j`
      <button
        class=${ai({hamburger:!0,"hamburger--open":this.open,"hamburger--close":!this.open})}
        type="button"
        aria-label=${this.label}
      >
        <span class="hamburger__line hamburger__line--top"></span>
        <span class="hamburger__line hamburger__line--bottom"></span>
      </button>
    `}};i(Sg,"KTGHamburgerElement"),Sg.styles=Cg,o([kt({type:Boolean,reflect:!0})],Sg.prototype,"open",2),o([kt({type:String})],Sg.prototype,"label",2),o([Ct(".hamburger__line--top")],Sg.prototype,"lineTop",2),o([Ct(".hamburger__line--bottom")],Sg.prototype,"lineBottom",2),Sg=o([ft("ktg-hamburger")],Sg);var Eg=class{constructor(t){this.host=t,this.overlay=null,this.accountNavigationHandle=null,this.accountNavigation=null,this.accountButtonDesktop=null,this.hasAccountNavigation=!1,this.isAccountNavigationOpen=!1,this.displayIconButtonLabel="",this.displayButtonLabel="",this.onAccountNavigationSlotChange=()=>{let t=this.host.shadowRoot?.querySelector('slot[name="account-navigation"]')?.assignedElements({flatten:!0})?.filter(t=>t instanceof xg);this.accountNavigation?.removeEventListener("label-change",this.onAccountNavigationLabelChange),t&&(this.accountNavigation=t[0]??null,this.accountNavigation?.addEventListener("label-change",this.onAccountNavigationLabelChange)),this.host.requestUpdate(),this.updateAccountLabels()},this.onAccountNavigationLabelChange=()=>{this.updateAccountLabels()},this.closeAccountNavigation=()=>{this.accountNavigationHandle?.close()},this.onAccountButtonKeydown=t=>{if(this.accountNavigation)switch(t.code){case"Enter":case"Space":case"ArrowDown":t.preventDefault(),this.onAccountButtonActivate(0);break;case"ArrowUp":t.preventDefault(),this.onAccountButtonActivate(this.accountNavigation.options.length-1)}},this.onAccountButtonActivate=(t=0)=>{this.accountNavigation?.userName?this.toggleAccountNavigation(t):this.accountNavigation?.dispatchLoginEvent()},this.toggleAccountNavigation=(t=0)=>{this.accountNavigation&&(this.isAccountNavigationOpen?this.closeAccountNavigation():(this.overlay=document.createElement("ktg-account-vertical-navigation"),this.overlay.userName=this.accountNavigation.userName,this.overlay.options=this.accountNavigation.options,this.overlay.focusInIndex=t,this.accountNavigationHandle=this.overlayService.open({element:this.overlay,outlet:Me.OUTLETS.ABOVE_MAIN_NAVIGATION,backdrop:{enabled:!0,transparent:!0},positioning:t=>{if(!this)return new Ve;let e,i;return window.innerWidth>=He?(e="172px",i=this.accountButtonDesktop):(e=`${this.host.clientWidth}px`,i=this.host),new Fe(t).withOrigin(i).minWidth(e).positions([{originX:"right",originY:"bottom",overlayX:"right",overlayY:"top"}]).forceOntoScreen()}}),this.overlay.handle=this.accountNavigationHandle,this.isAccountNavigationOpen=!0,this.host.requestUpdate(),this.accountNavigation.dispatchOpenEvent(),this.accountNavigationHandle.on("close",()=>{this.isAccountNavigationOpen=!1,this.host.requestUpdate(),this.accountNavigation?.dispatchCloseEvent(),this.accountNavigationHandle=null,window.innerWidth>=He&&this.accountButtonDesktop?.focus()})))},this.host.addController(this)}static{i(this,"KTGMainNavigationAccountController")}hostDisconnected(){this.accountNavigation?.removeEventListener("label-change",this.onAccountNavigationLabelChange)}hostUpdate(){this.hasAccountNavigation=null!==this.accountNavigation}hostUpdated(){this.accountButtonDesktop=this.host.shadowRoot?.querySelector("#account-button-desktop")||null}updateAccountLabels(){this.accountNavigation&&(this.displayIconButtonLabel=this.accountNavigation.iconButtonLabel,this.displayButtonLabel=this.accountNavigation.userName||this.accountNavigation.buttonLabel,this.host.requestUpdate())}};o([De(Me)],Eg.prototype,"overlayService",2);var Tg=[...ae,d`
    :host {
      display: block;
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      z-index: var(--ktg-layer-main-navigation);
    }

    .main-navigation {
      position: relative;
      border-bottom: 0.0625rem solid var(--ktg-color-neutral-02);
    }

    .main-navigation__meta {
      display: none;
    }

    @media screen and (min-width: ${He}px) {
      .main-navigation__meta.main-navigation__meta--has-children {
        display: block;
        background-color: var(--ktg-color-neutral-01);
        min-height: 2rem;
      }
    }

    .main-navigation__meta-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      min-height: inherit;
      max-width: ${Ue}px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 2rem;
      padding-right: 2rem;
    }

    @media screen and (min-width: ${He}px) {
      .main-navigation__meta-inner {
        padding-left: 6rem;
        padding-right: 6rem;
      }
    }

    .main-navigation__main {
      display: flex;
      background-color: var(--ktg-color-background-01);
    }

    .main-navigation__main-inner {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;
      min-height: 5rem;
      max-width: ${Ue}px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    @media screen and (min-width: ${Ke}px) {
      .main-navigation__main-inner {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }

    @media screen and (min-width: ${He}px) {
      .main-navigation__main-inner {
        padding-left: 6rem;
        padding-right: 6rem;
      }
    }

    .main-navigation__logo {
      display: flex;
      padding-bottom: 0.5rem;
    }

    .main-navigation__home-link {
      display: flex;
      text-decoration: none;
      color: inherit;
    }

    .main-navigation__home-link:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: 0.125rem;
    }

    .logo {
      width: 8.75rem;
    }

    .main-navigation__navigation {
      display: none;
    }

    @media screen and (min-width: ${He}px) {
      .logo {
        width: 10rem;
      }
      .main-navigation__navigation {
        display: block;
      }
    }

    .main-navigation__mobile {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      height: 100%;
    }

    .account-navigation-slot {
      display: none;
    }

    @media screen and (min-width: ${He}px) {
      .main-navigation__mobile {
        display: none;
      }
    }

    #account-buttton {
      z-index: 11;
    }
  `],Ig=[...ae,d`
    :host {
      height: 1.375rem;
      width: 1.375rem;
      display: inline-block;
    }

    .icon-button {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: inherit;
      height: inherit;
      background-color: transparent;
      border: 0;
      padding: 0;
      margin: 0;
      cursor: pointer;
      color: var(--ktg-color-text);
    }

    .icon-button:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: 0.0625rem;
    }

    .icon-button__icon {
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      width: inherit;
      height: inherit;
      transition: opacity 0.25s ease-in-out;
    }

    .icon-button--user .icon-button__user-icon {
      opacity: 1;
    }

    .icon-button__close-icon {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.375rem;
      width: 1.25rem;
    }

    .icon-button--close .icon-button__close-icon {
      opacity: 1;
    }

    .icon-button-close__line {
      display: block;
      height: 0.125rem;
      width: 100%;
      background-color: var(--ktg-color-text);
      transform-origin: center;
    }
  `],$g=class extends mt{constructor(){super(...arguments),this.animationTop=[{transform:"translateY(0)",offset:0},{transform:"translateY(0.25rem)",offset:.3},{transform:"translateY(0.25rem)",offset:.6},{transform:"translateY(0.25rem) rotate(45deg)",offset:1}],this.animationBottom=[{transform:"translateY(0)",offset:0},{transform:"translateY(-0.25rem)",offset:.3},{transform:"translateY(-0.25rem)",offset:.6},{transform:"translateY(-0.25rem) rotate(-45deg)",offset:1}],this.animationTiming={fill:"forwards",duration:0,easing:"ease-in-out"},this.label="",this.isOpen=!1}updated(t){super.updated(t),t.has("isOpen")&&this.animateLines(),this.animationTiming.duration=250}animateLines(){let t=this.isOpen?"normal":"reverse";Ht.animate(this.lineTop,{keyframes:this.animationTop,options:{...this.animationTiming,direction:t}}),Ht.animate(this.lineBottom,{keyframes:this.animationBottom,options:{...this.animationTiming,direction:t}})}render(){return j`
      <button
        class=${ai({"icon-button":!0,"icon-button--user":!this.isOpen,"icon-button--close":this.isOpen})}
        type="button"
        aria-label=${this.label}
      >
        <ktg-icon
          class="icon-button__icon icon-button__user-icon"
          name="user"
        ></ktg-icon>
        <div class="icon-button__icon icon-button__close-icon">
          <span
            class="icon-button-close__line icon-button-close__line--top"
          ></span>
          <span
            class="icon-button-close__line icon-button-close__line--bottom"
          ></span>
        </div>
      </button>
    `}};i($g,"KTGAccountIconButtonElement"),$g.styles=Ig,o([kt({type:String})],$g.prototype,"label",2),o([kt({type:Boolean,reflect:!0,attribute:"is-open"})],$g.prototype,"isOpen",2),o([Ct(".icon-button-close__line--top")],$g.prototype,"lineTop",2),o([Ct(".icon-button-close__line--bottom")],$g.prototype,"lineBottom",2),$g=o([ft("ktg-account-icon-button")],$g);var Og=[...ae,d`
    :host {
      display: block;
      background-color: var(--ktg-color-brand1-01);
      padding: 1rem 0 1rem !important;
    }

    @media screen and (max-width: ${He}px) {
      :host {
        padding: 1rem 0.5rem 1rem !important;
      }
    }

    .account-vertical-navigation__header {
      display: none;
      padding: 2rem 2rem 1rem 2.5rem;
      align-items: flex-end;
      background-color: var(--ktg-color-brand1-01);
      color: var(--ktg-color-dark-contrast);
      font-size: 1.25rem;
    }

    @media screen and (max-width: ${He}px) {
      .account-vertical-navigation__header {
        display: flex;
      }
    }

    .account-vertical-navigation__main {
      position: relative;
    }

    .account-vertical-navigation__decoration-track {
      position: absolute;
      top: 0px;
      height: 100%;
      width: 0.5rem;
      overflow: hidden;
      pointer-events: none;
      z-index: 1;
    }

    .account-vertical-navigation__decoration {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      transform-origin: top center;
      transform: scaleY(0);
    }

    .decoration__inner {
      height: 100%;
      width: 100%;
      background-color: var(--ktg-color-brand3-01);
    }
  `],Lg=[...ae,...ne,d`
    :host {
      position: relative;
      display: block;
      position: relative;
      background-color: var(--ktg-color-brand1-01);
      cursor: pointer;
    }

    :host(:focus-within) {
      outline: none;
      z-index: 10;
    }

    :host::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: var(--ktg-color-brand1-02);
      opacity: 0;
      transition: opacity 0.25s ease-in-out;
      z-index: 0;
    }

    :host([active])::before {
      opacity: 1;
    }

    .item__decoration-container {
      display: block;
      position: absolute;
      height: 100%;
      width: 0.5rem;
      overflow: hidden;
    }

    .item:has(:focus-visible) .item__decoration {
      opacity: 1;
    }

    .item__decoration {
      position: relative;
      z-index: 1;
      display: block;
      height: 100%;
      width: 100%;
      background-color: var(--ktg-color-brand3-01);
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }

    :host([active]) .item__decoration {
      opacity: 1;
    }

    .item-button {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      position: relative;
      height: 2.5rem;
      width: 100%;
      border: 0;
      outline: 0;
      background-color: transparent;
      color: var(--ktg-color-dark-contrast);
      border-bottom: 0.0625rem solid transparent;
      padding: 0 2rem 0 1rem;
      cursor: pointer;
      font-size: 1rem;
      text-decoration: none;
    }

    .item-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0.5rem;
      height: 100%;
      width: calc(100% - 1rem);
      border-bottom: 0.0625rem solid var(--ktg-color-brand1-02);
    }

    :host(:last-child) .item-button::before {
      border-bottom: 0;
    }

    @media screen and (max-width: ${He}px) {
      .item-button::before {
        left: 0px;
        width: 100%;
      }
    }
  `],Dg=class extends mt{constructor(){super(...arguments),this.originalOption=null,this.active=!1,this.href="",this.target="_self",this.icon="",this.label=""}linkTriggerEvent(t){"Space"===t.code&&(this.button.click(),this.dispatchActivate())}onClick(){this.originalOption&&(this.originalOption.dispatchClickEvent(),this.dispatchActivate())}dispatchActivate(){this.dispatchEvent(new Event("activate",{bubbles:!0,cancelable:!1}))}render(){return j`
      <div class="item">
        <span class="item__decoration-container">
          <span class="item__decoration"></span>
        </span>

        ${this.renderButton()}
      </div>
    `}renderButton(){return this.href?j`
        <a
          class="item-button"
          href=${fi(this.href)}
          target=${this.target}
          @keydown=${this.linkTriggerEvent}
          @click=${this.onClick}
        >
          ${this.renderButtonContent()}
        </a>
      `:j`
        <button
          class="item-button"
          type="button"
          aria-selected=${this.active}
          @click=${this.onClick}
        >
          ${this.renderButtonContent()}
        </button>
      `}renderButtonContent(){return j`
      ${si(this.icon,()=>j`
          <ktg-icon
            class="item-button__icon"
            name=${this.icon}
          ></ktg-icon>
        `)}
      ${this.label}
    `}};i(Dg,"KTGAccountVerticalNavigationItemElement"),Dg.styles=Lg,Dg.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},o([kt({attribute:!1})],Dg.prototype,"originalOption",2),o([kt({type:Boolean,reflect:!0})],Dg.prototype,"active",2),o([kt({type:String})],Dg.prototype,"href",2),o([kt({type:String})],Dg.prototype,"target",2),o([kt({type:String})],Dg.prototype,"icon",2),o([kt({type:String})],Dg.prototype,"label",2),o([Ct(".item-button")],Dg.prototype,"button",2),Dg=o([ft("ktg-account-vertical-navigation-item")],Dg);var Ag=class extends mt{constructor(){super(...arguments),this.highlightBarAnimationController=new Jt(this,"vertical","ktg-account-vertical-navigation-item"),this.rovingTabindexController=new $o(this,{direction:"vertical",elements:()=>Array.from(this.renderedOptions),focusInIndex:t=>{let e=t.findIndex(t=>t.active);return-1===e?this.focusInIndex:e},elementEnterAction:t=>{Ht.scrollIntoView(t,{block:"center",inline:"nearest"})}}),this.handle=null,this.focusInIndex=0,this.userName="",this.onKeydown=t=>{switch(t.code){case"Tab":case"Escape":t.preventDefault(),t.stopPropagation(),this.closeOverlay()}},this.closeOverlay=()=>{this.handle?.close()}}firstUpdated(t){super.firstUpdated(t),this.highlightBarAnimationController.setMainElement(this.mainElement),this.highlightBarAnimationController.setDecorationElement(this.decorationElement),this.highlightBarAnimationController.firstUpdated(),this.highlightBarAnimationController.setItems(Array.from(this.renderedOptions))}connectedCallback(){super.connectedCallback(),this.id=this.hasAttribute("id")?this.id:"ktg-account-vertical-navigation-"+ ++Ag.idCounter,this.addEventListener("keydown",this.onKeydown),window.addEventListener("resize",this.closeOverlay)}disconnectedCallback(){this.handle=null,this.removeEventListener("keydown",this.onKeydown),window.removeEventListener("resize",this.closeOverlay)}async afterAttach(){this.rovingTabindexController.focus()}async onDetach(){this.closeOverlay()}render(){return j`
      <div class="account-vertical-navigation__wrapper">
        <div class="account-vertical-navigation">
          <div class="account-vertical-navigation__header">
            ${this.userName}
          </div>

          <div class="account-vertical-navigation__main">
            <div class="account-vertical-navigation__decoration-track">
              <div class="account-vertical-navigation__decoration">
                <div class="decoration__inner"></div>
              </div>
            </div>

            ${bd(this.options,t=>j`
                <ktg-account-vertical-navigation-item
                  .originalOption=${t}
                  .label=${t.label}
                  .href=${t.href}
                  .target=${t.target}
                  .icon=${t.icon}
                  ?active=${t.active}
                  @activate=${this.closeOverlay}
                >
                  ${t.label}
                </ktg-account-vertical-navigation-item>
              `)}
          </div>
        </div>
      </div>
    `}};i(Ag,"KTGAccountVerticalNavigationElement"),Ag.idCounter=-1,Ag.styles=Og,o([wt()],Ag.prototype,"handle",2),o([wt()],Ag.prototype,"focusInIndex",2),o([wt()],Ag.prototype,"options",2),o([kt({type:String,attribute:"user-name"})],Ag.prototype,"userName",2),o([Ct(".account-vertical-navigation__main")],Ag.prototype,"mainElement",2),o([Ct(".account-vertical-navigation__decoration")],Ag.prototype,"decorationElement",2),o([St("ktg-account-vertical-navigation-item")],Ag.prototype,"renderedOptions",2),Ag=o([ft("ktg-account-vertical-navigation")],Ag);var Mg=class extends mt{constructor(){super(...arguments),this.accountController=new Eg(this),this.hasMetaNodes=!1,this.homeUrl="",this.logoDescription=""}connectedCallback(){super.connectedCallback(),this.id=this.hasAttribute("id")?this.id:"ktg-main-navigation-"+ ++Mg.idCounter}onMetaSlotChange(){this.hasMetaNodes=this.metaNodes.length>0}render(){return j`
      <header class="main-navigation">
        <div
          class=${ai({"main-navigation__meta":!0,"main-navigation__meta--has-children":this.hasMetaNodes})}
        >
          <div class="main-navigation__meta-inner">
            <slot
              class="main-navigation__meta-slot"
              name="meta"
              @slotchange=${this.onMetaSlotChange}
            ></slot>

            ${si(this.accountController.hasAccountNavigation,()=>j`
                <ktg-button
                  id="account-button-desktop"
                  size="small"
                  leading-icon="user"
                  @click=${this.accountController.onAccountButtonActivate}
                  @keydown=${this.accountController.onAccountButtonKeydown}
                >
                  ${this.accountController.displayButtonLabel}
                </ktg-button>
              `)}
          </div>
        </div>

        <div class="main-navigation__main">
          <div class="main-navigation__main-inner">
            <div class="main-navigation__logo">${this.renderLogo()}</div>

            <div class="main-navigation__navigation">
              <slot name="primary"></slot>
            </div>

            <div class="main-navigation__mobile">
              ${si(this.accountController.hasAccountNavigation,()=>j`
                  <ktg-account-icon-button
                    .label=${this.accountController.displayIconButtonLabel}
                    @click=${this.accountController.onAccountButtonActivate}
                    ?is-open=${this.accountController.isAccountNavigationOpen}
                  ></ktg-account-icon-button>
                `)}

              <slot name="hamburger"></slot>
            </div>
          </div>
        </div>

        <!-- NOTE: can put navigation overlay in here, for example -->
        <div class="main-navigation__outlet">
          <slot></slot>
        </div>
      </header>

      <!-- Hidden, because opens in overlay -->
      <slot
        class="account-navigation-slot"
        name="account-navigation"
        @slotchange=${this.accountController.onAccountNavigationSlotChange}
      ></slot>
    `}renderLogo(){let t=j`
      <ktg-logo
        class="logo"
        alt=${this.logoDescription}
      ></ktg-logo>
    `;return this.homeUrl?j`
        <a
          class="main-navigation__home-link"
          href=${this.homeUrl}
        >
          ${t}
        </a>
      `:t}};i(Mg,"KTGMainNavigationElement"),Mg.idCounter=-1,Mg.styles=Tg,o([wt()],Mg.prototype,"hasMetaNodes",2),o([kt({type:String,attribute:"home-url"})],Mg.prototype,"homeUrl",2),o([kt({type:String,attribute:"logo-description"})],Mg.prototype,"logoDescription",2),o([Tt({slot:"meta",flatten:!0})],Mg.prototype,"metaNodes",2),o([Et({slot:"meta",flatten:!0})],Mg.prototype,"metaElements",2),Mg=o([ft("ktg-main-navigation")],Mg);var Bg=[...ae,...ne,d`
    :host {
      display: block;
      width: 100%;
    }

    .map-footer {
      width: 100%;
      padding-top: 0.4375rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 0.4375rem;
      font-size: 0.75rem;
      line-height: 100%;
      color: var(--ktg-color-text);
      background: rgba(var(--ktg-rgb-background-01), 0.3);
      backdrop-filter: blur(1rem);
    }
  `];re([d`
    .ktg-map-footer-text {
      color: var(--ktg-color-text);
      font-weight: var(--ktg-font-weight-default);
      font-size: 0.75rem;
      line-height: 100%;
    }

    .ktg-map-footer-link {
      color: var(--ktg-color-text);
      font-weight: var(--ktg-font-weight-default);
      font-size: 0.75rem;
      line-height: 100%;
      text-decoration: none;
    }

    .ktg-map-footer-link:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
    }
  `]);var zg=class extends mt{render(){return j`
      <div class="map-footer">
        <slot></slot>
      </div>
    `}};i(zg,"KTGMapFooterElement"),zg.styles=Bg,zg=o([ft("ktg-map-footer")],zg);var Ng=class extends CustomEvent{static{i(this,"KTGMapInfoPopupMoveEvent")}constructor(t){super("move",t)}},Rg=class extends CustomEvent{static{i(this,"KTGMapInfoPopupRepositionEvent")}constructor(t){super("reposition",t)}},Pg=class extends CustomEvent{static{i(this,"KTGMapInfoPopupCloseEvent")}constructor(t){super("close",t)}},Fg=class extends CustomEvent{static{i(this,"KTGMapInfoPopupDismissEvent")}constructor(t){super("dismiss",t)}},Vg=i(t=>c(`min(32rem, calc(100cqw - ${t}))`),"maxWidth"),Kg=i(t=>c(`min(32rem, calc(100cqh - ${t}))`),"maxHeight"),Hg=[...ae,...dh,d`
    :host {
      position: relative;
      display: none;
      width: 100%;
      max-width: ${Vg("1rem")};
      max-height: ${Kg("var(--ktg-overlay-y-offset-small) - 2rem")};
      --ktg-map-info-popup-header-height: 4rem;
    }

    :host([open]) {
      display: block;
    }

    :host(.ktg-cdk-popup--in-custom-outlet) {
      max-width: ${Vg("1rem")};
      max-height: ${Kg("2rem")};
    }

    @container (min-width: ${Ke}px) {
      :host {
        max-width: ${Vg("4rem")};
        max-height: ${Kg("var(--ktg-overlay-y-offset-large) - 4rem")};
      }

      :host(.ktg-cdk-popup--in-custom-outlet) {
        max-width: ${Vg("2rem")};
        max-height: ${Kg("2rem")};
      }
    }

    .popup {
      position: relative;
      display: flex;
      flex-direction: column;
      flex-shrink: 1;
      border: none;
      width: 100%;
      height: 100%;
      min-height: 0;
      max-width: inherit;
      max-height: inherit;
      overflow: hidden;
      color: var(--ktg-color-text);
      background-color: var(--ktg-color-background-01);
      box-shadow: 0 0.625rem 1.25rem 0 rgba(var(--ktg-rgb-shadow), 0.15);
    }

    .popup__header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      z-index: 1;
      background-color: rgba(var(--ktg-rgb-background-01), 0.95);
      backdrop-filter: blur(0.25rem);
      height: var(--ktg-map-info-popup-header-height);
      display: flex;
      justify-content: flex-end;
      padding-top: 1.5rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-bottom: 1.5rem;
    }

    .popup__drag-header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: var(--ktg-map-info-popup-header-height);
      display: flex;
      justify-content: space-between;
      padding-top: 1.5rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-bottom: 1.5rem;
    }

    .popup__icon-button {
      position: relative;
      display: flex;
      border: none;
      background-color: transparent;
      color: var(--ktg-color-link);
    }

    .popup__icon-button:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: 0.125rem;
    }

    .popup__icon-button::before {
      content: '';
      display: block;
      width: 2rem;
      height: 2rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .popup__drag-handle {
      cursor: move;
    }

    .popup__close-button {
      cursor: pointer;
    }

    .popup__scroll-container {
      padding-top: var(--ktg-map-info-popup-header-height);
      position: relative;
      flex-grow: 1;
      overflow: auto;
    }

    .popup__main {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    .popup__buttons {
      width: 100%;
      background-color: var(--ktg-color-background-01);
      padding-bottom: 1.5rem;
    }

    .popup__scrollbar {
      position: absolute;
      top: var(--ktg-map-info-popup-header-height);
      right: 0.5rem;
      bottom: 0.5rem;
      z-index: 10;
    }
  `];re([d`
    .ktg-map-info-popup-panel {
    }

    .ktg-map-info-popup-title {
      font-size: 1.25rem;
      font-family: var(--ktg-font-sans-serif);
      font-weight: var(--ktg-font-weight-default);
      font-style: normal;
      margin-top: 1rem;
    }

    .ktg-map-info-popup-title:first-child {
      margin-top: 0;
    }

    .ktg-map-info-popup-text {
      font-family: var(--ktg-font-sans-serif);
      font-weight: var(--ktg-font-weight-default);
      font-size: 0.875rem;
      line-height: 120%;
    }

    .ktg-map-info-popup-image {
      align-self: flex-start;
      max-width: 100%;
    }

    dl.ktg-map-info-popup-key-values {
      display: table;
      align-self: flex-start;
    }

    .ktg-map-info-popup-key-value {
      display: table-row;
      font-family: var(--ktg-font-sans-serif);
      font-weight: var(--ktg-font-weight-default);
      font-size: 0.875rem;
      line-height: 120%;
    }

    dt.ktg-map-info-popup-key-value__key {
      display: table-cell;
      padding-right: 2.5rem;
    }

    dd.ktg-map-info-popup-key-value__value {
      display: table-cell;
    }

    /* TODO: find out if we need this link variation (shouldn't we use the <ktg-link>?) */
    .ktg-map-info-popup-link {
      color: var(--ktg-color-link);
      outline: 0;
    }

    .ktg-map-info-popup-link:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
    }
  `]);var Gg=class extends mt{constructor(){super(...arguments),this.panelClasses="ktg-map-info-popup-panel",this.animations=new Qt(this),this.handle=null,this.overlay=null,this.dragMove=new cr,this.outlet=null,this.x=null,this.y=null,this.isOpen=!1,this.onWindowResize=()=>{if(this.isOpen){let t={x:this.x??0,y:this.y??0},e=Ft.inset(Ft.viewport(),32),i=Vt.clampRect(t,e);this.x=i.x,this.y=i.y,Vt.equals(t,i)||this.dispatchRepositionEvent({previousPosition:t,newPosition:i})}},this.onKeydown=t=>{this.isOpen&&"Escape"===t.code&&this.dismiss()}}connectedCallback(){super.connectedCallback(),this.id=this.hasAttribute("id")?this.id:"ktg-map-info-popup-"+ ++Gg.idCounter,this.addEventListener("keydown",this.onKeydown),window.addEventListener("resize",this.onWindowResize)}firstUpdated(t){super.firstUpdated(t),this.dragMove.withTarget(this).withHandle(this.dragHandle).withForceInsideViewport().withViewportPadding(32),this.dragMove.on("start",()=>{this.overlay?.panel&&(this.overlay.panel.style.zIndex=`${this.overlayService.nextZIndex()}`)}),this.dragMove.on("move",t=>{this.style.transform=`translate(${t.mouseDelta.x}px, ${t.mouseDelta.y}px)`,this.dispatchMoveEvent(t)}),this.dragMove.on("end",t=>{this.style.transform="",this.x=t.targetPosition.x,this.y=t.targetPosition.y})}update(t){super.update(t),(t.has("x")||t.has("y"))&&(null!==this.x&&(this.style.left=`${this.x}px`),null!==this.y&&(this.style.top=`${this.y}px`))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydown),window.removeEventListener("resize",this.onWindowResize)}async onAttach(){this.isOpen=!0}async afterAttach(){let t=Ft.viewport(),e=Ft.fromElement(this);null===this.x&&(this.x=Ft.centerX(t)-.5*e.width),null===this.y&&(this.y=Ft.centerY(t)-.5*e.height),this.focusAutoFocusElement()}async animateIn(){await this.animations.animateIn()}async animateOut(){await this.animations.animateOut()}async onDetach(){this.handle=null,this.isOpen=!1}render(){return j`
      <div
        role="dialog"
        class="popup"
        aria-popup="true"
        ?open=${this.isOpen}
      >
        <div class="popup__header">
          <div class="popup__drag-header">
            <button
              class="popup__icon-button popup__drag-handle"
              type="button"
              aria-label="Verschieben"
              title="Verschieben"
            >
              <ktg-icon name="drag-horizontal"></ktg-icon>
            </button>
          </div>

          <button
            class="popup__icon-button popup__close-button"
            type="button"
            @click=${this.dismiss}
            aria-label="Schliessen"
            title="Schliessen"
          >
            <ktg-icon name="close"></ktg-icon>
          </button>
        </div>

        <div
          class="popup__scroll-container"
          id=${this.id+"__scrollcontainer"}
        >
          <div class="popup__main">
            <slot></slot>
          </div>
        </div>

        <div class="popup__buttons">
          <slot name="buttons"></slot>
        </div>
      </div>

      <ktg-scrollbar
        class="popup__scrollbar"
        for=${this.id+"__scrollcontainer"}
      ></ktg-scrollbar>
    `}setOverlay(t){this.overlay=t}open(){if(this.handle)return this.handle;let t=this.outlet??Me.OUTLETS.ABOVE_MAIN_NAVIGATION;return this.handle=this.overlayService.open({element:this,outlet:t,backdrop:{enabled:!1},panel:{additionalClasses:this.panelClasses}}),this.handle.on("close",()=>{this.dispatchCloseEvent()}),this.handle}close(){this.handle?.close()}dismiss(){this.close(),this.dispatchDismissEvent()}focusAutoFocusElement(){let t=this.querySelector("[autofocus]");t?(t.focus(),Ht.scrollIntoView(t,{block:"nearest",inline:"nearest"})):this.closeButton.focus()}dispatchMoveEvent(t){this.dispatchEvent(new Ng({bubbles:!0,cancelable:!1,detail:t}))}dispatchRepositionEvent(t){this.dispatchEvent(new Rg({bubbles:!0,cancelable:!1,detail:t}))}dispatchCloseEvent(){this.dispatchEvent(new Pg({bubbles:!0,cancelable:!1}))}dispatchDismissEvent(){this.dispatchEvent(new Fg({bubbles:!0,cancelable:!1}))}};i(Gg,"KTGMapInfoPopupElement"),Gg.styles=Hg,Gg.idCounter=-1,o([De(Me)],Gg.prototype,"overlayService",2),o([Ee({context:Te,subscribe:!0}),kt({type:String})],Gg.prototype,"outlet",2),o([kt({type:Number})],Gg.prototype,"x",2),o([kt({type:Number})],Gg.prototype,"y",2),o([kt({type:Boolean,reflect:!0,attribute:"open"})],Gg.prototype,"isOpen",2),o([Ct(".popup__close-button")],Gg.prototype,"closeButton",2),o([Ct(".popup__drag-header")],Gg.prototype,"dragHandle",2),Gg=o([ft("ktg-map-info-popup")],Gg);var Ug=[...ae,...ne,d`
    :host {
      display: block;
      --ktg-map-layer-control-base-padding-left: 2.25rem;
    }

    .accordion-item {
      background-color: var(--ktg-color-background-01);
      border-bottom: 0.0625rem solid var(--ktg-color-neutral-02);
    }

    :host(:last-child) .accordion-item {
      border-bottom: none;
    }

    ktg-cdk-accordion-item::part(header):focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: -0.125rem;
    }

    .accordion-item__header {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      width: 100%;
      font-size: 1rem;
      line-height: 120%;
      text-align: left;
      cursor: pointer;
      padding-top: 0.65625rem;
      padding-left: calc(
        1rem + var(--ktg-map-layer-accordion-nesting-level, 0) * 1.25rem
      );
      padding-right: 1rem;
      padding-bottom: 0.65625rem;
    }

    .accordion-item__icon {
      flex-shrink: 0;
      color: var(--ktg-color-link);
      transition: transform 0.2s ease-out;
    }

    ktg-cdk-accordion-item[expanded] .accordion-item__icon {
      transform: rotate(90deg);
    }

    .accordion-item__content {
      border-top: 0.0625rem solid var(--ktg-color-neutral-02);
      background-color: var(--ktg-color-background-01);
    }
  `],Wg="ktg-map-layer-group-reorderable-context",Yg=class extends CustomEvent{static{i(this,"KTGMapLayerGroupReorderEvent")}constructor(t){super("reorder",t)}},qg=[d`
    :host {
      display: flex;
      flex-direction: column;
      --ktg-map-layer-control-base-padding-left: 1rem;
    }
  `],jg=class extends mt{constructor(){super(...arguments),this.reorderHandler=null,this.reorderable=!1}firstUpdated(t){super.firstUpdated(t),this.reorderHandler=(new sr).dropzone(this).itemSelector("ktg-map-layer-control").handleSelector(".control__drag-handle").draggingClass("control--dragging").build(),this.reorderHandler.on("reorder",t=>{this.dispatchEvent(new Yg({bubbles:!0,cancelable:!1,detail:{previousOrder:t.previousOrder.map(t=>t.element),newOrder:t.newOrder.map(t=>t.element),itemElement:t.item,fromIndex:t.fromIndex,toIndex:t.toIndex}}))})}render(){return j`<slot @slotchange=${this.onSlotChange}></slot>`}onSlotChange(){this.reorderHandler?.refetchItems()}};i(jg,"KTGMapLayerGroupElement"),jg.styles=qg,o([Se({context:Wg}),kt({type:Boolean,reflect:!0})],jg.prototype,"reorderable",2),jg=o([ft("ktg-map-layer-group")],jg);var Zg=class extends CustomEvent{static{i(this,"KTGMapLayerControlToggleEvent")}constructor(t){super("toggle",t)}},Xg=class extends CustomEvent{static{i(this,"KTGMapLayerControlOpacityInputEvent")}constructor(t){super("opacity-input",t)}},Jg=class extends CustomEvent{static{i(this,"KTGMapLayerControlOpacityChangeEvent")}constructor(t){super("opacity-change",t)}},Qg=[...ae,...ne,...Gi,d`
    :host {
      display: block;
    }

    .control {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
      padding-top: 0.5rem;
      padding-left: calc(
        var(--ktg-map-layer-control-base-padding-left, 1rem) +
          var(--ktg-map-layer-accordion-nesting-level, 0) * 1.25rem
      );
      padding-right: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 0.0625rem solid var(--ktg-color-neutral-02);
    }

    :host(.control--dragging) .control {
      z-index: 1;
      outline: 0.125rem solid var(--ktg-color-focus);
    }

    :host(:last-child) .control {
      border-bottom: none;
    }

    .control__drag-handle {
      position: relative;
      background: transparent;
      border: 0;
      outline: 0;
      padding: 0;
      margin: 0;
      display: flex;
      color: var(--ktg-color-link);
      cursor: grab;
      touch-action: manipulation;
      margin-right: 0.5rem;
    }

    .control__drag-handle::before {
      content: '';
      position: absolute;
      display: block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1.5rem;
      height: 1.5rem;
    }

    .control__drag-handle:focus-visible::before {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: -0.125rem;
    }

    :host(.control--dragging) .control__drag-handle:focus-visible::before {
      outline: 0;
    }

    .control__checkbox {
      display: flex;
    }

    .control__text {
      flex-grow: 1;
    }

    .control__label {
      font-size: 1rem;
      line-height: 120%;
      color: var(--ktg-color-text);
      user-select: none;
      cursor: pointer;
    }

    .control__opacity {
      display: inline-flex;
      gap: 0.5rem;
      /* NOTE: when flex-wrap applies, the slider will be on the next line and
       * we want it to be on the right hand side
       */
      margin-left: auto;
      min-width: 33.33%;
      flex-shrink: 0;
    }

    .control__opacity-slider {
      flex-grow: 1;
    }

    .control__opacity-slider::part(slider) {
      flex-grow: 1;
    }

    .control__opacity-slider::part(value-text) {
      width: 4.75ch;
      flex-shrink: 0;
      text-align: right;
    }

    .control__opacity-icon {
      color: var(--ktg-color-link);
    }

    .control__tooltip {
      display: none;
    }

    .control__tooltip--has-tooltip {
      display: flex;
      align-items: center;
      margin-left: 0.5rem;
    }
  `],tm=class extends CustomEvent{static{i(this,"KTGRangeSliderInputEvent")}constructor(t){super("input",t)}},em=class extends CustomEvent{static{i(this,"KTGRangeSliderChangeEvent")}constructor(t){super("change",t)}},im=d`
  height: 0.0625rem;
  background: var(--ktg-range-slider-track-color, var(--ktg-color-text));
`,om=d`
  -webkit-appearance: none;
  height: 0.75rem;
  width: 0.75rem;
  background: var(--ktg-range-slider-thumb-color, var(--ktg-color-link));
  border-radius: 50%;
  cursor: pointer;
  margin-top: -0.34375rem;
  border: 0;
  box-shadow: none;
`,nm=d`
  background: var(--ktg-color-neutral-03);
`,rm=d`
  cursor: default;
  background: var(--ktg-color-neutral-03);
`,am=[...ae,...ne,d`
    :host {
      position: relative;
      display: inline-flex;
    }

    .range-slider {
      display: flex;
      width: 100%;
      gap: 0.5rem;
      align-items: center;
    }

    .range-slider__input {
      width: 100%;
      -webkit-appearance: none;
      height: 1rem;
      background: transparent;
      outline: none;
      cursor: pointer;
    }

    .range-slider__input:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
    }

    .range-slider__input::-webkit-slider-runnable-track {
      ${im}
    }
    .range-slider__input::-moz-range-track {
      ${im}
    }

    .range-slider__input::-webkit-slider-thumb {
      ${om}
    }
    .range-slider__input::-moz-range-thumb {
      ${om}
    }

    :host([error]) .range-slider__input::-webkit-slider-runnable-track {
      background: var(--ktg-color-danger);
    }
    :host([error]) .range-slider__input::-moz-range-track {
      background: var(--ktg-color-danger);
    }

    :host([error]) .range-slider__input::-webkit-slider-thumb {
      background: var(--ktg-color-danger);
    }
    :host([error]) .range-slider__input::-moz-range-thumb {
      background: var(--ktg-color-danger);
    }

    :host([disabled]) .range-slider__input {
      cursor: default;
    }

    :host([disabled]) .range-slider__input::-webkit-slider-runnable-track {
      ${nm}
    }
    :host([disabled]) .range-slider__input::moz-range-track {
      ${nm}
    }

    :host([disabled]) .range-slider__input::-webkit-slider-thumb {
      ${rm}
    }
    :host([disabled]) .range-slider__input::-moz-range-thumb {
      ${rm}
    }

    .range-slider__value-text {
      color: var(--ktg-range-slider-value-text-color, var(--ktg-color-text));
      font-size: 0.75rem;
      line-height: 100%;
      user-select: none;
      white-space: nowrap;
    }
  `],sm=class extends(md(mt)){constructor(){super(...arguments),this.internals=this.attachInternals(),this.formattedValueText="",this.name="",this.min=0,this.max=100,this.step=1,this.value=0,this.valueText="",this.onReset=()=>{let t=Nt(.5,this.min,this.max);this.value=t}}connectedCallback(){super.connectedCallback(),this.internals.form?.addEventListener("reset",this.onReset)}willUpdate(t){if(super.willUpdate(t),t.has("valueText")||t.has("value")||t.has("min")||t.has("max")||t.has("step")){let t=Pt(this.value,this.min,this.max,0,100),e=Math.round(t);this.formattedValueText=this.valueText.replace("{value}",this.value.toString()).replace("{min}",this.min.toString()).replace("{max}",this.max.toString()).replace("{step}",this.step.toString()).replace("{percent}",t.toFixed(2)).replace("{percentRounded}",e.toString())}}updated(t){super.updated(t),t.has("value")&&(this.inputElement.value=this.value.toString(),this.internals.setFormValue(this.value.toString()))}disconnectedCallback(){super.disconnectedCallback(),this.internals.form?.removeEventListener("reset",this.onReset)}render(){return j`
      <div class="range-slider">
        <input
          class="range-slider__input"
          part="slider"
          aria-label=${fi(this.label)}
          title=${fi(this.label)}
          aria-invalid=${fi(!!this.error||null)}
          aria-valuetext=${this.formattedValueText}
          type="range"
          .min=${this.min}
          .max=${this.max}
          .step=${this.step}
          ?disabled=${this.disabled||this.readonly}
          @input=${this.onInput}
          @change=${this.onChange}
          @keydown=${this.onKeydown}
        />

        ${this.renderValueText()}
      </div>
    `}renderValueText(){return this.valueText?j`
        <span
          class="range-slider__value-text"
          part="value-text"
          aria-hidden="true"
        >
          ${this.formattedValueText}
        </span>
      `:j``}onInput(t){t.stopPropagation(),this.updateValue(),this.dispatchEvent(new tm({detail:{value:this.value}}))}onChange(t){t.stopPropagation(),this.updateValue(),this.dispatchEvent(new em({detail:{value:this.value}}))}onKeydown(t){"Enter"===t.code&&this.internals.form?.requestSubmit()}updateValue(){this.value=this.inputElement.valueAsNumber}};i(sm,"KTGRangeSliderElement"),sm.styles=am,sm.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},sm.formAssociated=!0,o([wt()],sm.prototype,"formattedValueText",2),o([kt({type:String,reflect:!0})],sm.prototype,"name",2),o([kt({type:Number})],sm.prototype,"min",2),o([kt({type:Number})],sm.prototype,"max",2),o([kt({type:Number})],sm.prototype,"step",2),o([kt({type:Number})],sm.prototype,"value",2),o([kt({type:String,attribute:"value-text"})],sm.prototype,"valueText",2),o([Ct("input")],sm.prototype,"inputElement",2),sm=o([ft("ktg-range-slider")],sm);var lm=class extends mt{constructor(){super(...arguments),this.DISABLED_GREY=[211,211,211],this.TRACK_GREY=[51,51,51],this.THUMB_BLUE=[24,73,200],this.hasTooltip=!1,this.enabled=!1,this.reorderable=!1,this.opacity=lm.DEFAULT_OPACITY}willUpdate(t){super.willUpdate(t),t.has("enabled")&&this.enabled&&0===this.opacity&&(this.opacity=lm.DEFAULT_OPACITY)}render(){let t=this.enabled?this.opacity:0,e=this.lerpColor(t,this.DISABLED_GREY,this.TRACK_GREY),i=this.lerpColor(t,this.DISABLED_GREY,this.THUMB_BLUE),o=e,n=i;return j`
      <div class="control">
        ${this.renderDragHandle()}

        <div class="control__checkbox">
          <ktg-checkbox
            ?checked=${this.enabled}
            input-id="checkbox"
            @input=${this.onToggle}
          ></ktg-checkbox>
        </div>

        <div class="control__text">
          <label
            class="control__label"
            id="label"
            for="checkbox"
          >
            <slot></slot>
          </label>
        </div>

        <div class="control__opacity">
          <ktg-range-slider
            class="control__opacity-slider"
            style=${wp({"--ktg-range-slider-thumb-color":i,"--ktg-range-slider-track-color":e,"--ktg-range-slider-value-text-color":o})}
            label="Deckkraft"
            min="0"
            max="1"
            step="0.01"
            value-text="{percentRounded}%"
            aria-describedby="label"
            .value=${t}
            ?disabled=${!this.enabled}
            @pointerdown=${this.onPointerDown}
            @input=${this.onOpacityInput}
            @change=${this.onOpacityChange}
          ></ktg-range-slider>

          <ktg-icon
            class="control__opacity-icon"
            name="eye-visible"
            style=${wp({color:n})}
          >
          </ktg-icon>
        </div>

        <div
          class=${ai({control__tooltip:!0,"control__tooltip--has-tooltip":this.hasTooltip})}
        >
          <slot
            name="tooltip"
            @slotchange=${this.onTooltipSlotChange}
          ></slot>
        </div>
      </div>
    `}renderDragHandle(){return this.reorderable?j`
        <button
          class="control__drag-handle"
          type="button"
          title="Neu anordnen"
          aria-label="Neu anordnen"
        >
          <ktg-icon name="drag-vertical"></ktg-icon>
        </button>
      `:j``}onTooltipSlotChange(){this.hasTooltip=this.tooltipButtons.length>0}lerpColor(t,e,i){return`rgb(${Nt(t,e[0],i[0])}, ${Nt(t,e[1],i[1])}, ${Nt(t,e[2],i[2])})`}onToggle(t){let e=t.target;this.enabled!==e.checked&&(this.enabled=e.checked,this.dispatchToggleEvent())}onOpacityInput(t){let e=t;this.opacity=e.detail.value,this.dispatchEvent(new Xg({detail:{value:this.opacity}}))}onOpacityChange(t){let e=t;this.opacity=e.detail.value,this.dispatchEvent(new Jg({detail:{value:this.opacity}}))}onPointerDown(){this.enabled||(this.enabled=!0,this.rangeSlider.disabled=!1,this.dispatchToggleEvent())}dispatchToggleEvent(){this.dispatchEvent(new Zg({detail:{enabled:this.enabled}}))}};i(lm,"KTGMapLayerControlElement"),lm.styles=Qg,lm.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},lm.DEFAULT_OPACITY=.8,o([Et({selector:"ktg-tooltip-button",flatten:!0,slot:"tooltip"})],lm.prototype,"tooltipButtons",2),o([wt()],lm.prototype,"hasTooltip",2),o([kt({type:Boolean,reflect:!0})],lm.prototype,"enabled",2),o([Ee({context:Wg,subscribe:!0}),kt({type:Boolean,reflect:!0})],lm.prototype,"reorderable",2),o([kt({type:Number})],lm.prototype,"opacity",2),o([Ct("ktg-range-slider")],lm.prototype,"rangeSlider",2),lm=o([ft("ktg-map-layer-control")],lm);var cm=class extends mt{constructor(){super(...arguments),this.expanded=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}focus(){this.accordionItem.focus()}render(){return j`
      <ktg-cdk-accordion-item
        class="accordion-item"
        .expanded=${this.expanded}
        @expand=${this.onExpand}
        @collapse=${this.onCollapse}
      >
        <span
          class="accordion-item__header"
          slot="header"
        >
          <ktg-icon
            class="accordion-item__icon"
            name="dropdown-arrow-right-medium"
          ></ktg-icon>
          <slot name="header"></slot>
        </span>

        <div class="accordion-item__content">
          <slot></slot>
        </div>
      </ktg-cdk-accordion-item>
    `}expand(){this.accordionItem.expand()}collapse(){this.accordionItem.collapse()}onExpand(){this.expanded=!0}onCollapse(){this.expanded=!1}};i(cm,"KTGMapLayerAccordionItemElement"),cm.styles=Ug,cm.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},o([kt({type:Boolean,reflect:!0})],cm.prototype,"expanded",2),o([Ct("ktg-cdk-accordion-item")],cm.prototype,"accordionItem",2),cm=o([ft("ktg-map-layer-accordion-item")],cm);var dm=[...ae,d`
    :host {
      display: block;
    }

    :host([nesting-level='0']) {
      border-bottom: 0.0625rem solid var(--ktg-color-neutral-02);
    }

    .accordion {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  `],hm=class extends mt{constructor(){super(...arguments),this.nestingLevel=0}connectedCallback(){super.connectedCallback(),this.updateNestingLevel()}async updateNestingLevel(){let t=this.parentElement?.closest("ktg-map-layer-accordion");t?(await t.updateComplete,this.nestingLevel=t.nestingLevel+1):this.nestingLevel=0}render(){return j`
      <ktg-cdk-accordion
        class="accordion"
        @expand=${this.onExpand}
        @collapse=${this.onCollapse}
        role="list"
        style=${wp({"--ktg-map-layer-accordion-nesting-level":this.nestingLevel})}
      >
        <slot></slot>
      </ktg-cdk-accordion>
    `}onExpand(t){t.stopPropagation()}onCollapse(t){t.stopPropagation()}};i(hm,"KTGMapLayerAccordionElement"),hm.styles=dm,o([kt({type:Number,reflect:!0,attribute:"nesting-level"})],hm.prototype,"nestingLevel",2),hm=o([ft("ktg-map-layer-accordion")],hm);var um=[...ae,d`
    .north-arrow {
      display: flex;
      width: 2rem;
      height: 2rem;
      background-color: var(--ktg-color-background-01);
      cursor: pointer;
      border: 0;
      padding: 0;
      outline: 0;
    }

    .north-arrow:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: -0.125rem;
    }

    .north-arrow__arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    .north-arrow__icon {
      color: var(--ktg-color-focus);
    }
  `],pm=class extends mt{constructor(){super(...arguments),this.rotationUnits="degrees",this.rotation=0}render(){return j`
      <button
        class="north-arrow"
        aria-label="Karte nach Norden ausrichten"
        title="Karte nach Norden ausrichten"
      >
        <span class="north-arrow__arrow">${this.renderIcon()}</span>
      </button>
    `}renderIcon(){let t=this.getRotationInDegrees();return j`
      <ktg-icon
        class="north-arrow__icon"
        name=${0!==t?"needle-north-active":"needle-north-inactive"}
        style=${wp({transform:`rotate(${t}deg)`})}
      ></ktg-icon>
    `}getRotationInDegrees(){let t;switch(this.rotationUnits){case"degrees":default:t=this.rotation;break;case"radians":t=zt.toDegrees(this.rotation)}return t%360}};i(pm,"KTGNorthArrowElement"),pm.styles=um,o([kt({type:String,attribute:"rotation-units"})],pm.prototype,"rotationUnits",2),o([kt({type:Number,attribute:"rotation"})],pm.prototype,"rotation",2),pm=o([ft("ktg-north-arrow")],pm);var gm=[...ae,...ne,d`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .scale-bar {
      position: relative;
      width: 5rem;
    }

    .scale-bar__label {
      user-select: none;
      font-size: 0.75rem;
      line-height: 120%;
      text-align: center;
      padding-bottom: 0.25rem;
    }

    .scale-bar__border {
      position: absolute;
      bottom: 0;
      height: 0.5rem;
      width: 100%;
      border: 0.0625rem solid var(--ktg-color-text);
      border-top: none;
    }
  `],mm=class extends mt{constructor(){super(...arguments),this.displayValue="",this.scaleBarWidth=0,this.minWidth=64,this.maxWidth=1/0,this.metersPerPixel=.5}connectedCallback(){super.connectedCallback(),this.recalculate()}updated(t){(t.has("minWidth")||t.has("maxWidth")||t.has("metersPerPixel"))&&this.recalculate()}render(){return j`
      <div
        class="scale-bar"
        style=${wp({width:`${this.scaleBarWidth}px`})}
      >
        <div class="scale-bar__label">${this.displayValue}</div>
        <div class="scale-bar__border"></div>
      </div>
    `}recalculate(){let t=this.metersPerPixel;if(0===t)return;let e=this.minWidth*t,i="";e<1?(i="mm",t*=1e3):e<1e3?i="m":(i="km",t/=1e3);let o=3*Math.floor(Math.log(this.minWidth*t)/Math.log(10)),n=0,r=0,a=0,s=0,l=0,c=0,d=0;for(;d<50;){a=Math.floor(o/3);let e=Math.pow(10,a);if(n=mm.LEADING_DIGITS[(o%3+3)%3]*e,r=Math.round(n/t),r>=this.maxWidth){n=s,r=l,a=c;break}if(r>=this.minWidth)break;s=n,l=r,c=a,++o,++d}d>=50&&console.warn("Scale bar calculation did not converge."),this.displayValue=n.toFixed(a<0?-a:0)+i,this.scaleBarWidth=r}};i(mm,"KTGScaleBarElement"),mm.LEADING_DIGITS=[1,2,5],mm.styles=gm,o([wt()],mm.prototype,"displayValue",2),o([wt()],mm.prototype,"scaleBarWidth",2),o([kt({type:Number,attribute:"min-width"})],mm.prototype,"minWidth",2),o([kt({type:Number,attribute:"max-width"})],mm.prototype,"maxWidth",2),o([kt({type:Number,attribute:"meters-per-pixel"})],mm.prototype,"metersPerPixel",2),mm=o([ft("ktg-scale-bar")],mm);var vm="ktg-message-direction",fm=[...ae,...ne,d`
    .message {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      overflow: hidden;
      --ktg-message-timeline-width: 3.75rem;
    }

    .message__top {
      display: flex;
    }

    .message__timeline {
      display: none;
    }

    .message--with-number .message__timeline {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      width: var(--ktg-message-timeline-width);
      overflow: hidden;
    }

    :host(:first-of-type) .message__timeline::before,
    :host(:last-of-type) .message__timeline::before {
      position: absolute;
      content: '';
      width: 2.25rem;
      height: 100%;
      background-color: var(--ktg-color-neutral-01);
      z-index: 0;
      pointer-events: none;
    }

    :host(:first-of-type) .message__timeline::before {
      bottom: 50%;
    }

    :host(:last-of-type) .message__timeline::before {
      top: 50%;
    }

    .message__timeline-dot {
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background-color: var(--ktg-color-background-01);
      box-shadow: 0 0 0 0.5rem var(--ktg-color-neutral-01);
      font-size: 0.625rem;
      user-select: none;
    }

    :host([unread]) .message__timeline-dot {
      background-color: var(--ktg-color-text);
      color: var(--ktg-color-dark-contrast);
    }

    .message__content {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 1rem;
      flex-grow: 1;
    }

    :host([direction='received']) .message__content {
      background-color: var(--ktg-color-background-01);
    }

    :host([direction='sent']) .message__content {
      background-color: var(--ktg-color-neutral-02);
    }

    .message__title {
      display: flex;
      flex-direction: column;
    }

    .message__body {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .message__attachments {
      display: none;
    }

    .message--with-attachments .message__attachments {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .message__bottom {
      display: flex;
      align-items: center;
    }

    .message__footer {
      flex-grow: 1;
    }

    .message__triangle-wrapper {
      display: flex;
      width: 100%;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    :host([direction='received']) .message__triangle-wrapper {
      justify-content: flex-start;
      fill: var(--ktg-color-background-01);
    }

    :host([direction='sent']) .message__triangle-wrapper {
      justify-content: flex-end;
      fill: var(--ktg-color-neutral-02);
    }

    .messsage__triangle {
      height: 0.625rem;
      width: 1.5rem;
    }

    .message__meta {
    }
  `];re([d`
    .ktg-message-title {
      font-family: var(--ktg-font-sans-serif);
      font-size: 1.25rem;
      font-weight: var(--ktg-font-weight-default);
      line-height: 140%;
      text-align: left;
      margin: 0;
    }

    .ktg-message-text {
      font-family: var(--ktg-font-sans-serif);
      font-size: 0.875rem;
      font-weight: var(--ktg-font-weight-default);
      line-height: 120%;
      text-align: left;
    }
  `]);var bm=[...ae,...ne,d`
    .message-attachment {
      position: relative;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      padding-top: 0.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 0.5rem;
      background-color: var(--ktg-color-neutral-01);
    }

    .title {
      flex-grow: 1;
      font-size: 0.875rem;
      line-height: 120%;
    }

    .button {
      background: transparent;
      border: none;
      padding: 0;
      margin: 0;
      display: flex;
      color: var(--ktg-color-link);
      outline: 0;
    }

    button.button {
      cursor: pointer;
    }

    /* NOTE: increase click target of button to entire component */
    .button::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }

    .button:focus-visible::before {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: -0.125rem;
    }
  `],ym=class extends mt{constructor(){super(...arguments),this.icon="document-ok",this.href="",this.target="_self",this.download=""}connectedCallback(){super.connectedCallback(),this.slot="attachments"}render(){return j`
      <div class="message-attachment">
        <ktg-icon
          class="icon"
          .name=${this.icon}
        ></ktg-icon>

        <span
          class="title"
          id="title"
          aria-hidden="true"
        >
          <slot></slot>
        </span>

        ${this.renderButton()}
      </div>
    `}renderButton(){if(this.href){let t=this.hasAttribute("download")||this.download?this.download:null;return j`
        <a
          class="button"
          href=${this.href}
          target=${this.target}
          download=${fi(t)}
          aria-labelledby="title"
        >
          ${this.renderDownloadIcon()}
        </a>
      `}return j`
        <button
          class="button"
          aria-labelledby="title"
        >
          ${this.renderDownloadIcon()}
        </button>
      `}renderDownloadIcon(){return j`
      <ktg-icon
        class="button__icon"
        name="download"
      ></ktg-icon>
    `}};i(ym,"KTGMessageAttachmentElement"),ym.styles=bm,o([kt({type:String})],ym.prototype,"icon",2),o([kt({type:String})],ym.prototype,"href",2),o([kt({type:String})],ym.prototype,"target",2),o([kt({type:String})],ym.prototype,"download",2),ym=o([ft("ktg-message-attachment")],ym);var km=[...ae,...ne,d`
    .message-meta {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding-top: 0.25rem;
    }

    :host([direction='received']) .message-meta {
      flex-direction: row;
    }

    :host([direction='sent']) .message-meta {
      flex-direction: row-reverse;
    }

    .message-meta__icon {
      color: var(--ktg-color-focus);
      align-self: flex-start;
    }

    .message-meta__text {
      font-size: 0.75rem;
      line-height: 1;
      color: var(--ktg-color-text);
    }
  `],wm=class extends mt{constructor(){super(...arguments),this.lang=document.documentElement.lang,this.direction="received",this.icon="placeholder",this.author="",this.dateTime=""}connectedCallback(){super.connectedCallback(),this.slot="meta"}render(){return j`
      <div class="message-meta">
        <ktg-icon
          class="message-meta__icon"
          .name=${this.icon}
        ></ktg-icon>

        <div class="message-meta__text">
          <span class="message-meta__author">${this.author}</span>,
          <time
            class="message-meta__date-time"
            .datetime=${this.dateTime}
          >
            ${this.renderDateTime()}
          </time>
        </div>
      </div>
    `}renderDateTime(){try{return pd.fromISO(this.dateTime).setLocale(this.lang).toFormat("d. MMMM yyyy HH:mm")}catch{return""}}};i(wm,"KTGMessageMetaElement"),wm.styles=km,o([kt({type:String})],wm.prototype,"lang",2),o([kt({type:String,reflect:!0}),Ee({context:vm,subscribe:!0})],wm.prototype,"direction",2),o([kt({type:String})],wm.prototype,"icon",2),o([kt({type:String})],wm.prototype,"author",2),o([kt({type:String,attribute:"date-time"})],wm.prototype,"dateTime",2),wm=o([ft("ktg-message-meta")],wm);var _m=class extends mt{constructor(){super(...arguments),this.hasAttachments=!1,this.number=null,this.direction="received",this.unread=!1}onAttachmentsSlotChange(){this.hasAttachments=this.attachments.length>0}render(){return j`
      <article
        class=${ai({message:!0,"message--with-number":null!==this.number,"message--with-attachments":this.hasAttachments})}
      >
        <div class="message__top">
          <div class="message__timeline">
            <span class="message__timeline-dot">${this.number}</span>
          </div>

          <div class="message__content">
            <div class="message__title">
              <slot name="pill"></slot>

              <slot name="title"></slot>
            </div>

            <div class="message__body">
              <slot></slot>
            </div>

            <div class="message__attachments">
              <slot
                name="attachments"
                @slotchange=${this.onAttachmentsSlotChange}
              ></slot>
            </div>
          </div>
        </div>

        <div class="message__bottom">
          <div class="message__timeline"></div>

          <footer class="message__footer">
            <div class="message__triangle-wrapper">
              <svg
                class="messsage__triangle"
                viewBox="0 0 25 10"
                aria-hidden="true"
              >
                <path d="M12.5 10L24.5 0H0L12.5 10Z" />
              </svg>
            </div>

            <div class="message__meta">
              <slot name="meta"></slot>
            </div>
          </footer>
        </div>
      </article>
    `}};i(_m,"KTGMessageElement"),_m.styles=fm,o([wt()],_m.prototype,"hasAttachments",2),o([kt({type:Number,attribute:!1})],_m.prototype,"number",2),o([Se({context:vm}),kt({type:String,reflect:!0})],_m.prototype,"direction",2),o([kt({type:Boolean,reflect:!0})],_m.prototype,"unread",2),o([Et({selector:"ktg-message-attachment",slot:"attachments"})],_m.prototype,"attachments",2),_m=o([ft("ktg-message")],_m);var xm=[...ae,...ne,d`
    :host {
      display: block;
    }

    .message-feed {
      padding-top: 2.5rem;
      padding-left: 2.25rem;
      padding-right: 6rem;
      padding-bottom: 2.5rem;
      background-color: var(--ktg-color-neutral-01);
    }

    .message-feed__title {
      color: var(--ktg-color-text);
      padding-left: 4.75rem;
      padding-right: 1rem;
      margin-bottom: 1rem;
    }

    .message-feed__main {
      position: relative;
      display: flex;
      gap: 2.25rem;
    }

    .message-feed__timeline {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      left: 0.75rem;
      width: 0.0625rem;
      background-color: var(--ktg-color-neutral-03);
      z-index: 0;
    }

    .message-feed__messages {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      z-index: 1;
      width: 100%;
    }
  `];re([d`
    .ktg-message-feed-title {
      font-family: var(--ktg-font-sans-serif);
      font-size: 1.5rem;
      line-height: 120%;
      font-weight: var(--ktg-font-weight-default);
      margin: 0;
    }
  `]);var Cm=class extends mt{constructor(){super(...arguments),this.counterStart=1}onSlotChange(){this.updateMessageNumbers(),this.requestUpdate()}updateMessageNumbers(){let t=this.messages.length;for(let e=1;e<=t;e++)this.messages[e-1].number=t-(e-this.counterStart)}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),"counter-start"===t&&(this.updateMessageNumbers(),this.requestUpdate())}render(){return j`
      <div class="message-feed">
        <div class="message-feed__title">
          <slot name="title"></slot>
        </div>

        <div class="message-feed__main">
          <div class="message-feed__timeline"></div>

          <div class="message-feed__messages">
            <slot @slotchange=${this.onSlotChange}></slot>
          </div>
        </div>
      </div>
    `}};i(Cm,"KTGMessageFeedElement"),Cm.styles=xm,o([Et({selector:"ktg-message"})],Cm.prototype,"messages",2),o([kt({type:Number,attribute:"counter-start"})],Cm.prototype,"counterStart",2),Cm=o([ft("ktg-message-feed")],Cm);var Sm=[...ae,...ne,d`
    :host {
      display: block;
    }

    .modal-buttons {
      display: flex;
      gap: 0.5rem;
      padding-top: 1.5rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    :host([vertical]) .modal-buttons {
      flex-direction: column;
    }
  `],Em=class extends mt{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.slot="buttons"}render(){return j`
      <div class="modal-buttons">
        <slot></slot>
      </div>
    `}};i(Em,"KTGModalButtonsElement"),Em.styles=Sm,o([kt({type:Boolean,reflect:!0})],Em.prototype,"vertical",2),Em=o([ft("ktg-modal-buttons")],Em);var Tm=class extends gu{static{i(this,"KTGModalCloseEvent")}},Im=class extends mu{static{i(this,"KTGModalDismissEvent")}},$m=[...ae,...dh,d`
    :host {
      position: relative;
      display: none;
      width: 100%;
      max-width: min(24rem, calc(100cqw - 1rem));
      max-height: min(
        37rem,
        calc(100cqh - var(--ktg-overlay-y-offset-small) - 2rem)
      );
    }

    :host(.ktg-cdk-modal--in-custom-outlet) {
      max-width: min(24rem, calc(100cqw - 1rem));
      max-height: min(37rem, calc(100cqh - 2rem));
    }

    @container (min-width: ${Ke}px) {
      :host {
        max-width: min(24rem, calc(100cqw - 4rem));
        max-height: min(
          37rem,
          calc(100cqh - var(--ktg-overlay-y-offset-large) - 4rem)
        );
      }

      :host(.ktg-cdk-modal--in-custom-outlet) {
        max-width: min(24rem, calc(100cqw - 2rem));
        max-height: min(37rem, calc(100cqh - 2rem));
      }
    }

    .modal {
      position: relative;
      display: flex;
      flex-direction: column;
      flex-shrink: 1;
      border: none;
      width: 100%;
      height: 100%;
      min-height: 0;
      max-width: inherit;
      max-height: inherit;
      overflow: hidden;
      color: var(--ktg-color-text);
      background-color: var(--ktg-color-background-01);
    }

    .modal__scroll-container {
      position: relative;
      flex-grow: 1;
      overflow: auto;
    }

    .modal-banner {
      display: none;
    }

    :host([appearance='danger']) .modal-banner {
      display: flex;
      align-items: center;
      width: 100%;
      padding-top: 1.5rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-bottom: 1.5rem;
      margin-bottom: 1.5rem;
      gap: 0.5rem;
      background-color: var(--ktg-color-danger-light);
    }

    .modal-banner__icon {
      flex-shrink: 0;
      color: var(--ktg-color-danger);
    }

    .modal-banner__text {
      font-size: 0.875rem;
      line-height: 120%;
      color: var(--ktg-color-text);
    }

    .modal__icon-header {
      display: flex;
      justify-content: flex-end;
      padding-top: 1.5rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-bottom: 1.5rem;
    }

    :host([appearance='danger']) .modal__icon-header {
      display: none;
    }

    .modal__close-button {
      display: flex;
      border: none;
      background-color: transparent;
      color: var(--ktg-color-link);
      cursor: pointer;
    }

    .modal__close-button:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: 0.125rem;
    }

    .modal__main {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    .modal__buttons {
      width: 100%;
      background-color: var(--ktg-color-background-01);
      padding-bottom: 1.5rem;
    }

    .modal__scrollbar {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      z-index: 10;
    }
  `],Om=class extends uu{constructor(){super(...arguments),this.appearance="default",this.dangerText="Warnhinweis"}render(){return j`
      <dialog
        class="modal"
        aria-modal="true"
        ?open=${this._isOpen}
      >
        <div
          class="modal__scroll-container"
          id=${this.id+"__scrollcontainer"}
        >
          <div class="modal-banner">
            <ktg-icon
              class="modal-banner__icon"
              name="warning"
            >
            </ktg-icon>

            <span class="modal-banner__text">${this.dangerText}</span>
          </div>

          <div class="modal__icon-header">
            <button
              class="modal__close-button"
              type="button"
              @click=${this.dismiss}
              aria-label="modal-close-button"
            >
              <ktg-icon name="close"></ktg-icon>
            </button>
          </div>

          <div class="modal__main">
            <slot></slot>
          </div>
        </div>

        <div class="modal__buttons">
          <slot name="buttons"></slot>
        </div>
      </dialog>

      <ktg-scrollbar
        class="modal__scrollbar"
        for=${this.id+"__scrollcontainer"}
      ></ktg-scrollbar>
    `}dispatchCloseEvent(){this.dispatchEvent(new Tm({bubbles:!0,cancelable:!1}))}dispatchDismissEvent(){this.dispatchEvent(new Im({bubbles:!0,cancelable:!1}))}};i(Om,"KTGModalElement"),Om.styles=$m,o([kt({type:String,reflect:!0})],Om.prototype,"appearance",2),o([kt({type:String,attribute:"danger-text"})],Om.prototype,"dangerText",2),Om=o([ft("ktg-modal")],Om);var Lm=class{open(t){return console.warn("KTGModalService.open is deprecated. Use the KTGModalElement's open method instead."),t.open()}};i(Lm,"KTGModalService"),Lm=o([Le],Lm);var Dm={...Nd,Input:"input",Change:"change"},Am=class extends Rd{static{i(this,"KTGNumberInputButtonClickEvent")}},Mm=class extends Pd{static{i(this,"KTGNumberInputFocusEvent")}},Bm=class extends Fd{static{i(this,"KTGNumberInputBlurEvent")}},zm=class extends CustomEvent{static{i(this,"KTGNumberInputInputEvent")}constructor(t){super(Dm.Input,t)}},Nm=class extends CustomEvent{static{i(this,"KTGNumberInputChangeEvent")}constructor(t){super(Dm.Change,t)}},Rm=c("ktg-number-input");re([Vd("ktg-number-input"),d`
    ${Rm} .ktg-number-input__input-wrapper {
      position: relative;
      width: 100%;
    }

    ${Rm} .ktg-number-input__input {
      color: transparent;
    }

    ${Rm} .ktg-cdk-text-input--focused .ktg-number-input__input {
      color: var(--ktg-cdk-text-input-color);
    }

    ${Rm} .ktg-number-input__formatted-number {
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
      font-style: normal;
      font-family: var(--ktg-font-sans-serif);
      font-weight: var(--ktg-font-weight-default);
      font-size: 1rem;
      line-height: 1.125rem;
      padding-top: 0.6875rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 0.6875rem;
      color: var(--ktg-cdk-text-input-color);
      user-select: none;
    }

    ${Rm} .ktg-cdk-text-input--focused .ktg-number-input__formatted-number {
      visibility: hidden;
    }

    @media screen and (min-width: ${Ke}px) {
      ${Rm} .ktg-number-input__formatted-number {
        padding-left: 1rem;
        padding-right: 1.125rem;
      }

      ${Rm} .ktg-cdk-text-input--has-leading-icon
        .ktg-number-input__formatted-number {
        padding-left: 2.5rem;
      }

      ${Rm} .ktg-cdk-text-input--has-trailing-icon
        .ktg-number-input__formatted-number {
        padding-right: 2.625rem;
      }
    }
  `]);var Pm=class extends zd{constructor(){super(...arguments),this.numberFormatter=new me,this._valueFormatted="",this._valueAsNumber=NaN,this.minFractionDigits=0,this.maxFractionDigits=me.MAX_FRACTION_DIGITS,this.maxLength=null}get valueFormatted(){return this._valueFormatted}get valueAsNumber(){return this._valueAsNumber}willUpdate(t){super.willUpdate(t),t.has("minFractionDigits")&&this.numberFormatter.withMinFractionDigits(this.minFractionDigits),t.has("maxFractionDigits")&&this.numberFormatter.withMaxFractionDigits(this.maxFractionDigits),t.has("value")&&(this.value=this.normalizeValue(this.value),this._valueAsNumber=parseFloat(this.value)),(t.has("value")||t.has("minFractionDigits")||t.has("maxFractionDigits"))&&(isNaN(this._valueAsNumber)?this._valueFormatted="":this._valueFormatted=this.numberFormatter.format(this._valueAsNumber))}updated(t){super.updated(t),t.has("value")&&(this.input.value=this.value)}render(){return j`
      <div
        class=${ai({"ktg-number-input":!0,"ktg-cdk-text-input":!0,"ktg-cdk-text-input--focused":this.inputFocused,"ktg-cdk-text-input--has-leading-icon":this.leadingIcon,"ktg-cdk-text-input--has-trailing-icon":this.trailingIcon})}
      >
        <div class="ktg-cdk-text-input__border"></div>

        ${this.renderLeadingIcon()}

        <div class="ktg-number-input__input-wrapper">
          <!--
            NOTE: we don't use an 'input[type="number"]' because when
            querying the value, it returns an empty string when the value is
            NaN, or when the user hits backspace from the value '10.3' to
            '10.', the number input returns '10' (without the period) as the
            value, and cursor jumps to the start.
          -->
          <input
            id=${this.inputId}
            class="ktg-cdk-text-input__input ktg-number-input__input"
            type="text"
            autocomplete="off"
            maxlength=${fi(this.maxLength)}
            ?disabled=${this.disabled}
            placeholder=${this.placeholder}
            name=${this.name}
            ?required=${this.required}
            ?autofocus=${this.autofocus}
            title=${fi(this.label)}
            aria-describedby=${this.describedby}
            aria-label=${fi(this.label)}
            aria-labelledby=${fi(this.labelledBy)}
            aria-invalid=${this.error}
            inputmode="decimal"
            pattern="[+-.0-9]*"
            ?readonly=${this.readonly}
            @focus=${this.onFocus}
            @input=${this.onInput}
            @change=${this.onChange}
            @blur=${this.onBlur}
          />

          ${this.renderFormattedNumber()}
        </div>

        ${this.renderTrailingIcon()}
      </div>
    `}renderFormattedNumber(){return j`
      <span
        class="ktg-number-input__formatted-number"
        aria-hidden="true"
      >
        ${this.valueFormatted}
      </span>
    `}normalizeValue(t){if(null==t||void 0===t)return"";if("number"==typeof t)return t.toString();let e=t.replace(/[^-+.0-9]/g,""),i=[],o=!1;for(let t=0;t<e.length;t++){let n=e[t];switch(n){case".":o||(i.push(n),o=!0);break;case"-":case"+":0===t&&i.push(n);break;default:i.push(n)}}return e=i.join(""),e}onInput(t){t.stopImmediatePropagation();let e=this.value;this.value=this.input.value,this.dispatchInputEvent()||(this.value=e,t.preventDefault())}onChange(t){t.stopImmediatePropagation();let e=this.value;this.value=this.input.value,this.dispatchChangeEvent()||(this.value=e,t.preventDefault())}dispatchFocusEvent(){this.dispatchEvent(new Mm({bubbles:!1,cancelable:!1}))}dispatchBlurEvent(){this.dispatchEvent(new Bm({bubbles:!1,cancelable:!1}))}dispatchButtonClickEvent(){this.dispatchEvent(new Am({bubbles:!0,cancelable:!1,composed:!0}))}dispatchInputEvent(){return this.dispatchEvent(new zm({bubbles:!0,cancelable:!0,composed:!0}))}dispatchChangeEvent(){return this.dispatchEvent(new Nm({bubbles:!0,cancelable:!0,composed:!0}))}};function Fm(t){return{code:t?.code??"00",name:t?.name??"",phoneCodes:t?.phoneCodes??[],maxPhoneNumberDigits:t?.maxPhoneNumberDigits??15}}i(Pm,"KTGNumberInputElement"),o([wt()],Pm.prototype,"_valueFormatted",2),o([wt()],Pm.prototype,"_valueAsNumber",2),o([kt({type:Number,attribute:"min-fraction-digits"})],Pm.prototype,"minFractionDigits",2),o([kt({type:Number,attribute:"max-fraction-digits"})],Pm.prototype,"maxFractionDigits",2),o([kt({type:Number,attribute:"maxlength"})],Pm.prototype,"maxLength",2),Pm=o([ft("ktg-number-input")],Pm),i(Fm,"newCountry");var Vm=[Fm({name:"Afghanistan",code:"AF",phoneCodes:["93"]}),Fm({name:"Ägypten",code:"EG",phoneCodes:["20"]}),Fm({name:"Albanien",code:"AL",phoneCodes:["355"]}),Fm({name:"Algerien",code:"DZ",phoneCodes:["213"]}),Fm({name:"Amerikanisch-Samoa",code:"AS",phoneCodes:["1-684"]}),Fm({name:"Amerikanische Jungferninseln",code:"VI",phoneCodes:["1-340"]}),Fm({name:"Andorra",code:"AD",phoneCodes:["376"]}),Fm({name:"Angola",code:"AO",phoneCodes:["244"]}),Fm({name:"Anguilla",code:"AI",phoneCodes:["1-264"]}),Fm({name:"Antarktis",code:"AQ",phoneCodes:["672"]}),Fm({name:"Antigua und Barbuda",code:"AG",phoneCodes:["1-268"]}),Fm({name:"Äquatorialguinea",code:"GQ",phoneCodes:["240"]}),Fm({name:"Argentinien",code:"AR",phoneCodes:["54"]}),Fm({name:"Armenien",code:"AM",phoneCodes:["374"]}),Fm({name:"Aruba",code:"AW",phoneCodes:["297"]}),Fm({name:"Aserbaidschan",code:"AZ",phoneCodes:["994"]}),Fm({name:"Äthiopien",code:"ET",phoneCodes:["251"]}),Fm({name:"Australien",code:"AU",phoneCodes:["61"]}),Fm({name:"Bahamas",code:"BS",phoneCodes:["1-242"]}),Fm({name:"Bahrain",code:"BH",phoneCodes:["973"]}),Fm({name:"Bangladesch",code:"BD",phoneCodes:["880"]}),Fm({name:"Barbados",code:"BB",phoneCodes:["1-246"]}),Fm({name:"Belarus",code:"BY",phoneCodes:["375"]}),Fm({name:"Belgien",code:"BE",phoneCodes:["32"]}),Fm({name:"Belize",code:"BZ",phoneCodes:["501"]}),Fm({name:"Benin",code:"BJ",phoneCodes:["229"]}),Fm({name:"Bermuda",code:"BM",phoneCodes:["1-441"]}),Fm({name:"Bhutan",code:"BT",phoneCodes:["975"]}),Fm({name:"Bolivien",code:"BO",phoneCodes:["591"]}),Fm({name:"Bosnien und Herzegowina",code:"BA",phoneCodes:["387"]}),Fm({name:"Botswana",code:"BW",phoneCodes:["267"]}),Fm({name:"Brasilien",code:"BR",phoneCodes:["55"]}),Fm({name:"Britische Jungferninseln",code:"VG",phoneCodes:["1-284"]}),Fm({name:"Britisches Territorium im Indischen Ozean",code:"IO",phoneCodes:["246"]}),Fm({name:"Brunei",code:"BN",phoneCodes:["673"]}),Fm({name:"Bulgarien",code:"BG",phoneCodes:["359"]}),Fm({name:"Burkina Faso",code:"BF",phoneCodes:["226"]}),Fm({name:"Burundi",code:"BI",phoneCodes:["257"]}),Fm({name:"Chile",code:"CL",phoneCodes:["56"]}),Fm({name:"China",code:"CN",phoneCodes:["86"]}),Fm({name:"Cookinseln",code:"CK",phoneCodes:["682"]}),Fm({name:"Costa Rica",code:"CR",phoneCodes:["506"]}),Fm({name:"Côte d’Ivoire",code:"CI",phoneCodes:["225"]}),Fm({name:"Curaçao",code:"CW",phoneCodes:["599"]}),Fm({name:"Dänemark",code:"DK",phoneCodes:["45"]}),Fm({code:"DE",name:"Deutschland",phoneCodes:["49"],maxPhoneNumberDigits:13}),Fm({name:"Dominikanische Republik",code:"DO",phoneCodes:["1-767","1-809","1-829","1-849"]}),Fm({name:"Dschibuti",code:"DJ",phoneCodes:["253"]}),Fm({name:"Ecuador",code:"EC",phoneCodes:["593"]}),Fm({name:"El Salvador",code:"SV",phoneCodes:["503"]}),Fm({name:"Eritrea",code:"ER",phoneCodes:["291"]}),Fm({name:"Estland",code:"EE",phoneCodes:["372"]}),Fm({name:"Eswatini",code:"SZ",phoneCodes:["268"]}),Fm({name:"Falklandinseln (Malwinen)",code:"FK",phoneCodes:["500"]}),Fm({name:"Färöer",code:"FO",phoneCodes:["298"]}),Fm({name:"Fidschi",code:"FJ",phoneCodes:["679"]}),Fm({name:"Finnland",code:"FI",phoneCodes:["358"]}),Fm({name:"Frankreich",code:"FR",phoneCodes:["33"],maxPhoneNumberDigits:12}),Fm({name:"Französisch-Polynesien",code:"PF",phoneCodes:["689"]}),Fm({name:"Gabun",code:"GA",phoneCodes:["241"]}),Fm({name:"Gambia",code:"GM",phoneCodes:["220"]}),Fm({name:"Georgien",code:"GE",phoneCodes:["995"]}),Fm({name:"Ghana",code:"GH",phoneCodes:["233"]}),Fm({name:"Gibraltar",code:"GI",phoneCodes:["350"]}),Fm({name:"Grenada",code:"GD",phoneCodes:["1-473"]}),Fm({name:"Griechenland",code:"GR",phoneCodes:["30"]}),Fm({name:"Grönland",code:"GL",phoneCodes:["299"]}),Fm({name:"Guam",code:"GU",phoneCodes:["1-671"]}),Fm({name:"Guatemala",code:"GT",phoneCodes:["502"]}),Fm({name:"Guernsey",code:"GG",phoneCodes:["44-1481"]}),Fm({name:"Guinea",code:"GN",phoneCodes:["224"]}),Fm({name:"Guinea-Bissau",code:"GW",phoneCodes:["245"]}),Fm({name:"Guyana",code:"GY",phoneCodes:["592"]}),Fm({name:"Haiti",code:"HT",phoneCodes:["509"]}),Fm({name:"Honduras",code:"HN",phoneCodes:["504"]}),Fm({name:"Hongkong",code:"HK",phoneCodes:["852"]}),Fm({name:"Indien",code:"IN",phoneCodes:["91"]}),Fm({name:"Indonesien",code:"ID",phoneCodes:["62"]}),Fm({name:"Irak",code:"IQ",phoneCodes:["964"]}),Fm({name:"Irland",code:"IE",phoneCodes:["353"]}),Fm({name:"Island",code:"IS",phoneCodes:["354"]}),Fm({name:"Isle of Man",code:"IM",phoneCodes:["44-1624"]}),Fm({name:"Israel",code:"IL",phoneCodes:["972"]}),Fm({name:"Italien",code:"IT",phoneCodes:["39"],maxPhoneNumberDigits:13}),Fm({name:"Jamaika",code:"JM",phoneCodes:["1-876"]}),Fm({name:"Japan",code:"JP",phoneCodes:["81"]}),Fm({name:"Jemen",code:"YE",phoneCodes:["967"]}),Fm({name:"Jersey",code:"JE",phoneCodes:["44-1534"]}),Fm({name:"Jordanien",code:"JO",phoneCodes:["962"]}),Fm({name:"Kaimaninseln",code:"KY",phoneCodes:["1-345"]}),Fm({name:"Kambodscha",code:"KH",phoneCodes:["855"]}),Fm({name:"Kamerun",code:"CM",phoneCodes:["237"]}),Fm({name:"Kanada",code:"CA",phoneCodes:["1"]}),Fm({name:"Kapverden",code:"CV",phoneCodes:["238"]}),Fm({name:"Kasachstan",code:"KZ",phoneCodes:["7"]}),Fm({name:"Katar",code:"QA",phoneCodes:["974"]}),Fm({name:"Kenia",code:"KE",phoneCodes:["254"]}),Fm({name:"Kirgisistan",code:"KG",phoneCodes:["996"]}),Fm({name:"Kiribati",code:"KI",phoneCodes:["686"]}),Fm({name:"Kokosinseln",code:"CC",phoneCodes:["61"]}),Fm({name:"Kolumbien",code:"CO",phoneCodes:["57"]}),Fm({name:"Komoren",code:"KM",phoneCodes:["269"]}),Fm({name:"Kongo-Brazzaville",code:"CG",phoneCodes:["242"]}),Fm({name:"Kongo-Kinshasa",code:"CD",phoneCodes:["243"]}),Fm({name:"Kosovo",code:"XK",phoneCodes:["383"]}),Fm({name:"Kroatien",code:"HR",phoneCodes:["385"]}),Fm({name:"Kuwait",code:"KW",phoneCodes:["965"]}),Fm({name:"Laos",code:"LA",phoneCodes:["856"]}),Fm({name:"Lesotho",code:"LS",phoneCodes:["266"]}),Fm({name:"Lettland",code:"LV",phoneCodes:["371"]}),Fm({name:"Libanon",code:"LB",phoneCodes:["961"]}),Fm({name:"Liberia",code:"LR",phoneCodes:["231"]}),Fm({name:"Libyen",code:"LY",phoneCodes:["218"]}),Fm({name:"Liechtenstein",code:"LI",phoneCodes:["423"],maxPhoneNumberDigits:12}),Fm({name:"Litauen",code:"LT",phoneCodes:["370"]}),Fm({name:"Luxemburg",code:"LU",phoneCodes:["352"]}),Fm({name:"Macau",code:"MO",phoneCodes:["853"]}),Fm({name:"Madagaskar",code:"MG",phoneCodes:["261"]}),Fm({name:"Malawi",code:"MW",phoneCodes:["265"]}),Fm({name:"Malaysia",code:"MY",phoneCodes:["60"]}),Fm({name:"Malediven",code:"MV",phoneCodes:["960"]}),Fm({name:"Mali",code:"ML",phoneCodes:["223"]}),Fm({name:"Malta",code:"MT",phoneCodes:["356"]}),Fm({name:"Marokko",code:"MA",phoneCodes:["212"]}),Fm({name:"Marshallinseln",code:"MH",phoneCodes:["692"]}),Fm({name:"Mauretanien",code:"MR",phoneCodes:["222"]}),Fm({name:"Mauritius",code:"MU",phoneCodes:["230"]}),Fm({name:"Mayotte",code:"YT",phoneCodes:["262"]}),Fm({name:"Mexiko",code:"MX",phoneCodes:["52"]}),Fm({name:"Mikronesien",code:"FM",phoneCodes:["691"]}),Fm({name:"Monaco",code:"MC",phoneCodes:["377"]}),Fm({name:"Mongolei",code:"MN",phoneCodes:["976"]}),Fm({name:"Montenegro",code:"ME",phoneCodes:["382"]}),Fm({name:"Montserrat",code:"MS",phoneCodes:["1-664"]}),Fm({name:"Mosambik",code:"MZ",phoneCodes:["258"]}),Fm({name:"Myanmar",code:"MM",phoneCodes:["95"]}),Fm({name:"Namibia",code:"NA",phoneCodes:["264"]}),Fm({name:"Nauru",code:"NR",phoneCodes:["674"]}),Fm({name:"Nepal",code:"NP",phoneCodes:["977"]}),Fm({name:"Neukaledonien",code:"NC",phoneCodes:["687"]}),Fm({name:"Neuseeland",code:"NZ",phoneCodes:["64"]}),Fm({name:"Nicaragua",code:"NI",phoneCodes:["505"]}),Fm({name:"Niederlande",code:"NL",phoneCodes:["31"]}),Fm({name:"Niger",code:"NE",phoneCodes:["227"]}),Fm({name:"Nigeria",code:"NG",phoneCodes:["234"]}),Fm({name:"Niue",code:"NU",phoneCodes:["683"]}),Fm({name:"Nördliche Marianen",code:"MP",phoneCodes:["1-670"]}),Fm({name:"Nordmazedonien",code:"MK",phoneCodes:["389"]}),Fm({name:"Norwegen",code:"NO",phoneCodes:["47"]}),Fm({name:"Oman",code:"OM",phoneCodes:["968"]}),Fm({name:"Österreich",code:"AT",phoneCodes:["43"],maxPhoneNumberDigits:13}),Fm({name:"Osttimor",code:"TL",phoneCodes:["670"]}),Fm({name:"Pakistan",code:"PK",phoneCodes:["92"]}),Fm({name:"Palästina",code:"PS",phoneCodes:["970"]}),Fm({name:"Palau",code:"PW",phoneCodes:["680"]}),Fm({name:"Panama",code:"PA",phoneCodes:["507"]}),Fm({name:"Papua-Neuguinea",code:"PG",phoneCodes:["675"]}),Fm({name:"Paraguay",code:"PY",phoneCodes:["595"]}),Fm({name:"Peru",code:"PE",phoneCodes:["51"]}),Fm({name:"Philippinen",code:"PH",phoneCodes:["63"]}),Fm({name:"Pitcairninseln",code:"PN",phoneCodes:["64"]}),Fm({name:"Polen",code:"PL",phoneCodes:["48"]}),Fm({name:"Portugal",code:"PT",phoneCodes:["351"]}),Fm({name:"Puerto Rico",code:"PR",phoneCodes:["1-787","1-939"]}),Fm({name:"Republik Moldau",code:"MD",phoneCodes:["373"]}),Fm({name:"Réunion",code:"RE",phoneCodes:["262"]}),Fm({name:"Ruanda",code:"RW",phoneCodes:["250"]}),Fm({name:"Rumänien",code:"RO",phoneCodes:["40"]}),Fm({name:"Russland",code:"RU",phoneCodes:["7"]}),Fm({name:"Salomon-Inseln",code:"SB",phoneCodes:["677"]}),Fm({name:"Sambia",code:"ZM",phoneCodes:["260"]}),Fm({name:"Samoa",code:"WS",phoneCodes:["685"]}),Fm({name:"San Marino",code:"SM",phoneCodes:["378"]}),Fm({name:"São Tomé und Príncipe",code:"ST",phoneCodes:["239"]}),Fm({name:"Saudi-Arabien",code:"SA",phoneCodes:["966"]}),Fm({name:"Schweden",code:"SE",phoneCodes:["46"]}),Fm({code:"CH",name:"Schweiz",phoneCodes:["41"],maxPhoneNumberDigits:12}),Fm({name:"Senegal",code:"SN",phoneCodes:["221"]}),Fm({name:"Serbien",code:"RS",phoneCodes:["381"]}),Fm({name:"Seychellen",code:"SC",phoneCodes:["248"]}),Fm({name:"Sierra Leone",code:"SL",phoneCodes:["232"]}),Fm({name:"Singapur",code:"SG",phoneCodes:["65"]}),Fm({name:"Sint Maarten",code:"SX",phoneCodes:["1-721"]}),Fm({name:"Slowakei",code:"SK",phoneCodes:["421"]}),Fm({name:"Slowenien",code:"SI",phoneCodes:["386"]}),Fm({name:"Somalia",code:"SO",phoneCodes:["252"]}),Fm({name:"Spanien",code:"ES",phoneCodes:["34"]}),Fm({name:"Spitzbergen und Jan Mayen",code:"SJ",phoneCodes:["47"]}),Fm({name:"Sri Lanka",code:"LK",phoneCodes:["94"]}),Fm({name:"St. Barthélemy",code:"BL",phoneCodes:["590"]}),Fm({name:"St. Helena",code:"SH",phoneCodes:["290"]}),Fm({name:"St. Kitts und Nevis",code:"KN",phoneCodes:["1-869"]}),Fm({name:"St. Lucia",code:"LC",phoneCodes:["1-758"]}),Fm({name:"St. Martin",code:"MF",phoneCodes:["590"]}),Fm({name:"St. Pierre und Miquelon",code:"PM",phoneCodes:["508"]}),Fm({name:"St. Vincent und die Grenadinen",code:"VC",phoneCodes:["1-784"]}),Fm({name:"Südafrika",code:"ZA",phoneCodes:["27"]}),Fm({name:"Südkorea",code:"KR",phoneCodes:["82"]}),Fm({name:"Südsudan",code:"SS",phoneCodes:["211"]}),Fm({name:"Suriname",code:"SR",phoneCodes:["597"]}),Fm({name:"Tadschikistan",code:"TJ",phoneCodes:["992"]}),Fm({name:"Taiwan",code:"TW",phoneCodes:["886"]}),Fm({name:"Tansania",code:"TZ",phoneCodes:["255"]}),Fm({name:"Thailand",code:"TH",phoneCodes:["66"]}),Fm({name:"Togo",code:"TG",phoneCodes:["228"]}),Fm({name:"Tokelau",code:"TK",phoneCodes:["690"]}),Fm({name:"Tonga",code:"TO",phoneCodes:["676"]}),Fm({name:"Trinidad und Tobago",code:"TT",phoneCodes:["1-868"]}),Fm({name:"Tschad",code:"TD",phoneCodes:["235"]}),Fm({name:"Tschechien",code:"CZ",phoneCodes:["420"]}),Fm({name:"Tunesien",code:"TN",phoneCodes:["216"]}),Fm({name:"Türkei",code:"TR",phoneCodes:["90"]}),Fm({name:"Turkmenistan",code:"TM",phoneCodes:["993"]}),Fm({name:"Turks- und Caicosinseln",code:"TC",phoneCodes:["1-649"]}),Fm({name:"Tuvalu",code:"TV",phoneCodes:["688"]}),Fm({name:"Uganda",code:"UG",phoneCodes:["256"]}),Fm({name:"Ukraine",code:"UA",phoneCodes:["380"]}),Fm({name:"Ungarn",code:"HU",phoneCodes:["36"]}),Fm({name:"Uruguay",code:"UY",phoneCodes:["598"]}),Fm({name:"Vanuatu",code:"VU",phoneCodes:["678"]}),Fm({name:"Vatikanstadt",code:"VA",phoneCodes:["379"]}),Fm({name:"Venezuela",code:"VE",phoneCodes:["58"]}),Fm({name:"Vereinigte Arabische Emirate",code:"AE",phoneCodes:["971"]}),Fm({name:"Vereinigte Staaten",code:"US",phoneCodes:["1"]}),Fm({name:"Vereinigtes Königreich",code:"GB",phoneCodes:["44"]}),Fm({name:"Vietnam",code:"VN",phoneCodes:["84"]}),Fm({name:"Wallis und Futuna",code:"WF",phoneCodes:["681"]}),Fm({name:"Weihnachtsinsel",code:"CX",phoneCodes:["61"]}),Fm({name:"Westsahara",code:"EH",phoneCodes:["212"]}),Fm({name:"Zentralafrikanische Republik",code:"CF",phoneCodes:["236"]}),Fm({name:"Zimbabwe",code:"ZW",phoneCodes:["263"]}),Fm({name:"Zypern",code:"CY",phoneCodes:["357"]})];function Km(t){return{label:"",selected:!1,disabled:!1,value:"",keywords:[],originalOption:null,renderedOption:null,...t}}i(Km,"newDropdownOverlayOptionData");var Hm=class extends CustomEvent{static{i(this,"KTGPhoneInputInputEvent")}constructor(t){super("input",t)}},Gm=class extends CustomEvent{static{i(this,"KTGPhoneInputChangeEvent")}constructor(t){super("change",t)}},Um=[...ae,...ne,d`
    :host {
      display: inline-block;
    }

    .phone-input {
      position: relative;
      display: flex;
      cursor: text;
      overflow: clip;
    }

    :host([appearance='white']) .phone-input {
      background-color: var(--ktg-color-background-01);
    }

    :host([appearance='grey']) .phone-input {
      background-color: var(--ktg-color-neutral-01);
    }

    :host([disabled]) .phone-input {
      background-color: var(--ktg-color-neutral-02);
      color: var(--ktg-color-neutral-04);
    }

    :host([readonly]) .phone-input {
      cursor: text;
      background-color: var(--ktg-color-neutral-02);
    }

    .phone-input__border {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-bottom: 0.0625rem solid var(--ktg-color-brand1-01);
      pointer-events: none;
    }

    .phone-input:focus-within .phone-input__border {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: -0.125rem;
    }

    :host([error]) .phone-input__border {
      border: 0.0625rem solid var(--ktg-color-danger);
    }

    :host([error]) .phone-input:focus-within .phone-input__border {
      outline: 0.125rem solid var(--ktg-color-danger);
      border: 0;
    }

    :host([disabled]) .phone-input__border {
      border: 0;
    }

    :host([readonly]) .phone-input__border {
      border: 0;
    }

    :host([open]) .phone-input:focus-within .phone-input__border {
      outline: 0;
    }

    :host([open][error]) .phone-input:focus-within .phone-input__border {
      border: 0.0625rem solid var(--ktg-color-danger);
    }

    .phone-input__country-code {
    }

    .phone-input__number {
      width: 100%;
    }

    .phone-input__input {
      width: 100%;
      border: none;
      background-color: transparent;
      font-style: normal;
      font-family: var(--ktg-font-sans-serif);
      font-weight: var(--ktg-font-weight-default);
      font-size: 1rem;
      line-height: 1.125rem;
      outline: none;
      padding-top: 0.6875rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 0.6875rem;
      color: var(--ktg-color-text);
    }

    .phone-input__input:-webkit-autofill,
    .phone-input__input:-webkit-autofill:hover,
    .phone-input__input:-webkit-autofill:focus {
      color: var(--ktg-color-text);
      -webkit-text-fill-color: var(--ktg-color-text);
      -webkit-box-shadow: 0 0 0 10rem var(--ktg-color-brand2-01) inset;
    }

    .phone-input__input:-webkit-autofill::selection {
      color: var(--ktg-color-dark-contrast);
      -webkit-text-fill-color: var(--ktg-color-dark-contrast);
    }

    :host([error]) .phone-input__input {
      color: var(--ktg-color-danger);
    }

    :host([disabled]) .phone-input__input {
      color: var(--ktg-color-neutral-04);
    }

    .phone-input__input::placeholder {
      /* opacity for Firefox */
      opacity: 1;
      color: var(--ktg-color-neutral-04);
      user-select: none;
    }

    @media screen and (min-width: ${Ke}px) {
      .phone-input__input {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
  `],Wm=[...ae,...ne,d`
    :host {
      display: contents;
    }

    .country-code {
      color: var(--ktg-color-text);
      background: transparent;
      height: 100%;
      cursor: pointer;
      display: flex;
      align-items: center;
      outline: 0;
    }

    .country-code:focus-visible {
      background-color: var(--ktg-color-brand2-01);
    }

    :host([readonly]) .country-code {
      cursor: text;
    }

    :host([disabled]) .country-code {
      cursor: default;
    }

    .country-code__inner {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    @media screen and (min-width: ${Ke}px) {
      .country-code__inner {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }

    .country-code__inner::after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 0.0625rem;
      height: 1.5rem;
      pointer-events: none;
    }

    .country-code:focus-visible .country-code__inner::after {
      display: none;
    }

    :host([appearance='white']) .country-code__inner::after {
      background-color: var(--ktg-color-neutral-02);
    }

    :host([appearance='grey']) .country-code__inner::after {
      background-color: var(--ktg-color-neutral-03);
    }

    :host([disabled]) .country-code__inner::after {
      background-color: var(--ktg-color-neutral-03);
    }

    :host([readonly]) .country-code__inner::after {
      background-color: var(--ktg-color-neutral-03);
    }

    .country-code__phone-icon {
      flex-shrink: 0;
      color: var(--ktg-color-text);
    }

    :host([disabled]) .country-code__phone-icon {
      color: var(--ktg-color-neutral-04);
    }

    .country-code__value {
      color: var(--ktg-color-text);
      font-size: 1rem;
      font-weight: var(--ktg-font-weight-default);
      line-height: 100%;
      text-wrap: nowrap;
    }

    :host([error]) .country-code__value {
      color: var(--ktg-color-danger);
    }

    :host([disabled]) .country-code__value {
      color: var(--ktg-color-neutral-04);
    }

    .country-code__arrow-icon {
      flex-shrink: 0;
      color: var(--ktg-color-link);
      transition: transform 0.2s ease-out;
    }

    :host([open]) .country-code__arrow-icon {
      transform: rotate(180deg);
    }

    :host([disabled]) .country-code__arrow-icon {
      color: var(--ktg-color-neutral-04);
    }
  `],Ym=class extends mt{constructor(){super(...arguments),this.appearance="white",this.open=!1,this.disabled=!1,this.readonly=!1}render(){let t=this.disabled||this.readonly?"-1":"0";return j`
      <div
        class="country-code"
        tabindex=${t}
      >
        <div class="country-code__inner">
          <ktg-icon
            class="country-code__phone-icon"
            name="tel-phone"
          ></ktg-icon>

          <span class="country-code__value">
            <slot></slot>
          </span>

          <ktg-icon
            class="country-code__arrow-icon"
            name="dropdown-arrow-down-medium"
          ></ktg-icon>
        </div>
      </div>
    `}};i(Ym,"KTGCountryCodeDropdownButtonElement"),Ym.styles=Wm,o([kt({type:String,reflect:!0})],Ym.prototype,"appearance",2),o([kt({type:Boolean,reflect:!0})],Ym.prototype,"open",2),o([kt({type:Boolean,reflect:!0})],Ym.prototype,"disabled",2),o([kt({type:Boolean,reflect:!0})],Ym.prototype,"readonly",2),Ym=o([ft("ktg-country-code-dropdown-button")],Ym);var qm=class extends(md(mt)){constructor(){super(),this.internals=this.attachInternals(),this.overlayController=new Jd(this).withOrigin(this).withTypeahead(),this.options=[],this.allCountries=Vm,this.neighborCountryCodes=["CH","LI","DE","FR","IT","AT"],this.neighborCountries=this.neighborCountryCodes.map(t=>this.allCountries.find(e=>e.code===t)).filter(t=>!!t),this.countries=this.allCountries,this._countryCode=qm.DEFAULT_COUNTRY_CODE,this._country=null,this._number="",this.outlet=null,this.countryCodeOptions="all",this.appearance="white",this.placeholder="",this.name="",this.required=!1,this.autofocus=!1,this.isOpen=!1,this.onReset=()=>{this.countryCode=qm.DEFAULT_COUNTRY_CODE,this.number=""},this.createOptions(),this.overlayController.on("open",()=>{this.isOpen=!0}),this.overlayController.on("click-option",t=>{this.onSelectCountryCode(t)}),this.overlayController.on("activate-option",t=>{this.onActivateOption(t)}),this.overlayController.on("close",()=>{this.isOpen=!1})}set countryCode(t){let e=this._countryCode,i=t.trim();this._country=this.countries.find(t=>t.phoneCodes.includes(i))??null,this._country?this._countryCode=i:this._countryCode=qm.DEFAULT_COUNTRY_CODE;for(let t of this.options)t.selected=t.value===this._countryCode,t.renderedOption&&(t.renderedOption.selected=t.selected);this.number=this.reformatAndCropNumber(this.number),this.requestUpdate("countryCode",e)}get countryCode(){return this._countryCode}set number(t){let e=this._number;this._number=this.reformatAndCropNumber(t),this.updateNumberInputValue(),this.requestUpdate("number",e)}get number(){return this._number}set value(t){let e=t.trim(),i=this.countries.map(t=>t.phoneCodes).flat().filter(t=>e.startsWith(this.toDisplayCountryCode(t))).reduce((t,e)=>t.length>e.length?t:e,""),o=t.replace(i,"");i&&o?(this.countryCode=i,this.number=o):(this.countryCode=qm.DEFAULT_COUNTRY_CODE,this.number="")}get value(){let t=this.number.replace(/[\D]/g,"");return t?`${this.toDisplayCountryCode(this.countryCode)}${t}`:""}connectedCallback(){super.connectedCallback(),this.internals.role="group",this.internals.form?.addEventListener("reset",this.onReset)}willUpdate(t){if(super.willUpdate(t),t.has("label")&&(this.label?(this.setAttribute("aria-label",this.label),this.setAttribute("title",this.label)):(this.removeAttribute("aria-label"),this.removeAttribute("title"))),t.has("labelledBy")&&(this.labelledBy?this.setAttribute("aria-labelledby",this.labelledBy):this.removeAttribute("aria-labelledby")),(t.has("disabled")||t.has("readonly"))&&this.overlayController.close(),t.has("countryCodeOptions")){switch(this.countryCodeOptions){case"all":default:this.countries=this.allCountries;break;case"neighbors":this.countries=this.neighborCountries}this.createOptions(),this.countryCode=this.countryCode.toString()}(t.has("countryCode")||t.has("number"))&&this.internals.setFormValue(this.value)}updated(t){super.updated(t),(t.has("countryCodeOptions")||t.has("countryCode")||t.has("number"))&&this.updateNumberInputValue()}disconnectedCallback(){super.disconnectedCallback(),this.internals.form?.removeEventListener("reset",this.onReset)}render(){return j`
      <div class="phone-input">
        <div class="phone-input__border"></div>

        <div class="phone-input__country-code">
          <ktg-country-code-dropdown-button
            .appearance=${this.appearance}
            ?open=${this.isOpen}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?error=${this.error}
            role="combobox"
            title="Vorwahl auswählen"
            aria-label="Vorwahl auswählen"
            aria-haspopup="listbox"
            aria-controls=${fi(this.overlayController.overlayId||null)}
            aria-owns=${fi(this.overlayController.overlayId||null)}
            aria-expanded=${this.isOpen}
            aria-disabled=${this.disabled}
            @keydown=${this.onButtonKeydown}
            @click=${this.onClick}
          >
            ${this.toDisplayCountryCode(this.countryCode)}
          </ktg-country-code-dropdown-button>
        </div>

        <div class="phone-input__number">
          <input
            aria-label="Telefonnummer"
            class="phone-input__input"
            type="tel"
            autocomplete="tel-national"
            .placeholder=${this.placeholder}
            aria-invalid=${this.error}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            @input=${this.onInput}
            @change=${this.onChange}
            @keydown=${this.onInputKeydown}
          />
        </div>
      </div>
    `}onActivateOption(t){this.isOpen&&t?this.countryCodeButton.setAttribute("aria-activedescendant",t.id):this.countryCodeButton.removeAttribute("aria-activedescendant")}focus(t){this.numberInput.focus(t)}onClick(){this.disabled||this.readonly||this.overlayController.withOutlet(this.outlet).open({onReady:()=>{this.overlayController.activateSelectedIndex()}})}onInput(t){t.stopPropagation(),this.number=this.numberInput.value,this.dispatchInputEvent()}onChange(t){t.stopPropagation(),this.dispatchChangeEvent()}onInputKeydown(t){"Enter"===t.code&&this.internals.form?.requestSubmit()}onButtonKeydown(t){if(this.isOpen)if(t.preventDefault(),t.stopPropagation(),this.overlayController.setDisplayFocusOutline(!0),t.ctrlKey)if("KeyY"===t.code){let e=this.overlayController.activeOption;e&&(t.stopPropagation(),t.preventDefault(),this.onSelectCountryCode(e))}else this.overlayController.onKeydown(t),this.overlayController.scrollActiveOptionIntoView();else switch(t.code){case"Escape":case"Tab":t.preventDefault(),t.stopPropagation(),this.overlayController.close();break;case"Enter":case"Space":{if(this.overlayController.isTyping()&&"Space"===t.code){this.overlayController.onKeydown(t);break}let e=this.overlayController.activeOption;e&&(t.stopPropagation(),t.preventDefault(),this.onSelectCountryCode(e))}break;default:this.overlayController.onKeydown(t),this.overlayController.scrollActiveOptionIntoView()}else switch(t.code){case"Enter":case"Space":case"ArrowDown":t.preventDefault(),t.stopPropagation(),this.overlayController.withOutlet(this.outlet).open({displayFocusOutline:!0,onReady:()=>{this.overlayController.activateSelectedIndex(0)}});break;case"ArrowUp":t.preventDefault(),t.stopPropagation(),this.overlayController.withOutlet(this.outlet).open({displayFocusOutline:!0,onReady:()=>{this.overlayController.activateSelectedIndex(this.options.length-1)}})}}onSelectCountryCode(t){if(!this.countries.find(e=>e.phoneCodes.includes(t.value)))throw new Error(`Country code '${t.value}' not found`);this.countryCode=t.value,this.overlayController.close(),this.dispatchInputEvent(),this.dispatchChangeEvent(),this.numberInput.focus()}dispatchInputEvent(){this.dispatchEvent(new Hm({cancelable:!1,bubbles:!0,detail:{countryCode:this.countryCode,numberInput:this.number,numberNormalized:this.normalizeNumber(this.number),value:this.value}}))}dispatchChangeEvent(){this.dispatchEvent(new Gm({cancelable:!1,bubbles:!0,detail:{countryCode:this.countryCode,numberInput:this.number,numberNormalized:this.normalizeNumber(this.number),value:this.value}}))}createOptions(){let t=[],e=i(e=>{for(let i of e.phoneCodes){let o=Km({value:i,label:`${this.toDisplayCountryCode(i)} - ${e.name}`,keywords:[i,e.name]});t.push(o)}},"addPhoneCodesToOptions");for(let t of this.neighborCountries)e(t);for(let t of this.countries.filter(t=>!this.neighborCountryCodes.includes(t.code)))e(t);this.options=t,this.overlayController.setOptions(t)}toDisplayCountryCode(t){return`+${t}`}reformatAndCropNumber(t){let e=t.replace(/[^0-9\s]/g,"").trimStart();if(this._country){let t=this._country.maxPhoneNumberDigits-this._countryCode.length,i=0,o=[];for(let n of e)if(o.push(n),/\d/.test(n)&&i++,i>=t)break;return o.join("")}return e}normalizeNumber(t){return t.replace(/[\D]/g,"")}updateNumberInputValue(){this.numberInput&&(this.numberInput.value=this.number)}};i(qm,"KTGPhoneInputElement"),qm.styles=Um,qm.formAssociated=!0,qm.DEFAULT_COUNTRY_CODE="41",o([Ee({context:Te,subscribe:!0}),kt()],qm.prototype,"outlet",2),o([kt({type:String,attribute:"country-code-options"})],qm.prototype,"countryCodeOptions",2),o([kt({type:String,reflect:!0})],qm.prototype,"appearance",2),o([kt({type:String})],qm.prototype,"placeholder",2),o([kt({type:String,attribute:"country-code"})],qm.prototype,"countryCode",1),o([kt({type:String})],qm.prototype,"number",1),o([kt({type:String})],qm.prototype,"value",1),o([kt({type:String,reflect:!0})],qm.prototype,"name",2),o([kt({type:Boolean,reflect:!0})],qm.prototype,"required",2),o([kt({type:Boolean,reflect:!0})],qm.prototype,"autofocus",2),o([kt({type:Boolean,reflect:!0,attribute:"open"})],qm.prototype,"isOpen",2),o([Ct("ktg-country-code-dropdown-button")],qm.prototype,"countryCodeButton",2),o([Ct(".phone-input__input")],qm.prototype,"numberInput",2),qm=o([ft("ktg-phone-input")],qm);var jm=class{constructor(t){this.name=t,this.radios=[],this.onInput=t=>{this.onCheck(t.target)}}static{i(this,"KTGRadioGroup")}add(t){this.radios.push(t),t.addEventListener("input",this.onInput),t.checked&&this.onCheck(t)}onCheck(t){for(let e of this.radios)e!==t&&(e.checked=!1)}remove(t){let e=this.radios?.findIndex(e=>e===t)||-1;t.removeEventListener("input",this.onInput),this.radios?.splice(e,1)}get length(){return this.radios.length}},Zm=class{constructor(){this.radioGroups=new Map}register(t,e){this.getGroup(t)?.add(e)}unregister(t,e){let i=this.getGroup(t);i?.remove(e),0===i?.length&&this.radioGroups.delete(t)}onCheckedPropertySetToTrue(t){this.getGroup(t.name)?.onCheck(t)}getGroup(t){return this.radioGroups.has(t)||this.radioGroups.set(t,new jm(t)),this.radioGroups.get(t)}};i(Zm,"KTGRadioGroupService"),Zm=o([Le],Zm),re([d`
    ktg-radio {
      display: inline-block;
      height: 1rem;
      width: 1rem;
    }

    .ktg-radio {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      width: inherit;
      border: 0.0625rem solid var(--ktg-color-brand1-01);
      border-radius: 50%;
      pointer-events: none;
    }

    ktg-radio[disabled] .ktg-radio {
      background-color: var(--ktg-color-neutral-03);
      border: 0.0625rem solid var(--ktg-color-neutral-04);
      cursor: default;
    }

    .ktg-radio__input:focus-visible ~ .ktg-radio {
      outline-offset: 0.0625rem;
      outline: 0.125rem solid var(--ktg-color-focus);
    }

    .ktg-radio__hover {
      position: absolute;
      height: inherit;
      width: inherit;
      border: 0.0625rem solid var(--ktg-color-brand1-02);
      border-radius: 50%;
      opacity: 0;
    }

    ktg-radio:not([disabled]):hover .ktg-radio__hover {
      opacity: 1;
    }

    .ktg-radio__active {
      position: absolute;
      height: inherit;
      width: inherit;
      border: 0.0625rem solid var(--ktg-color-brand1-03);
      border-radius: 50%;
      opacity: 0;
    }

    ktg-radio:not([disabled]):active .ktg-radio__active {
      opacity: 1;
    }

    .ktg-radio__inner {
      position: relative;
      height: 0.625rem;
      width: 0.625rem;
      background-color: var(--ktg-color-brand1-01);
      border-radius: 50%;
      transform: scale(0);
      z-index: 1;
    }

    ktg-radio[disabled] .ktg-radio__inner {
      background-color: var(--ktg-color-neutral-04);
    }

    .ktg-radio__input:checked ~ .ktg-radio .ktg-radio__inner {
      transform: scale(1);
    }

    .ktg-inner__hover {
      position: absolute;
      height: inherit;
      width: inherit;
      background-color: var(--ktg-color-brand1-02);
      border-radius: 50%;
      opacity: 0;
    }

    ktg-radio:not([disabled]):hover .ktg-inner__hover {
      opacity: 1;
    }

    .ktg-inner__active {
      position: absolute;
      top: 0;
      left: 0;
      height: inherit;
      width: inherit;
      background-color: var(--ktg-color-brand1-03);
      border-radius: 50%;
      opacity: 0;
    }

    ktg-radio:not([disabled]):active .ktg-inner__active {
      opacity: 1;
    }

    .ktg-radio__input {
      height: inherit;
      width: inherit;
      position: absolute;
      z-index: 0;
      opacity: 0;
      cursor: pointer;
    }

    .ktg-radio__input:disabled {
      cursor: default;
    }
  `]);var Xm=class extends mt{constructor(){super(...arguments),this.label=null,this.labelledBy=null,this.checked=!1,this.disabled=!1,this.readonly=!1,this.inputId="",this.inputTabindex=0,this.name="",this.value="",this.required=!1,this.autofocus=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.checkAndSetImplicitSlot()}willUpdate(t){if(t.has("name")){let e=t.get("name");e&&this.groupService?.unregister(e,this),this.groupService?.register(this.name,this)}}updated(t){t.has("checked")&&(this.input.checked=this.checked,this.checked&&this.groupService?.onCheckedPropertySetToTrue(this))}checkAndSetImplicitSlot(){this.closest("ktg-labelled-choice")&&(this.slot="input")}onLabelClick(){this.focus(),this.input.click()}onClick(t){this.readonly&&t.preventDefault()}onChange(){this.checked=this.input.checked}focus(){this.input.focus()}render(){return j`
      <input
        class="ktg-radio__input"
        type="radio"
        .id=${this.inputId}
        .name=${this.name}
        .value=${this.value}
        .required=${this.required}
        .disabled=${this.disabled}
        .autofocus=${this.autofocus}
        tabindex=${this.inputTabindex}
        title=${fi(this.label)}
        aria-readonly=${this.readonly}
        aria-label=${fi(this.label)}
        aria-labelledby=${fi(this.labelledBy)}
        @click=${this.onClick}
        @change=${this.onChange}
      />
      <div class="ktg-radio">
        <div class="ktg-radio__hover"></div>
        <div class="ktg-radio__active"></div>
        <div class="ktg-radio__inner">
          <div class="ktg-inner__hover"></div>
          <div class="ktg-inner__active"></div>
        </div>
      </div>
    `}};i(Xm,"KTGRadioElement"),o([De(Zm)],Xm.prototype,"groupService",2),o([kt({type:String})],Xm.prototype,"label",2),o([kt({type:String,attribute:!1})],Xm.prototype,"labelledBy",2),o([kt({type:Boolean,reflect:!0})],Xm.prototype,"checked",2),o([kt({type:Boolean,reflect:!0})],Xm.prototype,"disabled",2),o([kt({type:Boolean,reflect:!0})],Xm.prototype,"readonly",2),o([kt({type:String,attribute:"input-id"})],Xm.prototype,"inputId",2),o([kt({type:Number,attribute:"input-tabindex"})],Xm.prototype,"inputTabindex",2),o([kt({type:String})],Xm.prototype,"name",2),o([kt({type:String})],Xm.prototype,"value",2),o([kt({type:Boolean,reflect:!0})],Xm.prototype,"required",2),o([kt({type:Boolean,reflect:!0})],Xm.prototype,"autofocus",2),o([Ct(".ktg-radio__input")],Xm.prototype,"input",2),Xm=o([ft("ktg-radio")],Xm);var Jm="ktg-skeleton-appearance-context",Qm="ktg-skeleton-loading-context",tv=[d`
    :host {
      display: contents;
    }
  `],ev=class extends mt{constructor(){super(...arguments),this.appearance="white",this.loading=!1}render(){return j`<slot></slot>`}};i(ev,"KTGSkeletonProviderElement"),ev.styles=tv,o([Se({context:Jm}),kt({type:String,reflect:!0})],ev.prototype,"appearance",2),o([Se({context:Qm}),kt({type:Boolean,reflect:!0})],ev.prototype,"loading",2),ev=o([ft("ktg-skeleton-provider")],ev);var iv=c("var(--ktg-skeleton-background-color, var(--ktg-color-neutral-02))"),ov=c("var(--ktg-skeleton-shimmer-color, var(--ktg-color-neutral-03))"),nv=[d`
    :host {
      position: relative;
      display: block;
      width: 100%;
      height: 1.2rem; /* mimic default font-size with line-height of 120% */
      background-color: ${iv};
      overflow: clip;
    }

    :host([appearance='grey']) {
      --ktg-skeleton-background-color: var(--ktg-color-neutral-03);
      --ktg-skeleton-shimmer-color: var(--ktg-color-neutral-04);
    }

    :host([loading])::before {
      position: absolute;
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-color: ${ov};
      animation: shimmer-pulse 1.5s ease-in-out infinite alternate;
    }

    @keyframes shimmer-pulse {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `],rv=class extends mt{constructor(){super(...arguments),this.appearance="white",this.loading=!1}};i(rv,"KTGSkeletonElement"),rv.styles=nv,o([Ee({context:Jm,subscribe:!0}),kt({type:String,reflect:!0})],rv.prototype,"appearance",2),o([Ee({context:Qm,subscribe:!0}),kt({type:Boolean,reflect:!0})],rv.prototype,"loading",2),rv=o([ft("ktg-skeleton")],rv);var av=[...ae,...ne,d`
    :host {
      display: contents;
    }

    .table-button {
      text-decoration: none;
      color: var(--ktg-color-link);
      font-size: 0.875rem;
      line-height: 120%;
      background: transparent;
      border: none;
      padding: 0;
      margin: 0;
    }

    :host(:not([disabled])) button.table-button {
      cursor: pointer;
    }

    :host([appearance='danger']) .table-button {
      color: var(--ktg-color-danger);
    }

    .table-button:visited {
      color: var(--ktg-color-link-visited);
    }

    .table-button:focus-visible {
      outline: 0.125rem solid var(--ktg-color-link);
    }

    .table-button:visited:focus-visible {
      outline-color: var(--ktg-color-link-visited);
    }

    :host([disabled]) .table-button {
      color: var(--ktg-color-neutral-03);
    }

    .table-button__text {
    }

    :host(:not([disabled])) .table-button:hover .table-button__text {
      text-decoration: underline;
    }

    .table-button__icon {
      display: inline-flex;
      vertical-align: middle;
      user-select: none;
      margin-top: -0.0625em; /* NOTE: Looks slightly more centered with this */
      margin-left: 0.25em;
      --ktg-icon-size: 1em;
    }

    .table-button__icon--arrow {
      transition: transform 0.125s ease-in-out;
    }

    @media (prefers-reduced-motion: reduce) {
      .table-button__icon--arrow {
        transition: none;
      }
    }

    :host(:not([disabled])) .table-button:hover .table-button__icon--arrow {
      transform: translateX(0.25rem);
    }
  `],sv=class extends mt{constructor(){super(...arguments),this.appearance="default",this.href="",this.target="_self",this.download="",this.disabled=!1,this.icon=""}click(){this.disabled||this.button.click()}render(){return this.href?this.renderLink():this.renderButton()}renderButton(){return j`
      <button
        class="table-button"
        type="button"
        ?disabled=${this.disabled}
      >
        ${this.renderContent()}
      </button>
    `}renderLink(){let t=this.disabled?null:this.href,e=this.hasAttribute("download")||this.download?this.download:null;return j`
      <a
        class="table-button"
        href=${fi(t)}
        target=${this.target}
        download=${fi(e)}
        aria-disabled=${fi(this.disabled)}
      >
        ${this.renderContent()}
      </a>
    `}renderContent(){return j`
      <span class="table-button__text">
        <slot></slot>
      </span>
      ${this.renderIcon()}
    `}renderIcon(){return this.icon?j`
        <ktg-icon
          class="table-button__icon table-button__icon--custom"
          .name=${this.icon}
        ></ktg-icon>
      `:j`
      <ktg-icon
        class="table-button__icon table-button__icon--arrow"
        name="long-arrow-right"
      >
      </ktg-icon>
    `}};i(sv,"KTGTableButtonElement"),sv.styles=av,sv.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},o([kt({type:String,reflect:!0})],sv.prototype,"appearance",2),o([kt({type:String})],sv.prototype,"href",2),o([kt({type:String})],sv.prototype,"target",2),o([kt({type:String})],sv.prototype,"download",2),o([kt({type:Boolean,reflect:!0})],sv.prototype,"disabled",2),o([kt({type:String})],sv.prototype,"icon",2),o([Ct(".table-button")],sv.prototype,"button",2),sv=o([ft("ktg-table-button")],sv);var lv=[...ae,...ne,d`
    :host {
      position: relative;
      display: table-cell;
      font-size: 0.875rem;
      vertical-align: middle;
      line-height: 1.2em;
      white-space: nowrap;
      transition: background-color 0.2s ease-out;
      border-bottom: 0.0625rem solid var(--ktg-color-neutral-02);
    }

    :host([header]) {
      border: 0;
    }

    :host([alignment='left']) {
      text-align: left;
    }

    :host([alignment='center']) {
      text-align: center;
    }

    :host([alignment='right']) {
      text-align: right;
    }

    :host([sizing='min-content']) {
      white-space: nowrap;
      width: 0rem;
    }

    :host([color='white']) {
      background-color: var(--ktg-color-background-01);
    }

    :host([color='grey']) {
      background-color: var(--ktg-color-neutral-01);
    }

    :host([sticky]) {
      position: sticky;
      left: 0;
      right: 0;
      z-index: 2;
    }

    :host([selected]) {
      background-color: var(--ktg-color-brand2-01);
    }

    :host([hovering]:not([appearance='list'])) {
      background-color: var(--ktg-color-brand2-01);
    }

    .table-column__shadow {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      box-shadow: 0 0 1rem rgba(var(--ktg-rgb-shadow), 0.1);
      opacity: 0;
      z-index: 0;
    }

    :host([sticking]) .table-column__shadow {
      opacity: 1;
    }
    :host(.is-sticking-left) .table-column__shadow {
      clip-path: polygon(0% 0%, 200% 0%, 200% 100%, 0% 100%);
    }
    :host(.is-sticking-right) .table-column__shadow {
      clip-path: polygon(-200% 0%, 100% 0%, 100% 100%, -200% 100%);
    }

    .table-column__content {
      position: relative;
      padding: 0.75rem 1rem !important;
      z-index: 1;
    }

    .table-column--checkbox-column .table-column__content {
      display: flex;
    }

    /* List view ---------------------------------------- */
    :host([appearance='list']) {
      border-bottom: 0;
    }
  `],cv=[...ae,...ne,d`
    :host {
      display: inline-block;
      user-select: none;
    }

    .table-title {
      position: relative;
      display: block;
      font-size: 0.875rem;
      line-height: 1.2em;
      border: none;
      background-color: transparent;
      cursor: pointer;
      white-space: nowrap;
      color: var(--ktg-color-text);
    }

    :host([no-sort]) .table-title {
      cursor: default;
    }

    .table-title:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: 0.125rem;
    }

    .table-title__icon-container {
      display: none;
    }

    .table-title__icon-container--has-content {
      position: relative;
      display: inline-block;
      width: 1.375rem;
      height: 0.75rem;
    }

    .table-title__icon {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-0.125rem);
    }

    .table-title__main {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
    }

    .table-title__text {
      display: inline-block;
      white-space: nowrap;
    }

    .table-title__sort-icon-container {
      position: relative;
      display: inline-block;
      height: 0.875rem;
      width: 0.5rem;
      margin-top: -0.125rem;
    }

    .table-title__sort-icon {
      position: absolute;
      color: var(--ktg-color-link);
    }

    .sort-icon__top {
      top: 0;
      left: 50%;
      transform: translateX(-50%) translateY(-0.125rem);
    }

    .sort-icon__bottom {
      left: 50%;
      bottom: 0;
      transform: translateX(-50%) translateY(0.125rem);
    }

    :host([sort='ascending']) .sort-icon__bottom {
      color: var(--ktg-color-neutral-04);
    }

    :host([sort='descending']) .sort-icon__top {
      color: var(--ktg-color-neutral-04);
    }
  `],dv=class extends mt{constructor(){super(...arguments),this.noSort=!1,this.sort="default",this.hasIcon=!1,this.closestColumn=null}connectedCallback(){super.connectedCallback();let t=Array.from(this.querySelectorAll("ktg-icon"));if(t.length>0){this.hasIcon=!0;for(let e of t)e.slot=e.hasAttribute("slot")?e.slot:"icon"}this.closestColumn=this.closest("ktg-table-column")}updated(t){super.updated(t),t.has("sort")&&this.closestColumn&&("default"===this.sort?this.closestColumn.removeAttribute("aria-sort"):this.closestColumn.setAttribute("aria-sort",this.sort))}render(){return this.noSort?this.renderWithoutSort():this.renderWithSort()}renderWithSort(){return j`
      <button
        class="table-title"
        type="button"
      >
        ${this.renderIcon()}

        <span class="table-title__main">
          ${this.renderText()}

          <span class="table-title__sort-icon-container">
            <ktg-icon
              class="table-title__sort-icon sort-icon__top"
              name="dropdown-arrow-up-small"
              size="small"
            >
            </ktg-icon>

            <ktg-icon
              class="table-title__sort-icon sort-icon__bottom"
              name="dropdown-arrow-down-small"
              size="small"
            >
            </ktg-icon>
          </span>
        </span>
      </button>
    `}renderWithoutSort(){return j`
      <span class="table-title">
        ${this.renderIcon()}
        <span class="table-title__main">${this.renderText()}</span>
      </span>
    `}renderIcon(){return j`
      <span
        class=${ai({"table-title__icon-container":!0,"table-title__icon-container--has-content":this.hasIcon})}
      >
        <span class="table-title__icon">
          <slot name="icon"></slot>
        </span>
      </span>
    `}renderText(){return j`
      <span class="table-title__text">
        <slot></slot>
      </span>
    `}};i(dv,"KTGTableTitleElement"),dv.styles=cv,o([kt({type:Boolean,reflect:!0,attribute:"no-sort"})],dv.prototype,"noSort",2),o([kt({type:String,reflect:!0})],dv.prototype,"sort",2),o([wt()],dv.prototype,"hasIcon",2),dv=o([ft("ktg-table-title")],dv);var hv=class extends mt{constructor(){super(...arguments),this.table=null,this.isCheckboxColumn=!1,this.appearance="table",this.color="white",this.sticking=!1,this.hovering=!1,this.selected=!1,this.edge=null,this.sizing="default",this.alignment="left",this.header=!1,this.sticky=!1}connectedCallback(){super.connectedCallback(),this.table=this.closest("ktg-table")}willUpdate(t){super.willUpdate(t),(t.has("edge")||t.has("sticking"))&&(this.classList.toggle("is-sticking-left",this.sticking&&"left"===this.edge),this.classList.toggle("is-sticking-right",this.sticking&&"right"===this.edge))}updated(t){t.has("header")&&this.updateRole(),t.has("sticky")&&(this.sticky?this.table?.addStickyColumn(this):this.table?.removeStickyColumn(this))}disconnectedCallback(){super.disconnectedCallback(),this.table?.removeStickyColumn(this)}updateRole(){let t="cell";this.header&&(t="columnheader"),this.setAttribute("role",t)}onSlotChange(){this.querySelector("ktg-link")&&Xt(this,"Please use the `<ktg-table-button>` instead of the `<ktg-link>` inside a `<ktg-table-column>`!");let t=this.querySelector("ktg-checkbox");this.isCheckboxColumn=!!t}render(){return j`
      <div
        class=${ai({"table-column":!0,"table-column--checkbox-column":this.isCheckboxColumn})}
      >
        <div class="table-column__shadow"></div>
        <div class="table-column__content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};i(hv,"KTGTableColumnElement"),hv.styles=lv,o([wt()],hv.prototype,"isCheckboxColumn",2),o([kt({type:String,reflect:!0})],hv.prototype,"appearance",2),o([kt({type:String,reflect:!0})],hv.prototype,"color",2),o([kt({type:Boolean,reflect:!0})],hv.prototype,"sticking",2),o([kt({type:Boolean,reflect:!0})],hv.prototype,"hovering",2),o([kt({type:Boolean,reflect:!0})],hv.prototype,"selected",2),o([kt({attribute:!1})],hv.prototype,"edge",2),o([kt({type:String,reflect:!0})],hv.prototype,"sizing",2),o([kt({type:String,reflect:!0})],hv.prototype,"alignment",2),o([kt({type:Boolean,reflect:!0})],hv.prototype,"header",2),o([kt({type:Boolean,reflect:!0})],hv.prototype,"sticky",2),hv=o([ft("ktg-table-column")],hv);var uv=[d`
    .table-decorated {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .table-decorated__load-more {
      display: flex;
      justify-content: flex-end;
    }
  `],pv=class extends mt{constructor(){super(...arguments),this.appearance="table",this.color="white"}static{i(this,"KTGTableRowBaseElement")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","row")}updated(t){super.updated(t),(t.has("appearance")||t.has("color"))&&this.updateColumns()}onSlotChange(){this.updateColumns()}renderSlot(){return j`<slot @slotchange=${this.onSlotChange}></slot>`}updateColumns(){for(let t of this.columns)t.appearance=this.appearance,t.color=this.color}};o([kt({type:String,reflect:!0})],pv.prototype,"appearance",2),o([kt({type:String,reflect:!0})],pv.prototype,"color",2),o([Et({flatten:!0,selector:"ktg-table-column"})],pv.prototype,"columns",2);var gv=[...ae,d`
    :host {
      display: table-row;
      position: relative;
      z-index: 2;
      border-bottom: 0.0625rem solid var(--ktg-color-brand1-01);
    }

    :host([appearance='list']) {
      ${se()}
    }

    :host([loading]) {
      border-bottom: 0.0625rem solid transparent;
    }
  `],mv=class extends pv{constructor(){super(...arguments),this.loading=!1}update(t){super.update(t),t.has("appearance")&&("list"===this.appearance?this.setAttribute("tabindex","-1"):this.removeAttribute("tabindex"))}render(){return this.renderSlot()}};i(mv,"KTGTableTitleRowElement"),mv.styles=gv,o([kt({type:Boolean,reflect:!0})],mv.prototype,"loading",2),mv=o([ft("ktg-table-title-row")],mv);var vv=[...ae,...ne,d`
    :host {
      display: block;
      position: relative;
    }

    .scroll-container {
      z-index: 0;
      width: 100%;
      height: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    :host([color='white']) .scroll-container {
      background-color: var(--ktg-color-background-01);
    }

    :host([color='grey']) .scroll-container {
      background-color: var(--ktg-color-neutral-01);
    }

    :host([appearance='list']) .scroll-container {
      background-color: transparent;
    }

    .scroll-container::-webkit-scrollbar {
      display: none;
    }

    .table {
      display: table;
      border-collapse: collapse;
      table-layout: auto;
      width: 100%;
      color: var(--ktg-color-text);
    }

    .table--is-scrollable {
      width: auto;
      table-layout: fixed;
    }

    /* List view ---------------------------------------- */
    :host([appearance='list']) .table {
      --spacing-between-rows: 0.5rem;

      border-collapse: separate;
      border-spacing: 0 var(--spacing-between-rows);

      /*
       * NOTE: use negative margin to remove the padding added by the
       * border-spacing before and after the table.
       * ------------------------------------------------------------
       */

      /* times -2 for margin-top because of the hidden title-row */
      margin-top: calc(-2 * var(--spacing-between-rows));
      margin-bottom: calc(-1 * var(--spacing-between-rows));
    }
  `],fv=[...ne,d`
    .load-more {
      display: flex;
      align-items: center;
      gap: 1rem;
      user-select: none;
    }

    .load-more__text {
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: 14px;
      line-height: 120%;
      text-align: center;
      color: var(--ktg-color-neutral-05);
    }

    .load-more__button {
    }
  `],bv=class extends mt{connectedCallback(){super.connectedCallback(),this.checkAndSetImplicitSlot()}checkAndSetImplicitSlot(){this.closest("ktg-table-decorated")&&(this.slot="load-more")}render(){return j`
      <div class="load-more">
        <span class="load-more__text">
          <slot></slot>
        </span>
        <span class="load-more__button">
          <slot name="button"></slot>
        </span>
      </div>
    `}};i(bv,"KTGTableLoadMoreElement"),bv.styles=fv,bv=o([ft("ktg-table-load-more")],bv);var yv=[d`
    .table-loader {
      --indicator-width: 20%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: auto;
      height: 0.0625rem;
      overflow: clip;
      z-index: 3;
    }

    :host([loading]) .table-loader {
      animation: stay-green 0.1s;
      background-color: var(--ktg-color-neutral-02);
    }

    @media (prefers-reduced-motion: reduce) {
      :host([loading]) .table-loader {
        animation: none;
      }
    }

    .table-loader__translate {
      width: 100%;
      height: 100%;
      transform: translateX(calc(var(--indicator-width) * -1));
    }

    :host([loading]) .table-loader__translate {
      animation: table-loader ease 1.5s 0.1s infinite;
    }

    @media (prefers-reduced-motion: reduce) {
      .table-loader__translate {
        transform: none;
      }

      :host([loading]) .table-loader__translate {
        animation: table-loader-reduced ease 1s 0.1s alternate infinite;
      }
    }

    .table-loader__indicator {
      height: 100%;
      background-color: var(--ktg-color-brand1-01);
      width: var(--indicator-width);
    }

    @media (prefers-reduced-motion: reduce) {
      .table-loader__indicator {
        width: 100%;
      }
    }

    @keyframes stay-green {
      0%,
      100% {
        background-color: var(--ktg-color-brand1-01);
      }
    }

    @keyframes table-loader {
      0% {
        transform: translateX(calc(var(--indicator-width) * -1));
      }
      100% {
        transform: translateX(100%);
      }
    }

    @keyframes table-loader-reduced {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0.1;
      }
    }
  `],kv=class extends mt{constructor(){super(...arguments),this.titleRow=null,this.tableRect=null,this.loading=!1}render(){return j`
      <div class="table-loader">
        <div class="table-loader__translate">
          <div class="table-loader__indicator"></div>
        </div>
      </div>
    `}willUpdate(t){super.willUpdate(t),this.titleRow&&t.has("loading")&&(this.titleRow.loading=this.loading)}updated(t){super.updated(t),(t.has("titleRow")||t.has("tableRect"))&&this.updatePosition()}updatePosition(){if(!this.titleRow||!this.tableRect)return;let t=this.titleRow.getBoundingClientRect();this.loader.style.top=Ft.bottom(t)-Ft.top(this.tableRect)+"px"}};i(kv,"KTGTableLoaderElement"),kv.styles=yv,o([kt({type:Object,attribute:!1})],kv.prototype,"titleRow",2),o([kt({type:Object,attribute:!1})],kv.prototype,"tableRect",2),o([kt({type:Boolean,reflect:!0})],kv.prototype,"loading",2),o([Ct(".table-loader")],kv.prototype,"loader",2),kv=o([ft("ktg-table-loader")],kv);var wv=[...ae,d`
    :host {
      position: relative;
      display: table-row;

      /* This transition of the background-color instead of using opacity is OK. See note below! */
      transition: background-color 0.2s ease-out;
    }

    :host([appearance='list'][color='white']) {
      background-color: var(--ktg-color-background-01);
    }

    :host([appearance='list'][color='grey']) {
      background-color: var(--ktg-color-neutral-01);
    }

    /* NOTE: we change the background-color directly instead of using a pseudo
     * element with opacity. The main reason being, that the pseudo element
     * might interfere with CSS selectors like :nth-child() or :first-child when
     * the user is trying to select the columns.
     */
    :host([selected]) {
      background-color: var(--ktg-color-brand2-01);
    }

    :host(:hover) {
      background-color: var(--ktg-color-brand2-01);
    }

    :host(.ktg-table-row--has-click-action) {
      cursor: pointer;
      touch-action: manipulation;
    }
  `],_v=class extends pv{constructor(){super(...arguments),this.selected=!1,this.clickAction="none",this.setHover=()=>{for(let t of this.columns)t.hovering=!0},this.removeHover=()=>{for(let t of this.columns)t.hovering=!1},this.onClick=t=>{let e=t.target;if(!(e instanceof sv||e instanceof Ui))switch(this.clickAction){case"checkbox":this.querySelector("ktg-checkbox")?.click();break;case"button":this.querySelector("ktg-table-button")?.click()}}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.onClick),this.addEventListener("mouseover",this.setHover),this.addEventListener("mouseout",this.removeHover)}willUpdate(t){super.willUpdate(t),t.has("clickAction")&&this.classList.toggle("ktg-table-row--has-click-action","none"!==this.clickAction)}updated(t){super.updated(t),t.has("selected")&&this.updateColumnsSelectedState()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.onClick),this.removeEventListener("mouseover",this.setHover),this.removeEventListener("mouseout",this.removeHover)}onSlotChange(){super.onSlotChange(),this.updateColumnsSelectedState()}render(){return this.renderSlot()}updateColumnsSelectedState(){for(let t of this.columns)t.selected=this.selected}};i(_v,"KTGTableRowElement"),_v.styles=wv,o([kt({type:Boolean,reflect:!0})],_v.prototype,"selected",2),o([kt({type:String,attribute:"click-action"})],_v.prototype,"clickAction",2),_v=o([ft("ktg-table-row")],_v);var xv=class extends mt{constructor(){super(...arguments),this.renderLoop=null,this.renderLoopState={previousClientRect:Ft.new(),previousIsScrollable:!1,previousScrollWidth:0,previousScrollLeft:0,previousStickyColumnCount:0,previousLoading:!1},this.stickyColumns=[],this.isScrollable=!1,this.appearance="table",this.color="white",this.loading=!1,this.renderUpdate=()=>{let t=Ft.round(this.getBoundingClientRect());this.isScrollable=this.clientWidth<Math.round(this.table.clientWidth);let e=this.stickyColumns.length!==this.renderLoopState.previousStickyColumnCount,i=this.isScrollable!==this.renderLoopState.previousIsScrollable,o=this.scrollContainer.scrollWidth!==this.renderLoopState.previousScrollWidth,n=this.scrollContainer.scrollLeft!==this.renderLoopState.previousScrollLeft,r=this.loading!==this.renderLoopState.previousLoading;if(!Ft.equals(t,this.renderLoopState.previousClientRect)||e||i||o||n||r){for(let e of this.stickyColumns){let i=Ft.round(e.getBoundingClientRect()),o=!1;i.x<=t.x?(o=this.scrollContainer.scrollLeft>0,e.edge="left"):Ft.right(i)>=Ft.right(t)&&(o=this.scrollContainer.scrollLeft+this.clientWidth<this.scrollContainer.scrollWidth,e.edge="right"),e.sticking=o}this.loader.tableRect=t,this.loader.loading=this.loading}this.renderLoopState.previousClientRect=t,this.renderLoopState.previousStickyColumnCount=this.stickyColumns.length,this.renderLoopState.previousIsScrollable=this.isScrollable,this.renderLoopState.previousScrollWidth=this.scrollContainer.scrollWidth,this.renderLoopState.previousScrollLeft=this.scrollContainer.scrollLeft,this.renderLoopState.previousLoading=this.loading}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","table"),this.setupResizeObserver()}updated(t){super.updated(t),(t.has("appearance")||t.has("color"))&&this.updateRows()}disconnectedCallback(){super.disconnectedCallback(),this.renderLoop?.destroy(),this.renderLoop=null}render(){return j`
      <div
        class="scroll-container"
        id="scroll-container"
      >
        <div
          id="table"
          class=${ai({table:!0,"table--is-scrollable":this.isScrollable})}
        >
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>

      <ktg-table-loader></ktg-table-loader>
    `}setupResizeObserver(){this.renderLoop=new $e,this.renderLoop.on("update",this.renderUpdate),this.renderLoop.play()}addStickyColumn(t){this.stickyColumns.push(t)}removeStickyColumn(t){this.stickyColumns=this.stickyColumns.filter(e=>e!==t)}onSlotChange(){this.updateRows(),this.loader.titleRow=this.getTitleRow()}updateRows(){for(let t of this.rows)t.appearance=this.appearance,t.color=this.color}getTitleRow(){return this.rows.find(t=>t instanceof mv)}};i(xv,"KTGTableElement"),xv.styles=vv,o([wt()],xv.prototype,"isScrollable",2),o([kt({type:String,reflect:!0})],xv.prototype,"appearance",2),o([kt({type:String,reflect:!0})],xv.prototype,"color",2),o([kt({type:Boolean,reflect:!0})],xv.prototype,"loading",2),o([Ct(".scroll-container")],xv.prototype,"scrollContainer",2),o([Ct(".table")],xv.prototype,"table",2),o([Ct("ktg-table-loader")],xv.prototype,"loader",2),o([Et({flatten:!0,selector:"ktg-table-title-row, ktg-table-row"})],xv.prototype,"rows",2),xv=o([ft("ktg-table")],xv);var Cv=class extends mt{render(){return j`
      <div class="table-decorated">
        <slot></slot>

        <div class="table-decorated__load-more">
          <slot name="load-more"></slot>
        </div>
      </div>
    `}};i(Cv,"KTGTableDecoratedElement"),Cv.styles=uv,Cv=o([ft("ktg-table-decorated")],Cv);var Sv=[...ae,...ne,d`
    :host {
      display: contents;
    }

    .character-counter {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.75rem;
      line-height: 120%;
      color: var(--ktg-color-neutral-05);
      user-select: none;
    }

    :host([error]) .character-counter {
      color: var(--ktg-color-danger);
    }

    .character-counter__icon {
      height: 0.75rem;
    }
  `],Ev=class extends mt{constructor(){super(...arguments),this.label="",this.max=0,this.count=0,this.error=!1}render(){let t=this.label.replace("{count}",this.count.toString()).replace("{max}",this.max.toString());return j`
      <span class="character-counter">
        ${this.renderErrorIcon()}
        <span
          class="character-counter__label"
          aria-live="polite"
        >
          ${t}
        </span>
      </span>
    `}renderErrorIcon(){return this.count>this.max?j`
        <ktg-icon
          class="character-counter__icon"
          name="warning"
          size="small"
        ></ktg-icon>
      `:j``}};i(Ev,"KTGCharacterCounterElement"),Ev.styles=Sv,o([kt({type:String})],Ev.prototype,"label",2),o([kt({type:Number})],Ev.prototype,"max",2),o([kt({type:Number})],Ev.prototype,"count",2),o([kt({type:Boolean,reflect:!0})],Ev.prototype,"error",2),Ev=o([ft("ktg-character-counter")],Ev);var Tv=class extends Event{static{i(this,"KTGTextAreaFocusEvent")}constructor(t){super("focus",t)}},Iv=class extends Event{static{i(this,"KTGTextAreaBlurEvent")}constructor(t){super("blur",t)}};re([...le,d`
    /* Host */
    /* ---------------------------------------------------------------------  */
    ktg-text-area {
      display: inline-block;
    }

    ktg-text-area[disabled] {
      --ktg-text-area-leading-icon-color: var(--ktg-color-neutral-04);
      --ktg-text-area-trailing-icon-color: var(--ktg-color-neutral-04);
    }

    /* Wrapper */
    /* ---------------------------------------------------------------------  */
    .ktg-text-area {
      display: flex;
      flex-direction: column;
      gap: 0.3125rem;
    }

    /* Control */
    /* ---------------------------------------------------------------------  */
    .ktg-text-area__control {
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;
      cursor: text;
    }

    ktg-text-area[appearance='white'] .ktg-text-area__control {
      background-color: var(--ktg-color-background-01);
    }

    ktg-text-area[appearance='grey'] .ktg-text-area__control {
      background-color: var(--ktg-color-neutral-01);
    }

    ktg-text-area[disabled] .ktg-text-area__control {
      background-color: var(--ktg-color-neutral-02);
      color: var(--ktg-color-neutral-04);
    }

    ktg-text-area[readonly] .ktg-text-area__control {
      background-color: var(--ktg-color-neutral-02);
    }

    /* Border */
    /* ---------------------------------------------------------------------  */
    .ktg-text-area__border {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-bottom: 0.0625rem solid var(--ktg-color-brand1-01);
      pointer-events: none;
    }

    .ktg-text-area--focused .ktg-text-area__border {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: -0.125rem;
      border: 0;
    }

    ktg-text-area[error] .ktg-text-area__border,
    .ktg-text-area--value-too-long .ktg-text-area__border {
      border: 0.0625rem solid var(--ktg-color-danger);
    }

    ktg-text-area[error] .ktg-text-area--focused .ktg-text-area__border,
    .ktg-text-area--value-too-long.ktg-text-area--focused
      .ktg-text-area__border {
      outline: 0.125rem solid var(--ktg-color-danger);
      border: 0;
    }

    ktg-text-area[disabled] .ktg-text-area__border {
      border: none;
    }

    ktg-text-area[readonly] .ktg-text-area__border {
      border: 0;
    }

    /* Input */
    /* ---------------------------------------------------------------------  */
    .ktg-text-area__textarea {
      width: 100%;
      border: none;
      background-color: transparent;
      font-style: normal;
      font-family: var(--ktg-font-sans-serif);
      font-weight: var(--ktg-font-weight-default);
      font-size: 1rem;
      line-height: 1.125rem;
      outline: none;
      padding-top: 0.6875rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 0.6875rem;
      resize: none;
      min-height: var(--ktg-text-area-min-height, none);
      max-height: var(--ktg-text-area-max-height, none);
      color: var(--ktg-color-text);
    }

    ktg-text-area[error] .ktg-text-area__textarea,
    .ktg-text-area--value-too-long .ktg-text-area__textarea {
      color: var(--ktg-color-danger);
    }

    ktg-text-area[disabled] .ktg-text-area__textarea {
      color: var(--ktg-color-neutral-04);
    }

    .ktg-text-area__textarea::placeholder {
      /* opacity for Firefox */
      opacity: 1;
      color: var(--ktg-color-neutral-04);
      user-select: none;
    }

    @media screen and (min-width: ${Ke}px) {
      .ktg-text-area__textarea {
        padding-left: 1rem;
        padding-right: 1.125rem;
      }
    }

    .ktg-text-area__counter {
      display: flex;
      justify-content: flex-end;
    }
  `]);var $v=class extends(md(mt)){constructor(){super(),this.MAX_LENGTH_DESCRIPTION_ID="max-length-description-"+ ++$v.idCounter,this.form=null,this.describedby="",this.textareaFocused=!1,this.valueTooLong=!1,this.inputId="",this.appearance="white",this.placeholder="",this.value="",this.name="",this.required=!1,this.maxLength=null,this.maxLengthLabel="Maximal {max} Zeichen erlaubt",this.counterLabel="{count} / {max} Zeichen",this.rows=null,this.autofocus=!1,this.onFormReset=()=>{this.value=""},this.intersectionObserver=new IntersectionObserver(t=>{for(let e of t)e.isIntersecting&&this.updateHeight()})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.form=this.closest("form"),this.form&&this.form.addEventListener("reset",this.onFormReset),this.intersectionObserver.observe(this)}willUpdate(t){super.willUpdate(t),(t.has("value")||t.has("maxLength"))&&(this.maxLength&&this.value.length>this.maxLength?this.valueTooLong=!0:this.valueTooLong=!1),t.has("error")&&this.updateDescribedBy()}updated(t){super.updated(t),this.valueTooLong?this.textarea.setCustomValidity(`This text cannot be longer than ${this.maxLength} characters.`):this.textarea.setCustomValidity(""),(t.has("value")||t.has("rows"))&&this.updateHeight()}firstUpdated(t){super.firstUpdated(t),this.setInitialHeight()}disconnectedCallback(){super.disconnectedCallback(),this.form&&this.form.removeEventListener("reset",this.onFormReset),this.intersectionObserver.unobserve(this)}focus(t){this.textarea.focus(t)}onFocus(){this.textareaFocused=!0,this.dispatchEvent(new Tv({bubbles:!1,cancelable:!1}))}onBlur(){this.textareaFocused=!1,this.dispatchEvent(new Iv({bubbles:!1,cancelable:!1}))}onInput(){this.value=this.textarea.value,this.textarea.checkValidity()}onChange(){this.value=this.textarea.value,this.textarea.checkValidity()}updateDescribedBy(){this.error?this.describedby=this.errorId:this.hintId?this.describedby=this.hintId:this.maxLength?this.describedby=this.MAX_LENGTH_DESCRIPTION_ID:this.describedby=""}async setInitialHeight(){let t=this.parentElement,e=this.nextElementSibling,i=this.style.visibility,o=this.style.position;document.body.appendChild(this),this.style.visibility="hidden",this.style.position="absolute",await this.updateHeight(),this.style.visibility=i,this.style.position=o,t&&(e?t.insertBefore(this,e):t.appendChild(this))}async updateHeight(){this.textarea.style.height="",this.textarea.style.height=`${this.textarea.scrollHeight}px`}render(){return j`
      <div
        class=${ai({"ktg-text-area":!0,"ktg-text-area--focused":this.textareaFocused,"ktg-text-area--value-too-long":this.valueTooLong})}
      >
        <div class="ktg-text-area__control">
          <div class="ktg-text-area__border"></div>

          <textarea
            class="ktg-text-area__textarea"
            id=${this.inputId}
            ?disabled=${this.disabled}
            placeholder=${this.placeholder}
            name=${this.name}
            .value=${this.value}
            ?required=${this.required}
            ?autofocus=${this.autofocus}
            rows=${fi(this.rows)}
            title=${this.label}
            aria-describedby=${this.describedby}
            aria-label=${this.label}
            aria-labelledby=${fi(this.labelledBy)}
            aria-invalid=${this.error}
            ?readonly=${this.readonly}
            @focus=${this.onFocus}
            @input=${this.onInput}
            @change=${this.onChange}
            @blur=${this.onBlur}
          ></textarea>
        </div>

        ${this.renderCounter()}
      </div>
    `}renderCounter(){return this.maxLength?j`
      <div class="ktg-text-area__counter">
        ${this.renderMaxLengthDescription()}
        <ktg-character-counter
          aria-hidden="true"
          .count=${this.value.length}
          .max=${this.maxLength}
          .label=${this.counterLabel}
          .error=${this.valueTooLong}
        ></ktg-character-counter>
      </div>
    `:j``}renderMaxLengthDescription(){let t=this.maxLengthLabel.replace("{max}",(this.maxLength??0).toString());return j`
      <span
        class="ktg-visually-hidden"
        id=${this.MAX_LENGTH_DESCRIPTION_ID}
      >
        ${t}
      </span>
    `}};i($v,"KTGTextAreaElement"),$v.idCounter=-1,o([wt()],$v.prototype,"describedby",2),o([wt()],$v.prototype,"textareaFocused",2),o([wt()],$v.prototype,"valueTooLong",2),o([kt({type:String,reflect:!0,attribute:"input-id"})],$v.prototype,"inputId",2),o([kt({type:String,reflect:!0})],$v.prototype,"appearance",2),o([kt({type:String})],$v.prototype,"placeholder",2),o([kt({type:String})],$v.prototype,"value",2),o([kt({type:String})],$v.prototype,"name",2),o([kt({type:Boolean,reflect:!0})],$v.prototype,"required",2),o([kt({type:Number,attribute:"maxlength"})],$v.prototype,"maxLength",2),o([kt({type:String,attribute:"maxlength-label"})],$v.prototype,"maxLengthLabel",2),o([kt({type:String,attribute:"counter-label"})],$v.prototype,"counterLabel",2),o([kt({type:Number,attribute:"rows"})],$v.prototype,"rows",2),o([kt({type:Boolean,reflect:!0})],$v.prototype,"autofocus",2),o([Ct(".ktg-text-area__textarea")],$v.prototype,"textarea",2),$v=o([ft("ktg-text-area")],$v),re([d`
    ktg-toggle {
      display: inline-block;
    }

    .ktg-toggle-input {
      position: absolute;
      cursor: pointer;
      overflow: hidden;
      z-index: 1;
      opacity: 0;
      width: 2.5rem;
      height: 1.5rem;
      border-radius: 1.5rem;
    }
    .ktg-toggle-input:disabled {
      cursor: default;
    }

    .ktg-toggle {
      position: relative;
      width: 2.5rem;
      height: 1.5rem;
      border-radius: 1.5rem;
      overflow: hidden;
    }
    .ktg-toggle-input:focus-visible + .ktg-toggle {
      outline: 0.125rem solid var(--ktg-color-focus);
    }

    .ktg-toggle__background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--ktg-color-neutral-04);
      transition: background-color ease-out 0.2s;
    }

    @media (prefers-reduced-motion: reduce) {
      .ktg-toggle__background {
        transition: none;
      }
    }

    ktg-toggle[checked] .ktg-toggle__background {
      background-color: var(--ktg-color-brand1-01);
    }
    ktg-toggle[disabled] .ktg-toggle__background {
      background-color: var(--ktg-color-neutral-02);
    }

    .ktg-toggle__icon {
      position: absolute;
      left: 0.25rem;
      top: 0.25rem;
      color: var(--ktg-color-dark-contrast);
      transform: translateY(-0.0625rem);
    }
    ktg-toggle[disabled] .ktg-toggle__icon {
      color: var(--ktg-color-neutral-04);
    }

    .ktg-toggle__switch {
      position: absolute;
      top: 0.25rem;
      left: 0.25rem;
      width: 1rem;
      height: 1rem;
      background-color: var(--ktg-color-background-01);
      border-radius: 50%;
      transition: transform ease-out 0.2s;
    }

    @media (prefers-reduced-motion: reduce) {
      .ktg-toggle__switch {
        transition: none;
      }
    }

    ktg-toggle[checked] .ktg-toggle__switch {
      transform: translateX(100%);
    }
    ktg-toggle[disabled] .ktg-toggle__switch {
      background-color: var(--ktg-color-neutral-04);
    }
  `]);var Ov=class extends mt{constructor(){super(...arguments),this.hasParentLabel=!1,this.label=null,this.labelledBy=null,this.checked=!1,this.disabled=!1,this.readonly=!1,this.inputId="",this.inputTabindex=0,this.name="",this.value="",this.required=!1,this.autofocus=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.hasParentLabel=null!==this.closest("label, ktg-labelled-choice"),this.checkAndSetImplicitSlot()}checkAndSetImplicitSlot(){this.closest("ktg-labelled-choice")&&(this.slot="input")}updated(t){t.has("checked")&&(this.input.checked=this.checked)}onLabelClick(){this.focus(),this.input.click()}onClick(t){if(this.readonly)return void t.preventDefault();t.stopImmediatePropagation(),t.stopPropagation();let e=!0;this.hasParentLabel||(e=this.dispatchEvent(new MouseEvent(t.type,t)),e||t.preventDefault())}onCheckedChange(t){t.stopImmediatePropagation(),t.stopPropagation(),this.checked=this.input.checked,this.dispatchEvent(new InputEvent(t.type,t))}focus(){this.input.focus()}render(){return j`
      <input
        class="ktg-toggle-input"
        type="checkbox"
        .id=${this.inputId}
        .name=${this.name}
        .value=${this.value}
        .required=${this.required}
        .disabled=${this.disabled}
        .autofocus=${this.autofocus}
        tabindex=${this.inputTabindex}
        aria-labelledby=${fi(this.labelledBy)}
        aria-label=${fi(this.label)}
        title=${fi(this.label)}
        @click=${this.onClick}
        @input=${this.onCheckedChange}
        @change=${this.onCheckedChange}
      />

      <div class="ktg-toggle">
        <div class="ktg-toggle__background"></div>

        <ktg-icon
          class="ktg-toggle__icon"
          name="check-small"
        ></ktg-icon>

        <div class="ktg-toggle__switch"></div>
      </div>
    `}};i(Ov,"KTGToggleElement"),o([kt({type:String})],Ov.prototype,"label",2),o([kt({type:String,attribute:!1})],Ov.prototype,"labelledBy",2),o([kt({type:Boolean,reflect:!0})],Ov.prototype,"checked",2),o([kt({type:Boolean,reflect:!0})],Ov.prototype,"disabled",2),o([kt({type:Boolean,reflect:!0})],Ov.prototype,"readonly",2),o([kt({type:String,attribute:"input-id"})],Ov.prototype,"inputId",2),o([kt({type:Number,attribute:"input-tabindex"})],Ov.prototype,"inputTabindex",2),o([kt({type:String})],Ov.prototype,"name",2),o([kt({type:String})],Ov.prototype,"value",2),o([kt({type:Boolean,reflect:!0})],Ov.prototype,"required",2),o([kt({type:Boolean,reflect:!0})],Ov.prototype,"autofocus",2),o([Ct(".ktg-toggle-input")],Ov.prototype,"input",2),Ov=o([ft("ktg-toggle")],Ov);var Lv=[...ae,...ne,d`
    :host {
      display: inline-block;
      width: 100%;
    }

    :host([disabled]) {
      position: relative;
      z-index: 1;
    }

    .vertical-navigation-item {
      list-style: none;
      border-bottom: 0.0625rem solid var(--ktg-color-neutral-02);
      color: var(--ktg-color-text);
      background-color: var(
        --ktg-vertical-navigation-item-background-color,
        var(--ktg-color-background-01)
      );
    }

    :host(:last-child) .vertical-navigation-item {
      border-bottom: none;
    }

    :host([disabled]) .vertical-navigation-item {
      color: var(--ktg-color-neutral-03);
    }

    .vertical-navigation-item__button {
      position: relative;
      display: inline-flex;
      align-items: center;
      width: 100%;
      border: 0;
      outline: 0;
      font-family: inherit;
      font-weight: inherit;
      font-size: 1rem;
      text-decoration: none;
      color: var(--ktg-color-text);
      background: transparent;
      user-select: none;
      cursor: pointer;
    }

    :host([disabled]) .vertical-navigation-item__button {
      color: var(--ktg-color-neutral-03);
      cursor: default;
    }

    .vertical-navigation-item__button:focus-visible {
      outline: 0.125rem solid var(--ktg-color-focus);
      outline-offset: -0.125rem;
    }

    .vertical-navigation-item__decoration-container {
      display: block;
      position: absolute;
      height: 100%;
      width: 0.5rem;
      overflow: hidden;
      top: 0;
      left: 0;
    }

    .vertical-navigation-item__button:focus-visible
      .vertical-navigation-item__decoration-container {
      top: 0.125rem;
      left: 0.125rem;
      width: 0.375rem;
      height: calc(100% - 0.25rem);
    }

    .vertical-navigation-item__decoration {
      display: block;
      height: 100%;
      width: 100%;
      background-color: var(--ktg-color-brand3-01);
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }

    .vertical-navigation-item:hover .vertical-navigation-item__decoration {
      opacity: 1;
    }

    .vertical-navigation-item--inside-list:hover
      .vertical-navigation-item__decoration {
      opacity: 0;
    }

    :host([selected]) .vertical-navigation-item__decoration {
      opacity: 1;
    }

    :host([disabled]) .vertical-navigation-item__decoration {
      background-color: var(--ktg-color-neutral-03);
    }

    .vertical-navigation-item__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding-top: 0.9375rem;
      padding-bottom: 0.9375rem;
      margin-left: 1rem;
      text-align: left;
    }

    .vertical-navigation-item__icon {
      display: flex;
      flex-direction: row;
      color: var(--ktg-color-link);
      padding-right: 0.5rem;
      gap: 0.5rem;
    }

    .vertical-navigation-item__icon__label {
      font-size: 0.875rem;
      line-height: 1rem;
    }

    .vertical-navigation-item__icon--danger {
      color: var(--ktg-color-danger);
    }

    :host([disabled]) .vertical-navigation-item__icon--danger,
    :host([disabled]) .vertical-navigation-item__icon {
      color: var(--ktg-color-neutral-03);
    }
  `],Dv=class extends mt{constructor(){super(...arguments),this.isInsideList=!1,this.href="",this.selected=!1,this.disabled=!1,this.loading=!1,this.icon="",this.label="",this.iconAppearance="default"}connectedCallback(){super.connectedCallback(),this.isInsideList=!!this.closest("ktg-vertical-navigation")}render(){let t=this.href?this.renderAsLink():this.renderAsButton();return j`
      <div
        class=${ai({"vertical-navigation-item":!0,"vertical-navigation-item--inside-list":this.isInsideList})}
      >
        ${t}
      </div>
    `}renderAsLink(){let t=!!this.disabled||null,e=this.href&&!t?this.href:null;return j`
      <a
        class="vertical-navigation-item__button"
        role="link"
        aria-disabled=${fi(t)}
        href=${fi(e)}
      >
        ${this.renderInner()}
      </a>
    `}renderAsButton(){return j`
      <button
        class="vertical-navigation-item__button"
        type="button"
        ?disabled=${this.disabled}
      >
        ${this.renderInner()}
      </button>
    `}renderInner(){return j`
      <span class="vertical-navigation-item__decoration-container">
        <span class="vertical-navigation-item__decoration"></span>
      </span>

      <span class="vertical-navigation-item__content">
        <slot></slot>

        ${this.renderIconOrLoadingSpinner()}
      </span>
    `}renderIconOrLoadingSpinner(){return this.loading?this.renderIcon("loader-spinner","","default",!0):this.renderIcon(this.icon,this.label,this.iconAppearance,!1)}renderIcon(t,e,i,o){return t||e?j`
      <span
        class=${ai({"vertical-navigation-item__icon":!0,"vertical-navigation-item__icon--danger":"danger"===i})}
        aria-hidden="true"
      >
        ${si(e,()=>j`<span class="vertical-navigation-item__icon__label"
              >${e}</span
            >`,()=>j``)}
        ${si(t,()=>j`<ktg-icon
              name=${t}
              ?loading=${o}
            ></ktg-icon>`,()=>j``)}
      </span>
    `:j``}};i(Dv,"KTGVerticalNavigationItemElement"),Dv.styles=Lv,Dv.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},o([wt()],Dv.prototype,"isInsideList",2),o([kt({type:String})],Dv.prototype,"href",2),o([kt({type:Boolean,reflect:!0})],Dv.prototype,"selected",2),o([kt({type:Boolean,reflect:!0})],Dv.prototype,"disabled",2),o([kt({type:Boolean,reflect:!0})],Dv.prototype,"loading",2),o([kt({type:String})],Dv.prototype,"icon",2),o([kt({type:String})],Dv.prototype,"label",2),o([kt({type:String,attribute:"icon-appearance"})],Dv.prototype,"iconAppearance",2),Dv=o([ft("ktg-vertical-navigation-item")],Dv);var Av=[...ae,...ne,d`
    :host {
      display: block;
      width: 100%;
    }

    .vertical-navigation__content-title {
      display: block;
      font-size: 0.75rem;
      padding-left: 1rem;
      margin-bottom: 0.5rem;
      color: var(--ktg-color-text);
    }

    .vertical-navigation__content-title:empty {
      display: none;
    }

    .vertical-navigation__content {
      list-style: none;
    }

    .vertical-navigation__main {
      position: relative;
    }

    .vertical-navigation__decoration-track {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0.5rem;
      overflow: hidden;
      pointer-events: none;
    }

    .vertical-navigation__decoration {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      transform-origin: top center;
      transform: scaleY(0);
    }

    .decoration__inner {
      height: 100%;
      width: 100%;
      background-color: var(--ktg-color-brand3-01);
    }
  `],Mv=class extends mt{constructor(){super(...arguments),this.highlightBarAnimationController=new Jt(this,"vertical"),this.contentTitle=""}firstUpdated(t){super.firstUpdated(t),this.highlightBarAnimationController.setMainElement(this.mainElement),this.highlightBarAnimationController.setDecorationElement(this.decorationElement),this.highlightBarAnimationController.firstUpdated()}onSlotChange(){this.highlightBarAnimationController.setItems(this.items)}render(){return j`
      <nav
        class="vertical-navigation"
        aria-label=${this.contentTitle}
      >
        <span
          class="vertical-navigation__content-title"
          aria-hidden="true"
        >
          ${this.contentTitle}
        </span>

        <div class="vertical-navigation__main">
          <div class="vertical-navigation__decoration-track">
            <div class="vertical-navigation__decoration">
              <div class="decoration__inner"></div>
            </div>
          </div>

          <div class="vertical-navigation__content">
            <slot @slotchange=${this.onSlotChange}></slot>
          </div>
        </div>
      </nav>
    `}};i(Mv,"KTGVerticalNavigationElement"),Mv.styles=Av,o([kt({type:String,attribute:"content-title"})],Mv.prototype,"contentTitle",2),o([Ct(".vertical-navigation__main")],Mv.prototype,"mainElement",2),o([Ct(".vertical-navigation__decoration")],Mv.prototype,"decorationElement",2),o([Et({selector:"ktg-vertical-navigation-item",flatten:!0})],Mv.prototype,"items",2),Mv=o([ft("ktg-vertical-navigation")],Mv)})();var r=i(72),a=i.n(r),s=i(825),l=i.n(s),c=i(659),d=i.n(c),h=i(56),u=i.n(h),p=i(540),g=i.n(p),m=i(113),v=i.n(m),f=i(472),b={};b.styleTagTransform=v(),b.setAttributes=u(),b.insert=d().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=g(),a()(f.A,b),f.A&&f.A.locals&&f.A.locals;var y=new Shiny.InputBinding;n().extend(y,{find:t=>n()(t).find(".tg_headerBinding"),getValue:t=>parseInt(n()(t).text()),setValue:(t,e)=>{n()(t).text(e)},subscribe:(t,e)=>{n()(t).on("change.tg_headerBinding",function(t){e()})},unsubscribe:t=>{n()(t).off(".tg_headerBinding")}}),Shiny.inputBindings.register(y,"tg.shiny.tg_headerBinding"),n()(document).on("shiny:sessioninitialized",()=>{document.documentElement.lang="de";const t=document.querySelector("ktg-header-video-background");if(!t||t.videoElement)return;const e=t.querySelector("video");e&&(t.videoElement=e,e.addEventListener("play",()=>{t.isPlaying=!0}),e.addEventListener("pause",()=>{t.isPlaying=!1}),e.addEventListener("ended",()=>{t.isPlaying=!1}),t.isPlaying=!e.paused)})})();