import * as _ from 'underscore';

class BoardRowController {
  constructor(TrelloService, $rootScope) {
    "ngInject";

    /* Bindings:
      this.board
      this.index
    */

    this.name = 'boardRow';
    this.$rootScope = $rootScope;
    this.trello = TrelloService;
    this.boards = [];
    this.lists = [];
    this.activeLists = false;

    this.trello.getUserOrgs();
  }

  openBoardMenu($mdOpenMenu, ev){
    this.trello.getBoards().then((boards) => {
      this.boards = boards;
      $mdOpenMenu(ev);
    });
  }

  setActiveBoard(board){
    console.log(board);
    this.board = board;
    this.$rootScope.$broadcast('boardChanged', { index: this.index, board: board });
  }

  getActiveOrg(){
    return _.find(this.trello.userOrgs, (org)=>{
      return org.id == this.board.idOrganization;
    });
  }

}

export default BoardRowController;
