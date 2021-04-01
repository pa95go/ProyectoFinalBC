import './brand-component.css';
import {useState, useEffect} from 'react'

function InicioBrand (){

    const [perfil, setPerfil] = useState(
        {
        nombre: "", descripcion: "", imagen: "",
        totalSoportes: '0',totalPlayers: '0',
        twitter: "",  twitterEng:"",
        fb:"", fbEng:"",
        instagram:"", instaEng: ""
      }
    );

    const [soportes, setSoportes]= useState([
        { 
          id: "0", 
          nombre_soporte: "", 
          img_soporte: "", 
          
      },
      ]);
      const [deportistas, setDeportistas]= useState([
        {id_player: '0', 
        nombre_deportista: "",
         img_deportista:'' 
        },
        
    ]);

    useEffect(() => {
        window.scrollTo(0, 0);

        const id = localStorage.getItem('idPerfil');

     /* ... FECH Perfil... */
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
      /* ... FECH Soportes... */
      fetch('http://localhost:8000/brand/missoportes/',{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify({
       idPerfil: localStorage.getItem('idPerfil') 
          }) 
      }).then( response => response.json())
      .then(
          response => {
            const listaSoportes = [...response.missoportes].sort((a, b) => (a.id < b.id ? 1 : a.id < b.id ? -1 : 0));
            setSoportes(listaSoportes.slice(0, 3));

        }).catch(error=> console.log(error) );

        /* ... FECH Deportistas... */
        fetch('http://localhost:8000/brand/misdeportistas/',{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({
            idPerfil: localStorage.getItem('idPerfil') 
                
                }) 
            }).then( response => response.json())
            .then(
                response => {
                //setDeportistas(response.misdeportistas);
                const listaDeportistas = [...response.misdeportistas].sort((a, b) => (a.id_player < b.id_player ? 1 : a.id < b.id ? -1 : 0));
                 setDeportistas(listaDeportistas.slice(0, 3));
    
            }).catch(error=> console.log(error) );


      }, [])


    return(
    
    <div >
      


     <h1 className = 'title-c red-textcolor-c'> <i class="icon ion-md-home"></i> INICIO</h1>
     <hr/>
   
     
     <div className="card-c cred-c cw1-c ">
         <h1 ><i class="icon ion-md-person"></i> </h1>
         <h3 className='ctcenter-c ctbold-c '>{(perfil.nombre).toUpperCase()}</h3>
        
        
         <hr/>
         
         <p >{perfil.descripcion}</p>
        <hr/>
        
     </div>
     
     <div className="box-c">

        <div className="card-c cred-c cw2-c ">
        <h1 ><i class="icon ion-md-bookmark"></i></h1>
         <div className=" box-noresponsive-c text-vertical-center-c m0-c">
            <h4 className='ctcenter-c ctbold-c '>Número total de Soportes:</h4> 
            <h3 className='ctcenter-c ctbold-c '>{perfil.totalSoportes} <i class="icon ion-md-shirt red-textcolor-c"></i></h3> 
        </div>
        
         <hr/>
         <div className=" box-noresponsive-c text-vertical-center-c m0-c">
            <h4 className='ctcenter-c ctbold-c '>Número total de Deportistas:</h4> 
            <h3 className='ctcenter-c ctbold-c '>{perfil.totalPlayers} <i class="icon ion-md-tennisball red-textcolor-c"></i></h3> 
        </div>

        <hr/>
          
     </div>
        <div className="card-c cred-c cw2-c ">
            <h1 >@</h1> 
            
            <div className=" box-noresponsive-c text-vertical-center-c m0-c">
            
           <h2 className=' text-vertical-center-c text-light '> <i class="icon ion-logo-twitter text-twitter"></i>   </h2>
           <p className='ctbold-c '>{perfil.twitter}   </p>
           <p>{perfil.twitterEng}  <i class="icon ion-md-stats red-textcolor-c"></i>  </p>
            </div>
         <hr/>
            <div className="box-noresponsive-c text-vertical-center-c m0-c">
            <h2 className=' text-vertical-center-c text-light '> <i class="icon ion-logo-facebook text-facebook"></i>   </h2>
           <p className='ctbold-c '>{perfil.fb}   </p>
          
           <p >{perfil.fbEng}  <i class="icon ion-md-stats red-textcolor-c"></i>  </p>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c m0-c">
            <h2 className=' text-vertical-center-c text-light '> <i class="icon ion-logo-instagram text-instagram"></i>   </h2>
           <p className='ctbold-c '>{perfil.instagram}   </p>
          
           <p >{perfil.instaEng}  <i class="icon ion-md-stats red-textcolor-c"></i> </p>
            </div>
            <hr/>
        </div>

     </div>
   
   
    <div className="box-c">
        <div className="card-c cblack-c cw2-c ">
            <h1 ><i class="icon ion-md-shirt"></i></h1>
            <p className='text-s text-light0 ctcenter-c'> Últimos soportes adquiridos</p>
            <hr/>

            {
                soportes.map((soporte)=>{
                    return (
                        <div>

                        <div className="box-noresponsive-c text-vertical-center-c">
                        <p className='ctbold-c  '>{soporte.nombre_soporte} </p>
                        <h2 className=' text-vertical-center-c'><img className='img-xs-profile-black-c text-vertical-center-c' src={soporte.img_soporte} /></h2>
                        </div>
                        <hr/>
                                
                        </div>
                    )
                })
            }




           
            
        </div>
        

        <div className="card-c cblue-c cw2-c ">
            <h1 ><i class="icon ion-md-tennisball"> </i></h1>
            <p className='text-s text-light0 ctcenter-c'> Últimos deportistas adquiridos</p>
            <hr/>

            {
                deportistas.map((deportista)=>{
                    return (
                        <div>

            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>{deportista.nombre_deportista} </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-blue-c text-vertical-center-c' src={deportista.img_deportista}/></h2>
            </div>
            <hr/>
                        
                        </div>
                    )
                })
            }

            
        </div>
              
    </div>




    </div>
    );
    
}


export {InicioBrand};