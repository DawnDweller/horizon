sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press"
], (Opa5, Press) => {
	"use strict";

	const sViewName = "ui5.horizon.view.HelloPanel";

	Opa5.createPageObjects({
		onTheAppPage: {
			actions: {
				iPressTheCube() {
					return this.waitFor({
						id: "helloDialogButton",/* Gotta check this   helloDialog2  */
						viewName: sViewName,
						actions: new Press(),
						errorMessage: "Did not find the 'Cube' button on the HelloPanel view"
					});
				}
			},

			assertions: {
				iShouldSeeTheCubeOpen() {
					return this.waitFor({
						controlType: "sap.m.Dialog",
						success() {
							// we set the view busy, so we need to query the parent of the app
							Opa5.assert.ok(true, "The dialog is open");
						},
						errorMessage: "Did not find the dialog control"
					});
				}
			}
		}
	});
});