import React, {FC} from 'react';
import styled from "styled-components";
import {TBlog} from "../models/TBlog";

type TProps = {
    blog: TBlog
}

export const BlogListItem: FC<TProps> = ({blog}) => {
    return (
        <Wrapper>
            <img src={blog.imgPath} alt={"blog_screen"}/>
            <div>
                <h3>{blog.title}</h3>
                <p>{blog.text}</p>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.li`
  width: 310px;
  height: 474px;
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};

  & img {
    width: 100%;
    height: 300px;
  }

  & div {
    padding: 25px 25px 18px 25px;

    & h3 {
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 123.6%; /* 22.248px */
      text-transform: capitalize;
    }

    & p {
      margin-top: 8px;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 160% */
      text-transform: capitalize;
      color: ${({theme}) => theme.colors.black.secondary}
    }
  }
`

