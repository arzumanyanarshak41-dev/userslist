import { useState } from "react";
export const Addnewuser = ({ setUsers, users, setAdding, adding }) => {
    const [file, setFile] = useState("https://cdn-icons-png.flaticon.com/512/219/219983.png");
    const [name, setName] = useState("");

    function changeimg(e) {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        const reader = new FileReader();
        reader.onload = () => {
            setFile(reader.result);
        };
        reader.readAsDataURL(selectedFile);
    }

    function changedata(e) {
        e.preventDefault();
        if (name.trim()) {
            setUsers([...users, {
                id: (users.at(-1).id)+1,
                fullname: name,
                role: "viewer",
                dateCreated: new Date().toISOString().slice(0, 10),
                status: "active",
                userimg: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                isediting: false
            }]);
            setAdding(false)
        }
    }

    return (
        <div className="addbox">
            <h2>Add New User</h2>
            <form onSubmit={changedata} className="addnewuser">
                <div className="addforminput">
                    <img src={file} alt="preview" />
                    <input type="file" accept="image/*" onChange={changeimg} />
                    <input type="text" value={name} placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                </div>
                <button type="submit">Save</button>
            </form>
            <button className="cancel" onClick={()=>setAdding(!adding)}>Cancel</button>
        </div>
    );
}