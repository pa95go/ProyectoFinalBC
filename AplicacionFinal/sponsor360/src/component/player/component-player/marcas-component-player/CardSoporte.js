import './../player-component.css';
import {useState} from 'react';


function CardSoporte ({soporte, setSoportes}){

   
    const [edit, setEdit] = useState(true);

    function handleEdit (e){
        e.preventDefault();
        console.log(edit);
        if(soporte.marca === ''){
             setEdit(!edit); 
            
        }
    }


    function handleIcon(edit){ // se supone que cuando crea uno pone una id
        if(soporte.marca === ''){
           
            if(edit === true){
                
                return "icon ion-md-create";
            }else{
                return "icon ion-md-save";
                
            }
        }
    }
   
        
    function handleDisponibleText(){
        
        if(soporte.marca === ''){
            let icon_dis = "icon ion-md-planet"
        return  "Disponible"
        }else{
            let icon_dis = "icon ion-md-information-circle"
        return soporte.marca;
        }
    }
    function handleDisponibleIcon(){
        
        if(soporte.marca === ''){
            return  "icon ion-md-information-circle"
        }else{
            return  "icon ion-md-planet"
        }
    }

    function handleDisponibleStyle(){
        if(soporte.marca === ''){
        return  "mini-banner-black-c"
        }else{
        return  "mini-banner-red-c"
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
        <h2 className={handleDisponibleStyle()}><span>{handleDisponibleText()}</span><i class={handleDisponibleIcon()}></i></h2>
        
     </div>
    )

}


export {CardSoporte};