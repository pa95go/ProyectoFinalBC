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
                            {/*          <div className=" cw2l-c  ">
                                <img className='img-profile-red-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg' disabled  />
                                    </div>
                        
                                    <div className=" cw1l-c  ">
                                    <input type="text" name="" id="" className='text-bold' placeholder='Evento' value ={logro.nombre_logro}  disabled={logro.disabled} /> 
                                    </div>
                    
                                    <div className="cw2l-c  ">
                                        <input type="date" name="" id=""   className='ctcenter-c ' value ={logro.fecha} disabled={logro.disabled} />
                                    </div>
                    
                                */}
                        <button  ><img className='img-mini-profile-red-c' src={marca.imagen_marca}  /></button>

                        <h3 className='m0-c mt10-c text-bolder text-vertical-center-c'>{marca.nombre_marca.toUpperCase()}</h3>
                        <h4 className='m0-c mt10-c text-light text-vertical-center-c '>{marca.fecha_inicio} - {marca.fecha_fin}</h4>
                        
                        
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