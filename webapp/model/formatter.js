sap.ui.define([], function () {
	"use strict";
	var formatter = {};
	formatter.returnAttachmentKey = function (zt_name, DraftUUID) {
		var objectKey = "";
		if (zt_name !== undefined && zt_name !== null && zt_name !== "") {
			objectKey = zt_name;
		} else if (DraftUUID !== undefined && DraftUUID !== null && DraftUUID !== "") {
			objectKey = DraftUUID.replace(/[^a-zA-Z0-9]/g, "");
		}
		return objectKey;
	};
	return formatter;

},  true);	