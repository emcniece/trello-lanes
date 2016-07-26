import * as _ from 'underscore';

class HomeController {
  constructor(TrelloService, $scope) {
    "ngInject";
    this.name = 'home';
    this.trello = TrelloService;
    this.$scope = $scope;
    this.boards = [];
    this.selectedBoards = [];

    let self = this;
    $scope.$on('boardChanged', function(event, args) {
      self.selectedBoards[args.index] = args.board;
      console.log(_.pluck(self.selectedBoards, 'name'));
    });

    this.trello.getUserOrgs();  // for use in boardRow
  }

  openBoardMenu($mdOpenMenu, ev){
    this.trello.getBoards().then((boards) => {
      this.boards = boards;
      $mdOpenMenu(ev);
    });
  }

  setActiveBoard(board){
    if(!_.find(this.selectedBoards, (bd)=>{
      return bd.id == board.id;
    })){
      this.selectedBoards.push(board);
    }
  }
}

export default HomeController;
