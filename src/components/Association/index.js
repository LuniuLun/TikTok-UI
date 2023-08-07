import classNames from 'classnames/bind';
import style from './modal.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { FaceIcon, GoogleIcon, InstagramIcon, KakaoTalkIcon, LineIcon, TwitterICon } from '../Icon';

const cx = classNames.bind(style);
function Association() {
    return (
        <>
            <div className={cx('wrapper')}>
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
        </>
    );
}

export default Association;
