import './player-component.css';
import {ListLogros} from './logros-component-player/ListLogros'
import {useState, useEffect} from 'react';


function LogrosPlayer (){


    const [todosEventos, setTodosEventos] =useState([{}]);
    const [proximosEventos, setProximosEventos] =useState([{}]);
    const [asistidosEventos, setAsistidosEventos] =useState([{}]);

    
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
       
            setTodosEventos( response.eventos);
            setProximosEventos( response.eventos.filter(evento => evento['estado']=='proximo'));
            setAsistidosEventos( response.eventos.filter(evento => evento['estado']=='asistido'));
            //setProximosEventos( response.eventos.splice(0,5));//mostrar solo 5
           
            })
            .catch(
               error=> console.log('error Catch', error) 
      ));
    },[]);

   
    



    
    function handleAddProximo(e) {

        e.preventDefault();
        console.log(todosEventos);
        
        setProximosEventos([...proximosEventos, {id:todosEventos.length, nombre: "",estado: "proximo", fecha: "", disabled: false}]);
        setTodosEventos([ ...todosEventos, {id:todosEventos.id, nombre: "", fecha: "",estado: "proximo", disabled: false}]);
    };
    function handleAddAsistido(e) {

        e.preventDefault();
        
       setAsistidosEventos([...asistidosEventos, {id:todosEventos.length, nombre: "",estado: "asistido", fecha: "", disabled: false} ]);
       setTodosEventos([...todosEventos, {id:todosEventos.length, nombre: "", fecha: "",estado: "asistido", disabled: false}]);
       
    };


    return(
    
    <div >

     <h1 className = 'title-c blue-textcolor-c'> <i class="icon ion-md-trophy"></i> EVENTOS Y LOGROS </h1>
     <hr/>



     <div className="card-c cblue-c cw1-c ">
         <h1 > PROXIMOS EVENTOS</h1>
         <div className="box-c">

         <button className='btn-blue-c d-rigth margin-add-c' onClick={handleAddProximo} ><i class="icon ion-md-add-circle"></i></button>
         </div>
            <ListLogros logros = {proximosEventos} setLogros ={setProximosEventos} todosEventos={todosEventos}/> 
    </div>

    <div className="card-c cblue-c cw1-c ">
         <h1 > EVENTOS ASISTIDOS</h1>
         <div className="box-c">

         <button className='btn-blue-c d-rigth margin-add-c' onClick={handleAddAsistido} ><i class="icon ion-md-add-circle"></i></button>
         </div>
            <ListLogros logros = {asistidosEventos} setLogros ={setAsistidosEventos} todosEventos={todosEventos}/>  
    </div>


    </div>
    );
    
}


export {LogrosPlayer};