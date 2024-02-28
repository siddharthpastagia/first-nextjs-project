import ToDo from "./Todo"

const ToDoList = ({toDos})=>{
    return(
        <div>
            {toDos.map((todo)=> <ToDo toDo={todo} key={todo.id}/>)}
        </div>
    )
}

export default ToDoList