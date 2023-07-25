import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCircleCheck, faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { memo, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from '../SuggestedAccount/AccountPreview';
import { Wrapper as PopperWrapper } from '../Popper';

const cx = classNames.bind(styles);

function Video({ data }) {
    const [clickLove, setClickLove] = useState(false);
    const [clickSave, setClickSave] = useState(false);
    const handleClickLove = () => {
        setClickLove(!clickLove);
    };

    const handleClickSave = () => {
        setClickSave(!clickSave);
    };

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview src={data.users.avatar} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div className={cx('wrapper')}>
            <Link className={cx('avatar')}>
                <Tippy interactive delay={[800, 0]} placement="bottom-end" render={renderPreview}>
                    <img src={data.users.avatar} alt="" className={cx('image')}></img>
                </Tippy>
            </Link>
            <div className={cx('container')}>
                <Tippy interactive delay={[800, 0]} offset={[-100, 0]} placement="bottom-end" render={renderPreview}>
                    <Link className={cx('user')}>
                        <h3 className={cx('nickname')}>{data.users.nick_name}</h3>
                        {true && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                        <div className={cx('full-name')}>{data.users.full_name}</div>
                    </Link>
                </Tippy>
                <div className={cx('content')}>
                    <div className={cx('desription')}>{data.desription}</div>
                    {data.tags &&
                        data.tags.match(/#[^#]+/g).map((result, index) => {
                            return (
                                <Link href="#" alt="" className={cx('link')}>
                                    {result}
                                </Link>
                            );
                        })}
                </div>
                <div className={cx('music')}>
                    <div className={cx('icon-music')}>
                        <FontAwesomeIcon icon={faMusic} />
                    </div>
                    <Link className={cx('link-music')}>{data.music}</Link>
                </div>
                <Button small outline className={cx('btn-follow')}>
                    Follow
                </Button>
                <div className={cx('video-container')}>
                    <ReactPlayer
                        className={cx('video')}
                        width={321}
                        height={573}
                        url={data.url}
                        controls={true}
                    />
                    <div className={cx('interact')}>
                        <span className={cx('wrapper-icon')} onClick={handleClickLove}>
                            <FontAwesomeIcon
                                className={cx('icon', {
                                    'active-love': clickLove,
                                })}
                                tabindex="0"
                                icon={faHeart}
                            />
                        </span>
                        <span className={cx('number-interact')}>{data.loveCount}</span>
                        <span className={cx('wrapper-icon')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faCommentDots} />
                        </span>
                        <span className={cx('number-interact')}>{data.commentCount}</span>
                        <span className={cx('wrapper-icon')} onClick={handleClickSave}>
                            <FontAwesomeIcon
                                className={cx('icon', {
                                    'active-save': clickSave,
                                })}
                                tabindex="0"
                                icon={faBookmark}
                            />
                        </span>
                        <span className={cx('number-interact')}>{data.saveCount}</span>
                        <span className={cx('wrapper-icon')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faShare} />
                        </span>
                        <span className={cx('number-interact')}>{data.shareCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Video);
