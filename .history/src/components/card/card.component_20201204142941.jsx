import React from 'react';
import './card.styles';

export const Card = (props) => {
    return (
        <div className='card-container'>
            <h1 key={props.monster.id}>{props.monster.name}</h1>
        </div>
    )
}
 