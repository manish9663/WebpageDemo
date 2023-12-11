import "./InstaStyles.css";
import insimg1 from "../assets/insta1.jpg";
import insimg2 from "../assets/insta2.jpg";
import insimg3 from "../assets/insta3.jpg";
import insimg4 from "../assets/insta4.jpg";
import insimg5 from "../assets/insta5.jpg";


const Insta = () => {

    return(
        <div className="insta-block">
            <div className="insta-image">
                <a href="/">
                    <img alt="img" src={insimg1}></img>
                </a>
                <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="insta-image">
                <a href="/">
                    <img alt="img" src={insimg2}></img>
                </a>
                <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="insta-image">
                <a href="/">
                    <img alt="img" src={insimg3}></img>
                </a>
                <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="insta-image">
                <a href="/">
                    <img alt="img" src={insimg4}></img>
                </a>
                <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="insta-image">
                <a href="/">
                    <img alt="img" src={insimg5}></img>
                </a>
                <i className="fa-brands fa-instagram"></i>
            </div>
        </div>
    );
    
}

export default Insta;
