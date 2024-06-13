

// import React from 'react';
// import './ImageStyles.css'; // Import your separate image styles CSS file

// const ImageComponent = ({ src, alt, className, style, ...restProps }) => {
//     return <img src={src} alt={alt} className={className} style={style} {...restProps} />;
// };

// export default ImageComponent;

// ImageComponent.js

import React from 'react';
import './ImageStyles.css'; // Import your separate image styles CSS file

const ImageComponent = ({ src, alt, className, style, borderRadius, ...restProps }) => {
    const imageStyle = {
        ...style,
        borderRadius: borderRadius || '50%', // Default to 50% if borderRadius prop is not provided
    };

    return <img src={src} alt={alt} className={className} style={imageStyle} {...restProps} />;
};

export default ImageComponent;


