import { PlusSvg } from "../../SVG/PlusSvg"
export const UserListHead = ({setAdding,adding})=>{
    return(
        <div className="userListHead">
            <h1>Users <span>Management</span></h1>
            <button onClick={()=>{setAdding(!adding)}}><PlusSvg/>Add New User</button>
        </div>
    )
}