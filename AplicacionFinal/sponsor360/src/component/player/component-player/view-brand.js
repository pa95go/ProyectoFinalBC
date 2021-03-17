import './player-component.css';
import {useState} from 'react';

function ViewBrand (){

    const [edit, setEdit] = useState(true);

    function handleEdit (e){
        e.preventDefault();
        console.log(edit);
         setEdit(!edit); 
    }


    function handleIcon(edit){ // se supone que cuando crea uno pone una id
       
        if(edit === true){

            return "icon ion-md-create";
        }else{
            return "icon ion-md-save";

        }
    }

    return(
    
        <div >
       


        <h1 className = 'title-c blue-textcolor-c'> <i class="icon ion-md-planet"></i> COCACOLA COMPANY</h1>
        <hr/>
      
           
        <div className="card-c cred-c cw1-c mb0-c">
            <div className="banner-red-c"></div>
            <div className="mt-75 "></div>
           <img className='img-profile-red-c ' src="https://cdn2.vectorstock.com/i/thumb-large/63/66/profile-placeholder-default-avatar-vector-21666366.jpg" disabled={edit}  />
          
          <h2 className='text-bold text-xl ctcenter-c m0-c '>COCACOLA COMPANY</h2>
          <hr/>
          <p className=' text-light text-m '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, deserunt cum sunt dicta optio tenetur facilis molestiae expedita vitae ad!</p>
          <hr/>
          <p className='  text-m '>Total de soportes:  <span className=' text-bolder text-m '>7</span></p>
          <p className='  text-m '>Total de deportistas:  <span className=' text-bolder text-m '>7</span></p>
   
   
       </div>
       <div className="box-c mt20 mb0-c ">
   
           <div className="card-c cblue-c cw3-c  mt10-c">
               <h1 className='text-m text-bolder bg-twitter '><i class="icon ion-logo-twitter"> </i> @pablo</h1>
   
               <div className=" box-noresponsive-c text-vertical-center-c m0-c mt10-c">
               <p>Seguidores: </p>
               <p>2.7  <i class="icon ion-md-people red-textcolor-c"></i>  </p>
                </div>
             <hr/>
   
             <div className=" box-noresponsive-c text-vertical-center-c m0-c ">
               <p>Engagement: </p>
               <p>2.7  <i class="icon ion-md-stats red-textcolor-c  "></i>  </p>
                </div>
           </div>
   
           <div className="card-c cblue-c cw3-c  mt10-c">
               <h1 className='text-m text-bolder bg-facebook '><i class="icon ion-logo-facebook"> </i> @pablo</h1>
   
               <div className=" box-noresponsive-c text-vertical-center-c m0-c mt10-c">
               <p>Seguidores: </p>
               <p>2.7  <i class="icon ion-md-people red-textcolor-c"></i>  </p>
                </div>
             <hr/>
   
             <div className=" box-noresponsive-c text-vertical-center-c m0-c">
               <p>Engagement: </p>
               <p>2.7  <i class="icon ion-md-stats red-textcolor-c  "></i>  </p>
                </div>
           </div>
   
           <div className="card-c cblue-c cw3-c mt10-c ">
               <h1 className='text-m text-bolder bg-instagram '><i class="icon ion-logo-instagram"> </i> @pablo</h1>
   
               <div className=" box-noresponsive-c text-vertical-center-c m0-c mt10-c">
               <p>Seguidores: </p>
               <p>2.7  <i class="icon ion-md-people red-textcolor-c"></i>  </p>
                </div>
             <hr/>
   
             <div className=" box-noresponsive-c text-vertical-center-c m0-c">
               <p>Engagement: </p>
               <p>2.7  <i class="icon ion-md-stats red-textcolor-c  "></i>  </p>
                </div>
           </div>
   
       </div>
      
    
                 
       </div>
    );
    
}


export {ViewBrand};