import './App.css';
import VerticalMenu from "./VerticalMenu/VerticalMenu"
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ImageArea from './ImageArea/ImageArea';

function App() {
  return (
    <div className="App">
       <Header/>
      <VerticalMenu/>
      <Footer/>
      <ImageArea/>
    </div>
  );
}


export default App;
