type CloseType={
    name:string,
    device: string
}
export function Close(props:CloseType)
{
return(
    <>
    <h4>
    `bye {props.name} signing off your {props.device}`
    </h4>
    </>
)
}