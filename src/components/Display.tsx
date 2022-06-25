import React, { FC, useContext } from "react";
import { ZipcodeContext } from "../context/ZipcodeContext";
import { ZipCodeContextType } from "../types";
import './display.css';

export const Display:FC = () => {
    
    const {CityState,notFound} = useContext(ZipcodeContext) as ZipCodeContextType;

    if(notFound) return <p>ZipCode not found!</p>

    return (
        <div className="card">
            <h2>{CityState?.city} - {CityState?.state}</h2>
        </div>
    )
}