import React, { useState } from 'react';
import './messagebox.css'; // You can create a CSS file for styling your message box

const MessageBox = ({ closeMessageBox }) => {
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add your logic to handle the message submission
        console.log("Message submitted:", message);
        // Close the message box after submission
        closeMessageBox();
    };

    return (
        <div className="message-box">
            <div className="message-box-content">
                <h2>Send Message</h2>
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={message}
                        onChange={handleChange}
                        placeholder="Type your message here..."
                        rows="4"
                        required >
                    </textarea>
                    
                    <div className="button-container">
                        <button type="submit">Send</button>
                        <button onClick={closeMessageBox}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MessageBox;
