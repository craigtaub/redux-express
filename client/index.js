import reducer from '../redux/reducer';
import createStore from '../redux/store';

const initialState = window.__INITIAL_STATE__;

const store = createStore(reducer, initialState);

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
