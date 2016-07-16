import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Sidenav from './sidenav/sidenav';

let commonModule = angular.module('app.common', [
  Sidenav,
  Navbar,
  Hero,
  User
])

.name;

export default commonModule;
