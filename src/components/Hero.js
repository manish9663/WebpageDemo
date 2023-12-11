import "./HeroStyles.css";
import heroimg from "../assets/home.jpg";



const Hero =()=>{
    return (
        <>
        <div className="hero">
            <img alt="Img" src={heroimg}></img>
            <div className="hero-text">
                <h1>Brain-Wellness</h1>
                <h1>Suppliment.</h1>
                <p>The all-natural, brain-wellness suppliment</p>
                <a className="show" href="/">
                    Explore Now
                </a>
            </div>
        </div>
        </>

    );
}

export default Hero;