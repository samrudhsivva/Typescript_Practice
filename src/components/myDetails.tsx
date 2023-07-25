type detailsProps={
    name: string,
    number: number,
    location?: string
}
export const Details= (props : detailsProps)=>{
    return (
        <>
        <ol>
            <li>
                {props.name}
            </li>
            <li>
                {props.number}
            </li>
            <li>
                {props.location}
            </li>
        </ol>
        </>
    )

}