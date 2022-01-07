import {combineReducers} from 'redux';
import { authReducer } from './authReducer';
import { questionReducer } from './questionReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    question: questionReducer
 })