import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faEarthAmericas,
    faCircleQuestion,
    faKeyboard,
    faMagnifyingGlass,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

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
                },
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
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const temp = setTimeout(() => {
            setSearchResult([]);
        }, 0);
        return () => {
            clearTimeout(temp);
        };
    }, []);

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch(menuItem.type) {
            case 'Language':
                //handle change language
                break;
            default:
                break;
        }
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok"></img>
                </div>

                <Tippy
                    interactive //co the click
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            {/* clear */}
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* loading */}
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            {/* icon search */}
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('action')}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>

                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
