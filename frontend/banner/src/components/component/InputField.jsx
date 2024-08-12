import React from 'react'

// A memoized input component to prevent unnecessary re-renders
const InputField = React.memo(({ label, name, type, value, onChange }) => {
    return (
      <label>
        {label}:
        <input type={type} name={name} value={value} onChange={onChange} />
      </label>
    );
  });

export default InputField