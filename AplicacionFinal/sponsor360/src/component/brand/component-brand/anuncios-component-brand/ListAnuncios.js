import './../brand-component.css';
import { Link } from 'react-router-dom'
import {useState} from 'react';
import swal from "sweetalert";


function ListAnuncios ({anuncios, setAnuncios}){

   
    return (
        <div>
          {
             anuncios.map((anuncio, index)=>{

                function handleAdd (e){
                    e.preventDefault();
                    const newAnuncios = anuncios.filter((anu)=> anu.id !== anuncio.id);
                    swal({
                        title: anuncio.nombre_soporte,
                        text: "Se ha añadido a tu carrito",
                        icon: "info",
                        button: ["si"],
                        timer: "1000",
                    }).then(() => {
                        setAnuncios(newAnuncios);
                    });
                                      /* ... FECH ... */
                    fetch('http://localhost:8000/tienda/addcart',{
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            idBrand: localStorage.getItem('idPerfil'),
                            idSop: anuncio.id
                            
                        }) 
                    })
                    .then( response => response.json())
                    .then( response => {})
                    .catch( error=> console.log(error) );

                   
                }

              
                      return(
      
                <div className="card-c black-c cw2-responsive-c d-inline m3-b ">
                    <div className="banner-black-c"></div>
                    <div className="mt-75 "></div>
                    <img className='img-profile-black-c ' src={ anuncio.img_soporte} disabled  />
                    <div >
                        <h3 className='ctcenter-c m0-c'>{ anuncio.nombre_soporte.toUpperCase()}</h3>
                        <p className='ctcenter-c text-bolder m0-c'><i class="icon ion-md-expand "></i> {anuncio.tamano} </p>
                        <p className='ctcenter-c0 text-light m0-c'>{anuncio.descripcion}. </p>
                        <div className="mt10-c">

                        <h3 className='ctcenter-c0 text-bolder m0-c red-textcolor-c  '><i class="icon ion-md-ca2sh "></i> {anuncio.precio} €/año </h3>
                        </div>
                        <button className='btn-red-c text-m text-bold mt15-c ' onClick={(e)=>handleAdd(e)}><span className='text-xl'><i class="icon ion-md-add-circle"></i></span> Añadir</button>
                        <Link to={`userplayer?id=${anuncio.id_player}`}>
                        <button className=" p0-c box-noresponsive-c justify-end btn-enlace-c ">
                            <h2 className='m0-c text-vertical-center-c'> <img className='img-xs-profile-blue-c ' src={anuncio.img_player} /></h2>
                            <p className='text-vertical-center-c ' >  &nbsp;&nbsp;{ anuncio.nombre_player.toUpperCase()}</p>
                        </button>
                        </Link>
                        
                    </div>
                </div>
          
                 )
                    
              })
         }

    </div>
    )

}


export {ListAnuncios};