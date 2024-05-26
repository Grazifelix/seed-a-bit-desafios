import { ButtonStyled } from "./buttonStyle";

export default function Button({buttonName, callFunction, isDisabled=false}) {
    return (
        <div>
            <ButtonStyled onClick={callFunction} disabled={isDisabled}>{buttonName}</ButtonStyled>
        </div>
    );
}