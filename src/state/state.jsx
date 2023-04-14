import { atom  } from 'recoil';

let userState = atom({
  key: 'userState',
  default: { name:'', id:'', auth:''} 
});

let loadingState = atom({
  key: 'counter',
  default: 0, 
});

export { userState, loadingState };
