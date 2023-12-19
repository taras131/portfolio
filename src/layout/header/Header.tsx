import React, {FC} from 'react';
import {Button} from "../../components/Button";
import {Icon} from "../../components/Icon";
import styled from "styled-components";
import myPhoto from "../../assets/images/my_photo.webp";
import backgroundImage from "../../assets/images/headerBackground.png";
import {spriteIds} from "../../utils/consts";
import {Burger} from "./Burger";

type TProps = {
    toggleIsShowProfile: () => void
}

export const Header: FC<TProps> = ({toggleIsShowProfile}) => {
    return (
        <Wrapper>
            <Burger handleClick={toggleIsShowProfile}/>
            <Info>
                <MyName>I’m Taras Zverev</MyName>
                <h1><span> Front-end </span>Developer</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis.
                    Natoque rutrum semper sed suspendisse nunc lectus.
                </p>
                <Button as={"a"}
                        href={"#contacts"}
                        variant={"contained"}
                        borderRadiusPx={5}
                        fontSizePx={16}
                        heightPx={50}
                        fontWeight={500}>
                    HIRE ME
                    <Icon iconId={spriteIds.arrow} height={16} width={16}/>
                </Button>
            </Info>
            <Photo src={myPhoto} alt="my_photo"/>
        </Wrapper>
    );
};

const Wrapper = styled.header`
  margin-bottom: 70px;
  padding-top: 95px;
  width: 100%;
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media screen and (max-width: 1326px) {
    justify-content: center;
  }

  @media screen and (max-width: 1188px) {
    p {
      margin-top: 90px;
      max-width: 280px;
    }
  }

  @media ${({theme}) => theme.media.mobile} {
    margin-bottom: 20px;
  }
`
const Info = styled.div`
  padding-bottom: 74px;
  padding-left: 60px;

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
    margin-bottom: 35px;
    max-width: 424px;
    font-size: 16px;
  }

  @media screen and (max-width: 1388px) {
    padding-left: 30px;
  }
  @media screen and (max-width: 1326px) {
    padding-right: 30px;
  }
`

const MyName = styled.span`
  font-size: 48px;
  font-weight: 700;
`;

const Photo = styled.img`

  width: 325px;
  height: 457px;
  object-fit: cover;

`