import React from 'react';

export default function List(props) {
  return (
    <ul>
        {props.data.map(element => <li id={element.id} key={element.id}>{element.name}</li>)}
    </ul>
    );
};