import React, {useState} from "react";

const AcHeading = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}

export const AccordionBdy = (props) => {
    const [show, setshow] = useState(false);
    return (
    <>

        <div>
            <h3 style={AcHeading}>{props.heading}<span onClick={() => setshow(!show)}>{!show ? "+" : "-"}</span></h3>
        </div>
        { show && <p>{props.text}</p>}
    </>
    )
}