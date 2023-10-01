import './LandingPage.css';
import Navbar from '../components/comp-landingP/Navbar';
import MainSection from "../components/comp-landingP/MainSec";
import Projects from "../components/comp-landingP/Project";
import Contact from '../components/comp-landingP/Contact';
import Footer from "../components/comp-landingP/Footer";
import AboutUs from '../components/comp-landingP/AboutUs';

function LandingPage() {
    return (
        <>
            <Navbar />
            <main>
                <MainSection />
                <Projects />
                <Contact />
                <AboutUs />
                <Footer />
            </main>
        </>
    );
}
export default LandingPage;