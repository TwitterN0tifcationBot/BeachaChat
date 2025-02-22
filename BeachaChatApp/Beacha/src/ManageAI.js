import React, { useState } from 'react';

const ManageAI = ({ ai, onClose, onSave }) => {
    const [name, setName] = useState(ai.name);
    const [icon, setIcon] = useState(ai.icon);
    const [commands, setCommands] = useState(ai.commands || []);
    const [channel, setChannel] = useState(ai.channel || '');

    const handleAddCommand = () => {
        setCommands([...commands, '']);
    };

    const handleCommandChange = (index, value) => {
        const newCommands = [...commands];
        newCommands[index] = value;
        setCommands(newCommands);
    };

    const handleSave = (e) => {
        e.preventDefault();
        onSave({ ...ai, name, icon, commands, channel });
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Manage AI</h2>
                <form onSubmit={handleSave}>
                    <div className="form-group">
                        <label htmlFor="aiName">AI Name</label>
                        <input
                            type="text"
                            id="aiName"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="aiIcon">AI Icon</label>
                        <input
                            type="file"
                            id="aiIcon"
                            onChange={(e) => setIcon(URL.createObjectURL(e.target.files[0]))}
                        />
                    </div>
                    <div className="form-group">
                        <label>Commands</label>
                        {commands.map((command, index) => (
                            <input
                                key={index}
                                type="text"
                                value={command}
                                onChange={(e) => handleCommandChange(index, e.target.value)}
                                placeholder="Command"
                                required
                            />
                        ))}
                        <button type="button" onClick={handleAddCommand}>Add Command</button>
                    </div>
                    <div className="form-group">
                        <label htmlFor="aiChannel">Channel</label>
                        <input
                            type="text"
                            id="aiChannel"
                            value={channel}
                            onChange={(e) => setChannel(e.target.value)}
                            placeholder="Channel"
                            required
                        />
                    </div>
                    <button type="submit">Save</button>
                </form>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ManageAI;