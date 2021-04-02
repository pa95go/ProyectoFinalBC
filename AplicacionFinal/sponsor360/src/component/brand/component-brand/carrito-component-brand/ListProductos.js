import './../brand-component.css';
import { Link } from 'react-router-dom'
import {useState} from 'react';


function ListProductos ({productos, setProductos, total, setTotal}){

    


      return (
          <div className='card-c cblack-c cw1-c'>
              <h1>Productos:</h1>
            {
               productos.map((producto, index)=>{
  
                function handleDelete(e) {
                    e.preventDefault();
                  console.log(producto.id);
                  const newProductos = productos.filter((prod)=> prod.id_soporte !== producto.id_soporte);
                  setProductos(newProductos);
                  console.log(productos);

                    /* ... FECH ... */
                    fetch('http://localhost:8000/tienda/cart/delete',{
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        idCart: producto.id
                        
                        
                    }) 
                })
                .then( response => response.json())
                .then( response => {
                    setTotal(total - response.precio_restar )
                })
                .catch( error=> console.log(error) );


                  }

                
                        return(
                            <div >
                                
                                    <div className="box-c" >
                                    <div className='text-vertical-center-c w100bd'> 
                                        <button className=" text-vertical-center-c left text-xl m0-c  btn-c btn-delete-cart " onClick={(e)=>handleDelete(e)}><i class="icon ion-md-close-circle-outline"></i></button>
                                    </div>
                                    <div className='cw25-c text-vertical-center-c '>
                                       

                                       
                                        <img className=' img-mini-profile-black-c' src={producto.img_soporte}  />
                                    </div>


                                    <div className="cw50-c text-vertical-center-c">
                                        <h3 className=' m0-c text-bolder d-inline  '>{producto.nombre_soporte.toUpperCase()}</h3>
                                        
                                        <p className=' text-bolder m0-c '><i class="icon ion-md-expand "></i> {producto.tamano}</p>
                                        <h4 className=' m0-c text-light  '>{producto.descripcion}</h4>
                                        <p className=' p0-c  red-textcolor-c text-bolder  text-xl0 mt10-c' ><i class="icon ion-md-cash "></i> {producto.precio} €/año</p>
                                    </div>
                                    
                                     
                                    <div className="cw30-c">
                                  
                                    <Link to={`userplayer?id=${producto.id_player}`}>

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