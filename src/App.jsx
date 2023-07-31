import About from "./components/About/About";
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
    </Overlay>
  );
}

export default App;
