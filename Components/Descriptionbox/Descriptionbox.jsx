import React from "react";
import './Descriptionbox.css'

const Descriptionbox = () =>{
    return(
        <div className="descriptionbox">
            <div className="descbox-nav">
                <div className="desc-nav-box">Description</div>
                <div className="desc-nav-box fade">Reviews (122)</div>

            </div>
            <div className="descbox-description">
                <p>An eCommerce website is an online platform that allows businesses or individuals to buy and sell products or services over the internet. These websites serve as digital storefronts where users can browse through product listings, view descriptions, compare prices, and make purchases from the comfort of their own homes. Key features of an eCommerce website typically include a shopping cart for selecting items, a checkout system for entering payment and shipping information, and integration with payment gateways to process transactions securely. </p>
                <p>
 Many eCommerce sites also offer user accounts for order tracking, personalized recommendations, and easier repeat purchases. Popular examples of eCommerce websites include Amazon, eBay, and Etsy. Additionally, businesses often use platforms like Shopify or WooCommerce to build and manage their own online stores.                </p>
            </div>
        </div>
    )
}
export default Descriptionbox