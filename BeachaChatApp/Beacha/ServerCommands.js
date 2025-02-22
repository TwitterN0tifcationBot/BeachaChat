import React, { useState } from 'react';
import ServerSettings from './ServerSettings';

const ServerCommands = ({ onCreateChannel, onDeleteChannel, onSendMessage, server, onSaveSettings }) => {
    const [channelName, setChannelName] = useState('');
    const [message, setMessage] = useState('');
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const handleCreateChannel = (e) => {
        e.preventDefault();
        onCreateChannel(channelName);
        setChannelName('');
    };

    const handleDeleteChannel = (e) => {
        e.preventDefault();
        onDeleteChannel(channelName);
        setChannelName('');
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        onSendMessage(message);
        setMessage('');
    };

    return (
        <div className="server-commands">
            <h2>Server Commands</h2>
            <form onSubmit={handleCreateChannel}>
                <div className="form-group">
                    <label htmlFor="createChannel">Create Channel</label>
                    <input
                        type="text"
                        id="createChannel"
                        value={channelName}
                        onChange={(e) => setChannelName(e.target.value)}
                        placeholder="Channel name"
                        required
                    />
                    <button type="submit">Create</button>
                </div>
            </form>
            <form onSubmit={handleDeleteChannel}>
                <div className="form-group">
                    <label htmlFor="deleteChannel">Delete Channel</label>
                    <input
                        type="text"
                        id="deleteChannel"
                        value={channelName}
                        onChange={(e) => setChannelName(e.target.value)}
                        placeholder="Channel name"
                        required
                    />
                    <button type="submit">Delete</button>
                </div>
            </form>
            <form onSubmit={handleSendMessage}>
                <div className="form-group">
                    <label htmlFor="sendMessage">Send Message</label>
                    <input
                        type="text"
                        id="sendMessage"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message"
                        required
                    />
                    <button type="submit">Send</button>
                </div>
            </form>
            <button onClick={() => setIsSettingsOpen(true)}>Server Settings</button>
            {isSettingsOpen && (
                <ServerSettings
                    server={server}
                    onClose={() => setIsSettingsOpen(false)}
                    onSave={onSaveSettings}
                />
            )}
        </div>
    );
};

export default ServerCommands;