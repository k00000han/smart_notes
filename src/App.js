import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";

import "./styles/_global.scss"
import "./styles/app.scss";
import Testimonial from "./components/Testimonial";
import Feature from "./components/Feature";

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <Logos />
        <Testimonial customClass="first_use" />
        <Feature />
    </>
  );
}

export default App;
