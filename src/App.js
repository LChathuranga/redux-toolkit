import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementById } from './redux/counter';

function App() {

  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(increment())
  }

  const decrementHandler = () => {
    dispatch(decrement())
  }

  const incrementBy = () => {
    dispatch(incrementById(20))
  }

  return (
   <>
    <h2>The Count is: {count}</h2>
    <button onClick={incrementHandler}>increment</button>
    <button onClick={decrementHandler}>decrement</button>
    <button onClick={incrementBy}>increment by 20</button>
   </>
  );
}

export default App;
