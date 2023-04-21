import { Name } from "./Person_types"

type personListProps = {
    names : Name[]
}

export const PersonList = (props : personListProps) => {
   return (
    <>
        {
            props.names.map( (name) => {
                return (
                    <h4> {name.first} {name.last} </h4>
                )
            })
        }
    </>
   )
}