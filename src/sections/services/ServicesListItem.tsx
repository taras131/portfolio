import React, {FC} from 'react';
import styled from "styled-components";
import {Icon} from "../../components/Icon";
import {Button} from "../../components/Button";

type TProps = {
    title: string
    subtitle: string
    iconId?: string
}

export const ServicesListItem: FC<TProps> = ({title, subtitle, iconId}) => {
    return (
        <Wrapper>
            {iconId && (<Icon iconId={iconId}/>)}
            <h3>{title}</h3>
            <p>{subtitle}</p>
            {!iconId && (
                <Button variant={"text"} as={"a"} href={"#"} fontSizePx={12} fontWeight={700} gapPx={1}>
                    ORDER NOW
                    <Icon iconId={"rightArrow"} height={20} width={20}/>
                </Button>
            )}
        </Wrapper>
    );
};

type WrapperProps = {
    iconId?: string
}

const Wrapper = styled.li<WrapperProps>`
  min-height: 225px;
  width: 310px;
  flex-grow: 1;
  padding: 30px 25px 20px 25px;
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  
  p {
    text-align: center;
  }
`;

