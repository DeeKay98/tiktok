import PropTypes from 'prop-types';
import { image } from '@/assets/images';
import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss';

function Image({ src, alt, className, fallback: customFallback = image.noImage, ...props }, ref) {
    const [fallback, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallback);
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

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default forwardRef(Image);
