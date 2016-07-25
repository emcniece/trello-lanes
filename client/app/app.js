import angular      from 'angular';
import uiRouter     from 'angular-ui-router';
import Common       from './common/common';
import Components   from './components/components';
import AppComponent from './app.component';

import ngMaterial   from 'angular-material';
import 'angular-material/angular-material.css';
import ngMdIcons    from 'angular-material-icons';
import 'angular-material-icons/angular-material-icons.css';

angular.module('app', [
    uiRouter,
    ngMaterial,
    ngMdIcons,
    Common,
    Components
  ])
  .config(($locationProvider, $stateProvider, $urlRouterProvider, $mdThemingProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    $urlRouterProvider.otherwise('/');

    $stateProvider
      // 'main' state acts as a preloader for all other states. Ensure that
      // all other states are a child of main ('main.newState').
      .state('main', {
        url: '',
        abstract: true,
        template: '<ui-view></ui-view>',
        resolve: {
          trelloInit: function(TrelloService){
            return TrelloService.init();
          }
        }

    });

    $mdThemingProvider.theme('dark').backgroundPalette('grey').dark();

    /*
    $mdThemingProvider.definePalette('amazingPaletteName', {
      '50': 'ffebee',
      '100': 'ffcdd2',
      '200': 'ef9a9a',
      '300': 'e57373',
      '400': 'ef5350',
      '500': 'f44336',
      '600': 'e53935',
      '700': 'd32f2f',
      '800': 'c62828',
      '900': 'b71c1c',
      'A100': 'ff8a80',
      'A200': 'ff5252',
      'A400': 'ff1744',
      'A700': 'd50000',
      'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                          // on this palette should be dark or light
      'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
       '200', '300', '400', 'A100'],
      'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });
    $mdThemingProvider.theme('default')
      .primaryPalette('amazingPaletteName')
    */

  })  // config

  .component('app', AppComponent);
