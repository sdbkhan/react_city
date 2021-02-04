import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card"
import Sdata from "./Sdata";

// function ncard(val) {
//   return(
    
// <Card
// imgsrc={val.imgsrc}
// title={val.title}
// sname={val.sname}
// link={val.link}
// />
//   )
// }

ReactDOM.render(
  
<>


{Sdata.map((val, index)=>{
  return (
    
<Card
imgsrc={val.imgsrc}
title={val.title}
sname={val.sname}
link={val.link}
/>
  );
})}

</>,
  document.getElementById('root')
);


