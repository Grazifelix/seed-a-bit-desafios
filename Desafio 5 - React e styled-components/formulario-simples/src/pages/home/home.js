import { HomeBackground, ShowInformation } from "./homeStyle";
import InputField from "../../components/inputField/inputField";
import { useState, useEffect } from "react";

function Home() {
    const [nome, setNomeState] = useState("");
    const [email, setEmailState] = useState("");
    const [telefone, setTelefoneState] = useState("");
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [isHidden, setIsHidden] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if (nome !== "" && email !== "" && telefone !== "" && cpf !== "" && senha !== "") {

            if (senha.length >= 6) {
                setIsDisabled(false)
            }
        } else {
            setIsDisabled(true)
        }
    }, [nome, email, telefone, cpf, senha, isDisabled])

    const alternar = () => { setIsHidden(!isHidden); }
    const limpar = () => {
        setNomeState("");
        setEmailState("");
        setTelefoneState("");
        setCpf("");
        setSenha("");
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
                    <button onClick={alternar} disabled={isDisabled}>Enviar</button>
                </form>

                :

                <ShowInformation>
                    <p>Teste</p>
                    <h1>Teste</h1>
                    <button onClick={() => { alternar(); limpar() }}>voltar</button>

                </ShowInformation>

            }

        </HomeBackground>

    );




}

export default Home