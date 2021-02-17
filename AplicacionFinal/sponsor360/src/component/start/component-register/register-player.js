import './register-componet.css';


function RegisterPlayer (){



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
                <option selected disabled>Sexo</option> {/* poner fondo oscuro y en fecha tb */}
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Otro">Otro</option>

            </select>
           </div>
            <input type="submit" value='Registrar Deportista' className='reg-btn-blue'/>





        </div>
    </div>
    );
    
}


export {RegisterPlayer};