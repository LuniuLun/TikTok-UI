import classNames from 'classnames/bind';
import style from './Email_Phone_ID.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
const cx = classNames.bind(style);

function PhoneRegister({ day, month, year, handleClose }) {
    const [phoneInput, setPhoneInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const submitRef = useRef();
    const [submitActive, setSubmitActive] = useState(false);

    useEffect(() => {
        if (phoneInput !== '' && passwordInput !== '' && day !== '' && month !== '' && year !== '') {
            setSubmitActive(true);
        } else {
            setSubmitActive(false);
        }
    }, [phoneInput, passwordInput, day, month, year]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (phoneInput !== '' && passwordInput !== '' && day !== '' && month !== '' && year !== '') {
            axios
                .post(
                    'http://127.0.0.1:8000/api/users/store',
                    {
                        phone: phoneInput,
                        email: null,
                        password: passwordInput,
                        full_name: phoneInput,
                    },
                    {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                    },
                )
                .then((response) => {
                    if (response.data) {
                        handleClose();
                    } else {
                        //
                    }
                })
                .catch((error) => {
                    console.log("Can't connect API: ", error);
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
            <button
                ref={submitRef}
                type="Submit"
                className={cx('ok', {
                    active: submitActive,
                    disable: !submitActive,
                })}
            >
                Tiếp tục
            </button>
        </form>
    );
}

export default PhoneRegister;
