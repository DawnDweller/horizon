sap.ui.define(["sap/ui/core/UIComponent","sap/ui/model/json/JSONModel","sap/ui/model/resource/ResourceModel","sap/ui/Device"],(e,t,i,n)=>e.extend("ui5.horizon.Component",{metadata:{interfaces:["sap.ui.core.IAsyncContentCreation"],manifest:"json"},init(){e.prototype.init.apply(this,arguments);const o={receipent:{name:"Dante"}};const s=new t(o);this.setModel(s);console.log(s,this);const a=new i({bundleName:"ui5.horizon.i18n.i18n"});this.setModel(a,"i18n");const p=new t(n);p.setDefaultBindingMode("OneWay");this.setModel(p,"device");this.getRouter().initialize()},getContentDensityClass(){return n.support.touch?"sapUiSizeCozy":"sapUiSizeCompact"}}));
//# sourceMappingURL=Component.js.map