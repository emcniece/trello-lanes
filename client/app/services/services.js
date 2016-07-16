import angular from 'angular';
import Trello from './trello/trello';

let servicesModule = angular.module('app.services', [
  Trello
])

.name;

export default servicesModule;
