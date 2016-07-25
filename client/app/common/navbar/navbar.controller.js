class NavbarController {
  constructor($mdSidenav, TrelloService) {
    "ngInject";
    this.name = 'home';
    this.$mdSidenav = $mdSidenav;
    this.trello = TrelloService;
  }

  getUsername(){
    return this.trello.currentUser.fullName;
  }

  getUserLink(){
    return this.trello.currentUser.url;
  }

  getUserAvatar(){
    return this.trello.getAvatarPath();
  }

  openLeftMenu(){
    this.$mdSidenav('left').open();
  }

  authTrello(){
    return this.trello.doAuth();
  }

  logOut(){
    localStorage.removeItem('trelloToken');
    window.location.reload(false);
  }
}

export default NavbarController;

