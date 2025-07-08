'use client';

import CounterReducer from "@/utils/CounterReducer";
import { useReducer } from "react";

const Counter = () => {
    const [count, dispatch] = useReducer(CounterReducer, 0);

    return (
        <div className="flex flex-row gap-4 items-center">
            <button
                className="counter-btn"
                onClick={() => {
                    dispatch({type: 'decrement'});
                }}>
                -
            </button>

            <p className="text-5xl">{count}</p>

            <button
                className="counter-btn"
                onClick={() => {
                    dispatch({type: 'increment'});
                }}>
                +
            </button>
        </div>
    );
};

export default Counter;