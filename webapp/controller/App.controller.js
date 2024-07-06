sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"

], (Controller, MessageToast, JSONModel) => Controller.extend('ui5.horizon.controller.App', {
    onInit() {
        const oData = {
            receipent: {
                name:"Rafael"
            },
        };

        const oModel = new JSONModel(oData);

        this.getView().setModel(oModel);
    },
    onPress() {
        MessageToast.show("HEllooooooooo", {
            duration: 500,
            onClose: () => MessageToast.show("Closed already :D"),
        });
    },
})

);