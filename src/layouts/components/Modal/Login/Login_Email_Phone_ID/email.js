import classNames from 'classnames/bind';
import style from './Email_Phone_ID.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
const cx = classNames.bind(style);

function EmailLogin({onSubmitLogin}) {
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
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (emailInput !== '' && passwordInput !== '') {
            axios
                .post(
                    'http://127.0.0.1:8000/api/users/login',
                    {
                        email: emailInput,
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
        <div className={cx('wrapper')}>
            <div className={cx('email')}>
                <input
                    type='email'
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
                })}
                onClick={handleSubmit}
            >
                Đăng nhập
            </button>
        </div>
    );
}

export default EmailLogin;
