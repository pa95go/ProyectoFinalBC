import { useHistory } from "react-router-dom";
import { useEffect } from 'react';

function Brand (){
    const history = useHistory();
    
    function cargarPaginaPrincipal(){
        history.push("/brand/inicio");
        return '';
    }

    return (
        <div >
          <p>
           {setTimeout(() => {
               cargarPaginaPrincipal()
           }, 500) } 
              </p>  
        </div>
    )

}

export {Brand};