/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/isPlainObject","sap/ui/base/Object","sap/ui/test/matchers/Interactable","sap/ui/test/matchers/Visible","sap/ui/test/matchers/_Enabled","sap/ui/test/matchers/_Editable","sap/ui/test/_ValidationParameters","sap/ui/test/matchers/matchers"],function(t,e,r,a,s,i,n,c){"use strict";var u=e.extend("sap.ui.test.matchers.MatcherFactory",{getStateMatchers:function(t){t=t||{};var e=[];if(t.visible!==false){if(t.enabled){e.push(new s)}if(t.editable){e.push(new i)}if(t.interactable){e.push(new r)}else{e.push(new a)}}return e},getFilteringMatchers:function(e){if(!e){return[]}var r=this._getPlainObjectMatchers(e);if(e.matchers){if(t(e.matchers)){r=r.concat(this._getPlainObjectMatchers(e.matchers))}else if(Array.isArray(e.matchers)){e.matchers.forEach(function(e){if(t(e)){r=r.concat(this._getPlainObjectMatchers(e))}else{r.push(e)}}.bind(this))}else{r=r.concat(e.matchers)}}return r},_getPlainObjectMatchers:function(t){if(!t){return[]}if(t["isMatching"]){return[t]}var e=Object.keys(n.OPA5_WAITFOR_DECORATED);var r=this._getSupportedMatchers();return Object.keys(t).filter(function(t){return e.indexOf(t)===-1}).map(function(e){if(!r[e]){throw new Error("Matcher is not supported! Matcher name: '"+e+"', arguments: '"+JSON.stringify(t[e])+"'")}var a=r[e];var s=Array.isArray(t[e])?t[e]:[t[e]];return s.map(function(t){if(Array.isArray(t)){return new function(){return a.apply(this,t)}}else{return new a(t)}})}).reduce(function(t,e){return t.concat(e)},[])},_getSupportedMatchers:function(t){t=t||c;var e={};Object.keys(t).forEach(function(r){if(!r.match(/^(_|matcher)/i)){var a=r.charAt(0).toLowerCase()+r.slice(1);e[a]=t[r]}});return e}});return u});
//# sourceMappingURL=MatcherFactory.js.map