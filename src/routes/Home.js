import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import Product from "../components/Product.js"
import ProductDetail from "../components/ProductDetail.js"
import Ingridient from "../components/Ingridient.js";
import Insta from "../components/Insta.js";
import Footer from "../components/Footer.js";
import Insta2 from "../components/Insta2.js";





function Home(){
    return (
        <>
        <Navbar />
        <Hero />
        <ProductDetail />
        <Product />
        <Ingridient />
        <Insta />
        <Insta2 />
        <Footer />
        </>

    );
}

export default Home;