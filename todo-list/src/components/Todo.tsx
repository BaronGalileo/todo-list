import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { updateTodos } from "../store/todoSlice"
import { Input } from "../ui/Input"

interface TodoProps {
    todoID: number,
    context?: string,
    numTodo: number
}

export const Todo = ({todoID, context='', numTodo}:TodoProps) => {

    const todo = useSelector((state: RootState) => state.todos.todos[todoID])
    const dispatch = useDispatch()

    const cheng = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updateTodo = {
            id: todoID,
            text: todo.text,
            isRedy: e.target.checked
        }
        dispatch(updateTodos(updateTodo))
        
        console.log(e.target.checked)
    }

    return(
        <div className="todo-wrapper">
            <Input onChange={cheng} type="checkbox" checked={todo.isRedy}/>
            <h3 className={todo.isRedy ? "isRedy" : ""}>{numTodo}. {context}</h3>
        </div>
    )
}