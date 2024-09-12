sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/App"
], (opaTest) => {
	"use strict";

	QUnit.module("Navigation");

	opaTest("Should open the Hello dialog", (Given, When, Then) => {
		// Arrangements
		Given.iStartMyUIComponent({
			componentConfig: {
				name: "ui5.horizon"
			}
		});

		//Actions
		When.onTheAppPage.iPressTheCube();

		// Assertions
		Then.onTheAppPage.iShouldSeeTheCubeOpen();

		// Cleanup
		Then.iTeardownMyApp();
	});
});