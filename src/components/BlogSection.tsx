import React from 'react';
import {TemplateSection} from "./TemplateSection";
import {blogDescription, blogs, blogTitle} from "../utils/consts";
import {BlogList} from "./BlogList";

export const BlogSection = () => {
    return (
        <TemplateSection sectionTitle={blogTitle}
                         sectionDescription={blogDescription}>
            <BlogList blogs={blogs}/>
        </TemplateSection>
    );
};

