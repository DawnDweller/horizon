sap.ui.define(["sap/ui/test/opaQunit","./pages/App"],e=>{"use strict";QUnit.module("Navigation");e("Should open the Hello dialog",(e,o,i)=>{e.iStartMyUIComponent({componentConfig:{name:"ui5.horizon"}});o.onTheAppPage.iPressTheCube();i.onTheAppPage.iShouldSeeTheCubeOpen();i.iTeardownMyApp()})});
//# sourceMappingURL=NavigationJourney.js.map