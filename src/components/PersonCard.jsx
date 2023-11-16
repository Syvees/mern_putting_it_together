import React, { useState } from 'react'

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    const [count, setCount] = useState(age);
    return (
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {count}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick = { (e) => setCount(count + 1) }>Birthday Button for {firstName} {lastName} </button>
        </div>
    );
}

export default PersonCard;