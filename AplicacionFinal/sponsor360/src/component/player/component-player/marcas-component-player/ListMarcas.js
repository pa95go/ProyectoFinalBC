import './../player-component.css';
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
                        <h3 className=' mt10-c text-bolder text-vertical-center-c'>{marca.nombre_marca.toUpperCase()}</h3>
                        
                        <h4 className=' mt10-c text-light text-vertical-center-c '>{marca.fecha_inicio} - {marca.fecha_fin}</h4>
                        <button className='btn-red-c text-vertical-center-c '> <i class="icon ion-md-information-circle"></i></button>
                        
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