import { useDispatch, useSelector } from "react-redux";
import Text from "./components/Text";
function App() {

const person= {
    name: 'Ali',
    age:25
}

  return (
    <div className='container'>
      <Text person={person}/>
    </div>
    
  );  
}
export default App;
