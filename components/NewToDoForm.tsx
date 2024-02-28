import { newToDo } from "@/utils/actions"

const NewToDoForm = ({}) => {
    return(
        <>
            <form action={newToDo}>
                <input type="text" className="border border-black/20" name="content"/>
                <button type="submit" className="border border-black">Add New ToDo</button>
            </form>
        </>
    )
}

export default NewToDoForm