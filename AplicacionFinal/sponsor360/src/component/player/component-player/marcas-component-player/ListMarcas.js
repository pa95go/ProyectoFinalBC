import './../player-component.css';
import {BrowserRouter, Route, Link } from 'react-router-dom'
import {useState} from 'react';


function ListMarcas ({marcas, setMarcas}){


      return (
          <div>
            {
               marcas.map((marca, index)=>{
  
                if(marca.nombre_marca !== ""){
                        return(
                            <div >
                                <div className="box-c">
                            <div>

                        <img className='img-mini-profile-red-c' src={marca.imagen_marca}  />

                            </div>
                        <h3 className='  text-bolder text-vertical-center-c'>{marca.nombre_marca.toUpperCase()}</h3>
                        
                        <h4 className='  text-light text-vertical-center-c '>{marca.fecha_inicio} - {marca.fecha_fin}</h4>

                        <Link className='text-vertical-center-c' to={`/brand/user`}>
                        <button className='btn-red-c text-vertical-center-c '> <i class="icon ion-md-information-circle"></i></button>
                        </Link>
                        
                        </div>
                            <hr/>
                            
                            </div>
                        
                        )
                    }
                })
            }
          
          </div>
      )
  
  }


export {ListMarcas};