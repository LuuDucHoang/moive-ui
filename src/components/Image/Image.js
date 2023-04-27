import { forwardRef } from 'react';
import classNames from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from '~/components/Image/Image.module.scss';

function Image({ src, alt, className, ...props }, ref) {
    return (
        <LazyLoadImage
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={src}
            alt={alt}
            {...props}
        ></LazyLoadImage>
    );
}

export default forwardRef(Image);
