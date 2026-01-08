import { Users } from "../User/User";
import { UserListPages } from "../UserListPages/UserListPages";
import { useState } from "react";
export const UserListBody = ({users,setUsers}) => {
    
    const [page, setpage] = useState(0)
    const data = users.slice(page*5,page*5+5)
    return (
        <div className="userListBody">
            <ul className="general">
                <li className="id">#</li>
                <li className="usname">Name</li>
                <li>Date Created</li>
                <li>Role</li>
                <li>Status</li>
                <li>Action</li>
            </ul>
            <Users users={users} setUsers={setUsers} page={page} data={data}/>
            <UserListPages users={users} setpage={setpage}  page={page} uscount={data.length}/>
        </div>
    )
}