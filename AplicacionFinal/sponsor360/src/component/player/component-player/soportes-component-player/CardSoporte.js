import './../player-component.css';
import {useState, useEffect} from 'react';
import swal from "sweetalert";
import { useHistory } from "react-router-dom";



function CardSoporte ({id, soporteid ,soportes, setSoportes, editar, setEditar}){

    const history = useHistory();
    //const [edit, setEdit] = useState(true);
    const [dtext, setDtext]= useState("Disponible");
    const [dstyle, setDstyle]= useState("mini-banner-black-c");
    const [dicon, setDicon]= useState("icon ion-md-information-circle-outline");

    

    


    function Inicializar() {
       

        if(soportes[id].marca === ""){
            if(soportes[id].estado === true){
                setDtext ( "Publicado ");
                setDstyle ( "mini-banner-blue-c");
                setDicon  ("icon ion-md-eye");
                if(editar[id]!== true){
                    setDtext ( "Disponible");
                      setDstyle ( "mini-banner-black-c");
                     setDicon ("icon ion-md-eye-off"); 

                     let newEditar = [];
                     for (let index = 0; index < editar.length; index++) {
                         if(index== id){
                            newEditar.push( !editar[index]);
                        }else{
                             newEditar.push(editar[index]);
                         }
                     }
                     setEditar(newEditar);  
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
        console.log("Edit", editar[id], soporteid.id);
        if(soportes[id].marca === ''){
            let newEditar = [];
            for (let index = 0; index < editar.length; index++) {
                if(index== id){
                   newEditar.push(!editar[index]);
               }else{
                    newEditar.push( editar[index]);
                }
            }
            console.log(newEditar);
            setEditar(newEditar);
            
            if(editar[id] === false){
                
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
                       // imagen: soportes[id].imagen ,
                        descripcion: soportes[id].descripcion,
                        tamano: soportes[id].tamano,
                        precio: soportes[id].precio,
                        estado: 'false' 
                    }) 
                })
                .then( response => response.json()
                .then(
                    response => {

                        })
                        .catch(
                        error=> console.log(error) 
                ));
                
                    /* FECH IMAGEN con el form Data */

                const formDataImagenSop = new FormData();
                formDataImagenSop.append('imagensoporte', soportes[id].imagen);
                    /* ... FECH DATOS... */
                fetch(`http://localhost:8000/soportes/editimagen/${soporteid.id}`,{
                    method: 'POST',
                    mode: 'cors',
                    body:  formDataImagenSop
                })
                .then( response => response.json())
                .then(response =>{
                    swal({
                        title: "Actualizando datos",
                        text: "Espere un momento por favor.",
                        icon: "info",
                        button: ["si"],
                        timer: "1000",
                    }).then(() => {
                        history.go(0)
                    });
                })
                .catch (error => console.log(error) );

               

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


    function handleIcon(edito){ 
        if(soportes[id].marca == ''){
           
            if(edito === true){
                 
                return "icon ion-md-create";
            }else{
                    return "icon ion-md-save";
            
                }
            }
    }
   

    function handlePublish(e ){
        e.preventDefault();
        if(editar[id]=== true){ 
            const newSoporte = soportes.map((newsoporte)=>{

                if(newsoporte.id === soportes[id].id ){
                    if(soportes[id].marca === ''){
                    
                        if (newsoporte.estado== true) {

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
       
console.log(id);
        const newSoporte = soportes.map((newsoporte)=>{

            if(newsoporte.id === soportes[id].id ){
                return{
                    ...newsoporte,
                    imagen: e.target.files[0],
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
   
         <div className="banner-black-c" disabled={editar[id]}></div>
        <form action="" >
      <button type='submit' className='btn-black-c d-rigth margin-edit-c ' onClick={(e)=>handleEdit(e)}><i class={handleIcon(editar[id])} disabled={editar[id]}></i></button> 
        <label for={`file-input${id}`}  disabled={editar[id]} >
          <img className='img-profile-black-c' src={soportes[id].imagen} disabled={editar[id]}  />  
        </label>
        <input id={`file-input${id}`} type="file" className='d-none' onChange={(e)=>handleImagen(e)}  disabled={editar[id]}   />

        
        <input type="text"  className='text-bold  ctcenter-c '  id="nombre" name="nombre"  placeholder="Titulo del soporte" onChange={(e)=>handleNombre(e)} defaultValue={soportes[id].nombre} disabled={editar[id]} />
        <textarea  className='text-s' name="descripcion" id="descripcion" placeholder='Descripción' defaultValue={soportes[id].descripcion} onChange={(e)=>handleDescripcion(e)} disabled={editar[id]}  ></textarea>
        <input type="text"  className=' '  id="tamano" name="tamano"  placeholder="Tamaño del soporte" defaultValue={soportes[id].tamano} onChange={(e)=>handleTamano(e)} disabled={editar[id]} />
        <input type="number"  className=' ' id="precio" name="precio"  placeholder="Precio" defaultValue={soportes[id].precio} onChange={(e)=>handlePrecio(e)} disabled={editar[id]} />

       
        </form>
        <h2 onClick={(e)=>handlePublish(e)} className={dstyle}><span>{dtext}</span><i class={dicon}></i></h2>
      
     </div>
    )

}


export {CardSoporte};