(function(require) {
    "use strict";
    require.config({
        appDir: "",
        baseUrl: "/",
        paths: {
            "angular": "js/vendor/angular/angular",
            "angular-mocks": "js/vendor/angular/angular-mocks",
            "angular-resource": "js/vendor/angular/angular-resource.min",
            "ui-router": "js/vendor/angular-ui/angular-ui-router.min",
            "ui-bootstrap": "js/vendor/angular-ui/ui-bootstrap-tpls-0.12.1.min",
            'mainModule': "components/mainModule"
        },
        shim: {
            "angular-route": {
                deps: ["angular"]
            },
            "ui-router": {
                deps: ["angular"]
            },
            "ui-bootstrap": {
                deps: ["angular"]
            },
            "angular-resource": {
                deps: ["angular"]
            },
            "mainModule": {
                deps: ["angular", "angular-resource", "ui-router", "ui-bootstrap"]
            }
        }
    });
    require(["mainModule"], function () {

    });
}(require));