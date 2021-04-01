import './brand-component.css';
import {ListMisSoportes} from './soportes-component-brand/ListMisSoportes' 
import {useState, useEffect} from 'react'

function SoportesBrand (){

  const [soportes, setSoportes]= useState([
    { 
      id: "0", 
      nombre_soporte: "", 
      fecha_inicio: "" , 
      fecha_fin: "",
      tamano: "",
      descripcion: "",
      img_soporte: "", 
      id_player: "0", 
      nombre_player: "",
      img_player: ''
  },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);

        /* ... FECH ... */
        fetch('http://localhost:8000/brand/missoportes/',{
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
            body: JSON.stringify({
         idPerfil: localStorage.getItem('idPerfil') 
            }) 
        }).then( response => response.json())
        .then(
            response => {
              setSoportes(response.missoportes);
  
          }).catch(error=> console.log(error) );
  
  
        


  }, [])

return(

    <div >
        <h1 className = 'title-c red-textcolor-c'> <i class="icon ion-md-shirt"></i> MIS SOPORTES </h1>
        <hr/>
         <ListMisSoportes soportes = {soportes} setSoportes= {setSoportes}/>
    </div>

);
}

export {SoportesBrand};