import "./Insta2Styles.css";
import insimg1 from "../assets/insta1.jpg";
import insimg2 from "../assets/insta2.jpg";
import insimg3 from "../assets/insta3.jpg";
import insimg4 from "../assets/insta4.jpg";
import insimg5 from "../assets/insta5.jpg";
import insimg6 from "../assets/home.jpg";
import insimg7 from "../assets/ingridients.jpg";


const Insta2 = () => {
    console.log("slides");
    const slides = document.querySelectorAll(".slide"); 
    var counter = 0;
    console.log(slides);

    slides.forEach(
        (slide, index) => {
            console.log("hey1")
            slide.style.left = `${index * 100}`;
            console.log(slide.style.left = `${index * 100}%`)
            console.log("hey2")
        } 
    )
  
    const goPrev =() =>{
        counter--;
        if (counter < -4){
            counter = 0
        }
        slideImage()
    }

    const goNext =() =>{
        counter++;
        if (counter > 6){
            counter = 0
        }
        slideImage()
    } 
    const slideImage= () => {
        slides.forEach(
            (slide) => {
                slide.style.transform = `translateX(-${counter * 100}%)`
            }
        ) 
    } 
    return( 
        <div className="insta2-block">
            <div className="slide">
                <a href="/">
                    <img alt="img" src={insimg1}></img>
                </a>
                <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="slide">
                <a href="/">
                    <img alt="img" src={insimg2}></img>
                </a>
                <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="slide">
                <a href="/">
                    <img alt="img" src={insimg3}></img>
                </a>
                <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="slide">
                <a href="/">
                    <img alt="img" src={insimg4}></img>
                </a>
                <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="slide">
                <a href="/">
                    <img alt="img" src={insimg5}></img>
                </a>
                <i className="fa-brands fa-instagram"></i>
            </div> 
            <div className="slide">
                <a href="/">
                    <img alt="img" src={insimg6}></img>
                </a>
                <i className="fa-brands fa-instagram"></i>
            </div> 
            <div className="slide">
                <a href="/">
                    <img alt="img" src={insimg7}></img>
                </a>
                <i className="fa-brands fa-instagram"></i>
            </div> 
            <div class="nav">
                <button onClick={goNext}><i class="fa-solid fa-angle-right"></i></button>
            </div>
        </div>
    );
     
}
 
export default Insta2;
