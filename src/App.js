import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from "./Components/Header/Navbar";
import Images from "./Components/Banner/Images";
import Intro from './Components/BannerTxt/Intro';
import About from './Components/About/About';
import ChooseusCard from './Components/About/ChooseusCard'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner images={Images}/>
      <div className="intro-overlay">
        <Intro images={Images}/>
      </div>
      <div>
      <About/> 
      <ChooseusCard/>
      </div>
      
    </div>
  );
}

export default App;
