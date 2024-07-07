sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",

], (Controller, MessageToast, JSONModel, ResourceModel) => Controller.extend('ui5.horizon.controller.App', {
    onInit() {
        const oData = {
            receipent: {
                name:"Rafael"
            },
        };

        const oModel = new JSONModel(oData);

        this.getView().setModel(oModel);

        const i18nModel = new ResourceModel ({
            bundleName: "ui5.horizon.i18n.i18n"
        });
        this.getView().setModel(i18nModel, "i18n");
    },

    onPress() {
        const i18nModel=this.getView().getModel("i18n").getResourceBundle();
        const sReceipent=this.getView().getModel().getProperty("/receipent/name");
        const sHelloMessage=i18nModel.getText("HelloMessage", [sReceipent]);
        const sCloseMessage=i18nModel.getText("onCloseMessage", ["Foolishness", sReceipent]);
            
        MessageToast.show(sHelloMessage, {
            duration: 500,
            onClose: () => MessageToast.show(sCloseMessage),
        });
    },
})

);