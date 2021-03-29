import './../player-component.css';
import {useState, useEffect} from 'react';


function CardSoporte ({id, soportes, setSoportes}){

      
    const [edit, setEdit] = useState(true);
    const [dtext, setDtext]= useState("Disponible");
    const [dstyle, setDstyle]= useState("mini-banner-black-c");
    const [dicon, setDicon]= useState("icon ion-md-information-circle-outline");

    // const [edit, setEdit] = useState('');
    // const [edit, setEdit] = useState('');
    // const [edit, setEdit] = useState('');
    // const [edit, setEdit] = useState('');
    // const [edit, setEdit] = useState('');


    function Inicializar() {
       

        if(soportes[id].marca === ""){
            if(soportes[id].estado === true){
                setDtext ( "Publicado ");
                setDstyle ( "mini-banner-blue-c");
                setDicon  ("icon ion-md-eye");
                if(edit!== true){
                    setDtext ( "Disponible");
                      setDstyle ( "mini-banner-black-c");
                     setDicon ("icon ion-md-eye-off"); 
                     setEdit(false);  
                }
        
            }
            else{
                      setDtext ( "Disponible");
                      setDstyle ( "mini-banner-black-c");
                     setDicon ("icon ion-md-eye-off");  
                    
             }
        }else{
            setDtext   (soportes[id].marca);
            setDstyle  ("mini-banner-red-c");
           setDicon  ("icon ion-md-planet");
        }

    }

    useEffect(()=>{
       
        Inicializar();
    
    });

    

    function handleEdit (e){
        e.preventDefault();
        
        if(soportes[id].marca === ''){
            setEdit(!edit); 
            
            if(edit === false){
                
                console.log("Guardo", soportes[id].id);

                /* ... FECH ... */
                fetch('http://localhost:8000/soportes/edit',{
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: soportes[id].id,
                        nombre: soportes[id].nombre ,
                        imagen: soportes[id].imagen ,
                        descripcion: soportes[id].descripcion,
                        tamano: soportes[id].tamano,
                        precio: soportes[id].precio,
                        estado: 'false' // hacer en cada on change un set al soporte

                        
                    }) 
                })
                .then( response => response.json()
                .then(
                    response => {

                        })
                        .catch(
                        error=> console.log(error) 
                ));

               

            } 
            

            
            
                const newSoporte = soportes.map((newsoporte)=>{
                        if(newsoporte.id === soportes[id].id ){
                            return{
                                ...newsoporte,
                                estado: false,
                            }
                        }
                        return newsoporte
                    
                });
                
                setSoportes(newSoporte)
    
            }
        
    }


    function handleIcon(edit){ 
        if(soportes[id].marca == ''){
           
            if(edit === true){
                 
                return "icon ion-md-create";
            }else{
                    return "icon ion-md-save";
            
                }
            }
    }
   

    function handlePublish(e ){
        e.preventDefault();
        if(edit=== true){ 
            const newSoporte = soportes.map((newsoporte)=>{

                if(newsoporte.id === soportes[id].id ){
                    if(soportes[id].marca === ''){
                        console.log('publico',newsoporte.estado);

                    
                        if (newsoporte.estado== 'true') {

                            /* ... FECH ... */
                    fetch('http://localhost:8000/soportes/edit',{
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            id: soportes[id].id,
                            nombre: soportes[id].nombre ,
                            imagen: soportes[id].imagen ,
                            descripcion: soportes[id].descripcion,
                            tamano: soportes[id].tamano,
                            precio: soportes[id].precio,
                            estado:  'false'
    
                        }) 
                    })
                    .then( response => response.json()
                    .then().catch(error=> console.log(error) ));
                
                }else if (newsoporte.estado == false){

                            /* ... FECH ... */
                            fetch('http://localhost:8000/soportes/edit',{
                                method: 'POST',
                                mode: 'cors',
                                headers: {
                                'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    id: soportes[id].id,
                                    nombre: soportes[id].nombre ,
                                    imagen: soportes[id].imagen ,
                                    descripcion: soportes[id].descripcion,
                                    tamano: soportes[id].tamano,
                                    precio: soportes[id].precio,
                                    estado:  'true'
            
                                }) 
                            })
                            .then( response => response.json()
                            .then().catch(error=> console.log(error) ));

                }



                        return{
                            ...newsoporte,
                            estado: !newsoporte.estado,
                        }
                    }else{
                        return{
                            ...newsoporte,
                            estado: false,
                        }
                    }
                }
                // guardar bbdd cuando sea false
                return newsoporte
            });
        // guardar bbdd cuando sea false
            setSoportes(newSoporte)
            
        }
    }
    
    function handleNombre(e){
        e.preventDefault();

        const newSoporte = soportes.map((newsoporte)=>{

            if(newsoporte.id === soportes[id].id ){
                return{
                    ...newsoporte,
                    nombre: e.target.value,
                }
            }else{
                return newsoporte
            }
           
        });

        setSoportes(newSoporte);
    };

    function handleImagen(e){
        e.preventDefault();

        const newSoporte = soportes.map((newsoporte)=>{

            if(newsoporte.id === soportes[id].id ){
                return{
                    ...newsoporte,
                    imagen: e.target.value,
                }
            }else{
                return newsoporte
            }
           
        });

        setSoportes(newSoporte);
    };

    function handleDescripcion(e){
        e.preventDefault();

        const newSoporte = soportes.map((newsoporte)=>{

            if(newsoporte.id === soportes[id].id ){
                return{
                    ...newsoporte,
                    descripcion: e.target.value,
                }
            }else{
                return newsoporte
            }
           
        });

        setSoportes(newSoporte);
    };
    function handleTamano(e){
        e.preventDefault();

        const newSoporte = soportes.map((newsoporte)=>{

            if(newsoporte.id === soportes[id].id ){
                return{
                    ...newsoporte,
                    tamano: e.target.value,
                }
            }else{
                return newsoporte
            }
           
        });

        setSoportes(newSoporte);
    };
    function handlePrecio(e){
        e.preventDefault();

        const newSoporte = soportes.map((newsoporte)=>{

            if(newsoporte.id === soportes[id].id ){
                return{
                    ...newsoporte,
                    precio: e.target.value,
                }
            }else{
                return newsoporte
            }
           
        });

        setSoportes(newSoporte);
    }
    
  


    return (
        <div className="card-c cblack-c cw2-c ">
   
         <div className="banner-black-c" disabled={edit}></div>
        <form action="" >
      <button type='submit' className='btn-black-c d-rigth margin-edit-c ' onClick={(e)=>handleEdit(e)}><i class={handleIcon(edit)} disabled={edit}></i></button> 
        <label for="file-input"  disabled={edit} >
          <img className='img-profile-black-c' src={soportes[id].imagen} disabled={edit}  />  
        </label>
        <input id="file-input" type="file" className='d-none' onChange={(e)=>handleImagen(e)} disabled={edit}  />

        
        <input type="text"  className='text-bold  ctcenter-c '  id="nombre" name="nombre"  placeholder="Titulo del soporte" onChange={(e)=>handleNombre(e)} defaultValue={soportes[id].nombre} disabled={edit} />
        <textarea  className='text-s' name="descripcion" id="descripcion" placeholder='Descripción' defaultValue={soportes[id].descripcion} onChange={(e)=>handleDescripcion(e)} disabled={edit}  ></textarea>
        <input type="text"  className=' '  id="tamano" name="tamano"  placeholder="Tamaño del soporte" defaultValue={soportes[id].tamano} onChange={(e)=>handleTamano(e)} disabled={edit} />
        <input type="number"  className=' ' id="precio" name="precio"  placeholder="Precio" defaultValue={soportes[id].precio} onChange={(e)=>handlePrecio(e)} disabled={edit} />

       
        </form>
        <h2 onClick={(e)=>handlePublish(e)} className={dstyle}><span>{dtext}</span><i class={dicon}></i></h2>
      
     </div>
    )

}


export {CardSoporte};