import React from 'react';
import './user.css';


function User({ id, email, name,phone, onEdit,onDelete }) {
  //function to handle Edit btn
  const handleUpdate = () => {
    if (typeof onEdit === 'function') {
      onEdit(id); 
    }
  };


  //function to handle delete btn
  const handleDelete = () => {
    if(typeof onDelete === 'function'){
      onDelete(id);
    }
  };

  return (
    <div className="user-container">
      <span className="user-info">{name}</span>
      <span className="user-info">{email}</span>
      <span className="user-info">{phone}</span>
      <span className="user-buttons">
        {/* Btns for edit and update actions */}
        <button className="edit-button" onClick={handleUpdate}>Edit</button>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
      </span>
    </div>
  );
}

export default User;