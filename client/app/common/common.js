import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Sidenav from './sidenav/sidenav';
import TrelloService from './trello/trello';
import BoardRow from './boardRow/boardRow';
import ListCol from './listCol/listCol';

let commonModule = angular.module('app.common', [
  Sidenav,
  Navbar,
  Hero,
  User,
  TrelloService,
  BoardRow,
  ListCol
])

.name;

export default commonModule;
