import React from 'react'
import { StyledGroup, StyledInput, StyledLabel } from './style';

export default function FormInput({ handleChange, label, value, ...otherProps }) {
  return (
    <StyledGroup>
      <StyledInput onChange={handleChange} {...otherProps}></StyledInput>
      {
        label
          ?
          (<StyledLabel value={value}>{label}</StyledLabel>)
          :
          null
      }
    </StyledGroup>
  )
}
