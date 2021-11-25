const REGISTRATION = 'profile\REGISTRATION'

const initionalState = {
    id: '',
    name: '',
    surname: '',
    telephone: '',
    e_mail: '',
    position: 'регистрация',
    
  };
  
  const profileReducer = (state = initionalState, action) => {
    switch (action.type) {
      case REGISTRATION:
        return {...action.payload.user};
      default:
        return state;
    }
  };

export default profileReducer;

export const registration = (user) =>({
    type: REGISTRATION,
    payload: {user}
});

