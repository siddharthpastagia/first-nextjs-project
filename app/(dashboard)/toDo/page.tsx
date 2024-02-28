import db from '@/utils/db'
import ToDoList from '@/components/TodoList'

const getToDoData = async () => {
    const  toDos = db.todo.findMany({})
    return toDos
}
const ToDoPage = async() =>{
    //await new Promise<void>((resolve,reject)=> setTimeout(() => reject(),2000))
    const todos = await getToDoData()
    console.log("todo",todos)
    return(
        <div className='mt-10'>
            <ToDoList toDos={todos}/>
        </div>
    )
}

export default ToDoPage