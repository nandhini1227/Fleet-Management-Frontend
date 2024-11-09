 Fleet Management System

Overview

The Fleet Management System is a web application designed for taxi operators, enabling them to efficiently manage their fleet of vehicles, track rides, and facilitate communication between drivers and fleet managers. Built with a React frontend and a Node.js backend, this application provides an intuitive administrative dashboard for managing vehicles, drivers, and rides in real-time.

 Features

- **User Authentication**: Secure user registration and login with JWT authentication.
- **Admin Dashboard**: View and manage vehicles and rides through an intuitive UI.
- **Vehicle Management**: Add, edit, view, and delete vehicles.
- **Real-time Ride Tracking**: Monitor the status of rides and vehicle locations.
- **Role-based Access**: Different functionalities available for drivers and administrators.

Technologies Used

- **Frontend**: React.js, Axios, React Router
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Development**: Babel, Webpack (create-react-app), Docker (optional)
- **Testing**: Jest (optional)

 Getting Started

 Prerequisites

- Node.js (version 14 or later)
- MongoDB (in a local or cloud environment)
- npm (Node Package Manager)

 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/fleet-management-system.git
   cd fleet-management-system

Set up the Backend:

Navigate to the backend directory:

      cd backend

Install dependencies:

         npm install

Create a .env file in the backend directory and add your MongoDB connection string and JWT secret:


MONGODB_URI=mongodb://localhost:27017/fleet_management

JWT_SECRET=your_jwt_secret

Start the backend server:


         node server.js

Set up the Frontend:

Navigate to the frontend directory:

          cd ../frontend

Install dependencies:


          npm install

Start the frontend application:

          npm start

The application should now be running on http://localhost:3000.

Usage

Visit the application in your browser at http://localhost:3000.
Register an account or log in with existing credentials.
Explore the dashboard to manage vehicles and track rides.

API Endpoints

Authentication

POST /api/auth/register: Register a new user.
POST /api/auth/login: Login an existing user.

Vehicles

GET /api/vehicles: Retrieve all vehicles.
POST /api/vehicles: Add a new vehicle.
PUT /api/vehicles/:id: Update a vehicle's information.
DELETE /api/vehicles/:id: Remove a vehicle.

Rides

GET /api/rides: Retrieve all rides.
POST /api/rides: Create a new ride.

Testing

To run tests, make sure you are in the frontend or backend directory and use:
              npm test

Contributing

Contributions are welcome! Please open an issue or submit a pull request with your proposed changes. Ensure that your code adheres to the existing style and includes appropriate tests.

License

This project is licensed under the MIT License - see the LICENSE.txt file for details.

Acknowledgments

FontAwesome for icons
Create React App for the React setup template
MongoDB for database management

Contact

    For any questions or issues, feel free to reach out to nandhuvigneshpb13@gmail.com.

// frontend/src/components/VehicleMap.js

import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const VehicleMap = ({ vehicles }) => {
    return (
        <GoogleMap
            zoom={10}
            center={{ lat: vehicles[0]?.location.coordinates[1] || 0, lng: vehicles[0]?.location.coordinates[0] || 0 }}
            mapContainerStyle={{ height: "400px", width: "800px" }}
        >
            {vehicles.map(vehicle => (
                <Marker key={vehicle._id} position={{ lat: vehicle.location.coordinates[1], lng: vehicle.location.coordinates[0] }} />
            ))}
        </GoogleMap>
    );
};

export default VehicleMap;


 
