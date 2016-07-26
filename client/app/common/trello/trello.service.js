import Trello from 'trello-browser';
import trelloConfig from '~/trello.config.js';

let TrelloService = function () {
  const trello = new Trello(trelloConfig.key);
  const avatarPath = 'https://trello-avatars.s3.amazonaws.com/'; // avatarId/30.png

  // Basics
  this.name = "TrelloService";
  this.localToken = localStorage.getItem('trelloToken');
  this.isInit = false;

  // Data models
  this.currentUser = false;
  this.boards = false;
  this.userOrgs = false;

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

  this.getAvatarPath = (imgSize) => {
    if(!imgSize) imgSize = 30;
    if(!this.currentUser || !this.currentUser.avatarHash)
      return false;

    return avatarPath+this.currentUser.avatarHash+'/'+imgSize+'.png';
  }

  this.getUserOrgs = (memberId) => {
    if(!memberId) memberId = 'me';
    return trello.get(`/1/members/${memberId}/organizations`).then((orgs) => {
      console.log(orgs)
      this.userOrgs = orgs;
      return orgs;
    });
  }

  this.getBoards = (memberId) => {
    if(!memberId) memberId = 'me';
    return trello.get(`/1/members/${memberId}/boards`).then((boards) => {
      this.boards = boards;
      return boards;
    });
  }

  this.getLists = (boardId) => {
    return trello.get(`/1/boards/${boardId}/lists`).then((lists) => {
      return lists;
    });
  }

  return this;
}

export default TrelloService;
