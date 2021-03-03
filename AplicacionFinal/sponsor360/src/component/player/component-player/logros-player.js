import './player-component.css';
import {ListLogros} from './logros-component-player/ListLogros'
import {useState} from 'react';


function LogrosPlayer (){

    const [logros, setLogros ] = useState([
        { id:"4", nombre_logro: "carrera popular", fecha: "02/03/2020" , disabled: false},
        { id:"3", nombre_logro: "carrera madrid", fecha: "22/04/2020", disabled: true},
        { id:"2", nombre_logro: "carrera sevilla", fecha: "08/10/2020", disabled: false},
        { id:"1", nombre_logro: "carrera mostoles", fecha: "08/10/2020", disabled: true},
        
    ]);

    function handleAddLogro(e) {

        e.preventDefault();
        
       setLogros([ {id:"", nombre_logro: "", fecha: "", disabled: false}, ...logros]);

       console.log('The link was clicked.');
    };


    return(
    
    <div >
        <div className="nav-top">
            <button className='btn-blue-c'> <span> CERRAR SESIÓN </span>  <i class="icon ion-md-exit"></i></button>
        </div>


     <h1 className = 'title-c blue-textcolor-c'> <i class="icon ion-md-trophy"></i> EVENTOS Y LOGROS </h1>
     <hr/>



     <div className="card-c cblue-c cw1-c ">
         <h1 > PROXIMOS EVENTOS</h1>
         <div className="box-c">

         <button className='btn-blue-c d-rigth margin-add-c' onClick={handleAddLogro} ><i class="icon ion-md-add-circle"></i></button>
         </div>
            <ListLogros logros = {logros} setLogros ={setLogros}/> 
         </div>


   
     {/* <div className="card-c cblue-c cw1-c ">
         <h1 > PROXIMOS EVENTOS</h1>
         <div className="box-c">

         <button className='btn-blue-c d-rigth margin-add-c' ><i class="icon ion-md-add-circle"></i></button>
         </div>
         <div className="box-c">
             <form action="" className='form-inline '>
                <div className=" cw1l-c  ">
                    <input type="text" name="" id="" className='text-bold' placeholder='Evento'    />
                </div>
                <div className="cw2l-c  ">
                    <input type="date" name="" id=""   className='ctcenter-c ' />
                </div>
                <div className="cw3l-c ">
                    <button type='submit' className='btn-black-c mt10-c ' ><i class="icon ion-md-save"></i></button>
                    <button className='btn-red-c mt10-c ' ><i class="icon ion-md-trash"></i></button>
                </div>
             </form>
         </div>

         <div className="box-c">
         <form action="" className='form-inline ' >
                <div className=" cw1l-c  ">
                    <input type="text" name="" id="" className='text-bold' placeholder='Evento'  disabled  />
                </div>
                <div className="cw2l-c  ">
                    <input type="date" name="" id=""   className='ctcenter-c ' disabled/>
                </div>
                <div className="cw3l-c ">
                    <button type='submit' className='btn-black-c mt10-c ' ><i class="icon ion-md-create"></i></button>
                    <button className='btn-red-c mt10-c ' ><i class="icon ion-md-trash"></i></button>
                </div>
             </form>
         </div>

     </div> */}
    


     <div className="card-c cblue-c cw1-c ">
         <h1 > EVENTOS ASISTIDOS</h1>
         <div className="box-c">

         <button className='btn-blue-c d-rigth margin-add-c' ><i class="icon ion-md-add-circle"></i></button>
         </div>
         <div className="box-c">
             <form action="" className='form-inline '>
                <div className=" cw1l-c  ">
                    <input type="text" name="" id="" className='text-bold' placeholder='Evento'    />
                </div>
                <div className="cw2l-c  ">
                    <input type="date" name="" id=""   className='ctcenter-c ' />
                </div>
                <div className="cw3l-c ">
                    <button type='submit' className='btn-black-c mt10-c ' ><i class="icon ion-md-save"></i></button>
                    <button className='btn-red-c mt10-c ' ><i class="icon ion-md-trash"></i></button>
                </div>
             </form>
         </div>

         <div className="box-c">
         <form action="" className='form-inline ' >
                <div className=" cw1l-c  ">
                    <input type="text" name="" id="" className='text-bold' placeholder='Evento'  disabled  />
                </div>
                <div className="cw2l-c  ">
                    <input type="date" name="" id=""   className='ctcenter-c ' disabled/>
                </div>
                <div className="cw3l-c ">
                    <button type='submit' className='btn-black-c mt10-c ' ><i class="icon ion-md-create"></i></button>
                    <button className='btn-red-c mt10-c ' ><i class="icon ion-md-trash"></i></button>
                </div>
             </form>
         </div>
         

     </div>
   
  

    </div>
    );
    
}


export {LogrosPlayer};