import React, {useState} from 'react'

const ChildComponent = ({onUpdateParentState}) => {
    const [childState, setChildState] = useState('Initial Child State');
    const updateChildState = ()=>{
        const newChildState = 'Updated Child State';
        setChildState(newChildState);

        onUpdateParentState(newChildState)
    }
  return (
    <div>
        <h2>Child Component</h2>
        <p>
            Child State: {childState}
        </p>
        <button onClick={updateChildState}>
            Update Parent State
        </button>
    </div>
  )
}

export default ChildComponent