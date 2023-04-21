
import { useCallback, useState } from "react"
import { Input } from "./Input"


export const Inputs = () => {

    const [state1,setState1] = useState("");
    const [state2,setState2] = useState("");
    const [state3,setState3] = useState("");

    const handleState1 = useCallback( (e: React.ChangeEvent<HTMLInputElement>) => {
        setState1(e.target.value);
    },[])

    const handleState2 = useCallback( (e: React.ChangeEvent<HTMLInputElement>) => {
        setState2(e.target.value);
    },[])

    const handleState3 = useCallback( (e: React.ChangeEvent<HTMLInputElement>) => {
        setState3(e.target.value);
    },[])

    return (
        <>
            <h1 style={{textAlign: 'center'}}> Memoisation Optimization Technique </h1>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Input id={1} value={state1} handleChange={handleState1} /> 
                <Input id={2} value={state2} handleChange={handleState2} /> 
                <Input id={3} value={state3} handleChange={handleState3} /> 
            </div>
        </>
    )


}