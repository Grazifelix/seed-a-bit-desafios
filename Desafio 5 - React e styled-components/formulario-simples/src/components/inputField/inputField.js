export default function InputField({ label, type, placeholder, saveState}) {

    return (<div>
        <label>{label}</label>
        <input type={type} name="user_name" placeholder={placeholder} onChange={(e) => saveState(e.target.value)}></input>
    </div>);
}