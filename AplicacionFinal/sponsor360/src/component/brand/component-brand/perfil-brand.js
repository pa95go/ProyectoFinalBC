import './brand-component.css';
import {useState, useEffect} from 'react';
import jwt_decode from "jwt-decode";

function PerfilBrand (){

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
    }


    function handleIcon(edit){ 
       
        if(edit === true){

            return "icon ion-md-create";
        }else{
            return "icon ion-md-save";

        }
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
        <img className='img-profile-red-c' src="https://cdn2.vectorstock.com/i/thumb-large/63/66/profile-placeholder-default-avatar-vector-21666366.jpg" disabled={edit}  />
        </label>
        <input id="file-input" type="file" className='d-none' disabled={edit}  />


        <input type="text"  className='text-bold text-xl ctcenter-c '  name="nombre"  placeholder="escribe tu nombre" defaultValue={perfil.nombre} disabled={edit} />
        <input type="text" name="" id="" placeholder='Email' placeholder="email" defaultValue={perfil.email} disabled  />
     {/*    <input type="password" name="" id="" placeholder='Contraseña'   disabled={edit}  /> */}
        
        <textarea name="Descripcion" className='text-s' id="" placeholder='Descripción' defaultValue={perfil.descripcion} disabled={edit}  ></textarea>

     </div>

     <div className="box-c">
        

     

     <div className="card-c cred-c  cw3-c ">  
        <h1 className='bg-twitter'   ><i class="icon ion-logo-twitter "></i> </h1>
        <input type="text" className='text-vertical-center-c text-bold text-xl ctcenter-c '  name="" id="twitter-input" placeholder='Usuario'  defaultValue={perfil.twitter} disabled={edit}  />
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
        <input type="text" className='text-vertical-center-c text-bold text-xl ctcenter-c ' name="" id="twitter-input" placeholder='Usuario'  defaultValue={perfil.facebook}  disabled={edit}  />
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
        <input type="text" className='text-vertical-center-c text-bold text-xl ctcenter-c ' name="" id="twitter-input" placeholder='Usuario'  defaultValue={perfil.instagram} disabled={edit}  />
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