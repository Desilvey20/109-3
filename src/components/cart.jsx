import "./cart.css";
import { useContext } from "react";
import StoreContext from "../context/storeContext";
import { useState } from "react";


const Cart = () => {

    let cart = useContext(StoreContext).cart;

    return (
        <div className="cart">
            <h6> There are {cart.length} items in your cart.</h6>
            <h3>Are you ready to place the order ?</h3>
            <hr />

            
            <ul>
              {cart.map(prod => <li key={prod._id}>{prod.title} - ${prod.price}</li>)}
            </ul>
        </div>
    );
};

export default Cart;