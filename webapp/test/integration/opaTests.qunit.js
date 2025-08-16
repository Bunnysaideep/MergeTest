/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["mergeTested/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
