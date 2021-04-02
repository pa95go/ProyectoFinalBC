import './register-componet.css';
import jwt_decode from "jwt-decode";


function RegisterPlayer (){

    function click(e) {
        e.preventDefault();
    //  console.log(jwt_decode('pablo'));
     /* ... FECH ... */
     fetch('http://localhost:8000/brand/formulario',{
        method: 'POST',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json'
        },
        
    })
    .then( response => response.json())
    .then( response => {
    })
    .catch( error=> console.log(error) );
      }

    return(
    
    <div className="box-position "  >
        <div className="box-dimensions border-blue">

       <form action="Login" >
          
           </form>
           <input type="text" name="" id="" placeholder='Nombre y Apellidos' className='reg-text-input reg-style-blue'/>
           <input type="text" name="" id="" placeholder='Email' className='reg-text-input reg-style-blue'/>
           <input type="password" name="" id="" placeholder='Contraseña' className='reg-text-input reg-style-blue'/>
           <input type="text" name="" id="" placeholder='Deporte' className='reg-text-input reg-style-blue '/>
           <div className='width-full-component'>

           <input type="date" name="" id="" placeholder='Fecha de Nacimiento' className ='reg-style-date' />
           <select name="transporte"className="reg-select-sex" >
                <option selected disabled>Sexo</option> 
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Otro">Otro</option>

            </select>
           </div>
            <input type ="submit" value='Registrar Deportista' className='reg-btn-blue' onClick={(e)=>click(e)}/>





        </div>
    </div>
    );
    
}


export {RegisterPlayer};