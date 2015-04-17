(function(define) {
	"use strict";

	define([],
		function() {
			var authInterceptorService = function($q, $location, localStorageService) {

				var requestFunc = function(config) {
					config.headers = config.headers || {};
					config.headers.Authorization = "Basic M1JZVHpaTTNtaWdlaERLMjU3YVVMTEEwMXhjbmxZOFJCVWxTTFpjaDpY";
					return config;
				};
				var responseErrorFunc = function (rejection) {
					if ((rejection.status === 400) || (rejection.status === 401)) {
						$location.path("/autherror");
					}
					return $q.reject(rejection);
				};
				return {
					request: requestFunc,
					responseError: responseErrorFunc
				};
			};

			return ["$q", "$location", authInterceptorService];
		});

}(define));