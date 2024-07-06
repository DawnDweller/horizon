sap.ui.define([
    'sap/ui/core/mvc/XMLView',
], (XMLView) => {
    XMLView.create({
        viewName: "ui5.horizon.view.App"
    }).then((oView)=> oView.placeAt('root'));

});