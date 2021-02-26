import './menu-player.css';
import {InicioPlayer} from './component-player/inicio-player'
import {PerfilPlayer} from './component-player/perfil-player'
import {LogrosPlayer} from './component-player/logros-player'


function MenuPlayer (){



    return(
    <div>
        <div className ="menu-content-p"  >

            
             <span className ='logo-p'></span>
            
            
            <div className="panel-p">
                
          <img className="image-p" src="https://cdn2.vectorstock.com/i/thumb-large/63/66/profile-placeholder-default-avatar-vector-21666366.jpg" alt=""/>
             
        
                <h3 className = 'name'>NOMBRE APELLIDOS</h3>
                <h5 className='deporte'>DEPORTE</h5>
            <div className="sections">
                <ul>
                    <li><button className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-home"></i><span > Inicio</span> </button> </li>
                    <li><button className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-person"></i><span> Perfil</span></button></li>
                    <li><button className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-trophy"></i><span> Logros</span></button></li>
                    <li><button className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-shirt"></i> <span> Soportes</span></button></li>
                    <li><button className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-planet"></i><span> Marcas</span></button></li>
                </ul>
            </div>
            </div> 
        </div >
        <div className ='content-p'>

         <LogrosPlayer/>  
        </div>
    </div>
    );
    
}


export {MenuPlayer};