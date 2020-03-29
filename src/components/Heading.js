import React from 'react';
import {NavLink} from "react-router-dom";

const Heading = () => {
    const {containerStyle, headingStyle, listStyle, linkStyle, linkActiveStyle} = styles;
    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Magazine</h1>
            <nav>
                <ul style={listStyle}>
                    <li>
                        <NavLink
                            to={'/'}
                            exact
                            style={linkStyle}
                            activeStyle={linkActiveStyle}
                        >
                            Formatted Columns
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/column'}
                                 exact
                                 style={linkStyle}
                                 activeStyle={linkActiveStyle}
                        >
                            Singular Column
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

const styles = {
    containerStyle: {
        maxWidth: '100%',
        padding: "2rem 3rem 1rem",
        color: '#3e3e3e',
        borderBottom: '1px solid #eeeeee',
    },
    headingStyle: {
        fontWeight: 'normal',
        fontSize: "2.6rem",
        letterSpacing: "0.05em",
    },
    listStyle: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space around'
    },
    linkStyle: {
        margin: 10,
        color: "#000",
        textDecoration: 'none'
    },
    linkActiveStyle: {
        color: "orange"
    }
};

export default Heading;
