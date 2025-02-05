// src/pages/index.tsx
import React from 'react';
import Login from '../components/Login';
import '../translation'; // Import the translation setup

const HomePage: React.FC = () => {
    return (
        <div>
            <Login />
        </div>
    );
};

export default HomePage;
