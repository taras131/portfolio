import React, {FC} from 'react';
import {Button} from "../../components/Button";
import {Icon} from "../../components/Icon";
import styled from "styled-components";
import myPhoto from "../../assets/images/my_photo.png";
import backgroundImage from "../../assets/images/headerBackground.png";
import {spriteIds} from "../../utils/consts";

export const Header: FC = () => {
    return (
        <Wrapper>
            <MyName>I’m Taras Zverev</MyName>
            <h1><span> Front-end </span>Developer</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis.
                Natoque rutrum semper sed suspendisse nunc lectus.
            </p>
            <Button as={"a"}
                    href={"#"}
                    variant={"contained"}
                    borderRadiusPx={5}
                    fontSizePx={16}
                    heightPx={50}
                    fontWeight={500}>
                HIRE ME
                <Icon iconId={spriteIds.arrow} height={16} width={16}/>
            </Button>
            <Photo src={myPhoto} alt="my_photo"/>
        </Wrapper>
    );
};

const Wrapper = styled.header`
  margin-bottom: 70px;
  padding: 95px 60px 75px 60px;
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  position: relative;

  h1 {
    font-size: 48px;
    font-weight: 700;

    span {
      font-size: 48px;
      font-weight: 700;
      color: ${({theme}) => theme.colors.accent};
    }
  }

  p {
    margin-top: 18px;
    margin-bottom: 40px;
    max-width: 424px;
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    line-height: 24px;
    color: ${({theme}) => theme.colors.textSecondary}
  }
`

const MyName = styled.span`
  font-size: 48px;
  font-weight: 700;
`;

const Photo = styled.img`
  object-fit: cover;
  position: absolute;
  right: 60px;
  bottom: 0;
`