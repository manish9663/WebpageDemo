import { Component } from "react";
import "./ProductDetailStyles.css";

class ProductDetail extends Component {
    render(){
        return(
            <div className="block">
                <div className="sub-block">
                    <i className="fa-solid fa-brain"></i>
                    <h2>Boost Memory</h2>
                    <p>Get complimentary ground shipping on every order.Don’t love it? Send it back, on us.</p>
                </div>
                <div className="sub-block">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <h2>Find your focus</h2>
                    <p>Join Minimog Rewards to earn gift cards and enjoy exclusive member benefits.</p>
                </div>
                <div className="sub-block">
                    <i className="fa-solid fa-table-tennis-paddle-ball"></i>
                    <h2>Manage stress</h2>
                    <p>We believe getting dressed should be the easiest part of your day.</p>
                </div>
            </div>
        )
    }
}

export default ProductDetail;