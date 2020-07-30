import { createSlice } from '@reduxjs/toolkit';

//the createSlice method encapsulates a piece of the store.
// The state and the methods for changing state are accessing throughout the app with useSelector and useDispatch  from 'react-redux'

export const boardSlice = createSlice({
  name: 'Board',
  initialState: {
    current: 0, //index of current card
    username: '',
    cards: [], // an array of card objects filled from the deck
  },
  reducers: {
    increment: (state) => {
      state.current += 1;
    },

    decrement: (state) => {
      if (state.current >= 0) state.current -= 1;
    },

    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    // complete: (state) => {
    //   state.completed = true;
    // },
    getAll: (state, action) => {
      state.cards = action.payload;
    },
    assignUser: (state, action) => {
      state.username = action.payload.username;
    },
    newState: (state, action) => {
      state.username = action.payload.username;
      state.current = action.payload.current;
      state.cards = action.payload.cards;
    },

    skipToCard: (state, action) => {
      const { targetTech } = action.payload;
      const newCurrent = state.cards.findIndex(
        (card) => card.name === targetTech
      );
      state.current = newCurrent;
    },

    completeTask: (state, action) => {
      //will receive todoName in payload
      //look at cards[current] object for todo array
      //iterate through todo array and look for object with a name value === todoName from payload
      //set completed = !completed
      const { todoName } = action.payload;
      const currentCard = state.cards[state.current];
      const currentTodos = currentCard.todo;
      currentTodos.forEach((todo) => {
        if (todo.taskName === todoName) todo.completed = !todo.completed;
      });
    },
  },
});

export const {
  addCard,
  getAll,
  complete,
  getCards,
  assignUser,
  newState,
  increment,
  decrement,
  completeTask,
  skipToCard,
} = boardSlice.actions;

export const selectBoard = (state) => state;

export default boardSlice.reducer;
