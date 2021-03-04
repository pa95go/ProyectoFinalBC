import './player-component.css';
import {useState} from 'react';

function PerfilPlayer (){

    const [edit, setEdit] = useState(true);

    function handleEdit (e){
        e.preventDefault();
        console.log(edit);
         setEdit(!edit); 
    }


    function handleIcon(edit){ // se supone que cuando crea uno pone una id
       
        if(edit === true){

            return "icon ion-md-create";
        }else{
            return "icon ion-md-save";

        }
    }

    return(
    
    <div >
        <div className="nav-top">
            
            
            <button className='btn-blue-c'> <span> CERRAR SESIÓN </span>  <i class="icon ion-md-exit"></i></button>
           
        </div>


     <h1 className = 'title-c blue-textcolor-c'> <i class="icon ion-md-person"></i> PERFIL</h1>
     <hr/>
   
     <div className="card-c cblue-c cw1-c ">
         <div className="banner-blue-c"></div>
        <form action=""> 
      <button type='submit' className='btn-blue-c d-rigth margin-edit-c' onClick={(e)=>handleEdit(e)}><i class={handleIcon(edit)}></i></button> 
        <label for="file-input"  >
        <img className='img-profile-c' src="https://cdn2.vectorstock.com/i/thumb-large/63/66/profile-placeholder-default-avatar-vector-21666366.jpg" disabled={edit}  />
        </label>
        <input id="file-input" type="file" className='d-none' disabled={edit}  />


        <input type="text"  className='text-bold text-xl ctcenter-c ' name="d" id="f" name="nombre" onChange placeholder="escribe tu nombre" value='Nombre y Apellidos' disabled={edit} />
        <input type="text" name="" id="" placeholder='Email' placeholder="email" value='email@email.com' disabled={edit}  />
        <input type="password" name="" id="" placeholder='Contraseña'   disabled={edit}  />
        <input type="text" name="" id="" placeholder='Deporte' value='deporte' disabled={edit}  />
        <input type="date" name="" id="" placeholder='Fecha de Nacimiento' value='Fecha de Nacimiento' disabled={edit} />
        <select name="sexo" disabled={edit}  >
                <option selected disabled>Sexo</option> 
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Otro">Otro</option>

            </select>
        
        <textarea name="Descripcion" className='text-s' id="" placeholder='Descripción' disabled={edit}  ></textarea>

       
        </form>
        
     </div>
    

    </div>
    );
    
}


export {PerfilPlayer};