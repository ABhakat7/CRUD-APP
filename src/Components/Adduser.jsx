import React from 'react'
import './AddUser.css'

function Adduser({onAdd}) {

    //function to handle form submission for new user
    const handleOnSubmit = (e) => {
        e.preventDefault();
        //function call onAdd for passing input parameters
        onAdd(e.target.name.value,e.target.email.value,e.target.phone.value);
        //Clear the inputs after submission
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.phone.value = "";
    }
  return (
    <div className="add-user-container">
      <form onSubmit={handleOnSubmit}>
        <h3>Add User</h3>
        <input className="input-field" placeholder="Name" name="name" type="text" />
        <input className="input-field" placeholder="Email" name="email" type="email" />
        <input className="input-field" placeholder="Phone no." name="phone" type="tel" />
        <button type="submit" className="add-button">Add</button>
      </form>
    </div>
  );
};

export default Adduser;