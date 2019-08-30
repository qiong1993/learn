import {useReducer} from 'react'

const initialState = {count:0}
function reducer(state,action){
    switch(action.type){
        case 'add':
            return {count:state.count + 1}
        case 'del':
            return {count:state.count - 1}
        default:
            return state
    }
} 

function C(){
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            state:{state.count}
            <button onClick={()=>dispatch({type:'add'})}>add</button>
            <button onClick={()=>dispatch({type:'del'})}>del</button>
        </div>
    )
}

function P(){
    return (
        <div>
            C1:<C/>
            C2:<C/>
        </div>
    )
}

export default P