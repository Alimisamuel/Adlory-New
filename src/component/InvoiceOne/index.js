import React from 'react'
import InvoiceOnes from './Invoice-pdf'


const index = () => {


  // function refreshPage(){
  
   
  //   window.location.reload(false);
  // }
  return (
    <>
    <div style={{textAlign:'center', paddingTop:'20px'}}>
<p>Please snap or screenshot your invoice</p>
</div>
<InvoiceOnes/>

<div style={{display:'flex', justifyContent:'center',  paddingBottom:'50px'}}>

<a href="/" onClick={() => {window.location.href="/"}}>
<button className="theme-btn-one btn-black-overlay btn_sm" download >Go back home</button></a>
 
</div>
  </>
  )
}

export default index