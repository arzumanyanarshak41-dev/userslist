import { useState} from "react";

export const ForEdit = ({ user,setUsers,users }) => {
    const [file, setFile] = useState(user.userimg); 
    const [name, setName] = useState(user.fullname);

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
        setUsers(
            users.map(el =>
                el.id === user.id
                    ? { ...el, fullname: name, userimg: file, isediting: false }
                    : el
            )
        );
    }

    return (
        <form onSubmit={changedata} className="editForm">
            <img src={file} alt="preview" />
            <input type="file" accept="image/*" onChange={changeimg} />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit">Save</button>
        </form>
    );
}
