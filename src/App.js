import React,{ useEffect, useState } from 'react';
import './App.css';
import User from './Components/User';
import Adduser from './Components/Adduser';
import UpdateUser from './Components/UpdateUser';

function App() {

  const [users, setUsers] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(null);
  
  //FETCH DATA FROM API
  useEffect(() => {
    fetchData();
  },[])

  //FUNCTION TO FETCH DATA OF USER
  const fetchData = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => {
    console.log(err);
  });
};

//FUNCTION TO ADD DATA OF USER
const onAdd = async (name, email, phone) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    });

    if (!response.ok) {
      throw new Error('Failed to add user');
    }

    const newUser = await response.json();
    
    // Update the users state with the new user data
    setUsers([...users, newUser]);

    //TO HIDE THE UPDATE FORM AFTER UPDATION
    setShowUpdateForm(null);
  } catch (error) {
    console.log(error);
  }
};

//to check in the console
console.log(users)

//FUNCTION TO UPDATE USER DATA
const onUpdate = async (id, name, email,phone) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: name,
        email: email,
        phone:phone
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    });

    if (!response.ok) {
      throw new Error('Failed to update user');
    }

    const updatedUser = await response.json();
    setUsers(users.map(user => user.id === id ? updatedUser : user));
    setShowUpdateForm(null);
  } catch (error) {
    console.log(error);
  }
};

//to check in the console
console.log(users);

//DELETE USER DATA
const onDelete =async (id)=>{
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
      method: 'DELETE',
    });

    if(!response.ok){
      throw new Error('Failed to delete user');
    }

    //to filter out deleted data
    setUsers(users.filter(user => user.id !==id));
  }catch(error){
    console.log(error);
  }
};

  return (
  <>
  <div className="App">
        <h3>Crud APP</h3>
        <br />
        <Adduser onAdd={onAdd} /> 
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <User
                id={user.id}
                name={user.name}
                email={user.email}
                phone={user.phone}
                onEdit={() => setShowUpdateForm(user)}
                onDelete={onDelete}
              />
              {/* TO DISPLAY UPDATE FORM */}
              {showUpdateForm && showUpdateForm.id === user.id && (
                <UpdateUser user={user} onUpdate={onUpdate} />
              )}
            </div>
          ))}
        </div>
      </div>
  </>
  );
};


export default App;