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


     <h1 className = 'title-c blue-textcolor-c'> <i class="icon ion-md-person"></i> PERFIL</h1>
     <hr/>
   
        <form action=""> 
     <div className="card-c cblue-c cw1-c ">
         <div className="banner-blue-c"></div>
      <button type='submit' className='btn-blue-c d-rigth margin-edit-c' onClick={(e)=>handleEdit(e)}><i class={handleIcon(edit)}></i></button> 
        <label for="file-input"  >
        <img className='img-profile-blue-c' src="https://cdn2.vectorstock.com/i/thumb-large/63/66/profile-placeholder-default-avatar-vector-21666366.jpg" disabled={edit}  />
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

     </div>

     <div className="box-c">

     

     <div className="card-c cblue-c  cw3-c "> 
        <h1 className='bg-twitter' ><i class="icon ion-logo-twitter "></i> </h1>
        <input type="text" className='text-vertical-center-c text-bold text-xl ctcenter-c ' name="" id="twitter-input" placeholder='Email' placeholder="email" value='@pablo' disabled={edit}  />
        <div className="box-noresponsive-c m0-c">
            <p className=' text-vertical-center-c text-s mt10-c'>Seguidores:</p>
            <p className=' text-vertical-center-c mt10-c' >10.589  <i class="icon ion-md-people blue-textcolor-c"></i> </p>
        </div>
       
        <div className="box-noresponsive-c m0-c">
            <p className=' text-vertical-center-c text-s m0-c'>Engagement:</p>
            <p className=' text-vertical-center-c m0-c' >0.8  <i class="icon ion-md-stats blue-textcolor-c "></i> </p>
        </div>
        <hr/>
     
     </div>


        
     <div className="card-c cblue-c cw3-c "> 
        <h1 className='bg-facebook'><i class="icon ion-logo-facebook "></i> </h1>
        <input type="text" className='text-vertical-center-c text-bold text-xl ctcenter-c ' name="" id="twitter-input" placeholder='Email' placeholder="email" value='@pablo' disabled={edit}  />
        <div className="box-noresponsive-c m0-c">
            <p className=' text-vertical-center-c text-s mt10-c'>Seguidores:</p>
            <p className=' text-vertical-center-c mt10-c' >10.589  <i class="icon ion-md-people blue-textcolor-c"></i> </p>
        </div>
       
        <div className="box-noresponsive-c m0-c">
            <p className=' text-vertical-center-c text-s m0-c'>Engagement:</p>
            <p className=' text-vertical-center-c m0-c' >0.8  <i class="icon ion-md-stats blue-textcolor-c "></i> </p>
        </div>
        <hr/>
     
     </div>


     <div className="card-c cblue-c cw3-c "> 
        <h1 className='bg-instagram'><i class="icon ion-logo-instagram "></i> </h1>
        <input type="text" className='text-vertical-center-c text-bold text-xl ctcenter-c ' name="" id="twitter-input" placeholder='Email' placeholder="email" value='@pablo' disabled={edit}  />
        <div className="box-noresponsive-c m0-c">
            <p className=' text-vertical-center-c text-s mt10-c'>Seguidores:</p>
            <p className=' text-vertical-center-c mt10-c' >10.589  <i class="icon ion-md-people blue-textcolor-c"></i> </p>
        </div>
       
        <div className="box-noresponsive-c m0-c">
            <p className=' text-vertical-center-c text-s m0-c'>Engagement:</p>
            <p className=' text-vertical-center-c m0-c' >0.8  <i class="icon ion-md-stats blue-textcolor-c "></i> </p>
        </div>
        <hr/>
     
     </div>
  
        </div>
        </form>

    </div>
    );
    
}


export {PerfilPlayer};