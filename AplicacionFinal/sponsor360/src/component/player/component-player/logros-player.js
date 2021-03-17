import './player-component.css';
import {ListLogros} from './logros-component-player/ListLogros'
import {useState} from 'react';


function LogrosPlayer (){

    const [logros, setLogros ] = useState([
        { id:"3", nombre_logro: "carrera popular", fecha: "02/03/2020" , disabled: true},
        { id:"2", nombre_logro: "carrera madrid", fecha: "22/04/2020", disabled: true},
        { id:"1", nombre_logro: "carrera sevilla", fecha: "08/10/2020", disabled: true},
        { id:"0", nombre_logro: "carrera mostoles", fecha: "08/10/2020", disabled: true},
        
    ]);

    function handleAddLogro(e) {

        e.preventDefault();
        
       setLogros([ {id:logros.length, nombre_logro: "", fecha: "", disabled: false}, ...logros]);

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