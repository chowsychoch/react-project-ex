import React, { useState } from 'react';
import { isPartiallyEmittedExpression } from 'typescript';
import './Board.scss';
import Square from './Square'

const Board = () => {
  let player = 'X';
  let [turn, setTurn] = useState(0)

  if (turn % 2 == 0) {
    player = 'O'
  }
  const renderSquare = (i: number) => {
    return <Square onClick={()=>{setTurn(turn+ 1)}} player={player} value={i} key={`sqaure_${i}`} />
  }
  const status: string = 'Next player: ' + player;

  return (
    <React.Fragment>
      <div>
        <div className="status">{status}</div>
        {
          [0, 3, 6].map((i, idx) => (
            <div className="board-row" key={`board-row-${idx}`}>
              {[0, 1, 2].map((j) => renderSquare(i + j))}
            </div>
          ))
        }
      </div>
    </React.Fragment>)
}


export default Board;