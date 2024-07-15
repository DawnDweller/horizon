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
        "../model/formatter",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
];
function initializer(a,b, formatter, Filter, FilterOperator) {
        return a.extend("ui5.horizon.controller.InvoiceList", {
                formatter: formatter,
                onInit() {
                        const mustafa = new b({
                                deneme1: "deneme2"
                        });
                        console.log(this, this.getView());
                        this.getView().setModel(mustafa, "Dante");
                },

                onFilterInvoices(oEvent) {
                        // build filter array
                        const aFilter = [];
                        const sQuery = oEvent.getParameter("query");
                        if (sQuery) {
                                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
                        }

                        //filter binding
                        const oList = this.byId("invoiceList");
                        const oBinding = oList.getBinding("items");
                        oBinding.filter(aFilter);
                }

        }         

);}




sap.ui.define(dependencies, initializer);