import React, {FC} from 'react';
import styled, {css} from "styled-components";

type TProps = {
    children: React.ReactNode
    variant?: "outlined" | "contained"
}

export const Button: FC<TProps> = ({children, variant = "outlined"}) => {
    return (
        <Wrapper variant={variant}>
            {children}
        </Wrapper>
    );
};

type TWrapper = {
    variant: "outlined" | "contained"
}

const Wrapper = styled.button<TWrapper>`
  border-radius: 30px;
  width: 169px;
  height: 38px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  ${props => props.variant === "outlined" && css<TWrapper>`
    background-color: ${({theme}) => theme.colors.backgroundColor};
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
  `}
  ${props => props.variant === "contained" && css<TWrapper>`
    background: ${({theme}) => theme.colors.primary};
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
  `}
`
