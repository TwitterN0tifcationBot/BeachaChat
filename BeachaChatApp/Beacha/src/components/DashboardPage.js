import React, { useState } from 'react';
import CreateServerModal from './CreateServerModal';
import SettingsPage from './SettingsPage';
import ServerCommands from './ServerCommands';

const DashboardPage = () => {
    const [servers, setServers] = useState([]);
    const [isCreateServerModalOpen, setIsCreateServerModalOpen] = useState(false);
    const [isSettingsPageOpen, setIsSettingsPageOpen] = useState(false);
    const [selectedServer, setSelectedServer] = useState(null);

    const handleCreateServer = (name, icon) => {
        setServers([...servers, { name, icon, channels: [], roles: [], ai: { name: '', icon: '', commands: [], channel: '' } }]);
    };

    const handleSaveSettings = (settings) => {
        setServers(servers.map(server => server.name === settings.name ? settings : server));
    };

    const handleCreateChannel = (channelName) => {
        // Handle creating a channel logic here
    };

    const handleDeleteChannel = (channelName) => {
        // Handle deleting a channel logic here
    };

    const handleSendMessage = (message) => {
        // Handle sending a message logic here
    };

    return (
        <div className="dashboard-container">
            <nav className="sidebar">
                <ul>
                    {servers.map((server, index) => (
                        <li key={index} onClick={() => setSelectedServer(server)}>
                            <img src={server.icon} alt={server.name} className="server-icon" />
                            {server.name}
                        </li>
                    ))}
                    <li>
                        <button onClick={() => setIsCreateServerModalOpen(true)}>Create Server</button>
                    </li>
                    <li>
                        <button onClick={() => setIsSettingsPageOpen(true)}>Settings</button>
                    </li>
                </ul>
            </nav>
            <main className="main-content">
                <h2>Welcome to Beacha</h2>
                <p>This is your dashboard. Here you can access your channels, friends, and settings.</p>
                {selectedServer && (
                    <ServerCommands
                        server={selectedServer}
                        onCreateChannel={handleCreateChannel}
                        onDeleteChannel={handleDeleteChannel}
                        onSendMessage={handleSendMessage}
                        onSaveSettings={handleSaveSettings}
                    />
                )}
            </main>
            {isCreateServerModalOpen && (
                <CreateServerModal
                    onClose={() => setIsCreateServerModalOpen(false)}
                    onCreate={handleCreateServer}
                />
            )}
            {isSettingsPageOpen && (
                <SettingsPage
                    onClose={() => setIsSettingsPageOpen(false)}
                    onSave={handleSaveSettings}
                />
            )}
        </div>
    );
};

export default DashboardPage;