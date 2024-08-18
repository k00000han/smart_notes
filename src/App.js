import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Testimonial from "./components/Testimonial";
import Feature from "./components/Feature";
import Video from "./components/Video";
import Pricing from "./components/Pricing";

import "./styles/_global.scss"
import "./styles/app.scss";
import FAQSection from "./components/FAQSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <Logos />
        <Testimonial customClass="first_use" />
        <Feature />
        <Testimonial customClass="second_use" />
        <Video />
        <Testimonial customClass="third_use" />
        <Pricing />
        <Testimonial customClass="fourth_use" />
        <FAQSection />
        <Testimonial customClass="fifth_use" />
        <CallToAction />
        <Footer />
    </>
  );
}

export default App;
