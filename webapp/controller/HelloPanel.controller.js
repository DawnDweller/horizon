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
    async onOpenDialog() {
        this.oDialog ??= await this.loadFragment({
            name:"ui5.horizon.view.HelloDialog"
        });
        this.oDialog.open();
    },
    onCloseDialog() {
        // note: We don't need to chain to the pDialog promise, since this event handler is only called from within the loaded dialog itself.
        this.byId("helloDialog2").close();
    },
})

);