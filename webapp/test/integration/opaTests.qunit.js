QUnit.config.autostart = false;

sap.ui.require(["sap/ui/core/Core"], async(Core) => {
        "use strict";

        await Core.ready();

        sap.ui.require([
            "ui5/horizon/localService/mockserver",
		    "ui5/horizon/test/integration/NavigationJourney"
        ], (mockserver) => {
            //initilize the mock server - I never get this part
            mockserver.init();
            QUnit.start();
        });
});