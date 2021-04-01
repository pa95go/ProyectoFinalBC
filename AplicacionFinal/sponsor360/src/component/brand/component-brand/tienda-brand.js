import './brand-component.css';
import {ListAnuncios} from './anuncios-component-brand/ListAnuncios' 
import {useState, useEffect} from 'react'

function TiendaBrand (){

    const [anuncios, setAnuncios]= useState([
        { 
        id: "0" , 
        nombre_soporte: "",
        precio: "",
        tamano: "",
        descripcion: "",
        img_soporte: "",
        id_player: "",
        nombre_player: "",
        img_player: "" 
      }
    
   
  ]);


  useEffect(() => {
    window.scrollTo(0, 0);

    /* ... FECH ... */
    fetch('http://localhost:8000/tienda',{
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
        
    }).then( response => response.json())
    .then(
        response => {
          setAnuncios(response.anuncios);

      }).catch(error=> console.log(error) );

  }, [])
  


return(

    <div >

        <h1 className = 'title-c red-textcolor-c'> <i class="icon ion-md-basket"></i> TIENDA </h1>
        <hr/>
        <div className="box-space-between ">
            
            
        <ListAnuncios anuncios = {anuncios} setAnuncios= {setAnuncios}/>
        </div>
    </div>

);
}

export {TiendaBrand};