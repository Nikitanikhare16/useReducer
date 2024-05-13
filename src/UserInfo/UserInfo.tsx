import { useEffect, useReducer, useRef, useState } from "react";
import styless from "./UserInfo.module.scss";
import reducerFun, { initialState } from "./Store/ReducerFun";
import { Value } from "sass";
const UserInfo = () => {
//   const [name, setName] = useState("");
const [state,dispatch] = useReducer(reducerFun,initialState);
let ageInputRef:any = useRef();


const userDispatchFun = (newName:any)=>{
    dispatch({type:'setUserName' , payload:{newName}});
}
const ageDispatchFun =(newAge:any)=>{
    dispatch({type:'setUserAge', payload:{newAge}})
}
const cmpDispatchFun = (newCmp:any)=>{
  if (state.userName === newCmp) {
    alert("comapny name and username should not be same ");
    
  }
  dispatch({type:'setUserCmp',payload:{newCmp}})
}

useEffect(()=>{
console.log("ageInput",ageInputRef?.current?.value)
},[ageInputRef?.current?.value])
  const submitData = ()=>{
    console.log("state",state);
    if (ageInputRef?.current) {
      console.log("ageInput",ageInputRef.current)
 
    }
  }
  return (
    <div className={styless["user-wrapper"]}>
      AgeInput:{ageInputRef?.current?.value}
      <div className={styless["form-control"]}>
        <label htmlFor="UserName">Username:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="Enter your name"
        value={state.userName }
          onChange={(e)=>{userDispatchFun(e.target.value)}}
        />
      </div>

      <div className={styless["form-control"]}>
        <label htmlFor="UserAge">Age:</label>
        <input
          type="number"
          id="userAge"
          name="userAge"
          placeholder="Enter your age"
          ref={ageInputRef}
        value={state.age}
        onChange={(e)=>{ageDispatchFun(e.target.value)}}
        />
      </div>

      <div className={styless["form-control"]}>
        <label htmlFor="UserCmp">Company:</label>
        <input
          type="text"
          id="userCmp"
          name="userCmp"
          placeholder="Enter your company"
         value={state.cmp}
       onChange={(e)=>{cmpDispatchFun(e.target.value)}}
        />
      </div>
      <button type="button" onClick={submitData}>Submit</button>
    </div>
  );
};
export default UserInfo;
