
import './App.css';
import {BrowserRouter, Route, NavLink } from 'react-router-dom';


import {MenuPlayer} from './component/player/menu-player'
import {MenuBrand} from './component/brand/menu-brand'
import {Login} from './component/start/login'
import {Register} from './component/start/register'




function App() {
  return (
    <div >
     
    
        <BrowserRouter>
        {/* <Register/>  */}

          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </BrowserRouter>
     
    </div> 
  );
}

export default App;
