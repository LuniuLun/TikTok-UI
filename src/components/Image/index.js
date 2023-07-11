import { forwardRef, useState } from 'react';
import style from './image.module.scss';
import classNames from 'classnames';
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

export default Image;
