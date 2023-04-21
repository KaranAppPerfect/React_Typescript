import { TrueLiteral } from "typescript"

type GreetProps = {
    name : string,
    messageCount ?: number,
    isActive: boolean 
}

export const Greet = (props : GreetProps) => {
    const { messageCount = 0 } = props;
    return (
        <h3> 
            {   props.isActive ?
                    `Welcome ${props.name}. You have ${messageCount} messages for you! `
                : ` Welcome User `
            }
        </h3>
    )
}

