sap.ui.define([
    "sap/ui/core/mvc/Controller",
   
    

], (Controller) => Controller.extend('ui5.horizon.controller.App', {
    
    onInit() {
        this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
    }
   
})

);