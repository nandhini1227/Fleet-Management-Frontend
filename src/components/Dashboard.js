
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [vehicles, setVehicles] = useState([]);
    const [riders, setRiders] = useState([]);
    const [error, setError] = useState('');

    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch vehicles and rides data
                const vehiclesResponse = await axios.get('http://localhost:5000/api/vehicles', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setVehicles(vehiclesResponse.data);

                const ridesResponse = await axios.get('http://localhost:5000/api/rides', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setRiders(ridesResponse.data);
            } catch (err) {
                setError('Failed to fetch data. Please try again later.');
            }
        };

        fetchData();
    }, [token]);

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            {error && <p className="error-message">{error}</p>}

            <h2>Vehicles</h2>
            {vehicles.length === 0 ? (
                <p>No vehicles available.</p>
            ) : (
                <ul>
                    {vehicles.map(vehicle => (
                        <li key={vehicle._id}>
                            {vehicle.plateNumber} - {vehicle.model} - Status: {vehicle.status}
                        </li>
                    ))}
                </ul>
            )}

            <h2>Rides</h2>
            {riders.length === 0 ? (
                <p>No current rides available.</p>
            ) : (
                <ul>
                    {riders.map(ride => (
                        <li key={ride._id}>
                            Vehicle: {ride.vehicle?.plateNumber || 'N/A'} - 
                            Pickup: {ride.pickupLocation} - 
                            Dropoff: {ride.dropoffLocation} - 
                            Status: {ride.status}
                        </li>
                    ))}
                </ul>
            )}

            <div className="dashboard-actions">
                <Link to="/add-vehicle" className="btn">Add Vehicle</Link>
                <Link to="/vehicles" className="btn">Manage Vehicles</Link>
            </div>
        </div>
    );
};

export default Dashboard;
