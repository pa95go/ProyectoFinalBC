import './player-component.css';
import {ListMarcas} from './marcas-component-player/ListMarcas'
import {useState, useEffect} from 'react';

function MarcasPlayer (){

  

    const [marcasActuales, setMarcasActuales]= useState([]);
    const [marcasAnteriores, setMarcasAnteriores]= useState([]);


    useEffect(()=>{
        
            /* ... FECH ... */
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
                setMarcasActuales(response.misMarcasActuales);
            })
            .catch(
               error=> console.log(error) 
      );
                  /* ... FECH ... */
     fetch(`http://localhost:8000/mismarcas/anteriores`,{
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
                setMarcasAnteriores(response.misMarcasAnteriores);
            })
            .catch(
               error=> console.log(error) 
      );

         
    

         
    },[]);
    





return(

<div >
    


    <h1 className = 'title-c blue-textcolor-c'> <i class="icon ion-md-planet"></i> MARCAS </h1>
    <hr/>



    <div className="card-c cred-c cw1-c ">
        <h1 > MIS MARCAS ACTUALES </h1>
            <ListMarcas marcas = {marcasActuales} setMarcas ={setMarcasActuales}/> 
    </div>
    <div className="card-c cred-c cw1-c ">
        <h1 > MIS MARCAS ANTERIORES </h1>

            <ListMarcas marcas = {marcasAnteriores} setMarcas ={setMarcasAnteriores}/> 
    </div>
</div>





);
}




export {MarcasPlayer};