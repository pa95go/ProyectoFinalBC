import { useHistory } from "react-router-dom";
import { useEffect } from 'react';

function Player (){
    const history = useHistory();
    
    function cargarPaginaPrincipal(){
        history.push("/player/inicio");
        return '';
    }

    return (
        <div >
          <p>
          {cargarPaginaPrincipal()}
              </p>  
        </div>
    )

}

export {Player};