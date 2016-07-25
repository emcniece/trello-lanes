import angular from 'angular';
import boardRowComponent from './boardRow.component';

let boardRowModule = angular.module('boardRow', [])

.component('boardRow', boardRowComponent)

.name;

export default boardRowModule;
