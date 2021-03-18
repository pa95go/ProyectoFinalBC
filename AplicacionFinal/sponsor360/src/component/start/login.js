import './login.css';
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";


function Login (){


    let username;
    let password;
    function usernamef(e){
        username = e.target.value;
        console.log(username);
    };

    function passwordf(e){
        password= e.target.value;
        console.log(password);
        
    };

   

    function handleLogin(e){
        e.preventDefault();

        let credentials ={
            username: username,
            password: password
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
            
            /* otra peticion si quiero otras cosas */
    
            var decodedHeader = jwt_decode(response.token, { header: true });
             console.log(decodedHeader);  /* Cabecera del token */

             console.log(decoded.roles);
             
             
            }
            )
            .catch(
                error => console.log('Erorr: ', error) /* Funcion Error mostrar   */
                ));
                
               /*  <Redirect to={'player/inicio'} />  redireccionar a pagina player o brand */
    };

    return(
    
    <div className ="login-content"  >
       <div className="logo-l">	&nbsp;</div>
       <div >
           <div  className="login-form">
           <span className ='txt-l  '>INICIAR SESIÓN</span>
           <input type="email" name="" id="" placeholder ='Email' className=' input-1 marg-2 width-full'  onChange = {(e)=>usernamef(e)}/>
            <input type="password" name="" id="" placeholder='Contraseña' className='input-1  width-full' onChange = {(e)=>passwordf(e)}/> 
            
            <button  className='btn-l width-full' onClick = {(e)=>handleLogin(e)} >Entrar</button>
            

            <Link to={'/register'}>

           <button className='btn-black '>Registrate</button>
            </Link>
           </div>


       </div>
    </div>
    );
    
}


export {Login};