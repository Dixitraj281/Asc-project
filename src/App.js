import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from "./Components/Header/Navbar";
import Images from "./Components/Banner/Images";
import Intro from './Components/BannerTxt/Intro';
import About from './Components/About/About';
import ChooseusCard from './Components/About/ChooseusCard';
import Aschistory from './Components/History/Aschistory';
import Brands from './Components/Brands/Brands';
import Footer from './Components/Footer/Footer';
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
      <Aschistory/>
      <Brands/>
      <Footer/>
    </div>
  );
}

export default App;
