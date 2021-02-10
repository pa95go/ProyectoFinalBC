import './menu.css';


function Menu (){



    return(
    
    <div className ="menu-content"  >
        <span className ='logo'>sponsor360º</span>
        
        <div className="panel">
            <div className="photo">
                <div className="image"></div>
            </div>
            <h3 className = 'name'>NOMBRE APELLIDO </h3>
            <h5 className='deporte'>DEPORTE</h5>
        <div className="sections">
            <ul>
                <li><button className="btn-menu">Inicio</button> </li>
                <li><button className="btn-menu">Perfil</button></li>
                <li><button className="btn-menu">Soportes</button></li>
                <li><button className="btn-menu">Marcas</button></li>
            </ul>
        </div>
        </div>
    </div>
    );
    
}


export {Menu};