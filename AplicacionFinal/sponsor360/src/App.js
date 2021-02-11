
import './App.css';

import {MenuPlayer} from './component/player/menu-player'
import {MenuBrand} from './component/brand/menu-brand'




function App() {
  return (
    <div className="App2">
     <div>

    <MenuPlayer/>
      </div>

    <div>
    <MenuBrand/>
    </div>
    </div>
  );
}

export default App;
