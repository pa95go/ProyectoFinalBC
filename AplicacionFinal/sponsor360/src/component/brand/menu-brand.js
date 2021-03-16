import './menu-brand.css';
import {BrowserRouter, Route, NavLink } from 'react-router-dom';


import {InicioBrand} from './component-brand/inicio-brand'
import {PerfilBrand} from './component-brand/perfil-brand'
import {SoportesBrand} from './component-brand/soportes-brand'
import {DeportistasBrand} from './component-brand/deportistas-brand'
import {TiendaBrand} from './component-brand/tienda-brand'
import {CarritoBrand} from './component-brand/carrito-brand'





function MenuBrand (){



    return(

        <div>
        <BrowserRouter>
         

         
         <div className ="menu-content-b"  >
              <span className ='logo-b'></span>
              <div className="panel-b">
           
           <img className="image-b" src="https://www.crazy-stuff.net/crazy-img/content/logos/23-redbull.jpg" alt=""/>
           <h3 className = 'name'>REPSOL S.L</h3>
                
                 <div className="sections">
                     <ul>
                         <li> <NavLink to ="/Inicio" activeClassName ="btn-menu-b-active" className="btn-menu-b"><span>&nbsp;</span><i class="icon ion-md-home"></i><span > Inicio</span> </NavLink></li>
                         <li> <NavLink to ="/Perfil" activeClassName ="btn-menu-b-active" className="btn-menu-b"><span>&nbsp;</span><i class="icon ion-md-person"></i><span > Perfil</span> </NavLink></li>
                         <li> <NavLink to ="/Soportes" activeClassName ="btn-menu-b-active" className="btn-menu-b"><span>&nbsp;</span><i class="icon ion-md-shirt"></i><span > Soportes</span> </NavLink></li>
                         <li> <NavLink to ="/Deportistas" activeClassName ="btn-menu-b-active" className="btn-menu-b"><span>&nbsp;</span><i class="icon ion-md-tennisball"></i><span > Deportistas</span> </NavLink></li>
                         <li> <NavLink to ="/Tienda" activeClassName ="btn-menu-b-active" className="btn-menu-b"><span>&nbsp;</span><i class="icon ion-md-basket"></i><span > Tienda</span> </NavLink></li>
                     </ul>
                 </div>
             </div> 
         </div >
        
         <div className="center-b">
     
         <div className="content-b">
         <div className="nav-top">
         <NavLink to ="/Carrito"  className="btn-red-c  mr20-c pt3-c"> <i class="icon ion-md-cart pt3-c "></i></NavLink>
           {/*  <button className='btn-red-c mr20-c'><NavLink to ="/Tienda"> </NavLink>gfd <i class="icon ion-md-cart"></i></button> */}
            <button className='btn-red-c'><span>  </span>  <i class="icon ion-md-power"></i></button>
        </div>

         <Route path="/Inicio" exact component={InicioBrand} />
         <Route path="/Perfil" exact component={PerfilBrand} />
         <Route path="/Soportes" exact component={SoportesBrand} />
         <Route path="/Deportistas" exact component={DeportistasBrand} /> 
         <Route path="/Tienda" exact component={TiendaBrand} />
         <Route path="/Carrito" exact component={CarritoBrand} />
         <Route path="/player/user" exact component={InicioBrand} />
          
        
         </div>
         </div>
         </BrowserRouter>

    </div>
    );
    
}


export {MenuBrand};