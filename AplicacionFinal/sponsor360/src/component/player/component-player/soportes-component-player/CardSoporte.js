import './../player-component.css';
import {useState, useEffect} from 'react';


function CardSoporte ({id, soportes, setSoportes}){

   

   
    const [edit, setEdit] = useState(true);
    const [dtext, setDtext]= useState("Disponible");
    const [dstyle, setDstyle]= useState("mini-banner-black-c");
    const [dicon, setDicon]= useState("icon ion-md-information-circle-outline");

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
    
      
    
  


    return (
        <div className="card-c cblack-c cw2-c ">
   
         <div className="banner-black-c" disabled={edit}></div>
        <form action="" >
      <button type='submit' className='btn-black-c d-rigth margin-edit-c ' onClick={(e)=>handleEdit(e)}><i class={handleIcon(edit)} disabled={edit}></i></button> 
        <label for="file-input"  disabled={edit} >
          <img className='img-profile-black-c' src={soportes[id].imagen} disabled={edit}  />  
        </label>
        <input id="file-input" type="file" className='d-none' disabled={edit}  />

        
        <input type="text"  className='text-bold  ctcenter-c ' name="d" id="f" name="nombre"  placeholder="escribe tu nombre" value={soportes[id].nombre} disabled={edit} />
        <textarea name="Descripcion" className='text-s' id="" placeholder='Descripción' value={soportes[id].descripcion} disabled={edit}  ></textarea>
        <input type="text"  className=' ' name="d" id="f" name="tamano" onChange placeholder="Tamaño del soporte" value={soportes[id].tamano} disabled={edit} />
        <input type="number"  className=' ' name="price" id="f" name="precio" onChange placeholder="Precio" value={soportes[id].precio} disabled={edit} />

       
        </form>
        <h2 onClick={(e)=>handlePublish(e)} className={dstyle}><span>{dtext}</span><i class={dicon}></i></h2>
      
     </div>
    )

}


export {CardSoporte};