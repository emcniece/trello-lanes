import Trello from 'trello-browser';
import trelloConfig from '~/trello.config.js';

let TrelloService = function () {
  const name = "TrelloService";
  const trello = new Trello(trelloConfig.key);
  const localToken = localStorage.getItem('trello-token');

  let doAuth = () => {
    if(!localToken){
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
          localStorage.setItem('trello-token', trello.token);
          console.log('Trello token stored successfully.');
          window.location.reload(false);
        }
      });
    } else{
      console.log('Trello token found - setting session.');
      trello.setToken(localToken);
    }
  }

  let getMe = () => {
    return trello.get('/1/members/me');
  }

  /* Initialization */
  doAuth();

  return{
    doAuth,
    getMe
  };
}

export default TrelloService;
