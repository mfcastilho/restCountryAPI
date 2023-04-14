import './App.css';
import RoutesApp from '../RoutesApp';
import Header from './components/header/Header';
import { SelectRegionProvider } from './components/selectRegionProvider/SelectRegionProvider';

function App() {


  return (
    
    <SelectRegionProvider>
          <div className="App">
               <Header />
               <RoutesApp />
          </div>
    </SelectRegionProvider>
     
  )
}

export default App;
