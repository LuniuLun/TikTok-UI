import classNames from 'classnames/bind';
import style from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faCaretDown, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { QRCode, UserIcon } from '~/components/Icon';
import { memo } from 'react';
import { useState } from 'react';
import images from '~/assets/images';
import EmailLogin from './Login_Email_Phone_ID/email';
import PhoneLogin from './Login_Email_Phone_ID/phone';
import Association from '~/components/Association';
import EmailRegister from './Register_Email_Phone/email';
import PhoneRegister from './Register_Email_Phone/phone';

const cx = classNames.bind(style);
function Login({ isVisible, onClose, onSubmitLogin }) {
    const [openMainForm, setOpenMainForm] = useState(true);
    const [openRegister, setOpenRegister] = useState(false);
    const [openChosingMonth, setOpenChosingMonth] = useState(false);
    const [openChosingDate, setOpenChosingDate] = useState(false);
    const [openChosingYear, setOpenChosingYear] = useState(false);
    const [loginByQR, setLoginByQR] = useState(false);
    const [loginByPhone, setLoginByPhone] = useState(false);
    const [loginByEmail, setLoginByEmail] = useState(true);
    const [registerByPhoneOrEmail, setRegisterByPhoneOrEmail] = useState(true);
    const [registerByEmail, setRegisterByEmail] = useState(false);
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const handleClose = () => {
        setDay('');
        setYear('');
        setMonth('');
        setOpenMainForm(true);
        onClose(false);
        setLoginByQR(false);
        setLoginByPhone(false);
        setOpenRegister(false);
        setRegisterByPhoneOrEmail(false);
        setRegisterByEmail(false);
    };

    const handleLoginQR = () => {
        setOpenMainForm(false);
        setLoginByQR(true);
    };

    const handleLoginByPhoneEmail = () => {
        setOpenMainForm(false);
        setLoginByPhone(true);
    };

    //chuyen doi giua login va register
    const handleChangeForm = () => {
        setOpenRegister(!openRegister);
        setOpenMainForm(true);
        setLoginByQR(false);
        setLoginByPhone(false);
    };

    const handleRegisterByPhoneEmail = () => {
        setRegisterByPhoneOrEmail(true);
        setOpenMainForm(false);
    };

    //login bang email hoac la sdt
    const handleChangeLogin = () => {
        setLoginByEmail(!loginByEmail);
    };

    const handleChangeRegister = () => {
        setRegisterByEmail(!registerByEmail);
    };

    //dau lui
    const handleBack = () => {
        setOpenMainForm(true);
        setLoginByQR(false);
        setLoginByPhone(false);
    };

    return (
        <div
            className={cx('wrapper', {
                visible: isVisible,
            })}
        >
            <div className={cx('container')}>
                <div className={cx('close')}>
                    <button className={cx('close-btn')} onClick={handleClose}>
                        <FontAwesomeIcon icon={faX} />
                    </button>
                </div>
                {openMainForm ? (
                    <>
                        <div className={cx('main-form')}>
                            <h1 className={cx('header')}>{openRegister ? 'Đăng kí TikTok' : 'Đăng nhập vào TikTok'}</h1>
                            <div className={cx('association-list')}>
                                {!openRegister ? (
                                    <button className={cx('association-btn')} onClick={handleLoginQR}>
                                        <div className={cx('content')}>
                                            <QRCode className={cx('logo')} />
                                            <span className={cx('describe')}>Sử dụng mã QR</span>
                                        </div>
                                    </button>
                                ) : (
                                    <></>
                                )}
                                <button
                                    className={cx('association-btn')}
                                    onClick={!openRegister ? handleLoginByPhoneEmail : handleRegisterByPhoneEmail}
                                >
                                    <div className={cx('content')}>
                                        <UserIcon className={cx('logo')} />
                                        <span className={cx('describe')}>Số điện thoại / Email / TikTok ID</span>
                                    </div>
                                </button>
                                <Association />
                            </div>
                        </div>
                        <div className={cx('description')}>
                            Bằng cách tiếp tục, bạn đồng ý với <Link className={cx('link')}>Điều khoản Sử dụng</Link>{' '}
                            của TikTok và xác nhận rằng bạn đã đọc hiểu{' '}
                            <Link className={cx('link')}>Chính sách Quyền riêng tư</Link> của TikTok.
                        </div>
                        <div className={cx('changeMainForm')}>
                            <span>{openRegister ? 'Bạn đã có tài khoản' : 'Bạn không có tài khoản?'}</span>
                            <button className={cx('changeMainForm-btn')} onClick={handleChangeForm}>
                                {openRegister ? 'Đăng nhập' : 'Đăng kí'}
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={cx('back')}>
                            <button className={cx('back-btn')} onClick={handleBack}>
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </button>
                        </div>

                        {loginByQR ? (
                            <>
                                <div className={cx('login')}>
                                    <h1 className={cx('header')}>Đăng nhập bằng mã QR</h1>
                                    <div className={cx('qrLogin')}>
                                        <img src={images.loginImage} alt="loginImage" className={cx('qrImage')} />
                                    </div>
                                    <div className={cx('instruction')}>
                                        <span>1. Quét bằng máy ảnh trên thiết bị di động của bạn</span>
                                        <span>2. Xác nhận đăng nhập hoặc đăng ký</span>
                                    </div>
                                </div>
                                <div className={cx('changeMainForm')}>
                                    <span>Bạn không có tài khoản?</span>
                                    <button className={cx('changeMainForm-btn')} onClick={handleChangeForm}>
                                        Đăng kí
                                    </button>
                                </div>
                            </>
                        ) : (
                            <></>
                        )}

                        {loginByPhone ? (
                            <>
                                <div className={cx('login')}>
                                    <h1 className={cx('header')}>Đăng nhập</h1>
                                    <div className={cx('content')}>
                                        <div className={cx('option')}>
                                            <h4>{!loginByEmail ? 'Email hoặc TikTok ID' : 'Điện thoại'}</h4>
                                            <Link hrefLang="#" className={cx('change')} onClick={handleChangeLogin}>
                                                {loginByEmail
                                                    ? 'Đăng nhập bằng email hoặc TikTok ID'
                                                    : 'Đăng nhập bằng số điện thoại'}
                                            </Link>
                                        </div>
                                        <div className={cx('form-login')}>
                                            {loginByEmail ? (
                                                <PhoneLogin onSubmitLogin={onSubmitLogin} />
                                            ) : (
                                                <EmailLogin onSubmitLogin={onSubmitLogin} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('changeMainForm')}>
                                    <span>Bạn không có tài khoản?</span>
                                    <button className={cx('changeMainForm-btn')} onClick={handleChangeForm}>
                                        Đăng kí
                                    </button>
                                </div>
                            </>
                        ) : (
                            <></>
                        )}

                        {registerByPhoneOrEmail ? (
                            <>
                                <div className={cx('register')}>
                                    <h1 className={cx('header')}>Đăng kí</h1>
                                    <div className={cx('body')}>
                                        <div className={cx('birth')}>
                                            <span className={cx('birth-question')}>Ngày sinh của bạn là ngày nào?</span>
                                            <div className={cx('birth-selection')}>
                                                <div>
                                                    <button
                                                        className={cx('timeSelect-btn')}
                                                        onClick={() => {
                                                            setOpenChosingDate(false);
                                                            setOpenChosingYear(false);
                                                            setOpenChosingMonth(!openChosingMonth);
                                                        }}
                                                    >
                                                        <input
                                                            readOnly
                                                            className={cx('show-time')}
                                                            placeholder="Tháng"
                                                            value={'Tháng ' + month}
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faCaretDown}
                                                            className={cx('icon-option')}
                                                        />
                                                    </button>
                                                    {openChosingMonth ? (
                                                        <div className={cx('list-items')}>
                                                            {Array.from({ length: 12 }, (_, index) => (
                                                                <button
                                                                    key={index}
                                                                    className={cx('item')}
                                                                    value={index + 1}
                                                                    onClick={(e) => {
                                                                        setMonth(e.target.value);
                                                                        setOpenChosingMonth(false);
                                                                    }}
                                                                >
                                                                    Tháng {index + 1}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </div>
                                                <div>
                                                    <button
                                                        className={cx('timeSelect-btn')}
                                                        onClick={() => {
                                                            setOpenChosingMonth(false);
                                                            setOpenChosingYear(false);
                                                            setOpenChosingDate(!openChosingDate);
                                                        }}
                                                    >
                                                        <input
                                                            readOnly
                                                            className={cx('show-time')}
                                                            placeholder="Ngày"
                                                            value={day}
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faCaretDown}
                                                            className={cx('icon-option')}
                                                        />
                                                    </button>
                                                    {openChosingDate ? (
                                                        <div className={cx('list-items')}>
                                                            {Array.from({ length: 31 }, (_, index) => (
                                                                <button
                                                                    key={index}
                                                                    className={cx('item')}
                                                                    value={index + 1}
                                                                    onClick={(e) => {
                                                                        setDay('Ngày ' + e.target.value);
                                                                        setOpenChosingDate(false);
                                                                    }}
                                                                >
                                                                    {index + 1}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </div>
                                                <div>
                                                    <button
                                                        className={cx('timeSelect-btn')}
                                                        onClick={() => {
                                                            setOpenChosingMonth(false);
                                                            setOpenChosingDate(false);
                                                            setOpenChosingYear(!openChosingYear);
                                                        }}
                                                    >
                                                        <input
                                                            readOnly
                                                            className={cx('show-time')}
                                                            placeholder="Năm"
                                                            value={year}
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faCaretDown}
                                                            className={cx('icon-option')}
                                                        />
                                                    </button>
                                                    {openChosingYear ? (
                                                        <div className={cx('list-items')}>
                                                            {Array.from(Array(101).reverse(), (_, index) => (
                                                                <button
                                                                    key={index}
                                                                    className={cx('item')}
                                                                    value={2022 - index}
                                                                    onClick={(e) => {
                                                                        setYear(e.target.value);
                                                                        setOpenChosingYear(false);
                                                                    }}
                                                                >
                                                                    Tháng {2022 - index}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </div>
                                            </div>
                                            <span className={cx('brith-note')}>
                                                Ngày sinh của bạn sẽ không được hiển thị công khai.
                                            </span>
                                        </div>
                                        <div className={cx('option')}>
                                            <h4>{!registerByEmail ? 'Email' : 'Điện thoại'}</h4>
                                            <Link hrefLang="#" className={cx('change')} onClick={handleChangeRegister}>
                                                {registerByEmail ? 'Đăng ký bằng email' : 'Đăng ký bằng số điện thoại'}
                                            </Link>
                                        </div>
                                        <div className={cx('form-login')}>
                                            {registerByEmail ? (
                                                <PhoneRegister
                                                    handleClose={handleClose}
                                                    day={day}
                                                    month={month}
                                                    year={year}
                                                />
                                            ) : (
                                                <EmailRegister
                                                    handleClose={handleClose}
                                                    day={day}
                                                    month={month}
                                                    year={year}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className={cx('description')} style={{ border: 'none' }}>
                                    Bằng cách tiếp tục, bạn đồng ý với{' '}
                                    <Link className={cx('link')}>Điều khoản Sử dụng</Link> của TikTok và xác nhận rằng
                                    bạn đã đọc hiểu <Link className={cx('link')}>Chính sách Quyền riêng tư</Link> của
                                    TikTok.
                                </div>
                                <div className={cx('changeMainForm')}>
                                    <span>Bạn không có tài khoản?</span>
                                    <button className={cx('changeMainForm-btn')} onClick={handleChangeForm}>
                                        Đăng nhập
                                    </button>
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default memo(Login);
