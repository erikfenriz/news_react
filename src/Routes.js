import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {ArticlesList} from './pages';

export default () => {
    return (
            <Switch>
                <Route exact path="/" component={ArticlesList}/>
                <Route exact path="/column" component={ArticlesList}/>
            </Switch>
    )
};

