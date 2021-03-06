import './player-component.css';
import {CardSoporte} from './soportes-component-player/CardSoporte'
import {useState} from 'react';

function MarcasPlayer (){

    const [soportes, setSoportes ] = useState([
        { id:"0", nombre_soporte: "Camiseta Delantera", descripcion: " La descripcion es 02/03/2020" , tamano:"35cm x 45cm", precio: "300",
            marca: "",  imagen:"https://image.freepik.com/vector-gratis/pantalon-blanco-delantero_1053-968.jpg"},
        { id:"1", nombre_soporte: "Pantalon Trasera", descripcion: " La descripcion es 22/04/2020", tamano:"35cm x 45cm", precio: "300",
            marca: "REDBULL",  imagen:"https://i.pinimg.com/736x/01/29/66/012966f0b8950ee8e67fa87f315d8eff.jpg"},
        { id:"2", nombre_soporte: "Gorra Central", descripcion: " La descripcion es 08/10/2020", tamano:"35cm x 45cm", precio: "300",
            marca: "",  imagen:"https://i.pinimg.com/736x/01/29/66/012966f0b8950ee8e67fa87f315d8eff.jpg"},
        { id:"3", nombre_soporte: "Camiseta Detras", descripcion: " La descripcion es 08/10/2020", tamano:"35cm x 45cm", precio: "300",
            marca: "PePSI",  imagen:"https://image.freepik.com/vector-gratis/pantalon-blanco-delantero_1053-968.jpg"},
        
    ]);

 

    return(
    
    <div >
        <div className="nav-top">
            
            
            <button className='btn-blue-c'> <span> CERRAR SESIÓN </span>  <i class="icon ion-md-exit"></i></button>
           
        </div>


     <h1 className = 'title-c blue-textcolor-c'> <i class="icon ion-md-shirt"></i> MARCAS </h1>
     <hr/>

     <div className="box-c">
        <CardSoporte soporte = {soportes[0]} setSoportes ={setSoportes}/>
        <CardSoporte soporte = {soportes[1]} setSoportes ={setSoportes}/>
     </div>

     <div className="box-c">
        <CardSoporte soporte = {soportes[2]} setSoportes ={setSoportes}/>
        <CardSoporte soporte = {soportes[3]} setSoportes ={setSoportes}/>
     </div>

    </div>
    );
    
}


export {MarcasPlayer};