// src/pages/index.tsx
import React from 'react';
import LoginPage from '../components/LoginPage';
import '../translation'; // Import the translation setup

const HomePage: React.FC = () => {
    return (
        <div>
            <LoginPage />
        </div>
    );
};

export default HomePage;
