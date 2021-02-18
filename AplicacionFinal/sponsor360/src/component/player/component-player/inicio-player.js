import './player-component.css';


function InicioPlayer (){



    return(
    
    <div >
        <div className="nav-top">
            salir
            <button>but</button>
            <button>but2</button>
            lo que quiera
        </div>
     <h1 className = 'title-c blue-textcolor-c'> <i class="icon ion-md-home"></i> INICIO</h1>
     <hr/>
     <div className="profile-inicio-c ">
         <h2 className='title2-c '>ELENA PEREZ DE AYALA MARTINEZ</h2>
         <h4 className='subtitle-c'>DEPORTE</h4>
         <p className='text-c'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis laborum non nihil, 
             labore accusamus assumenda quisquam quibusdam quos, vitae, 
             velit ad porro architecto aspernatur omnis ratione sunt esse! Perspiciatis, voluptas.</p>
         
     </div>
     <div className='box-inicio-c'>
        <div className="support-inicio-c">
            <h2 >SOPORTE 1</h2>
            <h4 className='subtitle-c red-textcolor-c'>CAMISETA POR DELANTE</h4>
        </div>
        <div className="support-inicio-c">
            <h2 >SOPORTE 1</h2>
            <h4 className='subtitle-c red-textcolor-c'>CAMISETA POR DELANTE</h4>
        </div>
        <div className="support-inicio-c">
            <h2 >SOPORTE 1</h2>
            <h4 className='subtitle-c red-textcolor-c'>CAMISETA POR DELANTE</h4>
        </div>
         
     </div>

        <div className="brand-inicio-c">
            y aqui las marcas
        </div>

    </div>
    );
    
}


export {InicioPlayer};