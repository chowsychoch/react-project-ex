import React from 'react';
import './Board.scss';
import Square from './Square'

const Board = () => {
    const renderSquare = (i:number) =>{
        return <Square value={i}/>
    }
    const status:string = 'Next player: X'
    return (
    <React.Fragment>
          <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
    </React.Fragment>)
}


export default Board;