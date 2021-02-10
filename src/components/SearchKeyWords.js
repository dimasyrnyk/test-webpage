import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export default function SearchKeyWords({ title, id, onRemoveKeyWord }) {

    const handleClick = e => {
        e.preventDefault();
        onRemoveKeyWord(id);
    }

    return (
        <span
            className="search__keyword"
        >
            {title}
            <FontAwesomeIcon icon={faBackspace}
                className="search__remove-button"
                onClick={handleClick}
            />
        </span>
    );
}

SearchKeyWords.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onRemoveKeyWord: PropTypes.func.isRequired
}