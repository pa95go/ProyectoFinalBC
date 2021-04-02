import './register-componet.css';
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import {useState} from 'react';


function RegisterPlayer (){

    const [nombre, setNombre]= useState();
    const [email, setEmail]= useState();
    const [pass, setPass]= useState();
    const [deporte, setDeporte]= useState();
    const [fecha, setFecha]= useState();
    const [sexo, setSexo]= useState();
    const history = useHistory()


    function registro(e) {
        e.preventDefault();
        console.log('holi');
     /* ... FECH ... */
     fetch('http://localhost:8000/player/registro/usuario',{
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
        fetch('http://localhost:8000/player/registro/perfil',{
            method: 'POST',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json'
            },body: JSON.stringify({
                nombre: nombre,
                deporte: deporte,
                fecha: fecha,
                sexo: sexo,
                id: response.idUser,
                idRed: response.idRed,
            }) 
            
        })
        .then( response => response.json())
        .then( response => {
            let credentials ={
                username: email,
                password: pass
            }

                 /* ... FECH ... */
      fetch('http://localhost:8000/login',{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
      .then( response => response.json()
      .then(
          response => {
            console.log('Respuesta ok: ', response);
            localStorage.setItem('token', response.token );
            
            const decoded = jwt_decode(response.token);          
             console.log(decoded);
             
            var decodedHeader = jwt_decode(response.token, { header: true });
             
                
                swal({
                    title: `¡Bienvenido, ${nombre}!`,
                    text: 'Tu resgistro ha sido completado',
                    icon: "success",
                    buttons: false,
                    timer: "3000",
                  }).then(
                    history.push("/player")
                  )
            }
            )
            .catch(error=>  console.log(error)  ));


        })
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
      function handleDeporte(e) {
        e.preventDefault();
        setDeporte(e.target.value)
          
      }
      function handleFecha(e) {
        e.preventDefault();
        setFecha(e.target.value)
          
      }
      function handleSexo(e) {
        e.preventDefault();
        setSexo(e.target.value)
          
      }

    return(
    
    <div className="box-position "  >
        <div className="box-dimensions border-blue">

       <form action="Login" >
          
           </form>
           <input type="text"  placeholder='Nombre y Apellidos' className='reg-text-input reg-style-blue' onChange={(e)=>handleNombre(e)}/>
           <input type="text"  placeholder='Email' className='reg-text-input reg-style-blue' onChange={(e)=>handleEmail(e)} />
           <input type="password"   placeholder='Contraseña' className='reg-text-input reg-style-blue' onChange={(e)=>handlePass(e)}/>
           <input type="text"  placeholder='Deporte' className='reg-text-input reg-style-blue ' onChange={(e)=>handleDeporte(e)}/>
           <div className='width-full-component'>

           <input type="date"  placeholder='Fecha de Nacimiento' className ='reg-style-date'onChange={(e)=>handleFecha(e)} />
           <select name="transporte"className="reg-select-sex" onChange={(e)=>handleSexo(e)} >
                <option selected disabled>Sexo</option> 
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Otro">Otro</option>

            </select>
           </div>
            <input type ="submit" value='Registrar Deportista' className='reg-btn-blue' onClick={(e)=>registro(e)}/>





        </div>
    </div>
    );
    
}


export {RegisterPlayer};