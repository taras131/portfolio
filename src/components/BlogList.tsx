import React, {FC} from 'react';
import {TBlog} from "../models/TBlog";
import styled from "styled-components";
import {BlogListItem} from "./BlogListItem";

type TProps = {
    blogs: TBlog []
}

export const BlogList: FC<TProps> = ({blogs}) => {
    const blogsList = blogs.map(blog => (<BlogListItem key={blog.id} blog={blog}/>))
    return (
        <Wrapper>
            {blogsList}
        </Wrapper>
    );
};

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`
