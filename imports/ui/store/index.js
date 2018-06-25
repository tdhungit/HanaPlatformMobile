import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {appReducer} from './app/app.reducer';

const allReducers = combineReducers({
    app: appReducer,
});

export const store = createStore(
    allReducers,
    applyMiddleware(thunk),
);