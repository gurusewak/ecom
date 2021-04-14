import styled, { css } from 'styled-components';

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: black;
`
export const StyledGroup = styled.div`
  position: relative;
  margin: 45px 0;
`
export const StyledLabel = styled.label`
    color: ${props => props.value.length ? 'black' : 'grey'};
    font-size: ${props => props.value.length ? '12px' : '16px'};
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: ${props => props.value.length ? '-14px' : '10px'};
    transition: 300ms ease all;
`

export const StyledInput = styled.input`
  background: none;
    background-color: white;
    color: grey;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid grey;
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus~label {
      ${shrinkLabel}
    }
`