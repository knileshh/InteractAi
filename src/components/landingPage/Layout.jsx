import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import Section4 from "./Section4.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import HeroSection from "./HeroSection.jsx";
import TechnicalSpecification from "./TechnicalSpecification.jsx";
import Stats from "./Stats.jsx";
import TeamSection from "./TeamSection.jsx";
import PeopleSay from "./PeopleSay.jsx";
import FeatureSection from "./FeatureSection.jsx";
import TechStack from "./TechStack.jsx";
import TwoxTwoGrid from "./TwoxTwoGrid.jsx";
import QuickView from "./QuickView.jsx";
import NewsLetter from "./NewsLetter.jsx";

export default function Layout() {

    return (
        <div className="overflow-y-auto snap snap-y snap-mandatory scroll-smooth h-screen">
            <HeroSection/>
            <FeatureSection/>
            <TechStack/>
            <TwoxTwoGrid/>
            <TeamSection/>
            <TechnicalSpecification/>
            <PeopleSay/>

            <Stats/>
            <NewsLetter/>

        </div>
    )
}