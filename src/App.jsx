import './App.css';
import RoutesApp from '../RoutesApp';
import Header from './components/header/Header';
import { SelectRegionProvider} from './components/selectRegionProvider/SelectRegionProvider';
import { useState } from 'react';


function App() {

     const [theme, setTheme] = useState("light")

     function changeToDarkMode(){
          setTheme("dark"); 
          document.querySelector(".light-mode-box").classList.remove("disable");
          document.querySelector(".dark-mode-box").classList.add("disable");  

     }

     function changeToLightMode(){
          setTheme("light");
          document.querySelector(".dark-mode-box").classList.remove("disable");
          document.querySelector(".light-mode-box").classList.add("disable"); 
     } 

  return (
    
    <SelectRegionProvider>
          <div className={`${theme === "light" ? "App" : "App body-dark-mode"}`} >
               <Header changeToDarkMode={changeToDarkMode} changeToLightMode={changeToLightMode} theme={theme}/>
               <RoutesApp changeToDarkMode={changeToDarkMode} changeToLightMode={changeToLightMode} theme={theme} />
          </div>
    </SelectRegionProvider>
     
  )
}

export default App;
