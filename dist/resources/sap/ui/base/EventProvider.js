/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Event","./Object","sap/base/assert","sap/base/Log"],function(t,e,n,i){"use strict";var r=e.extend("sap.ui.base.EventProvider",{constructor:function(){e.call(this);this.mEventRegistry={}}});var o="EventHandlerChange";r.M_EVENTS={EventHandlerChange:o};r.prototype.attachEvent=function(t,e,i,r){var a=this.mEventRegistry;n(typeof t==="string"&&t,"EventProvider.attachEvent: sEventId must be a non-empty string");if(typeof e==="function"){r=i;i=e;e=undefined}n(typeof i==="function","EventProvider.attachEvent: fnFunction must be a function");n(!r||typeof r==="object","EventProvider.attachEvent: oListener must be empty or an object");r=r===this?undefined:r;var s=a[t];if(!Array.isArray(s)){s=a[t]=[]}s.push({oListener:r,fFunction:i,oData:e});if(a[o]){this.fireEvent(o,{EventId:t,type:"listenerAttached",listener:r,func:i,data:e})}return this};r.prototype.attachEventOnce=function(t,e,i,r){if(typeof e==="function"){r=i;i=e;e=undefined}n(typeof i==="function","EventProvider.attachEventOnce: fnFunction must be a function");var o=function(){this.detachEvent(t,o);i.apply(r||this,arguments)};o.oOriginal={fFunction:i,oListener:r,oData:e};this.attachEvent(t,e,o,undefined);return this};r.prototype.detachEvent=function(t,e,i){var r=this.mEventRegistry;n(typeof t==="string"&&t,"EventProvider.detachEvent: sEventId must be a non-empty string");n(typeof e==="function","EventProvider.detachEvent: fnFunction must be a function");n(!i||typeof i==="object","EventProvider.detachEvent: oListener must be empty or an object");var a=r[t];if(!Array.isArray(a)){return this}var s,f;i=i===this?undefined:i;for(var v=0,u=a.length;v<u;v++){if(a[v].fFunction===e&&a[v].oListener===i){s=a[v];a.splice(v,1);break}}if(!s){for(var v=0,u=a.length;v<u;v++){f=a[v].fFunction.oOriginal;if(f&&f.fFunction===e&&f.oListener===i){s=f;a.splice(v,1);break}}}if(a.length==0){delete r[t]}if(s&&r[o]){this.fireEvent(o,{EventId:t,type:"listenerDetached",listener:s.oListener,func:s.fFunction,data:s.oData})}return this};r.prototype.fireEvent=function(e,n,r,o){if(typeof n==="boolean"){o=r;r=n}var a=this,s=false,f,v,u,c,h;do{f=a.mEventRegistry[e];if(Array.isArray(f)){f=f.slice();v=new t(e,this,n);for(u=0,c=f.length;u<c;u++){h=f[u];const t=h.fFunction.call(h.oListener||a,v,h.oData);if(typeof t?.then==="function"){t.catch?.(t=>{i.error(`EventProvider.fireEvent: Event Listener for event '${e}' failed during execution.`,t)})}}o=o&&!v.bCancelBubble}a=a.getEventingParent()}while(o&&a);if(v){s=v.bPreventDefault}return r?!s:this};r.prototype.hasListeners=function(t){return!!this.mEventRegistry[t]};r.getEventList=function(t){return t.mEventRegistry};r.hasListener=function(t,e,i,r){n(typeof e==="string"&&e,"EventProvider.hasListener: sEventId must be a non-empty string");n(typeof i==="function","EventProvider.hasListener: fnFunction must be a function");n(!r||typeof r==="object","EventProvider.hasListener: oListener must be empty or an object");var o=t&&t.mEventRegistry[e];if(o){for(var a=0,s=o.length;a<s;a++){if(o[a].fFunction===i&&o[a].oListener===r){return true}}}return false};r.prototype.getEventingParent=function(){return null};r.prototype.toString=function(){if(this.getMetadata){return"EventProvider "+this.getMetadata().getName()}else{return"EventProvider"}};r.prototype.destroy=function(){this.mEventRegistry={};e.prototype.destroy.apply(this,arguments)};return r});
//# sourceMappingURL=EventProvider.js.map