import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import ngMdIcons from 'angular-material-icons';
import 'angular-material-icons/angular-material-icons.css';

angular.module('app', [
    uiRouter,
    ngMaterial,
    ngMdIcons,
    Common,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
