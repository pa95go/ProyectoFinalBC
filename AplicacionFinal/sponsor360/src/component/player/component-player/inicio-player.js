import './player-component.css';


function InicioPlayer (){



    return(
    
    <div >
        <div className="nav-top">
            
            
            <button className='btn-blue-c'> <span> CERRAR SESIÓN </span>  <i class="icon ion-md-exit"></i></button>
           
        </div>


     <h1 className = 'title-c blue-textcolor-c'> <i class="icon ion-md-home"></i> INICIO</h1>
     <hr/>
   
     
     <div className="card-c cblue-c cw1-c ">
         <h1 ><i class="icon ion-md-person"></i> </h1>
         <h3 className='ctcenter-c ctbold-c '>PABLO GÓMEZ OSUNA</h3>
        
         <p className='ctcenter-c '>DEPORTE</p>
         <hr/>
         
         <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis laborum non nihil, 
             labore accusamus assumenda quisquam quibusdam quos, vitae, 
             velit ad porro architecto aspernatur omnis ratione sunt esse! Perspiciatis, voluptas.</p>
        <hr/>
        
     </div>
     <div className="box-c">

        <div className="card-c cblue-c cw2-c ">
            <h1 ><i class="icon ion-md-trophy"></i>  </h1> 
            
            <p className='ctcenter-c '  >Lorem ipsum dolor sit amet consectetur.</p>
            <hr/>
            <p className='ctcenter-c ' >Lorem ipsum dolor sit amet consectetur.</p>
            <hr/>
            <p className='ctcenter-c ' >Lorem ipsum dolor sit amet consectetur.</p>
            <hr/>
          
     </div>
        <div className="card-c cblue-c cw2-c ">
            <h1 >@</h1> 
            
            <div className=" box-noresponsive-c text-vertical-center-c m0-c">
            
           <h2 className=' text-vertical-center-c text-light '> <i class="icon ion-logo-twitter text-twitter"></i>   </h2>
           <p className='ctbold-c '>@pablo   </p>
           <p>2.7  <i class="icon ion-md-stats blue-textcolor-c"></i>  </p>
            </div>
         <hr/>
            <div className="box-noresponsive-c text-vertical-center-c m0-c">
            <h2 className=' text-vertical-center-c text-light '> <i class="icon ion-logo-facebook text-facebook"></i>   </h2>
           <p className='ctbold-c '>@pablo   </p>
          
           <p >1.5  <i class="icon ion-md-stats blue-textcolor-c"></i>  </p>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c m0-c">
            <h2 className=' text-vertical-center-c text-light '> <i class="icon ion-logo-instagram text-instagram"></i>   </h2>
           <p className='ctbold-c '>@pablo   </p>
          
           <p >0.8  <i class="icon ion-md-stats blue-textcolor-c"></i> </p>
            </div>
            <hr/>
        </div>

     </div>
   
   
    <div className="box-c">
        <div className="card-c cblack-c cw2-c ">
            <h1 ><i class="icon ion-md-shirt"></i></h1>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>Camiseta delantera </p>
           <h2 className=' text-vertical-center-c'><i class="icon ion-md-eye blue-textcolor-c"></i></h2>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>Camiseta delantera </p>
           <h2 className=' text-vertical-center-c'><i class="icon ion-md-eye-off "></i></h2>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>Camiseta delantera </p>
           <h2 className=' text-vertical-center-c'><i class="icon ion-md-planet red-textcolor-c"></i></h2>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>Camiseta delantera  </p>
            <h2 className=' text-vertical-center-c'><i class="icon ion-md-eye-off"></i></h2>
            </div>
           <hr/>
        </div>
        

        <div className="card-c cred-c cw2-c ">
            <h1 ><i class="icon ion-md-planet"></i></h1>

            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>COCACOLA </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-red-c text-vertical-center-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg ' /></h2>
            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>Disponible </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-red-c text-vertical-center-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg ' /></h2>            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>REDBULL </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-red-c text-vertical-center-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg ' /></h2>            </div>
            <hr/>
            <div className="box-noresponsive-c text-vertical-center-c">
            <p className='ctbold-c '>Disponible </p>
            <h2 className=' text-vertical-center-c'><img className='img-xs-profile-red-c text-vertical-center-c' src='https://i.etsystatic.com/12396650/r/il/b9d997/2150011366/il_570xN.2150011366_8em7.jpg ' /></h2>
            </div>
            <hr/>
            
            
        </div>
              
    </div>




    </div>
    );
    
}


export {InicioPlayer};