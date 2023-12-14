import React, {FC} from 'react';
import styled from "styled-components";
import {TBlog} from "../../models/TBlog";
import {Button} from "../../components/Button";
import {Icon} from "../../components/Icon";

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
                <Button variant={"text"}
                        fontSizePx={18}
                        fontWeight={500}
                        gapPx={1}
                        as={"a"}
                        href={"#"}>
                    Learn more
                    <Icon iconId={"rightArrow"} height={20} width={20}/>
                </Button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.li`
  max-width: 310px;
  width: 100%;
  min-height: 474px;
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};

  img {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }

  div {
    padding: 25px 25px 18px 25px;

    p {
      margin-top: 8px;
      margin-bottom: 9px;
      line-height: 24px; /* 160% */
    }

    a {
      width: 120px;
    }
  }
`

