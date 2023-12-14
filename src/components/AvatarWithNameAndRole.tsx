import React, {FC} from 'react';
import {TAuthor} from "../models/TRecommendations";
import styled from "styled-components";

type TProps = {
    author: TAuthor
}

export const AvatarWithNameAndRole: FC<TProps> = ({author}) => {
    return (
        <Wrapper>
            <Photo src={author.imgPath} alt={"avatar"}/>
            <div>
                <h4>{author.name}</h4>
                <span>{author.role}</span>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  h4 {
    margin-bottom: 5px;
  }

  span {
    color: ${({theme}) => theme.colors.textSecondary};
  }
`
const Photo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;
`



