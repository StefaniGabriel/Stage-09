import { Container } from "./styles";
import { Tag } from "../Tag";
import { RatingStar } from "../RatingStar"
import { Link } from "react-router-dom";


export function NotesMovies(){
   return(
    <Container >
       
       <div> 
       <Link to="/MoviePreview">
       <h3>Interestellar</h3>
       </Link>
        <RatingStar />
        <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por</p>
        <div>
        <Tag title="Ficção Científica"/>
        <Tag title="Drama"/>
        <Tag title="Família"/>
        </div>

        </div>
      
       
    </Container>
   )

}