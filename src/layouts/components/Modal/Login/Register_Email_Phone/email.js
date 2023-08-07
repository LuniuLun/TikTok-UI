import classNames from 'classnames/bind';
import style from './Email_Phone_ID.module.scss';
import { memo, useEffect, useRef, useState } from 'react';
import axios from 'axios';
const cx = classNames.bind(style);

function EmailRegister({ day, month, year, handleClose }) {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const submitRef = useRef();
    const [submitActive, setSubmitActive] = useState(false);

    useEffect(() => {
        if (emailInput !== '' && passwordInput !== '' && day !== '' && month !== '' && year !== '') {
            setSubmitActive(true);
        } else {
            setSubmitActive(false);
        }
    }, [emailInput, passwordInput, day, month, year]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (emailInput !== '' && passwordInput !== '' && day !== '' && month !== '' && year !== '') {
            axios.post(
                'http://127.0.0.1:8000/api/users/store',
                {
                    email: emailInput,
                    phone: null,
                    password: passwordInput,
                    full_name: emailInput.split('@')[0],
                },
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                },
            ).then((response) => {
                if(response.data) {
                    handleClose()
                }else {
                    console.log("Can't add user");
                }
            }).catch(error => {
                console.log("Can't connect API :", error);
            })
        }
    };
    return (
        <div className={cx('wrapper')}>
            <input
                type="email"
                className={cx('email')}
                placeholder="Email"
                onChange={(e) => setEmailInput(e.target.value)}
            />
            <input
                type="password"
                className={cx('password')}
                placeholder="Mật khẩu"
                onChange={(e) => setPasswordInput(e.target.value)}
            />
            <button
                ref={submitRef}
                type="Submit"
                className={cx('ok', {
                    active: submitActive,
                })}
                onClick={handleSubmit}
            >
                Tiếp tục
            </button>
        </div>
    );
}

export default memo(EmailRegister);
