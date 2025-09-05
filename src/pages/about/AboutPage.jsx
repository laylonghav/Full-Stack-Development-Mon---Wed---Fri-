import { useDispatch, useSelector } from "react-redux";
import MasterLayout from "../../components/layouts/MasterLayout";
import { decrement, increment } from "../../store/counterSlice";

export default function AboutPage() {
  const counter = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>{counter}</h1>
       <button onClick={()=>dispatch(increment())}>+</button>
       <button onClick={()=>dispatch(decrement())}>-</button>
      <p>About Page</p>
    </div>
  );
}
