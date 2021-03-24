import './player-component.css';
import {ListLogros} from './logros-component-player/ListLogros'
import {useState, useEffect} from 'react';


function LogrosPlayer (){

    const [logros, setLogros ] = useState([
        { id:"3", nombre_logro: "carrera popular", fecha: "02/03/2020" , disabled: true},
        { id:"2", nombre_logro: "carrera madrid", fecha: "22/04/2020", disabled: true},
        { id:"1", nombre_logro: "carrera sevilla", fecha: "08/10/2020", disabled: true},
        { id:"0", nombre_logro: "carrera mostoles", fecha: "08/10/2020", disabled: true},
        
    ]);

    const [proximosEventos, setProximosEventos] =useState([{}]);

    let eventosDB =[];
    useEffect(()=>{

         /* ... FECH ... */
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
      .then( response => response.json()
      .then(
          response => {
           //console.log(response.eventos);
           //console.log(response.player);
           //const fecha = new Date(response.player.fecha_nacimiento).toISOString().slice(0, 10);
          
       
            //setProximosEventos( response.eventos);
           
         
                eventosDB =  response.eventos;
                eventosDB.forEach(evento => {
                    setProximosEventos(...proximosEventos,
                        {
                            nombre: evento.nombre,
                            fecha: evento.fecha,
                            estado: evento.estado
                        } );
                });
                
          
            
            //  console.log("perfil");
            //  console.log(perfil);
            })
            .catch(
               error=> console.log('error Catch', error) 
      ));

    
    


    },[]);

    console.log('proximos: ' ,proximosEventos);





    function handleAddLogro(e) {

        e.preventDefault();
        
       setLogros([ {id:logros.length, nombre: "", fecha: "", disabled: false}, ...logros]);
       console.log('kgk' ,eventosDB);
       console.log(logros.length);
    };


    return(
    
    <div >

     <h1 className = 'title-c blue-textcolor-c'> <i class="icon ion-md-trophy"></i> EVENTOS Y LOGROS </h1>
     <hr/>



     <div className="card-c cblue-c cw1-c ">
         <h1 > PROXIMOS EVENTOS</h1>
         <div className="box-c">

         <button className='btn-blue-c d-rigth margin-add-c' onClick={handleAddLogro} ><i class="icon ion-md-add-circle"></i></button>
         </div>
            <ListLogros logros = {logros} setLogros ={setLogros}/> 
    </div>

    <div className="card-c cblue-c cw1-c ">
         <h1 > EVENTOS ASISTIDOS</h1>
         <div className="box-c">

         <button className='btn-blue-c d-rigth margin-add-c' onClick={handleAddLogro} ><i class="icon ion-md-add-circle"></i></button>
         </div>
            <ListLogros logros = {logros} setLogros ={setLogros}/> 
    </div>


    </div>
    );
    
}


export {LogrosPlayer};