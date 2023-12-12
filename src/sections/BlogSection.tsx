import React, {FC} from 'react';
import {TemplateSection} from "./TemplateSection";
import {blogDescription, blogs, blogTitle} from "../utils/consts";
import {BlogList} from "../components/BlogList";

export const BlogSection: FC = () => {
    return (
        <TemplateSection sectionTitle={blogTitle}
                         sectionDescription={blogDescription}
        >
            <BlogList blogs={blogs}/>
        </TemplateSection>
    );
};

