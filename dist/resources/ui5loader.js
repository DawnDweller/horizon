/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
(function(e){"use strict";function t(e){const t=e.search(/[?#]/);return t<0?e:e.slice(0,t)}function n(e,r){r=t(r?n(r):document.baseURI);return new URL(e,r).href}function r(){}function i(e,t){Object.keys(e).forEach(n=>t(n,e[n]))}function s(e){setTimeout(e,0)}function o(e){Promise.resolve().then(e)}const a=[];function u(e,t){a.push({level:e,message:t})}let l={debug:u.bind(this,"debug"),info:u.bind(this,"info"),warning:u.bind(this,"warning"),error:u.bind(this,"error"),isLoggable:r};let f=r;let c;let d;let g=s;const h=true;let p=false;let m=false;let b=0;const y="./";let w;let v;const x=Object.create(null);x[""]={url:y,absoluteUrl:n(y)};const E=Object.create(null);const $=Object.create(null);const j=Object.create(null);let A=false;let L;function q(e){if(L){if(L(e)){return true}else{return false}}else{return A}}const I=Object.create(null);let D=null;const O=[];let M="";let T=0;const U=-1;let R=U;let k=Date.now()+R;let _;let P;function S(){if(_==null){k=Date.now()+R}}function C(e){e=Number(e);const t=k-R;R=e>=-1?e:U;if(_==null){k=t+R}}function N(){if(_==null){_=new Promise(function(e){if(P==null){P=new MessageChannel;P.port2.start()}P.port2.addEventListener("message",function(){setTimeout(function(){_=null;k=Date.now()+R;e()},0)},{once:true});P.port1.postMessage(null)})}return _}function W(e){if(R<0){return e}return function(){if(_==null){e.call(undefined,arguments[0]);if(Date.now()>=k){N()}return}_.then(W(e).bind(undefined,arguments[0]))}}function J(e){if(!/\.js$/.test(e)){return undefined}e=e.slice(0,-3);if(/^jquery\.sap\./.test(e)){return e}return e.replace(/\//g,".")}function F(e){const t=e.lastIndexOf("/");const n=e.lastIndexOf(".");if(n>t){return{id:e.slice(0,n),type:e.slice(n)}}return{id:e,type:""}}const G=/(\.controller|\.fragment|\.view|\.designtime|\.support)?.js$/;function X(e){const t=G.exec(e);if(t){return{baseID:e.slice(0,t.index),subType:t[0]}}}const B=/(?:^|\/)\.+(?=\/|$)/;const H=/^\.*$/;function Y(e,t){const n=e.search(B);if(n<0){return e}if(n===0){if(t==null){throw new Error("relative name not supported ('"+e+"'")}e=t.slice(0,t.lastIndexOf("/")+1)+e}const r=e.split("/");let i=0;const s=r.length;for(let t=0;t<s;t++){const n=r[t];if(H.test(n)){if(n==="."||n===""){continue}else if(n===".."){if(i===0){throw new Error("Can't navigate to parent of root ('"+e+"')")}i--}else{throw new Error("Illegal path segment '"+n+"' ('"+e+"')")}}else{r[i++]=n}}r.length=i;return r.join("/")}function z(e,r){e=String(e||"");if(r==null){if(e){if(x[e]){delete x[e];l.info(`registerResourcePath ('${e}') (registration removed)`)}return}r=y;l.info(`registerResourcePath ('${e}') (default registration restored)`)}r=t(String(r));if(r.slice(-1)!=="/"){r+="/"}x[e]={url:r,absoluteUrl:n(r)}}function K(e,t){let n=e;let r=e.length;while(r>0&&!x[n]){r=n.lastIndexOf("/");n=r>0?n.slice(0,r):""}f((r>0||n==="")&&x[n],"there always must be a mapping");let i=x[n].url+e.slice(r+1);if(i.slice(-1)==="/"){i=i.slice(0,-1)}return i+(t||"")}function Q(){return b}function V(e,r){e=t(n(e));for(const t in x){const n=x[t].absoluteUrl.slice(0,-1);if(e.startsWith(n)){let i=t+e.slice(n.length);if(i.charAt(0)==="/"){i=i.slice(1)}if(!r||I[i]?.data!=undefined){return i}}}}function Z(e){let t,n;if(e!=null){e=F(e).id;t=e.length;n=E[e];while(t>0&&n==null){t=e.lastIndexOf("/");if(t>0){e=e.slice(0,t);n=E[e]}}}return n||E["*"]}function ee(e,t){const n=Z(t);e=Y(e,t);if(n!=null){let t=F(e).id;let r=t.length;while(r>0&&n[t]==null){r=t.lastIndexOf("/");t=r>0?t.slice(0,r):""}if(r>0){const i=n[t]+e.slice(r);if(l.isLoggable()){l.debug(`module ID ${e} mapped to ${i}`)}return i}}return e}function te(e,t,n,r){for(let i=0;e&&i<n;i++){if(!e[t[i]]&&r){e[t[i]]={}}e=e[t[i]]}return e}function ne(t){const n=t?t.split("."):[];if(b&&n.length>1){l.error("[nosync] getGlobalProperty called to retrieve global name '"+t+"'")}return te(e,n,n.length)}function re(t,n){const r=t?t.split("."):[];if(r.length>0){const t=te(e,r,r.length-1,true);t[r[r.length-1]]=n}}function ie(e){return{moduleExport:e}}function se(e){return e.moduleExport}const oe=0,ae=-1,ue=1,le=2,fe=3,ce=4,de=5,ge={};class he{constructor(e){this.name=e;this.state=oe;this.settled=false;this.url=this._deferred=this.data=this.group=this.error=this.pending=null;this.content=ge}deferred(){if(this._deferred==null){const e=this._deferred={};e.promise=new Promise(function(t,n){e.resolve=t;e.reject=n});e.promise.catch(r)}return this._deferred}api(){this._api??={id:this.name.slice(0,-3),exports:this._exports={},url:this.url,config:r};return this._api}ready(e){f(!this.settled,`Module ${this.name} is already settled`);this.state=ce;this.settled=true;if(arguments.length>0){this.content=e}this.deferred().resolve(ie(this.value()));if(this.aliases){e=this.value();this.aliases.forEach(t=>he.get(t).ready(e))}}failWith(e,t){const n=ve(e,this,t);this.fail(n);return n}fail(e){f(!this.settled,`Module ${this.name} is already settled`);this.settled=true;if(this.state!==de){this.state=de;this.error=e;this.deferred().reject(e);this.aliases?.forEach(t=>he.get(t).fail(e))}}addPending(e){(this.pending??=[]).push(e)}addAlias(e){(this.aliases??=[]).push(e);he.get(e).addPending(this.name)}preload(e,t,n){if(this.state===oe&&!L?.(this.name)){this.state=ae;this.url=e;this.data=t;this.group=n}return this}value(){if(this.state===ce){if(this.content===ge){const e=$[this.name],t=e&&(Array.isArray(e.exports)?e.exports[0]:e.exports);this.content=ne(t||J(this.name))}return this.content}return undefined}dependsOn(e){const t=e.name,n=Object.create(null),r=l.isLoggable()?[this.name,t]:undefined;function i(e){if(!n[e]){n[e]=true;const s=I[e]?.pending;if(Array.isArray(s)&&(s.includes(t)||s.some(i))){r?.push(e);return true}}return false}const s=this.name===t||i(this.name);if(s&&r){l.error("Dependency cycle detected: ",r.reverse().map((e,t)=>`${"".padEnd(t)} -> ${e}`).join("\n").slice(4))}return s}static get(e){const t=I[e]??=new he(e);return t}}function pe(){if(O.length>0){return O[O.length-1].name}return document.currentScript?.getAttribute("data-sap-ui-module")}let me,be;function ye(e){if(me===e){return}if(me){me.amd=be;me=be=undefined}me=e;if(e&&!e.ui5){be=me.amd;Object.defineProperty(me,"amd",{get:function(){const e=pe();if(e&&$[e]?.amd){l.debug(`suppressing define.amd for ${e}`);return undefined}return be},set:function(e){be=e;l.debug(`define.amd became ${e?"active":"unset"}`)},configurable:true})}}try{Object.defineProperty(e,"define",{get:function(){return me},set:function(e){ye(e);l.debug(`define became ${e?"active":"unset"}`)},configurable:true})}catch(e){l.warning("could not intercept changes to window.define, ui5loader won't be able to a change of the AMD loader")}ye(e.define);function we(e){return e?.name==="ModuleError"}function ve(e,t,n){let r=`'${t.name}'`;if(we(n)){r+=`\n -> ${n._modules.replace(/ -> /g,"  -> ")}`;if(e===n._template){n=n.cause}}const i=e.replace(/\{id\}/,r).replace(/\{url\}/,t.url)+(n?": "+n.message:"");const s=new Error(i);s.name="ModuleError";s.cause=n;if(n?.stack){s.stack=s.stack+"\nCaused by: "+n.stack}s._template=e;s._modules=r;return s}function xe(e,t){f(/\.js$/.test(e),"must be a Javascript module");const n=he.get(e);if(n.state>oe){return n}if(l.isLoggable()){l.debug(`${M}declare module '${e}'`)}n.state=ce;n.deprecation=t||undefined;return n}function Ee(e,t){he.get(e).ready(t)}function $e(e){let t=[],n=0,r;this.push=function(i,s,o,a){if(l.isLoggable()){l.debug(M+"pushing define() call"+(document.currentScript?" from "+document.currentScript.src:"")+" to define queue #"+n)}const u=document.currentScript?.getAttribute("data-sap-ui-module");t.push({name:i,deps:s,factory:o,_export:a,guess:u});if(!r&&!e&&u==null){r=setTimeout(this.process.bind(this,null,"timer"))}};this.clear=function(){t=[];if(r){clearTimeout(r);r=null}};this.process=function(e,r){const i=l.isLoggable();const s=t;const o=n++;let a=null;this.clear();if(e?.execError){if(i){l.debug(`module execution error detected, ignoring queued define calls (${s.length})`)}e.fail(e.execError);return}a=e?.name;s.forEach(t=>{if(t.name==null){if(a!=null){t.name=a;a=null}else{if(h){const t=new Error("Modules that use an anonymous define() call must be loaded with a require() call; "+"they must not be executed via script tag or nested into other modules. ");if(e){e.fail(t)}else{throw t}}t.name=`~anonymous~${++T}.js`;l.error("Modules that use an anonymous define() call must be loaded with a require() call; "+"they must not be executed via script tag or nested into other modules. "+"All other usages will fail in future releases or when standard AMD loaders are used. "+"Now using substitute name "+t.name)}}else if(e&&t.name===e.name){if(a==null&&!h){l.error("Duplicate module definition: both, an unnamed module and a module with the expected name exist."+"This use case will fail in future releases or when standard AMD loaders are used. ")}a=null}});if(a&&s.length>0){if(i){l.debug("No queued module definition matches the ID of the request. "+`Now assuming that the first definition '${s[0].name}' is an alias of '${a}'`)}he.get(s[0].name).addAlias(a);a=null}if(i){l.debug(M+"["+r+"] "+"processing define queue #"+o+(e?" for '"+e.name+"'":"")+` with entries [${s.map(e=>`'${e.name}'`)}]`)}s.forEach(e=>{Me(e.name,e.deps,e.factory,e._export,true)});if(a!=null&&!e.settled){if(i){l.debug(M+"no queued module definition for the requested module found, assume the module to be ready")}e.data=undefined;e.ready()}if(i){l.debug(M+`processing define queue #${o} done`)}}}let je=new $e;function Ae(e){const t=new XMLHttpRequest;function n(e){e=new Error(t.statusText?t.status+" - "+t.statusText:t.status);e.name="XHRLoadError";e.status=t.status;e.statusText=t.statusText;return e}t.addEventListener("load",function(r){if(t.status===200||t.status===0){e.state=le;e.data=t.responseText}else{e.error=n()}});t.addEventListener("error",function(t){e.error=n()});t.open("GET",e.url,false);try{t.send()}catch(t){e.error=t}}window.addEventListener("error",function e(t){var n=document.currentScript?.getAttribute("data-sap-ui-module");var r=n&&he.get(n);if(r&&r.execError==null){if(l.isLoggable()){l.debug(`unhandled exception occurred while executing ${n}: ${t.message}`)}r.execError=t.error||{name:"Error",message:t.message};return false}});function Le(e,t){const n=document.createElement("SCRIPT");n["s"+"rc"]=e.url;n.setAttribute("data-sap-ui-module",e.name);function r(t){S();if(l.isLoggable()){l.debug(`JavaScript resource loaded: ${e.name}`)}n.removeEventListener("load",r);n.removeEventListener("error",i);je.process(e,"onload")}function i(s){S();n.removeEventListener("load",r);n.removeEventListener("error",i);if(t){l.warning(`retry loading JavaScript resource: ${e.name}`);n?.parentNode?.removeChild(n);e.url=t;Le(e,null);return}l.error(`failed to load JavaScript resource: ${e.name}`);e.failWith("failed to load {id} from {url}",new Error("script load error"))}if(t!==undefined){if($[e.name]?.amd){n.setAttribute("data-sap-ui-module-amd","true")}n.addEventListener("load",r);n.addEventListener("error",i)}document.head.appendChild(n)}function qe(e){const t=j[e];if(Array.isArray(t)){l.debug(`preload dependencies for ${e}: ${t}`);t.forEach(t=>{t=ee(t,e);if(/\.js$/.test(t)){Ie(null,t,true)}})}}function Ie(e,t,n,i,s){const o=X(t);if(!o){throw new Error(`can only require Javascript module, not ${t}`)}if(t[0]=="/"){l.error("Module names that start with a slash should not be used, as they are reserved for future use.")}const a=l.isLoggable();const u=he.get(t);const f=$[t];if(u.deprecation){const t=typeof u.deprecation==="function"?u.deprecation():u.deprecation;l.error((e?"(dependency of '"+e.name+"') ":"")+t)}if(f?.deps&&!i){if(a){l.debug("require dependencies of raw module "+t)}return Oe(u,f.deps,function(){return Ie(e,t,n,true,s)},function(e){throw u.failWith("Failed to resolve dependencies of {id}",e)},n)}if(u.state===oe&&u.group&&u.group!==t&&!s){if(a){l.debug(`${M}require bundle '${u.group}' containing '${t}'`)}if(n){return Ie(null,u.group,n).catch(r).then(function(){return Ie(e,t,n,i,true)})}else{try{Ie(null,u.group,n)}catch(e){if(a){l.error(M+"require bundle '"+u.group+"' failed (ignored)")}}}}if(a){l.debug(M+"require '"+t+"'"+(e?" (dependency of '"+e.name+"')":""))}if(u.state!==oe){let r=false;if(u.state===fe&&u.data!=null&&!n&&u.async){u.state=ae;u.async=n;u.pending=null}if(u.state===ae){u.state=le;u.async=n;r=true;c&&c.start(t,"Require module "+t+" (preloaded)",["require"]);De(t,n);c&&c.end(t)}if(u.state===ce){if(!r&&a){l.debug(M+"module '"+t+"' has already been loaded (skipped).")}return n?Promise.resolve(ie(u.value())):ie(u.value())}else if(u.state===de){if(n){return u.deferred().promise}else{throw u.error}}else{if(n){if(e&&u.dependsOn(e)){if(l.isLoggable()){l.debug("cycle detected between '"+e.name+"' and '"+t+"', returning undefined for '"+t+"'")}return Promise.resolve(ie(undefined))}return u.deferred().promise}if(!n&&!u.async){if(l.isLoggable()){l.debug("cycle detected between '"+(e?e.name:"unknown")+"' and '"+t+"', returning undefined for '"+t+"'")}return ie(undefined)}l.warning("Sync request triggered for '"+t+"' while async request was already pending."+" Loading a module twice might cause issues and should be avoided by fully migrating to async APIs.")}}c&&c.start(t,"Require module "+t,["require"]);u.state=ue;u.async=n;const d=q(t)?["-dbg",""]:[""];if(!n){for(let e=0;e<d.length&&u.state!==le;e++){u.url=K(o.baseID,d[e]+o.subType);if(a){l.debug(M+"loading "+(d[e]?d[e]+" version of ":"")+"'"+t+"' from '"+u.url+"' (using sync XHR)")}if(b){const e="[nosync] loading module '"+u.url+"'";if(b===1){l.error(e)}else{throw new Error(e)}}Pe.load({completeLoad:r,async:false},u.url,o.baseID);Ae(u)}if(u.state===ue){u.failWith("failed to load {id} from {url}",u.error)}else if(u.state===le){De(t,n)}c&&c.end(t);if(u.state!==ce){throw u.error}return ie(u.value())}else{u.url=K(o.baseID,d[0]+o.subType);const e=d.length===2?K(o.baseID,d[1]+o.subType):u.url;if(l.isLoggable()){l.debug(M+"loading '"+t+"' from '"+u.url+"' (using <script>)")}Pe.load({completeLoad:r,async:true},e,o.baseID);Le(u,e);qe(t);return u.deferred().promise}}function De(t,r){const i=I[t];if(i&&i.state===le&&typeof i.data!=="undefined"){const s=l.isLoggable();const o=D;const a=je;let u,f;try{D=!r;je=new $e(true);if(s){if(typeof i.data==="string"){l.warning(M+"executing '"+t+"' (using eval)")}else{l.debug(M+"executing '"+t+"'")}u=M;M=M+": "}i.state=fe;O.push({name:t,used:false});if(typeof i.data==="function"){i.data.call(e)}else if(Array.isArray(i.data)){Te.apply(null,i.data)}else{f=i.data;if(f){const e=/\/\/[#@] source(Mapping)?URL=(.*)$/.exec(f);if(e&&e[1]&&/^[^/]+\.js\.map$/.test(e[2])){f=f.slice(0,e.index)+e[0].slice(0,-e[2].length)+n(e[2],i.url)}if(!e||e[1]){f+="\n//# sourceURL="+n(i.url)+"?eval"}}if(typeof d==="function"){f=d(f,t)}e.eval(f)}je.process(i,"after eval")}catch(e){i.data=undefined;if(we(e)){i.fail(e)}else{if(e instanceof SyntaxError&&f){if(L){i.url=URL.createObjectURL(new Blob([f],{type:"text/javascript"}));Le(i)}else{l.error("A syntax error occurred while evaluating '"+t+"'"+", restarting the app with sap-ui-debug=x might reveal the error location")}}i.failWith("Failed to execute {id}",e)}}finally{O.pop();if(s){M=u;l.debug(M+"finished executing '"+t+"'")}je=a;D=o}}}function Oe(e,t,n,r,i){const s=[];let o,a;try{if(e instanceof he){o=e.name}else{o=e;e=null}t=t.slice();for(let e=0;e<t.length;e++){t[e]=ee(t[e]+".js",o)}if(e){t.forEach(t=>{if(!/^(require|exports|module)\.js$/.test(t)){e.addPending(t)}})}for(let n=0;n<t.length;n++){const r=t[n];if(e){switch(r){case"require.js":s[n]=ie(Re(o,true));break;case"module.js":s[n]=ie(e.api());break;case"exports.js":e.api();s[n]=ie(e._exports);break;default:break}}if(!s[n]){s[n]=Ie(e,r,i)}}}catch(e){a=e}if(i){const e=a?Promise.reject(a):Promise.all(s);return e.then(n,r)}else{if(a){r(a)}else{return n(s)}}}function Me(t,n,r,i,s){const o=l.isLoggable();t=Y(t);if(o){l.debug(M+"define('"+t+"', "+"['"+n.join("','")+"']"+")")}const a=xe(t);let u=false;function f(){if(a.settled){if(a.state>=ce&&s&&a.async===false){l.warning("Repeated module execution skipped after async/sync conflict for "+a.name);return true}if(h&&s){l.warning("Module '"+a.name+"' has been defined more than once. "+"All but the first definition will be ignored, don't try to define the same module again.");return true}if(!u){l.error("Module '"+a.name+"' is executed more than once. "+"This is an unsupported scenario and will fail in future versions of UI5 or "+"when a standard AMD loader is used. Don't define the same module again.");u=true}}}if(f()){return}a.content=undefined;function c(n){if(f()){return}if(o){l.debug(M+"define('"+t+"'): dependencies resolved, calling factory "+typeof r)}if(i&&b!==2){const n=t.split("/");if(n.length>1){te(e,n,n.length-1,true)}}if(typeof r==="function"){try{n=n.map(se);let t=r.apply(e,n);if(a._api?.exports!==undefined&&a._api.exports!==a._exports){t=a._api.exports}else if(t===undefined&&a._exports){t=a._exports}a.content=t}catch(e){const t=a.failWith("failed to execute module factory for '{id}'",e);if(s){return}throw t}}else{a.content=r}if(i&&b!==2){if(a.content==null){l.error(`Module '${t}' returned no content, but should export to global?`)}else{if(o){l.debug(`exporting content of '${t}': as global object`)}const e=J(t);re(e,a.content)}}a.ready()}Oe(a,n,s&&a.data?W(c):c,function(e){const t=a.failWith("Failed to resolve dependencies of {id}",e);if(!s){throw t}},s)}function Te(e,t,n,r){let i;if(typeof e==="string"){i=e+".js"}else{r=n;n=t;t=e;i=null}if(!Array.isArray(t)){r=n;n=t;if(typeof n==="function"&&n.length>0){t=["require","exports","module"].slice(0,n.length)}else{t=[]}}if(D===false||D==null&&p){je.push(i,t,n,r);if(i!=null){const e=he.get(i);if(e.state<=oe){e.state=fe;e.async=true}}return}const s=O.length>0?O[O.length-1]:null;if(!i){if(s&&!s.used){i=s.name;s.used=true}else{i=`~anonymous~${++T}.js`;if(s){i=s.name.slice(0,s.name.lastIndexOf("/")+1)+i}l.error("Modules that use an anonymous define() call must be loaded with a require() call; "+"they must not be executed via script tag or nested into other modules. "+"All other usages will fail in future releases or when standard AMD loaders are used "+"or when ui5loader runs in async mode. Now using substitute name "+i)}}else if(s?.used&&i!==s.name){l.debug(`module names don't match: requested: ${e}, defined: ${s.name}`);he.get(s.name).addAlias(e)}Me(i,t,n,r,false)}function Ue(e,t,n){let r=arguments;const i=typeof r[r.length-1]==="boolean";if(i){r=Array.prototype.slice.call(r,0,r.length-1)}Te.apply(this,r)}Ue.amd={};Ue.ui5={};function Re(t,n){const r=function(r,i,s){f(typeof r==="string"||Array.isArray(r),"dependency param either must be a single string or an array of strings");f(i==null||typeof i==="function","callback must be a function or null/undefined");f(s==null||typeof s==="function","error callback must be a function or null/undefined");if(typeof r==="string"){const e=ee(r+".js",t);const i=he.get(e);if(i.deprecation){const e=typeof i.deprecation==="function"?i.deprecation():i.deprecation;l.error(e)}if(n&&i.state!==fe&&i.state!==ce){throw new Error("Module '"+e+"' has not been loaded yet. "+"Use require(['"+e+"']) to load it.")}return i.value()}Oe(t,r,function(t){t=t.map(se);if(typeof i==="function"){if(p){i.apply(e,t)}else{g(function(){i.apply(e,t)})}}},function(t){if(typeof s==="function"){if(p){s.call(e,t)}else{g(function(){s.call(e,t)})}}else{throw t}},p)};r.toUrl=function(e){const n=ke(ee(e,t),e);return _e(n)};return r}function ke(e,t){if(t.slice(-1)==="/"&&e.slice(-1)!=="/"){return e+"/"}return e}function _e(e){if(e.indexOf("/")===0){throw new Error(`The provided argument '${e}' may not start with a slash`)}return ke(K(e),e)}const Pe=Re(null,false);const Se=Re(null,true);function Ce(e){e=ee(e+".js");if(l.isLoggable()){l.warning(`sync require of '${e}'`)}return se(Ie(null,e,false))}function Ne(e,t,n,r){if(typeof e!=="string"){throw new Error("predefine requires a module name")}e=Y(e);he.get(e+".js").preload("<unknown>/"+e,[e,t,n,r],null)}function We(e,t,n){t=t||null;n=n||"<unknown>";for(let r in e){r=Y(r);he.get(r).preload(n+"/"+r,e[r],t)}}function Je(e){const t=[ae,oe,le,ce,de,fe,ue];const n={[ae]:"PRELOADED",[oe]:"INITIAL",[ue]:"LOADING",[le]:"LOADED",[fe]:"EXECUTING",[ce]:"READY",[de]:"FAILED"};if(e==null){e=ae}const r=l.isLoggable("INFO")?l.info.bind(l):console.info.bind(console);const i=Object.keys(I).sort();t.forEach(t=>{if(t<e){return}let s=0;r(n[t]+":");i.forEach((e,i)=>{const o=I[e];if(o.state===t){let t;if(o.state===ue){const e=o.pending?.reduce((e,t)=>{const r=he.get(t);if(r.state!==ce){e.push(t+"("+n[r.state]+")")}return e},[]);if(e?.length>0){t="waiting for "+e.join(", ")}}else if(o.state===de){t=(o.error.name||"Error")+": "+o.error.message}r("  "+(i+1)+" "+e+(t?" ("+t+")":""));s++}});if(s===0){r("  none")}})}function Fe(){const e=Object.create(null);i(x,function(t,n){e[t]=n.url});return e}function Ge(e,t,n,r){const i=[];if(t==null){t=true}if(t){for(const t in I){const n=I[t];if(n&&n.group===e){i.push(t)}}}else{if(I[e]){i.push(e)}}i.forEach(e=>{const t=I[e];if(t&&r&&e.match(/\.js$/)){re(J(e),undefined)}if(t&&(n||t.state===ae)){delete I[e]}})}function Xe(e,t){if(e){e=ee(e)}else{e=V(t,true)}const n=e&&I[e];if(n){n.state=le;return n.data}else{return undefined}}function Be(){const e=Object.create(null);i(I,function(t,n){e[t]={state:n.state,ui5:J(t)}});return e}function He(e,t){e=ee(e);const n=Ie(null,e,true).then(se);return t?n.catch(r):n}const Ye={baseUrl(e){z("",e)},paths:z,shim(e,t){if(Array.isArray(t)){t={deps:t}}$[e+".js"]=t},amd(t){t=!!t;if(m!==t){m=t;if(t){w=e.define;v=e.require;e.define=Ue;e.require=Se;p=true}else{e.define=w;e.require=v}}},async(e){if(p&&!e){throw new Error("Changing the ui5loader config from async to sync is not supported. Only a change from sync to async is allowed.")}p=!!e},bundles(e,t){e+=".js";t.forEach(t=>{he.get(t+".js").group=e})},bundlesUI5(e,t){t.forEach(t=>{he.get(t).group=e})},debugSources(e){A=!!e},depCache(e,t){j[e+".js"]=t.map(e=>e+".js")},depCacheUI5(e,t){j[e]=t},ignoreBundledResources(e){if(e==null||typeof e==="function"){L=e}},map(e,t){if(t==null){delete E[e]}else if(typeof t==="string"){E["*"][e]=t}else{E[e]||=Object.create(null);i(t,function(t,n){E[e][t]=n})}},reportSyncCalls(e){if(e===0||e===1||e===2){b=e}},noConflict(e){l.warning("Config option 'noConflict' has been deprecated, use option 'amd' instead, if still needed.");Ye.amd(!e)}};const ze={baseUrl:Ye.baseUrl,paths(e,t){z(e,n(t,K("")+"/"))},map:Ye.map,shim:Ye.shim};function Ke(e,t){function n(e,n){const r=t[e];if(typeof r==="function"){if(r.length===1){r(n)}else if(n!=null){i(n,r)}}else{l.warning(`configuration option ${e} not supported (ignored)`)}}if(e.baseUrl){n("baseUrl",e.baseUrl)}i(e,function(e,t){if(e!=="baseUrl"){n(e,t)}})}function Qe(e){if(e===undefined){return{amd:m,async:p,noConflict:!m}}Ke(e,Ye)}function Ve(e){if(e===undefined){return undefined}Ke(e,ze)}Pe.preload=We;Pe.load=function(e,t,n){};const Ze={get assert(){return f},set assert(e){f=e},get logger(){return l},set logger(e){l=e;a.forEach(({level:e,message:t})=>l[e](t))},get measure(){return c},set measure(e){c=e},get translate(){return d},set translate(e){d=e},get callbackInMicroTask(){return g===o},set callbackInMicroTask(e){g=e?o:s},get maxTaskDuration(){return R},set maxTaskDuration(e){C(e)},amdDefine:Ue,amdRequire:Se,config:Qe,declareModule(e,t){xe(Y(e),t)},defineModuleSync:Ee,dump:Je,getAllModules:Be,getModuleContent:Xe,getModuleState(e){return I[e]?I[e].state:oe},getResourcePath:K,getSyncCallBehavior:Q,getUrlPrefixes:Fe,loadJSResourceAsync:He,resolveURL:n,guessResourceName:V,toUrl:_e,unloadResources:Ge};e.sap=e.sap||{};sap.ui=sap.ui||{};sap.ui.loader={config:Qe,_:Ze};Se.config=Ve;sap.ui.define=Te;sap.ui.predefine=Ne;sap.ui.require=Pe;sap.ui.requireSync=Ce})(globalThis);
//# sourceMappingURL=ui5loader.js.map