import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Sidenav from './sidenav/sidenav';
import TrelloService from './trello/trello';

let commonModule = angular.module('app.common', [
  Sidenav,
  Navbar,
  Hero,
  User,
  TrelloService
])

.name;

export default commonModule;
