import React, { useEffect } from 'react'
import logo from '../../../assets/img/logo.png'
// import payment from '../../../assets/img/common/payment.png'
import { Link } from 'react-router-dom'
import Cookie from '../Cookie'
import NewsletterModal from '../NewsletterModal'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'

const FooterData = [
    {
        title: "INFORMATION",
        links: [
            { linkTitle: "Home", link: "/" },
            { linkTitle: "About us", link: "/about" },
       
            { linkTitle: "Book A Consultation", link: "/compare" }
          
        ]
    },
    {
        title: "SHOP",
        links: [
            { linkTitle: "Cart View One", link: "/cart" },
            { linkTitle: "Cart View Two", link: "/cartTwo" },
            { linkTitle: "Empty Cart", link: "/empty-cart" },
            { linkTitle: "Checkout View One", link: "/checkout-one" },
            { linkTitle: "Checkout View Two", link: "/checkout-two" },
            { linkTitle: "Wishlist", link: "/wishlist" }
        ]
    }
]

const Footer = () => {
    let dispatch = useDispatch();

    let promoCenter = useSelector((state) => state.settings.promoCenter);
    let promoStatus = useSelector((state) => state.settings.promoStatus);
    let stopPromo = useSelector((state) => state.settings.stopPromo);
    let cookie = useSelector((state) => state.settings.cookie);
    let stopCookie = useSelector((state) => state.settings.stopCookie);

    useEffect(() => {
        if (promoStatus) {
            return
        } else {
            dispatch({ type: "settings/promoStatus" })
            setTimeout(function () {
                dispatch({ type: "settings/promoCenter" })
            }, 30000)
        }

        if (stopCookie) {
            return
        } else {
            setTimeout(function () {
                dispatch({ type: "settings/cookie" })
            }, 50000)
        }
    }, [dispatch, promoStatus, stopCookie]);


    const startPromoModal = () => {
        if (stopPromo) {
            dispatch({ type: "settings/promoCenter" })
            return;
        } else {
            dispatch({ type: "settings/promoCenter" })
            setTimeout(function () {
                dispatch({ type: "settings/promoCenter" })
            }, 900000)
        }

    }

    const stopPromoModal = () => {
        dispatch({ type: "settings/stopPromo" })
    }

    const cancelCookie = () => {
        dispatch({ type: "settings/cookie" })
    }

    const acceptCookie = () => {
        // Write your function there
        dispatch({ type: "settings/cookie" })
    }

    return (
        <>
            <footer id="footer_one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="footer_left_side">
                                <Link to="/" ><img src={logo} alt="logo"  style={{width:'120px'}} /></Link>
                                {/* <p>
                                    <strong>ADLORY</strong> We research and make available a wide range of top quality
brands and products with the thousands of Adlory Certified Researched products
                                </p> */}
                                <div className="footer_left_side_icon">
                                    <ul>
                                        {/* <li>
                                            <a href="#!"><i className="fa fa-facebook-f"></i></a>
                                        </li> */}
                                      
                                    
                                        <li>
                                            <a href="https://instagram.com/shopwithadlory?r=nametag" target='blank'><i className="fa fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://api.whatsapp.com/send/?phone=2348066375807&text=Hello+Doxaglowskincare%2C+My+name+is+__________&type=phone_number&app_absent=0" target='blank'><i className="fa fa-whatsapp"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/shopwithadlory" target='blank'><i className="fa fa-facebook"></i></a>
                                        </li>
                                        <li>Call/complaint: 08100069764</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            {FooterData.slice(0, 1).map((data, index) => (
                                <div className="footer_one_widget" key={index}>
                                    <h3>{data.title}</h3>
                                    <ul>
                                        {data.links.map((link, index) => (
                                            <li key={index}><Link to={link.link}>{link.linkTitle}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                        </div>
                        {/* <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                            {FooterData.slice(1, 2).map((data, index) => (
                                <div className="footer_one_widget" key={index}>
                                    <h3>{data.title}</h3>
                                    <ul>
                                        {data.links.map((link, index) => (
                                            <li key={index}><Link to={link.link}>{link.linkTitle}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div> */}
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="footer_one_widget">
                                <h3>NEWSLETTER</h3>
                                <div id="mc_embed_signup" className="subscribe-form">
                                    <form onSubmit={(e) => { e.preventDefault(); Swal.fire('Success', 'Thank you for your Subscribtion', 'success'); document.querySelector("input[type='email']").value = "" }}>
                                        <div className="mc-form">
                                            <input className="form-control" type="email" placeholder="Your Mail" name="EMAIL" defaultValue="" required />
                                            <div className="clear">
                                                <button className="theme-btn-one btn_md" type="submit" name="subscribe" defaultValue=""> Send Mail</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href='https://api.whatsapp.com/send/?phone=2348066375807&text=Hello+Doxaglowskincare%2C+My+name+is+__________&type=phone_number&app_absent=0'>
                <div className="go-top whatsapp active" >
                    <i className="fa fa-comments"></i>
                    <i className="fa fa-comments"></i>
                </div></a>
                <div className="go-top active" onClick={() => { window.scrollTo(0, 0) }}>
                    <i className="fa fa-chevron-up"></i>
                    <i className="fa fa-arrow-up"></i>
                </div>
            </footer>

            <section id="copyright_one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="copyright_left">
                                <h6>© CopyRight 2022 <span>Adlory</span>.All Rights Reserved.</h6>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="copyright_right">
                                {/* <img src={payment} alt="img" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {
                cookie ? <Cookie accept={acceptCookie} cancel={cancelCookie} /> : null
            }
            <NewsletterModal show={promoCenter} stop={stopPromoModal} start={startPromoModal} />
        </>
    )
}

export default Footer