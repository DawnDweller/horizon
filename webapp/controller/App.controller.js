sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    

], (Controller, MessageToast) => Controller.extend('ui5.horizon.controller.App', {
    

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