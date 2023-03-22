import { useDispatch, useSelector } from "react-redux";
import { increment ,incrementByAmount,decrement,decrementByAmount } from "../store/counter/counter";

const Counter = () => {
    const counterValue = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return ( 
        <div>
            <h1>Counter: </h1> {counterValue}
            <div>
                <button onClick={() => dispatch(increment())}>Arttır</button>
                <button onClick={() => dispatch(incrementByAmount(5))}>Arttır (5)</button>
                <button onClick={() => dispatch(decrement())}>Azalt</button>
                <button onClick={() => dispatch(decrementByAmount(5))}>Azalt (5)</button>
            </div>
        </div>
     );
}
 
export default Counter;