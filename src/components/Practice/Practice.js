import React from "react";
import { Container} from "react-bootstrap";
import {TabJS} from "./Tabjs"
// import {AccordionJS} from "./Accordion"
// import {ToDOList} from "./ToDoList"



export const Practice = () => {


    return(
        <>
            <Container>
                <TabJS /> 
                {/* <AccordionJS />  */}
                {/* <ToDOList/>             */}
            </Container>
         </>
     )
}







// ============================ ToDOList ====================================
// export const Practice = () => {

    
//     const [InputArrayList, setInputArrayListy] = useState("");
//     const [ListArray, setListArray] = useState([]);
//     const [line, setline] = useState(false);

//     const ItemRemove = () => {
//         setline(true);
//     }
    
//     const InputChange = (event) => {
//         setInputArrayListy(event.target.value);
//     };

//     const addButton = () => {
//         setListArray((oldArray) => {
//             return[...oldArray, InputArrayList]
//         });
//         setInputArrayListy("");
//     };

    

//     return(
//         <>

//             <Container className="btToDoList bg-black pt-3 pb-4">
//                 <Row className="justify-content-center">
//                     <Col sm={7}>
//                         <Row className="align-items-center">
//                             <Col sm={9}>
//                                 <input className="mb-0"
//                                     type="text"                                    
//                                     value={InputArrayList}
//                                     placeholder="add a item"
//                                     onChange={InputChange}
//                                 />
//                             </Col>
//                             <Col sm={3}>
//                                 <Button variant="success" onClick={addButton}><BsPlusLg /></Button>
//                             </Col>
//                         </Row>
//                         <ul className="color-white p-0">

//                             {
//                                 ListArray.map((val, index) => {
//                                     return (
//                                         <div key={index} style={{display: val ? "flex" : "none"}}>
//                                             <span onClick={ItemRemove}><MdDeleteForever/></span>                                            
//                                             <li style={{ textDecorationLine: line ? "line-through" : "none" }}> {val}</li>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </ul>
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     )
// }




// export const Practice = () => {

    

    // {/* ============================ INCRIMENT DECRIMENT ==================================== */}

        
    // const [IncDecValue, setIncDecValue] = useState(0);
    // const IncrementButton = () => {
    //     if(IncDecValue >= 0 && IncDecValue < 10) {        
    //         setIncDecValue(IncDecValue + 1);
    //     }
    // } 
    // const DecrementButton = () => {
    //     if(IncDecValue > 0) {            
    //         setIncDecValue(IncDecValue - 1);
    //     } else {
    //         alert("It's less then Zerro");
    //     }
    // }

    // {/* ============================ picup wishes ==================================== */}
    

    // let d = new Date().getHours();
    // let wishes = '';

    // const chingeheading = {
    //     color: 'black',
    //     backgroundColor: 'skyblue',
    //     padding: '10px',
    //     margin: '0 auto',
    //     textAlign: 'center'
    // }

    // const headingSpan = {
    //     fontWeight: '400'
    // }



    // if(d>=1 && d<12){
    //     wishes = "Good Morning"
    //     headingSpan.color = '#fff';
    // } else if(d>=12 && d<20){
    //     wishes = "Good Afternoon";
    //     headingSpan.color= 'rgb(61, 165, 63)';
    // } else {
    //     wishes = "Good Night";
    //     headingSpan.color = 'red';
    // }       
    

    // {/* ============================ calculator ==================================== */}
    // function add(x,y) {
    //     let result = x+y;
    //     return result;
    // }
    
    // function sub(x,y) {
    //     let result = x-y;
    //     return result;
    // }
    
    // function mul(x,y) {
    //     let result = x*y;
    //     return result;
    // }
    
    // function divi(x,y) {
    //     let result = x/y;
    //     result = result.toFixed(3);
    //     return result;
    // }

    // {/* ============================ data collection on form ==================================== */}

    // const [storeValue, setStore] = useState();      

    // const [Heading, setHeading] = useState({        
    //     Fname: "",
    //     Lname: "",
    //     Email: "",
    //     PhoneNo: "",
    // });

    // const inputValue = (event) => {
    //     const {name, value} = event.target; // "that means" 'const value = event.target.value;' and 'const name = event.target.name;'

    //     setHeading(() => {

    //         return {
    //             ...Heading,
    //             [name] : value,
    //         }
    //     });

    // }

    // const Submit = (event) => {
    //     setStore(Heading.Fname + ", " + Heading.Lname  + ", " + Heading.Email  + ", " + Heading.PhoneNo);
    // }


    // {/* ============================ show time ==================================== */}
    // let Time = new Date().toLocaleTimeString();
    // const [ShowTime, setShowTime] = useState(Time);
    // setInterval(() => {
    //     let CTime = new Date().toLocaleTimeString();
    //     setShowTime(CTime);
    // }, 1000);


  

    // return(
        // <>

        // {/* ============================ show time ==================================== */}
        // {/* <p>{ShowTime}</p> */}
        
            // {/* ============================ INCRIMENT DECRIMENT ==================================== */}
            // <div className="bg-black">
            // <p className="color-white">{IncDecValue}</p>
            //     <div><span onClick={IncrementButton} style={addButton}>+</span><span onClick={DecrementButton} style={addButton}>-</span></div>
            // </div>
        // {/* ============================ picup wishes ==================================== */}
        // <h1 style={chingeheading}>Hellow sir, <strong style={headingSpan}>{wishes}</strong></h1> 

            // {/* ============================ calculator ==================================== */}

                // <h1 className="ic-mt-30">calculator</h1>
                //     <ul>
                //         <li>{add(40,20)}</li>
                //         <li>{sub(10,20)}</li>
                //         <li>{mul(10,20)}</li>
                //         <li>{divi(20,15)}</li>
                //     </ul>


            // {/* ============================ data collection on form ==================================== */}
        //  <h1 className="ic-mt-30">data collection form</h1>
           
        //    <form className="bg-black">
        //    <h2 className="color-white">{storeValue}</h2>
        //         <input 
        //             type="text" 
        //             placeholder="enter first name" 
        //             name="Fname"
        //             onChange={inputValue} 
        //             value={Heading.Fname}
        //         />
        //         <input 
        //             type="text" 
        //             placeholder="enter last name" 
        //             name="Lname"
        //             onChange={inputValue} 
        //             value={Heading.Lname}
        //         />
        //         <input 
        //             type="text" 
        //             placeholder="Email" 
        //             name="Email"
        //             onChange={inputValue} 
        //             value={Heading.Email}
        //         />
        //         <input 
        //             type="number" 
        //             placeholder="Phone no" 
        //             name="PhoneNo"
        //             onChange={inputValue} 
        //             value={Heading.PhoneNo}
        //         />

        //         <Link to="{void(0)}" onClick={Submit}>Submit</Link>
        //     </form>

            
            
        // </>
    // )
// }
