(function (define) {
	"use strict";

	define([],
		function () {
			function stateConfig($stateProvider){
      
      var home = {
        name: 'home',
        url: '/',
        templateUrl: 'content.html',
              controller: "mainController"
      },
      red = {
          name: 'red',
          url: '/red',
          parent: home,
          templateUrl: 'content.red.html'
      },
      blue = {
          name: 'blue',
          url: '/blue',
          parent: home,
          templateUrl: 'content.blue.html'
      },
      green = {
          name: 'green',
          url: '/green',
          parent: home,
          templateUrl: 'content.green.html'
      };
    
        $stateProvider.state(home);
        $stateProvider.state(red);
        $stateProvider.state(green);
        $stateProvider.state(blue);
    }
			return ["$stateProvider", stateConfig];
		});

}(define));
