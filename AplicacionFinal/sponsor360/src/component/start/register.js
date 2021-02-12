import './register.css';
import {RegisterPlayer} from './component-register/register-player'


function Register (){



    return(
    
    <div className ="register-content"  >
       <div className="logo-r">	&nbsp;</div>
       <div className="register-box">
           <span className ='txt-r  '>REGISTRO</span>

           <dir className=' width-full-r'>

            <button className='btn-blue btn-select'><i class="icon ion-md-tennisball"></i> Deportista</button>
             <button className='btn-red btn-select'><i class="icon ion-md-planet"></i> Marca</button>

           </dir>
           <div >
               <RegisterPlayer/>
           </div>

       </div>
    </div>
    );
    
}


export {Register};