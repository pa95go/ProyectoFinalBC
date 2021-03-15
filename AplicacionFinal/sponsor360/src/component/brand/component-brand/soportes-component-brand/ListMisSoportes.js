import './../brand-component.css';
import {useState} from 'react';


function ListMisSoportes ({soportes, setSoportes}){


      return (
          <div>
            {
               soportes.map((soporte, index)=>{
  
                
                        return(
                            <div>
                                    <div className="box-c">

                                    <div className='cw10-c text-vertical-center-c'>
                                        <img className='img-mini-profile-black-c' src={soporte.img_soporte}  />
                                    </div>


                                    <div className="cw50-c text-vertical-center-c">
                                        <h3 className=' m0-c text-bolder  '>{soporte.nombre_soporte.toUpperCase()}</h3>
                                        <h4 className=' m0-c text-light  '>{soporte.descripcion}</h4>
                                        <p className=' text-bolder m0-c  '><i class="icon ion-md-calendar "></i> {soporte.fecha_inicio} - {soporte.fecha_fin} </p>
                                        <p className=' text-bolder m0-c '><i class="icon ion-md-expand "></i> {soporte.tamano}</p>
                                    </div>
                                    
                                    <div className="cw30-c">
                                        <button className=" p0-c box-noresponsive-c justify-end btn-enlace-c">
                                            <h2 className='m0-c text-vertical-center-c'> <img className='img-xs-profile-blue-c ' src={soporte.img_player} /></h2>
                                            <p className='text-vertical-center-c ' >  &nbsp;&nbsp; {soporte.nombre_player.toUpperCase()}</p>
                                        </button>
                                    </div>
                                
                                </div>
                                <hr/>
                        </div>
                        
                        )
                    
                })
            }
          
          </div>
      )
  
  }


export {ListMisSoportes};