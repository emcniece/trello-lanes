import angular from 'angular';
import trelloService from './trello.service';

let trelloModule = angular.module('trello', [])

.service('TrelloService', trelloService)

.name;

export default trelloModule;
