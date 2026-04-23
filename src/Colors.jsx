import { Color } from "./Color"

export function Colors ({colors}) {

    return (
        <ul>
            {colors.map((color)=>{ return(
                <Color key={color.id} color={color}/>
            )})}
        </ul>
    )
}