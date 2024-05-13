export const initialState ={
    userName:"",
    age:0,
    cmp:''
}

const reducerFun = ( state:any,action:any)=>{
switch (action.type) {
    case "setUserName":
        // console.log("payload",action);
        return {
            ...state,
            userName: action.payload.newName
        }
        case "setUserAge":
            // console.log("payload",action);
            return {
                ...state,
                age: action.payload.newAge
            } 
            case "setUserCmp":
            // console.log("payload",action);
            return {
                ...state,
                cmp: action.payload.newCmp
            }
    default:
       return state;
}
}
export default reducerFun;