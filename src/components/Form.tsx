import React,{FC, useContext, useState} from "react";
import { ZipcodeContext } from "../context/ZipcodeContext";
import { ZipCodeContextType } from "../types";
import "./form.css";

export const Form:FC = () =>{

    const {SetZipCode} = useContext(ZipcodeContext) as ZipCodeContextType

    const [error, setError] = useState<boolean>(false);
    const [pass, setPass] = useState<boolean>(false);
    const [zipcode, setZipcode] = useState<string>("");

    const handleChange = (ev:React.ChangeEvent<HTMLInputElement>):void => {
        const regexEval = /^[0-9\b]+$/;
        const data = ev.target.value;
        if(data===''|| regexEval.test(data)){
            setZipcode(data)
            setError(false);
        } else {
            setError(true);
        }
    }

    const handleSubmit = (ev:React.FormEvent):void => {
        ev.preventDefault();
        
        const regexEval = /^\d{5}$/;
        
        if(!regexEval.test(zipcode)) {
            setPass(true)
            return
        }
        setPass(false)
        SetZipCode(zipcode)
        setZipcode("");
    }

    return (
        <form onSubmit={(ev)=>handleSubmit(ev)}className="formContainer">
            <input 
                className="formContainer__input" 
                type="text"
                name="zipcode"
                value={zipcode}
                onChange={(ev)=>handleChange(ev)}
            />
            {error&&<p className="error">Only numbers please!</p>}
            {pass&&<p className="pass">US 5 digit zip code only!</p>}
        </form>
    );
}