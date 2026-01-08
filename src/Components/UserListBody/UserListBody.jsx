import { Users } from "../User/User";
import { UserListPages } from "../UserListPages/UserListPages";
import { useState } from "react";
export const UserListBody = () => {
    const datas = [
        { id: 1, fullname: "Arshak Arzumanyan", role: "admin", dateCreated: "2024-11-10", status: "active", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 2, fullname: "Anna Petrosyan", role: "publisher", dateCreated: "2024-11-12", status: "inactive", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 3, fullname: "David Hakobyan", role: "editor", dateCreated: "2024-12-01", status: "active", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 4, fullname: "Mariam Sargsyan", role: "viewer", dateCreated: "2024-12-05", status: "pending", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 5, fullname: "Vardan Grigoryan", role: "admin", dateCreated: "2024-12-06", status: "active", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 6, fullname: "Lilit Hovhannisyan", role: "publisher", dateCreated: "2024-12-07", status: "inactive", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 7, fullname: "Arman Sargsyan", role: "editor", dateCreated: "2024-12-08", status: "active", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 8, fullname: "Narine Melikyan", role: "viewer", dateCreated: "2024-12-09", status: "pending", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 9, fullname: "Hayk Martirosyan", role: "admin", dateCreated: "2024-12-10", status: "active", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 10, fullname: "Anahit Mkrtchyan", role: "publisher", dateCreated: "2024-12-11", status: "inactive", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 11, fullname: "Tigran Petrosyan", role: "editor", dateCreated: "2024-12-12", status: "active", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 12, fullname: "Sona Karapetyan", role: "viewer", dateCreated: "2024-12-13", status: "pending", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 13, fullname: "Gor Avetisyan", role: "admin", dateCreated: "2024-12-14", status: "active", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 14, fullname: "Narek Grigoryan", role: "publisher", dateCreated: "2024-12-15", status: "inactive", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 15, fullname: "Meline Hakobyan", role: "editor", dateCreated: "2024-12-16", status: "active", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 16, fullname: "Karen Melkonyan", role: "viewer", dateCreated: "2024-12-17", status: "pending", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 17, fullname: "Ruben Stepanyan", role: "admin", dateCreated: "2024-12-18", status: "active", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 18, fullname: "Hasmik Sargsyan", role: "publisher", dateCreated: "2024-12-19", status: "inactive", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 19, fullname: "Vahe Hovsepyan", role: "editor", dateCreated: "2024-12-20", status: "active", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 20, fullname: "Lusine Manukyan", role: "viewer", dateCreated: "2024-12-21", status: "pending", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 21, fullname: "Edgar Harutyunyan", role: "admin", dateCreated: "2024-12-22", status: "active", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 22, fullname: "Marine Babayan", role: "publisher", dateCreated: "2024-12-23", status: "inactive", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 23, fullname: "Samvel Poghosyan", role: "editor", dateCreated: "2024-12-24", status: "active", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 24, fullname: "Alina Vardanyan", role: "viewer", dateCreated: "2024-12-25", status: "pending", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 25, fullname: "Levon Ghazaryan", role: "admin", dateCreated: "2024-12-26", status: "active", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 26, fullname: "Nona Aleksanyan", role: "publisher", dateCreated: "2024-12-27", status: "inactive", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 27, fullname: "Aram Simonyan", role: "editor", dateCreated: "2024-12-28", status: "active", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 28, fullname: "Margarita Khachatryan", role: "viewer", dateCreated: "2024-12-29", status: "pending", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 29, fullname: "Sergey Mkrtchyan", role: "admin", dateCreated: "2024-12-30", status: "active", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 30, fullname: "Irina Petrosyan", role: "publisher", dateCreated: "2024-12-31", status: "inactive", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 31, fullname: "Arthur Voskanyan", role: "editor", dateCreated: "2025-01-01", status: "active", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false },
        { id: 32, fullname: "Elena Grigoryan", role: "viewer", dateCreated: "2025-01-02", status: "pending", userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png", isediting: false }
    ];
    const [page, setpage] = useState(0)
    const [users, setUsers] = useState(datas)
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