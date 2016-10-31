'use strict';

/**
 * @ngdoc overview
 * @name actionLauncherApp
 * @description
 * # actionLauncherApp
 *
 * Main module of the application.
 */
angular
  .module('actionLauncherApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
