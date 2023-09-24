import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        Welcome to RJ Collection, your premier destination for fashion and electronics. 
                        At RJ Collection, we curate a diverse and stylish collection of men's and women's clothing,
                         from everyday essentials to unique fashion pieces for special occasions. 
                         Elevate your style with our elegant jewelry collection, featuring timeless classics and trendy statement pieces.
                          Stay ahead in the world of technology with our cutting-edge electronics, designed to enhance your lifestyle. 
                          We are dedicated to providing high-quality products and exceptional customer service,
                           making your shopping experience with us seamless and enjoyable. 
                           Discover the perfect blend of fashion and technology at RJ Collection.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/Rj.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About