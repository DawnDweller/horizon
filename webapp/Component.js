sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",

], (UIComponent, JSONModel, ResourceModel) => {
    return UIComponent.extend("ui5.horizon.Component" , {
        metadata: {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
            "rootView": {
                "viewName": "ui5.horizon.view.App",
                "type": "XML",
                "id": "app"
            }
        },
    
        init() {
            UIComponent.prototype.init.apply(this, arguments);
            //data model
            const oData = {
                receipent : {
                    name : "World"
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
        }
    } )
})