import { SpinnerContainer, SpinnerOverlay } from './style'
import React from 'react'

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return (
    isLoading
      ?
      <SpinnerOverlay>
        <SpinnerContainer></SpinnerContainer>
      </SpinnerOverlay>
      :
      <WrappedComponent {...otherProps}></WrappedComponent>
  )
}
export default WithSpinner;
