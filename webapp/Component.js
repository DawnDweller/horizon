sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/Device",

], (UIComponent, JSONModel, ResourceModel, Device) => {
    return UIComponent.extend("ui5.horizon.Component" , {

        metadata : {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
         },
         
        init() {
            UIComponent.prototype.init.apply(this, arguments);
            //data model
            const oData = {
                receipent : {
                    name : "Dante"
                }
            };
            const oModel = new JSONModel(oData);
            this.setModel(oModel);
            console.log(oModel, this);
            //i18n model
            const i18nModel = new ResourceModel({
                bundleName: "ui5.horizon.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");

            // set device model
			const oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");
            //binding mode must be OneWay as the device model is read-only and we want to avoid changing the model accidentally
            // when we bind properties of a control to it. By default, models in SAPUI5 are bidirectional (TwoWay). When the property changes, the bound model value is updated as well.

            // create the views based on the url/hash
			this.getRouter().initialize();
        }
    } )
})