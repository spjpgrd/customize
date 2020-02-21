import React from "react";

const Checkbox = ({ label, name, isSelected, onCheckboxChange }) => (
    <label style={{ display: "block" }}>
        <input
            type="checkbox"
            name={name}
            checked={isSelected}
            onChange={onCheckboxChange}
            className="form-check-input"
        />
        <span className="c-checkbox-input-text">
            {label}
        </span>
    </label>
);

export default Checkbox;
