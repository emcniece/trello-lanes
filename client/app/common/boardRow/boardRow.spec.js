import BoardRowModule from './boardRow'
import BoardRowController from './boardRow.controller';
import BoardRowComponent from './boardRow.component';
import BoardRowTemplate from './boardRow.html';

describe('BoardRow', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BoardRowModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BoardRowController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(BoardRowTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BoardRowComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(BoardRowTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BoardRowController);
      });
  });
});
