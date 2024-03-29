import { FiPlus, FiX } from "react-icons/fi"; 
import { Container } from "./styles";

export function NewTag({ isNew, value, onClick, ...rest}) {
    return(
        <Container isNew={isNew} >
            <input
            type="text"
            value={value}
            readOnly={!value}
            {...rest}
            
            />

            <button
            type="button"
            onClick={onClick}
            >
                {isNew ? <FiPlus/> : <FiX/>} 
            </button>
        </Container>
    );
}