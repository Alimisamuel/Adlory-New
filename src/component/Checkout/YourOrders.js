import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import {Price} from './BillingsInfo'

const YourOrders = (props) => {
  let dispatch = useDispatch();
  // Remove from Cart
  const rmProduct = (id) => {
    dispatch({ type: "products/removeCart", payload: { id } });
  };
  // Clear

  // Value Update
  // const cartValUpdate = (val, id) => {
  //     dispatch({ type: "products/updateCart", payload: { val, id } });
  // }
  let carts = useSelector((state) => state.products.carts);

  const cartTotal = () => {
    return carts.reduce(function (total, item) {
      return total + (item.quantity || 1) * item.price;
    }, 0);
  };
  console.log(cartTotal());
  return (
    <>
      <div className="order_review  box-shadow bg-white">
        <div className="check-heading">
          <h3>Your Orders</h3>
        </div>
        <div className="table-responsive order_table">
          <table className="table">
            <thead>
              <tr>
                <th>Remove</th>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((data, index) => (
                <tr key={index}>
                  <td className="product_remove">
                    <i
                      className="fa fa-trash text-danger"
                      onClick={() => rmProduct(data.id)}
                      style={{ cursor: "pointer" }}
                    ></i>
                  </td>
                  <td className="product_thumb">
                    <Link to={`/product-details-one/${data.id}`}>
                      <img src={data.img} alt="img" />
                    </Link>
                  </td>
                  <td className="product_name">
                    <Link to={`/product-details-one/${data.id}`}>
                      {data.title}
                    </Link>
                  </td>
                  <td className="product-price">&#8358;{data.price}.00</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>SubTotal</th>
                <td className="product-subtotal">&#8358;{cartTotal()}</td>
              </tr>
              <tr>
                <th>Shipping</th>
                <td>&#8358; {props.region === 0 ? 
                <>
                </>: <> {props.region} <span style={{fontSize:'12px', fontStyle:'italic', color:'grey'}}>(Large orders may attract extra fees) </span></>
                
                } {props.stat === 0 ?
                <>
                </>:<> {props.stat} <span style={{fontSize:'12px', fontStyle:'italic', color:'grey'}}>(Large orders may attract extra fees) </span></>}
             
                    {
                        props.selectedState === "LAGOS" ?
                        <>
                        <br/>
                        <p style={{fontSize:'12px', fontStyle:'italic'}}>Shipping (3-5 Working Days)  Isand N2200</p>
                           <br/>
                        <p style={{fontSize:'12px', fontStyle:'italic'}}>
                        EXTREME LOCATIONS (3-5 working days)
Alimosho,Badagry, Iju
Ishaga, Ojo Epe
Division Epe, Ibeju-
Lekki Ikorodu
Agbado/Oke-Odo,
Agboyi/Ketu, Ajeromi,
Ayobo, Badagry West,
Badagry, Ifelodun,
Igando/lkotun,
Igbogbo/Bayeku, Ijede,
Ikorodu North, Ikorodu
West, Ikosi Ejinrin,
Ikorodu, Ikorodu West,
Mosan/Okunola,,
Awoyaya, fagba,
Command ipaja, Odi
Olowo/Ojuwoye, Ojo,
Part in Ojodu Berger
Opic Ojokoro, Olorunda,
Onigbongbo, Oriade,
Sangotedo, Sango ota.
Ajuwon, Alagbado, Epe,
Ikotun, Ahmadiya,
Alakuko, Lakowe, Abule
Egba, Ekoro: N2500
                        </p>
                        </>
                        :
                        <>
                        
                        </>
                    }                
                </td>
              </tr>
              <tr>
                <th>Transaction Fee</th>
                <td>&#8358;150</td>
              </tr>
              <tr>
                <th>Total Details</th>
                <td className="product-subtotal" style={{color:'grey', fontWeight:'lighter', fontStyle:'italic'}}>Subtotal + Shipping fee + Transaction Fee</td>
              </tr>
              <tr>
                <th>Total</th>
                <td className="product-subtotal">&#8358;{cartTotal() + 150 + props.region + props.stat}</td>
              </tr>
         
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default YourOrders;
