import { useDispatch, useSelector } from "react-redux";
import { todoAdd, todoReset } from "./todoSlice";
import { useState } from "react";

const Todo = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    const todoListData = useSelector((state) => state?.todo?.value);
    return (
        <>
            <input placeholder="Enter..." value={inputValue} onChange={(e) => {
                setInputValue(e?.target?.value);
            }} />
            <button onClick={() => {
                dispatch(todoAdd(inputValue))
            }}>ADD</button>
            <button onClick={() => {
                dispatch(todoReset())
            }}>RESET</button>
            <div>
                <ul>
                    {
                        todoListData?.map((list) => <li>{list}</li>)
                    }
                </ul>
            </div>
        </>
    )
}

export default Todo;