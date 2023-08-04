import About from "./components/About/About";
import Chars from "./components/Chars/Chars";
import Faq from "./components/Faq/Faq";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Overlay from "./components/Overlay/Overlay";
import Partners from "./components/Partners/Partners";

function App() {
  return (
    <Overlay>
      <Header />
      <Hero />
      <Partners />
      <About />
      <Chars />
      <Faq />
    </Overlay>
  );
}

export default App;
