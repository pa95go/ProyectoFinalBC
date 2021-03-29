import './player-component.css';
import {CardSoporte} from './soportes-component-player/CardSoporte'
import {useState, useEffect} from 'react';

function SoportesPlayer (){
    const [resp, setResp ] = useState()
    const [aux, setAux ] = useState(['0'])
    const [soportes, setSoportes ] = useState([
        { id:"0",estado: true, nombre: "", descripcion: "" , tamano:"", precio: "",
            marca: "",  imagen:"https://image.freepik.com/vector-gratis/pantalon-blanco-delantero_1053-968.jpg"},
        { id:"1",estado: true, nombre: "", descripcion: "" , tamano:"", precio: "",
            marca: "",  imagen:"https://image.freepik.com/vector-gratis/pantalon-blanco-delantero_1053-968.jpg"},
        { id:"3",estado: true, nombre: "", descripcion: "" , tamano:"", precio: "",
            marca: "",  imagen:"https://image.freepik.com/vector-gratis/pantalon-blanco-delantero_1053-968.jpg"},
        { id:"4",estado: true, nombre: "", descripcion: "" , tamano:"", precio: "",
            marca: "",  imagen:"https://image.freepik.com/vector-gratis/pantalon-blanco-delantero_1053-968.jpg"},
       
    ]);


    //hago fech preguntado y le cmabio valores a los state y si el length es menos que 4 le pongo los basicos

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
              
              //setResp(response.soporte);

              setSoportes(response.soportes);
               if (resp === undefined) {
               
           } /* else{

           } */
           
            })
            .catch(
               error=> console.log(error) 
      ));
    }

    useEffect(()=>{
        console.log(localStorage.getItem('idPerfil'));
        console.log('****');
        Iniciar();

         
    },[]);

    function clik(e){
        console.log(localStorage.getItem('idPerfil'));
        console.log('****');
        console.log(resp);
    }
 

    return(
    
    <div >
        


     <h1 className = 'title-c blue-textcolor-c'> <i class="icon ion-md-shirt"></i> SOPORTES</h1>
     <button onClick={(e)=>clik(e)}>kk</button>
     <hr/>

     <div className="box-c">
        <CardSoporte id = {0}  soportes ={soportes} setSoportes ={setSoportes}/>
        <CardSoporte id = {1} soportes ={soportes} setSoportes ={setSoportes}/>
     </div>

     <div className="box-c">
          <CardSoporte id = {2}  soportes ={soportes} setSoportes ={setSoportes}/>
        <CardSoporte id = {3} soportes ={soportes} setSoportes ={setSoportes}/>  
     </div>

    </div>
    );
    
}


export {SoportesPlayer};