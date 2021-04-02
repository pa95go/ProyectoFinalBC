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
           }, 700) } 
              </p>  
        </div>
    )

}

export {Brand};