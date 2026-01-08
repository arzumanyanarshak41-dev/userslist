import { EditSvg } from "../../SVG/EditSvg"
import { TrashSvg } from "../../SVG/TrashSvg"
import { ForEdit } from "../ForEdit/ForEdit"
export const Person = ({ user ,setUsers,users}) => {
    return (
        <div className="person" key={user.id}>
            <ul>
                <li className="id">{user.id}</li>
                {user.isediting ? <ForEdit user={user} setUsers={setUsers} users={users}/> : 
                <li><img src={user.userimg} alt="" /><p>{user.fullname}</p></li>}
                <li>{user.dateCreated}</li>
                <li>{user.role}</li>
                <li>{user.status}</li>
                <li><div className="actions"><EditSvg user={user} users={users} setUsers={setUsers} /> <TrashSvg user={user} setUsers={setUsers} users={users}/></div></li>
            </ul>
        </div>
    )
}