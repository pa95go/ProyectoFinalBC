import './brand-component.css';
import {useState, useEffect} from 'react';

function ViewPlayer (){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return(
    
    <div >
       


     <h1 className = 'title-c blue-textcolor-c'> <i class="icon ion-md-tennisball"></i> PABLO GÓMEZ OSUNA</h1>
     <hr/>
   
        
     <div className="card-c cblue-c cw1-c mb0-c">
         <div className="banner-blue-c"></div>
         <div className="mt-75 "></div>
        <img className='img-profile-blue-c ' src="https://cdn2.vectorstock.com/i/thumb-large/63/66/profile-placeholder-default-avatar-vector-21666366.jpg" disabled  />
       
       <h2 className='text-bold text-xl ctcenter-c m0-c '>PABLO GÓMEZ OSUNA</h2>
       <p className=' blue-textcolor-c  text-m ctcenter-c m0-c0'>BALONCESTO</p>
       <hr/>
       <p className=' text-light text-m '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, deserunt cum sunt dicta optio tenetur facilis molestiae expedita vitae ad!</p>
       <hr/>
       <p className='  text-m '>05/02/1995 - Hombre</p>
       <p className='  text-m '>Total de sponsors:  <span className=' text-bolder text-m '>7</span></p>


    </div>
    <div className="box-c mt20 mb0-c ">

        <div className="card-c cblue-c cw3-c  mt10-c">
            <h1 className='text-m text-bolder bg-twitter '><i class="icon ion-logo-twitter"> </i> @pablo</h1>

            <div className=" box-noresponsive-c text-vertical-center-c m0-c mt10-c">
            <p>Seguidores: </p>
            <p>2.7  <i class="icon ion-md-people blue-textcolor-c"></i>  </p>
             </div>
          <hr/>

          <div className=" box-noresponsive-c text-vertical-center-c m0-c ">
            <p>Engagement: </p>
            <p>2.7  <i class="icon ion-md-stats blue-textcolor-c  "></i>  </p>
             </div>
        </div>

        <div className="card-c cblue-c cw3-c  mt10-c">
            <h1 className='text-m text-bolder bg-facebook '><i class="icon ion-logo-facebook"> </i> @pablo</h1>

            <div className=" box-noresponsive-c text-vertical-center-c m0-c mt10-c">
            <p>Seguidores: </p>
            <p>2.7  <i class="icon ion-md-people blue-textcolor-c"></i>  </p>
             </div>
          <hr/>

          <div className=" box-noresponsive-c text-vertical-center-c m0-c">
            <p>Engagement: </p>
            <p>2.7  <i class="icon ion-md-stats blue-textcolor-c  "></i>  </p>
             </div>
        </div>

        <div className="card-c cblue-c cw3-c mt10-c ">
            <h1 className='text-m text-bolder bg-instagram '><i class="icon ion-logo-instagram"> </i> @pablo</h1>

            <div className=" box-noresponsive-c text-vertical-center-c m0-c mt10-c">
            <p>Seguidores: </p>
            <p>2.7  <i class="icon ion-md-people blue-textcolor-c"></i>  </p>
             </div>
          <hr/>

          <div className=" box-noresponsive-c text-vertical-center-c m0-c">
            <p>Engagement: </p>
            <p>2.7  <i class="icon ion-md-stats blue-textcolor-c  "></i>  </p>
             </div>
        </div>

    </div>
   
   <div className="box-c m0-c ">
        <div className="card-c cred-c cw2-c  m0-c mt10-c">
            <h1 className='text-m text-bolder  '><i class="icon ion-md-planet"> </i> Marcas:</h1>
            
            
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c  '>Camiseta Delantera </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-red-c text-vertical-center-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg ' /></h2>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c  '>Camiseta Delantera </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-red-c text-vertical-center-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg ' /></h2>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c  '>Camiseta Delantera </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-red-c text-vertical-center-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg ' /></h2>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c  '>Camiseta Delantera </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-red-c text-vertical-center-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg ' /></h2>
            </div>
            <hr/>
           
           
        </div>
        <div className="card-c cblack-c cw2-c  m0-c mt10-c">
            <h1 className='text-m text-bolder blue-textcolor-c '><i class="icon ion-md-shirt"> </i> Soportes:</h1>
            
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c  '>Camiseta Delantera </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-black-c text-vertical-center-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg ' /></h2>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c  '>Camiseta Delantera </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-black-c text-vertical-center-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg ' /></h2>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c  '>Camiseta Delantera </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-black-c text-vertical-center-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg ' /></h2>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c  '>Camiseta Delantera </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-black-c text-vertical-center-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg ' /></h2>
            </div>
            <hr/>
           
        </div>
   </div>


{/*  EVENTOS  */}




         
         <div className="card-c cblue-c cw1-c ">
            <h1 className='text-m text-bolder blue-textcolor-c '><i class="icon ion-md-trophy"> </i> Proximos Eventos:</h1>
            
            <p className='text-light m0-c mt10-c'>02/07/2021 - Carrera solidaria </p>
            <hr/>
            <p className='text-light m0-c'>02/07/2021 - maraton  </p>
            <hr/>
            <p className='text-light m0-c'>02/07/2021 - Campeonaton de futbol </p>
            <hr/>
           
        </div>
        

        <div className="card-c cblue-c cw1-c ">
            <h1 className='text-m text-bolder blue-textcolor-c '><i class="icon ion-md-trophy"> </i> Eventos Asistidos:</h1>
            
            <p className='text-light m0-c mt10-c'>02/07/2021 - Carrera solidaria </p>
            <hr/>
            <p className='text-light m0-c'>02/07/2021 - maraton  </p>
            <hr/>
            <p className='text-light m0-c'>02/07/2021 - Campeonaton de futbol </p>
            <hr/>
            <p className='text-light m0-c'>02/07/2021 - Campeonaton de futbol </p>
            <hr/>
            <p className='text-light m0-c'>02/07/2021 - Campeonaton de futbol </p>
            <hr/>
           
        </div>
              
    </div>
      
       
   
    );
    
}


export {ViewPlayer};