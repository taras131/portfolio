import styled from "styled-components";

type TWrapper = {
    isActive: boolean
}

const Wrapper = styled.li<TWrapper>`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 15px;
    fill: ${props => props.isActive ? props.theme.colors.accent : props.theme.colors.textSecondary};
  }

  span {
    color: ${props => props.isActive
    ? props.theme.colors.textPrimary
    : props.theme.colors.textSecondary};
  }
`;

export const S = {
    Wrapper
};