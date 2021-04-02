import './register-componet.css';
import {useState} from 'react';


function RegisterBrand (){
    const [nombre, setNombre]= useState()
    const [email, setEmail]= useState()
    const [pass, setPass]= useState()
    

    function registro(e) {
        e.preventDefault();
     /* ... FECH ... */
     fetch('http://localhost:8000/brand/registro/usuario',{
        method: 'POST',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json'
        },body: JSON.stringify({
            email: email,
            pass: pass            
        }) 
        
    })
    .then( response => response.json())
    .then( response => {
       

            /* ... FECH ... */
        fetch('http://localhost:8000/brand/registro/perfil',{
            method: 'POST',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json'
            },body: JSON.stringify({
                nombre: nombre,
                id: response.idUser,
                idRed: response.idRed,
            }) 
            
        })
        .then( response => response.json())
        .then( response => {})
        .catch( error=> console.log(error) );
     

    })
    .catch( error=> console.log(error) );
     }



      function handleNombre(e) {
        e.preventDefault();
          setNombre(e.target.value)
      }
      function handleEmail(e) {
        e.preventDefault();
        setEmail(e.target.value)
          
      }
      function handlePass(e) {
        e.preventDefault();
        setPass(e.target.value)
          
      }


    return(
    
    <div className="box-position "  >
        <div className="box-dimensions border-blue">

       <form action="Login" >
          
           </form>
           <input type="text" onChange={(e)=>handleNombre(e)} placeholder='Nombre de la marca' className='reg-text-input reg-style-red'/>
           <input type="text" onChange={(e)=>handleEmail(e)} placeholder='Email' className='reg-text-input reg-style-red'/>
           <input type="password" onChange={(e)=>handlePass(e)} placeholder='Contraseña' className='reg-text-input reg-style-red'/>
          
            <input type="submit" value='Registrar Marca' className='reg-btn-red' onClick={(e)=>registro(e)}/>





        </div>
    </div>
    );
    
}


export {RegisterBrand};