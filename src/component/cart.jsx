import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((state) => state.handleCart); // Assuming 'handleCart' is your cart reducer name
    const dispatch = useDispatch();

    // Define a function to handle quantity changes
    const handleButton = (product, action) => {
        if (action === "increment") {
            // Dispatch an action to increment the quantity
            dispatch({ type: "ADDITEM", payload: product });
        } else if (action === "decrement") {
            // Dispatch an action to decrement the quantity
            dispatch({ type: "DELITEM", payload: product });
        }
    };

    return (
        <div>
            {cartItems.map((product) => (
                <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
                    <div className="container py-4">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={product.image} alt={product.title} height="200px" width="180" />
                            </div>
                            <div className="col-md-4">
                                <h3>{product.title}</h3>
                                <p className="lead fw-bold">
                                    {product.qty} x ${product.price} = ${product.qty * product.price}
                                </p>
                                <button className="btn btn-outline-dark me-4" onClick={() => handleButton(product, "decrement")}>
                                    <i className="fa fa-minus"></i>
                                </button>
                                <button className="btn btn-outline-dark" onClick={() => handleButton(product, "increment")}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;
