import './App.css';
import Carrusel from './components/Carrusel';
import Header from './components/Header';
import SecondCarrusel from './components/SecondCarrusel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carrusel/>
      <SecondCarrusel/>
      <Footer/>
    </div>
  );
}

export default App;
