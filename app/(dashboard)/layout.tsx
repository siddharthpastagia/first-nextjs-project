import NewToDoForm from "@/components/NewToDoForm"

const DashboardLayout = ({children}) =>{
    return(
        <>
            <h1>Dashboard</h1>
            <div>
                <NewToDoForm/>
            </div>
            <div>{children}</div>
        </>
    )
}

export default DashboardLayout