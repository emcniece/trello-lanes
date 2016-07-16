import angular from 'angular';
import uiRouter from 'angular-ui-router';
import trelloComponent from './trello.component';

let trelloModule = angular.module('trello', [
  uiRouter
])

.component('trello', trelloComponent)

.name;

export default trelloModule;
