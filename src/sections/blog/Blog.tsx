import React, {FC} from 'react';
import {TemplateSection} from "../../components/TemplateSection";
import {blogDescription, blogs, blogTitle} from "../../utils/consts";
import {BlogList} from "./BlogList";

export const Blog: FC = () => {
    return (
        <TemplateSection sectionTitle={blogTitle}
                         sectionDescription={blogDescription}
        >
            <BlogList blogs={blogs}/>
        </TemplateSection>
    );
};

