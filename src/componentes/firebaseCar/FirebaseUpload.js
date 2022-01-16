import { collection, getDocs } from "firebase/firestore";
import {useEffect} from "react";
import db from "./FirebaseConfig";


const Usuario = () =>{

  useEffect(() => {

    const obtenerDatos = async() =>{
      const datos = await getDocs(collection(db,'Data2'));
      datos.forEach((documento)=>{
          console.log(documento.data());
        });
      
        }

    obtenerDatos();
  },[]);


return (<h1>nada</h1>)}



 

  export default Usuario;