//import './App.css';
import Herramientas from './componentes/Herramientas';
import Menu from './componentes/Menu';
import Pizarra from './componentes/Pizarra';

const App = () => (
  <div>
    <div className='w3-container'>
    <Menu></Menu>
    <Pizarra></Pizarra>
    <Herramientas></Herramientas>
    </div>

  </div>
)
export default App;
