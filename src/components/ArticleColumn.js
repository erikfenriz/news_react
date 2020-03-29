import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faSave} from "@fortawesome/free-solid-svg-icons";

const ArticleColumn = ({article, width, image, url}) => {
    const {
        containerStyles,
        editFormStyles,
        imageStyles,
        formContainerStyles,
        editFormInputStyles,
        containerSingleColumnStyles
    } = styles;

    const location = useLocation();

    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(article);

    const handleChange = (e) => setTitle(e.target.value);

    const toggleForm = () => setIsEditing((prevState => !prevState));

    const calculateWidth = () => ({width: width * 100 / 12 + '%'});

    if (location.pathname === '/') {
        return isEditing ?
            (
                <div style={Object.assign({}, containerStyles,
                    calculateWidth())}>
                    <div style={formContainerStyles}>
                        <form style={editFormStyles}>
                        <textarea style={editFormInputStyles}
                                  name="article"
                                  value={title}
                                  onChange={handleChange}
                        />
                            <button style={styles.buttonStyles} onClick={toggleForm}>
                                <FontAwesomeIcon icon={faSave}/>
                            </button>
                            <a href={url}>
                                <img style={imageStyles} src={image + '&height=100'} alt={image}/>
                            </a>
                        </form>
                    </div>
                </div>
            ) : (
                <div style={Object.assign({}, containerStyles,
                    calculateWidth())}>
                    <div style={formContainerStyles}>
                        <p style={{width: 200}}>{title}</p>
                        <button style={styles.buttonStyles} onClick={toggleForm}>
                            <FontAwesomeIcon icon={faEdit}/>
                        </button>
                        <a href={url}>
                            <img style={imageStyles} src={image + '&height=100'} alt={image}/>
                        </a>
                    </div>
                </div>
            );
    } else {
        return (
            <div style={containerSingleColumnStyles}>
                <a href={url}>
                    <p>{article}</p>
                </a>
            </div>
        )
    }
};

const styles = {
    containerStyles: {
        margin: 5,
        background: 'rgba(125,125,125,0.1)',
    },
    containerSingleColumnStyles: {
        margin: 5,
        background: 'rgba(125,125,125,0.1)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    formContainerStyles: {
        display: 'flex',
        alignItems: 'center'
    },
    buttonStyles: {
        border: 'none',
        fontSize: '1em',
        margin: '0.4em',
        background: 'none',
        cursor: 'pointer',
        color: "#000000"
    },
    imageStyles: {
        width: '100%'
    },
    editFormStyles: {
        display: 'flex',
        alignSelf: 'center',
    },
    editFormInputStyles: {
        border: 'none',
        background: "#ffffff",
        fontSize: 'initial',
        width: 200
    }
};

export default ArticleColumn;
