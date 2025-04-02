import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { removeTodos } from "../store/todoSlice";
import { Button } from "../ui/Button";
import { Todo } from "./Todo";

export const TodoList = () => {

    interface Todo {
        id: number;
        text: string;
        isRedy: boolean;
    }

    const todoList = useSelector((state: RootState) => state.todos.todos)

    const dispatch = useDispatch();

    const[todoListIsRedy, setTodoListIsRedy] = useState<number[]>([])

    useEffect(() => {
        console.log("todoList",todoList)
        setTodoListIsRedy(Object.values(todoList).filter((item:Todo) => 
            item.isRedy === true
    ).map(obj => obj.id))
        console.log("newTodoList",todoListIsRedy, todoListIsRedy.length)

    }, [todoList])

    const deleteTodos = () => {
        todoListIsRedy.map(idTodo => {
            dispatch(removeTodos(idTodo))
        })
    }

    return(
    <div className="todo-list-wrapper">
        {Object.values(todoList || {})
            .sort((a, b) => a.id - b.id) 
            .filter(item => item.text)
            .map((item: Todo, index: number) => (
                <Todo numTodo={index + 1} context={item.text} key={item.id} todoID={item.id} />
            ))}
            <div className="delete-todos">
                {todoListIsRedy[0] &&<Button disabled={!todoListIsRedy[0]} onClick={deleteTodos}>{todoListIsRedy.length > 1 ? "Удалить задачи" : "Удалить задачу"}</Button>}
            </div>
    </div>
    )
}