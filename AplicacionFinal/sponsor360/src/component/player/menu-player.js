import './menu-player.css';
import {BrowserRouter, Route, NavLink } from 'react-router-dom';
import {InicioPlayer} from './component-player/inicio-player'
import {PerfilPlayer} from './component-player/perfil-player'
import {LogrosPlayer} from './component-player/logros-player'
import {SoportesPlayer} from './component-player/soportes-player'
import {MarcasPlayer} from './component-player/marcas-player'
import {ViewBrand} from './component-player/view-brand'

import { useEffect, useState} from 'react';
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";


function MenuPlayer (){
    const history = useHistory();
    const [nombre, setNombre ] = useState("")
    const [deporte, setDeporte ] = useState("")

    useEffect(()=>{
        // console.log('Effect');
        // console.log(localStorage.getItem('token'));
        //console.log(jwt_decode(localStorage.getItem('token')));
        const user = jwt_decode(localStorage.getItem('token'));
        //  console.log(user.roles);
        //  console.log(user.username); // username es el email
        if(!user.roles.includes('ROLE_PLAYER') ){
            // console.log("Redirigiendo a Login");
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
      .then( response => response.json()
      .then(
          response => {
           //console.log(response.player.rrss.twitterSeg);
           console.log(response.player);
            setNombre(response.player.nombre)
            setDeporte(response.player.deporte)
            localStorage.setItem('idPerfil', response.player.id );
            //setImagen
            })
            .catch(
                
               error=> console.log(error) 
      ));



    });


    return(
    <div>
         <BrowserRouter>
         

         
        <div className ="menu-content-p"  >
             <span className ='logo-p'></span>
            <div className="panel-p">
                <img className="image-p" src="https://cdn2.vectorstock.com/i/thumb-large/63/66/profile-placeholder-default-avatar-vector-21666366.jpg" alt=""/>
                <h3 className = 'name'>{nombre.toUpperCase()}</h3>
                <h5 className='deporte'>{deporte.toUpperCase()}</h5>
               
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
       
            <button className='btn-blue-c'><span>  </span>  <i class="icon ion-md-power"></i></button>
        </div>

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