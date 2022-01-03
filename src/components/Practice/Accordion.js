import React, {useState} from "react";
import {AccordionAPI} from "./AccordionAPI"
import {AccordionBdy} from "./AccordionBdy"


export const AccordionJS = () => {
    
    const [Questin, setQuestin] = useState(AccordionAPI);

    return(<>
        {Questin.map((ce) => {
            const {id} = ce;
            return <AccordionBdy key={id} {...ce}/>
        })}
    </>)

}