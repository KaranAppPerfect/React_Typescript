import { memo } from "react";


type inputProps = {
    value : string,
    handleChange : (event: React.ChangeEvent<HTMLInputElement>)  => void,
    id:number
}

export const Input = memo( ({value, handleChange, id} : inputProps) => {

    console.log(`Input ${id} rendered`);

    return (
        <>
            <input type='text' value={value} onChange={handleChange} />
        </>
    )
});