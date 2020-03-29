import React from 'react';
import {ArticleColumn} from "./";
import {useLocation} from "react-router-dom";

const ArticleRow = ({articleRow}) => {
    const location = useLocation();

    const renderArticles = () => {
        return articleRow.columns.map(item => {
            return (
                <ArticleColumn
                    key={item.url}
                    article={item.title}
                    width={item.width}
                    image={item.imageUrl}
                    url={item.url}
                />
            )
        });
    };

    return (
        <div style={location.pathname === '/' ? {display: 'flex'} : {display: 'block'}}>
            {renderArticles()}
        </div>
    )
};

export default ArticleRow;
