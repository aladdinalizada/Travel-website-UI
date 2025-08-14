import Hero from "./components/hero";
import SponsorBanner from "./components/Partners";
import Services from "./components/services";
import Header from "./layout/header";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SponsorBanner />
      <Services />
    </>
  );
}

export default App;
