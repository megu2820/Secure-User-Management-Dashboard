import { createStore, applyMiddleware, Middleware } from 'redux';
import thunk   from 'redux-thunk';
import reducer from './reducer';

const middleware = [thunk];

const store = createStore(reducer, applyMiddleware(...middleware));

export interface RootState {
    message: any;
    auth: any;
}

export default store;