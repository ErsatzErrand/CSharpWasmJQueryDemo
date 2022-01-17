// As a workaround for https://github.com/unoplatform/Uno.Wasm.Bootstrap/issues/466
// we base64encode the parameters to prevent them from being treated as a JSON object.
var DispatchHelper = /** @class */ (function () {
    function DispatchHelper() {
    }
    DispatchHelper.Wrap = function (parameters) {
        return btoa(parameters);
    };
    DispatchHelper.Unwrap = function (parameters) {
        return atob(parameters);
    };
    return DispatchHelper;
}());
//# sourceMappingURL=DispatchHelper.js.map