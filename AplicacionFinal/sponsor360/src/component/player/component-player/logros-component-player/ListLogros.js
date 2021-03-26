import './../player-component.css';
import {useState, useEffect} from 'react';


function ListLogros ({logros, setLogros, todosEventos}){


const clasebut ="icon ion-md-create";




    function handleIcon(disable){ // se supone que cuando crea uno pone una id
       
        if(disable === true){

            return "icon ion-md-create";
        }else{
            
            return "icon ion-md-save";

        }
    }


    
     


    return (
        <div>
            {
             logros.map((logro, index)=>{

                function handleRemove(e, id){
                    e.preventDefault();
                    const newLogros = logros.filter((logro)=> logro.id !== id);
                    setLogros(newLogros);

                     /* ... FECH ... */
                     fetch(`http://localhost:8000/eventos/delete/${id}`,{
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                        'Content-Type': 'application/json'
                        },
                        
                    })
                    .then( response => response.json() )
                    .then( response => {
                    })
                    .catch(
                            error=>  console.log(error)
                    );
                    
                    
                }
               
                function fechahandleChange(e, id, logroId){
                    e.preventDefault();

                    console.log('id es: ',todosEventos);
                       console.log(e.target.value);
                       logro.fecha =e.target.value;
                       if(logro.nombre == ''){
                        logro.nombre = 'Evento';
                     }else{
                         logro.nombre = logro.nombre;
                         
                     }
               }

                const fecha = String(logro.fecha).substr(0,10);

                function handleChange(e, id, logroId){
                     e.preventDefault();
                       
                        logro.nombre =e.target.value;
                        if(logro.fecha == ''){
                           logro.fecha = '1900-01-01';
                        }else{
                            logro.fecha = logro.fecha;
                            
                        }
                }
               

                function handleDisable  (e, id) { 
       
                    e.preventDefault();todosEventos={todosEventos}
                    const newLogro = logros.map((logro)=>{
            
                        if(logro.id === id ){
            
                            if(logro.disabled === false){
            
                                if((logro.nombre !== '')||(logro.fecha !=='')){

                                

                                const datos= {
                                    idlogro: logro.id,
                                    nombre: logro.nombre,
                                    fecha: logro.fecha,
                                    clasificacion: logro.estado,
                                    player: localStorage.getItem('idPerfil')
                                }
                                console.log('datos: ', datos);
            
                                 /* ... FECH ... */
                                fetch('http://localhost:8000/eventos/add',{
                                    method: 'POST',
                                    mode: 'cors',
                                    headers: {
                                    'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(datos)
                                })
                                .then( response => response.json() )
                                .then( response => {
                                    //idlogro = response.nuevoid;
                                    if(!response.Modificado){

                                        const nuevoslogros= logros.slice(0, (logros.length-1));
                                        setLogros([...nuevoslogros, {id:response.nuevoid, nombre: logro.nombre, fecha: logro.fecha, estado: logro.estado, disabled: true}]);
                                    }
                                })
                                .catch(
                                        error=>  console.log(error)
                                        //  error => swal('Erorr: ', error)  /* Funcion Error mostrar   */
                                );
                            }
            
                            }
                            return{
                                ...logro,
                                disabled: !logro.disabled,
                            }
                        }
                        // guardar bbdd cuando sea false
                        return logro
                    });
                    ;
                // guardar bbdd cuando sea false
                    setLogros(newLogro)
                }

                
                





                 return(
                     <div className="box-c">
                        <form action="" className='form-inline '>
                            <div className=" cw1l-c  ">
                                <input type="text" name="" id="" className='text-bold' placeholder='Evento'  key={logro.nombre}  defaultValue ={logro.nombre}  onChange={(e)=>handleChange(e, index, logro.id)}  disabled={logro.disabled} />
                            </div>
            
                            <div className="cw2l-c  ">
                                <input type="date" name="" id=""   className='ctcenter-c 'key={logro.fecha} defaultValue ={fecha} onChange={(e)=>fechahandleChange(e, index, logro.id)} disabled={logro.disabled} />
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