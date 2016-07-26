import template from './boardRow.html';
import controller from './boardRow.controller';
import './boardRow.styl';

let boardRowComponent = {
  restrict: 'E',
  bindings: {
    board: '=',
    index: '='
  },
  template,
  controller
};

export default boardRowComponent;
