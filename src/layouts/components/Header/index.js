import classNames from 'classnames/bind';
import style from './Header.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEarthAmericas,
    faCircleQuestion,
    faKeyboard,
    faEllipsisVertical,
    faCloudArrowUp,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { LetterIcon, MessageIcon } from '~/components/Icon';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAmericas} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 1,
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 2,
                    title: 'Vietnamese',
                    // children: {
                    //     title: 'Language',
                    //     data: [
                    //         {
                    //             code: 2,
                    //             title: 'Vietnamese 1',
                    //         }
                    //     ]
                    // },
                },
                {
                    type: 'Language',
                    code: 3,
                    title: 'Japanese',
                },
                {
                    type: 'Language',
                    code: 4,
                    title: 'Chinese',
                }
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shotcuts',
    },
];
const cx = classNames.bind(style);

function Header() {
    const currentUser = true;

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'Language':
                //handle change language
                break;
            default:
                break;
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@LuniuLun',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="TikTok"></img>
                    </Link>
                </div>

                {/* search */}
                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy>
                            <Tippy
                                content={<span style={{ transform: 'translate3d(1188px, 56px, 0)' }}>Message</span>}
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                content={<span style={{ transform: 'translate3d(1188px, 56px, 0)' }}>Mail</span>}
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <span className={cx('quantity-info')}>12</span>
                                    <LetterIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/328691342_503572025047404_1326164334917991130_n.jpg?_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6goNa8TPB7EAX9rXy_Z&_nc_oc=AQlr78d2Qmfj8NP1tBm66oyBP_AHig2pLyo-tSksLyJ-hkZBrF3RJ9zVtdM2VmK8qZM5f404SYi1R5bQ9QGA5YnL&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBd-RtV3IqfnD_bCIsy3u35OOpx0iioRw4loyxd6MtCQQ&oe=64B1ED49"
                                className={cx('user-avatar')}
                                alt="LuniuLun"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
