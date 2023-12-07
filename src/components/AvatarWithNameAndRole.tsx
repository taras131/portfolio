import React, {FC} from 'react';
import {TAuthor} from "../models/TRecommendations";
import styled from "styled-components";

type TProps = {
    author: TAuthor
}

export const AvatarWithNameAndRole: FC<TProps> = ({author}) => {
    return (
        <Wrapper>
            <Avatar>
                <img src={author.imgPath} alt={"avatar"}/>
            </Avatar>
            <Description>
                <h4>{author.name}</h4>
                <p>{author.role}</p>
            </Description>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
`
const Avatar = styled.div`
  width: 80px;
  height: 80px;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 80px;
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-top: 18px;

  & h4 {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 123.6%;
    text-transform: capitalize;
    color: ${({theme}) => theme.colors.black.primary}
  }

  & p {
    margin-top: 5px;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
    color: ${({theme}) => theme.colors.black.secondary}
  }
`

