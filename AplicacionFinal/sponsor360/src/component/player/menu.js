import './menu.css';


function Menu (){



    return(
    
    <div className ="menu-content"  >
        <span className ='logo'></span>
        
        
        <div className="panel">
            <div className="image"></div>
       
            <h3 className = 'name'>NOMBRE APELLIDO </h3>
            <h5 className='deporte'>DEPORTE</h5>
        <div className="sections">
            <ul>
                <li><button className="btn-menu"><span>&nbsp;</span><i class="icon ion-md-home"></i><span > Inicio</span> </button> </li>
                <li><button className="btn-menu"><span>&nbsp;</span><i class="icon ion-md-person"></i><span> Perfil</span></button></li>
                <li><button className="btn-menu"><span>&nbsp;</span><i class="icon ion-md-cube"></i> <span> Soportes</span></button></li>
                <li><button className="btn-menu"><span>&nbsp;</span><i class="icon ion-md-star"></i><span> Marcas</span></button></li>
            </ul>
        </div>
        </div>
    </div>
    );
    
}


export {Menu};