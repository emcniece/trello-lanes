import TrelloModule from './trello'
import TrelloController from './trello.controller';
import TrelloComponent from './trello.component';
import TrelloTemplate from './trello.html';

describe('Trello', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TrelloModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TrelloController();
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
      expect(TrelloTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TrelloComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TrelloTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TrelloController);
      });
  });
});
