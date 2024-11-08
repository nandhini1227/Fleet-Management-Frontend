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

Explanation of Sections

1. **Overview**: A brief summary of the project, its purpose, and its main features.
2. **Features**: Key features of the application that provide a quick insight into what the project can do.
3. **Technologies Used**: A list of technologies and tools utilized in the project.
4. **Getting Started**: Instructions for installing and setting up the project, including project structure and environment variables.
5. **Usage**: Simple instructions for how to use the application after setup.
6. **API Endpoints**: A list of API endpoints used in the application, useful for both developers and testers.
7. **Testing**: Instructions for running tests in the application.
8. **Contributing**: Guidelines for how others can contribute to the project.
9. **License**: Information about the type of license governing the project.
10. **Acknowledgments**: Credits and resources you found helpful while building the project.
11. **Contact**: Your contact information for inquiries or further discussion.

 Final Tips

- Remember to replace placeholder texts (like URLs and email addresses) with the actual information relevant to your project.
- Keep your README up to date as the project evolves and as new features or changes are implemented.
- Consider adding screenshots or GIFs of the application in action to provide visual assistance for potential users and contributors.

This structure can help others understand your project quickly and get involved or use it without confusion. 

