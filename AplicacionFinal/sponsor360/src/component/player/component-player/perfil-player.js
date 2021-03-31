import './player-component.css';
import {useState, useEffect} from 'react';
import jwt_decode from "jwt-decode";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

function PerfilPlayer (){

    const history = useHistory();
    const [edit, setEdit] = useState(true);

    const [perfil, setPerfil] = useState(
        {
            
            nombre: "",
            email: "",
            deporte: "",
            fechaNacimiento: "",
            sexo: "",
            descripcion: "",
            imagen: [],
            twitter: '',
            twitterSeg: '',
            twitterEng: '',
            facebook: '',
            facebookSeg: '',
            facebookEng: '',
            instagram: '',
            instagramSeg: '',
            instagramEng: ''

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
            email: user.username,
            idPerfil: localStorage.getItem('idPerfil') 
            
         }) 
      })
      .then( response => response.json()
      .then(
          response => {
          
            setPerfil(response.player);

            
            })
            .catch(
                
               error=> console.log(error) 
      ));



    },[]);


    function handleEdit (e){
        e.preventDefault();
        console.log(perfil);
        setEdit(!edit); 
        if (!edit) {
            
            setPerfil(perfil)
            /* FECH IMAGEN con el form Data */

            const formDataImagen = new FormData();
            formDataImagen.append('imagen', perfil.imagen);
                   /* ... FECH DATOS... */
            fetch(`http://localhost:8000/player/editimagen/${localStorage.getItem('idPerfil')}`,{
                method: 'POST',
                mode: 'cors',
                body:  formDataImagen
            })
            .then( response => response.json())
            .then()
            .catch (error => console.log(error) );
        


             /* ... FECH DATOS... */
      fetch('http://localhost:8000/player/edit',{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
         body: JSON.stringify({ 
            id: perfil.id,
            nombre: perfil.nombre,
            email: perfil.email,
            deporte: perfil.deporte,
            sexo: perfil.sexo,
            fechaNacimiento: perfil.fechaNacimiento,
            descripcion: perfil.descripcion,
            twitter: perfil.twitter,
            twitterSeg: perfil.twitterSeg,
            twitterEng: perfil.twitterEng,
            facebook: perfil.facebook,
            facebookSeg: perfil.facebookSeg,
            facebookEng: perfil.facebookEng,
            instagram: perfil.instagram,
            instagramSeg: perfil.instagramSeg,
            instagramEng: perfil.instagramEng
            
         }) 
      })
      .then( response => response.json())
      .then(response => {
        setPerfil(response.player);
        swal({
            position: 'top-end',
            title: "Actualizando datos",
            text: "Espere un momento por favor.",
            icon: "info",
            button: ["si"],
            timer: "1000",
        }).then(() => {
            history.go(0)
        });
      })
            .catch(error=> console.log(error) );
           
        
        }
        
        
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
        const newPerfil = {...perfil,nombre: e.target.value};
        setPerfil(newPerfil);
       
    }
    function handleEmail (e){
        e.preventDefault();
        const newPerfil = {...perfil,email: e.target.value};
        setPerfil(newPerfil);
       
    }

    function handleDeporte (e){
        e.preventDefault();
        const newPerfil = {...perfil,deporte: e.target.value};
        setPerfil(newPerfil);
       
    }

    function handleFecha(e){
        e.preventDefault();
        const newPerfil = {...perfil,fechaNacimiento: e.target.value};
        console.log(e.target.value);
        setPerfil(newPerfil);
       
    }
    function handleSexo (e){
        e.preventDefault();
        console.log(e.target.value);
        const newPerfil = {...perfil,sexo: e.target.value};
        setPerfil(newPerfil);
       
    }
    function handleDescripcion (e){
        e.preventDefault();
        const newPerfil = {...perfil,descripcion: e.target.value};
        setPerfil(newPerfil);
       
    }
    function handleTwitter (e){
        e.preventDefault();
        const newPerfil = {...perfil,twitter: e.target.value, twitterSeg: Math.round(Math.random()*30000)+100, twitterEng: (Math.round(Math.random()*80)/10)+2 };
        setPerfil(newPerfil);
       
    }
    function handleFacebook (e){
        e.preventDefault();
        const newPerfil = {...perfil,facebook: e.target.value, facebookSeg: Math.round(Math.random()*30000)+100, facebookEng: (Math.round(Math.random()*80)/10)+2 };
        setPerfil(newPerfil);
       
    }
    function handleInstagram (e){
        e.preventDefault();
        const newPerfil = {...perfil,instagram: e.target.value, instagramSeg: Math.round(Math.random()*30000)+100, instagramEng: (Math.round(Math.random()*80)/10)+2 };
        setPerfil(newPerfil);
        console.log(perfil);
       
    }

    const handleImagen = (e)=> {
        const newPerfil = {...perfil, imagen: e.target.files[0]};
        setPerfil(newPerfil);
        console.log(e.target.files[0]);
        
        
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
        <img className='img-profile-blue-c' src={perfil.imagen} disabled={edit}  />
        </label>
        <input id='file-input' type="file" className='d-none' disabled={edit}  onChange={handleImagen}  />


        <input type="text"  className='text-bold text-xl ctcenter-c '   placeholder="Nombre y apellidos" onChange={(e)=>handleNombre(e)} defaultValue={perfil.nombre} disabled={edit} />
        <input type="text"  placeholder='Email' onChange={(e)=>handleEmail(e)}  defaultValue={perfil.email} disabled   />
       
        <input type="text"  placeholder='Deporte'  onChange={(e)=>handleDeporte(e)} defaultValue={perfil.deporte} disabled={edit}  />
        <input type="date"  placeholder='Fecha de Nacimiento' onChange={(e)=>handleFecha(e)} defaultValue={perfil.fechaNacimiento} disabled={edit} />
        <select name="sexo" onChange={(e)=>handleSexo(e)} value={perfil.sexo} disabled={edit}  >
                <option selected disabled>Sexo:</option> 
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Otro">Otro</option>

            </select>
        
        <textarea name="Descripcion" className='text-s' placeholder='Descripción' onChange={(e)=>handleDescripcion(e)} defaultValue={perfil.descripcion} disabled={edit}  ></textarea>

     </div>

     <div className="box-c">

     

     <div className="card-c cblue-c  cw3-c "> 
        <h1 className='bg-twitter' ><i class="icon ion-logo-twitter "></i> </h1>
        <input type="text" className='text-vertical-center-c text-bold text-xl ctcenter-c ' name="" id="twitterUser" placeholder='usuario' onChange={(e)=>handleTwitter(e) } defaultValue={perfil.twitter} disabled={edit}  />
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
        <input type="text" className='text-vertical-center-c text-bold text-xl ctcenter-c '  id="facebookUser" placeholder='usuario' onChange={(e)=>handleFacebook(e) } defaultValue={perfil.facebook} disabled={edit}  />
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
        <input type="text" className='text-vertical-center-c text-bold text-xl ctcenter-c '  id="tinstagramUser" placeholder='usuario' onChange={(e)=>handleInstagram(e) } defaultValue={perfil.instagram} disabled={edit}  />
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