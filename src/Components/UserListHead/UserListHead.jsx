import { PlusSvg } from "../../SVG/PlusSvg"
export const UserListHead = ()=>{
    return(
        <div className="userListHead">
            <h1>Users <span>Management</span></h1>
            <button><PlusSvg/>Add New User</button>
        </div>
    )
}