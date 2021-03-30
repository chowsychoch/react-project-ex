import React, { useState } from 'react';
import './Square.scss';

interface ISquareProps{
    value: number;
    player:string;
    onClick: ()=> void
}


const Square: React.FC <ISquareProps> = (props) => {
    
    const [value, setValue] = useState<string | null>(null);
    
    return (
    <React.Fragment>
    {<button className="square" onClick={()=>{
        setValue(props.player)
        props.onClick()
        }}>{value}
    </button>}
    </React.Fragment>)
}


export default Square;