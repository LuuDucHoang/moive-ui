import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-regular-svg-icons';
import {
    faFacebook,
    faTwitter,
    faWhatsapp,
    faFacebookMessenger,
    faReddit,
    faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

import style from './Social.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(style);
function Social({ mt30, mt0 }) {
    return (
        <div className={cx('wrapper', { mt30, mt0 })}>
            <Button
                className={cx('btn', {
                    fb: 'fb',
                })}
                leftIcon={<FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>}
            >
                641
            </Button>
            <Button
                className={cx('btn', {
                    tw: 'tw',
                })}
                leftIcon={<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>}
            >
                641
            </Button>
            <Button
                className={cx('btn', {
                    ws: 'ws',
                })}
                leftIcon={<FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>}
            >
                641
            </Button>
            <Button
                className={cx('btn', {
                    mess: 'mess',
                })}
                leftIcon={<FontAwesomeIcon icon={faFacebookMessenger}></FontAwesomeIcon>}
            >
                641
            </Button>{' '}
            <Button
                className={cx('btn', {
                    red: 'red',
                })}
                leftIcon={<FontAwesomeIcon icon={faReddit}></FontAwesomeIcon>}
            >
                641
            </Button>
            <Button
                className={cx('btn', {
                    tele: 'tele',
                })}
                leftIcon={<FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon>}
            ></Button>
        </div>
    );
}

Social.propTypes = {
    mt0: PropTypes.bool,
    mt30: PropTypes.bool,
};
export default Social;
