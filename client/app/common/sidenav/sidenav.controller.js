class SidenavController {
  constructor($mdSidenav) {
    "ngInject";
    this.name = 'sidenav';
    this.$mdSidenav = $mdSidenav;
    this.links = [
      {name: 'Home', sref: 'home'},
      {name: 'About', sref: 'about'}
    ];
  }

  closeLeftMenu(){
    this.$mdSidenav('left').close();
  }
}

export default SidenavController;
