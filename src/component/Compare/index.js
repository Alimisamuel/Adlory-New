import React from 'react'
import consultImg from '../../assets/img/consult.jpg'




const ShopTwo = () => {
   

    return (
        <>
          <div className='consult_container'>
            <div className='consult_topBox'>
                <div className='consult_text'>
                <h1>Get A Quick Consultation?</h1>
                <p>You can now receive professional skin consultation from the comfort of your home with our Skin specialist partners.</p>
                <p>Why you need this:</p>
               <p className='consult_li'>-To obtain professional recommendations and treatment plans for your skin concerns.</p>
               <p className='consult_li'>-Saves time and money</p>
                </div>
                
                <div className='consult_img'>
<img src={consultImg} alt="Consult"/>
                </div>
            </div>
            <div className='consult_bottomBox'>
    
            <a href="tel:08100069764" >               
<div className='consult_actions'>
<i className="fa fa-phone"></i>
<h3>Phone</h3>
<p>(+234) 810 006 9764</p>
</div></a>
            <a href="https://api.whatsapp.com/send/?phone=2348066375807&text=Hello+Doxaglowskincare%2C+My+name+is+__________&type=phone_number&app_absent=0" target='blank'>               
<div className='consult_actions'>
<i className="fa fa-whatsapp"></i>
<h3>Chat</h3>
<p>Chat us on whatsapp</p>
</div></a>
            <a href="mailto:shopwithadlory@gmail.com" >               
<div className='consult_actions'>
<i className="fa fa-envelope"></i>
<h3>Business Inquires</h3>
<p>shopwithadlory@gmail.com</p>
</div></a>
            </div>
            </div>     
           
        </>
    )
}

export default ShopTwo
