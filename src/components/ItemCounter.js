import React, {useState} from "react";
import '../assets/styles/ItemCounter.scss';

export default function ItemCounter() {

    var [counter, setCounter] = useState(0);

    const addItem = () => {
        if (counter < 10) {
            setCounter(counter+1);
        }
    }

    const restItem = () => {
        if (counter > 0 ) {
            setCounter(counter-1);
        }
    }

    const itemsAdded = () => {
        if (counter === 0) {
            alert('No ha ingresado la cantidad a agregar.');
        } else {
            console.log(counter);
        }
    }
  
    return (
        <div className="general-counter">
            <div className="counter row mb-1">
                <button onClick={restItem}>-</button>
                <div>
                    <p>{counter}</p>
                </div>
                <button onClick={addItem}>+</button>
            </div>
            <div>
            <button onClick={itemsAdded} className="btn row text-center">Agregar</button>
            </div>
        </div>
    );
}