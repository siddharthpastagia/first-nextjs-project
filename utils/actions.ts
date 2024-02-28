'use server'
import { revalidatePath } from 'next/cache'
import db from './db'

export const completeToDo =async(id) => {
    await db.todo.update({
        where:{id},
        data:{
            completed:true 
        }
    })

    revalidatePath('/toDo')
}

export const newToDo = async(formData) => {
    const todo = await db.todo.create({
        data: {
            content:formData.get('content')
        } 
    })

    revalidatePath('/toDo')
}