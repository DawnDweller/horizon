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
                                deneme1: "deneme2invoiceList_Js"
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
                },

                onPress(oEvent) {
                        const oItem = oEvent.getSource();
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail",
                                {// receive binding context by calling .getBindingPath(); We need to remove the first "/" from the binding path by calling .substr(1) on the string because this is a special character in URLs and is not allowed, we will add it again on the detail page.
				invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
			}//Also, the binding path might contain special characters which are not allowed in URLs, so we have to encode the path with encodeURIComponent.
                        );
		},

        }         

);}




sap.ui.define(dependencies, initializer);