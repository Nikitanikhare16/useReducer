import React, { useReducer } from 'react';
type stateType = {
    counter:number;
    status: string;
  }
  type actionType ={
    type:string;
  
  }
  const reducerFun =(state:stateType,action:actionType)=>{
    console.log("state",state);
    console.log("action",action);
  switch (action.type) {
    case "increment": return {...state,counter:state.counter+1,status:action.type};
    
  case "decrement":
    return {...state,counter:state.counter-1,status:action.type};
  
    default:
      return state;
      
  }
  }
  
  const initialState:stateType={counter:0 , status:"start"};
  
const AddValue =()=>{
    const [ state ,dispatch] = useReducer(reducerFun,initialState);
const incrementValue = ()=>{
console.log("increment",state);
dispatch({type:'increment'});
}
const decrementValue = ()=>{
console.log("decrement",state);
dispatch({type:'decrement'});
}
return(
    <div>
    <p>Counter:{state.counter}</p>
    <p>Status:{state.status}</p>
    <button type="button" onClick={incrementValue}>increment</button>
    <button type="button" onClick={decrementValue}>decrement</button>
    </div>
)
}
export default AddValue;