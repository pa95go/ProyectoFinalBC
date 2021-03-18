import './menu-player.css';
import {BrowserRouter, Route, NavLink } from 'react-router-dom';
import {InicioPlayer} from './component-player/inicio-player'
import {PerfilPlayer} from './component-player/perfil-player'
import {LogrosPlayer} from './component-player/logros-player'
import {SoportesPlayer} from './component-player/soportes-player'
import {MarcasPlayer} from './component-player/marcas-player'
import {ViewBrand} from './component-player/view-brand'


function MenuPlayer (){



    return(
    <div>
         <BrowserRouter>
         

         
        <div className ="menu-content-p"  >
             <span className ='logo-p'></span>
            <div className="panel-p">
                <img className="image-p" src="https://cdn2.vectorstock.com/i/thumb-large/63/66/profile-placeholder-default-avatar-vector-21666366.jpg" alt=""/>
                <h3 className = 'name'>NOMBRE APELLIDOS</h3>
                <h5 className='deporte'>DEPORTE</h5>
               
                <div className="sections">
                    <ul>
                        <li> <NavLink to ="/player/inicio" activeClassName ="btn-menu-p-active" className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-home"></i><span > Inicio</span> </NavLink></li>
                        <li> <NavLink to ="/player/perfil" activeClassName ="btn-menu-p-active" className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-person"></i><span > Perfil</span> </NavLink></li>
                        <li> <NavLink to ="/player/eventos" activeClassName ="btn-menu-p-active" className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-trophy"></i><span > Eventos</span> </NavLink></li>
                        <li> <NavLink to ="/player/soportes" activeClassName ="btn-menu-p-active" className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-shirt"></i><span > Soportes</span> </NavLink></li>
                        <li> <NavLink to ="/player/marcas" activeClassName ="btn-menu-p-active" className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-planet"></i><span > Marcas</span> </NavLink></li>
                    </ul>
                </div>
            </div> 
        </div >
       
        <div className="center-p ">
        <div className ='content-p'>
        
        <div className="nav-top">
       
            <button className='btn-blue-c'><span>  </span>  <i class="icon ion-md-power"></i></button>
        </div>

        <Route path="/player/inicio" exact component={InicioPlayer} />
        <Route path="/player/perfil" exact component={PerfilPlayer} />
        <Route path="/player/eventos" exact component={LogrosPlayer} />
        <Route path="/player/soportes" exact component={SoportesPlayer} />
        <Route path="/player/marcas" exact component={MarcasPlayer} />
        <Route path="/player/brand/user" exact component={ViewBrand} />
         
        </div>
        </div>
        </BrowserRouter>
    </div>
    );
    
}


export {MenuPlayer};