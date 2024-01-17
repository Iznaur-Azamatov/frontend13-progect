import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Text2() {
    const name = useSelector(state => state);
    const dispatch = useDispatch();

    const handlerSubmit = () => {
        dispatch({
            type: 'PLUS'
        });
    };

    const handlerMinus = () => {
        dispatch({
            type: 'MINUS'
        });
    };

    const handlerReset = () => {
        dispatch({
            type: 'RESET'
        });
    };

    return (
        <div className='App'>
            {name}
            <button onClick={handlerSubmit}>+</button>
            <button onClick={handlerMinus}>-</button>
            <button onClick={handlerReset}>reset</button>
        </div>
    );
}

export default Text2;