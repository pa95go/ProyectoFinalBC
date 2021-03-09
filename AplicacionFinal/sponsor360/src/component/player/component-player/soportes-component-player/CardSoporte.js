import './../player-component.css';
import {useState, useEffect} from 'react';


function CardSoporte ({soporte, soportes, setSoportes}){

   
    const [edit, setEdit] = useState(true);
    const [dtext, setDtext]= useState("Disponible");
    const [dstyle, setDstyle]= useState("mini-banner-black-c");
    const [dicon, setDicon]= useState("icon ion-md-information-circle-outline");

    function Inicializar(soporte) {
       

        if(soporte.marca === ""){
            if(soporte.publicado === true){
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
            setDtext   (soporte.marca);
            setDstyle  ("mini-banner-red-c");
           setDicon  ("icon ion-md-planet");
        }

    }

    useEffect(()=>{
        Inicializar(soporte);
    
    });

    

    function handleEdit (e){
        e.preventDefault();
        
        if(soporte.marca === ''){
            setEdit(!edit); 
            
            
            
                const newSoporte = soportes.map((newsoporte)=>{
                        if(newsoporte.id === soporte.id ){
                            return{
                                ...newsoporte,
                                publicado: false,
                            }
                        }
                        return newsoporte
                    
                });
                setSoportes(newSoporte)
                console.log( soporte);
                
                
            }
        
    }


    function handleIcon(edit){ 
        if(soporte.marca === ''){
           
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

                if(newsoporte.id === soporte.id ){
                    if(soporte.marca === ''){
                        return{
                            ...newsoporte,
                            publicado: !newsoporte.publicado,
                        }
                    }else{
                        return{
                            ...newsoporte,
                            publicado: false,
                        }
                    }
                }
                // guardar bbdd cuando sea false
                return newsoporte
            });
        // guardar bbdd cuando sea false
            setSoportes(newSoporte)
            console.log(soporte);
        }
    }
    
      
    
  


    return (
        <div className="card-c cblack-c cw2-c ">
   
         <div className="banner-black-c" disabled={edit}></div>
        <form action="" >
      <button type='submit' className='btn-black-c d-rigth margin-edit-c ' onClick={(e)=>handleEdit(e)}><i class={handleIcon(edit)} disabled={edit}></i></button> 
        <label for="file-input"  disabled={edit} >
        <img className='img-profile-black-c' src={soporte.imagen} disabled={edit}  />
        </label>
        <input id="file-input" type="file" className='d-none' disabled={edit}  />

        
        <input type="text"  className='text-bold  ctcenter-c ' name="d" id="f" name="nombre" onChange placeholder="escribe tu nombre" value={soporte.nombre_soporte} disabled={edit} />
        <textarea name="Descripcion" className='text-s' id="" placeholder='Descripción' value={soporte.descripcion} disabled={edit}  ></textarea>
        <input type="text"  className=' ' name="d" id="f" name="tamano" onChange placeholder="Temaño del soporte" value={soporte.tamano} disabled={edit} />
        <input type="number"  className=' ' name="price" id="f" name="precio" onChange placeholder="Precio" value={soporte.precio} disabled={edit} />

       
        </form>
        <h2 onClick={(e)=>handlePublish(e)} className={dstyle}><span>{dtext}</span><i class={dicon}></i></h2>
      
     </div>
    )

}


export {CardSoporte};