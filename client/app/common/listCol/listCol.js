import angular from 'angular';
import listColComponent from './listCol.component';

let listColModule = angular.module('listCol', [])

.component('listCol', listColComponent)

.name;

export default listColModule;
