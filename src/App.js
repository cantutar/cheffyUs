import Navi from "./components/Navbar/Navi";
// import Wrapper from "./components/Wrapper/Wrapper";
import About from "./Sections/About/About";
import Explore from "./Sections/Explore/Explore";
import Hero from "./Sections/Hero/Hero";
import Room from "./Sections/Rooms/Room";

//TODO UPGRADE ICONS TO 6

function App() {
  return (
    <div className="App">
      <Navi />
      <Hero />
      <About />
      <Explore />
      <Room />
    </div>
  );
}

export default App;
