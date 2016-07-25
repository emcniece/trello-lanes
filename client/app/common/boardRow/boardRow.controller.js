class BoardRowController {
  constructor(TrelloService) {
    "ngInject";
    this.name = 'boardRow';
    this.trello = TrelloService;
    this.boards = [];
    this.activeBoard = false;
    this.lists = [];
    this.activeLists = false;
  }

  openBoardMenu($mdOpenMenu, ev){
    this.trello.getBoards().then((boards) => {
      this.boards = boards;
      console.log(boards)
      $mdOpenMenu(ev);
    });
  }

  setActiveBoard(board){
    console.log('SET', board)
    this.activeBoard = board;
  }

}

export default BoardRowController;
