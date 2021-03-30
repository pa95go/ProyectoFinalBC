import './player-component.css';
import {useState, useEffect} from 'react';
import jwt_decode from "jwt-decode";


function InicioPlayer (){

    const [perfil, setPerfil] = useState({ nombre: '', deporte:'', descripcion:'', twitter: '', twitterEng: '',facebook: '',facebookEng: '', instagram: '', instagramEng: '',});
    const [eventos, setEventos] =useState([{nombre: 'Evento vacío'}, {nombre: 'Evento vacío'},{nombre: 'Evento vacío'}]);
    const [soportes, setSoportes ] = useState([
        {nombre: "", estado: false},{nombre: "", estado: false},
        {nombre: "", estado: false},{nombre: "", estado: false}
    ]);
    const [marcas, setMarcas]= useState([
        {nombre: "Disponible", imagen: ""},{nombre: "Disponible", imagen: ""},
        {nombre: "Disponible", imagen: ""},{nombre: "Disponible", imagen: ""}]);


    useEffect(()=>{

        const user = jwt_decode(localStorage.getItem('token'));
         /* ... FECH PLAYER... */
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
        /* ... FECH EVENTOS... */
        fetch('http://localhost:8000/eventos',{
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
             body: JSON.stringify({
                idPlayer: localStorage.getItem('idPerfil')
                
             }) 
          })
          .then( response => response.json())
          .then( response => {
                setEventos( response.eventos.filter(evento => evento['estado']=='proximo'));
                })
            .catch(error=> console.log('error Catch', error));

                /* ... FECH SOPORTES ... */
        fetch(`http://localhost:8000/soportes/show/${localStorage.getItem('idPerfil')}`,{
            method: 'POST',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json'
            } 
        })
        .then( response => response.json())
        .then(
            response => {
                setSoportes(response.soportes);
                })
                .catch( error=> console.log(error));

     /* ... FECH MARCAS... */
     fetch(`http://localhost:8000/mismarcas/actuales`,{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        } ,
        body: JSON.stringify({
           idPerfil: localStorage.getItem('idPerfil')
           
           
        }) 
      })
      .then( response => response.json())
      .then(
          response => {

              setMarcas(response.misMarcasActuales);
              
              

            })
            .catch(
               error=> console.log(error) 
      );
   


    },[]);

    function soporteStyle(soporte) {

        if (soporte.marca != '') {
            return <i class="icon ion-md-planet red-textcolor-c"></i>
        }else if (soporte.estado == false){
            
            return <i class="icon ion-md-eye-off"></i>
        }else if (soporte.estado == true){
            return <i class="icon ion-md-eye blue-textcolor-c"></i>
        }

        
    }

    function marcasListNombre(marca) {
        if(marca == undefined){
            return '[Marca Disponible]'
        }else{
            return marca.nombre.toUpperCase();
        }
        
    }
    function marcasListImagen(marca) {
        if(marca == undefined){
            return '';
        }else{
            return marca.imagen;
        }
        
    }


    return(
    
    <div >


     <h1 className = 'title-c blue-textcolor-c'> <i class="icon ion-md-home"></i> INICIO</h1>
     <hr/>
   
     
     <div className="card-c cblue-c cw1-c ">
         <h1 ><i class="icon ion-md-person"></i> </h1>
         <h3 className='ctcenter-c ctbold-c '>{(perfil.nombre).toUpperCase()}</h3>
        
         <p className='ctcenter-c '>{(perfil.deporte).toUpperCase()}</p>
         <hr/>
         
         <p >{perfil.descripcion}</p>
        <hr/>
        
     </div>
     <div className="box-c">

        <div className="card-c cblue-c cw2-c ">
            <h1 ><i class="icon ion-md-trophy"></i>  </h1> 
            
            <p className='ctcenter-c '  >{eventos[eventos.length-1].nombre}</p>
            <hr/>
            <p className='ctcenter-c ' >{eventos[eventos.length-2].nombre}</p>
            <hr/>
            <p className='ctcenter-c ' >{eventos[eventos.length-3].nombre}</p>
            <hr/>
          
     </div>
        <div className="card-c cblue-c cw2-c ">
            <h1 >@</h1> 
            
            <div className=" box-noresponsive-c text-vertical-center-c m0-c">
            
           <h2 className=' text-vertical-center-c text-light '> <i class="icon ion-logo-twitter text-twitter"></i>   </h2>
           <p className='ctbold-c '>{perfil.twitter}</p>
           <p>{perfil.twitterEng}  <i class="icon ion-md-stats blue-textcolor-c"></i>  </p>
            </div>
         <hr/>
            <div className="box-noresponsive-c text-vertical-center-c m0-c">
            <h2 className=' text-vertical-center-c text-light '> <i class="icon ion-logo-facebook text-facebook"></i>   </h2>
           <p className='ctbold-c '>{perfil.facebook}</p>
          
           <p >{perfil.facebookEng}  <i class="icon ion-md-stats blue-textcolor-c"></i>  </p>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c m0-c">
            <h2 className=' text-vertical-center-c text-light '> <i class="icon ion-logo-instagram text-instagram"></i>   </h2>
           <p className='ctbold-c '>{perfil.instagram}   </p>
          
           <p >{perfil.instagramEng}  <i class="icon ion-md-stats blue-textcolor-c"></i> </p>
            </div>
            <hr/>
        </div>

     </div>
   
   
    <div className="box-c">
        <div className="card-c cblack-c cw2-c ">
            <h1 ><i class="icon ion-md-shirt"></i></h1>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>{soportes[0].nombre == (null||'') ? '[Soporte vacío]': soportes[0].nombre} </p>
           <h2 className=' text-vertical-center-c'>{soporteStyle(soportes[0])}</h2>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>{soportes[1].nombre == (null||'') ? '[Soporte vacío]': soportes[1].nombre} </p>
           <h2 className=' text-vertical-center-c'>{soporteStyle(soportes[1])}</h2>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>{soportes[2].nombre == (null||'') ? '[Soporte vacío]': soportes[2].nombre} </p>
           <h2 className=' text-vertical-center-c'>{soporteStyle(soportes[2])}</h2>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>{soportes[3].nombre == (null||'') ? '[Soporte vacío]': soportes[3].nombre} </p>
            <h2 className=' text-vertical-center-c'>{soporteStyle(soportes[3])}</h2>
            </div>
           <hr/>
        </div>
        

        <div className="card-c cred-c cw2-c ">
            <h1 ><i class="icon ion-md-planet"></i></h1>

            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>{ marcasListNombre(marcas[0])}</p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-red-c text-vertical-center-c' src={ marcasListImagen(marcas[0])} /></h2>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>{ marcasListNombre(marcas[1])} </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-red-c text-vertical-center-c' src={ marcasListImagen(marcas[1])} /></h2>            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>{ marcasListNombre(marcas[2])} </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-red-c text-vertical-center-c' src={ marcasListImagen(marcas[2])} /></h2>            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>{ marcasListNombre(marcas[3])}</p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-red-c text-vertical-center-c' src={ marcasListImagen(marcas[3])} /></h2>
            </div> 
            <hr/>
            
            
        </div>
              
    </div>




    </div>
    );
    
}


export {InicioPlayer};