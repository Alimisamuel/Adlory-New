import React from 'react'
import ProductCard from '../Product/ProductCard'
import { useSelector } from "react-redux";

const RelatedProduct = () => {
    let products = useSelector((state) => state.products.products);
    return (
        <>
            <section id="related_product" className="pb-100">
                <div className="container">
                 
                    <div className="row" style={{justifyContent:'space-between', width:'100%'}}>
                        {products.slice(0, 4).map((data, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 new_arrival_card" key={index} >
                                <ProductCard data={data} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default RelatedProduct