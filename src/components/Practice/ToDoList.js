// import React, {useState} from "react"; || NOT MENDATORY
import {useState} from "react";
import {Row, Col, Button } from "react-bootstrap";
import {MdDeleteForever, MdPlaylistAdd} from "react-icons/md"


const DFlex = {
  display: 'flex',
  gap: '10px',
}


const DNone = {
  display: 'none',
}


export const ToDOList = () => { 

  const [inValu, setinValu] = useState();
  const [id, setid] = useState(0);
  const [inArray, setinArray] = useState([]);

  const AddList = () => {
    const data = {
      id: id,
      item: inValu,
    }
    setinArray([...inArray, data]);
    setid(id + 1);
    setinValu('');
  }
  const deleteOp = (x) => {
    let newArr = inArray.filter((m) => m.id !== x);
    setinArray(newArr);
  }


  return(<>
    <Row className="justify-content-center bg-black"><Col sm={7}>
      <Row className="align-items-center"><Col sm={9}>
        <input className="mb-0" type="text" placeholder="add a item" value={inValu} onChange={(x) => setinValu(x.target.value)}/></Col>
        <Col sm={3}><Button variant="success" onClick={AddList}><MdPlaylistAdd /></Button></Col></Row>
        <ul className="color-white p-0">
          {inArray.map((val) => {return (
            <div style={val.item ? DFlex : DNone} key={val.id}><span onClick={() => deleteOp(val.id)}><MdDeleteForever/></span><li>{val.item}</li></div>
          )})}        
        </ul>
    </Col></Row>
  </>)

  
}