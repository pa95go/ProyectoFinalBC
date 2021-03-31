import './menu-player.css';
import {BrowserRouter, Route, NavLink } from 'react-router-dom';
import {Player} from './component-player/player'
import {InicioPlayer} from './component-player/inicio-player'
import {PerfilPlayer} from './component-player/perfil-player'
import {LogrosPlayer} from './component-player/logros-player'
import {SoportesPlayer} from './component-player/soportes-player'
import {MarcasPlayer} from './component-player/marcas-player'
import {ViewBrand} from './component-player/view-brand'

import { useEffect, useState} from 'react';
import jwt_decode from "jwt-decode";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";


function MenuPlayer (){
    const history = useHistory();
    const [perfil, setPerfil] = useState(
        {
            
            nombre: "",
            deporte: "",
            imagen: [],

        }
    );

    useEffect(()=>{
        
        const user = jwt_decode(localStorage.getItem('token'));
      
        if(!user.roles.includes('ROLE_PLAYER') ){
       
            history.push("/")
        }

                  /* ... FECH ... */
      fetch('http://localhost:8000/player',{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
         body: JSON.stringify({
            email: user.username
         }) 
      })
      .then( response => response.json())
      .then(
          response => {
          
            setPerfil(response.player);
            localStorage.setItem('idPerfil', response.player.id);
            
            })
            .catch(
                
               error=> console.log(error) 
      );

     

    },[]);

    function signOff(e) {
        e.preventDefault();

        swal({
          
            title: "¿Seguro que desea cerrar sesion?",
            text: "Espere un momento por favor.",
            icon: "warning",
            buttons: ['Cancelar', 'Salir'],
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              swal({
                title: "Cerrando sesión",
                icon: "info",
                button: false,
                timer: "1000",
              }).then(() => {
                 localStorage.removeItem("token");
                localStorage.removeItem("idPerfil");
                history.push('/')
            })
            } 
          });
          

        
        
    }
  


    return(
    <div>
         <BrowserRouter>
         

         
        <div className ="menu-content-p"  >
             <span className ='logo-p'></span>
            <div className="panel-p">
                <img className="image-p" src={perfil.imagen} alt={perfil.nombre}/>
                <h3 className = 'name'>{perfil.nombre.toUpperCase()}</h3>
                <h5 className='deporte'>{perfil.deporte.toUpperCase()}</h5>

                <div className="sections">
                    <ul>
                        <li> <NavLink to ="inicio" activeClassName ="btn-menu-p-active" className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-home"></i><span > Inicio</span> </NavLink></li>
                        <li> <NavLink to ="perfil" activeClassName ="btn-menu-p-active" className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-person"></i><span > Perfil</span> </NavLink></li>
                        <li> <NavLink to ="eventos" activeClassName ="btn-menu-p-active" className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-trophy"></i><span > Eventos</span> </NavLink></li>
                        <li> <NavLink to ="soportes" activeClassName ="btn-menu-p-active" className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-shirt"></i><span > Soportes</span> </NavLink></li>
                        <li> <NavLink to ="marcas" activeClassName ="btn-menu-p-active" className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-planet"></i><span > Marcas</span> </NavLink></li>
                    </ul>
                </div>
            </div> 
        </div >
       
        <div className="center-p ">
        <div className ='content-p'>
        
        <div className="nav-top">
       
            <button className='btn-blue-c'  onClick={(e)=>signOff(e)}><span>  </span>  <i class="icon ion-md-power"></i></button>
        </div>

       
        <Route path="/player" exact component={Player} />
        <Route path="/player/inicio"  component={InicioPlayer} />
        <Route path="/player/perfil"  component={PerfilPlayer} />
        <Route path="/player/eventos"  component={LogrosPlayer} />
        <Route path="/player/soportes"  component={SoportesPlayer} />
        <Route path="/player/marcas"  component={MarcasPlayer} />
        <Route path="/player/userbrand"  component={ViewBrand} />
         
        </div>
        </div>
        </BrowserRouter>
    </div>
    );
    
}


export {MenuPlayer};