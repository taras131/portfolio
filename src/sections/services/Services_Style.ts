import styled from "styled-components";

const ListItemWrapper = styled.div`
  min-height: 225px;
  width: 290px;
  flex-grow: 1;
  padding: 30px 25px 20px;
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  overflow: hidden;
  
  p {
    text-align: center;
  }

  div {
    background-color: ${({theme}) => theme.colors.backgroundPrimary};
    height: 100%;
    width: 100%;
    padding: 30px 25px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: absolute;
    top: 100%;
    transition: all .5s ease;
  }

  &:hover div {
    transform: translateY(-100%);
  }
`;

export const S = {
    ListItemWrapper
};