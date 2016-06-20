"use strict";
var BaseUiModel = (function () {
    function BaseUiModel(_globalService, _applicationMonitor) {
        this._globalService = _globalService;
        this._applicationMonitor = _applicationMonitor;
        this.prefixNoDefinedAlert = "[Default Text: {0}]";
        this.initDisplayText();
    }
    BaseUiModel.prototype.initUiModel = function (dataType) {
        this.cid = this._applicationMonitor.generateControlNumber(this.dataType).toString() + '_' + this.dataType.toString();
    };
    // method to initiate message display text
    BaseUiModel.prototype.initDisplayText = function () {
        // if messageId is not defined or messageId is 0
        if (!this._globalService.isDefined(this.messageId)
            || this.messageId == 0) {
            // default displayText to input defaultText
            //this.displayText = this._globalService.stringFormat(this.prefixNoDefinedAlert, this.defaultMessage);
            this.displayMessage = this.defaultMessage;
        }
        else {
            this.displayMessage = "[Retrieval message from server not implemented yet]";
        }
    };
    // event method to be invoked when changed of current language
    BaseUiModel.prototype.eLanguageChanged = function (languageId) {
    };
    return BaseUiModel;
}());
exports.BaseUiModel = BaseUiModel;
//# sourceMappingURL=baseModel.js.map