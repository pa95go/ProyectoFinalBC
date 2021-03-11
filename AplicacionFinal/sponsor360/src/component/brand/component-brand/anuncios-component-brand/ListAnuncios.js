import './../brand-component.css';
import {useState} from 'react';


function ListAnuncios (){


      return (
          <div>

                <div className="card-c black-c cw2-responsive-c d-inline m3-b ">
                    <div className="banner-black-c"></div>
                    <div className="mt-75 "></div>
                    <img className='img-profile-black-c ' src='https://image.freepik.com/vector-gratis/pantalon-blanco-delantero_1053-968.jpg 'disabled  />
                    <div >
                        <h3 className='ctcenter-c m0-c'>CAMISETA DELANTERA</h3>
                        <p className='ctcenter-c text-bolder m0-c '><i class="icon ion-md-expand "></i> 30cm x 35cm </p>
                        <p className='ctcenter-c text-light m0-c'>Descripcion Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum. </p>
                        <h2 className='mini-banner-blue-c '>
                        <button className=" p0-c box-noresponsive-c justify-end btn-enlace-c m0-c">
                                            <span className='text-vertical-center-c white-textcolor-c' >asdadadassdasd &nbsp;&nbsp;</span>
                                            <h2 className='m0-c text-vertical-center-c'> <img className='img-xs-profile-blue-c ' src='https://amautaenlinea.com/images/simon.gif' /></h2>
                                        </button>
                        </h2>
                       {/*  <button className='btn-red-c text-m text-bold mt10-c w100-c'> añadir al carrito</button> */}
                        
                    </div>
                </div>
                <div className="card-c black-c cw2-responsive-c d-inline m3-b ">
                    <div className="banner-black-c"></div>
                    <div className="mt-75 "></div>
                    <img className='img-profile-black-c ' src='https://image.freepik.com/vector-gratis/pantalon-blanco-delantero_1053-968.jpg 'disabled  />
                    <div >
                        <h3 className='ctcenter-c m0-c'>CAMISETA DEK  </h3>
                        <h3 className='ctcenter-c text-light m0-c'>DEPORTE </h3>
                        <button className='btn-red-c text-m text-bold mt10-c w100-c'> añadir al carrito</button>
                        
                    </div>
                </div>
                <div className="card-c black-c cw2-responsive-c d-inline m3-b ">
                    <div className="banner-black-c"></div>
                    <div className="mt-75 "></div>
                    <img className='img-profile-black-c ' src='https://image.freepik.com/vector-gratis/pantalon-blanco-delantero_1053-968.jpg 'disabled  />
                    <div >
                        <h3 className='ctcenter-c m0-c'>CAMISETA DEK  </h3>
                        <h3 className='ctcenter-c text-light m0-c'>DEPORTE </h3>
                        <button className='btn-red-c text-m text-bold mt10-c w100-c'> añadir al carrito</button>
                        
                    </div>
                </div>

          </div>
      )
  
  }


export {ListAnuncios};