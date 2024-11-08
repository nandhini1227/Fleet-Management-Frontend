
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5000/api/vehicles', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setVehicles(response.data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Vehicle List</h1>
            <ul>
                {vehicles.map(vehicle => (
                    <li key={vehicle._id}>
                        {vehicle.plateNumber} - {vehicle.model} - Status: {vehicle.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VehicleList;
