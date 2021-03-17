import './brand-component.css';
import {ListMisDeportistas} from './deportistas-component-brand/ListMisDeportistas' 
import {useState, useEffect} from 'react';

function DeportistasBrand (){

    const [deportistas, setDeportistas]= useState([
        {id: '1', nombre_deportista: "Pablo Gómez Osuna", deporte: "Tenis", img_deportista:'https://amautaenlinea.com/images/simon.gif' },
        {id: '2', nombre_deportista: "Pepe Gómez Osuna", deporte: "Tenis", img_deportista:'https://cdn2.vectorstock.com/i/thumb-large/63/66/profile-placeholder-default-avatar-vector-21666366.jpg' },
        {id: '3', nombre_deportista: "Luca  Gómez Osuna", deporte: "Futbol", img_deportista:'https://amautaenlinea.com/images/simon.gif' },
        {id: '4', nombre_deportista: "Maria Garcia Osuna", deporte: "Badminton", img_deportista:'https://amautaenlinea.com/images/simon.gif' },
        {id: '5', nombre_deportista: "Lucia Perez Cabello", deporte: "Tenis", img_deportista:'https://cdn2.vectorstock.com/i/thumb-large/63/66/profile-placeholder-default-avatar-vector-21666366.jpg' },
        {id: '5', nombre_deportista: "Lucia Perez Cabello", deporte: "Tenis", img_deportista:'https://cdn2.vectorstock.com/i/thumb-large/63/66/profile-placeholder-default-avatar-vector-21666366.jpg' },
        {id: '5', nombre_deportista: "Lucia Perez Cabello", deporte: "Tenis", img_deportista:'https://cdn2.vectorstock.com/i/thumb-large/63/66/profile-placeholder-default-avatar-vector-21666366.jpg' },
        {id: '5', nombre_deportista: "Lucia Perez Cabello", deporte: "Tenis", img_deportista:'https://cdn2.vectorstock.com/i/thumb-large/63/66/profile-placeholder-default-avatar-vector-21666366.jpg' },
        {id: '5', nombre_deportista: "Lucia Perez Cabello", deporte: "Tenis", img_deportista:'https://cdn2.vectorstock.com/i/thumb-large/63/66/profile-placeholder-default-avatar-vector-21666366.jpg' },
        {id: '5', nombre_deportista: "Lucia Perez Cabello", deporte: "Tenis", img_deportista:'https://cdn2.vectorstock.com/i/thumb-large/63/66/profile-placeholder-default-avatar-vector-21666366.jpg' },
        {id: '5', nombre_deportista: "Lucia Perez Cabello", deporte: "Tenis", img_deportista:'https://cdn2.vectorstock.com/i/thumb-large/63/66/profile-placeholder-default-avatar-vector-21666366.jpg' },
        {id: '5', nombre_deportista: "Lucia Perez Cabello", deporte: "Tenis", img_deportista:'https://cdn2.vectorstock.com/i/thumb-large/63/66/profile-placeholder-default-avatar-vector-21666366.jpg' },
        {id: '5', nombre_deportista: "Lucia Perez Cabello", deporte: "Tenis", img_deportista:'https://cdn2.vectorstock.com/i/thumb-large/63/66/profile-placeholder-default-avatar-vector-21666366.jpg' },

    ]);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


return(

    <div >
      {/*   <div className="nav-top">
            <button className='btn-red-c'> <i class="icon ion-md-power"></i></button>
        </div> */}

        <h1 className = 'title-c red-textcolor-c'> <i class="icon ion-md-tennisball"></i> DEPORTISTAS </h1>
        <hr/>
        <div className="box-space-between ">
            
            
        <ListMisDeportistas deportistas = {deportistas}/>
        </div>
    </div>

);
}

export {DeportistasBrand};