import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './DetailLayout.module.scss';
import HeaderWthSearch from './HeaderWthSearch/';
import Footer from '../Components/Footer/Footer';
const cx = classNames.bind(style);
function DetailLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderWthSearch></HeaderWthSearch>
            <div className={cx('content')}>{children}</div>
            <Footer></Footer>
        </div>
    );
}

DetailLayout.propTypes = {
    children: PropTypes.object.isRequired,
};
export default DetailLayout;
