import React from 'react'
import State from './Components/State'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Effect from './Components/Effect'
import Event from './Components/Event';
import Ref from './Components/Ref';
import Memo from './Components/Memo';
import Callback from './Components/Callback';
import LayoutEffect from './Components/LayoutEffect';
import Params from './Components/Params';
import Reducer from './Components/Reducer';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<State/>}/>
      <Route path='/useEffect' element={<Effect/>}/>
      <Route path='/event' element={<Event/>}/>
      <Route path='/useRef' element={<Ref/>}/>
      <Route path='/useMemo' element={<Memo/>}/>
      <Route path='/useCallback' element={<Callback/>}/>
      <Route path='/useLayoutEffect' element={<LayoutEffect/>}/>
      <Route path='/useParams/:id' element={<Params/>}/>
      <Route path='/useReducer' element={<Reducer/>}/>
    </Routes>
  )
}

export default App