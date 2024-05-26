import { HomeBackground, PasswordLabel} from "./homeStyle";
import InputField from "../../components/inputField/inputField";
import ShowContent from "../../components/showContent/showContent";
import { useState, useEffect } from "react";
import Button from "../../components/button/button";

function Home() {
    const [nome, setNomeState] = useState("");
    const [email, setEmailState] = useState("");
    const [telefone, setTelefoneState] = useState("");
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [isHidden, setIsHidden] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [passowordLengthMsg, setPasswordLengthMsg] = useState(true)

    useEffect(() => {
        if (nome !== "" && email !== "" && telefone !== "" && cpf !== "" && senha !== "") {

            setPasswordLengthMsg(false)

            if (senha.length >= 6) {
                setPasswordLengthMsg(true)
                setIsDisabled(false)
            } else {
                setIsDisabled(true)
            }
        } else {
            setPasswordLengthMsg(true)
            setIsDisabled(true)

        }

    }, [nome, email, telefone, cpf, senha, isDisabled, passowordLengthMsg])

    const alternar = () => { setIsHidden(!isHidden); }
    const limpar = () => {
        setNomeState("");
        setEmailState("");
        setTelefoneState("");
        setCpf("");
        setSenha("");
        setPasswordLengthMsg(true)
    }

    return (
        <HomeBackground>
            {isHidden === false ?
                <form>
                    <InputField label={"Nome:"} type={"text"} placeholder={"Digite seu nome"} saveState={setNomeState}></InputField>
                    <InputField label={"Email:"} type={"email"} placeholder={"seuemail@gmail.com"} saveState={setEmailState}></InputField>
                    <InputField label={"Telefone:"} type={"text"} placeholder={"(00) 00000-0000"} saveState={setTelefoneState}></InputField>
                    <InputField label={"Cpf:"} type={"text"} placeholder={"Digite seu CPF"} saveState={setCpf}></InputField>
                    <InputField label={"Senha:"} type={"password"} placeholder={"Digite sua senha"} saveState={setSenha}></InputField>
                    <PasswordLabel hidden={passowordLengthMsg}>A senha deve conter no minimo 6 caracteres.</PasswordLabel>
                    <Button buttonName={"Enviar"} callFunction={alternar} isDisabled={isDisabled}></Button>
                </form>

                :
                <div>
                    <ShowContent label={"Nome"} userContent={nome}></ShowContent>
                    <ShowContent label={"Email"} userContent={email}></ShowContent>
                    <ShowContent label={"Senha"} userContent={telefone}></ShowContent>
                    <ShowContent label={"Cpf"} userContent={cpf}></ShowContent>
                    <Button buttonName={"Voltar"} callFunction={() => {alternar(); limpar()}}></Button>
                    
                </div>


            }

        </HomeBackground>

    );


}

export default Home