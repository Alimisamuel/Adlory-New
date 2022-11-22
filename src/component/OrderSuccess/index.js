import React from 'react'
import { useHistory } from 'react-router-dom'
// import Img
import img from '../../assets/img/common/delivery_success.png'
import img1 from '../../assets/img/email/success.png'
import img2 from '../../assets/img/email/order-success.png'




const OrderSuccess = () => {

    const orderRef = (new Date()).getTime().toString()

    console.log(orderRef)
    const history = useHistory();
    const routeChange = () => {
        history.goBack()
    };
    return (
        <>
            <div className="tables_area">
                <div className="back_btn_emial">
                    <button className="theme-btn-one btn-black-overlay btn_sm" onClick={routeChange}>
                        <i className="fa fa-arrow-left mr-2"></i>Go Back
                    </button>
                </div>
                <table align="center" border="0" cellPadding="0" cellSpacing="0" className="box_table"
                    style={{ padding: "0 30px", BackgroundColor: "#fff", BoxShadow:" 0px 0px 14px -4px rgba(0, 0, 0, 0.2705882353)", width: "100%", display: "block" }}>
                    <tbody>
                        <tr>
                            <td>
                                <table align="center" border="0" cellPadding="0" cellSpacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={img} alt="img" style={{ marginBottom: "30px" }} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={img1} alt="img" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 className="title">thank you</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>Payment Is Successfully Processsed And Your Order Is On The Way</p>
                                                <p>Order ID:{orderRef}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={img2} alt="img"
                                                    style={{ marginTop: "30px", marginBottom: "30px" }} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                             

                            <button type="button" class="" download>Print Invoice</button>
                          
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="main-bg-light text-center top-0" align="center" border="0" cellPadding="0" cellSpacing="0"
                    width="100%">
                    <tbody>
                        <tr>
                            <td style={{ padding: "30px" }}>
                               
                             
                                <div style={{ borderTop: "1px solid #ddd", margin: "20px auto 0" }}></div>
                                <table border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ margin: "20px auto 0" }}>
                                    <tbody>
                                        <tr>
                                            
                                        </tr>
                                        <tr>
                                            <td>
                                                <p style={{ fontSize: "13px", margin: "0" }}>2022 Copy Right by Adlory</p>
                                            </td>
                                        </tr>
                                        <tr>
                                           
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default OrderSuccess
