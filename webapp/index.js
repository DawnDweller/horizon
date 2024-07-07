sap.ui.define([
    "sap/ui/core/ComponentContainer",
], (ComponentContainer) => {
    
    new ComponentContainer({
        name: "ui5.horizon",
        settings: {
            id : "horizon"
        },
        async: true
    }).placeAt("root");

});