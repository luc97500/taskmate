import React, { useState } from 'react'
//parent child props


export const BoxCard = ({ result, children }) => {
  const [show, setShow] = useState(true);
  
  return (
    <>
    <div className={show ? "" : "hidden"}>
      <div className={`box ${result}`}>
        {children}
        <button onClick={() => setShow(!show)} className="trigger">
          Hide
        </button>
      </div>
    </div>
    <div>
      {/* {color if else condition inline styling} */}
    <button style={{backgroundColor : !show ? '#3D8361' : "#be3434" , padding:"10px",borderRadius:"5px"}} onClick={() => setShow(true)} className="hide">
      Unhide
    </button>
  </div>
  </>
  );
};
