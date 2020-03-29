import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Heading} from "./components";
import Routes from './Routes';

export default () => (<BrowserRouter>
    <Heading/>
    <Routes/>
</BrowserRouter>);
