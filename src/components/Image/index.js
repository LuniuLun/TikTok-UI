import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import style from './image.module.scss';
import images from '~/assets/images';
// khong su li ref thi tippy se khong get duoc element de lay vi tri xuat hien tooltip
const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(images.noImage);
    };
    return (
        <img
            className={(style.wrapper, className)}
            src={fallback || src}
            alt={alt}
            ref={ref}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
};

export default Image;
