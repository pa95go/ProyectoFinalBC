import './menu-player.css';
import {BrowserRouter, Route, NavLink } from 'react-router-dom';
import {InicioPlayer} from './component-player/inicio-player'
import {PerfilPlayer} from './component-player/perfil-player'
import {LogrosPlayer} from './component-player/logros-player'


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
                        <li> <NavLink to ="/Inicio" activeClassName ="btn-menu-p-active" className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-home"></i><span > Inicio</span> </NavLink></li>
                        <li> <NavLink to ="/Perfil" activeClassName ="btn-menu-p-active" className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-person"></i><span > Perfil</span> </NavLink></li>
                        <li> <NavLink to ="/Eventos" activeClassName ="btn-menu-p-active" className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-trophy"></i><span > Eventos</span> </NavLink></li>
                        <li> <NavLink to ="/Soportes" activeClassName ="btn-menu-p-active" className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-shirt"></i><span > Soportes</span> </NavLink></li>
                        <li> <NavLink to ="/Marcas" activeClassName ="btn-menu-p-active" className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-planet"></i><span > Marcas</span> </NavLink></li>
                    </ul>
                </div>
            </div> 
        </div >
       
        <div className="center-p">
        <div className ='content-p'>

        <Route path="/Inicio" exact component={InicioPlayer} />
        <Route path="/Perfil" exact component={PerfilPlayer} />
        <Route path="/Eventos" exact component={LogrosPlayer} />
         
        </div>
        </div>
        </BrowserRouter>
    </div>
    );
    
}


export {MenuPlayer};