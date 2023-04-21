import { PersonProps } from "./Person_types"

export const Person = (props : PersonProps) => {
    return (
        <h1> {props.name.first} {props.name.last} </h1>
    )
}