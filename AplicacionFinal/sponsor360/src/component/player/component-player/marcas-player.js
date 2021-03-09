import './player-component.css';
import {ListMarcas} from './marcas-component-player/ListMarcas'
import {useState} from 'react';

function MarcasPlayer (){

   /*  const [soportes, setSoportes ] = useState([
        { id:"0", nombre_soporte: "COCACOLA", descripcion: " La descripcion es 02/03/2020" , tamano:"35cm x 45cm", precio: "300",
            marca: "",  imagen:"https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg"},
        { id:"1", nombre_soporte: "REDBULL", descripcion: " La descripcion es 22/04/2020", tamano:"35cm x 45cm", precio: "300",
            marca: "REDBULL",  imagen:"https://www.crazy-stuff.net/crazy-img/content/logos/23-redbull.jpg"},
        { id:"2", nombre_soporte: "HUAWEI", descripcion: " La descripcion es 08/10/2020", tamano:"35cm x 45cm", precio: "300",
            marca: "",  imagen:"https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/1200px-Huawei_Standard_logo.svg.png"},
        { id:"3", nombre_soporte: "REPSOL", descripcion: " La descripcion es 08/10/2020", tamano:"35cm x 45cm", precio: "300",
            marca: "PePSI",  imagen:"https://i.pinimg.com/474x/d4/43/00/d4430044ab4991aff35cb7610fded4b0.jpg"},
        
    ]); */

    const [marcas, setMarcas]= useState([
        { id:"3", nombre_marca: "cocacola", fecha_inicio: "02/03/2020" , fecha_fin: "05/07/2022",
    imagen_marca: "https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg"},
        { id:"2",
        imagen_marca: "", nombre_marca: "Apple", fecha_inicio: "22/04/2020", fecha_fin: "05/07/2022",
    imagen_marca: ""},
        { id:"1", nombre_marca: "Repsol", fecha_inicio: "08/10/2020", fecha_fin: "05/07/2022",
    imagen_marca: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/1200px-Huawei_Standard_logo.svg.png"},
        { id:"0", nombre_marca: "RedBull", fecha_inicio: "08/10/2020", fecha_fin: "05/07/2022",
    imagen_marca: ""},
    ]);


return(

<div >
    <div className="nav-top">
        <button className='btn-blue-c'> <span> CERRAR SESIÓN </span>  <i class="icon ion-md-exit"></i></button>
    </div>


    <h1 className = 'title-c blue-textcolor-c'> <i class="icon ion-md-planet"></i> MARCAS </h1>
    <hr/>



    <div className="card-c cred-c cw1-c ">
        <h1 > MIS MARCAS ACTUALES </h1>
            <ListMarcas marcas = {marcas} setMarcas ={setMarcas}/> 
    </div>
    <div className="card-c cred-c cw1-c ">
        <h1 > MIS MARCAS ANTERIORES </h1>

            <ListMarcas marcas = {marcas} setMarcas ={setMarcas}/> 
    </div>
</div>





);
}




export {MarcasPlayer};