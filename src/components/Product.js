import "./ProductStyles.css";
import img1 from "../assets/product1.jpg";
import img2 from "../assets/product2.jpg";

const Product = () => {
    return(
        <div className="product">
            <div className="first-pro">
                <div className="pro-text">
                    <h1>
                        Brain-wellness supplement that boosts focus.
                    </h1>
                    <p>
                        Roughly half a cup of coffee's worth of natural caffeine, extracted from green coffee beans which promote energy, brain function, and mood.A mushroom shown to promote healthy cognitive function.
                    </p>
                    <a className="detail" href="">View Details</a>
                </div>
                <div className="image">
                    <img alt="img" src={img1}/>
                </div>
            </div>
            <div className="sec-pro">
                <div className="pro-text">
                    <h1>
                        A natural boost in focus, memory & mood.
                    </h1>
                    <p>
                        Roughly half a cup of coffee's worth of natural caffeine, extracted from green coffee beans which promote energy, brain function, and mood.A mushroom shown to promote healthy cognitive function.
                    </p>
                    <a className="detail" href="">View Details</a>
                </div>
                <div className="image">
                    <img alt="img" src={img2}/>
                </div>
            </div>
        </div>
    )
}

export default Product;