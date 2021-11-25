const REGISTRATION = 'profile\REGISTRATION'

const initionalState = {
    id: '',
    name: '',
    surname: '',
    telephone: '',
    e_mail: '',
    signedUp: false
  };
  
  const profileReducer = (state = initionalState, action) => {
    switch (action.type) {
      case REGISTRATION:
        return {...action.payload.user, signedUp: true};
      default:
        return state;
    }
  };

export default profileReducer;

export const registration = (user) =>({
    type: REGISTRATION,
    payload: {user}
});

