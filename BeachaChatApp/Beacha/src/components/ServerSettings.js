import React, { useState } from 'react';
import ManageAI from './ManageAI';
import CreateBotModal from './CreateBotModal';

const ServerSettings = ({ server, onClose, onSave }) => {
    const [name, setName] = useState(server.name);
    const [icon, setIcon] = useState(server.icon);
    const [roles, setRoles] = useState(server.roles || []);
    const [isManageAIOpen, setIsManageAIOpen] = useState(false);
    const [isCreateBotModalOpen, setIsCreateBotModalOpen] = useState(false);

    const handleAddRole = () => {
        setRoles([...roles, '']);
    };

    const handleRoleChange = (index, value) => {
        const newRoles = [...roles];
        newRoles[index] = value;
        setRoles(newRoles);
    };

    const handleSave = (e) => {
        e.preventDefault();
        onSave({ ...server, name, icon, roles });
        onClose();
    };

    const handleCreateBot = (botName, botIcon) => {
        // Handle bot creation logic here
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Server Settings</h2>
                <form onSubmit={handleSave}>
                    <div className="form-group">
                        <label htmlFor="serverName">Server Name</label>
                        <input
                            type="text"
                            id="serverName"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="serverIcon">Server Icon</label>
                        <input
                            type="file"
                            id="serverIcon"
                            onChange={(e) => setIcon(URL.createObjectURL(e.target.files[0]))}
                        />
                    </div>
                    <div className="form-group">
                        <label>Roles</label>
                        {roles.map((role, index) => (
                            <input
                                key={index}
                                type="text"
                                value={role}
                                onChange={(e) => handleRoleChange(index, e.target.value)}
                                placeholder="Role name"
                                required
                            />
                        ))}
                        <button type="button" onClick={handleAddRole}>Add Role</button>
                    </div>
                    <button type="submit">Save</button>
                </form>
                <button onClick={() => setIsManageAIOpen(true)}>Manage AI</button>
                <button onClick={() => setIsCreateBotModalOpen(true)}>Create Bot</button>
                <button onClick={onClose}>Close</button>
                {isManageAIOpen && (
                    <ManageAI
                        ai={server.ai || { name: '', icon: '', commands: [], channel: '' }}
                        onClose={() => setIsManageAIOpen(false)}
                        onSave={(ai) => onSave({ ...server, ai })}
                    />
                )}
                {isCreateBotModalOpen && (
                    <CreateBotModal
                        onClose={() => setIsCreateBotModalOpen(false)}
                        onCreate={handleCreateBot}
                    />
                )}
            </div>
        </div>
    );
};

export default ServerSettings;