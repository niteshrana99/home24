import React from 'react'
import { StyledInput } from './style'

type InputProps = {
    placeholder: string,
    type: string,
    onChange?: (event : React.ChangeEvent<HTMLInputElement>) => void,
    value: string
}

const Input = ({ placeholder, type, onChange, value, ...props }: InputProps) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event)
    }

    return (
        <StyledInput placeholder={placeholder} type={type} onChange={handleInputChange} value={value} {...props} />
    )
}

export default Input