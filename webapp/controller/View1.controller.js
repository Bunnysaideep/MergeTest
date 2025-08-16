sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("mergeTested.controller.View1", {
        onInit() {
            let oModel = new sap.ui.model.json.JSONModel();
            this.getView().setModel(oModel, "JsonModel");
        }
    });
});