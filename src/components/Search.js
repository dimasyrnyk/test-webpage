import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


export default function Search({ onProductSearch }) {
    const [searchValue, setSearchValue] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const isMobile = useMediaQuery({ query: '(max-width: 577px)' });

    const handleChange = e => {
        setSearchValue(e.target.value);
    }

    const handleKeyPress = e => {
        if (e.key === 'Enter' && searchValue !== '') {
            onProductSearch((searchValue).toLowerCase());
            setSearchValue('');
        }
    }

    const handleClick = e => {
        e.preventDefault();
        if (isMobile && showSearch) {
            if (searchValue !== '') {
                setSearchValue('');
                setShowSearch(false);
                onProductSearch((searchValue).toLowerCase());
            } else {
                setShowSearch(false);
            }
        } else if (isMobile && !showSearch) {
            setShowSearch(true);
        }
        else {
            if (searchValue !== '') {
                onProductSearch((searchValue).toLowerCase());
                setSearchValue('');
            }
        }
    }


    if (isMobile) {
        return (
            <span className={showSearch ? "search-mobile": "search"}>
                <input
                    className={showSearch ? "search__input-mobile": "search__input"}
                    type="text"
                    value={searchValue}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Search"
                />
                <span
                    className="search__button"
                    onClick={handleClick}
                    
                >
                    <FontAwesomeIcon icon={faSearch} />
                </span>
            </span>
        );
    }

    return (
        <span className="search">
            <input
                className="search__input"
                type="text"
                value={searchValue}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="Search"
            />
            <span
                className="search__button"
                onClick={handleClick}
                
            >
                <FontAwesomeIcon icon={faSearch} />
            </span>
        </span>
    );
}

Search.propTypes = {
    onProductSearch: PropTypes.func.isRequired
}