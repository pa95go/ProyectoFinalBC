import './../brand-component.css';
import {useState} from 'react';


function ListMisDeportistas ({deportistas}){


      return (
          <div>
            {
               deportistas.map((deportista, index)=>{
                        return(
                           
                                <div className="card-c cblue-c cw3-c d-inline m3-b ">
                                    <div className="banner-blue-c"></div>
                                    <div className="mt-75 "></div>
                                    <img className='img-profile-blue-c ' src={deportista.img_deportista} disabled  />
                                    <div >
                                        <h3 className='ctcenter-c m0-c'>{deportista.nombre_deportista.toUpperCase()} </h3>
                                        <h3 className='ctcenter-c text-light m0-c'>{deportista.deporte.toUpperCase()} </h3>
                                        <button className='btn-blue-c text-m text-bold mt10-c w100-c'> ver perfil</button>
                                        
                                    </div>
                                </div>
                                    
                            
                        )
                    
                })
            }
          
          </div>
      )
  
  }


export {ListMisDeportistas};