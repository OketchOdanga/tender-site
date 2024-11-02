import React, { useState } from 'react';
import axios from 'axios';

const AddTender = () => {
  const [tender, setTender] = useState({
    number: '',
    description: '',
    document_link: '',
    closing_date: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTender({ ...tender, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Get the token from local storage

    try {
      await axios.post('http://localhost:5000/api/tenders', tender, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Tender added successfully');
    } catch (err) {
      setError('Failed to add tender');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="number" placeholder="Tender Number" value={tender.number} onChange={handleInputChange} required />
      <input type="text" name="description" placeholder="Description" value={tender.description} onChange={handleInputChange} required />
      <input type="text" name="document_link" placeholder="Document Link" value={tender.document_link} onChange={handleInputChange} />
      <input type="datetime-local" name="closing_date" value={tender.closing_date} onChange={handleInputChange} required />
      <button type="submit">Add Tender</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default AddTender;
