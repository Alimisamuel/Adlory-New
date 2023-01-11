import React from 'react'
import { Link} from 'react-router-dom'


import { useSelector } from "react-redux";
// import img
import img1 from '../../assets/img/invoice/invoice.svg'
import logo from '../../assets/img/logo.png'
// import sign from '../../assets/img/invoice/sign.png'

const InvoiceOnes = () => {


  // Clear

  // Value Update
  // const cartValUpdate = (val, id) => {
  //     dispatch({ type: "products/updateCart", payload: { val, id } });
  // }
  let carts = useSelector((state) => state.products.carts);

  const cartTotal = () => {
    return carts.reduce(function (total, item) {
        return total + ((item.quantity || 1) * item.price)
    }, 0)

    
}


  const orderRef = (new Date()).getTime().toString()
  const orderDate = new Date().toDateString()
  // const history = useHistory();
  // const routeChange = () => {
  //     history.goBack()
  //   };
    return (
        <>
   
      <section className="theme-invoice-1 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto">
            <div className="back_btn_emial">
            <a  href='/'
            onClick={(e) => {window.location.href="/"}}>
                            <button className="theme-btn-one btn-black-overlay btn_sm" >
                                <i className="fa fa-arrow-left mr-2"></i>Go Back Home
                            </button></a>
                        </div>
              <div className="invoice-wrapper">
                <div className="invoice-header">
                  <div className="upper-icon">
                    <img src={img1} className="img-fluid" alt="svg"/>
                  </div>
                  <div className="row header-content">
                    <div className="col-md-6">
                        <img src={logo} className="img-fluid" alt="logo"/>
                        <div className="mt-md-4 mt-3">
                        <h4 className="mb-2">
                         Adlory Cosmetic store
                        </h4>
                        <h4 className="mb-0">shopwithadlory@gmail</h4>
                      </div>
                    </div>
                    <div className="col-md-6 text-md-right mt-md-0 mt-4">
                      <h2>invoice</h2>
                      <div className="mt-md-4 mt-3">
                        <h4 className="mb-2">
                          
                        </h4>
                        <h4 className="mb-0">Phone: 08100069764</h4>
                        <h4 className="mb-0">check your email for your payment reciept</h4>
                      </div>
                    </div>
                  </div>
                  <div className="detail-bottom">
                    <ul>
                      <li><span>issue date :</span><h4> {orderDate}</h4></li>
                      <li><span>invoice no :</span><h4> {orderRef}</h4></li>
                      <li><span>email :</span><h4> shopwithadlory@gmail</h4></li>
                    </ul>
                  </div>
                </div>
                <div className="invoice-body table-responsive-md">
                  <table className="table table-borderless mb-0">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product</th>
                        <th scope="col">price</th>
                        <th scope="col">total</th>
                      </tr>
                    </thead>
                    <tbody>
                    {carts.map((data, index) => (
                                                    <tr key={index}>
                                                        <td className="product_remove">
                                                       
                                                        </td>
                                                     
                                                        <td className="product_name">
                                                            <Link to={`/product-details-one/${data.id}`}>
                                                                {data.title}
                                                            </Link>
                                                        </td>
                                                        <td className="product-price">&#8358;{data.price}.00</td>
                                                        <td className="product-price">&#8358;{data.price}.00</td>
                                                      
                                                      
                                                    </tr>
                                                ))

                                                }
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="2"></td>
                        <td className="font-bold text-dark" colSpan="2">GRAND TOTAL</td>
                        <td className="font-bold text-theme">&#8358;{cartTotal()}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="invoice-footer text-right">
                  {/* <div className="authorise-sign">
                    <img src={sign} className="img-fluid" alt="sing" />
                    <span className="line"></span>
                    <h6>Authorised Sign</h6>
                  </div> */}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
        </>
    )
}

export default InvoiceOnes
