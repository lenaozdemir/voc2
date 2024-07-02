import React from 'react';
import { Link } from 'react-router-dom';

const WordClick = ({word}) => {

    return (
        <Link to={`/word/${word.id}`}>
            {word.english}
        </Link>
    );
};

export default WordClick;