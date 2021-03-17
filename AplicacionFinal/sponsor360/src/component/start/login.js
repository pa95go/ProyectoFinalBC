import './login.css';
import { Link } from 'react-router-dom'


function Login (){



    return(
    
    <div className ="login-content"  >
       <div className="logo-l">	&nbsp;</div>
       <div >
           <form action="Login" className="login-form">
           <span className ='txt-l  '>INICIAR SESIÓN</span>
           <input type="email" name="" id="" placeholder ='Email' className=' input-1 marg-2 width-full'/>
            <input type="password" name="" id="" placeholder='Contraseña' className='input-1  width-full'/> 
            <button type="submit"  name='#' className='btn-l width-full'>Entrar</button>

            <Link to={'/register'}>

           <button className='btn-black '>Registrate</button>
            </Link>

           </form>

       </div>
    </div>
    );
    
}


export {Login};