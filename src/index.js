import React, { useState } from 'react'; 
import ReactDOM from 'react-dom/client'; 
import './index.css'; 
import App from './App'; 
import { Provider } from 'react-redux'; 
import { createStore } from 'redux'; // добавляем импорт функции createStore

const root = ReactDOM.createRoot(document.getElementById('root'));

 const initialState = [
    {
        text:'react',
        done:false
    },
    {
        text:'html',
        done:false
    },
    {
        text:'css',
        done:false
    }
 ]

const reducer = (state = initialState, action) => { 
   switch (action.type) {
    case 'DELETE':
        return state.filter((item,index) => {
            if (action.payload !== index) return true
        })






    default:
        return state
   }
}

const store = createStore(reducer); 

root.render( 
    <Provider store={store}> 
        <App /> 
    </Provider> 
);
