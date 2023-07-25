import classNames from 'classnames/bind';
import style from './Email_Phone_ID.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
const cx = classNames.bind(style);
function EmailLogin() {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const submitRef = useRef();
    const [submitActive, setSubmitActive] = useState(false);

    useEffect(() => {
        if (emailInput !== '' && passwordInput !== '') {
            setSubmitActive(true);
        } else {
            setSubmitActive(false);
        }
    }, [emailInput, passwordInput]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('email')}>
                <input
                    className={cx('email-input')}
                    placeholder="Email hoặc TikTok ID"
                    onChange={(e) => setEmailInput(e.target.value)}
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

export default EmailLogin;
