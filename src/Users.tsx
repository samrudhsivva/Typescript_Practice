type UserProps={
   usersList :{
     firstName:string,
    lastName:string
   }[]
}
export const Users=(props : UserProps)=>{
    return(
        <>
        {
            props.usersList.map((user)=>{
              return  <h4>{user.firstName} {user.lastName}</h4>
            })
        }

        </>
    )
}