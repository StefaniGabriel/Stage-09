import { Rating} from "@mui/material";
import { useState } from "react";



export function RatingStar() {
    const [value , setValue] = useState(1)
    const [hover , setHover] = useState(-1)

    return(
    <Rating 
    name="hover-fadeback"
    value={value}
    precision={0.5}
    onChange={(event, newValue) => setValue(newValue)}
    onChangeActive={(event, newHover) => setHover(newHover)}
    sx={{
        
        color: "#FF859B",
    
    }}
    
    />
    
    )
}
