import { Link } from "react-router-dom";

import { Container, Form, Background } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ButtonLink } from "../../components/ButtonLink";


import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";


export function SignIn(){
    return(
        <Container>

            <Form>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>
            <h2>Faça seu login</h2>
            <Input placeholder="E-mail"
            icon={FiMail} />
            <Input placeholder="Senha"
            icon={FiLock} />
            <Button title="Entrar" />
            <Link to="/register">
                <ButtonLink 
                title="Criar conta"
                />
            </Link>            
            </Form>

            <Background/>

        </Container>
    )
}