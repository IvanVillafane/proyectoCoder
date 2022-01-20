import { collection, addDoc, query, where,getDocs } from 'firebase/firestore';
import { useState } from 'react';
import db from './firebase';




function AppFirebase() {
    const [users, setUsers] = useState([]);
    const createUser = async () =>{
        //CREAMOS DOCUMENTS
        await addDoc(collection(db, 'users'), { userName: 'Papichulo' , email :'xxxx@gmail.com',first_name:'Jose', last_name:'Lopez'});

    }

    const getUsers = async () => {
    const q = query(collection(db,'users'));

    const snap = await getDocs(q);

    snap.forEach(doc => {
        setUsers(users=> [...users, doc.data()]);
});
    }

 return( 

 <div><button onClick={createUser}>Crear Usuario</button><button onClick={getUsers}>Recuperar Usuario</button>
 <div className='users'>
     {users.map(user => (
     <div className='user'>
         <h3>{user.first_name}{user.last_name}</h3>
         <p>{user.email} </p>
         </div>))}
 </div>
 </div>
 );
}

export default AppFirebase;



