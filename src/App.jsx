import About from "./components/About/About";
import Chars from "./components/Chars/Chars";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Overlay from "./components/Overlay/Overlay";
import Partners from "./components/Partners/Partners";
import Unity from "./components/Unity/Unity";

function App() {
  return (
    <Overlay>
      <Header />
      <Hero />
      <Partners />
      <About />
      <Chars />
      <Faq />
      <Unity />
      <Footer />
    </Overlay>
  );
}

export default App;
