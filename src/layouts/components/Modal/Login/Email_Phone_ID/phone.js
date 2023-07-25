import classNames from 'classnames/bind';
import style from './Email_Phone_ID.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
const cx = classNames.bind(style);

function PhoneLogin() {
    const [phoneInput, setPhoneInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const submitRef = useRef();
    const [submitActive, setSubmitActive] = useState(false);

    useEffect(() => {
        if (phoneInput !== '' && passwordInput !== '') {
            setSubmitActive(true);
        }else {
            setSubmitActive(false);
        }
    }, [phoneInput, passwordInput]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('phone')}>
                <button className={cx('phone-option')}>
                    VN +84
                    <FontAwesomeIcon icon={faCaretDown} className={cx('icon-option')} />
                </button>
                <input
                    className={cx('phone-input')}
                    placeholder="Số điện thoại"
                    onChange={(e) => setPhoneInput(e.target.value)}
                />
            </div>
            <input
                type="password"
                className={cx('password')}
                placeholder="Mật khẩu"
                onChange={(e) => setPasswordInput(e.target.value)}
            />
            <Link hrefLang="#" className={cx('forgetpw-link')}>
                Quên mật khẩu ?
            </Link>
            <button
                ref={submitRef}
                type="Submit"
                className={cx('ok', {
                    active: submitActive,
                    disable: !submitActive,
                })}
            >
                Đăng nhập
            </button>
        </div>
    );
}

export default PhoneLogin;
