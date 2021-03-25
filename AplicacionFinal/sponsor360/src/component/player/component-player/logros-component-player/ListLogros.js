import './../player-component.css';
import {useState, useEffect} from 'react';


function ListLogros ({logros, setLogros}){

/* const [datos, setDatos] = useState([{}]); */

const clasebut ="icon ion-md-create";


    const datosArray =[{}];
    const nombreArray =[{}];
    const fechaArray =[];

    function handleDisable  (e, id) { 
       
        e.preventDefault();
        const newLogro = logros.map((logro)=>{

            if(logro.id === id ){

                if(logro.disabled === false){

                    console.log('Prueba react *********************');

                    const array =[1,2,3,4];
                    console.log(array);
                     array.splice(2, 1, 'Feb');
                    console.log(array.indexOf('Feb'));

                    console.log('Prueba react *********************');
                    console.log(datosArray);
                    console.log( nombreArray);
                    
                    console.log("GUARDADO" )
                    console.log(e.value)
                    setLogros([...logros, {id:logro.id, nombre: '', fecha: "",estado: "proximo", disabled: false}]);
                    console.log(logro.id,  localStorage.getItem('idPerfil') )
                    const datos= {
                        nombre: logro.nombre,
                        fecha: logro.fecha,
                        clasificacion: logro.estado,
                        player: localStorage.getItem('idPerfil')
                    }

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
                    .then( response => {})
                    .catch(
                            error=>  console.log(error)
                            //  error => swal('Erorr: ', error)  /* Funcion Error mostrar   */
                    );

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
     function handleChange2(e, id, logroId) {
        
        console.log(logroId);
        setLogros([ {
            id:logroId, 
            nombre: e.target.value,
            fecha: logros[logroId].fecha ,
            estado: logros[logroId].estado,
            disabled: logros[logroId].disabled
        }, ...logros]);

    }  
     function handleChange(e, id, logroId) { // que caundo le pulse a guardar se lo tenemos que enviar al fech
        /* e.preventDefault();
        console.log(e.target.value);
        setNombre(e.target.value); */
        if(datosArray.includes(logroId)==true){
            nombreArray.splice(datosArray.indexOf(logroId), 1, e.target.value);
                console.log("change", logroId);
        }else{
            datosArray.push(logroId);
            nombreArray.push(logroId);
        }

    } 
    function fechahandle(e, fecha){
    const fechalogro = new Date(fecha).toISOString().slice(0, 10);
    
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
                                <input type="text" name="" id="" className='text-bold' placeholder='Evento'  key={logro.nombre}  defaultValue ={logro.nombre}  onChange={(e)=>handleChange(e, index, logro.id)}  disabled={logro.disabled} />
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