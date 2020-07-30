import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from './Card.jsx';
import { selectBoard, increment, decrement } from '../reducers/boardSlice';
import Button from '@material-ui/core/Button';

const Board = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const { boardState } = useSelector(selectBoard);
  const { current } = boardState;
  const cardsArr = [];

  if (id === 'stack')
    for (let i = current + 1; i < boardState.cards.length; i += 1) {
      cardsArr.push(<Card key={i} name={boardState.cards[i].name} />, <br />);
    }

  if (id === 'inProgress' && boardState.cards[current]) {
    cardsArr.push(
      <div>
        <Card
          className='board'
          key={current}
          name={boardState.cards[current].name}
          url={boardState.cards[current].url}
          card={boardState.cards[current]}
        />
        <Button onClick={() => dispatch(increment())}>Card Complete</Button>
      </div>
    );
  }

  if (id === 'complete') {
    for (let i = 0; i < current; i++) {
      cardsArr.push(<Card key={i} name={boardState.cards[i].name} />, <br />);
    }
    cardsArr.push(
      <Button onClick={() => dispatch(decrement())}>Go Back</Button>
    );
  }
  return (
    <div>
      <Grid item xs={12}>
        {cardsArr}
      </Grid>
    </div>
  );
};

export default Board;
