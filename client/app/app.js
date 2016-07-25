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
  .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
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
  })

  .component('app', AppComponent);
