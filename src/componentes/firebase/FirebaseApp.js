import { data } from '../../data/Data';
import { collection, addDoc } from 'firebase/firestore';
import { fileUpload } from './fileUpload';
import db from './firebase';
import { Route, Routes } from 'react-router-dom';
import { Inicio } from '../Inicio';



export default function FirebaseApp() {

  /* MOSTRAR ADD DOCS */

  const arrayUpload = () => {

    data.forEach(async (element) => {
      const imgURL = await fileUpload(element.image)

      addDoc(collection(db, 'products'), {...element, image: imgURL })

    })

  } 

  return (
    //   <button onClick={arrayUpload}>SUBIR COSAS</button> 
      <div><h1>Gorras Planas</h1>
      <button onClick={arrayUpload}>SUBIR COSAS</button> 
      <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/" element={<Inicio />} />
      <Route path="/" element={<Inicio />} />


      </Routes>


      
      
      </div>
  );
}
