import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Input = memo(({className, type, placeholder}) => {
    return (
        <div>
            <input
                type={type}
                className={className}
                placeholder={placeholder}
            >
            </input>    
        </div>
    );
});

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string
};

export default Input;