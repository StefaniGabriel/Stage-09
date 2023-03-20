import { Link } from "react-router-dom";

import { Container, Form, Content } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NewTag } from "../../components/NewTag";
import { Button } from "../../components/Button";
import { ButtonLink} from '../../components/ButtonLink'

export function CreateMovie() {
    return(
        <Container>
           <main>
           <Link to="/">
                <ButtonLink 
                title="Voltar"
                icon={FiArrowLeft}
                />
            </Link>
            <Content>
            <h1>Novo filme</h1>
            <Form>
                <div>
                <Input placeholder="Título" />
                <Input placeholder="Sua nota (de 0 a 5)" />
                </div>
                <Textarea placeholder="Observações" />
                <p>Marcadores</p>
                <div className="tags">
                <NewTag value="Drama" />
                <NewTag isNew placeholder="Novo marcador" />
                </div>
                <div className="button">
                <button className="delete">
                Excluir filme
                </button>
                <Button title="Salvar alterações"/>            
                </div>
                
            </Form>
            </Content>
            </main>

        </Container>
    )
}