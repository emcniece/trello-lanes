class NavbarController {
  constructor($mdSidenav) {
    "ngInject";
    this.name = 'home';
    this.$mdSidenav = $mdSidenav;
  }

  openLeftMenu(){
    this.$mdSidenav('left').open();
  }
}

export default NavbarController;

