import styled from 'styled-components'

export const StyledButton = styled.button`
min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: ${props => props.theme.backgroundColor || 'black'};
  color: ${props => props.theme.color || 'white'};
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: ${props => props.theme.backgroundColor || 'none'};
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${props => props.theme.hoverBackgroundColor || 'white'};
    color: ${props => props.theme.hoverColor || 'black'};
    border: ${props => props.theme.hoverBorder || '1px solid black'};
  }
`
export const googleSignInTheme = {
  backgroundColor: '#4285f4',
  color: 'white',
  hoverBackgroundColor: '#357ae8',
  hoverBorder: 'none',
  hoverColor: 'white',
}
export const invertedTheme = {
  backgroundColor: 'white',
  color: 'black',
  border: 'border: 1px solid black',
  hoverBackgroundColor: 'black',
  hoverColor: 'white',
  hoverBorder: 'none'
}