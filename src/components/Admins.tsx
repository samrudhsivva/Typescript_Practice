export type Admin={
    firstName: string,
    lastName: string
}
export const Administrator=(props : Admin)=>
{
    return(<h2>
    The System Administrator is {props.firstName} {props.lastName};
    </h2>
    )

}