import React, {FC} from 'react';
import styled from "styled-components";
import sprite from "../assets/icons/icons-sprite.svg"

type TProps = {
    title: string
    subtitle: string
    iconId?: string
}

export const ServicesListItem: FC<TProps> = ({title, subtitle, iconId}) => {
    return (
        <Wrapper>
            {iconId && (
                <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={`${sprite}#${iconId}`}/>
                </svg>
            )}
            <h3>{title}</h3>
            <p>{subtitle}</p>
            {!iconId && (
                <button>
                    ORDER NOW
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <use xlinkHref={`${sprite}#rightArrow`}/>
                    </svg>
                </button>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.li`
  height: 225px;
  width: 310px;
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;

  & h3 {
    margin-top: 25px;
  }

  & p {
    margin-top: 15px;
  }

  & button {
    color: ${({theme}) => theme.colors.primary};
    margin-top: 20px;
    display: flex;
    align-items: center;
  }

  & button:hover svg {
    margin-left: 10px;
  }
`

