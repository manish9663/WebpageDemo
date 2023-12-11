import "./FooterStyles.css";

const Footer = () => {
    return(
        <div className="footer">
            <div className="subscribe">
                <div>
                    <h1>Subscribe</h1>
                    <p>Our Conversation is just getting Started</p>
                    <div className="container">

                    <form>
                        <input className="email" type="email" placeholder="Your Email" id="1" name="name" autoComplete="@gmail.com"/>
                        <button type="submit"><i className="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
                    </form>
                    
                    </div>
                </div>
            </div>
            <div className="info">
                <div> 
                    <div className="head">
                         <h4>Company</h4>
                    </div>
                    <a href="/">About Us</a>
                    <a href="/">Contact</a>
                    <a href="/">Shipping & return</a>
                    <a href="/">FAQ</a>
                </div>
                <div>
                    <div className="head">
                        <h4>Information</h4>
                    </div>
                    <a href="/">My Account</a>
                    <a href="/">Login</a>
                    <a href="/">My Cart</a>
                    <a href="/">Wishlist</a>
                    <a href="/">Check Out</a>
                </div>
                <div>
                    <div className="head">
                        <h4>Contact</h4>
                    </div>
                    <a href="/">Customer Service</a>
                    <a href="/">Store Locator</a>
                    <a href="/">Wholesale</a>
                    <a href="/">Career</a>
                </div>
                <div>
                    <div className="head">
                        <h4>Follow Us</h4>
                    </div>
                    <a href="/">Facebook</a>
                    <a href="/">Twitter</a>
                    <a href="/">Instagram</a>
                    <a href="/">Pintrest</a>
                </div>
            </div>
        </div>
    );
}


export default Footer;