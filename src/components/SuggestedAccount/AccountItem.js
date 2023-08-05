import classNames from 'classnames/bind';
import styles from './SuggestedAccount.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview src="https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg" />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} placement="bottom" offset={[-20, 0]} render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        alt=""
                        src="https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Luka.voice</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>LUKA VOICE</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
