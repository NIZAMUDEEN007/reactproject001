import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeaderDown from './components/HeaderDown';
import GameSlider from './components/StoreSlider';
import GamesOnSale from './components/GamesOnSale';
import Sale from './components/Sale';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header />
     <HeaderDown/>
     <GameSlider/>
     <GamesOnSale/>
     <Sale/>
     <Footer/>

    </div>
  );
}

export default App;
