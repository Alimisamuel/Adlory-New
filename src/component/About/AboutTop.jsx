import React from 'react'
// import img
import img1 from '../../assets/img/common/img-about.jpg'

const AboutTop = () => {
    return (
        <>
            <section id="about-top" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_top_img">
                                <img src={img1} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_top_left_content">
                                <h2>ABOUT OUR ADLORY STORE</h2>
                                {/* <h4>We believe that every project existing in digital world is a result of an idea and every
                                    idea has a cause.</h4> */}
                                <p>our vision is to drive integrity in cosmetics retail/wholesale by stocking only authentic, safe and effective products.
You want authentic products that are safe and actually work.
We research and make available a wide range of top quality
brands and products with the thousands of <strong>ADLORY</strong> Certified Researched products to choose from, there's definitely a perfect match
for your budget, skin type and concern.</p>
                                <p>We ensure that all brands/products stocked are <strong>ADLORY</strong>
certified and sourced directly from the manufacturers or
reliable distributors.</p>
                                <p>Our vetting team is made up of cosmetic scientists who
spend hours researching safe and effective products.
Specifically, we focus on the ingredients, formulation and
reviews on products we intend to stock.
If we are not convinced about the safety of a product, it
would not be stocked!</p>
                                {/* <p>The brand was founded in October 2021, and since then it has upheld the
                                    philosophy that "everyone can enjoy the <strong>ANDSHOP</strong> of fashion." Its business covers more than 220 countries and regions around the world</p>
                                <p>The brand was founded in October 2021, and since then it has upheld the </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutTop
