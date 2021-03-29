import './player-component.css';
import {useState, useEffect} from 'react';
import jwt_decode from "jwt-decode";

function PerfilPlayer (){

    const [edit, setEdit] = useState(true);

    const [perfil, setPerfil] = useState(
        {
            nombre: "",
            email: "",
            deporte: "",
            fechaNacimiento: "",
            sexo: "",
            descripcion: "",
            imagen: ""

        }
    );


    

    useEffect(()=>{
        const user = jwt_decode(localStorage.getItem('token'));
        

         /* ... FECH ... */
      fetch('http://localhost:8000/player',{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
         body: JSON.stringify({
            email: user.username 
            
         }) 
      })
      .then( response => response.json()
      .then(
          response => {
          
           const fecha = new Date(response.player.fecha_nacimiento).toISOString().slice(0, 10);
          
            setPerfil({
                nombre: response.player.nombre,
                email: response.player.email,
                deporte: response.player.deporte,
                fechaNacimiento: fecha ,
                sexo: response.player.sexo,
                descripcion: response.player.descripcion,
                imagen: response.player.imagen,
                twitter: response.player.rrss.twitterUsuario,
                twitterSeg: response.player.rrss.twitterSeg,
                twitterEng: response.player.rrss.twitterEng,
                facebook: response.player.rrss.fbUsuario,
                facebookSeg: response.player.rrss.fbSeg,
                facebookEng: response.player.rrss.fbEng,
                instagram: response.player.rrss.instaUsuario,
                instagramSeg: response.player.rrss.instaSeg,
                instagramEng: response.player.rrss.instaEng

                });
            

            //  console.log("perfil");
            //  console.log(perfil);
            })
            .catch(
                
               error=> console.log(error) 
      ));



    },[]);

  /*   console.log("Holi");
    const date = new Date(perfil.fechaNacimiento); 
    console.log(date.toLocaleDateString()); */

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
    function handleNombre (e){
        e.preventDefault();
       
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


        <input type="text"  className='text-bold text-xl ctcenter-c ' name="d" id="f" name="nombre"  placeholder="Nombre y apellidos" onChange={(e)=>handleNombre(e)} defaultValue={perfil.nombre} disabled={edit} />
        <input type="text" name="" id="" placeholder='Email' placeholder="email" defaultValue={perfil.email} disabled={edit}  />
        <input type="password" name="" id="" placeholder='Nueva contraseña'  disabled={edit}  />
        <input type="text" name="" id="" placeholder='Deporte' defaultValue={perfil.deporte} disabled={edit}  />
        <input type="date" name="" id="" placeholder='Fecha de Nacimiento' defaultValue={perfil.fechaNacimiento} disabled={edit} />
        <select name="sexo" defaultValue={perfil.sexo} disabled={edit}  >
                <option selected disabled>Sexo</option> 
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Otro">Otro</option>

            </select>
        
        <textarea name="Descripcion" className='text-s' id="" placeholder='Descripción' defaultValue={perfil.descripcion} disabled={edit}  ></textarea>

     </div>

     <div className="box-c">

     

     <div className="card-c cblue-c  cw3-c "> 
        <h1 className='bg-twitter' ><i class="icon ion-logo-twitter "></i> </h1>
        <input type="text" className='text-vertical-center-c text-bold text-xl ctcenter-c ' name="" id="twitter-input" placeholder='usuario'  defaultValue={perfil.twitter} disabled={edit}  />
        <div className="box-noresponsive-c m0-c">
            <p className=' text-vertical-center-c text-s mt10-c'>Seguidores:</p>
            <p className=' text-vertical-center-c mt10-c' >{perfil.twitterSeg}  <i class="icon ion-md-people blue-textcolor-c"></i> </p>
        </div>
       
        <div className="box-noresponsive-c m0-c">
            <p className=' text-vertical-center-c text-s m0-c'>Engagement:</p>
            <p className=' text-vertical-center-c m0-c' >{perfil.twitterEng}  <i class="icon ion-md-stats blue-textcolor-c "></i> </p>
        </div>
        <hr/>
     
     </div>


        
     <div className="card-c cblue-c cw3-c "> 
        <h1 className='bg-facebook'><i class="icon ion-logo-facebook "></i> </h1>
        <input type="text" className='text-vertical-center-c text-bold text-xl ctcenter-c ' name="" id="twitter-input" placeholder='usuario'  defaultValue={perfil.facebook} disabled={edit}  />
        <div className="box-noresponsive-c m0-c">
            <p className=' text-vertical-center-c text-s mt10-c'>Seguidores:</p>
            <p className=' text-vertical-center-c mt10-c' >{perfil.facebookSeg}  <i class="icon ion-md-people blue-textcolor-c"></i> </p>
        </div>
       
        <div className="box-noresponsive-c m0-c">
            <p className=' text-vertical-center-c text-s m0-c'>Engagement:</p>
            <p className=' text-vertical-center-c m0-c' >{perfil.facebookEng}  <i class="icon ion-md-stats blue-textcolor-c "></i> </p>
        </div>
        <hr/>
     
     </div>


     <div className="card-c cblue-c cw3-c "> 
        <h1 className='bg-instagram'><i class="icon ion-logo-instagram "></i> </h1>
        <input type="text" className='text-vertical-center-c text-bold text-xl ctcenter-c ' name="" id="twitter-input" placeholder='usuario' defaultValue={perfil.instagram} disabled={edit}  />
        <div className="box-noresponsive-c m0-c">
            <p className=' text-vertical-center-c text-s mt10-c'>Seguidores:</p>
            <p className=' text-vertical-center-c mt10-c' >{perfil.instagramSeg}  <i class="icon ion-md-people blue-textcolor-c"></i> </p>
        </div>
       
        <div className="box-noresponsive-c m0-c">
            <p className=' text-vertical-center-c text-s m0-c'>Engagement:</p>
            <p className=' text-vertical-center-c m0-c' >{perfil.instagramEng}  <i class="icon ion-md-stats blue-textcolor-c "></i> </p>
        </div>
        <hr/>
     
     </div>
  
        </div>
        </form>

    </div>
    );
    
}


export {PerfilPlayer};