import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import Section4 from "./Section4.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {

    return (
        <div className="overflow-y-auto snap snap-y snap-mandatory scroll-smooth h-screen">
            <Header/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Footer/>
        </div>
    )
}