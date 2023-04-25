import className from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './Footer.module.scss';
import Image from '~/components/Image';
const cx = className.bind(style);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('withWrapper')}>
                <div>
                    <Link to={'/'}>
                        <Image
                            className={cx('footerLogo')}
                            src="https://img.hdtoday.tv/xxrz/400x400/100/c4/93/c49337aa9c92d6fbf56b6b5830c6849c/c49337aa9c92d6fbf56b6b5830c6849c.png"
                        ></Image>
                    </Link>
                    <p className={cx('coppyRight')}>© HDToday</p>
                </div>
                <div className={cx('fix')}>
                    <div className={cx('aboutUs')}>
                        <p className={cx('aboutHeader')}>
                            HDToday is a Free Movies streaming site with zero ads. We let you watch movies online
                            without having to register or paying, with over 10000 movies and TV-Series. You can also
                            Download full movies from HDToday and watch it later if you want.
                        </p>
                        <div className={cx('footerMenu')}>
                            <Link className={cx('menuItem')}>
                                <span>Android App</span>
                            </Link>
                            <span className={cx('space')}>-</span>
                            <Link className={cx('menuItem')}>
                                <span>Terms of service</span>
                            </Link>
                            <span className={cx('space')}>-</span>
                            <Link className={cx('menuItem')}>
                                <span>Contact</span>
                            </Link>
                            <span className={cx('space')}>-</span>
                            <Link className={cx('menuItem')}>
                                <span>Sitemap</span>
                            </Link>
                        </div>
                    </div>
                    <div className={cx('notice')}>
                        <span className={cx('noticeDetail')}>
                            HDToday does not store any files on our server, we only linked to the media which is hosted
                            on 3rd party services.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
