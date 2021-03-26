import './player-component.css';
import {CardSoporte} from './soportes-component-player/CardSoporte'
import {useState, useEffect} from 'react';

function SoportesPlayer (){
    const [resp, setResp ] = useState()
    const [aux, setAux ] = useState(['0'])
    const [soportes, setSoportes ] = useState([
        { id:"0",estado: true, nombre: "Camiseta Delantera", descripcion: " La descripcion es 02/03/2020" , tamano:"35cm x 45cm", precio: "300",
            marca: "",  imagen:"https://image.freepik.com/vector-gratis/pantalon-blanco-delantero_1053-968.jpg"},
        { id:"1",estado: false, nombre: "Pantalon Trasera", descripcion: " La descripcion es 22/04/2020", tamano:"35cm x 45cm", precio: "300",
            marca: "",  imagen:"https://i.pinimg.com/736x/01/29/66/012966f0b8950ee8e67fa87f315d8eff.jpg"},
        { id:"2",estado: true, nombre: "Gorra Central", descripcion: " La descripcion es 08/10/2020", tamano:"35cm x 45cm", precio: "300",
            marca: "",  imagen:"https://i.pinimg.com/736x/01/29/66/012966f0b8950ee8e67fa87f315d8eff.jpg"},
        { id:"3",estado: false, nombre: "Camiseta Detras", descripcion: " La descripcion es 08/10/2020", tamano:"35cm x 45cm", precio: "300",
            marca: "PePSI",  imagen:"https://image.freepik.com/vector-gratis/pantalon-blanco-delantero_1053-968.jpg"},
        
    ]);


    //hago fech preguntado y le cmabio valores a los state y si el length es menos que 4 le pongo los basicos

    function Iniciar (){
     /* ... FECH ... */
     fetch('http://localhost:8000/soportes',{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
         body: JSON.stringify({
            idPlayer: localStorage.getItem('idPlayer') 
            
         }) 
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
    //CREAR EN EL REGISTRO LOS 4 SOPORTES *************IMPORTANTE
    function CrearBD (){
        /* ... FECH ... */
        fetch(`http://localhost:8000/soportes/add/1}`,{
           method: 'POST',
           mode: 'cors',
           headers: {
             'Content-Type': 'application/json'
           },
         })
         .then( response => response.json())
         .then(
             response => {
             }
               )
               .catch(
                  error=> console.log(error) 
         );
               
       }

    useEffect(()=>{
        Iniciar();

         
    },[]);

    function clik(e){
        console.log(soportes[0]);
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
       {/*  <CardSoporte id = {2}  soportes ={soportes} setSoportes ={setSoportes}/>
        <CardSoporte id = {3} soportes ={soportes} setSoportes ={setSoportes}/> */}
     </div>

    </div>
    );
    
}


export {SoportesPlayer};