import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { updateTodoID } from "../store/todoIDSlice";
import { updateTodos } from "../store/todoSlice";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export const TodoFormAdd = () => {

    const todolist = useSelector((state: RootState) => state.todos.todos)

    const todoID =useSelector((state: RootState) => state.todoID.countID)
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");

    const [count, setCount] = useState(1)
    
    const send = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    
    const show = () => {
        console.log("Value: ", todoID, todolist);
        const newTodoId = todoID + 1
        const data = {
            id: newTodoId,
            text: inputValue,
            isRedy: false,
        }
        dispatch(updateTodos(data))
        dispatch(updateTodoID(newTodoId))
        setInputValue('')
        setCount(count + 1)
    }

    return(
        <form className="todo-add">
            <div className="todo-element">
                <label>Задача: </label>
                <Input value={inputValue} onChange={send}/>
            </div>
            <Button disabled={!inputValue} onClick={show}>{!inputValue ? "Напишите задачу" : "Добавить задачу"}</Button>
        </form>
    )
}