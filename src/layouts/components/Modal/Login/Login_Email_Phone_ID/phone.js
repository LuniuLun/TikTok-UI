import classNames from 'classnames/bind';
import style from './Email_Phone_ID.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
const cx = classNames.bind(style);

function PhoneLogin({ onSubmitLogin }) {
    const [phoneInput, setPhoneInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const submitRef = useRef();
    const [submitActive, setSubmitActive] = useState(false);

    useEffect(() => {
        if (phoneInput !== '' && passwordInput !== '') {
            setSubmitActive(true);
        } else {
            setSubmitActive(false);
        }
    }, [phoneInput, passwordInput]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (phoneInput !== '' && passwordInput !== '') {
            axios
                .post(
                    'http://127.0.0.1:8000/api/users/login',
                    {
                        phone: phoneInput,
                        password: passwordInput,
                    },
                    {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                    },
                )
                .then((response) => {
                    if (response.data === null) {
                        onSubmitLogin(null);
                        console.log('Tài khoản hoặc mật khẩu sai.');
                    } else {
                        onSubmitLogin(response.data.user);
                    }
                })
                .catch((error) => {
                    console.log('Không thể kết nối API:', error);
                });
        }
    };

    return (
        <form onSubmit={handleSubmit} className={cx('wrapper')}>
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
        </form>
    );
}

export default PhoneLogin;
