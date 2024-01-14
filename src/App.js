import { useDispatch, useSelector } from "react-redux";
function App() {

  const todos = useSelector(state => state)

  const dispatch = useDispatch()

function deleteTodos(id) {
  dispatch({
    type:'DELETE',
    payload:id
  })
}


  return (
    <div className='container'>
        {
          todos.map((item,index) => {
            return(
              <div key={index} className="todos">
                 <div>
                <input type="checkbox" checked={item.done}/>
                </div>
                 <div>
                {item.text}
                </div>
                <div>
                <button  className="btn-x" onClick={() => deleteTodos(index)}>X</button>
                </div>
              </div>
            )
          })
        }
    </div>
    
  );  
}
export default App;
