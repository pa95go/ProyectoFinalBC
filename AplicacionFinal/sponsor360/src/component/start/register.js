import {useState} from "react";

import './register.css';
import {RegisterPlayer} from './component-register/register-player'
import {RegisterBrand} from './component-register/register-brand'


function Register (){

     const [register, setRegister] = useState(<RegisterPlayer/>); 
    
    /* function sayHello(){
        register = <RegisterPlayer/>
      }
 */
    return(
    
    <div className ="register-content"  >
       <div className="logo-r">	&nbsp;</div>
       <div className="register-box">
           <span className ='txt-r  '>REGISTRO</span>

           <dir className=' width-full-r'>

            <button className='btn-blue ' /* onClick={sayHello()} */><i class="icon ion-md-tennisball"></i> Deportista</button>
             <button className='btn-red '><i class="icon ion-md-planet"></i> Marca</button>

           </dir>
           <div >
                {register} 
           </div>

       </div>
    </div>
    );
    
}


export {Register};