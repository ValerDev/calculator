import { combineReducers } from 'redux';
import  plus from './reducer';


export default combineReducers({
   ...plus
});