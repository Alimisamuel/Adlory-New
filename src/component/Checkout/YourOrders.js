import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";

const YourOrders = (props) => {
    let dispatch = useDispatch();
    // Remove from Cart
    const rmProduct = (id) => {
        dispatch({ type: "products/removeCart", payload: { id } });
    }
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
    console.log(cartTotal())
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
                                                            <i className="fa fa-trash text-danger" onClick={() => rmProduct(data.id)} style={{ 'cursor': 'pointer' }}></i>
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
                                                ))

                                                }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>SubTotal</th>
                                <td className="product-subtotal">&#8358;{cartTotal()}</td>
                            </tr>
                            <tr>
                                <th>Shipping</th>
                                <td>charges depends on the location</td>
                            </tr>
                            <tr>
                                <th>Paystack charges</th>
                                <td>&#8358;150</td>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <td className="product-subtotal">&#8358;{cartTotal() + 150}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}

export default YourOrders