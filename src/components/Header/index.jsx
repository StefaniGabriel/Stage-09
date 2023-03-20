import { Link } from "react-router-dom";

import { Container, Profile } from "./style";
import { Input } from "../../components/Input";


export function Header() {
    return(
        <Container>

            <h1>RocketMovies</h1>

            <Input 
            placeholder="Pesquisar pelo título"
           
            />
            
            <Profile>
                <div>
                <Link to="/profile" >
                <strong>Stefani Gabriel</strong>
               </Link>
                    <span>sair</span>
                </div>
                <img src="https://github.com/stefanigabriel.png" 
                alt="Foto do usuário" />
            </Profile>
        </Container>
    )
}