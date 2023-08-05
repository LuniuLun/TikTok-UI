import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeIconActive,
    UserGroupIconActive,
    LiveIconActive,
    ExploreIcon,
    ExploreIconActive,
} from '~/components/Icon';
import SuggestedAccount from '~/components/SuggestedAccount';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Login from '../Modal/Login';
import { useRef } from 'react';

const cx = classNames.bind(style);

function Sidebar({login = false}) {
    // const [login, setLogin] = useState(false);
    const [openLogin, setOpenLogin] =useState(false);
    const ref = useRef();

    const handleClick = () => {
        setOpenLogin(true);
        ref.current.style.zIndex = 11;
    }
    const handleClose = value => {
        setOpenLogin(value);
        ref.current.style.zIndex = 1;
    }
    return (
        <aside className={cx('wrapper')} ref={ref}>
            <Menu className={cx('menu')}>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupIconActive />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreIconActive />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />} />
                {login ? (
                    <div>
                        <SuggestedAccount key="suggested-accounts" lable="Suggested accounts" />
                        <SuggestedAccount key="following-accounts" lable="Following accounts" />
                    </div>
                ) : (
                    <>
                        <div className={cx('login')}>
                            <span className={cx('description')}>
                                Log in to follow creators, like videos, and view comments.
                            </span>
                            <Button large outline className={cx('btn-login')} onClick={handleClick}>
                                Log in
                            </Button>
                        </div>
                        <div className={cx('help')}>
                            <div className={cx('container')}>
                                <Link className={cx('link')} hrefLang='#'>About</Link>
                                <Link className={cx('link')} hrefLang='#'>Newsroom</Link>
                                <Link className={cx('link')} hrefLang='#'>Contact</Link>
                                <Link className={cx('link')} hrefLang='#'>Careers</Link>
                                <Link className={cx('link')} hrefLang='#'>ByteDance</Link>
                            </div>
                            <div className={cx('container')}>
                                <Link className={cx('link')} hrefLang='#'>TikTok for Good</Link>
                                <Link className={cx('link')} hrefLang='#'>Advertise</Link>
                                <Link className={cx('link')} hrefLang='#'>Developers</Link>
                                <Link className={cx('link')} hrefLang='#'>Transparency</Link>
                                <Link className={cx('link')} hrefLang='#'>Tiktok Rewards</Link>
                                <Link className={cx('link')} hrefLang='#'>Tiktok Embeds</Link>
                            </div>
                            <div className={cx('container')}>
                                <Link className={cx('link')} hrefLang='#'>Help</Link>
                                <Link className={cx('link')} hrefLang='#'>Safety</Link>
                                <Link className={cx('link')} hrefLang='#'>Terms</Link>
                                <Link className={cx('link')} hrefLang='#'>Privacy</Link>
                                <Link className={cx('link')} hrefLang='#'>Creator Portal</Link>
                                <Link className={cx('link')} hrefLang='#'>Community Gildelines</Link>
                            </div>
                            <span>2023 TikTok</span>
                        </div>
                    </>
                )}
            </Menu>
            <Login isVisible={openLogin} onClose={handleClose} />
        </aside>
    );
}

export default Sidebar;
