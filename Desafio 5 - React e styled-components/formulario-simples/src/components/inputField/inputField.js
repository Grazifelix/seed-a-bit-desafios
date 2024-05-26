import { DivInputField, Label, Input } from "./inputFieldStyle";

export default function InputField({ label, type, placeholder, saveState}) {

    return (<DivInputField>
        <Label>{label}</Label>
        <Input type={type} name="user_name" placeholder={placeholder} onChange={(e) => saveState(e.target.value)}></Input>
    </DivInputField>);
}