import './brand-component.css';
import {useState, useEffect} from 'react';
import jwt_decode from "jwt-decode";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

function PerfilBrand (){

    const history = useHistory();
    const [edit, setEdit] = useState(true);

    const [perfil, setPerfil] = useState(
        {
            
            nombre: "",
            email: "",
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


    useEffect(() => {
        window.scrollTo(0, 0);

        const user = jwt_decode(localStorage.getItem('token'));
         /* ... FECH ... */
      fetch('http://localhost:8000/brand',{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
         body: JSON.stringify({
            email: user.username
            //idPerfil: localStorage.getItem('idPerfil') 
            
         }) 
      })
      .then( response => response.json())
      .then(
          response => {
          
            setPerfil(response.brand);

        }).catch(error=> console.log(error) );


      }, [])

    function handleEdit (e){
        e.preventDefault();
        console.log(edit);
         setEdit(!edit); 

         if (!edit) {
            
            setPerfil(perfil)
            /* FECH IMAGEN con el form Data */

            const formDataImagen = new FormData();
            formDataImagen.append('imagen', perfil.imagen);
                   /* ... FECH DATOS... */
            fetch(`http://localhost:8000/brand/editimagen/${localStorage.getItem('idPerfil')}`,{
                method: 'POST',
                mode: 'cors',
                body:  formDataImagen
            })
            .then( response => response.json())
            .then()
            .catch (error => console.log(error) );
        


             /* ... FECH DATOS... */
      fetch('http://localhost:8000/brand/edit',{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
         body: JSON.stringify({ 
            id: perfil.id,
            nombre: perfil.nombre,
            email: perfil.email,
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
        setPerfil(response.brand);
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



    function handleIcon(edit){ 
       
        if(edit === true){

            return "icon ion-md-create";
        }else{
            return "icon ion-md-save";

        }
    }

    const handleImagen = (e)=> {
        const newPerfil = {...perfil, imagen: e.target.files[0]};
        setPerfil(newPerfil);
        console.log(e.target.files[0]);
        
        
    }

    function handleNombre (e){
        e.preventDefault();
        const newPerfil = {...perfil,nombre: e.target.value};
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

    return(
    
    <div >

     <h1 className = 'title-c red-textcolor-c'> <i class="icon ion-md-person"></i> PERFIL</h1>
     <hr/>
   
        <form action=""> 
     <div className="card-c cred-c cw1-c ">
         <div className="banner-red-c"></div>
      <button type='submit' className='btn-red-c d-rigth margin-edit-c' onClick={(e)=>handleEdit(e)}><i class={handleIcon(edit)}></i></button> 
        <label for="file-input"  >
        <img className='img-profile-red-c' src={perfil.imagen} disabled={edit}  />
        </label>
        <input id="file-input" type="file" className='d-none' onChange={handleImagen} disabled={edit}  />


        <input type="text"  className='text-bold text-xl ctcenter-c '  name="nombre"  placeholder="escribe tu nombre" onChange={(e)=>handleNombre(e)} defaultValue={perfil.nombre} disabled={edit} />
        <input type="text" name="" id="" placeholder='Email' placeholder="email" defaultValue={perfil.email} disabled  />
     {/*    <input type="password" name="" id="" placeholder='Contraseña'   disabled={edit}  /> */}
        
        <textarea name="Descripcion" className='text-s' id="" placeholder='Descripción' onChange={(e)=>handleDescripcion(e)} defaultValue={perfil.descripcion} disabled={edit}  ></textarea>

     </div>

     <div className="box-c">
        

     

     <div className="card-c cred-c  cw3-c ">  
        <h1 className='bg-twitter'   ><i class="icon ion-logo-twitter "></i> </h1>
        <input type="text" className='text-vertical-center-c text-bold text-xl ctcenter-c '  name="" id="twitter-input" placeholder='Usuario' onChange={(e)=>handleTwitter(e) } defaultValue={perfil.twitter} disabled={edit}  />
        <div className="box-noresponsive-c m0-c">
            <p className=' text-vertical-center-c text-s mt10-c'>Seguidores:</p>
            <p className=' text-vertical-center-c mt10-c' >{perfil.twitterSeg}   <i class="icon ion-md-people red-textcolor-c"></i> </p>
        </div>
       
        <div className="box-noresponsive-c m0-c">
            <p className=' text-vertical-center-c text-s m0-c'>Engagement:</p>
            <p className=' text-vertical-center-c m0-c' >{perfil.twitterEng}  <i class="icon ion-md-stats red-textcolor-c "></i> </p>
        </div>
        <hr/>
        
     </div>
    

        
     <div className="card-c cred-c cw3-c "> 
        <h1 className='bg-facebook'><i class="icon ion-logo-facebook "></i> </h1>
        <input type="text" className='text-vertical-center-c text-bold text-xl ctcenter-c ' name="" id="twitter-input" placeholder='Usuario' onChange={(e)=>handleFacebook(e) } defaultValue={perfil.facebook}  disabled={edit}  />
        <div className="box-noresponsive-c m0-c">
            <p className=' text-vertical-center-c text-s mt10-c'>Seguidores:</p>
            <p className=' text-vertical-center-c mt10-c' >{perfil.facebookSeg}  <i class="icon ion-md-people red-textcolor-c"></i> </p>
        </div>
       
        <div className="box-noresponsive-c m0-c">
            <p className=' text-vertical-center-c text-s m0-c'>Engagement:</p>
            <p className=' text-vertical-center-c m0-c' >{perfil.facebookEng}  <i class="icon ion-md-stats red-textcolor-c "></i> </p>
        </div>
        <hr/>
     
     </div>


     <div className="card-c cred-c cw3-c "> 
        <h1 className='bg-instagram'><i class="icon ion-logo-instagram "></i> </h1>
        <input type="text" className='text-vertical-center-c text-bold text-xl ctcenter-c ' name="" id="twitter-input" placeholder='Usuario' onChange={(e)=>handleInstagram(e) } defaultValue={perfil.instagram} disabled={edit}  />
        <div className="box-noresponsive-c m0-c">
            <p className=' text-vertical-center-c text-s mt10-c'>Seguidores:</p>
            <p className=' text-vertical-center-c mt10-c' >{perfil.instagramSeg}  <i class="icon ion-md-people red-textcolor-c"></i> </p>
        </div>
       
        <div className="box-noresponsive-c m0-c">
            <p className=' text-vertical-center-c text-s m0-c'>Engagement:</p>
            <p className=' text-vertical-center-c m0-c' >{perfil.instagramEng}  <i class="icon ion-md-stats red-textcolor-c "></i> </p>
        </div>
        <hr/>
     
     </div>
  
        </div>
        </form>

    </div>
    );
    
}


export {PerfilBrand};