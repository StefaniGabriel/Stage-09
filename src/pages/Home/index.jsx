import { Link } from "react-router-dom";

import { Container, Content } from "./styles.js";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { NotesMovies } from "../../components/NotesMovies";
import { FiPlus } from "react-icons/fi";


export function Home(){
  return(
    <Container >
      <Header />
    <main>
     <section>
     <h2>Meus filmes</h2>
    <Link to="/createmovie">
    <Button title="Adicionar filme"
    icon={FiPlus} >
    </Button>
    </Link>
     </section>
     <Content>
     <div>
     <NotesMovies />
     <NotesMovies/>
     <NotesMovies/>
     <NotesMovies />
     <NotesMovies />
     <NotesMovies />
     <NotesMovies />
     </div>
     </Content>
    </main>
    </Container>
    
  )
}