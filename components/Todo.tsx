'use client'
import { useTransition } from "react"
import { completeToDo } from "@/utils/actions"

const ToDo = ({toDo}) => {
    const [isPending, startTransition] = useTransition()
    return(
        <div 
        className={`border border-black/20 cursor-pointer ${toDo.completed ? `line-through grey-200` :''}`} 
        onClick={()=> startTransition(()=> completeToDo(toDo?.id))}>{toDo?.content}</div>        
    )
}

export default ToDo