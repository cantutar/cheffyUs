import Footer from "./components/Footer/Footer";
import Navi from "./components/Navbar/Navi";
// import Wrapper from "./components/Wrapper/Wrapper";
import About from "./Sections/About/About";
import Explore from "./Sections/Explore/Explore";
import Hero from "./Sections/Hero/Hero";
import InfoSection from "./Sections/infoSection/infoSection";
import Room from "./Sections/Rooms/Room";
import WeAre from "./Sections/WeAre/WeAre";

//TODO UPGRADE ICONS TO 6

function App() {
  return (
    <div className="App">
      <Navi />
      <Hero />
      <About />
      <Explore />
      <Room />
      <WeAre />
      <InfoSection />
      <Footer />
    </div>
  );
}

export default App;
