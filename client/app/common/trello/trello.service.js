import Trello from 'trello-browser';
import trelloConfig from '~/trello.config.js';

let TrelloService = function () {
  const trello = new Trello(trelloConfig.key);

  this.name = "TrelloService";
  this.localToken = localStorage.getItem('trelloToken');
  this.currentUser = false;
  this.isInit = false;

  /* Initialization */
  this.init = () => {
    return this.doAuth().then( (token) => {
      this.isInit = true;
      return this.getMe();
    });
  }

  this.doAuth = () => {
    return new Promise((resolve, reject) => {

      if(!this.localToken){
        console.log('No token found - authorizing Trello...');

        trello.auth({
          name: 'Trello Lanes',
          scope: {
            read: true,
            write: true,
            account: true
          },
          expiration: 'never'
        }).then(()=>{
          if(trello.token){
            localStorage.setItem('trelloToken', trello.token);
            console.log('Trello token stored successfully.');
            window.location.reload(false);
          }
        });
      } else{
        console.log('Trello token found - setting session.');
        trello.setToken(this.localToken);
        resolve(this.localToken);
      }
    });
  }

  this.isAuthed = () => {
    return !!this.localToken;
  }

  this.getMe = () => {
    return trello.get('/1/members/me').then((user) => {
      this.currentUser = user;
      console.log(user)
      return user;
    });
  }

  this.getCurrentUser = () => {
    return this.currentUser;
  }

  this.getBoards = () => {
    return trello.get('/1/members/me').then((user) => {
      this.currentUser = user;
      return user;
    });
  }

  return this;
}

export default TrelloService;
