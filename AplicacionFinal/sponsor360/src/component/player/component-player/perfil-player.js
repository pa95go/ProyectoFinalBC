import './player-component.css';


function PerfilPlayer (){



    return(
    
    <div >
        <div className="nav-top">
            
            
            <button className='btn-blue-c'> <span> CERRAR SESIÓN </span>  <i class="icon ion-md-exit"></i></button>
           
        </div>


     <h1 className = 'title-c blue-textcolor-c'> <i class="icon ion-md-person"></i> PERFIL</h1>
     <hr/>
   
     <div className="card-c cblue-c cw1-c ">
         
         
         <p className=' ctbold-c'>NOMBRE Y APELLIDOS</p>
         <hr />
         <p className=' ctbold-c'>NOMBRE Y APELLIDOS</p>
         <hr />
        <input type="text" name="" id="" value ='Hola' disabled/>
        <input type="text" name="" id="" placeholder='Nombre' />
        <input type="text" name="" id=""  placeholder='Nombre'/>
        <input type="text" name="" id="" placeholder='Nombre' />
         
         <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis laborum non nihil, 
             labore accusamus assumenda quisquam quibusdam quos, vitae, 
             velit ad porro architecto aspernatur omnis ratione sunt esse! Perspiciatis, voluptas.</p>
        <hr/>
        <p>Deporte</p>
     </div>
    
    
   
    




    </div>
    );
    
}


export {PerfilPlayer};