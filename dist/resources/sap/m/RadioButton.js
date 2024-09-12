/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Control","sap/ui/core/EnabledPropagator","sap/ui/core/Lib","sap/ui/core/message/MessageMixin","sap/m/Label","sap/ui/core/library","sap/base/strings/capitalize","./RadioButtonRenderer"],function(e,t,r,i,a,o,s,n,u){"use strict";var p=s.TextAlign;var l=s.ValueState;var d=s.TextDirection;var c=function(){var e=0;return function(){return e++}}();var h=t.extend("sap.m.RadioButton",{metadata:{interfaces:["sap.ui.core.IFormContent","sap.m.IToolbarInteractiveControl"],library:"sap.m",properties:{enabled:{type:"boolean",group:"Behavior",defaultValue:true},selected:{type:"boolean",group:"Data",defaultValue:false},groupName:{type:"string",group:"Behavior",defaultValue:"sapMRbDefaultGroup"},text:{type:"string",group:"Appearance",defaultValue:null},textDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:d.Inherit},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:""},useEntireWidth:{type:"boolean",group:"Appearance",defaultValue:false},activeHandling:{type:"boolean",group:"Appearance",defaultValue:true},editable:{type:"boolean",group:"Behavior",defaultValue:true},valueState:{type:"sap.ui.core.ValueState",group:"Data",defaultValue:l.None},textAlign:{type:"sap.ui.core.TextAlign",group:"Appearance",defaultValue:p.Begin},editableParent:{type:"boolean",group:"Behavior",defaultValue:true,visibility:"hidden"},valueStateText:{type:"string",group:"Misc",defaultValue:null,visibility:"hidden"}},events:{select:{parameters:{selected:{type:"boolean"}}}},associations:{ariaDescribedBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"},ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},dnd:{draggable:true,droppable:false},designtime:"sap/m/designtime/RadioButton.designtime"},renderer:u});r.call(h.prototype);a.call(h.prototype);h.getNextSelectionNumber=c;h.prototype._groupNames={};var f={HOME:"first",END:"last",NEXT:"next",PREV:"prev"};h.prototype.init=function(){this._iSelectionNumber=-1};h.prototype.onBeforeRendering=function(){var e=this.getGroupName();this._updateGroupName(e);this._updateLabelProperties();if(this.getSelected()&&e!==""&&this._isLastSelectedInGroup(e)){this._deselectOthersInGroup(e)}};h.prototype.exit=function(){var e=this.getGroupName(),t=this._groupNames[e],r=t&&t.indexOf(this);this._iTabIndex=null;if(this._oLabel){this._oLabel.destroy();this._oLabel=null}if(r>=-1){t.splice(r,1)}};h.prototype.ontap=function(e){if(!this.getEnabled()||!this.getEditable()){return}var t=this.getParent();if(t&&t.isA("sap.m.RadioButtonGroup")&&(!t.getEnabled()||!t.getEditable())){return}e&&e.setMarked();this.applyFocusInfo();if(!this.getSelected()){this.setSelected(true);var r=this;setTimeout(function(){r.fireSelect({selected:true})},0)}};h.prototype.setGroupName=function(e){this._updateGroupName(e,this.getGroupName());this.setProperty("groupName",e);return this};h.prototype.setSelected=function(e){this.setProperty("selected",e);if(this.getSelected()){this._iSelectionNumber=c()}return this};h.prototype.ontouchstart=function(e){e.setMarked();if(this.getEnabled()&&this.getActiveHandling()){this.addStyleClass("sapMRbBTouched")}};h.prototype.ontouchend=function(){this.removeStyleClass("sapMRbBTouched")};h.prototype.onsapnext=function(e){this._keyboardHandler(f.NEXT,true);e.setMarked();return this};h.prototype.onsapnextmodifiers=function(e){this._keyboardHandler(f.NEXT,!e.ctrlKey);e.setMarked();return this};h.prototype.onsapprevious=function(e){this._keyboardHandler(f.PREV,true);e.setMarked();return this};h.prototype.onsappreviousmodifiers=function(e){this._keyboardHandler(f.PREV,!e.ctrlKey);e.setMarked();return this};h.prototype.onsaphome=function(e){this._keyboardHandler(f.HOME,true);e.setMarked();return this};h.prototype.onsaphomemodifiers=function(e){this._keyboardHandler(f.HOME,!e.ctrlKey);e.setMarked();return this};h.prototype.onsapend=function(e){this._keyboardHandler(f.END,true);e.setMarked();return this};h.prototype.onsapendmodifiers=function(e){this._keyboardHandler(f.END,!e.ctrlKey);e.setMarked();return this};h.prototype._keyboardHandler=function(e,t){if(this.getParent()&&this.getParent().isA("sap.m.RadioButtonGroup")){return}var r=this._getNextFocusItem(e);r.focus();if(t&&!r.getSelected()&&r.getEditable()&&r.getEnabled()){r.setSelected(true);setTimeout(function(){r.fireSelect({selected:true})},0)}};h.prototype.getAccessibilityInfo=function(){var e=i.getResourceBundleFor("sap.m");return{role:"radio",type:e.getText("ACC_CTR_TYPE_RADIO"),description:(this.getText()||"")+(this.getSelected()?" "+e.getText("ACC_CTR_STATE_CHECKED"):" "+e.getText("ACC_CTR_STATE_NOT_CHECKED")),enabled:this.getEnabled(),editable:this.getEditable()}};h.prototype.getFormDoNotAdjustWidth=function(){return this.getText()?false:true};h.prototype._getNextFocusItem=function(e){var t=this._groupNames[this.getGroupName()].filter(function(e){return e.getDomRef()&&e.getEnabled()});var r=t.indexOf(this),i=r,a=t.length;switch(e){case f.NEXT:i=r===a-1?r:r+1;break;case f.PREV:i=r===0?0:i-1;break;case f.HOME:i=0;break;case f.END:i=a-1;break}return t[i]||this};h.prototype.onsapselect=function(e){e.preventDefault();this.ontap(e)};h.prototype.setTabIndex=function(e){var t=this.getFocusDomRef();this._iTabIndex=e;if(t){t.setAttribute("tabindex",e)}return this};h.prototype.setValueStateText=function(e){return this.setProperty("valueStateText",e)};h.prototype._updateLabelProperties=function(){var e=this._getLabel();var t=this.getText();var r=this.getUseEntireWidth();this.toggleStyleClass("sapMRbHasLabel",!!t);e.setText(t).setWidth(!r?this.getWidth():"auto").setTextDirection(this.getTextDirection()).setTextAlign(this.getTextAlign())};h.prototype._getLabel=function(){if(!this._oLabel){this._oLabel=new o(this.getId()+"-label");this._oLabel.addStyleClass("sapMRbBLabel").setParent(this,null,true)}return this._oLabel};h.prototype._updateGroupName=function(e,t){var r=this._groupNames[e],i=this._groupNames[t];if(i&&i.indexOf(this)!==-1){i.splice(i.indexOf(this),1)}if(!r){r=this._groupNames[e]=[]}if(r.indexOf(this)===-1){r.push(this)}};h.prototype._isLastSelectedInGroup=function(e){var t=this._groupNames[e];return t.every(function(e){return e._iSelectionNumber<=this._iSelectionNumber}.bind(this))};h.prototype._deselectOthersInGroup=function(e){var t=this._groupNames[e],r=t&&t.length;for(var i=0;i<r;i++){var a=t[i];if(a instanceof h&&a!==this&&a.getSelected()){a.fireSelect({selected:false});a.setSelected(false)}}};h.prototype._getToolbarInteractive=function(){return true};["editableParent"].forEach(function(e){h.prototype["_set"+n(e)]=function(t){return this.setProperty(e,t,true)}});return h});
//# sourceMappingURL=RadioButton.js.map