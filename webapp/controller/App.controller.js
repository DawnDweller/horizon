sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => Controller.extend('ui5.horizon.controller.App', {
    onPress() {
        MessageToast.show("HEllooooooooo", {
            duration: 500,
            onClose: () => MessageToast.show("Closed already :D"),
        });
    },
})

);