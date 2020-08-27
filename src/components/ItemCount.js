import React, {useState} from "react";
import '../assets/styles/ItemCount.scss';

export default function ItemCount(props) {

    let [count, setCount] = useState(parseInt(props.initial));

    const onAdd = () => {
        if (count >= props.max) {
            return;
        } else {
            setCount(count+1);
        }
    }

    const onRest = () => {
        if (count <= props.min ) {
            return;
        } else {
            setCount(count-1);
        }
    }

    const itemsAdd = () => {
        if (count === 0) {
            alert('No ha ingresado la cantidad a agregar.');
        } else {
            console.log(count);
        }
    }
  
    return (
        <div className="general-count">
            <div className="count row mb-1">
                <button onClick={onRest}>-</button>
                <div>
                    <p>{count}</p>
                </div>
                <button onClick={onAdd}>+</button>
            </div>
            <div>
            <button onClick={itemsAdd} className="btn row text-center">Agregar</button>
            </div>
        </div>
    );
}