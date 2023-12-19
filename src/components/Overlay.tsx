import styled from "styled-components";

type TStyledProps = {
    isShowProfile: boolean
}

export const Overlay = styled.div<TStyledProps>`
  display: ${props => props.isShowProfile ? "block" : "none"};
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`