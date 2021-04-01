import './brand-component.css';
import {ListMisDeportistas} from './deportistas-component-brand/ListMisDeportistas' 
import {useState, useEffect} from 'react';

function DeportistasBrand (){

    const [deportistas, setDeportistas]= useState([
        {id: '0', 
        nombre_deportista: "",
         deporte: "", 
         img_deportista:'' 
        },
        
    ]);

    useEffect(() => {
        window.scrollTo(0, 0);
        /* ... FECH ... */
        fetch('http://localhost:8000/brand/misdeportistas/',{
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
            body: JSON.stringify({
          //    // email: user.username
         idPerfil: localStorage.getItem('idPerfil') 
              
            }) 
        }).then( response => response.json())
        .then(
            response => {
              setDeportistas(response.misdeportistas);
  
          }).catch(error=> console.log(error) );

      }, [])


return(

    <div >

        <h1 className = 'title-c red-textcolor-c'> <i class="icon ion-md-tennisball"></i> DEPORTISTAS </h1>
        <hr/>
        <div className="box-space-between ">
            
            
        <ListMisDeportistas deportistas = {deportistas}/>
        </div>
    </div>

);
}

export {DeportistasBrand};