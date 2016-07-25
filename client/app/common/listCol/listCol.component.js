import template from './listCol.html';
import controller from './listCol.controller';
import './listCol.styl';

let listColComponent = {
  restrict: 'E',
  bindings: {
    board: '=',
  },
  template,
  controller
};

export default listColComponent;
