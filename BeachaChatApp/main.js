import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './components/LoginPage';
import CreateAccountPage from './components/CreateAccountPage';
import DashboardPage from './components/DashboardPage';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            {isLoggedIn ? (
                <DashboardPage />
            ) : (
                <>
                    <LoginPage />
                    <CreateAccountPage />
                </>
            )}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));