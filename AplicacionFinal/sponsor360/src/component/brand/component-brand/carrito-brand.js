import './brand-component.css';
import {ListProductos} from './carrito-component-brand/ListProductos' 
import {useState, useEffect} from 'react';
import swal from "sweetalert";

function CarritoBrand (){

  
 
  const [total, setTotal]= useState(0);
  const [productos, setProductos]= useState([
    { id: "",
    nombre_soporte: '',
    precio: '',
    tamano: '',
    descripcion: '',
    img_soporte: '', 
    id_player: '',
    nombre_player: '',
    img_player: '' },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0)

     /* ... FECH ... */
     fetch('http://localhost:8000/tienda/cart',{
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idPerfil: localStorage.getItem('idPerfil')
        
     }),
        
    }).then( response => response.json())
    .then(
        response => {
          setProductos(response.productos);
          setTotal(response.precio_total);
         
      }).catch(error=> console.log(error) );
      

  }, [])

  function click(e) {
    e.preventDefault();
  
  }

  function BDCompra() {
    console.log(productos);
    /* ... FECH ... */
    fetch('http://localhost:8000/tienda/cart/pagado',{
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idBrand: localStorage.getItem('idPerfil')
        
     }),
        
    }).then( response => response.json())
    .then(
        response => {
          
          for (let index = 0; index < productos.length; index++) {
             /* ... FECH ... */
             fetch('http://localhost:8000/tienda/cart/vaciar',{
              method: 'POST',
              mode: 'cors',
              headers: {
              'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  idCart: productos[index].id
                  
                  
              }) 
          })
          .then( response => response.json())
          .then( response => {
              setTotal(0)
          })
          .catch( error=> console.log(error) );
            
          }
          setProductos([]);
         
      }).catch(error=> console.log(error) );

  }

  function handleComprar(e) {
    e.preventDefault();

    if(productos.length == 0){
      swal({
        title: "No hay productos en el carrito.",
        text: 'Dirigete a Tienda para añadirlos.',
        icon: "info",
        buttons: false,
        timer: "2000",
      });

    }else{

      
      swal({
        title: "¿Quieres Realizar la compra?",
        text: `Numero de soporte/s : ${productos.length},  Total: ${total} €/año`,
        icon: "warning",
        buttons: ['cancelar', 'Pagar'],
        dangerMode: true,
      })
      .then((pago) => {
        
        if (pago) {
          swal({
            title: "COMPRA REALIZADA CORRECTAMENTE",
            text: 'Tendras el sponsor durante un año',
            icon: "success",
            buttons: false,
            timer: "1500",
          });
          BDCompra();
        }
      
      });
    }
  }

  

return(

    <div >
     <button onClick={(e)=>click(e)}>  AAA</button>

        <h1 className = 'title-c red-textcolor-c'> <i class="icon ion-md-cart"></i> CARRITO </h1>
        <hr/>

          <ListProductos productos = {productos} setProductos= {setProductos} total={total} setTotal={setTotal}/>

          <div className='card-c cred-c cw1-c p0-c'>
              <h3 className='text-light d-inline '> &nbsp;&nbsp; Precio total: <span className='text-bolder red-textcolor-c'>{total} €/año</span> </h3>
              <button className='justify-end text-xl m0-c d-inline btn-red-c mt12-c mr20-c 'onClick={(e)=>handleComprar(e)}>Comprar</button>
          </div>
    </div>

);
}

export {CarritoBrand};