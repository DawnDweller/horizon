/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/core/Control","./IllustrationRenderer","./IllustrationPool","sap/ui/core/Theming"],function(e,t,i,o,a){"use strict";var s={sap_horizon:"v5/",sap_horizon_dark:"v5/",sap_horizon_hcb:"v5/hc/",sap_horizon_hcw:"v5/hc/"};var r=t.extend("sap.m.Illustration",{metadata:{library:"sap.m",properties:{set:{type:"string",defaultValue:null},media:{type:"string",defaultValue:null},type:{type:"string",defaultValue:null}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},dnd:{draggable:true,droppable:false}},renderer:i});r.CAN_NOT_BUILD_SYMBOL_MSG="Some of the Control's properties are missing. Can't build Symbol ID. No SVG will be displayed.";r.prototype.init=function(){this._sId=this.getId()};r.prototype.onBeforeRendering=function(){this._buildSymbolId();if(this._sSymbolId){o.loadAsset(this._sSymbolId,this._sId,this._sIdPrefix)}else{e.warning(r.CAN_NOT_BUILD_SYMBOL_MSG)}};r.prototype.onThemeChanged=function(){this.invalidate()};r.prototype._buildSymbolId=function(){var e=this.getSet(),t=this.getMedia(),i=this.getType(),o;this._sSymbolId="";this._sIdPrefix="";if(e&&t&&i){o=this._formatType(e,i);this._sSymbolId=e+"-"+t+"-"+o.mappedType;this._sIdPrefix=o.prefix}};r.prototype._formatType=function(e,t){var i=t,r="",l=o.getIllustrationSetMetadata(e),n=a.getTheme(),p=s[n];if(p&&l&&l.aCollections&&l.aCollections.length){l.aCollections.forEach(function(e){if(e.prefix===p&&e.mappings[t]){i=e.mappings[t];r=e.prefix}})}return{mappedType:i,prefix:r}};return r});
//# sourceMappingURL=Illustration.js.map