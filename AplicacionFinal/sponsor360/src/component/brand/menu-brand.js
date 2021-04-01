import './menu-brand.css';
import {BrowserRouter, Route, NavLink } from 'react-router-dom';
import {Brand} from './component-brand/brand'
import {InicioBrand} from './component-brand/inicio-brand'
import {PerfilBrand} from './component-brand/perfil-brand'
import {SoportesBrand} from './component-brand/soportes-brand'
import {DeportistasBrand} from './component-brand/deportistas-brand'
import {TiendaBrand} from './component-brand/tienda-brand'
import {CarritoBrand} from './component-brand/carrito-brand'
import {ViewPlayer} from './component-brand/view-player'
import { useHistory } from "react-router-dom";
import {useState,useEffect} from 'react';
import jwt_decode from "jwt-decode";
import swal from "sweetalert";



function MenuBrand (){
    const history = useHistory();
    const [perfil, setPerfil] = useState(
        {
            
            nombre: "",
            imagen: [],
            

        }
    );

    useEffect(()=>{
       
        const user = jwt_decode(localStorage.getItem('token'));
        if(!user.roles.includes('ROLE_BRAND') ){
            history.push("/")
        }
        
                  /* ... FECH ... */
      fetch('http://localhost:8000/brand',{
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
          
            setPerfil(response.brand);
            localStorage.setItem('idPerfil', response.brand.id);
            })
            .catch( error=> console.log(error) );

        

    }, []);

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
         

         
         <div className ="menu-content-b"  >
              <span className ='logo-b'></span>
              <div className="panel-b">
           
           <img className="image-b" src={perfil.imagen} alt=""/>
           <h3 className = 'name'>{perfil.nombre.toUpperCase()}</h3>
                
                 <div className="sections">
                     <ul>
                         <li> <NavLink to ="inicio" activeClassName ="btn-menu-b-active" className="btn-menu-b"><span>&nbsp;</span><i class="icon ion-md-home"></i><span > Inicio</span> </NavLink></li>
                         <li> <NavLink to ="perfil" activeClassName ="btn-menu-b-active" className="btn-menu-b"><span>&nbsp;</span><i class="icon ion-md-person"></i><span > Perfil</span> </NavLink></li>
                         <li> <NavLink to ="soportes" activeClassName ="btn-menu-b-active" className="btn-menu-b"><span>&nbsp;</span><i class="icon ion-md-shirt"></i><span > Soportes</span> </NavLink></li>
                         <li> <NavLink to ="deportistas" activeClassName ="btn-menu-b-active" className="btn-menu-b"><span>&nbsp;</span><i class="icon ion-md-tennisball"></i><span > Deportistas</span> </NavLink></li>
                         <li> <NavLink to ="tienda" activeClassName ="btn-menu-b-active" className="btn-menu-b"><span>&nbsp;</span><i class="icon ion-md-basket"></i><span > Tienda</span> </NavLink></li>
                     </ul>
                 </div>
             </div> 
         </div >
        
         <div className="center-b">
     
         <div className="content-b">
         <div className="nav-top">
         <NavLink to ="/brand/carrito"  className="btn-red-c  mr20-c pt3-c"> <i class="icon ion-md-cart pt3-c "></i></NavLink>
            <button className='btn-red-c' onClick={(e)=>signOff(e)}><span>  </span>  <i class="icon ion-md-power"></i></button>
        </div>

          <Route path="/brand" exact component={Brand} /> 
         <Route path="/brand/inicio"  component={InicioBrand} />
         <Route path="/brand/perfil"  component={PerfilBrand} />
         <Route path="/brand/soportes"  component={SoportesBrand} />
         <Route path="/brand/deportistas"  component={DeportistasBrand} /> 
         <Route path="/brand/tienda"  component={TiendaBrand} />
         <Route path="/brand/carrito"  component={CarritoBrand} />
         <Route path="/brand/userplayer"  component={ViewPlayer} />
          
        
         </div>
         </div>
         </BrowserRouter>

    </div>
    );
    
}


export {MenuBrand};