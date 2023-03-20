import { Link } from "react-router-dom";
import { FiLock } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input";
import { ButtonLink } from "../../components/ButtonLink";
import { Button } from "../../components/Button";


export function Profile() {
    return(
        <Container>
            <header>
            <Link to="/">
                <ButtonLink 
                title="Voltar"
                icon={FiArrowLeft}
                />
            </Link> 
            </header>
            <Avatar>
            <img className="avatar" src="https://github.com/stefanigabriel.png" 
                alt="Foto do usuário" /> 
            <label htmlFor="avatar">
            <FiCamera />
            <input
            id="avatar"
            type="file" />
            </label>
            </Avatar>
           <Form>
           <Input placeholder="Nome" 
            icon={FiUser}/>
            <Input placeholder="E-mail"
            icon={FiMail} />
            <Input placeholder="Senha atual"
            icon={FiLock} />
            <Input placeholder="Nova senha" 
            icon={FiLock}/>
            <Button title="Salvar" />
           </Form>

        </Container>
    )
}