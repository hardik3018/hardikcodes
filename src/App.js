import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navBar';
import './bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './components/banner';
import {Skills} from './components/Skills';
import {Example } from './components/Example';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <br></br>
      <Example/>
    </div>
  );
}

export default App;
