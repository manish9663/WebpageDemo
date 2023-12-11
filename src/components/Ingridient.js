import "./IngridientStyles.css";
import ingimg from "../assets/ingridients.jpg"

function Ingridient(){
    return(
        <>
        <div className="ingridients">
            <img alt="Img" src={ingimg}></img>
            <div className="ingridients-text">
                <h1>Vegetarian Ingredients</h1>
                <a className="show" href="/">
                    Explore Now
                </a>
            </div>
        </div>
        </>
    );
}

export default Ingridient;