import './menu-brand.css';


function MenuBrand (){



    return(
    
    <div className ="menu-content"  >
        <span className ='logo-b'></span>
        
        
        <div className="panel-b">
            <div className="image-b"></div>
       
            <h3 className = 'name'>REPSOL S.L</h3>
            
        <div className="sections">
            <ul>
                <li><button className="btn-menu-b"><span>&nbsp;</span><i class="icon ion-md-home"></i><span > Inicio</span> </button> </li>
                <li><button className="btn-menu-b"><span>&nbsp;</span><i class="icon ion-md-person"></i><span> Perfil</span></button></li>
                <li><button className="btn-menu-b"><span>&nbsp;</span><i class="icon ion-md-search"></i><span> Tienda</span></button></li>
                <li><button className="btn-menu-b"><span>&nbsp;</span><i class="icon ion-md-shirt"></i> <span>Mis Soportes</span></button></li>
                <li><button className="btn-menu-b"><span>&nbsp;</span><i class="icon ion-md-tennisball"></i> <span>Mis Deportistas</span></button></li>
            </ul>
        </div>
        </div>
    </div>
    );
    
}


export {MenuBrand};