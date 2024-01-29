import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';

//React Hooks
import State from './Components/react-hooks/State'
import Effect from './Components/react-hooks/Effect'
import Event from './Components/react-hooks/Event';
import Ref from './Components/react-hooks/Ref';
import Memo from './Components/react-hooks/Memo';
import Callback from './Components/react-hooks/Callback';
import LayoutEffect from './Components/react-hooks/LayoutEffect';
import Params from './Components/react-hooks/Params';
import Reducer from './Components/react-redux/Reducer';
import ReducerHookChallenge from './Components/react-redux/ReducerHookChallenge';
import MyComponent from './Components/react-context/MyComponent';

//Youtube Short
import Short03 from './Components/react-js-shorts/Shorts03';
import Short02 from './Components/react-js-shorts/Short02';
import Short01 from './Components/react-js-shorts/Short01';

//React Js Machine Coding Challenge
import Challenge01 from './Components/Challenge/Challenge01';
import Challenge02 from './Components/Challenge/Challenge02';
import Challenge03 from './Components/Challenge/Challenge03';
import Challenge04 from './Components/Challenge/Challenge04';
import Challenge05 from './Components/Challenge/Challenge05';
import Challenge06 from './Components/Challenge/Challenge06';
import Challenge07 from './Components/Challenge/Challenge07';
import Challenge08 from './Components/Challenge/Challenge08';
import Challenge09 from './Components/Challenge/Challenge09';
import Challenge10 from './Components/Challenge/Challenge10';
import Challenge11 from './Components/Challenge/Challenge11';
import Challenge12 from './Components/Challenge/Challenge12';
import Challenge13 from './Components/Challenge/Challenge13';
import Challenge14 from './Components/Challenge/Challenge14';
import Challenge15 from './Components/Challenge/Challenge15';
import Challenge16 from './Components/Challenge/Challenge16';
import Challenge17 from './Components/Challenge/Challenge17';
import Challenge18 from './Components/Challenge/Challenge18';
import Challenge19 from './Components/Challenge/Challenge19';
import Challenge20 from './Components/Challenge/Challenge20';
import Challenge21  from './Components/Challenge/Challenge21';
import Challenge22 from './Components/Challenge/Challenge22';
import Challenge23 from './Components/Challenge/Challenge23';
import Challenge24 from './Components/Challenge/Challenge24';
import Challenge25 from './Components/Challenge/Challenge25';
import Challenge26 from './Components/Challenge/Challenge26';
import Challenge27 from './Components/Challenge/Challenge27';
import Challenge28 from './Components/Challenge/Challenge28';
import Challenge29 from './Components/Challenge/Challenge29';
import Challenge30 from './Components/Challenge/Challenge30';
import Challenge31 from './Components/Challenge/Challenge31';
import Challenge32 from './Components/Challenge/Challenge32';
import Challenge33 from './Components/Challenge/Challenge33';
import Challenge34 from './Components/Challenge/Challenge34';
import Challenge35 from './Components/Challenge/Challenge35';
import Challenge36 from './Components/Challenge/Challenge36';
import Challenge37 from './Components/Challenge/Challenge37';

const App = () => {
  return (
    <Routes>
      //React Hooks
      <Route path='/useState' element={<State/>}/>
      <Route path='/useEffect' element={<Effect/>}/>
      <Route path='/event' element={<Event/>}/>
      <Route path='/useRef' element={<Ref/>}/>
      <Route path='/useMemo' element={<Memo/>}/>
      <Route path='/useCallback' element={<Callback/>}/>
      <Route path='/useLayoutEffect' element={<LayoutEffect/>}/>
      <Route path='/useParams/:id' element={<Params/>}/>
      <Route path='/useReducer' element={<Reducer/>}/>
      <Route path='/useReducerChallenge' element={<ReducerHookChallenge/>}/>
      <Route path='/useContext' element={<MyComponent/>}/>

      //Youtube Shorts
      <Route path='/shorts01' element={<Short01/>}/>
      <Route path='/shorts02' element={<Short02/>}/>
      <Route path='/shorts03' element={<Short03/>}/>
      
      //React Js Machine Coding Challenge
      <Route path='/challenge01' element={<Challenge01/>}/>
      <Route path='/challenge02' element={<Challenge02/>}/>
      <Route path='/challenge03' element={<Challenge03/>}/>
      <Route path='/challenge04' element={<Challenge04/>}/>
      <Route path='/challenge05' element={<Challenge05/>}/>
      <Route path='/challenge06' element={<Challenge06/>}/>
      <Route path='/challenge07' element={<Challenge07/>}/>
      <Route path='/challenge08' element={<Challenge08/>}/>
      <Route path='/challenge09' element={<Challenge09/>}/>
      <Route path='/challenge10' element={<Challenge10/>}/>
      <Route path='/challenge11' element={<Challenge11/>}/>
      <Route path='/challenge12' element={<Challenge12/>}/>
      <Route path='/challenge13' element={<Challenge13/>}/>
      <Route path='/challenge14' element={<Challenge14/>}/>
      <Route path='/challenge15' element={<Challenge15/>}/>
      <Route path='/challenge16' element={<Challenge16/>}/>
      <Route path='/challenge17' element={<Challenge17/>}/>
      <Route path='/challenge18' element={<Challenge18/>}/>
      <Route path='/challenge19' element={<Challenge19/>}/>
      <Route path='/challenge20' element={<Challenge20/>}/>
      <Route path='/challenge21' element={<Challenge21/>}/>
      <Route path='/challenge22' element={<Challenge22/>}/>
      <Route path='/challenge23' element={<Challenge23/>}/>
      <Route path='/challenge24' element={<Challenge24/>}/>
      <Route path='/challenge25' element={<Challenge25/>}/>
      <Route path='/challenge26' element={<Challenge26/>}/>
      <Route path='/challenge27' element={<Challenge27/>}/>
      <Route path='/challenge28' element={<Challenge28/>}/>
      <Route path='/challenge29' element={<Challenge29/>}/>
      <Route path='/challenge30' element={<Challenge30/>}/>
      <Route path='/challenge31' element={<Challenge31/>}/>
      <Route path='/challenge32' element={<Challenge32/>}/>
      <Route path='/challenge33' element={<Challenge33/>}/>
      <Route path='/challenge34' element={<Challenge34/>}/>
      <Route path='/challenge35' element={<Challenge35/>}/>
      <Route path='/challenge36' element={<Challenge36/>}/>
      <Route path='/challenge37' element={<Challenge37/>}/>
    </Routes>
  )
}

export default App