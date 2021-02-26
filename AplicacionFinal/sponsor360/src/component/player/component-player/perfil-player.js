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
         <div className="banner-blue-c"></div>
      <button className='btn-blue-c d-rigth margin-edit-c'><i class="icon ion-md-create"></i></button> 
        <form action=""> 
        <label for="file-input"  >
        <img className='img-profile-c' src="https://cdn2.vectorstock.com/i/thumb-large/63/66/profile-placeholder-default-avatar-vector-21666366.jpg"   />
        </label>
        <input id="file-input" type="file" className='d-none' disabled />


        <input type="text"  className='text-bold text-xl ctcenter-c ' name="d" id="f" name="nombre" onChange placeholder="escribe tu nombre" value='Nombre y Apellidos' />
        <input type="text" name="" id="" placeholder='Email' placeholder="email" value='email@email.com'  />
        <input type="password" name="" id="" placeholder='Contraseña'    />
        <input type="text" name="" id="" placeholder='Deporte' value='deporte'  />
        <input type="date" name="" id="" placeholder='Fecha de Nacimiento' value='Fecha de Nacimiento'  />
        <select name="sexo"  >
                <option selected disabled>Sexo</option> 
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Otro">Otro</option>

            </select>
        
        <textarea name="Descripcion" className='text-s' id="" placeholder='Descripción' ></textarea>

        <input type="submit" className='btn-blue-c d-none0' value="Guardar" />
        </form>
        
     </div>
    

    </div>
    );
    
}


export {PerfilPlayer};