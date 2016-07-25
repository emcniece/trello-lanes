class SidenavController {
  constructor($mdSidenav) {
    "ngInject";
    this.name = 'sidenav';
    this.$mdSidenav = $mdSidenav;
    this.links = [
      {name: 'Home', sref: 'main.home'},
      {name: 'About', sref: 'main.about'}
    ];
  }

  closeLeftMenu(){
    this.$mdSidenav('left').close();
  }
}

export default SidenavController;
