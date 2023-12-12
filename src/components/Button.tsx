import React, {FC} from 'react';
import styled, {css} from "styled-components";

type TProps = {
    children: React.ReactNode,
    variant?: "outlined" | "contained" | "text",
    borderRadius?: string,
    type?: string
    fontSize?: number
    height?: string
    fontWeight?: number
}

export const Button: FC<TProps> = ({
                                       children,
                                       variant = "outlined",
                                       borderRadius = "30px",
                                       type,
                                       fontSize = 14,
                                       height,
                                       fontWeight = 700
                                   }) => {
    return (
        <Wrapper variant={variant}
                 borderRadius={borderRadius}
                 fontSize={fontSize}
                 height={height}
                 fontWeight={fontWeight}>
            {children}
        </Wrapper>
    );
};

type TWrapper = {
    variant: "outlined" | "contained" | "text",
    borderRadius: string,
    fontSize: number,
    height?: string
    fontWeight: number
}

const Wrapper = styled.button<TWrapper>`
  border-radius: ${props => props.borderRadius};
  font-size: ${props => props.fontSize + "px"};
  font-weight: ${props => props.fontWeight};
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;


  ${props => props.variant === "outlined" && css<TWrapper>`
    background-color: ${({theme}) => theme.colors.backgroundColor};
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
    width: 169px;
    height: 38px;

    &:hover {
      box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    }
  `}
  ${props => props.variant === "contained" && css<TWrapper>`
    background: ${({theme}) => theme.colors.primary};
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
    width: 169px;
    height: 38px;

    &:hover {
      box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    }
  `}
  ${props => props.variant === "text" && css<TWrapper>`
    color: ${({theme}) => theme.colors.primary};
  `}
  ${props => props.height && css<TWrapper>`
    height: ${(props) => props.height};
  `}
  & svg {
    margin-left: 10px;
  }


`
