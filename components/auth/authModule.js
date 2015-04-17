(function(define, angular) {
	"use strict";

	define([
			"auth/services/authInterceptor",
		],
		function(authInterceptor) {
			var moduleName = "auth.module";
			angular
				.module(moduleName, [])
				.factory("authInterceptor", authInterceptor)
				.config(function($httpProvider) {
					$httpProvider.interceptors.push("authInterceptor");
				});
			return moduleName;
		});
}(define, angular));