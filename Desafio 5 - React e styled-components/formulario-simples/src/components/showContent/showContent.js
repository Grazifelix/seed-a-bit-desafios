import { Label, Input, DivInputField} from "../inputField/inputFieldStyle";

export default function ShowContent({label, userContent }) {
    return (
        <DivInputField>
            <Label>{label}</Label>
            <Input placeholder={userContent} disabled></Input>
        </DivInputField>
    );
}
