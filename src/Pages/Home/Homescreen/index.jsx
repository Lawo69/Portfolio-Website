import AboutMe from "../AboutMe";
import MyBlog from "../Blog";
import ContactMe from "../ContactMe";
import MyEducation from "../MyEducation";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";

export default function Home () {
    return (
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortfolio />
            <MyEducation />
            <MyBlog />
            <ContactMe />
            <Footer />
        </>
    )
}