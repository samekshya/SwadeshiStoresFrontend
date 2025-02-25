import React from "react";

const Button = ({ children, onClick }) => {
    return (
        <button onClick={onClick} style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            {children}
        </button>
    );
};

export default Button;
