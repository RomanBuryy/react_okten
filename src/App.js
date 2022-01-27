
import './App.css';
import {useReducer} from "react";

const reducer = (state, action) => {
  console.log(action.type)
  switch (action.type){
    case 'inc1':
      return {...state, count1: state.count1+1}
    case 'dec1':
      return {...state, count1: state.count1-1}
    case 'res1':
      return {...state, count1: state.count1=0}

    case 'inc2':
      return {...state, count2: state.count2+1}
    case 'dec2':
      return {...state, count2: state.count2-1}
    case 'res2':
      return {...state, count2: state.count2=0}

    case 'inc3':
      return {...state, count3: state.count3+1}
    case 'dec3':
      return {...state, count3: state.count3-1}
    case 'res3':
      return {...state, count3: state.count3=0}
    default:
      throw new Error('MyError');
  }

}

function App() {
  const [state, dispatch] = useReducer(reducer, {count1:0, count2:0, count3:0});
  console.log(state)
  // const click = () =>{
  //   dispatch('I am dispatch');
  // }


  return (
    <div className="App">
      <div>
        <p>Count1: {state.count1}</p>
        <button onClick={()=>dispatch({type: 'inc1'})}>Inc</button>
        <button onClick={()=>dispatch({type: 'dec1'})}>Dec</button>
        <button onClick={()=>dispatch({type: 'res1'})}>Reset</button>
      </div>
      <div>
        <p>Count2: {state.count2}</p>
        <button onClick={()=>dispatch({type: 'inc2'})}>Inc</button>
        <button onClick={()=>dispatch({type: 'dec2'})}>Dec</button>
        <button onClick={()=>dispatch({type: 'res2'})}>Reset</button>
      </div>
      <div>
        <p>Count3: {state.count3}</p>
        <button onClick={()=>dispatch({type: 'inc3'})}>Inc</button>
        <button onClick={()=>dispatch({type: 'dec3'})}>Dec</button>
        <button onClick={()=>dispatch({type: 'res3'})}>Reset</button>
      </div>
    </div>
  );
}

export default App;
