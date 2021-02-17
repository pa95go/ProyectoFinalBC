import './menu-player.css';
import {InicioPlayer} from './component-player/inicio-player'


function MenuPlayer (){



    return(
    <div>
        <div className ="menu-content-p"  >
            <span className ='logo-p'></span>
            
            
            <div className="panel-p">
                <div className="image-p"></div>
        
                <h3 className = 'name'>NOMBRE APELLIDOS</h3>
                <h5 className='deporte'>DEPORTE</h5>
            <div className="sections">
                <ul>
                    <li><button className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-home"></i><span > Inicio</span> </button> </li>
                    <li><button className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-person"></i><span> Perfil</span></button></li>
                    <li><button className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-shirt"></i> <span> Soportes</span></button></li>
                    <li><button className="btn-menu-p"><span>&nbsp;</span><i class="icon ion-md-planet"></i><span> Marcas</span></button></li>
                </ul>
            </div>
            </div>
        </div >
        <div className ='content-p'>

        <InicioPlayer/>
        </div>
    </div>
    );
    
}


export {MenuPlayer};