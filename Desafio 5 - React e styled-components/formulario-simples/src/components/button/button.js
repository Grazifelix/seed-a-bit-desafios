export default function Button({buttonName, callFunction, isDisabled=false}) {
    return (
        <div>
            <button onClick={callFunction} disabled={isDisabled}>{buttonName}</button>
        </div>
    );
}