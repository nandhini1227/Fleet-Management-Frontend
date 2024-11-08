
import React, { useState } from 'react';
import axios from 'axios';

const AddVehicle = () => {
    const [plateNumber, setPlateNumber] = useState('');
    const [model, setModel] = useState('');

    const handleAddVehicle = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        await axios.post('http://localhost:5000/api/vehicles', { plateNumber, model }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        // Optionally reset the form or provide feedback
    };

    return (
        <form onSubmit={handleAddVehicle}>
            <input 
                type="text" 
                placeholder="Plate Number" 
                value={plateNumber} 
                onChange={e => setPlateNumber(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Model" 
                value={model} 
                onChange={e => setModel(e.target.value)} 
            />
            <button type="submit">Add Vehicle</button>
        </form>
    );
};

export default AddVehicle;
