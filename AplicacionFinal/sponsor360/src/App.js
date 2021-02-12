
import './App.css';

import {MenuPlayer} from './component/player/menu-player'
import {MenuBrand} from './component/brand/menu-brand'
import {Login} from './component/start/login'




function App() {
  return (
    <div className="App2">
     

    <Login/>
      <MenuPlayer/>
    <MenuBrand/>  
    
    </div>
  );
}

export default App;
