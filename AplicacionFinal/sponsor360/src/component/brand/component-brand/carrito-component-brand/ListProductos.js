import './../brand-component.css';
import {BrowserRouter, Route, Link } from 'react-router-dom'
import {useState} from 'react';


function ListProductos ({productos, setProductos}){


      return (
          <div className='card-c cblack-c cw1-c'>
              <h1>Productos:</h1>
            {
               productos.map((producto, index)=>{
  
                
                        return(
                            <div >
                                
                                    <div className="box-c">

                                    <div className='cw10-c text-vertical-center-c'>
                                       
                                        <img className='img-mini-profile-black-c' src={producto.img_soporte}  />
                                    </div>


                                    <div className="cw50-c text-vertical-center-c">
                                        <h3 className=' m0-c text-bolder d-inline  '>{producto.nombre_soporte.toUpperCase()}</h3>
                                        <button className="justify-end text-xl m0-c d-inline btn-c red-textcolor-c "><i class="icon ion-md-close-circle-outline"></i></button>
                                        
                                        <p className=' text-bolder m0-c '><i class="icon ion-md-expand "></i> {producto.tamano}</p>
                                        <h4 className=' m0-c text-light  '>{producto.descripcion}</h4>
                                        <p className=' p0-c  red-textcolor-c text-bolder  text-xl0 mt10-c' ><i class="icon ion-md-cash "></i> {producto.precio} €/año</p>
                                    </div>
                                    
                                     
                                    <div className="cw30-c">
                                   {/*  <Link to={`/player/user/${producto.id_player}`}> */}
                                    <Link to={`/player/user`}>

                                         <button className=" p0-c box-noresponsive-c justify-end btn-enlace-c"  >
                                            <h2 className='m0-c text-vertical-center-c'> <img className='img-xs-profile-blue-c ' src={producto.img_player} /></h2>
                                            <p className='text-vertical-center-c ' >  &nbsp;&nbsp; {producto.nombre_player.toUpperCase()}</p>
                                        </button> 
                                    </Link>
                               
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


export {ListProductos};