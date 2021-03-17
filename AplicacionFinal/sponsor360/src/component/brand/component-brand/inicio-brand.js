import './brand-component.css';
import {useState, useEffect} from 'react'

function InicioBrand (){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return(
    
    <div >
      


     <h1 className = 'title-c red-textcolor-c'> <i class="icon ion-md-home"></i> INICIO</h1>
     <hr/>
   
     
     <div className="card-c cred-c cw1-c ">
         <h1 ><i class="icon ion-md-person"></i> </h1>
         <h3 className='ctcenter-c ctbold-c '>NOMBRE DE LA MARCA</h3>
        
        
         <hr/>
         
         <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis laborum non nihil, 
             labore accusamus assumenda quisquam quibusdam quos, vitae, 
             velit ad porro architecto aspernatur omnis ratione sunt esse! Perspiciatis, voluptas.</p>
        <hr/>
        
     </div>
     
     <div className="box-c">

        <div className="card-c cred-c cw2-c ">
        <h1 ><i class="icon ion-md-bookmark"></i></h1>
         <div className=" box-noresponsive-c text-vertical-center-c m0-c">
            <h4 className='ctcenter-c ctbold-c '>Número total de Soportes:</h4> 
            <h3 className='ctcenter-c ctbold-c '>104 <i class="icon ion-md-shirt red-textcolor-c"></i></h3> 
        </div>
        
         <hr/>
         <div className=" box-noresponsive-c text-vertical-center-c m0-c">
            <h4 className='ctcenter-c ctbold-c '>Número total de Deportistas:</h4> 
            <h3 className='ctcenter-c ctbold-c '>87 <i class="icon ion-md-tennisball red-textcolor-c"></i></h3> 
        </div>

        <hr/>
          
     </div>
        <div className="card-c cred-c cw2-c ">
            <h1 >@</h1> 
            
            <div className=" box-noresponsive-c text-vertical-center-c m0-c">
            
           <h2 className=' text-vertical-center-c text-light '> <i class="icon ion-logo-twitter text-twitter"></i>   </h2>
           <p className='ctbold-c '>@pablo   </p>
           <p>2.7  <i class="icon ion-md-stats red-textcolor-c"></i>  </p>
            </div>
         <hr/>
            <div className="box-noresponsive-c text-vertical-center-c m0-c">
            <h2 className=' text-vertical-center-c text-light '> <i class="icon ion-logo-facebook text-facebook"></i>   </h2>
           <p className='ctbold-c '>@pablo   </p>
          
           <p >1.5  <i class="icon ion-md-stats red-textcolor-c"></i>  </p>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c m0-c">
            <h2 className=' text-vertical-center-c text-light '> <i class="icon ion-logo-instagram text-instagram"></i>   </h2>
           <p className='ctbold-c '>@pablo   </p>
          
           <p >0.8  <i class="icon ion-md-stats red-textcolor-c"></i> </p>
            </div>
            <hr/>
        </div>

     </div>
   
   
    <div className="box-c">
        <div className="card-c cblack-c cw2-c ">
            <h1 ><i class="icon ion-md-shirt"></i></h1>
            <p className='text-s text-light0 ctcenter-c'> Últimos soportes adquiridos</p>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c  '>Camiseta Delantera </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-black-c text-vertical-center-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg ' /></h2>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>Pantalon Trasero </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-black-c text-vertical-center-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg ' /></h2>            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>Gorra </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-black-c text-vertical-center-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg ' /></h2>            </div>
            <hr/>
            
        </div>
        

        <div className="card-c cblue-c cw2-c ">
            <h1 ><i class="icon ion-md-tennisball"> </i></h1>
            <p className='text-s text-light0 ctcenter-c'> Últimos deportistas adquiridos</p>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>COCACOLA </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-blue-c text-vertical-center-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg ' /></h2>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>Disponible </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-blue-c text-vertical-center-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg ' /></h2>            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>REDBULL </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-blue-c text-vertical-center-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg ' /></h2>            </div>
            <hr/>
            
        </div>
              
    </div>




    </div>
    );
    
}


export {InicioBrand};