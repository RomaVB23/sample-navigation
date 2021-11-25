import { combineReducers } from 'redux';
import clientsReducer from './clientsReducer';
import profileReducer from './profileReducer';



export default combineReducers({
  clients: clientsReducer,
  profile: profileReducer
});