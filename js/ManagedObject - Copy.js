var DispatchHelper = /** @class */ (function () {
    function DispatchHelper() {
    }
    DispatchHelper.EncodeParameters = function (parameters) {
        return btoa(parameters);
    };
    DispatchHelper.DecodeParameters = function (parameters) {
        return atob(parameters);
    };
    return DispatchHelper;
}());
//# sourceMappingURL=ManagedObject%20-%20Copy.js.map