import React, { useState } from 'react';

const CreateServerModal = ({ onClose, onCreate }) => {
    const [serverName, setServerName] = useState('');
    const [serverIcon, setServerIcon] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(serverName, serverIcon);
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Create a Server</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="serverName">Server Name</label>
                        <input
                            type="text"
                            id="serverName"
                            value={serverName}
                            onChange={(e) => setServerName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="serverIcon">Server Icon</label>
                        <input
                            type="file"
                            id="serverIcon"
                            onChange={(e) => setServerIcon(URL.createObjectURL(e.target.files[0]))}
                            required
                        />
                    </div>
                    <button type="submit">Create Server</button>
                </form>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default CreateServerModal;