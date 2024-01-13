import React from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
 
function Text2() { 
    const name = useSelector(state => state); 
    const dispatch = useDispatch(); // Получаем dispatch из хука useDispatch

    const handlerSubmit = () => { 
        dispatch({ 
            type: 'PLUS' 
        }); 
    }; 
    const handlerRestart = () => { 
        dispatch({ 
            type: 'RESTART' 
        }); 
    }; 
    const handlerMinus = () => { 
        dispatch({ 
            type: 'MINUS' 
        }); 
    }; 
 
    return ( 
        <div className='App'> 
          {name} 
          <button onClick={handlerSubmit}>+</button> 
          <button onClick={handlerRestart}>restart</button> 
          <button onClick={handlerMinus}>-</button> 
        </div> 
      );   
    } 
    export default Text2;
