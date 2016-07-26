class ListColController {
  constructor(TrelloService) {
    "ngInject";

    /* Bindings:
      this.board
    */

    this.name = 'listCol';
    this.trello = TrelloService;
    this.lists = false;
    this.activeList = false;
  }

  openListMenu($mdOpenMenu, ev){
    this.trello.getLists(this.board.id).then((lists) => {
      this.lists = lists;
      $mdOpenMenu(ev);
    });
  }

  addActiveList(list){
    this.activeLists.push(list);
  }
}

export default ListColController;
