import './player-component.css';
import {CardSoporte} from './soportes-component-player/CardSoporte'
import {useState, useEffect} from 'react';

function SoportesPlayer (){
      const [soportes, setSoportes ] = useState([
        { id:"0",estado: true, nombre: "", descripcion: "" , tamano:"", precio: "",
            marca: "",  imagen:[]},
        { id:"1",estado: true, nombre: "", descripcion: "" , tamano:"", precio: "",
            marca: "",  imagen:[]},
        { id:"3",estado: true, nombre: "", descripcion: "" , tamano:"", precio: "",
            marca: "",  imagen:[]},
        { id:"4",estado: true, nombre: "", descripcion: "" , tamano:"", precio: "",
            marca: "",  imagen:[]},
       
    ]);
    const [editar, setEditar ] = useState([true, true, true, false]);



    function Iniciar (){
     /* ... FECH ... */
     fetch(`http://localhost:8000/soportes/show/${localStorage.getItem('idPerfil')}`,{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        } 
      })
      .then( response => response.json()
      .then(
          response => {
              
              

              setSoportes(response.soportes);
              
           
            })
            .catch(
               error=> console.log(error) 
      ));
    }

    useEffect(()=>{
        
        Iniciar();

         
    },[]);

 

    return(
    
    <div >
        


     <h1 className = 'title-c blue-textcolor-c'> <i class="icon ion-md-shirt"></i> SOPORTES</h1>
     <hr/>

     <div className="box-c">
        <CardSoporte id = {0} soporteid={soportes[0]} soportes ={soportes} setSoportes ={setSoportes} editar={editar} setEditar={setEditar}/>
        <CardSoporte id = {1} soporteid={soportes[1]}soportes ={soportes} setSoportes ={setSoportes} editar={editar} setEditar={setEditar}/>
     </div>

     <div className="box-c">
          <CardSoporte id = {2} soporteid={soportes[2]}  soportes ={soportes} setSoportes ={setSoportes} editar={editar} setEditar={setEditar}/>
        <CardSoporte id = {3} soporteid={soportes[3]}  soportes ={soportes} setSoportes ={setSoportes} editar={editar} setEditar={setEditar}/>  
     </div>

    </div>
    );
    
}


export {SoportesPlayer};