import ListColModule from './listCol'
import ListColController from './listCol.controller';
import ListColComponent from './listCol.component';
import ListColTemplate from './listCol.html';

describe('ListCol', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ListColModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ListColController();
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
      expect(ListColTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ListColComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ListColTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ListColController);
      });
  });
});
