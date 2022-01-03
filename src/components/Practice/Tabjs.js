import {useState} from "react";
import {TabAPI} from "./TabAPI";


export const TabJS = () => {
    const [tabMap, settabMap] = useState(TabAPI);
    return(
        <>
            <div>
                {
                    tabMap.map((val) => {
                        return <h1>dfsdfsdf</h1>
                    })
                }
            </div>
        
        </>
    )
} 