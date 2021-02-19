
import './App.css';

import {MenuPlayer} from './component/player/menu-player'
import {MenuBrand} from './component/brand/menu-brand'
import {Login} from './component/start/login'
import {Register} from './component/start/register'




function App() {
  return (
    <div className="App2">
     
      <Register/>
    <Login/> 
       <div className='prueba'>
        <MenuPlayer/> 
     
     
       </div>
      <MenuBrand/>   
    
    </div>
  );
}

export default App;
