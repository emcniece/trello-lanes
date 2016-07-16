import angular      from 'angular';
import uiRouter     from 'angular-ui-router';
import Common       from './common/common';
import Components   from './components/components';
import Services     from './services/services';
import AppComponent from './app.component';

import ngMaterial   from 'angular-material';
import 'angular-material/angular-material.css';
import ngMdIcons    from 'angular-material-icons';
import 'angular-material-icons/angular-material-icons.css';

import Trello from 'trello';
import trelloConfig from '../../trello.config.js';

var t = new Trello(trelloConfig.key, trelloConfig.userToken);
console.log(Trello, t)

//Promise
  var cardsPromise = t.getMember('me');
  cardsPromise.then((cards) => {
    console.log(cards)
  })

angular.module('app', [
    uiRouter,
    ngMaterial,
    ngMdIcons,
    Common,
    Components,
    Services,
    //Trello
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
