import React, {useEffect, useState} from 'react';
import {ArticleRow} from '../components/';
import {v4 as uuid} from 'uuid';
import {useRequest, useMountEffect} from '../hooks';

const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    const [getApi, results] = useRequest();

    useMountEffect(getApi);

    useEffect(() => {
        setArticles(results);
    }, [results]);

    const renderArticles = articles.map(row =>
        <ArticleRow
            key={uuid()}
            articleRow={row}
        />
    );

    return (
        <div style={styles.containerStyle}>
            {articles.length !== 0 ? renderArticles : null}
        </div>
    )
};

const styles = {
    containerStyle: {
        maxWidth: '100%',
        color: '#3e3e3e',
    },
    headingStyle: {
        fontWeight: 'normal',
        fontSize: "2.6rem",
        letterSpacing: "0.05em",
        borderBottom: '1px solid #eeeeee',
    }
};

export default ArticlesList;
