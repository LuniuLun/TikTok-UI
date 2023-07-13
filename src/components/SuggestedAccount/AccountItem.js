import classNames from 'classnames/bind';
import styles from './SuggestedAccount.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                alt=""
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3ddd86924e581bf3b393e3c047b1a616~c5_100x100.jpeg?x-expires=1689415200&amp;x-signature=no%2FNu8x6h9qo4krY173THHSdFCs%3D"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>Luka.voice</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <p className={cx('name')}>LUKA VOICE</p>
            </div>
        </div>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
