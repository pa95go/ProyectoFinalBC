import './brand-component.css';
import {ListMisSoportes} from './soportes-component-brand/ListMisSoportes' 
import {useState} from 'react';

function CarritoBrand (){

  const [soportes, setSoportes]= useState([
    { id: "1", nombre_soporte: "Camiseta delantera", fecha_inicio: "02/03/2020" , fecha_fin: "05/07/2022",tamano: "25cm x60cm",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elituta!SLorem ipsum dolor sit amet, consectetur adipisicing elituta!",
    img_soporte: "https://i.pinimg.com/736x/01/29/66/012966f0b8950ee8e67fa87f315d8eff.jpg", id_player: "4", nombre_player: "Pablo Gomez Osuna",
    img_player: "https://cdn2.vectorstock.com/i/thumb-large/63/66/profile-placeholder-default-avatar-vector-21666366.jpg" },
    { id: "2", nombre_soporte: "Pantalon delantera", fecha_inicio: "02/03/2020" , fecha_fin: "05/07/2022",tamano: "25cm x60cm",
    descripcion: "Lorem ipsum dolor sit amet, consecta!SLorem ipsum dolor sit amet, consectetur adipisicing elituta!",
    img_soporte: "https://image.freepik.com/vector-gratis/pantalon-blanco-delantero_1053-968.jpg", id_player: "2", nombre_player: "Julio Gomez Osuna",
    img_player: "https://amautaenlinea.com/images/simon.gif" },
    { id: "3", nombre_soporte: "Pantalon trasera", fecha_inicio: "02/03/2020" , fecha_fin: "05/07/2022",tamano: "25cm x60cm",
    descripcion: "Lorem ipsum dolor sit amet, consecta!SLorem ipsum dolor sit amet, consectetur adipisicing elituta!",
    img_soporte: "https://i.pinimg.com/736x/01/29/66/012966f0b8950ee8e67fa87f315d8eff.jpg", id_player: "25", nombre_player: "Pepe Garcia Gomez Osuna",
    img_player: "data:image/jpeg;base64,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" },
    { id: "3", nombre_soporte: "Pantalon trasera", fecha_inicio: "02/03/2020" , fecha_fin: "05/07/2022",tamano: "25cm x60cm",
    descripcion: "Lorem ipsum dolor sit amet, consecta!SLorem ipsum dolor sit amet, consectetur adipisicing elituta!",
    img_soporte: "https://i.pinimg.com/736x/01/29/66/012966f0b8950ee8e67fa87f315d8eff.jpg", id_player: "25", nombre_player: "Pepe Garcia Gomez Osuna",
    img_player: "data:image/jpeg;base64,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" },
  ]);


return(

    <div >
       {/*  <div className="nav-top">
            <button className='btn-red-c'> <i class="icon ion-md-power"></i></button>
        </div> */}

        <h1 className = 'title-c red-textcolor-c'> <i class="icon ion-md-cart"></i> CARRITO </h1>
        <hr/>

                    <ListMisSoportes soportes = {soportes} setSoportes= {setSoportes}/>
     

              

      
        
    </div>

);
}

export {CarritoBrand};