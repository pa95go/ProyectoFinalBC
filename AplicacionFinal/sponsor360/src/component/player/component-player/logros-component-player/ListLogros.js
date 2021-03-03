import './../player-component.css';
import {useState} from 'react';


function ListLogros ({logros, setLogros}){

   


  /*   function handleDisable(e , logro_id){
        e.preventDefault();
       
        setLogros({...logros.logro.nombre_logro, nombre_logro: 'someothername'});
       


    } */
    
   const  handleDisable = (lid ) =>{

       const newLogro = logros.map((logro)=> {
           if (logro.lid == lid){
               return{
                   ...logro,
                   nombre_logro: "JO",
               }
           }
           return logro
       })
       setLogros(newLogro)

    };


    return (
        <div>
            {
             logros.map((logro, index)=>{

                return(
            
                    <div className="box-c">
                        <form action="" className='form-inline '>
                            <div className=" cw1l-c  ">
                                <input type="text" name="" id="" className='text-bold' placeholder='Evento' value ={logro.nombre_logro}  disabled={logro.disabled} />
                            </div>
            
                            <div className="cw2l-c  ">
                                <input type="date" name="" id=""   className='ctcenter-c ' value ={logro.fecha} disabled={logro.disabled} />
                            </div>
            
                            <div className="cw3l-c ">
                                <button type='sub7mit' className='btn-black-c mt10-c ' onClick={()=>handleDisable(logro.id)} ><i class="icon ion-md-save"></i></button>
                                <button className='btn-red-c mt10-c ' ><i class="icon ion-md-trash"></i></button>
                            </div>
            
                        </form>
                    </div>
                
                )
                })
            }
        
        </div>
    )

}


export {ListLogros};