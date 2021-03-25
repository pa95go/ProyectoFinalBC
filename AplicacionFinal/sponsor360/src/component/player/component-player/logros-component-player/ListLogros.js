import './../player-component.css';
import {useState, useEffect} from 'react';


function ListLogros ({logros, setLogros}){

    
    console.log("LogroList:", logros);

    const [fechas, setFechas]= useState([]);
    /* useEffect(()=>{
        let array = [];
        logros.map((logro, index)=>{
            const fechaEdit= logro.fecha.slice(0, 10);
             array[index] = fechaEdit ;

            
        });
        setFechas(array);
        console.log("fechas->", fechas);
    },[]);
    console.log("fechas->", fechas);
     */
   
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
     function handleChange(e, id) {
        

    } 
    function fechahandle(e, fecha){
    const fechalogro = new Date(fecha).toISOString().slice(0, 10);
    console.log("feeeecha");
        return fechalogro; 
    }


    return (
        <div>
            {
             logros.map((logro, index)=>{

                const fecha = String(logro.fecha).substr(0,10);
                 
                 return(
                     <div className="box-c">
                        <form action="" className='form-inline '>
                            <div className=" cw1l-c  ">
                                <input type="text" name="" id="" className='text-bold' placeholder='Evento' key={logro.nombre} defaultValue ={logro.nombre}  onChange={(e)=>handleChange(e, index)}  disabled={logro.disabled} />
                            </div>
            
                            <div className="cw2l-c  ">
                                <input type="date" name="" id=""   className='ctcenter-c 'key={logro.fecha} defaultValue ={fecha} disabled={logro.disabled} />
                            </div>
            
                            <div className="cw3l-c ">
                                <button type='submit'  className='btn-black-c mt10-c ' onClick={(e)=>handleDisable(e, logro.id)} ><i class={handleIcon(logro.disabled)}></i></button>
                                <button  className='btn-red-c mt10-c ' onClick={(e)=>handleRemove(e, logro.id)} ><i class="icon ion-md-trash"></i></button>
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