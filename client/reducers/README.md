Reducers folder is commonly called "features" when the component is in the same folder as the Slice Method. 
When researching Redux Toolkit you will often see this folder as "features".

cardSlice ended up representing the whole board state but we didn't have time to rename everything so naming is sometimes confusing. card refers to board state and card.cards refers to cards a user has on the board

deckSlice refers to the cards or stack of cards for a user to choose from. The first iteration only implemented one stack choice accessed from the get cards button on the navbar. Stretch goal is to have deck manage the state of all possible cards to choose from. Cards from the deck would then be copied into a users Cardslice to be worked through.

********
{ useSelector, useDispatch } from 'react-redux' can only be used to connect state to functional components not to Classes. If you'd like to connect a class to the redux store you have to use the Vanilla Redux methods of connect and mapStateToProps
********

More on the createSlice method:

https://redux-toolkit.js.org/api/createSlice
