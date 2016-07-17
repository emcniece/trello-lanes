class HomeController {
  constructor(TrelloService, $scope) {
    "ngInject";
    this.name = 'home';
    this.trello = TrelloService;
    this.$scope = $scope;
  }

  $onInit() {
    this.trello.getMe().then((user) => {
      this.userName = user.fullName;
      this.$scope.$apply();
    });
  }
}

export default HomeController;
