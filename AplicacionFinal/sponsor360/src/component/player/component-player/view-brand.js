import './player-component.css';
import {useState, useEffect} from 'react';

function ViewBrand (){

    const [edit, setEdit] = useState(true);
    const [perfil, setPerfil] = useState(
        {nombre: "", descripcion: "", imagen: "https://cdn2.vectorstock.com/i/thumb-large/63/66/profile-placeholder-default-avatar-vector-21666366.jpg", twitter: "", twitterSeg: "", twitterEng:"", fb:"",fbSeg:"", fbEng:"", instagram:"", instaSeg:"", instaEng: ""}
    );


    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    const id = urlParams.get('id');

    useEffect(()=>{

                    /* ... FECH ... */
     fetch(`http://localhost:8000/brand/showprofile/${id} `,{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        } 
      })
      .then( response => response.json())
      .then(
          response => {
                setPerfil(response.perfilBrand);
            })
            .catch(
               error=> console.log(error) 
      );


    },[]);
   

    return(
    
        <div >
       


        <h1 className = 'title-c blue-textcolor-c'> <i class="icon ion-md-planet"></i>{(perfil.nombre).toUpperCase()},  PERFIL</h1>
        <hr/>
      
           
        <div className="card-c cred-c cw1-c mb0-c">
            <div className="banner-red-c"></div>
            <div className="mt-75 "></div>
           <img className='img-profile-red-c ' src={perfil.imagen} disabled={edit}  />
          
          <h2 className='text-bold text-xl ctcenter-c m0-c '>{(perfil.nombre).toUpperCase()}</h2>
          <hr/>
          <p className=' text-light text-m '>{perfil.descripcion}</p>
          <hr/>
          <p className='  text-m '>Total de soportes:  <span className=' text-bolder text-m '>{perfil.totalSoportes}</span></p>
          <p className='  text-m '>Total de deportistas:  <span className=' text-bolder text-m '>{perfil.totalPlayers}</span></p>
   
   
       </div>
       <div className="box-c mt20 mb0-c ">
   
           <div className="card-c cred-c cw3-c  mt10-c">
               <h1 className='text-m text-bolder bg-twitter '><i class="icon ion-logo-twitter"> </i> {perfil.twitter}</h1>
   
               <div className=" box-noresponsive-c text-vertical-center-c m0-c mt10-c">
               <p>Seguidores: </p>
               <p>{perfil.twitterSeg}  <i class="icon ion-md-people red-textcolor-c"></i>  </p>
                </div>
             <hr/>
   
             <div className=" box-noresponsive-c text-vertical-center-c m0-c ">
               <p>Engagement: </p>
               <p>{perfil.twitterEng}  <i class="icon ion-md-stats red-textcolor-c  "></i>  </p>
                </div>
           </div>
   
           <div className="card-c cred-c cw3-c  mt10-c">
               <h1 className='text-m text-bolder bg-facebook '><i class="icon ion-logo-facebook"> </i> {perfil.fb}</h1>
   
               <div className=" box-noresponsive-c text-vertical-center-c m0-c mt10-c">
               <p>Seguidores: </p>
               <p>{perfil.fbSeg}  <i class="icon ion-md-people red-textcolor-c"></i>  </p>
                </div>
             <hr/>
   
             <div className=" box-noresponsive-c text-vertical-center-c m0-c">
               <p>Engagement: </p>
               <p>{perfil.fbEng}  <i class="icon ion-md-stats red-textcolor-c  "></i>  </p>
                </div>
           </div>
   
           <div className="card-c cred-c cw3-c mt10-c ">
               <h1 className='text-m text-bolder bg-instagram '><i class="icon ion-logo-instagram"> </i> {perfil.instgram}</h1>
   
               <div className=" box-noresponsive-c text-vertical-center-c m0-c mt10-c">
               <p>Seguidores: </p>
               <p>{perfil.instaSeg}  <i class="icon ion-md-people red-textcolor-c"></i>  </p>
                </div>
             <hr/>
   
             <div className=" box-noresponsive-c text-vertical-center-c m0-c">
               <p>Engagement: </p>
               <p>{perfil.instaEng}  <i class="icon ion-md-stats red-textcolor-c  "></i>  </p>
                </div>
           </div>
   
       </div>
      
    
                 
       </div>
    );
    
}


export {ViewBrand};