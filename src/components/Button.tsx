import React, {FC} from 'react';
import styled, {css} from "styled-components";

type TProps = {
    children: React.ReactNode,
    variant?: "outlined" | "contained" | "text",
    borderRadius?: string,
}

export const Button: FC<TProps> = ({
                                       children,
                                       variant = "outlined",
                                       borderRadius = "30px"
                                   }) => {
    return (
        <Wrapper variant={variant} borderRadius={borderRadius}>
            {children}
        </Wrapper>
    );
};

type TWrapper = {
    variant: "outlined" | "contained" | "text",
    borderRadius: string,
}

const Wrapper = styled.button<TWrapper>`
  border-radius: ${props => props.borderRadius};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.variant === "outlined" && css<TWrapper>`
    background-color: ${({theme}) => theme.colors.backgroundColor};
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
    width: 169px;
    height: 38px;
  `}
  ${props => props.variant === "contained" && css<TWrapper>`
    background: ${({theme}) => theme.colors.primary};
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
    width: 169px;
    height: 38px;
  `}
  ${props => props.variant === "text" && css<TWrapper>`
    color: ${({theme}) => theme.colors.primary};

  `}
  &:hover svg {
    margin-left: 10px;
  }
`
