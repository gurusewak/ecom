import styled from 'styled-components';

export const StyledCheckoutItem = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`
export const StyledImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`
export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`
export const StyledSharedSpan = styled.span`
   width: 23%;
`
export const StyledQuantity = styled(StyledSharedSpan)`
    display: flex;
    padding-left: 20px;
`
export const StyledArrow = styled.span`
        cursor: pointer;
`
export const StyledValue = styled.span`
      margin: 0px 10px;
`
export const StyledRemoveItem = styled.span`
      padding-left: 12px;
    cursor: pointer;
`