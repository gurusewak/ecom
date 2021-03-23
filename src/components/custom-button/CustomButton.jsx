import React from 'react'
import { StyledButton, invertedTheme, googleSignInTheme } from './style';
import { withTheme } from 'styled-components';

export function CustomButton({ children, isGoogleSignIn, inverted, theme, ...otherProps }) {

  return (
    <StyledButton theme={isGoogleSignIn ? googleSignInTheme : inverted ? invertedTheme : ''} {...otherProps}>
      {children}
    </StyledButton>
  )
}
CustomButton.defaultProps = {
  theme: {}
};
export default withTheme(CustomButton);