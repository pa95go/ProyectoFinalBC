import './player-component.css';


function PerfilPlayer (){



    return(
    
    <div >
        <div className="nav-top">
            
            
            <button className='btn-blue-c'> <span> CERRAR SESIÓN </span>  <i class="icon ion-md-exit"></i></button>
           
        </div>


     <h1 className = 'title-c blue-textcolor-c'> <i class="icon ion-md-person"></i> PERFIL</h1>
     <hr/>
   
     <div className="card-c cblue-c cw1-c ">
         
         
        
        <input type="text" name="d" id="f" name="nombre" onChange placeholder="escribe tu nombre" value='Nombre y Apellidos' disabled/>
        <input type="text" name="" id="" placeholder='Email' placeholder="email" value='email@email.com' disabled />
        <input type="password" name="" id="" placeholder='Contraseña' disabled   />
        <input type="text" name="" id="" placeholder='Deporte' value='deporte' disabled />
        <input type="date" name="" id="" placeholder='Fecha de Nacimiento' value='Fecha de Nacimiento'  />
        <select name="sexo"  disabled>
                <option selected >Sexo</option> 
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Otro">Otro</option>

            </select>
        <input type="text" name="" id="" placeholder='Descripción' value='Descripción' disabled />
      
        
     </div>
    
    
   
    




    </div>
    );
    
}


export {PerfilPlayer};