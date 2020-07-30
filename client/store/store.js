import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import boardReducer from '../reducers/boardSlice';
import deckReducer from '../reducers/deckSlice';
import loginReducer from '../reducers/loginSlice';

//Middleware for logging state with every state change

const logger = (store) => (next) => (action) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState().card);
  return result;
};

//Middleware that sends the entire state of the app up to Mongo DB with every state change.
//Currently this just overwrites a users board state but the goal was to create an array of board states
// so the user could time travel even after logging out or closing the page

const updateBoardServer = (store) => (next) => (action) => {
  let payload = store.getState();
  console.log('payload.card -> ', payload);
  fetch('/server/boardState', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log('inside updateBoardServer', data);
    });
  let result = next(action);
  return result;
};

//use the name of the reducer to access that piece state in the global environment
//global state is an object containing 3 reducers. store = {card{}, deck{}, login{}}

const store = configureStore({
  reducer: combineReducers({
    boardState: boardReducer,
    deck: deckReducer,
    login: loginReducer,
  }),
  middleware: getDefaultMiddleware().concat(logger).concat(updateBoardServer),
});

export default store;
