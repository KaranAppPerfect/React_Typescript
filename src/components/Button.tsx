type buttonProps = {
    handleSubmit : ( event : React.MouseEvent<HTMLButtonElement> ,
                    id: number ) => void,
}

export const Button = (props : buttonProps) => {
    return (
        <>
            <button onClick={(event) => props.handleSubmit(event,1)}> Button  </button>
        </>
    )
}