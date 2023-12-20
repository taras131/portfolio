import styled, {css} from "styled-components";

type TStyledProps = {
    isActive: boolean
    sizePx?: number
}

export const IconWrapper = styled.div<TStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: ${props => props.sizePx ? `${props.sizePx}px` : "40px"};
  height: ${props => props.sizePx ? `${props.sizePx}px` : "40px"};
  cursor: pointer;
  
  &:hover {
    background-color: ${({theme}) => theme.colors.accent};
  }

  ${props => props.isActive && css<TStyledProps>`
    background-color: ${({theme}) => theme.colors.accent};
  `}
  ${props => !props.isActive && css<TStyledProps>`
    background-color: ${({theme}) => theme.colors.backgroundSecondary};
  `}
`