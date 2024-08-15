import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Testimonial from "./components/Testimonial";
import Feature from "./components/Feature";
import Video from "./components/Video";
import Pricing from "./components/Pricing";

import "./styles/_global.scss"
import "./styles/app.scss";

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
    </>
  );
}

export default App;
