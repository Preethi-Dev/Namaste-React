import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByValue } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementVal, setIncrementVal] = useState(0);
  const resetAll = () => {
    setIncrementVal(0);
    dispatch(reset());
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-3">
      <h1 className="text-6xl">{count}</h1>
      <div className="flex gap-4 items-center">
        <button
          onClick={() => {
            dispatch(increment());
          }}
          className="text-4xl w-12 h-12 bg-green-200"
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
          className="text-4xl w-12 h-12 bg-red-200"
        >
          -
        </button>
        <button onClick={resetAll} className="text-3xl p-2 bg-slate-200">
          Reset
        </button>
        <input
          type="text"
          value={incrementVal}
          className="border border-black h-12"
          onChange={(e) => setIncrementVal(Number(e.target.value) || 0)}
        />
        <button
          onClick={() => {
            dispatch(incrementByValue(incrementVal));
          }}
          className="text-3xl p-2 bg-slate-200"
        >
          Add Value
        </button>
      </div>
    </div>
  );
};

export default Counter;
