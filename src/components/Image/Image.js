import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import styles from '~/components/Image/Image.module.scss';

function Image({ src, alt, className, ...props }, ref) {
    return (
        <img
            loading="lazy"
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={src}
            alt={alt}
            {...props}
        ></img>
    );
}

export default forwardRef(Image);
