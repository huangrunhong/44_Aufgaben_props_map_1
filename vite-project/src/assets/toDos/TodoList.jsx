import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from 'uuid';
const TodoList = (props)=>{
    // console.log(props)
    return (
    <ul>
        {props.toDosArr.map((toDo)=> <TodoItem
        key={uuidv4()}
        item = {toDo}
        />
        )}
    </ul>
    )
}

export default TodoList