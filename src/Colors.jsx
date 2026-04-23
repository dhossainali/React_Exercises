export function Colors ({colors}) {

    return (
        <ul>
            {colors.map((e)=>{ return(
                <li key={e.id}>{e.name}</li>)
            })}
        </ul>
    )
}