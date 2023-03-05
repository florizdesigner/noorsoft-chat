import React from 'react'
import './elements.scss'

export const Input = ({placeholder, required}) => {
    return (
        <input
            className="class_input"
            placeholder={placeholder && placeholder}
            required={required && required}
        />
    )
}