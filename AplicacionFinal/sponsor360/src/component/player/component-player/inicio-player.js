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
         <p className='ctcenter-c ctbold-c'>PABLO GÓMEZ OSUNA</p>
         <hr />
         
         <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis laborum non nihil, 
             labore accusamus assumenda quisquam quibusdam quos, vitae, 
             velit ad porro architecto aspernatur omnis ratione sunt esse! Perspiciatis, voluptas.</p>
        <hr/>
        <p>Deporte</p>
     </div>
    
    <div className="box-c">

        <div className="card-c cblack-c cw3-c ">
            <h1 ><i class="icon ion-md-shirt"></i></h1>
            <p className='ctcenter-c ctbold-c'>CAMISETA DELANTERA LOGO </p>
        </div>
        <div className="card-c cblack-c cw3-c ">
            <h1 ><i class="icon ion-md-shirt"></i></h1>
            <p className='ctcenter-c ctbold-c'>CAMISETA DELANTERA LOGO </p>
        </div>
        <div className="card-c cblack-c cw3-c ">
            <h1 ><i class="icon ion-md-shirt"></i></h1>
            <p className='ctcenter-c ctbold-c'>CAMISETA DELANTERA LOGO </p>
        </div>
    </div>
   
    <div className="box-c">

        <div className="card-c cred-c cw3-c ">
            <h1 ><i class="icon ion-md-planet"></i></h1>
            <p className='ctcenter-c ctbold-c'>NIKE </p>
            <hr/>
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c4f3.png" width='150px' alt=""/>
        </div>
        <div className="card-c cred-c cw3-c ">
            <h1 ><i class="icon ion-md-planet"></i></h1>
            <p className='ctcenter-c ctbold-c'>NIKE </p>
            <hr/>
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c4f3.png" width='150px' alt=""/>
        </div>
        <div className="card-c cred-c cw3-c ">
            <h1 ><i class="icon ion-md-planet"></i></h1>
            <p className='ctcenter-c ctbold-c'>NIKE </p>
            <hr/>
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c4f3.png" width='150px' alt=""/>
        </div>
        
    </div>




    </div>
    );
    
}


export {InicioPlayer};