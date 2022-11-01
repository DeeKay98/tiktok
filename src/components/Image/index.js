import { image } from '@/assets/images';
import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss';

function Image({ src, alt, className, ...props }, ref) {
    const [fallback, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(image.noImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            {...props}
            alt={alt}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
