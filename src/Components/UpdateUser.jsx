import React,{useState} from "react";
import './UpdateUser.css'

function UpdateUser({user,onUpdate}){
  //state variables to store the updated user data
    const [name,setName] = useState(user.name);
    const [email,setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);


    //function to handle the form submission
    const handleUpdate = (e) => {
        e.preventDefault();
        //to call onUpdate function and pass updated data
        onUpdate(user.id,name,email,phone);
    };

    return (
        <div className="update-user-container">
          <h3>Update User</h3>
          <form onSubmit={handleUpdate}>
            <input
              className="update-input"
              placeholder='Name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="update-input"
              placeholder='Email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="update-input"
              placeholder='Phone'
              type='tel'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button type='submit' className="update-button">Update</button>
          </form>
          <hr />
        </div>
      );
    }
    
export default UpdateUser;