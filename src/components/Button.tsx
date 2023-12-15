import styled, {css} from "styled-components";

type TButton = {
    variant: "outlined" | "contained" | "text",
    borderRadiusPx?: number,
    fontSizePx?: number,
    heightPx?: number,
    fontWeight?: number,
    gapPx?: number,
}

export const Button = styled.button<TButton>`
  border-radius: ${props => props.borderRadiusPx ? `${props.borderRadiusPx}px` : "30px"};
  font-size: ${props => props.fontSizePx ? `${props.fontSizePx}px` : "14px"};
  font-weight: ${props => props.fontWeight ? props.fontWeight : 400};
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.gapPx ? `${props.gapPx}px` : "10px"};
  transition: all 0.3s;


  ${props => props.variant === "outlined" && css<TButton>`
    background-color: ${({theme}) => theme.colors.backgroundColor};
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
    width: 169px;
    height: 38px;

    &:hover {
      box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);
    }
  `}
  ${props => props.variant === "contained" && css<TButton>`
    background: ${({theme}) => theme.colors.primary};
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
    width: 169px;
    height: 38px;
    text-transform: uppercase;

    &:hover {
      box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);
    }
  `}
  ${props => props.variant === "text" && css<TButton>`
    color: ${({theme}) => theme.colors.primary};
  `}
  ${props => props.heightPx && css<TButton>`
    height: ${(props) => `${props.heightPx}px`};
  `}
  &:active {
    transform: translateY(2px);
    color: inherit;
  }
`
