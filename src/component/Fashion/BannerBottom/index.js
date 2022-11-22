import React from 'react'
import { Link } from 'react-router-dom'
// import img1 from '../../../assets/img/offer/woman.png'
// import img2 from '../../../assets/img/offer/woman1.png'
// import img3 from '../../../assets/img/offer/bag.png'
// import img4 from '../../../assets/img/offer/woman4.png'
// import img5 from '../../../assets/img/offer/kids.png'

const BannerBottom = () => {
    return (
        <>
            <section id="product_variation_one" style={{paddingTop:'40px'}}>
                <div className="container collection_container">
                    <h2 className='collecions'> Our Collections</h2>
                    <hr style={{ height: "1px", backgroundColor: 'black', width: '90%', border: 'none' }}></hr>
                    {/* <div className="row">
                <div className="col-lg-4 col-md-9">
                    <div className="product_variation_one_boxed img-zoom-hover collection_box_inner">
                        <img src={img1} alt="img" className='collection_img' />
                        <div className="product_var_one_text collection_button">
                            <Link to="/shop" className="theme-btn-one bg-black btn_sm ">CLEANSER</Link>
                        </div>
                    </div>
                    <div className="product_variation_one_boxed img-zoom-hover collection_box_inner">
                        <img src={img2} alt="img" />
                        <div className="product_var_one_text collection_button">
                      
                           
                            <Link to="/shop" className="theme-btn-one bg-black btn_sm">MOISTURIZER</Link>
                        </div>
                    </div>
                </div>
            
                <div className="col-lg-4 col-md-6">
                    <div className="product_variation_one_boxed img-zoom-hover collection_box_inner">
                        <img src={img4} alt="img" />
                        <div className="product_var_one_text collection_button">
                           
                            <Link to="/shop" className="theme-btn-one bg-black btn_sm">TREATMENT</Link>
                        </div>
                    </div>
                    <div className="product_variation_one_boxed img-zoom-hover collection_box_inner">
                        <img src={img5} alt="img" />
                        <div className="product_var_one_text collection_button">
                           
                            <Link to="/shop" className="theme-btn-one bg-black btn_sm product_var_one_text_center collection-btn " >BODY LOTION/WASH</Link>
                        </div>
                    </div>
                </div>
            </div> */}

                    <div className='collection-row'>
                        <div className='collection_row_inner'>
                            <div className='box effect5 hover-image'>
                                <div className='collection_img c-img1 hover-image'>
                            <Link to="/shop" className="theme-btn-one bg-black btn_sm " >CLEANSER</Link>
                            </div>
                            </div>
                            <div className='box effect5'>
                            <div className='collection_img c-img2'>
                            <Link to="/shop" className="theme-btn-one bg-black btn_sm " >MOISTURIZER</Link>
                            </div>
                            </div>
                        </div>
                        <div className='collection_row_inner'>
                            <div className='box effect5 '>
                            <div className='collection_img c-img3 img_hover'>
                                
                            <Link to="/shop" className=" theme-btn-one bg-black btn_sm " >TREATMENT</Link>
                            </div>
                            </div>
                            <div className='box effect5'>
                            <div className='collection_img c-img4 img_hover'>
                            <Link to="/shop" className="theme-btn-one bg-black btn_sm  " >BODY LOTION/WASH</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BannerBottom;
