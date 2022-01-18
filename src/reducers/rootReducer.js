import {combineReducers} from 'redux';
import { authReducer } from './authReducer';
import { questionReducer } from './questionReducer';
import { resultReducer } from './resultReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    question: questionReducer,
    results: resultReducer
 })