type MessageProps = {
    status : "loading" | "success" | "error"
}


export const Message = (props : MessageProps) => {
    
    if(props.status === 'loading'){
        return <h1> Loading </h1>;
    }
    else if(props.status === 'success')
        return <h1> Data fetched successfully </h1>
    else
        return <h1> Error in fetching data </h1>
}