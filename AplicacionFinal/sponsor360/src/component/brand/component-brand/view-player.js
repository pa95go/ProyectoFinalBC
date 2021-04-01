import './brand-component.css';
import {useState, useEffect} from 'react';

function ViewPlayer (){

    const [perfil, setPerfil] = useState(
        {
        nombre: "",
        deporte: "",
        sexo:"",
        fecha:"",
        descripcion: "",
        totalSponsor: '0',
        imagen: "", 
        twitter: "", twitterSeg: "", twitterEng:"", 
        fb:"",fbSeg:"", fbEng:"",
        instagram:"", instaSeg:"", instaEng: ""}
    );

    const [todosEventos, setTodosEventos] =useState([{}]);
    const [proximosEventos, setProximosEventos] =useState([{}]);
    const [asistidosEventos, setAsistidosEventos] =useState([{}]);

    const [soportes, setSoportes ] = useState([
        { id:"0", nombre: "", imagen:[]},
        { id:"1", nombre: "", imagen:[]},
        { id:"3", nombre: "", imagen:[]},
        { id:"4", nombre: "", imagen:[]},
       
    ]);

    const [marcasActuales, setMarcasActuales]= useState([
        {nombre:"", imagen:""}
    ]);

    
    useEffect(() => {
        window.scrollTo(0, 0)
        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        const id = urlParams.get('id');

      /* ... FECH ... */
     fetch(`http://localhost:8000/player/showprofile/${id} `,{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        } 
      })
      .then( response => response.json())
      .then(
          response => {
                setPerfil(response.perfilPlayer);
            })
            .catch(
               error=> console.log(error) 
      );
        /* ... FECH Eventos /Logros ... */
        fetch('http://localhost:8000/eventos',{
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({
            idPlayer: id
            
            }) 
        })
        .then( response => response.json())
        .then(
            response => {
            setProximosEventos( response.eventos.filter(evento => evento['estado']=='proximo'));
            setAsistidosEventos( response.eventos.filter(evento => evento['estado']=='asistido'));
            })
            .catch(  error=> console.log('error Catch', error) );
            /* ... FECH  Soportes... */
        fetch(`http://localhost:8000/soportes/show/${id}`,{
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
                .catch( error=> console.log(error) );

        /* ... FECH Marcas Actuales... */
     fetch(`http://localhost:8000/mismarcas/actuales`,{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        } ,
        body: JSON.stringify({
           idPerfil: id
           
        }) 
      })
      .then( response => response.json())
      .then(
          response => {
                setMarcasActuales(response.misMarcasActuales);
            })
            .catch(
               error=> console.log(error) 
      );

      }, [])


    return(
    
    <div >
       


     <h1 className = 'title-c blue-textcolor-c'> <i class="icon ion-md-tennisball"></i>  {(perfil.nombre).toUpperCase()} </h1>
     <hr/>
   
        
     <div className="card-c cblue-c cw1-c mb0-c">
         <div className="banner-blue-c"></div>
         <div className="mt-75 "></div>
        <img className='img-profile-blue-c ' src={perfil.imagen} disabled  />
       
       <h2 className='text-bold text-xl ctcenter-c m0-c '>{(perfil.nombre).toUpperCase()}</h2>
       <p className=' blue-textcolor-c  text-m ctcenter-c m0-c0'>{(perfil.deporte).toUpperCase()}</p>
       <hr/>
       <p className=' text-light text-m '>{perfil.descripcion}</p>
       <hr/>
       <p className='  text-m '>{perfil.fecha} - {perfil.sexo}</p>
       <p className='  text-m '>Total de sponsors:  <span className=' text-bolder text-m '>{perfil.totalSponsor}</span></p>


    </div>
    <div className="box-c mt20 mb0-c ">

        <div className="card-c cblue-c cw3-c  mt10-c">
            <h1 className='text-m text-bolder bg-twitter '><i class="icon ion-logo-twitter"> </i> {perfil.twitter}</h1>

            <div className=" box-noresponsive-c text-vertical-center-c m0-c mt10-c">
            <p>Seguidores: </p>
            <p>{perfil.twitterSeg}  <i class="icon ion-md-people blue-textcolor-c"></i>  </p>
             </div>
          <hr/>

          <div className=" box-noresponsive-c text-vertical-center-c m0-c ">
            <p>Engagement: </p>
            <p>{perfil.twitterEng}  <i class="icon ion-md-stats blue-textcolor-c  "></i>  </p>
             </div>
        </div>

        <div className="card-c cblue-c cw3-c  mt10-c">
            <h1 className='text-m text-bolder bg-facebook '><i class="icon ion-logo-facebook"> </i> {perfil.fb}</h1>

            <div className=" box-noresponsive-c text-vertical-center-c m0-c mt10-c">
            <p>Seguidores: </p>
            <p>{perfil.fbSeg}  <i class="icon ion-md-people blue-textcolor-c"></i>  </p>
             </div>
          <hr/>

          <div className=" box-noresponsive-c text-vertical-center-c m0-c">
            <p>Engagement: </p>
            <p>{perfil.fbEng}  <i class="icon ion-md-stats blue-textcolor-c  "></i>  </p>
             </div>
        </div>

        <div className="card-c cblue-c cw3-c mt10-c ">
            <h1 className='text-m text-bolder bg-instagram '><i class="icon ion-logo-instagram"> </i> {perfil.instgram}</h1>

            <div className=" box-noresponsive-c text-vertical-center-c m0-c mt10-c">
            <p>Seguidores: </p>
            <p>{perfil.instaSeg}  <i class="icon ion-md-people blue-textcolor-c"></i>  </p>
             </div>
          <hr/>

          <div className=" box-noresponsive-c text-vertical-center-c m0-c">
            <p>Engagement: </p>
            <p>{perfil.instaEng}  <i class="icon ion-md-stats blue-textcolor-c  "></i>  </p>
             </div>
        </div>

    </div>
   
   <div className="box-c m0-c ">
        <div className="card-c cred-c cw2-c  m0-c mt10-c">
            <h1 className='text-m text-bolder  '><i class="icon ion-md-planet"> </i> Marcas:</h1>

            
          
            
            {
                marcasActuales.map((marca)=>{
                    return (
                        <div>

                        <div className="box-noresponsive-c text-vertical-center-c">
                    <p className='ctbold-c  '>{marca.nombre} </p>
                     <h2 className=' text-vertical-center-c'><img className='img-xs-profile-red-c text-vertical-center-c' src={marca.imagen} /></h2>
                        </div>
                        <hr/>
                        </div>
                    )
                })
            }

           
            {/* <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c  '>Camiseta Delantera </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-red-c text-vertical-center-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg ' /></h2>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c  '>Camiseta Delantera </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-red-c text-vertical-center-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg ' /></h2>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c  '>Camiseta Delantera </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-red-c text-vertical-center-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg ' /></h2>
            </div>
            <hr/> */}
           
           
        </div>
        <div className="card-c cblack-c cw2-c  m0-c mt10-c">
            <h1 className='text-m text-bolder blue-textcolor-c '><i class="icon ion-md-shirt"> </i> Soportes:</h1>
            
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c  '>{soportes[0].nombre} </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-black-c text-vertical-center-c' src={soportes[0].imagen} /></h2>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c  '>{soportes[1].nombre} </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-black-c text-vertical-center-c' src={soportes[1].imagen} /></h2>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c  '>{soportes[2].nombre} </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-black-c text-vertical-center-c' src={soportes[2].imagen} /></h2>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c  '>{soportes[3].nombre} </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-black-c text-vertical-center-c' src={soportes[3].imagen} /></h2>
            </div>
            <hr/>
           
        </div>
   </div>


{/*  EVENTOS  */}





         <div className="card-c cblue-c cw1-c ">
            <h1 className='text-m text-bolder blue-textcolor-c '><i class="icon ion-md-trophy"> </i> Proximos Eventos:</h1>
            
            {
                proximosEventos.map((evento)=>{
                    return (
                        <div>

                        <p className='text-light m0-c mt10-c'>{(new Date(evento.fecha)).toLocaleDateString("es-ES")} - {evento.nombre} </p>
                        <hr/>
                        </div>
                    )
                })
            }
            
           
        </div>
        

        <div className="card-c cblue-c cw1-c ">
            <h1 className='text-m text-bolder blue-textcolor-c '><i class="icon ion-md-trophy"> </i> Eventos Asistidos:</h1>
            
            {
                asistidosEventos.map((evento)=>{
                    return (
                        <div>

                        <p className='text-light m0-c mt10-c'>{(new Date(evento.fecha)).toLocaleDateString("es-ES")} - {evento.nombre} </p>
                        <hr/>
                        </div>
                    )
                })
            }
           
        </div>
              
    </div>
      
       
   
    );
    
}


export {ViewPlayer};