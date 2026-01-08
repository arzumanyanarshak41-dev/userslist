import { UserListHead } from "../UserListHead/UserListHead"
import { UserListBody } from "../UserListBody/UserListBody"
import { useState } from "react"
export const UserList = ()=>{
    return(
        <div className="userList">
        <UserListHead/>
        <UserListBody/>
        </div>
    )
}