import classNames from 'classnames/bind';
import style from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {
    FaceIcon,
    GoogleIcon,
    InstagramIcon,
    KakaoTalkIcon,
    LineIcon,
    QRCode,
    TwitterICon,
    UserIcon,
} from '~/components/Icon';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { memo } from 'react';
import { useState } from 'react';
import images from '~/assets/images';
import EmailLogin from './Email_Phone_ID/email';
import PhoneLogin from './Email_Phone_ID/phone';

const cx = classNames.bind(style);
function Login({ isVisible, onClose, onSubmitLogin }) {
    const [loginByQR, setLoginByQR] = useState(false);
    const [loginByPhone, setLoginByPhone] = useState(false);
    const [loginByEmail, setLoginByEmail] = useState(true);
    const [login, setLogin] = useState(false);

    const handleClose = () => {
        onClose(false);
        setLogin(false);
        setLoginByQR(false);
        setLoginByPhone(false);
    };

    const handleLoginQR = () => {
        setLogin(true);
        setLoginByQR(true);
    };

    const handleLoginPhone = () => {
        setLogin(true);
        setLoginByPhone(true);
    };

    //login bang email hoac la sdt
    const handleChange = () => {
        setLoginByEmail(!loginByEmail);
    };

    //dau lui
    const handleBack = () => {
        setLogin(false);
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
                {!login ? (
                    <>
                        <div className={cx('login')}>
                            <h1 className={cx('header')}>Đăng nhập vào TikTok</h1>
                            <div className={cx('login-list')}>
                                <button className={cx('login-btn')} onClick={handleLoginQR}>
                                    <div className={cx('content')}>
                                        <QRCode className={cx('logo')} />
                                        <span className={cx('describe')}>Sử dụng mã QR</span>
                                    </div>
                                </button>
                                <button className={cx('login-btn')} onClick={handleLoginPhone}>
                                    <div className={cx('content')}>
                                        <UserIcon className={cx('logo')} />
                                        <span className={cx('describe')}>Số điện thoại / Email / TikTok ID</span>
                                    </div>
                                </button>
                                <Link className={cx('login-link')}>
                                    <div className={cx('content')}>
                                        <FaceIcon className={cx('logo')} />
                                        <span className={cx('describe')}>Tiếp tục với Facebook</span>
                                    </div>
                                </Link>
                                <Link className={cx('login-link')}>
                                    <div className={cx('content')}>
                                        <GoogleIcon className={cx('logo')} />
                                        <span className={cx('describe')}>Tiếp tục với Google</span>
                                    </div>
                                </Link>
                                <Link className={cx('login-link')}>
                                    <div className={cx('content')}>
                                        <TwitterICon className={cx('logo')} />
                                        <span className={cx('describe')}>Tiếp tục với Twitter</span>
                                    </div>
                                </Link>
                                <Link className={cx('login-link')}>
                                    <div className={cx('content')}>
                                        <LineIcon className={cx('logo')} />
                                        <span className={cx('describe')}>Tiếp tục với LINE</span>
                                    </div>
                                </Link>
                                <Link className={cx('login-link')}>
                                    <div className={cx('content')}>
                                        <KakaoTalkIcon className={cx('logo')} />
                                        <span className={cx('describe')}>Tiếp tục với KakaoTalk</span>
                                    </div>
                                </Link>
                                <Link className={cx('login-link')}>
                                    <div className={cx('content')}>
                                        <FontAwesomeIcon icon={faApple} className={cx('logo')} />
                                        <span className={cx('describe')}>Tiếp tục với Apple</span>
                                    </div>
                                </Link>
                                <Link className={cx('login-link')}>
                                    <div className={cx('content')}>
                                        <InstagramIcon className={cx('logo')} />
                                        <span className={cx('describe')}>Tiếp tục với Instagram</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className={cx('description')}>
                            Bằng cách tiếp tục, bạn đồng ý với <Link className={cx('link')}>Điều khoản Sử dụng</Link>{' '}
                            của TikTok và xác nhận rằng bạn đã đọc hiểu{' '}
                            <Link className={cx('link')}>Chính sách Quyền riêng tư</Link> của TikTok.
                        </div>
                        <div className={cx('register')}>
                            <span>Bạn không có tài khoản?</span>
                            <Link className={cx('link-register')}>Đăng kí</Link>
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
                                <div className={cx('register')}>
                                    <span>Bạn không có tài khoản?</span>
                                    <Link className={cx('link-register')}>Đăng kí</Link>
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
                                            <Link hrefLang="#" className={cx('change')} onClick={handleChange}>
                                                {loginByEmail
                                                    ? 'Đăng nhập bằng email hoặc TikTok ID'
                                                    : 'Đăng nhập bằng số điện thoại'}
                                            </Link>
                                        </div>
                                        <div className={cx('form-login')}>
                                            {loginByEmail ? (
                                                <PhoneLogin onSubmitLogin={onSubmitLogin}/>
                                            ) : (
                                                <EmailLogin onSubmitLogin={onSubmitLogin}/>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('register')}>
                                    <span>Bạn không có tài khoản?</span>
                                    <Link className={cx('link-register')}>Đăng kí</Link>
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
