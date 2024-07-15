/* sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {

    return Controller.extend("ui5.horizon.controller.InvoiceList",{
            onInit() {
                    const oViewModel = new JSONModel({
                            currency: "EUR"
                    });
                    this.getView().setModel(oViewModel, "view");
            }
    });
}); */






const dependencies= [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "../model/formatter"
];
function initializer(a,b, formatter) {
        return a.extend("ui5.horizon.controller.InvoiceList", {
                formatter: formatter,
                onInit() {
                        const mustafa = new b({
                                deneme1: "deneme2"
                        });
                        console.log(this, this.getView());
                        this.getView().setModel(mustafa, "Dante");
                }
        });
}
        

sap.ui.define(dependencies, initializer);