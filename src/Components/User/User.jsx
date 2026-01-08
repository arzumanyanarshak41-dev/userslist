import { Person } from "../Person/Person"

export const Users = ({ users, setUsers, page ,data}) => {
    return (
        <div className="users">
            {data.map((user) => {
                return (
                    <Person user={user} setUsers={setUsers} users={users} />
                )
            })}
        </div>
    )
}