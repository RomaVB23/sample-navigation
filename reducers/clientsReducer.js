const ADD_CLIENS = 'clients\ADD_CLIENS';

const initialValue = [];

const clientsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_CLIENS:
      return [ ...state, action.payload ];
    default:
      return state;
  }
};

export default clientsReducer;

export const addClient = (client) => ({
  type: ADD_CLIENS,
  payload: client
})