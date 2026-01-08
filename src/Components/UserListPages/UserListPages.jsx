export const UserListPages = ({ users, setpage, uscount, page }) => {
    function topage(page) {
        setpage(page - 1)
    }
    function back(e) {
        if (page < 1) return
        setpage(page - 1)
    }
    function next() {
        const pagesCount = Math.floor(users.length / 5);
        if (page >= pagesCount) return;
        topage(page + 2);
    }
    return (
        <div className="userListPages">
            <p>Showing {uscount} of {users.length}</p>
            <div className="pagesbox">
                <button className="bn" onClick={back}>Previous</button>
                {users.map((el, i) => {
                    const pageNum = i / 5 + 1;
                    if (i % 5 == 0) {
                        return <button key={i} onClick={(e) => topage(e.target.textContent)} style={{ backgroundColor: page + 1 == pageNum ? "rgba(0, 0, 255, 0.318)" : "transparent" }}>{i / 5 + 1}</button>
                    }
                })}
                <button className="bn" onClick={next}>Next</button>
            </div>
        </div>
    )
}