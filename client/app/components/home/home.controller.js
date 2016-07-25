class HomeController {
  constructor(TrelloService, $scope) {
    "ngInject";
    this.name = 'home';
    this.trello = TrelloService;
    this.$scope = $scope;
  }

  $onInit() {
  }

  isTrelloInit(){
    return this.trello.isInit;
  }
}

export default HomeController;
