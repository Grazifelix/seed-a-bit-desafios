

function ShowContent({label, userContent }) {
    return (
        <div>
            <label>{label}</label>
            <input placeholder={userContent} disabled></input>
        </div>
    );
}

export default ShowContent