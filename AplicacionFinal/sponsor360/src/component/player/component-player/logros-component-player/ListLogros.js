import './../player-component.css';
import {useState} from 'react';


function ListLogros ({logros, setLogros}){

   
  const clasebut ="icon ion-md-create";


    function handleDisable  (e, id) { 
        e.preventDefault();
        const newLogro = logros.map((logro)=>{

            if(logro.id === id ){

                return{
                    ...logro,
                    disabled: !logro.disabled,
                }
            }
            // guardar bbdd cuando sea false
            return logro
        });
    // guardar bbdd cuando sea false
        setLogros(newLogro)
    }


    function handleIcon(disable){ // se supone que cuando crea uno pone una id
       
        if(disable === true){

            return "icon ion-md-create";
        }else{
            return "icon ion-md-save";

        }
    }


    function handleRemove(e, id){
        e.preventDefault();
        const newLogros = logros.filter((logro)=> logro.id !== id);
        setLogros(newLogros);
    }


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
                                <button type='submit'  className='btn-black-c mt10-c ' onClick={(e)=>handleDisable(e, logro.id)} ><i class={handleIcon(logro.disabled)}></i></button>
                                <button className='btn-red-c mt10-c ' onClick={(e)=>handleRemove(e, logro.id)} ><i class="icon ion-md-trash"></i></button>
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