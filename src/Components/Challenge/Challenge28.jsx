// Create a React Js Component in which Parent State can be updated with the help of Child Components.


import React, {useState} from 'react'
import ChildComponent from './ChildComponent'

const Challenge28 = () => {
    const [parentState, setParentState] = useState('Initial Parent State');

    const updateParentState = (newState)=>{
        const modifiedState = `Modified: ${newState}`;
        setParentState(modifiedState)
    }
  return (
    <div>
        <h1>Parent Component</h1>
        <p>Parent State: {parentState}</p>
        <ChildComponent onUpdateParentState={updateParentState}/>
    </div>
  )
}

export default Challenge28
