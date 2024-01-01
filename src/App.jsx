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
import Reducer from './Components/useReducer/Reducer';
import ReducerHookChallenge from './Components/useReducer/ReducerHookChallenge';
import MyComponent from './Components/useContext/MyComponent';
import PlaySound from './Components/useSound/PlaySound';
import FetchAPI from './Components/Challenge/FetchAPI';
import Counter from './Components/Challenge/Counter';
import Puzzle from './Components/Challenge/Puzzle';
import ValidationForm from './Components/Challenge/ValidationForm';
import InputForm from './Components/InputForm';
import UrlShort from './Components/Challenge/UrlShort';
import PasswordGenerator from './Components/Challenge/PasswordGenerator';
import Login from './Components/Challenge/Login';
import StopWatch from './Components/Challenge/StopWatch';
import Modal from './Components/Challenge/Modal';
import PaginationExample from './Components/Challenge/Pagination';
import Todo from './Components/Challenge/Todo';
import Tool from './Components/Challenge/Tool';
import Form from './Components/Challenge/Form';
import InfiniteScroll from './Components/Challenge/InfiniteScroll';
import Theme from './Components/Challenge/Theme';
import Auth from './Components/Challenge/Auth';
import Challenge19 from './Components/Challenge/Challenge19';
import Challenge20 from './Components/Challenge/Challenge20';
import ConditionalRendering from './Components/shorts/ConditionalRendering';
import Challenge21  from './Components/Challenge/Challenge21';
import Challenge22 from './Components/Challenge/Challenge22';
import Challenge23 from './Components/Challenge/Challenge23';
import Challenge24 from './Components/Challenge/Challenge24';
import Challenge25 from './Components/Challenge/Challenge25';
import Challenge26 from './Components/Challenge/Challenge26';
import Challenge27 from './Components/Challenge/Challenge27';
import Challenge28 from './Components/Challenge/Challenge28';
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
      <Route path='/useReducerChallenge' element={<ReducerHookChallenge/>}/>
      <Route path='/useContext' element={<MyComponent/>}/>
      <Route path='/useSound' element={<PlaySound/>}/>
      <Route path='/fetchAPI' element={<FetchAPI/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/puzzle' element={<Puzzle/>}/>
      <Route path='/form' element={<ValidationForm/>}/>
      <Route path='/input' element={<InputForm/>}/>
      <Route path='/url-short' element={<UrlShort/>}/>
      <Route path='/password' element={<PasswordGenerator/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/stopwatch' element={<StopWatch/>}/>
      <Route path='/modal' element={<Modal/>}/>
      <Route path='/pagination' element={<PaginationExample/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/tool' element={<Tool/>}/>
      <Route path='/useForm' element={<Form/>}/>
      <Route path='/infinite-scroll' element={<InfiniteScroll/>}/>
      <Route path='/theme' element={<Theme/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/challenge19' element={<Challenge19/>}/>
      <Route path='/challenge20' element={<Challenge20/>}/>
      <Route path='/shorts1' element={<ConditionalRendering/>}/>
      <Route path='/challenge21' element={<Challenge21/>}/>
      <Route path='/challenge22' element={<Challenge22/>}/>
      <Route path='/challenge23' element={<Challenge23/>}/>
      <Route path='/challenge24' element={<Challenge24/>}/>
      <Route path='/challenge25' element={<Challenge25/>}/>
      <Route path='/challenge26' element={<Challenge26/>}/>
      <Route path='/challenge27' element={<Challenge27/>}/>
      <Route path='/challenge28' element={<Challenge28/>}/>
    </Routes>
  )
}

export default App