import React from 'react';
import './ImageStyles.css'; // Import your separate image styles CSS file

const ImageComponent = ({ src, alt, className, style, ...restProps }) => {
    // Define default props
    const defaultClassName = "image"; // Default CSS class
    const defaultStyle = {}; // Default inline styles

    // Combine provided and default props
    const combinedClassName = className ? `${defaultClassName} ${className}` : defaultClassName;
    const combinedStyle = { ...defaultStyle, ...style };

    return (
        <img
            src={src}
            alt={alt}
            className={combinedClassName}
            style={combinedStyle}
            {...restProps}
        />
    );
};

export default ImageComponent;
