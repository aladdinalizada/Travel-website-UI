import Hero from "./components/hero";
import SponsorBanner from "./components/Partners";
import Services from "./components/services";
import SpecialBanner from "./components/specialbanner";
import Header from "./layout/header";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SponsorBanner />
      <Services />
      <SpecialBanner />
    </>
  );
}

export default App;
