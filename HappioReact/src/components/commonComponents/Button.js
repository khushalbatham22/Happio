import React from 'react';
import PropTypes from 'prop-types';

const Button = React.memo(({ className, onClick, children }) => {
    return (
        <>
            <button
                className={className}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    );
});

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
};

export default Button;