var Uno;
(function (Uno) {
    var Foundation;
    (function (Foundation) {
        var Interop;
        (function (Interop) {
            var ManagedObject = /** @class */ (function () {
                function ManagedObject() {
                }
                ManagedObject.init = function () {
                    ManagedObject.dispatchMethod = Module.mono_bind_static_method("[Uno.Foundation.Runtime.WebAssembly] Uno.Foundation.Interop.JSObject:Dispatch");
                };
                ManagedObject.dispatch = function (handle, method, parameters) {
                    if (!ManagedObject.dispatchMethod) {
                        ManagedObject.init();
                    }
                    ManagedObject.dispatchMethod(handle, method, parameters || "");
                };
                return ManagedObject;
            }());
            Interop.ManagedObject = ManagedObject;
        })(Interop = Foundation.Interop || (Foundation.Interop = {}));
    })(Foundation = Uno.Foundation || (Uno.Foundation = {}));
})(Uno || (Uno = {}));
//# sourceMappingURL=ManagedObject.js.map